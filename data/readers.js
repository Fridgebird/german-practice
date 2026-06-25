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
  {
    id: 6,
    unlockDay: 6,
    period: "1050–1060 n. Chr.",
    title: "Ein Riss in der Kirche und neue Herren in Bagdad",
    text: `Das sechste Jahrzehnt des 11. Jahrhunderts brachte einen tiefen Riss in die christliche Welt und einen Machtwechsel im Herzen der islamischen Welt.

Das wichtigste Ereignis für die Christen war das Schisma von 1054. Schon lange gab es Streit zwischen der Kirche in Rom im Westen und der Kirche in Konstantinopel im Osten. Sie stritten über religiöse Fragen, über die Macht des Papstes und sogar über die Frage, welches Brot man bei der Messe benutzen soll. Im Jahr 1054 schickte der Papst Gesandte nach Konstantinopel. Das Treffen ging schlecht aus. Am Ende verfluchten sich die beiden Seiten gegenseitig. Aus dieser Spaltung entstanden zwei getrennte Kirchen: die römisch-katholische Kirche im Westen und die orthodoxe Kirche im Osten. Diese Trennung besteht bis heute.

Für die einfachen Gläubigen änderte sich zunächst wenig. Die meisten Bauern wussten gar nicht, was in den fernen Hauptstädten geschah. Aber langsam entwickelten sich die beiden Kirchen in verschiedene Richtungen, mit verschiedenen Sprachen, Bräuchen und Ideen.

In der islamischen Welt geschah ein großer Machtwechsel. Im Jahr 1055 zogen die Seldschuken in Bagdad ein. Der Kalif, das geistliche Oberhaupt der Muslime, hatte schon lange keine echte Macht mehr. Der seldschukische Anführer Tughril Beg nahm den Titel „Sultan" an und wurde der eigentliche Herrscher. Der Kalif blieb als religiöse Figur, aber die politische und militärische Macht lag jetzt bei den Seldschuken. Sie waren strenge Sunniten und brachten neue Energie in die islamische Welt.

In Süditalien wurden die Normannen immer stärker. Ein Mann namens Robert Guiscard führte die normannischen Krieger an. Sein Beiname „Guiscard" bedeutet „der Schlaue". Schritt für Schritt eroberte er Land von den Byzantinern und den Arabern. Bald sollte er einer der mächtigsten Männer im Mittelmeerraum werden.

Im Heiligen Römischen Reich starb im Jahr 1056 der Kaiser Heinrich III. Sein Sohn Heinrich IV. war erst sechs Jahre alt. Deshalb regierten andere für ihn, und das Reich wurde schwächer. Mächtige Fürsten nutzten die Schwäche des Kindkaisers, um ihre eigene Macht zu vergrößern. Dieser schwache Start sollte später zu großen Konflikten führen.

In Westafrika wuchs die Macht der Almoraviden. Diese strenge muslimische Bewegung kam aus der Wüste und eroberte ein großes Gebiet. Sie kontrollierten bald den wichtigen Goldhandel der Sahara. Das Gold aus Afrika war für die ganze bekannte Welt wertvoll.

In China herrschte weiter die Song-Dynastie. Das Land war reich und gebildet, aber es gab auch Probleme. Die Beamten diskutierten über Reformen. Sollte der Staat mehr in die Wirtschaft eingreifen, um den armen Bauern zu helfen? Diese Frage spaltete die Regierung in zwei Lager. In den folgenden Jahren sollte daraus ein großer politischer Streit werden.

In Amerika lebten die Menschen weiter ohne jeden Kontakt zur übrigen Welt. Cahokia am Mississippi war nahe seinem Höhepunkt. Tausende von Menschen lebten dort und bauten weiter an ihren großen Erdhügeln. Im Südwesten bauten die Ancestral Puebloans im Chaco Canyon ihre großen Steinhäuser. Diese amerikanischen Kulturen wussten nichts von Kaisern, Kalifen oder Päpsten – und diese wussten nichts von ihnen.

So zeigt dieses Jahrzehnt eine geteilte Welt. Die Christenheit zerbrach in zwei Kirchen. Die islamische Welt bekam mit den Seldschuken neue Herren. Und überall lebten die einfachen Menschen ihr Leben weiter, meistens ohne zu wissen, welche großen Veränderungen in den Palästen und Kirchen der Mächtigen geschahen.`,
    translations: {
      "der Riss": "the rift / crack",
      "der Machtwechsel": "the change of power",
      "das Schisma": "the schism",
      "die Messe": "the (church) mass",
      "Gesandte": "envoys",
      "ging schlecht aus": "ended badly",
      "verfluchten": "cursed",
      "gegenseitig": "mutually / each other",
      "die Spaltung": "the split / division",
      "römisch-katholische": "Roman Catholic",
      "orthodoxe": "Orthodox",
      "die Trennung": "the separation",
      "besteht bis heute": "exists to this day",
      "die Gläubigen": "the believers",
      "Bräuchen": "customs",
      "zog ein": "marched in / entered",
      "der Kalif": "the caliph",
      "geistliche Oberhaupt": "spiritual head",
      "der Sultan": "the sultan",
      "der eigentliche": "the actual / real",
      "strenge": "strict",
      "Sunniten": "Sunnis",
      "der Beiname": "the nickname / epithet",
      "der Schlaue": "the cunning one",
      "Schritt für Schritt": "step by step",
      "der Mittelmeerraum": "the Mediterranean region",
      "der Kindkaiser": "the child emperor",
      "die Schwäche": "the weakness",
      "vergrößern": "to enlarge / increase",
      "der Goldhandel": "the gold trade",
      "eingreifen": "to intervene",
      "spaltete": "divided / split",
      "zwei Lager": "two camps",
      "die übrige Welt": "the rest of the world",
      "zerbrach": "broke apart",
      "die Christenheit": "Christendom",
      "die Paläste": "the palaces",
    }
  },
  {
    id: 7,
    unlockDay: 7,
    period: "1060–1070 n. Chr.",
    title: "1066: Das Jahr, das England veränderte",
    text: `Kein Jahr des Mittelalters ist in England so berühmt wie das Jahr 1066. In diesem Jahr fand die normannische Eroberung statt, ein Ereignis, das die englische Geschichte, Sprache und Kultur für immer veränderte.

Alles begann mit dem Tod des englischen Königs Eduard des Bekenners im Januar 1066. Eduard hatte keine Kinder, und so stritten mehrere Männer um den Thron. Der englische Adlige Harold Godwinson wurde sofort zum König gekrönt. Aber zwei andere Männer erhoben ebenfalls Anspruch auf die Krone: Wilhelm, der Herzog der Normandie, und Harald Hardrada, der König von Norwegen.

Im September 1066 landete zuerst Harald Hardrada mit einer Wikingerarmee im Norden Englands. König Harold marschierte schnell nach Norden und besiegte die Wikinger in der Schlacht von Stamford Bridge. Harald Hardrada fiel in dieser Schlacht. Viele Historiker sehen darin das symbolische Ende der Wikingerzeit.

Aber Harold hatte kaum Zeit zu feiern. Nur wenige Tage später landete Wilhelm mit seiner normannischen Armee im Süden Englands. Harold musste mit seinen müden Soldaten sofort wieder nach Süden marschieren. Am 14. Oktober 1066 trafen die beiden Armeen bei Hastings aufeinander. Die Schlacht dauerte den ganzen Tag. Am Ende wurde Harold getötet, und Wilhelm gewann. Seitdem nennt man ihn „Wilhelm den Eroberer".

Die Folgen für England waren enorm. Wilhelm brachte die normannische Sprache und Kultur nach England. Französisch wurde die Sprache des Hofes und der Mächtigen. Die einfachen Leute sprachen weiter Englisch. Aus dieser Mischung entstand über die Jahrhunderte das moderne Englisch, das viele französische Wörter enthält. Wilhelm baute auch viele Burgen, um das Land zu kontrollieren, darunter den berühmten Tower of London.

Während diese Ereignisse in England geschahen, eroberten andere Normannen die Insel Sizilien. Dort hatten lange Zeit Araber geherrscht. Robert Guiscard und sein Bruder Roger kämpften viele Jahre, um die Insel zu erobern. Auf Sizilien entstand später eine erstaunliche Kultur, in der Christen, Muslime und Juden zusammenlebten und voneinander lernten.

In China begann in diesem Jahrzehnt ein großes politisches Experiment. Im Jahr 1069 gab der Beamte Wang Anshi der Regierung neue Gesetze, die man die „Neuen Politiken" nannte. Wang Anshi wollte den Staat stärker machen und den armen Bauern helfen. Der Staat gab den Bauern zum Beispiel Kredite, damit sie nicht zu den reichen Geldverleihern gehen mussten. Diese Reformen waren sehr umstritten. Viele konservative Beamte waren dagegen, und es entstand ein langer, bitterer Streit am Hof.

In der islamischen Welt waren die Seldschuken weiter auf dem Vormarsch. Ihr Reich wurde immer größer und reichte von Zentralasien bis fast an die Grenzen des Byzantinischen Reiches. Bald sollte es zu einem großen Zusammenstoß zwischen den Seldschuken und den Byzantinern kommen.

In Amerika erreichte Cahokia ungefähr in dieser Zeit seine größte Bevölkerung. Die Stadt war ein wichtiges Zentrum für Handel und Religion. Die Menschen handelten mit Muscheln von der Küste, mit Kupfer aus dem Norden und mit anderen wertvollen Dingen über weite Strecken.

Das Jahr 1066 zeigt, wie ein einziges Jahr die Geschichte verändern kann. Drei Männer wollten den englischen Thron, und am Ende gewann ein Herzog aus Frankreich. Die Folgen dieser Schlacht prägen England und die englische Sprache bis heute.`,
    translations: {
      "die Eroberung": "the conquest",
      "fand statt": "took place",
      "der Adlige": "the nobleman",
      "gekrönt": "crowned",
      "erhoben Anspruch": "laid claim",
      "der Herzog": "the duke",
      "landete": "landed",
      "marschierte": "marched",
      "besiegte": "defeated",
      "fiel": "fell (in battle)",
      "symbolische": "symbolic",
      "kaum": "hardly / barely",
      "feiern": "to celebrate",
      "müden": "tired",
      "trafen aufeinander": "met / clashed",
      "getötet": "killed",
      "der Eroberer": "the Conqueror",
      "die Folgen": "the consequences",
      "enthält": "contains",
      "die Burgen": "the castles",
      "zusammenlebten": "lived together",
      "voneinander": "from one another",
      "das Experiment": "the experiment",
      "die Neuen Politiken": "the New Policies",
      "Kredite": "loans / credit",
      "Geldverleihern": "moneylenders",
      "umstritten": "controversial",
      "konservative": "conservative",
      "dagegen": "against it",
      "bitterer": "bitter",
      "auf dem Vormarsch": "on the advance",
      "der Zusammenstoß": "the clash / collision",
      "Muscheln": "shells",
      "Kupfer": "copper",
      "über weite Strecken": "over long distances",
      "ein einziges Jahr": "a single year",
      "prägen": "shape / mark",
    }
  },
  {
    id: 8,
    unlockDay: 8,
    period: "1070–1080 n. Chr.",
    title: "Manzikert, Canossa und der Streit um die Macht",
    text: `Das Jahrzehnt der 1070er Jahre war voll von dramatischen Konflikten. In Kleinasien, in Italien und in Deutschland kämpften Herrscher um Macht, Land und um die Frage, wer eigentlich das Sagen hatte.

Das vielleicht folgenreichste Ereignis war die Schlacht von Manzikert im Jahr 1071. Dort trafen die Armee des Byzantinischen Reiches und die Armee der Seldschuken aufeinander. Die Byzantiner erlitten eine schwere Niederlage, und der byzantinische Kaiser wurde sogar gefangen genommen. Nach dieser Schlacht konnten die Seldschuken und andere türkische Gruppen tief in Kleinasien eindringen. Dieses Gebiet, das heute die Türkei ist, war jahrhundertelang christlich und griechisch gewesen. Jetzt begann es langsam, türkisch und muslimisch zu werden. Die Schlacht von Manzikert veränderte die Landkarte für immer.

Im selben Jahr, 1071, eroberten die Normannen die Stadt Bari in Süditalien. Das war die letzte Stadt, die den Byzantinern in Italien gehörte. Damit endete die byzantinische Herrschaft in Italien nach fünfhundert Jahren. Robert Guiscard und die Normannen kontrollierten nun fast den ganzen Süden Italiens.

In Deutschland und Italien entstand ein großer Streit zwischen dem Kaiser und dem Papst. Dieser Konflikt heißt der Investiturstreit. Die zentrale Frage war: Wer hat das Recht, Bischöfe zu ernennen – der Kaiser oder der Papst? Beide wollten diese Macht, denn die Bischöfe waren reich und mächtig. Der junge Kaiser Heinrich IV. und der energische Papst Gregor VII. gerieten heftig aneinander.

Im Jahr 1076 tat der Papst etwas Ungeheuerliches: Er exkommunizierte den Kaiser. Das bedeutete, dass Heinrich aus der Kirche ausgeschlossen war und seine Untertanen ihm nicht mehr gehorchen mussten. Plötzlich war Heinrichs Macht in großer Gefahr. Viele deutsche Fürsten wandten sich gegen ihn.

Heinrich musste handeln. Im Winter 1077 reiste er über die kalten Alpen nach Italien, zur Burg Canossa, wo sich der Papst aufhielt. Dort, so erzählt man, stand Heinrich drei Tage lang barfuß im Schnee vor dem Tor und bat um Vergebung. Schließlich vergab ihm der Papst. Diese Szene – ein mächtiger Kaiser, der demütig vor dem Papst im Schnee steht – wurde zu einem berühmten Bild für die Macht der Kirche. Noch heute sagt man auf Deutsch „nach Canossa gehen", wenn jemand sich demütigen muss.

In der islamischen Welt erreichte das Seldschukenreich seinen Höhepunkt. Der kluge Wesir Nizam al-Mulk regierte das Reich für den Sultan. Er gründete viele Schulen, die Madrasas, in denen junge Männer Religion und Wissenschaft lernten. Diese Schulen wurden zu wichtigen Zentren der Bildung in der islamischen Welt.

In Westafrika eroberten die Almoraviden ungefähr in dieser Zeit die Hauptstadt des alten Königreichs Ghana. Sie gründeten auch ihre eigene Hauptstadt Marrakesch im heutigen Marokko. Ihr Reich reichte nun von Westafrika bis fast nach Spanien.

In China ging der Streit um die Reformen von Wang Anshi weiter. Die einen lobten ihn, die anderen hassten ihn. Dieser Streit zwischen Reformern und Konservativen sollte die Politik der Song-Dynastie noch lange bestimmen.

Und in Amerika lebten die Menschen weiter in ihren eigenen Welten, ohne etwas von Manzikert, Canossa oder Marrakesch zu wissen. Die großen Dramen der einen Welt blieben der anderen völlig unbekannt.`,
    translations: {
      "folgenreichste": "most consequential",
      "erlitten": "suffered",
      "eine Niederlage": "a defeat",
      "gefangen genommen": "taken prisoner",
      "eindringen": "to penetrate / push in",
      "die Landkarte": "the map",
      "die letzte Stadt": "the last city",
      "die Herrschaft": "the rule / dominion",
      "der Investiturstreit": "the Investiture Controversy",
      "das Recht": "the right",
      "ernennen": "to appoint",
      "energische": "energetic / forceful",
      "gerieten aneinander": "clashed",
      "heftig": "fiercely",
      "Ungeheuerliches": "something outrageous",
      "exkommunizierte": "excommunicated",
      "ausgeschlossen": "excluded / shut out",
      "die Untertanen": "the subjects",
      "wandten sich gegen": "turned against",
      "handeln": "to act",
      "die Alpen": "the Alps",
      "sich aufhielt": "was staying",
      "barfuß": "barefoot",
      "bat um Vergebung": "begged for forgiveness",
      "vergab": "forgave",
      "demütig": "humble / humbly",
      "sich demütigen": "to humble oneself",
      "der Wesir": "the vizier",
      "die Madrasas": "the madrasas (Islamic schools)",
      "die Bildung": "education",
      "lobten": "praised",
      "hassten": "hated",
      "die Reformer": "the reformers",
      "bestimmen": "to determine / shape",
      "unbekannt": "unknown",
    }
  },
  {
    id: 9,
    unlockDay: 9,
    period: "1080–1090 n. Chr.",
    title: "Eroberer, Rebellen und kluge Köpfe",
    text: `In den 1080er Jahren gab es überall auf der Welt mächtige Eroberer, mutige Rebellen und kluge Köpfe, die Erstaunliches schufen.

In England regierte Wilhelm der Eroberer mit harter Hand. Im Jahr 1086 ließ er eine große Volkszählung durchführen. Seine Beamten reisten durch das ganze Land und schrieben auf, wem jedes Dorf, jedes Feld und jedes Tier gehörte. Das Ergebnis war ein dickes Buch, das man das „Domesday Book" nannte. Es ist eines der wichtigsten Dokumente der englischen Geschichte und zeigt, wie genau die Normannen das Land kontrollierten. Im Jahr 1087 starb Wilhelm, und seine Söhne stritten um das Erbe.

In Spanien tobte der lange Kampf zwischen Christen und Muslimen, den man die Reconquista nennt. Die christlichen Königreiche im Norden versuchten, die muslimischen Gebiete im Süden zurückzuerobern. Eine berühmte Figur dieser Zeit war ein Ritter namens Rodrigo Díaz, besser bekannt als „El Cid". Er war ein außergewöhnlicher Krieger und kämpfte mal für christliche, mal für muslimische Herren. Die muslimischen Taifa-Königreiche waren schwach und riefen die Almoraviden aus Afrika um Hilfe. Im Jahr 1086 kamen die Almoraviden nach Spanien und besiegten die Christen in einer großen Schlacht. So wurde der Kampf um Spanien noch härter.

Im Byzantinischen Reich kam im Jahr 1081 ein fähiger neuer Kaiser an die Macht: Alexios I. Komnenos. Er erbte ein Reich in großer Not, denn die Seldschuken bedrohten es von Osten und die Normannen von Westen. Robert Guiscard griff sogar das Byzantinische Reich von Italien aus an. Alexios war ein kluger Diplomat und Feldherr. Langsam stabilisierte er das Reich wieder.

In der islamischen Welt entstand in dieser Zeit eine geheimnisvolle und gefürchtete Gruppe. Ein Mann namens Hasan-i Sabbah gründete eine religiöse Bewegung und nahm die Bergfestung Alamut in Persien ein. Seine Anhänger wurden berühmt – und berüchtigt – für ihre politischen Morde. Später nannte man sie die „Assassinen". Dieses Wort lebt heute in vielen Sprachen weiter und bedeutet „Mörder".

In China schuf der geniale Gelehrte Su Song ein erstaunliches Wunderwerk der Technik. Um das Jahr 1088 baute er einen riesigen astronomischen Turm mit einer Uhr, die vom Wasser angetrieben wurde. Diese Uhr zeigte die Zeit und die Bewegung der Sterne. Sie hatte sogar eine Art automatischer Figuren, die zu jeder Stunde erschienen. Es war eine der fortschrittlichsten Maschinen der damaligen Welt, Jahrhunderte vor ähnlichen Uhren in Europa.

In Amerika baute das Volk der Hohokam im heutigen Arizona ein erstaunliches System von Kanälen. Mit diesen Kanälen leiteten sie das Wasser der Flüsse auf ihre Felder und konnten so in der trockenen Wüste Landwirtschaft betreiben. Manche dieser Kanäle waren viele Kilometer lang. Es war eine bemerkenswerte technische Leistung.

So zeigt dieses Jahrzehnt die ganze Vielfalt der menschlichen Geschichte. Während in England ein Eroberer sein Reich vermaß, baute ein Gelehrter in China eine Wunderuhr, und Bauern in Amerika gruben Kanäle durch die Wüste. Überall nutzten die Menschen ihre Klugheit, ihren Mut und ihre Arbeit, um in ihrer Welt zu bestehen.`,
    translations: {
      "die Eroberer": "the conquerors",
      "die Rebellen": "the rebels",
      "kluge Köpfe": "clever minds",
      "Erstaunliches": "amazing things",
      "mit harter Hand": "with a firm hand",
      "die Volkszählung": "the census",
      "durchführen": "to carry out",
      "das Ergebnis": "the result",
      "das Erbe": "the inheritance",
      "tobte": "raged",
      "zurückzuerobern": "to reconquer",
      "der Ritter": "the knight",
      "außergewöhnlicher": "exceptional",
      "riefen um Hilfe": "called for help",
      "fähiger": "capable",
      "erbte": "inherited",
      "in großer Not": "in great distress",
      "bedrohten": "threatened",
      "der Feldherr": "the military commander",
      "stabilisierte": "stabilised",
      "geheimnisvolle": "mysterious",
      "gefürchtete": "feared",
      "die Bergfestung": "the mountain fortress",
      "nahm ein": "captured / took",
      "die Anhänger": "the followers",
      "berüchtigt": "notorious",
      "Morde": "murders",
      "die Assassinen": "the Assassins",
      "der Mörder": "the murderer",
      "das Wunderwerk": "the marvel",
      "astronomischen": "astronomical",
      "angetrieben": "driven / powered",
      "die Bewegung": "the movement",
      "fortschrittlichsten": "most advanced",
      "die Kanäle": "the canals",
      "leiteten": "channelled / directed",
      "betreiben": "to carry out / operate",
      "bemerkenswerte": "remarkable",
      "die Leistung": "the achievement",
      "die Vielfalt": "the diversity",
      "vermaß": "measured / surveyed",
      "bestehen": "to survive / hold one's own",
    }
  },
  {
    id: 10,
    unlockDay: 10,
    period: "1090–1100 n. Chr.",
    title: "Der erste Kreuzzug",
    text: `Das letzte Jahrzehnt des 11. Jahrhunderts brachte eines der folgenreichsten Ereignisse des Mittelalters: den ersten Kreuzzug. Tausende von Menschen aus Europa machten sich auf einen langen, gefährlichen Weg nach Jerusalem.

Wie kam es dazu? Der byzantinische Kaiser Alexios I. brauchte Hilfe gegen die Seldschuken, die immer tiefer in sein Reich eindrangen. Er schickte einen Hilferuf an den Papst im Westen. Papst Urban II. sah darin eine große Gelegenheit. Im November 1095 hielt er in der französischen Stadt Clermont eine berühmte Rede. Er rief die Christen Europas auf, nach Osten zu ziehen und das Heilige Land – besonders die Stadt Jerusalem – von den Muslimen zu befreien. Er versprach, dass alle, die mitkämpften, von ihren Sünden befreit würden.

Die Reaktion war überwältigend. „Gott will es!", riefen die Menschen. Tausende nahmen das Kreuz – daher der Name „Kreuzzug". Ritter, Bauern, Priester und sogar Frauen und Kinder machten sich auf den Weg. Es gab verschiedene Gruppen. Eine erste, schlecht organisierte Gruppe von einfachen Leuten, den sogenannten „Volkskreuzzug", wurde schon in Kleinasien fast vollständig vernichtet.

Aber die Hauptarmee der Ritter war besser organisiert. Der Weg war trotzdem furchtbar schwer. Die Kreuzfahrer litten unter Hunger, Durst und Krankheiten. Sie kämpften gegen die türkischen Heere und gegeneinander. Viele starben unterwegs. Trotzdem kamen sie immer näher an ihr Ziel.

Im Jahr 1098 eroberten die Kreuzfahrer nach einer langen Belagerung die wichtige Stadt Antiochia. Im Jahr 1099 erreichten sie endlich Jerusalem. Sie belagerten die Stadt und stürmten sie im Juli 1099. Was dann geschah, war schrecklich: Die Kreuzfahrer töteten viele Bewohner der Stadt – Muslime und Juden. Es war ein blutiges Ende einer langen Reise.

Die Kreuzfahrer gründeten in den eroberten Gebieten mehrere christliche Staaten, die man die „Kreuzfahrerstaaten" nennt. Der wichtigste war das Königreich Jerusalem. Diese Staaten lagen mitten in einer feindlichen Umgebung und mussten ständig um ihr Überleben kämpfen.

Was bedeutete der Kreuzzug für die Menschen? Für die Christen in Europa war es ein großes religiöses Abenteuer. Für die Muslime im Nahen Osten war es ein brutaler Angriff von fremden Eindringlingen. Für die byzantinischen Christen war das Ergebnis gemischt: Sie bekamen Hilfe, aber die wilden Kreuzfahrer aus dem Westen machten ihnen auch Angst.

In anderen Teilen der Welt ging das Leben weiter. In China herrschte weiter die Song-Dynastie. In Indien blühten verschiedene Königreiche. In Afrika kontrollierten die Almoraviden den Goldhandel. Und in Amerika wussten die Menschen nichts von Jerusalem, von Kreuzen oder von heiligen Kriegen.

Der erste Kreuzzug war ein Wendepunkt. Er brachte die christliche und die islamische Welt in einen direkten, oft gewaltsamen Kontakt. Die Folgen dieses Kontakts – sowohl die Kriege als auch der Austausch von Waren und Ideen – sollten die Geschichte für Jahrhunderte prägen.`,
    translations: {
      "folgenreichsten": "most consequential",
      "der Kreuzzug": "the Crusade",
      "machten sich auf den Weg": "set out / set off",
      "wie kam es dazu": "how did it come about",
      "eindrangen": "penetrated / pushed in",
      "der Hilferuf": "the call for help",
      "die Gelegenheit": "the opportunity",
      "hielt eine Rede": "gave a speech",
      "rief auf": "called upon",
      "das Heilige Land": "the Holy Land",
      "befreien": "to liberate",
      "versprach": "promised",
      "mitkämpften": "fought along",
      "die Sünden": "the sins",
      "überwältigend": "overwhelming",
      "nahmen das Kreuz": "took the cross",
      "der Volkskreuzzug": "the People's Crusade",
      "vernichtet": "annihilated / destroyed",
      "furchtbar": "terribly",
      "litten": "suffered",
      "die Heere": "the armies",
      "unterwegs": "on the way",
      "das Ziel": "the goal / destination",
      "die Belagerung": "the siege",
      "stürmten": "stormed",
      "schrecklich": "terrible",
      "blutiges": "bloody",
      "die Kreuzfahrerstaaten": "the Crusader states",
      "feindlichen Umgebung": "hostile environment",
      "das Überleben": "survival",
      "das Abenteuer": "the adventure",
      "Eindringlingen": "intruders / invaders",
      "gemischt": "mixed",
      "der Wendepunkt": "the turning point",
      "gewaltsamen": "violent",
      "der Austausch": "the exchange",
    }
  },
  {
    id: 11,
    unlockDay: 11,
    period: "1100–1110 n. Chr.",
    title: "Neue Reiche, Künstler und Krieger",
    text: `Mit dem Beginn des 12. Jahrhunderts trat die Welt in eine neue Zeit ein. Die Kreuzfahrer richteten sich im Heiligen Land ein, in Europa wuchsen die Städte, und in Asien stiegen neue Künstler und Krieger auf.

Im Heiligen Land mussten die Kreuzfahrer ihre neuen Staaten organisieren. Im Jahr 1100 wurde Balduin I. der erste richtige König von Jerusalem. Die Kreuzfahrerstaaten waren klein und von Feinden umgeben. Sie brauchten ständig neue Ritter und Geld aus Europa. Mit Hilfe der italienischen Städte Venedig, Genua und Pisa, die starke Flotten hatten, eroberten die Kreuzfahrer nach und nach die Hafenstädte an der Küste. Diese Häfen waren wichtig für den Handel und für den Nachschub aus Europa.

In England bestieg im Jahr 1100 ein neuer König den Thron: Heinrich I., ein Sohn Wilhelms des Eroberers. Er war ein fähiger Herrscher, der die Gesetze stärkte und für Ordnung sorgte. In ganz Europa wuchsen in dieser Zeit die Städte. Mehr Menschen lebten vom Handel und vom Handwerk. Auf großen Märkten und Messen trafen sich Kaufleute aus vielen Ländern.

In China kam im Jahr 1100 ein ungewöhnlicher Kaiser an die Macht: Huizong. Er war kein starker Politiker, aber ein außergewöhnlicher Künstler. Er malte wunderschöne Bilder von Vögeln und Blumen und förderte die Kunst in seinem Reich. Unter ihm erreichte die chinesische Malerei einen Höhepunkt. Leider vernachlässigte Huizong die Politik, und das sollte für China später schlimme Folgen haben.

In Japan veränderte sich die Gesellschaft langsam. Die alte Macht des kaiserlichen Hofes schwand. Stattdessen stieg eine neue Klasse auf: die Krieger, die man später Samurai nannte. Außerdem gab es eine besondere Form der Herrschaft: Ein Kaiser dankte ab, zog sich in ein Kloster zurück und regierte trotzdem weiter im Hintergrund. Man nennt das die „Klosterherrschaft". Der mächtige Ex-Kaiser Shirakawa regierte auf diese Weise viele Jahre lang.

In Afrika stand das Reich der Almoraviden auf seinem Höhepunkt. Es reichte von Spanien im Norden bis tief nach Westafrika im Süden. Die Almoraviden kontrollierten den Handel mit Gold und Salz durch die Sahara. Ihre Hauptstadt Marrakesch wurde eine reiche und wichtige Stadt.

In Amerika erreichte die große Stadt Cahokia ungefähr in dieser Zeit ihre volle Größe. Der größte Erdhügel, den man heute „Monks Mound" nennt, war fertig. Er war das größte von Menschen gebaute Bauwerk in Nordamerika und blieb es für viele Jahrhunderte. Tausende von Menschen lebten in und um Cahokia. Doch schon bald sollte die Stadt aus Gründen, die wir bis heute nicht ganz verstehen, langsam zu schrumpfen beginnen.

So zeigt dieses Jahrzehnt eine Welt im Wandel. Neue Könige, neue Künstler und neue Krieger traten auf die Bühne der Geschichte. In jeder Region der Welt entwickelten sich die Gesellschaften weiter, jede auf ihre eigene Weise.`,
    translations: {
      "trat ein": "entered",
      "richteten sich ein": "settled in / established themselves",
      "stiegen auf": "rose",
      "umgeben": "surrounded",
      "die Flotten": "the fleets",
      "nach und nach": "gradually",
      "die Hafenstädte": "the port cities",
      "der Nachschub": "the supplies / reinforcements",
      "bestieg den Thron": "ascended the throne",
      "fähiger": "capable",
      "sorgte für Ordnung": "ensured order",
      "das Handwerk": "the craft / trade",
      "Messen": "trade fairs",
      "ungewöhnlicher": "unusual",
      "malte": "painted",
      "förderte": "promoted / fostered",
      "die Malerei": "painting (art)",
      "vernachlässigte": "neglected",
      "schwand": "faded / dwindled",
      "stattdessen": "instead",
      "die Klasse": "the class",
      "dankte ab": "abdicated",
      "zog sich zurück": "withdrew",
      "im Hintergrund": "in the background",
      "die Klosterherrschaft": "cloistered rule",
      "auf diese Weise": "in this way",
      "das Bauwerk": "the structure / building",
      "schrumpfen": "to shrink",
      "im Wandel": "in transition / changing",
      "auf die Bühne": "onto the stage",
      "auf ihre eigene Weise": "in its own way",
    }
  },
  {
    id: 12,
    unlockDay: 12,
    period: "1110–1120 n. Chr.",
    title: "Ritterorden, Gelehrte und ferne Bündnisse",
    text: `Das zweite Jahrzehnt des 12. Jahrhunderts war eine Zeit neuer Ideen und neuer Organisationen. In Europa entstanden Schulen und Ritterorden, im Nahen Osten leisteten die Muslime ersten Widerstand gegen die Kreuzfahrer, und in Asien schmiedeten Reiche gefährliche Bündnisse.

Im Heiligen Land brauchten die Kreuzfahrerstaaten dauernd Schutz. Die Pilger, die aus Europa nach Jerusalem reisten, wurden oft auf den Straßen überfallen und ausgeraubt. Um das Jahr 1119 gründeten einige Ritter eine besondere Gemeinschaft, um die Pilger zu beschützen: den Orden der Tempelritter. Diese Männer waren gleichzeitig Mönche und Krieger. Sie lebten nach strengen Regeln, kämpften aber auch im Krieg. Der Orden der Tempelritter sollte später sehr mächtig und sehr reich werden.

Die Muslime im Nahen Osten begannen langsam, sich gegen die Kreuzfahrer zu organisieren. Im Jahr 1119 besiegte ein muslimischer Herrscher namens Ilghazi ein großes Kreuzfahrerheer in einer Schlacht, die man auf Latein „das Feld des Blutes" nannte. Es war eine schwere Niederlage für die Christen und ein erstes Zeichen, dass die Muslime zurückschlagen konnten.

In Europa erlebte das Lernen einen neuen Aufschwung. In Städten wie Bologna und Paris kamen Studenten und Lehrer zusammen, um über Recht, Religion und Philosophie zu diskutieren. Diese Versammlungen waren die Anfänge der ersten Universitäten. Ein berühmter und umstrittener Lehrer in Paris war Peter Abaelard. Er war ein brillanter Denker, der die Logik liebte und seine Schüler lehrte, Fragen zu stellen und nicht alles einfach zu glauben. Seine traurige Liebesgeschichte mit der klugen Frau Heloise wurde später in ganz Europa berühmt.

In dieser Zeit bauten die Menschen in Europa auch große Kirchen aus Stein im sogenannten romanischen Stil. Diese Kirchen hatten dicke Mauern, runde Bögen und kleine Fenster. Sie waren ein Zeichen für den wachsenden Reichtum und den starken Glauben der Zeit.

Im Byzantinischen Reich kam im Jahr 1118 ein neuer Kaiser an die Macht: Johannes II. Komnenos. Er gilt als einer der besten byzantinischen Kaiser. Er war tapfer, klug und gerecht und arbeitete hart daran, das Reich wieder stark zu machen.

In Ostasien geschah etwas, das schlimme Folgen haben sollte. Die chinesische Song-Dynastie wollte das alte Reich der Liao im Norden besiegen. Dafür schloss China ein Bündnis mit einem neuen, kriegerischen Volk: den Jurchen, die das Reich der Jin gründeten. Gemeinsam wollten sie die Liao zerstören. Aber dieses Bündnis war gefährlich. Die Jin wurden bald viel stärker, als die Chinesen erwartet hatten. Schon im nächsten Jahrzehnt sollten sich die Jin gegen ihre chinesischen Verbündeten wenden – mit furchtbaren Folgen für die Song-Dynastie.

In Afrika und Amerika gingen die Entwicklungen weiter ihren eigenen Weg. In Südostafrika begannen Völker, mit Gold und Elfenbein zu handeln; aus diesen frühen Gemeinschaften sollte später die berühmte Kultur von Groß-Simbabwe entstehen. In Nordamerika begann die große Stadt Cahokia langsam, kleiner zu werden.

So war dieses Jahrzehnt eine Zeit der Saat. Ritterorden, Universitäten und Bündnisse, die in diesen Jahren entstanden, sollten die Geschichte der folgenden Jahrhunderte tief prägen.`,
    translations: {
      "die Ritterorden": "the knightly orders",
      "ferne Bündnisse": "distant alliances",
      "leisteten Widerstand": "put up resistance",
      "schmiedeten": "forged",
      "der Schutz": "protection",
      "die Pilger": "the pilgrims",
      "überfallen": "ambushed / attacked",
      "ausgeraubt": "robbed",
      "die Gemeinschaft": "the community / brotherhood",
      "beschützen": "to protect",
      "der Orden": "the order (religious/military)",
      "die Tempelritter": "the Knights Templar",
      "strengen Regeln": "strict rules",
      "besiegte": "defeated",
      "das Feld des Blutes": "the Field of Blood",
      "zurückschlagen": "to strike back",
      "der Aufschwung": "the upswing / revival",
      "die Versammlungen": "the gatherings / assemblies",
      "umstrittener": "controversial",
      "der Denker": "the thinker",
      "die Logik": "logic",
      "Fragen zu stellen": "to ask questions",
      "die Liebesgeschichte": "the love story",
      "romanischen Stil": "Romanesque style",
      "die Bögen": "the arches",
      "der Reichtum": "the wealth",
      "gilt als": "is regarded as",
      "tapfer": "brave",
      "gerecht": "just / fair",
      "schloss ein Bündnis": "formed an alliance",
      "kriegerischen": "warlike",
      "die Verbündeten": "the allies",
      "sich wenden gegen": "to turn against",
      "das Elfenbein": "ivory",
      "Groß-Simbabwe": "Great Zimbabwe",
      "die Saat": "the sowing / seed",
      "die Entwicklungen": "the developments",
    }
  },
  {
    id: 13,
    unlockDay: 13,
    period: "1120–1130 n. Chr.",
    title: "Ein Vertrag, ein Schiffbruch und der Fall einer Hauptstadt",
    text: `Das Jahrzehnt der 1120er Jahre brachte das Ende eines langen Streits in Europa, eine Katastrophe für die englische Königsfamilie und den schweren Fall einer der größten Städte der Welt in China.

In Europa endete endlich der lange Investiturstreit zwischen Kaiser und Papst. Im Jahr 1122 schlossen die beiden Seiten den Vertrag von Worms. Es war ein Kompromiss: Der Papst durfte die Bischöfe in ihr geistliches Amt einsetzen, der Kaiser hatte aber weiter Einfluss auf ihre weltliche Macht. Nach Jahrzehnten des Streits brachte dieser Vertrag endlich einen gewissen Frieden zwischen Kirche und Staat.

In England geschah im Jahr 1120 eine Katastrophe. Das „Weiße Schiff" mit dem einzigen Sohn des Königs Heinrich I. sank im Meer. Der junge Thronerbe und viele Adlige ertranken. Heinrich hatte nun keinen männlichen Erben mehr. Er bestimmte seine Tochter Mathilde zur Nachfolgerin. Aber viele Adlige wollten keine Frau als Herrscherin. Dieser Schiffbruch sollte später zu einem langen Bürgerkrieg führen.

Das vielleicht dramatischste Ereignis geschah in China. Die Song-Dynastie hatte ein Bündnis mit dem kriegerischen Volk der Jurchen geschlossen, um das alte Reich der Liao zu besiegen. Doch nach dem Sieg wandten sich die Jurchen gegen ihre chinesischen Verbündeten. Im Jahr 1127 eroberten sie die reiche Song-Hauptstadt Kaifeng. Sie nahmen den Kaiser und seinen Sohn gefangen und brachten sie als Gefangene in den Norden. Das war eine schreckliche Demütigung für China. Dieses Ereignis nennt man die „Jingkang-Katastrophe".

Doch die Song-Dynastie ging nicht ganz unter. Ein Prinz floh nach Süden und gründete dort ein neues Reich, die „Südliche Song-Dynastie", mit der Hauptstadt Hangzhou. Der reiche Norden Chinas war nun in der Hand der Jurchen, die das Reich der Jin gründeten. China war in zwei Teile geteilt: den Norden unter den Jin und den Süden unter den Song.

In der islamischen Welt entstand ein neuer mächtiger Anführer. Ein Mann namens Zengi wurde Herrscher der Stadt Mossul und begann, die muslimischen Gebiete in Syrien zu vereinen. Er war der erste muslimische Führer, der ernsthaft gegen die Kreuzfahrerstaaten kämpfte. Bisher hatten die Muslime uneinig und schwach gewirkt. Mit Zengi begann sich das zu ändern.

In Nordafrika entstand ebenfalls eine neue religiöse Bewegung. Ein Prediger namens Ibn Tumart rief zu einem reineren Glauben auf. Seine Anhänger nannten sich die Almohaden. Sie sollten bald die alten Almoraviden besiegen und ein großes Reich in Nordafrika und Spanien aufbauen.

In Europa wuchsen die religiösen Orden. Besonders die Zisterzienser, ein strenger Mönchsorden, breiteten sich schnell aus. Ihr berühmtester Vertreter war Bernhard von Clairvaux, ein kluger und einflussreicher Mönch. Die Zisterzienser rodeten Wälder, bauten Klöster und verbesserten die Landwirtschaft in vielen Teilen Europas.

In Amerika begann die große Stadt Cahokia langsam zu schrumpfen. Die Menschen bauten eine hohe Holzmauer um das Zentrum der Stadt. Das deutet darauf hin, dass es Konflikte oder Gefahren gab. Die Gründe für den Niedergang von Cahokia sind bis heute nicht ganz klar.

So zeigt dieses Jahrzehnt, wie schnell sich das Schicksal von Reichen und Familien ändern kann. Ein Vertrag brachte Frieden, ein Schiffbruch brachte eine Krise, und der Fall einer Hauptstadt veränderte ganz China.`,
    translations: {
      "der Schiffbruch": "the shipwreck",
      "der Fall": "the fall",
      "die Königsfamilie": "the royal family",
      "schlossen": "concluded / made",
      "der Vertrag": "the treaty",
      "der Kompromiss": "the compromise",
      "geistliches Amt": "spiritual office",
      "einsetzen": "to install / appoint",
      "weltliche": "secular / worldly",
      "ein gewisser": "a certain",
      "das Weiße Schiff": "the White Ship",
      "sank": "sank",
      "der Thronerbe": "the heir to the throne",
      "ertranken": "drowned",
      "der Erbe": "the heir",
      "bestimmte": "designated / appointed",
      "die Nachfolgerin": "the (female) successor",
      "der Bürgerkrieg": "the civil war",
      "das Bündnis": "the alliance",
      "wandten sich gegen": "turned against",
      "die Verbündeten": "the allies",
      "gefangen": "captured",
      "die Demütigung": "the humiliation",
      "ging unter": "went down / perished",
      "floh": "fled",
      "die Südliche Song-Dynastie": "the Southern Song dynasty",
      "geteilt": "divided",
      "vereinen": "to unite",
      "ernsthaft": "seriously",
      "uneinig": "disunited / divided",
      "der Prediger": "the preacher",
      "rief auf": "called for / summoned",
      "die Almohaden": "the Almohads",
      "die Orden": "the (religious) orders",
      "die Zisterzienser": "the Cistercians",
      "der Mönchsorden": "the monastic order",
      "breiteten sich aus": "spread out",
      "einflussreicher": "influential",
      "rodeten": "cleared (forest)",
      "die Holzmauer": "the wooden wall",
      "deutet darauf hin": "indicates / suggests",
      "der Niedergang": "the decline",
      "das Schicksal": "the fate",
    }
  },
  {
    id: 14,
    unlockDay: 14,
    period: "1130–1140 n. Chr.",
    title: "Ein neues Königreich und ein Bürgerkrieg",
    text: `In den 1130er Jahren entstand im Mittelmeer ein glänzendes neues Königreich, während England in einen langen Bürgerkrieg fiel.

Auf der Insel Sizilien gründeten die Normannen ein neues Reich. Im Jahr 1130 wurde Roger II. zum König von Sizilien gekrönt. Sein Königreich war eines der reichsten und modernsten in ganz Europa. Das Besondere daran war, dass dort viele Kulturen zusammenlebten. Christen, Muslime und Juden arbeiteten am Hof des Königs zusammen. Roger ließ Bücher aus dem Arabischen, dem Griechischen und dem Lateinischen übersetzen. An seinem Hof trafen sich Gelehrte aus vielen Ländern. Sizilien wurde zu einer Brücke zwischen der islamischen und der christlichen Welt.

In England begann dagegen eine schwere Zeit. Im Jahr 1135 starb König Heinrich I. Seine Tochter Mathilde sollte eigentlich Königin werden. Aber ihr Vetter Stephan ergriff schnell die Macht und ließ sich zum König krönen. Mathilde gab nicht auf, und so begann ein langer Bürgerkrieg um den Thron. Die Engländer nennen diese Zeit „die Anarchie". Viele Jahre lang herrschten Chaos und Gewalt im Land. Mächtige Adlige bauten ihre eigenen Burgen und kämpften gegeneinander. Für die einfachen Bauern war es eine furchtbare Zeit, denn die Soldaten plünderten die Dörfer.

In der Religion gewann der Mönch Bernhard von Clairvaux immer mehr Einfluss. Er war einer der mächtigsten Männer der Kirche, obwohl er nur ein einfacher Mönch war. Seine Worte hatten großes Gewicht bei Päpsten und Königen.

In dieser Zeit begann auch eine Revolution in der Architektur. In Frankreich baute der Abt Suger eine neue Art von Kirche. Bisher waren die Kirchen dunkel und schwer, im romanischen Stil. Suger aber wollte Licht in die Kirche bringen. Er ließ hohe Fenster und dünne Säulen bauen, sodass das Licht hereinströmen konnte. Dieser neue Stil heißt die Gotik. In den folgenden Jahrhunderten entstanden überall in Europa wunderschöne gotische Kathedralen mit hohen Türmen und bunten Glasfenstern.

In China festigte sich die Südliche Song-Dynastie in ihrer neuen Hauptstadt Hangzhou. Ein berühmter General namens Yue Fei kämpfte tapfer gegen die Jin im Norden. Er wollte den verlorenen Norden zurückerobern. Yue Fei wurde zu einem Helden für das chinesische Volk. Doch am Hof gab es Politiker, die lieber Frieden mit den Jin schließen wollten.

In Nordafrika wurden die Almohaden immer stärker. Sie kämpften gegen die alten Almoraviden und eroberten Schritt für Schritt deren Gebiete. Bald sollten sie ein großes Reich beherrschen, das von Marokko bis nach Spanien reichte.

In Amerika ging der langsame Niedergang von Cahokia weiter. Immer mehr Menschen verließen die große Stadt. Vielleicht gab es Probleme mit dem Essen, mit dem Klima oder mit Konflikten. Die einst so große Stadt wurde langsam kleiner.

So war dieses Jahrzehnt eine Zeit der Gegensätze. Während Sizilien als reiches, friedliches Königreich blühte, versank England im Chaos eines Bürgerkriegs. Und in Frankreich begann mit der Gotik eine neue Art, die Schönheit Gottes in Stein und Licht auszudrücken.`,
    translations: {
      "glänzendes": "glittering / splendid",
      "gekrönt": "crowned",
      "das Besondere": "the special thing",
      "zusammenlebten": "lived together",
      "übersetzen": "to translate",
      "die Brücke": "the bridge",
      "der Vetter": "the cousin",
      "ergriff die Macht": "seized power",
      "ließ sich krönen": "had himself crowned",
      "gab nicht auf": "did not give up",
      "der Bürgerkrieg": "the civil war",
      "die Anarchie": "the Anarchy",
      "die Gewalt": "violence",
      "plünderten": "plundered / looted",
      "das Gewicht": "weight / influence",
      "die Architektur": "architecture",
      "der Abt": "the abbot",
      "romanischen Stil": "Romanesque style",
      "die Säulen": "the columns / pillars",
      "hereinströmen": "to stream in",
      "die Gotik": "the Gothic (style)",
      "die Kathedralen": "the cathedrals",
      "die Glasfenster": "stained-glass windows",
      "festigte sich": "consolidated / became established",
      "tapfer": "bravely",
      "zurückerobern": "to reconquer",
      "der Held": "the hero",
      "Frieden schließen": "to make peace",
      "die Gebiete": "the territories",
      "verließen": "left / abandoned",
      "einst": "once / formerly",
      "die Gegensätze": "the contrasts",
      "versank": "sank / descended",
      "die Schönheit": "the beauty",
      "auszudrücken": "to express",
    }
  },
  {
    id: 15,
    unlockDay: 15,
    period: "1140–1150 n. Chr.",
    title: "Der zweite Kreuzzug und das Licht der Gotik",
    text: `In den 1140er Jahren zog wieder ein großes christliches Heer in den Osten, ein neues Königreich entstand im Westen Europas, und in Frankreich erstrahlte zum ersten Mal das Licht einer gotischen Kathedrale.

Der Anlass für den zweiten Kreuzzug war eine schlechte Nachricht aus dem Osten. Im Jahr 1144 eroberte der muslimische Anführer Zengi die christliche Stadt Edessa. Es war der erste Kreuzfahrerstaat, der wieder verloren ging. In Europa löste diese Nachricht große Sorge aus. Der berühmte Mönch Bernhard von Clairvaux reiste durch das Land und predigte für einen neuen Kreuzzug. Viele Menschen waren begeistert.

Diesmal zogen sogar Könige selbst mit: Konrad III. aus Deutschland und Ludwig VII. aus Frankreich. Doch der zweite Kreuzzug wurde ein großer Misserfolg. Die Heere litten unterwegs schwer, und der Angriff auf die Stadt Damaskus im Jahr 1148 scheiterte völlig. Die Kreuzfahrer mussten unverrichteter Dinge wieder nach Hause ziehen. Die Niederlage war eine große Enttäuschung für die Christen in Europa.

Doch ein Teil des Kreuzzugs hatte Erfolg, allerdings weit weg vom Heiligen Land. Auf dem Weg nach Osten halfen einige Kreuzfahrer den Christen in Portugal. Im Jahr 1147 eroberten sie zusammen die Stadt Lissabon von den Muslimen. Kurz zuvor war Portugal ein eigenes Königreich geworden, mit Afonso Henriques als erstem König. So entstand am westlichen Rand Europas ein neues christliches Land.

In Frankreich vollendete der Abt Suger im Jahr 1144 den neuen Chor der Kirche von Saint-Denis. Es war das erste richtige Beispiel der gotischen Architektur. Die Menschen staunten über das viele Licht, das durch die großen Fenster strömte. Es schien, als ob der Himmel selbst in die Kirche käme. Dieser neue Stil verbreitete sich bald in ganz Europa.

In China schlossen die Südliche Song-Dynastie und das Reich der Jin im Jahr 1141 endlich Frieden. Im Vertrag von Shaoxing erkannte die Song-Dynastie die Herrschaft der Jin über den Norden an und zahlte ihnen Tribut. Der tapfere General Yue Fei, der weiterkämpfen wollte, wurde kurz darauf hingerichtet. Viele Chinesen waren empört über seinen Tod. Bis heute gilt Yue Fei als Held und Vorbild für Treue zum Vaterland.

In der islamischen Welt starb der mächtige Zengi im Jahr 1146. Sein Sohn Nur ad-Din übernahm die Führung. Er war ein frommer und kluger Herrscher, der den Kampf gegen die Kreuzfahrer fortsetzte und die muslimischen Gebiete in Syrien weiter vereinte.

In Spanien blühte in dieser Zeit eine wichtige geistige Bewegung. In der Stadt Toledo übersetzten Gelehrte aus vielen Ländern arabische und griechische Bücher ins Lateinische. So kam das alte Wissen der Antike und der islamischen Welt nach Europa. Diese Übersetzungen waren ein wichtiger Schritt für die Wissenschaft im mittelalterlichen Europa.

So zeigt dieses Jahrzehnt das ganze Spektrum der Geschichte: einen gescheiterten Kreuzzug, die Geburt eines neuen Königreichs, das erste Leuchten der Gotik und den Tod eines chinesischen Helden.`,
    translations: {
      "das Heer": "the army",
      "erstrahlte": "shone / radiated",
      "der Anlass": "the occasion / trigger",
      "die Nachricht": "the news",
      "verloren ging": "was lost",
      "löste Sorge aus": "caused concern",
      "predigte": "preached",
      "begeistert": "enthusiastic",
      "zogen mit": "joined / went along",
      "der Misserfolg": "the failure",
      "litten": "suffered",
      "scheiterte": "failed",
      "unverrichteter Dinge": "having achieved nothing",
      "die Enttäuschung": "the disappointment",
      "allerdings": "however",
      "am westlichen Rand": "on the western edge",
      "vollendete": "completed",
      "der Chor": "the choir (of a church)",
      "staunten": "marvelled",
      "strömte": "streamed",
      "es schien": "it seemed",
      "verbreitete sich": "spread",
      "erkannte an": "recognised / acknowledged",
      "der Tribut": "tribute",
      "hingerichtet": "executed",
      "empört": "outraged",
      "die Treue": "loyalty",
      "das Vaterland": "the homeland / fatherland",
      "übernahm": "took over",
      "die Führung": "the leadership",
      "fromm": "pious",
      "fortsetzte": "continued",
      "geistige Bewegung": "intellectual movement",
      "die Übersetzungen": "the translations",
      "das Spektrum": "the spectrum / range",
      "gescheiterten": "failed",
      "die Geburt": "the birth",
      "das Leuchten": "the glow / shining",
    }
  },
  {
    id: 16,
    unlockDay: 16,
    period: "1150–1160 n. Chr.",
    title: "Mächtige Herrscher und ein Tempel im Dschungel",
    text: `In den 1150er Jahren traten in Europa zwei der mächtigsten Herrscher des Mittelalters auf, während in Südostasien einer der größten Tempel der Welt entstand.

Im Heiligen Römischen Reich wurde im Jahr 1155 Friedrich I. zum Kaiser gekrönt. Wegen seines roten Bartes nannte man ihn „Barbarossa", was auf Italienisch „Rotbart" bedeutet. Friedrich Barbarossa war ein starker und ehrgeiziger Herrscher. Er wollte die kaiserliche Macht in Italien wiederherstellen. Doch die reichen Städte Norditaliens, wie Mailand, wollten ihre Freiheit behalten. So begann ein langer Kampf zwischen dem Kaiser und den italienischen Städten.

In England bestieg im Jahr 1154 Heinrich II. den Thron und beendete damit den langen Bürgerkrieg. Heinrich war ein energischer und kluger König. Durch seine Heirat mit Eleonore von Aquitanien, einer der mächtigsten Frauen ihrer Zeit, beherrschte er nicht nur England, sondern auch große Teile von Frankreich. Dieses riesige Reich nennt man das „Angevinische Reich". Heinrich reformierte die Gesetze Englands und legte den Grundstein für das englische Rechtssystem.

In der islamischen Welt arbeitete Nur ad-Din weiter daran, die Muslime gegen die Kreuzfahrer zu vereinen. Er war ein gerechter Herrscher, der Schulen und Krankenhäuser baute. Langsam wurden die muslimischen Gebiete stärker und einiger.

Das vielleicht erstaunlichste Bauwerk dieser Zeit entstand weit weg in Südostasien. Im Reich der Khmer, im heutigen Kambodscha, ließ der König Suryavarman II. einen gewaltigen Tempel bauen: Angkor Wat. Dieser Tempel war riesig und wunderschön, mit hohen Türmen und kunstvollen Steinbildern. Er war zuerst dem Hindu-Gott Vishnu geweiht. Angkor Wat ist bis heute eines der größten religiösen Bauwerke der Welt und ein Wahrzeichen Kambodschas.

In China blühte die Südliche Song-Dynastie. Ihre Hauptstadt Hangzhou war wahrscheinlich die größte und reichste Stadt der Welt. Über eine Million Menschen lebten dort. Es gab Restaurants, Theater, Märkte und Geschäfte aller Art. Reisende aus fernen Ländern staunten über den Reichtum und die Ordnung der chinesischen Städte.

In Japan begann die Macht der alten Adelsfamilien zu schwinden. Stattdessen wurden die Krieger, die Samurai, immer wichtiger. Im Jahr 1156 kam es zu einem Aufstand in der Hauptstadt, bei dem zwei Kriegerfamilien um die Macht kämpften. Es war ein Zeichen dafür, dass eine neue Zeit der Krieger begann.

In Amerika ging der Niedergang weiter. In Mexiko verfiel ungefähr in dieser Zeit die alte Toltekenstadt Tula. Und in Nordamerika baute man in Cahokia weiter an Mauern zum Schutz – ein Zeichen für unruhige Zeiten.

So zeigt dieses Jahrzehnt die Macht großer Herrscher und die Schönheit großer Bauwerke. Von Barbarossa in Europa über Nur ad-Din im Nahen Osten bis zu den Khmer-Königen in Asien – überall versuchten mächtige Männer, ihre Reiche zu vergrößern und große Spuren zu hinterlassen.`,
    translations: {
      "traten auf": "appeared / emerged",
      "der Bart": "the beard",
      "der Rotbart": "Redbeard",
      "ehrgeiziger": "ambitious",
      "wiederherstellen": "to restore",
      "behalten": "to keep / retain",
      "bestieg den Thron": "ascended the throne",
      "beendete": "ended",
      "energischer": "energetic",
      "die Heirat": "the marriage",
      "beherrschte": "ruled / controlled",
      "das Angevinische Reich": "the Angevin Empire",
      "reformierte": "reformed",
      "legte den Grundstein": "laid the foundation",
      "das Rechtssystem": "the legal system",
      "gerechter": "just / fair",
      "einiger": "more united",
      "erstaunlichste": "most astonishing",
      "das Bauwerk": "the structure / edifice",
      "die Khmer": "the Khmer",
      "gewaltigen": "enormous / mighty",
      "kunstvollen": "intricate / artful",
      "die Steinbilder": "stone carvings",
      "geweiht": "dedicated / consecrated",
      "das Wahrzeichen": "the landmark / emblem",
      "Geschäfte aller Art": "shops of every kind",
      "die Adelsfamilien": "the noble families",
      "schwinden": "to fade / dwindle",
      "der Aufstand": "the uprising / revolt",
      "verfiel": "decayed / fell into ruin",
      "zum Schutz": "for protection",
      "unruhige": "restless / troubled",
      "Spuren hinterlassen": "to leave traces / a mark",
    }
  },
  {
    id: 17,
    unlockDay: 17,
    period: "1160–1170 n. Chr.",
    title: "Ein Mord in der Kathedrale und ein neuer Stern in Ägypten",
    text: `Die 1160er Jahre brachten einen berühmten Mord in England, den Aufstieg eines jungen Mannes in Ägypten, der später die ganze Welt verändern sollte, und den langen Kampf eines Kaisers gegen freie Städte.

In England stritten sich der König und sein wichtigster Kirchenmann heftig. König Heinrich II. wollte mehr Macht über die Kirche haben. Sein früherer Freund Thomas Becket, der Erzbischof von Canterbury, widersetzte sich ihm jedoch und verteidigte die Rechte der Kirche. Der Streit wurde immer bitterer. Im Jahr 1170 sprach der König wütend über Becket. Vier Ritter verstanden seine Worte als Befehl und ritten nach Canterbury. Dort ermordeten sie den Erzbischof in seiner eigenen Kathedrale. Dieser schreckliche Mord erschütterte ganz Europa. Becket wurde bald als Heiliger verehrt, und seine Kathedrale wurde zu einem berühmten Pilgerort.

In der islamischen Welt begann der Aufstieg eines außergewöhnlichen Mannes. Sein Name war Saladin. Er kam mit seinem Onkel nach Ägypten, wo damals noch die schwachen Fatimiden herrschten. Saladin war klug, tapfer und fromm. Im Jahr 1169 wurde er Wesir, der eigentliche Herrscher Ägyptens. Bald sollte er das mächtigste Land der islamischen Welt regieren und zum größten Feind der Kreuzfahrer werden.

In Italien führte Kaiser Friedrich Barbarossa seinen Kampf gegen die freien Städte fort. Er wollte sie unterwerfen, aber die Städte wehrten sich. Sie schlossen sich zu einem Bündnis zusammen, dem Lombardenbund. Gemeinsam waren sie stärker als allein. Der Kampf zwischen dem Kaiser und den Städten dauerte viele Jahre.

In China blühte weiter die Südliche Song-Dynastie. Die Chinesen machten in dieser Zeit viele technische Fortschritte. Sie benutzten den Kompass für die Schifffahrt, druckten Bücher und stellten feines Porzellan her, das in der ganzen Welt begehrt war.

In Kambodscha stand das Reich der Khmer auf seinem Höhepunkt. Die riesige Stadt Angkor mit ihren Tempeln und Wasserkanälen war ein Zentrum von Macht und Religion. Hunderttausende von Menschen lebten in und um die Stadt.

In Europa entwickelte sich an den Höfen der Adligen eine neue Kultur: die höfische Liebe. Dichter und Sänger, die man Troubadoure nannte, sangen Lieder über die Liebe, die Ehre und die Tapferkeit der Ritter. Besonders der Hof von Eleonore von Aquitanien war berühmt für diese feine Kultur. Aus dieser Zeit stammen viele Ideen über Ritterlichkeit, die wir noch heute mit dem Mittelalter verbinden.

In Amerika lebten die Menschen weiter in ihren eigenen Welten. Die großen Veränderungen in Europa, Asien und Afrika blieben ihnen völlig unbekannt.

So zeigt dieses Jahrzehnt, wie einzelne Menschen die Geschichte prägen können. Ein ermordeter Erzbischof wurde zum Heiligen, und ein junger Mann in Ägypten begann einen Aufstieg, der bald die Welt der Kreuzzüge erschüttern sollte.`,
    translations: {
      "der Mord": "the murder",
      "der Aufstieg": "the rise",
      "ein neuer Stern": "a new star",
      "der Kirchenmann": "the churchman",
      "der Erzbischof": "the archbishop",
      "widersetzte sich": "opposed / resisted",
      "verteidigte": "defended",
      "die Rechte": "the rights",
      "wütend": "angrily",
      "der Befehl": "the order / command",
      "ritten": "rode",
      "ermordeten": "murdered",
      "erschütterte": "shook / shocked",
      "der Heilige": "the saint",
      "verehrt": "venerated / revered",
      "der Pilgerort": "the place of pilgrimage",
      "der Onkel": "the uncle",
      "die Fatimiden": "the Fatimids",
      "der Wesir": "the vizier",
      "der eigentliche": "the actual / real",
      "unterwerfen": "to subjugate",
      "wehrten sich": "defended themselves / resisted",
      "der Lombardenbund": "the Lombard League",
      "die Fortschritte": "the advances / progress",
      "der Kompass": "the compass",
      "die Schifffahrt": "navigation / shipping",
      "das Porzellan": "porcelain",
      "begehrt": "sought-after / coveted",
      "die Wasserkanäle": "water canals",
      "die höfische Liebe": "courtly love",
      "die Troubadoure": "the troubadours",
      "die Ehre": "honour",
      "die Tapferkeit": "bravery",
      "die Ritterlichkeit": "chivalry",
      "verbinden": "to associate / connect",
      "einzelne": "individual / single",
    }
  },
  {
    id: 18,
    unlockDay: 18,
    period: "1170–1180 n. Chr.",
    title: "Saladins Aufstieg und der Stolz der Städte",
    text: `In den 1170er Jahren vereinte ein großer Herrscher die islamische Welt, während in Italien die freien Städte einen stolzen Sieg über einen Kaiser errangen.

In der islamischen Welt erreichte Saladin den Höhepunkt seiner Macht. Im Jahr 1174 starb sein früherer Herr Nur ad-Din. Saladin nutzte die Gelegenheit und übernahm die Herrschaft über Ägypten und Syrien. Damit vereinte er die wichtigsten muslimischen Länder um die Kreuzfahrerstaaten herum unter einer einzigen Führung. Saladin war nicht nur ein guter Feldherr, sondern auch bekannt für seine Großzügigkeit und seinen Edelmut. Sogar seine christlichen Feinde respektierten ihn. Mit Saladin hatten die Kreuzfahrer nun einen gefährlichen und einigen Gegner.

In Italien kam der lange Kampf zwischen Kaiser Friedrich Barbarossa und den freien Städten zu einem Höhepunkt. Im Jahr 1176 trafen das Heer des Kaisers und das Heer des Lombardenbundes bei Legnano aufeinander. Zur Überraschung vieler gewannen die Städte. Die Bürger und Handwerker besiegten das Ritterheer des Kaisers. Diese Niederlage zwang Barbarossa, den Städten mehr Freiheit zu geben. Es war ein wichtiger Sieg für die Idee der freien Stadt und der Selbstverwaltung.

In England rebellierten sogar die Söhne des Königs Heinrich II. gegen ihren Vater. Unterstützt von ihrer Mutter Eleonore und von fremden Königen erhoben sie sich gegen ihn. Heinrich konnte den Aufstand niederschlagen, aber die Konflikte in seiner Familie blieben. Im Jahr 1173 wurde der ermordete Thomas Becket offiziell zum Heiligen erklärt, und der König musste sogar öffentlich Buße tun.

In Japan stieg die Familie der Taira zur höchsten Macht auf. Ihr Anführer, Taira no Kiyomori, kontrollierte den kaiserlichen Hof. Doch die rivalisierende Familie der Minamoto wartete nur auf ihre Gelegenheit. Die Spannungen zwischen den beiden Kriegerfamilien wuchsen und sollten bald zu einem großen Krieg führen.

In Kambodscha erlebte das Reich der Khmer einen schweren Schlag. Im Jahr 1177 griff das benachbarte Volk der Cham an und plünderte die große Stadt Angkor. Doch die Khmer erholten sich und sollten unter einem neuen König bald wieder mächtig werden.

In Europa wuchsen die Städte und der Handel immer weiter. Im Norden begannen Kaufleute aus verschiedenen Städten zusammenzuarbeiten, um ihren Handel zu schützen. Aus diesen Anfängen sollte später die mächtige Hanse entstehen. Auch neue Technik half den Menschen: In vielen Teilen Europas baute man jetzt Windmühlen, die mit der Kraft des Windes Getreide mahlten.

In Amerika ging der Niedergang von Cahokia weiter. Die einst große Stadt verlor immer mehr Einwohner. Andere Kulturen in Nord- und Südamerika lebten und entwickelten sich weiter, jede auf ihre eigene Weise.

So zeigt dieses Jahrzehnt den Aufstieg eines großen muslimischen Herrschers und den Stolz freier Bürger. Saladin baute eine Macht auf, die den Kreuzfahrern bald gefährlich werden sollte, und die Städte Italiens bewiesen, dass auch Bürger einen Kaiser besiegen konnten.`,
    translations: {
      "der Stolz": "the pride",
      "errangen": "won / achieved",
      "nutzte die Gelegenheit": "seized the opportunity",
      "übernahm": "took over",
      "die Herrschaft": "the rule",
      "die Führung": "the leadership",
      "der Feldherr": "the military commander",
      "die Großzügigkeit": "generosity",
      "der Edelmut": "nobility / magnanimity",
      "respektierten": "respected",
      "einigen": "united",
      "der Gegner": "the opponent / adversary",
      "trafen aufeinander": "clashed / met",
      "die Überraschung": "the surprise",
      "die Bürger": "the citizens / townspeople",
      "die Handwerker": "the craftsmen",
      "das Ritterheer": "the army of knights",
      "zwang": "forced",
      "die Selbstverwaltung": "self-government",
      "rebellierten": "rebelled",
      "unterstützt": "supported",
      "erhoben sich": "rose up",
      "niederschlagen": "to suppress / put down",
      "zum Heiligen erklärt": "declared a saint / canonised",
      "Buße tun": "to do penance",
      "rivalisierende": "rival",
      "die Spannungen": "the tensions",
      "der Schlag": "the blow",
      "benachbarte": "neighbouring",
      "die Cham": "the Cham (people)",
      "erholten sich": "recovered",
      "zusammenzuarbeiten": "to work together",
      "die Hanse": "the Hanseatic League",
      "die Windmühlen": "the windmills",
      "mahlten": "ground / milled",
      "bewiesen": "proved",
    }
  },
  {
    id: 19,
    unlockDay: 19,
    period: "1180–1190 n. Chr.",
    title: "Die Rückeroberung Jerusalems und ein Krieg in Japan",
    text: `Das letzte Jahrzehnt des 12. Jahrhunderts brachte eine gewaltige Wende im Heiligen Land und einen entscheidenden Krieg in Japan, der eine ganz neue Epoche einleitete.

Im Heiligen Land kam es zum großen Zusammenstoß zwischen Saladin und den Kreuzfahrern. Im Jahr 1187 trafen die beiden Heere bei einem Ort namens Hattin aufeinander. Saladin führte sein Heer klug und besiegte die Kreuzfahrer vollständig. Es war eine vernichtende Niederlage für die Christen. Kurz darauf eroberte Saladin Jerusalem zurück, die heilige Stadt, die die Kreuzfahrer fast neunzig Jahre lang gehalten hatten. Anders als die Kreuzfahrer im Jahr 1099 ließ Saladin kein Massaker zu. Er behandelte die Bewohner der Stadt mit Milde. Diese Großzügigkeit machte ihn auch im Westen berühmt.

Die Nachricht vom Fall Jerusalems erschütterte Europa. Sofort rief der Papst zu einem neuen Kreuzzug auf. Beim dritten Kreuzzug zogen die mächtigsten Herrscher Europas selbst in den Krieg: Kaiser Friedrich Barbarossa aus Deutschland, König Richard Löwenherz aus England und König Philipp II. aus Frankreich. Doch der alte Kaiser Barbarossa erreichte das Heilige Land nie. Im Jahr 1190 ertrank er in einem Fluss in Kleinasien. Sein Tod war ein schwerer Schlag für den Kreuzzug.

In Japan tobte in diesen Jahren ein großer Bürgerkrieg, der Gempei-Krieg. Die beiden mächtigen Kriegerfamilien, die Taira und die Minamoto, kämpften um die Herrschaft über das Land. Nach mehreren Jahren des Krieges siegten die Minamoto. Im Jahr 1185 vernichteten sie die Taira in einer großen Seeschlacht. Der Sieger, Minamoto no Yoritomo, gründete eine neue Form der Regierung. Er wurde der erste „Shogun", der oberste militärische Herrscher. Von nun an regierten in Japan für viele Jahrhunderte die Krieger, während der Kaiser nur noch eine symbolische Rolle spielte. Es war der Beginn der Zeit der Samurai-Herrschaft.

In China blühte die Südliche Song-Dynastie weiter. Im reichen Süden lebten die Menschen in großen Städten, trieben Handel über das Meer und schufen feine Kunst. Im Norden herrschten weiter die Jin.

In Nordafrika und Spanien stand das Reich der Almohaden auf seinem Höhepunkt. Die Almohaden kämpften gegen die christlichen Königreiche im Norden Spaniens und beherrschten ein großes Gebiet auf beiden Seiten des Mittelmeers.

In Amerika verschwand die große Stadt Cahokia fast völlig. Die meisten Menschen hatten sie verlassen. Was einst die größte Stadt nördlich von Mexiko war, wurde still und leer. Die genauen Gründe bleiben ein Rätsel.

So endete das 12. Jahrhundert mit großen Wenden. Saladin gewann Jerusalem zurück, in Japan begann die Herrschaft der Samurai, und in Amerika verschwand eine große Stadt. Überall auf der Welt ging die Geschichte ihren Weg – mal in lauten Schlachten, mal im stillen Verfall einer Stadt.`,
    translations: {
      "die Rückeroberung": "the reconquest",
      "die Wende": "the turning point",
      "entscheidenden": "decisive",
      "einleitete": "ushered in / initiated",
      "der Zusammenstoß": "the clash",
      "vernichtende": "devastating / crushing",
      "zurückeroberte": "reconquered",
      "gehalten hatten": "had held",
      "ließ kein Massaker zu": "allowed no massacre",
      "behandelte": "treated",
      "die Milde": "mildness / mercy",
      "die Großzügigkeit": "generosity",
      "der Fall": "the fall",
      "rief auf": "called for",
      "Richard Löwenherz": "Richard the Lionheart",
      "ertrank": "drowned",
      "der Schlag": "the blow",
      "tobte": "raged",
      "der Gempei-Krieg": "the Genpei War",
      "siegten": "were victorious",
      "vernichteten": "annihilated / destroyed",
      "die Seeschlacht": "the naval battle",
      "der Sieger": "the victor",
      "der Shogun": "the shogun",
      "oberste": "supreme / highest",
      "symbolische": "symbolic",
      "die Samurai-Herrschaft": "samurai rule",
      "trieben Handel": "carried on trade",
      "auf beiden Seiten": "on both sides",
      "verschwand": "disappeared",
      "still und leer": "quiet and empty",
      "das Rätsel": "the mystery / riddle",
      "der Verfall": "the decay / decline",
    }
  },
  {
    id: 20,
    unlockDay: 20,
    period: "1190–1200 n. Chr.",
    title: "Löwenherz, Saladin und ein neuer Herrscher in Japan",
    text: `Das letzte Jahrzehnt des 12. Jahrhunderts brachte das Ende eines berühmten Kreuzzugs, den Tod eines großen Herrschers und den Beginn einer neuen Zeit in Japan.

Im Heiligen Land kämpften zwei der berühmtesten Männer des Mittelalters gegeneinander: König Richard Löwenherz aus England und der muslimische Sultan Saladin. Beide waren tapfere Krieger und kluge Anführer, und obwohl sie Feinde waren, respektierten sie einander. Richard gewann mehrere Schlachten und eroberte wichtige Hafenstädte. Doch er schaffte es nicht, Jerusalem selbst zurückzuerobern. Die Stadt war zu gut verteidigt und lag zu weit von der Küste entfernt.

Am Ende schlossen Richard und Saladin im Jahr 1192 einen Vertrag. Jerusalem blieb in muslimischer Hand, aber christliche Pilger durften die Stadt wieder besuchen. Beide Seiten waren erschöpft und brauchten Frieden. Kurz darauf, im Jahr 1193, starb Saladin. Er hinterließ kaum Reichtum, denn er hatte sein Geld für seine Soldaten und für die Armen ausgegeben. Bis heute gilt er als Vorbild für Ehre und Großzügigkeit.

Richard Löwenherz hatte auf der Heimreise Pech. Er wurde von einem feindlichen Herzog gefangen genommen und musste ein riesiges Lösegeld zahlen, bevor er nach England zurückkehren durfte. Seine Abenteuer machten ihn zu einer Legende.

In Mitteleuropa wurde Kaiser Heinrich VI. sehr mächtig. Im Jahr 1194 eroberte er das reiche Königreich Sizilien und vereinte es mit dem Heiligen Römischen Reich. Für kurze Zeit beherrschte er ein großes Gebiet von Deutschland bis nach Süditalien.

In Japan begann eine völlig neue Zeit. Nach dem Sieg im großen Bürgerkrieg gründete der Krieger Minamoto no Yoritomo eine neue Form der Regierung. Im Jahr 1192 nahm er den Titel „Shogun" an, das heißt oberster militärischer Herrscher. Von nun an regierten in Japan die Krieger, die Samurai. Der Kaiser blieb zwar offiziell das Oberhaupt, aber die wahre Macht lag beim Shogun in der Stadt Kamakura. Diese Zeit der Samurai-Herrschaft sollte fast siebenhundert Jahre dauern.

In Kambodscha herrschte ein außergewöhnlicher König namens Jayavarman VII. Anders als die früheren Könige war er Buddhist. Er baute die zerstörte Hauptstadt Angkor wieder auf und errichtete viele neue Tempel, Straßen und sogar Krankenhäuser für sein Volk. Sein berühmtester Bau ist der Tempel Bayon mit seinen vielen riesigen Steingesichtern. Unter ihm erreichte das Reich der Khmer seine größte Ausdehnung.

In China blühte weiter die Südliche Song-Dynastie im reichen Süden, während die Jin den Norden beherrschten. Die Menschen in den südchinesischen Städten lebten in einer hoch entwickelten Welt mit Druckereien, Schulen und einem regen Handel über das Meer.

In Westafrika und Nordafrika herrschten weiter die Almohaden. Doch ihr großes Reich begann langsam, Risse zu zeigen. In Spanien kämpften sie weiter gegen die christlichen Königreiche im Norden.

In Amerika war die einst große Stadt Cahokia fast völlig verlassen. Andere Völker lebten weiter in kleineren Gemeinschaften und entwickelten ihre eigenen Kulturen, ohne Kontakt zur übrigen Welt.

So endete das 12. Jahrhundert mit dem Tod großer Männer und dem Aufstieg neuer Mächte. Saladin und Richard Löwenherz wurden zu Legenden, in Japan begann die Herrschaft der Samurai, und in Kambodscha baute ein buddhistischer König eines der größten Reiche Südostasiens.`,
    translations: {
      "berühmtesten": "most famous",
      "tapfere": "brave",
      "respektierten": "respected",
      "einander": "each other",
      "die Hafenstädte": "the port cities",
      "zurückzuerobern": "to reconquer",
      "verteidigt": "defended",
      "entfernt": "away / distant",
      "schlossen einen Vertrag": "made a treaty",
      "die Pilger": "the pilgrims",
      "erschöpft": "exhausted",
      "hinterließ": "left behind",
      "der Reichtum": "wealth",
      "ausgegeben": "spent",
      "die Ehre": "honour",
      "die Großzügigkeit": "generosity",
      "die Heimreise": "the journey home",
      "das Pech": "bad luck",
      "gefangen genommen": "taken prisoner",
      "das Lösegeld": "the ransom",
      "die Abenteuer": "the adventures",
      "vereinte": "united",
      "der Sieg": "the victory",
      "oberster": "supreme / highest",
      "das Oberhaupt": "the head / leader",
      "die Samurai-Herrschaft": "samurai rule",
      "außergewöhnlicher": "exceptional",
      "der Buddhist": "the Buddhist",
      "errichtete": "erected / built",
      "die Steingesichter": "stone faces",
      "die Ausdehnung": "the extent / expanse",
      "hoch entwickelten": "highly developed",
      "Druckereien": "printing workshops",
      "regen Handel": "lively trade",
      "Risse zu zeigen": "to show cracks",
      "verlassen": "abandoned",
      "die Gemeinschaften": "the communities",
      "die übrige Welt": "the rest of the world",
      "der Aufstieg": "the rise",
    }
  },
  {
    id: 21,
    unlockDay: 21,
    period: "1200–1210 n. Chr.",
    title: "Ein verratener Kreuzzug und ein neuer Khan",
    text: `Das erste Jahrzehnt des 13. Jahrhunderts brachte einen Kreuzzug, der furchtbar schiefging, und den Aufstieg eines Mannes in der fernen Steppe, der bald die halbe Welt erobern sollte.

In Europa rief der Papst zu einem neuen, vierten Kreuzzug auf. Das Ziel war wieder das Heilige Land. Doch dieser Kreuzzug nahm eine schreckliche Wende. Die Kreuzfahrer hatten kein Geld, um die Schiffe der reichen Stadt Venedig zu bezahlen. Also machten die Venezianer ihnen ein Angebot: Wenn die Kreuzfahrer ihnen halfen, bestimmte Städte zu erobern, würden sie weniger zahlen müssen. So griffen die Kreuzfahrer zuerst christliche Städte an. Schließlich zogen sie sogar gegen Konstantinopel, die Hauptstadt des christlichen Byzantinischen Reiches.

Im Jahr 1204 eroberten und plünderten die Kreuzfahrer Konstantinopel. Es war eine schreckliche Tat: Christen plünderten die größte christliche Stadt der Welt. Sie stahlen unermessliche Schätze und zerstörten viele Kunstwerke. Die Kreuzfahrer gründeten ein eigenes „Lateinisches Reich" in Konstantinopel. Das Byzantinische Reich war zwar nicht ganz am Ende, aber es erholte sich nie wieder völlig von diesem Schlag. Statt das Heilige Land zu befreien, hatte der vierte Kreuzzug die christliche Welt tief gespalten.

Weit entfernt, in den Steppen der Mongolei, geschah etwas, das die Welt für immer verändern sollte. Im Jahr 1206 vereinte ein Mann namens Temüdschin alle mongolischen Stämme unter seiner Herrschaft. Die Stammesführer gaben ihm den Titel „Dschingis Khan", was „universeller Herrscher" bedeutet. Zum ersten Mal waren die wilden Reitervölker der Steppe geeint. Dschingis Khan schuf eine außergewöhnlich disziplinierte Armee. Bald sollte er Feldzüge führen, die ganze Reiche vernichteten.

In Indien entstand in dieser Zeit ein neuer mächtiger Staat. Muslimische Herrscher aus Zentralasien hatten Nordindien erobert. Im Jahr 1206 gründeten sie das Sultanat von Delhi. Von nun an herrschten muslimische Sultane über große Teile Nordindiens, während im Süden weiter hinduistische Königreiche bestanden.

In Europa wuchs eine neue religiöse Bewegung. Ein junger Mann aus der italienischen Stadt Assisi gab seinen Reichtum auf und lebte in Armut. Sein Name war Franz von Assisi. Er predigte Liebe, Demut und Frieden und kümmerte sich um die Armen und Kranken. Viele Menschen folgten ihm, und so entstand ein neuer Orden, die Franziskaner. Franz von Assisi wurde zu einem der beliebtesten Heiligen des Mittelalters.

In Europa wuchsen auch die Universitäten weiter. In Städten wie Paris, Bologna und dem neuen Cambridge trafen sich Studenten und Gelehrte, um zu lernen und zu diskutieren. Das Wissen verbreitete sich, und immer mehr junge Männer wollten studieren.

In China, Afrika und Amerika ging das Leben weiter wie zuvor. Die meisten Menschen wussten nichts von den großen Ereignissen in fernen Ländern. Sie arbeiteten auf ihren Feldern, kümmerten sich um ihre Familien und folgten den Bräuchen ihrer Vorfahren.

So zeigt dieses Jahrzehnt zwei Gesichter der Geschichte: die Zerstörung durch einen verratenen Kreuzzug und den stillen Beginn eines Mannes in der Steppe, der bald das größte Reich der Weltgeschichte aufbauen sollte.`,
    translations: {
      "verraten": "betrayed",
      "schiefging": "went wrong",
      "die Steppe": "the steppe",
      "rief auf": "called for",
      "das Ziel": "the goal",
      "die Wende": "the turn / twist",
      "das Angebot": "the offer",
      "griffen an": "attacked",
      "zogen gegen": "marched against",
      "plünderten": "plundered / looted",
      "die Tat": "the deed / act",
      "stahlen": "stole",
      "unermessliche": "immeasurable",
      "Schätze": "treasures",
      "die Kunstwerke": "the works of art",
      "das Lateinische Reich": "the Latin Empire",
      "erholte sich": "recovered",
      "der Schlag": "the blow",
      "befreien": "to liberate",
      "gespalten": "divided / split",
      "vereinte": "united",
      "die Stämme": "the tribes",
      "die Stammesführer": "the tribal leaders",
      "geeint": "united",
      "diszipliniert": "disciplined",
      "Feldzüge": "military campaigns",
      "vernichteten": "destroyed / annihilated",
      "das Sultanat": "the sultanate",
      "die Sultane": "the sultans",
      "hinduistische": "Hindu",
      "gab auf": "gave up",
      "die Armut": "poverty",
      "predigte": "preached",
      "die Demut": "humility",
      "kümmerte sich um": "took care of",
      "der Orden": "the (religious) order",
      "die Franziskaner": "the Franciscans",
      "beliebtesten": "most popular",
      "verbreitete sich": "spread",
      "die Bräuche": "the customs",
      "die Vorfahren": "the ancestors",
      "zwei Gesichter": "two faces",
    }
  },
  {
    id: 22,
    unlockDay: 22,
    period: "1210–1220 n. Chr.",
    title: "Die Mongolen kommen und ein Vertrag in England",
    text: `In den 1210er Jahren begann der gewaltige Sturm der mongolischen Eroberungen, und in England zwangen die Adligen ihren König zu einem berühmten Vertrag.

Dschingis Khan, der Herrscher der Mongolen, richtete seinen Blick nun nach außen. Im Jahr 1211 begann er den Krieg gegen das Reich der Jin in Nordchina. Die mongolische Armee war schnell, diszipliniert und gnadenlos. Die Chinesische Mauer konnte die Mongolen nicht aufhalten. Im Jahr 1215 eroberten sie die große Jin-Hauptstadt Zhongdu, das heutige Peking. Die Stadt wurde geplündert und zum Teil niedergebrannt. Die Mongolen lernten von den Chinesen, wie man Mauern und Festungen erobert. Damit wurden sie noch gefährlicher.

In Spanien gab es ein wichtiges Ereignis für die christlichen Königreiche. Im Jahr 1212 besiegten die vereinten christlichen Heere die muslimischen Almohaden in der großen Schlacht von Las Navas de Tolosa. Dieser Sieg war ein Wendepunkt in der langen Reconquista, der Rückeroberung Spaniens durch die Christen. Von nun an wurden die muslimischen Reiche in Spanien immer schwächer.

In England herrschte ein unbeliebter König namens Johann, den man auch „Johann ohne Land" nannte. Er führte teure Kriege, verlor viel Land in Frankreich und verlangte hohe Steuern. Die mächtigen Adligen waren wütend. Im Jahr 1215 zwangen sie den König, einen wichtigen Vertrag zu unterschreiben: die Magna Carta, die „Große Urkunde". Darin musste der König versprechen, die Rechte der Adligen zu achten und nicht über dem Gesetz zu stehen. Die Magna Carta wurde später zu einem berühmten Symbol für die Idee, dass auch ein Herrscher Gesetze befolgen muss.

In der katholischen Kirche fand im Jahr 1215 ein großes Konzil statt, das Vierte Laterankonzil. Dort trafen sich viele Bischöfe und beschlossen neue Regeln für das Leben der Christen. Die Kirche war zu dieser Zeit auf dem Höhepunkt ihrer Macht.

Eine traurige Geschichte aus dieser Zeit ist der sogenannte Kinderkreuzzug von 1212. Tausende junger Menschen aus Europa wollten angeblich friedlich ins Heilige Land ziehen. Doch die meisten erreichten ihr Ziel nie. Viele starben unterwegs oder wurden in die Sklaverei verkauft. Diese Geschichte zeigt, wie stark der religiöse Eifer der Zeit war und wie gefährlich er sein konnte.

In Kambodscha, China und Afrika ging das Leben weiter. Im reichen China der Song blühten Handel und Kunst. In Westafrika kontrollierten verschiedene Reiche weiter den Goldhandel durch die Sahara.

In Amerika lebten die Menschen weiter in ihren eigenen Welten. Sie wussten nichts von Dschingis Khan oder der Magna Carta. Doch auch ihre Gesellschaften veränderten sich langsam, jede auf ihre eigene Weise.

So begann in diesem Jahrzehnt der Aufstieg der Mongolen, die bald zur größten Bedrohung der bekannten Welt werden sollten. Und in England entstand mit der Magna Carta eine Idee, die viele Jahrhunderte später noch wichtig sein würde: dass niemand, nicht einmal ein König, über dem Gesetz steht.`,
    translations: {
      "gewaltige": "enormous / mighty",
      "der Sturm": "the storm",
      "die Eroberungen": "the conquests",
      "zwangen": "forced",
      "richtete den Blick": "turned his gaze",
      "nach außen": "outward",
      "gnadenlos": "merciless",
      "aufhalten": "to stop / halt",
      "geplündert": "plundered",
      "niedergebrannt": "burned down",
      "die Festungen": "the fortresses",
      "die vereinten Heere": "the united armies",
      "besiegten": "defeated",
      "der Wendepunkt": "the turning point",
      "die Rückeroberung": "the reconquest",
      "unbeliebter": "unpopular",
      "ohne Land": "without land / Lackland",
      "verlangte": "demanded",
      "die Steuern": "the taxes",
      "wütend": "furious",
      "unterschreiben": "to sign",
      "die Urkunde": "the charter / document",
      "versprechen": "to promise",
      "die Rechte": "the rights",
      "achten": "to respect",
      "das Gesetz": "the law",
      "befolgen": "to obey / follow",
      "das Konzil": "the council (church)",
      "beschlossen": "decided",
      "der Kinderkreuzzug": "the Children's Crusade",
      "angeblich": "supposedly",
      "die Sklaverei": "slavery",
      "der Eifer": "the zeal",
      "der Goldhandel": "the gold trade",
      "die Bedrohung": "the threat",
      "über dem Gesetz": "above the law",
    }
  },
  {
    id: 23,
    unlockDay: 23,
    period: "1220–1230 n. Chr.",
    title: "Der Sturm aus dem Osten und ein Kaiser ohne Schwert",
    text: `Die 1220er Jahre standen im Zeichen der gewaltigen mongolischen Eroberungen. Gleichzeitig gewann ein außergewöhnlicher Kaiser in Europa Jerusalem zurück – nicht durch Krieg, sondern durch Verhandlung.

Dschingis Khan führte seine Armeen nun nach Westen. Das mächtige Reich von Khwarezm, das große Teile des heutigen Iran und Zentralasiens umfasste, hatte einen schweren Fehler gemacht: Es hatte mongolische Händler und Gesandte getötet. Dschingis Khan sah das als schwere Beleidigung. Seine Rache war furchtbar. Zwischen 1219 und 1221 zerstörten die Mongolen die reichen Städte Zentralasiens. Blühende Zentren wie Samarkand und Buchara wurden geplündert, und Hunderttausende von Menschen starben. Es war eine der größten Katastrophen der Geschichte.

Mongolische Reiterheere zogen sogar bis nach Russland. Im Jahr 1223 besiegten sie die russischen Fürsten in einer großen Schlacht am Fluss Kalka. Dann zogen sie sich wieder zurück, denn sie wollten nur erkunden, nicht erobern. Doch ganz Europa hörte mit Angst von diesem unbekannten, schrecklichen Feind aus dem Osten. Im Jahr 1227 starb Dschingis Khan. Sein riesiges Reich teilte er unter seinen Söhnen auf, die seine Eroberungen fortsetzten.

In Europa lebte ein außergewöhnlicher Mann: Kaiser Friedrich II. Man nannte ihn „das Staunen der Welt", weil er so gebildet und ungewöhnlich war. Er sprach viele Sprachen, interessierte sich für Wissenschaft und hatte sogar muslimische Gelehrte an seinem Hof. Der Papst hatte ihn lange gedrängt, einen Kreuzzug zu führen. Schließlich zog Friedrich im Jahr 1228 ins Heilige Land. Doch statt zu kämpfen, verhandelte er mit dem muslimischen Sultan. Durch kluge Diplomatie erreichte er im Jahr 1229, dass Jerusalem wieder den Christen übergeben wurde. So gewann ein Kaiser die heilige Stadt zurück, fast ohne einen einzigen Kampf. Viele in der Kirche waren trotzdem unzufrieden, weil er mit den Muslimen verhandelt hatte.

Im Norden Europas zogen die Deutschritter, ein militärischer Orden, in das Land der heidnischen Preußen. Sie wollten die Menschen dort mit dem Schwert zum Christentum bekehren und gründeten ihren eigenen Staat an der Ostsee.

In Italien starb im Jahr 1226 Franz von Assisi, der beliebte Heilige, der in Armut gelebt und die Natur geliebt hatte. Sein Orden, die Franziskaner, wuchs weiter und verbreitete sich in ganz Europa.

In China herrschten weiter die Song im Süden und die Jin im Norden – doch die Mongolen bedrohten nun auch sie. In Westafrika und in Amerika ging das Leben der einfachen Menschen seinen gewohnten Gang.

So zeigt dieses Jahrzehnt die ganze Bandbreite menschlichen Handelns: die furchtbare Zerstörung durch die Mongolen und die kluge Diplomatie eines gebildeten Kaisers, der zeigte, dass man manchmal mehr mit Worten als mit dem Schwert erreichen kann.`,
    translations: {
      "im Zeichen": "marked by / under the sign of",
      "die Verhandlung": "the negotiation",
      "umfasste": "comprised / included",
      "der Fehler": "the mistake",
      "Gesandte": "envoys",
      "die Beleidigung": "the insult",
      "die Rache": "the revenge",
      "zerstörten": "destroyed",
      "blühende": "flourishing",
      "geplündert": "plundered",
      "die Katastrophen": "the catastrophes",
      "Reiterheere": "cavalry armies",
      "besiegten": "defeated",
      "zogen sich zurück": "withdrew",
      "erkunden": "to scout / explore",
      "teilte auf": "divided up",
      "fortsetzten": "continued",
      "das Staunen der Welt": "the wonder of the world",
      "gebildet": "educated",
      "ungewöhnlich": "unusual",
      "die Gelehrten": "the scholars",
      "gedrängt": "urged / pressed",
      "verhandelte": "negotiated",
      "die Diplomatie": "diplomacy",
      "übergeben": "handed over",
      "unzufrieden": "dissatisfied",
      "die Deutschritter": "the Teutonic Knights",
      "heidnischen": "pagan",
      "die Preußen": "the Prussians",
      "bekehren": "to convert",
      "das Schwert": "the sword",
      "die Ostsee": "the Baltic Sea",
      "verbreitete sich": "spread",
      "bedrohten": "threatened",
      "gewohnten Gang": "usual course",
      "die Bandbreite": "the range / spectrum",
      "das Handeln": "action / conduct",
    }
  },
  {
    id: 24,
    unlockDay: 24,
    period: "1230–1240 n. Chr.",
    title: "Neue Reiche in Afrika und der Schatten der Mongolen",
    text: `In den 1230er Jahren entstand in Westafrika ein mächtiges neues Reich, während der Schatten der Mongolen immer weiter nach Westen reichte.

In Afrika gründete ein Held namens Sundiata Keita das Reich Mali. Nach einer berühmten Schlacht um das Jahr 1235 vereinte er mehrere kleine Königreiche zu einem großen Reich. Mali lag an den wichtigen Handelswegen der Sahara und wurde sehr reich durch den Handel mit Gold und Salz. Die Geschichte von Sundiata wurde über viele Generationen mündlich weitererzählt und ist bis heute in Westafrika berühmt. Das Reich Mali sollte in den folgenden Jahrhunderten zu einem der reichsten Reiche der Welt werden.

Im Osten setzten die Mongolen ihre Eroberungen fort. Nach dem Tod von Dschingis Khan führte sein Sohn Ögödei das Reich weiter. Die Mongolen schickten eine große Armee nach Westen, um Europa anzugreifen. Sie eroberten zuerst die russischen Fürstentümer. Eine Stadt nach der anderen fiel. Im Jahr 1240 eroberten und zerstörten die Mongolen die große Stadt Kiew, das Zentrum der russischen Welt. Die russischen Länder gerieten für lange Zeit unter mongolische Herrschaft.

In Spanien ging die christliche Rückeroberung weiter. Im Jahr 1236 eroberte der christliche König von Kastilien die alte muslimische Stadt Córdoba. Einst war Córdoba eine der größten und gebildetsten Städte der Welt gewesen, ein Zentrum der Wissenschaft und Kunst. Nun fiel sie an die Christen. Die muslimische Macht in Spanien schrumpfte immer weiter zusammen.

In der katholischen Kirche entstand in dieser Zeit eine strenge neue Einrichtung: die Inquisition. Ihre Aufgabe war es, Menschen zu finden und zu bestrafen, die nicht an die offiziellen Lehren der Kirche glaubten. Wer als Ketzer galt, konnte hart bestraft werden. Die Inquisition zeigt, wie mächtig und auch wie streng die Kirche zu dieser Zeit war.

In China lebten die Menschen der Südlichen Song weiter in ihrer reichen, hoch entwickelten Welt. Doch im Norden rückten die Mongolen näher. Schon bald sollten sie auch das letzte große chinesische Reich bedrohen.

In Europa wuchsen die Städte und der Handel weiter. Immer mehr Menschen lebten nicht mehr nur als Bauern, sondern als Handwerker und Kaufleute in den Städten. In diesen Städten entstanden Zünfte, das waren Vereinigungen von Handwerkern, die ihre Arbeit und ihre Preise gemeinsam regelten.

In Amerika lebten die Menschen weiter ohne Kontakt zur übrigen Welt. In Mexiko und in den Anden entwickelten sich Kulturen, die später zu großen Reichen werden sollten.

So zeigt dieses Jahrzehnt, wie überall auf der Welt neue Mächte aufstiegen und alte verschwanden. In Afrika entstand das reiche Reich Mali, in Europa fiel das alte Córdoba, und aus dem Osten kam der furchtbare Schatten der Mongolen immer näher.`,
    translations: {
      "der Schatten": "the shadow",
      "der Held": "the hero",
      "vereinte": "united",
      "die Handelswege": "the trade routes",
      "mündlich": "orally",
      "weitererzählt": "passed on / retold",
      "setzten fort": "continued",
      "anzugreifen": "to attack",
      "die Fürstentümer": "the principalities",
      "fiel": "fell",
      "gerieten unter": "came under",
      "die Herrschaft": "the rule",
      "die Rückeroberung": "the reconquest",
      "einst": "once",
      "gebildetsten": "most educated",
      "schrumpfte zusammen": "shrank",
      "strenge": "strict",
      "die Einrichtung": "the institution",
      "die Inquisition": "the Inquisition",
      "die Aufgabe": "the task",
      "bestrafen": "to punish",
      "die Lehren": "the teachings / doctrines",
      "der Ketzer": "the heretic",
      "galt": "was considered",
      "rückten näher": "drew closer",
      "bedrohen": "to threaten",
      "die Handwerker": "the craftsmen",
      "die Kaufleute": "the merchants",
      "die Zünfte": "the guilds",
      "die Vereinigungen": "the associations",
      "regelten": "regulated",
      "aufstiegen": "rose",
      "verschwanden": "disappeared",
    }
  },
  {
    id: 25,
    unlockDay: 25,
    period: "1240–1250 n. Chr.",
    title: "Die Mongolen in Europa und ein König in Gefangenschaft",
    text: `Die 1240er Jahre brachten Europa an den Rand einer Katastrophe, als die Mongolen tief in den Kontinent eindrangen. Gleichzeitig scheiterte ein frommer König mit einem Kreuzzug in Ägypten.

Im Jahr 1241 erreichten die mongolischen Armeen Mitteleuropa. Sie besiegten ein Ritterheer in Polen und ein ungarisches Heer in zwei großen Schlachten. Die europäischen Ritter, die als die besten Krieger galten, waren gegen die schnellen mongolischen Reiter machtlos. In Europa herrschte große Angst. Viele glaubten, das Ende der Welt sei gekommen. Doch dann geschah etwas Unerwartetes: Der mongolische Großkhan Ögödei starb in der fernen Mongolei. Die mongolischen Anführer zogen sich zurück, um an der Wahl eines neuen Herrschers teilzunehmen. So wurde Europa, fast durch Zufall, vor einer weiteren Verwüstung gerettet.

Im Norden besiegte der russische Fürst Alexander Newski im Jahr 1242 die Deutschritter in einer berühmten Schlacht auf dem zugefrorenen Eis eines Sees. Dieser Sieg machte ihn zu einem Helden für das russische Volk, auch wenn Russland gleichzeitig unter mongolischer Herrschaft stand.

In Frankreich lebte ein sehr frommer König namens Ludwig IX. Er wollte das Heilige Land befreien und führte einen neuen Kreuzzug, den siebten. Im Jahr 1248 zog er mit einem großen Heer nach Ägypten. Doch der Kreuzzug wurde ein Misserfolg. Die Christen litten unter Krankheiten, und im Jahr 1250 wurde König Ludwig selbst gefangen genommen. Er musste ein riesiges Lösegeld zahlen, um wieder freizukommen. Trotz dieses Scheiterns blieb Ludwig ein hoch angesehener und frommer Herrscher.

In Ägypten geschah in dieser Zeit eine wichtige Veränderung. Die Mamluken, ein Heer aus ehemaligen Sklavensoldaten, ergriffen die Macht. Sie waren ausgezeichnete Krieger und sollten bald eine wichtige Rolle in der Geschichte des Nahen Ostens spielen.

In Europa blühte das geistige Leben an den Universitäten. In Paris lehrten berühmte Gelehrte, die das Wissen der griechischen und arabischen Philosophen mit dem christlichen Glauben verbinden wollten. Es war der Beginn einer großen Zeit der Philosophie und der Wissenschaft im Mittelalter.

In Westafrika wuchs das Reich Mali weiter. In China bereiteten sich die Mongolen darauf vor, auch das reiche Reich der Südlichen Song anzugreifen. Und in Amerika lebten die Menschen weiter in ihren eigenen Welten, ohne zu ahnen, welche großen Veränderungen anderswo geschahen.

So zeigt dieses Jahrzehnt, wie nahe Europa der mongolischen Eroberung kam und wie ein frommer König trotz aller Mühe in Gefangenschaft geriet. Die Geschichte hängt manchmal von Zufällen ab – wie dem Tod eines fernen Khans, der einen ganzen Kontinent rettete.`,
    translations: {
      "an den Rand": "to the brink / edge",
      "eindrangen": "penetrated / invaded",
      "scheiterte": "failed",
      "fromm": "pious / devout",
      "das Ritterheer": "the army of knights",
      "ungarisches": "Hungarian",
      "machtlos": "powerless",
      "das Ende der Welt": "the end of the world",
      "Unerwartetes": "something unexpected",
      "der Großkhan": "the Great Khan",
      "zogen sich zurück": "withdrew",
      "die Wahl": "the election",
      "teilzunehmen": "to take part",
      "durch Zufall": "by chance",
      "die Verwüstung": "the devastation",
      "gerettet": "saved",
      "zugefrorenen": "frozen over",
      "das Eis": "the ice",
      "befreien": "to liberate",
      "der Misserfolg": "the failure",
      "litten": "suffered",
      "gefangen genommen": "taken prisoner",
      "das Lösegeld": "the ransom",
      "freizukommen": "to get free",
      "das Scheitern": "the failure",
      "angesehener": "respected",
      "die Mamluken": "the Mamluks",
      "ehemaligen": "former",
      "Sklavensoldaten": "slave soldiers",
      "ergriffen die Macht": "seized power",
      "ausgezeichnete": "excellent",
      "geistige Leben": "intellectual life",
      "lehrten": "taught",
      "verbinden": "to connect / combine",
      "bereiteten sich vor": "prepared themselves",
      "anzugreifen": "to attack",
      "zu ahnen": "to suspect / sense",
      "hängt ab von": "depends on",
      "Zufällen": "chance events",
    }
  },
  {
    id: 26,
    unlockDay: 26,
    period: "1250–1260 n. Chr.",
    title: "Der Fall von Bagdad und der Sieg bei Ain Dschalut",
    text: `Die 1250er Jahre brachten eine der größten Katastrophen der islamischen Welt, aber auch die erste große Niederlage der scheinbar unbesiegbaren Mongolen.

Die Mongolen setzten ihre Eroberungen im Nahen Osten fort. Ein Enkel von Dschingis Khan namens Hülegü führte eine gewaltige Armee nach Westen. Sein Ziel war Bagdad, die prächtige Hauptstadt des Kalifen und seit fünfhundert Jahren das geistige Zentrum der islamischen Welt. Im Jahr 1258 belagerten und eroberten die Mongolen die Stadt. Was dann geschah, war schrecklich: Die Mongolen plünderten Bagdad, töteten unzählige Menschen und zerstörten die berühmten Bibliotheken. Man erzählt, dass der Fluss Tigris von der Tinte der zerstörten Bücher schwarz wurde. Der letzte Kalif wurde getötet, und damit endete das jahrhundertealte Kalifat. Es war ein gewaltiger Schock für die ganze islamische Welt.

Die Mongolen zogen weiter nach Syrien und schienen unaufhaltsam. Doch dann trafen sie auf einen Gegner, der ihnen gewachsen war: die Mamluken aus Ägypten. Im Jahr 1260 kam es in der Schlacht von Ain Dschalut im heutigen Israel zum entscheidenden Kampf. Die Mamluken besiegten die Mongolen vollständig. Es war die erste große Niederlage der Mongolen seit Beginn ihrer Eroberungen. Dieser Sieg rettete Ägypten und stoppte den weiteren Vormarsch der Mongolen nach Westen. Die Mamluken wurden zu den neuen Beschützern der islamischen Welt.

Im Osten wurde unterdessen ein anderer Enkel von Dschingis Khan immer mächtiger: Kublai Khan. Er richtete seinen Blick auf China und wollte das reiche Reich der Südlichen Song erobern. Damit begann der letzte große Feldzug der Mongolen in Ostasien.

In England gab es Streit zwischen dem König und den Adligen. Die Adligen wollten mehr Mitspracherecht in der Regierung. Im Jahr 1258 zwangen sie den König, neue Regeln zu akzeptieren, die seine Macht einschränkten. Es war ein weiterer Schritt auf dem langen Weg zu einer Regierung, in der nicht nur der König allein entscheidet.

In Westafrika blühte das Reich Mali weiter und wurde immer reicher durch den Goldhandel. In Europa wuchsen die Universitäten und die Städte, und große steinerne Kathedralen im gotischen Stil erhoben sich in den Himmel.

In Amerika lebten die Menschen weiter in ihren eigenen Welten. In Mexiko und in den Anden bereiteten sich Kulturen vor, die in den folgenden Jahrhunderten zu mächtigen Reichen werden sollten.

So endeten die 1250er Jahre mit dem Fall des alten Bagdad und dem überraschenden Sieg der Mamluken. Zum ersten Mal hatten die Mongolen eine große Niederlage erlitten. Die Welt lernte, dass auch das mächtigste Heer nicht für immer unbesiegbar bleibt.`,
    translations: {
      "scheinbar": "seemingly",
      "unbesiegbaren": "invincible",
      "setzten fort": "continued",
      "der Enkel": "the grandson",
      "gewaltige": "enormous / mighty",
      "das Ziel": "the goal",
      "prächtige": "magnificent",
      "der Kalif": "the caliph",
      "geistige Zentrum": "intellectual centre",
      "belagerten": "besieged",
      "plünderten": "plundered",
      "unzählige": "countless",
      "die Bibliotheken": "the libraries",
      "die Tinte": "the ink",
      "das Kalifat": "the caliphate",
      "jahrhundertealte": "centuries-old",
      "der Schock": "the shock",
      "unaufhaltsam": "unstoppable",
      "der Gegner": "the opponent",
      "gewachsen war": "was a match for",
      "die Mamluken": "the Mamluks",
      "entscheidenden": "decisive",
      "besiegten": "defeated",
      "die Niederlage": "the defeat",
      "rettete": "saved",
      "der Vormarsch": "the advance",
      "die Beschützer": "the protectors",
      "unterdessen": "meanwhile",
      "richtete den Blick": "turned his gaze",
      "der Feldzug": "the military campaign",
      "das Mitspracherecht": "a say / right to participate",
      "einschränkten": "restricted / limited",
      "entscheidet": "decides",
      "der Goldhandel": "the gold trade",
      "steinerne": "stone (adj.)",
      "erhoben sich": "rose up",
      "bereiteten sich vor": "prepared themselves",
      "überraschenden": "surprising",
      "erlitten": "suffered",
      "unbesiegbar": "invincible",
    }
  },
];
