/**
 * jquery.dotanimator.js
 * @author Igor Karbachinsky <igorkarbachinsky@mail.ru>
 * @description Creates a simple dot flicker animation for arbitrary jquery element.
 * (c) September 2015
 *
 */

(function($) {
    /**
     * Initialize
     * @param {Jquery selector} $block
     * @return
     */
    function DotAnimation($block, params) {
        var self = this;

        self.$block = $block;

        self.params = {
            speed: 400,
            numDots: 3,
            dotElement: '.'
        };

        if("object" == typeof(params)) {
            $.extend(self.params, params);
        }

        self._bindEvents();
        self.$block.trigger('startDotAnimation');

        return self;
    }

    /**
     * Start animation
     * @return
     */
    DotAnimation.prototype._bindEvents = function() {
        var self = this;

        self.$block.bind('startDotAnimation', function() {
            self._start();
        });

        self.$block.bind('stopDotAnimation', function() {
            self._stop();
        });

        return self;
    },

    /**
     * Start animation
     * @return
     */
    DotAnimation.prototype._start = function(i) {
        var self = this;

        var i = 0;
        var html = self.$block.html();

        self.intervalId = setInterval(function() {
            i = ++i % (self.params['numDots'] + 1 );
            self.$block.html(html + Array(i+1).join(self.params['dotElement']));
            }, self.params['speed']);

        return self;
    };

    /**
     * Stop animation
     * @return
     */
    DotAnimation.prototype._stop = function() {
        var self = this;
        clearInterval(self.intervalId);

        return self;
    };

    /**
     * Wrapper for JQuery
     * @param {Objeet} params
     * @return DotAnimation object
     */
    $.fn.dotAnimation = function(params) {
        return new DotAnimation(this, params);
    };

})(jQuery);