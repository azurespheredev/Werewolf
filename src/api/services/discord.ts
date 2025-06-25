import { Client, GatewayIntentBits, TextChannel } from "discord.js";

interface OfferLetterMessagePayload {
  userName: string;
  companyName: string;
  position: string;
  jobType: string;
  source: string;
  interviews: number;
  receivedAt: Date;
  startAt: Date | null;
  fileURL: string;
}

interface JobTerminationMessagePayload {
  userName: string;
  companyName: string;
  position: string;
  startedAt: Date | null;
  reason: string;
}

export async function sendOfferLetterToArchievementChannel(
  payload: OfferLetterMessagePayload
) {
  const discordBotToken = process.env.DISCORD_BOT_TOKEN;
  const discordChannelId = process.env.DISCORD_CHANNEL_ID;

  if (!discordBotToken || !discordChannelId) {
    console.error("🟠 Discord bot token or channel ID is not set.");
    return;
  }

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once("ready", async () => {
    console.log(`🤖 Logged in as ${client.user?.tag}`);

    const receivedDate = new Date(payload.receivedAt).toLocaleString("en-US", {
      timeZone: "UTC",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const startDate = payload.startAt
      ? new Date(payload.startAt).toLocaleString("en-US", {
          timeZone: "UTC",
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Not sure";

    try {
      const channel = await client.channels.fetch(discordChannelId);
      if (channel && channel.isTextBased()) {
        await (channel as TextChannel).send(
          `**🎉 ${payload.userName} Received a New Offer Letter! 🎉**

Company Name: **${payload.companyName}**
Position: **${payload.position}**
Job Type: **${payload.jobType}**
Source: **${payload.source}**
Interviews: **${payload.interviews}**
Received At: **${receivedDate}**
Start At: **${startDate}**
Offer Letter: **${payload.fileURL}**`
        );

        console.log("🟢 Message sent to the Discord channel!");
      } else {
        console.error("🔴 Channel not found or is not text-based.");
      }
    } catch (err) {
      console.error("🔴 Error fetching channel:", err);
    }
  });

  client.login(discordBotToken);
}

export async function sendTerminationMessageToArchievementChannel(
  payload: JobTerminationMessagePayload
) {
  const discordBotToken = process.env.DISCORD_BOT_TOKEN;
  const discordChannelId = process.env.DISCORD_CHANNEL_ID;

  if (!discordBotToken || !discordChannelId) {
    console.error("🟠 Discord bot token or channel ID is not set.");
    return;
  }

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once("ready", async () => {
    console.log(`🤖 Logged in as ${client.user?.tag}`);

    const lastDate = payload.startedAt
      ? Math.floor(
          (Date.now() - new Date(payload.startedAt).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : "N/A";

    try {
      const channel = await client.channels.fetch(discordChannelId);
      if (channel && channel.isTextBased()) {
        await (channel as TextChannel).send(
          `**💀 ${payload.userName} Lost His Dream Job 💀**

Company Name: **${payload.companyName}**
Position: **${payload.position}**
Days Worked: **${lastDate} days**
Reason: **${payload.reason}**`
        );

        console.log("🟢 Message sent to the Discord channel!");
      } else {
        console.error("🔴 Channel not found or is not text-based.");
      }
    } catch (err) {
      console.error("🔴 Error fetching channel:", err);
    }
  });

  client.login(discordBotToken);
}
