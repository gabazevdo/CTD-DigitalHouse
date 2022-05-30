# Comandos para utilizar no terminal Linux

Foram apresentados 34 comandos para se utilizar no terminal.

### Dicas e truques extras
- Use o comando clear para limpar o terminal se ele estiver cheio de muitos comandos passados.
- Experimente o botão TAB para completar automaticamente o que você está digitando. Por exemplo, se você precisar digitar "Documents", comece a digitar um comando - por exemplo "cd Doc" -, pressione a tecla TAB e o terminal completará o resto, mostrando cd Documents.
- Ctrl + C e Ctrl + Z são usados ​​para interromper qualquer comando que esteja sendo executado no momento. Ctrl + C interrompe o comando com segurança, enquanto Ctrl + Z o forçará a parar.
- Se acidentalmente congelar seu terminal usando Ctrl+S; apenas desfaça este comando com Ctrl + Q.
- Ctrl + A move você para o início da linha, enquanto Ctrl + E move você para o final.
- Você pode executar vários comandos em um único comando usando ponto e vírgula(;) para separá-los. Por exemplo: Comando1; Comando2; Comando 3. Ou use && se você quiser que o próximo comando seja executado apenas quando o primeiro for bem-sucedido.

## Exercícios

### Exercício 1 
#### Listar serviços no Linux

Mude para usuário root:
~~~
su root
~~~

Agora você pode listar todos os serviços no Linux. Para fazer isso, execute o comando:
~~~
sudo systemctl list-unit-files --type service --all
~~~

Ao executar o comando, você verá todos os serviços que estão no sistema. No entanto, você também verá que alguns têm um estado definido. Vamos ver o que tudo isso significa:
- Serviços habilitados (Enabled) são aqueles que estão em execução no momento. Estes geralmente não têm problemas.
- Serviços desabilitados (Disabled) são aqueles que não estão ativos, mas podem ser ativados a qualquer momento sem nenhum problema.
- Os serviços mascarados (Masked)  não são executados, a menos que retirem essa propriedade.
- Os serviços estáticos (Static) só serão utilizados se for necessário outro serviço ou unidade.
- Finalmente, existem serviços gerados (generated) através de um script de inicialização SysV ou LSB com o gerador systemd.

Caso você queira apenas saber quais serviços estão ativos, você deve usar um comando junto com o grep, como este:
~~~
sudo systemctl | grep running
~~~

### Exercício 2 
#### Gerenciando serviços do Linux

Agora que você sabe como listar serviços no Linux, é hora de aprender como gerenciar um serviço específico. Tenha em mente que cada serviço representa um software e cada software funciona de forma diferente. Neste tutorial mostraremos apenas como iniciar, verificar o status e parar os serviços, ou seja, os controles básicos.

Para iniciar um serviço no Linux, você precisa executar o seguinte comando:

~~~ 
sudo systemctl start [service_name]
~~~
Se o serviço estiver configurado corretamente, ele será iniciado. Agora, se você quiser pará-lo, use o seguinte comando:
~~~
sudo systemctl stop [service_name]
~~~
Por outro lado, para verificar o status de um serviço você pode usar:
~~~
sudo systemctl status [service_name]
~~~

Também é possível executar um serviço enquanto o sistema operacional está carregando:
~~~
sudo systemctl enable [service_name]
~~~

Ou remova-o do carregamento inicial:
~~~
sudo systemctl disable [service_name]
~~~

Finalmente, é possível monitorar uma porta que está sendo usada por um serviço. Para isso, use tcpdump. Para instalá-lo no Ubuntu, basta executar:
~~~
sudo apt-get install tcpdump
~~~



## Conclusão
Os comandos básicos do Linux ajudam os usuários a realizar tarefas com facilidade e eficácia. Pode demorar um pouco para lembrar alguns dos comandos básicos, mas nada é impossível com muita prática. No final, conhecer e dominar esses comandos, sem dúvida, será benéfico para sua experiência.
Aprender a listar serviços no Linux é fácil e isso pode acelerar bastante a solução de problemas. Agora você pode gerenciar seu VPS Linux como um profissional.
