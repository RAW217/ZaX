from rembg import remove
from PIL import Image
print('Processing...')
input_image = Image.open('public/hero-products-raw.jpg')
output_image = remove(input_image)
output_image.save('public/hero-products-transparent.png')
print('Done')
