"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const config_1 = require("./config");
const menu = (nome, data, hora, servidor, user) => `
â­âââð¥ï¸ã ${config_1.xisperC.nome} ãð¥ï¸âââ
â
ââª§ OlÃ¡ ${user}, eu sou o ${config_1.xisperC.nome}!
ââª§ Hora: ${hora}
ââª§ Data: ${data}
ââª§ Solicitado em: ${servidor}
ââª§ Prefixo: ${config_1.xisperC.prefix}
â
â­ââââââ£ã ã      
`;
exports.menu = menu;
