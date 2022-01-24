FROM gradle:latest AS builder
RUN mkdir app
ADD ./ app/
WORKDIR app
RUN gradle build
RUN ls -la
RUN ls -la build
RUN ls -la build/libs/
RUN ls -la build/libs/opinions-0.0.1-SNAPSHOT.jar

FROM openjdk:latest AS run
COPY --from=builder /home/gradle/app/build/libs/opinions-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
