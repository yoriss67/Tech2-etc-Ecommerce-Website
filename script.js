let bar = document.getElementById('bar');
let navbar = document.getElementById('navbar');
let close = document.getElementById('close');
let lgBag = document.getElementById('lg-bag');

bar.addEventListener('click', function() {
    navbar.classList.add('active');
})

// active追加されてもとに戻るには？
close.addEventListener('click', function() {
    navbar.classList.remove('active');
})



// 答え
if(bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}
// -----------

// pr2 27:00

// 複数
//   https://kawauso-29.com/js/imgchange/
const MainImg = document.getElementById('MainImg');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


let imgList = {f1:"f1.jpg", f2:"f2.jpg", f3:"f3.jpg", f4:"f4.jpg"};
// let imgSrc = `./img/products/${imgList["f" + num]}`;
// ./img/products/f1.jpg"


  // let imgList = {image1:"./images/img1.jpg", image2:"./images/img2.jpg", image3:"./images/img3.jpg"};
//   let num = 1;
//   MainImg.addEventListener('click', function(){
//     num++;
//     　　　　　　　　　　　　　　　　　　// 🤔↓これはimglistのkeyのこと？
//     let imgPath = `./img/products/${imgList["f" + num]}`;
//     document.querySelector('#MainImg').src = imgPath;
//     if (num === 4) {
//         // 🤔なんで  let num = 1;と同じ1にしないんだろう
//       num = 0;
//     } 
//   });

//   img1.addEventListener('click', function() {
//     document.querySelector('#MainImg').src = imgPath;

//   })

// 答え
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    MainImg.src = smallImg[3].src;
}


// 🤔clickされたら買い物かご表示


const number2 = document.getElementById("number2");
const button2 = document.getElementById("button2");
const span2 = document.getElementById("span2");
const showcase = document.getElementById("showcase");
const displayNone = document.getElementsByClassName('display-none');

button2.onclick = function() {
    showcase.classList.add('popup')
    span2.textContent = number2.value;
    showcase.classList.remove('display-none');
    setTimeout(() => {
        showcase.classList.remove('popup'),
        showcase.classList.add('display-none')},
        800)
}



