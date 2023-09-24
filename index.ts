import express, {json} from "express"

import { userRoutes } from "./src/routes"
import { NotFoundError } from "./src/errors/not.found.error";
import { errorHandler } from "./src/middlewares/error.handler";

const baseURL = process.env.BASE_URL_V1
const app = express()
//Express will have knowledge that it's sitting behind a proxy 
//and that the X-Forwarded-* header fields may be trusted
app.set("trust proxy", true);
app.use(json());

declare module "express-serve-static-core" {
    interface Request {
      data?: any;
      status?: number;
    }
}

app.use(baseURL!, userRoutes)

app.all("*", () => {
    throw new NotFoundError();
});

app.use(errorHandler)

export default app