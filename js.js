const toggle=document.querySelector(".toggle");
const togglee=document.querySelector(".togglee");
const list=document.querySelector(".list");
const body=document.querySelector("body")
const p=document.querySelector(".title-right p")
const h3=document.querySelector(".title-right h3")
const hero=document.querySelector(".hero");
// random bg
const color = ['blue-light-beams_1160-943.avif', 'bg2.webp', 'bg1.avif'];
const number = Math.floor(Math.random() * color.length);

window.onload = function() {
    hero.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + color[number] + ')';
    hero.style.backgroundPosition="center";
    hero.style.backgroundRepeat="no-repeat";
    hero.style.backgroundSize="cover";
};

toggle.addEventListener("click",function(){

const check=list.classList.contains("active")
console.log(check);
if(check){
    list.classList.remove("active");
}else{
    list.classList.add("active")
}
})
togglee.addEventListener("click",function(){
const checkb=togglee.classList.contains("switch");
if(checkb){
    togglee.classList.remove("switch");
}else{
    togglee.classList.add("switch")
}
body.classList.toggle("mode");
p.classList.toggle("mode");
h3.classList.toggle("mode");
position.classList.toggle("mode");
para.classList.toggle("mode")

})



const people=[

{
    pname:"ktri",
    position:"IT Manager",
    imgSaruce:"tri1.jpg",
    paragrapht:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?"
},
{
    pname:"Mony",
    position:"IT Manager",
    imgSaruce:"tri3.jpg",
    paragrapht:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?"
},
{
    pname:"Phirun",
    position:"Web Developer",
    imgSaruce:"tri4.jpg",
    paragrapht:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?"
}
,{
    pname:"Raksa",
    position:"Designer",
    imgSaruce:"tri5.jpg",
    paragrapht:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?"
}


]
const img=document.querySelector(".img >img");
const pname=document.querySelector(" .text-p >h3");
const position=document.querySelector("span");
const para=document.querySelector("p");
const btnleft=document.querySelector(".left");
const btnright=document.querySelector(".right");
const carad=document.querySelector(".card-p");



window.addEventListener("DOMContentLoaded",function(){
const randomNumber=Math.floor(Math.random()*people.length);
show(randomNumber);
})




let counter=0;
show=function(p){
    const person=people[p];
    img.src=person.imgSaruce;
    pname.textContent=person.pname;
    position.textContent=person.position;
    para.textContent=person.paragrapht;

}
console.dir(pname)


btnright.addEventListener("click",function(){
        if(counter == people.length-1 ){
            counter=0;
        }else{
            counter++;
        }
        show(counter);

})
btnleft.addEventListener("click",function(){
if(counter==0){
    counter=people.length-1
}else{
    counter--;
}
show(counter);



})
