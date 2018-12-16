# Introduction
We implement two set of applications. One application is based on several Spring Boot MiSe. They show how to use Spring Stream with Kafka, and also how to pack the MiSe in a docker image, suing the Spotify Maven plugin to create the images. The different MiSes are started using docker-compose.

The second application implements a NodeJS MiSe that uses a Mongo backing service. Both are packed on a Docker image

## Spring Boot MiSe
Demonstrates how to use Spring Cloud Stream messaging to asynchronously communicate messages between Spring Boot services. We will use Kafka as our message bus to transport messages between our services.

1.  A Spring Cloud Config server that is deployed as Docker container and can manage a services configuration information using a file system or GitHub-based repository.
2.  A Eureka server running as a Spring-Cloud based service.  This service will allow multiple service instances to register with it.  Clients that need to call a service will use Eureka to lookup the physical location of the target service.
3.  A Zuul API Gateway.  All of our microservices can be routed through the gateway and have pre, response and
post policies enforced on the calls.
4.  A organization service that will manage organization data used within EagleEye.
5.  A new version of the organization service.  This service is used to demonstrate how to use the Zuul API gateway to route to different versions of a service.
6.  A special routes services that the the API gateway will call to determine whether or not it should route a user's service call to a different service then the one they were originally calling.  This service is used in conjunction with the orgservice-new service to determine whether a call to the organization service gets routed to an old version of the organization service vs. a new version of the service.
7.  A licensing service that will manage licensing data used within EagleEye.
8.  A Postgres SQL database used to hold the data for these two services.
9.  A Kafka message bus to transport messages between services.
10. A Redis service to act as a distributed cache.


## NodeJs MiSe (Microservice)
The Microservice uses a Mongo backing service also provided on a docker image. The docker-compose yml defines the two containers that are required, the one to build the image - using a docker file - for the NodeJS MiSe, and the image - to be fetched from a remote docker repository - that implements the Mongo backing service


# Running the services

## Spring Boot
Now we are going to use docker-compose to start the actual image.  

   **docker-compose -f docker/common/docker-compose.yml up**

If everything starts correctly you should see a bunch of Spring Boot information fly by on standard out.  At this point all of the services needed for the chapter code examples will be running.

## NodeJS

# Miscelanea
## Docker Compose
In docker-compose you can see how the environment variables are set, and in particular the one for the ENCRYPT_KEY.

## Dockerfile
On the docker file for the Configuration Server you can actually see some specifics to show how the security policies are set.

## Docker Setup
Docker has to be set up in the computer that is creating and pushing the images to the docker repo. That means that the docker daemon has to be enabled and listening on the default port. In Windows this is done in the Docker settings, General, and then selecting "Expose daemon on tcp://localhost:2375 without TLS"

## Maven Default Lifecycle Phases
validate
generate-sources
process-sources
generate-resources
process-resources
compile
process-classes
generate-test-sources
process-test-sources
generate-test-resources
process-test-resources
test-compile
test
prepare-package (maven 2.1+)
package
pre-integration-test
integration-test
post-integration-test
verify
install
deploy