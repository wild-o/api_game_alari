import './config/types.js'
import routes from "./config/routeIndex.js"

class Router {
  /**
   * @param {Express} app
   */
  constructor(app) {
    this.routes = routes
    this.routes.forEach(route => {
      app.get(route.path, route.callback)
      app.get(`/docs${route.path}`, /**@param {Request} req @param {Response} res */(req, res) => {
        /**
         * @type {Route}
         */
        const routeInfo = {
          path: route.path,
          usage: route.usage,
          authRequirements: route.authRequirements,
        }
        res.json(routeInfo)
      })
    })
  }
  /**
   * This function will return info about the given route,
   * and will throw an error on failure.
   * @param {string} path
   * @returns {routeInfo}
   */
  getDocsForRoute(path) {
    const routeInfo = routes.find((obj) => obj.path === path)
    if (routeInfo === undefined) {
      throw new Error("Route not found")
    }
    return routeInfo
  }

}

export default Router