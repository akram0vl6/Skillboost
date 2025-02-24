const Router = require("express").Router;
const router = Router();

const AuthController = require("../Controller/auth-controller.js");
const QuestionController = require("../Controller/question-controller.js");
const EditController = require('../Controller/edit-controller.js')
const upload = require("../middlewares/upload");
const checkAuth = require('../middlewares/checkAuth.js')

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/questionAll", QuestionController.getAllQuestions);
router.get("/random", QuestionController.randamQuestion);
router.get("/questions", QuestionController.catigoryquestion);
router.post("/question", QuestionController.createQuestion);

router.put(
  "/profile/edit",
  checkAuth,
  upload.single("avatarUrl"),
  EditController.edit
);


module.exports = router;
