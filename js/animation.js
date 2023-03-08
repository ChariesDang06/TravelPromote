let items =document.querySelectorAll('.item');
let navheader =document.getElementById('header');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 200){
        navheader.classList.add('tofixed');
    }
    else{
        navheader.classList.remove('tofixed');
    }
    items.forEach(item =>{
        if(item.offsetTop - window.scrollY <400){
            item.classList.add('actives');
        }
    })
})
