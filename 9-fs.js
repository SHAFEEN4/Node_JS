const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  let content = result;
  writeFile(
    "./content/second.txt",
    `what ${content}`,
    { flag: "a" },
    (err, result) => {}
  );
});
