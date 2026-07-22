import os, re, shutil

# ── 1. Enumerate ALL files in public/ ────────────────────────────────────────
print("=== ALL FILES IN /public ===")
all_pub = []
for root, dirs, files in os.walk("public"):
    for f in files:
        fp = os.path.join(root, f).replace("\\", "/")
        size = os.path.getsize(fp)
        all_pub.append(fp)
        print(f"  {fp}  ({size:,} bytes / {size//1024} KB)")

# ── 2. Collect every local image reference in src/ ────────────────────────────
print()
print("=== LOCAL IMAGE REFS IN SRC ===")
found = set()
exts = r"(png|jpe?g|webp|gif|svg|ico|avif)"
pattern = re.compile(r'["\' ]/([\w\-./]+\.' + exts + r')')

for root, dirs, files in os.walk("src"):
    for fname in files:
        if not fname.endswith((".tsx", ".ts", ".js", ".css", ".json")):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        for m in pattern.finditer(content):
            found.add("/" + m.group(1))

for ref in sorted(found):
    print(f"  {ref}")

# ── 3. Cross-reference: unused files ─────────────────────────────────────────
print()
print("=== UNUSED FILES (candidates for deletion) ===")
unused = []
for fp in all_pub:
    # Normalise to URL path: strip "public" prefix
    url = "/" + fp[len("public/"):]
    if url not in found:
        print(f"  UNUSED: {fp}")
        unused.append(fp)

print()
print("=== USED FILES ===")
for fp in all_pub:
    url = "/" + fp[len("public/"):]
    if url in found:
        print(f"  USED: {fp}")
