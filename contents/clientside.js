console.log('it is working')

	const socket = io.connect();
function setup(){
	noLoop()
	//draw()
	

	
}

socket.on('connect', ()=>{
	console.log(socket.id);
	let userId = socket.id
	socket.emit('setId', userId)
	console.log(userId)
})




function mouseClicked(){

  column = Math.trunc(mouseX/100)
  if(matrix[column].length < 6){
  matrix[column].push(colour)
	draw()
	//Тут требуется отослать на сервер новые значения matrix и column
	socket.emit('gamestep', matrix, column);
}
}


function bgp(){
  createCanvas(700, 600);
  background(220)
  fill(51)
  for (i=50;i<651;i=i+100){
  for (j=50;j<551;j=j+100){
  circle(i,j,90)  
}}
}


/*function draw() {
    bgp()
  matrix.forEach(function(item,i){
    currentcol = i;
    item.forEach(function(item,i){
    if(item==-1){fill(255,255,0)}else{fill(255,0,0)}
    circle(50+currentcol*100,600-(50+i*100),90);
									})
									})
}*/