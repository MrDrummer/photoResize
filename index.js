let jimp = require('jimp')

async function resizeImage(type) {
  try {
    let imgData = await jimp.read('original.jpg')
    imgData.resize(3000, jimp.AUTO, jimp[type])
    imgData.write(type + '.png')
  } catch(e) {
    console.error("Couldn't read/manipulate that image!", e)
  }
}

let methods = [
  "RESIZE_NEAREST_NEIGHBOR",
  "RESIZE_BILINEAR",
  "RESIZE_BICUBIC",
  "RESIZE_HERMITE",
  "RESIZE_BEZIER"
]
for (let method of methods) {
  resizeImage(method)
}