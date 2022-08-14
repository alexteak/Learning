setup()


//initial loading

function setup() {
let matrix = [[],[],[],[],[],[],[]]
let colour = 1
let column
let currentcol
let i
let j
}




io.on('gamestep',(matrix, column)){
console.log(column)
//after receiving move from player

function checkline(){
    for (i=0;i<4;i++){
      for (j=0;j<6;j++){
        if(matrix[i][j] == matrix[i+1][j] && matrix[i+1][j] == matrix[i+2][j] && matrix[i+2][j] == matrix[i+3][j]){
          if (matrix[i][j] == -1){/* Отправить игрокам уведомление о победе одного из них*/alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i][j] == 1){/* Отправить игрокам уведомление о победе одного из них*/alert('Red won! Press OK to restart')
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
        if(matrix[i+1][j+1] == -1){/* Отправить игрокам уведомление о победе одного из них*/alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i+1][j+1] == 1){/* Отправить игрокам уведомление о победе одного из них*/alert('Red won! Press OK to restart')
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
        if(matrix[i-1][j+1] == -1){/* Отправить игрокам уведомление о победе одного из них*/alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i-1][j+1] == 1){/* Отправить игрокам уведомление о победе одного из них*/alert('Red won! Press OK to restart')
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
        if(matrix[i][j+1] == -1){/* Отправить игрокам уведомление о победе одного из них*/alert('Yellow won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i][j+1] == 1){/* Отправить игрокам уведомление о победе одного из них*/alert('Red won! Press OK to restart')
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
          }
        }
      }
    }
  }
}