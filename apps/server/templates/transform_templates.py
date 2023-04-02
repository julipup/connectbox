import os, shutil

source = "generated"
destination = "../static"

# Copying everything except .html files to flask's static folder
for item in os.listdir(source):
    if item.endswith(".html"):
        continue
    
    source_path = os.path.join(source, item)
    destination_path = os.path.join(destination, item)
    if os.path.isdir(source_path):
        shutil.copytree(source_path, destination_path)
    else:
        shutil.copy2(source_path, destination_path)