//page2
$('#frndsList').click(function(){
setTimeout(()=>{
allB();
frnds();
alert($("#body").html());
},999);
$("#body").html(`
<nav>
<table id="r1" >
<tr>
<td>
<span id="facebook">facebook</span>

</td>
<td>
<span class="fa fa-search"></span>
</td>
<td>
<span class="fa fa-user"></span>
</td>
</tr>
</table>
<!--nav s -->
<table id="r2" >
<tr>
<td id="home">
<div><span class="notice1" >1</span></div>

<span id="navD" class="fa fa-home"></span>
</td>
<td id="frndsList">
<div><span class="notice2">1</span></div>

<span style="color:#3054EF;text-shadow: none;"  id="navD" class="fa fa-users"></span>
</td>

<td id="chat">
<div><span class="notice3">1</span></div>

<span class="fa fa-commenting"></span>
</td>

<td id="video">
<div><span class="notice4">1</span></div>

<span id="navD" class="fa fa-video-camera"></span>
</td>

<td id="notice">
<div><span class="notice5">1</span></div>

<span class="fa fa-bell"></span>
</td>

<td id="menu" style="margin-left:100%; padding:0px 0px">
<div><span class="notic6">1</span></div>
<span  class="fa fa-reorder"></span>
</td>
</tr>
</table>
<hr>
</nav>
<div id="spc"></div>
<!--nav end--><br>
<br><br>
<div id="scroll">
<!--I will use small of angular-->
<div id="scrollBody">	
<!--Friends list-->
<div id="list">

<table class="fr">
<tr>
<td>
<img src="https://i.imgur.com/mzBe9Ns.jpg"  id="f_ImgLogo">
</td>
<td>
<b><span class="f_name">Austine Samuel</span></b><br>
<span class="f_friends">221 mutual friends</span><br>
 <button class="accp"><a href="https://facebook.com/austine.samuel.5832">confirm</a></button></a>
<button class="del">delete</button>
</td>
</tr></table>
</div>
<!--finished ...-->
<h3 class="seeAll1" id="viewall" >see more request</h3>
<br><h3 style="text-align:left;" class="seeAll1" id="viewall" >people you might know</h3>
<!--add friends-->
<div id="list2">

</div>
<h3 class="seeAllFrnds" id="viewall" >see more friends</h3>
<!-- body finished-->

`);
alert("new");
});