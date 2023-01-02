### Requerimientos de software
* mysql o mariadb
* nodejs

* Para ejecutar el backen y el frontend se deben usar dos terminales e ingresar a cada carpeta.


### Intrucciones generales backend
### **¿Cómo agregar la BD?**

* Posicionarse en la carpeta `GESTION-EGRESADOS-INFO208/bd.sql`
* Abrir terminal y escribir: `mysql -u root -p < bd.sql`

### crear usuario y dar permisos de usuario root
*   sudo mysql -u root
*   mysql> CREATE USER 'estudiante'@'localhost' IDENTIFIED BY '123456'; 
*   GRANT ALL PRIVILEGES ON * . * TO 'estudiante'@'localhost';
*   
    

### ejecutar backend en el directorio /GESTION-EGRESADOS-INFO208/backend
* `npm i`
* `npm run dev` 




### Las siguientes instrucciones se ejecutan en la carpeta GESTION-EGRESADOS-INFO208/frontend 
### Instalar dependencias frontend

* `npm install`

### Iniciar frontend

* `npm start `
