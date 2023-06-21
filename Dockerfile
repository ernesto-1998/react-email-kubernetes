FROM nginx:latest

# Copiar el contenido de la carpeta dist/
COPY dist/ /usr/share/nginx/html/

# Sustituir el archivo nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
