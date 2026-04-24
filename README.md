# Happy Dog

## Descripción
Happy Dog es una aplicación de escritorio diseñada para ayudar a las personas a encontrar perros para adoptar. La aplicación cuenta con funcionalidades de registro, inicio de sesión, navegación, publicación de perros en adopción, edición y eliminación de publicaciones. Además, ofrece una sección informativa sobre la aplicación y un carrusel de imágenes de perros disponibles para adoptar.

## Despliegue

El frontend de Happy Dog está desplegado en la siguiente dirección: [Happy Dog Frontend](https://happy-dog-front.vercel.app/)

## Video descriptivo

En el siguiente link se muestra en un video las funcionalidades: [demostración de funcionamiento](https://www.youtube.com/watch?v=LJfkwNTY9RU)


## Instrucciones de Inicio

### 1. Clonar el Repositorio

```bash
git clone https://github.com/juanbosquedev/HappyDogFront.git
```
### 2. Instalar Dependencias

 - Run the following command to install dependencies:
     ```bash
     npm install
     ```
     
### Configuración de Variables de Entorno

Para configurar las variables de entorno necesarias para el funcionamiento del frontend de HappyDogFront, sigue estos pasos:

1. Crea un archivo llamado `.env` en la raíz de la carpeta HappyDogFront.

2. Agrega la siguiente variable de entorno según corresponda:

   Para consumir la API externa (backend desplegado):

   VITE_API_URL=https://happydogapi.onrender.com/

      Para consumir la API localmente:
   ```plaintext
   VITE_API_URL=http://localhost:8000/

### 3. Ejecutar la Aplicación

Una vez que se hayan instalado las dependencias y configurado las variables de entorno, (encender la API en caso de que sea local), puedes iniciar la aplicación con el siguiente comando:

```bash
npm run dev
```


#### Technologias utilizadas

- HTML
- CSS
- JavaScript
- React
- Redux
- React-Bootstrap
- MaterialUI
- Bootstrap
- JWT

---




