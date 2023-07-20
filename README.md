# Red Social para Mujeres Latinas en el Exterior

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Investigación previa a la realización del proyecto](#3-Investigación)
* [4. Consideraciones generales](#4-Consideraciones-generales)
* [5. Historias de Usuario](#5-Historias-de-Usuario)
* [6. Proceso de diseño de la interfaz de usuario](#6-Proceso-de-Diseño-de-la-Interfaz-de-Usuario)
* [7. Estado del Proyecto](#8-Estado-del-Proyecto)
* [8. Autoras](#6-Autoras)

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas. A razón de ello, existen redes sociales de todo tipo y con diferentes
enfoques y para todo tipo de intereses.En este caso, el proposito de creación de nuestra
en con el fin de apoyar, acompañar y guiar a las mujeres latinas que se encuentran fuera de su país de origen.

## 2. Resumen del proyecto

En este proyecto se ha construido una Red Social para Mujeres Latinas en el Exterior sean hispano hablantes, angloparlantes o francofonas.
Al encontrarse, fuera de su país de origen pueden sufrir de depresión, tener problemas por el desconocimiento de la normativa legal, así como  problemas de adaptación.
Por lo que, en palabras del Dr. Guglielmo Schinina de la Organización Internacional para las Migraciones de las Naciones Unidas “Las y los migrantes están sujetos a factores generadores de estrés que guardan relación con las razones que los llevan a partir - incluyendo largos conflictos, violentos y sin resolver, la inseguridad de sus viajes, y la adaptación a medioambientes sociales y culturales nuevos. También hay niveles de estigmatización y criminalización en las comunidades receptoras en aumento. El estrés es una consecuencia normal de este tipo de entorno. Pero los altos y tóxicos niveles de estrés pueden derivar en depresión.”. Asimismo, de acuerdo con la Organización Mundial de la Salud, “el número total de personas que viven con depresión en el mundo es de 322 millones.” Este total constituye un número significativo en el contexto de la población mundial. Ante lo expuesto, esta Red Social propone el apoyo emocional generando un ambiente seguro para la mujer latina migrante y guia en el proceso de readaptación a una nueva cultura naciendo desde las aulas digitales de Laboratoria siguiendo el concepto de sororidad.

## 3. Investigación previa a la realización del proyecto

Para la realización del presente proyecto, se ejecuto una investigación aplicada al público objetivo.
Presentando un formulario especificando que fue realizado con fines educativos y de proyección social.
Tratando la identidad de las encuestadas de manera anónima, es decir, la identidad de quién completó
la encuesta fue desconocida por las investigadoras.
Esta encuesta consto de 10 preguntas, las 3 primeras para conocer a nuestras encuestadas como grado
de instrucción, estado civil y rango de edad. Las siguientes es para conocer su situación migratoria 
y su sentir sobre ello.  

* Ingrese su grado de instrucción (Seleccione una opción);
* Ingrese su estado civil (Seleccione una opción);
* Seleccione su rango de edad (Seleccione una opción);
* ¿En dónde se encuentra usted residiendo en este momento?;
* ¿Por qué usted decidió radicar en otro país diferente a su país de origen?;
* ¿Tuvo algún problema durante este proceso de adaptación a este nuevo ambiente?;
* En el país donde se encuentra residiendo, ¿Tiene usted comunidades donde pueda integrarse?;
* Cuando se mudó de país, ¿Siente que su vida social aumento o disminuyo?;
* ¿Cuáles redes sociales usted maneja? (Opciones múltiples);
* ¿Con que fines usa las redes sociales que marco en la pregunta anterior?.

Por lo que se obtuvo las siguientes respuestas.
En lo que respecta, su grado de instrucción la gran mayoría de las encuestadas cuenta con estudios superiores completos siendo el 46.2 %.
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/51fe8644-783a-4a42-9af4-30eebafb253f)

Así como que, la mayoría se encontraban casadas (46.2 %), siendo seguido por las solteras. 
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/7dbf87fc-7d62-4d48-8b11-f7a4086f67c1)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/f06ba8e8-3b1b-414e-a8ea-f7de2bc6d794)

De acuerdo a la encuesta, la mayoría de las migrantes eran peruanas
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/b42f33a7-6f80-4483-a9f7-cd4b4385270f)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/aca4bd4f-c3e2-45b0-9ef3-5efe560f623e)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/ded0d5bf-0b4e-4a9b-a5c3-00ac1ce5e26f)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/651f8027-cd3b-4806-bf45-b7a8eef65749)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/925641be-43f1-4739-98b7-ae3e9d5b56b8)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/cc7046aa-b904-4605-bbaa-51b44c19e2c1)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/6164cd9f-2991-4912-b94e-2bef50cf7149)
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/cd00fbc5-1433-4329-ae6f-68db0a43bda9)

