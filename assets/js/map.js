
var map = Array(

    [1,0,0,0,0,0,0,0,0,0],
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
        $('#map').append('<li class="mN '+map[x][y]+'"> '+ (1+x) +' , '+ (y+1) +' </li>');
        console.log (x+1,y+1);
    }
}



$('.mN').each(function() {

    if ($(this).hasClass('0')) 
    {
        $(this).addClass('grama');
    }

    else if ($(this).hasClass('1')) 
    {
        $(this).css({'background-color':'gray'})
    }
     
});
