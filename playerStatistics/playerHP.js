/*Should grabbing a player's name and HP be in itself a route or a function*/
import PromptSync from "prompt-sync";
import "../src/config/types.js";

/**
 *
 * @param {string} name
 * @param {number} health
 * @returns {Player}
 */

let prompt = PromptSync();
let maximumHP = 200;

export default function obtainPlayerName(name) {
  let pname = prompt("What is your name?");
  this.playerName = pname;

  const playerInfo = [
    {
      name: playerName,
      health: maximumHP,
    },
  ];

  return playerInfo;
}



//Alternate way that this could perhaps be created
const player = {
  name: "",
  health: 0,
  create: function (name, age) {
    const newAuthor = Object.create(this);
    newAuthor.name = name;
    newAuthor.age = age;
    return newAuthor;
  },
};
