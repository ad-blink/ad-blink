const shell = require("shelljs");
const io = require("socket.io-client");
const socket = io.connect("http://192.168.43.226:9000/");

const fs = require("fs");
const http = require("http");

// VLC INSTANCE
const VLC_INSTANCE = () => {
  shell.exec(" vlc ./media/*.* --loop --fullscreen --no-video-title-show", {
    async: true
  });
};
VLC_INSTANCE();
socket.on("message", function(data) {
  console.log(data);
});
socket.on("new-advert", async function(url) {
  await shell.exec("killall vlc");
  console.log("URL", url);
  const file = await fs.createWriteStream(
    "./media/" + url.slice(url.lastIndexOf("/") + 1)
  );
  const request = await http.get(url, function(response) {
    response.pipe(file);
  });

  await VLC_INSTANCE();
});
socket.emit("message", "From the client");
