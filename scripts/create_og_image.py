import os
from PIL import Image

src_path = 'Logo.jpg'
logo = Image.open(src_path).convert('RGB')

# Create standard 1200x630 Open Graph Canvas (1.91:1 ratio)
og_w, og_h = 1200, 630
og_img = Image.new('RGB', (og_w, og_h), (255, 255, 255))

# Scale logo to 500px height centered
max_h = 500
scale = max_h / logo.height
new_w = int(logo.width * scale)
new_h = int(logo.height * scale)

resized_logo = logo.resize((new_w, new_h), Image.LANCZOS)

# Position centered
pos_x = (og_w - new_w) // 2
pos_y = (og_h - new_h) // 2

og_img.paste(resized_logo, (pos_x, pos_y))

# Save output files in public/
png_out = 'public/og-image.png'
jpg_out = 'public/og-image.jpg'

og_img.save(png_out, 'PNG', quality=95)
og_img.save(jpg_out, 'JPEG', quality=90)

print(f"Generated {png_out} ({os.path.getsize(png_out)//1024} KB)")
print(f"Generated {jpg_out} ({os.path.getsize(jpg_out)//1024} KB)")
