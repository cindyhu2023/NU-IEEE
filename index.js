let theta0 = 0.063237701;
let theta1 = 0.097359425 * 0.01;
let theta2 = -0.677224832 * 0.01;
let theta3 = 0.005025342;
let theta4 = 0.002704245;
let theta5 = 0.019984786;
let theta6 = 0.042708879 * 0.01;
let theta7 = 0.006748481;
let theta8 = -0.213050033;

let x1; //#nuWinPercent
let x2; //#oppoWinPercent
let x3; //#nuPoints
let x4; //#oppoPoints
let x5; //#nuFouls
let x6; //#nuFG
let x7; //#homeCourt
let x8; //#oppoCourt

let h; //chance of winning

$("#go").click(function(event){
  event.preventDefault();
  $('.result').hide();
  $('.win').hide();
  $('.lose').hide();
  //store all vals with getValForAll()
  getValForAll();

  //check if there is empty values
  //if yes, show alert
  //if not, do calculation and show result
  if (checkEmpty()){
    alert('please fill in all the fields (numbers only)');
  }
  else {
    calc();
    showResult();
  }
});

//direct back to the form when click try differnt values button, hide the result as well
$("#backToForm").click(function(){
  $('.win').hide();
  $('.lose').hide();
  $('.result').hide();
});


function getValForAll(){
    x1 = checkInput($('#nuWinPercent').val());
    x2 = checkInput($('#oppoWinPercent').val());
    x3 = checkInput($('#nuPoints').val());
    x4 = checkInput($('#oppoPoints').val());
    x5 = checkInput($('#nuFouls').val());
    x6 = checkInput($('#nuFG').val());

    if ($('#homeCourt').val() === "yes"){
      x7 = 1;
    } else if ($('#homeCourt').val() === "no") {
      x7 = 0;
    } else {
      x7 = undefined;
    }

    if ($('#oppoCourt').val() === "yes"){
      x8 = 1;
    } else if ($('#oppoCourt').val() === "no") {
      x8 = 0;
    } else {
      x8 = undefined;
    }
}

function checkInput(n){
  //check whether the input is empty, a string, or an empty string (when delete a number after hit go)
  //convert the input into num or undefined
  //does not check if in % form or decimal form
  let result;
  if (n === "") {
    result = undefined;
  } else if (n === undefined) {
    result = undefined;
  } else if (+n === NaN ) {
    result = undefined;
  } else {
    result = +n;
  }

  return result;
}

function checkEmpty(){
  //check if any input is empty, if any one of them is empty, return true
  if (x1 === undefined || x2 === undefined || x3 === undefined
    || x4 === undefined || x5 === undefined || x6 === undefined
    || x7 === undefined || x8 === undefined){
      return true;
    } else {
      return false;
    }
}

function calc(){
  //do calculation
  h = theta0 + (theta1 * x1) + (theta2 * x2) + (theta3 * x3)
  + (theta4 * x4) + (theta5 * x5) + (theta6 * x6) + (theta7 * x7)
  + (theta8 * x8);
  console.log(h);
}

function showResult(){
  //show .win if h>0.5, show .lose if h<=0.5
  //direct the window to the result part

  if (h > 0.5) {
    $('.result').show(1000);
    $('.win').show(1000);
  } else {
    $('.result').show(1000);
    $('.lose').show(1000);
  }
  location.href = "#resultBox";
}
