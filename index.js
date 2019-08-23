const shell = require("shelljs");

// console.log(shell.exec("git pull"))
console.log("Process Started");
// Declarations
const VLC_INSTANCE = () => {
  shell.exec(" cvlc ./media/*.* --loop --fullscreen --no-video-title-show", {
    async: true
  });
  return;
};
async function LOOP() {
  const SHELL_PULL_RESPONSE = await shell.exec("git pull");
  console.log(SHELL_PULL_RESPONSE);
  if (SHELL_PULL_RESPONSE.stdout === "Already up to date.\n") {
    console.log("NO UPDATES");
  } else if (SHELL_PULL_RESPONSE.err) {
    console.log("Bad Internet");
  } else if (SHELL_PULL_RESPONSE.code === 0) {
    await shell.exec("killall vlc");
    await VLC_INSTANCE();
  }
  LOOP();
}

// Execution
// Initial VLC Instance
VLC_INSTANCE();
// Process Loop
LOOP();
