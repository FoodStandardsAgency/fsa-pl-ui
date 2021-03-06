/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=fb4e6cfc76c02485b96fc14a397fdd3a)
 * Config saved to config.json and https://gist.github.com/fb4e6cfc76c02485b96fc14a397fdd3a
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
            '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;

        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle()
    };

    Collapse.VERSION = '3.3.6';

    Collapse.TRANSITION_DURATION = 350;

    Collapse.DEFAULTS = {
        toggle: true
    };

    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width');
        return hasWidth ? 'width' : 'height'
    };

    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return;

        var activesData;
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse');
            if (activesData && activesData.transitioning) return
        }

        var startEvent = $.Event('show.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        if (actives && actives.length) {
            Plugin.call(actives, 'hide');
            activesData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension();

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true);

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true);

        this.transitioning = 1;

        var complete = function () {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('');
            this.transitioning = 0;
            this.$element
                .trigger('shown.bs.collapse')
        };

        if (!$.support.transition) return complete.call(this);

        var scrollSize = $.camelCase(['scroll', dimension].join('-'));

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    };

    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return;

        var startEvent = $.Event('hide.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        var dimension = this.dimension();

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false);

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false);

        this.transitioning = 1;

        var complete = function () {
            this.transitioning = 0;
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse')
        };

        if (!$.support.transition) return complete.call(this);

        this.$element
            [dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    };

    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
    };

    Collapse.prototype.getParent = function () {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function (i, element) {
                var $element = $(element);
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this))
            .end()
    };

    Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in');

        $element.attr('aria-expanded', isOpen);
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen)
    };

    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr('data-target')
            || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

        return $(target);
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.collapse');
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)));
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse;

    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old;
        return this;
    };


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this = $(this);

        if (!$this.attr('data-target')) e.preventDefault();

        var $target = getTargetFromTrigger($this);
        var data = $target.data('bs.collapse');
        var option = data ? 'toggle' : $this.data();

        Plugin.call($target, option);
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]}
            }
        }

        return false; // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one('bsTransitionEnd', function () {
            called = true
        });
        var callback = function () {
            if (!called) $($el).trigger($.support.transition.end)
        };
        setTimeout(callback, duration);
        return this;
    }

    $(function () {
        $.support.transition = transitionEnd();

        if (!$.support.transition) return;

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);

+function ($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function (element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element);
        // jscs:enable requireDollarBeforejQueryAssignment
    };

    Tab.VERSION = '3.3.6';

    Tab.TRANSITION_DURATION = 150;

    Tab.prototype.show = function () {
        var $this = this.element;
        var $ul = $this.closest('ul:not(.dropdown-menu)');
        var selector = $this.data('target');

        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return;

        var $previous = $ul.find('.active:last a');
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        });
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        });

        $previous.trigger(hideEvent);
        $this.trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

        var $target = $(selector);

        this.activate($this.closest('li'), $ul);
        this.activate($target, $target.parent(), function () {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            });
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    };

    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active');
        var transition = callback
            && $.support.transition
            && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false);

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true);

            if (transition) {
                element[0].offsetWidth; // reflow for transition
                element.addClass('in');
            } else {
                element.removeClass('fade');
            }

            if (element.parent('.dropdown-menu').length) {
                element
                    .closest('li.dropdown')
                    .addClass('active')
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true);
            }

            callback && callback()
        }

        $active.length && transition ?
            $active
                .one('bsTransitionEnd', next)
                .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next();

        $active.removeClass('in')
    };


    // TAB PLUGIN DEFINITION
    // =====================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.tab');

            if (!data) $this.data('bs.tab', (data = new Tab(this)));
            if (typeof option == 'string') data[option]();
        })
    }

    var old = $.fn.tab;

    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this
    };


    // TAB DATA-API
    // ============

    var clickHandler = function (e) {
        e.preventDefault();
        Plugin.call($(this), 'show')
    };

    $(document)
        .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
        .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=e97d375e27a7dd6324e3048d84c25feb)
 * Config saved to config.json and https://gist.github.com/e97d375e27a7dd6324e3048d84c25feb
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)

        this.$target = $(this.options.target)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;

        this.checkPosition()
    }

    Affix.VERSION = '3.3.6';

    Affix.RESET = 'affix affix-top affix-bottom';

    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };

    Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom';
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;

        if (offsetTop != null && scrollTop <= offsetTop) return 'top';
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom';

        return false
    };

    Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass('affix');
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return (this.pinnedOffset = position.top - scrollTop)
    };

    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    };

    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return;

        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());

        if (typeof offset != 'object')         offsetBottom = offsetTop = offset;
        if (typeof offsetTop == 'function')    offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '');

            var affixType = 'affix' + (affix ? '-' + affix : '');
            var e = $.Event(affixType + '.bs.affix');

            this.$element.trigger(e);

            if (e.isDefaultPrevented()) return;

            this.affixed = affix;
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

            this.$element
                .removeClass(Affix.RESET)
                .addClass(affixType)
                .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }

        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    };


    // AFFIX PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.affix');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)));
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix;

    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function () {
        $.fn.affix = old;
        return this
    };


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this);
            var data = $spy.data();

            data.offset = data.offset || {};

            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop != null) data.offset.top = data.offsetTop;

            Plugin.call($spy, data)
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || '') + ' .nav li > a';
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
        this.refresh();
        this.process();
    }

    ScrollSpy.VERSION = '3.3.6';

    ScrollSpy.DEFAULTS = {
        offset: 10
    };

    ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };

    ScrollSpy.prototype.refresh = function () {
        var that = this;
        var offsetMethod = 'offset';
        var offsetBase = 0;

        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position';
            offsetBase = this.$scrollElement.scrollTop();
        }

        this.$body
            .find(this.selector)
            .map(function () {
                var $el = $(this);
                var href = $el.data('target') || $el.attr('href');
                var $href = /^#./.test(href) && $(href);

                return ($href
                    && $href.length
                    && $href.is(':visible')
                    && [[$href[offsetMethod]().top + offsetBase, href]]) || null
            })
            .sort(function (a, b) {
                return a[0] - b[0]
            })
            .each(function () {
                that.offsets.push(this[0]);
                that.targets.push(this[1]);
            })
    };

    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null;
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
            && this.activate(targets[i])
        }
    };

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target;

        this.clear();

        var selector = this.selector +
            '[data-target="' + target + '"],' +
            this.selector + '[href="' + target + '"]';

        var active = $(selector)
            .parents('li')
            .addClass('active');

        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active')
        }

        active.trigger('activate.bs.scrollspy')
    };

    ScrollSpy.prototype.clear = function () {
        $(this.selector)
            .parentsUntil(this.options.target, '.active')
            .removeClass('active')
    };


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.scrollspy');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.scrollspy;

    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old;
        return this
    };


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this);
            Plugin.call($spy, $spy.data())
        })
    })

}(jQuery);


