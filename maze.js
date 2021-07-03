// Model 1
function maze(size) {
	let response = ``;
	let oddRow = 1;
	for (let i = 1; i <= size; i++) {
		for (let j = 1; j <= size; j++) {
			roadCond = ((i%2) && ((j-oddRow == oddRow) || (j == oddRow-1))) || (!(i%2) && (j > 1 && j < size));
			if (roadCond) {
				response += ` `;
		  	} else {
		  		response += `@`;
			}
		}

		if (oddRow == 1 && !(i%2)) {
			oddRow = size
		} else if (!(i%2)){
			oddRow = 1
		}

		response += `\n`;
	}

	return response;
}

console.log(maze(15));
