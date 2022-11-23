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

