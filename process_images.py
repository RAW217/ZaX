from rembg import remove
from PIL import Image

images = ['milk', 'oil', 'sugar', 'flour', 'pasta', 'yogurt', 'tomatoes', 'biscuits']
for img in images:
    try:
        print(f'Processing {img}...')
        input_image = Image.open(f'public/{img}.jpg')
        output_image = remove(input_image)
        output_image.save(f'public/{img}-bg.png')
    except Exception as e:
        print(f'Failed {img}: {e}')
print('Done')
