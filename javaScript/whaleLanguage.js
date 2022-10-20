/* 
In this program I took the input, 'Hey there Jasper', and changed it into "whale language" according to Codecademy. 

First I gave my input and vowels as constant variables.
I wrote the function resutlArray to an empy array.
I went through each letter to find its vowel index. If it was an 'e' or 'u' it needed to be doubled. The results were pushed to the open array.
To log the result I joined each element of the array and changed it to upper case.

I was able to run console logs along the way to check my progress and then comment them out.
*/

const input = 'Hey there Jasper';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i = 0; i < input.length; i ++){
  for(let vowelIndex = 0;
  vowelIndex<vowels.length; vowelIndex++){
    //console.log(`vowelIndex is ${vowelIndex}.`)
    if(input[i] === 'e'){
     resultArray.push(input[i]);
    }
    if(input[i] === 'u'){
     resultArray.push(input[i]);
    }
  if(input[i] === vowels[vowelIndex]){
    //console.log(input[i]);
    resultArray.push(input[i]);
  }
  }
//console.log(`i is ${i}`) 
};

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);





