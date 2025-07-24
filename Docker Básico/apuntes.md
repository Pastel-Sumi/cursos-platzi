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