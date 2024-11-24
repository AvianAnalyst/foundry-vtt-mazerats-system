/**
 * Extend the basic ActorSheet with some very simple modifications
 */
import {MazeRatGenerators} from "./generators.js";


export class MazeRatCharacterSheet extends ActorSheet {
  constructor(...args) {
    super(...args);

    /**
     * Keep track of the currently active sheet tab
     * @type {string}
     */
      this._sheetTab = "description";

      this.gen = new MazeRatGenerators();  

      
  }

  /* -------------------------------------------- */

  /**
   * Extend and override the default options used by the 5e Actor Sheet
   * @returns {Object}
   */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
  	  classes: ["mazerats", "sheet", "character"],
  	  template: "systems/mazerats/templates/character-sheet.html",
      width: 680,
      height: 530
    });
  }

  /* -------------------------------------------- */

  /**
   * Prepare data for rendering the Actor sheet
   * The prepared data object contains both the actor data as well as additional sheet options
   */
  getData() {
      const data = super.getData();

      let hands = [];
      let belt = [];
      let worn = [];
      let backpack = [];
      
      for( let item_index = 0; item_index < data.actor.items.length; ++item_index ){
          if( data.actor.items[item_index].data.storage === "HANDS" )
              hands.push( data.actor.items[item_index].name );
          else if( data.actor.items[item_index].data.storage === "BELT" )
              belt.push( data.actor.items[item_index].name );
          else if( data.actor.items[item_index].data.storage === "WORN" )
              worn.push( data.actor.items[item_index].name );
          else
              backpack.push( data.actor.items[item_index].name );          
      }
      data.slots = {};
      data.slots["hands"]    = hands;
      data.slots["belt"]     = belt;
      data.slots["worn"]     = worn;
      data.slots["backpack"] = backpack;
      
      return data;
  }

  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
    activateListeners(html) {
        super.activateListeners(html);
        
        // Activate tabs
        let tabs = html.find('.tabs');
        let initial = this._sheetTab;
        new Tabs(tabs, {
            initial: initial,
            callback: clicked => this._sheetTab = clicked.data("tab")
        });
        
        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;
        
        // Update Inventory Item
        html.find('.item-collections').on("click", ".item-weild", this._onClickWeildItem.bind(this));
        html.find('.item-collections').on("click", ".item-attach", this._onClickAttachItem.bind(this));
        html.find('.item-collections').on("click", ".item-wear", this._onClickWearItem.bind(this));
        html.find('.item-collections').on("click", ".item-stow", this._onClickStowItem.bind(this));
        
        // Update Inventory Item
        html.find('.item-edit').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.getOwnedItem(li.data("itemId"));
            item.sheet.render(true);
        });
        
        // Delete Inventory Item
        html.find('.item-delete').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            this.actor.deleteOwnedItem(li.data("itemId"));
            li.slideUp(200, () => this.render(false));
        });
        
        html.find(".features").on("click", ".generate-spell", this._onClickGenerateSpell.bind(this));
        html.find(".description").on("click", ".generate-entry", this._onClickGenerateEntry.bind(this));
               
        let resizeables = html.find(".resizeable-text");
        for( let idx = 0; idx <  resizeables.length; ++idx ){
            let resizeable = resizeables[idx];
            let pathLength = html.find(resizeable.children[0].href.baseVal)[0].getTotalLength();
            let starting_size = resizeable.dataset.maxsize || 30;
            while( this.testTextWidth( html, resizeable.children[0].innerHTML, starting_size ) > pathLength && starting_size > 1)
                starting_size -= 1;
            let realLength = this.testTextWidth( html, resizeable.children[0].innerHTML, starting_size );
            
            // If we don't fill the path all the way, adjust the starting offset to center the text
            resizeable.children[0].setAttribute("startOffset", ((((pathLength - realLength) / 2.0) / pathLength) * 100) + "%");
            resizeable.style.fontSize = starting_size + "px";
            resizeable.style.fontFamily = "JustAnotherHand";
        }
                            
  }

    testTextWidth( html, text, size  ) {
      let test = html.find("#Test")[0];
      test.style.fontSize = size+"px";
      test.style.fontFamily = "JustAnotherHand";
      test.innerHTML = text;
      return test.clientWidth + 1;
  }
    
  /* -------------------------------------------- */

    async _onClickWeildItem(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const form = this.form;
        for( let item_index in this.object.items ){
            if( this.object.items[item_index]._id === action ){
                const updateData = { data: {} };
                updateData.data["storage"] = "HANDS";
                const updated = await this.object.items[item_index].update(updateData);                
            }
        }
    }
    
    async _onClickAttachItem(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const form = this.form;
        for( let item_index in this.object.items ){
            if( this.object.items[item_index]._id === action ){
                const updateData = { data: {} };
                updateData.data["storage"] = "BELT";
                const updated = await this.object.items[item_index].update(updateData);                
            }
        }
    }

    async _onClickWearItem(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const form = this.form;
        for( let item_index in this.object.items ){
            if( this.object.items[item_index]._id === action ){
                const updateData = { data: {} };
                updateData.data["storage"] = "WORN";
                const updated = await this.object.items[item_index].update(updateData);                
            }
        }
    }

    async _onClickStowItem(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const form = this.form;
        for( let item_index in this.object.items ){
            if( this.object.items[item_index]._id === action ){
                const updateData = { data: {} };
                updateData.data["storage"] = "";
                const updated = await this.object.items[item_index].update(updateData);                
            }
        }
    }
    
    async _onClickGenerateSpell(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const form = this.form;
        const data = this.object.data;

        let spell = this.gen.generateSpell();
        const updateData = { data: {} };
        updateData.data[action] = spell;
        const updated = await this.object.update(updateData);
    }

    
    async _onClickGenerateEntry(event) {
        event.preventDefault();
        const a = event.currentTarget;
        const action = a.dataset.action;
        const table = a.dataset.table;
        const form = this.form;
        const data = this.object.data;

        let result = this.gen.rollTable("_"+table);
        const updateData = { data: {} };
        updateData.data[action] = result;
        const updated = await this.object.update(updateData);
    }
    
  /**
   * Implement the _updateObject method as required by the parent class spec
   * This defines how to update the subject of the form when the form is submitted
   * @private
   */
  _updateObject(event, formData) {

    return this.object.update(formData);
  }
}
