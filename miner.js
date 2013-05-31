var MINER = window.MINER || {};
$ = jQuery;

Array.prototype.unique = function () {
    var o = {}, i, l = this.length, r = [];
    for (i = 0; i < l; i += 1) o[this[i]] = this[i];
    for (i in o) r.push(o[i]);
    return r;
};

(function ($) {
    (function () {

        var $this = this;
        $this.abs = [];
        $this.words = [];
        $this.allwords = [];

        //colors: 79bcff, bbdaf7, 378ee5, 528fcc

        $this.STYLES = {
            BOXWRAPPER: '#boxWrapper{width: 100%;position: absolute;top: 0;text-align: center;font-family:Trebuchet MS; font-size: 13px}',
            BOX: '#box{width: 70%;background-color: white;height: 500px;padding-top: 20px;margin: 70px auto;text-align: center;border-radius: 6px;box-shadow: 2px 2px 12px #ddd, -2px -2px 12px #ddd;}',
            WORDS: '.queryWord{background-color: #bbdaf7;padding: 7px;color: white;border-radius: 5px;margin-right: 10px;}',
            ACTIVEWORD: '.queryWord.active{background-color:#79bcff};'
        };
        
        $this.init = function () {
            //include CSS:
            var styles = document.createElement('style');
            styles.innerHTML = $this.STYLES.BOXWRAPPER +
                               $this.STYLES.BOX +
                               $this.STYLES.WORDS+
                               $this.STYLES.ACTIVEWORD;
                                                  
            $("head").append(styles);

            //blur page
            $('#LayoutWrapper').css('opacity', 0.15);
            
            //prepare box layout elements
            $this.getQuery();
            $this.createBox();
            //calculates tf-idf
            $this.getAbs();
            $this.countWords(0);
            $this.allWords();

            console.warn("done");
        }

        $this.getAbs = function () {
            $(".abstract").each(function (key) {
                var words = [];
                $this.abs[key] = $(this);
                $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g, '').replace(/\s+/g, ' ').toLowerCase();
                words = $this.abs[key].txt.split(/\s|,|\.|-|Â»|\/|\\|\(|\)|:|'s/ig).filter(function (value) { return value !== "" && value !== null; });
                $this.abs[key].words = words;
                $this.abs[key].uniqueWords = words.unique().sort();
            });
        }

        $this.countWords = function (key) {
            if (typeof key === 'undefined') return;
            var tf = [];
            $this.abs[key].words.map(function (a) { if (a in tf) tf[a]++; else tf[a] = 1; });
            $this.abs[key].tf = tf;
        }

        $this.allWords = function () {
            $($this.abs).each(function (key, item) {
                $this.allwords = $this.allwords.concat(this.words);
            });
            $this.allwords = $this.allwords.unique().sort();
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
            
            $(MINER.query).each(function(key,value){
                var newSpan = document.createElement('span');
                newSpan.id = 'word'+key;
                newSpan.className = 'queryWord';
                newSpan.innerHTML = value;
                if(key==1) newSpan.className = 'queryWord active';
                queryBox.appendChild(newSpan);
            });

            //queryBox.innerHTML = '<span class="queryWord" id="word1">text</span><span class="queryWord" id="word2">mining</span>';
            $this.box.appendChild(queryBox);

            //docsBox
            var docsBox = document.createElement('div');
            docsBox.id = 'docsBox';
            docsBox.innerHTML = '';
            $this.box.appendChild(docsBox);

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
