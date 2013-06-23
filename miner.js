var MINER = window.MINER || {};
$ = jQuery;
//prototype
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
        $this.abs = [];
        $this.df = new Array();

        $this.stopWords = ["a","able","about","above","abst","accordance","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasn't","way","we","wed","welcome","we'll","went","were","weren't","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","won't","words","world","would","wouldn't","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero"];

        $this.isStopWord = function(word){
            for (var i=0, len = $this.stopWords.length; i < len; i++)
                if ($this.stopWords[i] === word) return true;
            return false;
        }

        $this.step = 160;
        $this.moveby = 2;

        //colors: 79bcff, bbdaf7, 378ee5, 528fcc

        $this.STYLES = {
            BOXWRAPPER: '#boxWrapper{width: 100%;position: absolute;top: 0;text-align: center;font-family:Trebuchet MS; font-size: 13px}',
            BOX: '#box{width: 70%;background-color: white;height: 500px;padding-top: 20px;margin: 70px auto;text-align: center;border-radius: 6px;box-shadow: 2px 2px 12px #ddd, -2px -2px 12px #ddd;}',
            DOCSLI: '#docsBox li{display: inline-block;margin: 20px 30px auto;text-align: center;width: 100px;vertical-align: top;}',
            DOC: '.doc:hover{cursor:pointer;border: 1px solid red}.doc{display: block;border-radius: 4px;background-color: white;box-shadow: 0px 2px 2px 0px #F2F2F2;color: #666;line-height: 23px;height: 120px;border: 1px solid #eee;overflow: hidden;}',
            DOCSBOX: '#docsBox{-webkit-transition: margin-left 0.8s ease-out;height: 280px;width: 99000px;text-align: left;padding: 0;margin: 0 0 0 64px;}',
            DOCSWRAPPER: '#docsWrapper{overflow: hidden;margin: 20px 0;padding: 0;box-shadow: 0px 3px 6px -1px #f2f2f2 inset;border-top: 1px solid #eee;}',
            WORDS: '.queryWord{background-color: #bbdaf7;padding: 7px;color: white;border-radius: 5px;margin-right: 10px;}',
            BUTTONS: '.btn{background-color: green;padding: 5px;border-radius: 6px;height: 100px;color: white;line-height: 36px;margin-right: 35px;box-shadow: 1px 1px 0px 0px #ccc;}.btn:active{box-shadow: 0 0}',
            ACTIVEWORD: '.queryWord.active{background-color:#79bcff}',
            FWORDS: '.fwords{display:none}',
            COLORS: '/* Green */
                    .green {background-color: #7ab800;}
                    .green_stroke { padding: 30px 0px;border: 2px solid #7ab800;}'
        };

        $this.CONTROLS = {
            next: $('<a id="prevBtn" class="btn" href="#">next ></a>'),
            prev: $('<a id="nextBtn" class="btn" href="#">< previous</a>')
        }

        $this.CONTROLS.next.bind('click', function () {
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'), 10) - ($this.moveby * $this.step) + 'px');
        });
        $this.CONTROLS.prev.bind('click', function () {
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'), 10) + ($this.moveby * $this.step) + 'px');
        });

        $this.init = function () {
            //include CSS:
            var styles = document.createElement('style');

            for (var style in $this.STYLES) {
                styles.innerHTML += $this.STYLES[style];
            }
            $("head").append(styles);

            //blur page
            $('#LayoutWrapper').css('opacity', 0.15);

            //get abstracts
            $this.getAbs();
            //count words
            $this.countWords();
            $this.TfIdf();
            //prepare box layout elements
            $this.getQuery();
            $this.createBox();
            //calc
            //$this.allWords();

            console.warn("done");
        }

        $this.getAbs = function () {
            $(".abstract").each(function (key) {
                var words = [];
                $this.abs[key] = $(this);
                $this.abs[key].title = $($this.abs[key]).parents('.detail').find('h3').text().trim();
                $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g, '').replace(/\s+/g, ' ').toLowerCase();
                words = $this.abs[key].txt.split(/\s|,|\.|-|»|\/|\\|\(|\)|:|'s/ig).filter(function (value) { return value !== "" && value !== null && !$this.isStopWord(value); });
                /*
                for (var wordkey in words)
                    if (words.hasOwnProperty(wordkey)) words[wordkey] = stemmer(words[wordkey]);
                    */
                $this.abs[key].words = words;
                $this.abs[key].uniqueWords = words.unique().sort();
            });
        }

        $this.countWords = function () {

            $($this.abs).each(function () {
                
                var words = this.words;
                var positions = new Array();
                var word_counts = new Array();

                for (var i = 0; i < words.length; i++) {
                    
                    var word = " " + words[i];
                    if (!word) continue;
                    if (typeof positions[word] == 'undefined') {
                        positions[word] = word_counts.length;
                        word_counts.push([word, 1]);
                        ($this.df[word]) ? $this.df[word]++ : $this.df[word] = 1;
                    } else word_counts[positions[word]][1]++;

                }
                // Put most frequent words at the beginning.
                word_counts.sort(function (a, b) { return b[1] - a[1] })
                this.tf = word_counts;

            });

        }

        $this.TfIdf = function () {
            var positions = new Array();
            $($this.abs).each(function (key, value) {
                value.tfidf = new Array();
                for (var wordkey in value.tf) {
                    if (value.tf.hasOwnProperty(wordkey) && value.tf[wordkey]) {
                        var word =  value.tf[wordkey][0];
                        var termf = value.tf[wordkey][1];
                        var df = MINER.df[word];
                        //word[0];
                        
                        //if(typeof positions[word] == 'undefined')
                            
                        if (typeof value.tfidf[wordkey] == 'undefined'){
                            var tfidf = Math.log(termf) * Math.log(Math.abs(MINER.abs.length)/df);
                            value.tfidf[wordkey] = [word, tfidf];
                        }
                        //value.tfidf[wordkey][0] = word;
                        //value.tfidf[wordkey][1] = termf / df;
                        
                        //console.log(word + " = " + termf / df);
                    }
                }
                value.tfidf.sort(function (a, b) { return b[1] - a[1] })
            });
        }

        $this.createBox = function () {
            $this.box = document.createElement('div');
            $this.box.id = 'box';
            var wrapper = document.createElement('div');
            wrapper.id = 'boxWrapper';

            //box inner-html
            //queryBox
            var queryBox = document.createElement('div');
            queryBox.id = 'queryBox';

            $(MINER.query).each(function (key, value) {
                var newSpan = document.createElement('span');
                newSpan.id = 'word' + key;
                newSpan.className = 'queryWord';
                newSpan.innerHTML = value;
                if (key == 1) newSpan.className = 'queryWord active';
                queryBox.appendChild(newSpan);
            });

            $this.box.appendChild(queryBox);

            //docsBox
            var docsWrapper = document.createElement('div');
            docsWrapper.id = 'docsWrapper';

            var docsBox = document.createElement('ul');
            docsBox.id = 'docsBox';
            docsWrapper.appendChild(docsBox);

            $(MINER.abs).each(function (key, value) {
                var newLi = document.createElement('li');

                var newId = document.createElement('div');
                newId.id = 'docref';
                newId.innerHTML = '#' + (key+1);

                var newSpan = document.createElement('span');
                newSpan.id = 'doc' + key;
                newSpan.className = 'doc';
                newSpan.innerHTML = value.title;
                
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
                docsBox.appendChild(newLi);
            });

            //carousel actions
            $(docsWrapper).append($this.CONTROLS.prev);
            $(docsWrapper).append($this.CONTROLS.next);

            $this.box.appendChild(docsWrapper);

            $(wrapper).append($this.box);
            $('body').append(wrapper);
        }

        $this.getQuery = function () {
            var queryText = window.location.search.parseQuery('&')['queryText'] || $('.search-term').text().trim();
            $this.query = queryText.split('+');
        }

        this.init();

    }).call(MINER);
})(jQuery);
