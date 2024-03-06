import routes from "../config/routeIndex.js";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default function availbleRoutes(req, res) {
  res.json({routes: routes.map(r => r.path)})
}
