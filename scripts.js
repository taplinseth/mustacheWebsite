var toggle = document.getElementById('toggle');

button.onclick = function() {
    var content= document.getElementById('content');
    if (content.style.display !== 'none') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
};