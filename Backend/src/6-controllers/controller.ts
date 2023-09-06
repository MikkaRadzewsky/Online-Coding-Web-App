import express, { Request, Response, NextFunction } from "express";
import CodeBlockModel from "../4-models/codeblock-model";
import logic from "../5-logic/logic";

const router = express.Router();

// GET http://localhost:3001/api/codeblocks
router.get(
  "/codeblocks",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const codeblocks = await logic.getAllCodeblocks();
      response.json(codeblocks);
    } catch (err: any) {
      next(err);
    }
  }
);

// GET http://localhost:3001/api/codeblocks/:codeblockId
router.get(
  "/codeblocks/:codeblockId([0-9]+)",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const codeblockId = +request.params.codeblockId;
      const codeblock = await logic.getOneCodeblock(codeblockId);
      response.json(codeblock);
    } catch (err: any) {
      next(err);
    }
  }
);

// PUT http://localhost:3001/api/codeblocks/:codeblockId
router.put(
  "/codeblocks/:codeblockId([0-9]+)",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log(JSON.stringify(request.body));

      const codeblockId = +request.params.codeblockId;
      request.body.codeblockId = codeblockId;
      const codeblock = new CodeBlockModel(request.body);
      const updatedCodeblock = await logic.updateCodeblock(codeblock);
      response.json(updatedCodeblock);
    } catch (err: any) {
      next(err);
    }
  }
);

export default router;
