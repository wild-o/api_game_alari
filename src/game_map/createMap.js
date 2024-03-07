/**
 * @param {number} width
 * @param {number} height
 * @returns {GameMap}
 */

export default function createMap(seed = Math.random() * 8, width, height) {
  let x = width
  let y = height
  if (width !== 0 && width === undefined) x = 8
  if (height !== 0 && height === undefined) y = width
  console.log('hw: ', { height, width })
  /**
   * @type {GameMap}
   */
  const map = {
    seed: seed,
    size: { x: x, y: y },
    nodes: []
  };

  /*
    trying to have the generation be in relation to the middle
    there is probably a better way to do this, but this is a quick example of the thought
    which may not work out
  */
  const middleOfMap = { x: Math.floor(x / 2), y: Math.floor(y / 2) };
  for (let row = 0; row <= y; row++) {
    for (let col = 0; col <= x; col++) {
      const distX = Math.abs(middleOfMap.x - col)
      const distY = Math.abs(middleOfMap.y - row)
      const distFromCenter = Math.sqrt(distX * distX + distY * distY)
      const val1 = Math.sin(Math.sqrt(((Math.PI + seed) * (distX + distY)) % ((distFromCenter + Math.PI) % Math.PI))) % Math.PI
      const val2 = Math.cos((Math.sqrt((Math.PI + seed) * (distY + distX)) % ((distFromCenter + Math.PI) % Math.PI))) % Math.PI
      const finalVal = val1 + val2;
      if (Math.abs(finalVal) > 1.5) {
      map.nodes.push({ position: { x: col, y: row }, generatorNumber: finalVal, nodeKind: Math.floor((Math.abs(finalVal) * 22) % 22) });
      }
    }
  }
  return map;
}
