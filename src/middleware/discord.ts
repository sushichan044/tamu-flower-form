import { verifyKey } from "discord-interactions";

import { honoFactory } from "../factory";

export const verifyDiscordInteraction = honoFactory.createMiddleware(
  async (c, next) => {
    const signature = c.req.header("X-Signature-Ed25519");
    const timestamp = c.req.header("X-Signature-Timestamp");

    if (signature == null || timestamp == null) {
      return c.text("Invalid request", 401);
    }

    const rawBody = await c.req.raw.clone().text();
    const isValid = await verifyKey(
      rawBody,
      signature,
      timestamp,
      c.env.DISCORD_PUBLIC_KEY,
    );

    if (!isValid) {
      return c.text("Bad request signature", 401);
    }

    return await next();
  },
);
