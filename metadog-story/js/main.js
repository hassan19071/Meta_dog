const allImages = document.querySelectorAll(".imgs img");
const parent = document.querySelectorAll(".imgs .img");
let hoverImages = ["metadog-story/imgs/note1_hov.png","metadog-story/imgs/note2_hov.png","metadog-story/imgs/note3_hov.png","metadog-story/imgs/note4_hov.png","metadog-story/imgs/form1.png","metadog-story/imgs/form2.png","metadog-story/imgs/form3.png","metadog-story/imgs/form4.png","metadog-story/imgs/form5.png","metadog-story/imgs/form6.png","metadog-story/imgs/form7.png","metadog-story/imgs/form8.png","metadog-story/imgs/form9.png"];
let noHoverImages = ["metadog-story/imgs/note1.png","metadog-story/imgs/note2.png","metadog-story/imgs/note3.png","metadog-story/imgs/note4.png","metadog-story/imgs/form10.png","metadog-story/imgs/form11.png","metadog-story/imgs/form12.png","metadog-story/imgs/form13.png","metadog-story/imgs/form14.png","metadog-story/imgs/form15.png","metadog-story/imgs/form16.png","metadog-story/imgs/form17.png","metadog-story/imgs/form18.png"];

for(let i =0; i < allImages.length;i++){
    parent[i].addEventListener("mouseover",()=>{
        allImages[i].src = hoverImages[i];
    });
    parent[i].addEventListener("mouseleave",()=>{
        allImages[i].src = noHoverImages[i];
    })
}

const popupConetnts = document.querySelectorAll(".popup");
const hasPopup = document.querySelectorAll(".has-popup");
const xBtn = document.querySelectorAll(".popup .content i");

for (let i =0; i < popupConetnts.length; i++){
    hasPopup[i].addEventListener("click",()=>{
        popupConetnts[i].style.visibility = "visible";
        popupConetnts[i].style.opacity = "1";
        document.body.style.overflowY = "hidden";
    });
    xBtn[i].addEventListener("click",()=>{
        popupConetnts[i].style.visibility = "hidden";
        popupConetnts[i].style.opacity = "0";
        document.body.style.overflowY = "visible";
    });
}


console.log(popupConetnts.length);