## 4. Consideraciones generales

### Requerimientos Funcionales 
   - [ ] Desarrollar una SPA con temática de red social;
   - [ ] Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates);
   - [ ] Implementar un router para la navegación entre las diferentes vistas de la aplicación;
   - [ ] Emplear un servicio externo para la persistencia de datos de la aplicación;
   - [ ] Crear una suite de pruebas unitarias que permitan testear código asíncrono;
   - [ ] Los errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos;
   - [ ] Realizar validaciones, a razón que no pueden haber usuarios repetidos;
   - [ ] Separar la manipulación del DOM de la lógica (Separación de responsabilidades);
   - [ ] Contar con múltiples vistas. Para esto, tu aplicación debe ser una Single Page Application (SPA);
   - [ ] Alterar y persistir datos. Los datos que agregues o modifiques deberán persistir a lo largo de la aplicación. Te recomendamos que uses Firebase para eso también.
### Requerimientos no Funcionales
   - [ ] Mantener la paleta del color;
   - [ ] Mantener la jerarquía visual.

## 5. Historias de Usuario

Habiendo recopilado la información por medio de la encuesta realizada a nuestro público objetivo y los requerimientos solicitados por Laboratoria, definimos las siguientes historias de usuario:

       - Loguin de Usuarias;
       - Registro de Usuarias;
       - Recuperar contraseña;
       - Feed de Usuarias.
 A continuación, se detallaran cada una de las historias de usuario.Asimismo, se incluira en la descripción los críterios de aceptación y flujos correspondientes.

### Loguin de Usuarias

#### Descripción 
Yo como usuaria quiero loguearme de diversas formas ya sea creando mi cuenta en la misma página ingresando mi correo de registro y mi contraseña o con mi cuenta de google para poder hacer uso de las funcionalidades del sistema

#### Críterios de aceptación
- Criterios de aceptación 1: Ingreso exitoso
   - Cuando el ingreso del usuario y contraseña son correctos. Entonces permitirá el ingreso al sistema
- Criterios de aceptación 2: Ingreso fallido
   - Cuando el ingreso del usuario y/o contraseña son incorrectos. Entonces el sistema no permitirá el ingreso.Y el sistema
     presentará una alerta con el siguiente mensaje:  “Usuario y/o contraseña no válido, por favor recuerde que tiene 4 intentos
     para ingresar al sistema, luego de esto su usuario será bloqueado.”
- Criterios de aceptación 3: Último ingreso fallido
   - Cuando el ingreso del usuario y contraseña son incorrectos.Entonces el sistema No permitirá el ingreso. Y el sistema presentará
     una alerta  con el siguiente mensaje: “Su usuario se encuentra bloqueado, por favor
     contacte al administrador del sistema, o al teléfono xxxxxxxx  para que sean reestablecidos los accesos al sistema.”
- Criterios de Aceptación 4: Falta uno o más campos obligatorios
   - Dado que no se ingrese en el formulario alguno de los datos obligatorios. Cuando el usuario oprima el botón “Ingresar”. Entonces
     el sistema no permitirá el ingreso al sistema Y aparecerá el mensaje :“Por favor ingrese los campos obligatorios (*) faltantes : [Mail]/[Contraseña]“

#### Flujo
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/99ba9f10-96e7-48a6-bdde-83364721647c)

