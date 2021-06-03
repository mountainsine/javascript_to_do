///fresh_start
let tasks = '1';
console.log(tasks);
var tag_id = document.getElementById('myRenderDiv');

function doYouGotAnyTaskstoDo(tasks) {
    if (tasks) {
        tag_id.innerHTML = 'This is a literal string but generated from JS into the innerHTML via tag ID';
    } else {
        console.log('you got nothing to do');
    }
    
};

window.onload = function () {

    doYouGotAnyTaskstoDo(tasks);
}