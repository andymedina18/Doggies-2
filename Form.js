class Form {
    constructor() {
        this.greeting = createElement("h3");
        this.button = createButton("PLAY");
        this.input = createInput("Name");
        this.story = createElement("h2");
    }

    //Se esconde 
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.story.hide();
    }


    //Se muestra 
    display() {

        var title = createElement("h2");
        title.html("Missunderstood doggies");
        title.position(600, 100);

        //h2 - estilo de texto
        this.story.html("Aquí va inicio");
        this.story.position(500, 250);

        //DOnde se escribe
        this.input.position(500, 350);

        this.button.position(400, 500);
        

        //MousePressed 
        this.button.mousePressed(()=> {
            //Se esconde la caja y botón
            this.input.hide();
            this.button.hide();

            //El nombre del jugador = lo que se escribió en input
            player.name = this.input.value();
            
            //1 jugador más
            playerCount+=1;

            //El índice en su orden que entró
            player.index = playerCount;

            //Actualiza index
            player.update();

            //Actualiza total
            player.updateCount(playerCount);

            //Muestra el saludo
            this.greeting.html("Bienvenidx " + player.name);
            this.greeting.position(700, 300);
        })


    }

}