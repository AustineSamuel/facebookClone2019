//lol my print method
const print=(x)=>{
return console.log(x);
}
const allB=()=>{
class like{
constructor(x,inner,check){
this.check=check;
this.x=x;
this.inner=inner;
}
liked(){
if(this.check==true) {
this.x+=1;
if(this.x>999){
this.inner.innerHTML="1k";
}
else{
this.inner.innerHTML=this.x;
}

this.inner.parentElement.setAttribute("style","background:#D0E8FF");
return this.check=false;
}
else{
if(this.x>999){
this.x="1k";
}
else{
this.x-=1;
}
this.inner.parentElement.setAttribute("style","background:");
this.inner.innerHTML=this.x;
return this.check=true;
}
}
}
//comment:
class comments{
constructor(x,inner,txt,post,body){
this.x=x;
this.inner=inner;
this.txt=txt;
this.post=post;
this.body=body;
}
commented(){
this.post.parent("#commentBox").siblings("h5").fadeOut("fast");
this.post.parent("#commentBox").siblings("#comment_list").append("<div style='margin-left:5%;padding: 10px 10px'><table> <tr> <td><div style='width: 40px;height: 40px; border-radius:20px; border: 1px solid lightgrey; color:blue; background:#DFECEF℅; display:flex; justify-content:center; align-items:center;'>Unk</div></td><td style='text-align:left;'><b>unknown person</b> <i class='fa fa-play'></td></tr></table></i></b><br><div style='width:auto; padding:10px 10px;height:auto; background:#DFECEF; border-radius:10px; break-word'><br>"+this.txt.val()+"</div>");
this.post.parent("#commentBox").siblings("#comment_list").animate({height: "180px"});
this.post.parent("#commentBox").siblings("#comment_list").animate({scrollTop:10000},'slow');
this.body.animate({height:"700px"});
setTimeout(()=>{
if(this.x>999){
this.inner.html("1k");
}
else{
this.inner.html(++this.x);
}
this.txt.val("")
},300)
}
}
let likeStart=document.getElementById("like")
let likes=new like(101,likeStart,true);
$("#likeClick").click(function(){
likes.liked();
setTimeout(()=>{
$("#rNumber").html(likes.x);
},900)
});

//comment function2
let comment=$("#comment");
const txt=$("#text");
const post=$("#postComment");
const postBody=$("#postBody");
const commentNow=new comments(11,comment,txt,post,postBody);
commentNow.post.click(function(){
let emptyComment=document.querySelector("#text").value;
if(emptyComment!=''){
commentNow.commented();
}
});
//loop comment
let commentsList={
"wisdom":" this is cool",
"love coders":" much love ",
"Web guru":" wow add mode d? ui ",
"Champion ":" bro you really try",
"VanTil":"😋😋😋😋😋",
"govern Codes":" keep it up bro",
"Wise peace":"lol"
}
for(let i in commentsList){
$("#text").val(commentsList[i]);
commentNow.commented();
}
//post 2
let comments1=$("#comment1");
const txt1=$("#text1");
const post1=$("#postComment1");
const postBody1=$("#postBody1");
const comment1=new comments(0,comments1,txt1,post1,postBody1);
comment1.post.click(function(){
let emptyComment=document.querySelector("#text1").value;
if(emptyComment!=''){
comment1.commented();
}
});

let like1=document.getElementById("like1")
let likes1=new like(131,like1,true);
$("#likeClick1").click(function(){
likes1.liked();
setTimeout(()=>{
$("#rNumber1").html(likes1.x);
},1000)
});
//post3->2
let comments2=$("#comment2");
const txt2=$("#text2");
const post2=$("#postComment2");
const postBody2=$("#postBody2");
const comment2=new comments(801,comments2,txt2,post2,postBody2);
comment2.post.click(function(){
let emptyComment=document.querySelector("#text2").value;
if(emptyComment!=''){
comment2.commented();
}
});

let like2=document.getElementById("like2")
let likes2=new like(131,like2,true);
$("#likeClick2").click(function(){
likes2.liked();
setTimeout(()=>{
$("#rNumber2").html(likes2.x);
},1000)
});
//post4->3
let comments3=$("#comment3");
const txt3=$("#text3");
const post3=$("#postComment3");
const postBody3=$("#postBody3");
const comment3=new comments(801,comments3,txt3,post3,postBody3);
comment3.post.click(function(){
let emptyComment=document.querySelector("#text3").value;
if(emptyComment!=''){
comment3.commented();
}
});

let like3=document.getElementById("like3")
let likes3=new like(998,like3,true);
$("#likeClick3").click(function(){
likes3.liked();
setTimeout(()=>{
$("#rNumber3").html(likes3.x);
},1000)
});

//post5->4
let comments4=$("#comment4");
const txt4=$("#text4");
const post4=$("#postComment4");
const postBody4=$("#postBody4");
const comment4=new comments(600,comments4,txt4,post4,postBody4);
comment4.post.click(function(){
let emptyComment=document.querySelector("#text4").value;
if(emptyComment!=''){
comment4.commented();
}
});

let like4=document.getElementById("like4")
let likes4=new like(708,like4,true);
$("#likeClick4").click(function(){
likes4.liked();
setTimeout(()=>{
$("#rNumber4").html(likes4.x);
},1000)
});
//post 6->5
let comments5=$("#comment5");
const txt5=$("#text5");
const post5=$("#postComment5");
const postBody5=$("#postBody5");
const comment5=new comments(801,comments5,txt5,post5,postBody5);
comment5.post.click(function(){
let emptyComment=document.querySelector("#text5").value;
if(emptyComment!=''){
comment5.commented();
}
});

let like5=document.getElementById("like5")
let likes5=new like(995,like5,true);
$("#likeClick5").click(function(){
likes5.liked();
setTimeout(()=>{
$("#rNumber5").html(likes5.x);
},1000)
});
//add friends
let frndClick=true;
$(".friend").html("Add Friend").click(function(){
$(this).html("....");
setTimeout(()=>{
if(frndClick==true){
frndClick=false;
$(this).html("Cancel Request")
}
else{
frndClick=true;
$(this).html("Add Friend")
}
},Math.random()*999+300);
});

//likes adds
let likeClick=true;
$(".friend1").html("like").click(function(){
$(this).html("....");
setTimeout(()=>{
if(frndClick==true){
frndClick=false;
$(this).html("dislike")
}
else{
frndClick=true;
$(this).html("like")
}
},Math.random()*999+300);
});
//story
let e=0;
$(".rply").click(function(){
$(this).children("span").fadeIn("slow");
$(this).animate({animationName:"story"});
if(e==0){
e=1;
alert("the Emoji  don't work , I was unable to fixed it");
}}).children("span").fadeOut("slow");
//change
$("#storyF").fadeOut("fast");
const storyImgs=document.getElementsByClassName("storyImgs");
let stories=["https://i.imgur.com/aVMfsM1.jpg", "https://i.imgur.com/kDb8oUO.jpg","https://i.imgur.com/lqBefwD.jpg","https://i.imgur.com/uur6jIm.png","https://i.imgur.com/S2ePMki.jpg","https://i.imgur.com/4ezTQbl.jpg","https://i.imgur.com/BFuNPvP.jpg","https://i.imgur.com/BzVMgpN.jpg","https://i.imgur.com/CfeWNgT.jpg","https://i.imgur.com/FlREWaU.jpg","https://i.imgur.com/GiARP0h.jpg","https://i.imgur.com/MRvZ7Ak.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/QFC8Izu.jpg","https://i.imgur.com/QZnHKVZ.jpg","https://i.imgur.com/Ww0K6t3.jpg","https://i.imgur.com/Y84z4b5.jpg","https://i.imgur.com/YD0j6lm.jpg","https://i.imgur.com/ZX4Z5Ji.jpg","https://i.imgur.com/bN6uW4s.jpg","https://i.imgur.com/l7Mpnop.jpg","https://i.imgur.com/okI2Hrx.jpg","https://i.imgur.com/pXmrjTg.jpg","https://i.imgur.com/wBAQU5Z.jpg","https://i.imgur.com/ySAAqDG.jpg","https://i.imgur.com/zxkReVx.jpg"];
stories=stories.reverse();
const names=["Peace Samuel","Recheal John","Kwankwalati boy","Super King","Albert Kure"];
for(let i=0; i<storyImgs.length; i++){
storyImgs[i].addEventListener("click",()=>{
$("#storyF").fadeIn("slow");
document.getElementById("storyF").style.backgroundImage='url("'+stories[i]+'")';
},true);
storyImgs[i].src=stories[i];
}
//next prev story 
let next=0;
$("#next").click(function(){
next++;
if(next==storyImgs.length){
next=0;
}
let prev=0;
$("#prev").click(function(){
next++;
if(next==0){
next=storyImgs.length;
}
});
$("#imgLogo").attr("src",storyImgs[Math.random()*9])
document.getElementById("storyF").style.backgroundImage='url("'+stories[next]+'")';
});
//prev
let prev=0;
$("#prev").click(function(){
next++;
if(next==0){
next=storyImgs.length;
}
$("#imgLogo").attr("src",storyImgs[Math.random()*9])
document.getElementById("storyF").style.backgroundImage='url("'+stories[next]+'")';
});
$("#removeS").click(function(){
$('#storyF').fadeOut("slow");
})

$("#scroll").append(`
<footer id="about"><a href="">Created By Austine Samuel<br></a>
<a href="https://www.facebook.com/austine.samuel.5832"><img src="https://i.imgur.com/PnWLfRH.jpg" style="width:40px; height: 40px"></a>
<a href="https://www.sololearn.com/Profile/20198433/?ref=app"><img src="https://i.imgur.com/5VuNCg2.png" style="width:40px; height: 40px"></a>
<a href="https://www.instagram.com/p/CGYZxKWlSzP/?utm_source=ig_web_copy_link"><img src="https://i.imgur.com/KHsEP7s.jpg" style="width:40px; height: 40px"></a>
<a href="https://mobile.twitter.com/AustineSamuel18"><img src="https://i.imgur.com/e8CdAOQ.jpg" style="width:40px; height: 40px"></a>
<a href="tel:+2348063202017"><img src="https://i.imgur.com/SjS54b3.jpg" style="width:40px; height: 40px"></a>
</footer>
`);
//">
//href change to another page lol😁😁😁😁😁😁 just a try
}
allB();
//page 1
$(".notice1").html("17")
$(".notice2").html("9")
$(".notice3").html("10")
$(".notice4").html("22")
$(".notice5").html("5")
$(".notice6").html("2")
$("#home").click(function(){
$(".notice1").html("1")
if(/facebook.html/.test(window.location)==false){
window.location. assign("../facebook.html");
}
else{
window.location. assign("facebook.html");
}
});
$("#frndsList").click(function(){
$(".notice2").html("1")
if(/facebook.html/.test(window.location)==false){
window.location. assign("friendsCenter.html");
}
else{
window.location. assign("pages/friendsCenter.html");
}
});
/*$("#frndsList").click(function(){
if(/facebook.html/.test(window.location)==false){
window.location. assign("friendsCenter.html");
}
else{
window.location. assign("pages/friendsCenter.html");
}
});*/
$("#chat").click(function(){
$(".notice3").html("1")
if(/facebook.html/.test(window.location)==false){
window.location. assign("chat.html");
}
else{
window.location. assign("pages/chat.html");
}
});
$("#video").click(function(){
$(".notice4").html("1")
if(/facebook.html/.test(window.location)==false){
window.location.assign("video.html");
}
else{
window.location. assign("pages/video.html");
}
});


$("#notice").click(function(){
$(".notice5").html("1")
if(/facebook.html/.test(window.location)==false){
window.location.assign("notification.html");
}
else{
window.location. assign("pages/notification.html");
}
});

$("#menu").click(function(){
$(".notice6").html("1")
if(/facebook.html/.test(window.location)==false){
window.location.assign("menu.html");
}
else{
window.location. assign("pages/menu.html");
}
});