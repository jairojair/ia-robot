
// Classe Mapa //
var Mapa = function()
{


    this.renderizar = function()
    {
        
    }

}



var map = Array(

    [1,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1]
    );



var tam = map.length;
console.log("Tamanho:"+tam);



for( x=0;  x < tam; x++)
{

    for( y=0; y < tam; y++)
    {
        $('#mapa').append('<li class="Bloco '+map[x][y]+'"> '+ (1+x) +' , '+ (y+1) +' </li>');
        //console.log (x+1,y+1);
    }
}



$('.Bloco').each(function() {

    if ($(this).hasClass('0')) 
    {
        $(this).addClass('Grama');
    }

    else if ($(this).hasClass('1')) 
    {
        $(this).css({'background-color':'gray'})
    }
    
    else if ($(this).hasClass('2')) 
    {
        $(this).addClass('Personagem');
    }
     
});
