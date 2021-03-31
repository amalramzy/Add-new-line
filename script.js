let menuItem = document.querySelectorAll('#menu li') 
let headLine = document.querySelector('#text')
let btn      = document.querySelector('#zar')
let myMenu   = document.querySelector('#menu')
let counter  = 1


myMenu.addEventListener('click',selectItem)

function selectItem(n){
    if(n.target.nodeName == 'LI'){
        headLine.innerHTML = n.target.innerHTML;
   
        for( i = 0; i < menuItem.length ; i++){
            menuItem[i].classList.remove('selected')
            }
            n.target.classList.add('selected')
    }
}


btn.addEventListener('click' ,newItem)

function newItem(){

        myMenu.innerHTML += '<li>new languages ' + counter + '</li>'
        counter++;
    
}