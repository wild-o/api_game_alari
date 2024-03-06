export default function about(req, res) {
  //? maybe consider using an object like this for representing all the routes, and functions, then loop through them to for app.get,
  //? as well as the printing the documentation using a map of the object.
  const howTo = [
    "This is the game API",
    {

    }
  ]
  res.json(howTo).status(200)
}