/****************************
 *      CREATING FUNCTION
 */

// input
const input = document.body.querySelector('input');
const button = document.body.querySelector('button')

// input.addEventListener('input', (e) => {
//     createItem(e)
// })
button.addEventListener('click', () => {
    createItem()
})


// output
const list = document.body.querySelector('.list');

function createItem() {
    let div = document.createElement('div');
    div.innerHTML = input.value;
    // console.log(input.value);
    list.append(div);
}

