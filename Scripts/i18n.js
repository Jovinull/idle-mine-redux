const messages = {
    en: {
        title: "Idle Mine: Remix",
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
        welcome: "Welcome to Idle Mine: Remix!",

        story: {
            gameStart: {
                title: "Welcome to Idle Mine: Remix!",
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
            }
        }
    },
    pt: {
        title: "Idle Mine: Remix",
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
        welcome: "Bem-vindo ao Idle Mine: Remix!",

        story: {
            gameStart: {
                title: "Bem-vindo ao Idle Mine: Remix!",
                text1: "Então você decidiu começar a minerar. Você ouviu falar que muitos tesouros estão abaixo da superfície, então mal pode esperar para descobrir o que pode encontrar. Talvez você fique rico?",
                text2: "Lá está você e seu Dispositivo de Mineração Automático. Vamos começar! Isso também funciona como um guia. Se algo não estiver claro, consulte aqui como referência."
            },
            firstMud: {
                text1: "Você minerou seu primeiro pedaço de lama! Bem, não vale muito, mas você tem que começar de algum lugar.",
                quote: "Apenas um pouco de lama comum",
                text2: "Mesmo 2 $ podem ser um bom começo. Talvez você devesse tentar minerar algo mais valioso?"
            },
            firstPaper: {
                text1: "Você pega sua picareta e começa a bater em um velho dever de casa (Você não precisava mais dele, de qualquer maneira).",
                quote: "Papel (Seu velho dever de casa)",
                text2: "Por alguma razão, isso valia incríveis 10 $! Parece que você pegou o jeito. Infelizmente, você também descobre que era um pouco resistente à sua picareta, então você precisa criar uma melhor para continuar crescendo.",
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
                text2: "22 $! Isso é muito! Você pode comprar alguns jogos com isso, ou levar a mineração a sério e investir em sua Ferraria."
            }
        }
    }
};

const i18n = new VueI18n({
    locale: "en",
    messages,
});
