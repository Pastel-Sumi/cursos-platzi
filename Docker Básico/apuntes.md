# [Curso de Docker: Fundamentos](https://platzi.com/cursos/docker-fundamentos/)

### ¿Qué es realmente un contenedor en Docker?
Aunque pueda confundirse con máquinas virtuales, un contenedor es algo distinto: es un espacio aislado donde empaquetas toda tu solución, incluyendo dependencias y configuraciones. Esto permite que el proyecto, al transportarse de un lugar a otro, funcione exactamente igual sin importar factores externos, como el sistema operativo o ambiente.

Gracias al docker *daemon*, o el corazón de Docker, puedes gestionar eficazmente:

* Redes.
* Volúmenes.
* Imágenes previas necesarias para crear nuevos contenedores.

### ¿Qué diferencia a Docker de otros conceptos tecnológicos?
A menudo se mezclan términos como microservicios, Kubernetes y Docker, pensando equivocadamente que son sinónimos. En realidad, estas tecnologías tienen definiciones y aplicaciones particulares que, aunque participen integradas en ciertos procesos, presentan diferencias considerables entre ellas.

Docker te permite específicamente crear y gestionar contenedores individuales. Mientras que *Kubernetes* se centra en la gestión, orquestación y despliegue de múltiples contenedores dentro de infraestructuras más grandes. Por su parte, los microservicios describen un estilo arquitectónico en el que las aplicaciones se componen de módulos pequeños e independientes.

### ¿Qué ventajas tienen las máquinas virtuales frente a los contenedores?
Las máquinas virtuales constituyen plataformas ideales para profundizar en conocimientos específicos sobre sistemas operativos y hardware. Sus principales ventajas incluyen:

* **Entornos ideales para aprendizaje:** permiten experimentar ampliamente con sistemas operativos sin temor a afectar el sistema real.
* **Uso de hardware real dedicado:** asignan secciones físicas de tu computadora específicamente para el uso en entornos virtualizados, como disco duro o memoria RAM.
* **Simulaciones seguras:** útiles para practicar temas sensibles como ciberseguridad, donde errores o ataques no afectan los recursos principales.
* **Facilidad para respaldar configuraciones:** permiten múltiples copias de seguridad del entorno entero, facilitando la restauración y clonación del sistema configurado.

### ¿Cuáles son las fortalezas específicas de los contenedores Docker?
La contenerización mediante Docker redefine completamente la forma en que se distribuye y ejecuta el entorno de software, ofreciendo ventajas sustanciales sobre métodos tradicionales. Entre ellas:

* **Uniformidad absoluta del entorno:** los contenedores garantizan que todos los desarrolladores trabajen exactamente bajo las mismas condiciones.
* **Bajo requisito de hardware:** requieren significativamente menos recursos que las máquinas virtuales, facilitando soluciones complejas en equipos menos poderosos.
* **Escalabilidad simplificada:** debido a su naturaleza compacta, estos entornos permiten una escalabilidad flexible, adaptada tanto a necesidades específicas del software como a presupuestos variables.
* **Facilidad para microservicios:** Docker apoya la fragmentación de aplicaciones en soluciones más pequeñas (microservicios), facilitando la administración y actualización por módulo.

### ¿Cómo difiere el aislamiento entre máquinas virtuales y Docker?
La diferencia central entre ambas tecnologías radica en cómo gestionan el aislamiento de los entornos de trabajo:

* **Máquinas virtuales:** su aislamiento comienza desde el nivel de hardware, pasando por el sistema operativo y llegando al software, requiriendo múltiples capas dependientes entre sí.
* **Contenedores Docker:** su aislamiento es más eficiente, pues no dependen directamente del hardware ni del sistema operativo anfitrión, funcionando independientemente sin necesidad de instalaciones adicionales.

### Sección de contenedores
Aquí visualizarás y gestionarás los diversos contenedores que crearás progresivamente mientras utilizas Docker.

## Sección de imágenes
Está organizada en tres categorías principales:

