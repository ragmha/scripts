const fs = require("fs");
const download = require("download");

var files = [];

for (let i = 1; i <= 47; i++) {
	files.push(`<VIDEOPATH.mp4>`);
}

Promise.all(files.map(f => download(f, "FILENAME")))
	.then(() => console.log("files downloaded"))
	.catch(e => console.log(e));
