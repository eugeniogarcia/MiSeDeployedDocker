#Podemos crear el contenedor de mongo con este conmando.
docker run -it -v c:/Temp/data/catalogue_db:/data/catalogue_db -p 27017:27017 mongo:3.6.2
#tambien podemos ejecutarlo desatachado
docker run -d -v c:/Temp/data/catalogue_db:/data/catalogue_db -p 27017:27017 mongo:3.6.2

#Con esto ya podriamos ejecutar nuestro MiSe


#Para construir el contenedor para el MiSe:
docker build -t egsmartin/mirepositorio:MiSe .

#Con esto subimos la imagen a mi repositorio (esto es opcional
docker push egsmartin/mirepositorio:MiSe

#Podemos arrancar el contenedor (detachado)
docker run -P egsmartin/mirepositorio:MiSe
docker run -p 3000:3000 egsmartin/mirepositorio:MiSe

#El problema es que como tiene que haber comunicación entre los dos contenedores, hay que hacer alguna configuración. Para evitarlo podemos usar docker-composer:
#Crea los dos contenedores, y los arranca en modo desatachado
docker-compose up -d

#Si tuvieramos que reconstruir las imagenes podriamos hacer
docker-compose build
docker-compose run -d