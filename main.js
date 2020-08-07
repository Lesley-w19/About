const images = [{
    image:"./img/log-home.jpeg"
},
{
    image:"./img/contemporary.jpeg"
},
{
    image:"./img/modern.jpeg"
},
{
    image:"./img/farmhouse.jpeg"
}];

const btns = document.querySelectorAll(".tab-btn");
const contentInfo = document.querySelector(".content");
const abouts = document.querySelectorAll(".content-about");

contentInfo.addEventListener('click', (e)=>{
    const name = e.target.dataset.id;
    btns.forEach((btn)=>{
        if(name){
            btn.classList.remove("active");
            e.target.classList.add("active");
        }

        abouts.forEach((article)=>{
            article.classList.remove("active");
        })
        const info = document.getElementById(name);
        info.classList.add("active");
        })  
    
});