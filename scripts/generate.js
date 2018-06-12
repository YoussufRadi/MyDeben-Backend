// Make Sure You execute the script in the scripts directory
const { exec } = require("child_process");

const dir = process.argv[2];

exec(
  `mkdir ../${dir}; 
   touch ../${dir}/controller.js;
   touch ../${dir}/model.js;
   touch ../${dir}/routes.js;
   touch ../${dir}/test.spec.js;`,
  (err, stdout, stderr) => {
    if (err) {
      return;
    }
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
);
