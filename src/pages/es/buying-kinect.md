---
layout: '@layouts/DocsPage.astro'
title: Getting a Kinect and adapter
locale: es
setup: | 
  import CardTip from '@components/CardTip.astro'
  import Accordion from '@components/Accordion.astro'
---
# Obteniendo un Kinect y su adaptador
Cuando uses Amethyst, probablemente uses un Kinect. Soportamos otros dispositivos, pero el 99% de usuarios están interesados en usar la aplicación para seguimiento con Kinect.

Si has venido hasta aquí, es porque todavía no tienes un Kinect, y quieres saber qué comprar y donde hacerlo. Hay algunas recomendaciones y advertencias que deberías seguir, es fácil acabar pagando demasiado, o comprando hardware que no funcione.

## Deberías comprar un Kinect?
Hay algunas otras opciones, como SlimeVR, Apriltag, rastreadores Vive o PS Move. **Los Kinects son baratos, pero tienen algunos límites que tal vez te hagan reconsiderar.**
- El seguimiento de lado es casi inexistente.
- Cualquier pose que haga que tu cabeza este debajo de tu cintura, como hacer el pino, breakdance, volteretas, etc. no se pueden hacer.
- La rotación de articulaciones está lejos de ser perfecta, a no ser que proporciones datos externos de dispositivos compatibles.
- Lo más importante, necesitas un área grande.

Con el Kinect de Xbox 360, **necesitas estar a por lo menos 1.5 metros** para que funcione el seguimiento, y preferiblemente a 2 metros para el mejor seguimiento.

**Con el Kinect de Xbox One, es más bien 1.2 metros mínimo**, y 1.8 metros preferiblemente.

También necesitas colocar el Kinect **donde te pueda ver a nivel de ojo**, y conectarlo a tu PC (El cable es de unos 3 metros (9 pies) y el adaptador añade otros 30 centímetros (1 pie)).

Y si eso no fuera lo gracioso suficiente, el Kinect, especialmente el de Xbox One, **necesita mucho ancho de banda USB.**

Generalmente, si tienes un ordenador con AMD Ryzen es lo más probable que te funcione. **Los portatíles y Quest 2 con Oculus Link son dos cosas notables que pueden causar problemas.** Si no estás seguro, [únete al Discord](https://discord.gg/YBQCRDG) y pregúntanos allí.

## Que Kinect deberías comprar?
**En la mayoría de casos, la respuesta será comprar un Kinect de Xbox 360,** por razónes detalladas [en esta página](one/common-issues).

<Accordion title="Problemas comúnes del Kinect de Xbox One">
El Kinect de Xbox One cuesta bastante mas que el de Xbox 360, y aparte de un campo de visión mayor, distancia minima requerida más baja y una cámara color 1080p, no hace seguimiento mejor o más rapido que el Kinect de Xbox 360. También sufre de muchos problemas con USB 3, ancho de banda, compatibilidad con diferentes chipsets y rompe el seguimiento con cascos y mandos que usen estaciones base (ej. Vive, Index, Pimax). 
</Accordion>

Si tienes un área mas pequeña, y solo puedes colocarte a unos 1.5 metros, y estás seguro de que tienes el ancho de banda USB para correr un Kinect de Xbox One, entonces tal vez considéralo. Pero si no, no lo hagas.

## Dónde compro el Kinect?
Si estás en España (península y Islas Canarias), México, Portugal, Italia, Países Bajos, Polonia, Australia o Irlanda: [vete aquí](https://webuy.com/boxsearch?stext=kinect), ni siquiera preguntes. **Los Kinects vendidos en CeX siempre funcionan.**, los adaptadores son comprobados, y hay garantía. Su precio también es imbatible. También significa que puedes ignorar la parte entera sobre adaptadores más abajo en esta página.

Si no, mira en eBay o páginas de compra/venta locales. **Cualquier Kinect que veas en Amazon probablemente cueste demasiado.**

<CardTip title="Cómo encontrar Kinects baratos">
Si buscas por erratas comunes de Kinect como "xbox connect", "konect", "kinnect" o similares, muchas veces encontrarás listados de gente que le falta educación en el dinero y en cómo escribir :).
</CardTip>

## Dónde compro el adaptador?
**Comprálo en eBay, por favor.** Tenemos con buenas pruebas, que a todos los usuarios que les llegó un adaptador que no funciona, lo compraron en Amazon. Sé que a algunas personas no les gusta usar eBay por experiencias pasadas, pero **sólo hemos tenido buenas reacciones de gente que uso eBay en nuestro servidor de Discord.**

Dependiendo de donde vivas, el link a eBay cambiará, pero sólo **abre la página principal y busca "adaptador kinect 360" o en inglés "kinect 360 adapter"** y escoge el primer o segundo resultado. Cual tenga envio mas barato, o si quieres recibirlo más rápido, cómpralo de un vendedor que se localice en tu país. 

Cuando lleguen las cosas, vete a una de las siguientes páginas, según que Kinect tengas:  
[Configurando tu Kinect de Xbox 360](360/setup)  
[Configurando tu Kinect de Xbox One](one/setup)