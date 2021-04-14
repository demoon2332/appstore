// hover nav-links
// const a = document.getElementsByClassName('test');
// for(var i=0;i<a.length;i++){
//     a[i].onmouseover = function() {this.style.color = 'rgb(66, 149, 218)';this.style.fontWeight = 'bold'};
//     a[i].onmouseout = function() {this.style.color = 'rgb(219, 215, 215)';this.style.fontWeight = 'normal'};

//
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li ');
    
    // toggle nav
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) =>{
            console.log(link);
            if(link.style.animation){
                link.style.animation= '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.3}s`;        
            }
        });
        burger.classList.toggle('toggle');
    });
    // animate link
    
    // test
}
let test = document.getElementsByTagName('body')[0];
test.onscroll = () => {
    let nav = document.querySelector('nav');
    if(window.scrollY > 50){
        nav.style.backgroundColor = "rgb(85, 192, 235)";
    }
    else{
        nav.style.backgroundColor = "";
    }

};
navSlide();

/// logo on click
document.querySelector('.logo').addEventListener("click",()=>{

});