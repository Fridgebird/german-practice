// Reader passages: ~500-1000 word texts in German (A2/B1 level)
// World history from 1000 AD, one passage per ~10-year period
// Each passage has an array of word/phrase translations for the popup feature
// unlockDay: the day number (1-100) when this passage becomes available

const READERS = [
  {
    id: 1,
    unlockDay: 1,
    period: "ca. 1000–1010 n. Chr.",
    title: "Das Jahr 1000: Die Welt am Jahrtausendwechsel",
    text: `Um das Jahr 1000 lebten die meisten Menschen in Europa als Bauern auf dem Land. Die Städte waren klein, und das Leben war oft schwer. In Deutschland und anderen Teilen Europas herrschte das Heilige Römische Reich. Der Kaiser war eine wichtige politische Figur.

Im Jahr 1000 machte der Wikinger Leif Eriksson eine wichtige Entdeckung. Er segelte von Grönland nach Westen und erreichte eine neue Küste. Diese Küste lag in Nordamerika, fast 500 Jahre bevor Kolumbus dorthin fuhr. Die Wikinger nannten dieses Land "Vinland", weil sie dort wilde Trauben fanden.

In China war die Song-Dynastie sehr mächtig. Die Chinesen hatten schon viele wichtige Erfindungen gemacht, zum Beispiel Papier, Buchdruck und Schießpulver. China war damals das technologisch fortschrittlichste Land der Welt.

Im islamischen Raum gab es viele große Städte wie Bagdad und Kairo. Arabische Wissenschaftler studierten Mathematik, Astronomie und Medizin. Sie übersetzten alte griechische Texte und entwickelten neue Ideen.

Das Byzantinische Reich in Konstantinopel war ebenfalls sehr reich und mächtig. Die byzantinische Kultur hatte großen Einfluss auf Osteuropa und Russland.

In Japan entwickelte sich eine elegante Hofkultur. Die Schriftstellerin Murasaki Shikibu schrieb "Die Geschichte vom Prinzen Genji" – einen der ersten Romane der Welt.

Das Leben der normalen Menschen war überall auf der Welt von Religion geprägt. Die meisten Menschen in Europa waren Christen. Sie glaubten, dass das Jahr 1000 vielleicht das Ende der Welt bedeuten könnte. Aber das Ende kam nicht, und das Leben ging weiter.`,
    translations: {
      "die meisten": "most",
      "Bauern": "farmers",
      "auf dem Land": "in the countryside",
      "herrschte": "ruled",
      "das Heilige Römische Reich": "the Holy Roman Empire",
      "der Kaiser": "the Emperor",
      "die Entdeckung": "the discovery",
      "segelte": "sailed",
      "erreichte": "reached",
      "die Küste": "the coast",
      "bevor": "before",
      "wilde Trauben": "wild grapes",
      "mächtig": "powerful",
      "die Erfindungen": "inventions",
      "Buchdruck": "printing press",
      "Schießpulver": "gunpowder",
      "fortschrittlichste": "most advanced",
      "übersetzten": "translated",
      "entwickelten": "developed",
      "ebenfalls": "also / likewise",
      "der Einfluss": "the influence",
      "die Hofkultur": "court culture",
      "einer der ersten Romane": "one of the first novels",
      "geprägt": "shaped / defined",
      "glaubten": "believed",
      "das Ende der Welt": "the end of the world",
      "könnte": "could / might",
    }
  },
  {
    id: 2,
    unlockDay: 2,
    period: "ca. 1010–1020 n. Chr.",
    title: "Die Wikinger und die Normannen",
    text: `In den ersten Jahrzehnten des 11. Jahrhunderts waren die Wikinger noch sehr aktiv in Europa. Sie kamen aus Skandinavien – aus Dänemark, Norwegen und Schweden – und fuhren auf ihren schnellen Schiffen durch die Meere Europas.

Die Wikinger waren nicht nur Krieger. Sie waren auch Händler und Entdecker. Viele Wikinger siedelten sich in anderen Ländern an. In Frankreich zum Beispiel lebten die "Normannen" – das Wort kommt von "Nordmänner". Diese Normannen sprachen inzwischen Französisch und hatten sich an die europäische Kultur angepasst.

In England gab es in dieser Zeit große Probleme. Der dänische König Sven Gabelbart hatte England fast vollständig erobert. Sein Sohn Knut der Große wurde später König von England, Dänemark und Norwegen gleichzeitig. Das war ein riesiges Reich für diese Zeit.

Auch in Russland spielten die Wikinger eine wichtige Rolle. Die "Waräger", wie die Wikinger in Russland genannt wurden, hatten schon im 9. Jahrhundert den Staat "Kiewer Rus" gegründet. Dieser Staat war der Vorläufer des modernen Russland und der Ukraine.

Im Mittelmeer kämpften verschiedene Mächte um die Kontrolle. Die Byzantiner, die Araber und neue Gruppen wie die Normannen stritten sich um Sizilien und Süditalien.

Das tägliche Leben der Menschen in Europa war durch die Jahreszeiten bestimmt. Im Frühling pflanzten die Bauern ihre Felder. Im Sommer pflegten sie die Ernte. Im Herbst ernteten sie das Getreide. Im Winter versuchten sie, die Kälte zu überleben. Es gab keine Heizung und keine modernen Medikamente. Viele Menschen starben jung.`,
    translations: {
      "die Jahrzehnte": "the decades",
      "das Jahrhundert": "the century",
      "die Krieger": "warriors",
      "die Händler": "merchants / traders",
      "die Entdecker": "explorers",
      "siedelten sich an": "settled",
      "inzwischen": "by then / meanwhile",
      "sich angepasst": "adapted",
      "hatte... erobert": "had conquered",
      "gleichzeitig": "at the same time",
      "riesig": "enormous / huge",
      "der Vorläufer": "the precursor / forerunner",
      "kämpften": "fought",
      "verschiedene": "various / different",
      "die Mächte": "the powers",
      "die Kontrolle": "control",
      "stritten sich": "disputed / quarrelled",
      "bestimmt": "determined / shaped",
      "pflanzten": "planted",
      "pflegten": "tended",
      "ernteten": "harvested",
      "das Getreide": "the grain / cereal",
      "zu überleben": "to survive",
      "die Heizung": "heating",
      "die Medikamente": "medicines",
      "starben": "died",
    }
  },
  {
    id: 3,
    unlockDay: 3,
    period: "ca. 1060–1100 n. Chr.",
    title: "Die Kreuzzüge beginnen",
    text: `Am Ende des 11. Jahrhunderts ereignete sich etwas sehr Wichtiges in der europäischen Geschichte: die Kreuzzüge begannen. Im Jahr 1095 hielt Papst Urban II. in Clermont, Frankreich, eine berühmte Rede. Er rief die Christen Europas auf, nach Jerusalem zu reisen und das Heilige Land von den muslimischen Herrschern zurückzuerobern.

Tausende von Menschen aus ganz Europa reagierten auf diesen Aufruf. Ritter, Bauern, Priester und Kaufleute – alle wollten an diesem heiligen Krieg teilnehmen. Der Weg nach Jerusalem war lang und gefährlich. Viele starben unterwegs an Krankheiten oder in Kämpfen.

Im Jahr 1066 hatte in England eine wichtige Veränderung stattgefunden: die normannische Eroberung. Wilhelm der Eroberer, ein normannischer Herzog aus Frankreich, besiegte den englischen König Harald in der Schlacht bei Hastings. Danach wurde England von den Normannen regiert. Die englische Sprache veränderte sich stark, weil viele französische Wörter ins Englische kamen.

In Deutschland gab es einen langen Streit zwischen dem Kaiser und dem Papst. Dieser Konflikt heißt der "Investiturstreit". Es ging darum, wer das Recht hatte, Bischöfe und andere Kirchenführer zu ernennen – der Kaiser oder der Papst. Dieser Streit zeigte, wie wichtig die Kirche in der mittelalterlichen Politik war.

Die erste Kreuzfahrerarmee erreichte Jerusalem im Jahr 1099. Nach einer langen Belagerung eroberten sie die Stadt. Es war ein brutaler Sieg. Heute erinnern wir uns an die Kreuzzüge als einen komplexen und oft gewaltsamen Teil der Geschichte.`,
    translations: {
      "ereignete sich": "occurred / happened",
      "die Kreuzzüge": "the Crusades",
      "hielt... eine Rede": "gave a speech",
      "rief... auf": "called upon",
      "zurückzuerobern": "to reconquer",
      "Tausende": "thousands",
      "reagierten": "responded",
      "der Aufruf": "the call / appeal",
      "Ritter": "knights",
      "Priester": "priests",
      "Kaufleute": "merchants",
      "teilnehmen": "to take part",
      "unterwegs": "on the way / en route",
      "die Veränderung": "the change",
      "stattgefunden": "taken place",
      "die Eroberung": "the conquest",
      "besiegte": "defeated",
      "die Schlacht": "the battle",
      "regiert": "ruled / governed",
      "der Streit": "the dispute / quarrel",
      "der Konflikt": "the conflict",
      "das Recht": "the right",
      "ernennen": "to appoint",
      "mittelalterlich": "medieval",
      "die Belagerung": "the siege",
      "gewaltsam": "violent",
    }
  },
  {
    id: 4,
    unlockDay: 4,
    period: "ca. 1200–1220 n. Chr.",
    title: "Dschingis Khan und das Mongolische Reich",
    text: `Im frühen 13. Jahrhundert entstand eines der größten Reiche in der Geschichte der Menschheit: das Mongolische Reich. Der Gründer war Temüdschin, der später den Titel "Dschingis Khan" annahm – das bedeutet "universeller Herrscher".

Dschingis Khan wuchs in den Steppen der Mongolei auf. Als junger Mann erlebte er große Schwierigkeiten: sein Vater wurde vergiftet, und seine Familie lebte in Armut. Aber er war klug, mutig und ein außergewöhnlicher Anführer. Er vereinigte die verschiedenen mongolischen Stämme unter seiner Herrschaft.

Die mongolische Armee war außergewöhnlich diszipliniert und beweglich. Die mongolischen Krieger kämpften zu Pferd und konnten sehr schnell über große Entfernungen reisen. Sie besiegten viele mächtige Feinde in China, Zentralasien und Persien.

Dschingis Khan nutzte auch kluge Taktiken. Er bot seinen Feinden an, sich friedlich zu ergeben. Wer sich ergab, wurde oft gut behandelt. Wer kämpfte und verlor, konnte mit brutalen Konsequenzen rechnen. Diese Strategie half ihm, sein Reich schnell zu vergrößern.

Das Mongolische Reich brachte auch einige positive Entwicklungen. Die sogenannte "Pax Mongolica" – der mongolische Frieden – ermöglichte den sicheren Handel entlang der Seidenstraße. Kaufleute konnten von China nach Europa reisen, ohne ständig überfallen zu werden.

In Europa hörte man von den Mongolen mit großer Angst. Man nannte sie "Tataren" oder "Heiden aus dem Osten". Im Jahr 1241 drangen mongolische Armeen bis nach Polen und Ungarn vor. Europa zitterte vor Angst. Dann, plötzlich, zogen sich die Mongolen zurück – wahrscheinlich wegen politischer Probleme in ihrer Heimat.`,
    translations: {
      "entstand": "arose / was formed",
      "die Menschheit": "humanity / mankind",
      "der Gründer": "the founder",
      "annahm": "adopted / took on",
      "der Herrscher": "the ruler",
      "wuchs auf": "grew up",
      "die Steppen": "the steppes",
      "erlebte": "experienced",
      "Schwierigkeiten": "difficulties",
      "vergiftet": "poisoned",
      "die Armut": "poverty",
      "mutig": "brave / courageous",
      "der Anführer": "the leader",
      "vereinigte": "united",
      "die Stämme": "the tribes",
      "diszipliniert": "disciplined",
      "beweglich": "mobile / agile",
      "zu Pferd": "on horseback",
      "die Entfernungen": "the distances",
      "sich ergeben": "to surrender",
      "behandelt": "treated",
      "Konsequenzen rechnen": "reckon with consequences",
      "vergrößern": "to expand / enlarge",
      "die Seidenstraße": "the Silk Road",
      "überfallen": "attacked / robbed",
      "drangen vor": "advanced / pushed into",
      "zitterte": "trembled",
      "zogen sich zurück": "withdrew",
    }
  },
  {
    id: 5,
    unlockDay: 5,
    period: "ca. 1340–1360 n. Chr.",
    title: "Der Schwarze Tod",
    text: `In der Mitte des 14. Jahrhunderts traf Europa eine der größten Katastrophen seiner Geschichte: die Pest, auch bekannt als der "Schwarze Tod". Diese schreckliche Krankheit kam aus Zentralasien und verbreitete sich entlang der Handelswege nach Westen.

Die Pest wurde von Flöhen auf Ratten übertragen. In den mittelalterlichen Städten gab es viele Ratten, und die Menschen wussten nicht, wie die Krankheit übertragen wurde. Die hygienischen Bedingungen in den Städten waren schlecht. Das machte die Ausbreitung der Pest noch schneller.

Die Symptome der Pest waren schrecklich. Zuerst bekamen die Kranken hohes Fieber. Dann bildeten sich schwarze Beulen an Hals, Achsel und Leiste. Viele Menschen starben innerhalb weniger Tage nach der Ansteckung. Die Sterblichkeitsrate war extrem hoch.

Zwischen 1347 und 1353 starb ungefähr ein Drittel der europäischen Bevölkerung an der Pest – das waren etwa 25 Millionen Menschen. In manchen Städten starben bis zu zwei Drittel der Einwohner. Die überlebenden Menschen versuchten, die Toten zu begraben, aber es war kaum möglich. In manchen Orten wurden die Toten einfach in Massengräber geworfen.

Die Pest hatte tiefe gesellschaftliche Konsequenzen. Viele Dörfer wurden komplett verlassen. Die Kirche verlor an Ansehen, weil die Priester die Menschen nicht retten konnten. Manche Menschen reagierten mit religiösem Fanatismus. Die sogenannten "Flagellanten" zogen durch die Städte und schlugen sich selbst, um Gott um Vergebung zu bitten.

Auf der anderen Seite führte die Pest auch zu positiven Veränderungen. Da es weniger Arbeiter gab, konnten die überlebenden Bauern höhere Löhne verlangen. Das schwächte langsam das feudale System.`,
    translations: {
      "traf": "struck / hit",
      "die Katastrophen": "the catastrophes",
      "die Pest": "the plague",
      "bekannt als": "known as",
      "schrecklich": "terrible / horrifying",
      "verbreitete sich": "spread",
      "die Handelswege": "the trade routes",
      "Flöhe": "fleas",
      "Ratten": "rats",
      "übertragen": "transmitted",
      "hygienische Bedingungen": "hygienic conditions",
      "die Ausbreitung": "the spread",
      "die Symptome": "the symptoms",
      "Beulen": "buboes / lumps",
      "die Ansteckung": "the infection / contagion",
      "die Sterblichkeitsrate": "the mortality rate",
      "ungefähr": "approximately",
      "ein Drittel": "one third",
      "die Bevölkerung": "the population",
      "die Einwohner": "the inhabitants",
      "begraben": "to bury",
      "kaum möglich": "barely possible",
      "Massengräber": "mass graves",
      "verlassen": "abandoned",
      "das Ansehen": "reputation / prestige",
      "die Vergebung": "forgiveness",
      "die Löhne": "the wages",
      "verlangen": "to demand",
      "schwächte": "weakened",
      "feudal": "feudal",
    }
  },
];
