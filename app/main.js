const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
const prompt = () => {
  rl.question("$ ", (answer) => {
    if(answer.trim()==='exit 0')process.exit(0);
    console.log(`${answer}: command not found`);
  //  prompt();

  });
};

prompt();
