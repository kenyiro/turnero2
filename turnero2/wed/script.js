function guardar(){
  var cedula = document.getElementById("transaccionDocumento").value;
  var nombre = document.getElementById("transaccionNombre").value;
  var datos = (cedula) + (nombre);
  alert("sus datos  son " + datos);
}
var 