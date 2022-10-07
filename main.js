let showlist =document.querySelector(".menu")
let list =document.querySelector(".icons")
let cancel=document.querySelector(".cancel")





list.addEventListener("click",()=>{
    showlist.classList.remove("active")
    list.style.display="none";
})

cancel.addEventListener("click",()=>{
    showlist.classList.add("active")
    list.style.display="flex";
})


let section=document.querySelector(".field")
let nums =document.querySelectorAll(".box .counter-value");

let start=false;

window.onscroll=function(){
    window.onscroll = function () {
        if (this.scrollY >= section.offsetTop - 500) {
            if(!start){
            nums.forEach((num) => startCount(num))
            }
            start=true
        }
    }
}
function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(() =>{
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 2000 / goal);
}


        // let box=document.querySelector(".img-row")
        // let image=document.querySelector(".Web")
        // let imageDev=document.querySelector(".Development")
        // let img=document.querySelector(".Graphic");
        // let a=document.querySelector(".section-info .Graph")

        // a.addEventListener("click",()=>{
        //     image.style.display="none"
        //     imageDev.style.display="none"
        // })
        
