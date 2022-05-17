/*
by Xisper
 */
/****** IMPORTS ******/
import Discord, { Intents } from "discord.js";
import { xisperC } from "./config/config"
import { menu } from "./config/menu";
import { lerJson, writeJSON } from "./functions/functions";
import { IAuser } from "./interfaces/IAuser";
import { exec } from "child_process"
import moment from "moment-timezone";
import path from "path"
/****** IMPORTS ******/

const xisper = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })

export const xisperBot = async () => {
    xisper.on("ready", () => {
        console.log(`${xisper.user?.tag} Foi iniciado com sucesso`)
    })

    xisper.on("message", async interaction => {

        if (interaction.author.bot) return
        if (interaction.channel.type === "DM") return

        /****** VARIAVEIS PRINCIPAIS ******/
        const autor = interaction.author.id
        const username = interaction.author.username
        const hora = moment.tz('America/Sao_Paulo').format('HH:mm')
        const data = moment.tz('America/Sao_Paulo').format('DD/MM')
        const server = interaction.guild?.name
        const args = interaction.content.slice(xisperC.prefix.length).trim().split(/ +/g)
        const cmd = args.shift()?.toLowerCase()
        const envPv = (msg: string) => interaction.author.send(msg)
        const idGuild = interaction.guildId
        const argument = args?.reduce((acc, arg) => acc + " " + arg, "").trim()
        const isCmd = (message: string) => message.length > 1 && message.startsWith(xisperC.prefix)
        const reply = (a: string) => interaction.reply(a)
        /****** VARIAVEIS PRINCIPAIS ******/

        const user = lerJson(
            path.resolve(__dirname, "cache", "users.json")
        ) as IAuser[]

        const logd = user.find(({ id }) => id === autor)

        if (cmd === "login") {
            if (logd) {
                reply("Vc ja esta logado.")
                return
            } else {
                const m = reply("Gerando perfil...")
                user.push({
                    id: autor,
                    username: username,
                    data: data,
                    hora: hora,
                    onde: `${interaction.guild?.name}`
                })
                writeJSON(
                    path.resolve(__dirname, "cache", "users.json"),
                    user
                )
                setTimeout(async () => {
                    return (await m).edit(`Perfil gerado :) usuarios: ${user.length}, para ver seu perfil, digite: $perfil`)
                }, 3500)
            }
        } else if (!logd) {
            reply("Vc ainda n fez login, digite: $login")
            return
        }

        switch (cmd) {

            case 'menu':
                reply(`${menu(interaction.author.username, data, hora, server, username)}`)
                break
            case 'perfil':
                let perfil = `Seus dados\nUsuario: ${logd?.username}\nId: ${logd?.id}\nLogado na data: ${logd?.data} as ${logd?.hora}\nNo servidor: ${logd?.onde}`
                let v = reply("Buscando seu perfil...")
                setTimeout(async () => {
                    ; (await v).edit(perfil)
                }, 2200)
                break

            case 'meuId':
                reply(`Seu id é: ${autor}`)
                break

            case 'login':

                break
            default:
                if (isCmd(interaction.content)) {
                    reply("Este comando n existe!")
                } else {
                    return
                }
        }

    })
    xisper.login(xisperC.token)
}