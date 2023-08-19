const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Start asking questions
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question(`What's your favourite thing to eat for ${meal}? `, (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              // Generate the profile description
              const profileDescription = `My name is ${name}, and I enjoy ${activity}. I listen to ${music} while doing that. My favorite meal is ${meal}, and I love to eat ${food}. My favorite sport is ${sport}, and my superpower is ${superpower}.`;

              console.log(profileDescription);

              // Close the readline interface
              rl.close();
            });
          });
        });
      });
    });
  });
});
