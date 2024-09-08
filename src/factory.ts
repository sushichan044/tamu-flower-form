import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { createFactory } from "hono/factory";
import { poweredBy } from "hono/powered-by";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

type HonoConfig = {
  Bindings: Env;
};

const honoFactory = createFactory<HonoConfig>({
  initApp: (app) => {
    app.use(
      cors(),
      csrf(),
      secureHeaders(),
      trimTrailingSlash(),
      poweredBy(),
      requestId(),
    );
  },
});

export { honoFactory };
