/*
 * ParolaModel 
 */
var ParolaModel = {
  
   /* Funzione principale */
   
   getCurrentWord : function ( a) { 
       
       if((typeof a)=="string")
           {
       points=0;
        for(i=0;i<a.length;i++)
            {
                
                if(a[i]=='c')
                    points++;
            }
       
           }
       else
           {
               points=-1;
           }
       return points;
   }
  
    
   
           
};

$(document).ready(function(){
    $("button").click(function(){
        
       $("#nc").text("Il numero di c nella parola è "+ ParolaModel.getCurrentWord($("#answer").val()));
        
    })
    
    
})