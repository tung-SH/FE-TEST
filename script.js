/****************************
 * 
 *      CREATING ITEM
 * 
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


/*****************************
 * 
 *       MARK COMPLETE
 * 
 */

// input
const items = document.body.querySelectorAll('ul div');

console.log(items)

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        markComplete(i)
    })
}


// output 
function markComplete(i) {

    console.log(items[i])
    items[i].remove();

}