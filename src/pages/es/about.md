---
layout: '@layouts/DocsPage.astro'
title: Acerca de Amethyst y K2VR
locale: es
setup: | 
  import Accordion from '@components/Accordion.astro'
---
# Acerca de Amethyst y K2VR
## La historia
El equipo y proyecto K2VR fue originalmente empezado por [sharkyh20](https://github.com/sharkyh20) para seguimiento de cuerpo completo con Kinect y PS Move, hecho en parte como alternativa a las aplicaciones de pago.

Por temas de la vida real, Sharky dejó el proyecto, dejándolo desatendido durante un largo tiempo. Por alguna razón, yo (Aurora), cogí las riendas del proyecto y empecé a ofrecer soporte a usuarios, eventualmente acabando con un instalador primitivo, juntándome con [Akaya](https://github.com/KimihikoAkayasaki), que en ese tiempo habia hecho un *fork* de el proyecto para usarlo en un proyecto de guantes RV con Arduino.

Los esfuerzos de Akaya para arreglar el código de KinectToVR para su propio uso acabó en una nueva versión de la app. Ya que no teníamos una respuesta definitiva a si Sharky reasumiría el proyecto, llamamos a esta version de la aplicación KinectToVR EX, abreviado como K2EX. EX significaba "extra" o "extended" (extendido), ya que añadia funciones al trabajo original de Sharky.

Han pasado años, y una página web oficial, instalador personalizado gráfico, múltiples actualizaciónes anuales de gran escala, hemos llegado hasta hoy en día.

## Que es Amethyst?
Amethyst es una plataforma modular con soporte para [extensiones de dispositivos](app/overview#4) que [puedes escribir tu mismo](https://github.com/KinectToVR/K2TrackingDevice-Samples) si sabes C++. Por defecto viene con extensiones para el Kinect de Xbox 360, el Kinect de Xbox One, PSMoveService(EX) y owoTrack.

Prácticamente es una desviación completa de la aplicación KinectToVR original.

Durante casi todo el tiempo que K2EX ha existido, Akaya llevaba trabajando en [una versión ya abandonada de la aplicación usando Qt](https://github.com/kinecttovr/k2vr-application) como proyecto aparte, con la intención de que eventualmente reemplazara a la aplicación principal. Mucho del trabajo de esta nueva versión no fue en vano. De él fué creada la [K2API](https://github.com/KinectToVR/K2TrackingDevice-Samples/blob/main/DEVICES.md), que proporciona las interfaces necesitadas para que cualquier aplicación se comunique con el controlador de SteamVR, además de mucho de el código base para controlar Kinects.

Despues de que haya muchos problemas por parte de Qt, Akaya lo abandonó y empezó a trabajar en una nueva "revisión super secreta de KTVR" usando [WinUI 3](https://docs.microsoft.com/en-us/windows/apps/winui/) de Microsoft para la interfaz.

Originalmente llamada KinectToVR 1.0, fue dada el nombre en clave de Amethyst. *Se me ocurrió ese nombre en unos 30 segundos. Solo estaba destinado a ser un nombre en clave para referirnos a la aplicación internamente sin que nos confundieramos.*

Eventualmente me dí cuenta que considerando el salto pequeño en número de version, solo de 0.9 a 1.0, los usuarios tál vez no se darían cuenta de que es una aplicación completamente nueva. Y así el nombre Amethyst fue asignado al proyecto WinUI 3 entero. A su vez fue dado una nueva capa de pintura en el logo "puntos". Tambíen resulta que la gente no escribe mal tanto Amethyst como lo hacían con KinectToVR.  

## Donde nos encontramos ahora?
Ahora, **la aplicación se llama Amethyst, y esta creada por el equipo K2VR Team.** El soporte se da en el servidor de Discord K2VR Community. La aplicación y su documentación se encuentran en la página web k2vr.tech, y la aplicación usada para instalar Amethyst se llama Amethyst Installer. 

Asi que, en resumen:
Cuando hablas sobre la aplicación: Amethyst
Cuando hablas sobre el proyecto: K2VR

## Quién es esa chica?
Esa es Violet, la mascota de K2VR y Amethyst. Ya que Amethyst es una aplicación de seguimiento de cuerpo, tenía sentido que nosotros tengamos una mascota para ayudar a crear demonstraciónes del seguimiento en una forma que sea consistente con el resto de nuestra marca.

Puedes verla haciendo unos trucos impresionantes en la página principal de la página web, saludándote en el instalador de Amethyst y en el asistente de configuración la primera vez que abres la app. También esta en la ventana de calibración, para mostrarte una guía visual de como moverte por tu aréa de juego. También es nuestro robot de soporte en Discord.

## Por qué desarrollar seguimiento con Kinect? No es una tecnología muerta?
Entiendo porqué alguien pensaría eso, pero la realidad es que sobre los años, con diferentes ideas, innovaciones, etc. hemos podido sacar mucho partido de este hardware envejecido, le da a mucho silicio existente una nueva vida, y hace a personas felices.

No voy a ocultar que a veces duele tener que tratar con los controladores antiguos para el Kinect, tienen muchos bugs y son la fuente de los problemas de muchos de nuestros usuarios. Pero cuando la gente entra en el servidor de Discord y nos cuenta la diversión que han pasado con su Kinect, hace que merezca la pena. Tener seguimiento de cuerpo en RV es una de las experiencias mas inmersivas, y podemos ofrecerlo gratis o casi gratis a cualquier persona.

El Kinect ya es mucho mejor de lo que debería ser un sensor de 30 dólares de 2010. Y todavía no hemos acabado. Ya que nada ha sido confirmado todavía, no revelaré planes futuros, pero espera por cosas muy guays de nosotros.

## Aceptaís donaciones?
Sí, [aquí mismo](https://opencollective.com/k2vr) en nuestra página OpenCollective. Puedes hacer donaciónes mensuales o de una sola vez.

El dinero irá a costes de alojamiento y dominio, comprar hardware para que nuestros miembros de el equipo prueben cosas más rapido, y compensar el trabajo voluntariado de todos que han hecho estos años.

Los donadores serán dados un rol permanente en el servidor de Discord y tendrán su nombre listado en la página de créditos de la aplicación. (Puedes escoger no ser listado si quieres conservar el anonimato)