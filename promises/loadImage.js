import 'idempotent-babel-polyfill';

const loadImage = (url) => {
  let image = new Image()
  return new Promise((resolve, reject) => {
    
    image.onload = () => {
      resolve(image);
    }

    image.onerror = () => {
      let message = `Could not load image at ${url}`

      reject(new Error(msg))
    }

    image.src = url;
  });
}

export default loadImage;