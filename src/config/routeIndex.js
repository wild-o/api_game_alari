import './types.js'
import about from "../routes/about.js"
import root from "../routes/root.js"
import availableRoutes from '../routes/availableRoutes.js'
import genMap from '../routes/genMap.js'
import obtainPlayerName from '../../playerStatistics/playerHP.js'

// todo make a type for authRequirements, so that we can have standard options for it.

/**
 * @type {Route[]}
 */
const routes = [
  {
    path: "/",
    method: "get",
    usage: "This route gets you to the welcome and an overview of how to use it.",
    authRequirements: "none",
    handler: root
  },
  {
    path: "/about",
    method: "get",
    usage: "this is the about route which gives an overview of project",
    authRequirements: "none",
    handler: about
  },
  {
    path:"/name",
    method:"get",
    usage:"This route will get the user's name",
    authRequirements:"none", 
    handler: obtainPlayerName
  },
  
  {
    path: "/routes",
    method: "get",
    usage: "This is used to get the full list of available routes",
    authRequirements: "none",
    handler: availableRoutes
  },
  {
    path: "/gen_map",
    method: "put",
    usage: "This is a test of the map generator",
    authRequirements: "token required (probably)",
    handler: genMap
  }


]
export default routes