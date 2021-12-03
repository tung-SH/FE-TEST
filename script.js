/*****************************************************************
 *             CREATING ITEM && REMOVE ITEM 
 * 
 */

// input
const button = document.body.querySelector('button')

button.addEventListener('click', createItem)



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
    img.addEventListener('click', (e) => {
        removeParent(e)
    })

    div.append(img);
    list.append(div);

    input.value = "";
}
function removeParent(e) {
    e.target.parentElement.remove();

}


/*******************************************************************
 *                        MARK COMPLETE
 * 
 */

// input
list.addEventListener('click', (e) => {
    if (e.target.tagName == 'DIV') markComplete(e)

})


// output
const congrats = document.body.querySelector('.congrats')
function markComplete(e) {
    setDone(e)
    removeItem(e)


}
function setDone(e) {
    congrats.textContent = `Well done! You're done "${e.target.textContent}"`;
    congrats.style.visibility = "visible";
    setTimeout(function() {congrats.style.visibility = "hidden"}, 2000)

}
function removeItem(e) {
    e.target.remove();
}





