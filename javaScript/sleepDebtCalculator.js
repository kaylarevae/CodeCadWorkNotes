//10.13.22
//I made a sleep debt calculator as part of Codecademy's Learn Javascript program.
//I practiced using switch and using math operators. 
//Mistakes made: Remember to put '' around text, remember when to use const or let. 

const getSleepHours = day => {
  switch(day){
    case 'monday':
     return 8
     break;
    case 'tuesday':
     return 7
     break;
   case 'wednesday':
     return 9
     break;
   case 'thursday':
     return 9
     break;
   case 'friday':
     return 8
     break;
   case 'saturday':
     return 6
     break;
   case 'sunday':
     return 7
     break;
     default:
     return "Error!"
  }
 };
 
 const getActualSleepHours = () =>
   getSleepHours('monday') +
   getSleepHours('tuesday') +
   getSleepHours('wednesday') +
   getSleepHours('thursday') +
   getSleepHours('friday') +
   getSleepHours('saturday') +
   getSleepHours('sunday');
 
 const getIdealSleepHours = () => {
   let idealHours = 8;
   return idealHours * 7;
 };
 
 const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours();
   if (actualSleepHours === idealSleepHours){
     console.log('You got the perfect amount of sleep.');
   } 
     else if(actualSleepHours > idealSleepHours){
     console.log('You got' + (actualSleepHours - idealSleepHours) + 'more sleep than needed.');
   } 
     else if(actualSleepHours < idealSleepHours){
     console.log('You need to get some rest because you have a sleep debt of ' + (idealSleepHours - actualSleepHours) + ' hours.');
   }
     else {
       console.log("Error!");
     }
 }
 
 calculateSleepDebt()
 
 
 
 
 
 
 