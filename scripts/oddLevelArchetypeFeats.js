class OddLevelArchetypeFeats {
    static ID = 'pf2e-staggered-archetypes';

    /**
     * @param {CharacterSheetPF2e}
     * @param {Any} _0
     * @param {Any} _1
     * @param {Any} _2
     */

    static oddLevels = new Array(1,3,5,7,9,11,13,15,17,19);

    static changeFeatLevels(character, _0, _1, _2) {
        let archetype_feats = character.object.feats.get("archetype");

        if(archetype_feats) {
            OddLevelArchetypeFeats.log(true, "Changing archetype feat levels to odd numbered levels");
            if (!archetype_feats.slots.includes(1)){
                archetype_feats.slots.splice(0, archetype_feats.slots.length, ...this.oddLevels);
            }
        } else {
            OddLevelArchetypeFeats.log(true, "Archetype feats are disabled");
        }
    }

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode').api?.getPackageDebugValue(OddLevelArchetypeFeats.ID);
        if(shouldLog) {
            console.log(OddLevelArchetypeFeats.ID, '|', ...args);
        }
    }
}

Hooks.once('devModeReady', (DevMode) => {
    DevMode.registerPackageDebugFlag(OddLevelArchetypeFeats.ID);
});


Hooks.on('renderCharacterSheetPF2e', OddLevelArchetypeFeats.changeFeatLevels);