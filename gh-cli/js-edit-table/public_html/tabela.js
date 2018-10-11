$(document).ready(function(){
    $('#tblEditavel tbody tr td.editavel').dblclick(function(){
         if($('td > input').length > 0){
             return;
         }        
        var conteudoOriginal = $(this).text();
        var novoElemento = $('<input/>',{type:'text', value:conteudoOriginal});        
        $(this).html(novoElemento.bind('blur keydown',function(e){
            var keyCode = e.which;
            var conteudoNovo = $(this).val();
              if(keyCode == 13  && conteudoNovo != '' && conteudoNovo != conteudoOriginal){                 
                          $(this).parent().html(conteudoNovo);                  
              }
                    if(e.type == "blur"){
                        $(this).parent().html(conteudoOriginal);
                    }
            
        }));
             $(this).children().select();
             
        
    });
    
});