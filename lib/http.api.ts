import http, { IncomingMessage, ServerResponse } from "http";
import url from "url";

import { normalizeQuery, buildSVG, port, AvatarProperties } from "./utils";

const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        const query: any = url.parse(req.url || "", true).query;
        const svgProperties: AvatarProperties = normalizeQuery(query);
        const svg: string = buildSVG(svgProperties);

        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        res.write(svg);
        res.end();
    }
);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
