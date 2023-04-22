class OddLevelArchetypeFeats {
    static ID = 'pf2e-staggered-archetypes';

    /**
     * @param {CharacterSheetPF2e}
     * @param {Any} _0
     * @param {Any} _1
     * @param {Any} _2
     */

    //static oddLevels = new Array(1,3,5,7,9,11,13,15,17,19);

    static changeFeatLevels(character, _0, _1, _2) {
        let archetype_feats = character.object.feats.get("archetype");
        let character_level = character.object.level;

        if(archetype_feats) {
            OddLevelArchetypeFeats.log(true, "Archetype feats already exist");
        } else {
            let oddLevels = new Array(character_level).fill(0).map((_,idx) => idx + 1).filter((idx) => idx % 2 === 1);

            character.object.feats.createGroup({
                id: "archetype",
                label: "PF2E.FeatArchetypeHeader",
                supported: ["class"],
                slots: oddLevels
            });
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