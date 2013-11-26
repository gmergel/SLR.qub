var MINER = window.MINER || {};
$ = jQuery;

Array.prototype.unique = function () {
    var o = {}, i, l = this.length, r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};
 
var stemmer = function () {
    function h() { } function i() { console.log(Array.prototype.slice.call(arguments).join(" ")) } var j = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, k = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }; return function (a, l) {
        var d, b, g, c, f, e; e = l ? i : h; if (3 > a.length) return a;
        g = a.substr(0, 1); "y" == g && (a = g.toUpperCase() + a.substr(1)); c = /^(.+?)(ss|i)es$/; b = /^(.+?)([^s])s$/; c.test(a) ? (a = a.replace(c, "$1$2"), e("1a", c, a)) : b.test(a) && (a = a.replace(b, "$1$2"), e("1a", b, a)); c = /^(.+?)eed$/; b = /^(.+?)(ed|ing)$/; c.test(a) ? (b = c.exec(a), c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(b[1]) && (c = /.$/, a = a.replace(c, ""), e("1b", c, a))) : b.test(a) && (b = b.exec(a), d = b[1], b = /^([^aeiou][^aeiouy]*)?[aeiouy]/, b.test(d) && (a = d, e("1b", b, a), b = /(at|bl|iz)$/, f = /([^aeiouylsz])\1$/, d = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,
        b.test(a) ? (a += "e", e("1b", b, a)) : f.test(a) ? (c = /.$/, a = a.replace(c, ""), e("1b", f, a)) : d.test(a) && (a += "e", e("1b", d, a)))); c = /^(.*[aeiouy].*)y$/; c.test(a) && (b = c.exec(a), d = b[1], a = d + "i", e("1c", c, a)); c = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/; c.test(a) && (b = c.exec(a), d = b[1], b = b[2], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d + j[b], e("2", c, a))); c = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        c.test(a) && (b = c.exec(a), d = b[1], b = b[2], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d + k[b], e("3", c, a))); c = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/; b = /^(.+?)(s|t)(ion)$/; c.test(a) ? (b = c.exec(a), d = b[1], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, c.test(d) && (a = d, e("4", c, a))) : b.test(a) && (b = b.exec(a), d = b[1] + b[2], b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,
        b.test(d) && (a = d, e("4", b, a))); c = /^(.+?)e$/; if (c.test(a) && (b = c.exec(a), d = b[1], c = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/, f = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, c.test(d) || b.test(d) && !f.test(d))) a = d, e("5", c, b, f, a); c = /ll$/; b = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/; c.test(a) && b.test(a) && (c = /.$/, a = a.replace(c, ""), e("5",
        c, b, a)); "y" == g && (a = g.toLowerCase() + a.substr(1)); return a
    }
}();

