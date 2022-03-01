
      if (boxOne === boxTwo && boxOne=== boxThree) {
        if (boxOne === 'x') {
          xWin();
        } else if (boxOne === 'o') {
          oWin();
        }
        console.log('winning combo: a');
      } else if (boxOne === boxFive && boxOne === boxNine) {
        if (boxOne === 'x') {
          xWin();
        } else if (boxOne === 'o') {
          oWin();
        }
        console.log('winning combo: b');
      } else if (boxOne === boxFour && boxOne === boxSeven) {
        if (boxOne === 'x') {
          xWin();
        } else if (boxOne === 'o') {
          oWin();
        }
        console.log('winning combo: c');
      } else if (boxTwo === boxFive && boxTwo === boxEight) {
        if (boxTwo === 'x') {
          xWin();
        } else if (boxTwo === 'o') {
          oWin();
        }
        console.log('winning combo: d');
      } else if (boxThree === boxSix && boxThree === boxNine) {
        if (boxThree === 'x') {
          xWin();
        } else if (boxThree === 'o') {
          oWin();
        }
        console.log('winning combo: e');
      } else if (boxThree === boxFive && boxThree === boxSeven) {
        if (boxThree === 'x') {
          xWin();
        } else if (boxThree === 'o') {
          oWin();
        }
        console.log('winning combo: f');
      } else if (boxFour === boxFive && boxFour === boxSix) {
        if (boxFour === 'x') {
          xWin();
        } else if (boxFour === 'o') {
          oWin();
        }
        console.log('winning combo: g');
      } else if (boxSeven === boxEight && boxSeven === boxNine) {
        if (boxSeven === 'x') {
          xWin();
        } else if (boxSeven === 'o') {
          oWin();
        }
        console.log('winning combo: h');
      } else if (
        // tie conditions
        boxOne !== '' &&
        boxTwo !== '' &&
        boxThree !== '' &&
        boxFour !== '' &&
        boxFive !== '' &&
        boxSix !== '' &&
        boxSeven !== '' &&
        boxEight !== '' &&
        boxNine !== ''
      ) {
        tie();
      }