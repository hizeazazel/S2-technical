var previous = null;
var color = null;

function changebox(container_box, bgcolor){
    let box = document.getElementById(container_box);

    if (previous && previous != box) {
        previous.style.marginTop = "-900px";
        previous.style.backgroundColor = color;
    }

    previous = box;
    color = bgcolor;
    box.style.backgroundColor = "#faebd7";
    box.style.marginTop = "-20px";
}

document.getElementById('monday').addEventListener('click',function() {
    changebox('box-m', "#d5a6bd");
});

document.getElementById('tuesday').addEventListener('click',function() {
    changebox('box-t', "#b4a7d6");
});

document.getElementById('wednesday').addEventListener('click',function() {
    changebox('box-w', "#9fc5e8");
});

document.getElementById('thursday').addEventListener('click',function() {
    changebox('box-th', "#b6d7a8");
});

document.getElementById('friday').addEventListener('click',function() {
    changebox('box-f', "#a2c4c9");
});

document.getElementById('saturday').addEventListener('click',function() {
    changebox('box-s', "#f9cb9c");
});

document.getElementById('sunday').addEventListener('click',function() {
    changebox('box-su', "#ea9999");
});
