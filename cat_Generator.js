function catGenerator(){
    let image = document.createElement('image');
    let div = document.getElementsById('flex-box-cat');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}