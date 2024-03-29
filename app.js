const yargs = require("yargs")
const notes = require("./notes.js")

yargs.command({
    "command": "add",
    "describe": "Add a new note",
    "builder": {
        "title": {
            "describe": "Note title",
            "demandOption": true,
            "type": "string"
        },
        "body": {
            "describe": "Note body",
            "demandOption": true,
            "type": "string"
        }
    },
    handler (argv) {
        console.log("Adding a new note!");
        notes.addNote(
            argv.title,
            argv.body
        );
    }
})

yargs.command({
    "command": "remove",
    "describe": "Remove a note",
    "builder": {
        "title": {
            "describe": "Note title",
            "demandOption": true,
            "type": "string"
        }
    },
    handler (argv) {
        console.log("Removing a note!");
        notes.removeNote(argv.title);
    }
})

yargs.command({
    "command": "read",
    "describe": "Read a note",
    "builder": {
        "title": {
            "describe": "Note title",
            "demandOption": true,
            "type": "string"
        }
    },
    handler (argv) {
        console.log("Reading a note!");
        notes.readNote(argv.title);
    }
})

yargs.command({
    "command": "list",
    "describe": "List all notes",
    handler () {
        console.log("Listing notes!");
        notes.listNotes();
    }
})

yargs.demandCommand().parse()
