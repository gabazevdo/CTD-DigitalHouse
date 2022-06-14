FROM openjdk:11

WORKDIR /diretorioprinc/

COPY . /CoffeMachine.java /diretorioprinc/

RUN ['javac', "CoffeMachine.java"]

ENTRYPOINT ["java", "CoffeMachine"]