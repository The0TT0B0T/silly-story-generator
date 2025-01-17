const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

 // RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const inserty = ["the soup kitchen", "Disneyland", "the White House"];

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem =  randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
    console.log(newStory);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}