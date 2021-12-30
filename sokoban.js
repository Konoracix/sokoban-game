let gameSize = 10;

let points = 0;

let level = 2;

let data = levelController(level, gameSize);
let gameArray = data[0];
let gameBoard = data[1];

let row = data[2];
let column = data[3];
let pointsReq = data[4];

gameBoard[row][column] = '*';

printGameBoard(gameBoard);

document.addEventListener('keydown', event => {
    let key = event.code;
	switch (key) {
		case 'ArrowUp':
			if(checkMovingCondition('Up', gameBoard, row, column)){
				if(gameBoard[row-1][column] == 'x' || gameBoard[row-1][column] == 'X'){
					if(row != 1){
						if(gameArray[row][column] != null){
							gameBoard[row][column] = gameArray[row][column];
						}
						else{
							gameBoard[row][column] = null;
						}
						gameBoard[--row][column] = '*';
						if(gameBoard[row-1][column] == 'H') gameBoard[row-1][column] = 'X';
						else{
							gameBoard[row-1][column] = 'x';
						}
					}
				}
				else{
					if(gameArray[row][column] != null){
						gameBoard[row][column] = gameArray[row][column];
					}
					else{
						gameBoard[row][column] = null;
					}
					gameBoard[--row][column] = '*';
				}
				printGameBoard(gameBoard);
			}
			break;
		case 'ArrowDown':
			if(checkMovingCondition('Down', gameBoard, row, column)){
				if(gameBoard[row+1][column] == 'x' || gameBoard[row+1][column] == 'X'){
					if(row != gameBoard.length-2){
						if(gameArray[row][column] != null){
							gameBoard[row][column] = gameArray[row][column];
						}
						else{
							gameBoard[row][column] = null;
						}
						gameBoard[++row][column] = '*';
						// if(gameBoard[row+1][column] == 'H') points++;
						if(gameBoard[row+1][column] == 'H') gameBoard[row+1][column] = 'X';
						else{ 
							gameBoard[row+1][column] = 'x';
							// points--;
						}
					}
				}
				else{
					if(gameArray[row][column] != null){
						gameBoard[row][column] = gameArray[row][column];
					}
					else{
						gameBoard[row][column] = null;
					}
					gameBoard[++row][column] = '*';
				}
				printGameBoard(gameBoard);
			}	
			break;
		case 'ArrowLeft':
			if(checkMovingCondition('Left', gameBoard, row, column)){
				if(gameBoard[row][column-1] == 'x' || gameBoard[row][column-1] == 'X'){
					if(column != 1){
						if(gameArray[row][column] != null){
							gameBoard[row][column] = gameArray[row][column];
						}
						else{
							gameBoard[row][column] = null;
						}
						gameBoard[row][--column] = '*';
						// if(gameBoard[row][column-1] == 'H') points++;
						if(gameBoard[row][column-1] == 'H') gameBoard[row][column-1] = 'X';
						else{ 
							gameBoard[row][column-1] = 'x';
							// points--;
						}
					}
				}
				else{
					if(gameArray[row][column] != null){
						gameBoard[row][column] = gameArray[row][column];
					}
					else{
						gameBoard[row][column] = null;
					}
					gameBoard[row][--column] = '*';
				}
				printGameBoard(gameBoard);
			}
			break;
		case 'ArrowRight':
			if(checkMovingCondition('Right', gameBoard, row, column)){
				if(gameBoard[row][column+1] == 'x' || gameBoard[row][column+1] == 'X'){
					if(column != gameBoard.length-2){
						if(gameArray[row][column] != null){
							gameBoard[row][column] = gameArray[row][column];
						}
						else{
							gameBoard[row][column] = null;
						}
						gameBoard[row][++column] = '*';
						// if(gameBoard[row][column+1] == 'H') points++;
						if(gameBoard[row][column+1] == 'H') gameBoard[row][column+1] = 'X';
						else{ 
							gameBoard[row][column+1] = 'x';
							
						}
					}
				}
				else{
					if(gameArray[row][column] != null){
						gameBoard[row][column] = gameArray[row][column];
					}
					else{
						gameBoard[row][column] = null;
					}
					gameBoard[row][++column] = '*';
				}
				printGameBoard(gameBoard);
			}
			break;
		default:
			console.log('Wrong Key');
			break;
	}
	console.log('Is game won: ' + checkWiningCondition(pointsCounter(gameBoard), pointsReq))
	if(checkWiningCondition(pointsCounter(gameBoard), pointsReq) && key != 'F5') alert('You won!!!');
} );

