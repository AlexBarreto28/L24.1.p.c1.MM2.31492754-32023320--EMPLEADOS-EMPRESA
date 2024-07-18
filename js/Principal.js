import Cl_Empleado from "./Cl_Empleado.js";
import Cl_Empresa from "./Cl_Empresa.js";

let Empleado1=new Cl_Empleado("Mary","F","43");
let Empleado2=new Cl_Empleado("Jose","M","40");
let Empleado3=new Cl_Empleado("Carlos","M","30");
let Empleado4=new Cl_Empleado("Pedro","M","50");
let Empleado5=new Cl_Empleado("Mery","F","45");
let Empleado6=new Cl_Empleado("Liz","F","50");

let Empresa=new Cl_Empresa();

Empresa.procesarEmpleado(Empleado1);
Empresa.procesarEmpleado(Empleado2);
Empresa.procesarEmpleado(Empleado3);
Empresa.procesarEmpleado(Empleado4);
Empresa.procesarEmpleado(Empleado5);
Empresa.procesarEmpleado(Empleado6);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br>Promedio de edad de los hombres: " + Empresa.PromedioEdadHombre();
salida.innerHTML+= "<br>Mayor edad entre las mujeres es: " + Empresa.devolverEdad() +" y la tiene: " + Empresa.devolverNombre();