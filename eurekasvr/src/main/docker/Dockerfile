FROM openjdk:8-jdk-alpine
MAINTAINER Eugenio Garcia <egsmartin@gmail.com>
RUN  apk update && apk upgrade && apk add netcat-openbsd
RUN mkdir -p /usr/local/eurekaserver
ARG ARCHIVO_JAR
ADD ${ARCHIVO_JAR} /usr/local/eurekaserver/
ADD run.sh run.sh
RUN chmod +x run.sh
CMD ./run.sh