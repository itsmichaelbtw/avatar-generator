import express, { Request, Response, Application } from "express";
import { normalizeQuery, buildSVG, port, AvatarProperties } from "./utils";

const app: Application = express();

app.get("/avatar.(svg|png)", (req: Request, res: Response): void => {
    const svgProperties: AvatarProperties = normalizeQuery(req.query);
    const svg: string = buildSVG(svgProperties);

    res.set("Content-Type", "image/svg+xml");
    res.send(svg);
});

app.listen(port, (): void => {
    console.log(`Running on port ${port}`);
});
