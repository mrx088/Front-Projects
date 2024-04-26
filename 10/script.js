let $ = document
let tabs = $.querySelectorAll('.tabs label')
let content = $.querySelectorAll('.content div')
let Tab = $.querySelector('.tabs')
let navigator = window.getComputedStyle(Tab,'::after')
console.log(navigator.left);

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(t=>{
            t.classList.remove('active')
        })

        content.forEach(c=>{
            c.classList.remove('active')
        })

        tab.classList.add('active')
        content[index].classList.add('active')

    })

})