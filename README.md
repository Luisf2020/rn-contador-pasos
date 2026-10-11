# rn-contador-pasos

![stack: React Native](https://img.shields.io/badge/stack--React%20Native-0d9488?style=flat-square) ![stack: Expo](https://img.shields.io/badge/stack--Expo-0d9488?style=flat-square) ![stack: JavaScript](https://img.shields.io/badge/stack--JavaScript-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

App React Native (Expo) con componente controlado y accesibilidad basica.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Manejar un contador entre pantalla y componente sin que el estado quede duplicado.

## Solucion implementada

Componente controlado (props + onChange) y pantalla que concentra el estado; anade etiquetas de accesibilidad.

### Funcionalidades principales

- Componente controlado reutilizable
- accessibilityLabel dinamico
- Estilos con StyleSheet
- Estructura lista para Expo

## Stack

- React Native
- Expo
- JavaScript

## Estructura

```
App.js                    # pantalla
components/StepCounter.js # componente controlado
index.js
```

## Puesta en marcha

```bash
npm install
npm start
```

## Complejidad del proyecto

**Nivel: Principiante** — Un componente y una pantalla; sin navegacion compleja ni integraciones.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

App movil (Expo); se ejecuta en dispositivo o emulador, no como web.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
