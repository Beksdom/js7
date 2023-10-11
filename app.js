let red = document.querySelectorAll('.red');
for (let i = 0; i < red.length; i++) {
    red[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'red';
    });
}
let blue = document.querySelectorAll('.blue');
for (let i = 0; i < blue.length; i++) {
    blue[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'blue';
    });
}
let remove = document.querySelectorAll('.remove');
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function() {
        document.body.style.backgroundColor = 'initial';
    });
}

//  ______
// /      \
//|   ☐☐  |
//|_🚪_____| ←это домик