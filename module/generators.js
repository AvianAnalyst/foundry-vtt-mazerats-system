

export class MazeRatGenerators {

    constructor(...args) {

        this._items = [
            ["Animal Scent","Bear Trap","Bedroll","Caltrops","Chain (10ft.)","Chalk"],
            ["Chisel", "Crowbar", "Fishing Net", "Glass Marbles", "Glue", "Grappling Hook"],
            ["Grease", "Hacksaw", "Hammer", "Hand Drill", "Horn", "Iron Spikes"],
            ["Iron Tongs", "Lantern & Oil", "Large Sack", "Lockpicks (3)", "Manacles", "Medicine (3)"],
            ["Metal File", "Rations (3)", "Rope (50ft.)", "Steel Wire", "Shovel", "Steel Mirror"],
            ["Ten Foot Pole", "Tinderbox", "Torch", "Vial of Acid", "Vial of Poison", "Waterskin"]
        ];

        this._appearance = [
            ["Aquiline", "Athletic", "Barrel-chested", "Boney", "Brawny", "Brutish" ],
            ["Bullnecked", "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate" ],
            ["Furrowed", "Gaunt", "Gorgeous", "Grizzled", "Haggard", "Handsome" ],
            ["Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny" ],
            ["Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque" ],
            ["Towering", "Trim", "Weathered", "Willowy", "Wiry", "Wrinkled" ]
        ];

        this._physicalDetail = [
            ["Acid scars","Bronze skinned","Exotic accent","Battle scars","Burn scars","Flogging scars"],
            ["Birthmark","Bushy eyebrows","Freckles","Braided hair","Curly hair","Gold tooth"],
            ["Brand mark","Dark skinned","Hoarse voice","Broken nose","Dreadlocks","Huge beard"],
            ["Long hair","Nine ﬁngers","Sallow skin","Matted hair","Oiled hair","Shaved head"],
            ["Missing ear","One-eyed","Sunburned","Missing teeth","Pale skinned","Tangled hair"],
            ["Mustache","Piercings","Tattoos","Muttonchops","Ritual scars","Topknot"]
        ];

        this._background = [
            ["Alchemist","Contortionist","Fence","Beggar-prince","Counterfeiter","Fortuneteller"],
            ["Blackmailer","Cultist","Galley slave","Bountyhunter","Cutpurse","Gambler"],
            ["Chimney sweep","Debt Collector","Gravedigger","Coinclipper","Deserter","Headsman"],
            ["Hedge knight","Peddler","Slave","Highwayman","Pitﬁghter","Smuggler"],
            ["Housebreaker","Poisoner","Street performer","Kidnapper","Ratcatcher","Tattooist"],
            ["Mad prophet","Scrivener","Urchin","Mountebank","Sellsword","Usurer"]
        ];

        this._clothing = [
            ["Antique","Decaying","Flamboyant","Battletorn","Eccentric","Foodstained"],
            ["Bedraggled","Elegant","Formal","Bloodstained","Embroidered","Frayed"],
            ["Ceremonial","Exotic","Frumpy","Dated","Fashionable","Garish"],
            ["Grimy","Oversized","Sigils","Haute couture","Patched","Singed"],
            ["Lacey","Patterned","Tasteless","Livery","Perfumed","Undersized"],
            ["Mudstained","Practical","Winestained","Ostentatious","Rumpled","Worn out"]
        ];

        this._personality = [
            ["Bitter","Cunning","Honorbound","Brave","Driven","Hotheaded"],
            ["Cautious","Entitled","Inquisitive","Chipper","Gregarious","Irascible"],
            ["Contrary","Grumpy","Jolly","Cowardly","Heartless","Know-it-all"],
            ["Lazy","Righteous","Spacey","Loyal","Rude","Stoic"],
            ["Menacing","Sarcastic","Stubborn","Mopey","Savage","Stuck-up"],
            ["Nervous","Scheming","Suspicious","Protective","Serene","Wisecracking"]
        ];

        this._mannerism = [
            ["Anecdotes","Drawl","Interrupts","Breathy","Enunciates","Laconic"],
            ["Chuckles","Flowery speech","Laughs","Clipped","Gravelly voice","Long pauses"],
            ["Cryptic","Highly formal","Melodious","Deep voice","Hypnotic","Monotone"],
            ["Mumbles","Rapidfire","Street slang","Narrates","Rhyming","Stutters"],
            ["Overly casual","Robotic","Talks to self","Quaint sayings","Slow speech","Trails off"],
            ["Rambles","Speechifies","Very loud","Random facts","Squeaky","Whispers"]
        ];


        this._femaleNames = [
            ["Adelaide","Clover","Esme","Alma","Constance","Fern"],
            ["Barsaba","Damaris","Hester","Beatrix","Daphne","Hippolyta"],
            ["Bianca","Demona","Jessamine","Cleopha","Elsbeth","Iilly"],
            ["Morgot","Pepper","Trillby","Minerva","Phoebe","Tuesday"],
            ["Nerissa","Piety","Ursula","Odette","Poppy","Vivian"],
            ["Olga","Silence","Wendy","Orchid","Sybil","Zora"]
        ];

        this._maleNames = [
            ["Balthazar","Destrian","Florian","Basil","Ellis","Fox"],
            ["Bertram","Erasmus","Godwin","Blaxton","Faustus","Hannibal"],
            ["Chadwick","Finn","Iasper","Clovis","Fitzhugh","Iiles"],
            ["Jules","Oswald","Silas","Leopold","Percival","Stilton"],
            ["Merrick","Peregrine","Stratford","Mortimer","Quentin","Tenpiece"],
            ["Ogden","Redmaine","Waverly","Orion","Reinhold","Webster"]
        ];

        this._highSurnames = [            
            ["Belvedere","Dunlow","Gastrell","Bithesea","Edevane","Girdwood"],
            ["Calaver","Erelong","Gorgon","Carvolo","Febland","Grimeson"],
            ["De Rippe","Fernsby","Gruger","Droll","Fisk","Hitheryon"],
            ["La Marque","Portendorfer","Stavish","Malmora","Romatet","Vandermeer"],
            ["Miter","Rothery","Wellbelove","Oblington","Skorbeck","Westergren"],
            ["Onymous","Slora","Wexley","Phillifent","Southwark","Wilberforce"]
        ];

        this._lowSurnames = [
            ["Barrow","Cofﬁn","Gimble","Beetleman","Crumpling","Graveworm"],
            ["Berrycloth","Culpepper","Greelish","Birdwhistle","Dankworth","Hardwick"],
            ["Bobich","Digworthy","Hatman","Chips","Dreggs","Hovel"],
            ["Knibbs","Rumbold","Slee","Midnighter","Rummage","Slitherly"],
            ["Needle","Sallow","Stoker","Nethercoat","Saltmarsh","Tarwater"],
            ["Pestle","Silverless","Tumbler","Relish","Skitter","Villin"]
        ];


        this._animal = [
            ["[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]"],
            ["[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]","[_aerialAnimals]"],
            ["[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]"],
            ["[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]","[_terrestrialAnimals]"],
            ["[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]"],
            ["[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]","[_aquaticAnimals]"]
        ];
        
        this._aerialAnimals = [
            ["Albatross","Crane","Flamingo","Bat","Crow","Fly"],
            ["Beetle","Dragonﬂy","Flying Squirrel","Bird of Paradise","Eagle","Goose"],
            ["Butterﬂy","Falcon","Gull","Condor","Fireﬂy","Hummingbird"],
            ["Kingﬁsher","Moth","Rooster","Locust","Owl","Sparrow"],
            ["Magpie","Parrot","Swan","Mantis","Peacock","Vulture"],
            ["Mockingbird","Pelican","Wasp","Mosquito","Pteranodon","Woodpecker"]
        ];

        this._terrestrialAnimals = [
            ["Ant","Caterpillar","Ferret","Ape","Centipede","Fox"],
            ["Armadillo","Chameleon","Giraffe","Badger","Cockroach","Goat"],
            ["Bear","Deer","Horse","Boar","Elephant","Human"],
            ["Mole","Rat","Snake","Ostrich","Rhinoceros","Spider"],
            ["Ox","Scorpion","Squirrel","Porcupine","Sheep","Tiger"],
            ["Rabbit","Slug","Wolf","Raccoon","Snail","Wolverine"]
        ];

        this._aquaticAnimals = [
            ["Alligator","Dolphin","Lobster","Amoeba","Eel","Manatee"],
            ["Anglerﬂsh","Frog","Manta Ray","Beaver","Hippopotamus","Muskrat"],
            ["Clam","Jellyfish","Narwhal","Crab","Leech","Newt"],
            ["Octopus","Sea Anemone","Squid","Otter","Sea Urchin","Swordfish"],
            ["Penguin","Seahorse","Tadpole","Platypus","Seal","Turtle"],
            ["Pufferﬂsh","Shark","Walrus","Salamander","Shrimp","Whale"]
        ];

        this._monsterFeature = [
            ["Antlers","Fangs","Legless","Beak","Fins","Long tongue"],
            ["Carapace","Fur","Many-eyed","Claws","Gills","Many-limbed"],
            ["Compound eyes","Hooves","Mucus","Eye Stalks","Horns","Pincers"],
            ["Plates","Shell","Tail","Plumage","Spikes","Talons"],
            ["Proboscis","Spinnerets","Tentacles","Scales","Spines","Trunk"],
            ["Segments","Stinger","Tusks","Shaggy hair","Suction cups","Wings"]
        ];

        this._monsterTraits = [
            ["Amphibious","Crystalline","Fearless","Bloated","Decaying","Fluffy"],
            ["Brittle", "[_etherealElements]-like" ,"Fungal","Cannibal","Ethereal","Gelatinous"],
            ["Claylike","Everyoung","Geometric","Colossal","Eyeless","Hardened"],
            ["Illusory","[_physicalElements]-like","Skeletal","Intelligent","Planar","Slimy"],
            ["Iridescent","Reﬂective","Sticky","Luminous","Rubbery","Stinking"],
            ["Many-headed","Shadowy","Tiny","Mechanical","Sharp","Translucent"]
        ];

        this._monsterAbilities = [
            ["Absorbing","Duplicating","Gaze weapon","Acid blood","Electric","Hypnotizing"],
            ["Antimagic","Entangling","Impervious","Blinding", "[_etherealEffects]" ,"Invisible"],
            ["Breath weapon","Exploding","Lifedraining","Camouﬂaging","Flying","Magnetic"],
            ["Mimicking","Radioactive","Strangling","Mind Reading","Reﬂective","Super Strength"],
            ["Paralyzing","Regenerating","Telekinetic","Phasing","Shapeshifting","Teleporting"],
            ["[_physicalEffects]","Spellcasting","Vampiric","Poisonous","Stealthy","Wall Crawling"]
        ];

        this._monsterTactics = [
            ["Ambush","Create barrier","Gang up","Call for support","Deceive","Gather strength"],
            ["Capture","Demand duel","Go berserk","Charge","Disorient","Harry"],
            ["Climb foes","Encircle","Hurl foes","Compel worship","Evade","Immobilize"],
            ["Manipulate","Scatter foes","Target nearest","Mock","Stalk","Target richest"],
            ["Monologue","Steal from","Target strongest","Order minion","Swarm","Target weakest"],
            ["Protect leader","Target insolent","Toy with","Protect self","Target leader","Use terrain"]
        ];

        this._monsterPersonality = [
            ["Alien","Devious","Fanatical","Aloof","Distractible","Forgetful"],
            ["Bored","Educated","Generous","Cautious","Embittered","Hateful"],
            ["Cowardly","Envious","Honorable","Curious","Erudite","Humble"],
            ["Iaded","Meticulous","Psychopathic","Iovial","Mystical","Sophisticated"],
            ["Legalistic","Obsessive","Touchy","Manipulative","Out of Touch","Unimpressed"],
            ["Megalomaniac","Paranoid","Vain","Melancholy","Polite","Xenophobic"]
        ];

        this._monsterWeakness = [
            ["Bells","Conversation","Heat","Birdsong","Deformity","Holy Icon"],
            ["Children","Flattery","Holy Water","Cold","Flowers","Home Cooking"],
            ["Cold Iron","Gifts","Insanities","Competition","Gold","Mirrors"],
            ["Mistletoe","Puzzles","True Name","Moonlight","Riddles","Val. Materials"],
            ["Music","Rituals","Weak Spot","Methods","Silver Weapon","Items"],
            ["Phylactery","Sunlight","Wine","[_physicalElements]","Tears","Wormwood"]
        ];
            
        
        this._physicalEffects = [
            ["Animating","Attracting","Binding","Blossoming","Consuming","Creeping"],
            ["Crushing","Diminishing","Dividing","Duplicating","Enveloping","Expanding"],
            ["Fusing","Grasping","Hastening","Hindering","Illuminating","Imprisoning"],
            ["Levitating","Opening","Petrifying","Phasing","Piercing","Pursuing"],
            ["Reflecting","Regenerating","Rending","Repelling","Resurrecting","Screaming"],
            ["Sealing","Shapeshifting","Sheilding","Spawning","Transmuting","Transporting"]          
        ];
        
        this._physicalElements = [
            ["Acid","Amber","Bark","Blood","Bone","Brine"],
            ["Clay","Crow","Crystal","Ember","Flesh","Fungus"],
            ["Glass","Honey","Ice","Insect","Wood","Lava"],
            ["Moss","Obsidian","Oil","Poison","Rat","Salt"],
            ["Sand","Sap","Serpent","Slime","Stone","Tar"],
            ["Thorn","Vine","Water","Wine","Wood","Worm"]          
        ];
        
        this._physicalForms = [
            ["Altar","Armor","Arrow","Beast","Blade","Cauldron"],
            ["Chain","Chariot","Claw","Cloak","Colossus","Crown"],
            ["Elemental","Eye","Fountain","Gate","Golem","Hammer"],
            ["Horn","Key","Mask","Monolith","Pit","Prison"],
            ["Sentinel","Servant","Shield","Spear","Steed","Swarm"],
            ["Tentacle","Throne","Torch","Trap","Wall","Web"]          
        ];
        
        this._etherealEffects = [
            ["Avenging","Banishing","Bewildering","Blinding","Charming","Communicating"],
            ["Compelling","Concealing","Deafening","Deceiving","Deciphering","Disguising"],
            ["Dispelling","Emboldening","Encoding","Energizing","Enlightening","Enraging"],
            ["Excruciating","Foreseeing","Intoxicating","Maddening","Mesmerizing","Mindreading"],
            ["Nullifying","Paralyzing","Revealing","Revolting","Scrying","Silencing"],
            ["Soothing","Summoning","Terrifying","Warding","Wearying","Withering"]          
        ];
        
        
        this._etherealElements = [
            ["Ash","Chaos","Distortion","Dream","Dust","Echo"],
            ["Ectoplasm","Fire","Fog","Ghost","Harmony","Heat"],
            ["Light","Lightning","Memory","Mind","Mutation","Negation"],
            ["Plague","Plasma","Probability","Rain","Rot","Shadow"],
            ["Smoke","Snow","Soul","Star","Stasis","Steam"],
            ["Thunder","Time","Void","Warp","Whisper","Wind"]          
        ];
        
        this._etherealForms = [
            ["Aura","Beacon","Beam","Blast","Blob","Bolt"],
            ["Bubble","Call","Cascade","Circle","Cloud","Coil"],
            ["Cone","Cube","Dance","Disk","Field","Form"],
            ["Gaze","Loop","Moment","Nexus","Portal","Pulse"],
            ["Pyramid","Ray","Shard","Sphere","Spray","Storm"],
            ["Swarm","Torrent","Touch","Vortex","Wave","Word"]          
        ];


        this._mutation = [
            ["Ages","[_animal] eyes","Cyclops","Attracts birds","[_animal] head","Extra arms"],
            ["Child-form","[_animal] legs","Extra eyes","Corpulence","[_animal] mouth","Extra legs"],
            ["Covered in hair","[_animal] skin","Forked tongue","[_animal] arms","[_animal]-form","Gender swap"],
            ["Hunchback","[_monsterTrait]","Shrinks","[_item]-form","No eyes","Shrivels"],
            ["Long arms","No mouth","Skin boils","Lose all hair","[_physicalElement]-skin","Slime trail"],
            ["Loses teeth","Second face","Translucent skin","[_monsterFeature]","Sheds skin","Weeps blood"]
        ];

        this._insanity = [
            ["Always lies","Fears birds","Fears horses","Always polite","Fears blood","Fears iron"],
            ["[_animal]-form","Fears books","Fears music","Cannot count","Fears darkness","Fears own hand"],
            ["Cannot lie","Fears ﬁre","Fears PC","Faceblind","Fears gold","Fears rain"],
            ["Fears rivers","'Genius'","'[_monsterFeature]'","Fears silence","'Gorgeous'","'[_monsterTrait]'"],
            ["Fears sleep","Hates violence","Must sing","Fears sunlight","'Invisible'","Alternate persona - [_personality]"],
            ["Fears the moon","'Invulnerable'","Says thoughts","Fears trees","'[_monsterAbility]'","Sees dead people"]
        ];

        this._omen = [
            ["All iron rusts","Dream plague","Fae return","Animals die","Endless night","Forest appears"],
            ["Animals mutate","Endless rain","Forgetfulness","Birds attack","Endless storm","Graves open"],
            ["City appears","Endless twilight","Lamentations","Deadly fog","Endless winter","Maggots"],
            ["Mass insanity - [_insanity]","Outsider enters","Shadows speak","Mass mutation - [_mutation]","People shrink","Space distorts"],
            ["Mass slumber","People vanish","Stones speak","Meteor strike","Plants wither","Total silence"],
            ["Mirrors speak","Portal opens","Tower appears","No stars","Rifts open","Water to blood"]
        ];

        this._startingItem = [       
            ["Animal Scent","Chisel","Grease","Bear Trap","Crowbar","Hacksaw"],
            ["Bedroll","Fishing Net","Hammer","Caltrops","Glass Marbles","Hand drill"],
            ["Chain (10 ft.)","Glue","Horn","Chalk","Grappling Hook","Iron spikes"],
            ["Iron tongs","Metal ﬁle","Ten Foot Pole","Lantern and Oil","Rations (3)","Tinderbox"],
            ["Large Sack","Rope (50 ft.)","Torch","Lockpicks (3)","Steel wire","Vial of Acid"],
            ["Manacles","Shovel","Vial of Poison","Medicine (3)","Steel mirror","Waterskin"],
        ];
        
        this._miscItem = [
            ["Bowl","Drawing","Handkerchief","Brass bell","Foreign coin","Hinged box"],
            ["Brooch","Game piece","Hourglass","Carved ﬁgurine","Glass eye","Human tooth"],
            ["Cup","Glass jar","Hunting horn","Deck of cards","Hair comb","Loaded dice"],
            ["Long fork","Purse","Sewing needle","Numbered key","Quill pen","Shaving razor"],
            ["Oil lamp","Salve","Silver button","Old doll","Scissors","Skull"],
            ["Paint pot","Scroll","Tobacco pipe","Pencil","Sealed letter","Wine bottle"]
        ];

        this._wornItem = [
            ["Belt","Cincture","Gauntlets","Blouse","Cloak","Glove"],
            ["Boots","Coat","Gown","Bracelet","Dress","Hat"],
            ["Breastplate","Baring","Helmet","Brigandine","Eyepatch","Hose"],
            ["Leather armor","Plate mail","Shoes","Locket","Ring","Skirt"],
            ["Mail Shirt","Robe","Slippers","Mask","Sandals","Socks"],
            ["Necklace","Scarf","Trousers","Padded armor","Shirt","Veil"]
        ];

        this._weaponItem = [
            ["Arming sword","Crossbow","Halberd","Backsword","Cutlass","Hammer"],
            ["Battleaxe","Dagger","Hatchet","Blowpipe","Plail","Horsebow"],
            ["Claymore","Flanged mace","Hunting knife","Club","Glaive","Lance"],
            ["Longbow","Scimitar","Stake","Longsword","Shortbow","Stiletto"],
            ["Mace","Sickle","Throwing axe","Maul","Sling","Warhammer"],
            ["Morningstar","Spear","Warpick","Pike","Staff","Whip"]
        ];

        this._bookSubject = [
            ["Alchemy","Cookbook","Hagiography","Art","Criminals","History"],
            ["Astrology","Divination","Journal","Blackmail","Etiquette","Language"],
            ["Charts & Maps","Fashion","Laws","Conspiracies","Genealogy","Letters"],
            ["Lost empires","Oratory","Sword ﬁghting","Lost places","Propaganda","Theology"],
            ["Love poems","Prophecies","Treasures","Monsters","Siegecraft","War chronicle"],
            ["Mythology","Songs","Who’s who","Odd customs","State secrets","Witch Hunting"]
        ];

        this._toolItem = [
            ["Acid ﬂask","Crowbar","Grappling hook","Bear trap","Door ram","Grease"],
            ["Bellows","Ear trumpet","Hacksaw","Boltcutters","Fire oil","Hammer"],
            ["Chain","Fishing hook","Hand drill","Chisel","Goggles","Lantern"],
            ["Lens","Needle","Rope","Lock/key","Pickaxe","Scissors"],
            ["Lockpicks","Pitchfork","Shovel","Manacles","Pliers","Spikes"],
            ["Metal ﬁle","Pole","Steel wire","Mortar/pestle","Pulleys","Tongs"]
        ];

        this._potionItem = [
            ["[_animal]-form","Detect evil","Extra arm","Body swap","Detect gold","Flight"],
            ["Camouﬂage","Detect hidden","Ghost Speech","Control animals","Direction sense","Heat vision"],
            ["Control [_physicalElement]","[_physicalElement]-form","Insanity - [_insanity]","Cure afﬂiction","[_physicalElement]-skin","Invulnerable"],
            ["[_item]-form","Mutation - [_mutation]","Super-jump","Magic immunity","Night Vision","Super-strength"],
            ["Mirror image","Random spell","Telekinesis","[_monsterAbility]","Restore health","Tongues"],
            ["[_monsterFeature]","Speed","Water Breathing","[_monsterTrait]","Stretchy","Water Walking"]
        ];

        this._alchemyIngredient = [
            ["Ancient liquor","Cofﬁn nail","Killer’s hand","[_animal]","Corpse’s hair","King’s tooth"],
            ["Blind eye","Crossroad dust","Last breath","Boiled cat","Cultist entrails","Liar’s tongue"],
            ["Book page","[_ediblePlant]","Lightning bolt","Bottled fog","Exotic spice","Lodestone"],
            ["Monk’s vow","Potion","Thief’s ﬁnger","[_monsterFeature]","Pyre ember","Tomb ﬂower"],
            ["Newborn’s cry","Queen bee","[_valuableMaterial]","Oil portrait","Queen’s blood","Wedding ring"],
            ["[_physicalElement]","Ship’s barnacle","Widow’s tears","[_poisonousPlant]","Starmetal","Wizard skull"]
        ];

        this._treasureItem = [
            ["Alchemy recipe","Compass","Fine china","Amulet","Contract","Fine liquor"],
            ["Astrolabe","Crown","Instrument","Blueprints","Crystal","Magical book"],
            ["Calligraphy","Deed","Microscope","Carpet","Embroidery","Music box"],
            ["Orrery","Royal robes","Silverware","Painting","Saint’s relic","Spices"],
            ["Perfume","Scrimshaw","Spyglass","Prayer book","Sextant","Tapestry"],
            ["Printing block","Sheet music","Telescope","Rare textile","Signet ring","Treasure map"]
        ];

        this._treasureTrait = [
            ["Altered","Cultural value","[_element]","Ancient","Cursed","Embellished"],
            ["Blessed","Damaged","Encoded","Bulky","Disguised","Exotic"],
            ["Compact","Draws enemies","Extraplanar","Consumable","[_effect]","Famous"],
            ["Forbidden","Intelligent","Political value","Fragile","Masterwork","Religious value"],
            ["Heavy","Military value","Repaired","Immovable","Nonhuman","Royal"],
            ["Impracticable","Owned","Toxic","Indestructible","Partial","Vile"]
        ];

        this._valuableMaterial = [
            ["Alabaster","Bloodstone","Ebony","Amber","Bone China","Emerald"],
            ["Aquamarine","Chalcedony","Fire Agate","Azurite","Cinnabar","Garnet"],
            ["Beryl","Coral","Gold","Black Pearl","Diamond","Ivory"],
            ["Iade","Onyx","Sapphire","Jasper","Opal","Serpentine"],
            ["Jet","Pearl","Silver","Lapis Lazuli","Platinum","Star Iron"],
            ["Malachite","Porcelain","Topaz","Moonstone","Ruby","Turquoise"]
        ];

        this._ediblePlant = [
            ["Acorns","Cattail","Deadnettle","Apples","Cherries","Elderberries"],
            ["Asparagus","Chickweed","Fireweed","Blackberries","Chicory","Gooseberries"],
            ["Blueberries","Clover","Hazelnuts","Carrots","Dandelion","Henbit"],
            ["Hickory nuts","Mushrooms","Strawberries","Honeysuckle","Mustard","Walnuts"],
            ["Leeks","Onion","Watercress","Milk thistle","Pecans","Wild garlic"],
            ["Mint","Persimmons","Wild grapes","Mulberries","Raspberries","Wood sorrel"]
        ];

        this._poisonousPlant = [
            ["Angel’s Trumpet","Cocklebur","Hemlock","Baneberry","Columbine","Hogweed"],
            ["Belladona","Crowncup","Holly","Black Trufﬂe","Death Cap","Horse Chestnut"],
            ["Bleeding Heart","Dumbcane","Hyacinth","Celandine","Foxglove","Ivy"],
            ["Jessamine","Moonﬂower","Spindle","Kudu","Nightshade","Stinkhorn"],
            ["Larkspur","Oleander","Waxcap","Mandrake","Ragwort","Wine Cap"],
            ["Mangrove","Reindeer Lichen","Wolfsbane","Mistletoe","Snakeweed","Wormwood"]
        ];


        
    
    }

