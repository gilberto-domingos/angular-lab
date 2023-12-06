# A diferença entre EventEmmitter Vs Observable

Já vi alguns códigos que até usam EventEmitters em serviços. Esta não é uma prática recomendada, o único momento para usar esse objeto é na comunicação entre componentes. Você nunca deve assinar EventEmitters, apenas usá-los exatamente para o caso de uso mostrado na documentação !!! Não encadeie EventEmitters, seu código se tornará uma bagunça.

----------------------------------------------------------------
RxJS é uma biblioteca de programação reativa para JavaScript. Ela fornece uma série de classes e funções que permitem aos desenvolvedores trabalhar com dados assíncronos de forma mais eficiente e organizada.

No Angular, RxJS é usado para uma variedade de tarefas, incluindo:

Gerenciamento de eventos: RxJS fornece uma maneira de gerenciar eventos de forma assíncrona. Isso pode ser útil para lidar com eventos de entrada do usuário, como cliques ou toques, ou para eventos do DOM, como mudanças de estado.
Programação assíncrona: RxJS fornece uma maneira de realizar tarefas assíncronas de forma mais eficiente. Isso pode ser útil para lidar com tarefas que levam algum tempo para serem concluídas, como fazer uma solicitação HTTP ou ler dados de um arquivo.
Observação de dados: RxJS fornece uma maneira de observar dados assíncronos. Isso pode ser útil para acompanhar mudanças de dados ou para reagir a essas mudanças.
Aqui estão alguns exemplos específicos de como RxJS é usado no Angular:

 - Para gerenciar eventos de entrada do usuário, podemos usar o Observable MouseEvent. Por exemplo, o seguinte código usa RxJS para capturar cliques no botão "Enviar"
 
 - Para realizar uma solicitação HTTP assíncrona, podemos usar o Observable HttpClient. Por exemplo, o seguinte código usa RxJS para fazer uma solicitação HTTP para a API do GitHub
 
 - Para observar dados assíncronos, podemos usar o Observable Subject. Por exemplo, o seguinte código usa RxJS para observar mudanças no valor de uma variável:





-------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.


