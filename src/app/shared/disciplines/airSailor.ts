import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { acrobaticStrike, airSailing, avoidBlow, climbing, meleeWeapons,
    greatLeap, throwingWeapons, windCatcher, woundBalance, threadWeavingSpecial,
    unarmedCombat, airDance, haggle, riposte, taunt, secondWeapon, speakLanguage,
    glidingStride, missileWeapons, lionHeart, resistTaunt, secondAttack, endureCold,
    swingAttack, defense, shieldBeater, criticalHit, lifeCheck, secondChance,
    weaponBreaker, matrixStrike, quickBlade, quickShot, vitality} from '../library/disciplineTalents';


export const airSailor: Discipline = {
    name: 'Air Sailor',
    circle: 1,
    talents: [
        new Talent(acrobaticStrike, 1, false),
        new Talent(airSailing, 1, true),
        new Talent(avoidBlow, 1, true),
        new Talent(climbing, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        durability,
        new Talent(greatLeap, 2, true),
        new Talent(throwingWeapons, 2, false),
        new Talent(windCatcher, 3, true),
        new Talent(woundBalance, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(unarmedCombat, 4, false),
        new Talent(airDance, 5, false),
        new Talent(haggle, 5, true),
        new Talent(riposte, 6, false),
        new Talent(taunt, 6, false),
        new Talent(secondWeapon, 7, false),
        new Talent(speakLanguage, 7, true),
        new Talent(glidingStride, 8, true),
        new Talent(missileWeapons, 8, false),
        new Talent(lionHeart, 9, true),
        new Talent(resistTaunt, 9, true),
        new Talent(secondAttack, 9, false),
        new Talent(endureCold, 10, true),
        new Talent(swingAttack, 10, false),
        new Talent(defense, 11, true),
        new Talent(shieldBeater, 11, false),
        new Talent(criticalHit, 12, false),
        new Talent(lifeCheck, 12, true),
        new Talent(secondChance, 13, true),
        new Talent(weaponBreaker, 13, false),
        new Talent(matrixStrike, 14, false),
        new Talent(quickBlade, 14, false),
        new Talent(quickShot, 15, false),
        new Talent(vitality, 15, true)
    ]
};
