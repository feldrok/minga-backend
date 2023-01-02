import categories from "./categories.route.js"
import express from "express"
import users from "./users.route.js"
const router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send('minga server ready')
})

router.use("/users", users)
router.use("/categories", categories)

export default router