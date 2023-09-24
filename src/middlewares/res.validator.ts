import { Request, Response } from "express";

import { NotFoundError } from "./../errors/not.found.error";

const validateResponse = (req: Request, res: Response) => {
  const data = req.data;
  const status = req.status || 200;

  if (!data) {
    throw new NotFoundError("no data found");
  }

  res.status(status).send({ status: status, errors: [], data: data });
};

export { validateResponse };