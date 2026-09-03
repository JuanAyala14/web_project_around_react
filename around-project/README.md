# Around The U.S.

Aplicación web tipo galería de fotos donde el usuario puede gestionar su perfil (nombre, profesión y avatar) y una colección de lugares/tarjetas, cada una con imagen, nombre, botón de "like" y opción de eliminar. Construida como proyecto de práctica de React, migrando una versión previa del proyecto hecha en HTML/CSS/JS puro a componentes de React.

## Funcionalidades

- Editar el nombre y la profesión del perfil.
- Editar el avatar del perfil.
- Agregar nuevas tarjetas (lugar + imagen).
- Ver una vista ampliada de la imagen de cada tarjeta en un popup.
- Dar "like" a una tarjeta y eliminarla.
- Todas las acciones anteriores se manejan mediante ventanas emergentes (popups) reutilizables.

## Tecnologías usadas

- [React 19](https://react.dev/) — construcción de la interfaz mediante componentes.
- [Vite](https://vite.dev/) — servidor de desarrollo y bundler.
- [ESLint](https://eslint.org/) — análisis estático de código.
- CSS puro (organizado por bloques en `src/blocks`), siguiendo una metodología similar a BEM.
- JavaScript (ES Modules) / JSX.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
- npm (se instala junto con Node.js).

## Instalación

1. Clona o descarga este repositorio.
2. Entra a la carpeta del proyecto:
   ```bash
   cd around-project
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Esto levanta un servidor local con recarga en caliente (HMR) y abre la aplicación automáticamente en el navegador, normalmente en `http://localhost:3000`.

## Otros comandos disponibles

- **Compilar para producción:**
  ```bash
  npm run build
  ```
  Genera la versión optimizada del proyecto en la carpeta `dist`.

- **Previsualizar la versión de producción:**
  ```bash
  npm run preview
  ```

- **Revisar el código con ESLint:**
  ```bash
  npm run lint
  ```

## Estructura del proyecto

```
around-project/
├── public/              # Archivos estáticos
├── src/
│   ├── blocks/           # Estilos CSS organizados por bloque
│   ├── components/       # Componentes de React (Header, Main, Footer, Card, popups, etc.)
│   ├── images/            # Imágenes usadas en la interfaz
│   ├── vendor/            # Fuentes y estilos de terceros
│   ├── main.jsx           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales
├── index.html
├── package.json
└── vite.config.js
```