    rollTable( table_name ){
       
        let table = this[table_name];
        let die = new Die(6);
        die.roll(2);
        let result = table[die.results[0]-1][die.results[1]-1];
        let capturingRegex = /\[(?<subtable>[a-zA-Z0-9_]+)\]/;
        let found = result.match(capturingRegex);
        if( found )
            result = result.replace(capturingRegex, this.rollTable( found.groups.subtable ));        
        
        return result;
    }

    generateSpell() {
        let spellTable = [
            [ ["_physicalEffects", "_physicalForms"], ["_etherealElements", "_physicalForms"] ],
            [ ["_physicalEffects", "_etherealForms"], ["_etherealElements", "_etherealForms"] ],
            [ ["_etherealEffects", "_physicalForms"], ["_physicalEffects", "_physicalElements"] ],
            [ ["_etherealEffects", "_etherealForms"], ["_physicalEffects", "_etherealElements"] ],
            [ ["_physicalElements", "_physicalForms"], ["_etherealEffects", "_physicalElements"] ],
            [ ["_physicalElements", "_etherealForms"], ["_etherealEffects", "_etherealElements"] ],
        ]
        
        let die = Die.fromFormula("1d6");
        die.roll(2);                               
        let spell = "Spell: " + this.rollTable( spellTable[die.results[0]-1][die.results[1]%2][0] )  + " " + this.rollTable( spellTable[die.results[0]-1][die.results[1]%2][1] );
                
        return spell;        
    }

