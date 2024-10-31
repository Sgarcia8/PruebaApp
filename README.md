# PruebaApp

CRUD para manejo de productos y marcas usando laravel y nextjs

## Tecnologías Usadas

Este proyecto utiliza las siguientes tecnologías:

- **Next.js**: Un framework de React para la creación de aplicaciones web escalables y eficientes.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Axios**: Cliente HTTP para hacer solicitudes a APIs.
- **Tailwind CSS**: Framework CSS para un diseño rápido y personalizable.
- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Laravel**: Framework PHP para el desarrollo de aplicaciones web.
- **mysql**: Base de datos SQL para almacenar datos de forma eficiente.

## Instalación

Para instalar el proyecto, sigue los siguientes pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Sgarcia8/PruebaApp.git
   ```

2. **Navega a la carpeta del proyecto**:

   ```bash
   cd PruebaApp
   ```

3. **Instala las dependencias para el cliente (Next.js)**:

   ```bash
   cd client
   npm install
   ```

4. **Instala las dependencias para el servidor (Laravel)**:

   ```bash
   cd prueba_app
   composer install
   ```

5. **Configura el archivo `.env` para Laravel**:

   Copia el archivo `.env.example` a `.env` y ajusta las variables de entorno según tu configuración local.

   ```bash
   cp .env.example .env
   ```

   Revisa el contenido del archivo .env en especial la información de la base de datos(puerto, nombre, contraseña, etc). Luego, ejecuta el siguiente comando para generar la clave de la aplicación:

   ```bash
   php artisan key:generate
   ```

## Correr el Servidor

### Servidor API (Laravel)

Para correr el servidor API, asegúrate de estar en la carpeta del servidor y ejecuta:

```bash
cd prueba_app
php artisan serve
```

Esto iniciará el servidor en `http://localhost:8000` (o el puerto que hayas configurado).

Aparte de esto debes revisar el archivo env y crear tu propia base de datos con el nombre que en este archivo aparece

### Cliente (Next.js)

Para correr el cliente, abre otra terminal y asegúrate de estar en la carpeta del cliente, luego ejecuta:

```bash
cd client
npm run dev
```

Esto iniciará la aplicación Next.js en `http://localhost:3000`.

## Uso

Una vez que ambos servidores estén corriendo, puedes acceder a la aplicación en tu navegador visitando `http://localhost:3000`. Asegúrate de que el servidor API esté en funcionamiento para que la aplicación funcione correctamente.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea tu rama de características (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva característica'`).
4. Haz un push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un pull request.

