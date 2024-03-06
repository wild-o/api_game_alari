import './types.js'
import about from "../routes/about.js"
import root from "../routes/root.js"
import availbleRoutes from '../routes/availableRoutes.js'

// todo make a type for authRequirements, so that we can have standard options for it.

/**
 * @type {Route[]}
 */
const routes = [
  {
    path: "/",
    usage: "This route gets you to the welcome and an overview of how to use it.",
    authRequirements: "none",
    callback: root
  },
  {
    path: "/about",
    usage: "this is the about route which gives an overview of project",
    authRequirements: "none",
    callback: about
  },
  {
    path: "/routes",
    usage: "This is used to get the full list of available routes",
    authRequirements: "none",
    callback: availbleRoutes
  }
]
export default routes