from PIL import Image
import os
import glob
import json

valueMap = [[0, 0, 0], 
			[255, 255, 255]]

def compareArrays ( val_1, val_2):
	for c in range(3):
		if val_1[c] != val_2[c]:
			return False
	return True

for file in glob.glob("*.bmp"):
	i = Image.open(file)
	pixels = i.load()
	width, height = i.size

	all_pixels = []
	
	for x in range(width):
		row = []
		for y in range(height):
			cpixel = pixels[x, y]
			
			row.append(cpixel)
			
		all_pixels.append(row)

	#out_file = open(file[:-3])
	out_file = open(file[:-4]+".json", "w")
	out_file.write(json.dumps(all_pixels))
	out_file.close()
	#print file[:-4]#json.dumps(all_pixels)

