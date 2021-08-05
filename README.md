# Acelerador_Cypress_WEB

  * Instalar: `npm install`.
  * Rodar em modo headless: `npm cy:run`
  * Rodar em tela gráfica: `npm cy:open`
  * Gerar o report HTML(sempre após rodar o cypress): `npm run cy:report`
  * Limpar os reports: `npm run cy:clean`

# Dependências:

  * [**Cypress**](https://www.cypress.io/)
  * [**Cypress-cucumber-preprocessor**](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
  * [**Fs-extra**](https://www.npmjs.com/package/fs-extra)
  * [**Rimraf**](https://www.npmjs.com/package/rimraf)
  * [**Multiple-cucumber-html-reporter**](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
  * [**Faker**](https://www.npmjs.com/package/faker)

# Como rodar o projeto pelo docker:

  * docker build -t <nome_da_imagem> .
  * docker container run --rm -it -e tags=@tag -v %cd%:/usr/src/e2e <nome_da_imagem>
  * `O comando acima não funciona no Powershell devido aos dois pontos após %cd%`

  * -it (ativa logs) 
  * -e tags=@tag (nome da variável de ambiente ou da tag em sí) 
  * -v %cd%:/usr/src/e2e (cria volume entre o container e o pc) 

# Passo a passo para novas implementações:

  TODO
