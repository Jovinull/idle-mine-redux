const messages = {
    en: {
        title: "Idle Mine: Redux",
        money: "Money",
        gems: "Gems",
        planetCoins: "Planet Coins",
        mining: "Mining",
        settings: "Settings",
        story: "Story",
        save: "Save",
        export: "Export",
        import: "Import",
        hardReset: "Hard Reset",
        welcome: "Welcome to Idle Mine: Redux!",

        upgrades: {
            money: "Money Upgrades",
            gems: "Gem Upgrades",
            planetcoins: "PC Upgrades"
        },
        story: {
            chapters: [
                "Welcome to Idle Mine: Redux!",
                "The real Adventure begins!",
                "Mysterious Materials",
                "It's NOT over",
                "New Dimensions",
                "Gone to Space",
                "Hyperplanets",
                "The Wisdom Era",
                "Cosmic Superstructures"
            ],
            gameStart: {
                title: "Welcome to Idle Mine: Redux!",
                text1: "So you have decided to start with mining. You have heard that many treasures lie below the surface, so you can't wait to find out what you can find. Maybe you can become rich?",
                text2: "There's you, and your Auto-Mining-Device. Let's get started! This also acts as a sort of guide. If something is unclear, look into here as a reference."
            },
            firstMud: {
                text1: "You mined your first piece of Mud! Well, it's not worth a lot, but you've got to start somewhere.",
                quote: "Just some ordinary Mud",
                text2: "Even 2 $ can be a good start. Maybe you should try to mine something more precious?"
            },
            firstPaper: {
                text1: "You take your Pickaxe and proceed to hit some old homework with it (You didn't need it anymore, anyway).",
                quote: "Paper (Your old Homework)",
                text2: "For some reason it was worth a whopping 10 $! It seems like you've got the hang of it. Unfortunately, you also find out that it was kind of resistant to your pickaxe, so you need to craft a better one to keep growing. Luckily you have this rusty Blacksmith at home (for whatever reason). It doesn't look good enough though. You should try to Upgrade it.",
                howToGetGems: "How do I get Gems?",
                gemExplanation: "Every time you mine something, there is a chance that you will be awarded a Gem, used to craft Pickaxes.",
                statsTitle: "Stats, Stats, Stats...",
                statsText: "Some general Tips: Every Mineral has defense, which is an absolute reduction to click and idle damage. To find out what's the most efficient to mine, look at where Money/s and Money per Click are the highest. More gems/s mean that you can get gems faster to craft new Pickaxes. The base Damage of a pickaxe is calculated by multiplying its power with the quality (for example: 1,000 * 150% = 1,500). After that, Active and Idle Power Upgrades are applied."
            },
            blacksmithUpgrade: {
                text1: "Just a little improvement to your Blacksmith makes it seem much stronger!",
                quote: "Blacksmith Power!",
                text2: "You should try to craft a new Pickaxe. You only need one Gem to do it! Luckily you have a few of them at home. You don't remember when you got them, they are just here for some reason. After crafting, you should try your luck with salt.",
                whenToCraft: "When should I craft?",
                craftExplanation: "The power and quality of a pickaxe is based on Blacksmith Upgrades. The resulting power and quality will be random, but will at least be as much as the minimum power and quality."
            },
            firstSalt: {
                text1: "You take out all the salt from your kitchen drawer, and start to hammer on it with your newly crafted Pickaxe. It works surprisingly well, you think.",
                quote: "Salt (from your Kitchen Drawer)",
                text2: "22 $! That is sure a lot. You could buy some Games from it, or you take it seriously and invest the money into your blacksmith."
            },
            firstClay: {
                text1: "You go to a nearby lake and dig out some clay.",
                quote: "Clay (fresh from the Lake)",
                text2: "It's already worth 50 $! That's much more than salt. Of course it was tougher, but the reward speaks for itself. There's a Cave nearby. This is where the real adventure will start. Maybe you should improve your blacksmith a bit more and get a new Pickaxe before proceeding."
            },
            firstStone: {
                text1: "Of course, the first thing you see when entering the cave is Stone and Rocks. And there is sure a lot of it. There is so much to be mined...",
                quote: "Rock (from the cave entrance)",
                text2: "120 $! Not bad at all. You see a big growth coming. Venture deeper into the Cave and mine better and better stuff. Don't forget to buy Upgrades and craft new Pickaxes.",
                offlineIncomeTitle: "Offline Income",
                offlineIncomeText: "For up to 6 hours, you can earn 50% of your Money per second offline. You have to be offline for at least 5 minutes to be eligible for offline money."
            },
            tenThousand: {
                quote: "I Gotta be rich!",
                text1: "Ten Thousand dollars! That's surely more than your average wage. I think you are far enough to pay your living with it.",
                text2: "But also, improving your mining technology is very expensive, but it will pay off very fast."
            },
            firstSpookyBone: {
                text1: "You have already gone down a good bit into the mine. Stuff is getting precious down there. The first abnormal minerals are appearing.",
                quote: "Ohhhh, Spooky!",
                text2: "{amount} $ for a bunch of Bones? Well, they are spooky! Even though you don't know why exactly they are..."
            },
            millionaire: {
                text1: "There are multiple ways to earn a million: Winning at a quiz show, having a certain job, or mining precious materials? Anyways, you've just reached a Million!",
                quote: "Rich. For real now.",
                text2: "The journey doesn't end here! Why not get even richer? The cave is seemingly endless."
            },
            preciousStones: {
                text1: "Precious stuff is appearing now. You are starting to see typical Gemstones: Sapphire, Ruby, and Emerald. You don't know how deep you are, but this cave is the biggest you've ever seen. It just never ends and seems to get bigger the deeper you go.",
                quote: "Precious, and worth Millions",
                text2: "Are we reaching the end? Definitely not!"
            },
            gemWaster: {
                text1: "You earn Gems more easily now, so you got an Idea: if you invest multiple Gems into a Pickaxe, it should be even better. Now you can also use 3 Gems to craft a Pickaxe, but they turn out to be much better.",
                quote: "Not a waste at all!"
            },
            unrealStones: {
                text1: "You don't know what it is. It has never been discovered before. You are probably the first who has gone so far.",
                quote: "What is this?",
                text2: "Just about 20 of these will make you the world's richest person. Maybe the money could also be used to study and research this mysterious material.",
                text3: "Along the way, you discover more unknown and ultra-precious things that have yet to be studied."
            },
            fireEssence: {
                text1: "There it is. Another type of essence. This time it seems to be fiery and very hot. Sadly you don't have a thermometer with you.",
                quote: "HOT, HOT!",
                text2: "Now, you need only **one** to become the richest person in the world. Alternatively, you could also give every person on the world about 25 $. That would be enough for some food."
            },
            mysterium: {
                quote: "I don't know either",
                text1: "This thing is so precious that there isn't even a name for it, so let's just call it 'Mysterium', because it is a mystery, after all. It will be forever mysterious and the mystery will never be solved. How mysterious is that?"
            },
            fiftyTrillion: {
                text1: "That sure is a lot of Money. Maybe it is enough to buy the Moon?",
                quote: "Richer than Rich",
                text2: "This is enough to pay off the US National debt.",
                button: "PAY"
            },
            lightEssence: {
                text1: "Yet another Essence found. This one glows a lot and is even bright, so bright that a few of them could light up an entire city.",
                quote: "Enlighten!",
                text2: "You still have no idea where the end is, you look down into a colorful cluster of minerals, shining in many different colors. You feel like that will change soon."
            },
            hellStone: {
                text1: "After passing several huge mineral clusters, and feeling like going down for many kilometers, you start to feel the heat of the air down here. It is still very bearable, though. A few dozen meters later, a **sudden change** happens.",
                quote: "Is this hell?",
                text2: "These Minerals are completely different. They are very hot, don’t glow at all and don't look beautiful either. On the other hand, they are worth a ton of money and you feel like you've hit the end. *But did you?*"
            },
            hellStoneFinal: {
                title: "The End?",
                text1: "The Hellstone is getting darker and darker, harder and harder to break; an end seems to be near. Suddenly, the cave ends. The ground is filled with even more demonic Hellstone. They are nearly pitch black and seem unbreakable. You need a very good Pickaxe now.",
                quote: "Unbreakable? I doubt that!",
                text2: "Let's get a good Pickaxe, mine this, and find out more! Maybe we did it?"
            },
            infinitum: {
                text1: "After breaking the last Hellstone, a small hole opens up below it. You didn't reach the end. There was just that wall of Hellstone...",
                quote: "To Infinity. And beyond!",
                text2: "By now, you have probably accepted that this cave is endless and will never end, which in return means that you will become so rich that nobody can believe it."
            },
            theGem: {
                text1: "It is really crazy down here. Those minerals don't even fit into the real world anymore. This just feels like another realm. You notice that progressing seems to get harder and harder...",
                text2: "Suddenly, you see light at the end of the tunnel. A huge Gem. A really huge Gem. Breaking it would give you insights you couldn't think of before. Something to speed up progress a lot.",
                quote: "It's not just a Gem!"
            },
            gemUpgrades: {
                text1: "You instantly feel a wave of wisdom streaming through your body...",
                text2: "That's it! Why should only money be invested in Upgrades? What if we do that with gems?",
                quote: "You are of much use now",
                text3: "With gems, you can now improve your blacksmith, the Auto-Mining-Device, and find even more gems! **Infinite Growth awaits!**"
            },
            fractalium: {
                text1: "You are in another realm. High amounts of energy and light, inverted minerals, and holograms. The values of these objects are tremendous. Even one of them means infinite wealth. Now, you make an even crazier discovery.",
                quote: "z<sub>n+1</sub> = z<sub>n</sub><sup>2</sup> + c",
                text2: "A fractal. Infinite complexity, yet so simple to describe. {value} $ is enough to buy a white dwarf, an Earth-sized ball of compressed carbon (a Diamond!).",
                text3: "The cave is starting to get slimmer again, the end might be near?"
            },
            reachPortal: {
                text1: "It all shrinks down to just a small portal, about 2 meters in diameter, glowing in a mysterious reddish pink. Breaking it should reveal more...",
                quote: "T́͝͞o̶͟ ͡͡o̕͝t̴́h̕e͘͜͡r͞ ̵̶̷D͏i̵͠͠ḿé̢ns̡͟i̡͞o̧͜ns̨̛,͏͢ ͢an̵̸͢d͏ ̨͘R̨҉̸ea̴͝l̡m̵̀ş͘<",
                text2: "It is very tough to break, nearly invincible. You need a very strong Pickaxe. Now, upgrade your Blacksmith, invest money and gems, and make a very powerful Pickaxe to break through!"
            },
            breakPortal: {
                text1: "The portal slowly drags you in. The air seems to become colder. Everything around you seems to dim until you are just surrounded by darkness. You stay calm. You are prepared and think you know what will happen next.",
                text2: "Suddenly, you hear something, very far in the background.",
                quote: "“I waited for you”",
                text3: "Were you chosen to be a miner? Does that explain why you had a blacksmith and leftover gems at home? You are starting to understand. You were allowed to find out about the infinite riches of the underground."
            },
            proceduralRealm1: {
                text1: "It's been a while, and you still dig down (and the numbers grow, just as expected). There is no end in sight, but that is actually good.",
                quote: "Just procedural, like all the other stuff",
                text2: "Those mineral names are weird, they make no sense. No wonder why this is the 'procedural realm,' but is it infinite?"
            },
            reachSpacePortal: {
                text1: "Aren't procedural realms infinite? Well, this one isn't. It closes down yet again. This portal is bluish, and when you look through it, you just see stars and galaxies.",
                quote: "SPAAAAACE!",
                text2: "It's a portal to space. There's a little spaceship standing beside the portal, it must have been the mining god you heard lately (He waited for you, after all). This portal is tough yet again, but not so resistant. Make a pickaxe and open this thing!"
            },
            breakSpacePortal: {
                text1: "You enter the spaceship and fly straight through the portal. In the far distance, you can see the sun, and many asteroids flying around you.",
                quote: "Welcome to the Asteroid Belt!",
                text2: "You actually are in the asteroid belt, which isn't so far away (astronomically speaking). Well, it's time to mine asteroids."
            },
            planetcoin: {
                text1: "As this object breaks, something pops out of it... what is this? It is a new type of resource, a Planet Coin.",
                quote: "New opportunities to Upgrade!",
                text2: "Check out the new Upgrades, it will surely be worth it!"
            },
            pluto: {
                text1: "You did it! You mined a planet! Hmm, it's just a dwarf planet, but it was a real planet until 2006.",
                quote: "Almost a Planet",
                text2: "Why do objects keep reappearing here after you mine them? It seems like the universe of *Idle Mine: Redux* ignores several laws of physics."
            },
            theMoon: {
                text1: "You just mined the Moon! Luckily, it reappears every time you mine it...",
                quote: "Man in the Moon",
                text2: "Our Moon is one of the biggest moons in the solar system, you've gotten pretty far."
            },
            mars: {
                text1: "Mars is one of our nearest planets that might be colonized in the near future. If Mars is close to Earth, you can see it as a bright reddish dot in the sky.",
                quote: "Is there life on Mars?"
            },
            venus: {
                text1: "Venus is the planet that can get the closest to Earth, although it is in front of the sun at that point. Venus gets so big in the sky that you can almost see its phase with the naked eye.",
                quote: "The evening star"
            },
            saturn: {
                text1: "Saturn is the second biggest planet in the solar system.",
                quote: "Largest Ring System",
                text2: "It also has the biggest ring system, which can easily be seen through a telescope. Sadly, it is going to disappear over the next hundreds of million years."
            },
            jupiter: {
                text1: "Finally, Jupiter is the largest planet in the solar system. You already mined the moons before, but now you reach the real planet.",
                quote: "Largest Planet of the Solar System",
                text2: "Jupiter has over 70 known moons, with diameters ranging from just a few kilometers to over 5,000 kilometers (Ganymede). Now, it is time to exit our solar system. Time to mine Exoplanets!"
            },
            wasp79b: {
                text1: "WASP-79b is one of the largest exoplanets ever discovered. It is about twice as big as Jupiter, which translates to a diameter of over 250,000 kilometers.",
                quote: "Largest Planet",
                text2: "In the Universe, planets cannot grow much larger than that because the immense mass and pressure in the core would start nuclear fusion, meaning it would become a star. But in this game, physics are... different. We can go further.<br/>There's an infinite number of exoplanets to discover!"
            },
            hyperSaturn: {
                text1: "Ever seen a Saturn-like planet with a diameter of millions of kilometers? Well, it's impossible in our universe, but not here...",
                quote: "Saturn, but around 100x larger",
                text2: "If you replaced Saturn with this, you would probably clearly see its glowing rings in a clear night with your naked eye."
            },
            superEarth: {
                text1: "This planet, similar to Earth, has a diameter of about 120,000,000 kilometers. That means that, if replaced with the Sun, it would stretch out to around Mercury’s orbit.",
                quote: "Much space for humans",
                text2: "Super-Earth would be big enough to house trillions of people. Game servers couldn't be worldwide because of extreme lag :( (no information can travel faster than the speed of light). Also, imagine a YouTuber with over 100 billion subscribers :D"
            },
            colossia: {
                text1: "You feel like you're reaching truly huge planets now. They are simply immense... Now look at these diameters:",
                quote: "400,000,000 km",
                text2: "<b>Colossia:</b> If you replaced Saturn with this planet, it would appear much larger than our Moon in the sky. It would break our solar system due to its extreme gravitational force."
            },
            giagantia: {
                quote: "2,400,000,000 km",
                text1: "<b>Giagantia:</b> If replaced with our Sun, this planet would stretch out to Saturn’s orbit. It is also nearly as big as the largest known star, UY Scuti."
            },
            garagantula: {
                quote: "20,000,000,000 km",
                text1: "<b>Garagantula:</b> If replaced with our Sun, this planet would stretch out well beyond Pluto’s orbit."
            },
            planetOmega: {
                quote: "150,000,000,000 km",
                text1: "<b>Giagarantula Omega:</b> Its diameter is about 1/100 of a light-year. That means any signal would need over 10 days to travel from one side of the planet to the other."
            },
            breakPlanetOmega: {
                text1: "Phew, that was a big one. A million times bigger than Jupiter. Theoretically, a planet this big would have collapsed into an extremely massive black hole. But, in the end, you did it.",
                quote: "The biggest Planet(?) broken!",
                text2: "<b>Wait!</b> This is not the end. Let's explore the infinity of the Universe. There are many more planets to mine..."
            },
            planet160: {
                text1: "...in this Universe. And it seems to be getting boring. These planets just keep getting bigger and bigger, with arbitrary names. Why aren't we just mining stars? Are they too hot? Possibly. Get stronger and stronger, and soon stars should be no problem anymore."
            },
            reachWisdomEssence: {
                text1: "Wait, what is this!? While floating through the vacuum, you see a rock flying by, a few meters in size. <i>What were the chances?</i>",
                quote: "You have to mine it.",
                text2: "It is very blue (bluer than blue!), and the closer you get, the smarter you feel.<br/>Who knows what will happen when you mine it? Remember what happened when you broke THE GEM. You will probably become even stronger after mining this stone."
            },
            breakWisdomEssence: {
                text1: "<i>Wisdom streams out of the stone.</i> You cannot see it, but you feel yourself getting smarter with every second.",
                text2: "You got an idea: If you get smarter, you can find out how to deal more damage. With more damage, you can get smarter faster. Time to <b>synergize</b>!",
                text3: "You figured out how to mine stars, let's go!",
                howToGetWisdom: "How to get Wisdom?",
                wisdomExplanation: "Around every 5th object drops wisdom instead of planet coins. The further you are, the more wisdom it drops."
            },
            miningStars: {
                text1: "Congratulations, you mined your first star! Even though they're not solid, it was really challenging. The extreme heat made mining it very tough.",
                quote: "Basically just a Ball 'o Hydrogen.",
                text2: "What's next? Of course, mining bigger stars!"
            },
            wisdomUpgrade: {
                text1: "Finally, wisdom is put to good use. Becoming smarter and dealing more damage with every click, how awesome is that?",
                quote: "Smarter → Stronger → Smarter → ...",
                text2: "There are even more upgrades related to wisdom. Numbers will only grow faster now!"
            },
            mineSun: {
                text1: "You mined our Sun... well, since we're in the Idle Mine: Redux realm, the Sun reappeared the moment you mined it, so no worries!",
                quote: "Giver of Life"
            },
            minePolaris: {
                text1: "The star Polaris was and is used to navigate in the night sky. It always points north. Also, it is one of the brightest stars in the night sky.",
                quote: "50x bigger than our Sun"
            },
            mineBetelgeuse: {
                text1: "Betelgeuse is around 500x as large as our Sun, and it is over 600 light-years away. Earlier this year, it gained attention because it suddenly lost brightness, which possibly meant that Betelgeuse would go supernova, creating a nebula as bright as the full Moon for several months.",
                quote: "Spoiler: It didn't explode"
            },
            mineScuti: {
                text1: "UY Scuti is the largest star discovered in the Universe, even larger than VY Canis Majoris.",
                quote: "← The Largest"
            },
            mineStarGroup: {
                text1: "Now we're talking! Since you mined the biggest star, the next step is to mine several stars at once! Let's see how far this can go."
            },
            mineSmallGalaxy: {
                text1: "An entire galaxy. Over 20,000 light-years in diameter and billions of stars. You just mined that. You are now stronger than the most massive black hole.",
                quote: "More stars than you can count!"
            },
            mineMilkyWay: {
                text1: "You mined our galaxy. But don't worry, the Milky Way reappears the moment you mine it. The Milky Way has a diameter of about 100,000 light-years and over 100 billion stars. Our Sun is just one of them.",
                quote: "Our true home"
            },
            mineLocalGroup: {
                text1: "After mining several galaxies, you're taking the next step just like before. Now you mine multiple galaxies at once. First up: The Local Group.",
                quote: "It contains the Milky Way and Andromeda",
                text2: "At this point, one must wonder how it's even possible to mine something over 10 million light-years across. It seems like your Pickaxe acts like a black hole now... just a bit different."
            },
            mineGalaxyCluster: {
                text1: "What comes after galaxy groups? Correct: galaxy clusters. They contain even more galaxies, but they don’t pose a problem for you.",
                quote: "Like a Galaxy Group Group"
            },
            mineGalaxySuperCluster: {
                text1: "What comes after galaxy clusters? Correct: galaxy superclusters. (does this sentence sound familiar?)",
                quote: "Like a Galaxy Group Group Group"
            },
            mineFilament: {
                text1: "Filaments are enormous structures, about a billion light-years in size, containing millions (if not billions!) of galaxies. Are we going to mine the entire universe soon?",
                quote: "Almost there!"
            },
            reachUniverse: {
                text1: "You are now mining filaments with ease, and it becomes clear what’s next: mining the ENTIRE universe. It has really come this far... Increase your damage with wisdom, buy some gem upgrades, and finish it off! Don't worry, our universe will reappear after mining it.",
                quote: "Everything we know, everything we have."
            },
            mineUniverse: {
                text1: "You mine the very fabric of our universe. You consume it from the inside. You mine trillions of planets and billions of galaxies at once, every second. The universe shrinks, and the heat it generates makes it glow. Suddenly, it's gone. For a brief moment, you see colorful dots around you.",
                quote: "Our universe is not the only one...",
                text2: "The universe pops back up as if nothing happened. You are now beyond anything humanity can describe. You just mined the entire universe as if it was nothing."
            },
            conclusion: {
                title: "Conclusion",
                text1: "Thanks for playing my game! This marks the end of the story. Your task now is to further explore the multiverse, filled with an infinite number of new universes to mine.",
                text2: "I wonder how far the numbers can go! Through gem upgrades, progress should always be possible, and a progress wall should be very far away. Can you reach {longGoal1} $?<br/> Nah, your wisdom should make it even faster... can you reach {longGoal2} $? That's ∞<sup>4</sup>!",
                text3: "This doesn’t mean it’s the end forever. I might add new content in the future to extend the story. Anyway, I hope you had fun playing! :)"
            },
            nextObjective: {
                title: "What to do next?"
            },
            chapter: "Chapter {number}: {title}"
        },
        tabs: {
            mining: "Mining",
            powers: "Powers",
            story: "Story",
            settings: "Settings"
        },
        meta: {
            description: "Incremental Game based on Idle Mine by Crovie."
        },
        settings: {
            title: "Settings",
            description: "Change the Number Format of the Game, Save manually or export and import your Game.",
            language: "Language",
            languageOptions: {
                "en": "English",
                "pt": "Português"
            },
            numberFormat: "Number Format",
            theme: "Theme",
            themeOptions: {
                light: "Light",
                dark: "Dark"
            },
            showMineObjLevel: "Show Mineral Level",
            showMinCraftDamage: "Show minimum Base Damage for crafted Pickaxes",
            export: "Export",
            import: "Import (from Text Field)",
            hardReset: "Hard Reset",
            note: "Note: The Game won't save if cookies and browser storage are disabled. Clearing cookies and browser data might erase your savegame.",
            thanks: "Thanks to crovie, the creator of Idle Mine for making this interesting Game concept.",
            notations: "Notations provided by",
            social: {
                youtube: "My YouTube",
                website: "My Website",
                wiki: "Wiki"
            },
        },
        stats: {
            damageClick: "Damage per Click",
            damageSecond: "Damage per Second",
            moneyClick: "Money per Click",
            moneySecond: "Money per Second",
            avgGemsSecond: "Avg. Gems per Second",
            avgPlanetCoinsSecond: "Avg. Planet Coins per Second"
        },
        pickaxe: {
            craft: "Craft a new Pickaxe",
            minBaseDamage: "Minimum Base Damage"
        },
        powers: {
            youHave: "You have",
            description: "With wisdom, you are able to become smart enough to become stronger with every click! Get smart in all areas of mining to get to heights no one has thought of yet."
        },
        multibuy: {
            shift: "Hold SHIFT to buy 10",
            ctrl: "Hold CTRL to buy 100"
        },
        mineObjects: {
            mud: "Mud",
            paper: "Paper",
            salt: "Salt",
            clay: "Clay",
            rock: "Rock",
            coal: "Coal",
            bone: "Bone",
            lead: "Lead",
            iron: "Iron",
            copper: "Copper",
            carbonite: "Carbonite",
            quartz: "Quartz",
            spookyBone: "Spooky Bone",
            silver: "Silver",
            crystal: "Crystal",
            topaz: "Topaz",
            amethyst: "Amethyst",
            aquamarine: "Aquamarine",
            emerald: "Emerald",
            ruby: "Ruby",
            sapphire: "Sapphire",
            hauntedBone: "Haunted Bone",
            gold: "Gold",
            platinum: "Platinum",
            diamond: "Diamond",
            mithril: "Mithril",
            obsidian: "Obsidian",
            earthEssence: "Earth Essence",
            orbium: "Orbium",
            novalite: "Novalite",
            magicCrystal: "Magic Crystal",
            darkstone: "Darkstone",
            adamantium: "Adamantium",
            fireEssence: "Fire Essence",
            lunalite: "Lunalite",
            mysterium: "Mysterium",
            cursedBone: "Cursed Bone",
            windEssence: "Wind Essence",
            unobtanium: "Unobtanium",
            sollite: "Sollite",
            waterEssence: "Water Essence",
            absurdium: "Absurdium",
            cosmolite: "Cosmolite",
            shadowEssence: "Shadow Essence",
            demonite: "Demonite",
            eternium: "Eternium",
            mysticite: "Mysticite",
            lightEssence: "Light Essence",
            soulstone: "Soulstone",
            arcanium: "Arcanium",
            hellstone1: "Hellstone Lv. 1",
            hellstone2: "Hellstone Lv. 2",
            hellstone3: "Hellstone Lv. 3",
            hellstone4: "Hellstone Lv. 4",
            hellstone666: "Hellstone Lv. 666",
            infinitum: "Infinitum",
            omegaEssence: "Omega Essence",
            inverticolite: "Inverticolite",
            meutronium: "Meutronium",
            zettaWattCrystal: "ZettaWatt Crystal",
            theGem: "THE GEM",
            boneOfInfinity: "Bone of Infinity",
            paperOfGods: "Paper of the Gods",
            heavenstone: "Heavenstone",
            holoStone: "Holo-Stone",
            antiMud: "Anti-Mud",
            quantumOrb: "Quantum Orb",
            sourceOfPower: "Source of Power",
            fractalium: "Fractalium",
            postInfinityEssence: "Post-Infinity Essence",
            unsolvium: "Unsolvium",
            thePortal: "THE PORTAL"
        },
        specialMineObjects: {
            portalToSpace: "PORTAL TO SPACE",
            tinyAsteroid: "Tiny Asteroid",
            smallAsteroid: "Small Asteroid",
            asteroid2021DC9: "2021DC9",
            deimos: "Deimos",
            phobos: "Phobos",
            hydra: "Hydra",
            mimas: "Mimas",
            enceladus: "Enceladus",
            tethys: "Tethys",
            triton: "Triton",
            pluto: "Pluto",
            moon: "The Moon",
            mercury: "Mercury",
            titan: "Titan",
            ganymede: "Ganymede",
            mars: "Mars",
            venus: "Venus",
            neptune: "Neptune",
            uranus: "Uranus",
            saturn: "Saturn",
            jupiter: "Jupiter",
            tres2b: "TrES-2b",
            kepler7b: "Kepler-7b",
            wasp78b: "WASP-78b",
            wasp79b: "WASP-79b",
            hyperSaturn: "Hyper-Saturn",
            superEarth: "SUPEREARTH",
            colossia: "Colossia",
            giagantia: "Giagantia",
            garagantula: "Garagantula",
            giagarantulaOmega: "Giagarantula Omega",
            essenceOfWisdom: "ESSENCE OF WISDOM",
            tinyStar: "Tiny Star",
            trappist1: "TRAPPIST-1",
            teide1: "Teide 1",
            sun: "Sun",
            siriusA: "Sirius A",
            vega: "Vega",
            pollux: "Pollux",
            arcturus: "Arcturus",
            polaris: "Polaris",
            aldebaran: "Aldebaran",
            rigel: "Rigel",
            deneb: "Deneb",
            etaCarinae: "Eta Carinae",
            pistolStar: "Pistol Star",
            kyCygni: "KY Cygni",
            antares: "Antares",
            betelgeuse: "Betelgeuse",
            muCephei: "Mu Cephei",
            myCephei: "MY Cephei",
            vyCanisMajoris: "VY Canis Majoris",
            uyScuti: "UY Scuti",
            smallStarGroup: "Small Star Group",
            mediumStarGroup: "Medium Star Group",
            largeStarGroup: "Large Star Group",
            starCluster: "Star Cluster",
            largeStarCluster: "Large Star Cluster",
            hugeStarCluster: "Huge Star Cluster",
            smallMagellanicCloud: "Small Magellanic Cloud",
            largeMagellanicCloud: "Large Magellanic Cloud",
            milkyWay: "Milky Way",
            andromedaGalaxy: "Andromeda Galaxy",
            sombreroGalaxy: "Sombrero Galaxy",
            tadpoleGalaxy: "Tadpole Galaxy",
            condorGalaxy: "Condor Galaxy",
            cometGalaxy: "Comet Galaxy",
            localGroup: "Local Group",
            ic1101: "IC 1101",
            bigGalaxyGroup: "Big Galaxy Group",
            smallGalaxyCluster: "Small Galaxy Cluster",
            virgoCluster: "Virgo Cluster",
            galaxySupercluster: "Galaxy Supercluster",
            galaxyMegacluster: "Galaxy Megacluster",
            filament: "Filament",
            sloanGreatWall: "Sloan Great Wall",
            theUniverse: "THE UNIVERSE"
        },
        milestones: {
            gameStart: "Start the game",
            firstMud: "Mine your first piece of Mud",
            firstPaper: "Mine a piece of Paper",
            blacksmithUpgrade: "Upgrade Your Blacksmith once",
            firstSalt: "Mine a piece of Salt",
            firstClay: "Mine a piece of Clay",
            firstStone: "Mine a piece of Stone",
            tenThousand: "Reach 10,000 $ on hand",
            firstSpookyBone: "Mine a Spooky Bone (Reach Mineral number 13 and break it to reach mineral number 14)",
            millionaire: "Have 1,000,000 $ on hand",
            preciousStones: "Reach Emerald",
            gemWaster: "Upgrade Gem Waster to Level 1",
            unrealStones: "Reach Earth Essence",
            fireEssence: "Reach Fire Essence",
            mysterium: "Reach ???",
            fiftyTrillion: "Have 50 Trillion $ on hand",
            lightEssence: "Reach Light Essence",
            hellStone: "Reach Hellstone",
            hellStoneFinal: "Reach Hellstone Lv. ???",
            infinitum: "Reach ???",
            theGem: "Reach THE GEM",
            gemUpgrades: "Break THE GEM",
            fractalium: "Reach Fractalium",
            reachPortal: "Reach ???",
            breakPortal: "Break through THE PORTAL",
            proceduralRealm1: "Explore the procedural realm further",
            reachSpacePortal: "Reach yet ANOTHER portal...",
            breakSpacePortal: "Open the space portal",
            planetcoin: "Earn a Planet Coin",
            pluto: "Mine Pluto",
            theMoon: "Mine The Moon",
            mars: "Reach Mars",
            venus: "Reach Venus",
            saturn: "Reach Saturn",
            jupiter: "Reach Jupiter",
            wasp79b: "Reach WASP-79b",
            hyperSaturn: "Reach Hyper-Saturn",
            superEarth: "Reach SUPEREARTH",
            colossia: "Reach Colossia",
            giagantia: "Reach the next Planet",
            garagantula: "Reach the next Planet",
            planetOmega: "Reach the next Planet",
            breakPlanetOmega: "Break Giagarantula Omega",
            planet160: "Reach Object #160",
            reachWisdomEssence: "Reach ???",
            breakWisdomEssence: "Break The Wisdom Essence",
            miningStars: "Mine a Tiny Star",
            wisdomUpgrade: "Buy a Wisdom Upgrade",
            mineSun: "Mine The Sun",
            minePolaris: "Mine Polaris",
            mineBetelgeuse: "Mine Betelgeuse",
            mineScuti: "Mine UY Scuti",
            mineStarGroup: "Mine A Small Star Group",
            mineSmallGalaxy: "Mine The Small Magellanic Cloud",
            mineMilkyWay: "Mine The Milky Way",
            mineLocalGroup: "Mine The Local Group",
            mineGalaxyCluster: "Mine A Small Galaxy Cluster",
            mineGalaxySuperCluster: "Mine A Galaxy Supercluster",
            mineFilament: "Mine A Filament",
            reachUniverse: "Reach ???",
            mineUniverse: "Mine THE UNIVERSE"
        },
    },
    pt: {
        title: "Idle Mine: Redux",
        money: "Dinheiro",
        gems: "Gemas",
        planetCoins: "Moedas Planetárias",
        mining: "Mineração",
        settings: "Configurações",
        story: "História",
        save: "Salvar",
        export: "Exportar",
        import: "Importar",
        hardReset: "Resetar Tudo",
        welcome: "Bem-vindo ao Idle Mine: Redux!",

        upgrades: {
            money: "Melhorias de Dinheiro",
            gems: "Melhorias de Gemas",
            planetcoins: "Melhorias de MP"
        },
        story: {
            chapters: [
                "Bem-vindo ao Idle Mine: Redux!",
                "A verdadeira aventura começa!",
                "Materiais misteriosos",
                "Ainda NÃO acabou",
                "Novas Dimensões",
                "Foi para o Espaço",
                "Hiperplanetas",
                "A Era da Sabedoria",
                "Superestruturas Cósmicas"
            ],
            gameStart: {
                title: "Bem-vindo ao Idle Mine: Redux!",
                text1: "Então você decidiu começar a minerar. Você ouviu falar que muitos tesouros estão abaixo da superfície, então mal pode esperar para descobrir o que pode encontrar. Talvez você fique rico?",
                text2: "Lá está você e seu Dispositivo de Mineração Automático. Vamos começar! Isso também funciona como um guia. Se algo não estiver claro, consulte aqui como referência."
            },
            firstMud: {
                text1: "Você minerou seu primeiro pedaço de lama! Bem, não vale muito, mas você tem que começar de algum lugar.",
                quote: "Apenas um pouco de lama comum",
                text2: "Mesmo R$2 podem ser um bom começo. Talvez você devesse tentar minerar algo mais valioso?"
            },
            firstPaper: {
                text1: "Você pega sua picareta e começa a bater em um velho dever de casa (Você não precisava mais dele, de qualquer maneira).",
                quote: "Papel (Seu velho dever de casa)",
                text2: "Por alguma razão, isso valia incríveis R$10! Parece que você pegou o jeito. Infelizmente, você também descobre que era um pouco resistente à sua picareta, então você precisa criar uma melhor para continuar crescendo.",
                howToGetGems: "Como conseguir Gemas?",
                gemExplanation: "Toda vez que você minera algo, há uma chance de ganhar uma Gema, usada para criar Picaretas.",
                statsTitle: "Estatísticas, Estatísticas, Estatísticas...",
                statsText: "Dicas: Minerais têm defesa, que reduz o dano de clique e o dano inativo. Veja onde o dinheiro/segundo é maior para ser mais eficiente."
            },
            blacksmithUpgrade: {
                text1: "Apenas uma pequena melhoria na sua Ferraria já a deixa muito mais forte!",
                quote: "Poder da Ferraria!",
                text2: "Você deveria tentar forjar uma nova Picareta. Você só precisa de uma Gema para isso! Felizmente, você tem algumas em casa. Você nem lembra de onde vieram, mas estão ali. Depois de forjar, tente a sorte minerando sal.",
                whenToCraft: "Quando devo forjar?",
                craftExplanation: "O poder e a qualidade de uma picareta dependem das melhorias da Ferraria. Os valores finais serão aleatórios, mas sempre acima dos mínimos estabelecidos."
            },
            firstSalt: {
                text1: "Você pega todo o sal da gaveta da cozinha e começa a martelá-lo com sua recém-forjada Picareta. Funciona surpreendentemente bem, você pensa.",
                quote: "Sal (direto da sua cozinha)",
                text2: "R$22! Isso é muito! Você pode comprar alguns jogos com isso, ou levar a mineração a sério e investir em sua Ferraria."
            },
            firstClay: {
                text1: "Você vai até um lago próximo e cava um pouco de argila.",
                quote: "Argila (fresca do lago)",
                text2: "Já vale R$50! Isso é muito mais do que o sal. Claro, foi mais difícil, mas a recompensa fala por si. Há uma caverna por perto. Aqui é onde a verdadeira aventura começa. Talvez você deva melhorar um pouco seu ferreiro e conseguir uma nova picareta antes de continuar."
            },
            firstStone: {
                text1: "Claro, a primeira coisa que você vê ao entrar na caverna são Pedras e Rochas. E há muitas delas. Há muito o que minerar...",
                quote: "Rocha (da entrada da caverna)",
                text2: "R$120! Nada mal. Você vê um grande crescimento chegando. Aventure-se mais fundo na caverna e extraia materiais melhores e melhores. Não se esqueça de comprar melhorias e criar novas picaretas.",
                offlineIncomeTitle: "Renda Offline",
                offlineIncomeText: "Por até 6 horas, você pode ganhar 50% do seu dinheiro por segundo enquanto estiver offline. Você precisa estar offline por pelo menos 5 minutos para ser elegível para ganhar dinheiro offline."
            },
            tenThousand: {
                quote: "Eu preciso ficar rico!",
                text1: "Dez mil reais! Isso com certeza é mais do que o salário médio. Acho que você já pode pagar seu sustento com isso.",
                text2: "Mas também, melhorar sua tecnologia de mineração é muito caro, mas vai valer a pena rapidamente."
            },
            firstSpookyBone: {
                text1: "Você já desceu bastante na mina. As coisas estão ficando valiosas lá embaixo. Os primeiros minerais anormais estão aparecendo.",
                quote: "Ohhhh, Assustador!",
                text2: "R${amount} por um monte de ossos? Bem, eles são assustadores! Mesmo que você não saiba exatamente por quê..."
            },
            millionaire: {
                text1: "Existem várias maneiras de ganhar um milhão: vencer um programa de perguntas, ter um certo emprego ou minerar materiais preciosos? De qualquer forma, você acaba de alcançar <strong>um milhão</strong>!",
                quote: "Rico. Agora de verdade.",
                text2: "A jornada não termina aqui! Por que não ficar ainda mais rico? A caverna parece infinita."
            },
            preciousStones: {
                text1: "Agora estão aparecendo coisas preciosas. Você começa a ver gemas típicas: Safira, Rubi e Esmeralda. Você não sabe a que profundidade está, mas esta caverna é a maior que já viu. Parece interminável e só fica maior à medida que você desce.",
                quote: "Preciosas e valem milhões",
                text2: "Estamos chegando ao fim? Definitivamente não!"
            },
            gemWaster: {
                text1: "Agora você ganha Gemas com mais facilidade, então teve uma ideia: se investir várias Gemas em uma Picareta, ela deve ser ainda melhor. Agora você também pode usar 3 Gemas para criar uma Picareta, e elas se tornam muito mais fortes.",
                quote: "Não é um desperdício de jeito nenhum!"
            },
            unrealStones: {
                text1: "Você não sabe o que é. Nunca foi descoberto antes. Provavelmente, você é o primeiro a ter chegado tão longe.",
                quote: "O que é isso?",
                text2: "Apenas cerca de 20 dessas te tornarão a pessoa mais rica do mundo. Talvez o dinheiro também possa ser usado para estudar e pesquisar esse material misterioso.",
                text3: "Ao longo do caminho, você descobre mais coisas desconhecidas e ultra preciosas que ainda precisam ser estudadas."
            },
            fireEssence: {
                text1: "Lá está ela. Outro tipo de essência. Desta vez, parece ser flamejante e muito quente. Infelizmente, você não tem um termômetro com você.",
                quote: "QUENTE, QUENTE!",
                text2: "Agora, você precisa de <strong>apenas</strong> uma para se tornar a pessoa mais rica do mundo. Alternativamente, você também poderia dar a cada pessoa no mundo cerca de R$25. Isso seria suficiente para alguma comida."
            },
            mysterium: {
                quote: "Eu também não sei",
                text1: "Essa coisa é tão preciosa que nem tem um nome, então vamos chamá-la de 'Misterium', porque, afinal, é um mistério. Será para sempre misteriosa e o mistério nunca será resolvido. Quão misterioso é isso?"
            },
            fiftyTrillion: {
                text1: "Isso com certeza é muito dinheiro. Talvez seja o suficiente para comprar a Lua?",
                quote: "Mais rico do que rico",
                text2: "Isso é o suficiente para pagar toda a dívida nacional do Brasil.",
                button: "PAGAR",
                notEnough: "Você não tem dinheiro suficiente para pagar a dívida agora.",
                triedAnyway: "Você realmente tentou. Mas então percebeu que... isso é só um jogo.",
                logMessage: "ERRO: Exceção ao tentar pagar a dívida nacional do Brasil: o dinheiro do jogo não pôde ser convertido para Reais."
            },            
            lightEssence: {
                text1: "Mais uma Essência encontrada. Esta brilha muito e é incrivelmente luminosa, tão brilhante que algumas delas poderiam iluminar uma cidade inteira.",
                quote: "Ilumine-se!",
                text2: "Você ainda não faz ideia de onde está o fim. Olhando para baixo, vê um aglomerado colorido de minerais, brilhando em muitas cores diferentes. Parece que isso vai mudar em breve."
            },
            hellStone: {
                text1: "Após passar por vários aglomerados enormes de minerais e sentir que está descendo por muitos quilômetros, você começa a sentir o calor do ar aqui embaixo. Ainda é suportável, mas, alguns metros depois, uma <strong>mudança repentina</strong> acontece.",
                quote: "Isso é o inferno?",
                text2: "Esses minerais são completamente diferentes. Eles são muito quentes, não brilham e não parecem bonitos. Por outro lado, valem uma fortuna e você sente que chegou ao fim. <em>Mas será que chegou mesmo?</em>"
            },            
            hellStoneFinal: {
                title: "O Fim?",
                text1: "A Hellstone está ficando cada vez mais escura e difícil de quebrar; parece que o fim está próximo. De repente, a caverna termina. O chão está coberto com ainda mais Hellstone demoníaca. Elas são quase totalmente negras e parecem inquebráveis. Agora você precisa de uma Picareta muito boa.",
                quote: "Inquebrável? Duvido disso!",
                text2: "Vamos conseguir uma boa Picareta, minerar isso e descobrir mais! Será que conseguimos?"
            },
            infinitum: {
                text1: "Depois de quebrar a última Hellstone, um pequeno buraco se abre abaixo dela. Você não chegou ao fim. Havia apenas aquela parede de Hellstone...",
                quote: "Para o infinito e além!",
                text2: "A essa altura, você provavelmente aceitou que essa caverna é infinita e nunca terá fim, o que significa que você se tornará tão rico que ninguém conseguirá acreditar."
            },
            theGem: {
                text1: "Isso aqui está ficando insano. Esses minerais nem parecem mais do mundo real. Parece outro reino. Você percebe que progredir está ficando cada vez mais difícil...",
                text2: "De repente, você vê uma luz no fim do túnel. Uma joia gigante. Uma joia realmente enorme. Quebrá-la lhe daria insights que você nunca imaginou antes. Algo para acelerar muito o progresso.",
                quote: "Não é apenas uma joia!"
            },
            gemUpgrades: {
                text1: "<strong>Você sente instantaneamente uma onda de sabedoria fluindo pelo seu corpo...</strong>",
                text2: "É isso! Por que apenas dinheiro deveria ser investido em Melhorias? E se fizéssemos isso com gemas?",
                quote: "Agora você tem muito mais utilidade",
                text3: "Com gemas, agora você pode melhorar seu ferreiro, o Dispositivo de Mineração Automático e encontrar ainda mais gemas! <strong>O crescimento infinito aguarda!</strong>"
            },            
            fractalium: {
                text1: "Você está em outro reino. Altas quantidades de energia e luz, minerais invertidos e hologramas. O valor desses objetos é imenso. Apenas um deles significa riqueza infinita. Agora, você faz uma descoberta ainda mais insana.",
                quote: "z<sub>n+1</sub> = z<sub>n</sub><sup>2</sup> + c",
                text2: "Um fractal. Uma quantidade infinita de complexidade, e ainda assim tão simples de descrever. R${value} para comprar uma anã branca, uma esfera do tamanho da Terra feita de carbono comprimido (um diamante!).",
                text3: "A caverna está começando a se estreitar novamente, será que o fim está próximo?"
            },
            reachPortal: {
                text1: "Tudo se reduz a um pequeno portal, com cerca de 2 metros de diâmetro, brilhando em um misterioso tom rosa avermelhado. Quebrá-lo deve revelar mais...",
                quote: "P͏̨a̷͝r̛͞a ̕͝o̸̧ư̵t̶͜ŗ͜as͜ ͢D͞i̵m̷̧e̷n͏şõ̵͘ęş͞ e ̛͡R̴e̴̛a͏̷ļ͟i͝͡d͘a̕͏d͠ę͢s̛̕",
                text2: "É muito difícil de quebrar, quase invencível. Você precisa de uma Picareta muito forte. Agora, melhore seu Ferreiro, invista dinheiro e gemas e crie uma Picareta poderosa para abrir caminho!"
            },
            breakPortal: {
                text1: "O portal começa a puxá-lo para dentro lentamente. O ar parece ficar mais frio. Tudo ao seu redor começa a escurecer, até que você se vê cercado apenas pela escuridão. Você mantém a calma. Você está preparado e acha que sabe o que acontecerá a seguir.",
                text2: "De repente, você ouve algo, muito longe no fundo.",
                quote: "“Eu estava esperando por você”",
                text3: "Será que você foi escolhido para ser um minerador? Isso explicaria por que você tinha um ferreiro e gemas sobrando em casa? Você começa a entender. Você foi autorizado a descobrir as riquezas infinitas do subterrâneo."
            },
            proceduralRealm1: {
                text1: "Já faz um tempo, e você continua cavando (e os números continuam crescendo, como esperado). Não há um fim à vista, mas isso é algo bom.",
                quote: "Apenas procedural, como todo o resto",
                text2: "Os nomes desses minerais são estranhos, não fazem sentido. Não é à toa que este é o 'reino procedural', mas será que ele é infinito?"
            },
            reachSpacePortal: {
                text1: "Reinos procedurais não deveriam ser infinitos? Bem, este não é. Ele se fecha novamente. Este portal é azulado e, ao olhar através dele, você só vê estrelas e galáxias.",
                quote: "ESPAAAAAÇO!",
                text2: "É um portal para o espaço. Há uma pequena nave espacial ao lado do portal, deve ter sido o deus da mineração que você ouviu recentemente (Afinal, ele estava esperando por você). Este portal também é resistente, mas não tanto. Faça uma picareta e abra este portal!"
            },
            breakSpacePortal: {
                text1: "Você entra na nave espacial e voa diretamente através do portal. Ao longe, você pode ver o sol e muitos asteroides ao seu redor.",
                quote: "Bem-vindo ao Cinturão de Asteroides!",
                text2: "Você realmente está no cinturão de asteroides, que nem é tão longe assim (astronomicamente falando). Bem, agora é hora de minerar asteroides."
            },
            planetcoin: {
                text1: "Quando este objeto se quebra, algo salta dele... o que é isso? É um novo tipo de recurso, uma Moeda Planetária.",
                quote: "Novas oportunidades de melhoria!",
                text2: "Confira as novas Melhorias, com certeza valerá a pena!"
            },
            pluto: {
                text1: "Você conseguiu! Você minerou um planeta! Hmm, é apenas um planeta anão, mas já foi um planeta de verdade até 2006.",
                quote: "Quase um planeta",
                text2: "Por que os objetos continuam reaparecendo depois que você os minera? Parece que o universo de <em>Idle Mine: Redux</em> ignora algumas leis da física."
            },            
            theMoon: {
                text1: "Você acabou de minerar a Lua! Felizmente, ela reaparece toda vez que você a minera...",
                quote: "Homem na Lua",
                text2: "Nossa Lua é uma das maiores luas do sistema solar, você já chegou bem longe."
            },
            mars: {
                text1: "Marte é um dos planetas mais próximos de nós que pode ser colonizado em um futuro próximo. Se Marte estiver perto da Terra, você pode vê-lo como um ponto brilhante avermelhado no céu.",
                quote: "Existe vida em Marte?"
            },
            venus: {
                text1: "Vênus é o planeta que pode chegar mais perto da Terra, embora esteja à frente do Sol nesse momento. Vênus fica tão grande no céu que você quase pode ver sua fase a olho nu.",
                quote: "A estrela vespertina"
            },
            saturn: {
                text1: "Saturno é o segundo maior planeta do sistema solar.",
                quote: "Maior sistema de anéis",
                text2: "Ele também tem o maior sistema de anéis, que pode ser facilmente visto através de um telescópio. Infelizmente, esses anéis vão desaparecer nos próximos milhões de anos."
            },
            jupiter: {
                text1: "Finalmente, Júpiter é o maior planeta do sistema solar. Você já minerou as luas antes, mas agora chegou ao verdadeiro planeta.",
                quote: "Maior planeta do Sistema Solar",
                text2: "Júpiter tem mais de 70 luas conhecidas, com diâmetros variando de apenas alguns quilômetros a mais de 5.000 quilômetros (Ganimedes). Agora, é hora de sair do nosso sistema solar. Hora de minerar Exoplanetas!"
            },
            wasp79b: {
                text1: "WASP-79b é um dos maiores exoplanetas já descobertos. Ele tem cerca de duas vezes o tamanho de Júpiter, o que equivale a um diâmetro de mais de 250.000 quilômetros.",
                quote: "Maior Planeta",
                text2: "No universo, os planetas não podem crescer muito mais do que isso, pois a imensa massa e pressão no núcleo iniciariam uma fusão nuclear, transformando-o em uma estrela. Mas, neste jogo, a física é... diferente. Podemos ir além.<br/>Há uma quantidade infinita de exoplanetas a serem descobertos!"
            },            
            hyperSaturn: {
                text1: "Já viu um planeta semelhante a Saturno com um diâmetro de milhões de quilômetros? Bem, isso é impossível no nosso universo, mas aqui não é...",
                quote: "Saturno, mas cerca de 100x maior",
                text2: "Se substituíssemos Saturno por este planeta, provavelmente veríamos seus anéis brilhando claramente em uma noite de céu limpo a olho nu."
            },
            superEarth: {
                text1: "Este planeta, semelhante à Terra, tem um diâmetro de cerca de 120.000.000 quilômetros. Isso significa que, se substituísse o Sol, ele se estenderia até a órbita de Mercúrio.",
                quote: "Muito espaço para humanos",
                text2: "A Superterra seria grande o suficiente para abrigar trilhões de pessoas. Servidores de jogos não poderiam ser globais devido ao extremo lag :( (nenhuma informação pode viajar mais rápido que a velocidade da luz). Além disso, imagine um YouTuber com mais de 100 bilhões de inscritos :D"
            },
            colossia: {
                text1: "Você sente que está chegando a planetas muito grandes agora. Eles são simplesmente imensos... Agora olhe para esses diâmetros:",
                quote: "400.000.000 km",
                text2: "<b>Colossia:</b> Se substituíssemos Saturno por este planeta, ele pareceria muito maior que a nossa Lua no céu. Ele destruiria nosso sistema solar devido à sua extrema força gravitacional."
            },            
            giagantia: {
                quote: "2.400.000.000 km",
                text1: "<b>Giagantia:</b> Se substituído pelo nosso Sol, este planeta se estenderia até a órbita de Saturno. Ele também é quase tão grande quanto a maior estrela conhecida, UY Scuti."
            },
            garagantula: {
                quote: "20.000.000.000 km",
                text1: "<b>Garagantula:</b> Se substituído pelo nosso Sol, este planeta se estenderia muito além da órbita de Plutão."
            },
            planetOmega: {
                quote: "150.000.000.000 km",
                text1: "<b>Giagarantula Omega:</b> Seu diâmetro é cerca de 1/100 de um ano-luz. Isso significa que qualquer sinal levaria mais de 10 dias para ser retransmitido para o outro lado do planeta."
            },
            breakPlanetOmega: {
                text1: "Ufa, esse foi grande. Um milhão de vezes maior que Júpiter. Teoricamente, um planeta desse tamanho teria colapsado em um buraco negro extremamente massivo. Mas, no final, você conseguiu.",
                quote: "O maior planeta(?) foi quebrado!",
                text2: "<b>Espere!</b> Isso não é o fim. Vamos explorar a infinitude do universo. Há muitos mais planetas para minerar..."
            },
            planet160: {
                text1: "...neste universo. E parece estar ficando entediante. Esses planetas estão apenas ficando maiores e maiores, com nomes arbitrários. Por que não estamos minerando estrelas? Elas são quentes demais? Possivelmente. Fique mais forte e logo as estrelas não serão mais um problema."
            },
            reachWisdomEssence: {
                text1: "Espere, o que é isso!? Enquanto relaxava e se movia pelo vácuo, você vê uma rocha voando, com alguns metros de tamanho. <i>Quais eram as chances?</i>",
                quote: "Você precisa minerá-la.",
                text2: "Ela é muito azul (mais azul que azul!) e, quanto mais perto você chega, mais inteligente você se sente.<br/>Quem sabe o que acontecerá ao minerá-la? Lembre-se do que aconteceu ao quebrar A GEMA. Você provavelmente ficará ainda mais forte depois de minerar esta pedra."
            },            
            breakWisdomEssence: {
                text1: "<i>A sabedoria flui para fora da pedra.</i> Você não pode vê-la, mas sente que está ficando mais inteligente a cada segundo.",
                text2: "Você teve uma ideia: se você ficar mais inteligente, poderá descobrir como causar mais dano. Com mais dano, poderá ficar mais inteligente mais rápido. Hora de <b>sinergizar</b>!",
                text3: "Você descobriu como minerar estrelas, vamos lá!",
                howToGetWisdom: "Como obter Sabedoria?",
                wisdomExplanation: "Aproximadamente a cada 5º objeto, em vez de moedas planetárias, deixa sabedoria. Quanto mais longe você estiver, mais sabedoria ele deixará."
            },
            miningStars: {
                text1: "Parabéns, você minerou sua primeira estrela! Embora elas não sejam sólidas, foi um verdadeiro desafio. O calor extremo tornou a mineração muito difícil.",
                quote: "Basicamente, apenas uma bola de hidrogênio.",
                text2: "Qual é o próximo passo? Claro, minerar estrelas ainda maiores!"
            },
            wisdomUpgrade: {
                text1: "Finalmente, a sabedoria está sendo bem utilizada. Ficar mais inteligente e causar mais dano a cada clique, quão incrível é isso?",
                quote: "Mais esperto → Mais forte → Mais esperto → ...",
                text2: "Existem ainda mais melhorias relacionadas à Sabedoria. Os números só crescerão mais rápido agora!"
            },
            mineSun: {
                text1: "Você minerou nosso Sol... bem, como estamos no universo de Idle Mine: Redux, o Sol reapareceu no momento em que foi minerado, então não se preocupe!",
                quote: "Doador de Vida"
            },
            minePolaris: {
                text1: "A estrela Polaris sempre apontou para o norte e tem sido usada para orientação no céu noturno. Além disso, é uma das estrelas mais brilhantes da noite.",
                quote: "50x maior que o nosso Sol"
            },
            mineBetelgeuse: {
                text1: "Betelgeuse tem cerca de 500 vezes o tamanho do nosso Sol e está a mais de 600 anos-luz de distância. No início deste ano, ganhou atenção porque perdeu luminosidade rapidamente, o que poderia significar que Betelgeuse explodiria em uma Supernova, criando uma nebulosa tão brilhante quanto a Lua cheia, por vários meses.",
                quote: "Spoiler: Ela não explodiu"
            },
            mineScuti: {
                text1: "UY Scuti é a maior estrela já descoberta no universo, ainda maior que VY Canis Majoris.",
                quote: "← A maior"
            },
            mineStarGroup: {
                text1: "Agora estamos falando! Como você já minerou a maior estrela, a próxima opção é minerar várias estrelas de uma vez! Vamos ver até onde isso pode ir."
            },
            mineSmallGalaxy: {
                text1: "Uma galáxia inteira. Mais de 20.000 anos-luz de diâmetro e bilhões de estrelas. Você acabou de minerar isso. Agora você é mais poderoso que o buraco negro mais massivo.",
                quote: "Mais estrelas do que você pode contar!"
            },
            mineMilkyWay: {
                text1: "Você minerou nossa galáxia. Mas não se preocupe, a Via Láctea reaparece no momento em que você a minera. Ela tem um diâmetro de cerca de 100.000 anos-luz e mais de 100 bilhões de estrelas. Nosso Sol é apenas uma delas.",
                quote: "Nosso verdadeiro lar"
            },
            mineLocalGroup: {
                text1: "Depois de minerar várias galáxias, você está dando o próximo passo como fez antes. Agora você minera várias galáxias ao mesmo tempo. Primeiro: O Grupo Local.",
                quote: "Contém a Via Láctea e Andrômeda",
                text2: "Neste ponto, você deve estar se perguntando como é possível minerar algo com mais de 10 milhões de anos-luz de extensão. Parece que sua picareta agora age como um buraco negro... só que um pouco diferente."
            },
            mineGalaxyCluster: {
                text1: "O que vem depois dos grupos de galáxias? Certo: aglomerados de galáxias. Eles contêm ainda mais galáxias, mas não representam um problema para você.",
                quote: "Como um grupo de grupos de galáxias"
            },
            mineGalaxySuperCluster: {
                text1: "O que vem depois dos aglomerados de galáxias? Certo: Superaglomerados de galáxias. (essa frase parece familiar?)",
                quote: "Como um grupo de grupos de grupos de galáxias"
            },
            mineFilament: {
                text1: "Os filamentos são estruturas enormes, com cerca de um bilhão de anos-luz de extensão, contendo milhões (ou até bilhões!) de galáxias. Estamos prestes a minerar o universo inteiro?",
                quote: "Quase lá!"
            },
            reachUniverse: {
                text1: "Você agora minera filamentos com facilidade, e fica claro o que vem a seguir: minerar TODO o universo. Chegamos tão longe... Aumente seu dano com sabedoria, compre alguns upgrades de gema e finalize! Não se preocupe, nosso universo reaparecerá após minerá-lo.",
                quote: "Tudo o que conhecemos, tudo o que temos."
            },
            mineUniverse: {
                text1: "Você minera a própria estrutura do nosso universo. Você o devora de dentro para fora. Você minera trilhões de planetas e bilhões de galáxias ao mesmo tempo, a cada segundo. O universo encolhe, o calor gerado faz com que ele brilhe. De repente, ele desaparece. Por um breve momento, você vê pontos coloridos ao seu redor.",
                quote: "Nosso universo não é o único...",
                text2: "O universo reaparece como se nada tivesse acontecido. Você agora está além de qualquer coisa que a humanidade possa descrever. Você acabou de minerar o universo inteiro como se fosse nada."
            },
            conclusion: {
                title: "Conclusão",
                text1: "Obrigado por jogar meu jogo! Isso marca o fim da história. Sua tarefa agora é explorar ainda mais o multiverso, cheio de infinitos novos universos para minerar.",
                text2: "Eu me pergunto até onde os números podem chegar! Com os upgrades de gemas, o progresso deve ser sempre possível, e um obstáculo de progresso deve estar muito distante. Você pode alcançar R${longGoal1}?<br/> Não, sua sabedoria deve torná-lo ainda mais rápido... será que você pode alcançar R${longGoal2}? Isso é ∞<sup>4</sup>!",
                text3: "Isso não significa que seja o fim para sempre. Posso adicionar novo conteúdo no futuro para estender a história. De qualquer forma, espero que tenha se divertido jogando! :)"
            },
            nextObjective: {
                title: "O que fazer em seguida?"
            },
            chapter: "Capítulo {number}: {title}"
        },
        tabs: {
            mining: "Mineração",
            powers: "Poderes",
            story: "História",
            settings: "Configurações"
        },
        meta: {
            description: "Jogo incremental baseado no Idle Mine de Crovie."
        },
        settings: {
            title: "Configurações",
            description: "Altere o formato numérico do jogo, salve manualmente ou exporte e importe seu progresso.",
            language: "Idioma",
            languageOptions: {
                en: "Inglês",
                pt: "Português"
            },
            numberFormat: "Formato Numérico",
            theme: "Tema",
            themeOptions: {
                light: "Claro",
                dark: "Escuro"
            },
            showMineObjLevel: "Mostrar Nível do Mineral",
            showMinCraftDamage: "Mostrar Dano Base Mínimo para Picaretas Criadas",
            export: "Exportar",
            import: "Importar (do Campo de Texto)",
            hardReset: "Resetar Tudo",
            note: "Nota: O jogo não será salvo se os cookies e o armazenamento do navegador estiverem desativados. Limpar cookies e dados do navegador pode apagar seu progresso.",
            thanks: "Obrigado a crovie, o criador do Idle Mine, por criar este interessante conceito de jogo.",
            notations: "Notações fornecidas por",
            social: {
                youtube: "Meu YouTube",
                website: "Meu Site",
                wiki: "Wiki"
            },
        },
        stats: {
            damageClick: "Dano por Clique",
            damageSecond: "Dano por Segundo",
            moneyClick: "Dinheiro por Clique",
            moneySecond: "Dinheiro por Segundo",
            avgGemsSecond: "Média de Gemas por Segundo",
            avgPlanetCoinsSecond: "Média de Moedas Planetárias por Segundo",
          },
        pickaxe: {
            craft: "Criar uma nova Picareta",
            minBaseDamage: "Dano Base Mínimo"
        },
        powers: {
            youHave: "Você tem",
            description: "Com sabedoria, você se torna inteligente o suficiente para ficar mais forte a cada clique! Torne-se especialista em todas as áreas da mineração para alcançar alturas que ninguém imaginou antes."
        },
        multibuy: {
            shift: "Segure SHIFT para comprar 10",
            ctrl: "Segure CTRL para comprar 100"
        },
        mineObjects: {
            mud: "Lama",
            paper: "Papel",
            salt: "Sal",
            clay: "Argila",
            rock: "Pedra",
            coal: "Carvão",
            bone: "Osso",
            lead: "Chumbo",
            iron: "Ferro",
            copper: "Cobre",
            carbonite: "Carbonita",
            quartz: "Quartzo",
            spookyBone: "Osso Assustador",
            silver: "Prata",
            crystal: "Cristal",
            topaz: "Topázio",
            amethyst: "Ametista",
            aquamarine: "Água-Marinha",
            emerald: "Esmeralda",
            ruby: "Rubi",
            sapphire: "Safira",
            hauntedBone: "Osso Assombrado",
            gold: "Ouro",
            platinum: "Platina",
            diamond: "Diamante",
            mithril: "Mithril",
            obsidian: "Obsidiana",
            earthEssence: "Essência da Terra",
            orbium: "Orbio",
            novalite: "Novalita",
            magicCrystal: "Cristal Mágico",
            darkstone: "Pedra Negra",
            adamantium: "Adamantium",
            fireEssence: "Essência de Fogo",
            lunalite: "Lunalita",
            mysterium: "Misterium",
            cursedBone: "Osso Amaldiçoado",
            windEssence: "Essência do Vento",
            unobtanium: "Inobtânio",
            sollite: "Solita",
            waterEssence: "Essência da Água",
            absurdium: "Absúrdio",
            cosmolite: "Cosmolita",
            shadowEssence: "Essência da Sombra",
            demonite: "Demonita",
            eternium: "Eternita",
            mysticite: "Misticita",
            lightEssence: "Essência da Luz",
            soulstone: "Pedra da Alma",
            arcanium: "Arcânio",
            hellstone1: "Pedra Infernal Nível 1",
            hellstone2: "Pedra Infernal Nível 2",
            hellstone3: "Pedra Infernal Nível 3",
            hellstone4: "Pedra Infernal Nível 4",
            hellstone666: "Pedra Infernal Nível 666",
            infinitum: "Infinito",
            omegaEssence: "Essência Ômega",
            inverticolite: "Inverticolita",
            meutronium: "Neutrônio",
            zettaWattCrystal: "Cristal ZettaWatt",
            theGem: "A GEMA",
            boneOfInfinity: "Osso do Infinito",
            paperOfGods: "Papel dos Deuses",
            heavenstone: "Pedra Celestial",
            holoStone: "Holo-Pedra",
            antiMud: "Anti-Lama",
            quantumOrb: "Orbe Quântico",
            sourceOfPower: "Fonte de Poder",
            fractalium: "Fractalita",
            postInfinityEssence: "Essência Pós-Infinito",
            unsolvium: "Insolúvel",
            thePortal: "O PORTAL"
        },
        specialMineObjects: {
            portalToSpace: "PORTAL PARA O ESPAÇO",
            tinyAsteroid: "Pequeno Asteroide",
            smallAsteroid: "Asteroide Pequeno",
            asteroid2021DC9: "2021DC9",
            deimos: "Deimos",
            phobos: "Fobos",
            hydra: "Hidra",
            mimas: "Mimas",
            enceladus: "Encélado",
            tethys: "Tétis",
            triton: "Tritão",
            pluto: "Plutão",
            moon: "A Lua",
            mercury: "Mercúrio",
            titan: "Titã",
            ganymede: "Ganimedes",
            mars: "Marte",
            venus: "Vênus",
            neptune: "Netuno",
            uranus: "Urano",
            saturn: "Saturno",
            jupiter: "Júpiter",
            tres2b: "TrES-2b",
            kepler7b: "Kepler-7b",
            wasp78b: "WASP-78b",
            wasp79b: "WASP-79b",
            hyperSaturn: "Hiper-Saturno",
            superEarth: "SUPER-TERRA",
            colossia: "Colossia",
            giagantia: "Giagantia",
            garagantula: "Gargântua",
            giagarantulaOmega: "Giagarântula Ômega",
            essenceOfWisdom: "ESSÊNCIA DA SABEDORIA",
            tinyStar: "Pequena Estrela",
            trappist1: "TRAPPIST-1",
            teide1: "Teide 1",
            sun: "Sol",
            siriusA: "Sírius A",
            vega: "Vega",
            pollux: "Pólux",
            arcturus: "Arcturus",
            polaris: "Polaris",
            aldebaran: "Aldebarã",
            rigel: "Rigel",
            deneb: "Deneb",
            etaCarinae: "Eta Carinae",
            pistolStar: "Estrela Pistola",
            kyCygni: "KY Cygni",
            antares: "Antares",
            betelgeuse: "Betelgeuse",
            muCephei: "Mu Cephei",
            myCephei: "MY Cephei",
            vyCanisMajoris: "VY Canis Majoris",
            uyScuti: "UY Scuti",
            smallStarGroup: "Grupo Pequeno de Estrelas",
            mediumStarGroup: "Grupo Médio de Estrelas",
            largeStarGroup: "Grupo Grande de Estrelas",
            starCluster: "Aglomerado Estelar",
            largeStarCluster: "Grande Aglomerado Estelar",
            hugeStarCluster: "Enorme Aglomerado Estelar",
            smallMagellanicCloud: "Pequena Nuvem de Magalhães",
            largeMagellanicCloud: "Grande Nuvem de Magalhães",
            milkyWay: "Via Láctea",
            andromedaGalaxy: "Galáxia de Andrômeda",
            sombreroGalaxy: "Galáxia do Sombrero",
            tadpoleGalaxy: "Galáxia Girino",
            condorGalaxy: "Galáxia Condor",
            cometGalaxy: "Galáxia Cometa",
            localGroup: "Grupo Local",
            ic1101: "IC 1101",
            bigGalaxyGroup: "Grande Grupo de Galáxias",
            smallGalaxyCluster: "Pequeno Aglomerado de Galáxias",
            virgoCluster: "Aglomerado de Virgem",
            galaxySupercluster: "Superaglomerado de Galáxias",
            galaxyMegacluster: "Megaaglomerado de Galáxias",
            filament: "Filamento",
            sloanGreatWall: "Grande Muralha de Sloan",
            theUniverse: "O UNIVERSO"
        },
        milestones: {
            gameStart: "Iniciar o jogo",
            firstMud: "Mine sua primeira Lama",
            firstPaper: "Mine um pedaço de Papel",
            blacksmithUpgrade: "Aprimore seu Ferreiro uma vez",
            firstSalt: "Mine um pedaço de Sal",
            firstClay: "Mine um pedaço de Argila",
            firstStone: "Mine uma Pedra",
            tenThousand: "Alcance 10.000 $ em mãos",
            firstSpookyBone: "Mine um Osso Assustador (Alcance o Mineral número 13 e quebre-o para chegar ao mineral número 14)",
            millionaire: "Tenha 1.000.000 $ em mãos",
            preciousStones: "Alcance a Esmeralda",
            gemWaster: "Aprimore o Gastador de Gemas para o Nível 1",
            unrealStones: "Alcance a Essência da Terra",
            fireEssence: "Alcance a Essência do Fogo",
            mysterium: "Alcance ???",
            fiftyTrillion: "Tenha 50 Trilhões $ em mãos",
            lightEssence: "Alcance a Essência da Luz",
            hellStone: "Alcance a Pedra Infernal",
            hellStoneFinal: "Alcance a Pedra Infernal Nv. ???",
            infinitum: "Alcance ???",
            theGem: "Alcance A GEMA",
            gemUpgrades: "Quebre A GEMA",
            fractalium: "Alcance o Fractalium",
            reachPortal: "Alcance ???",
            breakPortal: "Atravesse O PORTAL",
            proceduralRealm1: "Explore ainda mais o reino procedural",
            reachSpacePortal: "Alcance mais um portal...",
            breakSpacePortal: "Abra o portal espacial",
            planetcoin: "Ganhe uma Moeda Planetária",
            pluto: "Mine Plutão",
            theMoon: "Mine a Lua",
            mars: "Alcance Marte",
            venus: "Alcance Vênus",
            saturn: "Alcance Saturno",
            jupiter: "Alcance Júpiter",
            wasp79b: "Alcance WASP-79b",
            hyperSaturn: "Alcance o Hiper-Saturno",
            superEarth: "Alcance a SUPER-TERRA",
            colossia: "Alcance Colossia",
            giagantia: "Alcance o próximo Planeta",
            garagantula: "Alcance o próximo Planeta",
            planetOmega: "Alcance o próximo Planeta",
            breakPlanetOmega: "Quebre Giagarantula Ômega",
            planet160: "Alcance o Objeto #160",
            reachWisdomEssence: "Alcance ???",
            breakWisdomEssence: "Quebre a Essência da Sabedoria",
            miningStars: "Mine uma Pequena Estrela",
            wisdomUpgrade: "Compre uma Melhoria de Sabedoria",
            mineSun: "Mine o Sol",
            minePolaris: "Mine Polaris",
            mineBetelgeuse: "Mine Betelgeuse",
            mineScuti: "Mine UY Scuti",
            mineStarGroup: "Mine um Pequeno Grupo de Estrelas",
            mineSmallGalaxy: "Mine a Pequena Nuvem de Magalhães",
            mineMilkyWay: "Mine a Via Láctea",
            mineLocalGroup: "Mine o Grupo Local",
            mineGalaxyCluster: "Mine um Pequeno Aglomerado de Galáxias",
            mineGalaxySuperCluster: "Mine um Superaglomerado de Galáxias",
            mineFilament: "Mine um Filamento",
            reachUniverse: "Alcance ???",
            mineUniverse: "Mine O UNIVERSO"
        },
    }
};

const i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});
