// Reader passages: ~800-1000 word texts in German (A2/B1 level)
// World history, one passage per 10-year period starting at 1000 AD.
// Each passage takes a global view: politics, rulers, inventions, and the
// daily life of ordinary people across all regions of the world.
// translations: word/phrase -> English, used for popup tooltips
// unlockDay: the day number (1-100) when this passage becomes available

const READERS = [
  {
    id: 1,
    unlockDay: 1,
    period: "1000–1010 n. Chr.",
    title: "Das Jahr 1000: Die Welt am Jahrtausendwechsel",
    text: `Um das Jahr 1000 lebten die meisten Menschen in Europa als Bauern auf dem Land. Die Städte waren klein und schmutzig. Eine große Stadt hatte vielleicht zwanzigtausend Einwohner. London, Paris und Köln waren solche Städte. Die meisten Dörfer hatten nur wenige hundert Menschen. Das Leben war hart und kurz. Viele Kinder starben, bevor sie erwachsen wurden. Wer vierzig Jahre alt wurde, galt als alter Mensch.

Die Bauern arbeiteten von früh bis spät auf den Feldern. Im Frühling pflanzten sie Getreide, im Sommer pflegten sie die Felder, im Herbst ernteten sie. Der Winter war gefährlich. Es gab keine Heizung außer dem Feuer im Haus, keine modernen Medikamente, und oft nicht genug Essen. Hunger war ein ständiger Begleiter des mittelalterlichen Lebens.

In Deutschland und anderen Teilen Europas herrschte das Heilige Römische Reich. Das Reich war kein moderner Staat, sondern ein loses Netz von Fürsten, Herzögen und Bischöfen, die alle dem Kaiser gehorchten – meistens. Der Kaiser Otto III. regierte um das Jahr 1000. Er war ein gebildeter junger Mann und träumte davon, das alte Römische Reich neu zu gründen. Er starb jedoch jung, mit nur zweiundzwanzig Jahren, im Jahr 1002.

Die Kirche spielte eine riesige Rolle im Leben aller Menschen. Priester und Bischöfe waren oft mächtiger als weltliche Fürsten. Klöster waren Zentren des Wissens, der Kunst und der Landwirtschaft. Mönche kopierten Bücher mit der Hand und bewahrten so das Wissen der Antike. Ohne die Klöster wären viele Texte aus der Antike für immer verloren gegangen.

Viele Menschen in Europa hatten Angst vor dem Jahr 1000. Sie glaubten, dass das Ende der Welt kommen würde. Die Bibel sprach von tausend Jahren, und manche Priester sagten, dass Gott die Welt nach tausend Jahren vernichten würde. Als das Jahr 1000 kam und die Welt nicht endete, waren viele Menschen erleichtert und dankbar.

Weit weg von Europa, in China, war die Song-Dynastie an der Macht. China war zu dieser Zeit das technologisch fortschrittlichste Land der Welt. Die Chinesen hatten schon Papier, Buchdruck und Schießpulver erfunden. In chinesischen Städten gab es Restaurants, Buchläden und öffentliche Bäder. Die Bevölkerung Chinas war größer als die gesamte Bevölkerung Europas.

Im islamischen Raum, von Spanien bis nach Persien, blühte die Wissenschaft. Arabische Gelehrte übersetzten die Werke von Aristoteles, Platon und anderen griechischen Philosophen ins Arabische. Sie entwickelten neue Methoden in der Mathematik, Astronomie und Medizin. Die Stadt Bagdad war mit über einer Million Einwohnern eine der größten Städte der Welt. Der Arzt und Philosoph Avicenna schrieb um das Jahr 1000 sein berühmtes medizinisches Werk, das noch Jahrhunderte später in Europa gelesen wurde.

Das Byzantinische Reich mit seiner Hauptstadt Konstantinopel war ebenfalls reich und mächtig. Die Byzantiner bewahrten die Traditionen des alten Rom und des antiken Griechenlands. Ihre Künstler schufen wunderschöne Mosaike und Ikonen. Die byzantinische Kultur hatte großen Einfluss auf die Slawen, besonders auf Russland und Bulgarien. Das Christentum hatte sich erst kurz zuvor in Russland verbreitet – der Fürst Wladimir hatte sein Volk im Jahr 988 zum Christentum bekehrt.

Im fernen Norden, in Skandinavien, waren die Wikinger aktiv. Im Jahr 1000 segelte der Norweger Leif Eriksson von Grönland nach Westen und erreichte die Küste Nordamerikas. Die Wikinger nannten dieses Land „Vinland", weil sie dort wilde Trauben fanden. Sie gründeten eine kleine Siedlung, aber sie blieben nicht lange. Die einheimischen Menschen – die Wikinger nannten sie „Skraelings" – waren zu zahlreich und zu feindlich. Diese Entdeckung blieb in Europa fast unbekannt und hatte keine großen Folgen. Erst fast fünfhundert Jahre später sollte Europa Amerika wirklich entdecken.

In Japan entwickelte sich eine elegante und verfeinerte Hofkultur. Am kaiserlichen Hof in Kyoto schrieben gebildete Frauen Romane und Gedichte. Die Schriftstellerin Murasaki Shikibu schrieb „Die Geschichte vom Prinzen Genji" – eines der ersten langen Prosawerke der Weltliteratur. Japanische Kunst, Kleidung und Zeremonien wurden immer aufwendiger und schöner.

Indien war in viele kleine Königreiche aufgeteilt. Im Süden Indiens blühte die Chola-Dynastie und schickte Handelsschiffe bis nach Südostasien und China. Die Händler brachten Gewürze, Seide und andere wertvolle Waren über weite Entfernungen.

Die Welt um das Jahr 1000 war also größer und vielfältiger als viele Europäer glaubten. Verschiedene Kulturen lebten parallel, manchmal in Kontakt miteinander, manchmal völlig getrennt. Die Seidenstraße verband Europa und China mit langen Karawanenreisen über Zentralasien. Gewürze aus Asien kamen nach Europa, europäisches Silber floss nach Osten. Ideen und Erfindungen reisten langsam, aber sie reisten.`,
    translations: {
      "die meisten": "most",
      "auf dem Land": "in the countryside",
      "schmutzig": "dirty",
      "das Dorf": "the village",
      "bevor sie erwachsen wurden": "before they grew up",
      "galt als": "was considered",
      "von früh bis spät": "from dawn to dusk",
      "das Getreide": "the grain",
      "die Heizung": "heating",
      "ständiger Begleiter": "constant companion",
      "das Heilige Römische Reich": "the Holy Roman Empire",
      "ein loses Netz": "a loose network",
      "gehorchten": "obeyed",
      "träumte davon": "dreamed of",
      "weltliche": "secular / worldly",
      "Klöster": "monasteries",
      "Mönche": "monks",
      "bewahrten": "preserved",
      "die Antike": "antiquity / the ancient world",
      "das Ende der Welt": "the end of the world",
      "vernichten": "to destroy",
      "erleichtert": "relieved",
      "an der Macht": "in power",
      "fortschrittlichste": "most advanced",
      "Buchdruck": "printing",
      "Schießpulver": "gunpowder",
      "Gelehrte": "scholars",
      "übersetzten": "translated",
      "der Einfluss": "the influence",
      "die Slawen": "the Slavs",
      "bekehrt": "converted",
      "die Küste": "the coast",
      "wilde Trauben": "wild grapes",
      "die Siedlung": "the settlement",
      "die einheimischen Menschen": "the native people",
      "zahlreich": "numerous",
      "die Hofkultur": "court culture",
      "die Weltliteratur": "world literature",
      "die Seidenstraße": "the Silk Road",
      "Karawanenreisen": "caravan journeys",
    }
  },
  {
    id: 2,
    unlockDay: 2,
    period: "1010–1020 n. Chr.",
    title: "Mächtige Reiche von Ost bis West",
    text: `Das zweite Jahrzehnt des 11. Jahrhunderts war eine Zeit großer und mächtiger Reiche. In vielen Teilen der Welt regierten starke Herrscher, und die einfachen Menschen mussten ihnen Steuern zahlen und gehorchen.

Im Osten Europas erreichte das Byzantinische Reich den Höhepunkt seiner Macht. Der Kaiser Basileios II. war ein harter und kluger Herrscher. Viele Jahre lang führte er Krieg gegen das benachbarte Bulgarien. Im Jahr 1014 gewann er eine entscheidende Schlacht. Nach dem Sieg ließ er Tausende von gefangenen bulgarischen Soldaten blenden – das heißt, er nahm ihnen das Augenlicht. Wegen dieser grausamen Tat nennt man ihn bis heute „den Bulgarentöter". Sein Reich war nun das stärkste in ganz Europa und reichte von Italien bis nach Syrien.

In England war die Lage ganz anders. Das Land litt seit Jahren unter den Angriffen der Wikinger aus Dänemark. Der englische König Æthelred war schwach und konnte sein Volk nicht schützen. Er versuchte, die Wikinger mit Geld zu bezahlen, aber sie kamen immer wieder zurück. Im Jahr 1013 eroberte der dänische König Sven Gabelbart fast ganz England. Drei Jahre später, im Jahr 1016, wurde sein Sohn Knut König von England. Knut wurde später ein mächtiger Herrscher über England, Dänemark und Norwegen zugleich.

Weit im Osten, in China, herrschte weiterhin die Song-Dynastie. Wenige Jahre zuvor, im Jahr 1005, hatte China einen wichtigen Friedensvertrag mit dem Reich der Liao im Norden geschlossen. Dieser Vertrag brachte dem Land jahrzehntelangen Frieden. China bezahlte den Liao jedes Jahr Silber und Seide, aber dafür hörten die Kriege auf. Der Handel blühte, und die Wirtschaft wuchs. In dieser Zeit benutzten chinesische Kaufleute zum ersten Mal Papiergeld, weil das schwere Metallgeld für den großen Handel unpraktisch war.

In Indien fielen die Armeen von Mahmud von Ghazni immer wieder in den Norden ein. Mahmud war ein muslimischer Herrscher aus dem heutigen Afghanistan. Fast jedes Jahr führte er einen Feldzug nach Indien, um die reichen Tempel zu plündern. Er nahm enorme Mengen Gold und kehrte dann in seine Hauptstadt zurück. Für die Menschen in Nordindien waren diese Angriffe eine ständige Bedrohung.

In Japan stand die mächtige Familie Fujiwara auf dem Gipfel ihres Einflusses. Der Adlige Fujiwara no Michinaga kontrollierte den kaiserlichen Hof, obwohl er selbst nie Kaiser war. Er verheiratete seine Töchter mit den Kaisern und regierte durch sie. Am Hof in Kyoto schrieb man weiter wunderbare Gedichte und Romane. Es war ein goldenes Zeitalter der japanischen Literatur und Kunst.

Auf der anderen Seite der Welt, in Nordamerika, wuchs am Fluss Mississippi eine große Stadt. Wir nennen sie heute Cahokia. Dort lebten Tausende von Menschen. Sie bauten riesige Erdhügel, auf denen ihre Tempel und die Häuser ihrer Anführer standen. Der größte dieser Hügel war so groß wie eine ägyptische Pyramide am Boden. Cahokia war damals eine der größten Städte nördlich von Mexiko. Die Menschen dort bauten Mais an und handelten über weite Entfernungen.

In Mittelamerika lebten die Maya. Ihre großen klassischen Städte waren zwar schon verlassen, aber im Norden, auf der Halbinsel Yucatán, blühten neue Maya-Städte. Die Maya kannten die Schrift, die Astronomie und einen genauen Kalender.

Für die einfachen Menschen auf der ganzen Welt blieb das tägliche Leben ähnlich. Die meisten waren Bauern. Sie standen mit der Sonne auf und arbeiteten auf dem Feld. Sie aßen einfaches Essen: Brot, Reis oder Mais, je nach Region. Krankheiten waren gefährlich, und die Menschen vertrauten auf Religion und einfache Hausmittel. Trotzdem fanden sie auch Freude – in Festen, in der Musik und in ihren Familien. Die mächtigen Könige und ihre Kriege standen in den Geschichtsbüchern, aber das wahre Leben spielte sich in den Dörfern und auf den Feldern ab.`,
    translations: {
      "das Jahrzehnt": "the decade",
      "Steuern zahlen": "to pay taxes",
      "gehorchen": "to obey",
      "der Höhepunkt": "the peak / climax",
      "benachbarte": "neighbouring",
      "entscheidende Schlacht": "decisive battle",
      "der Sieg": "the victory",
      "gefangenen": "captured",
      "blenden": "to blind",
      "das Augenlicht": "eyesight",
      "grausame Tat": "cruel deed",
      "der Bulgarentöter": "the Bulgar-slayer",
      "litt unter": "suffered from",
      "die Angriffe": "the attacks",
      "schützen": "to protect",
      "eroberte": "conquered",
      "zugleich": "at the same time",
      "Friedensvertrag": "peace treaty",
      "geschlossen": "concluded / made",
      "jahrzehntelangen": "lasting decades",
      "die Wirtschaft": "the economy",
      "Papiergeld": "paper money",
      "unpraktisch": "impractical",
      "fielen ein": "invaded",
      "der Feldzug": "the military campaign",
      "plündern": "to plunder / loot",
      "enorme Mengen": "enormous quantities",
      "ständige Bedrohung": "constant threat",
      "der Gipfel": "the summit / peak",
      "der Adlige": "the nobleman",
      "verheiratete": "married off",
      "goldenes Zeitalter": "golden age",
      "Erdhügel": "earthen mounds",
      "der Anführer": "the leader",
      "Mais": "maize / corn",
      "die Halbinsel": "the peninsula",
      "verlassen": "abandoned",
      "die Schrift": "writing / script",
      "Hausmittel": "home remedies",
      "vertrauten auf": "relied on / trusted in",
      "spielte sich ab": "took place / unfolded",
    }
  },
  {
    id: 3,
    unlockDay: 3,
    period: "1020–1030 n. Chr.",
    title: "Könige, Gold und neues Geld",
    text: `In den 1020er Jahren regierten in vielen Ländern selbstbewusste Könige, und überall spielten Gold, Handel und Geld eine immer größere Rolle.

In Nordeuropa schuf der dänische König Knut der Große ein erstaunliches Reich. Er war gleichzeitig König von England, Dänemark und Norwegen. Man nennt dieses Reich oft das „Nordsee-Reich", weil alle seine Länder rund um die Nordsee lagen. Knut war nicht nur ein Krieger, sondern auch ein kluger Politiker. In England respektierte er die alten Gesetze und die Kirche. Er reiste sogar nach Rom, um den Papst zu treffen. Unter seiner Herrschaft hatte England eine seltene Zeit des Friedens.

Im Heiligen Römischen Reich begann im Jahr 1024 eine neue Herrscherfamilie, die Salier. Der erste König dieser Familie war Konrad II. Er war ein starker Herrscher, der die Macht des Königs gegenüber den Fürsten stärken wollte. Das Reich umfasste damals Deutschland, große Teile Italiens und das Königreich Burgund.

In China geschah in diesem Jahrzehnt etwas, das die Welt für immer verändern sollte, auch wenn es damals niemand bemerkte. Die Song-Regierung gab das erste offizielle Papiergeld der Weltgeschichte aus. Schon vorher hatten Kaufleute private Papierscheine benutzt, aber jetzt druckte der Staat selbst das Geld. Diese Erfindung war praktisch und gefährlich zugleich: Papier ist leicht zu tragen, aber wenn man zu viel davon druckt, verliert es seinen Wert. China lernte diese Lektion als erstes Land der Welt.

In Indien führte Mahmud von Ghazni im Jahr 1025 seinen berühmtesten Feldzug. Er griff den reichen Tempel von Somnath an der Westküste Indiens an. Der Tempel war voll von Gold und Edelsteinen. Mahmuds Armee plünderte ihn und tötete viele Verteidiger. Für die Muslime war Mahmud ein großer Held, für die Hindus ein grausamer Zerstörer. Bis heute erinnern sich die Menschen in Indien an diesen Angriff.

In Westafrika lag das mächtige Königreich Ghana. Es war reich, weil es den Handel zwischen Nord und Süd kontrollierte. Aus der Wüste im Norden kam Salz, aus dem Süden kam Gold. Die Karawanen zogen mit Kamelen durch die große Sahara. Das Gold aus Westafrika war so wichtig, dass es bis nach Europa und in die arabische Welt gelangte. Die Könige von Ghana waren berühmt für ihren Reichtum.

In Mittelamerika beherrschten die Tolteken große Teile Mexikos. Ihre Hauptstadt Tula war ein wichtiges Zentrum. Die Tolteken waren bekannt für ihre Krieger und ihre Kunst. Spätere Völker wie die Azteken betrachteten die Tolteken als weise Vorfahren und Vorbilder.

Im Südwesten Nordamerikas, im heutigen New Mexico, lebten die Ancestral Puebloans. In einem Tal namens Chaco Canyon bauten sie erstaunliche Häuser aus Stein. Manche dieser „großen Häuser" hatten Hunderte von Räumen und mehrere Stockwerke. Es waren die größten Gebäude in Nordamerika für viele Jahrhunderte. Die Menschen dort beobachteten den Himmel genau und richteten ihre Häuser nach der Sonne und dem Mond aus.

Wie lebten die einfachen Menschen in dieser Zeit? In Europa arbeiteten die meisten als Bauern für einen Herrn. Sie durften das Land nicht verlassen und mussten einen Teil ihrer Ernte abgeben. In China gab es mehr freie Bauern und sogar Prüfungen, durch die kluge junge Männer Beamte werden konnten. In Afrika und Amerika lebten viele Menschen in Dörfern und folgten alten Traditionen. Überall aber war das Leben von harter Arbeit, von der Familie und vom Glauben bestimmt. Die Welt war voller verschiedener Kulturen, die sich gleichzeitig, aber meistens getrennt voneinander entwickelten.`,
    translations: {
      "selbstbewusste": "self-confident",
      "erstaunliches": "astonishing",
      "gleichzeitig": "at the same time",
      "das Nordsee-Reich": "the North Sea Empire",
      "der Krieger": "the warrior",
      "respektierte": "respected",
      "die Gesetze": "the laws",
      "die Herrschaft": "the rule / reign",
      "seltene": "rare",
      "die Herrscherfamilie": "ruling family",
      "die Salier": "the Salian dynasty",
      "gegenüber": "towards / compared to",
      "stärken": "to strengthen",
      "umfasste": "comprised / included",
      "bemerkte": "noticed",
      "gab... aus": "issued",
      "Papierscheine": "paper notes",
      "druckte": "printed",
      "der Wert": "the value",
      "die Lektion": "the lesson",
      "griff an": "attacked",
      "Edelsteinen": "precious stones / gems",
      "die Verteidiger": "the defenders",
      "der Zerstörer": "the destroyer",
      "kontrollierte": "controlled",
      "die Wüste": "the desert",
      "das Salz": "salt",
      "die Karawanen": "the caravans",
      "Kamelen": "camels",
      "gelangte": "reached / made its way",
      "der Reichtum": "the wealth",
      "beherrschten": "dominated / ruled",
      "die Vorfahren": "the ancestors",
      "Vorbilder": "role models",
      "das Tal": "the valley",
      "Stockwerke": "storeys / floors",
      "die Gebäude": "the buildings",
      "beobachteten": "observed",
      "abgeben": "to hand over / give up",
      "Prüfungen": "exams",
      "Beamte": "officials",
      "der Glauben": "faith / belief",
      "getrennt voneinander": "separately from each other",
    }
  },
  {
    id: 4,
    unlockDay: 4,
    period: "1030–1040 n. Chr.",
    title: "Reiche zerfallen, neue Mächte steigen auf",
    text: `Das vierte Jahrzehnt des 11. Jahrhunderts zeigte eine wichtige Wahrheit der Geschichte: Kein Reich bleibt für immer mächtig. Während alte Reiche zerfielen, stiegen an anderen Orten neue Mächte auf.

In Nordeuropa endete das große Nordsee-Reich fast so schnell, wie es entstanden war. Im Jahr 1035 starb Knut der Große. Seine Söhne waren nicht so klug und stark wie ihr Vater. Schon nach wenigen Jahren zerfiel das Reich in seine einzelnen Teile. England, Dänemark und Norwegen gingen wieder eigene Wege. Dies zeigt, wie sehr ein mittelalterliches Reich von der Person eines einzigen starken Herrschers abhing.

Im Süden Italiens erschienen neue Krieger: die Normannen. Sie waren Nachkommen der Wikinger, die sich in Frankreich niedergelassen hatten. In kleinen Gruppen kamen sie nach Italien, zuerst als Söldner, die für Geld kämpften. Bald aber begannen sie, eigenes Land zu erobern. Niemand ahnte damals, dass die Normannen einmal ganz Süditalien und Sizilien beherrschen würden.

In der islamischen Welt verschob sich die Macht nach Osten. Ein neues Volk, die Seldschuken, wurde immer stärker. Die Seldschuken waren Türken aus Zentralasien, die den Islam angenommen hatten. Im Jahr 1040 besiegten sie in einer großen Schlacht das mächtige Reich der Ghaznawiden. Dieser Sieg öffnete ihnen den Weg nach Persien und in den Nahen Osten. Die Seldschuken sollten bald zu einer der wichtigsten Mächte der Region werden.

Im heutigen China und Tibet entstand ein neues Reich. Im Jahr 1038 erklärte ein Herrscher namens Li Yuanhao die Gründung des Reiches Westliche Xia. Sein Volk, die Tanguten, lebte im trockenen Nordwesten Chinas und kontrollierte einen Teil der wichtigen Handelswege. Die Song-Dynastie war nicht stark genug, um diese neue Macht zu besiegen, und musste mit ihr leben.

In Westafrika wuchs zur gleichen Zeit eine neue religiöse Bewegung. In der Wüste predigten muslimische Gelehrte einen strengen, reinen Glauben. Aus dieser Bewegung entstanden die Almoraviden. Sie sollten in den folgenden Jahrzehnten ein großes Reich aufbauen, das von Westafrika bis nach Spanien reichte. Doch in den 1030er Jahren waren sie noch klein und unbekannt.

In dieser Zeit half das Klima den Menschen in Europa. Historiker nennen diese Periode die „mittelalterliche Warmzeit". Die Sommer waren wärmer als heute, und die Ernten waren oft gut. Mehr Essen bedeutete mehr Menschen. Die Bevölkerung Europas begann langsam zu wachsen. Bauern rodeten Wälder und legten neue Felder an. Neue Dörfer entstanden, und langsam wurden auch die Städte größer.

Trotzdem war das Leben unsicher. Eine schlechte Ernte konnte sofort zu einer Hungersnot führen. Wenn der Regen zur falschen Zeit kam oder ausblieb, starben die Pflanzen, und die Menschen hungerten. Es gab keine Vorräte für schlechte Jahre und keine Hilfe von einem Staat. Die Menschen waren der Natur fast hilflos ausgeliefert.

In Amerika lebten die Menschen weiter in ihren eigenen Welten, ohne Kontakt zu Europa, Afrika oder Asien. In Cahokia am Mississippi und in Chaco Canyon im Südwesten blühten die Kulturen. In den Anden in Südamerika bauten verschiedene Völker kunstvolle Textilien und bearbeiteten Metall. Sie wussten nichts von den Königen und Kriegen der anderen Halbkugel, und diese wussten nichts von ihnen. Erst viele Jahrhunderte später sollten sich diese getrennten Welten begegnen – mit gewaltigen Folgen für die ganze Menschheit.`,
    translations: {
      "die Wahrheit": "the truth",
      "zerfielen": "fell apart / disintegrated",
      "stiegen auf": "rose / ascended",
      "entstanden war": "had arisen",
      "einzelnen Teile": "individual parts",
      "eigene Wege": "their own ways",
      "abhing": "depended (on)",
      "erschienen": "appeared",
      "Nachkommen": "descendants",
      "niedergelassen": "settled",
      "Söldner": "mercenaries",
      "ahnte": "suspected / had any idea",
      "verschob sich": "shifted",
      "die Seldschuken": "the Seljuks",
      "angenommen": "adopted",
      "besiegten": "defeated",
      "öffnete den Weg": "opened the way",
      "der Nahe Osten": "the Middle East",
      "erklärte": "declared",
      "die Gründung": "the founding",
      "trockenen": "dry / arid",
      "Handelswege": "trade routes",
      "die Bewegung": "the movement",
      "predigten": "preached",
      "strengen": "strict",
      "reinen": "pure",
      "die Almoraviden": "the Almoravids",
      "das Klima": "the climate",
      "die Warmzeit": "warm period",
      "die Ernten": "the harvests",
      "rodeten": "cleared (forest)",
      "legten an": "laid out / created",
      "unsicher": "uncertain / insecure",
      "die Hungersnot": "the famine",
      "ausblieb": "failed to come",
      "hungerten": "went hungry",
      "Vorräte": "supplies / stores",
      "hilflos ausgeliefert": "helplessly at the mercy of",
      "kunstvolle": "intricate / artful",
      "bearbeiteten": "worked / processed",
      "die Halbkugel": "the hemisphere",
      "begegnen": "to meet / encounter",
      "gewaltigen Folgen": "enormous consequences",
    }
  },
  {
    id: 5,
    unlockDay: 5,
    period: "1040–1050 n. Chr.",
    title: "Erfindungen, Reformen und ferne Welten",
    text: `Das fünfte Jahrzehnt des 11. Jahrhunderts war eine Zeit wichtiger Erfindungen und Reformen. In China, in Europa und in anderen Teilen der Welt veränderten neue Ideen langsam das Leben der Menschen.

In China machte ein einfacher Mann namens Bi Sheng eine geniale Erfindung. Um das Jahr 1040 entwickelte er den beweglichen Druck. Bisher musste man für jede Seite eines Buches eine ganze Holzplatte schnitzen. Bi Sheng aber stellte einzelne Zeichen aus Ton her. Diese Zeichen konnte man immer wieder neu zusammensetzen, um verschiedene Texte zu drucken. Es war dieselbe Idee, die in Europa erst vierhundert Jahre später von Gutenberg wiederentdeckt wurde. China war seiner Zeit weit voraus.

In denselben Jahren schrieben chinesische Gelehrte auch ein wichtiges Buch über Militärtechnik. In diesem Buch stand zum ersten Mal in der Geschichte ein genaues Rezept für Schießpulver. Schießpulver sollte die Art, wie Menschen Krieg führen, für immer verändern – aber das geschah erst viel später.

In Europa begann eine wichtige Reform der Kirche. Viele Menschen waren unzufrieden, weil manche Priester und Bischöfe nur an Geld und Macht dachten. Man kaufte und verkaufte sogar kirchliche Ämter. Der deutsche Kaiser Heinrich III. war ein frommer Mann und wollte die Kirche reinigen. Im Jahr 1046 reiste er nach Italien und setzte gleich drei streitende Päpste ab. Danach sorgte er für die Wahl eines neuen, ehrlichen Papstes. Diese Reform war der Anfang einer langen Bewegung, die die Kirche stärker und unabhängiger machen sollte.

In England bestieg im Jahr 1042 ein neuer König den Thron: Eduard, den man später „den Bekenner" nannte. Er war ein frommer und ruhiger Herrscher. Eduard hatte einen großen Teil seines Lebens in der Normandie verbracht und brachte viele normannische Freunde nach England. Diese Verbindung zwischen England und der Normandie sollte später eine große Rolle spielen.

Im Norden, in Schottland, regierte in dieser Zeit ein König namens Macbeth. Er kam im Jahr 1040 an die Macht. In Wirklichkeit war er kein böser Tyrann, sondern ein recht erfolgreicher Herrscher. Erst der englische Dichter Shakespeare machte ihn viele Jahrhunderte später zu einer dunklen Figur in einem berühmten Theaterstück.

In Südindien stand das Reich der Chola auf dem Höhepunkt seiner Macht. Die Chola-Könige hatten eine starke Flotte und beherrschten das Meer. Wenige Jahre zuvor hatten sie sogar eine große Seereise unternommen und Teile von Südostasien angegriffen. Die Chola kontrollierten den Handel im Indischen Ozean. Gewürze, Stoffe und Edelsteine machten ihr Reich reich und berühmt.

Im Nahen Osten wurden die Seldschuken immer mächtiger. Sie zogen weiter nach Westen und näherten sich den Grenzen des Byzantinischen Reiches. Bald sollten sie zu einer ernsten Gefahr für die Christen im Osten werden. Genau diese Gefahr würde später einer der Gründe für die Kreuzzüge sein.

Wie immer lebten die meisten Menschen auf der Welt als einfache Bauern. Doch das Jahrzehnt zeigte, dass die Welt nicht stillstand. Neue Erfindungen wie der bewegliche Druck und das Schießpulver entstanden im Osten. Neue Ideen über Religion und Macht entstanden im Westen. Ferne Reiche in Indien, Afrika und Amerika gingen ihre eigenen Wege. Die Menschen wussten nichts von einer „Weltgeschichte", aber rückblickend können wir sehen, wie all diese getrennten Geschichten zusammen den Lauf der Welt formten.`,
    translations: {
      "die Erfindungen": "the inventions",
      "die Reformen": "the reforms",
      "geniale": "ingenious / brilliant",
      "der bewegliche Druck": "movable-type printing",
      "die Holzplatte": "wooden block / plate",
      "schnitzen": "to carve",
      "einzelne Zeichen": "individual characters",
      "Ton": "clay",
      "zusammensetzen": "to assemble / put together",
      "wiederentdeckt": "rediscovered",
      "seiner Zeit voraus": "ahead of its time",
      "die Militärtechnik": "military technology",
      "das Rezept": "the recipe / formula",
      "unzufrieden": "dissatisfied",
      "kirchliche Ämter": "church offices",
      "fromm": "pious / devout",
      "reinigen": "to clean / purify",
      "setzte ab": "deposed / removed",
      "streitende": "quarrelling",
      "die Wahl": "the election / choice",
      "ehrlichen": "honest",
      "unabhängiger": "more independent",
      "bestieg den Thron": "ascended the throne",
      "der Bekenner": "the Confessor",
      "verbracht": "spent (time)",
      "die Verbindung": "the connection",
      "der Tyrann": "the tyrant",
      "recht erfolgreich": "quite successful",
      "der Dichter": "the poet",
      "das Theaterstück": "the play",
      "die Flotte": "the fleet",
      "die Seereise": "the sea voyage",
      "unternommen": "undertaken",
      "der Indische Ozean": "the Indian Ocean",
      "Stoffe": "fabrics / cloth",
      "näherten sich": "approached",
      "die Grenzen": "the borders",
      "ernste Gefahr": "serious danger",
      "die Kreuzzüge": "the Crusades",
      "stillstand": "stood still",
      "rückblickend": "in retrospect",
      "der Lauf der Welt": "the course of the world",
      "formten": "shaped / formed",
    }
  },
];
