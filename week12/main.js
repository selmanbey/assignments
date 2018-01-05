document.addEventListener("DOMContentLoaded", function(){

    const table = document.getElementById('board');

    let row = 5;
    let col = 5;
    let upperLimit = 9;

    function getRowNumbers(row, upperLimit) {
        let rowNumbers = [];

        for (let i=0; i < row; i++) {
            let randomNumber = Math.round(Math.random() * upperLimit);
            rowNumbers.push(randomNumber);
        }
        return rowNumbers;
    };
    
    function getGameNumbers(row, col) {
        let gameNumbers = [];

        for (let i=0; i < col; i++) {
            let rowNumbers = getRowNumbers(row, upperLimit);
            gameNumbers.push(rowNumbers);
        }
        return gameNumbers;     
    }

    function getGameNumbersByCol(gameNumbers) {
        let gameNumbersByCol = [];

        for (let i = 0; i < gameNumbers.length; i++) {
            let colNumbers = []
            for (let j = 0; j < gameNumbers[i].length; j++){
                colNumbers.push(gameNumbers[j][i])
            }
            gameNumbersByCol.push(colNumbers)
        }

        return gameNumbersByCol;
    }

    function createTableInnerHTML(row, col, gameNumbers) {
        let tableInnerHTML = "";

        for (let i=0; i < row; i++) {
            tableInnerHTML += "<tr id=\"" + String(i + 1) + "\">\n";
            for (let j=0; j < col; j++) {
                tableInnerHTML += "\t<td id=\"" + String(i + 1) + String(j + 1) + "\">" + String(gameNumbers[i][j]) + "</td>\n";
            };
            tableInnerHTML += "</tr>\n";
        };

        return tableInnerHTML;
    };

    let gameNumbers = getGameNumbers(row, col);
    let gameNumbersByCol = getGameNumbersByCol(gameNumbers);
    // console.log(gameNumbers)
    // console.log(gameNumbersByCol)

    table.innerHTML = createTableInnerHTML(row, col, gameNumbers);
    

    function visualiseCancellation() {
        if (this.className == "inactive_cell") {
            this.className = "active_cell"
        } else {
            this.className = "inactive_cell"
        }
    }


    function cancelNumber() {
        visualiseCancellation();
    }

    var allTableCells = document.querySelectorAll("td")
    console.log(typeof allTableCells)
    console.log(allTableCells)
    
    allTableCells.forEach(function(e){
        e.addEventListener("click", cancelNumber);
    });
    


    




});