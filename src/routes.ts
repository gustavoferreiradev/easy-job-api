import { Router } from "express";
import authMiddleWare from "./middlewares/authMiddleware";
import { StateController } from "./controllers/StateController";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";

const router = Router();

const stateController = new StateController();

router.get("/states", stateController.show);
router.post("/states/new", stateController.create);
router.put("/states/:id", authMiddleWare, stateController.update);
router.post("/users", authMiddleWare, UserController.store);
router.post("/auth", AuthController.authenticate);
router.get("/users", UserController.index);

export { router };
