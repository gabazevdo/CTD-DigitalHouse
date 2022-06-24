# Eventos de formulário

Anteriormente, vimos os diferentes tipos de eventos que o JavaScript tem para comportamentos do mouse e alguns comportamentos do teclado. Agora, é hora de experimentar eventos de formulário. Por que isso é importante? Certamente, em algum momento, nos deparamos com algo assim:

![](https://assets.materialup.com/uploads/4cadd7c1-e5d9-438d-87b2-4b9e2586d3fa/password-strength-o-meter.gif)

Como podemos ver, validar a informação que esperamos receber num campo de formulário, constitui uma experiência agradável para as pessoas que utilizam os nossos websites, uma vez que no preciso momento em que a pessoa introduz a informação, estamos a informá-la se a informação é o que esperamos receber.

Isto é benéfico não só para os visitantes, mas também para o nosso back-end. Estas validações asseguram que a informação recebida passou previamente por uma série de filtros que podem garantir que a informação enviada está de acordo com o que queremos receber.

## Validação do lado do cliente
Em várias ocasiões, mencionamos isso no átomo anterior: antes de enviar os dados para o servidor, é importante garantir que as informações fornecidas pelo visitante sejam exatamente o que esperamos receber para processá-las posteriormente.

Isso é chamado de validação "on time" e não apenas nos ajuda a limpar os dados, mas também nos ajuda a garantir uma excelente experiência do usuário. Porque é muito chato que quando temos um erro no front end, é necessário enviar as informações para o servidor para que ele possa verificar e nos fazer ver o erro cometido, certo?

Os processos de validação não são nada triviais, pelo contrário, são parte fundamental do nosso processo como desenvolvedores. Além disso, vale esclarecer que nunca é demais adicionar camadas de validação ao nosso sistema. Assim como os do back-end são necessários, também são os que implementamos no front-end.

## Objeto Location

Talvez já tenhamos nos perguntado: como podemos fazer um redirecionamento a partir do front-end? ou como podemos obter a string de consulta que vem na URL? Bem, assim como realizamos esses procedimentos no back-end, também é possível no front-end, pois o JavaScript "pode fazer tudo" (bem, quase tudo).

Especificamente, desta vez veremos um objeto chamado location, que traz consigo algumas propriedades e métodos que nos permitirão coletar informações que trafegam na barra de endereços. Sem mais a acrescentar deste lado, vamos diretamente à teoria deste conceito.
