let jimp = require('jimp')

async function resizeImage() {
  try {
    let imgData = await jimp.read('original.jpg')
    imgData.resize(3000, jimp.AUTO, jimp.RESIZE_BEZIER)
    imgData.write('RESIZE_BEZIER.png')
  } catch(e) {
    console.error("Couldn't read/manipulate that image!", e)
  }
}

resizeImage()