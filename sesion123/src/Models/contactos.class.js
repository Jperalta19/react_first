export class Contactos {
    nombre ='';
    apellido ='';
    email = '';
    conectado = false;

        constructor(nombre, apellido, email,conectado){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.estado = conectado
    }
}