const addBtn = document.getElementById('add-btn')
const item = document.getElementById('item')
const deleteBtn = document.getElementById('del-btn')
let list = []

addBtn.addEventListener('click', ()=>{
    let input = document.getElementById('input').value //get input value
    list.push(input) //push input value into items array
    
    item.innerHTML = list.map((listItem, index) => `<div class='list-item' id=${index}>${listItem} <button onclick='removeItem(${index})' id='del-btn'>X</button></div>`).join('') // map list and use join remove comma
    //console.log(list)
    document.getElementById('input').value = ''
})

function removeItem(index){
    list.splice(index, 1)  //remove 1 item at the index of the clicked item
    
    //display new list
    item.innerHTML = list.map((listItem, index) => `<div class='list-item' id=${index}>${listItem} <button onclick='removeItem(${index})' id='del-btn'>X</button></div>`).join('')
}




