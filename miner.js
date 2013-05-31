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

        $this.step = 160;
        $this.moveby = 2;

        //colors: 79bcff, bbdaf7, 378ee5, 528fcc

        $this.STYLES = {
            BOXWRAPPER: '#boxWrapper{width: 100%;position: absolute;top: 0;text-align: center;font-family:Trebuchet MS; font-size: 13px}',
            BOX: '#box{width: 70%;background-color: white;height: 500px;padding-top: 20px;margin: 70px auto;text-align: center;border-radius: 6px;box-shadow: 2px 2px 12px #ddd, -2px -2px 12px #ddd;}',
            DOCSLI: '#docsBox li{display: inline-block;margin: 20px 30px auto;text-align: center;width: 100px;vertical-align: top;}',
            DOC: '.doc:hover{cursor:pointer;border: 1px solid red}.doc{display: block;border-radius: 4px;background-color: white;box-shadow: 0px 5px 0px 2px #F2F2F2;color: #666;line-height: 23px;height: 120px;border: 1px solid #eee;overflow: hidden;}',
            DOCSBOX: '#docsBox{-webkit-transition: margin-left 0.8s ease-out;height: 200px;width: 9000px;text-align: left;padding: 0;margin: 0 0 0 64px;}',
            DOCSWRAPPER: '#docsWrapper{overflow: hidden;margin: 20px 0;padding: 0;box-shadow: 0px 3px 6px -1px #f2f2f2 inset;border-top: 1px solid #eee;}',
            WORDS: '.queryWord{background-color: #bbdaf7;padding: 7px;color: white;border-radius: 5px;margin-right: 10px;}',
            BUTTONS: '.btn{background-color: green;padding: 5px;border-radius: 6px;height: 100px;color: white;line-height: 36px;margin-right: 35px;box-shadow: 1px 1px 0px 0px #ccc;}.btn:active{box-shadow: 0 0}',
            ACTIVEWORD: '.queryWord.active{background-color:#79bcff}'            
        };

        $this.CONTROLS = {
            next: $('<a id="prevBtn" class="btn" href="#">next ></a>'),
            prev: $('<a id="nextBtn" class="btn" href="#">< previous</a>')
        }

        $this.CONTROLS.next.bind('click',function(){
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'),10)-($this.moveby*$this.step)+'px');
        });
        $this.CONTROLS.prev.bind('click',function(){
            $('#docsBox').css('margin-left', parseInt($('#docsBox').css('margin-left'),10)+($this.moveby*$this.step)+'px');
        });
        
        $this.init = function () {
            //include CSS:
            var styles = document.createElement('style');
            
            for(var style in $this.STYLES){
                styles.innerHTML += $this.STYLES[style];
            }                          
            $("head").append(styles);

            //blur page
            $('#LayoutWrapper').css('opacity', 0.15);
            
            //get abstracts
            $this.getAbs();
            //prepare box layout elements
            $this.getQuery();
            $this.createBox();
            //calc
            $this.countWords(0);
            $this.allWords();

            console.warn("done");
        }

        $this.getAbs = function () {
            $(".abstract").each(function (key) {
                var words = [];
                $this.abs[key] = $(this);
                $this.abs[key].title = $($this.abs[key]).parents('.detail').find('h3').text().trim();
                $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g, '').replace(/\s+/g, ' ').toLowerCase();
                words = $this.abs[key].txt.split(/\s|,|\.|-|Â»|\/|\\|\(|\)|:|'s/ig).filter(function (value) { return value !== "" && value !== null; });
                $this.abs[key].words = words;
                $this.abs[key].uniqueWords = words.unique().sort();
            });
        }

        $this.countWords = function (key) {
            if (typeof key === 'undefined') return;
            var tf = [];
            //$this.abs[key].words.map(function (a) { if (a in tf) tf[a]++; else tf[a] = 1; });
            $this.abs[key].words.map(function (key, value) { if (key in tf) tf[a]++; else tf[a] = 1; });

            $(tf).each(function(idx,value){
                console.log(this);
            })
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

            $this.box.appendChild(queryBox);

            //docsBox
            var docsWrapper = document.createElement('div');
            docsWrapper.id = 'docsWrapper';

            var docsBox = document.createElement('ul');
            docsBox.id = 'docsBox';
            docsWrapper.appendChild(docsBox);

            $(MINER.abs).each(function(key,value){
                var newLi = document.createElement('li');
                
                var newId = document.createElement('div');
                newId.id = 'docref';
                newId.innerHTML = '#'+key;

                var newSpan = document.createElement('span');
                newSpan.id = 'doc'+key;     
                newSpan.className = 'doc';           
                newSpan.innerHTML = value.title;

                var newWordList = document.createElement('div');
                newWordList.id = 'wl'+key;
                
                console.log(this);
                
                //newWordList.innerHTML


                newLi.appendChild(newId);
                newLi.appendChild(newSpan);
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
