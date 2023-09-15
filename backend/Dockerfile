FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ./target/applaudify-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

ENV MONGO_CONNECTION_STRING="mongodb+srv://ilijakrilovic:SgjIwqkZMqsDty39@cluster0.tzzvh1b.mongodb.net/?retryWrites=true&w=majority"

ENTRYPOINT ["java", "-jar", "/app.jar"]