const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const BUILT_IN_COMMANDS=['echo','type','exit'];
// Uncomment this block to pass the first stage
const prompt = () => {
  rl.question("$ ", (answer) => {

    if(answer.startsWith('echo')){
      const s = answer.split(" ").slice(1).join(" ");
      console.log(s);
    }else if(answer==="exit 0")process.exit(0);
    else if(answer.startsWith('type')){
      const s = answer.split(" ")[1];
      console.log(BUILT_IN_COMMANDS.includes(s)?`${s} is a shell builtin`:`${s}: not found`);
    }
    else{
      console.log(`${answer}: command not found`);
    }
   prompt();

  });
};

prompt();
