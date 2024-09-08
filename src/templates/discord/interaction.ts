import type { APIInteraction } from "discord-api-types/v10";

import typia from "typia";

const validateDiscordInteraction = typia.createValidate<APIInteraction>();

export { validateDiscordInteraction };
