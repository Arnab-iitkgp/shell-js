const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
const prompt = () => {
  rl.question("$ ", (answer) => {
    if(answer.startsWith('echo')){
      const s = answer.split(" ").slice(1).join(" ");
      console.log(s);
    }else if(answer==="exit 0")process.exit(0);
    else{
      console.log(`${answer}: command not found`);
    }
   prompt();

  });
};

prompt();
