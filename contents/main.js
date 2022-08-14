let matrix = [[],[],[],[],[],[],[]]
let colour = 1
let column
let currentcol
let i
let j


function bgp(){
  background(220)
  fill(51)
  for (i=50;i<651;i=i+100){
  for (j=50;j<551;j=j+100){
  circle(i,j,90)  
}}
}

function setup() {


  frameRate(120)

  noLoop()
  createCanvas(700, 600);
  bgp()
}

function mouseClicked(){
  column = Math.trunc(mouseX/100)
  if(matrix[column].length < 6){
  drop(column)
  colour = colour * (-1)
  draw()

setTimeout(() => {    
  checkcol()
  checkline()
  checkdiagright()
  checkdiagleft() }, 250);

  }
}

function drop(column){
  matrix[column].push(colour)
}


function checkline(){
    for (i=0;i<4;i++){
      for (j=0;j<6;j++){
        if(matrix[i][j] == matrix[i+1][j] && matrix[i+1][j] == matrix[i+2][j] && matrix[i+2][j] == matrix[i+3][j]){
          if (matrix[i][j] == -1){alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i][j] == 1){alert('Red won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
            }
           }
        }
      }
  }

function checkdiagright(){
  for (i=0;i<4;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i+1][j+1] && matrix[i+1][j+1] == matrix[i+2][j+2] && matrix[i+1][j+1] == matrix[i+3][j+3]){
        if(matrix[i+1][j+1] == -1){alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i+1][j+1] == 1){alert('Red won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
        }
      }
    }
  }
}



function checkdiagleft(){
  for (i=3;i<7;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i-1][j+1] && matrix[i-1][j+1] == matrix[i-2][j+2] && matrix[i-1][j+1] == matrix[i-3][j+3]){
        if(matrix[i-1][j+1] == -1){alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i-1][j+1] == 1){alert('Red won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
        }
      }
    }
  }
}


function checkcol(){
  for (i=0;i<7;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i][j+1] && matrix[i][j+1] == matrix[i][j+2] && matrix[i][j+1] == matrix[i][j+3]){
        if(matrix[i][j+1] == -1){alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i][j+1] == 1){alert('Red won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
          }
        }
      }
    }
  }


function draw() {
    bgp()
  matrix.forEach(function(item,i){
    currentcol = i
    item.forEach(function(item,i){
    if(item==-1){
    fill(255,255,0)}else{fill(255,0,0)}
    circle(50+currentcol*100,600-(50+i*100),90)
    })
})
}