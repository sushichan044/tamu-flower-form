import type { APIInteraction } from "discord-api-types/v10";
import typia from "typia";
const validateDiscordInteraction = (() => { const $join = (typia.createValidate as any).join; const $iv1 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv2 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv7 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 8192, 16384, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 17592186044416, 1125899906842624, 2251799813685248]); const $iv8 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 8192, 16384, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 17592186044416, 1125899906842624, 2251799813685248]); const $iv10 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $iv11 = new Set([0, 1, 2, 3, 4, 5, 13, 14, 15, 16]); const $iv15 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $iv28 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $iv35 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 44, 46]); const $iv36 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 1024, 4096, 8192]); const $iv41 = new Set([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $iv45 = new Set([2, 4, 8, 16, 64, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 8388608]); const $iv49 = new Set(["ANIMATED_BANNER", "ANIMATED_ICON", "APPLICATION_COMMAND_PERMISSIONS_V2", "AUTO_MODERATION", "BANNER", "COMMUNITY", "CREATOR_MONETIZABLE_PROVISIONAL", "CREATOR_STORE_PAGE", "DEVELOPER_SUPPORT_SERVER", "DISCOVERABLE", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "HUB", "INVITES_DISABLED", "INVITE_SPLASH", "LINKED_TO_HUB", "MEMBER_VERIFICATION_GATE_ENABLED", "MONETIZATION_ENABLED", "MORE_STICKERS", "NEWS", "PARTNERED", "PREVIEW_ENABLED", "PRIVATE_THREADS", "RAID_ALERTS_DISABLED", "RELAY_ENABLED", "ROLE_ICONS", "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "TICKETED_EVENTS_ENABLED", "VANITY_URL", "VERIFIED", "VIP_REGIONS", "WELCOME_SCREEN_ENABLED"]); const $iv52 = new Set(["bot", "connections", "dm_channels.read", "email", "identify", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "messages.read", "role_connections.write", "rpc", "rpc.notifications.read", "webhook.incoming", "voice", "applications.builds.upload", "applications.builds.read", "applications.store.update", "applications.entitlements", "relationships.read", "activities.read", "activities.write", "applications.commands", "applications.commands.update", "applications.commands.permissions.update"]); const $iv69 = new Set([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $iv77 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 44, 46]); const $iv78 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 1024, 4096, 8192]); const $iv87 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv88 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv91 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv92 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv94 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv95 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv97 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv98 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv105 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv106 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv110 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $iv112 = new Set([0, 1, 2, 3, 4, 5, 13, 14, 15, 16]); const $vv113 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv114 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv119 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 8192, 16384, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 17592186044416, 1125899906842624, 2251799813685248]); const $vv120 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 8192, 16384, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 17592186044416, 1125899906842624, 2251799813685248]); const $vv122 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $vv123 = new Set([0, 1, 2, 3, 4, 5, 13, 14, 15, 16]); const $vv127 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $vv140 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]); const $vv147 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 44, 46]); const $vv148 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 1024, 4096, 8192]); const $vv153 = new Set([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $vv157 = new Set([2, 4, 8, 16, 64, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 8388608]); const $vv161 = new Set(["ANIMATED_BANNER", "ANIMATED_ICON", "APPLICATION_COMMAND_PERMISSIONS_V2", "AUTO_MODERATION", "BANNER", "COMMUNITY", "CREATOR_MONETIZABLE_PROVISIONAL", "CREATOR_STORE_PAGE", "DEVELOPER_SUPPORT_SERVER", "DISCOVERABLE", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "HUB", "INVITES_DISABLED", "INVITE_SPLASH", "LINKED_TO_HUB", "MEMBER_VERIFICATION_GATE_ENABLED", "MONETIZATION_ENABLED", "MORE_STICKERS", "NEWS", "PARTNERED", "PREVIEW_ENABLED", "PRIVATE_THREADS", "RAID_ALERTS_DISABLED", "RELAY_ENABLED", "ROLE_ICONS", "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "TICKETED_EVENTS_ENABLED", "VANITY_URL", "VERIFIED", "VIP_REGIONS", "WELCOME_SCREEN_ENABLED"]); const $vv164 = new Set(["bot", "connections", "dm_channels.read", "email", "identify", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "messages.read", "role_connections.write", "rpc", "rpc.notifications.read", "webhook.incoming", "voice", "applications.builds.upload", "applications.builds.read", "applications.store.update", "applications.entitlements", "relationships.read", "activities.read", "activities.write", "applications.commands", "applications.commands.update", "applications.commands.permissions.update"]); const $vv181 = new Set([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16]); const $vv189 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 44, 46]); const $vv190 = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 1024, 4096, 8192]); const $vv199 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv200 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv203 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv204 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv206 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv207 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv209 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv210 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv217 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv218 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv222 = new Set(["id", "en-US", "en-GB", "bg", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "fi", "fr", "de", "el", "hi", "hu", "it", "ja", "ko", "lt", "no", "pl", "pt-BR", "ro", "ru", "es-ES", "es-419", "sv-SE", "th", "tr", "uk", "vi"]); const $vv224 = new Set([0, 1, 2, 3, 4, 5, 13, 14, 15, 16]); const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 4 === input.type && ("object" === typeof input.data && null !== input.data && $io1(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.channel || "object" === typeof input.channel && null !== input.channel && $iu3(input.channel)) && (undefined === input.channel_id || "string" === typeof input.channel_id) && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv1.has(input.locale) && (undefined === input.guild_locale || true === $iv2.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io1 = (input: any): boolean => Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)) && (undefined === input.resolved || "object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) && $io13(input.resolved)) && "string" === typeof input.id && 1 === input.type && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io2 = (input: any): boolean => "string" === typeof input.name && 11 === input.type && "string" === typeof input.value; const $io3 = (input: any): boolean => "string" === typeof input.name && 5 === input.type && "boolean" === typeof input.value; const $io4 = (input: any): boolean => "string" === typeof input.name && 7 === input.type && "string" === typeof input.value; const $io5 = (input: any): boolean => (undefined === input.focused || "boolean" === typeof input.focused) && "string" === typeof input.name && 4 === input.type && "number" === typeof input.value; const $io6 = (input: any): boolean => "string" === typeof input.name && 9 === input.type && "string" === typeof input.value; const $io7 = (input: any): boolean => (undefined === input.focused || "boolean" === typeof input.focused) && "string" === typeof input.name && 10 === input.type && "number" === typeof input.value; const $io8 = (input: any): boolean => "string" === typeof input.name && 8 === input.type && "string" === typeof input.value; const $io9 = (input: any): boolean => (undefined === input.focused || "boolean" === typeof input.focused) && "string" === typeof input.name && 3 === input.type && "string" === typeof input.value; const $io10 = (input: any): boolean => "string" === typeof input.name && 6 === input.type && "string" === typeof input.value; const $io11 = (input: any): boolean => "string" === typeof input.name && 2 === input.type && (Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $io12(elem))); const $io12 = (input: any): boolean => "string" === typeof input.name && 1 === input.type && (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu1(elem))); const $io13 = (input: any): boolean => (undefined === input.users || "object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) && $io14(input.users)) && (undefined === input.roles || "object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) && $io17(input.roles)) && (undefined === input.members || "object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) && $io20(input.members)) && (undefined === input.channels || "object" === typeof input.channels && null !== input.channels && false === Array.isArray(input.channels) && $io22(input.channels)) && (undefined === input.attachments || "object" === typeof input.attachments && null !== input.attachments && false === Array.isArray(input.attachments) && $io26(input.attachments)); const $io14 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $io15(value);
}); const $io15 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.username && "string" === typeof input.discriminator && (null === input.global_name || "string" === typeof input.global_name) && (null === input.avatar || "string" === typeof input.avatar) && (undefined === input.bot || "boolean" === typeof input.bot) && (undefined === input.system || "boolean" === typeof input.system) && (undefined === input.mfa_enabled || "boolean" === typeof input.mfa_enabled) && (null === input.banner || undefined === input.banner || "string" === typeof input.banner) && (null === input.accent_color || undefined === input.accent_color || "number" === typeof input.accent_color) && (undefined === input.locale || "string" === typeof input.locale) && (undefined === input.verified || "boolean" === typeof input.verified) && (null === input.email || undefined === input.email || "string" === typeof input.email) && (undefined === input.flags || true === $iv7.has(input.flags)) && (undefined === input.premium_type || 0 === input.premium_type || 1 === input.premium_type || 2 === input.premium_type || 3 === input.premium_type) && (undefined === input.public_flags || true === $iv8.has(input.public_flags)) && (null === input.avatar_decoration || undefined === input.avatar_decoration || "string" === typeof input.avatar_decoration) && (null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || "object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data && $io16(input.avatar_decoration_data)); const $io16 = (input: any): boolean => "string" === typeof input.asset && "string" === typeof input.sku_id; const $io17 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $io18(value);
}); const $io18 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.color && "boolean" === typeof input.hoist && (null === input.icon || undefined === input.icon || "string" === typeof input.icon) && (null === input.unicode_emoji || undefined === input.unicode_emoji || "string" === typeof input.unicode_emoji) && "number" === typeof input.position && "string" === typeof input.permissions && "boolean" === typeof input.managed && "boolean" === typeof input.mentionable && (undefined === input.tags || "object" === typeof input.tags && null !== input.tags && false === Array.isArray(input.tags) && $io19(input.tags)) && 1 === input.flags; const $io19 = (input: any): boolean => (undefined === input.bot_id || "string" === typeof input.bot_id) && (null === input.premium_subscriber || undefined === input.premium_subscriber) && (undefined === input.integration_id || "string" === typeof input.integration_id) && (undefined === input.subscription_listing_id || "string" === typeof input.subscription_listing_id) && (null === input.available_for_purchase || undefined === input.available_for_purchase) && (null === input.guild_connections || undefined === input.guild_connections); const $io20 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $io21(value);
}); const $io21 = (input: any): boolean => "string" === typeof input.permissions && (null === input.nick || undefined === input.nick || "string" === typeof input.nick) && (null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar) && (Array.isArray(input.roles) && input.roles.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.joined_at && (null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since) && true === $iv10.has(input.flags) && (undefined === input.pending || "boolean" === typeof input.pending) && (null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until) && (null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || "object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data && $io16(input.avatar_decoration_data)); const $io22 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $iu4(value);
}); const $io23 = (input: any): boolean => true === $iv11.has(input.type) && "string" === typeof input.permissions && "string" === typeof input.id && (null === input.name || "string" === typeof input.name); const $io24 = (input: any): boolean => (10 === input.type || 11 === input.type || 12 === input.type) && "string" === typeof input.permissions && "string" === typeof input.id && (null === input.name || "string" === typeof input.name) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.thread_metadata || "object" === typeof input.thread_metadata && null !== input.thread_metadata && $io25(input.thread_metadata)); const $io25 = (input: any): boolean => "boolean" === typeof input.archived && (60 === input.auto_archive_duration || 1440 === input.auto_archive_duration || 4320 === input.auto_archive_duration || 10080 === input.auto_archive_duration) && "string" === typeof input.archive_timestamp && (undefined === input.locked || "boolean" === typeof input.locked) && (undefined === input.invitable || "boolean" === typeof input.invitable) && (undefined === input.create_timestamp || "string" === typeof input.create_timestamp); const $io26 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $io27(value);
}); const $io27 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.filename && (undefined === input.title || "string" === typeof input.title) && (undefined === input.description || "string" === typeof input.description) && (undefined === input.content_type || "string" === typeof input.content_type) && "number" === typeof input.size && "string" === typeof input.url && "string" === typeof input.proxy_url && (null === input.height || undefined === input.height || "number" === typeof input.height) && (null === input.width || undefined === input.width || "number" === typeof input.width) && (undefined === input.ephemeral || "boolean" === typeof input.ephemeral) && (undefined === input.duration_secs || "number" === typeof input.duration_secs) && (undefined === input.waveform || "string" === typeof input.waveform) && (undefined === input.flags || 4 === input.flags); const $io28 = (input: any): boolean => (undefined === input.member || "object" === typeof input.member && null !== input.member && $io29(input.member)) && (undefined === input.thread_metadata || "object" === typeof input.thread_metadata && null !== input.thread_metadata && $io25(input.thread_metadata)) && (undefined === input.message_count || "number" === typeof input.message_count) && (undefined === input.member_count || "number" === typeof input.member_count) && (undefined === input.owner_id || "string" === typeof input.owner_id) && (undefined === input.total_message_sent || "number" === typeof input.total_message_sent) && (undefined === input.applied_tags || Array.isArray(input.applied_tags) && input.applied_tags.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.id && (10 === input.type || 11 === input.type || 12 === input.type) && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io29 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.user_id || "string" === typeof input.user_id) && "string" === typeof input.join_timestamp && (1 === input.flags || 2 === input.flags || 4 === input.flags || 8 === input.flags) && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io30(input.member)); const $io30 = (input: any): boolean => "object" === typeof input.user && null !== input.user && $io15(input.user) && (null === input.nick || undefined === input.nick || "string" === typeof input.nick) && (null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar) && (Array.isArray(input.roles) && input.roles.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.joined_at && (null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since) && "boolean" === typeof input.deaf && "boolean" === typeof input.mute && true === $iv15.has(input.flags) && (undefined === input.pending || "boolean" === typeof input.pending) && (null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until) && (null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || "object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data && $io16(input.avatar_decoration_data)); const $io31 = (input: any): boolean => "string" === typeof input.id && (0 === input.type || 1 === input.type) && "string" === typeof input.allow && "string" === typeof input.deny; const $io32 = (input: any): boolean => (null === input.name || undefined === input.name) && "string" === typeof input.id && 1 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.recipients || Array.isArray(input.recipients) && input.recipients.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))); const $io33 = (input: any): boolean => (null === input.name || undefined === input.name || "string" === typeof input.name) && (undefined === input.application_id || "string" === typeof input.application_id) && (null === input.icon || undefined === input.icon || "string" === typeof input.icon) && (undefined === input.owner_id || "string" === typeof input.owner_id) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.managed || "boolean" === typeof input.managed) && "string" === typeof input.id && 3 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.recipients || Array.isArray(input.recipients) && input.recipients.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))); const $io34 = (input: any): boolean => (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 4 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io35 = (input: any): boolean => (undefined === input.default_forum_layout || 0 === input.default_forum_layout || 1 === input.default_forum_layout || 2 === input.default_forum_layout) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.available_tags || Array.isArray(input.available_tags) && input.available_tags.every((elem: any) => "object" === typeof elem && null !== elem && $io36(elem))) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.default_reaction_emoji || undefined === input.default_reaction_emoji || "object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji && $io37(input.default_reaction_emoji)) && (null === input.default_sort_order || undefined === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 15 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io36 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "boolean" === typeof input.moderated && (null === input.emoji_id || "string" === typeof input.emoji_id) && (null === input.emoji_name || "string" === typeof input.emoji_name); const $io37 = (input: any): boolean => (null === input.emoji_id || "string" === typeof input.emoji_id) && (null === input.emoji_name || "string" === typeof input.emoji_name); const $io38 = (input: any): boolean => (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.available_tags || Array.isArray(input.available_tags) && input.available_tags.every((elem: any) => "object" === typeof elem && null !== elem && $io36(elem))) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.default_reaction_emoji || undefined === input.default_reaction_emoji || "object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji && $io37(input.default_reaction_emoji)) && (null === input.default_sort_order || undefined === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 16 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io39 = (input: any): boolean => (undefined === input.bitrate || "number" === typeof input.bitrate) && (undefined === input.user_limit || "number" === typeof input.user_limit) && (null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region) && (undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 13 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user); const $io40 = (input: any): boolean => (undefined === input.bitrate || "number" === typeof input.bitrate) && (undefined === input.user_limit || "number" === typeof input.user_limit) && (null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region) && (undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 2 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user); const $io41 = (input: any): boolean => (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && "string" === typeof input.id && 5 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io42 = (input: any): boolean => (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && "string" === typeof input.id && 0 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && (undefined === input.position || "number" === typeof input.position) && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io43 = (input: any): boolean => "string" === typeof input.permissions && ("object" === typeof input.user && null !== input.user && $io15(input.user)) && (null === input.nick || undefined === input.nick || "string" === typeof input.nick) && (null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar) && (Array.isArray(input.roles) && input.roles.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.joined_at && (null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since) && "boolean" === typeof input.deaf && "boolean" === typeof input.mute && true === $iv28.has(input.flags) && (undefined === input.pending || "boolean" === typeof input.pending) && (null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until) && (null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || "object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data && $io16(input.avatar_decoration_data)); const $io44 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.channel_id && ("object" === typeof input.author && null !== input.author && $io15(input.author)) && "string" === typeof input.content && "string" === typeof input.timestamp && (null === input.edited_timestamp || "string" === typeof input.edited_timestamp) && "boolean" === typeof input.tts && "boolean" === typeof input.mention_everyone && (Array.isArray(input.mentions) && input.mentions.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))) && (Array.isArray(input.mention_roles) && input.mention_roles.every((elem: any) => "string" === typeof elem)) && (undefined === input.mention_channels || Array.isArray(input.mention_channels) && input.mention_channels.every((elem: any) => "object" === typeof elem && null !== elem && $io45(elem))) && (Array.isArray(input.attachments) && input.attachments.every((elem: any) => "object" === typeof elem && null !== elem && $io27(elem))) && (Array.isArray(input.embeds) && input.embeds.every((elem: any) => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io46(elem))) && (undefined === input.reactions || Array.isArray(input.reactions) && input.reactions.every((elem: any) => "object" === typeof elem && null !== elem && $io54(elem))) && (undefined === input.nonce || "string" === typeof input.nonce || "number" === typeof input.nonce) && "boolean" === typeof input.pinned && (undefined === input.webhook_id || "string" === typeof input.webhook_id) && true === $iv35.has(input.type) && (undefined === input.activity || "object" === typeof input.activity && null !== input.activity && $io57(input.activity)) && (undefined === input.application || "object" === typeof input.application && null !== input.application && false === Array.isArray(input.application) && $io58(input.application)) && (undefined === input.application_id || "string" === typeof input.application_id) && (undefined === input.message_reference || "object" === typeof input.message_reference && null !== input.message_reference && $io67(input.message_reference)) && (undefined === input.flags || true === $iv36.has(input.flags)) && (null === input.referenced_message || undefined === input.referenced_message || "object" === typeof input.referenced_message && null !== input.referenced_message && $io44(input.referenced_message)) && (undefined === input.interaction_metadata || "object" === typeof input.interaction_metadata && null !== input.interaction_metadata && $io68(input.interaction_metadata)) && (undefined === input.interaction || "object" === typeof input.interaction && null !== input.interaction && $io70(input.interaction)) && (undefined === input.thread || "object" === typeof input.thread && null !== input.thread && $iu5(input.thread)) && (undefined === input.components || Array.isArray(input.components) && input.components.every((elem: any) => "object" === typeof elem && null !== elem && $io82(elem))) && (undefined === input.sticker_items || Array.isArray(input.sticker_items) && input.sticker_items.every((elem: any) => "object" === typeof elem && null !== elem && $io97(elem))) && (undefined === input.stickers || Array.isArray(input.stickers) && input.stickers.every((elem: any) => "object" === typeof elem && null !== elem && $io98(elem))) && (undefined === input.position || "number" === typeof input.position) && (undefined === input.role_subscription_data || "object" === typeof input.role_subscription_data && null !== input.role_subscription_data && $io99(input.role_subscription_data)) && (undefined === input.resolved || "object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) && $io13(input.resolved)) && (undefined === input.poll || "object" === typeof input.poll && null !== input.poll && $io100(input.poll)) && (undefined === input.message_snapshots || Array.isArray(input.message_snapshots) && input.message_snapshots.every((elem: any) => "object" === typeof elem && null !== elem && $io105(elem))) && (undefined === input.call || "object" === typeof input.call && null !== input.call && $io107(input.call)); const $io45 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.guild_id && true === $iv41.has(input.type) && "string" === typeof input.name; const $io46 = (input: any): boolean => (undefined === input.title || "string" === typeof input.title) && (undefined === input.type || "rich" === input.type || "image" === input.type || "video" === input.type || "gifv" === input.type || "article" === input.type || "link" === input.type || "auto_moderation_message" === input.type || "poll_result" === input.type) && (undefined === input.description || "string" === typeof input.description) && (undefined === input.url || "string" === typeof input.url) && (undefined === input.timestamp || "string" === typeof input.timestamp) && (undefined === input.color || "number" === typeof input.color) && (undefined === input.footer || "object" === typeof input.footer && null !== input.footer && $io47(input.footer)) && (undefined === input.image || "object" === typeof input.image && null !== input.image && $io48(input.image)) && (undefined === input.thumbnail || "object" === typeof input.thumbnail && null !== input.thumbnail && $io49(input.thumbnail)) && (undefined === input.video || "object" === typeof input.video && null !== input.video && false === Array.isArray(input.video) && $io50(input.video)) && (undefined === input.provider || "object" === typeof input.provider && null !== input.provider && false === Array.isArray(input.provider) && $io51(input.provider)) && (undefined === input.author || "object" === typeof input.author && null !== input.author && $io52(input.author)) && (undefined === input.fields || Array.isArray(input.fields) && input.fields.every((elem: any) => "object" === typeof elem && null !== elem && $io53(elem))); const $io47 = (input: any): boolean => "string" === typeof input.text && (undefined === input.icon_url || "string" === typeof input.icon_url) && (undefined === input.proxy_icon_url || "string" === typeof input.proxy_icon_url); const $io48 = (input: any): boolean => "string" === typeof input.url && (undefined === input.proxy_url || "string" === typeof input.proxy_url) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.width || "number" === typeof input.width); const $io49 = (input: any): boolean => "string" === typeof input.url && (undefined === input.proxy_url || "string" === typeof input.proxy_url) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.width || "number" === typeof input.width); const $io50 = (input: any): boolean => (undefined === input.url || "string" === typeof input.url) && (undefined === input.proxy_url || "string" === typeof input.proxy_url) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.width || "number" === typeof input.width); const $io51 = (input: any): boolean => (undefined === input.name || "string" === typeof input.name) && (undefined === input.url || "string" === typeof input.url); const $io52 = (input: any): boolean => "string" === typeof input.name && (undefined === input.url || "string" === typeof input.url) && (undefined === input.icon_url || "string" === typeof input.icon_url) && (undefined === input.proxy_icon_url || "string" === typeof input.proxy_icon_url); const $io53 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.value && (undefined === input.inline || "boolean" === typeof input.inline); const $io54 = (input: any): boolean => "number" === typeof input.count && ("object" === typeof input.count_details && null !== input.count_details && $io55(input.count_details)) && "boolean" === typeof input.me && "boolean" === typeof input.me_burst && ("object" === typeof input.emoji && null !== input.emoji && $io56(input.emoji)) && (Array.isArray(input.burst_colors) && input.burst_colors.every((elem: any) => "string" === typeof elem)); const $io55 = (input: any): boolean => "number" === typeof input.burst && "number" === typeof input.normal; const $io56 = (input: any): boolean => (null === input.id || "string" === typeof input.id) && (null === input.name || "string" === typeof input.name) && (undefined === input.animated || "boolean" === typeof input.animated); const $io57 = (input: any): boolean => (1 === input.type || 2 === input.type || 3 === input.type || 5 === input.type) && (undefined === input.party_id || "string" === typeof input.party_id); const $io58 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (null === input.icon || undefined === input.icon || "string" === typeof input.icon) && (undefined === input.description || "string" === typeof input.description) && (undefined === input.rpc_origins || Array.isArray(input.rpc_origins) && input.rpc_origins.every((elem: any) => "string" === typeof elem)) && (undefined === input.bot_public || "boolean" === typeof input.bot_public) && (undefined === input.bot_require_code_grant || "boolean" === typeof input.bot_require_code_grant) && (undefined === input.bot || "object" === typeof input.bot && null !== input.bot && $io15(input.bot)) && (undefined === input.terms_of_service_url || "string" === typeof input.terms_of_service_url) && (undefined === input.privacy_policy_url || "string" === typeof input.privacy_policy_url) && (undefined === input.owner || "object" === typeof input.owner && null !== input.owner && $io15(input.owner)) && (undefined === input.summary || "" === input.summary) && (undefined === input.verify_key || "string" === typeof input.verify_key) && (null === input.team || undefined === input.team || "object" === typeof input.team && null !== input.team && $io59(input.team)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.guild || "object" === typeof input.guild && null !== input.guild && $io61(input.guild)) && (undefined === input.primary_sku_id || "string" === typeof input.primary_sku_id) && (undefined === input.slug || "string" === typeof input.slug) && (undefined === input.cover_image || "string" === typeof input.cover_image) && (undefined === input.flags || true === $iv45.has(input.flags)) && (undefined === input.approximate_guild_count || "number" === typeof input.approximate_guild_count) && (undefined === input.approximate_user_install_count || "number" === typeof input.approximate_user_install_count) && (undefined === input.redirect_uris || Array.isArray(input.redirect_uris) && input.redirect_uris.every((elem: any) => "string" === typeof elem)) && (null === input.interactions_endpoint_url || undefined === input.interactions_endpoint_url || "string" === typeof input.interactions_endpoint_url) && (null === input.role_connections_verification_url || undefined === input.role_connections_verification_url || "string" === typeof input.role_connections_verification_url) && (undefined === input.tags || Array.isArray(input.tags) && (1 <= input.tags.length && 5 >= input.tags.length && "string" === typeof input.tags[0] && (undefined === input.tags[1] || "string" === typeof input.tags[1]) && (undefined === input.tags[2] || "string" === typeof input.tags[2]) && (undefined === input.tags[3] || "string" === typeof input.tags[3]) && (undefined === input.tags[4] || "string" === typeof input.tags[4]))) && (undefined === input.install_params || "object" === typeof input.install_params && null !== input.install_params && $io64(input.install_params)) && (undefined === input.integration_types_config || "object" === typeof input.integration_types_config && null !== input.integration_types_config && false === Array.isArray(input.integration_types_config) && $io65(input.integration_types_config)) && (undefined === input.custom_install_url || "string" === typeof input.custom_install_url); const $io59 = (input: any): boolean => (null === input.icon || "string" === typeof input.icon) && "string" === typeof input.id && (Array.isArray(input.members) && input.members.every((elem: any) => "object" === typeof elem && null !== elem && $io60(elem))) && "string" === typeof input.name && "string" === typeof input.owner_user_id; const $io60 = (input: any): boolean => (1 === input.membership_state || 2 === input.membership_state) && (Array.isArray(input.permissions) && (input.permissions.length === 1 && "*" === input.permissions[0])) && "string" === typeof input.team_id && ("object" === typeof input.user && null !== input.user && $io15(input.user)) && ("admin" === input.role || "developer" === input.role || "read_only" === input.role); const $io61 = (input: any): boolean => "string" === typeof input.name && (null === input.icon || "string" === typeof input.icon) && (null === input.splash || "string" === typeof input.splash) && (null === input.banner || undefined === input.banner || "string" === typeof input.banner) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (undefined === input.features || Array.isArray(input.features) && input.features.every((elem: any) => true === $iv49.has(elem))) && (undefined === input.verification_level || 0 === input.verification_level || 1 === input.verification_level || 2 === input.verification_level || 3 === input.verification_level || 4 === input.verification_level) && (null === input.vanity_url_code || undefined === input.vanity_url_code || "string" === typeof input.vanity_url_code) && "string" === typeof input.id && (undefined === input.welcome_screen || "object" === typeof input.welcome_screen && null !== input.welcome_screen && $io62(input.welcome_screen)); const $io62 = (input: any): boolean => (null === input.description || "string" === typeof input.description) && (Array.isArray(input.welcome_channels) && input.welcome_channels.every((elem: any) => "object" === typeof elem && null !== elem && $io63(elem))); const $io63 = (input: any): boolean => "string" === typeof input.channel_id && "string" === typeof input.description && (null === input.emoji_id || "string" === typeof input.emoji_id) && (null === input.emoji_name || "string" === typeof input.emoji_name); const $io64 = (input: any): boolean => Array.isArray(input.scopes) && input.scopes.every((elem: any) => true === $iv52.has(elem)) && "string" === typeof input.permissions; const $io65 = (input: any): boolean => (undefined === input["0"] || "object" === typeof input["0"] && null !== input["0"] && false === Array.isArray(input["0"]) && $io66(input["0"])) && (undefined === input["1"] || "object" === typeof input["1"] && null !== input["1"] && false === Array.isArray(input["1"]) && $io66(input["1"])); const $io66 = (input: any): boolean => undefined === input.oauth2_install_params || "object" === typeof input.oauth2_install_params && null !== input.oauth2_install_params && $io64(input.oauth2_install_params); const $io67 = (input: any): boolean => (undefined === input.type || 0 === input.type || 1 === input.type) && (undefined === input.message_id || "string" === typeof input.message_id) && "string" === typeof input.channel_id && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io68 = (input: any): boolean => "string" === typeof input.id && (1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type) && ("object" === typeof input.user && null !== input.user && $io15(input.user)) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.original_response_message_id || "string" === typeof input.original_response_message_id) && (undefined === input.interacted_message_id || "string" === typeof input.interacted_message_id) && (undefined === input.triggering_interaction_metadata || "object" === typeof input.triggering_interaction_metadata && null !== input.triggering_interaction_metadata && $io68(input.triggering_interaction_metadata)); const $io69 = (input: any): boolean => (undefined === input["0"] || "string" === typeof input["0"]) && (undefined === input["1"] || "string" === typeof input["1"]); const $io70 = (input: any): boolean => "string" === typeof input.id && (1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type) && "string" === typeof input.name && ("object" === typeof input.user && null !== input.user && $io15(input.user)) && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io71(input.member)); const $io71 = (input: any): boolean => "boolean" === typeof input.deaf && "boolean" === typeof input.mute && (null === input.nick || undefined === input.nick || "string" === typeof input.nick) && (null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar) && (Array.isArray(input.roles) && input.roles.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.joined_at && (null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since) && (undefined === input.pending || "boolean" === typeof input.pending) && (null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until); const $io72 = (input: any): boolean => (undefined === input.member || "object" === typeof input.member && null !== input.member && $io29(input.member)) && (undefined === input.thread_metadata || "object" === typeof input.thread_metadata && null !== input.thread_metadata && $io25(input.thread_metadata)) && (undefined === input.message_count || "number" === typeof input.message_count) && (undefined === input.member_count || "number" === typeof input.member_count) && (undefined === input.owner_id || "string" === typeof input.owner_id) && (undefined === input.total_message_sent || "number" === typeof input.total_message_sent) && (Array.isArray(input.applied_tags) && input.applied_tags.every((elem: any) => "string" === typeof elem)) && "string" === typeof input.id && (10 === input.type || 11 === input.type || 12 === input.type) && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io73 = (input: any): boolean => undefined !== input.name && null === input.name && "string" === typeof input.id && 1 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.recipients || Array.isArray(input.recipients) && input.recipients.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))); const $io74 = (input: any): boolean => (null === input.name || "string" === typeof input.name) && (undefined === input.application_id || "string" === typeof input.application_id) && (null === input.icon || undefined === input.icon || "string" === typeof input.icon) && (undefined === input.owner_id || "string" === typeof input.owner_id) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.managed || "boolean" === typeof input.managed) && "string" === typeof input.id && 3 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.recipients || Array.isArray(input.recipients) && input.recipients.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))); const $io75 = (input: any): boolean => "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 4 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io76 = (input: any): boolean => (0 === input.default_forum_layout || 1 === input.default_forum_layout || 2 === input.default_forum_layout) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (Array.isArray(input.available_tags) && input.available_tags.every((elem: any) => "object" === typeof elem && null !== elem && $io36(elem))) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.default_reaction_emoji || "object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji && $io37(input.default_reaction_emoji)) && (null === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 15 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io77 = (input: any): boolean => (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (Array.isArray(input.available_tags) && input.available_tags.every((elem: any) => "object" === typeof elem && null !== elem && $io36(elem))) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.default_reaction_emoji || "object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji && $io37(input.default_reaction_emoji)) && (null === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 16 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags); const $io78 = (input: any): boolean => (undefined === input.bitrate || "number" === typeof input.bitrate) && (undefined === input.user_limit || "number" === typeof input.user_limit) && (null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region) && (undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 13 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user); const $io79 = (input: any): boolean => (undefined === input.bitrate || "number" === typeof input.bitrate) && (undefined === input.user_limit || "number" === typeof input.user_limit) && (null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region) && (undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw) && "string" === typeof input.id && 2 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user); const $io80 = (input: any): boolean => (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && "string" === typeof input.id && 5 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io81 = (input: any): boolean => (undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration) && (undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user) && (null === input.topic || undefined === input.topic || "string" === typeof input.topic) && "string" === typeof input.id && 0 === input.type && (undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags) && (null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id) && (null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp) && (undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user) && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.permission_overwrites || Array.isArray(input.permission_overwrites) && input.permission_overwrites.every((elem: any) => "object" === typeof elem && null !== elem && $io31(elem))) && "number" === typeof input.position && (null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id) && (undefined === input.nsfw || "boolean" === typeof input.nsfw); const $io82 = (input: any): boolean => Array.isArray(input.components) && input.components.every((elem: any) => "object" === typeof elem && null !== elem && $iu2(elem)) && 1 === input.type; const $io83 = (input: any): boolean => "string" === typeof input.custom_id && (undefined === input.label || "string" === typeof input.label) && (1 === input.style || 2 === input.style || 3 === input.style || 4 === input.style) && (undefined === input.emoji || "object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) && $io84(input.emoji)) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 2 === input.type; const $io84 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.animated || "boolean" === typeof input.animated); const $io85 = (input: any): boolean => "string" === typeof input.sku_id && 2 === input.type && 6 === input.style && (undefined === input.disabled || "boolean" === typeof input.disabled); const $io86 = (input: any): boolean => "string" === typeof input.url && (undefined === input.label || "string" === typeof input.label) && 5 === input.style && (undefined === input.emoji || "object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) && $io84(input.emoji)) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 2 === input.type; const $io87 = (input: any): boolean => (undefined === input.channel_types || Array.isArray(input.channel_types) && input.channel_types.every((elem: any) => true === $iv69.has(elem))) && (undefined === input.default_values || Array.isArray(input.default_values) && input.default_values.every((elem: any) => "object" === typeof elem && null !== elem && $io88(elem))) && "string" === typeof input.custom_id && (undefined === input.placeholder || "string" === typeof input.placeholder) && (undefined === input.min_values || "number" === typeof input.min_values) && (undefined === input.max_values || "number" === typeof input.max_values) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 8 === input.type; const $io88 = (input: any): boolean => "channel" === input.type && "string" === typeof input.id; const $io89 = (input: any): boolean => (undefined === input.default_values || Array.isArray(input.default_values) && input.default_values.every((elem: any) => "object" === typeof elem && null !== elem && $io90(elem))) && "string" === typeof input.custom_id && (undefined === input.placeholder || "string" === typeof input.placeholder) && (undefined === input.min_values || "number" === typeof input.min_values) && (undefined === input.max_values || "number" === typeof input.max_values) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 7 === input.type; const $io90 = (input: any): boolean => ("role" === input.type || "user" === input.type) && "string" === typeof input.id; const $io91 = (input: any): boolean => (undefined === input.default_values || Array.isArray(input.default_values) && input.default_values.every((elem: any) => "object" === typeof elem && null !== elem && $io92(elem))) && "string" === typeof input.custom_id && (undefined === input.placeholder || "string" === typeof input.placeholder) && (undefined === input.min_values || "number" === typeof input.min_values) && (undefined === input.max_values || "number" === typeof input.max_values) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 6 === input.type; const $io92 = (input: any): boolean => "role" === input.type && "string" === typeof input.id; const $io93 = (input: any): boolean => Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $io94(elem)) && "string" === typeof input.custom_id && (undefined === input.placeholder || "string" === typeof input.placeholder) && (undefined === input.min_values || "number" === typeof input.min_values) && (undefined === input.max_values || "number" === typeof input.max_values) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 3 === input.type; const $io94 = (input: any): boolean => "string" === typeof input.label && "string" === typeof input.value && (undefined === input.description || "string" === typeof input.description) && (undefined === input.emoji || "object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) && $io84(input.emoji)) && (undefined === input["default"] || "boolean" === typeof input["default"]); const $io95 = (input: any): boolean => (undefined === input.default_values || Array.isArray(input.default_values) && input.default_values.every((elem: any) => "object" === typeof elem && null !== elem && $io96(elem))) && "string" === typeof input.custom_id && (undefined === input.placeholder || "string" === typeof input.placeholder) && (undefined === input.min_values || "number" === typeof input.min_values) && (undefined === input.max_values || "number" === typeof input.max_values) && (undefined === input.disabled || "boolean" === typeof input.disabled) && 5 === input.type; const $io96 = (input: any): boolean => "user" === input.type && "string" === typeof input.id; const $io97 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && (1 === input.format_type || 2 === input.format_type || 3 === input.format_type || 4 === input.format_type); const $io98 = (input: any): boolean => "string" === typeof input.id && (undefined === input.pack_id || "string" === typeof input.pack_id) && "string" === typeof input.name && (null === input.description || "string" === typeof input.description) && "string" === typeof input.tags && (undefined === input.asset || "" === input.asset) && (1 === input.type || 2 === input.type) && (1 === input.format_type || 2 === input.format_type || 3 === input.format_type || 4 === input.format_type) && (undefined === input.available || "boolean" === typeof input.available) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && (undefined === input.sort_value || "number" === typeof input.sort_value); const $io99 = (input: any): boolean => "string" === typeof input.role_subscription_listing_id && "string" === typeof input.tier_name && "number" === typeof input.total_months_subscribed && "boolean" === typeof input.is_renewal; const $io100 = (input: any): boolean => "object" === typeof input.question && null !== input.question && false === Array.isArray(input.question) && $io101(input.question) && (Array.isArray(input.answers) && input.answers.every((elem: any) => "object" === typeof elem && null !== elem && $io102(elem))) && "string" === typeof input.expiry && "boolean" === typeof input.allow_multiselect && 1 === input.layout_type && (undefined === input.results || "object" === typeof input.results && null !== input.results && $io103(input.results)); const $io101 = (input: any): boolean => (undefined === input.text || "string" === typeof input.text) && (undefined === input.emoji || "object" === typeof input.emoji && null !== input.emoji && $io56(input.emoji)); const $io102 = (input: any): boolean => "number" === typeof input.answer_id && ("object" === typeof input.poll_media && null !== input.poll_media && false === Array.isArray(input.poll_media) && $io101(input.poll_media)); const $io103 = (input: any): boolean => "boolean" === typeof input.is_finalized && (Array.isArray(input.answer_counts) && input.answer_counts.every((elem: any) => "object" === typeof elem && null !== elem && $io104(elem))); const $io104 = (input: any): boolean => "number" === typeof input.id && "number" === typeof input.count && "boolean" === typeof input.me_voted; const $io105 = (input: any): boolean => "object" === typeof input.message && null !== input.message && $io106(input.message) && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io106 = (input: any): boolean => true === $iv77.has(input.type) && (undefined === input.flags || true === $iv78.has(input.flags)) && (Array.isArray(input.attachments) && input.attachments.every((elem: any) => "object" === typeof elem && null !== elem && $io27(elem))) && (undefined === input.components || Array.isArray(input.components) && input.components.every((elem: any) => "object" === typeof elem && null !== elem && $io82(elem))) && "string" === typeof input.content && (null === input.edited_timestamp || "string" === typeof input.edited_timestamp) && (Array.isArray(input.embeds) && input.embeds.every((elem: any) => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io46(elem))) && (Array.isArray(input.mention_roles) && input.mention_roles.every((elem: any) => "string" === typeof elem)) && (Array.isArray(input.mentions) && input.mentions.every((elem: any) => "object" === typeof elem && null !== elem && $io15(elem))) && (undefined === input.sticker_items || Array.isArray(input.sticker_items) && input.sticker_items.every((elem: any) => "object" === typeof elem && null !== elem && $io97(elem))) && (undefined === input.stickers || Array.isArray(input.stickers) && input.stickers.every((elem: any) => "object" === typeof elem && null !== elem && $io98(elem))) && "string" === typeof input.timestamp; const $io107 = (input: any): boolean => Array.isArray(input.participants) && input.participants.every((elem: any) => "string" === typeof elem) && (null === input.ended_timestamp || undefined === input.ended_timestamp || "string" === typeof input.ended_timestamp); const $io108 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.sku_id && (undefined === input.user_id || "string" === typeof input.user_id) && (undefined === input.guild_id || "string" === typeof input.guild_id) && "string" === typeof input.application_id && (1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || 6 === input.type || 7 === input.type || 8 === input.type) && "boolean" === typeof input.deleted && (undefined === input.starts_at || "string" === typeof input.starts_at) && (undefined === input.ends_at || "string" === typeof input.ends_at) && (undefined === input.consumed || "boolean" === typeof input.consumed); const $io109 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 2 === input.type && ("object" === typeof input.data && null !== input.data && $io110(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) && $iu6(input.channel)) && "string" === typeof input.channel_id && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv87.has(input.locale) && (undefined === input.guild_locale || true === $iv88.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io110 = (input: any): boolean => (undefined === input.options || Array.isArray(input.options) && input.options.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem))) && (undefined === input.resolved || "object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) && $io13(input.resolved)) && "string" === typeof input.id && 1 === input.type && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io111 = (input: any): boolean => true; const $io112 = (input: any): boolean => true; const $io113 = (input: any): boolean => true; const $io114 = (input: any): boolean => true; const $io115 = (input: any): boolean => true; const $io116 = (input: any): boolean => true; const $io117 = (input: any): boolean => true; const $io118 = (input: any): boolean => true; const $io119 = (input: any): boolean => true; const $io120 = (input: any): boolean => true; const $io121 = (input: any): boolean => true; const $io122 = (input: any): boolean => true; const $io123 = (input: any): boolean => true; const $io124 = (input: any): boolean => true; const $io125 = (input: any): boolean => true; const $io126 = (input: any): boolean => true; const $io127 = (input: any): boolean => true; const $io128 = (input: any): boolean => true; const $io129 = (input: any): boolean => true; const $io130 = (input: any): boolean => true; const $io131 = (input: any): boolean => true; const $io132 = (input: any): boolean => true; const $io133 = (input: any): boolean => true; const $io134 = (input: any): boolean => true; const $io135 = (input: any): boolean => true; const $io136 = (input: any): boolean => true; const $io137 = (input: any): boolean => true; const $io138 = (input: any): boolean => true; const $io139 = (input: any): boolean => true; const $io140 = (input: any): boolean => true; const $io141 = (input: any): boolean => true; const $io142 = (input: any): boolean => true; const $io143 = (input: any): boolean => true; const $io144 = (input: any): boolean => true; const $io145 = (input: any): boolean => true; const $io146 = (input: any): boolean => true; const $io147 = (input: any): boolean => true; const $io148 = (input: any): boolean => true; const $io149 = (input: any): boolean => true; const $io150 = (input: any): boolean => true; const $io151 = (input: any): boolean => true; const $io152 = (input: any): boolean => true; const $io153 = (input: any): boolean => true; const $io154 = (input: any): boolean => true; const $io155 = (input: any): boolean => true; const $io156 = (input: any): boolean => true; const $io157 = (input: any): boolean => true; const $io158 = (input: any): boolean => true; const $io159 = (input: any): boolean => true; const $io160 = (input: any): boolean => true; const $io161 = (input: any): boolean => true; const $io162 = (input: any): boolean => true; const $io163 = (input: any): boolean => true; const $io164 = (input: any): boolean => true; const $io165 = (input: any): boolean => true; const $io166 = (input: any): boolean => true; const $io167 = (input: any): boolean => true; const $io168 = (input: any): boolean => true; const $io169 = (input: any): boolean => true; const $io170 = (input: any): boolean => true; const $io171 = (input: any): boolean => true; const $io172 = (input: any): boolean => true; const $io173 = (input: any): boolean => true; const $io174 = (input: any): boolean => true; const $io175 = (input: any): boolean => true; const $io176 = (input: any): boolean => true; const $io177 = (input: any): boolean => true; const $io178 = (input: any): boolean => true; const $io179 = (input: any): boolean => true; const $io180 = (input: any): boolean => true; const $io181 = (input: any): boolean => true; const $io182 = (input: any): boolean => true; const $io183 = (input: any): boolean => true; const $io184 = (input: any): boolean => true; const $io185 = (input: any): boolean => true; const $io186 = (input: any): boolean => true; const $io187 = (input: any): boolean => true; const $io188 = (input: any): boolean => true; const $io189 = (input: any): boolean => true; const $io190 = (input: any): boolean => true; const $io191 = (input: any): boolean => true; const $io192 = (input: any): boolean => true; const $io193 = (input: any): boolean => true; const $io194 = (input: any): boolean => true; const $io195 = (input: any): boolean => true; const $io196 = (input: any): boolean => true; const $io197 = (input: any): boolean => true; const $io198 = (input: any): boolean => true; const $io199 = (input: any): boolean => true; const $io200 = (input: any): boolean => true; const $io201 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 2 === input.type && ("object" === typeof input.data && null !== input.data && $io202(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) && $iu6(input.channel)) && "string" === typeof input.channel_id && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv91.has(input.locale) && (undefined === input.guild_locale || true === $iv92.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io202 = (input: any): boolean => "string" === typeof input.target_id && ("object" === typeof input.resolved && null !== input.resolved && $io203(input.resolved)) && "string" === typeof input.id && 3 === input.type && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io203 = (input: any): boolean => "object" === typeof input.messages && null !== input.messages && false === Array.isArray(input.messages) && $io204(input.messages); const $io204 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return "object" === typeof value && null !== value && $io44(value);
}); const $io205 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 2 === input.type && ("object" === typeof input.data && null !== input.data && $io206(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) && $iu6(input.channel)) && "string" === typeof input.channel_id && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv94.has(input.locale) && (undefined === input.guild_locale || true === $iv95.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io206 = (input: any): boolean => "string" === typeof input.target_id && ("object" === typeof input.resolved && null !== input.resolved && $io207(input.resolved)) && "string" === typeof input.id && 2 === input.type && "string" === typeof input.name && (undefined === input.guild_id || "string" === typeof input.guild_id); const $io207 = (input: any): boolean => (undefined === input.members || "object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) && $io20(input.members)) && ("object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) && $io14(input.users)); const $io208 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 3 === input.type && ("object" === typeof input.data && null !== input.data && false === Array.isArray(input.data) && $iu7(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) && $iu6(input.channel)) && "string" === typeof input.channel_id && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && ("object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv97.has(input.locale) && (undefined === input.guild_locale || true === $iv98.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io209 = (input: any): boolean => "string" === typeof input.custom_id && 2 === input.component_type; const $io210 = (input: any): boolean => Array.isArray(input.values) && input.values.every((elem: any) => "string" === typeof elem) && ("object" === typeof input.resolved && null !== input.resolved && $io211(input.resolved)) && "string" === typeof input.custom_id && 8 === input.component_type; const $io211 = (input: any): boolean => "object" === typeof input.channels && null !== input.channels && false === Array.isArray(input.channels) && $io22(input.channels); const $io212 = (input: any): boolean => Array.isArray(input.values) && input.values.every((elem: any) => "string" === typeof elem) && ("object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) && $io213(input.resolved)) && "string" === typeof input.custom_id && 7 === input.component_type; const $io213 = (input: any): boolean => (undefined === input.roles || "object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) && $io17(input.roles)) && (undefined === input.members || "object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) && $io20(input.members)) && (undefined === input.users || "object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) && $io14(input.users)); const $io214 = (input: any): boolean => Array.isArray(input.values) && input.values.every((elem: any) => "string" === typeof elem) && ("object" === typeof input.resolved && null !== input.resolved && $io215(input.resolved)) && "string" === typeof input.custom_id && 6 === input.component_type; const $io215 = (input: any): boolean => "object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) && $io17(input.roles); const $io216 = (input: any): boolean => Array.isArray(input.values) && input.values.every((elem: any) => "string" === typeof elem) && "string" === typeof input.custom_id && 3 === input.component_type; const $io217 = (input: any): boolean => Array.isArray(input.values) && input.values.every((elem: any) => "string" === typeof elem) && ("object" === typeof input.resolved && null !== input.resolved && $io207(input.resolved)) && "string" === typeof input.custom_id && 5 === input.component_type; const $io218 = (input: any): boolean => true; const $io219 = (input: any): boolean => true; const $io220 = (input: any): boolean => true; const $io221 = (input: any): boolean => true; const $io222 = (input: any): boolean => true; const $io223 = (input: any): boolean => true; const $io224 = (input: any): boolean => true; const $io225 = (input: any): boolean => true; const $io226 = (input: any): boolean => true; const $io227 = (input: any): boolean => true; const $io228 = (input: any): boolean => true; const $io229 = (input: any): boolean => true; const $io230 = (input: any): boolean => true; const $io231 = (input: any): boolean => true; const $io232 = (input: any): boolean => true; const $io233 = (input: any): boolean => true; const $io234 = (input: any): boolean => true; const $io235 = (input: any): boolean => true; const $io236 = (input: any): boolean => true; const $io237 = (input: any): boolean => true; const $io238 = (input: any): boolean => true; const $io239 = (input: any): boolean => true; const $io240 = (input: any): boolean => true; const $io241 = (input: any): boolean => true; const $io242 = (input: any): boolean => true; const $io243 = (input: any): boolean => true; const $io244 = (input: any): boolean => true; const $io245 = (input: any): boolean => true; const $io246 = (input: any): boolean => true; const $io247 = (input: any): boolean => true; const $io248 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.application_id && 5 === input.type && ("object" === typeof input.data && null !== input.data && $io249(input.data)) && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.channel || "object" === typeof input.channel && null !== input.channel && $iu3(input.channel)) && (undefined === input.channel_id || "string" === typeof input.channel_id) && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.app_permissions && true === $iv105.has(input.locale) && (undefined === input.guild_locale || true === $iv106.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $io249 = (input: any): boolean => "string" === typeof input.custom_id && (Array.isArray(input.components) && input.components.every((elem: any) => "object" === typeof elem && null !== elem && $io250(elem))); const $io250 = (input: any): boolean => Array.isArray(input.components) && input.components.every((elem: any) => "object" === typeof elem && null !== elem && $io251(elem)) && 1 === input.type; const $io251 = (input: any): boolean => (1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || 6 === input.type || 7 === input.type || 8 === input.type) && "string" === typeof input.custom_id && "string" === typeof input.value; const $io252 = (input: any): boolean => null !== input.data && undefined === input.data && "string" === typeof input.app_permissions && (undefined === input.channel_id || "string" === typeof input.channel_id) && (undefined === input.channel || "object" === typeof input.channel && null !== input.channel && $iu3(input.channel)) && (undefined === input.message || "object" === typeof input.message && null !== input.message && $io44(input.message)) && "string" === typeof input.id && "string" === typeof input.application_id && 1 === input.type && (undefined === input.guild_id || "string" === typeof input.guild_id) && (undefined === input.member || "object" === typeof input.member && null !== input.member && $io43(input.member)) && (undefined === input.user || "object" === typeof input.user && null !== input.user && $io15(input.user)) && "string" === typeof input.token && 1 === input.version && (undefined === input.guild_locale || true === $iv110.has(input.guild_locale)) && (Array.isArray(input.entitlements) && input.entitlements.every((elem: any) => "object" === typeof elem && null !== elem && $io108(elem))) && ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) && $io69(input.authorizing_integration_owners)) && (undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context); const $iu0 = (input: any): any => (() => {
    if (6 === input.type)
        return $io10(input);
    else if (8 === input.type)
        return $io8(input);
    else if (9 === input.type)
        return $io6(input);
    else if (7 === input.type)
        return $io4(input);
    else if (5 === input.type)
        return $io3(input);
    else if (11 === input.type)
        return $io2(input);
    else if (3 === input.type)
        return $io9(input);
    else if (10 === input.type)
        return $io7(input);
    else if (4 === input.type)
        return $io5(input);
    else if (1 === input.type)
        return $io12(input);
    else if (2 === input.type)
        return $io11(input);
    else
        return false;
})(); const $iu1 = (input: any): any => (() => {
    if (6 === input.type)
        return $io10(input);
    else if (8 === input.type)
        return $io8(input);
    else if (9 === input.type)
        return $io6(input);
    else if (7 === input.type)
        return $io4(input);
    else if (5 === input.type)
        return $io3(input);
    else if (11 === input.type)
        return $io2(input);
    else if (3 === input.type)
        return $io9(input);
    else if (10 === input.type)
        return $io7(input);
    else if (4 === input.type)
        return $io5(input);
    else
        return false;
})(); const $iu2 = (input: any): any => (() => {
    if (1 === input.style || 2 === input.style || 3 === input.style || 4 === input.style)
        return $io83(input);
    else if (6 === input.style)
        return $io85(input);
    else if (5 === input.style)
        return $io86(input);
    else if (8 === input.type)
        return $io87(input);
    else if (5 === input.type)
        return $io95(input);
    else if (6 === input.type)
        return $io91(input);
    else if (7 === input.type)
        return $io89(input);
    else if (3 === input.type)
        return $io93(input);
    else
        return false;
})(); const $iu3 = (input: any): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $io28(input);
    else if (1 === input.type)
        return $io32(input);
    else if (3 === input.type)
        return $io33(input);
    else if (4 === input.type)
        return $io34(input);
    else if (15 === input.type)
        return $io35(input);
    else if (16 === input.type)
        return $io38(input);
    else if (2 === input.type)
        return $io40(input);
    else if (13 === input.type)
        return $io39(input);
    else if (0 === input.type)
        return $io42(input);
    else if (5 === input.type)
        return $io41(input);
    else
        return false;
})(); const $iu4 = (input: any): any => (() => {
    if (true === $iv112.has(input.type))
        return $io23(input);
    else if (10 === input.type || 11 === input.type || 12 === input.type)
        return $io24(input);
    else
        return false;
})(); const $iu5 = (input: any): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $io72(input);
    else if (1 === input.type)
        return $io73(input);
    else if (3 === input.type)
        return $io74(input);
    else if (4 === input.type)
        return $io75(input);
    else if (undefined !== input.default_forum_layout)
        return $io76(input);
    else if (16 === input.type)
        return $io77(input);
    else if (2 === input.type)
        return $io79(input);
    else if (13 === input.type)
        return $io78(input);
    else if (0 === input.type)
        return $io81(input);
    else if (5 === input.type)
        return $io80(input);
    else
        return false;
})(); const $iu6 = (input: any): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $io28(input);
    else if (1 === input.type)
        return $io32(input);
    else if (3 === input.type)
        return $io33(input);
    else if (4 === input.type)
        return $io34(input);
    else if (15 === input.type)
        return $io35(input);
    else if (16 === input.type)
        return $io38(input);
    else if (2 === input.type)
        return $io40(input);
    else if (13 === input.type)
        return $io39(input);
    else if (0 === input.type)
        return $io42(input);
    else if (5 === input.type)
        return $io41(input);
    else
        return (() => {
            if ($io200(input))
                return $io200(input);
            if ($io199(input))
                return $io199(input);
            if ($io198(input))
                return $io198(input);
            if ($io197(input))
                return $io197(input);
            if ($io196(input))
                return $io196(input);
            if ($io195(input))
                return $io195(input);
            if ($io194(input))
                return $io194(input);
            if ($io193(input))
                return $io193(input);
            if ($io192(input))
                return $io192(input);
            if ($io191(input))
                return $io191(input);
            if ($io190(input))
                return $io190(input);
            if ($io189(input))
                return $io189(input);
            if ($io188(input))
                return $io188(input);
            if ($io187(input))
                return $io187(input);
            if ($io186(input))
                return $io186(input);
            if ($io185(input))
                return $io185(input);
            if ($io184(input))
                return $io184(input);
            if ($io183(input))
                return $io183(input);
            if ($io182(input))
                return $io182(input);
            if ($io181(input))
                return $io181(input);
            if ($io180(input))
                return $io180(input);
            if ($io179(input))
                return $io179(input);
            if ($io178(input))
                return $io178(input);
            if ($io177(input))
                return $io177(input);
            if ($io176(input))
                return $io176(input);
            if ($io175(input))
                return $io175(input);
            if ($io174(input))
                return $io174(input);
            if ($io173(input))
                return $io173(input);
            if ($io172(input))
                return $io172(input);
            if ($io171(input))
                return $io171(input);
            if ($io170(input))
                return $io170(input);
            if ($io169(input))
                return $io169(input);
            if ($io168(input))
                return $io168(input);
            if ($io167(input))
                return $io167(input);
            if ($io166(input))
                return $io166(input);
            if ($io165(input))
                return $io165(input);
            if ($io164(input))
                return $io164(input);
            if ($io163(input))
                return $io163(input);
            if ($io162(input))
                return $io162(input);
            if ($io161(input))
                return $io161(input);
            if ($io160(input))
                return $io160(input);
            if ($io159(input))
                return $io159(input);
            if ($io158(input))
                return $io158(input);
            if ($io157(input))
                return $io157(input);
            if ($io156(input))
                return $io156(input);
            if ($io155(input))
                return $io155(input);
            if ($io154(input))
                return $io154(input);
            if ($io153(input))
                return $io153(input);
            if ($io152(input))
                return $io152(input);
            if ($io151(input))
                return $io151(input);
            if ($io150(input))
                return $io150(input);
            if ($io149(input))
                return $io149(input);
            if ($io148(input))
                return $io148(input);
            if ($io147(input))
                return $io147(input);
            if ($io146(input))
                return $io146(input);
            if ($io145(input))
                return $io145(input);
            if ($io144(input))
                return $io144(input);
            if ($io143(input))
                return $io143(input);
            if ($io142(input))
                return $io142(input);
            if ($io141(input))
                return $io141(input);
            if ($io140(input))
                return $io140(input);
            if ($io139(input))
                return $io139(input);
            if ($io138(input))
                return $io138(input);
            if ($io137(input))
                return $io137(input);
            if ($io136(input))
                return $io136(input);
            if ($io135(input))
                return $io135(input);
            if ($io134(input))
                return $io134(input);
            if ($io133(input))
                return $io133(input);
            if ($io132(input))
                return $io132(input);
            if ($io131(input))
                return $io131(input);
            if ($io130(input))
                return $io130(input);
            if ($io129(input))
                return $io129(input);
            if ($io128(input))
                return $io128(input);
            if ($io127(input))
                return $io127(input);
            if ($io126(input))
                return $io126(input);
            if ($io125(input))
                return $io125(input);
            if ($io124(input))
                return $io124(input);
            if ($io123(input))
                return $io123(input);
            if ($io122(input))
                return $io122(input);
            if ($io121(input))
                return $io121(input);
            if ($io120(input))
                return $io120(input);
            if ($io119(input))
                return $io119(input);
            if ($io118(input))
                return $io118(input);
            if ($io117(input))
                return $io117(input);
            if ($io116(input))
                return $io116(input);
            if ($io115(input))
                return $io115(input);
            if ($io114(input))
                return $io114(input);
            if ($io113(input))
                return $io113(input);
            if ($io112(input))
                return $io112(input);
            if ($io111(input))
                return $io111(input);
            return false;
        })();
})(); const $iu7 = (input: any): any => (() => {
    if (2 === input.component_type)
        return $io209(input);
    else if (5 === input.component_type)
        return $io217(input);
    else if (6 === input.component_type)
        return $io214(input);
    else if (7 === input.component_type)
        return $io212(input);
    else if (8 === input.component_type)
        return $io210(input);
    else if (3 === input.component_type)
        return $io216(input);
    else
        return (() => {
            if ($io247(input))
                return $io247(input);
            if ($io246(input))
                return $io246(input);
            if ($io245(input))
                return $io245(input);
            if ($io244(input))
                return $io244(input);
            if ($io243(input))
                return $io243(input);
            if ($io242(input))
                return $io242(input);
            if ($io241(input))
                return $io241(input);
            if ($io240(input))
                return $io240(input);
            if ($io239(input))
                return $io239(input);
            if ($io238(input))
                return $io238(input);
            if ($io237(input))
                return $io237(input);
            if ($io236(input))
                return $io236(input);
            if ($io235(input))
                return $io235(input);
            if ($io234(input))
                return $io234(input);
            if ($io233(input))
                return $io233(input);
            if ($io232(input))
                return $io232(input);
            if ($io231(input))
                return $io231(input);
            if ($io230(input))
                return $io230(input);
            if ($io229(input))
                return $io229(input);
            if ($io228(input))
                return $io228(input);
            if ($io227(input))
                return $io227(input);
            if ($io226(input))
                return $io226(input);
            if ($io225(input))
                return $io225(input);
            if ($io224(input))
                return $io224(input);
            if ($io223(input))
                return $io223(input);
            if ($io222(input))
                return $io222(input);
            if ($io221(input))
                return $io221(input);
            if ($io220(input))
                return $io220(input);
            if ($io219(input))
                return $io219(input);
            if ($io218(input))
                return $io218(input);
            return false;
        })();
})(); const $iu8 = (input: any): any => (() => {
    if (5 === input.type)
        return $io248(input);
    else if (3 === input.type)
        return $io208(input);
    else if (4 === input.type)
        return $io0(input);
    else if (1 === input.type)
        return $io252(input);
    else
        return (() => {
            if ($io205(input))
                return $io205(input);
            if ($io201(input))
                return $io201(input);
            if ($io109(input))
                return $io109(input);
            return false;
        })();
})(); const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIChatInputApplicationCommandInteractionData & Required<Pick<APIChatInputApplicationCommandInteractionData, \"options\">>",
        value: input.data
    })) && $vo1(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIChatInputApplicationCommandInteractionData & Required<Pick<APIChatInputApplicationCommandInteractionData, \"options\">>",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.channel || ("object" === typeof input.channel && null !== input.channel || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    })) && $vu3(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    }), undefined === input.channel_id || "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "(string | undefined)",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv113.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv114.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index115: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index115 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index115 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index115 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APIApplicationCommandInteractionDataOption>",
        value: input.options
    })) && input.options.map((elem: any, _index116: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index116 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataSubcommandGroupOption | APIApplicationCommandInteractionDataSubcommandOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })) && $vu0(elem, _path + ".options[" + _index116 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index116 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataSubcommandGroupOption | APIApplicationCommandInteractionDataSubcommandOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APIApplicationCommandInteractionDataOption>",
        value: input.options
    }), undefined === input.resolved || ("object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    })) && $vo13(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 11 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "11",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), "boolean" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "boolean",
        value: input.value
    })].every((flag: boolean) => flag); const $vo4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 7 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "7",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.focused || "boolean" === typeof input.focused || $report(_exceptionable, {
        path: _path + ".focused",
        expected: "(boolean | undefined)",
        value: input.focused
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), "number" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "number",
        value: input.value
    })].every((flag: boolean) => flag); const $vo6 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 9 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "9",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo7 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.focused || "boolean" === typeof input.focused || $report(_exceptionable, {
        path: _path + ".focused",
        expected: "(boolean | undefined)",
        value: input.focused
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 10 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "10",
        value: input.type
    }), "number" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "number",
        value: input.value
    })].every((flag: boolean) => flag); const $vo8 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "8",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo9 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.focused || "boolean" === typeof input.focused || $report(_exceptionable, {
        path: _path + ".focused",
        expected: "(boolean | undefined)",
        value: input.focused
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo10 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 6 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "6",
        value: input.type
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo11 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APIApplicationCommandInteractionDataSubcommandOption>",
        value: input.options
    })) && input.options.map((elem: any, _index117: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index117 + "]",
        expected: "APIApplicationCommandInteractionDataSubcommandOption",
        value: elem
    })) && $vo12(elem, _path + ".options[" + _index117 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index117 + "]",
        expected: "APIApplicationCommandInteractionDataSubcommandOption",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APIApplicationCommandInteractionDataSubcommandOption>",
        value: input.options
    })].every((flag: boolean) => flag); const $vo12 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<APIApplicationCommandInteractionDataBasicOption> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index118: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index118 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })) && $vu1(elem, _path + ".options[" + _index118 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index118 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<APIApplicationCommandInteractionDataBasicOption> | undefined)",
        value: input.options
    })].every((flag: boolean) => flag); const $vo13 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.users || ("object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "(Record<string, APIUser> | undefined)",
        value: input.users
    })) && $vo14(input.users, _path + ".users", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "(Record<string, APIUser> | undefined)",
        value: input.users
    }), undefined === input.roles || ("object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "(Record<string, APIRole> | undefined)",
        value: input.roles
    })) && $vo17(input.roles, _path + ".roles", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "(Record<string, APIRole> | undefined)",
        value: input.roles
    }), undefined === input.members || ("object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    })) && $vo20(input.members, _path + ".members", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    }), undefined === input.channels || ("object" === typeof input.channels && null !== input.channels && false === Array.isArray(input.channels) || $report(_exceptionable, {
        path: _path + ".channels",
        expected: "(Record<string, APIInteractionDataResolvedChannel> | undefined)",
        value: input.channels
    })) && $vo22(input.channels, _path + ".channels", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channels",
        expected: "(Record<string, APIInteractionDataResolvedChannel> | undefined)",
        value: input.channels
    }), undefined === input.attachments || ("object" === typeof input.attachments && null !== input.attachments && false === Array.isArray(input.attachments) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "(Record<string, APIAttachment> | undefined)",
        value: input.attachments
    })) && $vo26(input.attachments, _path + ".attachments", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "(Record<string, APIAttachment> | undefined)",
        value: input.attachments
    })].every((flag: boolean) => flag); const $vo14 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIUser",
            value: value
        })) && $vo15(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIUser",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo15 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.username || $report(_exceptionable, {
        path: _path + ".username",
        expected: "string",
        value: input.username
    }), "string" === typeof input.discriminator || $report(_exceptionable, {
        path: _path + ".discriminator",
        expected: "string",
        value: input.discriminator
    }), null === input.global_name || "string" === typeof input.global_name || $report(_exceptionable, {
        path: _path + ".global_name",
        expected: "(null | string)",
        value: input.global_name
    }), null === input.avatar || "string" === typeof input.avatar || $report(_exceptionable, {
        path: _path + ".avatar",
        expected: "(null | string)",
        value: input.avatar
    }), undefined === input.bot || "boolean" === typeof input.bot || $report(_exceptionable, {
        path: _path + ".bot",
        expected: "(boolean | undefined)",
        value: input.bot
    }), undefined === input.system || "boolean" === typeof input.system || $report(_exceptionable, {
        path: _path + ".system",
        expected: "(boolean | undefined)",
        value: input.system
    }), undefined === input.mfa_enabled || "boolean" === typeof input.mfa_enabled || $report(_exceptionable, {
        path: _path + ".mfa_enabled",
        expected: "(boolean | undefined)",
        value: input.mfa_enabled
    }), null === input.banner || undefined === input.banner || "string" === typeof input.banner || $report(_exceptionable, {
        path: _path + ".banner",
        expected: "(null | string | undefined)",
        value: input.banner
    }), null === input.accent_color || undefined === input.accent_color || "number" === typeof input.accent_color || $report(_exceptionable, {
        path: _path + ".accent_color",
        expected: "(null | number | undefined)",
        value: input.accent_color
    }), undefined === input.locale || "string" === typeof input.locale || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(string | undefined)",
        value: input.locale
    }), undefined === input.verified || "boolean" === typeof input.verified || $report(_exceptionable, {
        path: _path + ".verified",
        expected: "(boolean | undefined)",
        value: input.verified
    }), null === input.email || undefined === input.email || "string" === typeof input.email || $report(_exceptionable, {
        path: _path + ".email",
        expected: "(null | string | undefined)",
        value: input.email
    }), undefined === input.flags || true === $vv119.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 1024 | 1048576 | 1125899906842624 | 128 | 131072 | 16 | 16384 | 17592186044416 | 2 | 2097152 | 2251799813685248 | 256 | 262144 | 32 | 4 | 4194304 | 512 | 524288 | 64 | 65536 | 8 | 8192 | undefined)",
        value: input.flags
    }), undefined === input.premium_type || 0 === input.premium_type || 1 === input.premium_type || 2 === input.premium_type || 3 === input.premium_type || $report(_exceptionable, {
        path: _path + ".premium_type",
        expected: "(0 | 1 | 2 | 3 | undefined)",
        value: input.premium_type
    }), undefined === input.public_flags || true === $vv120.has(input.public_flags) || $report(_exceptionable, {
        path: _path + ".public_flags",
        expected: "(1 | 1024 | 1048576 | 1125899906842624 | 128 | 131072 | 16 | 16384 | 17592186044416 | 2 | 2097152 | 2251799813685248 | 256 | 262144 | 32 | 4 | 4194304 | 512 | 524288 | 64 | 65536 | 8 | 8192 | undefined)",
        value: input.public_flags
    }), null === input.avatar_decoration || undefined === input.avatar_decoration || "string" === typeof input.avatar_decoration || $report(_exceptionable, {
        path: _path + ".avatar_decoration",
        expected: "(null | string | undefined)",
        value: input.avatar_decoration
    }), null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || ("object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })) && $vo16(input.avatar_decoration_data, _path + ".avatar_decoration_data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })].every((flag: boolean) => flag); const $vo16 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.asset || $report(_exceptionable, {
        path: _path + ".asset",
        expected: "string",
        value: input.asset
    }), "string" === typeof input.sku_id || $report(_exceptionable, {
        path: _path + ".sku_id",
        expected: "string",
        value: input.sku_id
    })].every((flag: boolean) => flag); const $vo17 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIRole",
            value: value
        })) && $vo18(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIRole",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo18 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), "number" === typeof input.color || $report(_exceptionable, {
        path: _path + ".color",
        expected: "number",
        value: input.color
    }), "boolean" === typeof input.hoist || $report(_exceptionable, {
        path: _path + ".hoist",
        expected: "boolean",
        value: input.hoist
    }), null === input.icon || undefined === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string | undefined)",
        value: input.icon
    }), null === input.unicode_emoji || undefined === input.unicode_emoji || "string" === typeof input.unicode_emoji || $report(_exceptionable, {
        path: _path + ".unicode_emoji",
        expected: "(null | string | undefined)",
        value: input.unicode_emoji
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), "string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    }), "boolean" === typeof input.managed || $report(_exceptionable, {
        path: _path + ".managed",
        expected: "boolean",
        value: input.managed
    }), "boolean" === typeof input.mentionable || $report(_exceptionable, {
        path: _path + ".mentionable",
        expected: "boolean",
        value: input.mentionable
    }), undefined === input.tags || ("object" === typeof input.tags && null !== input.tags && false === Array.isArray(input.tags) || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "(APIRoleTags | undefined)",
        value: input.tags
    })) && $vo19(input.tags, _path + ".tags", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "(APIRoleTags | undefined)",
        value: input.tags
    }), 1 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "1",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo19 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.bot_id || "string" === typeof input.bot_id || $report(_exceptionable, {
        path: _path + ".bot_id",
        expected: "(string | undefined)",
        value: input.bot_id
    }), null === input.premium_subscriber || undefined === input.premium_subscriber || $report(_exceptionable, {
        path: _path + ".premium_subscriber",
        expected: "(null | undefined)",
        value: input.premium_subscriber
    }), undefined === input.integration_id || "string" === typeof input.integration_id || $report(_exceptionable, {
        path: _path + ".integration_id",
        expected: "(string | undefined)",
        value: input.integration_id
    }), undefined === input.subscription_listing_id || "string" === typeof input.subscription_listing_id || $report(_exceptionable, {
        path: _path + ".subscription_listing_id",
        expected: "(string | undefined)",
        value: input.subscription_listing_id
    }), null === input.available_for_purchase || undefined === input.available_for_purchase || $report(_exceptionable, {
        path: _path + ".available_for_purchase",
        expected: "(null | undefined)",
        value: input.available_for_purchase
    }), null === input.guild_connections || undefined === input.guild_connections || $report(_exceptionable, {
        path: _path + ".guild_connections",
        expected: "(null | undefined)",
        value: input.guild_connections
    })].every((flag: boolean) => flag); const $vo20 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIInteractionDataResolvedGuildMember",
            value: value
        })) && $vo21(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIInteractionDataResolvedGuildMember",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo21 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    }), null === input.nick || undefined === input.nick || "string" === typeof input.nick || $report(_exceptionable, {
        path: _path + ".nick",
        expected: "(null | string | undefined)",
        value: input.nick
    }), null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar || $report(_exceptionable, {
        path: _path + ".avatar",
        expected: "(null | string | undefined)",
        value: input.avatar
    }), (Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    })) && input.roles.map((elem: any, _index121: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".roles[" + _index121 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    }), "string" === typeof input.joined_at || $report(_exceptionable, {
        path: _path + ".joined_at",
        expected: "string",
        value: input.joined_at
    }), null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since || $report(_exceptionable, {
        path: _path + ".premium_since",
        expected: "(null | string | undefined)",
        value: input.premium_since
    }), true === $vv122.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 4 | 512 | 64 | 8)",
        value: input.flags
    }), undefined === input.pending || "boolean" === typeof input.pending || $report(_exceptionable, {
        path: _path + ".pending",
        expected: "(boolean | undefined)",
        value: input.pending
    }), null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until || $report(_exceptionable, {
        path: _path + ".communication_disabled_until",
        expected: "(null | string | undefined)",
        value: input.communication_disabled_until
    }), null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || ("object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })) && $vo16(input.avatar_decoration_data, _path + ".avatar_decoration_data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })].every((flag: boolean) => flag); const $vo22 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "(APIInteractionDataResolvedChannelBase<ChannelType.GuildText | ChannelType.DM | ChannelType.GuildVoice | ChannelType.GroupDM | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia> | APIInteractionDataResolvedChannelBase<ThreadChannelType> & Pick<APIThreadChannel, \"parent_id\" | \"thread_metadata\">)",
            value: value
        })) && $vu4(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "(APIInteractionDataResolvedChannelBase<ChannelType.GuildText | ChannelType.DM | ChannelType.GuildVoice | ChannelType.GroupDM | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia> | APIInteractionDataResolvedChannelBase<ThreadChannelType> & Pick<APIThreadChannel, \"parent_id\" | \"thread_metadata\">)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo23 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [true === $vv123.has(input.type) || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5)",
        value: input.type
    }), "string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), null === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    })].every((flag: boolean) => flag); const $vo24 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [10 === input.type || 11 === input.type || 12 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(10 | 11 | 12)",
        value: input.type
    }), "string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), null === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.thread_metadata || ("object" === typeof input.thread_metadata && null !== input.thread_metadata || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    })) && $vo25(input.thread_metadata, _path + ".thread_metadata", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    })].every((flag: boolean) => flag); const $vo25 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["boolean" === typeof input.archived || $report(_exceptionable, {
        path: _path + ".archived",
        expected: "boolean",
        value: input.archived
    }), 60 === input.auto_archive_duration || 1440 === input.auto_archive_duration || 4320 === input.auto_archive_duration || 10080 === input.auto_archive_duration || $report(_exceptionable, {
        path: _path + ".auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60)",
        value: input.auto_archive_duration
    }), "string" === typeof input.archive_timestamp || $report(_exceptionable, {
        path: _path + ".archive_timestamp",
        expected: "string",
        value: input.archive_timestamp
    }), undefined === input.locked || "boolean" === typeof input.locked || $report(_exceptionable, {
        path: _path + ".locked",
        expected: "(boolean | undefined)",
        value: input.locked
    }), undefined === input.invitable || "boolean" === typeof input.invitable || $report(_exceptionable, {
        path: _path + ".invitable",
        expected: "(boolean | undefined)",
        value: input.invitable
    }), undefined === input.create_timestamp || "string" === typeof input.create_timestamp || $report(_exceptionable, {
        path: _path + ".create_timestamp",
        expected: "(string | undefined)",
        value: input.create_timestamp
    })].every((flag: boolean) => flag); const $vo26 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIAttachment",
            value: value
        })) && $vo27(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIAttachment",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo27 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.filename || $report(_exceptionable, {
        path: _path + ".filename",
        expected: "string",
        value: input.filename
    }), undefined === input.title || "string" === typeof input.title || $report(_exceptionable, {
        path: _path + ".title",
        expected: "(string | undefined)",
        value: input.title
    }), undefined === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.content_type || "string" === typeof input.content_type || $report(_exceptionable, {
        path: _path + ".content_type",
        expected: "(string | undefined)",
        value: input.content_type
    }), "number" === typeof input.size || $report(_exceptionable, {
        path: _path + ".size",
        expected: "number",
        value: input.size
    }), "string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "string",
        value: input.url
    }), "string" === typeof input.proxy_url || $report(_exceptionable, {
        path: _path + ".proxy_url",
        expected: "string",
        value: input.proxy_url
    }), null === input.height || undefined === input.height || "number" === typeof input.height || $report(_exceptionable, {
        path: _path + ".height",
        expected: "(null | number | undefined)",
        value: input.height
    }), null === input.width || undefined === input.width || "number" === typeof input.width || $report(_exceptionable, {
        path: _path + ".width",
        expected: "(null | number | undefined)",
        value: input.width
    }), undefined === input.ephemeral || "boolean" === typeof input.ephemeral || $report(_exceptionable, {
        path: _path + ".ephemeral",
        expected: "(boolean | undefined)",
        value: input.ephemeral
    }), undefined === input.duration_secs || "number" === typeof input.duration_secs || $report(_exceptionable, {
        path: _path + ".duration_secs",
        expected: "(number | undefined)",
        value: input.duration_secs
    }), undefined === input.waveform || "string" === typeof input.waveform || $report(_exceptionable, {
        path: _path + ".waveform",
        expected: "(string | undefined)",
        value: input.waveform
    }), undefined === input.flags || 4 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(4 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo28 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIThreadMember | undefined)",
        value: input.member
    })) && $vo29(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIThreadMember | undefined)",
        value: input.member
    }), undefined === input.thread_metadata || ("object" === typeof input.thread_metadata && null !== input.thread_metadata || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    })) && $vo25(input.thread_metadata, _path + ".thread_metadata", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    }), undefined === input.message_count || "number" === typeof input.message_count || $report(_exceptionable, {
        path: _path + ".message_count",
        expected: "(number | undefined)",
        value: input.message_count
    }), undefined === input.member_count || "number" === typeof input.member_count || $report(_exceptionable, {
        path: _path + ".member_count",
        expected: "(number | undefined)",
        value: input.member_count
    }), undefined === input.owner_id || "string" === typeof input.owner_id || $report(_exceptionable, {
        path: _path + ".owner_id",
        expected: "(string | undefined)",
        value: input.owner_id
    }), undefined === input.total_message_sent || "number" === typeof input.total_message_sent || $report(_exceptionable, {
        path: _path + ".total_message_sent",
        expected: "(number | undefined)",
        value: input.total_message_sent
    }), undefined === input.applied_tags || (Array.isArray(input.applied_tags) || $report(_exceptionable, {
        path: _path + ".applied_tags",
        expected: "(Array<string> | undefined)",
        value: input.applied_tags
    })) && input.applied_tags.map((elem: any, _index124: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".applied_tags[" + _index124 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".applied_tags",
        expected: "(Array<string> | undefined)",
        value: input.applied_tags
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 10 === input.type || 11 === input.type || 12 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(10 | 11 | 12)",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index125: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index125 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index125 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index125 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo29 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "(string | undefined)",
        value: input.id
    }), undefined === input.user_id || "string" === typeof input.user_id || $report(_exceptionable, {
        path: _path + ".user_id",
        expected: "(string | undefined)",
        value: input.user_id
    }), "string" === typeof input.join_timestamp || $report(_exceptionable, {
        path: _path + ".join_timestamp",
        expected: "string",
        value: input.join_timestamp
    }), 1 === input.flags || 2 === input.flags || 4 === input.flags || 8 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 2 | 4 | 8)",
        value: input.flags
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIGuildMember | undefined)",
        value: input.member
    })) && $vo30(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIGuildMember | undefined)",
        value: input.member
    })].every((flag: boolean) => flag); const $vo30 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    }), null === input.nick || undefined === input.nick || "string" === typeof input.nick || $report(_exceptionable, {
        path: _path + ".nick",
        expected: "(null | string | undefined)",
        value: input.nick
    }), null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar || $report(_exceptionable, {
        path: _path + ".avatar",
        expected: "(null | string | undefined)",
        value: input.avatar
    }), (Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    })) && input.roles.map((elem: any, _index126: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".roles[" + _index126 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    }), "string" === typeof input.joined_at || $report(_exceptionable, {
        path: _path + ".joined_at",
        expected: "string",
        value: input.joined_at
    }), null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since || $report(_exceptionable, {
        path: _path + ".premium_since",
        expected: "(null | string | undefined)",
        value: input.premium_since
    }), "boolean" === typeof input.deaf || $report(_exceptionable, {
        path: _path + ".deaf",
        expected: "boolean",
        value: input.deaf
    }), "boolean" === typeof input.mute || $report(_exceptionable, {
        path: _path + ".mute",
        expected: "boolean",
        value: input.mute
    }), true === $vv127.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 4 | 512 | 64 | 8)",
        value: input.flags
    }), undefined === input.pending || "boolean" === typeof input.pending || $report(_exceptionable, {
        path: _path + ".pending",
        expected: "(boolean | undefined)",
        value: input.pending
    }), null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until || $report(_exceptionable, {
        path: _path + ".communication_disabled_until",
        expected: "(null | string | undefined)",
        value: input.communication_disabled_until
    }), null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || ("object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })) && $vo16(input.avatar_decoration_data, _path + ".avatar_decoration_data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })].every((flag: boolean) => flag); const $vo31 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 0 === input.type || 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1)",
        value: input.type
    }), "string" === typeof input.allow || $report(_exceptionable, {
        path: _path + ".allow",
        expected: "string",
        value: input.allow
    }), "string" === typeof input.deny || $report(_exceptionable, {
        path: _path + ".deny",
        expected: "string",
        value: input.deny
    })].every((flag: boolean) => flag); const $vo32 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.name || undefined === input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | undefined)",
        value: input.name
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.recipients || (Array.isArray(input.recipients) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })) && input.recipients.map((elem: any, _index128: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".recipients[" + _index128 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".recipients[" + _index128 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".recipients[" + _index128 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })].every((flag: boolean) => flag); const $vo33 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.name || undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string | undefined)",
        value: input.name
    }), undefined === input.application_id || "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "(string | undefined)",
        value: input.application_id
    }), null === input.icon || undefined === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string | undefined)",
        value: input.icon
    }), undefined === input.owner_id || "string" === typeof input.owner_id || $report(_exceptionable, {
        path: _path + ".owner_id",
        expected: "(string | undefined)",
        value: input.owner_id
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.managed || "boolean" === typeof input.managed || $report(_exceptionable, {
        path: _path + ".managed",
        expected: "(boolean | undefined)",
        value: input.managed
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.recipients || (Array.isArray(input.recipients) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })) && input.recipients.map((elem: any, _index129: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".recipients[" + _index129 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".recipients[" + _index129 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".recipients[" + _index129 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })].every((flag: boolean) => flag); const $vo34 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index130: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index130 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index130 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index130 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo35 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_forum_layout || 0 === input.default_forum_layout || 1 === input.default_forum_layout || 2 === input.default_forum_layout || $report(_exceptionable, {
        path: _path + ".default_forum_layout",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.default_forum_layout
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.available_tags || (Array.isArray(input.available_tags) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "(Array<APIGuildForumTag> | undefined)",
        value: input.available_tags
    })) && input.available_tags.map((elem: any, _index131: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index131 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })) && $vo36(elem, _path + ".available_tags[" + _index131 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index131 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "(Array<APIGuildForumTag> | undefined)",
        value: input.available_tags
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.default_reaction_emoji || undefined === input.default_reaction_emoji || ("object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null | undefined)",
        value: input.default_reaction_emoji
    })) && $vo37(input.default_reaction_emoji, _path + ".default_reaction_emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null | undefined)",
        value: input.default_reaction_emoji
    }), null === input.default_sort_order || undefined === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order || $report(_exceptionable, {
        path: _path + ".default_sort_order",
        expected: "(0 | 1 | null | undefined)",
        value: input.default_sort_order
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index132: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index132 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index132 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index132 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 15 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "15",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo36 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), "boolean" === typeof input.moderated || $report(_exceptionable, {
        path: _path + ".moderated",
        expected: "boolean",
        value: input.moderated
    }), null === input.emoji_id || "string" === typeof input.emoji_id || $report(_exceptionable, {
        path: _path + ".emoji_id",
        expected: "(null | string)",
        value: input.emoji_id
    }), null === input.emoji_name || "string" === typeof input.emoji_name || $report(_exceptionable, {
        path: _path + ".emoji_name",
        expected: "(null | string)",
        value: input.emoji_name
    })].every((flag: boolean) => flag); const $vo37 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.emoji_id || "string" === typeof input.emoji_id || $report(_exceptionable, {
        path: _path + ".emoji_id",
        expected: "(null | string)",
        value: input.emoji_id
    }), null === input.emoji_name || "string" === typeof input.emoji_name || $report(_exceptionable, {
        path: _path + ".emoji_name",
        expected: "(null | string)",
        value: input.emoji_name
    })].every((flag: boolean) => flag); const $vo38 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.available_tags || (Array.isArray(input.available_tags) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "(Array<APIGuildForumTag> | undefined)",
        value: input.available_tags
    })) && input.available_tags.map((elem: any, _index133: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index133 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })) && $vo36(elem, _path + ".available_tags[" + _index133 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index133 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "(Array<APIGuildForumTag> | undefined)",
        value: input.available_tags
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.default_reaction_emoji || undefined === input.default_reaction_emoji || ("object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null | undefined)",
        value: input.default_reaction_emoji
    })) && $vo37(input.default_reaction_emoji, _path + ".default_reaction_emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null | undefined)",
        value: input.default_reaction_emoji
    }), null === input.default_sort_order || undefined === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order || $report(_exceptionable, {
        path: _path + ".default_sort_order",
        expected: "(0 | 1 | null | undefined)",
        value: input.default_sort_order
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index134: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index134 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index134 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index134 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 16 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "16",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo39 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.bitrate || "number" === typeof input.bitrate || $report(_exceptionable, {
        path: _path + ".bitrate",
        expected: "(number | undefined)",
        value: input.bitrate
    }), undefined === input.user_limit || "number" === typeof input.user_limit || $report(_exceptionable, {
        path: _path + ".user_limit",
        expected: "(number | undefined)",
        value: input.user_limit
    }), null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region || $report(_exceptionable, {
        path: _path + ".rtc_region",
        expected: "(null | string | undefined)",
        value: input.rtc_region
    }), undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode || $report(_exceptionable, {
        path: _path + ".video_quality_mode",
        expected: "(1 | 2 | undefined)",
        value: input.video_quality_mode
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index135: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index135 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index135 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index135 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 13 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "13",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    })].every((flag: boolean) => flag); const $vo40 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.bitrate || "number" === typeof input.bitrate || $report(_exceptionable, {
        path: _path + ".bitrate",
        expected: "(number | undefined)",
        value: input.bitrate
    }), undefined === input.user_limit || "number" === typeof input.user_limit || $report(_exceptionable, {
        path: _path + ".user_limit",
        expected: "(number | undefined)",
        value: input.user_limit
    }), null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region || $report(_exceptionable, {
        path: _path + ".rtc_region",
        expected: "(null | string | undefined)",
        value: input.rtc_region
    }), undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode || $report(_exceptionable, {
        path: _path + ".video_quality_mode",
        expected: "(1 | 2 | undefined)",
        value: input.video_quality_mode
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index136: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index136 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index136 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index136 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    })].every((flag: boolean) => flag); const $vo41 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index137: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index137 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index137 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index137 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo42 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 0 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "0",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index138: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index138 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index138 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index138 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo43 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    }), ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    }), null === input.nick || undefined === input.nick || "string" === typeof input.nick || $report(_exceptionable, {
        path: _path + ".nick",
        expected: "(null | string | undefined)",
        value: input.nick
    }), null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar || $report(_exceptionable, {
        path: _path + ".avatar",
        expected: "(null | string | undefined)",
        value: input.avatar
    }), (Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    })) && input.roles.map((elem: any, _index139: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".roles[" + _index139 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    }), "string" === typeof input.joined_at || $report(_exceptionable, {
        path: _path + ".joined_at",
        expected: "string",
        value: input.joined_at
    }), null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since || $report(_exceptionable, {
        path: _path + ".premium_since",
        expected: "(null | string | undefined)",
        value: input.premium_since
    }), "boolean" === typeof input.deaf || $report(_exceptionable, {
        path: _path + ".deaf",
        expected: "boolean",
        value: input.deaf
    }), "boolean" === typeof input.mute || $report(_exceptionable, {
        path: _path + ".mute",
        expected: "boolean",
        value: input.mute
    }), true === $vv140.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 4 | 512 | 64 | 8)",
        value: input.flags
    }), undefined === input.pending || "boolean" === typeof input.pending || $report(_exceptionable, {
        path: _path + ".pending",
        expected: "(boolean | undefined)",
        value: input.pending
    }), null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until || $report(_exceptionable, {
        path: _path + ".communication_disabled_until",
        expected: "(null | string | undefined)",
        value: input.communication_disabled_until
    }), null === input.avatar_decoration_data || undefined === input.avatar_decoration_data || ("object" === typeof input.avatar_decoration_data && null !== input.avatar_decoration_data || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })) && $vo16(input.avatar_decoration_data, _path + ".avatar_decoration_data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".avatar_decoration_data",
        expected: "(APIAvatarDecorationData | null | undefined)",
        value: input.avatar_decoration_data
    })].every((flag: boolean) => flag); const $vo44 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), ("object" === typeof input.author && null !== input.author || $report(_exceptionable, {
        path: _path + ".author",
        expected: "APIUser",
        value: input.author
    })) && $vo15(input.author, _path + ".author", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".author",
        expected: "APIUser",
        value: input.author
    }), "string" === typeof input.content || $report(_exceptionable, {
        path: _path + ".content",
        expected: "string",
        value: input.content
    }), "string" === typeof input.timestamp || $report(_exceptionable, {
        path: _path + ".timestamp",
        expected: "string",
        value: input.timestamp
    }), null === input.edited_timestamp || "string" === typeof input.edited_timestamp || $report(_exceptionable, {
        path: _path + ".edited_timestamp",
        expected: "(null | string)",
        value: input.edited_timestamp
    }), "boolean" === typeof input.tts || $report(_exceptionable, {
        path: _path + ".tts",
        expected: "boolean",
        value: input.tts
    }), "boolean" === typeof input.mention_everyone || $report(_exceptionable, {
        path: _path + ".mention_everyone",
        expected: "boolean",
        value: input.mention_everyone
    }), (Array.isArray(input.mentions) || $report(_exceptionable, {
        path: _path + ".mentions",
        expected: "Array<APIUser>",
        value: input.mentions
    })) && input.mentions.map((elem: any, _index141: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".mentions[" + _index141 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".mentions[" + _index141 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".mentions[" + _index141 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".mentions",
        expected: "Array<APIUser>",
        value: input.mentions
    }), (Array.isArray(input.mention_roles) || $report(_exceptionable, {
        path: _path + ".mention_roles",
        expected: "Array<string>",
        value: input.mention_roles
    })) && input.mention_roles.map((elem: any, _index142: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".mention_roles[" + _index142 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".mention_roles",
        expected: "Array<string>",
        value: input.mention_roles
    }), undefined === input.mention_channels || (Array.isArray(input.mention_channels) || $report(_exceptionable, {
        path: _path + ".mention_channels",
        expected: "(Array<APIChannelMention> | undefined)",
        value: input.mention_channels
    })) && input.mention_channels.map((elem: any, _index143: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".mention_channels[" + _index143 + "]",
        expected: "APIChannelMention",
        value: elem
    })) && $vo45(elem, _path + ".mention_channels[" + _index143 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".mention_channels[" + _index143 + "]",
        expected: "APIChannelMention",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".mention_channels",
        expected: "(Array<APIChannelMention> | undefined)",
        value: input.mention_channels
    }), (Array.isArray(input.attachments) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "Array<APIAttachment>",
        value: input.attachments
    })) && input.attachments.map((elem: any, _index144: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".attachments[" + _index144 + "]",
        expected: "APIAttachment",
        value: elem
    })) && $vo27(elem, _path + ".attachments[" + _index144 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".attachments[" + _index144 + "]",
        expected: "APIAttachment",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "Array<APIAttachment>",
        value: input.attachments
    }), (Array.isArray(input.embeds) || $report(_exceptionable, {
        path: _path + ".embeds",
        expected: "Array<APIEmbed>",
        value: input.embeds
    })) && input.embeds.map((elem: any, _index145: number) => ("object" === typeof elem && null !== elem && false === Array.isArray(elem) || $report(_exceptionable, {
        path: _path + ".embeds[" + _index145 + "]",
        expected: "APIEmbed",
        value: elem
    })) && $vo46(elem, _path + ".embeds[" + _index145 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".embeds[" + _index145 + "]",
        expected: "APIEmbed",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".embeds",
        expected: "Array<APIEmbed>",
        value: input.embeds
    }), undefined === input.reactions || (Array.isArray(input.reactions) || $report(_exceptionable, {
        path: _path + ".reactions",
        expected: "(Array<APIReaction> | undefined)",
        value: input.reactions
    })) && input.reactions.map((elem: any, _index146: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".reactions[" + _index146 + "]",
        expected: "APIReaction",
        value: elem
    })) && $vo54(elem, _path + ".reactions[" + _index146 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".reactions[" + _index146 + "]",
        expected: "APIReaction",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".reactions",
        expected: "(Array<APIReaction> | undefined)",
        value: input.reactions
    }), undefined === input.nonce || "string" === typeof input.nonce || "number" === typeof input.nonce || $report(_exceptionable, {
        path: _path + ".nonce",
        expected: "(number | string | undefined)",
        value: input.nonce
    }), "boolean" === typeof input.pinned || $report(_exceptionable, {
        path: _path + ".pinned",
        expected: "boolean",
        value: input.pinned
    }), undefined === input.webhook_id || "string" === typeof input.webhook_id || $report(_exceptionable, {
        path: _path + ".webhook_id",
        expected: "(string | undefined)",
        value: input.webhook_id
    }), true === $vv147.has(input.type) || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 3 | 30 | 31 | 32 | 36 | 37 | 38 | 39 | 4 | 44 | 46 | 5 | 6 | 7 | 8 | 9)",
        value: input.type
    }), undefined === input.activity || ("object" === typeof input.activity && null !== input.activity || $report(_exceptionable, {
        path: _path + ".activity",
        expected: "(APIMessageActivity | undefined)",
        value: input.activity
    })) && $vo57(input.activity, _path + ".activity", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".activity",
        expected: "(APIMessageActivity | undefined)",
        value: input.activity
    }), undefined === input.application || ("object" === typeof input.application && null !== input.application && false === Array.isArray(input.application) || $report(_exceptionable, {
        path: _path + ".application",
        expected: "(Partial<APIApplication> | undefined)",
        value: input.application
    })) && $vo58(input.application, _path + ".application", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".application",
        expected: "(Partial<APIApplication> | undefined)",
        value: input.application
    }), undefined === input.application_id || "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "(string | undefined)",
        value: input.application_id
    }), undefined === input.message_reference || ("object" === typeof input.message_reference && null !== input.message_reference || $report(_exceptionable, {
        path: _path + ".message_reference",
        expected: "(APIMessageReference | undefined)",
        value: input.message_reference
    })) && $vo67(input.message_reference, _path + ".message_reference", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message_reference",
        expected: "(APIMessageReference | undefined)",
        value: input.message_reference
    }), undefined === input.flags || true === $vv148.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 1024 | 128 | 16 | 2 | 256 | 32 | 4 | 4096 | 64 | 8 | 8192 | undefined)",
        value: input.flags
    }), null === input.referenced_message || undefined === input.referenced_message || ("object" === typeof input.referenced_message && null !== input.referenced_message || $report(_exceptionable, {
        path: _path + ".referenced_message",
        expected: "(APIMessage | null | undefined)",
        value: input.referenced_message
    })) && $vo44(input.referenced_message, _path + ".referenced_message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".referenced_message",
        expected: "(APIMessage | null | undefined)",
        value: input.referenced_message
    }), undefined === input.interaction_metadata || ("object" === typeof input.interaction_metadata && null !== input.interaction_metadata || $report(_exceptionable, {
        path: _path + ".interaction_metadata",
        expected: "(APIMessageInteractionMetadata | undefined)",
        value: input.interaction_metadata
    })) && $vo68(input.interaction_metadata, _path + ".interaction_metadata", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".interaction_metadata",
        expected: "(APIMessageInteractionMetadata | undefined)",
        value: input.interaction_metadata
    }), undefined === input.interaction || ("object" === typeof input.interaction && null !== input.interaction || $report(_exceptionable, {
        path: _path + ".interaction",
        expected: "(APIMessageInteraction | undefined)",
        value: input.interaction
    })) && $vo70(input.interaction, _path + ".interaction", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".interaction",
        expected: "(APIMessageInteraction | undefined)",
        value: input.interaction
    }), undefined === input.thread || ("object" === typeof input.thread && null !== input.thread || $report(_exceptionable, {
        path: _path + ".thread",
        expected: "(APIDMChannel | APIGroupDMChannel | APIGuildCategoryChannel | APIGuildForumChannel | APIGuildMediaChannel | APIGuildStageVoiceChannel | APIGuildVoiceChannel | APINewsChannel | APITextChannel | APIThreadChannel | undefined)",
        value: input.thread
    })) && $vu5(input.thread, _path + ".thread", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".thread",
        expected: "(APIDMChannel | APIGroupDMChannel | APIGuildCategoryChannel | APIGuildForumChannel | APIGuildMediaChannel | APIGuildStageVoiceChannel | APIGuildVoiceChannel | APINewsChannel | APITextChannel | APIThreadChannel | undefined)",
        value: input.thread
    }), undefined === input.components || (Array.isArray(input.components) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "(Array<APIActionRowComponent<APIMessageActionRowComponent>> | undefined)",
        value: input.components
    })) && input.components.map((elem: any, _index149: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".components[" + _index149 + "]",
        expected: "APIActionRowComponent<APIMessageActionRowComponent>",
        value: elem
    })) && $vo82(elem, _path + ".components[" + _index149 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".components[" + _index149 + "]",
        expected: "APIActionRowComponent<APIMessageActionRowComponent>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "(Array<APIActionRowComponent<APIMessageActionRowComponent>> | undefined)",
        value: input.components
    }), undefined === input.sticker_items || (Array.isArray(input.sticker_items) || $report(_exceptionable, {
        path: _path + ".sticker_items",
        expected: "(Array<APIStickerItem> | undefined)",
        value: input.sticker_items
    })) && input.sticker_items.map((elem: any, _index150: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".sticker_items[" + _index150 + "]",
        expected: "APIStickerItem",
        value: elem
    })) && $vo97(elem, _path + ".sticker_items[" + _index150 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".sticker_items[" + _index150 + "]",
        expected: "APIStickerItem",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".sticker_items",
        expected: "(Array<APIStickerItem> | undefined)",
        value: input.sticker_items
    }), undefined === input.stickers || (Array.isArray(input.stickers) || $report(_exceptionable, {
        path: _path + ".stickers",
        expected: "(Array<APISticker> | undefined)",
        value: input.stickers
    })) && input.stickers.map((elem: any, _index151: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".stickers[" + _index151 + "]",
        expected: "APISticker",
        value: elem
    })) && $vo98(elem, _path + ".stickers[" + _index151 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".stickers[" + _index151 + "]",
        expected: "APISticker",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".stickers",
        expected: "(Array<APISticker> | undefined)",
        value: input.stickers
    }), undefined === input.position || "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "(number | undefined)",
        value: input.position
    }), undefined === input.role_subscription_data || ("object" === typeof input.role_subscription_data && null !== input.role_subscription_data || $report(_exceptionable, {
        path: _path + ".role_subscription_data",
        expected: "(APIMessageRoleSubscriptionData | undefined)",
        value: input.role_subscription_data
    })) && $vo99(input.role_subscription_data, _path + ".role_subscription_data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".role_subscription_data",
        expected: "(APIMessageRoleSubscriptionData | undefined)",
        value: input.role_subscription_data
    }), undefined === input.resolved || ("object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    })) && $vo13(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    }), undefined === input.poll || ("object" === typeof input.poll && null !== input.poll || $report(_exceptionable, {
        path: _path + ".poll",
        expected: "(APIPoll | undefined)",
        value: input.poll
    })) && $vo100(input.poll, _path + ".poll", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".poll",
        expected: "(APIPoll | undefined)",
        value: input.poll
    }), undefined === input.message_snapshots || (Array.isArray(input.message_snapshots) || $report(_exceptionable, {
        path: _path + ".message_snapshots",
        expected: "(Array<APIMessageSnapshot> | undefined)",
        value: input.message_snapshots
    })) && input.message_snapshots.map((elem: any, _index152: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".message_snapshots[" + _index152 + "]",
        expected: "APIMessageSnapshot",
        value: elem
    })) && $vo105(elem, _path + ".message_snapshots[" + _index152 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message_snapshots[" + _index152 + "]",
        expected: "APIMessageSnapshot",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".message_snapshots",
        expected: "(Array<APIMessageSnapshot> | undefined)",
        value: input.message_snapshots
    }), undefined === input.call || ("object" === typeof input.call && null !== input.call || $report(_exceptionable, {
        path: _path + ".call",
        expected: "(APIMessageCall | undefined)",
        value: input.call
    })) && $vo107(input.call, _path + ".call", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".call",
        expected: "(APIMessageCall | undefined)",
        value: input.call
    })].every((flag: boolean) => flag); const $vo45 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "string",
        value: input.guild_id
    }), true === $vv153.has(input.type) || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5)",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    })].every((flag: boolean) => flag); const $vo46 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.title || "string" === typeof input.title || $report(_exceptionable, {
        path: _path + ".title",
        expected: "(string | undefined)",
        value: input.title
    }), undefined === input.type || "rich" === input.type || "image" === input.type || "video" === input.type || "gifv" === input.type || "article" === input.type || "link" === input.type || "auto_moderation_message" === input.type || "poll_result" === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(\"article\" | \"auto_moderation_message\" | \"gifv\" | \"image\" | \"link\" | \"poll_result\" | \"rich\" | \"video\" | undefined)",
        value: input.type
    }), undefined === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.url || "string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "(string | undefined)",
        value: input.url
    }), undefined === input.timestamp || "string" === typeof input.timestamp || $report(_exceptionable, {
        path: _path + ".timestamp",
        expected: "(string | undefined)",
        value: input.timestamp
    }), undefined === input.color || "number" === typeof input.color || $report(_exceptionable, {
        path: _path + ".color",
        expected: "(number | undefined)",
        value: input.color
    }), undefined === input.footer || ("object" === typeof input.footer && null !== input.footer || $report(_exceptionable, {
        path: _path + ".footer",
        expected: "(APIEmbedFooter | undefined)",
        value: input.footer
    })) && $vo47(input.footer, _path + ".footer", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".footer",
        expected: "(APIEmbedFooter | undefined)",
        value: input.footer
    }), undefined === input.image || ("object" === typeof input.image && null !== input.image || $report(_exceptionable, {
        path: _path + ".image",
        expected: "(APIEmbedImage | undefined)",
        value: input.image
    })) && $vo48(input.image, _path + ".image", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".image",
        expected: "(APIEmbedImage | undefined)",
        value: input.image
    }), undefined === input.thumbnail || ("object" === typeof input.thumbnail && null !== input.thumbnail || $report(_exceptionable, {
        path: _path + ".thumbnail",
        expected: "(APIEmbedThumbnail | undefined)",
        value: input.thumbnail
    })) && $vo49(input.thumbnail, _path + ".thumbnail", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".thumbnail",
        expected: "(APIEmbedThumbnail | undefined)",
        value: input.thumbnail
    }), undefined === input.video || ("object" === typeof input.video && null !== input.video && false === Array.isArray(input.video) || $report(_exceptionable, {
        path: _path + ".video",
        expected: "(APIEmbedVideo | undefined)",
        value: input.video
    })) && $vo50(input.video, _path + ".video", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".video",
        expected: "(APIEmbedVideo | undefined)",
        value: input.video
    }), undefined === input.provider || ("object" === typeof input.provider && null !== input.provider && false === Array.isArray(input.provider) || $report(_exceptionable, {
        path: _path + ".provider",
        expected: "(APIEmbedProvider | undefined)",
        value: input.provider
    })) && $vo51(input.provider, _path + ".provider", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".provider",
        expected: "(APIEmbedProvider | undefined)",
        value: input.provider
    }), undefined === input.author || ("object" === typeof input.author && null !== input.author || $report(_exceptionable, {
        path: _path + ".author",
        expected: "(APIEmbedAuthor | undefined)",
        value: input.author
    })) && $vo52(input.author, _path + ".author", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".author",
        expected: "(APIEmbedAuthor | undefined)",
        value: input.author
    }), undefined === input.fields || (Array.isArray(input.fields) || $report(_exceptionable, {
        path: _path + ".fields",
        expected: "(Array<APIEmbedField> | undefined)",
        value: input.fields
    })) && input.fields.map((elem: any, _index154: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".fields[" + _index154 + "]",
        expected: "APIEmbedField",
        value: elem
    })) && $vo53(elem, _path + ".fields[" + _index154 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".fields[" + _index154 + "]",
        expected: "APIEmbedField",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".fields",
        expected: "(Array<APIEmbedField> | undefined)",
        value: input.fields
    })].every((flag: boolean) => flag); const $vo47 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.text || $report(_exceptionable, {
        path: _path + ".text",
        expected: "string",
        value: input.text
    }), undefined === input.icon_url || "string" === typeof input.icon_url || $report(_exceptionable, {
        path: _path + ".icon_url",
        expected: "(string | undefined)",
        value: input.icon_url
    }), undefined === input.proxy_icon_url || "string" === typeof input.proxy_icon_url || $report(_exceptionable, {
        path: _path + ".proxy_icon_url",
        expected: "(string | undefined)",
        value: input.proxy_icon_url
    })].every((flag: boolean) => flag); const $vo48 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "string",
        value: input.url
    }), undefined === input.proxy_url || "string" === typeof input.proxy_url || $report(_exceptionable, {
        path: _path + ".proxy_url",
        expected: "(string | undefined)",
        value: input.proxy_url
    }), undefined === input.height || "number" === typeof input.height || $report(_exceptionable, {
        path: _path + ".height",
        expected: "(number | undefined)",
        value: input.height
    }), undefined === input.width || "number" === typeof input.width || $report(_exceptionable, {
        path: _path + ".width",
        expected: "(number | undefined)",
        value: input.width
    })].every((flag: boolean) => flag); const $vo49 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "string",
        value: input.url
    }), undefined === input.proxy_url || "string" === typeof input.proxy_url || $report(_exceptionable, {
        path: _path + ".proxy_url",
        expected: "(string | undefined)",
        value: input.proxy_url
    }), undefined === input.height || "number" === typeof input.height || $report(_exceptionable, {
        path: _path + ".height",
        expected: "(number | undefined)",
        value: input.height
    }), undefined === input.width || "number" === typeof input.width || $report(_exceptionable, {
        path: _path + ".width",
        expected: "(number | undefined)",
        value: input.width
    })].every((flag: boolean) => flag); const $vo50 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.url || "string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "(string | undefined)",
        value: input.url
    }), undefined === input.proxy_url || "string" === typeof input.proxy_url || $report(_exceptionable, {
        path: _path + ".proxy_url",
        expected: "(string | undefined)",
        value: input.proxy_url
    }), undefined === input.height || "number" === typeof input.height || $report(_exceptionable, {
        path: _path + ".height",
        expected: "(number | undefined)",
        value: input.height
    }), undefined === input.width || "number" === typeof input.width || $report(_exceptionable, {
        path: _path + ".width",
        expected: "(number | undefined)",
        value: input.width
    })].every((flag: boolean) => flag); const $vo51 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.url || "string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "(string | undefined)",
        value: input.url
    })].every((flag: boolean) => flag); const $vo52 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.url || "string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "(string | undefined)",
        value: input.url
    }), undefined === input.icon_url || "string" === typeof input.icon_url || $report(_exceptionable, {
        path: _path + ".icon_url",
        expected: "(string | undefined)",
        value: input.icon_url
    }), undefined === input.proxy_icon_url || "string" === typeof input.proxy_icon_url || $report(_exceptionable, {
        path: _path + ".proxy_icon_url",
        expected: "(string | undefined)",
        value: input.proxy_icon_url
    })].every((flag: boolean) => flag); const $vo53 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    }), undefined === input.inline || "boolean" === typeof input.inline || $report(_exceptionable, {
        path: _path + ".inline",
        expected: "(boolean | undefined)",
        value: input.inline
    })].every((flag: boolean) => flag); const $vo54 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.count || $report(_exceptionable, {
        path: _path + ".count",
        expected: "number",
        value: input.count
    }), ("object" === typeof input.count_details && null !== input.count_details || $report(_exceptionable, {
        path: _path + ".count_details",
        expected: "APIReactionCountDetails",
        value: input.count_details
    })) && $vo55(input.count_details, _path + ".count_details", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".count_details",
        expected: "APIReactionCountDetails",
        value: input.count_details
    }), "boolean" === typeof input.me || $report(_exceptionable, {
        path: _path + ".me",
        expected: "boolean",
        value: input.me
    }), "boolean" === typeof input.me_burst || $report(_exceptionable, {
        path: _path + ".me_burst",
        expected: "boolean",
        value: input.me_burst
    }), ("object" === typeof input.emoji && null !== input.emoji || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "APIPartialEmoji",
        value: input.emoji
    })) && $vo56(input.emoji, _path + ".emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "APIPartialEmoji",
        value: input.emoji
    }), (Array.isArray(input.burst_colors) || $report(_exceptionable, {
        path: _path + ".burst_colors",
        expected: "Array<string>",
        value: input.burst_colors
    })) && input.burst_colors.map((elem: any, _index155: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".burst_colors[" + _index155 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".burst_colors",
        expected: "Array<string>",
        value: input.burst_colors
    })].every((flag: boolean) => flag); const $vo55 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.burst || $report(_exceptionable, {
        path: _path + ".burst",
        expected: "number",
        value: input.burst
    }), "number" === typeof input.normal || $report(_exceptionable, {
        path: _path + ".normal",
        expected: "number",
        value: input.normal
    })].every((flag: boolean) => flag); const $vo56 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.id || "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "(null | string)",
        value: input.id
    }), null === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    }), undefined === input.animated || "boolean" === typeof input.animated || $report(_exceptionable, {
        path: _path + ".animated",
        expected: "(boolean | undefined)",
        value: input.animated
    })].every((flag: boolean) => flag); const $vo57 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [1 === input.type || 2 === input.type || 3 === input.type || 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2 | 3 | 5)",
        value: input.type
    }), undefined === input.party_id || "string" === typeof input.party_id || $report(_exceptionable, {
        path: _path + ".party_id",
        expected: "(string | undefined)",
        value: input.party_id
    })].every((flag: boolean) => flag); const $vo58 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "(string | undefined)",
        value: input.id
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), null === input.icon || undefined === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string | undefined)",
        value: input.icon
    }), undefined === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.rpc_origins || (Array.isArray(input.rpc_origins) || $report(_exceptionable, {
        path: _path + ".rpc_origins",
        expected: "(Array<string> | undefined)",
        value: input.rpc_origins
    })) && input.rpc_origins.map((elem: any, _index156: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".rpc_origins[" + _index156 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".rpc_origins",
        expected: "(Array<string> | undefined)",
        value: input.rpc_origins
    }), undefined === input.bot_public || "boolean" === typeof input.bot_public || $report(_exceptionable, {
        path: _path + ".bot_public",
        expected: "(boolean | undefined)",
        value: input.bot_public
    }), undefined === input.bot_require_code_grant || "boolean" === typeof input.bot_require_code_grant || $report(_exceptionable, {
        path: _path + ".bot_require_code_grant",
        expected: "(boolean | undefined)",
        value: input.bot_require_code_grant
    }), undefined === input.bot || ("object" === typeof input.bot && null !== input.bot || $report(_exceptionable, {
        path: _path + ".bot",
        expected: "(APIUser | undefined)",
        value: input.bot
    })) && $vo15(input.bot, _path + ".bot", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".bot",
        expected: "(APIUser | undefined)",
        value: input.bot
    }), undefined === input.terms_of_service_url || "string" === typeof input.terms_of_service_url || $report(_exceptionable, {
        path: _path + ".terms_of_service_url",
        expected: "(string | undefined)",
        value: input.terms_of_service_url
    }), undefined === input.privacy_policy_url || "string" === typeof input.privacy_policy_url || $report(_exceptionable, {
        path: _path + ".privacy_policy_url",
        expected: "(string | undefined)",
        value: input.privacy_policy_url
    }), undefined === input.owner || ("object" === typeof input.owner && null !== input.owner || $report(_exceptionable, {
        path: _path + ".owner",
        expected: "(APIUser | undefined)",
        value: input.owner
    })) && $vo15(input.owner, _path + ".owner", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".owner",
        expected: "(APIUser | undefined)",
        value: input.owner
    }), undefined === input.summary || "" === input.summary || $report(_exceptionable, {
        path: _path + ".summary",
        expected: "(\"\" | undefined)",
        value: input.summary
    }), undefined === input.verify_key || "string" === typeof input.verify_key || $report(_exceptionable, {
        path: _path + ".verify_key",
        expected: "(string | undefined)",
        value: input.verify_key
    }), null === input.team || undefined === input.team || ("object" === typeof input.team && null !== input.team || $report(_exceptionable, {
        path: _path + ".team",
        expected: "(APITeam | null | undefined)",
        value: input.team
    })) && $vo59(input.team, _path + ".team", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".team",
        expected: "(APITeam | null | undefined)",
        value: input.team
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.guild || ("object" === typeof input.guild && null !== input.guild || $report(_exceptionable, {
        path: _path + ".guild",
        expected: "(APIPartialGuild | undefined)",
        value: input.guild
    })) && $vo61(input.guild, _path + ".guild", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".guild",
        expected: "(APIPartialGuild | undefined)",
        value: input.guild
    }), undefined === input.primary_sku_id || "string" === typeof input.primary_sku_id || $report(_exceptionable, {
        path: _path + ".primary_sku_id",
        expected: "(string | undefined)",
        value: input.primary_sku_id
    }), undefined === input.slug || "string" === typeof input.slug || $report(_exceptionable, {
        path: _path + ".slug",
        expected: "(string | undefined)",
        value: input.slug
    }), undefined === input.cover_image || "string" === typeof input.cover_image || $report(_exceptionable, {
        path: _path + ".cover_image",
        expected: "(string | undefined)",
        value: input.cover_image
    }), undefined === input.flags || true === $vv157.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1048576 | 131072 | 16 | 16384 | 2 | 2048 | 262144 | 32768 | 4 | 4096 | 524288 | 64 | 65536 | 8 | 8192 | 8388608 | undefined)",
        value: input.flags
    }), undefined === input.approximate_guild_count || "number" === typeof input.approximate_guild_count || $report(_exceptionable, {
        path: _path + ".approximate_guild_count",
        expected: "(number | undefined)",
        value: input.approximate_guild_count
    }), undefined === input.approximate_user_install_count || "number" === typeof input.approximate_user_install_count || $report(_exceptionable, {
        path: _path + ".approximate_user_install_count",
        expected: "(number | undefined)",
        value: input.approximate_user_install_count
    }), undefined === input.redirect_uris || (Array.isArray(input.redirect_uris) || $report(_exceptionable, {
        path: _path + ".redirect_uris",
        expected: "(Array<string> | undefined)",
        value: input.redirect_uris
    })) && input.redirect_uris.map((elem: any, _index158: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".redirect_uris[" + _index158 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".redirect_uris",
        expected: "(Array<string> | undefined)",
        value: input.redirect_uris
    }), null === input.interactions_endpoint_url || undefined === input.interactions_endpoint_url || "string" === typeof input.interactions_endpoint_url || $report(_exceptionable, {
        path: _path + ".interactions_endpoint_url",
        expected: "(null | string | undefined)",
        value: input.interactions_endpoint_url
    }), null === input.role_connections_verification_url || undefined === input.role_connections_verification_url || "string" === typeof input.role_connections_verification_url || $report(_exceptionable, {
        path: _path + ".role_connections_verification_url",
        expected: "(null | string | undefined)",
        value: input.role_connections_verification_url
    }), undefined === input.tags || (Array.isArray(input.tags) || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "([string, (string | undefined)?, (string | undefined)?, (string | undefined)?, (string | undefined)?] | undefined)",
        value: input.tags
    })) && ((1 <= input.tags.length && 5 >= input.tags.length || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "[string, (string | undefined), (string | undefined), (string | undefined), (string | undefined)]",
        value: input.tags
    })) && [
        "string" === typeof input.tags[0] || $report(_exceptionable, {
            path: _path + ".tags[0]",
            expected: "string",
            value: input.tags[0]
        }),
        undefined === input.tags[1] || "string" === typeof input.tags[1] || $report(_exceptionable, {
            path: _path + ".tags[1]",
            expected: "(string | undefined)",
            value: input.tags[1]
        }),
        undefined === input.tags[2] || "string" === typeof input.tags[2] || $report(_exceptionable, {
            path: _path + ".tags[2]",
            expected: "(string | undefined)",
            value: input.tags[2]
        }),
        undefined === input.tags[3] || "string" === typeof input.tags[3] || $report(_exceptionable, {
            path: _path + ".tags[3]",
            expected: "(string | undefined)",
            value: input.tags[3]
        }),
        undefined === input.tags[4] || "string" === typeof input.tags[4] || $report(_exceptionable, {
            path: _path + ".tags[4]",
            expected: "(string | undefined)",
            value: input.tags[4]
        })
    ].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "([string, (string | undefined)?, (string | undefined)?, (string | undefined)?, (string | undefined)?] | undefined)",
        value: input.tags
    }), undefined === input.install_params || ("object" === typeof input.install_params && null !== input.install_params || $report(_exceptionable, {
        path: _path + ".install_params",
        expected: "(APIApplicationInstallParams | undefined)",
        value: input.install_params
    })) && $vo64(input.install_params, _path + ".install_params", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".install_params",
        expected: "(APIApplicationInstallParams | undefined)",
        value: input.install_params
    }), undefined === input.integration_types_config || ("object" === typeof input.integration_types_config && null !== input.integration_types_config && false === Array.isArray(input.integration_types_config) || $report(_exceptionable, {
        path: _path + ".integration_types_config",
        expected: "(APIApplicationIntegrationTypesConfigMap | undefined)",
        value: input.integration_types_config
    })) && $vo65(input.integration_types_config, _path + ".integration_types_config", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".integration_types_config",
        expected: "(APIApplicationIntegrationTypesConfigMap | undefined)",
        value: input.integration_types_config
    }), undefined === input.custom_install_url || "string" === typeof input.custom_install_url || $report(_exceptionable, {
        path: _path + ".custom_install_url",
        expected: "(string | undefined)",
        value: input.custom_install_url
    })].every((flag: boolean) => flag); const $vo59 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string)",
        value: input.icon
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), (Array.isArray(input.members) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "Array<APITeamMember>",
        value: input.members
    })) && input.members.map((elem: any, _index159: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".members[" + _index159 + "]",
        expected: "APITeamMember",
        value: elem
    })) && $vo60(elem, _path + ".members[" + _index159 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".members[" + _index159 + "]",
        expected: "APITeamMember",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "Array<APITeamMember>",
        value: input.members
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), "string" === typeof input.owner_user_id || $report(_exceptionable, {
        path: _path + ".owner_user_id",
        expected: "string",
        value: input.owner_user_id
    })].every((flag: boolean) => flag); const $vo60 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [1 === input.membership_state || 2 === input.membership_state || $report(_exceptionable, {
        path: _path + ".membership_state",
        expected: "(1 | 2)",
        value: input.membership_state
    }), (Array.isArray(input.permissions) || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "[\"*\"]",
        value: input.permissions
    })) && ((input.permissions.length === 1 || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "[\"*\"]",
        value: input.permissions
    })) && [
        "*" === input.permissions[0] || $report(_exceptionable, {
            path: _path + ".permissions[0]",
            expected: "\"*\"",
            value: input.permissions[0]
        })
    ].every((flag: boolean) => flag)) || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "[\"*\"]",
        value: input.permissions
    }), "string" === typeof input.team_id || $report(_exceptionable, {
        path: _path + ".team_id",
        expected: "string",
        value: input.team_id
    }), ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    }), "admin" === input.role || "developer" === input.role || "read_only" === input.role || $report(_exceptionable, {
        path: _path + ".role",
        expected: "(\"admin\" | \"developer\" | \"read_only\")",
        value: input.role
    })].every((flag: boolean) => flag); const $vo61 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string)",
        value: input.icon
    }), null === input.splash || "string" === typeof input.splash || $report(_exceptionable, {
        path: _path + ".splash",
        expected: "(null | string)",
        value: input.splash
    }), null === input.banner || undefined === input.banner || "string" === typeof input.banner || $report(_exceptionable, {
        path: _path + ".banner",
        expected: "(null | string | undefined)",
        value: input.banner
    }), null === input.description || undefined === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), undefined === input.features || (Array.isArray(input.features) || $report(_exceptionable, {
        path: _path + ".features",
        expected: "(Array<GuildFeature> | undefined)",
        value: input.features
    })) && input.features.map((elem: any, _index160: number) => true === $vv161.has(elem) || $report(_exceptionable, {
        path: _path + ".features[" + _index160 + "]",
        expected: "(\"ANIMATED_BANNER\" | \"ANIMATED_ICON\" | \"APPLICATION_COMMAND_PERMISSIONS_V2\" | \"AUTO_MODERATION\" | \"BANNER\" | \"COMMUNITY\" | \"CREATOR_MONETIZABLE_PROVISIONAL\" | \"CREATOR_STORE_PAGE\" | \"DEVELOPER_SUPPORT_SERVER\" | \"DISCOVERABLE\" | \"FEATURABLE\" | \"HAS_DIRECTORY_ENTRY\" | \"HUB\" | \"INVITES_DISABLED\" | \"INVITE_SPLASH\" | \"LINKED_TO_HUB\" | \"MEMBER_VERIFICATION_GATE_ENABLED\" | \"MONETIZATION_ENABLED\" | \"MORE_STICKERS\" | \"NEWS\" | \"PARTNERED\" | \"PREVIEW_ENABLED\" | \"PRIVATE_THREADS\" | \"RAID_ALERTS_DISABLED\" | \"RELAY_ENABLED\" | \"ROLE_ICONS\" | \"ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE\" | \"ROLE_SUBSCRIPTIONS_ENABLED\" | \"TICKETED_EVENTS_ENABLED\" | \"VANITY_URL\" | \"VERIFIED\" | \"VIP_REGIONS\" | \"WELCOME_SCREEN_ENABLED\")",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".features",
        expected: "(Array<GuildFeature> | undefined)",
        value: input.features
    }), undefined === input.verification_level || 0 === input.verification_level || 1 === input.verification_level || 2 === input.verification_level || 3 === input.verification_level || 4 === input.verification_level || $report(_exceptionable, {
        path: _path + ".verification_level",
        expected: "(0 | 1 | 2 | 3 | 4 | undefined)",
        value: input.verification_level
    }), null === input.vanity_url_code || undefined === input.vanity_url_code || "string" === typeof input.vanity_url_code || $report(_exceptionable, {
        path: _path + ".vanity_url_code",
        expected: "(null | string | undefined)",
        value: input.vanity_url_code
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), undefined === input.welcome_screen || ("object" === typeof input.welcome_screen && null !== input.welcome_screen || $report(_exceptionable, {
        path: _path + ".welcome_screen",
        expected: "(APIGuildWelcomeScreen | undefined)",
        value: input.welcome_screen
    })) && $vo62(input.welcome_screen, _path + ".welcome_screen", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".welcome_screen",
        expected: "(APIGuildWelcomeScreen | undefined)",
        value: input.welcome_screen
    })].every((flag: boolean) => flag); const $vo62 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), (Array.isArray(input.welcome_channels) || $report(_exceptionable, {
        path: _path + ".welcome_channels",
        expected: "Array<APIGuildWelcomeScreenChannel>",
        value: input.welcome_channels
    })) && input.welcome_channels.map((elem: any, _index162: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".welcome_channels[" + _index162 + "]",
        expected: "APIGuildWelcomeScreenChannel",
        value: elem
    })) && $vo63(elem, _path + ".welcome_channels[" + _index162 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".welcome_channels[" + _index162 + "]",
        expected: "APIGuildWelcomeScreenChannel",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".welcome_channels",
        expected: "Array<APIGuildWelcomeScreenChannel>",
        value: input.welcome_channels
    })].every((flag: boolean) => flag); const $vo63 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), null === input.emoji_id || "string" === typeof input.emoji_id || $report(_exceptionable, {
        path: _path + ".emoji_id",
        expected: "(null | string)",
        value: input.emoji_id
    }), null === input.emoji_name || "string" === typeof input.emoji_name || $report(_exceptionable, {
        path: _path + ".emoji_name",
        expected: "(null | string)",
        value: input.emoji_name
    })].every((flag: boolean) => flag); const $vo64 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.scopes) || $report(_exceptionable, {
        path: _path + ".scopes",
        expected: "Array<OAuth2Scopes>",
        value: input.scopes
    })) && input.scopes.map((elem: any, _index163: number) => true === $vv164.has(elem) || $report(_exceptionable, {
        path: _path + ".scopes[" + _index163 + "]",
        expected: "(\"activities.read\" | \"activities.write\" | \"applications.builds.read\" | \"applications.builds.upload\" | \"applications.commands\" | \"applications.commands.permissions.update\" | \"applications.commands.update\" | \"applications.entitlements\" | \"applications.store.update\" | \"bot\" | \"connections\" | \"dm_channels.read\" | \"email\" | \"gdm.join\" | \"guilds\" | \"guilds.join\" | \"guilds.members.read\" | \"identify\" | \"messages.read\" | \"relationships.read\" | \"role_connections.write\" | \"rpc\" | \"rpc.notifications.read\" | \"voice\" | \"webhook.incoming\")",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".scopes",
        expected: "Array<OAuth2Scopes>",
        value: input.scopes
    }), "string" === typeof input.permissions || $report(_exceptionable, {
        path: _path + ".permissions",
        expected: "string",
        value: input.permissions
    })].every((flag: boolean) => flag); const $vo65 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input["0"] || ("object" === typeof input["0"] && null !== input["0"] && false === Array.isArray(input["0"]) || $report(_exceptionable, {
        path: _path + "[\"0\"]",
        expected: "(APIApplicationIntegrationTypeConfiguration | undefined)",
        value: input["0"]
    })) && $vo66(input["0"], _path + "[\"0\"]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + "[\"0\"]",
        expected: "(APIApplicationIntegrationTypeConfiguration | undefined)",
        value: input["0"]
    }), undefined === input["1"] || ("object" === typeof input["1"] && null !== input["1"] && false === Array.isArray(input["1"]) || $report(_exceptionable, {
        path: _path + "[\"1\"]",
        expected: "(APIApplicationIntegrationTypeConfiguration | undefined)",
        value: input["1"]
    })) && $vo66(input["1"], _path + "[\"1\"]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + "[\"1\"]",
        expected: "(APIApplicationIntegrationTypeConfiguration | undefined)",
        value: input["1"]
    })].every((flag: boolean) => flag); const $vo66 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.oauth2_install_params || ("object" === typeof input.oauth2_install_params && null !== input.oauth2_install_params || $report(_exceptionable, {
        path: _path + ".oauth2_install_params",
        expected: "(APIApplicationInstallParams | undefined)",
        value: input.oauth2_install_params
    })) && $vo64(input.oauth2_install_params, _path + ".oauth2_install_params", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".oauth2_install_params",
        expected: "(APIApplicationInstallParams | undefined)",
        value: input.oauth2_install_params
    })].every((flag: boolean) => flag); const $vo67 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.type || 0 === input.type || 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1 | undefined)",
        value: input.type
    }), undefined === input.message_id || "string" === typeof input.message_id || $report(_exceptionable, {
        path: _path + ".message_id",
        expected: "(string | undefined)",
        value: input.message_id
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo68 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2 | 3 | 4 | 5)",
        value: input.type
    }), ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.original_response_message_id || "string" === typeof input.original_response_message_id || $report(_exceptionable, {
        path: _path + ".original_response_message_id",
        expected: "(string | undefined)",
        value: input.original_response_message_id
    }), undefined === input.interacted_message_id || "string" === typeof input.interacted_message_id || $report(_exceptionable, {
        path: _path + ".interacted_message_id",
        expected: "(string | undefined)",
        value: input.interacted_message_id
    }), undefined === input.triggering_interaction_metadata || ("object" === typeof input.triggering_interaction_metadata && null !== input.triggering_interaction_metadata || $report(_exceptionable, {
        path: _path + ".triggering_interaction_metadata",
        expected: "(APIMessageInteractionMetadata | undefined)",
        value: input.triggering_interaction_metadata
    })) && $vo68(input.triggering_interaction_metadata, _path + ".triggering_interaction_metadata", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".triggering_interaction_metadata",
        expected: "(APIMessageInteractionMetadata | undefined)",
        value: input.triggering_interaction_metadata
    })].every((flag: boolean) => flag); const $vo69 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input["0"] || "string" === typeof input["0"] || $report(_exceptionable, {
        path: _path + "[\"0\"]",
        expected: "(string | undefined)",
        value: input["0"]
    }), undefined === input["1"] || "string" === typeof input["1"] || $report(_exceptionable, {
        path: _path + "[\"1\"]",
        expected: "(string | undefined)",
        value: input["1"]
    })].every((flag: boolean) => flag); const $vo70 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2 | 3 | 4 | 5)",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "APIUser",
        value: input.user
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(PartialAPIMessageInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo71(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(PartialAPIMessageInteractionGuildMember | undefined)",
        value: input.member
    })].every((flag: boolean) => flag); const $vo71 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["boolean" === typeof input.deaf || $report(_exceptionable, {
        path: _path + ".deaf",
        expected: "boolean",
        value: input.deaf
    }), "boolean" === typeof input.mute || $report(_exceptionable, {
        path: _path + ".mute",
        expected: "boolean",
        value: input.mute
    }), null === input.nick || undefined === input.nick || "string" === typeof input.nick || $report(_exceptionable, {
        path: _path + ".nick",
        expected: "(null | string | undefined)",
        value: input.nick
    }), null === input.avatar || undefined === input.avatar || "string" === typeof input.avatar || $report(_exceptionable, {
        path: _path + ".avatar",
        expected: "(null | string | undefined)",
        value: input.avatar
    }), (Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    })) && input.roles.map((elem: any, _index165: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".roles[" + _index165 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Array<string>",
        value: input.roles
    }), "string" === typeof input.joined_at || $report(_exceptionable, {
        path: _path + ".joined_at",
        expected: "string",
        value: input.joined_at
    }), null === input.premium_since || undefined === input.premium_since || "string" === typeof input.premium_since || $report(_exceptionable, {
        path: _path + ".premium_since",
        expected: "(null | string | undefined)",
        value: input.premium_since
    }), undefined === input.pending || "boolean" === typeof input.pending || $report(_exceptionable, {
        path: _path + ".pending",
        expected: "(boolean | undefined)",
        value: input.pending
    }), null === input.communication_disabled_until || undefined === input.communication_disabled_until || "string" === typeof input.communication_disabled_until || $report(_exceptionable, {
        path: _path + ".communication_disabled_until",
        expected: "(null | string | undefined)",
        value: input.communication_disabled_until
    })].every((flag: boolean) => flag); const $vo72 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIThreadMember | undefined)",
        value: input.member
    })) && $vo29(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIThreadMember | undefined)",
        value: input.member
    }), undefined === input.thread_metadata || ("object" === typeof input.thread_metadata && null !== input.thread_metadata || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    })) && $vo25(input.thread_metadata, _path + ".thread_metadata", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".thread_metadata",
        expected: "(APIThreadMetadata | undefined)",
        value: input.thread_metadata
    }), undefined === input.message_count || "number" === typeof input.message_count || $report(_exceptionable, {
        path: _path + ".message_count",
        expected: "(number | undefined)",
        value: input.message_count
    }), undefined === input.member_count || "number" === typeof input.member_count || $report(_exceptionable, {
        path: _path + ".member_count",
        expected: "(number | undefined)",
        value: input.member_count
    }), undefined === input.owner_id || "string" === typeof input.owner_id || $report(_exceptionable, {
        path: _path + ".owner_id",
        expected: "(string | undefined)",
        value: input.owner_id
    }), undefined === input.total_message_sent || "number" === typeof input.total_message_sent || $report(_exceptionable, {
        path: _path + ".total_message_sent",
        expected: "(number | undefined)",
        value: input.total_message_sent
    }), (Array.isArray(input.applied_tags) || $report(_exceptionable, {
        path: _path + ".applied_tags",
        expected: "Array<string>",
        value: input.applied_tags
    })) && input.applied_tags.map((elem: any, _index166: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".applied_tags[" + _index166 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".applied_tags",
        expected: "Array<string>",
        value: input.applied_tags
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 10 === input.type || 11 === input.type || 12 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(10 | 11 | 12)",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index167: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index167 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index167 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index167 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo73 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(undefined !== input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "null",
        value: input.name
    })) && (null === input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "null",
        value: input.name
    })), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.recipients || (Array.isArray(input.recipients) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })) && input.recipients.map((elem: any, _index168: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".recipients[" + _index168 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".recipients[" + _index168 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".recipients[" + _index168 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })].every((flag: boolean) => flag); const $vo74 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    }), undefined === input.application_id || "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "(string | undefined)",
        value: input.application_id
    }), null === input.icon || undefined === input.icon || "string" === typeof input.icon || $report(_exceptionable, {
        path: _path + ".icon",
        expected: "(null | string | undefined)",
        value: input.icon
    }), undefined === input.owner_id || "string" === typeof input.owner_id || $report(_exceptionable, {
        path: _path + ".owner_id",
        expected: "(string | undefined)",
        value: input.owner_id
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.managed || "boolean" === typeof input.managed || $report(_exceptionable, {
        path: _path + ".managed",
        expected: "(boolean | undefined)",
        value: input.managed
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.recipients || (Array.isArray(input.recipients) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })) && input.recipients.map((elem: any, _index169: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".recipients[" + _index169 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".recipients[" + _index169 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".recipients[" + _index169 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".recipients",
        expected: "(Array<APIUser> | undefined)",
        value: input.recipients
    })].every((flag: boolean) => flag); const $vo75 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index170: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index170 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index170 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index170 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 4 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "4",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo76 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [0 === input.default_forum_layout || 1 === input.default_forum_layout || 2 === input.default_forum_layout || $report(_exceptionable, {
        path: _path + ".default_forum_layout",
        expected: "(0 | 1 | 2)",
        value: input.default_forum_layout
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), (Array.isArray(input.available_tags) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "Array<APIGuildForumTag>",
        value: input.available_tags
    })) && input.available_tags.map((elem: any, _index171: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index171 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })) && $vo36(elem, _path + ".available_tags[" + _index171 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index171 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "Array<APIGuildForumTag>",
        value: input.available_tags
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.default_reaction_emoji || ("object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null)",
        value: input.default_reaction_emoji
    })) && $vo37(input.default_reaction_emoji, _path + ".default_reaction_emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null)",
        value: input.default_reaction_emoji
    }), null === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order || $report(_exceptionable, {
        path: _path + ".default_sort_order",
        expected: "(0 | 1 | null)",
        value: input.default_sort_order
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index172: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index172 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index172 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index172 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 15 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "15",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo77 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), (Array.isArray(input.available_tags) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "Array<APIGuildForumTag>",
        value: input.available_tags
    })) && input.available_tags.map((elem: any, _index173: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index173 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })) && $vo36(elem, _path + ".available_tags[" + _index173 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".available_tags[" + _index173 + "]",
        expected: "APIGuildForumTag",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".available_tags",
        expected: "Array<APIGuildForumTag>",
        value: input.available_tags
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.default_reaction_emoji || ("object" === typeof input.default_reaction_emoji && null !== input.default_reaction_emoji || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null)",
        value: input.default_reaction_emoji
    })) && $vo37(input.default_reaction_emoji, _path + ".default_reaction_emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_reaction_emoji",
        expected: "(APIGuildForumDefaultReactionEmoji | null)",
        value: input.default_reaction_emoji
    }), null === input.default_sort_order || 0 === input.default_sort_order || 1 === input.default_sort_order || $report(_exceptionable, {
        path: _path + ".default_sort_order",
        expected: "(0 | 1 | null)",
        value: input.default_sort_order
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index174: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index174 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index174 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index174 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 16 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "16",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    })].every((flag: boolean) => flag); const $vo78 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.bitrate || "number" === typeof input.bitrate || $report(_exceptionable, {
        path: _path + ".bitrate",
        expected: "(number | undefined)",
        value: input.bitrate
    }), undefined === input.user_limit || "number" === typeof input.user_limit || $report(_exceptionable, {
        path: _path + ".user_limit",
        expected: "(number | undefined)",
        value: input.user_limit
    }), null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region || $report(_exceptionable, {
        path: _path + ".rtc_region",
        expected: "(null | string | undefined)",
        value: input.rtc_region
    }), undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode || $report(_exceptionable, {
        path: _path + ".video_quality_mode",
        expected: "(1 | 2 | undefined)",
        value: input.video_quality_mode
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index175: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index175 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index175 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index175 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 13 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "13",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    })].every((flag: boolean) => flag); const $vo79 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.bitrate || "number" === typeof input.bitrate || $report(_exceptionable, {
        path: _path + ".bitrate",
        expected: "(number | undefined)",
        value: input.bitrate
    }), undefined === input.user_limit || "number" === typeof input.user_limit || $report(_exceptionable, {
        path: _path + ".user_limit",
        expected: "(number | undefined)",
        value: input.user_limit
    }), null === input.rtc_region || undefined === input.rtc_region || "string" === typeof input.rtc_region || $report(_exceptionable, {
        path: _path + ".rtc_region",
        expected: "(null | string | undefined)",
        value: input.rtc_region
    }), undefined === input.video_quality_mode || 1 === input.video_quality_mode || 2 === input.video_quality_mode || $report(_exceptionable, {
        path: _path + ".video_quality_mode",
        expected: "(1 | 2 | undefined)",
        value: input.video_quality_mode
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index176: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index176 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index176 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index176 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    })].every((flag: boolean) => flag); const $vo80 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index177: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index177 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index177 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index177 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo81 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_auto_archive_duration || 60 === input.default_auto_archive_duration || 1440 === input.default_auto_archive_duration || 4320 === input.default_auto_archive_duration || 10080 === input.default_auto_archive_duration || $report(_exceptionable, {
        path: _path + ".default_auto_archive_duration",
        expected: "(10080 | 1440 | 4320 | 60 | undefined)",
        value: input.default_auto_archive_duration
    }), undefined === input.default_thread_rate_limit_per_user || "number" === typeof input.default_thread_rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".default_thread_rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.default_thread_rate_limit_per_user
    }), null === input.topic || undefined === input.topic || "string" === typeof input.topic || $report(_exceptionable, {
        path: _path + ".topic",
        expected: "(null | string | undefined)",
        value: input.topic
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 0 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "0",
        value: input.type
    }), undefined === input.flags || 1 === input.flags || 2 === input.flags || 4 === input.flags || 16 === input.flags || 32 === input.flags || 128 === input.flags || 256 === input.flags || 512 === input.flags || 32768 === input.flags || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 128 | 16 | 2 | 256 | 32 | 32768 | 4 | 512 | undefined)",
        value: input.flags
    }), null === input.last_message_id || undefined === input.last_message_id || "string" === typeof input.last_message_id || $report(_exceptionable, {
        path: _path + ".last_message_id",
        expected: "(null | string | undefined)",
        value: input.last_message_id
    }), null === input.last_pin_timestamp || undefined === input.last_pin_timestamp || "string" === typeof input.last_pin_timestamp || $report(_exceptionable, {
        path: _path + ".last_pin_timestamp",
        expected: "(null | string | undefined)",
        value: input.last_pin_timestamp
    }), undefined === input.rate_limit_per_user || "number" === typeof input.rate_limit_per_user || $report(_exceptionable, {
        path: _path + ".rate_limit_per_user",
        expected: "(number | undefined)",
        value: input.rate_limit_per_user
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.permission_overwrites || (Array.isArray(input.permission_overwrites) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    })) && input.permission_overwrites.map((elem: any, _index178: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index178 + "]",
        expected: "APIOverwrite",
        value: elem
    })) && $vo31(elem, _path + ".permission_overwrites[" + _index178 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".permission_overwrites[" + _index178 + "]",
        expected: "APIOverwrite",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".permission_overwrites",
        expected: "(Array<APIOverwrite> | undefined)",
        value: input.permission_overwrites
    }), "number" === typeof input.position || $report(_exceptionable, {
        path: _path + ".position",
        expected: "number",
        value: input.position
    }), null === input.parent_id || undefined === input.parent_id || "string" === typeof input.parent_id || $report(_exceptionable, {
        path: _path + ".parent_id",
        expected: "(null | string | undefined)",
        value: input.parent_id
    }), undefined === input.nsfw || "boolean" === typeof input.nsfw || $report(_exceptionable, {
        path: _path + ".nsfw",
        expected: "(boolean | undefined)",
        value: input.nsfw
    })].every((flag: boolean) => flag); const $vo82 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.components) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<APIMessageActionRowComponent>",
        value: input.components
    })) && input.components.map((elem: any, _index179: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".components[" + _index179 + "]",
        expected: "(APIButtonComponentWithCustomId | APIButtonComponentWithSKUId | APIButtonComponentWithURL | APIChannelSelectComponent | APIMentionableSelectComponent | APIRoleSelectComponent | APIStringSelectComponent | APIUserSelectComponent)",
        value: elem
    })) && $vu2(elem, _path + ".components[" + _index179 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".components[" + _index179 + "]",
        expected: "(APIButtonComponentWithCustomId | APIButtonComponentWithSKUId | APIButtonComponentWithURL | APIChannelSelectComponent | APIMentionableSelectComponent | APIRoleSelectComponent | APIStringSelectComponent | APIUserSelectComponent)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<APIMessageActionRowComponent>",
        value: input.components
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    })].every((flag: boolean) => flag); const $vo83 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.label || "string" === typeof input.label || $report(_exceptionable, {
        path: _path + ".label",
        expected: "(string | undefined)",
        value: input.label
    }), 1 === input.style || 2 === input.style || 3 === input.style || 4 === input.style || $report(_exceptionable, {
        path: _path + ".style",
        expected: "(1 | 2 | 3 | 4)",
        value: input.style
    }), undefined === input.emoji || ("object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    })) && $vo84(input.emoji, _path + ".emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    })].every((flag: boolean) => flag); const $vo84 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "(string | undefined)",
        value: input.id
    }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "(string | undefined)",
        value: input.name
    }), undefined === input.animated || "boolean" === typeof input.animated || $report(_exceptionable, {
        path: _path + ".animated",
        expected: "(boolean | undefined)",
        value: input.animated
    })].every((flag: boolean) => flag); const $vo85 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.sku_id || $report(_exceptionable, {
        path: _path + ".sku_id",
        expected: "string",
        value: input.sku_id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), 6 === input.style || $report(_exceptionable, {
        path: _path + ".style",
        expected: "6",
        value: input.style
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    })].every((flag: boolean) => flag); const $vo86 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.url || $report(_exceptionable, {
        path: _path + ".url",
        expected: "string",
        value: input.url
    }), undefined === input.label || "string" === typeof input.label || $report(_exceptionable, {
        path: _path + ".label",
        expected: "(string | undefined)",
        value: input.label
    }), 5 === input.style || $report(_exceptionable, {
        path: _path + ".style",
        expected: "5",
        value: input.style
    }), undefined === input.emoji || ("object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    })) && $vo84(input.emoji, _path + ".emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    })].every((flag: boolean) => flag); const $vo87 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.channel_types || (Array.isArray(input.channel_types) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<ChannelType> | undefined)",
        value: input.channel_types
    })) && input.channel_types.map((elem: any, _index180: number) => true === $vv181.has(elem) || $report(_exceptionable, {
        path: _path + ".channel_types[" + _index180 + "]",
        expected: "(0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2 | 3 | 4 | 5)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".channel_types",
        expected: "(Array<ChannelType> | undefined)",
        value: input.channel_types
    }), undefined === input.default_values || (Array.isArray(input.default_values) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<Channel>> | undefined)",
        value: input.default_values
    })) && input.default_values.map((elem: any, _index182: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".default_values[" + _index182 + "]",
        expected: "APISelectMenuDefaultValue<Channel>",
        value: elem
    })) && $vo88(elem, _path + ".default_values[" + _index182 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_values[" + _index182 + "]",
        expected: "APISelectMenuDefaultValue<Channel>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<Channel>> | undefined)",
        value: input.default_values
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.placeholder || "string" === typeof input.placeholder || $report(_exceptionable, {
        path: _path + ".placeholder",
        expected: "(string | undefined)",
        value: input.placeholder
    }), undefined === input.min_values || "number" === typeof input.min_values || $report(_exceptionable, {
        path: _path + ".min_values",
        expected: "(number | undefined)",
        value: input.min_values
    }), undefined === input.max_values || "number" === typeof input.max_values || $report(_exceptionable, {
        path: _path + ".max_values",
        expected: "(number | undefined)",
        value: input.max_values
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "8",
        value: input.type
    })].every((flag: boolean) => flag); const $vo88 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["channel" === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "\"channel\"",
        value: input.type
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    })].every((flag: boolean) => flag); const $vo89 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_values || (Array.isArray(input.default_values) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User>> | undefined)",
        value: input.default_values
    })) && input.default_values.map((elem: any, _index183: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".default_values[" + _index183 + "]",
        expected: "APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User>",
        value: elem
    })) && $vo90(elem, _path + ".default_values[" + _index183 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_values[" + _index183 + "]",
        expected: "APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User>> | undefined)",
        value: input.default_values
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.placeholder || "string" === typeof input.placeholder || $report(_exceptionable, {
        path: _path + ".placeholder",
        expected: "(string | undefined)",
        value: input.placeholder
    }), undefined === input.min_values || "number" === typeof input.min_values || $report(_exceptionable, {
        path: _path + ".min_values",
        expected: "(number | undefined)",
        value: input.min_values
    }), undefined === input.max_values || "number" === typeof input.max_values || $report(_exceptionable, {
        path: _path + ".max_values",
        expected: "(number | undefined)",
        value: input.max_values
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 7 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "7",
        value: input.type
    })].every((flag: boolean) => flag); const $vo90 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["role" === input.type || "user" === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(\"role\" | \"user\")",
        value: input.type
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    })].every((flag: boolean) => flag); const $vo91 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_values || (Array.isArray(input.default_values) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<Role>> | undefined)",
        value: input.default_values
    })) && input.default_values.map((elem: any, _index184: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".default_values[" + _index184 + "]",
        expected: "APISelectMenuDefaultValue<Role>",
        value: elem
    })) && $vo92(elem, _path + ".default_values[" + _index184 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_values[" + _index184 + "]",
        expected: "APISelectMenuDefaultValue<Role>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<Role>> | undefined)",
        value: input.default_values
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.placeholder || "string" === typeof input.placeholder || $report(_exceptionable, {
        path: _path + ".placeholder",
        expected: "(string | undefined)",
        value: input.placeholder
    }), undefined === input.min_values || "number" === typeof input.min_values || $report(_exceptionable, {
        path: _path + ".min_values",
        expected: "(number | undefined)",
        value: input.min_values
    }), undefined === input.max_values || "number" === typeof input.max_values || $report(_exceptionable, {
        path: _path + ".max_values",
        expected: "(number | undefined)",
        value: input.max_values
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 6 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "6",
        value: input.type
    })].every((flag: boolean) => flag); const $vo92 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["role" === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "\"role\"",
        value: input.type
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    })].every((flag: boolean) => flag); const $vo93 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APISelectMenuOption>",
        value: input.options
    })) && input.options.map((elem: any, _index185: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index185 + "]",
        expected: "APISelectMenuOption",
        value: elem
    })) && $vo94(elem, _path + ".options[" + _index185 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index185 + "]",
        expected: "APISelectMenuOption",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "Array<APISelectMenuOption>",
        value: input.options
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.placeholder || "string" === typeof input.placeholder || $report(_exceptionable, {
        path: _path + ".placeholder",
        expected: "(string | undefined)",
        value: input.placeholder
    }), undefined === input.min_values || "number" === typeof input.min_values || $report(_exceptionable, {
        path: _path + ".min_values",
        expected: "(number | undefined)",
        value: input.min_values
    }), undefined === input.max_values || "number" === typeof input.max_values || $report(_exceptionable, {
        path: _path + ".max_values",
        expected: "(number | undefined)",
        value: input.max_values
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    })].every((flag: boolean) => flag); const $vo94 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.label || $report(_exceptionable, {
        path: _path + ".label",
        expected: "string",
        value: input.label
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    }), undefined === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.emoji || ("object" === typeof input.emoji && null !== input.emoji && false === Array.isArray(input.emoji) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    })) && $vo84(input.emoji, _path + ".emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIMessageComponentEmoji | undefined)",
        value: input.emoji
    }), undefined === input["default"] || "boolean" === typeof input["default"] || $report(_exceptionable, {
        path: _path + "[\"default\"]",
        expected: "(boolean | undefined)",
        value: input["default"]
    })].every((flag: boolean) => flag); const $vo95 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.default_values || (Array.isArray(input.default_values) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<User>> | undefined)",
        value: input.default_values
    })) && input.default_values.map((elem: any, _index186: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".default_values[" + _index186 + "]",
        expected: "APISelectMenuDefaultValue<User>",
        value: elem
    })) && $vo96(elem, _path + ".default_values[" + _index186 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".default_values[" + _index186 + "]",
        expected: "APISelectMenuDefaultValue<User>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".default_values",
        expected: "(Array<APISelectMenuDefaultValue<User>> | undefined)",
        value: input.default_values
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), undefined === input.placeholder || "string" === typeof input.placeholder || $report(_exceptionable, {
        path: _path + ".placeholder",
        expected: "(string | undefined)",
        value: input.placeholder
    }), undefined === input.min_values || "number" === typeof input.min_values || $report(_exceptionable, {
        path: _path + ".min_values",
        expected: "(number | undefined)",
        value: input.min_values
    }), undefined === input.max_values || "number" === typeof input.max_values || $report(_exceptionable, {
        path: _path + ".max_values",
        expected: "(number | undefined)",
        value: input.max_values
    }), undefined === input.disabled || "boolean" === typeof input.disabled || $report(_exceptionable, {
        path: _path + ".disabled",
        expected: "(boolean | undefined)",
        value: input.disabled
    }), 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    })].every((flag: boolean) => flag); const $vo96 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["user" === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "\"user\"",
        value: input.type
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    })].every((flag: boolean) => flag); const $vo97 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), 1 === input.format_type || 2 === input.format_type || 3 === input.format_type || 4 === input.format_type || $report(_exceptionable, {
        path: _path + ".format_type",
        expected: "(1 | 2 | 3 | 4)",
        value: input.format_type
    })].every((flag: boolean) => flag); const $vo98 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), undefined === input.pack_id || "string" === typeof input.pack_id || $report(_exceptionable, {
        path: _path + ".pack_id",
        expected: "(string | undefined)",
        value: input.pack_id
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), null === input.description || "string" === typeof input.description || $report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), "string" === typeof input.tags || $report(_exceptionable, {
        path: _path + ".tags",
        expected: "string",
        value: input.tags
    }), undefined === input.asset || "" === input.asset || $report(_exceptionable, {
        path: _path + ".asset",
        expected: "(\"\" | undefined)",
        value: input.asset
    }), 1 === input.type || 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2)",
        value: input.type
    }), 1 === input.format_type || 2 === input.format_type || 3 === input.format_type || 4 === input.format_type || $report(_exceptionable, {
        path: _path + ".format_type",
        expected: "(1 | 2 | 3 | 4)",
        value: input.format_type
    }), undefined === input.available || "boolean" === typeof input.available || $report(_exceptionable, {
        path: _path + ".available",
        expected: "(boolean | undefined)",
        value: input.available
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), undefined === input.sort_value || "number" === typeof input.sort_value || $report(_exceptionable, {
        path: _path + ".sort_value",
        expected: "(number | undefined)",
        value: input.sort_value
    })].every((flag: boolean) => flag); const $vo99 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.role_subscription_listing_id || $report(_exceptionable, {
        path: _path + ".role_subscription_listing_id",
        expected: "string",
        value: input.role_subscription_listing_id
    }), "string" === typeof input.tier_name || $report(_exceptionable, {
        path: _path + ".tier_name",
        expected: "string",
        value: input.tier_name
    }), "number" === typeof input.total_months_subscribed || $report(_exceptionable, {
        path: _path + ".total_months_subscribed",
        expected: "number",
        value: input.total_months_subscribed
    }), "boolean" === typeof input.is_renewal || $report(_exceptionable, {
        path: _path + ".is_renewal",
        expected: "boolean",
        value: input.is_renewal
    })].every((flag: boolean) => flag); const $vo100 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.question && null !== input.question && false === Array.isArray(input.question) || $report(_exceptionable, {
        path: _path + ".question",
        expected: "APIPollMedia",
        value: input.question
    })) && $vo101(input.question, _path + ".question", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".question",
        expected: "APIPollMedia",
        value: input.question
    }), (Array.isArray(input.answers) || $report(_exceptionable, {
        path: _path + ".answers",
        expected: "Array<APIPollAnswer>",
        value: input.answers
    })) && input.answers.map((elem: any, _index187: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".answers[" + _index187 + "]",
        expected: "APIPollAnswer",
        value: elem
    })) && $vo102(elem, _path + ".answers[" + _index187 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".answers[" + _index187 + "]",
        expected: "APIPollAnswer",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".answers",
        expected: "Array<APIPollAnswer>",
        value: input.answers
    }), "string" === typeof input.expiry || $report(_exceptionable, {
        path: _path + ".expiry",
        expected: "string",
        value: input.expiry
    }), "boolean" === typeof input.allow_multiselect || $report(_exceptionable, {
        path: _path + ".allow_multiselect",
        expected: "boolean",
        value: input.allow_multiselect
    }), 1 === input.layout_type || $report(_exceptionable, {
        path: _path + ".layout_type",
        expected: "1",
        value: input.layout_type
    }), undefined === input.results || ("object" === typeof input.results && null !== input.results || $report(_exceptionable, {
        path: _path + ".results",
        expected: "(APIPollResults | undefined)",
        value: input.results
    })) && $vo103(input.results, _path + ".results", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".results",
        expected: "(APIPollResults | undefined)",
        value: input.results
    })].every((flag: boolean) => flag); const $vo101 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.text || "string" === typeof input.text || $report(_exceptionable, {
        path: _path + ".text",
        expected: "(string | undefined)",
        value: input.text
    }), undefined === input.emoji || ("object" === typeof input.emoji && null !== input.emoji || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIPartialEmoji | undefined)",
        value: input.emoji
    })) && $vo56(input.emoji, _path + ".emoji", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".emoji",
        expected: "(APIPartialEmoji | undefined)",
        value: input.emoji
    })].every((flag: boolean) => flag); const $vo102 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.answer_id || $report(_exceptionable, {
        path: _path + ".answer_id",
        expected: "number",
        value: input.answer_id
    }), ("object" === typeof input.poll_media && null !== input.poll_media && false === Array.isArray(input.poll_media) || $report(_exceptionable, {
        path: _path + ".poll_media",
        expected: "APIPollMedia",
        value: input.poll_media
    })) && $vo101(input.poll_media, _path + ".poll_media", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".poll_media",
        expected: "APIPollMedia",
        value: input.poll_media
    })].every((flag: boolean) => flag); const $vo103 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["boolean" === typeof input.is_finalized || $report(_exceptionable, {
        path: _path + ".is_finalized",
        expected: "boolean",
        value: input.is_finalized
    }), (Array.isArray(input.answer_counts) || $report(_exceptionable, {
        path: _path + ".answer_counts",
        expected: "Array<APIPollAnswerCount>",
        value: input.answer_counts
    })) && input.answer_counts.map((elem: any, _index188: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".answer_counts[" + _index188 + "]",
        expected: "APIPollAnswerCount",
        value: elem
    })) && $vo104(elem, _path + ".answer_counts[" + _index188 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".answer_counts[" + _index188 + "]",
        expected: "APIPollAnswerCount",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".answer_counts",
        expected: "Array<APIPollAnswerCount>",
        value: input.answer_counts
    })].every((flag: boolean) => flag); const $vo104 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), "number" === typeof input.count || $report(_exceptionable, {
        path: _path + ".count",
        expected: "number",
        value: input.count
    }), "boolean" === typeof input.me_voted || $report(_exceptionable, {
        path: _path + ".me_voted",
        expected: "boolean",
        value: input.me_voted
    })].every((flag: boolean) => flag); const $vo105 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "APIMessageSnapshotFields",
        value: input.message
    })) && $vo106(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "APIMessageSnapshotFields",
        value: input.message
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo106 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [true === $vv189.has(input.type) || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(0 | 1 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 3 | 30 | 31 | 32 | 36 | 37 | 38 | 39 | 4 | 44 | 46 | 5 | 6 | 7 | 8 | 9)",
        value: input.type
    }), undefined === input.flags || true === $vv190.has(input.flags) || $report(_exceptionable, {
        path: _path + ".flags",
        expected: "(1 | 1024 | 128 | 16 | 2 | 256 | 32 | 4 | 4096 | 64 | 8 | 8192 | undefined)",
        value: input.flags
    }), (Array.isArray(input.attachments) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "Array<APIAttachment>",
        value: input.attachments
    })) && input.attachments.map((elem: any, _index191: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".attachments[" + _index191 + "]",
        expected: "APIAttachment",
        value: elem
    })) && $vo27(elem, _path + ".attachments[" + _index191 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".attachments[" + _index191 + "]",
        expected: "APIAttachment",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".attachments",
        expected: "Array<APIAttachment>",
        value: input.attachments
    }), undefined === input.components || (Array.isArray(input.components) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "(Array<APIActionRowComponent<APIMessageActionRowComponent>> | undefined)",
        value: input.components
    })) && input.components.map((elem: any, _index192: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".components[" + _index192 + "]",
        expected: "APIActionRowComponent<APIMessageActionRowComponent>",
        value: elem
    })) && $vo82(elem, _path + ".components[" + _index192 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".components[" + _index192 + "]",
        expected: "APIActionRowComponent<APIMessageActionRowComponent>",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "(Array<APIActionRowComponent<APIMessageActionRowComponent>> | undefined)",
        value: input.components
    }), "string" === typeof input.content || $report(_exceptionable, {
        path: _path + ".content",
        expected: "string",
        value: input.content
    }), null === input.edited_timestamp || "string" === typeof input.edited_timestamp || $report(_exceptionable, {
        path: _path + ".edited_timestamp",
        expected: "(null | string)",
        value: input.edited_timestamp
    }), (Array.isArray(input.embeds) || $report(_exceptionable, {
        path: _path + ".embeds",
        expected: "Array<APIEmbed>",
        value: input.embeds
    })) && input.embeds.map((elem: any, _index193: number) => ("object" === typeof elem && null !== elem && false === Array.isArray(elem) || $report(_exceptionable, {
        path: _path + ".embeds[" + _index193 + "]",
        expected: "APIEmbed",
        value: elem
    })) && $vo46(elem, _path + ".embeds[" + _index193 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".embeds[" + _index193 + "]",
        expected: "APIEmbed",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".embeds",
        expected: "Array<APIEmbed>",
        value: input.embeds
    }), (Array.isArray(input.mention_roles) || $report(_exceptionable, {
        path: _path + ".mention_roles",
        expected: "Array<string>",
        value: input.mention_roles
    })) && input.mention_roles.map((elem: any, _index194: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".mention_roles[" + _index194 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".mention_roles",
        expected: "Array<string>",
        value: input.mention_roles
    }), (Array.isArray(input.mentions) || $report(_exceptionable, {
        path: _path + ".mentions",
        expected: "Array<APIUser>",
        value: input.mentions
    })) && input.mentions.map((elem: any, _index195: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".mentions[" + _index195 + "]",
        expected: "APIUser",
        value: elem
    })) && $vo15(elem, _path + ".mentions[" + _index195 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".mentions[" + _index195 + "]",
        expected: "APIUser",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".mentions",
        expected: "Array<APIUser>",
        value: input.mentions
    }), undefined === input.sticker_items || (Array.isArray(input.sticker_items) || $report(_exceptionable, {
        path: _path + ".sticker_items",
        expected: "(Array<APIStickerItem> | undefined)",
        value: input.sticker_items
    })) && input.sticker_items.map((elem: any, _index196: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".sticker_items[" + _index196 + "]",
        expected: "APIStickerItem",
        value: elem
    })) && $vo97(elem, _path + ".sticker_items[" + _index196 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".sticker_items[" + _index196 + "]",
        expected: "APIStickerItem",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".sticker_items",
        expected: "(Array<APIStickerItem> | undefined)",
        value: input.sticker_items
    }), undefined === input.stickers || (Array.isArray(input.stickers) || $report(_exceptionable, {
        path: _path + ".stickers",
        expected: "(Array<APISticker> | undefined)",
        value: input.stickers
    })) && input.stickers.map((elem: any, _index197: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".stickers[" + _index197 + "]",
        expected: "APISticker",
        value: elem
    })) && $vo98(elem, _path + ".stickers[" + _index197 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".stickers[" + _index197 + "]",
        expected: "APISticker",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".stickers",
        expected: "(Array<APISticker> | undefined)",
        value: input.stickers
    }), "string" === typeof input.timestamp || $report(_exceptionable, {
        path: _path + ".timestamp",
        expected: "string",
        value: input.timestamp
    })].every((flag: boolean) => flag); const $vo107 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.participants) || $report(_exceptionable, {
        path: _path + ".participants",
        expected: "Array<string>",
        value: input.participants
    })) && input.participants.map((elem: any, _index198: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".participants[" + _index198 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".participants",
        expected: "Array<string>",
        value: input.participants
    }), null === input.ended_timestamp || undefined === input.ended_timestamp || "string" === typeof input.ended_timestamp || $report(_exceptionable, {
        path: _path + ".ended_timestamp",
        expected: "(null | string | undefined)",
        value: input.ended_timestamp
    })].every((flag: boolean) => flag); const $vo108 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.sku_id || $report(_exceptionable, {
        path: _path + ".sku_id",
        expected: "string",
        value: input.sku_id
    }), undefined === input.user_id || "string" === typeof input.user_id || $report(_exceptionable, {
        path: _path + ".user_id",
        expected: "(string | undefined)",
        value: input.user_id
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || 6 === input.type || 7 === input.type || 8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)",
        value: input.type
    }), "boolean" === typeof input.deleted || $report(_exceptionable, {
        path: _path + ".deleted",
        expected: "boolean",
        value: input.deleted
    }), undefined === input.starts_at || "string" === typeof input.starts_at || $report(_exceptionable, {
        path: _path + ".starts_at",
        expected: "(string | undefined)",
        value: input.starts_at
    }), undefined === input.ends_at || "string" === typeof input.ends_at || $report(_exceptionable, {
        path: _path + ".ends_at",
        expected: "(string | undefined)",
        value: input.ends_at
    }), undefined === input.consumed || "boolean" === typeof input.consumed || $report(_exceptionable, {
        path: _path + ".consumed",
        expected: "(boolean | undefined)",
        value: input.consumed
    })].every((flag: boolean) => flag); const $vo109 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIChatInputApplicationCommandInteractionData",
        value: input.data
    })) && $vo110(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIChatInputApplicationCommandInteractionData",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    })) && $vu6(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv199.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv200.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index201: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index201 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index201 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index201 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo110 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.options || (Array.isArray(input.options) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<APIApplicationCommandInteractionDataOption> | undefined)",
        value: input.options
    })) && input.options.map((elem: any, _index202: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".options[" + _index202 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataSubcommandGroupOption | APIApplicationCommandInteractionDataSubcommandOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })) && $vu0(elem, _path + ".options[" + _index202 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".options[" + _index202 + "]",
        expected: "(APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataSubcommandGroupOption | APIApplicationCommandInteractionDataSubcommandOption | APIApplicationCommandInteractionDataUserOption)",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".options",
        expected: "(Array<APIApplicationCommandInteractionDataOption> | undefined)",
        value: input.options
    }), undefined === input.resolved || ("object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    })) && $vo13(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "(APIInteractionDataResolved | undefined)",
        value: input.resolved
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo111 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo112 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo113 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo114 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo115 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo116 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo117 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo118 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo119 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo120 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo121 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo122 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo123 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo124 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo125 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo126 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo127 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo128 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo129 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo130 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo131 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo132 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo133 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo134 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo135 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo136 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo137 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo138 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo139 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo140 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo141 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo142 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo143 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo144 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo145 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo146 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo147 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo148 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo149 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo150 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo151 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo152 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo153 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo154 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo155 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo156 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo157 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo158 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo159 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo160 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo161 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo162 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo163 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo164 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo165 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo166 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo167 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo168 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo169 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo170 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo171 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo172 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo173 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo174 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo175 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo176 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo177 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo178 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo179 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo180 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo181 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo182 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo183 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo184 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo185 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo186 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo187 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo188 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo189 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo190 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo191 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo192 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo193 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo194 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo195 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo196 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo197 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo198 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo199 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo200 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo201 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIMessageApplicationCommandInteractionData",
        value: input.data
    })) && $vo202(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIMessageApplicationCommandInteractionData",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    })) && $vu6(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv203.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv204.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index205: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index205 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index205 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index205 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo202 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.target_id || $report(_exceptionable, {
        path: _path + ".target_id",
        expected: "string",
        value: input.target_id
    }), ("object" === typeof input.resolved && null !== input.resolved || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIMessageApplicationCommandInteractionDataResolved",
        value: input.resolved
    })) && $vo203(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIMessageApplicationCommandInteractionDataResolved",
        value: input.resolved
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo203 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.messages && null !== input.messages && false === Array.isArray(input.messages) || $report(_exceptionable, {
        path: _path + ".messages",
        expected: "Record<string, APIMessage>",
        value: input.messages
    })) && $vo204(input.messages, _path + ".messages", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".messages",
        expected: "Record<string, APIMessage>",
        value: input.messages
    })].every((flag: boolean) => flag); const $vo204 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return ("object" === typeof value && null !== value || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIMessage",
            value: value
        })) && $vo44(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
            path: _path + $join(key),
            expected: "APIMessage",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const $vo205 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIUserApplicationCommandInteractionData",
        value: input.data
    })) && $vo206(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIUserApplicationCommandInteractionData",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    })) && $vu6(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv206.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv207.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index208: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index208 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index208 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index208 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo206 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.target_id || $report(_exceptionable, {
        path: _path + ".target_id",
        expected: "string",
        value: input.target_id
    }), ("object" === typeof input.resolved && null !== input.resolved || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIUserInteractionDataResolved",
        value: input.resolved
    })) && $vo207(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIUserInteractionDataResolved",
        value: input.resolved
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), 2 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "2",
        value: input.type
    }), "string" === typeof input.name || $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    })].every((flag: boolean) => flag); const $vo207 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.members || ("object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    })) && $vo20(input.members, _path + ".members", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    }), ("object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "Record<string, APIUser>",
        value: input.users
    })) && $vo14(input.users, _path + ".users", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "Record<string, APIUser>",
        value: input.users
    })].every((flag: boolean) => flag); const $vo208 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 3 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "3",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data && false === Array.isArray(input.data) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "(APIMessageButtonInteractionData | APIMessageChannelSelectInteractionData | APIMessageMentionableSelectInteractionData | APIMessageRoleSelectInteractionData | APIMessageStringSelectInteractionData | APIMessageUserSelectInteractionData | never.o100 | never.o101 | never.o102 | never.o103 | never.o104 | never.o105 | never.o106 | never.o107 | never.o108 | never.o109 | never.o110 | never.o111 | never.o112 | never.o113 | never.o114 | never.o115 | never.o116 | never.o117 | never.o118 | never.o119 | never.o90 | never.o91 | never.o92 | never.o93 | never.o94 | never.o95 | never.o96 | never.o97 | never.o98 | never.o99)",
        value: input.data
    })) && $vu7(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "(APIMessageButtonInteractionData | APIMessageChannelSelectInteractionData | APIMessageMentionableSelectInteractionData | APIMessageRoleSelectInteractionData | APIMessageStringSelectInteractionData | APIMessageUserSelectInteractionData | never.o100 | never.o101 | never.o102 | never.o103 | never.o104 | never.o105 | never.o106 | never.o107 | never.o108 | never.o109 | never.o110 | never.o111 | never.o112 | never.o113 | never.o114 | never.o115 | never.o116 | never.o117 | never.o118 | never.o119 | never.o90 | never.o91 | never.o92 | never.o93 | never.o94 | never.o95 | never.o96 | never.o97 | never.o98 | never.o99)",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), ("object" === typeof input.channel && null !== input.channel && false === Array.isArray(input.channel) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    })) && $vu6(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | never | never.o1 | never.o10 | never.o11 | never.o12 | never.o13 | never.o14 | never.o15 | never.o16 | never.o17 | never.o18 | never.o19 | never.o2 | never.o20 | never.o21 | never.o22 | never.o23 | never.o24 | never.o25 | never.o26 | never.o27 | never.o28 | never.o29 | never.o3 | never.o30 | never.o31 | never.o32 | never.o33 | never.o34 | never.o35 | never.o36 | never.o37 | never.o38 | never.o39 | never.o4 | never.o40 | never.o41 | never.o42 | never.o43 | never.o44 | never.o45 | never.o46 | never.o47 | never.o48 | never.o49 | never.o5 | never.o50 | never.o51 | never.o52 | never.o53 | never.o54 | never.o55 | never.o56 | never.o57 | never.o58 | never.o59 | never.o6 | never.o60 | never.o61 | never.o62 | never.o63 | never.o64 | never.o65 | never.o66 | never.o67 | never.o68 | never.o69 | never.o7 | never.o70 | never.o71 | never.o72 | never.o73 | never.o74 | never.o75 | never.o76 | never.o77 | never.o78 | never.o79 | never.o8 | never.o80 | never.o81 | never.o82 | never.o83 | never.o84 | never.o85 | never.o86 | never.o87 | never.o88 | never.o89 | never.o9)",
        value: input.channel
    }), "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "string",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "APIMessage",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "APIMessage",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv209.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv210.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index211: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index211 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index211 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index211 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo209 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 2 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "2",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo210 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.values) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    })) && input.values.map((elem: any, _index212: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".values[" + _index212 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    }), ("object" === typeof input.resolved && null !== input.resolved || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Required<Pick<APIInteractionDataResolved, \"channels\">>",
        value: input.resolved
    })) && $vo211(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Required<Pick<APIInteractionDataResolved, \"channels\">>",
        value: input.resolved
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 8 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "8",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo211 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.channels && null !== input.channels && false === Array.isArray(input.channels) || $report(_exceptionable, {
        path: _path + ".channels",
        expected: "Record<string, APIInteractionDataResolvedChannel>",
        value: input.channels
    })) && $vo22(input.channels, _path + ".channels", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channels",
        expected: "Record<string, APIInteractionDataResolvedChannel>",
        value: input.channels
    })].every((flag: boolean) => flag); const $vo212 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.values) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    })) && input.values.map((elem: any, _index213: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".values[" + _index213 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    }), ("object" === typeof input.resolved && null !== input.resolved && false === Array.isArray(input.resolved) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Pick<APIInteractionDataResolved, \"roles\" | \"members\" | \"users\">",
        value: input.resolved
    })) && $vo213(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Pick<APIInteractionDataResolved, \"roles\" | \"members\" | \"users\">",
        value: input.resolved
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 7 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "7",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo213 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.roles || ("object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "(Record<string, APIRole> | undefined)",
        value: input.roles
    })) && $vo17(input.roles, _path + ".roles", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "(Record<string, APIRole> | undefined)",
        value: input.roles
    }), undefined === input.members || ("object" === typeof input.members && null !== input.members && false === Array.isArray(input.members) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    })) && $vo20(input.members, _path + ".members", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".members",
        expected: "(Record<string, APIInteractionDataResolvedGuildMember> | undefined)",
        value: input.members
    }), undefined === input.users || ("object" === typeof input.users && null !== input.users && false === Array.isArray(input.users) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "(Record<string, APIUser> | undefined)",
        value: input.users
    })) && $vo14(input.users, _path + ".users", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".users",
        expected: "(Record<string, APIUser> | undefined)",
        value: input.users
    })].every((flag: boolean) => flag); const $vo214 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.values) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    })) && input.values.map((elem: any, _index214: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".values[" + _index214 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    }), ("object" === typeof input.resolved && null !== input.resolved || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Required<Pick<APIInteractionDataResolved, \"roles\">>",
        value: input.resolved
    })) && $vo215(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "Required<Pick<APIInteractionDataResolved, \"roles\">>",
        value: input.resolved
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 6 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "6",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo215 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [("object" === typeof input.roles && null !== input.roles && false === Array.isArray(input.roles) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Record<string, APIRole>",
        value: input.roles
    })) && $vo17(input.roles, _path + ".roles", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".roles",
        expected: "Record<string, APIRole>",
        value: input.roles
    })].every((flag: boolean) => flag); const $vo216 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.values) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    })) && input.values.map((elem: any, _index215: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".values[" + _index215 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 3 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "3",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo217 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.values) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    })) && input.values.map((elem: any, _index216: number) => "string" === typeof elem || $report(_exceptionable, {
        path: _path + ".values[" + _index216 + "]",
        expected: "string",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".values",
        expected: "Array<string>",
        value: input.values
    }), ("object" === typeof input.resolved && null !== input.resolved || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIUserInteractionDataResolved",
        value: input.resolved
    })) && $vo207(input.resolved, _path + ".resolved", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".resolved",
        expected: "APIUserInteractionDataResolved",
        value: input.resolved
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), 5 === input.component_type || $report(_exceptionable, {
        path: _path + ".component_type",
        expected: "5",
        value: input.component_type
    })].every((flag: boolean) => flag); const $vo218 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo219 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo220 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo221 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo222 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo223 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo224 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo225 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo226 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo227 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo228 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo229 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo230 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo231 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo232 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo233 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo234 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo235 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo236 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo237 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo238 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo239 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo240 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo241 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo242 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo243 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo244 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo245 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo246 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo247 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true; const $vo248 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 5 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "5",
        value: input.type
    }), ("object" === typeof input.data && null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIModalSubmission",
        value: input.data
    })) && $vo249(input.data, _path + ".data", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".data",
        expected: "APIModalSubmission",
        value: input.data
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.channel || ("object" === typeof input.channel && null !== input.channel || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    })) && $vu3(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    }), undefined === input.channel_id || "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "(string | undefined)",
        value: input.channel_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), true === $vv217.has(input.locale) || $report(_exceptionable, {
        path: _path + ".locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\")",
        value: input.locale
    }), undefined === input.guild_locale || true === $vv218.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index219: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index219 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index219 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index219 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vo249 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), (Array.isArray(input.components) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<ModalSubmitActionRowComponent>",
        value: input.components
    })) && input.components.map((elem: any, _index220: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".components[" + _index220 + "]",
        expected: "ModalSubmitActionRowComponent",
        value: elem
    })) && $vo250(elem, _path + ".components[" + _index220 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".components[" + _index220 + "]",
        expected: "ModalSubmitActionRowComponent",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<ModalSubmitActionRowComponent>",
        value: input.components
    })].every((flag: boolean) => flag); const $vo250 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.components) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<ModalSubmitComponent>",
        value: input.components
    })) && input.components.map((elem: any, _index221: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".components[" + _index221 + "]",
        expected: "ModalSubmitComponent",
        value: elem
    })) && $vo251(elem, _path + ".components[" + _index221 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".components[" + _index221 + "]",
        expected: "ModalSubmitComponent",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".components",
        expected: "Array<ModalSubmitComponent>",
        value: input.components
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    })].every((flag: boolean) => flag); const $vo251 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [1 === input.type || 2 === input.type || 3 === input.type || 4 === input.type || 5 === input.type || 6 === input.type || 7 === input.type || 8 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8)",
        value: input.type
    }), "string" === typeof input.custom_id || $report(_exceptionable, {
        path: _path + ".custom_id",
        expected: "string",
        value: input.custom_id
    }), "string" === typeof input.value || $report(_exceptionable, {
        path: _path + ".value",
        expected: "string",
        value: input.value
    })].every((flag: boolean) => flag); const $vo252 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(null !== input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "undefined",
        value: input.data
    })) && (undefined === input.data || $report(_exceptionable, {
        path: _path + ".data",
        expected: "undefined",
        value: input.data
    })), "string" === typeof input.app_permissions || $report(_exceptionable, {
        path: _path + ".app_permissions",
        expected: "string",
        value: input.app_permissions
    }), undefined === input.channel_id || "string" === typeof input.channel_id || $report(_exceptionable, {
        path: _path + ".channel_id",
        expected: "(string | undefined)",
        value: input.channel_id
    }), undefined === input.channel || ("object" === typeof input.channel && null !== input.channel || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    })) && $vu3(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".channel",
        expected: "(Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | undefined)",
        value: input.channel
    }), undefined === input.message || ("object" === typeof input.message && null !== input.message || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    })) && $vo44(input.message, _path + ".message", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".message",
        expected: "(APIMessage | undefined)",
        value: input.message
    }), "string" === typeof input.id || $report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    }), "string" === typeof input.application_id || $report(_exceptionable, {
        path: _path + ".application_id",
        expected: "string",
        value: input.application_id
    }), 1 === input.type || $report(_exceptionable, {
        path: _path + ".type",
        expected: "1",
        value: input.type
    }), undefined === input.guild_id || "string" === typeof input.guild_id || $report(_exceptionable, {
        path: _path + ".guild_id",
        expected: "(string | undefined)",
        value: input.guild_id
    }), undefined === input.member || ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    })) && $vo43(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".member",
        expected: "(APIInteractionGuildMember | undefined)",
        value: input.member
    }), undefined === input.user || ("object" === typeof input.user && null !== input.user || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    })) && $vo15(input.user, _path + ".user", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".user",
        expected: "(APIUser | undefined)",
        value: input.user
    }), "string" === typeof input.token || $report(_exceptionable, {
        path: _path + ".token",
        expected: "string",
        value: input.token
    }), 1 === input.version || $report(_exceptionable, {
        path: _path + ".version",
        expected: "1",
        value: input.version
    }), undefined === input.guild_locale || true === $vv222.has(input.guild_locale) || $report(_exceptionable, {
        path: _path + ".guild_locale",
        expected: "(\"bg\" | \"cs\" | \"da\" | \"de\" | \"el\" | \"en-GB\" | \"en-US\" | \"es-419\" | \"es-ES\" | \"fi\" | \"fr\" | \"hi\" | \"hr\" | \"hu\" | \"id\" | \"it\" | \"ja\" | \"ko\" | \"lt\" | \"nl\" | \"no\" | \"pl\" | \"pt-BR\" | \"ro\" | \"ru\" | \"sv-SE\" | \"th\" | \"tr\" | \"uk\" | \"vi\" | \"zh-CN\" | \"zh-TW\" | undefined)",
        value: input.guild_locale
    }), (Array.isArray(input.entitlements) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    })) && input.entitlements.map((elem: any, _index223: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index223 + "]",
        expected: "APIEntitlement",
        value: elem
    })) && $vo108(elem, _path + ".entitlements[" + _index223 + "]", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".entitlements[" + _index223 + "]",
        expected: "APIEntitlement",
        value: elem
    })).every((flag: boolean) => flag) || $report(_exceptionable, {
        path: _path + ".entitlements",
        expected: "Array<APIEntitlement>",
        value: input.entitlements
    }), ("object" === typeof input.authorizing_integration_owners && null !== input.authorizing_integration_owners && false === Array.isArray(input.authorizing_integration_owners) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    })) && $vo69(input.authorizing_integration_owners, _path + ".authorizing_integration_owners", true && _exceptionable) || $report(_exceptionable, {
        path: _path + ".authorizing_integration_owners",
        expected: "APIAuthorizingIntegrationOwnersMap",
        value: input.authorizing_integration_owners
    }), undefined === input.context || 0 === input.context || 1 === input.context || 2 === input.context || $report(_exceptionable, {
        path: _path + ".context",
        expected: "(0 | 1 | 2 | undefined)",
        value: input.context
    })].every((flag: boolean) => flag); const $vu0 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (6 === input.type)
        return $vo10(input, _path, true && _exceptionable);
    else if (8 === input.type)
        return $vo8(input, _path, true && _exceptionable);
    else if (9 === input.type)
        return $vo6(input, _path, true && _exceptionable);
    else if (7 === input.type)
        return $vo4(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo3(input, _path, true && _exceptionable);
    else if (11 === input.type)
        return $vo2(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo9(input, _path, true && _exceptionable);
    else if (10 === input.type)
        return $vo7(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo5(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo12(input, _path, true && _exceptionable);
    else if (2 === input.type)
        return $vo11(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(APIApplicationCommandInteractionDataUserOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataSubcommandOption | APIApplicationCommandInteractionDataSubcommandGroupOption)",
            value: input
        });
})(); const $vu1 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (6 === input.type)
        return $vo10(input, _path, true && _exceptionable);
    else if (8 === input.type)
        return $vo8(input, _path, true && _exceptionable);
    else if (9 === input.type)
        return $vo6(input, _path, true && _exceptionable);
    else if (7 === input.type)
        return $vo4(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo3(input, _path, true && _exceptionable);
    else if (11 === input.type)
        return $vo2(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo9(input, _path, true && _exceptionable);
    else if (10 === input.type)
        return $vo7(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo5(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(APIApplicationCommandInteractionDataUserOption | APIApplicationCommandInteractionDataRoleOption | APIApplicationCommandInteractionDataMentionableOption | APIApplicationCommandInteractionDataChannelOption | APIApplicationCommandInteractionDataBooleanOption | APIApplicationCommandInteractionDataAttachmentOption | APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataNumberOption | APIApplicationCommandInteractionDataIntegerOption)",
            value: input
        });
})(); const $vu2 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (1 === input.style || 2 === input.style || 3 === input.style || 4 === input.style)
        return $vo83(input, _path, true && _exceptionable);
    else if (6 === input.style)
        return $vo85(input, _path, true && _exceptionable);
    else if (5 === input.style)
        return $vo86(input, _path, true && _exceptionable);
    else if (8 === input.type)
        return $vo87(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo95(input, _path, true && _exceptionable);
    else if (6 === input.type)
        return $vo91(input, _path, true && _exceptionable);
    else if (7 === input.type)
        return $vo89(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo93(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(APIButtonComponentWithCustomId | APIButtonComponentWithSKUId | APIButtonComponentWithURL | APIChannelSelectComponent | APIUserSelectComponent | APIRoleSelectComponent | APIMentionableSelectComponent | APIStringSelectComponent)",
            value: input
        });
})(); const $vu3 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $vo28(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo32(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo33(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo34(input, _path, true && _exceptionable);
    else if (15 === input.type)
        return $vo35(input, _path, true && _exceptionable);
    else if (16 === input.type)
        return $vo38(input, _path, true && _exceptionable);
    else if (2 === input.type)
        return $vo40(input, _path, true && _exceptionable);
    else if (13 === input.type)
        return $vo39(input, _path, true && _exceptionable);
    else if (0 === input.type)
        return $vo42(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo41(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(Partial<APIThreadChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGroupDMChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildCategoryChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildForumChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildMediaChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APIGuildStageVoiceChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APITextChannel> & Pick<APIChannel, \"id\" | \"type\"> | Partial<APINewsChannel> & Pick<APIChannel, \"id\" | \"type\">)",
            value: input
        });
})(); const $vu4 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (true === $vv224.has(input.type))
        return $vo23(input, _path, true && _exceptionable);
    else if (10 === input.type || 11 === input.type || 12 === input.type)
        return $vo24(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(APIInteractionDataResolvedChannelBase<ChannelType.GuildText | ChannelType.DM | ChannelType.GuildVoice | ChannelType.GroupDM | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.GuildStageVoice | ChannelType.GuildDirectory | ChannelType.GuildForum | ChannelType.GuildMedia> | APIInteractionDataResolvedChannelBase<ThreadChannelType> & Pick<APIThreadChannel, \"parent_id\" | \"thread_metadata\">)",
            value: input
        });
})(); const $vu5 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $vo72(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo73(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo74(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo75(input, _path, true && _exceptionable);
    else if (undefined !== input.default_forum_layout)
        return $vo76(input, _path, true && _exceptionable);
    else if (16 === input.type)
        return $vo77(input, _path, true && _exceptionable);
    else if (2 === input.type)
        return $vo79(input, _path, true && _exceptionable);
    else if (13 === input.type)
        return $vo78(input, _path, true && _exceptionable);
    else if (0 === input.type)
        return $vo81(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo80(input, _path, true && _exceptionable);
    else
        return $report(_exceptionable, {
            path: _path,
            expected: "(APIThreadChannel | APIDMChannel | APIGroupDMChannel | APIGuildCategoryChannel | APIGuildForumChannel | APIGuildMediaChannel | APIGuildVoiceChannel | APIGuildStageVoiceChannel | APITextChannel | APINewsChannel)",
            value: input
        });
})(); const $vu6 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (10 === input.type || 11 === input.type || 12 === input.type)
        return $vo28(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo32(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo33(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo34(input, _path, true && _exceptionable);
    else if (15 === input.type)
        return $vo35(input, _path, true && _exceptionable);
    else if (16 === input.type)
        return $vo38(input, _path, true && _exceptionable);
    else if (2 === input.type)
        return $vo40(input, _path, true && _exceptionable);
    else if (13 === input.type)
        return $vo39(input, _path, true && _exceptionable);
    else if (0 === input.type)
        return $vo42(input, _path, true && _exceptionable);
    else if (5 === input.type)
        return $vo41(input, _path, true && _exceptionable);
    else
        return $vo200(input, _path, false && _exceptionable) || $vo199(input, _path, false && _exceptionable) || $vo198(input, _path, false && _exceptionable) || $vo197(input, _path, false && _exceptionable) || $vo196(input, _path, false && _exceptionable) || $vo195(input, _path, false && _exceptionable) || $vo194(input, _path, false && _exceptionable) || $vo193(input, _path, false && _exceptionable) || $vo192(input, _path, false && _exceptionable) || $vo191(input, _path, false && _exceptionable) || $vo190(input, _path, false && _exceptionable) || $vo189(input, _path, false && _exceptionable) || $vo188(input, _path, false && _exceptionable) || $vo187(input, _path, false && _exceptionable) || $vo186(input, _path, false && _exceptionable) || $vo185(input, _path, false && _exceptionable) || $vo184(input, _path, false && _exceptionable) || $vo183(input, _path, false && _exceptionable) || $vo182(input, _path, false && _exceptionable) || $vo181(input, _path, false && _exceptionable) || $vo180(input, _path, false && _exceptionable) || $vo179(input, _path, false && _exceptionable) || $vo178(input, _path, false && _exceptionable) || $vo177(input, _path, false && _exceptionable) || $vo176(input, _path, false && _exceptionable) || $vo175(input, _path, false && _exceptionable) || $vo174(input, _path, false && _exceptionable) || $vo173(input, _path, false && _exceptionable) || $vo172(input, _path, false && _exceptionable) || $vo171(input, _path, false && _exceptionable) || $vo170(input, _path, false && _exceptionable) || $vo169(input, _path, false && _exceptionable) || $vo168(input, _path, false && _exceptionable) || $vo167(input, _path, false && _exceptionable) || $vo166(input, _path, false && _exceptionable) || $vo165(input, _path, false && _exceptionable) || $vo164(input, _path, false && _exceptionable) || $vo163(input, _path, false && _exceptionable) || $vo162(input, _path, false && _exceptionable) || $vo161(input, _path, false && _exceptionable) || $vo160(input, _path, false && _exceptionable) || $vo159(input, _path, false && _exceptionable) || $vo158(input, _path, false && _exceptionable) || $vo157(input, _path, false && _exceptionable) || $vo156(input, _path, false && _exceptionable) || $vo155(input, _path, false && _exceptionable) || $vo154(input, _path, false && _exceptionable) || $vo153(input, _path, false && _exceptionable) || $vo152(input, _path, false && _exceptionable) || $vo151(input, _path, false && _exceptionable) || $vo150(input, _path, false && _exceptionable) || $vo149(input, _path, false && _exceptionable) || $vo148(input, _path, false && _exceptionable) || $vo147(input, _path, false && _exceptionable) || $vo146(input, _path, false && _exceptionable) || $vo145(input, _path, false && _exceptionable) || $vo144(input, _path, false && _exceptionable) || $vo143(input, _path, false && _exceptionable) || $vo142(input, _path, false && _exceptionable) || $vo141(input, _path, false && _exceptionable) || $vo140(input, _path, false && _exceptionable) || $vo139(input, _path, false && _exceptionable) || $vo138(input, _path, false && _exceptionable) || $vo137(input, _path, false && _exceptionable) || $vo136(input, _path, false && _exceptionable) || $vo135(input, _path, false && _exceptionable) || $vo134(input, _path, false && _exceptionable) || $vo133(input, _path, false && _exceptionable) || $vo132(input, _path, false && _exceptionable) || $vo131(input, _path, false && _exceptionable) || $vo130(input, _path, false && _exceptionable) || $vo129(input, _path, false && _exceptionable) || $vo128(input, _path, false && _exceptionable) || $vo127(input, _path, false && _exceptionable) || $vo126(input, _path, false && _exceptionable) || $vo125(input, _path, false && _exceptionable) || $vo124(input, _path, false && _exceptionable) || $vo123(input, _path, false && _exceptionable) || $vo122(input, _path, false && _exceptionable) || $vo121(input, _path, false && _exceptionable) || $vo120(input, _path, false && _exceptionable) || $vo119(input, _path, false && _exceptionable) || $vo118(input, _path, false && _exceptionable) || $vo117(input, _path, false && _exceptionable) || $vo116(input, _path, false && _exceptionable) || $vo115(input, _path, false && _exceptionable) || $vo114(input, _path, false && _exceptionable) || $vo113(input, _path, false && _exceptionable) || $vo112(input, _path, false && _exceptionable) || $vo111(input, _path, false && _exceptionable);
})(); const $vu7 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (2 === input.component_type)
        return $vo209(input, _path, true && _exceptionable);
    else if (5 === input.component_type)
        return $vo217(input, _path, true && _exceptionable);
    else if (6 === input.component_type)
        return $vo214(input, _path, true && _exceptionable);
    else if (7 === input.component_type)
        return $vo212(input, _path, true && _exceptionable);
    else if (8 === input.component_type)
        return $vo210(input, _path, true && _exceptionable);
    else if (3 === input.component_type)
        return $vo216(input, _path, true && _exceptionable);
    else
        return $vo247(input, _path, false && _exceptionable) || $vo246(input, _path, false && _exceptionable) || $vo245(input, _path, false && _exceptionable) || $vo244(input, _path, false && _exceptionable) || $vo243(input, _path, false && _exceptionable) || $vo242(input, _path, false && _exceptionable) || $vo241(input, _path, false && _exceptionable) || $vo240(input, _path, false && _exceptionable) || $vo239(input, _path, false && _exceptionable) || $vo238(input, _path, false && _exceptionable) || $vo237(input, _path, false && _exceptionable) || $vo236(input, _path, false && _exceptionable) || $vo235(input, _path, false && _exceptionable) || $vo234(input, _path, false && _exceptionable) || $vo233(input, _path, false && _exceptionable) || $vo232(input, _path, false && _exceptionable) || $vo231(input, _path, false && _exceptionable) || $vo230(input, _path, false && _exceptionable) || $vo229(input, _path, false && _exceptionable) || $vo228(input, _path, false && _exceptionable) || $vo227(input, _path, false && _exceptionable) || $vo226(input, _path, false && _exceptionable) || $vo225(input, _path, false && _exceptionable) || $vo224(input, _path, false && _exceptionable) || $vo223(input, _path, false && _exceptionable) || $vo222(input, _path, false && _exceptionable) || $vo221(input, _path, false && _exceptionable) || $vo220(input, _path, false && _exceptionable) || $vo219(input, _path, false && _exceptionable) || $vo218(input, _path, false && _exceptionable);
})(); const $vu8 = (input: any, _path: string, _exceptionable: boolean = true): any => (() => {
    if (5 === input.type)
        return $vo248(input, _path, true && _exceptionable);
    else if (3 === input.type)
        return $vo208(input, _path, true && _exceptionable);
    else if (4 === input.type)
        return $vo0(input, _path, true && _exceptionable);
    else if (1 === input.type)
        return $vo252(input, _path, true && _exceptionable);
    else
        return $vo205(input, _path, false && _exceptionable) || $vo201(input, _path, false && _exceptionable) || $vo109(input, _path, false && _exceptionable);
})(); const __is = (input: any): input is APIInteraction => "object" === typeof input && null !== input && $iu8(input); let errors: any; let $report: any; return (input: any): typia.IValidation<APIInteraction> => {
    if (false === __is(input)) {
        errors = [];
        $report = (typia.createValidate as any).report(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "(APIApplicationCommandAutocompleteInteraction | APIChatInputApplicationCommandInteraction | APIMessageApplicationCommandInteraction | APIMessageComponentInteraction | APIModalSubmitInteraction | APIPingInteraction | APIUserApplicationCommandInteraction)",
            value: input
        })) && $vu8(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "(APIApplicationCommandAutocompleteInteraction | APIChatInputApplicationCommandInteraction | APIMessageApplicationCommandInteraction | APIMessageComponentInteraction | APIModalSubmitInteraction | APIPingInteraction | APIUserApplicationCommandInteraction)",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined
        } as any;
    }
    return {
        success: true,
        errors: [],
        data: input
    } as any;
}; })();
export { validateDiscordInteraction };
