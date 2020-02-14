function tabla()
{
    var num = parseInt(prompt('Ingrese un numero'))
    var table=""
    for(i=1;i<11;i++)
    {
        table+=`${i} x ${num} = ${i*num} \n`
    }
    alert(table)
}


function grados()
{
    var grado = parseInt(prompt('Ingrese los grdos celcius'))
    const f=32 
alert(`Los grados Fahrenheit son: ${(grado*(9/5)+f)}`)
}


function piramide()
{
var piramide =""
   piramide+='     * \n'
   piramide+='    * *\n'
   piramide+='   * * *\n'
   piramide+='  * * * *\n '
   piramide+=' * * * * *\n'
   alert(piramide)
}
function PPT(){
    var name1 = prompt(`Escriba su nombre Jugador1: `)
    var name2 = prompt(`Escriba su eleccion jugador2: `)
    var player1 = prompt(`Escriba su eleccion ${name1}: `)
    var player2 = prompt(`Escriba su eleccion ${name2}: `)
    
    if(player1 == player2)
    {
    alert(`Es un empate`)
    } 
    
    if(player1 == "Piedra" && player2 == "Papel" )
    {
        alert(`El ganador es el ${name2}`)
    } 
    
    if(player1 == "Piedra" && player2 == "Tijera" )
    {
        alert(`El ganador es el ${name1}`)
    } 
    
    
    if(player1 == "Papel" && player2 == "Piedra" )
    {
        alert(`El ganador es el ${name1}`)
    } 
    
    if(player1 == "Papel" && player2 == "Tijera" )
    {
        alert(`El ganador es el ${name2}`)
    } 
    
    if(player1 == "Tijera" && player2 == "Piedra" )
    {
        alert(`El ganador es el ${name2}`)
    }
     
    if(player1 == "Tijera" && player2 == "Papel" )
    {
        alert(`El ganador es el ${name1}`)
    }
    if(player1 != "Piedra" && player2 != "Piedra" && player1 != "Papel" && player2 != "Papel" && player1 != "Tijera" && player2 != "Tijera")
    {
        alert(`Alguien cometio un error...`)
    }
}
/* PALABRAS PALINDROMAS */
function palindromo()
{
    var palabra = prompt("Ingrese una cadena a evaluar")
    var fin = palabra.length-1
    var correcto =false
    var respuesta = true
    for(i=0; i<palabra.length;i++)
    {
        if(palabra[i]==palabra[fin-i])
        {
            correcto=true
        }else
        {
            correcto=false
        }
        if(correcto==false){respuesta=false}
    }
    if(respuesta==true){alert(`La palabra ${palabra} es palindroma`)}else
    {
        alert(`La palabra ${palabra} no es palindroma`)
    }

}