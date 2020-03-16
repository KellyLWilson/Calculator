//Build calulator
class Calculator {
    constructor() {
        this.prev = null;
        this.val = null;
        this.result = null;
        this.math = null;
        this.decimal = null;
    }

    
    numBtn(num){
        if(this.result == null){
            this.val = num;
        } else {
            // no multiple decimals
            if(num === '.'){
                if(this.decimal != true){
                    this.val += num;
                    this.decimal = true;
                }
            } else {
                this.val += num;
            }
        }
        document.getElementById("display").innerHTML = this.val;
    }

// When a number button is clicked
 
mathBtn(operator){
    if(!this.result){
        this.prev= this.val;
    } else {
        this.prev = this.result;
    }
    this.val = "";
    this.decimal = false;
    math = operator;
    this.result = "";
    document.getElementById("display").innerHTML = "";
}

equalBtn() {
    this.decimal = false;
 
    // Perform calculations based on stored operator
    switch(math){
        case "+":
            this.result = parseInt(this.prev) + parseInt(this.val);
            break;
        case "-":
            this.result = this.prev - this.val;
            break;
        case "*":
            this.result = this.prev * this.val;
            break;
        case "/":
            this.result = this.prev / this.val;
            break;
        // If equals is hit without an operator 
        // leave everything as is
        default:
            this.result = this.val;
    }
 
    // Store the current value as the previous so that it can be used for next operation
    this.prev = this.result;
 
    // Put the calculation result in the entry window
    document.getElementById("display").innerHTML = this.result
}
 
// Clears calculator
clearBtn(){
    this.prev = "";
    this.val = "";
    this.result = "";
    this.math = "";
    this.decimal = false;
    document.getElementById("display").innerHTML = "0";
}

}
var c = new Calculator();

// set the clear click handler
var clearBtn = document.getElementById('clearBtn').addEventListener('click', c.clearBtn);
var numBtn = document.getElementById('1').addEventListener('click', c.numBtn);
var mathBtn = document.getElementById('/').addEventListener('click', c.mathBtn);


//c.numBtn(8);