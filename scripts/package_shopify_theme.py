import os
import zipfile

source_dir = 'shopify-theme'
zip_path = 'libas-editorial-shopify-theme.zip'

if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(source_dir):
        for f in sorted(files):
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, source_dir).replace('\\', '/')
            zf.write(full_path, rel_path)

print(f"Theme successfully packaged into {zip_path} ({os.path.getsize(zip_path)} bytes)")
