function divShow(){
  document.getElementById("btnshow").style.display="block";
  document.getElementById("btnhref").innerHTML ="Close";
  document.getElementById("btnhref").href ="javascript:divhidden()";
}
function divhidden(){
  document.getElementById("btnshow").style.display="none";
  document.getElementById("btnhref").innerHTML ="Click";
  document.getElementById("btnhref").href ="javascript:divShow()"; 
}
