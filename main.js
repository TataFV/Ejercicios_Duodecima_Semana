function main() {

    var nombreEnemigo = prompt("Introduce un nombre para el enemigo")
    var enemigo = new Enemigo(100, 70, nombreEnemigo, 1);
    console.log(enemigo.getVida);
    console.log(enemigo.getAtaque);
    console.log(enemigo.getNombre);
    console.log(enemigo.getNivel);

    var nombreHeroe = prompt("Introduce un nombre para el heroe")
    var heroe = new Heroe(100, 80, nombreHeroe, 1);
    console.log(heroe.getVida);
    console.log(heroe.getAtaque);
    console.log(heroe.getNombre);
    console.log(heroe.getNivel);
    console.log(heroe.getExperiencia);

    var ultimo_turno = 0;
    while (!heroe.confirmarMuerte() && !enemigo.confirmarMuerte()) {
        if (ultimo_turno >= 0) {
            var ataqueHeroe = heroe.dañoAtaque()
            enemigo.reducirEnergia(ataqueHeroe)
            ultimo_turno = -1;
        } else {
            var ataqueEnemigo = enemigo.getAtaque
            heroe.reducirEnergia(ataqueEnemigo)
            ultimo_turno = 1;

        }
        console.log(heroe.getNombre + ": " + heroe.getVida)
        console.log(enemigo.getNombre + ": " + enemigo.getVida)
    }
}
main()