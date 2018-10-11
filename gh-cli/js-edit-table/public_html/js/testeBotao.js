 // true = disponivel
// false = indisponivel

window.onload = function() {    	
  //  carregarPoltronas(); 

  var tit = document.getElementById("tit_id");
      
  
  tit.innerHTML = "vamos es texto";
   tit.setAttribute("style","color:darkblue"); // DOM CORE API  para qualquer documento XML
   
}

function diaSeg() {
   document.getElementById("seg").value = "segunda";
}

/*
Field2: <input type="text" id="seg"><br><br>

<button onclick="diaSeg()">segunda</button>



<script>
function diaSeg() {
   document.getElementById("seg").value = "segunda";
}
</script>
*/