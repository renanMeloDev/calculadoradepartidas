let heroName =("Sagaz")
let resultado = vitoryDefeat( )
console.log(heroName + " teve um total de vitorias de " + resultado)

function vitoryDefeat (point){
    let vitory = 129
    let defeat = 78
    point = (vitory - defeat)
    return point
    console.log(point)
}
if (resultado < 10){ 
	console.log (heroName + " tem nível ferro")
}else if (resultado <=11){
	console.log(heroName + " tem nível bronze")
}else if (resultado < 20){
	console.log(heroName + "tem nível bronze")
}else if(resultado <=21){
	console.log(heroName+" tem nível prata")
}else if (resultado <50){
	console.log(heroName + " tem nivel prata")
}else if (resultado<=51){
	console.log(heroName + " tem nível ouro")
}else if (resultado<80){
	console.log(heroName + " tem nível ouro")
}else if (resultado <=81){
	console.log(heroName + " tem nível Diamante")
}else if (resultado<90) {
	console.log(heroName + " tem nível Dimante")
}else if(resultado<=91){
	console.log(heroName + " tem nível léndario")
}else if (resultado >=101) {
	console.log(heroName + " tem nível Imortal")
}