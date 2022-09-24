const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!")
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note!")
  }
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Reading a note!")
  }
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("Listing notes!")
  }
});

console.log(yargs.argv)
