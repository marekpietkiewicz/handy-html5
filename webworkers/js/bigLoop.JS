self.addEventListener("message", (event) => {
    if (event.data === "start") {
        postMessage({cmd: "wow", res: "wow new message!, received from HTML"});
    }
});


for (var i = 0; i <= 1000000000; i += 1) {
    var j = i;
}
postMessage({cmd: "counter", res: i});