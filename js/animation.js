let navheader =document.getElementById('header');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 200){
        navheader.classList.add('tofixed');
    }
    else{
        navheader.classList.remove('tofixed');
    }
})
