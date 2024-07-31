const { Router } = require("express")

const peopleController = require("../controllers/people")

const peopleRouter = Router()

peopleRouter.get("/", peopleController.index)
peopleRouter.get("/:name", peopleController.show)
peopleRouter.get("/id/:id", peopleController.showById)
peopleRouter.post("/", peopleController.create)
peopleRouter.delete("/:name", peopleController.destroy)
// peopleRouter.patch("/:name", peopleController.update)

module.exports = peopleRouter