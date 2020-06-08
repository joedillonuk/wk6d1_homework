// Episode 1
//
// SPOILER: The murderer is 'Miss Scarlet'.
// The verdict logged to the console in this episode is the result of an anonymous function called declareMurderer which returns the value of the scenario object's key "murderer" interpolated into a string. This scenario object was declared as a const with block scope and the verdict is called within this same block.
//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 2
//
// SPOLIER: The murderer is Professor Plum. Someone tried to shift the blame to Mrs. Peacock however the original murderer was definted as a constant matching the string of 'Proferssor Plum'.
//
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);



// Episode 3

//SPOILER: There have been two murders. The first verdict called to the stand was the declareMurderer function which let the murderer be defined as 'Mrs. Peacock' within its scope. When the second verdict was called this declareMurderer function was not; since that function's 'let murderer' declaration was limited in scope we refer instead to the original let murderer of 'Professor Plum'.

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);



// Episode 4

// SPOILER: We are unable to confirm a murderer however we do have three suspects. We declared a constant of 'suspects' in which our declareAllSuspects function changed the third or our initial suspects to 'Colonel Mustard' however this was limited in scope so our final announcement of suspectThree remains 'Mrs. Peacock' as originally declared within our block.


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);



// Episode 5

// SPOILER: The murder weapon was the 'Revolver'. Although the scenario was declared as a constant, this constant was an object which is mutable. changeWeapon was called. An argument ensued ('Revolver'), and the scenario.weapon of 'Candle Stick' was switched just before the verdict was declared.

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 6

// SPOILER: The murderer is 'Mrs. White'. The original murderer with block scope was 'Colonel Mustard'. Just before the verdict, a call to changeMurderer was made. This initially updated the culprit to 'Mr Green' however a second function was defined within changeMurderer which shifted blame to Mrs. White; before the original changeMurderer function ended this second plotTwist function was called and the verdict of 'Mrs. White' was confirmed.

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);



// Episode 7

// SPOILER: The murderer is 'Proferssor Plum'. Although the changeMurderer function brought many revelations when it was called right before the murderer was identified, the verdict only called the declareMurderer function whose only purpose was to declare the murderer variable withouth touching changeMurderer, its tangled plotTwist or unexpectedOutcome.

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 8

// SPOILER: The Murderer was Colonel Mustard in the Dining Room with the Candle Stick. changeScenario contained a plotTwist and withint this plotTwist was a further unexpectedOutcome function. When the unexpectedOutcome was initally called the evidence did not match out arguments. A later plot twist revealed that 'Colonel Mustard' was infact the murderer and within this twist the unexpectedOutcome was called upon again to show that the mutable object key of weapon was changed to "Candle Stick".

// const scenario = {          // 1 - changeScenario 2 - unexpectedOutcome 3 - plotTwist       4 - unexpectedOutcome
//   murderer: 'Mrs. Peacock', // 1 - Mrs Peacock    2 - Mrs Peacock       3 - Colonel Mustard 4 - Colonel Mustard
//   room: 'Conservatory',     // 1 - Dining Room    2 - DiningRoom        3 - Dining Room     4 - Dining Room
//   weapon: 'Lead Pipe'       // 1 - Lead Pipe      2 - Lead Pipe         3 - Lead Pipe       4 - Candle Stick
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);



// Episode 9

// SPOILER: The murderer is 'Professor Plum'. A condition was called to switch the blame to 'Mrs. Peacock' however this was a let variable and therefore invalid outwith this condition. I honestly cannot believe we let Professor Plum commit so many murders.

//
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);



// Extensions
// Make up your own episode!


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const muderer = 2;
var vitalClue = 3;
let suspect = someInvestigation(vitalClue);

function someInvestigation(value = '1'){

  if(value > 3){
    scenario.murderer = 'Professor Plum';
  } else if(value === 1) {
    scenario.murderer = 'There was no murder';
  } else {
    scenario.murderer = 'Joe';
  }
  searchingHouse()
  return scenario.murderer
}
suspect = someInvestigation(vitalClue)
console.log(suspect);

function searchingHouse(){
  if(scenario.room != 'Conservatory'){
    scenario.weapon = 'A wee push';
    scenario.murderer = 'Death Itself'
  } else{
    vitalClue = (vitalClue % muderer);
  }
}
