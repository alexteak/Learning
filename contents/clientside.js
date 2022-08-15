console.log('it is working')
let matrix = [[],[],[],[],[],[],[]]
let colour = null
let currentmove = 1
	const socket = io.connect();
function setup(){
	noLoop()
  createCanvas(700, 600);	
  fielddraw(matrix)
}

socket.on('color', (a) => {colour==null ? colour = a : colour = null});
console.log(colour)


socket.on('connect', ()=>{
	setup()
	console.log(socket.id);
	let userId = socket.id
	socket.emit('setId', userId)
	console.log(userId)
})




function mouseClicked(){
	if (currentmove == colour){ 
  column = Math.trunc(mouseX/100)
  if(matrix[column].length < 6){
  matrix[column].push(colour)
	currentmove = currentmove * (-1)
	socket.emit('gamestep', matrix, column);
  }
  }
} 

socket.on('movemade', (field, servermove) => {
	matrix = [...field]
	fielddraw(matrix)
	currentmove = servermove
	});

socket.on('win', (winner) => {
	alert(winner + ' player won! GG!')
	matrix = [[],[],[],[],[],[],[]]
	currentmove = 1
	fielddraw()
});

function fielddraw(){
  background(220)
  fill(51)
  for (i=50;i<651;i=i+100){
  for (j=50;j<551;j=j+100){
  circle(i,j,90)  
}}
  matrix.forEach(function(item,i){
    currentcol = i;
    item.forEach(function(item,i){
    if(item==-1){fill(255,255,0)}else{fill(255,0,0)}
    circle(50+currentcol*100,600-(50+i*100),90);
									})
									})
}

