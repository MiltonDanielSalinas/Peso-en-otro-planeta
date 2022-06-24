// Variables
var usuario = prompt("Cual es tu peso"),
  planeta = parseInt(
    prompt(
      "Elige un planeta.  1-Mercurio. 2-Venus. 3-Marte. 4-Jupiter. 5-Saturno. 6-Urano. 7-Neptuno. 8-Pluton."
    )
  ),
  peso = parseInt(usuario),
  g_mercurio = 3.7,
  g_venus = 8.8,
  g_tierra = 9.8,
  g_marte = 3.7,
  g_jupiter = 24.8,
  g_saturno = 10.4,
  g_urano = 8.8,
  g_neptuno = 11.1,
  g_pluton = 0.6,
  peso_final,
  nombre;
// IF
newFunction();
function newFunction() {
  if (planeta == 1) {
    peso_final = (peso * g_mercurio) / g_tierra;
    nombre = "Mercurio";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Mercurio?</h1>` +
        `<h2 class="datos">Veamos ahora a la Tierra comparada con el planeta más pequeño del Sistema Solar: Mercurio. Este planeta tiene sólo 4879 km de diámetro o lo que sería un tercio del diámetro de la Tierra. En volumen, si la Tierra fuese hueca, necesitaríamos 18 Mercurios para ocupar el espacio de la Tierra.</h2>`
    );
  } else if (planeta == 2) {
    peso_final = (peso * g_venus) / g_tierra;
    nombre = "Venus";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Venus?</h1>` +
        `<h2 class="datos">La Tierra gira sobre sí misma en 24 horas mientras que Venus gira sobre sí mismo en sentido contrado (rotación retrógrada) en 243 días. El periodo orbital de Venus es de 225 días de manera que un año en Venus dura menos que un día entero</h2>`
    );
  } else if (planeta == 3) {
    peso_final = (peso * g_marte) / g_tierra;
    nombre = "Marte";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Marte?</h1>` +
        `<h2 class="datos">Marte se parece bastante a la Tierra, aunque no es exactamente igual. La masa de Marte es la décima parte de la de la Tierra, y su tamaño es la mitad. Por este motivo, la gravedad superficial es menor que en la Tierra: sólo 3,7 m/s2 en lugar de 9,8 m/s2. En Marte pesarías la mitad que en la Tierra.</h2>`
    );
  } else if (planeta == 4) {
    peso_final = (peso * g_jupiter) / g_tierra;
    nombre = "Jupiter";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Jupiter?</h1>` +
        `<h2 class="datos">A pesar de ser mucho más grande que la Tierra (con un diámetro once veces mayor), es considerablemente menos denso. El volumen de Júpiter es equivalente al de 1321 tierras, pero su masa es solamente 318 veces mayor.</h2>`
    );
  } else if (planeta == 5) {
    peso_final = (peso * g_saturno) / g_tierra;
    nombre = "Saturno";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Saturno?</h1>` +
        `<h2 class="datos">Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos.</h2>`
    );
  } else if (planeta == 6) {
    peso_final = (peso * g_urano) / g_tierra;
    nombre = "Urano";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Urano?</h1>` +
        `<h2 class="datos">Urano es de color azul verdoso debido al metano de su atmósfera, que está compuesta principalmente de hidrógeno y helio. Al planeta a menudo se le denomina gigante de hielo, ya que al menos el 80 % de su masa es una mezcla de agua, metano y amoniaco.</h2>`
    );
  } else if (planeta == 7) {
    peso_final = (peso * g_neptuno) / g_tierra;
    nombre = "Neptuno";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Neptuno?</h1>` +
        `<h2 class="datos">Neptuno es muy parecido a Urano. Está compuesto de una espesa mezcla de agua, amoniaco y metano sobre un centro sólido del tamaño de la Tierra. Su atmósfera se compone de hidrógeno, helio y metano. El metano le da a Neptuno el mismo color azul de Urano.</h2>`
    );
  } else if (planeta == 8) {
    peso_final = (peso * g_pluton) / g_tierra;
    nombre = "Pluton";
    document.write(
      `<h1 class="datos">¿Qué diferencia hay entre la Tierra y Pluton?</h1>` +
        `<h2 class="datos">Plutón orbita alrededor del Sol a unos 5.800 millones de kilómetros de distancia, aproximadamente 40 veces más lejos que la Tierra, en una región llamada el Cinturón de Kuiper. Un año en Plutón son 248 años terrestres. Un día en Plutón dura 153 horas, o aproximadamente 6 días terrestres.</h2>`
    );
  } else {
    alert("Error = " + "F5");
  }
}
// Devolucion
newFunction_1();
function newFunction_1() {
  peso_final = parseInt(peso_final);
  document.write(
    `<h1 class="texto">Tu peso en ${nombre} es de ${peso_final} Kilos</h1>` + 
    `<h2 class="texto">Refresca la pestaña y prueba con otro planeta</h2>`
    
  );
}
