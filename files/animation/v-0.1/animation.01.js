var foo = null; // object

function doMove() {
    foo.style.left = parseInt(foo.style.left)+1+'px';
    setTimeout(doMove,20); // call doMove in 20msec
}

function init() {
    foo = document.getElementById('fooObject'); // get the "foo" object
    foo.style.left  = '0px'; // set its initial position to 0px
     doMove(); // start animating
}


window.onload = init;