// Set elements to the same height (uses height of tallest element)
// taken from https://codepen.io/micahgodbolt/pen/FgqLc
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto');
        topPosition = $el.position().top;

        if (currentRowStart != topPosition) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

$(window).load(function () {
    equalheight('.js-equal-height');
});

$(window).resize(function () {
    equalheight('.js-equal-height');
});

//responsive tables
$(document).ready(function () {
    var switched = false;
    var updateTables = function () {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            $("table.responsive").each(function (i, element) {
                splitTable($(element));
            });
            return true;
        }
        else if (switched && ($(window).width() > 767)) {
            switched = false;
            $("table.responsive").each(function (i, element) {
                unsplitTable($(element));
            });
        }
    };

    $(window).load(updateTables);
    $(window).on("redraw", function () {
        switched = false;
        updateTables();
    }); // An event to listen for
    $(window).on("resize", updateTables);


    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsive");

        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");

        setCellHeights(original, copy);
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }

    function setCellHeights(original, copy) {
        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            heights = [];

        tr.each(function (index) {
            var self = $(this),
                tx = self.find('th, td');

            tx.each(function () {
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;
                if (height > heights[index]) heights[index] = height;
            });

        });

        tr_copy.each(function (index) {
            $(this).height(heights[index]);
        });
    }
});

//calculate fixed sidebar width and height
function fixSidebar() {
    var bodyHeight = $('body').height();
    var sidebarTop = $('#sidebar-start').offset();
    var sidebarBottom = $('#sidebar-end').offset();
    var menuHeight = $('#sidebar').height();

    if (menuHeight > 1) {
        $('#sidebar').affix({
            offset: {
                top: sidebarTop.top,
                bottom: bodyHeight - sidebarBottom.top + (menuHeight / 4)
            }
        });
    }
};

$(document).ready(function () {
    fixSidebar();
    var menuWidth = $('#sidebar-width').width();
    $('#sidebar').css({width: menuWidth});
});

$(window).on('resize', function () {
    fixSidebar();
    var menuWidth = $('#sidebar-width').width();
    $('#sidebar').css({width: menuWidth});
});