function pointsCounter(gameBoard){
	points = 0;
	gameBoard.forEach(row => {
		row.forEach(element => {
			if(element == 'X') points++;
		});
	});
	return points;
}

function initializeGameBoard(gameSize){
	let arrayPOM = new Array(gameSize);
	for (let i = 0; i < arrayPOM.length; i++) {
		arrayPOM[i]=[];
		for (let j = 0; j < 10; j++) {
			arrayPOM[i][j] = null;
		}	
	}
	return arrayPOM;
}

function printGameBoard(gameBoard){
	document.getElementById('gameBoard').innerHTML = '';
	for (let j = 0; j < gameBoard.length; j++) {
		for (let i = 0; i < gameBoard.length; i++) {
			//FOR NORMAL GAME
			if(gameBoard[j][i] == null){
				document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;&nbsp;&nbsp;';
			}
			else if(gameBoard[j][i] == 'b'){
				document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;' + 'x' + '&nbsp;&nbsp;&nbsp;';
			}
			else if(gameBoard[j][i] == 'x'){
				document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;' + 'o' + '&nbsp;&nbsp;&nbsp;';
			}
			else if(gameBoard[j][i] == 'X'){
				document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;' + 'O' + '&nbsp;&nbsp;&nbsp;';
			}
			else{
				document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;' + gameBoard[j][i] + '&nbsp;&nbsp;&nbsp;';
			}
			// FOR TESTING
			// if(gameBoard[j][i] != null){
			// 	document.getElementById('gameBoard').innerHTML += '&nbsp;&nbsp;' + gameBoard[j][i] + '&nbsp;&nbsp;&nbsp;';
			// }
			// else{
			// 	document.getElementById('gameBoard').innerHTML +=  gameBoard[j][i] + '&nbsp;';
			// }
		}	
		document.getElementById('gameBoard').innerHTML += "<br>";
	}
}

function checkMovingCondition(direction, gameBoard, row, column){
	switch (direction) {
		case 'Up':
			if(row <= 0) return false; 
			else if(gameBoard[row-1][column] != null){
				if(gameBoard[row-1][column] == 'x' || gameBoard[row-1][column] == 'X' || gameBoard[row-1][column] == 'H' && row != 1 && gameBoard[row-2][column] != 'x'){
					if(gameBoard[row-2][column] != 'x'){
						if(gameBoard[row-2][column] != 'b' || gameBoard[row-1][column] == 'H') return true;
					}
				}
				return false;
			}
			return true;
			break;
		case 'Down':
			if(row >= gameBoard.length-1) return false;
			else if(gameBoard[row+1][column] != null){
				if(gameBoard[row+1][column] == 'x' || gameBoard[row+1][column] == 'X' || gameBoard[row+1][column] == 'H' && row != gameBoard.length-2){
					if(gameBoard[row+2][column] != 'x'){
						if(gameBoard[row+2][column] != 'b' || gameBoard[row-1][column] == 'H') return true;
					}
				}
				return false;
			}
			return true;
			break;
		case 'Left':
			if(column <= 0) return false;
			else if(gameBoard[row][column-1] != null){
				if(gameBoard[row][column-1] == 'x' || gameBoard[row][column-1] == 'X' || gameBoard[row][column-1] == 'H' && column != 1){
					if(gameBoard[row][column-2] != 'x'){
						if(gameBoard[row][column-2] != 'b' || gameBoard[row-1][column] == 'H') return true;
					}
				}
				return false;
			}
			return true;
			break;
		case 'Right':
			if(column >= gameBoard.length-1) return false;
			else if(gameBoard[row][column+1] != null){
				if(gameBoard[row][column+1] == 'x' || gameBoard[row][column+1] == 'X' || gameBoard[row][column+1] == 'H' && column != gameBoard.length-2){
					if(gameBoard[row][column+2] != 'x'){
						if(gameBoard[row][column+2] != 'b' || gameBoard[row-1][column] == 'H') return true;
					}	
				}
				return false;
			}
			return true;
			break;
		default:
			break;
	}
}

