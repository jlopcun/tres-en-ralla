const gameBoard = document.getElementById('gameBoard');
const Row1 = document.getElementById('firstRow');
const Row2 = document.getElementById('secondRow');
const Row3 = document.getElementById('thirdRow');
const line1 = Row1.children;
const line2 = Row2.children;
const line3 = Row3.children;
const countX = document.getElementById('countX');
const count0 = document.getElementById('count0');

let xcounter = 0;
let ycounter = 0;
const game = {
    row1 : [...line1],
    row2 : [...line2],
    row3 : [...line3],
    diagonal1 : [line1[0],line2[1],line3[2]],
    diagonal2 : [line1[2],line2[1],line3[0]],
    vertical1 : [line1[0],line2[0],line3[0]],
    vertical2 : [line1[1],line2[1],line3[1]],
    vertical3 : [line1[2],line2[2],line3[2]]
}

let RegulSign = 0;
const validarEmpate=()=>{
    if(RegulSign===9){
        alert('EMPATE:ninguno de los dos jugadores gana')
    }
}
const reiniciar = (all) =>{
    RegulSign=0;
    for(let arr of all){
      arr.forEach(el=>{
          el.textContent = '*';
      })
    }
}
const hasWin = (all) => {
    for(let arr of all){
        if(arr[0].textContent===arr[1].textContent && arr[1].textContent===arr[2].textContent && arr[0].textContent!=='*'){
            alert(`el ganador es : ${arr[0].textContent}`);
            (arr[0].textContent==='X')?xcounter++:ycounter++;
            countX.textContent = countX.textContent = xcounter;
            count0.textContent = count0.textContent = ycounter;
            console.log(xcounter,ycounter)
            reiniciar(all)
        }
    }
  
}
gameBoard.addEventListener('click',(e)=>{
   if(e.target.className.startsWith('game-item') && e.target.textContent==='*'){
       let indexOfElement = e.target.className.slice(-1);
       let parentElement = e.target.parentElement;
       let ChildrenOfRowElement = parentElement.children[indexOfElement-1];
    //    if(allRowValidation) alert('X wins')
    let all  = Object.values(game);
    //    ChildrenOfRowElement.textContent = 'X';
    (RegulSign%2===0)?ChildrenOfRowElement.textContent = 'X':ChildrenOfRowElement.textContent = 'O';
    RegulSign++;
    // Validar quien ha ganado la partida
    hasWin(all)
    
    // validacion de empate
    if(RegulSign===9){
        validarEmpate();
        reiniciar(all);
    }
   }
})
