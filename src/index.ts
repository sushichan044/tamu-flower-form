import { typiaValidator } from "@hono/typia-validator";
import {
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";

import { honoFactory } from "./factory";
import { validateDiscordInteraction } from "./generated/discord/interaction";
import { verifyDiscordInteraction } from "./middleware/discord";

const app = honoFactory.createApp();

app.post(
  "/interactions",
  typiaValidator("json", validateDiscordInteraction),
  verifyDiscordInteraction,
  (c) => {
    const interaction = c.req.valid("json");

    if (interaction.type === InteractionType.Ping) {
      return c.json({ type: InteractionResponseType.Pong });
    }

    switch (interaction.type) {
      case InteractionType.ApplicationCommand:
        return c.json(interaction.data satisfies never);
      case InteractionType.ApplicationCommandAutocomplete:
        return c.json(interaction.data satisfies never);
      case InteractionType.MessageComponent:
        return c.json(interaction.data satisfies never);
      case InteractionType.ModalSubmit:
        return c.json(interaction.data satisfies never);
      default:
        return c.json(interaction satisfies never);
    }
  },
);

export default app;
