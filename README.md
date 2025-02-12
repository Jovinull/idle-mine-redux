# Idle Mine Redux

Idle Mine Redux é um projeto de melhoria e expansão do jogo original **Idle Mine Remix**, criado por [veprogames](https://github.com/veprogames/idle-mine-remix). Este projeto visa corrigir bugs, melhorar a experiência do usuário e adicionar novas funcionalidades ao jogo original.

## Sobre o Idle Mine Remix
Idle Mine Remix é um jogo incremental (idle) onde o jogador minera recursos e utiliza upgrades para aumentar sua eficiência. O jogo permite aos jogadores:
- Extrair recursos de maneira automatizada ou manual.
- Investir em upgrades para melhorar o rendimento.
- Desbloquear novas funcionalidades ao progredir.

O jogo é desenvolvido em HTML, CSS e JavaScript, sendo de código aberto e facilmente extensível.

## Sobre o Idle Mine Redux
O Idle Mine Redux busca:
- **Corrigir e otimizar** códigos do projeto original.
- **Melhorar a interface do usuário (UI)** e a experiência geral.
- **Adicionar novas funcionalidades** e elementos de gameplay.
- Tornar o jogo mais acessível e divertido.

## Estrutura do Projeto
Abaixo está uma visão geral das pastas e arquivos do projeto:

### Estrutura de Pastas

#### 1. `fonts`
Contém arquivos de fontes customizadas utilizadas no jogo:
- **Montserrat:** Uma fonte elegante utilizada para títulos e textos gerais.
- **WorkSans:** Outra fonte utilizada para variar o estilo tipográfico.

#### 2. `Images`
Armazena todos os recursos visuais do jogo:
- **`social`:** Ícones de redes sociais (Discord, YouTube, etc.).
- **`upgrades`:** Imagens relacionadas aos upgrades do jogo (ex.: blacksmithbonus, gembonus).
- **Outros:** Inclui botões (btn_left, btn_right), recursos (gem, money) e outros elementos visuais do jogo.

#### 3. `Scripts`
Contém todos os arquivos de código JavaScript, organizados em:
- **Components:** Scripts que controlam componentes específicos do jogo (ex.: mine-object.js, upgrade.js).
- **Define:** Scripts com definições gerais e funções auxiliares (ex.: dictionary.js, game.js).

#### 4. `Themes`
Inclui os estilos CSS utilizados no projeto:
- **`dark.css`:** Tema escuro.
- **`light.css`:** Tema claro.
- **`main.css`:** Estilo principal.

#### 5. Outros arquivos
- **`index.html`:** Arquivo principal do jogo.
- **`LICENSE`:** Licença do projeto original.
- **`README.md`:** Documentação do projeto.

## Como Criar um Executável do Jogo
Se deseja transformar o Idle Mine Redux em um executável (.exe) utilizando Electron, siga os passos abaixo:

### 1 - Instalar Dependências
Certifique-se de que possui o **Node.js** instalado e execute o seguinte comando na raiz do projeto para instalar as dependências:
```bash
npm install
```

### 2 - Configurar o Electron
O projeto já está configurado para Electron. No entanto, se precisar garantir que o Electron está instalado localmente, use:
```bash
npm install electron electron-packager --save-dev
```

### 3 - Criar o Executável
Para gerar o executável do jogo, use o comando:
```bash
npm run package
```
Isso criará uma pasta `dist/` contendo o executável e todos os arquivos necessários.

### 4 - Onde Encontrar o Executável
Após rodar o comando acima, o executável estará disponível em:
```
dist/DLE-MINE-REDUX/
```
Dentro dessa pasta, você encontrará o arquivo **`DLE-MINE-REDUX.exe`** e os arquivos necessários para execução.

### 5 - Empacotar para Distribuição
Para facilitar o envio e compartilhamento do jogo, compacte a pasta `dist/DLE-MINE-REDUX/` em um arquivo `.zip`:
```bash
zip -r DLE-MINE-REDUX-v1.0.0-win64.zip dist/DLE-MINE-REDUX/
```

Agora você pode subir esse arquivo `.zip` no GitHub como uma release!

### 6 - Criar uma Release no GitHub
1. Acesse o repositório no **GitHub**.
2. Vá para a aba **"Releases"**.
3. Clique em **"Draft a new release"**.
4. Preencha:
   - **Tag:** `v1.0.0` (ou a versão do jogo).
   - **Título:** "DLE Mine Redux v1.0.0".
   - **Descrição:** Explique as mudanças da versão.
5. **Anexe o arquivo `.zip`** gerado.
6. Clique em **"Publish Release"**.
