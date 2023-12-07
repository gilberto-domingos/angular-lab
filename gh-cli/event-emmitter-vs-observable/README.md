# Objetivo BindingPropertyComponent e OutputPropertyComponent, compartilhem o mesmo estado e mantenham a sincronização dos valores, usando um serviço compartilhado.

# property.service.ts

1 - @Injectable Decorator: Essa classe é um serviço injetável que usa BehaviorSubject para manter e fornecer um valor atualizado para todos os componentes que o solicitarem.

2 - novoValorSubject: Um BehaviorSubject que mantém o valor atualizado.

3 - getNovoValor(): Retorna o valor atual contido no BehaviorSubject.

4- setNovoValor(valor: number): Atualiza o valor no BehaviorSubject.

# binding-property.component.ts

1 - BindingPropertyComponent: Esse é o componente que utiliza o serviço PropertyService.

2 - valorInicial: Armazena o valor inicial que será compartilhado.

3 - constructor(private propertyService: PropertyService): Injeta o serviço PropertyService para acessar os métodos definidos nele.

4 - onMudouValor(evento: { novoValor: number }): Captura o evento quando o valor é alterado no componente OutputPropertyComponent e atualiza o valorInicial e o valor no serviço PropertyService.

# binding-property.component.html

1 - <h1>Valor no Binding Component: {{ valorInicial }}</h1>: Exibe o valor compartilhado no BindingPropertyComponent.

2 - <app-output-property [valor]="valorInicial" (mudouValor)="onMudouValor($event)"></app-output-property>: Inclui o componente OutputPropertyComponent e vincula o valorInicial a ele. Quando o valor muda no OutputPropertyComponent, aciona o método onMudouValor() no BindingPropertyComponent.

# output-property.component.ts

1 - OutputPropertyComponent: Este componente mostra o valor e permite incrementar/decrementar esse valor.

2 - @Output() mudouValor: Emite um evento quando o valor é alterado.

3 - valorInicial: Armazena e exibe o valor compartilhado.

4 - incrementa(): Incrementa o valor, atualiza o campo de input e emite um evento informando a mudança no valor.

5 - decrementa(): Decrementa o valor, atualiza o campo de input e emite um evento informando a mudança no valor.

6 - ngOnInit(): Inicializa o componente, definindo o valorInicial a partir do serviço PropertyService.

# output-property.component.html

1 - Botões (<button>): Incrementa e decrementa o valorInicial quando clicados.

2 - <input>: Exibe e atualiza o valorInicial.

3 - <h1>Valor no OutputPropertyComponent: {{ valorInicial }}</h1>: Exibe o valor do OutputPropertyComponent.

Esses códigos em conjunto garantem que os valores compartilhados sejam atualizados em ambos os componentes e que as mudanças sejam refletidas instantaneamente.


# A diferença entre EventEmmitter Vs Observable

Momento para usar esse objeto é na comunicação entre componentes. Apenas usá-los exatamente para o caso de uso mostrado na documentação! Evite encadeiar EventEmitters, seu código se tornará uma bagunça.

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


