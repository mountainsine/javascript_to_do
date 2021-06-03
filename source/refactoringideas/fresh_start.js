///fresh_start
let tasks = '';
console.log(tasks);
var tag_id = document.getElementById('myRenderDiv');

function doYouGotAnyTaskstoDo(tasks) {
    if (tasks && tasks.length > 0 ) {
        tag_id.innerHTML = 'This is a literal string but generated from JS into the innerHTML via tag ID';
    } else {
        tag_id.innerHTML = '';
        console.log('you got nothing to do');
    }
    
};

window.onload = function () {

    doYouGotAnyTaskstoDo(tasks);
}