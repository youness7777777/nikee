
function changeimg(filename){
  let img =document.querySelector('#c3')
  img.setAttribute('src',filename)
}
// function chang(filename){
//   let img =document.querySelector('.c4')
//   img.setAttribute('src',filename)
// }
function chang(name, imgSrc, price,bgColor) {
            
            document.getElementById('shoeName').innerHTML = `${name} <br> NEW <br> SEASON`;

           
            let img = document.querySelector('.c4');
            img.setAttribute('src', imgSrc);

           
            document.getElementById('shoePrice').textContent = price;


            let container = document.querySelector('.c4');
            container.style.backgroundColor = bgColor;
            container.style.priceColor = bgColor

            let priceElement = document.getElementById('shoePrice');
            priceElement.textContent = price;
            priceElement.style.color = priceColor;
        }

