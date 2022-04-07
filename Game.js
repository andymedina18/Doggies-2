class Game {
    constructor() {

    }

    //Obtiene estado del juego
    getState() {
        //gameState en la base de datos
        var gameStateRef = database.ref('gameState');

        //Obtener valor de gamestate en la variable
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
    }
    
    //Actualizar estado
    update(state) {
        database.ref('/').update({
          gameState: state
        });
    }

    async start() {
        //Si aun no inicia
        if (gameState == 0) {
            //Se crea nuevo jugador
            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value");

            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();

                player.getCount();
            }

            //Se crea el formulario y se muestra
            form = new Form();
            form.display();
        }
    }


    play() {
        form.hide();
        
        //Título al llenar formulario 
        text("Inicia el juego", 120, 100);

        //Player porque se refiere a toda la clase
        Player.getPlayerInfo();

        if (allPlayers !== undefined) {

            //Posiciona al jugador que entra
            var displayPosition = 40;

            for (var plr in allPlayers)  {

                if (plr == "player" + player.index) {
                    fill("lightblue");

                } else {
                    fill("black");
                }

            }
        }

    }


}