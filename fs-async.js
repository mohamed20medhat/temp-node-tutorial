const { readFile, writeFile } = require("fs");


console.log("start")
readFile("./myContent/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./myContent/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./myContent/result-async.txt",
      `here is the result: ${first} , ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task")
