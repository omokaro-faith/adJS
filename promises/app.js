import loadImage from './loadImage';

let addImg = (src) => {
  let imgElement = 
    document.createElement('img');
  imgElement.src = src 
  document.body.appendChild(imgElement);
}

Promise.all([
  loadImage('images/Cat-1.jpeg'),
  loadImage('images/Cat-2.jpg'),
  loadImage('images/Cat-3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch(error => (console.log(`output ${error}`)));