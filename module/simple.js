/**
 * A simple and flexible system for world-building using an arbitrary collection of character and item attributes
 * Author: Atropos
 * Software License: GNU GPLv3
 */

// Import Modules
import { MazeRatItemSheet } from "./item-sheet.js";
import { MazeRatCharacterSheet } from "./character-sheet.js";
import { MazeRatMonsterSheet } from "./monster-sheet.js";
import { ActorMR } from "./mazerat_actor.js";
import { MazeRatGenerators } from "./generators.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
    console.log(`Initializing Simple Worldbuilding System`);
    
    /**
	 * Set an initiative formula for the system
	 * @type {String}
	 */
    CONFIG.Combat.initiative = {
	formula: "1d6",
        decimals: 2
    };
    CONFIG.debug.hooks = true;
    CONFIG.Actor.entityClass = ActorMR;
    
    Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
    
    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);
    
    Actors.registerSheet("mazerats", MazeRatCharacterSheet, { types: ["character"], makeDefault: true });
    Actors.registerSheet("mazerats", MazeRatMonsterSheet, { types: ["monster"], makeDefault: true });    
    Items.registerSheet("mazerats", MazeRatItemSheet, {makeDefault: true});

});

Hooks.on("ready", async function() {
    /*
    let gen = new MazeRatGenerators();
    for( let i = 0; i < 6; ++i)
        for( let j = 0; j < 6; ++j){
            const createData = {name: gen._treasureItem[i][j], type: "item", data: { description: "", storage: ""} };
            const created = await Item.create(createData, {temporary: false}); // Saved to the database
        }
*/
});


Hooks.on("preCreateActor", (dir, actor) =>{
    if( actor.type == "character" && actor.random ){
        let gen = new MazeRatGenerators();
        actor.data = gen.generateCharacter();
        actor.name = actor.data.name;
    }
    if( actor.type == "monster" && actor.random ){
        let gen = new MazeRatGenerators();
        actor.data = gen.generateMonster();
        actor.name = actor.data.name;
    }
});

Hooks.on("renderDialog", (dialog, func, content) => {

    if( dialog.data.title == "Create New Actor" ){
        $(func[0]).css("height", "200px");
        $("#entity-create").append('<div class="form-group"><label>Generate Random?</label><input type="checkbox" name="random"></input></div>');
    }
    
});
