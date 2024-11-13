const showbtn = document.querySelector('.button')
const horizontal = document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')
const toastcontainer = document.querySelector('.toastcontainer')
const toasttype = document.querySelector('#toasttype')
const toastmessage = document.querySelector('#toastmessage')

showbtn.addEventListener('click', ()=>{
    const newtoast = document.createElement('div')
    newtoast.classList.add('toast')
    newtoast.classList.add(toasttype.value)
    newtoast.innerText= '${toastmessage.value}'
    toastcontainer.append(newtoast)

    if(horizontal.value === 'right'){
        toastcontainer.classList.add('right')
    }
    else{
        toastcontainer.classList.remove('right')
    }
    if(vertical.value === 'bottom'){
        toastcontainer.classList.add('bottom')
    }
    else{
        toastcontainer.classList.remove('bottom')
    }
    

})