const imgs=["https://i.imgur.com/aVMfsM1.jpg", "https://i.imgur.com/kDb8oUO.jpg","https://i.imgur.com/lqBefwD.jpg","https://i.imgur.com/uur6jIm.png","https://i.imgur.com/S2ePMki.jpg","https://i.imgur.com/4ezTQbl.jpg","https://i.imgur.com/BFuNPvP.jpg","https://i.imgur.com/BzVMgpN.jpg","https://i.imgur.com/CfeWNgT.jpg","https://i.imgur.com/FlREWaU.jpg","https://i.imgur.com/GiARP0h.jpg","https://i.imgur.com/MRvZ7Ak.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/OTpPbWG.jpg","https://i.imgur.com/QFC8Izu.jpg","https://i.imgur.com/QZnHKVZ.jpg","https://i.imgur.com/Ww0K6t3.jpg","https://i.imgur.com/Y84z4b5.jpg","https://i.imgur.com/YD0j6lm.jpg","https://i.imgur.com/ZX4Z5Ji.jpg","https://i.imgur.com/bN6uW4s.jpg","https://i.imgur.com/l7Mpnop.jpg","https://i.imgur.com/okI2Hrx.jpg","https://i.imgur.com/pXmrjTg.jpg","https://i.imgur.com/wBAQU5Z.jpg","https://i.imgur.com/ySAAqDG.jpg","https://i.imgur.com/zxkReVx.jpg"];
const Fnames=["Ola John","goodness","petter","Love","Gavel","Julie","Petter","Smart D","Favour","Johnson","YogaD.k","Champion","FilYo","X-Man ","Supper ","Free","Vivian",'Happiness',"Kelvin","MIra","*Coder"," Deeply "];
const imgs1=imgs.reverse();
scrollD=500;
$(".listImg").attr("src",imgs1[11]);
for(i=1;i<22;i++){
 $("#chatList").append(`
  <td id="story">
  
  <div class="storyAd">
  <img src=`+imgs1[i]+` class="listImg">
  <div class="statusC"></div>
  </div>
  <span>`+Fnames[i]+`</span;
  </td>
  `);  
  Fnames.push(Fnames[i]);
  }
 //*///*/
 for(i=0;i<=22;i++){
 $("#chatFrnds").append(`
 <table>
 <tr>
 <td style="width:80px;padding:10px 5px;">
 <div><img style="width: 60px; height:60px; border-radius:30px; border:1px solid grey;" src="`+imgs[i]+`"id="chatFrndsImg">
 </div>
 </td>
 
 <td style="width:130px; text-align: left;">
 <span class="namesSearch" name="">`+Fnames[i]+`</span>
 </td>
 
 <td>
 <span id="time">`+Math.floor(Math.random()*60)+'s'+`</span>
 </td>
 </tr>
 </table>
 
 `)
 Fnames.push(Fnames[i]);
} 
//searching
function srch(){
let search=$("#searching").html();
letchild=$(".namesSearch").html();
for(i=0;i<Fnames.length;i++){
if(Fnames[i].includes(search)){
let childParent=document.getElementsByClassName("namesSearch");
switch(Fnames[child.search(search)]){
case child:
childParent[child.search(search)].parentElement.parentElement.style.display="none";
break;
default:
alert();
childParent[i].parentElement.parentElement.style.display="block";
break;
}
///finished
}

}//end for
}/*this fucking search codes didn't work🙇🙇🙇😒😒
 //*/
 //messaging
let reply=["hello ","hey no time for the conversation am a programmer","am going offline "];
let Nr=0;
let send=$("#sendM");
$("#message").on("keyup",function(){
let msg= $("#message").val();
if(msg.length>0){
send.attr("class","fa fa-paper-plane");
}
else{
send.attr("class","fa fa-meh-o");
}
});
const date=new Date().toLocaleDateString('en-US');
send.click(function(){
$("#chatListP").animate({scrollTop:scrollD},"slow");
scrollD+=100;
$("#chatListP").append(`
<ul>
 <li style="text-align:right;"><div  id="messageMe">`+$('#message').val()+`</div><br>
 <span style="font-size:13px; font-family:curieer;" id="date">`+date+`</span>
 </li>
 <ul>
`);
if(Nr<3){
setTimeout(()=>{
$("#chatListP").append(`
<ul>
 <li style="text-align:left;"><div style='margin-left: 0%; color:black; background:#E3E3E3;' id="messageMe">`+reply[Nr]+`</div><br>
 <span style="font-size:13px; font-family:curieer;" id="date">`+date+`</span>
 </li>
 <ul>
`);
Nr++;
$("#chatListP").animate({scrollTop:scrollD},"slow");
scrollD+=100;
},2000);
}
else{
$(".status").children("span").html("active "+Nr+"s ago");
Nr+=1;
}
setTimeout(()=>{
$("#message").val('');
},500);
});

$("#likeS").click(function(){
$("#chatListP").animate({scrollTop:scrollD},"slow");
scrollD+=100;
$("#chatListP").append(`
<ul>
 <li style="text-align:right;">
 <span style="font-size:40px; font-family:Times; color:blue;" id="date" class="fa fa-thumbs-up"></span>
 </li>
 <ul>
 `);
});//the like refuses to display😢
//send Picts
$(".img").on('change', function () {

    var imgPath = $(this)[0].value;
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
    let that=$(this);
    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
            $("#chatListP").append(`
            <ul>
            <li style="text-align:right;">
              <img style="width:100px; height: 200px; border-radius: 20px" src="`+e.target.result+`">
              <span style="font-size:13px; font-family:curieer;" id="date">`+date+`</span>
              
              </li>
            <ul>
            `);
            $("#chatListP").animate({scrollTop:scrollD},"slow");
            scrollD+=100;
            }
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            alert("This browser does not support FileReader.");
        }
    } else {
        alert("Pls select only images");
    }
});
//finished😁😁😁😁😁😁
document.querySelector("*").style.transition="0.6 ease";
document.querySelector("*").style.transitionDuration="600ms";
$("#exit").click(function(){
document.querySelector("#spc").style.display="block";
document.querySelector("nav").style.display="block";
document.getElementById("chatBox").style.display="none";
});
//open chat box
$("#chatList").children("td").click(function(){
$("#chatname").html($(this).children("span").html());
let img=$(this).children(".storyAd").children("img").attr("src");
document.querySelector("#spc").style.display="none";
document.querySelector("nav").style.display="none";
document.getElementById("chatBox").style.display="block";
$(".chatImgs").attr("src",img);
$("#chatListP").html("");
$(".status").children("span").html("online");
return Nr=0;
});
$("#messageG,#messageP,#messageU").click(function(){
$(this).siblings("td").children().attr("style","color:black");
$(this).children().attr("style", "color:blue");
alert("coming soon");
});