const arr = new Array(9);
for(var i = 0;i<9;i++){
    arr[i]=new Array(9);
}
    function board() {
    const boardcontainer = document.getElementById("container");
    
    for (var i = 0; i < 9; i++) {

        for (var j = 0; j < 9; j++) {
            var  index = i*9+j;
            switch(index){
                case 2:
                    val(4);          
                    arr[0][2]=4;
                    continue;
                    
                case 3:
                    val(6);
                    arr[0][3]=6;
                    continue;
                
                case 6:
                    val(9);
                    arr[0][6]=9;
                    continue;

                case 11:
                    val(2);
                    arr[1][2]=2;
                    continue;

                case 14:
                    val(5);
                    arr[1][5]=5;
                    continue;
                case 17:
                    val(8);
                    arr[1][8]=8;
                    continue;
                    
                case 22:
                    val(4);
                    arr[2][4]=4;
                    continue;



                case 23:
                    val(2);
                    arr[2][5]=2;
                    continue;


                case 28:
                    val(5);
                    arr[3][1]=5;
                    continue;

                case 30:
                    val(7);
                    arr[3][3]=7;
                    continue;


                case 34:
                    val(2);
                    arr[3][7]=2;
                    continue;


                case 38:
                    val(6);
                    arr[4][2]=6;
                    continue;


                case 39:
                    val(8);
                    arr[4][3]=8;
                    continue;


                case 42:
                    val(7);
                    arr[4][6]=7;
                    continue;


                case 55:
                    val(6);
                    arr[6][1]=6;
                    continue;
                
                    case 57:
                    val(5);
                    arr[6][3]=5;
                    continue;

                    case 60:
                    val(2);
                    arr[6][6]=2;
                    continue;

                    case 64:
                    val(8);
                    arr[7][1]=8;
                    continue;

                    case 69:
                    val(6);
                    arr[7][6]=6;
                    continue;

                    case 73:
                    val(4);
                    arr[8][1]=4;
                    continue;

                    case 75:
                    val(2);
                    arr[8][3]=2;
                    continue;

                    case 80:
                    val(9);
                    arr[8][8]=9;
                    continue;
            }
          

            const box = document.createElement('div');
            box.classList.add("box");
            const input = document.createElement('input');
            input.type = 'string';
            input.classList.add("int");
            input.maxLength = 1;
            const setInputValue = function (input, i, j) {
                input.addEventListener('input', function(event) {
                    var num =parseInt(event.target.value);
                    arr[i][j] = num; 
                    console.log(arr[i][j]);
                });
            };
            setInputValue(input, i, j);
            box.appendChild(input);
            boardcontainer.appendChild(box);
        }
    }
 
}




function init() {
   
    board();
}
window.onload = init;







function val( x){
    const boardcontainer = document.getElementById("container");
    const box = document.createElement('div');
    box.classList.add("box");
    var text = document.createTextNode(x);
    box.appendChild(text);
    boardcontainer.appendChild(box);
   }



   function  check(arr) {
  
    const N = 9;
    

    function isValid(arr) {
        const set = new Set();
        for (const num of arr) {
            if (num !== 0 && set.has(num)) {
                return false;
            }
            set.add(num);
        }
        return true;
    }
    
    // Check rows
    for (let row = 0; row < N; row++) {
        if (!isValid(arr[row])) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < N; col++) {
        const column = [];
        for (let row = 0; row < N; row++) {
            column.push(arr[row][col]);
        }
        if (!isValid(column)) {
            return false;
        }
    }

    // Check subgrids
    for (let row = 0; row < N; row += 3) {
        for (let col = 0; col < N; col += 3) {
            const subgrid = [];
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    subgrid.push(arr[i][j]);
                }
            }
            if (!isValid(subgrid)) {
                return false;
            }
        }
    }
    
    return true; // Sudoku is solved correctly
    
}

function winner(){
    if(check(arr)){
        var audio = document.getElementById("congrats");
        audio.play();
        alert("Congraluations you won ");
       
    }

    
    else{
     
        var audio = document.getElementById("win");
        audio.play();
        alert("TRY AGAINNN!!!!!!")
    }
       
    }
