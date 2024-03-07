import createMap from '../game_map/createMap.js'
import displayMap from '../game_map/displayMap.js'
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function genMap(req, res) {
  console.log("body: ", req.body.seed)
  const params = {
    seed: req.body.seed ?? undefined,
    width: req.body.width ?? undefined,
    height: req.body.height ?? undefined,
  }
  const map = createMap(params.seed, params.width, params.height)
  console.log(displayMap(map))
  res.json(map)
}
