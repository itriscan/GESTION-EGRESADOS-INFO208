### Requerimientos de software
* mysql o mariadb
* nodejs


### Intrucciones generales mysql

### **¿Cómo agregar la BD?**

* Posicionarse en la carpeta `GESTION-EGRESADOS-INFO208/bd.sql`
* Abrir terminal y escribir: `mysql -u root -p < bd.sql`

### crear usuario y dar permisos de usuario root
*   sudo mysql -u root
*   mysql> CREATE USER 'estudiante'@'localhost' IDENTIFIED BY '123456'; 
*   GRANT ALL PRIVILEGES ON * . * TO 'estudiante'@'localhost';
*   
    

### ejecutar backend en el directorio /GESTION-EGRESADOS-INFO208
* `npm i`
* `npm run dev` 


### Para las consultas utilice extencion de vscode THUNDER CLIENT
*   https://www.thunderclient.com/

