# Ponto Virtual Automático

### Como usar 

- Altere em ```src/ponto.json``` "Jacques Trevisan" para o seu nome.
- Não modifique a propriedade 'tipo', pois ela controla o se você está entrando ou saindo
- Para gerar o ponto do dia execute ```src/ponto.bat``` ou ```ponto.lnk```
- Para gerar o ponto de almoço execute ```src/ponto-almoco.bat``` ou ```ponto-almoco.lnk```
- O ponto será copiado para sua área de transferência, com precisão de 1 minuto*
- Basta colar onde deseja e enviar dentro do intervalo

### Como Funciona

- A data é recuperada do seu sistema e formatada para o formato HH:mm
- O arquivo ```src/ponto.json``` guarda 2 dados: Seu nome e seu próximo ponto
- O nome está salvo separadamente para funcionar como um parâmetro, assim mais pessoas podem aproveitar o codígo sem alterá-lo
- O tipo é para controlar se você está entrando ou saindo e será invertido toda vez que executar qualquer um dos modos
- O tipo será testado para ver se será escrito entrada ou saída
- Dependendo do modo executado, será adicionado ou não o texto de almoço
- Após a montagem do texto, ele é automaticamente copiado para sua área de transferência usando a biblioteca [clipboardy](https://www.npmjs.com/package/clipboardy)

### Observações

- O ponto de almoço foi separado do normal, pois aqui o horário de almoço não é obrigatório e funcionários do período da tarde por exemplo não fazem
- Fique atento aos segundos do seu sistema pois pode gerar uma hora atrasada que fica inconsistente com a mensagem que for enviar*
- O tipo do ponto no arquivo JSON poderia ser boolean, talvez seja em versões futuras
- Texto do almoço poderia ser parametrizado, porém no momento as mensagens de entrada e saída são um pouco diferentes para o almoço então precisaria de mais modificações


### Observações sobre os atalhos

- Pode não funcionar, mas na pasta ```src```os arquivos ```.bat``` fazem a mesma coisa
- Recrie os atalhos ou renomeie os caminhos para onde está clonado o projeto
- Para que não abra o cmd em cada execução do atalho, troque na propriedade dos atalhos de "Janela Normal" para "Minimizado"
