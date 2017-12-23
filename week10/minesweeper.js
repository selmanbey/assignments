document.addEventListener("DOMContentLoaded", function() {
    
    function getAllIDs() {
        allIDs = []
        for(let i = 1; i < 16; i++) {
            if (i < 10) {
                for (let j = 1; j < 16; j++) {
                    if (j < 10) {
                        allIDs.push("0" + String(i) + "0" + String(j))
                    } else {
                        allIDs.push("0" + String(i) + String(j))
                    }
                }
                
            } else {
                for (let j = 1; j < 16; j++) {
                    if (j < 10) {
                        allIDs.push(String(i) + "0" + String(j))
                    } else {
                        allIDs.push(String(i) + String(j))
                    }
                }
            }
        }
        return allIDs
    }

    function findSafeCells(Cells, Mines) {
        safeCells = []
        Cells.forEach(function(element){
            if (Mines.indexOf(element) === -1) {
                safeCells.push(element)
            }
        })
        return safeCells
    }

    function randomizer() {
        function addZeroOrNot(){
            let a = Math.round(Math.random() * 15);
            while (a === 0) {
                a = Math.round(Math.random() * 15);
            }
            if (a < 10) {
                return String(0) + String(a);
            } else {
                return String(a);
            };
        }

        let x = addZeroOrNot();
        let y = addZeroOrNot();
        
        let randomId = x + y;
        
        return randomId;    //returns a string
    }

    function placeMines(numberofMines) {
        mineTracker = []
        for (let i = 0; i < numberofMines; i++) {
            mineID = randomizer();
            mineTracker.push(mineID);
        }
        return mineTracker;
    }

    function getNumbered(cellIDString) {
        let surroundingCells = [];
        if (cellIDString[0] === "0") {
            let n = parseInt(cellIDString)
            let temporaryList = [];
            temporaryList.push(String(n + 1), String(n - 1), String(n - 100), String(n - 99), String(n - 101), String(n + 100), String(n + 99), String(n + 101));
            temporaryList.forEach(function(element) {
                surroundingCells.push("0" + element)
            })
            // console.log("ifResult:")
            // console.log(surroundingCells)
        } else {
            let n = parseInt(cellIDString)
            surroundingCells.push(String(n + 1), String(n - 1), String(n - 100), String(n - 99), String(n - 101), String(n + 100), String(n + 99), String(n + 101));
            // console.log("elseResult:")
            // console.log(surroundingCells)
        };

        var howManyMinesAround = 0
        surroundingCells.forEach(function(element){
            if (mineTracker.indexOf(element) !== -1) {
                howManyMinesAround += 1;
            };
        })
        
        if (howManyMinesAround === 0) {
            cell = document.getElementById(cellIDString)
            cell.className = "empty"
        } else {
            cell = document.getElementById(cellIDString)
            cell.className = String(howManyMinesAround);
        };
    };

    function endTheGame(safeCells) {
        mineTracker.forEach(function (element) {
            document.getElementById(element).style.cssText = "background-color: #000000";
        })
        safeCells.forEach(function(element) {
            cell = document.getElementById(element)
            if (cell.className === "empty") {
                cell.innerHTML = ""
            } else {
                if (cell.className === "open") {
                    //pass
                } else {
                    cell.innerHTML = cell.className;
                }
            }     
            cell.style.cssText = "background-color: #bed0f4";
        })
        document.querySelector(".gamelost").style.cssText = "display: block";
    }

    function chooseCell(){
        var cellID = this.id;
        
        if (mineTracker.indexOf(cellID) === -1) {
            cellNumber = getNumbered(cellID);
            if (this.className === "empty") {
                this.style.cssText = "background-color: #bed0f4";
                this.className = "open";
            } else {
                this.innerHTML = this.className;
                this.style.cssText = "background-color: #bed0f4";
                this.className = "open";
            }
        } else {
            this.style.cssText = "background-color: #000000";
            endTheGame(safeCells)
            
        };
    };

    function markCell(event) {
        event.preventDefault();
        // console.log(this.style.cssText)
        if (this.className !== "open") {
            this.style.cssText = "background-color: #900C3F";
        }
    };

    cells = document.querySelectorAll("td");
    
    mineTracker = placeMines(30);
    allCells = getAllIDs();
    safeCells = findSafeCells(allCells, mineTracker);
    allCells.forEach(function(element){
        getNumbered(element);
    })

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", chooseCell);
        cells[i].addEventListener("contextmenu", markCell);
    };

}); 