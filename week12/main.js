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
                tableInnerHTML += "\t<td id=\"" + String(i + 1) + String(j + 1) + "\" class=\"active_cell\">" + String(gameNumbers[i][j]) + "</td>\n";
            };
            tableInnerHTML += "<td class=\"empty\"></td>"
            tableInnerHTML += "<td id=\"targetrow" + String(i + 1) + "\" class=\"target\"></td>"
            tableInnerHTML += "</tr>\n";
        };

        tableInnerHTML += "<tr class=\"empty\"></tr>"

        for (let n=0; n < col; n++) {
            tableInnerHTML += "<td id=\"targetcol" + String(n + 1) + "\" class=\"target\">\n";
        }

        return tableInnerHTML;
    };

    function checkTargetsForRows(gameNumbers) {
        for(let i=0; i < gameNumbers.length; i++) {
            let total = 0
            for (let j=0; j < gameNumbers[i].length; j++) {
                total += gameNumbers[i][j]
            }
            elementID = "targetrow" + String(i+1)
            let cell = document.getElementById(elementID)
            cell.innerHTML = total 
        }        
    } 

    function checkTargetsForCols(gameNumbersByCol) {
        for(let i=0; i < gameNumbersByCol.length; i++) {
            let total = 0
            for (let j=0; j < gameNumbersByCol[i].length; j++) {
                total += gameNumbersByCol[i][j]
            }
            elementID = "targetcol" + String(i+1)
            let cell = document.getElementById(elementID)
            cell.innerHTML = total 
        }   
    }

    function checkAllTheTargets(gameNumbers, gameNumbersByCol) {
        checkTargetsForRows(gameNumbers);
        checkTargetsForCols(gameNumbersByCol);
    }

    function visualiseCancellation(event) {
        cellID = String(event.id);

        if (event.className == "inactive_cell") {
            number = gameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)];
            dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)] = number;
            dynamicGameNumbersByCol[parseInt(cellID[1])-1][parseInt(cellID[0]-1)] =number;
            event.className = "active_cell";
        } else if (event.className == "active_cell") {   
            dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)] = 0;
            dynamicGameNumbersByCol[parseInt(cellID[1])-1][parseInt(cellID[0]-1)] = 0
            event.className = "inactive_cell";
        }
    }


    function cancelNumber() {
        event = this;
        visualiseCancellation(event);
        // toggleNumber(event, gameNumbers, dynamicGameNumbers);
        checkAllTheTargets(dynamicGameNumbers, dynamicGameNumbersByCol)
    }

    function toggleNumber(event, gameNumbers, dynamicGameNumbers) {
        cellID = String(event.id);
        
        if (event.className == "inactive_cell") {
            dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)] = 0;
            console.log("active cell clicked")
            console.log(dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)])
        } else if (event.className == "active_cell") {
            number = gameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)];
            console.log("inactive cell clicked")
            console.log("number", number)
            dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)] = number;
            console.log("dynamic", dynamicGameNumbers[parseInt(cellID[0])-1][parseInt(cellID[1]-1)])
        }

    }


    /// THE GAME //////////////////////////////////////////////////////////////

    let gameNumbers = getGameNumbers(row, col);
    let gameNumbersByCol = getGameNumbersByCol(gameNumbers);
    let dynamicGameNumbers = JSON.parse(JSON.stringify(gameNumbers));
    let dynamicGameNumbersByCol = JSON.parse(JSON.stringify(gameNumbersByCol));

    table.innerHTML = createTableInnerHTML(row, col, gameNumbers); 

    var allTableCells = document.querySelectorAll("td")
    
    allTableCells.forEach(function(e){
        e.addEventListener("click", cancelNumber);
    });
    

    checkAllTheTargets(gameNumbers, gameNumbersByCol)
        
    




});