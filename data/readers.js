// Reader passages: 1000-1500 word texts in German (A2/B1 level)
// World history from 1000 AD, one passage per ~10-year period
// translations: word/phrase -> English, used for popup tooltips
// unlockDay: the day number (1-100) when this passage becomes available

const READERS = [
  {
    id: 1,
    unlockDay: 1,
    period: "ca. 1000–1010 n. Chr.",
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

Die Welt um das Jahr 1000 war also größer und vielfältiger als viele Europäer glaubten. Verschiedene Kulturen lebten parallel, manchmal in Kontakt miteinander, manchmal völlig getrennt. Die Seidenstraße verband Europa und China mit langen Karawanenreisen über Zentralasien. Gewürze aus Asien kamen nach Europa, europäisches Silber floss nach Osten. Ideen und Erfindungen reisten langsam, aber sie reisten. Die Welt war klein genug, dass eine Entdeckung in einem Land irgendwann das Leben der Menschen in einem anderen Land verändern konnte.`,
    translations: {
      "die meisten": "most",
      "als Bauern": "as farmers",
      "auf dem Land": "in the countryside",
      "schmutzig": "dirty",
      "die Einwohner": "the inhabitants",
      "das Dorf": "the village",
      "hart": "hard / tough",
      "bevor sie erwachsen wurden": "before they grew up",
      "galt als": "was considered",
      "von früh bis spät": "from dawn to dusk",
      "das Getreide": "the grain",
      "ernteten": "harvested",
      "die Heizung": "heating",
      "die Medikamente": "medicines",
      "ständiger Begleiter": "constant companion",
      "mittelalterlich": "medieval",
      "herrschte": "ruled",
      "das Heilige Römische Reich": "the Holy Roman Empire",
      "ein loses Netz": "a loose network",
      "die Fürsten": "the princes",
      "Herzögen": "dukes",
      "Bischöfen": "bishops",
      "gehorchten": "obeyed",
      "gebildet": "educated / learned",
      "träumte davon": "dreamed of",
      "neu zu gründen": "to re-establish",
      "weltliche": "secular / worldly",
      "Klöster": "monasteries",
      "Zentren des Wissens": "centres of knowledge",
      "Mönche": "monks",
      "kopierten": "copied",
      "bewahrten": "preserved",
      "die Antike": "antiquity / the ancient world",
      "für immer verloren gegangen": "lost forever",
      "das Ende der Welt": "the end of the world",
      "vernichten": "to destroy",
      "erleichtert": "relieved",
      "dankbar": "grateful",
      "an der Macht": "in power",
      "fortschrittlichste": "most advanced",
      "erfunden": "invented",
      "Buchläden": "bookshops",
      "öffentliche Bäder": "public baths",
      "blühte die Wissenschaft": "science flourished",
      "Gelehrte": "scholars",
      "übersetzten": "translated",
      "Werke": "works",
      "Philosophen": "philosophers",
      "entwickelten": "developed",
      "ebenfalls": "also / likewise",
      "Traditionen": "traditions",
      "Mosaike": "mosaics",
      "Ikonen": "icons",
      "der Einfluss": "the influence",
      "die Slawen": "the Slavs",
      "bekehrt": "converted",
      "erreichte": "reached",
      "die Küste": "the coast",
      "wilde Trauben": "wild grapes",
      "die Siedlung": "the settlement",
      "die einheimischen Menschen": "the native people",
      "zahlreich": "numerous",
      "feindlich": "hostile",
      "die Folgen": "the consequences",
      "verfeinert": "refined / sophisticated",
      "die Hofkultur": "court culture",
      "Prosawerke": "prose works",
      "die Weltliteratur": "world literature",
      "aufgeteilt": "divided",
      "blühte": "flourished",
      "Gewürze": "spices",
      "wertvolle Waren": "valuable goods",
      "vielfältig": "diverse",
      "parallel": "in parallel / simultaneously",
      "die Seidenstraße": "the Silk Road",
      "Karawanenreisen": "caravan journeys",
      "floss": "flowed",
      "langsam": "slowly",
      "verändern": "to change",
    }
  },
  {
    id: 2,
    unlockDay: 2,
    period: "ca. 1010–1050 n. Chr.",
    title: "Wikinger, Normannen und das nordische Europa",
    text: `In den ersten Jahrzehnten des 11. Jahrhunderts waren die Wikinger noch eine der bedeutendsten Kräfte in Europa. Sie kamen aus Skandinavien – aus Dänemark, Norwegen und Schweden – und hatten seit dem 8. Jahrhundert die Küsten Europas unsicher gemacht. Aber die Wikinger waren nicht nur die brutalen Krieger, als die man sie sich oft vorstellt. Sie waren auch hervorragende Seefahrer, kluge Händler und mutige Entdecker.

Die Wikingerschiffe waren technische Meisterwerke. Flach und leicht, konnten sie sowohl auf dem offenen Meer als auch auf Flüssen fahren. Sie hatten keinen tiefen Kiel und brauchten keinen Hafen – sie konnten direkt an den Strand fahren. Mit diesen Schiffen erreichten die Wikinger Island, Grönland, Nordamerika, aber auch Konstantinopel und Bagdad. Auf den Flüssen Russlands paddelten sie von der Ostsee bis zum Schwarzen Meer.

In Frankreich hatten sich die Wikinger schon im 10. Jahrhundert dauerhaft niedergelassen. Der Frankenkönig Karl der Einfältige gab dem Wikingerführer Rollo im Jahr 911 ein großes Gebiet im Norden Frankreichs. Dieses Gebiet wurde die Normandie – der Name kommt von „Nordmänner". Rollos Nachkommen, die Normannen, lernten schnell Französisch, nahmen das Christentum an und wurden zu vollwertigen Mitgliedern der europäischen Feudalgesellschaft. Aber sie behielten ihren Ehrgeiz und ihre Energie.

In England war die Lage in dieser Zeit besonders turbulent. Der englische König Æthelred, den man „den Unberatenen" nannte, konnte sein Reich nicht gegen die dänischen Angriffe verteidigen. Er versuchte, die Wikinger mit Geld zu bezahlen – diese Zahlungen nannte man „Danegeld". Aber das half nicht lange. Im Jahr 1013 eroberte der dänische König Sven Gabelbart England fast vollständig, und Æthelred musste fliehen.

Nach Svens Tod übernahm sein Sohn Knut die Macht. Knut der Große – so nennt man ihn in der Geschichte – war ein außergewöhnlicher Herrscher. Er wurde König von England, Dänemark und Norwegen gleichzeitig und regierte ein riesiges nordisches Reich. In England regierte er weise und gerecht. Er respektierte die englischen Gesetze und die englische Kirche. Nach seinem Tod im Jahr 1035 zerfiel sein Reich wieder, aber seine Herrschaft zeigte, dass die Wikinger nicht nur zerstören, sondern auch aufbauen konnten.

Weit im Osten hatten die Wikinger ebenfalls tiefe Spuren hinterlassen. Die „Waräger", wie man die Wikinger in Osteuropa nannte, hatten im 9. Jahrhundert wichtige Handelswege entlang der russischen Flüsse aufgebaut. Sie gründeten Städte wie Nowgorod und Kiew. Der Staat „Kiewer Rus" – der Vorläufer des modernen Russland, der Ukraine und von Weißrussland – entstand aus diesen wikingischen Siedlungen. Die Waräger vermischten sich mit der slawischen Bevölkerung und übernahmen deren Sprache und Kultur, während sie gleichzeitig ihre eigenen Organisationsstrukturen einbrachten.

Im Mittelmeer kämpften normannische Abenteurer um neue Länder. Normannische Ritter kamen in kleinen Gruppen nach Süditalien und Sizilien. Dort fanden sie ein zerrissenes Land: Die Byzantiner, die Araber und verschiedene italienische Stadtstaaten stritten sich um die Kontrolle. Die Normannen nutzten diese Unordnung und kämpften mal für die einen, mal für die anderen – immer für Geld und Land. Langsam bauten sie ihre eigene Herrschaft auf. Bis Ende des Jahrhunderts würden normannische Fürsten ganz Süditalien und Sizilien regieren.

Das tägliche Leben in der Wikingerzeit war geprägt von harter Arbeit, aber auch von einer lebendigen Erzähltradition. In den langen Winterabenden saßen die Menschen in den großen Hallen zusammen und hörten Geschichten. Die Skalden – die Dichter der Wikinger – sangen von Helden, Göttern und großen Schlachten. Diese Geschichten wurden mündlich überliefert und viele Jahrhunderte später als „Sagas" aufgeschrieben.

Die Wikingergötter – Odin, Thor, Freya und die anderen – wurden langsam vom Christentum verdrängt. Dänemark wurde schon im 10. Jahrhundert offiziell christlich. Norwegen folgte um das Jahr 1000 unter König Olaf, der manchmal mit Gewalt missionierte. Schweden blieb am längsten heidnisch. Die Bekehrung war nicht immer freiwillig und nicht immer vollständig – viele Menschen verehrten heimlich weiterhin die alten Götter.

Die Wikinger hinterließen ein kompliziertes Erbe. Auf der einen Seite waren sie für Plünderung, Sklaverei und Gewalt verantwortlich. Auf der anderen Seite schufen sie wichtige Handelsnetzwerke, gründeten Städte und trugen zur Entwicklung mehrerer europäischer Nationen bei. England, Frankreich, Russland und die skandinavischen Länder selbst – alle tragen heute noch Spuren der Wikingerzeit. Die englische Sprache hat viele Wörter aus dem Altnordischen übernommen, wie zum Beispiel „sky", „window" und „knife".

Um die Mitte des 11. Jahrhunderts begann die Ära der Wikinger zu Ende zu gehen. Die skandinavischen Königreiche wurden stabiler und christlicher. Die wilden Überfälle wurden seltener. Die Nachkommen der Wikinger wurden zu Franzosen, Russen und Engländern. Aber die Energie, der Mut und die Abenteuerlust dieser außergewöhnlichen Seefahrer hatten Europa für immer verändert.`,
    translations: {
      "die bedeutendsten Kräfte": "the most significant forces",
      "unsicher gemacht": "made unsafe / terrorised",
      "vorstellt": "imagines",
      "hervorragende Seefahrer": "outstanding sailors / seafarers",
      "Meisterwerke": "masterpieces",
      "flach": "flat / shallow",
      "der Kiel": "the keel",
      "paddelten": "paddled",
      "dauerhaft niedergelassen": "permanently settled",
      "der Frankenkönig": "the Frankish king",
      "Nachkommen": "descendants",
      "vollwertigen Mitgliedern": "full members",
      "die Feudalgesellschaft": "feudal society",
      "behielten": "retained / kept",
      "der Ehrgeiz": "ambition",
      "turbulent": "turbulent",
      "den Unberatenen": "the Unready (literally: the ill-advised)",
      "verteidigen": "to defend",
      "Angriffe": "attacks",
      "Danegeld": "Danegeld (tribute paid to Vikings)",
      "außergewöhnlicher Herrscher": "exceptional ruler",
      "weise und gerecht": "wisely and justly",
      "respektierte": "respected",
      "zerfiel": "fell apart / disintegrated",
      "aufbauen": "to build up",
      "tiefe Spuren hinterlassen": "left deep marks",
      "Handelswege": "trade routes",
      "der Vorläufer": "the precursor / forerunner",
      "vermischten sich": "mixed / intermingled",
      "die Bevölkerung": "the population",
      "einbrachten": "brought in / contributed",
      "zerrissenes Land": "torn / divided land",
      "Stadtstaaten": "city-states",
      "die Kontrolle": "control",
      "geprägt von": "shaped by / characterised by",
      "lebendige Erzähltradition": "vibrant storytelling tradition",
      "die Skalden": "the skalds (Viking poets)",
      "mündlich überliefert": "passed on orally",
      "aufgeschrieben": "written down",
      "verdrängt": "displaced / pushed out",
      "missionierte": "proselytised / converted by force",
      "heidnisch": "pagan",
      "verehrten": "worshipped",
      "hinterließen": "left behind",
      "Plünderung": "plundering / pillaging",
      "Sklaverei": "slavery",
      "Handelsnetzwerke": "trade networks",
      "Spuren": "traces / marks",
      "Altnordischen": "Old Norse",
      "Überfälle": "raids / attacks",
      "seltener": "less frequent / rarer",
      "die Abenteuerlust": "the love of adventure",
    }
  },
  {
    id: 3,
    unlockDay: 3,
    period: "ca. 1060–1100 n. Chr.",
    title: "Die normannische Eroberung und der erste Kreuzzug",
    text: `Die zweite Hälfte des 11. Jahrhunderts war eine Zeit großer Veränderungen in Europa. Zwei Ereignisse aus dieser Zeit sind besonders wichtig: die normannische Eroberung Englands im Jahr 1066 und der Beginn der Kreuzzüge im Jahr 1096.

Im Jahr 1066 starb der englische König Eduard der Bekenner ohne einen klaren Nachfolger. Mehrere Männer beanspruchten den englischen Thron. Harold Godwinson, der mächtigste englische Adlige, wurde sofort nach Eduards Tod zum König gekrönt. Aber Wilhelm, der Herzog der Normandie, behauptete, dass Eduard ihm den Thron versprochen hatte. Er überquerte mit einer großen Armee den Ärmelkanal.

Die entscheidende Schlacht fand am 14. Oktober 1066 bei Hastings statt. Harold und seine Männer kämpften mutig, aber die normannischen Ritter zu Pferd und die normannischen Bogenschützen waren zu stark. Harold wurde getötet – nach einer bekannten Legende von einem Pfeil ins Auge. Wilhelm marschierte nach London und wurde am Weihnachtstag 1066 in der Westminster Abbey zum König von England gekrönt. Man nennt ihn seitdem „Wilhelm der Eroberer".

Die Auswirkungen dieser Eroberung auf England waren enorm. Die Normannen sprachen Französisch, und Französisch wurde zur Sprache des Hofes, der Kirche und der Verwaltung. Die englische Sprache – damals Altenglisch – wurde zur Sprache der einfachen Leute. Aus dieser Mischung von Altenglisch und Normannisch entstand langsam das Mittelenglische, die Vorstufe des modernen Englisch. Viele englische Wörter haben heute zwei Versionen: die altenglische und die normannisch-französische. „Cow" kommt aus dem Altenglischen, „beef" vom Normannischen – das Tier hatte einen englischen Namen, das Fleisch auf dem Tisch des Adligen einen französischen.

Wilhelm ließ eine detaillierte Volkszählung durchführen, das sogenannte „Domesday Book" von 1086. Darin wurden alle Ländereien und ihre Besitzer verzeichnet. Es ist eines der wichtigsten historischen Dokumente Englands und zeigt, wie gründlich die Normannen das Land kontrollierten.

Während diese Veränderungen in England stattfanden, gab es auch in Deutschland großen Streit. Der sogenannte „Investiturstreit" spaltete Europa. Der Konflikt drehte sich um die Frage: Wer hatte das Recht, Bischöfe und Äbte zu ernennen – der Papst oder der Kaiser? Der deutsche Kaiser Heinrich IV. und Papst Gregor VII. stritten heftig darüber. Im Jahr 1076 exkommunizierte der Papst den Kaiser – das bedeutete, dass Heinrich aus der Kirche ausgestoßen wurde und seine Untertanen ihm nicht mehr gehorchen mussten. Um dieses Urteil rückgängig zu machen, musste Heinrich im Winter 1077 barfuß im Schnee vor der Burg in Canossa auf die Absolution des Papstes warten. Diese Szene ist eines der bekanntesten Bilder des Mittelalters und symbolisiert die Macht der Kirche über weltliche Herrscher.

Das andere große Ereignis dieser Zeit waren die Kreuzzüge. Im Jahr 1071 hatten die seldschukischen Türken Jerusalem und große Teile Kleinasiens erobert. Die christlichen Pilger, die nach Jerusalem reisen wollten, konnten das jetzt nicht mehr sicher tun. Der byzantinische Kaiser schrieb an Papst Urban II. und bat um Hilfe.

Im November 1095 hielt Papst Urban II. in der Stadt Clermont in Frankreich eine historische Rede. Er beschrieb die Leiden der Christen im Heiligen Land und rief die Ritter Europas auf, nach Jerusalem zu ziehen und die Stadt zu befreien. Dem Papst zufolge würden alle, die an diesem heiligen Krieg teilnähmen und dabei sterben würden, sofort in den Himmel kommen. Die Reaktion der Menge war überwältigend. Tausende riefen „Gott will es!" – auf Lateinisch „Deus vult".

Im Jahr 1096 machten sich mehrere große Armeen auf den Weg nach Jerusalem. Es war ein langer und gefährlicher Weg von mindestens dreitausend Kilometern. Unterwegs litten die Kreuzfahrer unter Hunger, Durst, Krankheiten und feindlichen Angriffen. Viele starben, noch bevor sie Kleinasien erreichten. Auf dem Weg durch Europa griffen manche Kreuzfahrer jüdische Gemeinden an – ein dunkles Kapitel der Kreuzzugsgeschichte.

Trotz aller Schwierigkeiten erreichten die Hauptarmeen Kleinasien und dann Syrien. Im Juni 1099 standen sie vor Jerusalem. Die Stadt war gut befestigt und gut verteidigt. Die Belagerung dauerte fünf Wochen. Am 15. Juli 1099 brachen die Kreuzfahrer durch die Stadtmauern. Was folgte, war ein Massaker. Die Bewohner der Stadt – Muslime, Juden und sogar einige orientalische Christen – wurden getötet. Zeitgenössische Berichte beschreiben schreckliche Szenen.

Die Kreuzfahrer gründeten in den eroberten Gebieten mehrere kleine Staaten, die man „Kreuzfahrerstaaten" nennt. Das wichtigste war das Königreich Jerusalem. Diese Staaten lagen mitten in einer feindlichen Umgebung und konnten sich nur durch ständige Unterstützung aus Europa halten. Die Kreuzzüge sollten noch Jahrhunderte weitergehen und die Beziehungen zwischen der christlichen und der muslimischen Welt dauerhaft prägen.`,
    translations: {
      "die Veränderungen": "the changes",
      "Ereignisse": "events",
      "der Nachfolger": "the successor",
      "beanspruchten": "claimed",
      "den Thron": "the throne",
      "der Adlige": "the nobleman",
      "gekrönt": "crowned",
      "behauptete": "claimed / asserted",
      "versprochen hatte": "had promised",
      "überquerte": "crossed",
      "der Ärmelkanal": "the English Channel",
      "entscheidende": "decisive",
      "die Schlacht": "the battle",
      "Bogenschützen": "archers",
      "die Legende": "the legend",
      "marschierte": "marched",
      "der Weihnachtstag": "Christmas Day",
      "die Auswirkungen": "the effects / impact",
      "enorm": "enormous",
      "die Verwaltung": "the administration",
      "Altenglisch": "Old English",
      "die Vorstufe": "the precursor / early form",
      "die Volkszählung": "the census",
      "Ländereien": "lands / estates",
      "verzeichnet": "recorded",
      "gründlich": "thoroughly",
      "der Investiturstreit": "the Investiture Controversy",
      "spaltete": "divided / split",
      "Äbte": "abbots",
      "heftig": "fiercely",
      "exkommunizierte": "excommunicated",
      "ausgestoßen": "expelled / cast out",
      "die Untertanen": "the subjects",
      "rückgängig zu machen": "to reverse / undo",
      "barfuß": "barefoot",
      "die Absolution": "absolution",
      "symbolisiert": "symbolises",
      "weltliche Herrscher": "secular rulers",
      "Pilger": "pilgrims",
      "bat um Hilfe": "asked for help",
      "die Leiden": "the sufferings",
      "befreien": "to liberate / free",
      "dem Papst zufolge": "according to the Pope",
      "teilnähmen": "would take part",
      "überwältigend": "overwhelming",
      "auf dem Weg": "on the way",
      "litten": "suffered",
      "jüdische Gemeinden": "Jewish communities",
      "ein dunkles Kapitel": "a dark chapter",
      "befestigt": "fortified",
      "die Belagerung": "the siege",
      "die Stadtmauern": "the city walls",
      "das Massaker": "the massacre",
      "die Bewohner": "the inhabitants / residents",
      "Zeitgenössische Berichte": "contemporary accounts",
      "die Kreuzfahrerstaaten": "the Crusader states",
      "feindlichen Umgebung": "hostile environment",
      "ständige Unterstützung": "constant support",
      "dauerhaft prägen": "to permanently shape",
    }
  },
  {
    id: 4,
    unlockDay: 4,
    period: "ca. 1200–1230 n. Chr.",
    title: "Dschingis Khan und die Entstehung des Mongolischen Reiches",
    text: `Am Anfang des 13. Jahrhunderts lebten die Mongolen als Nomaden in den weiten Steppen Zentralasiens. Sie waren in viele verschiedene Stämme aufgeteilt, die ständig miteinander kämpften. Es gab keine mongolische Nation, keine gemeinsame Regierung, keine Städte. Die Mongolen zogen mit ihren Herden von Pferden, Schafen und Rindern durch die Steppe und lebten in runden Zelten, den sogenannten „Jurten".

In diese Welt wurde Temüdschin geboren, wahrscheinlich um das Jahr 1162. Seine Kindheit war schwer. Als er etwa neun Jahre alt war, wurde sein Vater vergiftet. Die Familie verarmte und lebte in großer Not. Temüdschin wurde sogar eine Zeit lang versklavt. Aber er war klug, zäh und ein natürlicher Anführer. Er sammelte Gefolgsleute um sich und begann, seinen Einfluss auszubauen.

Durch eine Kombination aus militärischer Stärke, kluger Politik und strategischen Heiraten gelang es Temüdschin, einen Stamm nach dem anderen unter seine Kontrolle zu bringen. Im Jahr 1206 trafen sich alle Stammesführer der Mongolei bei einem großen Treffen, dem „Kuriltai". Sie erkannten Temüdschin als ihren obersten Herrscher an und gaben ihm den Titel „Dschingis Khan" – was so viel bedeutet wie „universeller Herrscher" oder „ozeanischer Herrscher". Von diesem Moment an hörten die Mongolen auf, untereinander zu kämpfen, und richteten ihre Energie nach außen.

Die mongolische Armee war eine der effizientesten Kampfmaschinen, die die Welt je gesehen hatte. Jeder Krieger war ein erfahrener Reiter und Bogenschütze. Auf dem Pferd konnten mongolische Krieger in vollem Galopp rückwärts schießen – eine Fähigkeit, die ihre Feinde in Erstaunen versetzte. Die Armee war in Zehner-Einheiten organisiert: zehn Männer, hundert Männer, tausend Männer, zehntausend Männer. Diese Organisation ermöglichte schnelle und präzise Befehle auf dem Schlachtfeld.

Dschingis Khan war auch ein geschickter Stratege, der psychologische Kriegsführung einsetzte. Städten und Völkern, die sich friedlich ergaben, wurde Gnade gezeigt. Wer sich widersetzte, musste mit grausamer Vernichtung rechnen. Diese Politik funktionierte: viele Städte öffneten ihre Tore, ohne zu kämpfen, einfach weil sie Angst vor den Mongolen hatten.

Die ersten großen Feldzüge gingen nach China. Das nördliche China wurde damals von den Jurchen-Jin regiert. Dschingis Khan begann seinen Angriff auf China im Jahr 1211. Die Chinesische Mauer – die größte Befestigung der Welt – konnte die Mongolen nicht aufhalten. Sie fanden Wege um sie herum oder durch sie hindurch. Im Jahr 1215 fiel die Jin-Hauptstadt Zhongdu, das heutige Peking. Die Mongolen plünderten die Stadt und brannten Teile davon nieder.

Gleichzeitig expandierten die Mongolen nach Westen. Das mächtige Khwarezmische Reich, das große Teile des heutigen Iran, Usbekistans und Afghanistans umfasste, machte den Fehler, mongolische Händler zu töten und mongolische Botschafter zu ermorden. Das war ein schwerer Fehler. Dschingis Khan sah das als persönliche Beleidigung und als Grund für Krieg. Er schickte eine riesige Armee nach Westen. Die Städte Samarkand, Buchara und andere Zentren der islamischen Hochkultur wurden zerstört. Hunderttausende Menschen starben.

Dschingis Khan sandte auch zwei Generäle – Jebe und Subutai – mit einer Armee auf eine Erkundungsexpedition weit nach Westen. Diese Armee durchquerte Persien, den Kaukasus und die russischen Steppen. Sie besiegten die Rus-Fürsten in einer großen Schlacht am Fluss Kalka im Jahr 1223. Dann zogen sie sich zurück, da sie nur erkunden und nicht erobern sollten. Aber die Nachrichten von ihren Siegen verbreiteten sich weit und ließen Europa zittern.

Im Jahr 1227 starb Dschingis Khan, wahrscheinlich nach einem Sturz vom Pferd oder wegen einer Krankheit. Er wurde in der Mongolei begraben, aber sein Grab wurde absichtlich geheim gehalten. Bis heute weiß niemand genau, wo er liegt. Vor seinem Tod hatte er sein riesiges Reich unter seinen Söhnen aufgeteilt. Diese Söhne und später seine Enkel setzten die Eroberungen fort und bauten das Reich weiter aus.

Das Mongolische Reich hatte unter Dschingis Khan und seinen Nachfolgern tiefgreifende Auswirkungen auf die Welt. Auf der negativen Seite: die Zerstörung war enorm. Ganze Städte wurden dem Erdboden gleichgemacht. Blühende Landschaften wurden verwüstet. Bewässerungssysteme, die seit Jahrhunderten funktionierten, wurden zerstört und nie wieder aufgebaut. Manche Historiker schätzen, dass die Mongolen-Invasionen die Bevölkerung Asiens um Jahrzehnte zurückwarfen.

Auf der positiven Seite: das vereinte Mongolische Reich ermöglichte die „Pax Mongolica" – den mongolischen Frieden. Innerhalb des riesigen Reiches konnten Händler, Diplomaten und Reisende relativ sicher von China nach Europa reisen. Die Seidenstraße erlebte eine neue Blütezeit. Marco Polo reiste später unter diesen Bedingungen. Ideen, Technologien und Krankheiten – darunter wahrscheinlich die Pest – reisten ebenfalls entlang dieser Routen.`,
    translations: {
      "Nomaden": "nomads",
      "die weiten Steppen": "the vast steppes",
      "aufgeteilt": "divided",
      "Stämme": "tribes",
      "Herden": "herds",
      "Jurten": "yurts",
      "vergiftet": "poisoned",
      "verarmte": "became impoverished",
      "in großer Not": "in great hardship",
      "versklavt": "enslaved",
      "zäh": "tough / tenacious",
      "natürlicher Anführer": "natural leader",
      "Gefolgsleute": "followers",
      "auszubauen": "to expand / build up",
      "strategischen Heiraten": "strategic marriages",
      "gelang es": "he succeeded in",
      "Stammesführer": "tribal leaders",
      "erkannten an": "recognised / acknowledged",
      "obersten Herrscher": "supreme ruler",
      "richteten ihre Energie nach außen": "directed their energy outward",
      "erfahrener Reiter": "experienced rider",
      "in vollem Galopp": "at full gallop",
      "rückwärts": "backwards",
      "die Fähigkeit": "the ability / skill",
      "in Erstaunen versetzte": "astonished",
      "präzise Befehle": "precise orders",
      "das Schlachtfeld": "the battlefield",
      "geschickter Stratege": "skilled strategist",
      "psychologische Kriegsführung": "psychological warfare",
      "sich ergaben": "surrendered",
      "Gnade": "mercy",
      "sich widersetzte": "resisted",
      "grausamer Vernichtung": "brutal destruction",
      "Feldzüge": "campaigns / military expeditions",
      "die Befestigung": "the fortification",
      "aufhalten": "to stop / halt",
      "plünderten": "plundered / looted",
      "niederbrannten": "burned down",
      "expandierten": "expanded",
      "umfasste": "encompassed / covered",
      "die Beleidigung": "the insult",
      "zerstört": "destroyed",
      "Erkundungsexpedition": "reconnaissance expedition",
      "durchquerte": "crossed / traversed",
      "besiegten": "defeated",
      "zittern": "to tremble",
      "absichtlich geheim gehalten": "deliberately kept secret",
      "tiefgreifende Auswirkungen": "profound effects",
      "dem Erdboden gleichgemacht": "razed to the ground",
      "verwüstet": "devastated",
      "Bewässerungssysteme": "irrigation systems",
      "zurückwarfen": "set back",
      "ermöglichte": "made possible",
      "die Blütezeit": "the golden age / heyday",
      "Bedingungen": "conditions",
    }
  },
  {
    id: 5,
    unlockDay: 5,
    period: "ca. 1347–1353 n. Chr.",
    title: "Der Schwarze Tod: Die große Pest",
    text: `In der Mitte des 14. Jahrhunderts erlebte Europa die schlimmste Katastrophe seiner Geschichte. Zwischen 1347 und 1353 tötete die Pest – der „Schwarze Tod" – zwischen einem Drittel und der Hälfte der gesamten europäischen Bevölkerung. Das waren ungefähr fünfundzwanzig Millionen Menschen. In manchen Städten und Regionen starb sogar die Mehrheit der Bewohner. Es war eine humanitäre Katastrophe, die keine Generation zuvor erlebt hatte und die das Leben in Europa für immer verändern sollte.

Die Pest war keine neue Krankheit. Sie hatte schon im 6. Jahrhundert unter Kaiser Justinian Europa heimgesucht. Aber die mittelalterliche Pest war besonders virulent. Die Krankheit wird durch das Bakterium Yersinia pestis verursacht. Sie lebt in Flöhen, die auf Ratten und anderen Nagetieren leben. Wenn die Ratten sterben, suchen die Flöhe neue Wirte – und das können Menschen sein. Ein Flohbiss reicht, um die Pest zu übertragen.

Die Pest begann wahrscheinlich in Zentralasien und folgte den Handelswegen nach Westen. Im Jahr 1347 kamen infizierte Schiffe aus dem Schwarzen Meer in Sizilien und Genua an. Von dort verbreitete sie sich schnell durch Italien, Frankreich, Spanien und schließlich durch ganz Europa. Im Jahr 1349 erreichte sie Deutschland und England. 1350 traf sie Skandinavien. Kaum eine Region blieb verschont.

Die Symptome der Pest waren schrecklich und gut dokumentiert. Zuerst kam hohes Fieber mit Schüttelfrost. Der Körper wurde schwach. Dann bildeten sich die charakteristischen Beulen – geschwollene Lymphknoten – in der Leiste, unter den Armen und am Hals. Diese Beulen konnten so groß wie ein Apfel werden. Sie wurden schwarz und rochen übel. Danach kamen schwarze Flecken auf der Haut, verursacht durch innere Blutungen. Viele Kranke starben innerhalb von zwei bis fünf Tagen nach den ersten Symptomen. Die Überlebenschance war gering. Bei der besonders tödlichen Lungenpest, die durch die Luft übertragen wird, überlebte fast niemand.

Die psychologische Wirkung auf die Überlebenden war kaum zu beschreiben. Man sah, wie Nachbarn, Freunde und Familienmitglieder innerhalb von Tagen starben. Es gab nicht genug Priester, um die Sterbenden zu begleiten. Es gab nicht genug Totengräber, um die Toten zu begraben. In manchen Städten wurden die Leichen einfach auf die Straße geworfen. Massengräber wurden gegraben, in die man Dutzende oder Hunderte von Leichen warf. In Florenz, einer der größten Städte Europas, starben innerhalb weniger Monate mindestens sechzigtausend Menschen – mehr als die Hälfte der Stadtbevölkerung.

Der florentinische Schriftsteller Giovanni Boccaccio erlebte die Pest und beschrieb sie in seiner Einleitung zum „Decameron". Er schrieb, wie die gesellschaftliche Ordnung zusammenbrach. Manche Menschen versuchten, die Kranken zu meiden und alle sozialen Kontakte zu vermeiden. Andere dachten, dass es sowieso keinen Sinn hatte und lebten in wilder Freude, als ob der nächste Tag ihr letzter sein könnte. Familien flohen und ließen ihre kranken Angehörigen zurück.

Die Kirche hatte keine Erklärung für die Pest und keine Heilung. Viele Menschen glaubten, dass Gott die Menschheit für ihre Sünden bestrafte. Priester flohen aus ihren Gemeinden oder starben selbst. Der Papst in Avignon blieb in seinem Zimmer, umgeben von brennenden Feuern, die angeblich die Luft reinigen sollten. Theologen stritten darüber, warum Gott so etwas zuließ.

Manche Menschen reagierten mit religiösem Fanatismus. Die „Flagellanten" – Büßer, die sich selbst öffentlich geißelten – zogen in großen Gruppen durch die Städte. Sie glaubten, dass körperliche Selbstbestrafung Gott gnädig stimmen würde. Der Papst verbot schließlich die Flagellantenbewegung, aber sie hatte schon Hunderttausende von Menschen in ganz Europa bewegt.

Eine der dunkelsten Folgen der Pest war die Verfolgung der jüdischen Bevölkerung. Juden wurden in vielen Städten beschuldigt, die Brunnen vergiftet zu haben. Das war völlig falsch und irrational – die Pest traf jüdische Gemeinden genauso hart wie christliche. Aber in Zeiten der Panik suchen Menschen nach Sündenböcken. In Straßburg, Basel und vielen anderen Städten wurden jüdische Gemeinden massakriert oder vertrieben. Diese Pogrome waren Teil einer langen Geschichte des Antisemitismus in Europa.

Die Überlebenden mussten eine veränderte Welt aufbauen. Die wirtschaftlichen Auswirkungen der Pest waren tiefgreifend. Es gab plötzlich viel weniger Arbeiter, aber genauso viel Land. Die Bauern, die überlebt hatten, konnten jetzt höhere Löhne verlangen. Landlords, die vorher die Macht hatten, mussten jetzt Kompromisse machen. Das feudale System, das auf der Kontrolle der Landlords über die Bauern basierte, begann zu bröckeln. In England führte dieser Prozess schließlich zu einem Bauernaufstand im Jahr 1381.

Die Pest kehrte in den folgenden Jahrhunderten immer wieder zurück – 1361, 1369, und weitere Male. Keine Epidemie war so schlimm wie die erste, aber die Pest blieb eine ständige Bedrohung bis ins 17. Jahrhundert. Europa erholte sich demografisch erst nach etwa hundert bis hundertfünfzig Jahren von der ersten Pest. Die Gesellschaft, die danach entstand, war in vielerlei Hinsicht anders: skeptischer gegenüber der Kirche, mehr auf das irdische Leben konzentriert und bereit, die alte Ordnung in Frage zu stellen. Manche Historiker sehen die Pest als einen der wichtigsten Auslöser für das Ende des Mittelalters und den Beginn der Neuzeit.`,
    translations: {
      "erlebte": "experienced",
      "die schlimmste": "the worst",
      "ein Drittel": "one third",
      "die Hälfte": "half",
      "die gesamte Bevölkerung": "the entire population",
      "ungefähr": "approximately",
      "die Mehrheit": "the majority",
      "humanitäre Katastrophe": "humanitarian catastrophe",
      "heimgesucht": "afflicted / visited",
      "das Bakterium": "the bacterium",
      "verursacht": "caused",
      "Flöhen": "fleas",
      "Nagetieren": "rodents",
      "Wirte": "hosts",
      "der Flohbiss": "the flea bite",
      "infizierte": "infected",
      "verbreitete sich": "spread",
      "schließlich": "finally / eventually",
      "verschont": "spared",
      "Schüttelfrost": "chills / shivering",
      "charakteristischen Beulen": "characteristic buboes",
      "geschwollene Lymphknoten": "swollen lymph nodes",
      "die Leiste": "the groin",
      "rochen übel": "smelled foul",
      "innere Blutungen": "internal bleeding",
      "die Überlebenschance": "the chance of survival",
      "die Lungenpest": "pneumonic plague",
      "die psychologische Wirkung": "the psychological effect",
      "kaum zu beschreiben": "hard to describe",
      "Familienmitglieder": "family members",
      "Totengräber": "gravediggers",
      "begraben": "to bury",
      "Massengräber": "mass graves",
      "Dutzende": "dozens",
      "Leichen": "corpses",
      "gesellschaftliche Ordnung": "social order",
      "zusammenbrach": "collapsed",
      "die Kranken": "the sick",
      "meiden": "to avoid",
      "als ob": "as if",
      "die Angehörigen": "the relatives",
      "Sünden": "sins",
      "bestrafte": "punished",
      "angeblich": "supposedly",
      "zuließ": "allowed / permitted",
      "Büßer": "penitents",
      "geißelten": "flagellated / whipped",
      "körperliche Selbstbestrafung": "physical self-punishment",
      "gnädig stimmen": "to appease",
      "Verfolgung": "persecution",
      "beschuldigt": "accused",
      "Brunnen vergiftet": "poisoned wells",
      "völlig falsch": "completely wrong",
      "Sündenböcke": "scapegoats",
      "vertrieben": "expelled / driven out",
      "Pogrome": "pogroms",
      "tiefgreifend": "profound / far-reaching",
      "Löhne verlangen": "to demand wages",
      "Kompromisse": "compromises",
      "basierte": "was based",
      "bröckeln": "to crumble",
      "der Bauernaufstand": "the Peasants' Revolt",
      "kehrte zurück": "returned",
      "die Bedrohung": "the threat",
      "erholte sich": "recovered",
      "demografisch": "demographically",
      "in vielerlei Hinsicht": "in many respects",
      "skeptischer": "more sceptical",
      "irdische": "earthly / worldly",
      "in Frage zu stellen": "to question",
      "der Auslöser": "the trigger",
      "die Neuzeit": "the modern age",
    }
  },
];
