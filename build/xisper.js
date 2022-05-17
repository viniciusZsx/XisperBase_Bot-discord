"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xisperBot = void 0;
/*
by Xisper
 */
/****** IMPORTS ******/
const discord_js_1 = __importDefault(require("discord.js"));
const config_1 = require("./config/config");
const menu_1 = require("./config/menu");
const functions_1 = require("./functions/functions");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const path_1 = __importDefault(require("path"));
/****** IMPORTS ******/
const xisper = new discord_js_1.default.Client({ intents: [discord_js_1.default.Intents.FLAGS.GUILDS, discord_js_1.default.Intents.FLAGS.GUILD_MESSAGES] });
const xisperBot = () => __awaiter(void 0, void 0, void 0, function* () {
    xisper.on("ready", () => {
        var _a;
        console.log(`${(_a = xisper.user) === null || _a === void 0 ? void 0 : _a.tag} Foi iniciado com sucesso`);
    });
    xisper.on("message", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        if (interaction.author.bot)
            return;
        if (interaction.channel.type === "DM")
            return;
        /****** VARIAVEIS PRINCIPAIS ******/
        const autor = interaction.author.id;
        const username = interaction.author.username;
        const hora = moment_timezone_1.default.tz('America/Sao_Paulo').format('HH:mm');
        const data = moment_timezone_1.default.tz('America/Sao_Paulo').format('DD/MM');
        const server = (_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.name;
        const args = interaction.content.slice(config_1.xisperC.prefix.length).trim().split(/ +/g);
        const cmd = (_b = args.shift()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        const envPv = (msg) => interaction.author.send(msg);
        const idGuild = interaction.guildId;
        const argument = args === null || args === void 0 ? void 0 : args.reduce((acc, arg) => acc + " " + arg, "").trim();
        const isCmd = (message) => message.length > 1 && message.startsWith(config_1.xisperC.prefix);
        const reply = (a) => interaction.reply(a);
        /****** VARIAVEIS PRINCIPAIS ******/
        const user = (0, functions_1.lerJson)(path_1.default.resolve(__dirname, "cache", "users.json"));
        const logd = user.find(({ id }) => id === autor);
        if (cmd === "login") {
            if (logd) {
                reply("Vc ja esta logado.");
                return;
            }
            else {
                const m = reply("Gerando perfil...");
                user.push({
                    id: autor,
                    username: username,
                    data: data,
                    hora: hora,
                    onde: `${(_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.name}`
                });
                (0, functions_1.writeJSON)(path_1.default.resolve(__dirname, "cache", "users.json"), user);
                setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                    return (yield m).edit(`Perfil gerado :) usuarios: ${user.length}, para ver seu perfil, digite: $perfil`);
                }), 3500);
            }
        }
        else if (!logd) {
            reply("Vc ainda n fez login, digite: $login");
            return;
        }
        switch (cmd) {
            case 'menu':
                reply(`${(0, menu_1.menu)(interaction.author.username, data, hora, server, username)}`);
                break;
            case 'perfil':
                let perfil = `Seus dados\nUsuario: ${logd === null || logd === void 0 ? void 0 : logd.username}\nId: ${logd === null || logd === void 0 ? void 0 : logd.id}\nLogado na data: ${logd === null || logd === void 0 ? void 0 : logd.data} as ${logd === null || logd === void 0 ? void 0 : logd.hora}\nNo servidor: ${logd === null || logd === void 0 ? void 0 : logd.onde}`;
                let v = reply("Buscando seu perfil...");
                setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                    ;
                    (yield v).edit(perfil);
                }), 2200);
                break;
            case 'meuId':
                reply(`Seu id é: ${autor}`);
                break;
            case 'login':
                break;
            default:
                if (isCmd(interaction.content)) {
                    reply("Este comando n existe!");
                }
                else {
                    return;
                }
        }
    }));
    xisper.login(config_1.xisperC.token);
});
exports.xisperBot = xisperBot;
