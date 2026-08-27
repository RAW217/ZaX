from rembg import remove
from PIL import Image
print('Processing high-res...')
input_image = Image.open('public/hero-products-highres-raw.jpg')
output_image = remove(input_image)
output_image.save('public/hero-products-highres.png')
print('Done')
