const frnds=()=>{
clickEvent=()=>{
$(".accp").click(function(){
$(this).html(".....")
setTimeout(()=>{
$(this).html("you are now friends").siblings("button").fadeOut("fast");
$(this).css({background:"none",
width:"180px"});
},Math.random()*900+300);
});
$(".del").click(function(){
$(this).html(".....")
setTimeout(()=>{
$(this).html("request removed").siblings("button").fadeOut("fast");
$(this).css({background:"none",
width:"180px"});
},Math.random()*900+300);
});
//add frinds
let add=true;
$(".add").click(function(){
$(this).html(".....")
setTimeout(()=>{
if(add==true){
add=false;
$(this).html("Cancell Request").siblings("button").fadeOut("fast");
$(this).css({background:"#ECEBF8",
width:"180px"});
}
else{
add=true;
$(this).html("add friend").siblings("button").fadeIn("fast");
$(this).css({background:"",
width:"90px"});
}
},Math.random()*900+300);
});
$(".rmv").click(function(){
$(this).parent().parent().fadeOut("slow");
});
}
let o=2;
const Fnames=["Ola John","Free Man goodness","Denis petter","Joy Love","Gavel Mavish","Memmer Julie","Petter Petter","Smart D","Favour Adamu","Philimon Johnson","Yoga D.k","Champion Guru","FilYo Ginger","X-Man vadash","Supper coder","Feel Free","Vivian Mark",'Happiness John',"Fedelis Kelvin","gorge MIra"];
const imgs=["https://i.imgur.com/aVMfsM1.jpg", "https://i.imgur.com/kDb8oUO.jpg","https://i.imgur.com/lqBefwD.jpg","https://i.imgur.com/uur6jIm.png","https://i.imgur.com/S2ePMki.jpg","https://i.imgur.com/4ezTQbl.jpg","https://i.imgur.com/BFuNPvP.jpg","https://i.imgur.com/BzVMgpN.jpg","https://i.imgur.com/CfeWNgT.jpg","https://i.imgur.com/FlREWaU.jpg","https://i.imgur.com/GiARP0h.jpg","https://i.imgur.com/MRvZ7Ak.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/QFC8Izu.jpg","https://i.imgur.com/QZnHKVZ.jpg","https://i.imgur.com/Ww0K6t3.jpg","https://i.imgur.com/Y84z4b5.jpg","https://i.imgur.com/YD0j6lm.jpg","https://i.imgur.com/ZX4Z5Ji.jpg","https://i.imgur.com/bN6uW4s.jpg","https://i.imgur.com/l7Mpnop.jpg","https://i.imgur.com/okI2Hrx.jpg","https://i.imgur.com/pXmrjTg.jpg","https://i.imgur.com/wBAQU5Z.jpg","https://i.imgur.com/ySAAqDG.jpg","https://i.imgur.com/zxkReVx.jpg"];
const imgsNew=imgs.reverse();
const Rnames=[];
frC=0;
do{
frC++;
Rnames.push(Fnames[Math.floor(Math.random()*frC)]);
}
while(frC<Fnames.length)
let frnds=18;
let frndsStart=0;
const loopNewFrnds=()=>{
for(let i=frndsStart;i<=frnds;i++){
$("#list2").append(`
<table class="fr2">
<tr>
<td>
<img src="`+imgsNew[i]+`" id="f_ImgLogo2">
</td>
<td>
<b><span class="f_name">`+Fnames[i]+`</span></b><br>
<span class="f_friends">`+Math.floor(Math.random()*3000/4)+` mutual friends</span><br>
<button class="add">add friend</button>
<button class="rmv">remove</button>

</td>
</tr></table>
`)
}
clickEvent();
}
let RequestStart=0;
const loopFrnds=()=>{
for(let i=RequestStart; i<=o;i++){
$("#list").append($(`<br> <table class='fr'>
<tr>
<td>
<img src="`+imgsNew[i]+`" id="f_ImgLogo">
</td>
<td>
<b><span class="f_name"></span>`+Rnames[i]+`</b><br>
<span class="f_friends">`+Math.floor(Math.random()*3000/4)+` mutual friends</span><br>
<button class="accp">confirm</button>
<button class="del">delete</button>
</td>
</tr>

</table>`));
}
clickEvent();
}
window.onload=function(){
loopFrnds();
clickEvent();
loopNewFrnds();
}
//see more friends

$(".seeAll1").click(function(){
$(this).html('loading..');
setTimeout(()=>{
if(o<30){
loopFrnds();
}
clickEvent();
$(this).html("see more friend request");
},300+Math.random()*900+300);
if(o<30){
RequestStart+=15;
return o+=15;
}
else {
alert("you don't have other pending friends request ");
}
});
//see all friends
$(".seeAllFrnds").click(function(){
$(this).html('loading..');
setTimeout(()=>{
loopNewFrnds();
clickEvent();
$(this).html("see more friend request");
},300+Math.random()*900+300);
j=0;
while(j<frnds){
j++;
Fnames.push(Fnames[j]);
imgsNew.push(imgs[j]);
console.log(Fnames);
}
frndsStart+=9;
return frnds+=9;
});
}
frnds();