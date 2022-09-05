const topBtn = document.querySelector(".to-top");

window.onscroll = ()=>{
    if (window.scrollY > 200){
        topBtn.classList.remove("hide");
    }else{
        topBtn.classList.add("hide");
    }
}

topBtn.addEventListener("click",()=>{
    scrollTo({
        top:0,
        behavior:"smooth"
     })
})