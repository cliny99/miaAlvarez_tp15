Micro desafío 1:

El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de películas. Quiere que mostremos que tenemos claro cómo hacer para exportar  importar nuestros propios módulos. Para ello, seguiremos los siguientes pasos:
1. En Visual Studio Code crear la carpeta de trabajo y dentro de ella inicializar un repositorio local y vincularlo con un repositorio remoto cuyo nombre debe tener la siguiente nomenclatura: nombreApellido_tp15
2. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un módulo que contiene una lista con algunas de nuestras películas favoritas. Para eso nos recomiendan crear un array de objetos literales. No olvides que este archivo es un módulo propio y por tal motivo una vez que se crea... ¿cuál debería ser nuestra última línea de código?
3. Por cada película se necesita conocer esta información:
    a. Identificador único de la película (id)
    b. Calificación por parte de los usuarios (rating)
    c. Premios (awards).
    d. Duración de la película (length).
    e. Precio (price).
    f. Género de la película (genre):
        i. Acción
        ii. Animación
        iii. Aventuras
        iv. Comedia
        v. Suspenso.

4. Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego, utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado con el detalle de cada una de nuestras películas favoritas.

Micro desafío 2 (opcional):

El Tech Leader está muy agradecido por todo el esfuerzo realizado en el desafío anterior. Ahora quiere saber si tenemos claro el uso de los módulos nativos de Node.JS. Por eso, nos encomienda la siguiente tarea:
1. En la carpeta ya creada, crea un nuevo archivo (mensaje.txt).
2. En el archivo creado, escribe el mensaje que quieras. Por ejemplo: “Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.”
3. Dentro del archivo (app.js), crea una variable a la que se le asigne la ruta del archivo (mensaje.txt) y luego llama al módulo nativo de Node.js que te permita leer el contenido del archivo (mensaje.txt).
4. Una vez leído, muestra al usuario por la consola el contenido del mismo.