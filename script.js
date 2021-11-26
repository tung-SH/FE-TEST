/****************************
 *      CREATING FUNCTION
 */

// input
const input = document.body.querySelector('input');

input.addEventListener('input', (e) => {
    createItem(e)
})


// output
const list = document.body.querySelector('.list');

function createItem(e) {
    let li = document.createElement('li');
    li.innerHTML = e.target.value;

    list.append(li);
}