* **Locales:** imágenes almacenadas directamente en tu equipo.
* **Remotas:** imágenes alojadas en Docker Hub.
* **Artefactos:** en estado "Early Access", destinadas a colecciones y análisis mediante la herramienta Docker Scout.

### Sección de Ambientes de Desarrollo (Dev Environments)
Son entornos que unifican versiones y herramientas utilizadas por los desarrolladores, garantizando coherencia en los proyectos. Actualmente en versión beta, promete ser de gran relevancia próximamente.

### Volúmenes en Docker
Son espacios de almacenamiento que funcionan como enlaces entre tu sistema operativo real y los contenedores Docker. Cualquier cambio en estos volúmenes es reflejado simultáneamente en ambos entornos, facilitando la gestión de archivos compartidos.

### ¿Qué información relevante aporta docker info?
Con el comando:
```docker
    docker info
```
Puedes acceder a detalles importantes sobre el hardware disponible o asignado a Docker en tu sistema. Muestra especificaciones relevantes como la memoria, procesador y GPU disponibles, información útil para decidir futuros ajustes en tu equipo.

### ¿Cuáles son los comandos básicos equivalentes a Docker Desktop?
Docker Desktop tiene una interfaz visual amigable, pero es fundamental conocer su equivalente en línea de comandos. Estos son algunos ejemplos clave que puedes memorizar:

* **Listar imágenes disponibles:**
    ```docker
    docker images
    ```
* **Ver contenedores activos:**
    ```docker
    docker ps
    ```
* **Explorar opciones de comandos específicos con ayuda:**
    ```docker
    docker images --help
    ```
Estos comandos ofrecen funcionalidades equivalentes a las categorías gráficas, simplificando el intercambio entre interfaz gráfica y terminal.

### ¿Por qué aprovechar la documentación integrada de Docker?
Docker facilita una documentación integrada extensa y clara a través del comando `docker help` o añadiendo `--help` tras comandos específicos. Es particularmente útil cuando trabajas con comandos complejos como:

* `docker build:` Crea imágenes a partir de archivos Dockerfile.
* `docker run:` Ejecuta contenedores a partir de imágenes disponibles.

Ambos comandos tienen múltiples parámetros, pero la documentación proporcionada al utilizar `--help` facilita enormemente entender cada opción y explicación disponible.

## Comandos para imagenes

* Construir una imagen a partir de un archivo Dockerfile:

    `docker build -t <nombre_de_imagen>`

* Construir una imagen desde un archivo Dockerfile sin la caché:

    `docker build -t <nombre_de_imagen> . -no-cache`

* Listar imágenes locales:

    `docker images`

* Eliminar una imagen:

    `docker rmi <nombre_imagen>`

* Eliminar todas las imágenes no utilizadas:

    `docker image prune`

## Comandos para contenedores

* Crea y ejecuta un contenedor a partir de una imagen, con un nombre personalizado:

    `docker run --name <nombre_contenedor> <nombre_imagen>`

* Ejecutar un contenedor con y publicar un puerto(s) del contenedor al host.

    `docker run -p <puerto_host>:<puerto_contenedor> <nombre_imagen>`

* Ejecutar un contenedor en segundo plano:

    `docker run -d <nombre_imagen>`

* Iniciar o detener un contenedor existente:

    `docker start|stop <nombre_del_contenedor> (o <id_del_contenedor>)`

* Eliminar un contenedor detenido:

    `docker rm <nombre_del_contenedor>`

* Abrir un shell dentro de un contenedor en ejecución:

    `docker exec -it <nombre_del_contenedor> sh`

* Obtener y seguir los logs de un contenedor:

    `docker logs -f <nombre_contenedor>`

* Inspeccionar un contenedor en ejecución:

    `docker inspect <nombre_del_contenedor> (o <id_del_contenedor>)`

* Para listar los contenedores actualmente en ejecución:

    `docker ps`

* Listar todos los contenedores docker (en ejecución y parados):

    `docker ps --all`

* Ver las estadísticas de uso de recursos:

    `docker container stats`