(function ($) {
    (function () {

        var $this = this;

        //static settings - do not change:
        $this.step = 159;
        $this.moveby = 2;
        $this.sit = 0;
        $this.heatmapwidth = 800;
        $this.heatmapwords = 10;
        $this.stopWords = ["a","able","about","above","abst","accordance","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","is","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasn't","way","we","wed","welcome","we'll","went","were","weren't","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","won't","words","world","would","wouldn't","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero"];
        $this.adjectives = ['aback','abaft','abandoned','abashed','aberrant','abhorrent','abiding','abject','ablaze','able','abnormal','aboard','aboriginal','abortive','abounding','abrasive','abrupt','absent','absorbed','absorbing','abstracted','absurd','abundant','abusive','acceptable','accessible','accidental','accurate','acid','acidic','acoustic','acrid','actually','adhoc','adamant','adaptable','addicted','adhesive','adjoining','adorable','adventurous','afraid','aggressive','agonizing','agreeable','ahead','ajar','alcoholic','alert','alike','alive','alleged','alluring','aloof','amazing','ambiguous','ambitiong>bad','barbarous','bashful','bawdy','beautiful','befitting','belligerent','beneficial','bent','berserk','best','better','bewildered','big','billowy','bite-sized','bitter','bizarre','black','black-and-white','bloody','blue','blue-eyed','blushing','boiling','boorish','bored','boring','bounc','cagey','calculating','callous','calm','capable','capricious','careful','careless','caring','cautious','ceaseless','certain','changeable','charming','cheap','cheerful','chemical','chief','childlike','chilly','chivalrous','chubby','chunky','clammy','classy','clean','clear','clever','cloistered','cloudy','closed','clumsy','cluttered','coherent','cold','colorful','colossal','combative','comfortable','common','complete','complex','concerned','condemned','confused','c','daffy','daily','damaged','damaging','damp','dangerous','dapper','dark','dashing','dazzling','dead','deadpan','deafening','dear','debonair','decisive','decorous','deep','deeply','defeated','defective','defiant','delicate','delicious','delightful','demonic','delirious','dependent','depressed','deranged','descriptive','deserted','detailed','determined','devilish','didactic','different','difficult','diligent','direful','dirty','disagreeable','disastrous','discreet','eager','early','earsplitting','earthy','easy','eatable','economic','educated','efficacious','efficient','eight','elastic','elated','elderly','electric','elegant','elfin','elite','embarrassed','eminent','empirical','empty','enchanted','enchanting','encouraging','endurable','energetic','enormous','entertaining','enthusiastic','envious','equable','equal','erect','fabulous','faded','faint','fair','faithful','fallacious','false','familiar','famous','fanatical','fancy','fantastic','far','far-flung','fascinated','fast','fat','faulty','fearful','fearless','feeble','feigned','female','fertile','festive','few','fierce','filthy','fine','finicky','first','five','fixed','flagrant','flaky','flashy','flat','flawless','flimsy','flippant','flowery','fluffy','fluttering','foamy','foolish','for','gabby','gainful','gamy','gaping','garrulous','gaudy','general','gentle','giant','giddy','gifted','gigantic','glamorous','gleaming','glib','glistening','glorious','glossy','godly','good','goofy','gorgeous','graceful','grandiose','grateful','gratis','gray','greasy','gre','habitual','half','hallowed','halting','handsome','handsomely','handy','hanging','hapless','happy','hard','hard-to-find','harmonious','harsh','hateful','heady','healthy','heartbreaking','heavenly','heavy','hellish','helpful','helpless','hesitant','hideous','high','highfalutin','high-pitched','hilarious','hissing','historical','holistic','hollow','icky','icy','idiotic','ignorant','ill','illegal','ill-fated','ill-informed','illustrious','imaginary','immense','imminent','impartial','imperfect','impolite','important','imported','impossible','incandescent','incompetent','inconclusive','industrious','incredible','inexpensive','infamous','innateb','jaded','jagged','jazzy','jealous','jittery','jobless','jolly','joyous','j','kaput','keen','kind','kindhearted','kindly','knotty','kno','labored','lackadaisical','lacking','lame','lamentable','languid','large','last','late','laughable','lavish','lazy','lean','learned','left','legal','lethal','level','lewd','light','like','likeable','limping','literate','little','lively','lively','living','lonely','long','macabre','macho','maddening','madly','magenta','magical','magnificent','majestic','makeshift','male','malicious','mammoth','maniacal','many','marked','massive','married','marvelous','material','materialistic','mature','mean','measly','meaty','medical','meek','mellow','melodic','melted','merciful','mere','messy','mighty','military','milky','m','naive','nappy','narrow','nasty','natural','naughty','nauseating','near','neat','nebulous','necessary','needless','needy','neighborly','nervous','new','next','nice','nifty','nimble','nine','nippy','noiseless','noisy','oafish','obedient','obeisant','obese','obnoxious','obscene','obsequious','observant','obsolete','obtainable','oceanic','odd','offbeat','old','old-fashioned','omniscient','one','onerous','open','opposite','optimal','orange','ordinary','organic','painful','painstaking','pale','paltry','panicky','panoramic','parallel','parched','parsimonious','past','pastoral','pathetic','peaceful','penitent','perfect','periodic','permissible','perpetual','petite','petite','phobic','physical','picayune','pink','piquant','placid','plain','plant','plastic','plausible','pleasant','plucky','pointless','poised','polite','political','poor','possessive','possible','powerful','precious','premium','pre','quack','quaint','quarrelsome','questionable','quick','quickest','qui','rabid','racial','ragged','rainy','rambunctious','rampant','rapid','rare','raspy','ratty','ready','real','rebel','receptive','recondite','red','redundant','reflective','regular','relieved','remarkable','reminiscent','repulsive','resolute','resonant','responsible','robust','rhetorical','rich','right','sable','sad','safe','salty','same','sassy','satisfying','savory','scandalous','scarce','scared','scary','scattered','scientific','scintillating','scrawny','screeching','second','second-hand','secret','secretive','sedate','seemly','selective','selfish','separate','serious','shaggy','shaky','shallow','sharp','shiny','shivering','shocking','short','shrill','shut','shy','sick','silent','silent','silky','silly','simple','simplistic','sincere','six','skillful','skinny','sleepy','slim','slimy','slippery','sloppy','slow','small','smart','smelly','smiling','smoggy','smooth','sneaky','snobbish','snotty','soft','soggy','solid','somber','sophisticated','sordid','sore','sore','sour','sparkling','special','spectacular','spicy','spiffy','spiky','spiritual','spiteful','splendid','spooky','spotless','spotted','spotty','taboo','tacit','tacky','talented','tall','tame','tan','tangible','tangy','tart','tasteful','tasteless','tasty','tawdry','tearful','tedious','teeny','teeny-tiny','telling','temporary','ten','tender','tense','tense','tenuous','terrible','terrific','tested','testy','thankful','therapeutic','thick','thin','thinkable','third','thirsty','thirsty','thoughtful','thoughtless','threatening','three','ubiquitous','ugliest','ugly','ultra','unable','unaccountable','unadvised','unarmed','unbecoming','unbiased','uncovered','understood','undesirable','unequal','unequaled','uneven','unhealthy','uninterested','unique','unkempt','unknown','unnatural','unruly','unsightly','unsuitable','unti','vacuous','vagabond','vague','valuable','various','vast','vengeful','venomous','verdant','versed','victorious','vigorous','violent','wacky','waggish','waiting','wakeful','wandering','wanting','warlike','warm','wary','wasteful','watery','weak','wealthy','weary','well-groomed','well-made','well-off','well-to-do','wet','whimsical','whispering','white','whole','wholesale','wicked','wide','wide-eyed','wiggly','wild','willing','xenophobic','yellow','yielding','zany','zealous','zesty'];

        $this.STYLES = {
            GENERAL: 'label{line-height:1.9em}',
            BOXWRAPPER: '#boxWrapper{width: 100%;position: absolute;top: 0;text-align: center;font-family:Trebuchet MS; font-size: 13px}',
            BOX: '#box{width: 960px;background-color: white;padding-top: 20px;margin: 70px auto;text-align: center;border-radius: 6px;box-shadow: 2px 2px 12px #ddd, -2px -2px 12px #ddd;}',
            DOCSLI: '#docsBox li{display: inline-block;margin: 20px 30px auto;text-align: center;width: 100px;vertical-align: top;}',
            DOC: '.doc:hover{cursor:pointer;border: 1px solid #aaa}.doc{display: block;border-radius: 4px;background-color: white;box-shadow: 0px 2px 2px 0px #F2F2F2;color: #666;line-height: 23px;height: 120px;border: 1px solid #eee;overflow: hidden;}.doc.good{border-bottom:6px solid #7ab800}.doc.bad{border-bottom:6px solid #DC5034}',
            DOCREF: '.docref{font-size: 13px;height: 15px;width: auto;color: #777;}',
            DOCSBOX: '#docsBox{-webkit-transition: margin-left 0.8s ease-out;width: 99000px;text-align: left;height: 180px;padding: 0;margin: 0 0 0 -6px;}',
            DOCSWRAPPER: '#docsWrapper{float:left;overflow: hidden;margin: 20px 10px;width:781px;padding: 0;border-bottom: 1px solid #eee;}',
            WORDS: '#termsBox .queryWord{cursor:pointer;}.queryWord{font-family: Consolas;text-align:center; padding: 3px;border: 1px solid #fff; border-radius: 5px;margin-right: 7px;display: inline-block;margin-bottom: 3px;}',
            BUTTONS: '.searchbtn{float: right;margin-right: 20px;display: inline;margin-top: 0 !important;}.btn{cursor:pointer;display:inline-block;*display:inline;*zoom:1;padding:4px 12px;margin-bottom:0;font-size:14px;line-height:20px;text-align:center;vertical-align:middle;border:1px solid #ccc;*border:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;*margin-left:.3em;box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)}.btn:hover{text-decoration:underline}.btn:focus,.btn.disabled,.btn[disabled]{*background-color:#d9d9d9}.btn:first-child{*margin-left:0}.btn:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.btn.disabled,.btn[disabled]{cursor:default;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.btn{text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);}'+
            '.btn-carousel{padding: 60px 27px;border-radius: 6px;margin: 50px 9px 0px;color: white;float:left;box-shadow: 1px 1px 0px 0px #ccc;}.btn-carousel:active{box-shadow: 0 0}.btn-icon{padding: 0 2px 0 6px;background: none;border: 0;-webkit-border-radius: 0;box-shadow: none;text-shadow: none;}',
            FWORDS: '.fwords{display:none}',
            QUERIESBOX: '#queriesBox{text-align:left;box-shadow: 0px 3px 6px -1px #f2f2f2}#stringdeBusca{cursor:text;margin-right: 100px;margin-bottom: 20px;padding-left: 90px;}',
            TITLE: '#title{height: 30px;font-size: 22px;margin-bottom: 10px;text-align: center; text-decoration: underline;font-style: italic;}',
            CAROUSELBOX: '#queryBox{margin-bottom: 30px;}#carouselBox{clear: both;}',
            SUGGBOX: '#suggBox{clear:both;height: 58px;overflow: hidden;}',
            OPTBOX: '#optionsBox{height: 100px;margin-top: 12px;}#optionsBox input, #optionsBox label{cursor: pointer}',
            LABELS: '.label{font-family: monospace; font-size: 12px;margin-bottom: 10px;color: white;padding: 3px;float: left;margin-right: 20px;width: 65px;text-align: left;}',
            HEATMAP: '.headcell{background-color:white;visibility:hidden;}.smallerFont{font-size: 0.7em; line-height: 9px; display:table-cell; vertical-align: middle; width: 90px;}.heatmapWordiv{padding-right: 10px;height:20px}#heatmapWords{text-align:right;width: 90px;position: absolute;background-color: white;height: 200px;z-index: 5;}#heatmapBox{padding-bottom:40px;clear: both;width: 871px;margin: 20px 10px 20px 0px;}#heatmapTable{clear:both;-webkit-transition: margin-left 0.8s ease-out;margin-left: 90px;}.heatcell{cursor: pointer; color:white;opacity:0;height:20px}',
            OVERLAY: '#overlay{-webkit-transition: margin-left 0.8s ease-out;visibility:hidden;border: 2px solid #bbb;position: absolute;width: 164px;margin-left: 86px;z-index: 9;opacity: 0.7;margin-top: -5px;height: 224px;border-radius: 7px;}',
            COLORS: '.teal{background-color: #42AEAF;color:white}.teal-stroke{color: #42AEAF}.blue-stroke{border: 1px solid #007db8}.blue-text{color: #007db8;}.grey-stroke{border: 1px solid #aaa}.grey-text{color: #aaa}.yellow{background-color: #F2AF00}.orange{background-color: #EE6411;color:white}.grey{color:white;background-color: #aaa}.green{color:white;background-color: #7ab800;}.green_stroke { padding: 30px 0px;border: 2px solid #7ab800;}.red {color:white;background-color: #DC5034;}.red_stroke {padding: 30px 0px;border: 2px solid #DC5034;}.blue {color:white;background-color: #0085c3;}.blue_stroke {padding: 30px 0px;border: 2px solid #0085c3;}.navyblue {color:white;background-color: #003758;}',
            INPUTS: '.queryWord:focus{background-color: white;outline:none;}#corteopt{width:24px;width: 24px;text-align: center;background-color: white;vertical-align: middle;margin: 0;margin-left: 3px;}'
        };

        $this.CONTROLS = {
            next: $('<a id="nextBtn" class="btn-carousel blue">></a>'),
            prev: $('<a id="prevBtn" class="btn-carousel blue"><</a>')
        }

        $this.CONTROLS.next.bind('click', function () {
            $this.moveheatmap(1);
        });
        $this.CONTROLS.prev.bind('click', function () {
            $this.moveheatmap(-1);
        });

        /*** FUNCTIONS ***/
        $this.isStopWord = function(word){
            for (var i=0, len = $this.stopWords.length; i < len; i++)
                if ($this.stopWords[i].toLowerCase() === word) return true;
            return false;
        }

        $this.isAdjective = function(word){
            for (var i=0, len = $this.adjectives.length; i < len; i++)
                if ($this.adjectives[i].toLowerCase() === word) return true;
            return false;
        }

        $this.moveheatmap = function(steps){
            if(($this.sit <= 0 && steps < 0) || ($this.sit >= (Math.round(($this.abs.length-5)/$this.moveby)) && steps > 0)) return;
            steps = Math.min(steps,(Math.round(($this.abs.length-5)/$this.moveby))-$this.sit);

            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'), 10) - (steps * $this.moveby * $this.step) + 'px');
            $('#overlay').css('margin-left', parseInt($('#overlay').css('margin-left'), 10) + (steps * $this.moveby * $this.heatmapcellstep) + 'px');
            $this.sit += steps;
            $this.m.pagina = $this.m.pagina+steps;
        }

        $this.init = function () {

            //include CSSs:
            var styles = document.createElement('style');

            for (var style in $this.STYLES) {
                styles.innerHTML += $this.STYLES[style];
            }
            $("head").append(styles);

            //blur page
            $('#LayoutWrapper').css('opacity', 0.2);

            $this.setupandgo(false);
            $this.bindTrackings();        
        }

        $this.setupandgo = function(reset){

            //if($this.box) $this.box.innerHTML = '';

            if($this.suggBox) $this.suggBox.innerHTML = '';
            //if($this.carouselBox) $this.carouselBox.innerHTML = '';
            //if($this.heatmapBox) $this.heatmapBox.innerHTML = '';
            $(".heatcell").css('opacity',0);
            $(".heatmapWordiv").each(function(){ this.innerText = ''; });

            //dynamic settings - can be changed as options
            $this.abs = [];
            $this.df = new Array();
            $this.newquery = new Array();
            $this.nqpositions = new Array();
            $this.nonstem = new Array();
            $this.corte = ($('#corteopt').length>0)? parseFloat($('#corteopt').val()) : 1;
            $this.tfcalc = ($('input[name="tfcalc"]:checked').length>0)? $('input[name="tfcalc"]:checked').attr('id').substr(-1) : 1;
            $this.maxtfidf = 0;
            $this.splitSpace = ($("#splitspacesopt").length > 0)? !$("#splitspacesopt")[0].checked : true;

            //start
            //get abstracts
            $this.getAbs();
            //count words
            $this.countWords();
            $this.TfIdf();
            //prepare box layout elements
            $this.getQuery();
            $this.createBox();

            if(!localStorage.goods) localStorage.goods = '';
            if(!localStorage.bads) localStorage.bads = '';
            $this.goods =  (localStorage.goods != '')? localStorage.goods.split(',').map(function(i){ return $this.findAbs(i) || undefined; }) : new Array();
            $this.bads = (localStorage.bads != '')? localStorage.bads.split(',').map(function(i){ return $this.findAbs(i) || undefined; }) : new Array();

            for(var idx = $this.goods.length; idx >= 0; idx--){
                if($this.goods.hasOwnProperty(idx) && !$this.goods[idx]) $this.goods.splice(idx,1);
            }

            for(var idx = $this.bads.length; idx >= 0; idx--){
                if($this.bads.hasOwnProperty(idx) && !$this.bads[idx]) $this.bads.splice(idx,1);
            }


            $this.optionBinds();
            $this.updateNQ();
            //$(".doc.good").each(function(){ $this.flipDoc(this,true); $this.flipDoc(this,true); });
            //$(".doc.bad").each(function(){ $this.flipDoc(this,true); });
            $this.setAnalytics();

            for (var d in $this.goods){
                if ($this.goods.hasOwnProperty(d)){
                    var doc = $('#'+$this.goods[d])[0];
                    if(reset) $this.flipDoc(doc,true);
                    if(reset) $this.flipDoc(doc,true);
                    $this.flipDoc(doc,false);
                }
            }
            for (var d in $this.bads){
                if ($this.bads.hasOwnProperty(d)){
                    var doc = $('#'+$this.bads[d])[0];
                    if(reset) $this.flipDoc(doc,true);
                    $this.flipDoc(doc,false);
                    $this.flipDoc(doc,false);
                }
            }
             
            console.warn("done");
        }

        $this.setAnalytics = function () {
            //analytics
            $this.m = new Object();
            $this.m.pagina = 1;
            $this.m.totalAbs = $this.abs.length;

            $this.m.maxtfidf = $this.maxtfidf.toFixed(2);
            switch($this.tfcalc){
                case '1':
                default:
                    $this.m.formulatf = 'Natural TF';
                break;
                case '2':
                    $this.m.formulatf = 'Log TF';
                break;
                case '3':
                    $this.m.formulatf = 'Bool TF';
                break;
            }
            $this.m.corte = $this.corte;
            $this.m.termosSimples = $this.splitSpace;

            $this.m.stringOriginal = $this.query.join(' ');

            $this.m.goods = null;
            $this.m.bads = null;
        }

        // $this.analyticsParams = function(){
        //     var metricstring = '';
        //     for(metric in $this.m){
        //         metricstring += metric+':'+$this.m[metric];
        //     }
        //     return metricstring;
        // }

        $this.getAbs = function () {
            $(".abstract").each(function (key) {

                var words = [];
                $this.abs[key] = $(this);
                $this.abs[key].id = 'doc'+key;
                $this.abs[key].unique = ($('a[href^="http://dx.doi.org/"')[key])? $('a[href^="http://dx.doi.org/"')[key].innerText : null;
                $this.abs[key].title = $($this.abs[key]).parents('.detail').find('h3').text().trim();
                $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g, '').replace(/\s+/g, ' ').toLowerCase();
                var txt = $this.abs[key].txt;

                $this.stopWords.each(function(value){
                    var word = '\\b'+value+'\\b';
                    var regex = new RegExp(word,'ig');
                    txt = txt.replace(regex,'&&&');
                })
                var splitspace = /\s|[0-9]+|\[|\]|\-|\→|\*|\"|\“|\”|\,|\.|\;|\-|\»|\/|\\|\(|\)|\:|\'|'s|&&&/ig;
                var splitnospace = /[0-9]+|\[|\]|\-|\→|\*|\"|\“|\”|\,|\.|\;|\-|\»|\/|\\|\(|\)|\:|\'|'s|&&&/ig;
                var regextouse = ($this.splitSpace)? splitspace : splitnospace;
                words = txt.split(regextouse)
                        .filter(function (value) { 
                        value = " "+value.trim();
                            return value !== " " && value !== "" && value !== null && !$this.isStopWord(value.trim().toLowerCase()) && !$this.isAdjective(value.trim().toLowerCase());
                        });
                
                for (var wordkey in words)
                    if (words.hasOwnProperty(wordkey)){
                        var splitted = words[wordkey].split(' ');
                        var finalw = '';
                        splitted.each(function(w){
                            if(w !== '' && !splitted.hasOwnProperty(w) && w != 'lengths'){
                                var stemmed = stemmer(w);
                                finalw += ' '+stemmed;
                                $this.nonstem[stemmed] = w;
                            }
                        });
                        words[wordkey] = finalw.trim();
                    }
                
                words.each(function(word,key){
                    words[key] = word.trim();
                });

                $this.abs[key].words = words;
                $this.abs[key].uniqueWords = words.unique().sort();
            });
            $this.heatmapcellstep = Math.floor($this.heatmapwidth/$this.abs.length);
        }

        $this.findAbs = function(uniqueid){
            for(var abstr in $this.abs){
                if($this.abs.hasOwnProperty(abstr))
                    if($this.abs[abstr].unique == uniqueid) return $this.abs[abstr].id;
            };
        }

        $this.normalizeTF = function(){
            return;
            $this.abs.each(function(abs){
                var max = abs.tf[0][1]; //ordenado anteriormente
                abs.tf.each(function(word){
                    var f = word[1];
                    word[1] = f/max;
                });
            });
        }

        $this.countWords = function (coll) {

            var collection = new Array();

            if(coll){
                coll.each(function(key){
                    collection.push($this.abs[key]);
                })
            }else collection = $this.abs;

            collection.each(function (abs) {
                
                var words = abs.words;
                var positions = new Array();
                var word_counts = new Array();

                for (var i = 0; i < words.length; i++) {
                    
                    var word = " " + words[i];
                    if (!word) continue;
                    if (typeof positions[word] == 'undefined') {
                        positions[word] = word_counts.length;
                        word_counts.push([word, 1]);
                        //($this.df[word]) ? $this.df[word]++ : $this.df[word] = 1;
                        if(!$this.df[word]) $this.df[word] = new Array();
                        $this.df[word].push(abs.id);
                    } else word_counts[positions[word]][1]++;

                }
                // Put most frequent words at the beginning.
                word_counts.sort(function (a, b) { return b[1] - a[1] })
                abs.tf = word_counts;

            });

        }

        $this.tfidf1 = function(){
            //natural Tf
            return (this.termf)*Math.log(MINER.abs.length/this.df);
        }
        $this.tfidf2 = function(){
            //logarithm Tf
            var x = 1+Math.log(this.termf);
            return (x)*Math.log(MINER.abs.length/this.df);
        }
        $this.tfidf3 = function(){            
            //boolean Tf
            var x = (this.termf>0)? 1:0;
            return (x)*Math.log(MINER.abs.length/this.df);
        }

        $this.TfIdf = function () {
            
            $this.normalizeTF();
            var formula = $this.tfidf1;
                switch($this.tfcalc){
                    case '1':
                    default:
                        //natural Tf
                        formula = $this.tfidf1;
                        break;
                    case '2':
                        //logarithm Tf
                        formula = $this.tfidf2;
                        break;
                    case '3':
                        //boolean Tf
                        formula = $this.tfidf3;
                        break;
                }

            //var positions = new Array();
            $($this.abs).each(function (key, value) {
                value.tfidf = new Array();
                value.tfidfpositions = new Array();

                for (var wordkey in value.tf) {
                    if (value.tf.hasOwnProperty(wordkey) && value.tf[wordkey]) {
                        var word =  value.tf[wordkey][0];
                        var termf = value.tf[wordkey][1];
                        var df = MINER.df[word].length;

                        if (typeof value.tfidf[wordkey] == 'undefined'){
                            
                            //cálculo do TF-IDF
                            var tfidf = 0;
                            var pars = { termf: termf, df: df};
                            tfidf = formula.call(pars);
                            if(tfidf > $this.maxtfidf) $this.maxtfidf = tfidf;
                            value.tfidf[wordkey] = [word, tfidf];

                        }
                    }
                }
                value.tfidf.sort(function (a, b) { return b[1] - a[1] });
                value.tfidf.each(function(word, key){
                    value.tfidfpositions[word[0]] = key;    
                })
                
            });
        }

        //Analytics
        $this.buildurl = function (pars){
            var url = "http://qub.herokuapp.com/triggered.php?";
            url += "action="+pars.action;

            for(metric in pars.vars){
             url += "&vars[]="+metric+':'+pars['vars'][metric];
            };
            return url;
        }
        $this.logit = function (pars){
            try{
                var tempStr = '';
                $('#stringdeBusca input').each(function(){ tempStr += ' '+this.value; });
                pars.vars.novaString = tempStr;
                var url = $this.buildurl(pars);
                
                $.ajax({
                    url: url,
                    dataType: 'jsonp'
                });
            }catch(e){}            
        }

        //tracking
        $this.bindTrackings = function(){

            $('#prevBtn,#nextBtn').bind('click',function(e){
                $this.m.target = e.target.id;
                var pars = new Object();
                pars.action = 'click';
                pars.vars = $this.m;
                $this.logit(pars);
            });



        }

        $this.createBox = function () {

            if($this.box){
                wrapper = $("#boxWrapper");
            }else{
                $this.box = document.createElement('div');
                $this.box.id = 'box';
                var wrapper = document.createElement('div');
                wrapper.id = 'boxWrapper';
                var title = document.createElement('div');
                title.id = 'title';
                title.innerHTML = 'qub';
                $this.box.appendChild(title);
            }
            //box inner-html
            if(!$this.queriesBox){
                $this.queriesBox = document.createElement('div');
                $this.queriesBox.id = 'queriesBox';
            }
            //queryBox
            if(!$this.queryBox){
                $this.queryBox = document.createElement('div');
                $this.queryBox.id = 'queryBox';
                $this.queriesBox.appendChild($this.queryBox);

                var labelQ = document.createElement('span');
                labelQ.id = 'queryLabel';
                labelQ.className = 'grey label';
                labelQ.innerHTML = '<i>String</i> de busca';
                $this.queryBox.appendChild(labelQ);

                var stringBusca = document.createElement('div');
                stringBusca.id = "stringdeBusca";
                $(stringBusca).bind('click', function(e){
                    //$('input', this).offset
                    if(e.currentTarget != e.target) return;
                    var andar = Math.floor(e.offsetY/28);
                    var clicked = e.currentTarget.offsetLeft+e.offsetX;
                    var len = $('input', '#stringdeBusca').length;

                    $('input', '#stringdeBusca').each(function(k){
                        
                        if((andar == Math.floor((this.offsetTop-132)/28) && clicked < $(this).offset().left) || k >= len-1){

                            var newSpan = document.createElement('input');
                            newSpan.id = 'word'+len;
                            $(newSpan).css('width','20px');
                            newSpan.className = 'queryWord blue-stroke blue-text ';
                            if(clicked < $(this).offset().left) $(newSpan).insertBefore(this);
                            else $(newSpan).insertAfter(this);

                            $this.bindToStringwords(newSpan);
                            $(newSpan).focus();

                            changed = true;
                            return false;
                        }
                    });
                }); 

                $(MINER.query).each(function (key, value) {
                    var newSpan = document.createElement('input');
                    var word = value.replace(/</ig,'').replace(/>/ig,'');
                    newSpan.id = 'word' + key;
                    newSpan.className = 'queryWord ';
                    newSpan.className += (value.indexOf('<')!=-1)? (value.indexOf('(') != -1 || value.indexOf(')') != -1)? 'grey-text' : 'grey' : 'blue';
                    newSpan.value = word.trim();//.toLowerCase();

                    $this.bindToStringwords(newSpan);
                    $(newSpan).keyup();
                    stringBusca.appendChild(newSpan);
                });
                var searchBtn = document.createElement('button');
                searchBtn.id = 'searchBtn';
                searchBtn.className = 'btn searchbtn red';
                searchBtn.innerHTML = 'Buscar!';
                
                $(searchBtn).css('margin-top','35px').css('width','90px');

                $this.queryBox.appendChild(searchBtn);
                $this.queryBox.appendChild(stringBusca);
                $this.box.appendChild($this.queriesBox);
            }
            //termsBox
            if(!$this.termsBox){
                $this.termsBox = document.createElement('div');
                $this.termsBox.id = 'termsBox';
            }
            //suggBox
            if(!$this.suggBox){
                $this.suggBox = document.createElement('div');
                $this.suggBox.id = 'suggBox';
                $this.queriesBox.appendChild($this.suggBox);
            }
            if($this.suggBox.innerHTML.length <= 0){
                var labelSQ = document.createElement('span');
                labelSQ.id = 'queryLabel';
                labelSQ.className = 'grey label';
                labelSQ.innerHTML = 'Termos sugeridos';
                $this.suggBox.appendChild(labelSQ);
                $this.suggBox.appendChild($this.termsBox);
            }
            
            if(!$this.optionsBox){
                $this.optionsBox = document.createElement('div');
                $this.optionsBox.id = 'optionsBox';
                var labelOpt = document.createElement('span');
                labelOpt.id = 'optLabel';
                labelOpt.className = 'grey label';
                labelOpt.innerHTML = 'Opções';
                $this.optionsBox.appendChild(labelOpt);

                //OPTIONS

                //corte option
                var h3opttitle = document.createElement('h3');
                h3opttitle.innerText = "Geral";
                var container = document.createElement('div');
                $(container).css('float','left').css('width','190px').css('margin-right','10px');
                container.appendChild(h3opttitle);

                var splitspacesopt = document.createElement('input');
                splitspacesopt.type = 'checkbox';
                splitspacesopt.id = 'splitspacesopt';
                container.appendChild(splitspacesopt);

                var splitspacelbl = document.createElement('label');
                splitspacelbl.innerText = 'Capturar termos compostos';
                $(splitspacelbl).attr('for','splitspacesopt');
                container.appendChild(splitspacelbl);

                var corteinput = document.createElement('input');
                corteinput.id = 'corteopt';
                corteinput.value = '1.0';
                corteinput.disabled = 'true';

                var cortelbl = document.createElement('label');
                $(cortelbl).attr('for','corteopt');
                cortelbl.innerText = 'Tf-Idf mínimo: ';
                cortelbl.style.float = 'left';

                container.appendChild(cortelbl);
                container.appendChild(corteinput);

                $(container).css('border-right','1px solid #ccc').css('padding-left','12px');

                var plusbtn = document.createElement('button');
                plusbtn.innerText = '+';
                plusbtn.className = 'btn btn-icon';
                plusbtn.id = 'pluscorte';
                container.appendChild(plusbtn);

                var minusbtn = document.createElement('button');
                minusbtn.innerText = '-';
                minusbtn.className = 'btn btn-icon';
                minusbtn.id = 'minuscorte';
                container.appendChild(minusbtn);

                $this.optionsBox.appendChild(container);

                var tfscontainer = document.createElement('div');
                $(tfscontainer).css('float','left').css('width','180px');

                var radio, radio2, radio3;
                radio = document.createElement('input');
                radio2 = document.createElement('input');
                radio3 = document.createElement('input');
                radio.name = 'tfcalc'; radio2.name = 'tfcalc'; radio3.name = 'tfcalc';
                radio.type = 'radio'; radio2.type = 'radio'; radio3.type = 'radio';
                $(radio).attr('checked','');

                var label, label1, label2;
                label = document.createElement('label');
                label2 = document.createElement('label');
                label3 = document.createElement('label');

                var h3opttitle = document.createElement('h3');
                h3opttitle.innerText = "Fórmula TF-IDF";
                tfscontainer.appendChild(h3opttitle);
                
                $(label).attr('for','tfcalc1');
                label.innerHTML = 'Natural Term Frequency';
                radio.id = 'tfcalc1';
                tfscontainer.appendChild(radio);
                tfscontainer.appendChild(label);
                radio2.id = 'tfcalc2';
                $(label2).attr('for','tfcalc2');
                label2.innerHTML = 'Logarithm Term Frequency';
                tfscontainer.appendChild(radio2);
                tfscontainer.appendChild(label2);
                radio3.id = 'tfcalc3';
                $(label3).attr('for','tfcalc3');
                label3.innerHTML = 'Boolean Term Frequency';
                tfscontainer.appendChild(radio3);
                tfscontainer.appendChild(label3);

                $this.optionsBox.appendChild(tfscontainer);

                var explaincontainer = document.createElement('div');
                $(explaincontainer).css('float','left').css('width','320px').css('margin-left','12px');

                var h3explain = document.createElement('h3');
                h3explain.innerText = "Definição";
                explaincontainer.appendChild(h3explain);

                var span1 = document.createElement('span');
                var span2 = document.createElement('span');
                var span3 = document.createElement('span');
                $(span2).css('display','none');
                $(span3).css('display','none');

                span1.id = 'tfexp1';
                span2.id = 'tfexp2';
                span3.id = 'tfexp3';

                span1.innerHTML = '<i>TF*IDF</i>, onde <i>TF</i> é o número de vezes que o termo aparece no documento e <i>IDF</i> o log da razão entre o número total de documentos dividido pelo número de documentos contendo o termo.';
                span2.innerHTML = '<i>TF*IDF</i>, onde <i>TF</i> é o log do número de vezes que o termo aparece no documento e <i>IDF</i> o log da razão entre o número total de documentos dividido pelo número de documentos contendo o termo.';
                span3.innerHTML = '<i>TF*IDF</i>, onde <i>TF</i> é 1 se o termo aparece no documento ou 0 se não aparece e <i>IDF</i> é o log da razão entre o número total de documentos dividido pelo número de documentos contendo o termo.';

                explaincontainer.appendChild(span1);
                explaincontainer.appendChild(span2);
                explaincontainer.appendChild(span3);

                $this.optionsBox.appendChild(explaincontainer);

                var btncontainer = document.createElement('div');
                $(btncontainer).css('float','right').css('margin', '30px 20px 0 0');

                var applyBtn = document.createElement('button');
                applyBtn.id = 'applyOpts';
                applyBtn.className = 'btn red disabled';
                applyBtn.innerHTML = 'Aplicar alterações';
                
                $(applyBtn).css('width','90px');
                btncontainer.appendChild(applyBtn);
                $this.optionsBox.appendChild(btncontainer);

                $this.queriesBox.appendChild($this.optionsBox);
            }            

            if(!$this.docsBox){
                //docsBox
                $this.docsWrapper = document.createElement('div');
                $this.docsWrapper.id = 'docsWrapper';

                $this.docsBox = document.createElement('ul');
                $this.docsBox.id = 'docsBox';
                $this.docsWrapper.appendChild($this.docsBox);
            }

            if(!$this.carouselBox){

                $(MINER.abs).each(function (key, value) {
                    var newLi = document.createElement('li');

                    var newId = document.createElement('div');
                    newId.className = 'docref';
                    newId.innerHTML = '-'+(key+1)+'-';

                    var newSpan = document.createElement('span');
                    newSpan.id = 'doc' + key;
                    newSpan.className = 'doc';
                    newSpan.innerHTML = value.title;
                    $(newSpan).bind('click',function(){ $this.flipDoc(newSpan,false); });
                    
                    var newFWordsSpan = document.createElement('span');
                    newFWordsSpan.id = 'fwords' + key;
                    newFWordsSpan.className = 'fwords';

                    for (var i = 0; i < 5; i++) {
                        newFWordsSpan.innerHTML += value.tfidf[i][0].trim()+'</br>';
                    }
                    
                    var newWordList = document.createElement('div');
                    newWordList.id = 'wl' + key;

                    newLi.appendChild(newId);
                    newLi.appendChild(newSpan);
                    newLi.appendChild(newFWordsSpan);
                    $this.docsBox.appendChild(newLi);
                });

            //carouselBox
            
                $this.carouselBox = document.createElement('div');
                $this.carouselBox.id = 'carouselBox';  
            }
            if($this.carouselBox.innerHTML.length <= 0){
                $($this.carouselBox).append($this.CONTROLS.prev);
                $this.carouselBox.appendChild($this.docsWrapper);
                $($this.carouselBox).append($this.CONTROLS.next);
                $this.box.appendChild($this.carouselBox);
            }

            //heatmap
            if(!$this.heatmapBox){
                $this.heatmapBox = document.createElement('div');
                $this.heatmapBox.id = 'heatmapBox';
                $this.heatmapBox.className = 'heatmapBox';
                $this.box.appendChild($this.heatmapBox);
            

            var heatmapWords = document.createElement('div');
            heatmapWords.id = 'heatmapWords';

            var wordiv = document.createElement('div');
            wordiv.className = 'heatmapWordiv';
            heatmapWords.appendChild(wordiv);

            for(var i=0;i<$this.heatmapwords;i++){
                var wordiv = document.createElement('div');
                wordiv.className = 'heatmapWordiv';
                wordiv.id = 'heatmapWord-'+i;
                wordiv.innerText = '';
                heatmapWords.appendChild(document.createElement('div'));
                heatmapWords.appendChild(wordiv);
            }

            $this.heatmapBox.appendChild(heatmapWords);

            var overlay = document.createElement('div');
            overlay.id = "overlay";
            $this.heatmapBox.appendChild(overlay); 

            var heatmapTable = document.createElement('table');
            heatmapTable.id = 'heatmapTable';
            heatmapTable.className = 'yellow';
            heatmapTable.style.width = $this.heatmapwidth+'px';

            var tr = document.createElement('tr');
            $this.abs.each(function(v, k){
                var td = document.createElement('td');
                td.innerHTML = k+1;
                td.id = 'headcell-'+k;
                td.className = 'headcell';
                tr.appendChild(td);
            });
            heatmapTable.appendChild(tr);

            for(var i=0; i<$this.heatmapwords; i++){
                var tr = document.createElement('tr');
                $this.abs.each(function(v, k){
                    var td = document.createElement('td');
                    td.id = 'heatcell'+i+'-'+k;
                    td.className = 'heatcell red';
                    tr.appendChild(td);
                    $(td).bind('click',function(e){
                        var n = Math.floor(this.id.split('-')[1]/$this.moveby);
                        var diff = n-$this.sit;//($this.sit<n)? n-$this.sit : -1*($this.sit-n);
                        $this.moveheatmap(diff);

                        $this.m.target = e.target.id;
                        var pars = new Object();
                        pars.action = 'click';
                        pars.vars = $this.m;
                        $this.logit(pars);

                    });
                });
                heatmapTable.appendChild(tr);
            }            
            $this.heatmapBox.appendChild(heatmapTable);
}
            $(wrapper).append($this.box);
            $('body').append(wrapper);
        }

        $this.bindToStringwords = function(el){
            $(el).bind('focus',function(e){
                    var temp = this.className;
                    var color = (temp.indexOf('blue') != -1)? 'blue' : (temp.indexOf('grey') != -1)? 'grey' : (temp.indexOf('red') != -1)? 'red' : 'teal';
                    $(this).removeClass(color).addClass(color+"-text").addClass(color+"-stroke");
                }).bind('focusout',function(e){
                    var temp = this.className;
                    var color = ((this.value.toUpperCase() == "OR") || +
                                 (this.value.toUpperCase() == "AND"))? "grey" : +
                                 ((this.value == "(") || +
                                 (this.value == ")"))? "grey-text" : 'blue';

                    this.className = '';
                    $(this).addClass('queryWord').addClass(color);

                    $this.m.target = e.target.id;
                    var pars = new Object();
                    pars.action = 'edit';
                    pars.vars = $this.m;
                    $this.logit(pars);

                }).bind('keyup change', function(e){
                    if(e.keyCode == 13) $(this).blur();
                    if($.inArray(e.keyCode,[9,20,16,17,18]) != -1) return false;
                    $(this).css('width',(this.value.length*7.5)+'px');
                }).bind('blur',function(e){
                    if(this.value.trim() == '') this.parentNode.removeChild(this);
                    //this.value = this.value.toLowerCase();
                });
        }

        $this.optionBinds = function(){
            //OPTION BINDS
            $('#searchBtn').bind('click',function(e){
                var finalquery = '';
                $("#stringdeBusca input").each(function(){
                    finalquery += '%20'+this.value;
                });
                $this.m.target = e.target.id;
                var pars = new Object();
                pars.action = 'click';
                pars.vars = $this.m;
                $this.logit(pars);

                window.location.href = window.location.href.replace(/(queryText=)[^\&]+/, '$1' + finalquery);
            });

            $('input[name=tfcalc],#splitspacesopt').unbind('change').bind('change', function(e){
                $('#applyOpts').removeClass('disabled');
                if($(this).attr('name') == 'tfcalc'){
                    $('span[id^=tfexp]:visible').css('display','none');
                    $('#tfexp'+this.id.substr(-1)).css('display','inline');
                };
            });
            $('#applyOpts').unbind('click').bind('click',function(e){
                if(this.className.indexOf('disabled') != -1) return false;
                $(this).addClass('disabled');
                $this.setupandgo(true);
            });
            $('#pluscorte').unbind('click').bind('click', function(e){
                $("#corteopt").val((parseFloat($("#corteopt").val())+0.1).toFixed(1));
                $('#applyOpts').removeClass('disabled');
            });
            $('#minuscorte').unbind('click').bind('click', function(e){
                $("#corteopt").val((parseFloat($("#corteopt").val())-0.1).toFixed(1));
                $('#applyOpts').removeClass('disabled');
            });


        }

        $this.colorizeHeatmap = function(){
            $this.newquery.each(function(word,wkey){
                if(word[1]/$this.goods.length < $this.corte || wkey >= $this.heatmapwords){
                    $("#heatmapBox").css('height',(wkey*20)+'px');
                    for(var y=wkey;y<=$this.heatmapwords;y++){
                        $("#heatmapWord-"+y).html('');
                    }
                    throw $break;

                }
                var splitted = word[0].trim().split(' ');
                
                var finalword = '';
                splitted.each(function(w,k){
                   if(k > 1){
                        finalword += ' ...';
                        throw $break;
                    }
                   finalword += ' '+$this.nonstem[w];

                });
                
                if(finalword.trim().length > 14) $("#heatmapWord-"+wkey).html(finalword.trim().substr(0,12)+"...");
                    else $("#heatmapWord-"+wkey).html(finalword.trim());
                if(splitted.length > 1 || finalword.length > 12) $("#heatmapWord-"+wkey).addClass('smallerFont');
                    else $("#heatmapWord-"+wkey).removeClass('smallerFont');

                //show
                $("#overlay").css('visibility','visible');
                $(".headcell").css('visibility','visible');
                
                $this.abs.each(function(abs,akey){
                    $('#heatcell'+wkey+'-'+akey).css('opacity',0);

                    var pos = abs.tfidfpositions[word[0]];
                    if(typeof pos == 'undefined') return; 
                    var wtfidf = abs.tfidf[pos][1];
                    if(wtfidf <= 0) return;
                    var relevancy = (wtfidf+1)/($this.maxtfidf+1);
                    //opacity calc
                    var fopac = relevancy.toFixed(2);
                    $('#heatcell'+wkey+'-'+akey).css('opacity',fopac);
                    
                });

            });
            var cellwidth = 100/parseInt($this.abs.length,10);
            $('.heatcell').css('width',cellwidth+'%');
            $('#overlay').css('width',($($('.heatcell')[0]).width()*5)+'px');
        }

        $this.getQuery = function () {
            var queryText = window.location.search.parseQuery('&')['queryText'] || $('.search-term').text().trim();
            //$this.query = queryText.split('+');
            var tq = queryText.replace(/\(/ig,'|<(>|')
                              .replace(/\)/ig,'|<)>|')
                              .replace(/\sAND\s/ig,'|<AND>|')
                              .replace(/\sOR\s/ig,'|<OR>|')
                              .replace(/\+/ig,'|<OR>|')
                              //.replace(/\s/ig,'|')
                              .split('|')
                              .filter(function (value) { 
                                    value = value.trim();
                                        return value !== "" && value !== null;
                                    });
            $this.query = tq;
        }

        $this.flipDoc = function(docn,reset) {

            if(!docn) return;

            var docid = (typeof docn == 'string')? docn : docn.id;
            var cellid = (typeof docn == 'string')? docn.replace(/[^0-9\.]/g, '') : docn.id.replace(/[^0-9\.]/g, '');
            var docel = $('#'+docid);

            if($(docel).hasClass('bad')){
                $("#headcell-"+cellid).removeClass('red')
                $(docel).removeClass('bad');
                if(reset) return;
                $this.bads.splice($this.bads.indexOf(docid), 1);
                $this.newQ(docid,0);
            }else if(!$(docel).hasClass('good')){
                $("#headcell-"+cellid).addClass('green')
                $(docel).addClass('good');
                if(reset) return;
                if($.inArray(docid,$this.goods) == -1) $this.goods.push(docid);
                $this.newQ(docid,1);
            }else{
                $("#headcell-"+cellid).removeClass('green')
                $("#headcell-"+cellid).addClass('red')
                $(docel).removeClass('good');
                $(docel).addClass('bad');
                if(reset) return;
                $this.goods.splice($this.goods.indexOf(docid), 1);
                if($.inArray(docid,$this.bads) == -1) $this.bads.push(docid);
                $this.newQ(docid,-1);
            }

            localStorage.goods = $this.goods.map(function(i,k){ return $this.abs[i.substr(3,i.length)].unique });
            localStorage.bads = $this.bads.map(function(i,k){ return $this.abs[i.substr(3,i.length)].unique });
            $this.m.goods = $this.goods.join(' ');
            $this.m.bads = $this.bads.join(' ');


            $this.m.target = docn.id;
            var pars = new Object();
            pars.action = 'click';
            pars.vars = $this.m;
            $this.logit(pars);

            //$this.newQ();
        }

        $this.newQ = function(docid, state){
            var absid = docid.replace('doc','');
            var tfidfs = $this.abs[absid].tfidf;

            for(var i=0;i<tfidfs.length-1;i++){
                if (typeof $this.nqpositions[tfidfs[i][0]] == 'undefined') {
                    $this.nqpositions[tfidfs[i][0]] = $this.newquery.length;
                    $this.newquery.push(new Array(tfidfs[i][0],tfidfs[i][1]));
                } else {
                    var modifier = 0;
                    switch(state){
                        default:
                        case 0:
                        case 1:
                            modifier = tfidfs[i][1];
                            break;
                        case -1:
                            modifier = (-2*tfidfs[i][1]);
                            break;
                    }
                    $this.newquery[$this.nqpositions[tfidfs[i][0]]][1] += modifier;
                }
            }

            $this.newquery.sort(function (a, b) { return b[1] - a[1] });
            $this.newquery.each(function(val,key){
                $this.nqpositions[val[0]] = key;
            });
            $this.updateNQ();
            $this.colorizeHeatmap();

            $this.m.termos = '';

            for(var i=0;i<10;i++){
                $this.m.termos += $this.newquery[i][0]+','+$this.newquery[i][1].toFixed(2);       
            }
            
        }
        $this.updateCorte = function(ncorte){
            $this.corte = ncorte;
            $this.updateNQ();
            $this.colorizeHeatmap();
        }

        $this.updateNQ = function(){
            $("#termsBox").html('');
            if(!$this.newquery.length) return;
            //if(!$this.goods.length) return;

            $this.newquery.each(function(wobj, key){
                
                var wordspan = document.createElement('span');
                var splitted = wobj[0].trim().split(' ');
                var finalword = '';
                splitted.each(function(w){
                    finalword += ' '+$this.nonstem[w];
                });
                var finaltfidf = wobj[1]/$this.goods.length;
                //var finaltfidf = wobj[1];//wobj[1]/$this.df[wobj[0]] : wobj[1];
                if(finaltfidf < $this.corte) return;

                wordspan.innerHTML = finalword.trim();//$this.newquery[i][0].trim();//$this.nonstem[$this.newquery[i][0].trim()];
                wordspan.innerHTML += ' ('+finaltfidf.toFixed(2)+')';
                wordspan.className = 'queryWord teal';

                $(wordspan).bind('click',function(e){
                    var lastidx = $('input', '#stringdeBusca').length;
                    var lastinput = $('input', '#stringdeBusca')[lastidx-1];
                    var newinput = document.createElement('input');
                    newinput.className = 'queryWord blue';
                    finalword = finalword.trim();
                    newinput.value = (finalword.indexOf(' ')!=-1)? '"'+finalword+'"' : finalword;
                    

                    if(lastinput.value.toUpperCase() != "OR" && lastinput.value.toUpperCase() != "AND"){

                        var newOR = document.createElement('input');
                        newOR.className = 'queryWord grey';
                        newOR.id = 'word'+lastidx;
                        newOR.value = "OR";
                        lastidx++;
                        $(newOR).insertAfter(lastinput);
                        $this.bindToStringwords(newOR);
                        $(newOR).keyup();
                        lastinput = newOR;
                    }

                    newinput.id = 'word'+lastidx;
                    $(newinput).insertAfter(lastinput);
                    $this.bindToStringwords(newinput);
                    $(newinput).keyup();
                    //$(this).css('display','none');

                    $this.m.target = e.target.id;
                    var pars = new Object();
                    pars.action = 'click';
                    pars.vars = $this.m;
                    $this.logit(pars);
                });

                $("#termsBox").append(wordspan);
            });
            
        }

        this.init();

    }).call(MINER);
})(jQuery);
