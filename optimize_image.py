from PIL import Image
from resizeimage import resizeimage

fd_img = open('views/images/pizzeria.jpg', 'r')
img = Image.open(fd_img)
img = resizeimage.resize_thumbnail(img, [100, 75])
img.save('views/images/pizzeria_min.jpg', img.format)
fd_img.close()

fd_img = open('views/images/pizzeria.jpg', 'r')
img = Image.open(fd_img)
img = resizeimage.resize_thumbnail(img, [720, 540])
img.save('views/images/pizzeria_min_lg.jpg', img.format)
fd_img.close()