document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function(e) {
    if(e.code === "Enter") {
      let input = document.getElementById("input").value;
      document.getElementById("user").innerHTML = input;
      output(input);
    }
  });
});

// form toggle
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  // remove all characters including slangs and typos, except word characters, space, and digits

let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
text = text
.replace(/ a /g, " ")
.replace(/i feel /g, "")
.replace(/whats/g, "what is")
.replace(/please /g, "")
.replace(/ please/g, "");


const trigger = [
  ["hi", "hey", "woof"],
  ["good morning", "good afternoon", "good evening"],
  ["what is going on", "what is up", "how is it going"],
  ["good", "not too bad", "happy", "cool", "fantastic"],
  ["not too good", "bored", "tired", "sad"],
  ["tell me a story", "tell me a joke"],
  ["thanks", "cheers", "thank you"],
  ["bye", "see ya", "goodbye"]
];

const reply = [
  ["hello!", "hi!", "woof"],
  [
    "hi how are you?",
    "pretty well, how are doing?",
    "woof woof"
  ],
  [
    "Nothing much",
    "exciting news!"
  ],
  ["glad you're okay"],
  ["why?", "I hope you feel better"],
  ["what about?", "once upon a time..."],
  ["you're welcome", "no problem, thanks"],
  ["cheers", "see you later"]
];

const alternative = [
  "same",
  "go on...",
  "try again",
  "I'm listening...",
  "dawg..."
];

function compare(triggerArray, replyArray, text) {
  var item;
  for(var i = 0; i < triggerArray.length; i++) {
    for (var j = 0; j < triggerArray.length; j++) {
      if(triggerArray[i][j] === text) {
        items = replyArray[i];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

//replacing typos with alternative responses

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text

  .replace(/ a /g, " ")
  .replace(/i feel /g, "")
  .replace(/whats/g, "what is")
  .replace(/please /g, "")
  .replace(/ please/g, "");
  if(compare(trigger, reply, text)) {         //compare arrays, then search keyword, then random alternative
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  addChat(input, product)      //update DOM
}

// bot response to html

function addChat(input, product) {
  const mainDiv = document.getElementsByClassName("income-msg");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span`;
  income-msg.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span`;
  income-msg.appendChild(botDiv);
  speak(product);

}