function checkWiningCondition(points, pointsReq){	
	return points == pointsReq;
}

function levelController(level, gameSize){
	// let levelArray = initializeGameBoard(gameSize);
	let levelArray;
	let gameBoard;
	let row;
	let column;
	let pointsReq;
	let nul = null;
	switch (level) {
		case 1:
			levelArray = new Array(gameSize);
			gameBoard = new Array(gameSize);
			for (let i = 0; i < levelArray.length; i++) {
				levelArray[i]=[];	
				gameBoard[i]=[];
			}
			levelArray[0] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[1] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[2] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[3] = ['b', 'b', 'b', 'b', 'b', 'b', 'H', 'b', 'b', 'b'];
			levelArray[4] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			levelArray[5] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			levelArray[6] = ['b', nul, nul, 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[7] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[8] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[9] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];

			gameBoard[0] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[1] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[2] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[3] = ['b', 'b', 'b', 'b', 'b', 'b', 'H', 'b', 'b', 'b'];
			gameBoard[4] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			gameBoard[5] = ['b', nul, 'x', nul, nul, nul, nul, 'b', 'b', 'b'];
			gameBoard[6] = ['b', nul, nul, 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[7] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[8] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[9] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			
			row = 6;
			column = 2;
			pointsReq = 1;
			return [levelArray, gameBoard, row, column, pointsReq];
			break;
		case 2:
			levelArray = new Array(gameSize);
			gameBoard = new Array(gameSize);
			for (let i = 0; i < levelArray.length; i++) {
				levelArray[i]=[];	
				gameBoard[i]=[];
			}
			levelArray[0] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[1] = ['b', nul, nul, nul, nul, nul, nul, nul, 'H', 'b'];
			levelArray[2] = ['b', nul, nul, 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			levelArray[3] = ['b', nul, nul, 'b', 'b', 'b', 'H', 'b', 'b', 'b'];
			levelArray[4] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			levelArray[5] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			levelArray[6] = ['b', nul, nul, nul, nul, 'b', 'b', 'b', 'b', 'b'];
			levelArray[7] = ['b', 'b', nul, nul, nul, 'b', 'b', 'b', 'b', 'b'];
			levelArray[8] = ['b', 'b', nul, nul, nul, 'b', 'b', 'b', 'b', 'b'];
			levelArray[9] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];

			gameBoard[0] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[1] = ['b', nul, nul, nul, nul, nul, nul, nul, 'H', 'b'];
			gameBoard[2] = ['b', nul, nul, 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			gameBoard[3] = ['b', nul, nul, 'b', 'b', 'b', 'H', 'b', 'b', 'b'];
			gameBoard[4] = ['b', nul, nul, nul, nul, nul, nul, 'b', 'b', 'b'];
			gameBoard[5] = ['b', nul, 'x', nul, nul, nul, nul, 'b', 'b', 'b'];
			gameBoard[6] = ['b', nul, nul, nul, nul, 'b', 'b', 'b', 'b', 'b'];
			gameBoard[7] = ['b', 'b', nul, 'x', nul, 'b', 'b', 'b', 'b', 'b'];
			gameBoard[8] = ['b', 'b', nul, nul, nul, 'b', 'b', 'b', 'b', 'b'];
			gameBoard[9] = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
			
			row = 6;
			column = 2;
			pointsReq = 2;
			return [levelArray, gameBoard, row, column, pointsReq];
			break;
		default:
			break;
	}
}