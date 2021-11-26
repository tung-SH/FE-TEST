/****************************
 *      CREATING FUNCTION
 */

// input
const button = document.body.querySelector('button')

button.addEventListener('click', () => {
    createItem()
})


// output
const list = document.body.querySelector('.list');
const input = document.body.querySelector('input');

function createItem() {
    let div = document.createElement('div');
    div.innerHTML = input.value;
    // console.log(input.value);
    list.append(div);
    input.value = "";
}

