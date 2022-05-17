"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const config_1 = require("./config");
const menu = (nome, data, hora, servidor, user) => `
╭━◌━🖥️《 ${config_1.xisperC.nome} 》🖥️━◌━
│
│⪧ Olá ${user}, eu sou o ${config_1.xisperC.nome}!
│⪧ Hora: ${hora}
│⪧ Data: ${data}
│⪧ Solicitado em: ${servidor}
│⪧ Prefixo: ${config_1.xisperC.prefix}
│
╭─────⊣〘 〙      
`;
exports.menu = menu;
