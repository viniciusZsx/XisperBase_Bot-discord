import { xisperC } from "./config"

export const menu = (nome: string, data: string, hora: string, servidor: any, user: string) => `
╭━◌━🖥️《 ${xisperC.nome} 》🖥️━◌━
│
│⪧ Olá ${user}, eu sou o ${xisperC.nome}!
│⪧ Hora: ${hora}
│⪧ Data: ${data}
│⪧ Solicitado em: ${servidor}
│⪧ Prefixo: ${xisperC.prefix}
│
╭─────⊣〘 〙      
`