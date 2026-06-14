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
];
