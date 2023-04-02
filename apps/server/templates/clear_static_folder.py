import os, shutil

folder = "../static"
do_not_delete = [".gitignore"]

for item in os.listdir(folder):
    item_path = os.path.join(folder, item)
    if item not in do_not_delete:
        if os.path.isdir(item_path):
            shutil.rmtree(item_path)
        else:
            os.remove(item_path)
