const monthE1=document.querySelector(".date h1");
const fulldatee1=document.querySelector(".date p");
const days=document.querySelector(".days");
const kkk=new Date().getFullYear();
const monthsdd=new Date().getMonth();
console.log(monthsdd);

console.log(kkk)

const lastday=new Date(kkk,monthsdd+1,0).getDate();
const firstday=new Date(kkk,monthsdd,1).getDay() -1;
console.log(firstday)


console.log(lastday)



const months= [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "agust",

];
console.log(months);
console.log(months[monthsdd]);
monthE1.innerText=months[monthsdd];
fulldatee1.innerText=new Date().toDateString();
let day ="";
for(let i=firstday;i>0;--i){
    day +=`<div class = empty></div>`;
}
for(let i=1;i<=lastday;i++) {
    if(i==new Date().getDate()){
        day +=`<div class= today > ${i} </div>`;
    }
    day +=`<div> ${i} </div>`;


}
days.innerHTML=day;