    generateMonster() {
        let monster_data = {stats:{}, features:[], traits:[], abilities:[], tactics:[], personality:[], weakness:[], spells:[] };

        let hp_table = [1, 2, 3, 4, 6];
        let armor_table = [6,7,8,9,10];
        let att_table = [0,1,2,3,4];
        let str_table = [0,1,2,3,4];
        let dex_table = [0,1,2,3,4];
        let wil_table = [0,1,2,3,4];

        let magic_table = [0,0,0,1,2,3];
        
        let die = new Die(6);
        die.roll(7);

        let neededReroll = false;
        do{
            neededReroll = false;
            if( die.results[0] == 6 ){
                monster_data["features"].push( this.rollTable("_monsterFeature") );
                neededReroll = true;
            }
            if( die.results[1] == 6 ){
                monster_data["traits"].push( this.rollTable("_monsterTraits") );
                neededReroll = true;
            }
            if( die.results[2] == 6 ){
                monster_data["abilities"].push( this.rollTable("_monsterAbilities") );
                neededReroll = true;
            }
            if( die.results[3] == 6 ){
                monster_data["tactics"].push( this.rollTable("_monsterTactics") );
                neededReroll = true;
            }
            if( die.results[4] == 6 ){
                monster_data["personality"].push( this.rollTable("_monsterPersonality") );
                neededReroll = true;
            }
            if( die.results[5] == 6 ){
                monster_data["weakness"].push( this.rollTable("_monsterWeakness") );
                neededReroll = true;
            }
            die = die.reroll([6,]);
        }while(neededReroll)

        let hp_die = new Die(6);
        hp_die.roll( hp_table[die.results[0]-1] ) 
        monster_data.stats["hp"] = {}
        monster_data.stats.hp.max = monster_data.stats.hp.value = hp_die.total;

        monster_data.stats["arm"] = armor_table[ die.results[1]-1 ];
        monster_data.stats["att"] = att_table[ die.results[2]-1 ];
        monster_data.stats["str"] = str_table[ die.results[3]-1 ];
        monster_data.stats["dex"] = dex_table[ die.results[4]-1 ];
        monster_data.stats["wil"] = wil_table[ die.results[5]-1 ];

        for( let s = 0; s < magic_table[ die.results[6]-1 ]; ++s ){
            monster_data["spells"].push( this.generateSpell() );
        }

        monster_data["name"] = this.rollTable("_animal");

        if( monster_data["features"].length > 0 )
            monster_data["name"] = "Abberant " + monster_data["name"];
        else if( monster_data["traits"].length > 0 )
            monster_data["name"] = "Mutated " + monster_data["name"];
        else if( monster_data["abilities"].length > 0 )
            monster_data["name"] = "Supernatural " + monster_data["name"];
        else if( monster_data["spells"].length > 0 )
            monster_data["name"] = "Magical " + monster_data["name"];

        if( hp_table[die.results[0]-1] == 1 )
            monster_data["name"] = "Weak "  + monster_data["name"];
        if( hp_table[die.results[0]-1] == 3 )
            monster_data["name"] = "Tough " + monster_data["name"];
        if( hp_table[die.results[0]-1] == 4 )
            monster_data["name"] = "Hulking " + monster_data["name"];
        if( hp_table[die.results[0]-1] == 6 )
            monster_data["name"] = "Colossal " + monster_data["name"];
        
        return monster_data;
    }

    
    generateCharacter() {
        let die = Die.fromFormula("1d6");
        die.roll(4);

        let abilitychart = [
            { str: 2, dex: 1, wil: 0 },
            { str: 2, dex: 0, wil: 1 },
            { str: 1, dex: 2, wil: 0 },
            { str: 0, dex: 2, wil: 1 },
            { str: 1, dex: 0, wil: 2 },
            { str: 0, dex: 1, wil: 2 }
        ]

        let pathchart = ["Briarborn", "Fingersmith", "Roofrunner", "Shadowjack"];            
        
        let character_data = { stats: {} };
        character_data["appearance"]     = this.rollTable("_appearance");
        character_data["physicalDetail"] = this.rollTable("_physicalDetail");
        character_data["background"]     = this.rollTable("_background")
        character_data["clothing"]       = this.rollTable("_clothing")
        character_data["personality"]    = this.rollTable("_personality");
        character_data["mannerism"]      = this.rollTable("_mannerism");

        if( die.results[0] % 2 == 1 )
            character_data["name"] = this.rollTable("_maleNames");
        else
            character_data["name"] = this.rollTable("_femaleNames");

        if( die.results[1] % 2 == 1 )
            character_data["name"] = character_data["name"] + " " + this.rollTable("_highSurnames");
        else
            character_data["name"] = character_data["name"] + " " + this.rollTable("_lowSurnames");

        Object.assign(character_data.stats, abilitychart[ die.results[2]-1 ] );

        character_data.stats["arm"] = 6;
        character_data.stats["att"] = 0;
        character_data["feature_1"] = "";
        character_data["feature_2"] = "";
        character_data["feature_3"] = "";
        character_data["feature_4"] = "";
        character_data["biography"] = "";
        character_data["log"] = "";
        character_data["belt"] = [];
        character_data["hands"] = [];
        character_data["worn"] = [];
        character_data["backpack"] = [];
        character_data["initialized"] = true;
        
        if( die.results[3] % 3  == 0 ){
            character_data.stats["att"] = 1;
        }
        if( die.results[3] % 3  == 1 ){
            character_data["feature_1"] = this.generateSpell();
        }
        if( die.results[3] % 3  == 2 ){
            let d4 = Die.fromFormula("1d4");
            d4.roll(1);
            character_data["feature_1"] = pathchart[ d4.results[0]-1 ]
        }
        character_data["level"] = 1;
        character_data["xp"] = 0;
        character_data.stats["hp"] = { value: 4, max: 4 };

        
        return character_data;
    }
    
    
}
