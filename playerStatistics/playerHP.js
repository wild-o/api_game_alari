/*Should grabbing a player's name and HP be in itself a route or a function*/
import "../src/config/types.js";
/**
 *
 * @param {string} name
 * @param {number} health
 * @returns {Player}
 */

//Array of status conditions
//Crippled, Nauseated, Drowsy? 

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
