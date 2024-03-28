import "../config/types.js"
/**
 * 
 * @param {GameMap} map 
 */
export default function displayMap(map) {
  let display = `==========\n`
  for (let row = 0; row < map.size.y; row++) {
    for (let col = 0; col < map.size.x; col++) {
      if (map.nodes.find((node => node.position.x === col && node.position.y === row))) {
        display += "#"
      }
      else {

        display += "-"
      }
    }
    display += "\n"
  }
  display += "==========\n"
  let display2 = "";
  for (let row = 0; row < map.size.y; row++) {
   for (let col = 0; col < map.size.x; col++) {
      let found;

      if (found = map.nodes.find((node => node.position.x === col && node.position.y === row))) {
        display2 += String.fromCharCode(found.nodeKind + 64);
      }
      else {

        display2 += "-"
      }
    }
    display2 += "\n"
  }
  display2 += "==========\n"
  return display + display2;
}



// Alternate way that this could be created here
const GameMap = {
  name: '',
  age: 0,
  create: function (name, age) {
    const newAuthor = Object.create(this);
    newAuthor.name = name;
    newAuthor.age = age;
    return newAuthor;
  }
};