### Registro de Usuarias

#### Descripción
Yo como Usuaria, deseo Ingresar a la Red Social para poder hacer uso de las funcionalidades del sistema

#### Críterios de aceptación
- Criterios de aceptación 1: Registro exitoso
   - Cuando el ingreso de los datos completos del usuario(nombre, apellido, usuario, email, contraseña, validación de la contraseña).Entonces el sistema redicciona al login.
- Criterios de aceptación 2: Registro fallido
   - Cuando el ingreso de los datos completos del usuario(nombre, apellido, usuario, email, contraseña, validación de la contraseña).Y revisa los datos y compara el correo. Entonces el sistema muestra el mensaje 'Correo registrado'.
- Criterios de aceptación 3: Contraseña invalida
     - Cuando el ingreso de los datos completos del usuario(nombre, apellido, usuario, email, contraseña, validación de la contraseña).Y revisa los datos, compara la contraseña y compara la contraseña y esta es menos de 6 digitos. Entonces el sistema muestra el mensaje 'Contraseña debe tener mínimo 6 digitos'.
- Criterios de aceptación 4: Nombre de usuario existente
     - Cuando el ingreso de los datos completos del usuario(nombre, apellido, usuario, email, contraseña, validación de la contraseña).Y revisa los datos, compara el correo con la Base de datos.Entonces el sistema muestra el mensaje 'Usuario existente'.
#### Flujo
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/55816e13-3a82-4117-ac0b-90ecca5b44bf)

### Recuperar contraseña

#### Descripción 
Yo como Usuaria ,deseo Recuperar mi contraseña de mi a la Red Social para poder ingresar a las funcionalidades del sistema
#### Críterios de aceptación
- Criterios de aceptación 1: Correo de recuperación
   - Cuando el ingreso el correo de recuperación.Entonces el sistema me envia un mail de recuperación.
#### Flujo
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/3e161d27-c24b-4de2-91c2-ea5e9e28c9cf)

### Feed de Usuarias

#### Descripción 
Yo como usuaria quiero crear un post y a ese post deseo editarlo, eliminarlo. Asimismo, quiero reportar los post de otras usuarias que pueden molestar a la comunidad.
#### Críterios de aceptación
- Criterios de aceptación 1: Crear post
   - Despues del loguin ingreso a la pantalla del /Feed.Cuando publico un post puedo ver el último post publicado. El orden de los post es de forma ascendente.
- Criterios de aceptación 2: Editar post
   - Despues del loguin ingreso a la pantalla del /Feed.Cuando edito un post puedo seleccionar el boton editar y el post se reubica en la casilla de publicar.Una vez editado, puedo publicarlo nuevamente y el orden de los post es de forma ascendente.
- Criterios de aceptación 3: Eliminar post
   - Despues del loguin ingreso a la pantalla del /Feed.Cuando edito un post puedo seleccionar el boton eliminar que se encuentra debajo del boton editar y aparece en un mensaje de validación. Al ser aceptado, el ultimo post publicado se ubica en orden de forma ascendente.
- Criterios de aceptación 4: Reportar post
     - Cuando otro post de una usuaria no cumple las normas de la comunidad puedo reportarlo.

## 6. Proceso de diseño de la interfaz de usuario

### Prototipos
#### Prototipos de baja fidelidad
#### Prototipos de alta fidelidad
#### Paleta de color

![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/e47a1097-76e8-476b-9b99-0fe8d6dca0dd)

![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/548632fa-55e3-41ae-b829-57fca2ad912b)

#### Diseño responsivo

#### Pruebas de Usabilidad




## 7. Estado del Proyecto
 Gestión de proyecto y distribución de actividades fue en trello:
 ![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/a1c9a5df-85ca-4a8d-9be5-6a392375e3a8)

 Tecnologias utilizadas en el proyecto "Warmi" :
  ![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/df3ebf77-116d-4a65-984c-7b4c38116f7a)

 

## 8. Autoras

El presente proyecto ha sido desarrollado por Erika Nagaki, Tatiana Hernandez y Roxi Ochoa.



