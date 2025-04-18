var game =
    {
        numberFormatters: [
            new ADNotations.StandardNotation(),
            new ADNotations.ScientificNotation(),
            new ADNotations.EngineeringNotation(),
            new ADNotations.LettersNotation(),
            new ADNotations.LogarithmNotation(),
            new ADNotations.CancerNotation()
        ],
        numberFormatter: new ADNotations.StandardNotation(),
        timer:
            {
                autoPickaxe: 0,
                save: 0
            },
        lastActive: Date.now(),
        money: new Decimal(0),
        highestMoney: new Decimal(0),
        gems: new Decimal(5),
        usedGemsLevel: 0,
        pickaxe: new Pickaxe("Toy Pickaxe", 20, 1),
        pickStatus: "",
        messageLog: [],
        mineObjects: [
            new MineObject("mineObjects.mud", 100, 0, 2, ["#000000", "#663300"]),
            new MineObject("mineObjects.paper", 400, 3, 10, ["#000000", "#00ccff", "#cc0033", "#ffffff"], 13),
            new MineObject("mineObjects.salt", 700, 15, 22, ["#000000", "#ffffff"], 1),
            new MineObject("mineObjects.clay", 1400, 35, 50, ["#000000","#663333"]),
            new MineObject("mineObjects.rock", 2200, 90, 120, ["#000000", "#666666"]),
            new MineObject("mineObjects.coal", 4000, 200, 275, ["#000000", "#121212"]),
            new MineObject("mineObjects.bone", 7000, 380, 580,["#000000", "#ffff99"], 2),
            new MineObject("mineObjects.lead", 12400, 700, 1100,["#000000", "#242424"]),
            new MineObject("mineObjects.iron", 16000, 1140, 1850,["#000000", "#333333"]),
            new MineObject("mineObjects.copper", 25000, 1600, 3200,["#000000", "#660000"]),
            new MineObject("mineObjects.carbonite", 40000, 2500, 5200,["#000000", "#262626"]),
            new MineObject("mineObjects.quartz", 64000, 3800, 8600,["#000000", "#ffffff"]),
            new MineObject("mineObjects.spookyBone", 92000, 5400, 14000,["#000000", "#ffff99", "#000000"], 3),
            new MineObject("mineObjects.silver", 128e3, 7200, 20000,["#000000", "#aaaaaa"]),
            new MineObject("mineObjects.crystal", 200e3, 9999, 42000,["#b2fcff","#7ff6ff"], 6),
            new MineObject("mineObjects.topaz", 500e3, 13500, 140e3,["#330000","#ff9900"]),
            new MineObject("mineObjects.amethyst", 1.4e6, 18000, 480e3,["#6633cc","#663399"]),
            new MineObject("mineObjects.aquamarine", 4.8e6, 24500, 2.2e6,["#000066","#0066ff"]),
            new MineObject("mineObjects.emerald", 13e6, 34000, 7.2e6,["#006600","#339966"]),
            new MineObject("mineObjects.ruby", 42e6, 50000, 25.5e6,["#330000","#ff0000"]),
            new MineObject("mineObjects.sapphire", 120e6, 80000, 85e6,["#000066","#0000ff"]),
            new MineObject("mineObjects.hauntedBone", 200e6, 130e3, 190e6,["#000000", "#ffff99", "#ff0000"], 3),
            new MineObject("mineObjects.gold", 360e6, 200e3, 400e6,["#cccc00","#cc9900"]),
            new MineObject("mineObjects.platinum", 500e6, 295e3, 760e6,["#337777","#99cccc"]),
            new MineObject("mineObjects.diamond", 700e6, 440e3, 1.6e9,["#999999","#ffffff"]),
            new MineObject("mineObjects.mithril", 1e9, 680e3, 2.8e9,["#001111","#336666"]),
            new MineObject("mineObjects.obsidian", 1.4e9, 1.05e6, 4.8e9,["#660066","#000000"]),
            new MineObject("mineObjects.earthEssence", 2e9, 1.4e6, 8.2e9,["#000000", "#33ff00","#cc6600"], 4),
            new MineObject("mineObjects.orbium", 2.6e9, 2e6, 13.5e9,["#cccccc","#000000", "#00ffff"], 5),
            new MineObject("mineObjects.novalite", 3.5e9, 2.8e6, 24.5e9,["#ff0000", "#000000", "#ffff00"], 5),
            new MineObject("mineObjects.magicCrystal", 4.9e9, 4e6, 42e9,["#00ff00","#6633ff"], 6),
            new MineObject("mineObjects.darkstone", 7.2e9, 5.8e6, 70e9,["#660000","#000000"]),
            new MineObject("mineObjects.adamantium", 10e9, 8.5e6, 125e9,["#ff6600","#993300"]),
            new MineObject("mineObjects.fireEssence", 14e9, 12e6, 200e9,["#000000", "#ff0000","#ffff00"], 4),
            new MineObject("mineObjects.lunalite", 20e9, 17e6, 340e9,["#999900", "#ffcc66", "#ffffcc"], 5),
            new MineObject("mineObjects.mysterium", 30e9, 24e6, 680e9, ["#303030", "#ffffff", "#303030"], 7),
            new MineObject("mineObjects.cursedBone", 45e9, 33.5e6, 1.05e12, ["#000000", "#660066", "#6699ff"], 3),
            new MineObject("mineObjects.windEssence", 68e9, 48e6, 1.7e12, ["#000000", "#aaffff", "#66ffff"], 4),
            new MineObject("mineObjects.unobtanium", 100e9, 69e6, 3e12, ["#000000"], 10),
            new MineObject("mineObjects.sollite", 130e9, 95e6, 4.8e12, ["#ffff00", "#ffff00", "#ff6600"], 5),
            new MineObject("mineObjects.waterEssence", 175e9, 138e6, 7.2e12, ["#000000", "#0000ff", "#0033ff"], 4),
            new MineObject("mineObjects.absurdium", 240e9, 205e6, 12e12, ["#bbbbbb", "#ffffff"], 8),
            new MineObject("mineObjects.cosmolite", 320e9, 300e6, 20e12, ["#000066", "#000066", "#ffffff"], 5),
            new MineObject("mineObjects.shadowEssence", 435e9, 440e6, 30e12, ["#000000", "#4400ac", "#000000"], 4),
            new MineObject("mineObjects.demonite", 590e9, 640e6, 48e12, ["#ff0000", "#000000"], 9),
            new MineObject("mineObjects.eternium", 780e9, 950e6, 72e12, ["#0000ff", "#0000ff", "#ffffff"], 11),
            new MineObject("mineObjects.mysticite", 1.05e12, 1.4e9, 110e12, ["#00ff00", "#006633"]),
            new MineObject("mineObjects.lightEssence", 1.35e12, 2e9, 170e12, ["#000000", "#ffcc00", "#ffffff"], 4),
            new MineObject("smineObjects.soulstone", 1.8e12, 3.1e9, 270e12, ["#00ffff", "#003366"]),
            new MineObject("mineObjects.arcanium", 2.4e12, 4.8e9, 420e12, ["#ffff99", "#ccffff"]),
            new MineObject("mineObjects.hellstone1", 3.2e12, 7e9, 680e12, ["#00ff00", "#ff0000"], 9),
            new MineObject("mineObjects.hellstone2", 7e12, 15e9, 3.5e15, ["#00ff00", "#cd0000"], 9),
            new MineObject("mineObjects.hellstone3", 16e12, 36e9, 26e15, ["#00ff00", "#9c0000"], 9),
            new MineObject("mineObjects.hellstone4", 42e12, 89e9, 200e15, ["#00ff00", "#580000"], 9),
            new MineObject("mineObjects.hellstone666", 666e12, 3.66e12, 16.66e18, ["#00ff00", "#300000"], 12),
            new MineObject("mineObjects.infinitum", 3e15, 4e12, 150e18, ["#ffffff", "#ffffff", "#000000"], 11),
            new MineObject("mineObjects.omegaEssence", 10e15, 13e12, 1e21, ["#000000", "#2f0036", "#8b00ff"], 4),
            new MineObject("mineObjects.inverticolite", 30e15, 40e12, 6e21, ["#b6b6b6", "#151515"], 8),
            new MineObject("mineObjects.meutronium", 100e15, 170e12, 40e21, ["#0023ff", "#7f0002", "#ff9600"], 5),
            new MineObject("mineObjects.zettaWattCrystal", 300e15, 600e12, 240e21, ["#ff0090", "#00ffd7"], 6),
            new MineObject("mineObjects.theGem", 3.333e18, 9.99e15, 5.555e24, ["#00e7ff", "#005cff", "#0099ff"], 14),
            new MineObject("mineObjects.boneOfInfinity", 12.345e18, 27.89e15, 43.21e24, ["#ffffff", "#000000", "#000000"], 3),
            new MineObject("mineObjects.paperOfGods", 50e18, 111e15, 200e24, ["#6a6600", "#ffffff", "#ffffff", "#dada00"], 13),
            new MineObject("mineObjects.heavenstone", 250e18, 600e15, 2.222e27, ["#00cfff", "#fffc6a"], 9),
            new MineObject("mineObjects.holoStone", 1.111e21, 2.5e18, 19.876e27, ["#00b10d"], 10),
            new MineObject("mineObjects.antiMud", 4e21, 10e18, 123.456e27, ["#663300", "#1b0d00"]),
            new MineObject("mineObjects.quantumOrb", 10.101e21, 22.020e18, 505.55e27, ["#00ff00", "#000000", "#163d16"], 5),
            new MineObject("mineObjects.sourceOfPower", 60e21, 140e18, 6e30, ["#c3c000", "#fffa64"], 6),
            new MineObject("mineObjects.fractalium", 500e21, 1.333e21, 150e30, ["#000000", "#0088ff", "#101010"], 15),
            new MineObject("mineObjects.postInfinityEssence", 4.444e24, 11.111e21, 2.222e33, ["#000000", "#000000", "#ffffff"], 4),
            new MineObject("mineObjects.unsolvium", 44.44e24, 133.33e21, 99.999e33, ["#000000", "#7dff00", "#003401"], 7),
            new MineObject("mineObjects.thePortal", 1e27, 10e24, 10e36, ["#ff0389", "#ff0039"], 16),            
        ],        
        specialMineObjects:
            [
                {index: 89, obj: new MineObject("specialMineObjects.portalToSpace", 10e42, 50e39, 10e60, ["#5f00eb", "#0007bc"], 16)},
                {index: 90, obj: new MineObject("specialMineObjects.tinyAsteroid", 20e42, 60e39, 30e60, ["#151515", "#868488"], 17, {drops:{planetcoin: {chance: 0.001, amount: 1}}})},
                {index: 91, obj: new MineObject("specialMineObjects.smallAsteroid", 35e42, 100e39, 70e60, ["#151515", "#9f9da2"], 17, {drops:{planetcoin: {chance: 0.002, amount: 1}}})},
                {index: 92, obj: new MineObject("specialMineObjects.asteroid2021DC9", 50e42, 150e39, 130e60, ["#151515", "#9f9da2"], 17, {drops:{planetcoin: {chance: 0.003, amount: 1}}})},
                {index: 93, obj: new MineObject("specialMineObjects.deimos", 110e42, 321e39, 300e60, ["#151515", "#979797"], 17, {drops:{planetcoin: {chance: 0.001, amount: 5}}})},
                {index: 94, obj: new MineObject("specialMineObjects.phobos", 300e42, 900e39, 1e63, ["#151515", "#928275"], 18, {drops:{planetcoin: {chance: 0.002, amount: 4}}})},
                {index: 95, obj: new MineObject("specialMineObjects.hydra", 500e42, 1.2e42, 2e63, ["#151515", "#b7b7b7"], 18, {drops:{planetcoin: {chance: 0.004, amount: 3}}})},
                {index: 96, obj: new MineObject("specialMineObjects.mimas", 900e42, 1.8e42, 4.5e63, ["#151515", "#989898"], 19, {drops:{planetcoin: {chance: 0.005, amount: 3}}})},
                {index: 97, obj: new MineObject("specialMineObjects.enceladus", 2e45, 5e42, 12e63, ["#151515", "#b6bccb"], 19, {drops:{planetcoin: {chance: 0.001, amount: 25}}})},
                {index: 98, obj: new MineObject("specialMineObjects.tethys", 6e45, 20e42, 50e63, ["#151515", "#b4b4b4"], 19, {drops:{planetcoin: {chance: 0.025, amount: 1}}})},
                {index: 99, obj: new MineObject("specialMineObjects.triton", 20e45, 60e42, 222e63, ["#151515", "#c5bac3"], 19, {drops:{planetcoin: {chance: 0.04, amount: 1}}})},
                {index: 100, obj: new MineObject("specialMineObjects.pluto", 50e45, 150e42, 600e63, ["#151515", "#a59999"], 21, {drops:{planetcoin: {chance: 0.002, amount: 25}}})},
                {index: 101, obj: new MineObject("specialMineObjects.moon", 70e45, 190e42, 1e66, ["#151515", "#97928f"], 20, {drops:{planetcoin: {chance: 0.003, amount: 25}}})},
                {index: 102, obj: new MineObject("specialMineObjects.mercury", 120e45, 250e42, 1.9e66, ["#151515", "#929093"], 21, {drops:{planetcoin: {chance: 0.005, amount: 25}}})},
                {index: 103, obj: new MineObject("specialMineObjects.titan", 160e45, 320e42, 2.7e66, ["#151515", "#d6be5f"], 21, {drops:{planetcoin: {chance: 0.006, amount: 27}}})},
                {index: 104, obj: new MineObject("specialMineObjects.ganymede", 200e45, 500e42, 3.6e66, ["#151515", "#8a7b6c"], 20, {drops:{planetcoin: {chance: 0.007, amount: 25}}})},
                {index: 105, obj: new MineObject("specialMineObjects.mars", 400e45, 1.2e45, 8.5e66, ["#151515", "#dbe4f3", "#a48f6c", "#f9a75b"], 22, {drops:{planetcoin: {chance: 0.125, amount: 1}}})},
                {index: 106, obj: new MineObject("specialMineObjects.venus", 1.4e48, 4e45, 40e66, ["#151515", "#c8bba1"], 21, {drops:{planetcoin: {chance: 0.16, amount: 1}}})},
                {index: 107, obj: new MineObject("specialMineObjects.neptune", 10e48, 30e45, 400e66, ["#151515", "#77b8f2", "#3042a5", "#4167f7"], 23, {drops:{planetcoin: {chance: 0.01, amount: 20}}})},
                {index: 108, obj: new MineObject("specialMineObjects.uranus", 15e48, 45e45, 700e66, ["#83a6ac", "#d3f9fa"], 21, {drops:{planetcoin: {chance: 0.001, amount: 300}}})},
                {index: 109, obj: new MineObject("specialMineObjects.saturn", 70e48, 200e45, 8e69, ["#a0a5aa", "#0f110e", "#c6ae6e", "#e6c47f"], 24, {drops:{planetcoin: {chance: 0.002, amount: 200}}})},
                {index: 110, obj: new MineObject("specialMineObjects.jupiter", 100e48, 300e45, 13e69, ["#161616", "#9d7e62", "#a49182", "#b7bcc0"], 23, {drops:{planetcoin: {chance: 0.01, amount: 60}}})},
                {index: 111, obj: new MineObject("specialMineObjects.tres2b", 200e48, 500e45, 30e69, ["#161616", "#8ecd89", "#004c07", "#026f00"], 23, {drops:{planetcoin: {chance: 0.01, amount: 90}}})},
                {index: 112, obj: new MineObject("specialMineObjects.kepler7b", 500e48, 1.25e48, 75e69, ["#161616", "transparent", "#66c172", "#039d00"], 23, {drops:{planetcoin: {chance: 0.01, amount: 120}}})},
                {index: 113, obj: new MineObject("specialMineObjects.wasp78b", 2e51, 6e48, 400e69, ["#161616", "transparent", "#400012", "#76343b"], 23, {drops:{planetcoin: {chance: 1, amount: 2}}})},
                {index: 114, obj: new MineObject("specialMineObjects.wasp79b", 7e51, 20e48, 1.4e72, ["#381900", "transparent", "#bd6a38", "#c4917f"], 23, {drops:{planetcoin: {chance: 0.8, amount: 3}}})},
                {index: 124, obj: new MineObject("specialMineObjects.hyperSaturn", 5e60, 20e57, 25e84, ["#e5ebf0", "#ff6e00", "#ff0097", "#ff0001"], 24, {drops:{planetcoin: {chance: 0.1, amount: 400}}})},
                {index: 134, obj: new MineObject("specialMineObjects.superEarth", 6.66e69, 36.66e66, 999.99e96, ["#240024", "#d4e2ff", "#b700a1", "#1b0097"], 22, {drops:{planetcoin: {chance: 0.01, amount: 66666}}})},
                {index: 137, obj: new MineObject("specialMineObjects.colossia", 10e72, 40e69, 30e102, ["#00074d", "#001eff", "#4da1b7", "#004fe5"], 24, {drops:{planetcoin: {chance: 0.2222, amount: 7777}}})},
                {index: 138, obj: new MineObject("specialMineObjects.giagantia", 100e72, 400e69, 500e102, ["#ff1700", "#ff7e00", "#b70035", "#7a0047"], 24, {drops:{planetcoin: {chance: 0.3333, amount: 7777}}})},
                {index: 139, obj: new MineObject("specialMineObjects.garagantula", 1e75, 4e72, 8e105, ["#4d0043", "#ff1700", "#ffd8da", "#ff00fc"], 23, {drops:{planetcoin: {chance: 0.5555, amount: 9999}}})},
                {index: 140, obj: new MineObject("specialMineObjects.giagarantulaOmega", 49.99e75, 149.99e72, 999e105, ["#ffe6fc", "#ed00ff", "#f5ff00", "#3100ff"], 23, {drops:{planetcoin: {chance: 0.123456, amount: 123456}}})},
                {index: 169, obj: new MineObject("specialMineObjects.essenceOfWisdom", 1e102, 3e99, 100e144, ["#00deff", "#f5f8ff", "#0022ff"], 25, {drops:{wisdom: {chance: 0.01, amount: 1}}})},
                {index: 170, obj: new MineObject("specialMineObjects.tinyStar", 2e102, 6e99, 6e147, ["#e35c00", "#ff6700", "#ff914d"], 26, {drops:{planetcoin: {chance: 0.4, amount: 1.23456e9}}})},
                {index: 171, obj: new MineObject("specialMineObjects.trappist1", 15e102, 45e99, 100e147, ["#e33c00", "#ff4d00", "#ff7751"], 26, {drops:{planetcoin: {chance: 0.001, amount: 1e12}}})},
                {index: 172, obj: new MineObject("specialMineObjects.teide1", 100e102, 300e99, 900e147, ["#bf6700", "#cd7500", "#ff8a00"], 26, {drops:{planetcoin: {chance: 0.002, amount: 750e9}}})},
                {index: 173, obj: new MineObject("specialMineObjects.sun", 1.5e105, 5e102, 20e150, ["#fff200", "#eff000", "#fffb75"], 26, {drops:{planetcoin: {chance: 0.003, amount: 750e9}}})},
                {index: 174, obj: new MineObject("specialMineObjects.siriusA", 20e105, 70e102, 400e150, ["#f1edff", "#d5e4f0", "#ffffff"], 26, {drops:{planetcoin: {chance: 0.004, amount: 1e12}}})},
                {index: 175, obj: new MineObject("specialMineObjects.vega", 99.9e105, 299.9e102, 2.5e153, ["#869dff", "#8195f0", "#b8c6ff"], 26, {drops:{planetcoin: {chance: 0.006, amount: 1e12}}})},
                {index: 176, obj: new MineObject("specialMineObjects.pollux", 3e108, 9e105, 75e153, ["#ffaf86", "#f0995a", "#ffc5a4"], 26, {drops:{planetcoin: {chance: 0.009, amount: 1e12}}})},
                {index: 177, obj: new MineObject("specialMineObjects.arcturus", 55e108, 150e105, 1e156, ["#ff9551", "#f0622d", "#ff9988"], 26, {drops:{planetcoin: {chance: 0.025, amount: 1e12}}})},
                {index: 178, obj: new MineObject("specialMineObjects.polaris", 500e108, 2e108, 20e156, ["#e5eeff", "#b9f0e8", "#ffffff"], 26, {drops:{wisdom: {chance: 0.1, amount: 10}}})},
                {index: 179, obj: new MineObject("specialMineObjects.aldebaran", 6e111, 18e108, 33e156, ["#fd7a5a", "#ff8968", "#ffe8d8"], 26, {drops:{planetcoin: {chance: 0.075, amount: 1e12}}})},
                {index: 180, obj: new MineObject("specialMineObjects.rigel", 90e111, 270e108, 800e156, ["#e9fdff", "#aad2ea", "#c4f6ff"], 26, {drops:{wisdom: {chance: 0.2, amount: 20}}})},
                {index: 187, obj: new MineObject("specialMineObjects.muCephei", 5e120, 15e117, 350e165, ["#ff1b00", "#ea5349", "#ff8b77"], 26, {drops:{planetcoin: {chance: 0.1, amount: 10000 * (Math.pow(2, 31) - 1)}}})},
                {index: 188, obj: new MineObject("specialMineObjects.myCephei", 33e120, 99e117, 3.5e168, ["#ff1b00", "#ea2d29", "#ff6656"], 26, {drops:{planetcoin: {chance: 0.1, amount: 40e12}}})},
                {index: 189, obj: new MineObject("specialMineObjects.vyCanisMajoris", 1e123, 3e120, 175e168, ["#c21400", "#c00b00", "#ff0a00"], 26, {drops:{planetcoin: {chance: 0.2, amount: 50e12}}})},
                {index: 190, obj: new MineObject("specialMineObjects.uyScuti", 20e123, 70e120, 6e171, ["#c21400", "#c00b00", "#ff0a00"], 26, {drops:{planetcoin: {chance: 0.3, amount: 70e12}}})},
                {index: 191, obj: new MineObject("specialMineObjects.smallStarGroup", 250e123, 750e120, 100e171, ["#c27000"], 27, {drops:{wisdom: {chance: 0.1, amount: 1e4}}})},
                {index: 192, obj: new MineObject("specialMineObjects.mediumStarGroup", 4e126, 16e123, 2.2e174, ["#f6f300"], 27, {drops:{planetcoin: {chance: 1, amount: 100e12}}})},
                {index: 193, obj: new MineObject("specialMineObjects.largeStarGroup", 50e126, 200e123, 35e174, ["#a7f2f6"], 27, {drops:{planetcoin: {chance: 1, amount: 140e12}}})},
                {index: 194, obj: new MineObject("specialMineObjects.starCluster", 600e126, 1.8e126, 450e174, ["#f68b8d"], 27, {drops:{planetcoin: {chance: 1, amount: 180e12}}})},
                {index: 195, obj: new MineObject("specialMineObjects.largeStarCluster", 10e129, 30e126, 10e177, ["#5da7f6"], 27, {drops:{planetcoin: {chance: 1, amount: 300e12}}})},
                {index: 196, obj: new MineObject("specialMineObjects.hugeStarCluster", 200e129, 650e126, 250e177, ["#f61807"], 27, {drops:{planetcoin: {chance: 0.333, amount: 1.7777e15}}})},
                {index: 197, obj: new MineObject("specialMineObjects.smallMagellanicCloud", 4e132, 10e129, 6.5e180, ["#adf0f6"], 30, {drops:{planetcoin: {chance: 0.5, amount: 2.5e15}}})},
                {index: 198, obj: new MineObject("specialMineObjects.largeMagellanicCloud", 40e132, 90e129, 85e180, ["#9cbbf6"], 30, {drops:{planetcoin: {chance: 0.8, amount: 2.5e15}}})},
                {index: 199, obj: new MineObject("specialMineObjects.milkyWay", 555e132, 2.22e132, 1.4e183, ["#f3f600", "#009aff"], 28, {drops:{wisdom: {chance: 1, amount: 1e6}}})},
                {index: 200, obj: new MineObject("specialMineObjects.andromedaGalaxy", 4e135, 12e132, 16e183, ["#f3f600", "#00eaff"], 28, {drops:{planetcoin: {chance: 0.1, amount: 40e15}}})},
                {index: 201, obj: new MineObject("specialMineObjects.sombreroGalaxy", 40e135, 150e132, 225e183, ["#dbdaea", "#f4f2fe", "#5e5c50"], 29, {drops:{planetcoin: {chance: 0.15, amount: 40e15}}})},
                {index: 202, obj: new MineObject("specialMineObjects.tadpoleGalaxy", 700e135, 2e135, 5e186, ["#b18d7f", "#557da5"], 28, {drops:{planetcoin: {chance: 0.25, amount: 50e15}}})},
                {index: 203, obj: new MineObject("specialMineObjects.condorGalaxy", 15e138, 45e135, 5e186, ["#fafafd", "#b3c1d1"], 28, {drops:{planetcoin: {chance: 0.1777, amount: 122.222e15}}})},
                {index: 204, obj: new MineObject("specialMineObjects.cometGalaxy", 300e138, 900e135, 120e186, ["#fffdfc", "#b3c1d1"], 28, {drops:{planetcoin: {chance: 0.3444, amount: 122.222e15}}})},
                {index: 205, obj: new MineObject("specialMineObjects.localGroup", 5e141, 17.777e138, 2e189, ["#00d4ff"], 31, {drops:{wisdom: {chance: 0.01, amount: 1e10}}})},
                {index: 206, obj: new MineObject("specialMineObjects.ic1101", 34e141, 111.222e138, 22.22e189, ["#f6f6f6"], 30, {drops:{planetcoin: {chance: 0.1234, amount: 777.777e15}}})},
                {index: 207, obj: new MineObject("specialMineObjects.bigGalaxyGroup", 400e141, 2e141, 300e189, ["#f6b2f2"], 31, {drops:{planetcoin: {chance: 0.2, amount: 800e15}}})},
                {index: 208, obj: new MineObject("specialMineObjects.smallGalaxyCluster", 6e144, 18e141, 5.5e192, ["#6cf1f6"], 32, {drops:{planetcoin: {chance: 0.4, amount: 800e15}}})},
                {index: 209, obj: new MineObject("specialMineObjects.virgoCluster", 17e144, 50e141, 17e192, ["#b0d1f6"], 32, {drops:{planetcoin: {chance: 0.4, amount: 1.33e18}}})},
                {index: 210, obj: new MineObject("specialMineObjects.galaxySupercluster", 200e144, 700e141, 225e192, ["#009ff6"], 33, {drops:{wisdom: {chance: 0.1, amount: 1e12}}})},
                {index: 211, obj: new MineObject("specialMineObjects.galaxyMegacluster", 3.1415926e147, 6.2831852e144, 3.5e195, ["#a775f6"], 33, {drops:{wisdom: {chance: 0.1, amount: 1e13}}})},
                {index: 212, obj: new MineObject("specialMineObjects.filament", 99.999e147, 999.999e144, 99.999e195, ["#f6e400", "#ff00d5"], 34, {drops:{wisdom: {chance: 0.1, amount: 1e14}}})},
                {index: 213, obj: new MineObject("specialMineObjects.sloanGreatWall", 999.999e147, 9.999e147, 1.0101e198, ["#f6e2c4", "#008f11"], 34, {drops:{planetcoin: {chance: 0.7777, amount: 22.222e18}}})},
                {index: 214, obj: new MineObject("specialMineObjects.theUniverse", 99.999e150, 9.999e150, 99.999e198, ["#000000", "#ff0000", "#00ff00", "#0000ff"], 35, {drops:{wisdom: {chance: 1, amount: 1e15}}})}
            ],
        currentMineObject: null,
        mineObjectLevel: 0,
        highestMineObjectLevel: 0,
        upgrades:
            {
                blacksmith: new Upgrade("Blacksmith", "Increase the minimum Power of Pickaxes",
                    level => Decimal.pow(1.2, level).mul(30).add(level * 75),
                    level => Decimal.pow(1.09, level).mul(20).add(level * 10).mul(applyUpgrade(game.gemUpgrades.blacksmith))
                        .mul(game.powers.data.values[POWER_CRAFTSMENSHIP]),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "", "", 0),
                        img: "upgrades/blacksmith.png"
                    }),
                blacksmithSkill: new Upgrade("Blacksmith Skill", "Increase the minimum Quality of Pickaxes",
                    level => new Decimal(80e3).mul(Decimal.pow(3, level)),
                    level => new Decimal(0.9 + 0.05 * level).mul(applyUpgrade(game.gemUpgrades.blacksmithSkill))
                        .mul(game.powers.data.values[POWER_EXPERTISE]),
                    {
                        getEffectDisplay: effectDisplayTemplates.percentStandard(2, "", 1e6, 0),
                        img: "upgrades/blacksmithskill.png"
                    }),
                blacksmithBonus: new Upgrade("Blacksmith Expertise", "25% Chance to get a Bonus on Pickaxes (+15% pow per bonus point)",
                    level => new Decimal(1e6).mul(Decimal.pow(5, level)),
                    level => Decimal.floor(Math.random() < 0.25 && level > 0 ? Math.random() * (level) : 0),
                    {
                        maxLevel: 10,
                        getEffectDisplay: function ()
                        {
                            if (this.level === this.maxLevel)
                            {
                                return "+" + this.level;
                            }
                            return "+" + this.level + " → +" + (this.level + 1);
                        },
                        img: "upgrades/blacksmithbonus.png"
                    }),
                gemChance: new Upgrade("Gem Chance", "Increase the Chance to get Gems",
                    level => new Decimal(200).mul(Decimal.pow(2.5, level)),
                    level => new Decimal(0.02 + 0.004 * level).add(applyUpgrade(game.gemUpgrades.gemChance)).add(applyUpgrade(game.planetCoinUpgrades.gemChance)),
                    {
                        maxLevel: 20,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(1),
                        img: "upgrades/gemchance.png"
                    }),
                activePower: new Upgrade("Active Power", "Increase Click Damage",
                    level => new Decimal(1e3).mul(Decimal.pow(2, level)),
                    level => new Decimal(1 + 0.15 * level).mul(Decimal.pow(1.03, level)),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2),
                        img: "upgrades/activepower.png"
                    }),
                idlePower: new Upgrade("Idle Power", "Increase Idle Click Damage",
                    level => new Decimal(200).mul(Decimal.pow(2, level)),
                    level => new Decimal(0.75 + 0.25 * level).mul(Decimal.pow(1.03, level)).mul(applyUpgrade(game.gemUpgrades.idlePower)),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2),
                        img: "upgrades/idlepower.png"
                    }),
                idleSpeed: new Upgrade("Idle Speed", "Increase Idle Click Speed",
                    level => new Decimal(50).mul(Decimal.pow(2.2, level + 3 * Math.max(0, level - 50))),
                    level => Decimal.pow(1.05, level),
                    {
                        maxLevel: 60,
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "", "/s", 2),
                        img: "upgrades/idlespeed.png"
                    }),
                gemWaster: new Upgrade("Gem Waster", "Use more Gems at once to craft better Pickaxes",
                    level => new Decimal(90e6).mul(Decimal.pow(2000, level * level)),
                    level => Decimal.floor(Decimal.pow(3.3, level)),
                    {
                        maxLevel: 10,
                        getEffectDisplay: function()
                        {
                            let off = applyUpgrade(game.gemUpgrades.gemWaster).toNumber();
                            let e1 = this.getEffect(this.level + off), e2 = this.getEffect(this.level + off + 1);
                            if(this.level === this.getMaxLevel())
                            {
                                return functions.formatThousands(e1);
                            }

                            return functions.formatThousands(e1) + " → " +
                                functions.formatThousands(e2);
                        },
                        img: "upgrades/gemwaster.png"
                    })
            },
        gemUpgrades:
            {
                blacksmith: new GemUpgrade("Blacksmith+", "Make your blacksmith even stronger",
                    level => new Decimal(100 + 7 * level).mul(Decimal.pow(1.025, Math.max(0, level - 25))),
                    level => Decimal.pow(1.08, level),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2),
                        img: "upgrades/blacksmith.png"
                    }),
                blacksmithSkill: new GemUpgrade("Blacksmith Skill II", "Pickaxes get a High Quality Boost",
                    level => Utils.roundBase(new Decimal(250).mul(Decimal.pow(280 / 250, level)), 1),
                    level => new Decimal(1 + 0.1 * level).pow(1.1131),
                    {
                        maxLevel: 50,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(1),
                        img: "upgrades/blacksmithskill.png"
                    }),
                idlePower: new GemUpgrade("Idle Power II", "No more clicking needed! Idle Clicking gets even stronger",
                    level => new Decimal(100 + 10 * level).mul(Decimal.pow(1.01, Math.max(0, level - 50))),
                    level => new Decimal(1 + 0.15 * level).pow(1.2518),
                    {
                        maxLevel: 100,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(1),
                        img: "upgrades/idlepower.png"
                    }),
                gemWaster: new GemUpgrade("Gem Waster+", "Waste even more Gems! But are they even wasted?",
                    level => new Decimal(10e3).mul(Decimal.pow(45, level)),
                    level => new Decimal(level),
                    {
                        maxLevel: 5,
                        getEffectDisplay: effectDisplayTemplates.thousandsStandard( "+", " Level(s)"),
                        img: "upgrades/gemwaster.png"
                    }),
                gemChance: new GemUpgrade("Gem Chance II", "Increase the Chance to get Gems",
                    level => (new Decimal(50 + 30 * level).pow(1.3354)).mul(Decimal.pow(1.125, Math.max(level - 30, 0))),
                    level => new Decimal(0.005 * level),
                    {
                        maxLevel: 80,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(2, "+"),
                        img: "upgrades/gemchance.png"
                    }),
                gemMultiply: new GemUpgrade("Gem Multiplication", "You find multiple gems, even though it should be just one",
                    level => (new Decimal(1000).mul(Decimal.pow(1.05, level))
                        .mul(1 + 0.02 * Math.max(level - 250, 0)).add(1200 * level))
                        .mul(1 + 0.01 * Math.max(level - 1000, 0))
                        .mul(1 + 0.02 * Math.max(level - 2500, 0))
                        .mul(Decimal.pow(1.002, Math.max(level - 10000, 0))), //softcap
                    level => Decimal.round(((Decimal.pow(1.05, level)).add(level)).mul(applyUpgrade(game.planetCoinUpgrades.gemMultiply))
                        .mul(applyUpgrade(game.powers.upgrades.gemBoostSimple))
                        .mul(game.powers.data.values[POWER_EXQUISITY])),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "", " each", 0, new Decimal(1e12)),
                        img: "upgrades/gemmulti.png"
                    }),
                offlineGems: new GemUpgrade("Offline Gems", "You earn Gems even when you are away",
                    level => new Decimal(4444).mul(Decimal.pow(4, level)),
                    level => new Decimal(0.05 * level),
                    {
                        maxLevel: 15,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(0),
                        img: "upgrades/gemoffline.png"
                    })
            },
        gemUpgradesUnlocked: () => game.highestMineObjectLevel >= 61,
        planetCoins: new Decimal(0),
        maxPlanetCoins: new Decimal(0),
        planetCoinUpgrades:
            {
                activePower: new PCUpgrade("Active Power", "Deal click damage relative to your Damage/s",
                    level => new Decimal(100).mul(Decimal.pow(10, level)),
                    level => new Decimal(0.01 * level),
                    {
                        getEffectDisplay: effectDisplayTemplates.percentStandard(0),
                        maxLevel: 10,
                        img: "upgrades/activepower.png"
                    }),
                gemMultiply: new PCUpgrade("Gem Multiplication Multiplication", "You find multiple multiple gems, even though there should be just multiple gems",
                    level => new Decimal(100).mul(Decimal.pow(7.77, level)),
                    level => new Decimal(1 + 0.1 * level),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 1, new Decimal(1e12)),
                        img: "upgrades/gemmultimulti.png"
                    }),
                lastObjGems: new PCUpgrade("Gem Bonus", "The highest damageable Object drops more Gems",
                    level => new Decimal(1e6).mul(Decimal.pow(100, level)),
                    level => new Decimal(1 + level),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 1, new Decimal(1e12)),
                        img: "upgrades/gembonus.png",
                        maxLevel: 19
                    }),
                gemChance: new PCUpgrade("Gem Chance III", "Increase the Chance to get Gems even more",
                    level => new Decimal(1000).mul(Decimal.pow(1.4, level)),
                    level => new Decimal(0.01 * level),
                    {
                        maxLevel: 50,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(2, "+"),
                        img: "upgrades/gemchance.png"
                    }),
                offlinePC: new PCUpgrade("Offline Planet Coins", "You earn Planet Coins even when you are away",
                    level => new Decimal(10000).mul(Decimal.pow(10, level)),
                    level => new Decimal(0.05 * level),
                    {
                        maxLevel: 10,
                        getEffectDisplay: effectDisplayTemplates.percentStandard(0),
                        img: "upgrades/pcoffline.png"
                    }),
                offlineTime: new PCUpgrade("Offline Time", "Increase the max offline time",
                    level => new Decimal(10000).mul(Decimal.pow(4, level)),
                    level => new Decimal(level),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(0, "+", "h"),
                        maxLevel: 42,
                        img: "upgrades/offlinetime.png"
                    }),
                bulkCraft: new PCUpgrade("Bulk Crafting", "Bulk Craft Pickaxes by pressing Shift while crafting",
                    level => new Decimal(1e12).mul(Decimal.pow(10, level)),
                    level => new Decimal(1 + level),
                    {
                        getEffectDisplay: effectDisplayTemplates.numberStandard(0, "", " at once"),
                        maxLevel: 99,
                        img: "upgrades/bulkcraft.png"
                    })
            },
        wisdom: new Decimal(0),
        maxWisdom: new Decimal(0),
        powers:
            {
                data:
                    {
                        values: [new Decimal(1), new Decimal(1), new Decimal(1), new Decimal(1), new Decimal(1)],
                        names: ["Power of Mining", "Power of Craftsmenship", "Power of Expertise", "Power of Wisdom", "Power of Exquisity"],
                        icons: ["pickaxe.png", "upgrades/blacksmith.png", "upgrades/blacksmithskill.png", "wisdom.png", "gem.png"]
                    },
                upgrades: {
                    powerPowerActive: new WisdomUpgrade("Power Power (Active)", "Mine to Mine faster! Multiply your Power of Mining with each active click",
                        level => Decimal.pow(1000, level).pow(Decimal.pow(1.05, Math.max(0, level - 50))),
                        level => new Decimal(1 + 0.00005 * Math.cbrt(level) * applyUpgrade(game.powers.upgrades.powerPowerPower).toNumber()),
                        {
                            getEffectDisplay: effectDisplayTemplates.percentStandard(4)
                        }),
                    powerPowerIdle: new WisdomUpgrade("Power Power (Idle)", "Learn without doing anything! Multiply your Power of Mining with each idle click",
                        level => (Decimal.pow(1000, level).mul(1000)).pow(Decimal.pow(1.05, Math.max(0, level - 50))),
                        level => new Decimal(1 + 0.00002 * Math.cbrt(level) * applyUpgrade(game.powers.upgrades.powerPowerPower).toNumber()),
                        {
                            getEffectDisplay: effectDisplayTemplates.percentStandard(4)
                        }),
                    damageBoost: new WisdomUpgrade("Increasing Damage Boost", "Become smarter with every Mineral you discover. Deal more Idle Damage depending on highest Mineral reached",
                        level => Decimal.pow(512, level + 2).pow(1 + level / 2),
                        level =>
                        {
                            if(level === 0)
                            {
                                return new Decimal(1);
                            }
                            return Decimal.pow(1.05 + 0.03 * level, Math.max(0, game.highestMineObjectLevel - 170)).mul(level);
                        },
                        {
                            maxLevel: 20,
                            getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2)
                        }),
                    gemBoostSimple: new WisdomUpgrade("Simple Gem Boost", "Just Boost Gems",
                        level => Decimal.pow(1e10, Math.pow(level, 1.2)).mul(1e10),
                        level => new Decimal(1 + 0.5 * level),
                        {
                            maxLevel: 10
                        }),
                    damageBoostUpgrades: new WisdomUpgrade("Upgrade Damage Upgrade", "Deal More Damage depending on the amount of wisdom Upgrades bought",
                        level => Decimal.pow(1e25, level).mul(1e50),
                        level => Decimal.pow(1 + 0.05 * level, functions.getBoughtUpgrades(game.powers.upgrades)),
                        {
                            maxLevel: 10,
                            getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2)
                        }),
                    powerPowerPower: new WisdomUpgrade("Power Power Power!", "Learn more as you learn more! Increase the Power of Power Power Upgrades",
                        level => (Decimal.pow(1e10, level * level).mul(1e100)).pow(Math.max(1, level - 10)),
                        level => new Decimal(1 + 0.03 * level), {
                            getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x", "", 2)
                        }),
                    powerResetKeep: new WisdomUpgrade("Power Prestige Retainment", "Keep more of a power when prestiging it",
                        level => Decimal.pow(1e25, level * level).mul(1e25),
                        level => new Decimal(0.5 + 0.5 * (1 - Math.pow(0.9, level))),
                        {
                            maxLevel: 10,
                            getEffectDisplay: effectDisplayTemplates.numberStandard(2, "x^", "", 2)
                        })
                },
                unlocked: () => game.highestMineObjectLevel >= 170
            },
        story:
            {
                page: 0,
                scrollY: 0,
                highestUnlocked: -1,
                notifications: 0,
                longGoal1: Decimal.pow(2, 1024),
                longGoal2: Decimal.pow(2, 4096),
                milestones:
                    {
                        //[requirement, quest-text/what to do, page]
                        gameStart: ["true", "milestones.gameStart", 0],
                        firstMud: ["game.highestMineObjectLevel >= 1", "milestones.firstMud", 0],
                        firstPaper: ["game.highestMineObjectLevel >= 2", "milestones.firstPaper", 0],
                        blacksmithUpgrade: ["game.upgrades.blacksmith.level > 0", "milestones.blacksmithUpgrade", 0],
                        firstSalt: ["game.highestMineObjectLevel >= 3", "milestones.firstSalt", 0],
                        firstClay: ["game.highestMineObjectLevel >= 4", "milestones.firstClay", 0],
                        firstStone: ["game.highestMineObjectLevel >= 5", "milestones.firstStone", 1],
                        tenThousand: ["game.highestMoney.gte(10e3)", "milestones.tenThousand", 1],
                        firstSpookyBone: ["game.highestMineObjectLevel >= 13", "milestones.firstSpookyBone", 1],
                        millionaire: ["game.highestMoney.gte(1e6)", "milestones.millionaire", 1],
                        preciousStones: ["game.highestMineObjectLevel >= 18", "milestones.preciousStones", 1],
                        gemWaster: ["game.upgrades.gemWaster.level >= 1", "milestones.gemWaster", 1],
                        unrealStones: ["game.highestMineObjectLevel >= 27", "milestones.unrealStones", 2],
                        fireEssence: ["game.highestMineObjectLevel >= 33", "milestones.fireEssence", 2],
                        mysterium: ["game.highestMineObjectLevel >= 35", "milestones.mysterium", 2],
                        fiftyTrillion: ["game.highestMoney.gte(50e12)", "milestones.fiftyTrillion", 2],
                        lightEssence: ["game.highestMineObjectLevel >= 47", "milestones.lightEssence", 2],
                        hellStone: ["game.highestMineObjectLevel >= 50", "milestones.hellStone", 2],
                        hellStoneFinal: ["game.highestMineObjectLevel >= 54", "milestones.hellStoneFinal", 2],
                        infinitum: ["game.highestMineObjectLevel >= 55", "milestones.infinitum", 3],
                        theGem: ["game.highestMineObjectLevel >= 60", "milestones.theGem", 3],
                        gemUpgrades: ["game.highestMineObjectLevel >= 61", "milestones.gemUpgrades", 3],
                        fractalium: ["game.highestMineObjectLevel >= 68", "milestones.fractalium", 3],
                        reachPortal: ["game.highestMineObjectLevel >= 71", "milestones.reachPortal", 4],
                        breakPortal: ["game.highestMineObjectLevel >= 72", "milestones.breakPortal", 4],
                        proceduralRealm1: ["game.highestMineObjectLevel >= 81", "milestones.proceduralRealm1", 4],
                        reachSpacePortal: ["game.highestMineObjectLevel >= 89", "milestones.reachSpacePortal", 4],
                        breakSpacePortal: ["game.highestMineObjectLevel >= 90", "milestones.breakSpacePortal", 5],
                        planetcoin: ["game.maxPlanetCoins.gt(0)", "milestones.planetcoin", 5],
                        pluto: ["game.highestMineObjectLevel >= 101", "milestones.pluto", 5],
                        theMoon: ["game.highestMineObjectLevel >= 102", "milestones.theMoon", 5],
                        mars: ["game.highestMineObjectLevel >= 105", "milestones.mars", 5],
                        venus: ["game.highestMineObjectLevel >= 106", "milestones.venus", 5],
                        saturn: ["game.highestMineObjectLevel >= 109", "milestones.saturn", 5],
                        jupiter: ["game.highestMineObjectLevel >= 110", "milestones.jupiter", 5],
                        wasp79b: ["game.highestMineObjectLevel >= 114", "milestones.wasp79b", 5],
                        hyperSaturn: ["game.highestMineObjectLevel >= 124", "milestones.hyperSaturn", 6],
                        superEarth: ["game.highestMineObjectLevel >= 134", "milestones.superEarth", 6],
                        colossia: ["game.highestMineObjectLevel >= 137", "milestones.colossia", 6],
                        giagantia: ["game.highestMineObjectLevel >= 138", "milestones.giagantia", 6],
                        garagantula: ["game.highestMineObjectLevel >= 139", "milestones.garagantula", 6],
                        planetOmega: ["game.highestMineObjectLevel >= 140", "milestones.planetOmega", 6],
                        breakPlanetOmega: ["game.highestMineObjectLevel >= 141", "milestones.breakPlanetOmega", 6],
                        planet160: ["game.highestMineObjectLevel >= 159", "milestones.planet160", 6],
                        reachWisdomEssence: ["game.highestMineObjectLevel >= 169", "milestones.reachWisdomEssence", 7],
                        breakWisdomEssence: ["game.highestMineObjectLevel >= 170", "milestones.breakWisdomEssence", 7],
                        miningStars: ["game.highestMineObjectLevel >= 171", "milestones.miningStars", 7],
                        wisdomUpgrade: ["functions.getBoughtUpgrades(game.powers.upgrades) >= 1", "milestones.wisdomUpgrade", 7],
                        mineSun: ["game.highestMineObjectLevel >= 174", "milestones.mineSun", 7],
                        minePolaris: ["game.highestMineObjectLevel >= 179", "milestones.minePolaris", 7],
                        mineBetelgeuse: ["game.highestMineObjectLevel >= 187", "milestones.mineBetelgeuse", 7],
                        mineScuti: ["game.highestMineObjectLevel >= 191", "milestones.mineScuti", 7],
                        mineStarGroup: ["game.highestMineObjectLevel >= 192", "milestones.mineStarGroup", 8],
                        mineSmallGalaxy: ["game.highestMineObjectLevel >= 198", "milestones.mineSmallGalaxy", 8],
                        mineMilkyWay: ["game.highestMineObjectLevel >= 200", "milestones.mineMilkyWay", 8],
                        mineLocalGroup: ["game.highestMineObjectLevel >= 206", "milestones.mineLocalGroup", 8],
                        mineGalaxyCluster: ["game.highestMineObjectLevel >= 209", "milestones.mineGalaxyCluster", 8],
                        mineGalaxySuperCluster: ["game.highestMineObjectLevel >= 211", "milestones.mineGalaxySuperCluster", 8],
                        mineFilament: ["game.highestMineObjectLevel >= 213", "milestones.mineFilament", 8],
                        reachUniverse: ["game.highestMineObjectLevel >= 214", "milestones.reachUniverse", 8],
                        mineUniverse: ["game.highestMineObjectLevel >= 215", "milestones.mineUniverse", 8]
                    },
            },
        highlightedUpgrade: null,
        settings:
            {
                theme: "light",
                tab: "main",
                upgradeTab: "money",
                numberFormatterIndex: 0,
                exportFieldString: "Exported String will appear here...",
                showMineObjLevel: false,
                showMinCraftDamage: false,
                language: "en"
            }
    }
;