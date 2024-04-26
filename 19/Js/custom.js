let $ =document
let tabs = $.querySelectorAll('.acardion-tab')
let contents = $.querySelectorAll('.content')

console.log(tabs);

tabs.forEach((tab,index) => {
    tab.addEventListener('click',()=>{
        contents.forEach(content=>{
            content.classList.remove('active')
        })
        tabs.forEach(t=>{
            t.children[0].style.setProperty("--valOpacitiy","1")
        }) 
    
        contents[index].classList.add('active')
        tabs[index].children[0].style.setProperty("--valOpacitiy","0") 
    })
    
});