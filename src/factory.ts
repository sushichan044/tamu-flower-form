import { createFactory } from "hono/factory";

type HonoConfig = {
  Bindings: {
    DISCORD_PUBLIC_KEY: string;
  };
  Variables: {
    INTERACTION: string;
  };
};

const honoFactory = createFactory<HonoConfig>();

export { honoFactory };
