/*****************************************************************
 *                      CREATING ITEM
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
    div.textContent = input.value;
    // console.log(input.value);
    
    let img = document.createElement('img');
    img.src = "x-solid.svg";
    img.alt = "x-icon";
    img.classList.add('x-icon')

    div.append(img);
    list.append(div);

    input.value = "";
}



/*******************************************************************
 *                        MARK COMPLETE
 * 
 */

// input
list.addEventListener('click', (e) => {
    markComplete(e)

})


// output
function markComplete(e) {
    setDone(e)
    removeItem(e)

}
function setDone(e) {
    return true

}
function removeItem(e) {
    if (e.target.tagName === 'UL') return true;
    e.target.remove();
}





/*******************************************************************
 *                       REMOVE ITEM
 * 
 * 
 */

// input 
let xIcons = document.body.getElementsByClassName('x-icon')



// output
function removeParent(i) {
    xIcons[i].parentElement.remove();

} 
// console.log(xIcons)