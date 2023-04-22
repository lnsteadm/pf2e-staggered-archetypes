class OddLevelArchetypeFeats {
    static ID = 'pf2e-staggered-archetypes';

    /**
     * @param {CharacterSheetPF2e}
     * @param {Any} _0
     * @param {Any} _1
     * @param {Any} _2
     */

    static oddLevels = new Array(actor.level).fill(0).map((_, idx) => idx + 1).filter((idx) => idx % 2 === 1);

    static changeFeatLevels(character, _0, _1, _2) {
        let archetype_feats = character.objects.feats.get("archetype");

        if(archetype_feats) {
            OddLevelArchetypeFeats.console.log(false, "Changing archetype feat levels to odd numbered levels");
            if (!archetype_feats.slots.includes(1)){
                archetype_feats.slots.splice(0, archetype_feats.slots.length, ...this.oddLevels);
            }
        } else {
            OddLevelArchetypeFeats.log(false, "Archetype feats are disabled");
        }
    }
}