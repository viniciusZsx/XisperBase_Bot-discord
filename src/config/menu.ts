import { xisperC } from "./config"

export const menu = (nome: string, data: string, hora: string, servidor: any, user: string) => `
â­âââð¥ï¸ã ${xisperC.nome} ãð¥ï¸âââ
â
ââª§ OlÃ¡ ${user}, eu sou o ${xisperC.nome}!
ââª§ Hora: ${hora}
ââª§ Data: ${data}
ââª§ Solicitado em: ${servidor}
ââª§ Prefixo: ${xisperC.prefix}
â
â­ââââââ£ã ã      
`