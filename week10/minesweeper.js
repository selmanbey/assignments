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
        
        return randomId;    // returns a string
    }

    function placeMines(numberofMines) {
        mineTracker = []
        for (let i = 0; i < numberofMines; i++) {
            mineID = randomizer();
            mineTracker.push(mineID);
        }
        return mineTracker;
    }


    function findSurroundingCells(stringID) {
        let surroundingCells = [];  // surroundingCells
        let n = parseInt(stringID);  // numberID

        if (stringID[0] === "0" && stringID[1] === "1") {
            if (n - 1 === "100") {
                //pass
            } else {
                let temporaryList = [];  
                temporaryList.push(String(n + 1), String(n - 1), String(n + 100), String(n + 99), String(n + 101));
                temporaryList.forEach(function(element) {
                    surroundingCells.push("0" + element)
                })
            }      
        } else if (stringID[0] === "0" && stringID[1] === "9") {
            surroundingCells.push("0" + String(n + 1), "0" + String(n - 1), "0" + String(n - 100), "0" + String(n - 99), "0" + String(n - 101), String(n + 100), String(n + 99), String(n + 101));
        } else if (stringID[0] === "1" && stringID[1] === "0") {
            surroundingCells.push(String(n + 1), String(n - 1), "0" + String(n - 100), "0" + String(n - 99), "0" + String(n - 101), String(n + 100), String(n + 99), String(n + 101));
        } else if (stringID[0] === "0") { 
            let temporaryList = [];  
            temporaryList.push(String(n + 1), String(n - 1), String(n - 100), String(n - 99), String(n - 101), String(n + 100), String(n + 99), String(n + 101));
            temporaryList.forEach(function(element) {
                surroundingCells.push("0" + element)
            })
       
        } else if (stringID[0] === "1" && stringID[1] === "5") {
            surroundingCells.push(String(n + 1), String(n - 1), String(n - 100), String(n - 99), String(n - 101));
        } else {
            surroundingCells.push(String(n + 1), String(n - 1), String(n - 100), String(n - 99), String(n - 101), String(n + 100), String(n + 99), String(n + 101));
        };
        finalList = []
        surroundingCells.forEach(function(element) {
            if (element[2] === "1" && element[3] === "6") {
                //pass
            } else if (element[2] === "0" && element[3] === "0") {
                //pass
            } else {
                finalList.push(element)
            }
        });

        return finalList
    }

    function getNumbered(cellIDString) {
        let surroundingCells = findSurroundingCells(cellIDString);;

        var howManyMinesAround = 0
        surroundingCells.forEach(function(element){
            if (mineTracker.indexOf(element) !== -1) {
                howManyMinesAround += 1;
            };
        })
        
        cell = document.getElementById(cellIDString)
        if (howManyMinesAround === 0) {    
            if(mineTracker.indexOf(cellIDString) === -1) {
                cell.className = "empty"
            } else {
                cell.className = "mine"
            }    
        } else {
            if(mineTracker.indexOf(cellIDString) === -1) {
                cell.className = String(howManyMinesAround);
            } else {
                cell.className = "mine"
            }
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

    function openCell(stringID) {     
        cell = document.getElementById(stringID)
        if (mineTracker.indexOf(stringID) === -1) {
            if (cell.className === "empty") {
                cell.style.cssText = "background-color: #bed0f4";
                cell.className = "open";
                openMultipleCellsAround(stringID)
            } else {
                if (cell.className === "open") {
                    //pass
                } else {
                    cell.innerHTML = cell.className;
                    cell.style.cssText = "background-color: #bed0f4";
                    cell.className = "open";
                }
            }
        } else {
            cell.style.cssText = "background-color: #000000";
            endTheGame(safeCells)  
        };
    };


    function chooseCell(){
        let cellID = this.id;
        openCell(cellID)
        let gamestatus = false;
        gamestatus = isGameWon();
        console.log("isGameWon", gamestatus, typeof gamestatus)
        if (gamestatus) {
            document.querySelector(".gamewon").style.cssText = "display: block";
        }
    };

    function markCell(event) {
        event.preventDefault();
        if (this.className !== "open") {
            this.style.cssText = "background-color: #900C3F";
        }
    };


    function openMultipleCellsAround(stringID) {
        continueCondition = 1;
        centerCell = stringID;
        surroundingCells = findSurroundingCells(centerCell)
        checkList = []
        indexNumber = 0;
        possibleNumbers = ["1", "2", "3", "4", "5", "6"]
        while (continueCondition > 0) {
            surroundingCells.forEach(function(element) {
                cell = document.getElementById(element)
                if (mineTracker.indexOf(element) === -1 && 
                cell.className !== "open" &&
                cell.className === "empty") {
                    cell.style.cssText = "background-color: #bed0f4";
                    cell.className = "open";
                    checkList.push(element)
                } else if (mineTracker.indexOf(element) === -1 &&
                possibleNumbers.indexOf(cell.className) !== -1) {
                    cell.innerHTML = cell.className;
                    cell.style.cssText = "background-color: #bed0f4";
                    cell.className = "open";
                }; 
            });
            centerCell = checkList[indexNumber];
            if (indexNumber === checkList.length) {
                continueCondition = 0;
            }
            surroundingCells = findSurroundingCells(centerCell)
            indexNumber += 1;
        };
    }

    function isGameWon() {
        console.log(safeCells)
        let allCells = []
        safeCells.forEach(function(element) {
            let cell = document.getElementById(element);
            console.log(cell)
            console.log("cell.className !== open", cell.className !== "open")
            if (cell.className !== "open") {
                console.log("if executed");
                allCells.push("false")
            }
        })
        console.log(allCells)
        if (allCells.indexOf('false') !== -1) {
            console.log("if returns false")
            return false
        } else {
            console.log("else returns true")
            return true
        }
    }

    /********************************************************
     * 
                            THE GAME
     * 
     *********************************************************/


    var cells = document.querySelectorAll("td");
    
    var mineTracker = placeMines(5);
    var allCells = getAllIDs();
    var safeCells = findSafeCells(allCells, mineTracker);
    allCells.forEach(function(element){
        getNumbered(element);
    })

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", chooseCell);
        cells[i].addEventListener("contextmenu", markCell);
    };

}); 