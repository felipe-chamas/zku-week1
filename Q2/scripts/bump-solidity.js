const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;

const verifierRegex = /contract .+Verifier/;

for (const file of fs.readdirSync("./contracts")) {
    if (!file.endsWith(".sol")) return;

    const [name, _ext] = file.split(".");

    const content = fs.readFileSync(`./contracts/${file}`, { encoding: "utf-8" });
    const bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
    const contract = bumped.replace(verifierRegex, `contract ${name}`);
    fs.writeFileSync(`./contracts/${file}`, contract);
}
