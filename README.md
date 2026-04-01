# 🍔 Chest-Bread

> SPA de fast food desarrollada con React, Vite y Tailwind CSS como proyecto de portfolio frontend.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white&style=flat-square)
![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=flat-square)

---

## 📋 Descripción

Chest-Bread es una aplicación web de una sola página (SPA) para una tienda de comida rápida. Permite a los usuarios explorar el menú, agregar productos al carrito y enviar su pedido directamente al negocio vía WhatsApp, incluyendo el detalle de productos, dirección de entrega y método de pago.

**El proyecto no procesa pagos** — al finalizar el pedido, el usuario es redirigido a WhatsApp con el resumen completo listo para enviar.

---

## ✨ Funcionalidades

- **Menú completo** con búsqueda en tiempo real (debounce 300ms), filtros por categoría y ordenamiento por precio
- **Carrito de compras** persistente en `localStorage` — sobrevive recargas de página
- **Formulario de pedido** con validación de nombre, dirección y método de pago (Efectivo, Yape, Tarjeta)
- **Integración con WhatsApp** — genera un mensaje estructurado con el pedido completo y abre WhatsApp automáticamente
- **Toast notifications** para feedback visual de éxito y error
- **SEO por ruta** con `react-helmet-async` — cada página tiene su propio `title` y `meta description`
- **Diseño responsive** — mobile first, con drawer lateral en mobile y navbar pill en desktop

---

## 🛠️ Stack tecnológico

| Tecnología             | Uso                                          |
| ---------------------- | -------------------------------------------- |
| **React 18**           | Librería UI                                  |
| **Vite 5**             | Bundler y dev server                         |
| **Tailwind CSS 4**     | Estilos utilitarios                          |
| **React Router v6**    | Enrutamiento SPA                             |
| **Zustand**            | Estado global (carrito y formulario de pago) |
| **react-hot-toast**    | Notificaciones                               |
| **react-helmet-async** | SEO dinámico por ruta                        |
| **Swiper**             | Slider del hero                              |

---

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes globales reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/              # Átomos: Logo, SubTitle, Container, Seo
├── features/            # Módulos por página
│   ├── home/
│   │   ├── components/  # Subcomponentes internos
│   │   └── modules/     # Secciones de la página
│   ├── menu/
│   ├── cart/
│   ├── about-us/
│   └── not-found/
├── store/               # Estado global con Zustand
│   ├── cart.store.js
│   ├── payment.store.js
│   └── products.store.js
├── hooks/               # Custom hooks
│   └── useWhatsApp.jsx  # Lógica de validación + mensaje + WhatsApp
├── data/                # Data estática de productos y categorías
├── helpers/             # Utilidades (formatterPrice, formatterText)
├── router/              # Configuración de React Router
├── layout/              # MainLayout con Navbar + Footer + Toaster
└── styles/              # CSS global, variables, tipografía, keyframes
```

---

## 🗺️ Rutas

| Ruta        | Página   | Descripción                                   |
| ----------- | -------- | --------------------------------------------- |
| `/`         | Home     | Hero, categorías, about us y contacto         |
| `/menu`     | Menu     | Catálogo con búsqueda, filtros y ordenamiento |
| `/about-us` | About Us | Historia, valores y equipo                    |
| `/cart`     | Cart     | Resumen del pedido y formulario de envío      |
| `*`         | 404      | Página de error                               |

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/chest-bread.git
cd chest-bread

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

---

## 📱 Flujo del pedido

```
Usuario explora el menú
        ↓
Agrega productos al carrito
        ↓
Va al carrito y revisa el resumen
        ↓
Completa nombre, dirección y método de pago
        ↓
Clic en "Send Via WhatsApp"
        ↓
Se abre WhatsApp con el pedido pre-armado
        ↓
Usuario envía el mensaje al negocio
```

---

## 🧠 Decisiones técnicas destacadas

**Zustand con `persist` y `partialize`** — Solo se persiste el array `cart` en `localStorage`, no las acciones del store. Esto evita guardar funciones serializadas y mantiene el estado limpio entre sesiones.

**Debounce manual en productos** — En lugar de usar una librería externa, el `useProductsStore` implementa debounce con `setTimeout` y `clearTimeout`. Reduce re-renders al escribir en el buscador sin añadir dependencias.

**Separación `components/` + `modules/` dentro de cada feature** — Los `components/` son subcomponentes reutilizables dentro de la feature, los `modules/` son las secciones completas que componen la página. Facilita la escalabilidad sin mezclar responsabilidades.

**`useWhatsApp` como hook autocontenido** — Centraliza validación, construcción del mensaje, apertura de WhatsApp y feedback visual (toast). El componente `Order.jsx` solo llama a `sendOrder()` sin conocer la lógica interna.

---

## 📊 Lighthouse Score (estático)

| Categoría      | Score |
| -------------- | ----- |
| Performance    | 85    |
| Accessibility  | 97    |
| Best Practices | 100   |
| SEO            | 97    |

---

## 👨‍💻 Autor

Desarrollado por **Alejandro Cruzado** como proyecto de portfolio frontend.

---

## 📄 Licencia

Este proyecto es de uso educativo y de portfolio. No está destinado a uso comercial.
