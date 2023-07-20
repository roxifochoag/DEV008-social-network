# Red Social para Mujeres Latinas en el Exterior

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Investigación previa a la realización del proyecto](#3-Investigación)
* [4. Consideraciones generales](#4-Consideraciones-generales)
* [5. Historias de Usuario](#5-Historias-de-Usuario)
* [6. Proceso de diseño de la interfaz de usuario](#6-Proceso-de-diseño-de-la-interfaz-de usuario)
* [7. Pruebas Unitarias](#7-Pruebas-Unitarias)
* [8. Estado del Proyecto](#8-Estado-del-Proyecto)
* [9. Autoras](#6-Autoras)

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
![image](https://github.com/roxifochoag/DEV008-social-network/assets/46870050/7e83da75-6cf4-47ba-82be-67f29d3a3310)
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

## 6. Proceso de diseño de la interfaz de usuario

## 7. Pruebas Unitarias

## 8. Estado del Proyecto

## 9. Autoras



