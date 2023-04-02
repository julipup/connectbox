import os, shutil

folder = "../static"
do_not_delete = [".gitignore"]

for item in os.listdir(folder):
    item_path = os.path.join(folder, item)
    if item not in do_not_delete:
        shutil.rmtree(item_path)
