/*******************************
 * 
 *      CREATING ITEMS 
 * 
 */
const button = document.body.querySelector('button')

button.addEventListener('click', createItem)



const input = document.body.querySelector('form input')
const list = document.body.querySelector('ul.list')

function createItem() {
    let x = createDiv(input.value)
    x.append( createImage('x-solid.svg', 'x-icon') )
    list.append(x);
    
    // restart the input
    input.value = '';

    interact('create item')
}
function createDiv(text) {
    let x = document.createElement('div');
    x.textContent = text;
     
    interact('create div')

    return x;
}
function createImage(source, className) {
    let x = document.createElement('img')
    x.src = source
    x.classList.add(className)

    interact('create image')

    return x;
}


/****************************************
 * 
 *    MAKR COMPLETE &&  DELETE ITEMS 
 * 
 */
list.addEventListener('click', (e) => {
    if      (e.target.tagName == 'DIV')   markComplete(e)
    else if (e.target.tagName == 'IMG')   deleteItem(e)
})


function markComplete(e) {
    e.target.remove()

    interact('mark complete')
}
function deleteItem(e) {
    e.target.parentElement.remove()

    interact('delete item')
}









function interact(name) {
    // console.log('😋 random interact chạy ổn à nha')

    let x = Math.floor( Math.random() * 3 )
    // bao nhiêu trường hợp lặp thì con người ko để ý đên 
    // đó là máy móc nữa        -> ni sẽ là câu hỏi cần đánh giá dựa trên thời gian lặp lại và số trường hợp

    if (x == 2)      console.log(`vô được hàm ${name} rồi ông 😊😊
    `);
    else if (x == 0) console.log(`hàm ${name} vô được rồi ông 😄😄 
    `)
    else             console.log(`😋 ${name} chạy ổn à nha 😄😋
    `) 
}