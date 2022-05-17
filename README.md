<h1 align="center">XisperBot - Base 🤖</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Este é um bot(base) editavel para discord.

<br/>

### Caso estiver no celular: [Replit.com](https://replit.com/)
> Acesse o link e faça oque se pede abaixo (Faça um de cada vez.)
```sh
git clone https://github.com/viniciusZsx/XisperBase_Bot-discord.git
npm install
bash xisper.sh
```
<br/>

## Instalação 

```sh
git clone https://github.com/viniciusZsx/XisperBase_Bot-discord.git
npm install
```

## Para iniciar

```sh
bash xisper.sh
```
> Caso o bot fique off sozinho, ele irá religar
### Configurção 

```sh
local: /src/config/config.ts

  prefix: "$" (pode deixar ou alterar) (opcional)
  nome: "" (nome do seu bot) (obrigatorio)
  dono: "" (seu id do discord) (opcional/recomendavel)
  emojiPrefix: "" (um emoji de seu gosto) (opcional)
  token: "" (token do seu bot) (obrigatorio)
```
### Menu
```sh
local: /src/config/menu.ts

  aqui fica o menu
```

### Como usar

```sh
local: /src/xisper.ts
  
  para respoder uma msg use:
    reply("aqui colque a msg de resposta")

  para enviar msg na DM use:
    envdm("msg aki")

  para verificar argumentos use:
    if (!arguments) {
      reply("Opa! cadê o texto?")
      return
    }

  para criar um novo comando faça:
    va na linha 93 e:
      case 'exemplo':
        reply("Comando exemplo executado")
      break
```

<br/>

## Criador

👤 **XisperZero**

- Meu Github: [@ZisperZero](https://github.com/viniciusZsx)
- Meu WhatsApp: [XisperZero](wa.me/558181896518)

<br/>

## Espero que goste!
