"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
/**
 * Generate help from the CLI State
 * @param state CLI state to be use
 */
function generateHelp(state) {
    helpers_1.event.emit("showHelp");
    console.log("\nOPTIONS:\n");
    let optionShorthands = state.options.map(o => o.shorthand).sort();
    state.options.sort().map((option, i) => {
        let name = `--${option.name}${typeof optionShorthands[i] !== "undefined" ? (', -' + optionShorthands[i]) : ''}`;
        console.log(`${name.padEnd(30, " ")}${option.description}`);
    });
    console.log("\nCOMMANDS:\n");
    state.commands.map(command => {
        let name = `${command.name}`;
        let description = command.hasOwnProperty('parent') ? `Alias of '${command.parent}' command.` : command.description;
        console.log(name.padEnd(30, " ") + description);
    });
}
exports.default = generateHelp;
