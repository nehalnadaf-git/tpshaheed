import os, re

src_dir = 'src'
patterns = [
    r'["\'/]([a-zA-Z0-9_/.-]+\.(?:png|jpe?g|webp|gif|avif))',
]

found = {}
for root, dirs, files in os.walk(src_dir):
    for fname in files:
        if not fname.endswith(('.tsx', '.ts', '.css', '.js')):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        for pat in patterns:
            for m in re.finditer(pat, content):
                img = m.group(1)
                # Only local paths (no http)
                if img.startswith('/') or img.startswith('public/'):
                    if img not in found:
                        found[img] = []
                    found[img].append(fpath)

print('=== LOCAL IMAGE REFERENCES IN SOURCE CODE ===')
for img, refs in sorted(found.items()):
    unique_refs = list(set(refs))
    print(f'  {img}')
    for r in unique_refs:
        print(f'    <- {r}')
