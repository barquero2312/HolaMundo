---
title: build image and execute project
subtitle: build
author: Jafet Barquero
---

## Para crear la imagen en el docker es necesario ejecutar el siguiente comando en la consola de Visual Studio.

  `docker build -t testnode . `

## Una vez completa la creacion de la imagen es necesario abrir una consola para realizar la consulta al docker para visualizar si la imagen se ha creado esta funcionando correctamente.

  `docker images`

## Obtendremos respuesta por parte del docker y podremos ver la imagenes descargadas

**Ejemplo: ** 

|REPOSITORY  |      TAG |      IMAGE ID   |    CREATED   |       SIZE  |
|  --------  | -------- |   --------      |   ------     | -------     |
|testnode   |              latest  |  45a4fcb09a93 |  11 seconds ago |  176MB |

## Debemos ejeutar el siguiente comando para poder iniciar y crear el contenedor que almacenara la imagen que hemos construido

  `docker run --name prueba1 -p 5000:3000 testnode`

## Recibiremos un console.log con el siguiente mensaje

  `Example app listening on port 3000`

## Para realizar la prueba en el servidor local. Solamente seria necesario ingresar al navegador y ejecutar el localhost en el puerto 5000.
 
  `localhost:5000`

 ### En seguida podremos observar el codigo en ejeccución 
