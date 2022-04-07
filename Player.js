class Player {
    constructor() {
        this.distance = 0;
    }

    //Cuantos jugadores entran
    getCount() {
        //variable hace referencia a player count de la base
        var playerCountRef = database.ref("playerCount");

        playerCountRef.on("value", (data) => {
            playerCount = data.val()
        });
    }

    //Actualiza num de jugadores
    updateCount(count) {
        //count es parámetro
        database.ref("/").update({
            playerCount: count
        });

    }

    //variable de index 
    //Quien es 1 y 2
    update() {
        var playerIndex = "player" + "playerCount";

        database.ref(playerIndex).set({
            name: name
        });
    }
}