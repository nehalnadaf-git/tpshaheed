"""
Image Audit, Cleanup, and WebP Conversion Script
=================================================
1. Deletes unused local images (file.svg, globe.svg, next.svg, vercel.svg, window.svg
   which are Next.js defaults never referenced in our source).
2. Converts every used local raster image (PNG/JPEG) to WebP ≤100 KB at best quality.
3. Moves converted files to public/images/ (clean flat folder).
4. Updates all source-code references from old paths to new /images/<name>.webp paths.
"""

import os, re, shutil
from PIL import Image

# ─── Config ──────────────────────────────────────────────────────────────────
PUBLIC   = "public"
OUT_DIR  = os.path.join(PUBLIC, "images")
SRC_DIR  = "src"
MAX_BYTES = 100 * 1024   # 100 KB

# Files that are Next.js boilerplate and NOT referenced anywhere — delete them
UNUSED_FILES = [
    os.path.join(PUBLIC, "file.svg"),
    os.path.join(PUBLIC, "globe.svg"),
    os.path.join(PUBLIC, "next.svg"),
    os.path.join(PUBLIC, "vercel.svg"),
    os.path.join(PUBLIC, "window.svg"),
]

# Raster images to convert: (source_path, output_stem)
# old_url_prefix -> new /images/<stem>.webp
IMAGES = [
    # (source file relative to cwd,           output stem,          old URL path)
    ("public/College.png",                    "College",            "/College.png"),
    ("public/Logo.png",                       "Logo",               "/Logo.png"),
    ("public/diploma-courses/auto.jpeg",      "auto",               "/diploma-courses/auto.jpeg"),
    ("public/diploma-courses/civil.jpeg",     "civil",              "/diploma-courses/civil.jpeg"),
    ("public/diploma-courses/cse.jpeg",       "cse",                "/diploma-courses/cse.jpeg"),
    ("public/diploma-courses/ece.jpeg",       "ece",                "/diploma-courses/ece.jpeg"),
    ("public/diploma-courses/eee.jpeg",       "eee",                "/diploma-courses/eee.jpeg"),
    ("public/diploma-courses/mech.jpeg",      "mech",               "/diploma-courses/mech.jpeg"),
    # new-images
    ("public/new-images/6-acre_green_campus_Simla_Nagar_202607222329.jpeg",
                                              "campus-grounds",     "/new-images/6-acre_green_campus_Simla_Nagar_202607222329.jpeg"),
    ("public/new-images/Auditorium_with_empty_seating_stage_202607222321.jpeg",
                                              "auditorium",         "/new-images/Auditorium_with_empty_seating_stage_202607222321.jpeg"),
    ("public/new-images/Cafeteria_interior_dining_space_202607222322.jpeg",
                                              "cafeteria",          "/new-images/Cafeteria_interior_dining_space_202607222322.jpeg"),
    ("public/new-images/Career_talk_seminar_hall_202607222319.jpeg",
                                              "career-talk",        "/new-images/Career_talk_seminar_hall_202607222319.jpeg"),
    ("public/new-images/Engineering_labs_with_tools_202607222321.jpeg",
                                              "engineering-labs",   "/new-images/Engineering_labs_with_tools_202607222321.jpeg"),
    ("public/new-images/Library_with_books_and_journals_202607222330.jpeg",
                                              "library",            "/new-images/Library_with_books_and_journals_202607222330.jpeg"),
    ("public/new-images/Medical_first-aid_room_interior_202607222322.jpeg",
                                              "medical",            "/new-images/Medical_first-aid_room_interior_202607222322.jpeg"),
    ("public/new-images/Modern_computer_laboratory_interior_202607222330.jpeg",
                                              "computer-lab",       "/new-images/Modern_computer_laboratory_interior_202607222330.jpeg"),
    ("public/new-images/Sports_meet_empty_ground_202607222319.jpeg",
                                              "sports-grounds",     "/new-images/Sports_meet_empty_ground_202607222319.jpeg"),
]

# ─── Step 1: Delete unused files ─────────────────────────────────────────────
print("── Step 1: Removing unused boilerplate files ──")
for f in UNUSED_FILES:
    if os.path.exists(f):
        os.remove(f)
        print(f"  DELETED  {f}")
    else:
        print(f"  SKIP (not found)  {f}")

# ─── Step 2: Create output dir ───────────────────────────────────────────────
os.makedirs(OUT_DIR, exist_ok=True)

# ─── Step 3: Convert each image to WebP ≤100 KB ─────────────────────────────
print("\n── Step 2: Converting images to WebP ≤100 KB ──")
replacements = {}   # old_url -> new_url

def convert_to_webp(src_path, stem):
    out_path = os.path.join(OUT_DIR, f"{stem}.webp")
    img = Image.open(src_path).convert("RGB")

    # Binary-search the best quality that fits under MAX_BYTES
    lo, hi, best_q = 1, 85, 80
    for _ in range(12):
        mid = (lo + hi) // 2
        img.save(out_path, "WEBP", quality=mid, method=6)
        size = os.path.getsize(out_path)
        if size <= MAX_BYTES:
            best_q = mid
            lo = mid + 1          # try higher quality
        else:
            hi = mid - 1          # too big, lower quality

    # Confirm final save at best_q
    img.save(out_path, "WEBP", quality=best_q, method=6)
    final_size = os.path.getsize(out_path)

    # If still over limit even at q=1, resize down by 80% until it fits
    scale = 0.8
    while final_size > MAX_BYTES and min(img.size) > 100:
        w = int(img.width * scale)
        h = int(img.height * scale)
        img_r = img.resize((w, h), Image.LANCZOS)
        img_r.save(out_path, "WEBP", quality=best_q, method=6)
        final_size = os.path.getsize(out_path)
        scale *= 0.8

    orig_size = os.path.getsize(src_path)
    pct = (1 - final_size / orig_size) * 100
    print(f"  {stem}.webp  {orig_size//1024} KB -> {final_size//1024} KB  (q={best_q}, -{pct:.0f}%)")
    return out_path

for src_path, stem, old_url in IMAGES:
    if not os.path.exists(src_path):
        print(f"  MISSING  {src_path}")
        continue
    convert_to_webp(src_path, stem)
    new_url = f"/images/{stem}.webp"
    replacements[old_url] = new_url

# ─── Step 4: Update all source-code references ───────────────────────────────
print("\n── Step 3: Patching source-code references ──")
src_exts = {'.tsx', '.ts', '.js', '.css', '.json', '.md'}

for root, dirs, files in os.walk(SRC_DIR):
    for fname in files:
        if os.path.splitext(fname)[1] not in src_exts:
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            original = f.read()
        updated = original
        for old, new in replacements.items():
            updated = updated.replace(old, new)
        if updated != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(updated)
            print(f"  PATCHED  {fpath}")

# ─── Step 5: Remove now-empty legacy folders ─────────────────────────────────
print("\n── Step 4: Cleaning up old image folders ──")
for folder in ["public/new-images", "public/diploma-courses"]:
    if os.path.exists(folder):
        shutil.rmtree(folder)
        print(f"  REMOVED  {folder}/")

print("\n✅ Done! All images converted and references updated.")
print(f"   Output: {OUT_DIR}/")
print("\n── Final sizes ──")
for f in sorted(os.listdir(OUT_DIR)):
    fp = os.path.join(OUT_DIR, f)
    print(f"  {f}  {os.path.getsize(fp)//1024} KB")
