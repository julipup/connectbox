import os, shutil

source = "generated"
destination = "../static"

# Copying everything except .html files to flask's static folder
for item in os.listdir(source):
    if item.endswith(".html") or item == "static":
        continue
    
    source_path = os.path.join(source, item)
    destination_path = os.path.join(destination, item)

    shutil.move(source_path, destination_path)

# Copying generated static folder
for item in os.listdir(os.path.join(source, "static")):
    source_path = os.path.join(source, "static", item) 
    destination_path = os.path.join(destination, item)

    shutil.move(source_path, destination_path)