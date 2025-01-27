// import { ShopItem } from "./item.js";

let shopItemsData = [
  {
    id: "bg1",
    image: "img/products/too-many-bones.jpg",
    name: "Too Many Bones",
    shortName: "Too Many Bones",
    price: 149.5,
    description:
      "Too Many Bones comes loaded for bear by breaking into a new genre: the dice-builder RPG. This game takes everything you think you know about dice-rolling and turns it on its head. Dripping with strategy, this fantasy-based RPG puts you in the skin of a new race and takes you on an adventure to the northern territories to root out and defeat growing enemy forces and of course the infamous 'baddie' responsible. Team up or go it alone in a 1-4 player Coop or Solo play campaign. With over 100+ unique skill dice and 4-7 classes to choose from, every battle is its own mini challenge to figure out. Your adventure will consist of 8-12 battles before you reach your final destination and face off against one of a number of possible kingpins in order to win. Along the way, you will be faced with storyline decisions that will quickly have you weighing risk/reward, odds, and logic - with dice woven into every aspect! Your party will also be faced with other decisions: when to rest, when to explore, or even which fights to pursue! The Encounter cards offer fun plot twists and some comic relief, all while setting the stage for your next battle.",
  },
  {
    id: "bg2",
    image: "img/products/slay-the-spire.png",
    name: "Slay The Spire the Board Game",
    shortName: "Slay The Spire",
    price: 120.5,
    description:
      "Slay the Spire: The Board Game is a co-operative deck-building adventure. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and finally become strong enough to slay the Spire!",
  },
  {
    id: "bg3",
    image: "img/products/seti.jpg",
    name: "SETI: Search for Extraterrestrial Intelligence",
    shortName: "SETI",
    price: 62.5,
    description:
      "In SETI: Search for Extraterrestrial Intelligence, a eurogame for 1–4 players, you lead a scientific institution tasked with searching for traces of life beyond planet Earth. The game draws inspiration from current or emerging technologies and efforts in space exploration. Players will explore nearby planets and their moons by launching probes from Earth while taking advantage of ever-shifting planetary positions. Decide whether to land on their surface to collect valuable samples, or stay in orbit for a broader survey. Additionally, by directing your telescopes to gaze into distant star systems, you may detect traces of alien signals or undiscovered exoplanets, and collect promising data to examine and study back home. Back on Earth, you can invest in upgrading your equipment so you can analyze incoming data more efficiently, boost your telescope signal capacity, or increase your supply of resources—all to expand the scope of your search that could lead to a discovery of extraterrestrial life forms. You will also make use of over 200 cards to aid your efforts or focus your research in a particular direction for additional bonuses and rewards. Each card has unique effects and illustrations and depicts real-life technologies, projects, and discoveries (like the ISS, Large Hadron Collider, Perseverance rover, Voyager probe, and many more). Finding traces of extraterrestrial life is only a matter of time—utilize the resources you have at your disposal strategically and you may well end up being the one to make the biggest scientific contribution towards advancing our understanding of alien life within our galaxy. SETI: Search for Extraterrestrial Intelligence pays homage to space and planetary exploration, astronomy, the ongoing search for signs of life in the vastness of space, and efforts to understand the nature of life in the universe.",
  },
  {
    id: "bg4",
    image: "img/products/calico.png",
    name: "Calico",
    shortName: "Calico",
    price: 36.0,
    description:
      "Calico is a puzzly tile-laying game of quilts and cats. In Calico, players compete to sew the coziest quilt as they collect and place patches of different colors and patterns. Each quilt has a particular pattern that must be followed, and players are also trying to create color and pattern combinations that are not only aesthetically pleasing, but also able to attract the cuddliest cats! Turns are simple. Select a single patch tile from your hand and sew it into your quilt, then draw another patch into your hand from the three available. If you are able to create a color group, you may sew a button onto your quilt. If you are able to create a pattern combination that is attractive to any of the cats, it will come over and curl up on your quilt! At the end of the game, you score points for buttons, cats, and how well you were able to complete your unique quilt pattern.",
  },
  {
    id: "bg5",
    image: "img/products/the-crew-the-quest-for-planet-nine.jpg",
    name: "The Crew: The Quest for Planet Nine",
    shortName: "The Crew",
    price: 16.5,
    description:
      "In the co-operative trick-taking game The Crew: The Quest for Planet Nine, the players set out as astronauts on an uncertain space adventure. What about the rumors about the unknown planet about? The eventful journey through space extends over 50 exciting missions. But this game can only be defeated by meeting common individual tasks of each player. In order to meet the varied challenges, communication is essential in the team. But this is more difficult than expected in space. With each mission, the game becomes more difficult. After each mission, the game can be paused and continued later. During each mission, it is not the amount of tricks, but the right tricks at the right time that count. The team wins only if every single player is successful in fulfilling their tasks. The game comes with 50 missions. Three more missions were published in spielbox 2/2020",
  },
  {
    id: "bg6",
    image: "img/products/gloomhaven-jaws-of-the-lion.jpg",
    name: "Gloomhaven: Jaws of the Lion",
    shortName: "Gloomhaven: Jaws of the Lion",
    price: 55.0,
    description:
      "Gloomhaven: Jaws of the Lion is a standalone game that takes place before the events of Gloomhaven. The game includes four new characters — Valrath Red Guard (tank, crowd control), Inox Hatchet (ranged damage), Human Voidwarden (support, mind-control), and Quatryl Demolitionist (melee damage, obstacle manipulation) — that can also be used in the original Gloomhaven game. The game also includes 16 monster types (including seven new standard monsters and three new bosses) and a new campaign with 25 scenarios that invites the heroes to investigate a case of mysterious disappearances within the city. Is it the work of Vermlings, or is something far more sinister going on? Gloomhaven: Jaws of the Lion is aimed at a more casual audience to get people into the gameplay more quickly. All of the hard-to-organize cardboard map tiles have been removed, and instead players will play on the scenario book itself, which features new artwork unique to each scenario. The last barrier to entry — i.e., learning the game — has also been lowered through a simplified rule set and a five-scenario tutorial that will ease new players into the experience.",
  },
  {
    id: "bg7",
    image: "img/products/arkham-horror-the-board-game.png",
    name: "Arkham Horror (Third Edition)",
    shortName: "Arkham Horror (Third Edition)",
    price: 58.5,
    description:
      "The year is 1926, and it is the height of the Roaring Twenties. Flappers dance till dawn in smoke-filled speakeasies, drinking alcohol supplied by rum runners and the mob. It’s a celebration to end all celebrations in the aftermath of the War to End All Wars. Yet a dark shadow grows in the city of Arkham. Alien entities known as Ancient Ones lurk in the emptiness beyond space and time, writhing at the thresholds between worlds. Occult rituals must be stopped and alien creatures destroyed before the Ancient Ones make our world their ruined dominion. Only a handful of investigators stand against the Arkham Horror. Will they prevail? Arkham Horror (Third Edition) is a cooperative board game for one to six players who take on the roles of investigators trying to rid the world of eldritch beings known as Ancient Ones. Based on the works of H.P. Lovecraft, players will have to gather clues, defeat terrifying monsters, and find tools and allies if they are to stand any chance of defeating the creatures that dwell just beyond the veil of our reality. The game is split into a series of rounds made up of four phases. The Action Phase The Monster Phase The Encounter Phase The Mythos Phase The Action Phase sees your investigators fighting back against the dark power of the mythos. During this phase, each investigator can perform two different actions. Move – Investigators can move up to two spaces in the city, spending money to hire speedy transport and move additional spaces. The space where you end your turn will determine what encounter card you draw later in the turn. Gather Resources – Gain one dollar token, which can be used to purchase items and goods as well as increase how far you can move Focus – Focus one of your skills, increasing its value. Ward – Attempt to remove doom from your location. Increasing doom means danger for the investigators, and removing doom can delay these apocalyptic heraldings. Attack – Attack a monster engaged with you. Evade – Try to escape from a monster engaged with you. Research – Search for clues at your location. Trade – Trade money, clues, items, and more with other investigators at your location. —description from the publisher",
  },

  {
    id: "bg8",
    image: "img/products/coup.jpg",
    name: "Coup",
    shortName: "Coup",
    price: 15.00,
    description:
      "You are head of a family in an Italian city-state, a city run by a weak and corrupt court. You need to manipulate, bluff and bribe your way to power. Your object is to destroy the influence of all the other families, forcing them into exile. Only one family will survive... In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards in your playing area. Each player starts the game with two coins and two influence – i.e., two face-down character cards; the fifteen card deck consists of three copies of five different characters, each with a unique set of powers: Duke: Take three coins from the treasury. Block someone from taking foreign aid. Assassin: Pay three coins and try to assassinate another player's character. Contessa: Block an assassination attempt against yourself. Captain: Take two coins from another player, or block someone from stealing coins from you. Ambassador: Draw two character cards from the Court (the deck), choose which (if any) to exchange with your face-down characters, then return two. Block someone from stealing coins from you. On your turn, you can take any of the actions listed above, regardless of which characters you actually have in front of you, or you can take one of three other actions: Income: Take one coin from the treasury. Foreign aid: Take two coins from the treasury. Coup: Pay seven coins and launch a coup against an opponent, forcing that player to lose an influence. (If you have ten coins or more, you must take this action.) When you take one of the character actions – whether actively on your turn, or defensively in response to someone else's action – that character's action automatically succeeds unless an opponent challenges you. In this case, if you can't (or don't) reveal the appropriate character, you lose an influence, turning one of your characters face-up. Face-up characters cannot be used, and if both of your characters are face-up, you're out of the game. If you do have the character in question and choose to reveal it, the opponent loses an influence, then you shuffle that character into the deck and draw a new one, perhaps getting the same character again and perhaps not. The last player to still have influence – that is, a face-down character – wins the game! A new & optional character called the Inquisitor has been added (currently, the only English edition with the Inquisitor included is the Kickstarter Version from Indie Boards & Cards. Copies in stores may not be the Kickstarter versions and may only be the base game). The Inquisitor character cards may be used to replace the Ambassador cards. Inquisitor: Draw one character card from the Court deck and choose whether or not to exchange it with one of your face-down characters. OR Force an opponent to show you one of their character cards (their choice which). If you wish it, you may then force them to draw a new card from the Court deck. They then shuffle the old card into the Court deck. Block someone from stealing coins from you",
  },
];

export default shopItemsData;
