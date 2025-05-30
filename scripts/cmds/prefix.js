const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "1.5",
		author: "🔰 𝐁𝐚𝐘𝐣𝐢𝐝 🔰",
		countDown: 5,
		role: 0,
		description: "🛠️ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱 𝐨𝐫 𝐭𝐡𝐞 𝐞𝐧𝐭𝐢𝐫𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 (𝐨𝐧𝐥𝐲 𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧)",
		category: "INFORM",
		guide: {
			en: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "📌 {pn} <new prefix>: 𝐂𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱\n"
				+ "━━━━━━━━━━━━━━━━━━━\n"
				+ "📍 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n"
				+ "🔹 {pn} #\n"
				+ "━━━━━━━━━━━━━━━━━━━\n"
				+ "📌 {pn} <new prefix> -g: 𝐂𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐭𝐡𝐞 𝐞𝐧𝐭𝐢𝐫𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 (𝐨𝐧𝐥𝐲 𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧)\n"
				+ "━━━━━━━━━━━━━━━━━━━\n"
				+ "📍 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n"
				+ "🔹 {pn} # -g\n"
				+ "━━━━━━━━━━━━━━━━━━━\n"
				+ "🛠️ {pn} reset: 𝐑𝐞𝐬𝐞𝐭 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐛𝐨𝐱 𝐩𝐫𝐞𝐟𝐢𝐱 𝐭𝐨 𝐝𝐞𝐟𝐚𝐮𝐥𝐭\n"
				+ "━━━━━━━━━━━━━━━━━━━"
		}
	},

	langs: {
		en: {
			reset: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "🤖 𝐘𝐨𝐮𝐫 𝐩𝐫𝐞𝐟𝐢𝐱 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐬𝐞𝐭 𝐭𝐨 𝐝𝐞𝐟𝐚𝐮𝐥𝐭: %1\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			onlyAdmin: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "⚠️ 𝐎𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 𝐩𝐫𝐞𝐟𝐢𝐱!\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			confirmGlobal: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "✌🏿 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐚𝐜𝐭 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐜𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐭𝐡𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 𝐩𝐫𝐞𝐟𝐢𝐱.\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			confirmThisThread: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "✌🏿 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐚𝐜𝐭 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐜𝐡𝐚𝐧𝐠𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐜𝐡𝐚𝐭 𝐠𝐫𝐨𝐮𝐩.\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			successGlobal: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "🤖 𝐒𝐲𝐬𝐭𝐞𝐦 𝐩𝐫𝐞𝐟𝐢𝐱 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐜𝐡𝐚𝐧𝐠𝐞𝐝 𝐭𝐨: %1\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			successThisThread: 
				"━━━━━━━━━━━━━━━━━━━\n"
				+ "🤖 𝐂𝐡𝐚𝐭 𝐠𝐫𝐨𝐮𝐩 𝐩𝐫𝐞𝐟𝐢𝐱 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐜𝐡𝐚𝐧𝐠𝐞𝐝 𝐭𝐨: %1\n"
				+ "━━━━━━━━━━━━━━━━━━━",
			myPrefix: 
			 "☻━━─[  𝚈𝙾𝚄𝚁 𝚅𝙾𝙳𝚁𝙾 𝙱☺︎︎𝚃  ]─━━☻"
				+ "◈━━━━━━━━◈✙◈━━━━━━━━▷"
				+ "			𝚂𝚈𝚂𝚃𝙴𝙼 𝙿𝚁𝙴𝙵𝙸𝚇: %1\n"
				+ "		𝚈𝙾𝚄𝚁 𝙶𝚁𝙾𝚄𝙿 𝙿𝚁𝙴𝙵𝙸𝚇: %2\n 	  𝙾𝚆𝙽𝙴𝚁 : 𝙼𝚁 𝙰𝚁𝙰𝙵𝙰𝚃 ◈━━━━━━━━◈✙◈━━━━━━━━▷"
				+ "𝙳𝙰𝚃𝙴 𝚃𝙸𝙼𝙴: %3\n"
				+ "◈━━━━━━━━◈✙◈━━━━━━━━▷\n"
				+ ""
				+ ""
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0]) return message.SyntaxError();

		if (args[0] === "reset") {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix,
			setGlobal: args[1] === "-g"
		};

		if (formSet.setGlobal && role < 2) {
			return message.reply(getLang("onlyAdmin"));
		}

		const confirmMessage = formSet.setGlobal ? getLang("confirmGlobal") : getLang("confirmThisThread");
		return message.reply(confirmMessage, (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author) return;

		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}

		await threadsData.set(event.threadID, newPrefix, "data.prefix");
		return message.reply(getLang("successThisThread", newPrefix));
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix") {
			const serverTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }); // ঢাকার সময়
			
			return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID), serverTime));
		}
	}
};
