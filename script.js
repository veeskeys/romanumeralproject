const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("number");
const paraOutput = document.getElementById("output");


const getRomanNumeral = (input) =>{
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900,  symbol: "CM" },
    { value: 500,  symbol: "D" },
    { value: 400,  symbol: "CD" },
    { value: 100,  symbol: "C" },
    { value: 90,   symbol: "XC" },
    { value: 50,   symbol: "L" },
    { value: 40,   symbol: "XL" },
    { value: 10,   symbol: "X" },
    { value: 9,    symbol: "IX" },
    { value: 5,    symbol: "V" },
    { value: 4,    symbol: "IV" },
    { value: 1,    symbol: "I" }
  ];

let num = input;  
let result = "";

romanNumerals.forEach(({ value, symbol }) => {
    const convert = Math.floor(num / value);
    result += symbol.repeat(convert);
    num %= value;
  });

  return result;
};


convertBtn.addEventListener("click",() => {

  const num = parseInt(inputNum.value);

  if (isNaN(num)){
    paraOutput.textContent = "Please enter a valid number";}
  else if(num <= 0){
    paraOutput.textContent = "Please enter a number greater than or equal to 1";
  } else if (num>= 4000){
    paraOutput.textContent = "Please enter a number less than or equal to 3999";
  } else {
    paraOutput.textContent = getRomanNumeral(num);
  }

});

inputNum.addEventListener("input", () => {
  if (inputNum.value.trim() === "") {
    paraOutput.textContent = ""; 
  }
});
inputNum.addEventListener("wheel", (e) => {
  e.preventDefault();
});
