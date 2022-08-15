module.exports = {setup, res, checklegit, checkline, checkcol, checkdiagleft, checkdiagright}

//initial loading
let colour = 1
let column
let currentcol
let i
let j
var _ = require('underscore');

function setup() {


console.log('initial loading done')
}

function res(){
	colour = 1
}

function checklegit(lastmove, matrix, column){
  if(lastmove[column].length < 6){
  lastmove[column].push(colour)
	colour = colour * -1
	return (_.isEqual(lastmove, matrix))
	
  }	
}



function checkline(matrix){
    for (i=0;i<4;i++){
      for (j=0;j<6;j++){
        if(matrix[i][j] == matrix[i+1][j] && matrix[i+1][j] == matrix[i+2][j] && matrix[i+2][j] == matrix[i+3][j]){
          if (matrix[i][j] == -1){return 'yellow'
matrix = [[],[],[],[],[],[],[]]
colour = 1}else{if (matrix[i][j] == 1){return 'red'
matrix = [[],[],[],[],[],[],[]]
colour = 1}
            }
           }
        }
      }
  }

function checkdiagright(matrix){
  for (i=0;i<4;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i+1][j+1] && matrix[i+1][j+1] == matrix[i+2][j+2] && matrix[i+1][j+1] == matrix[i+3][j+3]){
        if(matrix[i+1][j+1] == -1){return 'yellow'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i+1][j+1] == 1){return 'red'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
        }
      }
    }
  }
}



function checkdiagleft(matrix){
  for (i=3;i<7;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i-1][j+1] && matrix[i-1][j+1] == matrix[i-2][j+2] && matrix[i-1][j+1] == matrix[i-3][j+3]){
        if(matrix[i-1][j+1] == -1){return 'yellow'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i-1][j+1] == 1){return 'red'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
        }
      }
    }
  }
}


function checkcol(matrix){
  for (i=0;i<7;i++){
    for (j=0;j<6;j++){
      if(matrix[i][j] == matrix[i][j+1] && matrix[i][j+1] == matrix[i][j+2] && matrix[i][j+1] == matrix[i][j+3]){
        if(matrix[i][j+1] == -1){return 'yellow'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}else{if (matrix[i][j+1] == 1){return 'red'
matrix = [[],[],[],[],[],[],[]]
draw()
colour = 1}
          }
        }
      }
    }
  }