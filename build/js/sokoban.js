(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = require('domtastic');

$('.sokoban').html('Test');

},{"domtastic":14}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module Array
 */

var _util = require("./util");

var _each = _util.each;
var toArray = _util.toArray;

var _selector = require("./selector");

var $ = _selector.$;
var matches = _selector.matches;

var ArrayProto = Array.prototype;

/**
 * Checks if the given callback returns a true(-ish) value for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Boolean} Whether each element passed the callback check.
 * @example
 *     $('.items').every(function(element) {
 *         return element.hasAttribute('active')
 *     });
 *     // true/false
 */

var every = ArrayProto.every;

/**
 * Filter the collection by selector or function, and return a new collection with the result.
 *
 * @param {String|Function} selector Selector or function to filter the collection.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} A new wrapped collection
 * @chainable
 * @example
 *     $('.items').filter('.active');
 * @example
 *     $('.items').filter(function(element) {
 *         return element.hasAttribute('active')
 *     });
 */

function filter(selector, thisArg) {
  var callback = typeof selector === "function" ? selector : function (element) {
    return matches(element, selector);
  };
  return $(ArrayProto.filter.call(this, callback, thisArg));
}

/**
 * Execute a function for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').forEach(function(element) {
 *         element.style.color = 'evergreen';
 *     );
 */

function forEach(callback, thisArg) {
  return _each(this, callback, thisArg);
}

var each = forEach;

/**
 * Returns the index of an element in the collection.
 *
 * @param {Node} element
 * @return {Number} The zero-based index, -1 if not found.
 * @example
 *     $('.items').indexOf(element);
 *     // 2
 */

var indexOf = ArrayProto.indexOf;

/**
 * Create a new collection by executing the callback for each element in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
 * @return {Array} Collection with the return value of the executed callback for each element.
 * @example
 *     $('.items').map(function(element) {
 *         return element.getAttribute('name')
 *     });
 *     // ['ever', 'green']
 */

var map = ArrayProto.map;

/**
 * Removes the last element from the collection, and returns that element.
 *
 * @return {Object} The last element from the collection.
 * @example
 *     var lastElement = $('.items').pop();
 */

var pop = ArrayProto.pop;

/**
 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').push(element);
 */

var push = ArrayProto.push;

/**
 * Apply a function against each element in the collection, and this accumulator function has to reduce it
 * to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     $('.items').reduce(function(previousValue, element, index, collection) {
 *         return previousValue + element.clientHeight;
 *     }, 0);
 *     // [total height of elements]
 */

var reduce = ArrayProto.reduce;

/**
 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
 * to reduce it to a single value.
 *
 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
 * @example
 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
 *         return previousValue + element.textContent;
 *     }, '')
 *     // [reversed text of elements]
 */

var reduceRight = ArrayProto.reduceRight;

/**
 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
 *
 * @return {Object} The wrapped collection, reversed
 * @chainable
 * @example
 *     $('.items').reverse();
 */

function reverse() {
  return $(toArray(this).reverse());
}

/**
 * Removes the first element from the collection, and returns that element.
 *
 * @return {Object} The first element from the collection.
 * @example
 *     var firstElement = $('.items').shift();
 */

var shift = ArrayProto.shift;

/**
 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
 *
 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
 * @return {Boolean} Whether any element passed the callback check.
 * @example
 *     $('.items').some(function(element) {
 *         return element.hasAttribute('active')
 *     });
 *     // true/false
 */

var some = ArrayProto.some;

/**
 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
 *
 * @param {Object} element Element(s) to add to the collection
 * @return {Number} The new length of the collection
 * @example
 *     $('.items').unshift(element);
 */

var unshift = ArrayProto.unshift;

/*
 * Export interface
 */

exports.each = each;
exports.every = every;
exports.filter = filter;
exports.forEach = forEach;
exports.indexOf = indexOf;
exports.map = map;
exports.pop = pop;
exports.push = push;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reverse = reverse;
exports.shift = shift;
exports.some = some;
exports.unshift = unshift;
},{"./selector":18,"./util":20}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Attr
 */

var each = require("./util").each;

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function camelize(value) {
    return value.replace(/-([\da-z])/gi, function (matches, letter) {
        return letter.toUpperCase();
    });
}

function dasherize(value) {
    return value.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
 *
 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
 * @param {String} [value] The value of the style property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').css('padding-left'); // get
 *     $('.item').css('color', '#f00'); // set
 *     $('.item').css({'border-width', '1px'}, {'display', 'inline-block}); // set multiple
 */

function css(key, value) {

    var styleProps, prop, val;

    if (typeof key === "string") {
        key = camelize(key);

        if (typeof value === "undefined") {
            var element = this.nodeType ? this : this[0];
            if (element) {
                val = element.style[key];
                return isNumeric(val) ? parseFloat(val) : val;
            }
            return undefined;
        }

        styleProps = {};
        styleProps[key] = value;
    } else {
        styleProps = key;
        for (prop in styleProps) {
            val = styleProps[prop];
            delete styleProps[prop];
            styleProps[camelize(prop)] = val;
        }
    }

    each(this, function (element) {
        for (prop in styleProps) {
            if (styleProps[prop] || styleProps[prop] === 0) {
                element.style[prop] = styleProps[prop];
            } else {
                element.style.removeProperty(dasherize(prop));
            }
        }
    });

    return this;
}

/*
 * Export interface
 */

exports.css = css;
},{"./util":20}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Attr
 */

var each = require("../util").each;

/**
 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
 *
 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
 * @param {String} [value] The value of the attribute to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').attr('attrName'); // get
 *     $('.item').attr('attrName', 'attrValue'); // set
 *     $('.item').attr({'attr1', 'value1'}, {'attr2', 'value2}); // set multiple
 */

function attr(key, value) {

    if (typeof key === "string" && typeof value === "undefined") {
        var element = this.nodeType ? this : this[0];
        return element ? element.getAttribute(key) : undefined;
    }

    each(this, function (element) {
        if (typeof key === "object") {
            for (var attr in key) {
                element.setAttribute(attr, key[attr]);
            }
        } else {
            element.setAttribute(key, value);
        }
    });

    return this;
}

/**
 * Remove attribute from each element in the collection.
 *
 * @param {String} key Attribute name
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeAttr('attrName');
 */

function removeAttr(key) {
    each(this, function (element) {
        element.removeAttribute(key);
    });
    return this;
}

/*
 * Export interface
 */

exports.attr = attr;
exports.removeAttr = removeAttr;
},{"../util":20}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Class
 */

var each = require("../util").each;

/**
 * Add a class to the element(s)
 *
 * @param {String} value Space-separated class name(s) to add to the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').addClass('bar');
 *     $('.item').addClass('bar foo');
 */

function addClass(value) {
    if (value && value.length) {
        each(value.split(" "), _each.bind(this, "add"));
    }
    return this;
}

/**
 * Remove a class from the element(s)
 *
 * @param {String} value Space-separated class name(s) to remove from the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').removeClass('bar');
 *     $('.items').removeClass('bar foo');
 */

function removeClass(value) {
    if (value && value.length) {
        each(value.split(" "), _each.bind(this, "remove"));
    }
    return this;
}

/**
 * Toggle a class at the element(s)
 *
 * @param {String} value Space-separated class name(s) to toggle at the element(s).
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').toggleClass('bar');
 *     $('.item').toggleClass('bar foo');
 */

function toggleClass(value) {
    if (value && value.length) {
        each(value.split(" "), _each.bind(this, "toggle"));
    }
    return this;
}

/**
 * Check if the element(s) have a class.
 *
 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
 * returns `true` if _any_ of them contains the class name.
 * @return {Boolean} Whether the element's class attribute contains the class name.
 * @example
 *     $('.item').hasClass('bar');
 */

function hasClass(value) {
    return (this.nodeType ? [this] : this).some(function (element) {
        return element.classList.contains(value);
    });
}

/**
 * Specialized iteration, applying `fn` of the classList API to each element.
 *
 * @param {String} fnName
 * @param {String} className
 * @private
 */

function _each(fnName, className) {
    each(this, function (element) {
        element.classList[fnName](className);
    });
}

/*
 * Export interface
 */

exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
exports.hasClass = hasClass;
},{"../util":20}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module contains
 */

/**
 * Test whether an element contains another element in the DOM.
 *
 * @param {Element} container The element that may contain the other element.
 * @param {Element} element The element that may be a descendant of the other element.
 * @return {Boolean} Whether the `container` element contains the `element`.
 * @example
 *     $.contains(parentElement, childElement);
 *     // true/false
 */

function contains(container, element) {
    if (!container || !element || container === element) {
        return false;
    } else if (container.contains) {
        return container.contains(element);
    } else if (container.compareDocumentPosition) {
        return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
    }
    return false;
}

/*
 * Export interface
 */

exports.contains = contains;
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Data
 */

var each = require("../util").each;

var dataKeyProp = "__domtastic_data__";

/**
 * Get data from first element, or set data for each element in the collection.
 *
 * @param {String} key The key for the data to get or set.
 * @param {String} [value] The data to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').data('attrName'); // get
 *     $('.item').data('attrName', {any: 'data'}); // set
 */

function data(key, value) {

    if (typeof key === "string" && typeof value === "undefined") {
        var element = this.nodeType ? this : this[0];
        return element && element[dataKeyProp] ? element[dataKeyProp][key] : undefined;
    }

    each(this, function (element) {
        element[dataKeyProp] = element[dataKeyProp] || {};
        element[dataKeyProp][key] = value;
    });

    return this;
}

/**
 * Get property from first element, or set property on each element in the collection.
 *
 * @param {String} key The name of the property to get or set.
 * @param {String} [value] The value of the property to set.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prop('attrName'); // get
 *     $('.item').prop('attrName', 'attrValue'); // set
 */

function prop(key, value) {

    if (typeof key === "string" && typeof value === "undefined") {
        var element = this.nodeType ? this : this[0];
        return element && element ? element[key] : undefined;
    }

    each(this, function (element) {
        element[key] = value;
    });

    return this;
}

/*
 * Export interface
 */

exports.data = data;
exports.prop = prop;
},{"../util":20}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module DOM (extra)
 */

var each = require("../util").each;

var _ = require(".");

var append = _.append;
var before = _.before;
var after = _.after;

var $ = require("../selector").$;

/**
 * Append each element in the collection to the specified element(s).
 *
 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').appendTo(container);
 */

function appendTo(element) {
    var context = typeof element === "string" ? $(element) : element;
    append.call(context, this);
    return this;
}

/*
 * Empty each element in the collection.
 *
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').empty();
 */

function empty() {
    return each(this, function (element) {
        element.innerHTML = "";
    });
}

/**
 * Remove the collection from the DOM.
 *
 * @return {Array} Array containing the removed elements
 * @example
 *     $('.item').remove();
 */

function remove() {
    return each(this, function (element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });
}

/**
 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
 *
 * @return {Array} Array containing the replaced elements
 */

function replaceWith() {
    return before.apply(this, arguments).remove();
}

/**
 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').text('New content');
 */

function text(value) {

    if (value === undefined) {
        return this[0].textContent;
    }

    each(this, function (element) {
        element.textContent = "" + value;
    });

    return this;
}

/**
 * Get the `value` from the first, or set the `value` of each element in the collection.
 *
 * @param {String} [value]
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('input.firstName').value('New value');
 */

function val(value) {

    if (value === undefined) {
        return this[0].value;
    }

    each(this, function (element) {
        element.value = value;
    });

    return this;
}

/*
 * Export interface
 */

exports.appendTo = appendTo;
exports.empty = empty;
exports.remove = remove;
exports.replaceWith = replaceWith;
exports.text = text;
exports.val = val;
},{".":10,"../selector":18,"../util":20}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module HTML
 */

var each = require("../util").each;

/*
 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
 *
 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').html();
 *     $('.item').html('<span>more</span>');
 */

function html(fragment) {

  if (typeof fragment !== "string") {
    var element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }

  each(this, function (element) {
    element.innerHTML = fragment;
  });

  return this;
}

/*
 * Export interface
 */

exports.html = html;
},{"../util":20}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module DOM
 */

var toArray = require("../util").toArray;

var $ = require("../selector").$;

var forEach = Array.prototype.forEach;

/**
 * Append element(s) to each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to append to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').append('<p>more</p>');
 */

function append(element) {
    if (this instanceof Node) {
        if (typeof element === "string") {
            this.insertAdjacentHTML("beforeend", element);
        } else {
            if (element instanceof Node) {
                this.appendChild(element);
            } else {
                var elements = element instanceof NodeList ? toArray(element) : element;
                forEach.call(elements, this.appendChild.bind(this));
            }
        }
    } else {
        _each(this, append, element);
    }
    return this;
}

/**
 * Place element(s) at the beginning of each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').prepend('<span>start</span>');
 */

function prepend(element) {
    if (this instanceof Node) {
        if (typeof element === "string") {
            this.insertAdjacentHTML("afterbegin", element);
        } else {
            if (element instanceof Node) {
                this.insertBefore(element, this.firstChild);
            } else {
                var elements = element instanceof NodeList ? toArray(element) : element;
                forEach.call(elements.reverse(), prepend.bind(this));
            }
        }
    } else {
        _each(this, prepend, element);
    }
    return this;
}

/**
 * Place element(s) before each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
 * Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').before('<p>prefix</p>');
 */

function before(element) {
    if (this instanceof Node) {
        if (typeof element === "string") {
            this.insertAdjacentHTML("beforebegin", element);
        } else {
            if (element instanceof Node) {
                this.parentNode.insertBefore(element, this);
            } else {
                var elements = element instanceof NodeList ? toArray(element) : element;
                forEach.call(elements, before.bind(this));
            }
        }
    } else {
        _each(this, before, element);
    }
    return this;
}

/**
 * Place element(s) after each element in the collection.
 *
 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.items').after('<span>suf</span><span>fix</span>');
 */

function after(element) {
    if (this instanceof Node) {
        if (typeof element === "string") {
            this.insertAdjacentHTML("afterend", element);
        } else {
            if (element instanceof Node) {
                this.parentNode.insertBefore(element, this.nextSibling);
            } else {
                var elements = element instanceof NodeList ? toArray(element) : element;
                forEach.call(elements.reverse(), after.bind(this));
            }
        }
    } else {
        _each(this, after, element);
    }
    return this;
}

/**
 * Clone a wrapped object.
 *
 * @return {Object} Wrapped collection of cloned nodes.
 * @example
 *     $(element).clone();
 */

function clone() {
    return $(_clone(this));
}

/**
 * Clone an object
 *
 * @param {String|Node|NodeList|Array} element The element(s) to clone.
 * @return {String|Node|NodeList|Array} The cloned element(s)
 * @private
 */

function _clone(element) {
    if (typeof element === "string") {
        return element;
    } else if (element instanceof Node) {
        return element.cloneNode(true);
    } else if ("length" in element) {
        return [].map.call(element, function (el) {
            return el.cloneNode(true);
        });
    }
    return element;
}

/**
 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
 *
 * @param {NodeList|Array} collection
 * @param {Function} fn
 * @param {Node} element
 * @private
 */

function _each(collection, fn, element) {
    var l = collection.length;
    while (l--) {
        var elm = l === 0 ? element : _clone(element);
        fn.call(collection[l], elm);
    }
}

/*
 * Export interface
 */

exports.append = append;
exports.prepend = prepend;
exports.before = before;
exports.after = after;
exports.clone = clone;
},{"../selector":18,"../util":20}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Events
 */

var each = require("../util").each;

var closest = require("../selector/closest").closest;

/**
 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
 *
 * @param {String} eventNames List of space-separated event types to be added to the element(s)
 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').on('click', callback);
 *     $('.container').on('click focus', '.item', handler);
 */

function on(eventNames, selector, handler, useCapture) {

    if (typeof selector === "function") {
        handler = selector;
        selector = null;
    }

    var parts, namespace, eventListener;

    eventNames.split(" ").forEach(function (eventName) {

        parts = eventName.split(".");
        eventName = parts[0] || null;
        namespace = parts[1] || null;

        eventListener = proxyHandler(handler);

        each(this, function (element) {

            if (selector) {
                eventListener = delegateHandler.bind(element, selector, eventListener);
            }

            element.addEventListener(eventName, eventListener, useCapture || false);

            getHandlers(element).push({
                eventName: eventName,
                handler: handler,
                eventListener: eventListener,
                selector: selector,
                namespace: namespace
            });
        });
    }, this);

    return this;
}

/**
 * Shorthand for `removeEventListener`.
 *
 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Boolean} useCapture=false
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').off('click', callback);
 *     $('#my-element').off('myEvent myOtherEvent');
 *     $('.item').off();
 */

function off(_x, selector, handler, useCapture) {
    var eventNames = arguments[0] === undefined ? "" : arguments[0];

    if (typeof selector === "function") {
        handler = selector;
        selector = null;
    }

    var parts, namespace, handlers;

    eventNames.split(" ").forEach(function (eventName) {

        parts = eventName.split(".");
        eventName = parts[0] || null;
        namespace = parts[1] || null;

        each(this, function (element) {

            handlers = getHandlers(element);

            each(handlers.filter(function (item) {
                return (!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector);
            }), function (item) {
                element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
                handlers.splice(handlers.indexOf(item), 1);
            });

            if (!eventName && !namespace && !selector && !handler) {
                clearHandlers(element);
            } else if (handlers.length === 0) {
                clearHandlers(element);
            }
        });
    }, this);

    return this;
}

/**
 * Get event handlers from an element
 *
 * @private
 * @param {Node} element
 * @return {Array}
 */

var eventKeyProp = "__domtastic_event__";
var id = 1;
var handlers = {};
var unusedKeys = [];

function getHandlers(element) {
    if (!element[eventKeyProp]) {
        element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
    }
    var key = element[eventKeyProp];
    return handlers[key] || (handlers[key] = []);
}

/**
 * Clear event handlers for an element
 *
 * @private
 * @param {Node} element
 */

function clearHandlers(element) {
    var key = element[eventKeyProp];
    if (handlers[key]) {
        handlers[key] = null;
        element[key] = null;
        unusedKeys.push(key);
    }
}

/**
 * Function to create a handler that augments the event object with some extra methods,
 * and executes the callback with the event and the event data (i.e. `event.detail`).
 *
 * @private
 * @param handler Callback to execute as `handler(event, data)`
 * @return {Function}
 */

function proxyHandler(handler) {
    return function (event) {
        handler.call(this, augmentEvent(event), event.detail);
    };
}

/**
 * Attempt to augment events and implement something closer to DOM Level 3 Events.
 *
 * @private
 * @param {Object} event
 * @return {Function}
 */

var augmentEvent = (function () {

    var methodName,
        eventMethods = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    },
        returnTrue = function () {
        return true;
    },
        returnFalse = function () {
        return false;
    };

    return function (event) {
        if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
            for (methodName in eventMethods) {
                (function (methodName, testMethodName, originalMethod) {
                    event[methodName] = function () {
                        this[testMethodName] = returnTrue;
                        return originalMethod && originalMethod.apply(this, arguments);
                    };
                    event[testMethodName] = returnFalse;
                })(methodName, eventMethods[methodName], event[methodName]);
            }
            if (event._preventDefault) {
                event.preventDefault();
            }
        }
        return event;
    };
})();

/**
 * Function to test whether delegated events match the provided `selector` (filter),
 * if the event propagation was stopped, and then actually call the provided event handler.
 * Use `this` instead of `event.currentTarget` on the event object.
 *
 * @private
 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
 * @param {Function} handler Event handler
 * @param {Event} event
 */

function delegateHandler(selector, handler, event) {
    var eventTarget = event._target || event.target,
        currentTarget = closest.call([eventTarget], selector, this)[0];
    if (currentTarget && currentTarget !== this) {
        if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
            handler.call(currentTarget, event);
        }
    }
}

var bind = on,
    unbind = off;

/*
 * Export interface
 */

exports.on = on;
exports.off = off;
exports.bind = bind;
exports.unbind = unbind;
},{"../selector/closest":16,"../util":20}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module Ready
 */

/**
 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
 *
 * @param handler Callback to execute when initial DOM content is loaded.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $(document).ready(callback);
 */

function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener("DOMContentLoaded", handler, false);
  }
  return this;
}

/*
 * Export interface
 */

exports.ready = ready;
},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module trigger
 */

var _util = require("../util");

var global = _util.global;
var each = _util.each;

var contains = require("../dom/contains").contains;

var reMouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
    reKeyEvent = /^key/;

/**
 * Trigger event at element(s)
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     $('.item').trigger('anyEventType');
 */

function trigger(type, data) {
    var params = arguments[2] === undefined ? {} : arguments[2];

    params.bubbles = typeof params.bubbles === "boolean" ? params.bubbles : true;
    params.cancelable = typeof params.cancelable === "boolean" ? params.cancelable : true;
    params.preventDefault = typeof params.preventDefault === "boolean" ? params.preventDefault : false;
    params.detail = data;

    var EventConstructor = getEventConstructor(type),
        event = new EventConstructor(type, params);

    event._preventDefault = params.preventDefault;

    each(this, function (element) {
        if (!params.bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
            dispatchEvent(element, event);
        } else {
            triggerForPath(element, type, params);
        }
    });
    return this;
}

function getEventConstructor(type) {
    return supportsOtherEventConstructors ? reMouseEvent.test(type) ? MouseEvent : reKeyEvent.test(type) ? KeyboardEvent : CustomEvent : CustomEvent;
}

/**
 * Trigger event at first element in the collection. Similar to `trigger()`, except:
 *
 * - Event does not bubble
 * - Default event behavior is prevented
 * - Only triggers handler for first matching element
 *
 * @param {String} type Type of the event
 * @param {Object} data Data to be sent with the event
 * @example
 *     $('form').triggerHandler('submit');
 */

function triggerHandler(type, data) {
    if (this[0]) {
        trigger.call(this[0], type, data, { bubbles: false, preventDefault: true });
    }
}

/**
 * Check whether the element is attached to (or detached from) the document
 *
 * @private
 * @param {Node} element Element to test
 * @return {Boolean}
 */

function isAttachedToDocument(element) {
    if (element === window || element === document) {
        return true;
    }
    return contains(element.ownerDocument.documentElement, element);
}

/**
 * Dispatch the event at the element and its ancestors.
 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
 *
 * @private
 * @param {Node} element First element to dispatch the event at
 * @param {String} type Type of the event
 * @param {Object} [params] Event parameters (optional)
 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
 * Will be set to false (but shouldn't matter since events don't bubble anyway).
 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
 * @param {Mixed} params.detail=undefined Additional information about the event.
 */

function triggerForPath(element, type) {
    var params = arguments[2] === undefined ? {} : arguments[2];

    params.bubbles = false;
    var event = new CustomEvent(type, params);
    event._target = element;
    do {
        dispatchEvent(element, event);
    } while (element = element.parentNode);
}

/**
 * Dispatch event to element, but call direct event methods instead if available
 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
 *
 * @private
 * @param {Node} element Element to dispatch the event at
 * @param {Object} event Event to dispatch
 */

var directEventMethods = ["blur", "focus", "select", "submit"];

function dispatchEvent(element, event) {
    if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === "function" && !event._preventDefault && !event.cancelable) {
        element[event.type]();
    } else {
        element.dispatchEvent(event);
    }
}

/**
 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill).
 * Needed to support IE (9, 10, 11) & PhantomJS
 */

(function () {
    function CustomEvent(event) {
        var params = arguments[1] === undefined ? { bubbles: false, cancelable: false, detail: undefined } : arguments[1];

        var customEvent = document.createEvent("CustomEvent");
        customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return customEvent;
    }

    CustomEvent.prototype = global.CustomEvent && global.CustomEvent.prototype;
    global.CustomEvent = CustomEvent;
})();

/*
 * Are events bubbling in detached DOM trees?
 * @private
 */

var isEventBubblingInDetachedTree = (function () {
    var isBubbling = false,
        doc = global.document;
    if (doc) {
        var parent = doc.createElement("div"),
            child = parent.cloneNode();
        parent.appendChild(child);
        parent.addEventListener("e", function () {
            isBubbling = true;
        });
        child.dispatchEvent(new CustomEvent("e", { bubbles: true }));
    }
    return isBubbling;
})();

var supportsOtherEventConstructors = (function () {
    try {
        new window.MouseEvent("click");
    } catch (e) {
        return false;
    }
    return true;
})();

/*
 * Export interface
 */

exports.trigger = trigger;
exports.triggerHandler = triggerHandler;
},{"../dom/contains":6,"../util":20}],14:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

/**
 * @module API
 */

var extend = require("./util").extend;

var api = {},
    $ = {};

// Import modules to build up the API

var array = _interopRequireWildcard(require("./array"));

var attr = _interopRequireWildcard(require("./dom/attr"));

var class_ = _interopRequireWildcard(require("./dom/class"));

var contains = _interopRequireWildcard(require("./dom/contains"));

var css = _interopRequireWildcard(require("./css"));

var data = _interopRequireWildcard(require("./dom/data"));

var dom = _interopRequireWildcard(require("./dom"));

var dom_extra = _interopRequireWildcard(require("./dom/extra"));

var event = _interopRequireWildcard(require("./event"));

var html = _interopRequireWildcard(require("./dom/html"));

var noconflict = _interopRequireWildcard(require("./noconflict"));

var ready = _interopRequireWildcard(require("./event/ready"));

var selector = _interopRequireWildcard(require("./selector"));

var closest = _interopRequireWildcard(require("./selector/closest"));

var selector_extra = _interopRequireWildcard(require("./selector/extra"));

var trigger = _interopRequireWildcard(require("./event/trigger"));

var type = _interopRequireWildcard(require("./type"));

if (typeof selector !== "undefined") {
    $ = selector.$;
    $.matches = selector.matches;
    api.find = selector.find;
}

extend($, contains, noconflict, type);
extend(api, array, attr, class_, closest, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

$.fn = api;

// Version

$.version = "0.10.0";

// Util

$.extend = extend;

// Export interface

module.exports = $;
},{"./array":2,"./css":3,"./dom":10,"./dom/attr":4,"./dom/class":5,"./dom/contains":6,"./dom/data":7,"./dom/extra":8,"./dom/html":9,"./event":11,"./event/ready":12,"./event/trigger":13,"./noconflict":15,"./selector":18,"./selector/closest":16,"./selector/extra":17,"./type":19,"./util":20}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module noConflict
 */

var global = require("./util").global;

/*
 * Save the previous value of the global `$` variable, so that it can be restored later on.
 * @private
 */

var previousLib = global.$;

/**
 * In case another library sets the global `$` variable before DOMtastic does,
 * this method can be used to return the global `$` to that other library.
 *
 * @return {Object} Reference to DOMtastic.
 * @example
 *     var domtastic = $.noConflict();
 */

function noConflict() {
  global.$ = previousLib;
  return this;
}

/*
 * Export interface
 */

exports.noConflict = noConflict;
},{"./util":20}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module closest
 */

var matches = require(".").matches;

var _util = require("../util");

var each = _util.each;
var uniq = _util.uniq;

/**
 * Return the closest element matching the selector (starting by itself) for each element in the collection.
 *
 * @param {String} selector Filter
 * @param {Object} [context] If provided, matching elements must be a descendant of this element
 * @return {Object} New wrapped collection (containing zero or one element)
 * @chainable
 * @example
 *     $('.selector').closest('.container');
 */

var closest = (function () {

    function closest(selector, context) {
        var nodes = [];
        each(this, function (node) {
            while (node && node !== context) {
                if (matches(node, selector)) {
                    nodes.push(node);
                    break;
                }
                node = node.parentElement;
            }
        });
        return $(uniq(nodes));
    }

    return !Element.prototype.closest ? closest : function (selector, context) {
        if (!context) {
            var nodes = [];
            each(this, function (node) {
                var n = node.closest(selector);
                if (n) {
                    nodes.push(n);
                }
            });
            return $(uniq(nodes));
        } else {
            return closest.call(this, selector, context);
        }
    };
})();

/*
 * Export interface
 */

exports.closest = closest;
},{".":18,"../util":20}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Selector (extra)
 */

var _util = require("../util");

var each = _util.each;
var toArray = _util.toArray;

var _ = require(".");

var $ = _.$;
var matches = _.matches;

/**
 * Return children of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').children();
 *     $('.selector').children('.filter');
 */

function children(selector) {
    var nodes = [];
    each(this, function (element) {
        if (element.children) {
            each(element.children, function (child) {
                if (!selector || selector && matches(child, selector)) {
                    nodes.push(child);
                }
            });
        }
    });
    return $(nodes);
}

/**
 * Return child nodes of each element in the collection, including text and comment nodes.
 *
 * @return {Object} New wrapped collection
 * @example
 *     $('.selector').contents();
 */

function contents() {
    var nodes = [];
    each(this, function (element) {
        nodes.push.apply(nodes, toArray(element.childNodes));
    });
    return $(nodes);
}

/**
 * Return a collection containing only the one at the specified index.
 *
 * @param {Number} index
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.items').eq(1)
 *     // The second item; result is the same as doing $($('.items')[1]);
 */

function eq(index) {
    return slice.call(this, index, index + 1);
}

/**
 * Return the DOM element at the specified index.
 *
 * @param {Number} index
 * @return {Node} Element at the specified index
 * @example
 *     $('.items').get(1)
 *     // The second element; result is the same as doing $('.items')[1];
 */

function get(index) {
    return this[index];
}

/**
 * Return the parent elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').parent();
 *     $('.selector').parent('.filter');
 */

function parent(selector) {
    var nodes = [];
    each(this, function (element) {
        if (!selector || selector && matches(element.parentNode, selector)) {
            nodes.push(element.parentNode);
        }
    });
    return $(nodes);
}

/**
 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
 *
 * @param {String} [selector] Filter
 * @return {Object} New wrapped collection
 * @chainable
 * @example
 *     $('.selector').siblings();
 *     $('.selector').siblings('.filter');
 */

function siblings(selector) {
    var nodes = [];
    each(this, function (element) {
        each(element.parentNode.children, function (sibling) {
            if (sibling !== element && (!selector || selector && matches(sibling, selector))) {
                nodes.push(sibling);
            }
        });
    });
    return $(nodes);
}

/**
 * Create a new, sliced collection.
 *
 * @param {Number} start
 * @param {Number} end
 * @return {Object} New wrapped collection
 * @example
 *     $('.items').slice(1, 3)
 *     // New wrapped collection containing the second, third, and fourth element.
 */

function slice(start, end) {
    return $([].slice.apply(this, arguments));
}

/*
 * Export interface
 */

exports.children = children;
exports.contents = contents;
exports.eq = eq;
exports.get = get;
exports.parent = parent;
exports.siblings = siblings;
exports.slice = slice;
},{".":18,"../util":20}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module Selector
 */

var _util = require("../util");

var global = _util.global;
var each = _util.each;

var isPrototypeSet = false,
    reFragment = /^\s*<(\w+|!)[^>]*>/,
    reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    reSimpleSelector = /^[\.#]?[\w-]*$/;

/*
 * Versatile wrapper for `querySelectorAll`.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
 * @return {Object} The wrapped collection
 * @chainable
 * @example
 *     var $items = $(.items');
 * @example
 *     var $element = $(domElement);
 * @example
 *     var $list = $(nodeList, document.body);
 * @example
 *     var $element = $('<p>evergreen</p>');
 */

function $(selector) {
    var context = arguments[1] === undefined ? document : arguments[1];

    var collection;

    if (!selector) {

        collection = document.querySelectorAll(null);
    } else if (selector instanceof Wrapper) {

        return selector;
    } else if (typeof selector !== "string") {

        collection = selector.nodeType || selector === window ? [selector] : selector;
    } else if (reFragment.test(selector)) {

        collection = createFragment(selector);
    } else {

        context = typeof context === "string" ? document.querySelector(context) : context.length ? context[0] : context;

        collection = querySelector(selector, context);
    }

    return wrap(collection);
}

/*
 * Find descendants matching the provided `selector` for each element in the collection.
 *
 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
 * @return {Object} The wrapped collection
 * @example
 *     $('.selector').find('.deep').$('.deepest');
 */

function find(selector) {
    var nodes = [];
    each(this, function (node) {
        each(querySelector(selector, node), function (child) {
            if (nodes.indexOf(child) === -1) {
                nodes.push(child);
            }
        });
    });
    return $(nodes);
}

/*
 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
 *
 * @param {Node} element Element to test
 * @param {String} selector Selector to match against element
 * @return {Boolean}
 *
 * @example
 *     $.matches(element, '.match');
 */

var matches = (function () {
    var context = typeof Element !== "undefined" ? Element.prototype : global,
        _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
    return function (element, selector) {
        return _matches.call(element, selector);
    };
})();

/*
 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
 *
 * @private
 * @param {String} selector Query selector.
 * @param {Node} context The context for the selector to query elements.
 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
 */

function querySelector(selector, context) {

    var isSimpleSelector = reSimpleSelector.test(selector);

    if (isSimpleSelector) {
        if (selector[0] === "#") {
            var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
            return element ? [element] : [];
        }
        if (selector[0] === ".") {
            return context.getElementsByClassName(selector.slice(1));
        }
        return context.getElementsByTagName(selector);
    }

    return context.querySelectorAll(selector);
}

/*
 * Create DOM fragment from an HTML string
 *
 * @private
 * @param {String} html String representing HTML.
 * @return {NodeList}
 */

function createFragment(html) {

    if (reSingleTag.test(html)) {
        return [document.createElement(RegExp.$1)];
    }

    var elements = [],
        container = document.createElement("div"),
        children = container.childNodes;

    container.innerHTML = html;

    for (var i = 0, l = children.length; i < l; i++) {
        elements.push(children[i]);
    }

    return elements;
}

/*
 * Calling `$(selector)` returns a wrapped collection of elements.
 *
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 * @return (Object) The wrapped collection
 */

function wrap(collection) {

    if (!isPrototypeSet) {
        Wrapper.prototype = $.fn;
        Wrapper.prototype.constructor = Wrapper;
        isPrototypeSet = true;
    }

    return new Wrapper(collection);
}

/*
 * Constructor for the Object.prototype strategy
 *
 * @constructor
 * @private
 * @param {NodeList|Array} collection Element(s) to wrap.
 */

function Wrapper(collection) {
    var i = 0,
        length = collection.length;
    for (; i < length;) {
        this[i] = collection[i++];
    }
    this.length = length;
}

/*
 * Export interface
 */

exports.$ = $;
exports.find = find;
exports.matches = matches;
},{"../util":20}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module Type
 */

/*
 * Determine if the argument passed is a Javascript function object.
 *
 * @param {Object} [obj] Object to test whether or not it is a function.
 * @return {boolean} 
 * @example
 *     $.isFunction(function(){});
 *     // true
 * @example
 *     $.isFunction({});
 *     // false
 */

function isFunction(obj) {
  return typeof obj === "function";
}

/*
 * Determine whether the argument is an array.
 *
 * @param {Object} [obj] Object to test whether or not it is an array.
 * @return {boolean} 
 * @example
 *     $.isArray([]);
 *     // true
 * @example
 *     $.isArray({});
 *     // false
 */

var isArray = Array.isArray;

/*
 * Export interface
 */

exports.isArray = isArray;
exports.isFunction = isFunction;
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * @module Util
 */

/*
 * Reference to the global scope
 * @private
 */

var global = new Function("return this")();

/**
 * Convert `NodeList` to `Array`.
 *
 * @param {NodeList|Array} collection
 * @return {Array}
 * @private
 */

function toArray(collection) {
    var length = collection.length,
        result = new Array(length);
    for (var i = 0; i < length; i++) {
        result[i] = collection[i];
    }
    return result;
}

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

function each(collection, callback, thisArg) {
    var length = collection.length;
    if (length !== undefined && collection.nodeType === undefined) {
        for (var i = 0; i < length; i++) {
            callback.call(thisArg, collection[i], i, collection);
        }
    } else {
        callback.call(thisArg, collection, 0, collection);
    }
    return collection;
}

/**
 * Assign enumerable properties from source object(s) to target object
 *
 * @method extend
 * @param {Object} target Object to extend
 * @param {Object} [source] Object to extend from
 * @return {Object} Extended object
 * @example
 *     $.extend({a: 1}, {b: 2});
 *     // {a: 1, b: 2}
 * @example
 *     $.extend({a: 1}, {b: 2}, {a: 3});
 *     // {a: 3, b: 2}
 */

function extend(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (src) {
        for (var prop in src) {
            target[prop] = src[prop];
        }
    });
    return target;
}

/**
 * Return the collection without duplicates
 *
 * @param collection Collection to remove duplicates from
 * @return {Node|NodeList|Array}
 * @private
 */

function uniq(collection) {
    return collection.filter(function (item, index) {
        return collection.indexOf(item) === index;
    });
}

/*
 * Export interface
 */

exports.global = global;
exports.toArray = toArray;
exports.each = each;
exports.extend = extend;
exports.uniq = uniq;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc29rb2Jhbi5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL2Nzcy5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvZG9tL2F0dHIuanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL2RvbS9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvZG9tL2NvbnRhaW5zLmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9kb20vZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvZG9tL2V4dHJhLmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9kb20vaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvZG9tL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9ldmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvZXZlbnQvcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL2V2ZW50L3RyaWdnZXIuanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9ub2NvbmZsaWN0LmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9zZWxlY3Rvci9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RvbXRhc3RpYy9jb21tb25qcy9zZWxlY3Rvci9leHRyYS5qcyIsIm5vZGVfbW9kdWxlcy9kb210YXN0aWMvY29tbW9uanMvc2VsZWN0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL3R5cGUuanMiLCJub2RlX21vZHVsZXMvZG9tdGFzdGljL2NvbW1vbmpzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciAkID0gcmVxdWlyZSgnZG9tdGFzdGljJyk7XHJcblxyXG4kKCcuc29rb2JhbicpLmh0bWwoJ1Rlc3QnKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgQXJyYXlcbiAqL1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG52YXIgX2VhY2ggPSBfdXRpbC5lYWNoO1xudmFyIHRvQXJyYXkgPSBfdXRpbC50b0FycmF5O1xuXG52YXIgX3NlbGVjdG9yID0gcmVxdWlyZShcIi4vc2VsZWN0b3JcIik7XG5cbnZhciAkID0gX3NlbGVjdG9yLiQ7XG52YXIgbWF0Y2hlcyA9IF9zZWxlY3Rvci5tYXRjaGVzO1xuXG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNhbGxiYWNrIHJldHVybnMgYSB0cnVlKC1pc2gpIHZhbHVlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIGVhY2ggZWxlbWVudCBwYXNzZWQgdGhlIGNhbGxiYWNrIGNoZWNrLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5ldmVyeShmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqICAgICAvLyB0cnVlL2ZhbHNlXG4gKi9cblxudmFyIGV2ZXJ5ID0gQXJyYXlQcm90by5ldmVyeTtcblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGNvbGxlY3Rpb24gYnkgc2VsZWN0b3Igb3IgZnVuY3Rpb24sIGFuZCByZXR1cm4gYSBuZXcgY29sbGVjdGlvbiB3aXRoIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIFNlbGVjdG9yIG9yIGZ1bmN0aW9uIHRvIGZpbHRlciB0aGUgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZmlsdGVyKCcuYWN0aXZlJyk7XG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmZpbHRlcihmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqL1xuXG5mdW5jdGlvbiBmaWx0ZXIoc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgdmFyIGNhbGxiYWNrID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgPyBzZWxlY3RvciA6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpO1xuICB9O1xuICByZXR1cm4gJChBcnJheVByb3RvLmZpbHRlci5jYWxsKHRoaXMsIGNhbGxiYWNrLCB0aGlzQXJnKSk7XG59XG5cbi8qKlxuICogRXhlY3V0ZSBhIGZ1bmN0aW9uIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnZXZlcmdyZWVuJztcbiAqICAgICApO1xuICovXG5cbmZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgcmV0dXJuIF9lYWNoKHRoaXMsIGNhbGxiYWNrLCB0aGlzQXJnKTtcbn1cblxudmFyIGVhY2ggPSBmb3JFYWNoO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSB6ZXJvLWJhc2VkIGluZGV4LCAtMSBpZiBub3QgZm91bmQuXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmluZGV4T2YoZWxlbWVudCk7XG4gKiAgICAgLy8gMlxuICovXG5cbnZhciBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uIGJ5IGV4ZWN1dGluZyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnQsIGludm9rZWQgd2l0aCBgZWxlbWVudGAgYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge0FycmF5fSBDb2xsZWN0aW9uIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZXhlY3V0ZWQgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAqICAgICB9KTtcbiAqICAgICAvLyBbJ2V2ZXInLCAnZ3JlZW4nXVxuICovXG5cbnZhciBtYXAgPSBBcnJheVByb3RvLm1hcDtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgbGFzdEVsZW1lbnQgPSAkKCcuaXRlbXMnKS5wb3AoKTtcbiAqL1xuXG52YXIgcG9wID0gQXJyYXlQcm90by5wb3A7XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBFbGVtZW50KHMpIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5wdXNoKGVsZW1lbnQpO1xuICovXG5cbnZhciBwdXNoID0gQXJyYXlQcm90by5wdXNoO1xuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gYWdhaW5zdCBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIGFuZCB0aGlzIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIGhhcyB0byByZWR1Y2UgaXRcbiAqIHRvIGEgc2luZ2xlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZWFjaCB2YWx1ZSBpbiB0aGUgYXJyYXksIHRha2luZyBmb3VyIGFyZ3VtZW50cyAoc2VlIGV4YW1wbGUpLlxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFZhbHVlIE9iamVjdCB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzVmFsdWUsIGVsZW1lbnQsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gKiAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gKiAgICAgfSwgMCk7XG4gKiAgICAgLy8gW3RvdGFsIGhlaWdodCBvZiBlbGVtZW50c11cbiAqL1xuXG52YXIgcmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2U7XG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiBhZ2FpbnN0IGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbiAoZnJvbSByaWdodC10by1sZWZ0KSwgYW5kIHRoaXMgYWNjdW11bGF0b3IgZnVuY3Rpb24gaGFzXG4gKiB0byByZWR1Y2UgaXQgdG8gYSBzaW5nbGUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlYWNoIHZhbHVlIGluIHRoZSBhcnJheSwgdGFraW5nIGZvdXIgYXJndW1lbnRzIChzZWUgZXhhbXBsZSkuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsVmFsdWUgT2JqZWN0IHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZWR1Y2VSaWdodChmdW5jdGlvbihwcmV2aW91c1ZhbHVlLCBlbGVtZW50LCBpbmRleCwgY29sbGVjdGlvbikge1xuICogICAgICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSArIGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gKiAgICAgfSwgJycpXG4gKiAgICAgLy8gW3JldmVyc2VkIHRleHQgb2YgZWxlbWVudHNdXG4gKi9cblxudmFyIHJlZHVjZVJpZ2h0ID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodDtcblxuLyoqXG4gKiBSZXZlcnNlcyBhbiBhcnJheSBpbiBwbGFjZS4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgYmVjb21lcyB0aGUgbGFzdCBhbmQgdGhlIGxhc3QgYmVjb21lcyB0aGUgZmlyc3QuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uLCByZXZlcnNlZFxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZXZlcnNlKCk7XG4gKi9cblxuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgcmV0dXJuICQodG9BcnJheSh0aGlzKS5yZXZlcnNlKCkpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGZpcnN0RWxlbWVudCA9ICQoJy5pdGVtcycpLnNoaWZ0KCk7XG4gKi9cblxudmFyIHNoaWZ0ID0gQXJyYXlQcm90by5zaGlmdDtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNhbGxiYWNrIHJldHVybnMgYSB0cnVlKC1pc2gpIHZhbHVlIGZvciBhbnkgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudCwgaW52b2tlZCB3aXRoIGBlbGVtZW50YCBhcyBhcmd1bWVudC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgYW55IGVsZW1lbnQgcGFzc2VkIHRoZSBjYWxsYmFjayBjaGVjay5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuc29tZShmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqICAgICAvLyB0cnVlL2ZhbHNlXG4gKi9cblxudmFyIHNvbWUgPSBBcnJheVByb3RvLnNvbWU7XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBFbGVtZW50KHMpIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS51bnNoaWZ0KGVsZW1lbnQpO1xuICovXG5cbnZhciB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0O1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuZWFjaCA9IGVhY2g7XG5leHBvcnRzLmV2ZXJ5ID0gZXZlcnk7XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLnBvcCA9IHBvcDtcbmV4cG9ydHMucHVzaCA9IHB1c2g7XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcbmV4cG9ydHMucmVkdWNlUmlnaHQgPSByZWR1Y2VSaWdodDtcbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG5leHBvcnRzLnNoaWZ0ID0gc2hpZnQ7XG5leHBvcnRzLnNvbWUgPSBzb21lO1xuZXhwb3J0cy51bnNoaWZ0ID0gdW5zaGlmdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAbW9kdWxlIEF0dHJcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuL3V0aWxcIikuZWFjaDtcblxuZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjYW1lbGl6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKFtcXGRhLXpdKS9naSwgZnVuY3Rpb24gKG1hdGNoZXMsIGxldHRlcikge1xuICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRhc2hlcml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5IGZvciB0aGUgZmlyc3QgZWxlbWVudCwgb3Igc2V0IG9uZSBvciBtb3JlIHN0eWxlIHByb3BlcnRpZXMgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGtleSBUaGUgbmFtZSBvZiB0aGUgc3R5bGUgcHJvcGVydHkgdG8gZ2V0IG9yIHNldC4gT3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzIHRvIHNldCBhcyBzdHlsZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV0gVGhlIHZhbHVlIG9mIHRoZSBzdHlsZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5jc3MoJ3BhZGRpbmctbGVmdCcpOyAvLyBnZXRcbiAqICAgICAkKCcuaXRlbScpLmNzcygnY29sb3InLCAnI2YwMCcpOyAvLyBzZXRcbiAqICAgICAkKCcuaXRlbScpLmNzcyh7J2JvcmRlci13aWR0aCcsICcxcHgnfSwgeydkaXNwbGF5JywgJ2lubGluZS1ibG9ja30pOyAvLyBzZXQgbXVsdGlwbGVcbiAqL1xuXG5mdW5jdGlvbiBjc3Moa2V5LCB2YWx1ZSkge1xuXG4gICAgdmFyIHN0eWxlUHJvcHMsIHByb3AsIHZhbDtcblxuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGtleSA9IGNhbWVsaXplKGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOdW1lcmljKHZhbCkgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVQcm9wcyA9IHt9O1xuICAgICAgICBzdHlsZVByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZVByb3BzID0ga2V5O1xuICAgICAgICBmb3IgKHByb3AgaW4gc3R5bGVQcm9wcykge1xuICAgICAgICAgICAgdmFsID0gc3R5bGVQcm9wc1twcm9wXTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgICAgICAgc3R5bGVQcm9wc1tjYW1lbGl6ZShwcm9wKV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGZvciAocHJvcCBpbiBzdHlsZVByb3BzKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVQcm9wc1twcm9wXSB8fCBzdHlsZVByb3BzW3Byb3BdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKHByb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0cy5jc3MgPSBjc3M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQG1vZHVsZSBBdHRyXG4gKi9cblxudmFyIGVhY2ggPSByZXF1aXJlKFwiLi4vdXRpbFwiKS5lYWNoO1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIGZvciB0aGUgZmlyc3QgZWxlbWVudCwgb3Igc2V0IG9uZSBvciBtb3JlIGF0dHJpYnV0ZXMgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGtleSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIGdldCBvciBzZXQuIE9yIGFuIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyB0byBzZXQgYXMgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmF0dHIoJ2F0dHJOYW1lJyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykuYXR0cignYXR0ck5hbWUnLCAnYXR0clZhbHVlJyk7IC8vIHNldFxuICogICAgICQoJy5pdGVtJykuYXR0cih7J2F0dHIxJywgJ3ZhbHVlMSd9LCB7J2F0dHIyJywgJ3ZhbHVlMn0pOyAvLyBzZXQgbXVsdGlwbGVcbiAqL1xuXG5mdW5jdGlvbiBhdHRyKGtleSwgdmFsdWUpIHtcblxuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4ga2V5KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwga2V5W2F0dHJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgQXR0cmlidXRlIG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZW1vdmVBdHRyKCdhdHRyTmFtZScpO1xuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHIoa2V5KSB7XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuYXR0ciA9IGF0dHI7XG5leHBvcnRzLnJlbW92ZUF0dHIgPSByZW1vdmVBdHRyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgQ2xhc3NcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLmVhY2g7XG5cbi8qKlxuICogQWRkIGEgY2xhc3MgdG8gdGhlIGVsZW1lbnQocylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgU3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWUocykgdG8gYWRkIHRvIHRoZSBlbGVtZW50KHMpLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuYWRkQ2xhc3MoJ2JhcicpO1xuICogICAgICQoJy5pdGVtJykuYWRkQ2xhc3MoJ2JhciBmb28nKTtcbiAqL1xuXG5mdW5jdGlvbiBhZGRDbGFzcyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZWFjaCh2YWx1ZS5zcGxpdChcIiBcIiksIF9lYWNoLmJpbmQodGhpcywgXCJhZGRcIikpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lKHMpIHRvIHJlbW92ZSBmcm9tIHRoZSBlbGVtZW50KHMpLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnJlbW92ZUNsYXNzKCdiYXInKTtcbiAqICAgICAkKCcuaXRlbXMnKS5yZW1vdmVDbGFzcygnYmFyIGZvbycpO1xuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlYWNoKHZhbHVlLnNwbGl0KFwiIFwiKSwgX2VhY2guYmluZCh0aGlzLCBcInJlbW92ZVwiKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFRvZ2dsZSBhIGNsYXNzIGF0IHRoZSBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lKHMpIHRvIHRvZ2dsZSBhdCB0aGUgZWxlbWVudChzKS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnRvZ2dsZUNsYXNzKCdiYXInKTtcbiAqICAgICAkKCcuaXRlbScpLnRvZ2dsZUNsYXNzKCdiYXIgZm9vJyk7XG4gKi9cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGVhY2godmFsdWUuc3BsaXQoXCIgXCIpLCBfZWFjaC5iaW5kKHRoaXMsIFwidG9nZ2xlXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQocykgaGF2ZSBhIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBDaGVjayBpZiB0aGUgRE9NIGVsZW1lbnQgY29udGFpbnMgdGhlIGNsYXNzIG5hbWUuIFdoZW4gYXBwbGllZCB0byBtdWx0aXBsZSBlbGVtZW50cyxcbiAqIHJldHVybnMgYHRydWVgIGlmIF9hbnlfIG9mIHRoZW0gY29udGFpbnMgdGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50J3MgY2xhc3MgYXR0cmlidXRlIGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmhhc0NsYXNzKCdiYXInKTtcbiAqL1xuXG5mdW5jdGlvbiBoYXNDbGFzcyh2YWx1ZSkge1xuICAgIHJldHVybiAodGhpcy5ub2RlVHlwZSA/IFt0aGlzXSA6IHRoaXMpLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBTcGVjaWFsaXplZCBpdGVyYXRpb24sIGFwcGx5aW5nIGBmbmAgb2YgdGhlIGNsYXNzTGlzdCBBUEkgdG8gZWFjaCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gX2VhY2goZm5OYW1lLCBjbGFzc05hbWUpIHtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0W2ZuTmFtZV0oY2xhc3NOYW1lKTtcbiAgICB9KTtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLmFkZENsYXNzID0gYWRkQ2xhc3M7XG5leHBvcnRzLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5leHBvcnRzLnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3M7XG5leHBvcnRzLmhhc0NsYXNzID0gaGFzQ2xhc3M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQG1vZHVsZSBjb250YWluc1xuICovXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGFuIGVsZW1lbnQgY29udGFpbnMgYW5vdGhlciBlbGVtZW50IGluIHRoZSBET00uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhhdCBtYXkgY29udGFpbiB0aGUgb3RoZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IG1heSBiZSBhIGRlc2NlbmRhbnQgb2YgdGhlIG90aGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBgY29udGFpbmVyYCBlbGVtZW50IGNvbnRhaW5zIHRoZSBgZWxlbWVudGAuXG4gKiBAZXhhbXBsZVxuICogICAgICQuY29udGFpbnMocGFyZW50RWxlbWVudCwgY2hpbGRFbGVtZW50KTtcbiAqICAgICAvLyB0cnVlL2ZhbHNlXG4gKi9cblxuZnVuY3Rpb24gY29udGFpbnMoY29udGFpbmVyLCBlbGVtZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIgfHwgIWVsZW1lbnQgfHwgY29udGFpbmVyID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucykge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAhKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuY29udGFpbnMgPSBjb250YWluczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAbW9kdWxlIERhdGFcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLmVhY2g7XG5cbnZhciBkYXRhS2V5UHJvcCA9IFwiX19kb210YXN0aWNfZGF0YV9fXCI7XG5cbi8qKlxuICogR2V0IGRhdGEgZnJvbSBmaXJzdCBlbGVtZW50LCBvciBzZXQgZGF0YSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGEgdG8gZ2V0IG9yIHNldC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSBkYXRhIHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmRhdGEoJ2F0dHJOYW1lJyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykuZGF0YSgnYXR0ck5hbWUnLCB7YW55OiAnZGF0YSd9KTsgLy8gc2V0XG4gKi9cblxuZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnRbZGF0YUtleVByb3BdID8gZWxlbWVudFtkYXRhS2V5UHJvcF1ba2V5XSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnRbZGF0YUtleVByb3BdID0gZWxlbWVudFtkYXRhS2V5UHJvcF0gfHwge307XG4gICAgICAgIGVsZW1lbnRbZGF0YUtleVByb3BdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCBwcm9wZXJ0eSBmcm9tIGZpcnN0IGVsZW1lbnQsIG9yIHNldCBwcm9wZXJ0eSBvbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0IG9yIHNldC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykucHJvcCgnYXR0ck5hbWUnKTsgLy8gZ2V0XG4gKiAgICAgJCgnLml0ZW0nKS5wcm9wKCdhdHRyTmFtZScsICdhdHRyVmFsdWUnKTsgLy8gc2V0XG4gKi9cblxuZnVuY3Rpb24gcHJvcChrZXksIHZhbHVlKSB7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQgPyBlbGVtZW50W2tleV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuZGF0YSA9IGRhdGE7XG5leHBvcnRzLnByb3AgPSBwcm9wOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgRE9NIChleHRyYSlcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLmVhY2g7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciBhcHBlbmQgPSBfLmFwcGVuZDtcbnZhciBiZWZvcmUgPSBfLmJlZm9yZTtcbnZhciBhZnRlciA9IF8uYWZ0ZXI7XG5cbnZhciAkID0gcmVxdWlyZShcIi4uL3NlbGVjdG9yXCIpLiQ7XG5cbi8qKlxuICogQXBwZW5kIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbiB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQocykuXG4gKlxuICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIGFwcGVuZCB0aGUgZWxlbWVudChzKSB0by4gQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIHZhciBjb250ZXh0ID0gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyAkKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICBhcHBlbmQuY2FsbChjb250ZXh0LCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEVtcHR5IGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5lbXB0eSgpO1xuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbGxlY3Rpb24gZnJvbSB0aGUgRE9NLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBjb250YWluaW5nIHRoZSByZW1vdmVkIGVsZW1lbnRzXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykucmVtb3ZlKCk7XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHJldHVybiBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIG5ldyBjb250ZW50LCBhbmQgcmV0dXJuIHRoZSBhcnJheSBvZiBlbGVtZW50cyB0aGF0IHdlcmUgcmVwbGFjZWQuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IGNvbnRhaW5pbmcgdGhlIHJlcGxhY2VkIGVsZW1lbnRzXG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGgoKSB7XG4gICAgcmV0dXJuIGJlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYHRleHRDb250ZW50YCBmcm9tIHRoZSBmaXJzdCwgb3Igc2V0IHRoZSBgdGV4dENvbnRlbnRgIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykudGV4dCgnTmV3IGNvbnRlbnQnKTtcbiAqL1xuXG5mdW5jdGlvbiB0ZXh0KHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiICsgdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGB2YWx1ZWAgZnJvbSB0aGUgZmlyc3QsIG9yIHNldCB0aGUgYHZhbHVlYCBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCdpbnB1dC5maXJzdE5hbWUnKS52YWx1ZSgnTmV3IHZhbHVlJyk7XG4gKi9cblxuZnVuY3Rpb24gdmFsKHZhbHVlKSB7XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuYXBwZW5kVG8gPSBhcHBlbmRUbztcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5yZXBsYWNlV2l0aCA9IHJlcGxhY2VXaXRoO1xuZXhwb3J0cy50ZXh0ID0gdGV4dDtcbmV4cG9ydHMudmFsID0gdmFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAbW9kdWxlIEhUTUxcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLmVhY2g7XG5cbi8qXG4gKiBHZXQgdGhlIEhUTUwgY29udGVudHMgb2YgdGhlIGZpcnN0IGVsZW1lbnQsIG9yIHNldCB0aGUgSFRNTCBjb250ZW50cyBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZnJhZ21lbnRdIEhUTUwgZnJhZ21lbnQgdG8gc2V0IGZvciB0aGUgZWxlbWVudC4gSWYgdGhpcyBhcmd1bWVudCBpcyBvbWl0dGVkLCB0aGUgSFRNTCBjb250ZW50cyBhcmUgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCk7XG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCc8c3Bhbj5tb3JlPC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIGh0bWwoZnJhZ21lbnQpIHtcblxuICBpZiAodHlwZW9mIGZyYWdtZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGVhY2godGhpcywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGZyYWdtZW50O1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLmh0bWwgPSBodG1sOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgRE9NXG4gKi9cblxudmFyIHRvQXJyYXkgPSByZXF1aXJlKFwiLi4vdXRpbFwiKS50b0FycmF5O1xuXG52YXIgJCA9IHJlcXVpcmUoXCIuLi9zZWxlY3RvclwiKS4kO1xuXG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4vKipcbiAqIEFwcGVuZCBlbGVtZW50KHMpIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIGFwcGVuZCB0byB0aGUgZWxlbWVudChzKS5cbiAqIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5hcHBlbmQoJzxwPm1vcmU8L3A+Jyk7XG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGZvckVhY2guY2FsbChlbGVtZW50cywgdGhpcy5hcHBlbmRDaGlsZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIF9lYWNoKHRoaXMsIGFwcGVuZCwgZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFBsYWNlIGVsZW1lbnQocykgYXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBwbGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBlbGVtZW50KHMpLlxuICogQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnByZXBlbmQoJzxzcGFuPnN0YXJ0PC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGZvckVhY2guY2FsbChlbGVtZW50cy5yZXZlcnNlKCksIHByZXBlbmQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBfZWFjaCh0aGlzLCBwcmVwZW5kLCBlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUGxhY2UgZWxlbWVudChzKSBiZWZvcmUgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gcGxhY2UgYXMgc2libGluZyhzKSBiZWZvcmUgdG8gdGhlIGVsZW1lbnQocykuXG4gKiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmJlZm9yZSgnPHA+cHJlZml4PC9wPicpO1xuICovXG5cbmZ1bmN0aW9uIGJlZm9yZShlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGZvckVhY2guY2FsbChlbGVtZW50cywgYmVmb3JlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgX2VhY2godGhpcywgYmVmb3JlLCBlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUGxhY2UgZWxlbWVudChzKSBhZnRlciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBwbGFjZSBhcyBzaWJsaW5nKHMpIGFmdGVyIHRvIHRoZSBlbGVtZW50KHMpLiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmFmdGVyKCc8c3Bhbj5zdWY8L3NwYW4+PHNwYW4+Zml4PC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIGFmdGVyKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLnJldmVyc2UoKSwgYWZ0ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBfZWFjaCh0aGlzLCBhZnRlciwgZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENsb25lIGEgd3JhcHBlZCBvYmplY3QuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBXcmFwcGVkIGNvbGxlY3Rpb24gb2YgY2xvbmVkIG5vZGVzLlxuICogQGV4YW1wbGVcbiAqICAgICAkKGVsZW1lbnQpLmNsb25lKCk7XG4gKi9cblxuZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuICQoX2Nsb25lKHRoaXMpKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fEFycmF5fSBlbGVtZW50IFRoZSBlbGVtZW50KHMpIHRvIGNsb25lLlxuICogQHJldHVybiB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8QXJyYXl9IFRoZSBjbG9uZWQgZWxlbWVudChzKVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBfY2xvbmUoZWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKFwibGVuZ3RoXCIgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gW10ubWFwLmNhbGwoZWxlbWVudCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogU3BlY2lhbGl6ZWQgaXRlcmF0aW9uLCBhcHBseWluZyBgZm5gIGluIHJldmVyc2VkIG1hbm5lciB0byBhIGNsb25lIG9mIGVhY2ggZWxlbWVudCwgYnV0IHRoZSBwcm92aWRlZCBvbmUuXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBfZWFjaChjb2xsZWN0aW9uLCBmbiwgZWxlbWVudCkge1xuICAgIHZhciBsID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICAgIGZuLmNhbGwoY29sbGVjdGlvbltsXSwgZWxtKTtcbiAgICB9XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG5leHBvcnRzLnByZXBlbmQgPSBwcmVwZW5kO1xuZXhwb3J0cy5iZWZvcmUgPSBiZWZvcmU7XG5leHBvcnRzLmFmdGVyID0gYWZ0ZXI7XG5leHBvcnRzLmNsb25lID0gY2xvbmU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQG1vZHVsZSBFdmVudHNcbiAqL1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpLmVhY2g7XG5cbnZhciBjbG9zZXN0ID0gcmVxdWlyZShcIi4uL3NlbGVjdG9yL2Nsb3Nlc3RcIikuY2xvc2VzdDtcblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGBhZGRFdmVudExpc3RlbmVyYC4gU3VwcG9ydHMgZXZlbnQgZGVsZWdhdGlvbiBpZiBhIGZpbHRlciAoYHNlbGVjdG9yYCkgaXMgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZXMgTGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQocylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0b3JdIFNlbGVjdG9yIHRvIGZpbHRlciBkZXNjZW5kYW50cyB0aGF0IGRlbGVnYXRlIHRoZSBldmVudCB0byB0aGlzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZT1mYWxzZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykub24oJ2NsaWNrJywgY2FsbGJhY2spO1xuICogICAgICQoJy5jb250YWluZXInKS5vbignY2xpY2sgZm9jdXMnLCAnLml0ZW0nLCBoYW5kbGVyKTtcbiAqL1xuXG5mdW5jdGlvbiBvbihldmVudE5hbWVzLCBzZWxlY3RvciwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGhhbmRsZXIgPSBzZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cywgbmFtZXNwYWNlLCBldmVudExpc3RlbmVyO1xuXG4gICAgZXZlbnROYW1lcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cbiAgICAgICAgcGFydHMgPSBldmVudE5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBldmVudE5hbWUgPSBwYXJ0c1swXSB8fCBudWxsO1xuICAgICAgICBuYW1lc3BhY2UgPSBwYXJ0c1sxXSB8fCBudWxsO1xuXG4gICAgICAgIGV2ZW50TGlzdGVuZXIgPSBwcm94eUhhbmRsZXIoaGFuZGxlcik7XG5cbiAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyID0gZGVsZWdhdGVIYW5kbGVyLmJpbmQoZWxlbWVudCwgc2VsZWN0b3IsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcblxuICAgICAgICAgICAgZ2V0SGFuZGxlcnMoZWxlbWVudCkucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyOiBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZXMgTGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50KHMpXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBTZWxlY3RvciB0byBmaWx0ZXIgZGVzY2VuZGFudHMgdGhhdCB1bmRlbGVnYXRlIHRoZSBldmVudCB0byB0aGlzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZT1mYWxzZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykub2ZmKCdjbGljaycsIGNhbGxiYWNrKTtcbiAqICAgICAkKCcjbXktZWxlbWVudCcpLm9mZignbXlFdmVudCBteU90aGVyRXZlbnQnKTtcbiAqICAgICAkKCcuaXRlbScpLm9mZigpO1xuICovXG5cbmZ1bmN0aW9uIG9mZihfeCwgc2VsZWN0b3IsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgZXZlbnROYW1lcyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBoYW5kbGVyID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMsIG5hbWVzcGFjZSwgaGFuZGxlcnM7XG5cbiAgICBldmVudE5hbWVzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcblxuICAgICAgICBwYXJ0cyA9IGV2ZW50TmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgIGV2ZW50TmFtZSA9IHBhcnRzWzBdIHx8IG51bGw7XG4gICAgICAgIG5hbWVzcGFjZSA9IHBhcnRzWzFdIHx8IG51bGw7XG5cbiAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXG4gICAgICAgICAgICBoYW5kbGVycyA9IGdldEhhbmRsZXJzKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBlYWNoKGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIWV2ZW50TmFtZSB8fCBpdGVtLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSAmJiAoIW5hbWVzcGFjZSB8fCBpdGVtLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSAmJiAoIWhhbmRsZXIgfHwgaXRlbS5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoIXNlbGVjdG9yIHx8IGl0ZW0uc2VsZWN0b3IgPT09IHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihpdGVtLmV2ZW50TmFtZSwgaXRlbS5ldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFldmVudE5hbWUgJiYgIW5hbWVzcGFjZSAmJiAhc2VsZWN0b3IgJiYgIWhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCBldmVudCBoYW5kbGVycyBmcm9tIGFuIGVsZW1lbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG52YXIgZXZlbnRLZXlQcm9wID0gXCJfX2RvbXRhc3RpY19ldmVudF9fXCI7XG52YXIgaWQgPSAxO1xudmFyIGhhbmRsZXJzID0ge307XG52YXIgdW51c2VkS2V5cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRIYW5kbGVycyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50W2V2ZW50S2V5UHJvcF0pIHtcbiAgICAgICAgZWxlbWVudFtldmVudEtleVByb3BdID0gdW51c2VkS2V5cy5sZW5ndGggPT09IDAgPyArK2lkIDogdW51c2VkS2V5cy5wb3AoKTtcbiAgICB9XG4gICAgdmFyIGtleSA9IGVsZW1lbnRbZXZlbnRLZXlQcm9wXTtcbiAgICByZXR1cm4gaGFuZGxlcnNba2V5XSB8fCAoaGFuZGxlcnNba2V5XSA9IFtdKTtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBoYW5kbGVycyBmb3IgYW4gZWxlbWVudFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbGVhckhhbmRsZXJzKGVsZW1lbnQpIHtcbiAgICB2YXIga2V5ID0gZWxlbWVudFtldmVudEtleVByb3BdO1xuICAgIGlmIChoYW5kbGVyc1trZXldKSB7XG4gICAgICAgIGhhbmRsZXJzW2tleV0gPSBudWxsO1xuICAgICAgICBlbGVtZW50W2tleV0gPSBudWxsO1xuICAgICAgICB1bnVzZWRLZXlzLnB1c2goa2V5KTtcbiAgICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIGEgaGFuZGxlciB0aGF0IGF1Z21lbnRzIHRoZSBldmVudCBvYmplY3Qgd2l0aCBzb21lIGV4dHJhIG1ldGhvZHMsXG4gKiBhbmQgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIGV2ZW50IGFuZCB0aGUgZXZlbnQgZGF0YSAoaS5lLiBgZXZlbnQuZGV0YWlsYCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBoYW5kbGVyIENhbGxiYWNrIHRvIGV4ZWN1dGUgYXMgYGhhbmRsZXIoZXZlbnQsIGRhdGEpYFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gcHJveHlIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhdWdtZW50RXZlbnQoZXZlbnQpLCBldmVudC5kZXRhaWwpO1xuICAgIH07XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBhdWdtZW50IGV2ZW50cyBhbmQgaW1wbGVtZW50IHNvbWV0aGluZyBjbG9zZXIgdG8gRE9NIExldmVsIDMgRXZlbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbnZhciBhdWdtZW50RXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIG1ldGhvZE5hbWUsXG4gICAgICAgIGV2ZW50TWV0aG9kcyA9IHtcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IFwiaXNEZWZhdWx0UHJldmVudGVkXCIsXG4gICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogXCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZFwiLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246IFwiaXNQcm9wYWdhdGlvblN0b3BwZWRcIlxuICAgIH0sXG4gICAgICAgIHJldHVyblRydWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICAgIHJldHVybkZhbHNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIHx8IGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZm9yIChtZXRob2ROYW1lIGluIGV2ZW50TWV0aG9kcykge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAobWV0aG9kTmFtZSwgdGVzdE1ldGhvZE5hbWUsIG9yaWdpbmFsTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50W21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5UcnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kICYmIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50W3Rlc3RNZXRob2ROYW1lXSA9IHJldHVybkZhbHNlO1xuICAgICAgICAgICAgICAgIH0pKG1ldGhvZE5hbWUsIGV2ZW50TWV0aG9kc1ttZXRob2ROYW1lXSwgZXZlbnRbbWV0aG9kTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50Ll9wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH07XG59KSgpO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHRlc3Qgd2hldGhlciBkZWxlZ2F0ZWQgZXZlbnRzIG1hdGNoIHRoZSBwcm92aWRlZCBgc2VsZWN0b3JgIChmaWx0ZXIpLFxuICogaWYgdGhlIGV2ZW50IHByb3BhZ2F0aW9uIHdhcyBzdG9wcGVkLCBhbmQgdGhlbiBhY3R1YWxseSBjYWxsIHRoZSBwcm92aWRlZCBldmVudCBoYW5kbGVyLlxuICogVXNlIGB0aGlzYCBpbnN0ZWFkIG9mIGBldmVudC5jdXJyZW50VGFyZ2V0YCBvbiB0aGUgZXZlbnQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gZmlsdGVyIGRlc2NlbmRhbnRzIHRoYXQgdW5kZWxlZ2F0ZSB0aGUgZXZlbnQgdG8gdGhpcyBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICovXG5cbmZ1bmN0aW9uIGRlbGVnYXRlSGFuZGxlcihzZWxlY3RvciwgaGFuZGxlciwgZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBldmVudC5fdGFyZ2V0IHx8IGV2ZW50LnRhcmdldCxcbiAgICAgICAgY3VycmVudFRhcmdldCA9IGNsb3Nlc3QuY2FsbChbZXZlbnRUYXJnZXRdLCBzZWxlY3RvciwgdGhpcylbMF07XG4gICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgY3VycmVudFRhcmdldCAhPT0gdGhpcykge1xuICAgICAgICBpZiAoY3VycmVudFRhcmdldCA9PT0gZXZlbnRUYXJnZXQgfHwgIShldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCAmJiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKGN1cnJlbnRUYXJnZXQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGJpbmQgPSBvbixcbiAgICB1bmJpbmQgPSBvZmY7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0cy5vbiA9IG9uO1xuZXhwb3J0cy5vZmYgPSBvZmY7XG5leHBvcnRzLmJpbmQgPSBiaW5kO1xuZXhwb3J0cy51bmJpbmQgPSB1bmJpbmQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgUmVhZHlcbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgY2FsbGJhY2sgd2hlbiBgRE9NQ29udGVudExvYWRlZGAgZmlyZXMgZm9yIGBkb2N1bWVudGAsIG9yIGltbWVkaWF0ZWx5IGlmIGNhbGxlZCBhZnRlcndhcmRzLlxuICpcbiAqIEBwYXJhbSBoYW5kbGVyIENhbGxiYWNrIHRvIGV4ZWN1dGUgd2hlbiBpbml0aWFsIERPTSBjb250ZW50IGlzIGxvYWRlZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKGRvY3VtZW50KS5yZWFkeShjYWxsYmFjayk7XG4gKi9cblxuZnVuY3Rpb24gcmVhZHkoaGFuZGxlcikge1xuICBpZiAoL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgaGFuZGxlcigpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLnJlYWR5ID0gcmVhZHk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQG1vZHVsZSB0cmlnZ2VyXG4gKi9cblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciBnbG9iYWwgPSBfdXRpbC5nbG9iYWw7XG52YXIgZWFjaCA9IF91dGlsLmVhY2g7XG5cbnZhciBjb250YWlucyA9IHJlcXVpcmUoXCIuLi9kb20vY29udGFpbnNcIikuY29udGFpbnM7XG5cbnZhciByZU1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxcbiAgICByZUtleUV2ZW50ID0gL15rZXkvO1xuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQgYXQgZWxlbWVudChzKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFR5cGUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgd2l0aCB0aGUgZXZlbnQgKGBwYXJhbXMuZGV0YWlsYCB3aWxsIGJlIHNldCB0byB0aGlzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBFdmVudCBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmJ1YmJsZXM9dHJ1ZSBEb2VzIHRoZSBldmVudCBidWJibGUgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmNhbmNlbGFibGU9dHJ1ZSBJcyB0aGUgZXZlbnQgY2FuY2VsYWJsZSBvciBub3QuXG4gKiBAcGFyYW0ge01peGVkfSBwYXJhbXMuZGV0YWlsPXVuZGVmaW5lZCBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnRyaWdnZXIoJ2FueUV2ZW50VHlwZScpO1xuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXIodHlwZSwgZGF0YSkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzJdO1xuXG4gICAgcGFyYW1zLmJ1YmJsZXMgPSB0eXBlb2YgcGFyYW1zLmJ1YmJsZXMgPT09IFwiYm9vbGVhblwiID8gcGFyYW1zLmJ1YmJsZXMgOiB0cnVlO1xuICAgIHBhcmFtcy5jYW5jZWxhYmxlID0gdHlwZW9mIHBhcmFtcy5jYW5jZWxhYmxlID09PSBcImJvb2xlYW5cIiA/IHBhcmFtcy5jYW5jZWxhYmxlIDogdHJ1ZTtcbiAgICBwYXJhbXMucHJldmVudERlZmF1bHQgPSB0eXBlb2YgcGFyYW1zLnByZXZlbnREZWZhdWx0ID09PSBcImJvb2xlYW5cIiA/IHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA6IGZhbHNlO1xuICAgIHBhcmFtcy5kZXRhaWwgPSBkYXRhO1xuXG4gICAgdmFyIEV2ZW50Q29uc3RydWN0b3IgPSBnZXRFdmVudENvbnN0cnVjdG9yKHR5cGUpLFxuICAgICAgICBldmVudCA9IG5ldyBFdmVudENvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcyk7XG5cbiAgICBldmVudC5fcHJldmVudERlZmF1bHQgPSBwYXJhbXMucHJldmVudERlZmF1bHQ7XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghcGFyYW1zLmJ1YmJsZXMgfHwgaXNFdmVudEJ1YmJsaW5nSW5EZXRhY2hlZFRyZWUgfHwgaXNBdHRhY2hlZFRvRG9jdW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudENvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNPdGhlckV2ZW50Q29uc3RydWN0b3JzID8gcmVNb3VzZUV2ZW50LnRlc3QodHlwZSkgPyBNb3VzZUV2ZW50IDogcmVLZXlFdmVudC50ZXN0KHR5cGUpID8gS2V5Ym9hcmRFdmVudCA6IEN1c3RvbUV2ZW50IDogQ3VzdG9tRXZlbnQ7XG59XG5cbi8qKlxuICogVHJpZ2dlciBldmVudCBhdCBmaXJzdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLiBTaW1pbGFyIHRvIGB0cmlnZ2VyKClgLCBleGNlcHQ6XG4gKlxuICogLSBFdmVudCBkb2VzIG5vdCBidWJibGVcbiAqIC0gRGVmYXVsdCBldmVudCBiZWhhdmlvciBpcyBwcmV2ZW50ZWRcbiAqIC0gT25seSB0cmlnZ2VycyBoYW5kbGVyIGZvciBmaXJzdCBtYXRjaGluZyBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSBldmVudFxuICogQGV4YW1wbGVcbiAqICAgICAkKCdmb3JtJykudHJpZ2dlckhhbmRsZXIoJ3N1Ym1pdCcpO1xuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKHR5cGUsIGRhdGEpIHtcbiAgICBpZiAodGhpc1swXSkge1xuICAgICAgICB0cmlnZ2VyLmNhbGwodGhpc1swXSwgdHlwZSwgZGF0YSwgeyBidWJibGVzOiBmYWxzZSwgcHJldmVudERlZmF1bHQ6IHRydWUgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gKG9yIGRldGFjaGVkIGZyb20pIHRoZSBkb2N1bWVudFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgRWxlbWVudCB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzQXR0YWNoZWRUb0RvY3VtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gd2luZG93IHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbnMoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZWxlbWVudCk7XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggdGhlIGV2ZW50IGF0IHRoZSBlbGVtZW50IGFuZCBpdHMgYW5jZXN0b3JzLlxuICogUmVxdWlyZWQgdG8gc3VwcG9ydCBkZWxlZ2F0ZWQgZXZlbnRzIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgYnViYmxlIGV2ZW50cyBpbiBkZXRhY2hlZCBET00gdHJlZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBGaXJzdCBlbGVtZW50IHRvIGRpc3BhdGNoIHRoZSBldmVudCBhdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBFdmVudCBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmJ1YmJsZXM9dHJ1ZSBEb2VzIHRoZSBldmVudCBidWJibGUgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdC5cbiAqIFdpbGwgYmUgc2V0IHRvIGZhbHNlIChidXQgc2hvdWxkbid0IG1hdHRlciBzaW5jZSBldmVudHMgZG9uJ3QgYnViYmxlIGFueXdheSkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBhcmFtcy5jYW5jZWxhYmxlPXRydWUgSXMgdGhlIGV2ZW50IGNhbmNlbGFibGUgb3Igbm90LlxuICogQHBhcmFtIHtNaXhlZH0gcGFyYW1zLmRldGFpbD11bmRlZmluZWQgQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQuXG4gKi9cblxuZnVuY3Rpb24gdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzJdO1xuXG4gICAgcGFyYW1zLmJ1YmJsZXMgPSBmYWxzZTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgICBldmVudC5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgICBkbyB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpO1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGV2ZW50IHRvIGVsZW1lbnQsIGJ1dCBjYWxsIGRpcmVjdCBldmVudCBtZXRob2RzIGluc3RlYWQgaWYgYXZhaWxhYmxlXG4gKiAoZS5nLiBcImJsdXIoKVwiLCBcInN1Ym1pdCgpXCIpIGFuZCBpZiB0aGUgZXZlbnQgaXMgbm9uLWNhbmNlbGFibGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBFbGVtZW50IHRvIGRpc3BhdGNoIHRoZSBldmVudCBhdFxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IHRvIGRpc3BhdGNoXG4gKi9cblxudmFyIGRpcmVjdEV2ZW50TWV0aG9kcyA9IFtcImJsdXJcIiwgXCJmb2N1c1wiLCBcInNlbGVjdFwiLCBcInN1Ym1pdFwiXTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCkge1xuICAgIGlmIChkaXJlY3RFdmVudE1ldGhvZHMuaW5kZXhPZihldmVudC50eXBlKSAhPT0gLTEgJiYgdHlwZW9mIGVsZW1lbnRbZXZlbnQudHlwZV0gPT09IFwiZnVuY3Rpb25cIiAmJiAhZXZlbnQuX3ByZXZlbnREZWZhdWx0ICYmICFldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICAgIGVsZW1lbnRbZXZlbnQudHlwZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQ3VzdG9tRXZlbnQsIGJvcnJvd2VkIGZyb20gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50I1BvbHlmaWxsKS5cbiAqIE5lZWRlZCB0byBzdXBwb3J0IElFICg5LCAxMCwgMTEpICYgUGhhbnRvbUpTXG4gKi9cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCkge1xuICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICBjdXN0b21FdmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICAgIHJldHVybiBjdXN0b21FdmVudDtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBnbG9iYWwuQ3VzdG9tRXZlbnQgJiYgZ2xvYmFsLkN1c3RvbUV2ZW50LnByb3RvdHlwZTtcbiAgICBnbG9iYWwuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcbn0pKCk7XG5cbi8qXG4gKiBBcmUgZXZlbnRzIGJ1YmJsaW5nIGluIGRldGFjaGVkIERPTSB0cmVlcz9cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGlzRXZlbnRCdWJibGluZ0luRGV0YWNoZWRUcmVlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNCdWJibGluZyA9IGZhbHNlLFxuICAgICAgICBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgaWYgKGRvYykge1xuICAgICAgICB2YXIgcGFyZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICBjaGlsZCA9IHBhcmVudC5jbG9uZU5vZGUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzQnViYmxpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlXCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxuICAgIHJldHVybiBpc0J1YmJsaW5nO1xufSkoKTtcblxudmFyIHN1cHBvcnRzT3RoZXJFdmVudENvbnN0cnVjdG9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IHdpbmRvdy5Nb3VzZUV2ZW50KFwiY2xpY2tcIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSkoKTtcblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuZXhwb3J0cy50cmlnZ2VySGFuZGxlciA9IHRyaWdnZXJIYW5kbGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfTtcblxuLyoqXG4gKiBAbW9kdWxlIEFQSVxuICovXG5cbnZhciBleHRlbmQgPSByZXF1aXJlKFwiLi91dGlsXCIpLmV4dGVuZDtcblxudmFyIGFwaSA9IHt9LFxuICAgICQgPSB7fTtcblxuLy8gSW1wb3J0IG1vZHVsZXMgdG8gYnVpbGQgdXAgdGhlIEFQSVxuXG52YXIgYXJyYXkgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9hcnJheVwiKSk7XG5cbnZhciBhdHRyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZG9tL2F0dHJcIikpO1xuXG52YXIgY2xhc3NfID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZG9tL2NsYXNzXCIpKTtcblxudmFyIGNvbnRhaW5zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZG9tL2NvbnRhaW5zXCIpKTtcblxudmFyIGNzcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2Nzc1wiKSk7XG5cbnZhciBkYXRhID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZG9tL2RhdGFcIikpO1xuXG52YXIgZG9tID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZG9tXCIpKTtcblxudmFyIGRvbV9leHRyYSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2RvbS9leHRyYVwiKSk7XG5cbnZhciBldmVudCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2V2ZW50XCIpKTtcblxudmFyIGh0bWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9kb20vaHRtbFwiKSk7XG5cbnZhciBub2NvbmZsaWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vbm9jb25mbGljdFwiKSk7XG5cbnZhciByZWFkeSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2V2ZW50L3JlYWR5XCIpKTtcblxudmFyIHNlbGVjdG9yID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vc2VsZWN0b3JcIikpO1xuXG52YXIgY2xvc2VzdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3NlbGVjdG9yL2Nsb3Nlc3RcIikpO1xuXG52YXIgc2VsZWN0b3JfZXh0cmEgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9zZWxlY3Rvci9leHRyYVwiKSk7XG5cbnZhciB0cmlnZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZXZlbnQvdHJpZ2dlclwiKSk7XG5cbnZhciB0eXBlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdHlwZVwiKSk7XG5cbmlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAkID0gc2VsZWN0b3IuJDtcbiAgICAkLm1hdGNoZXMgPSBzZWxlY3Rvci5tYXRjaGVzO1xuICAgIGFwaS5maW5kID0gc2VsZWN0b3IuZmluZDtcbn1cblxuZXh0ZW5kKCQsIGNvbnRhaW5zLCBub2NvbmZsaWN0LCB0eXBlKTtcbmV4dGVuZChhcGksIGFycmF5LCBhdHRyLCBjbGFzc18sIGNsb3Nlc3QsIGNzcywgZGF0YSwgZG9tLCBkb21fZXh0cmEsIGV2ZW50LCBodG1sLCByZWFkeSwgc2VsZWN0b3JfZXh0cmEsIHRyaWdnZXIpO1xuXG4kLmZuID0gYXBpO1xuXG4vLyBWZXJzaW9uXG5cbiQudmVyc2lvbiA9IFwiMC4xMC4wXCI7XG5cbi8vIFV0aWxcblxuJC5leHRlbmQgPSBleHRlbmQ7XG5cbi8vIEV4cG9ydCBpbnRlcmZhY2VcblxubW9kdWxlLmV4cG9ydHMgPSAkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAbW9kdWxlIG5vQ29uZmxpY3RcbiAqL1xuXG52YXIgZ2xvYmFsID0gcmVxdWlyZShcIi4vdXRpbFwiKS5nbG9iYWw7XG5cbi8qXG4gKiBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgZ2xvYmFsIGAkYCB2YXJpYWJsZSwgc28gdGhhdCBpdCBjYW4gYmUgcmVzdG9yZWQgbGF0ZXIgb24uXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c0xpYiA9IGdsb2JhbC4kO1xuXG4vKipcbiAqIEluIGNhc2UgYW5vdGhlciBsaWJyYXJ5IHNldHMgdGhlIGdsb2JhbCBgJGAgdmFyaWFibGUgYmVmb3JlIERPTXRhc3RpYyBkb2VzLFxuICogdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gcmV0dXJuIHRoZSBnbG9iYWwgYCRgIHRvIHRoYXQgb3RoZXIgbGlicmFyeS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJlZmVyZW5jZSB0byBET010YXN0aWMuXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBkb210YXN0aWMgPSAkLm5vQ29uZmxpY3QoKTtcbiAqL1xuXG5mdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICBnbG9iYWwuJCA9IHByZXZpb3VzTGliO1xuICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgY2xvc2VzdFxuICovXG5cbnZhciBtYXRjaGVzID0gcmVxdWlyZShcIi5cIikubWF0Y2hlcztcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciBlYWNoID0gX3V0aWwuZWFjaDtcbnZhciB1bmlxID0gX3V0aWwudW5pcTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGNsb3Nlc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgKHN0YXJ0aW5nIGJ5IGl0c2VsZikgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgRmlsdGVyXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIElmIHByb3ZpZGVkLCBtYXRjaGluZyBlbGVtZW50cyBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvbiAoY29udGFpbmluZyB6ZXJvIG9yIG9uZSBlbGVtZW50KVxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jbG9zZXN0KCcuY29udGFpbmVyJyk7XG4gKi9cblxudmFyIGNsb3Nlc3QgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKG5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAkKHVuaXEobm9kZXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPyBjbG9zZXN0IDogZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBub2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gJCh1bmlxKG5vZGVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2xvc2VzdC5jYWxsKHRoaXMsIHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydHMuY2xvc2VzdCA9IGNsb3Nlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQG1vZHVsZSBTZWxlY3RvciAoZXh0cmEpXG4gKi9cblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciBlYWNoID0gX3V0aWwuZWFjaDtcbnZhciB0b0FycmF5ID0gX3V0aWwudG9BcnJheTtcblxudmFyIF8gPSByZXF1aXJlKFwiLlwiKTtcblxudmFyICQgPSBfLiQ7XG52YXIgbWF0Y2hlcyA9IF8ubWF0Y2hlcztcblxuLyoqXG4gKiBSZXR1cm4gY2hpbGRyZW4gb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gRmlsdGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY2hpbGRyZW4oKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jaGlsZHJlbignLmZpbHRlcicpO1xuICovXG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgZWFjaChlbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yICYmIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gY2hpbGQgbm9kZXMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBpbmNsdWRpbmcgdGV4dCBhbmQgY29tbWVudCBub2Rlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY29udGVudHMoKTtcbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50cygpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIG5vZGVzLnB1c2guYXBwbHkobm9kZXMsIHRvQXJyYXkoZWxlbWVudC5jaGlsZE5vZGVzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICQobm9kZXMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGNvbGxlY3Rpb24gY29udGFpbmluZyBvbmx5IHRoZSBvbmUgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5lcSgxKVxuICogICAgIC8vIFRoZSBzZWNvbmQgaXRlbTsgcmVzdWx0IGlzIHRoZSBzYW1lIGFzIGRvaW5nICQoJCgnLml0ZW1zJylbMV0pO1xuICovXG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwodGhpcywgaW5kZXgsIGluZGV4ICsgMSk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBET00gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7Tm9kZX0gRWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmdldCgxKVxuICogICAgIC8vIFRoZSBzZWNvbmQgZWxlbWVudDsgcmVzdWx0IGlzIHRoZSBzYW1lIGFzIGRvaW5nICQoJy5pdGVtcycpWzFdO1xuICovXG5cbmZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW2luZGV4XTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBhcmVudCBlbGVtZW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBGaWx0ZXJcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoJy5maWx0ZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgJiYgbWF0Y2hlcyhlbGVtZW50LnBhcmVudE5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgbm9kZXMucHVzaChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICQobm9kZXMpO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgc2libGluZyBlbGVtZW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBGaWx0ZXJcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5zaWJsaW5ncygpO1xuICogICAgICQoJy5zZWxlY3RvcicpLnNpYmxpbmdzKCcuZmlsdGVyJyk7XG4gKi9cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVhY2goZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoc2libGluZykge1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcgIT09IGVsZW1lbnQgJiYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciAmJiBtYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSkpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKHNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gJChub2Rlcyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3LCBzbGljZWQgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5zbGljZSgxLCAzKVxuICogICAgIC8vIE5ldyB3cmFwcGVkIGNvbGxlY3Rpb24gY29udGFpbmluZyB0aGUgc2Vjb25kLCB0aGlyZCwgYW5kIGZvdXJ0aCBlbGVtZW50LlxuICovXG5cbmZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gJChbXS5zbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5leHBvcnRzLmNvbnRlbnRzID0gY29udGVudHM7XG5leHBvcnRzLmVxID0gZXE7XG5leHBvcnRzLmdldCA9IGdldDtcbmV4cG9ydHMucGFyZW50ID0gcGFyZW50O1xuZXhwb3J0cy5zaWJsaW5ncyA9IHNpYmxpbmdzO1xuZXhwb3J0cy5zbGljZSA9IHNsaWNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBtb2R1bGUgU2VsZWN0b3JcbiAqL1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxudmFyIGdsb2JhbCA9IF91dGlsLmdsb2JhbDtcbnZhciBlYWNoID0gX3V0aWwuZWFjaDtcblxudmFyIGlzUHJvdG90eXBlU2V0ID0gZmFsc2UsXG4gICAgcmVGcmFnbWVudCA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgcmVTaW5nbGVUYWcgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgcmVTaW1wbGVTZWxlY3RvciA9IC9eW1xcLiNdP1tcXHctXSokLztcblxuLypcbiAqIFZlcnNhdGlsZSB3cmFwcGVyIGZvciBgcXVlcnlTZWxlY3RvckFsbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IsIGBOb2RlYCwgYE5vZGVMaXN0YCwgYXJyYXkgb2YgZWxlbWVudHMsIG9yIEhUTUwgZnJhZ21lbnQgc3RyaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdH0gY29udGV4dD1kb2N1bWVudCBUaGUgY29udGV4dCBmb3IgdGhlIHNlbGVjdG9yIHRvIHF1ZXJ5IGVsZW1lbnRzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkaXRlbXMgPSAkKC5pdGVtcycpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGxpc3QgPSAkKG5vZGVMaXN0LCBkb2N1bWVudC5ib2R5KTtcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyICRlbGVtZW50ID0gJCgnPHA+ZXZlcmdyZWVuPC9wPicpO1xuICovXG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IpIHtcbiAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZG9jdW1lbnQgOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgY29sbGVjdGlvbjtcblxuICAgIGlmICghc2VsZWN0b3IpIHtcblxuICAgICAgICBjb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChudWxsKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgV3JhcHBlcikge1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciA9PT0gd2luZG93ID8gW3NlbGVjdG9yXSA6IHNlbGVjdG9yO1xuICAgIH0gZWxzZSBpZiAocmVGcmFnbWVudC50ZXN0KHNlbGVjdG9yKSkge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBjcmVhdGVGcmFnbWVudChzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb250ZXh0ID0gdHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHQpIDogY29udGV4dC5sZW5ndGggPyBjb250ZXh0WzBdIDogY29udGV4dDtcblxuICAgICAgICBjb2xsZWN0aW9uID0gcXVlcnlTZWxlY3RvcihzZWxlY3RvciwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXAoY29sbGVjdGlvbik7XG59XG5cbi8qXG4gKiBGaW5kIGRlc2NlbmRhbnRzIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBgc2VsZWN0b3JgIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IsIGBOb2RlYCwgYE5vZGVMaXN0YCwgYXJyYXkgb2YgZWxlbWVudHMsIG9yIEhUTUwgZnJhZ21lbnQgc3RyaW5nLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5zZWxlY3RvcicpLmZpbmQoJy5kZWVwJykuJCgnLmRlZXBlc3QnKTtcbiAqL1xuXG5mdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBlYWNoKHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IsIG5vZGUpLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGNoaWxkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICQobm9kZXMpO1xufVxuXG4vKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgc2VsZWN0ZWQgYnkgdGhlIHNwZWNpZmllZCBzZWxlY3RvciBzdHJpbmc7IG90aGVyd2lzZSwgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBFbGVtZW50IHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBtYXRjaCBhZ2FpbnN0IGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAkLm1hdGNoZXMoZWxlbWVudCwgJy5tYXRjaCcpO1xuICovXG5cbnZhciBtYXRjaGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGV4dCA9IHR5cGVvZiBFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gRWxlbWVudC5wcm90b3R5cGUgOiBnbG9iYWwsXG4gICAgICAgIF9tYXRjaGVzID0gY29udGV4dC5tYXRjaGVzIHx8IGNvbnRleHQubWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubXNNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9tYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH07XG59KSgpO1xuXG4vKlxuICogVXNlIHRoZSBmYXN0ZXIgYGdldEVsZW1lbnRCeUlkYCwgYGdldEVsZW1lbnRzQnlDbGFzc05hbWVgIG9yIGBnZXRFbGVtZW50c0J5VGFnTmFtZWAgb3ZlciBgcXVlcnlTZWxlY3RvckFsbGAgaWYgcG9zc2libGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBRdWVyeSBzZWxlY3Rvci5cbiAqIEBwYXJhbSB7Tm9kZX0gY29udGV4dCBUaGUgY29udGV4dCBmb3IgdGhlIHNlbGVjdG9yIHRvIHF1ZXJ5IGVsZW1lbnRzLlxuICogQHJldHVybiB7T2JqZWN0fSBOb2RlTGlzdCwgSFRNTENvbGxlY3Rpb24sIG9yIEFycmF5IG9mIG1hdGNoaW5nIGVsZW1lbnRzIChkZXBlbmRpbmcgb24gbWV0aG9kIHVzZWQpLlxuICovXG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IsIGNvbnRleHQpIHtcblxuICAgIHZhciBpc1NpbXBsZVNlbGVjdG9yID0gcmVTaW1wbGVTZWxlY3Rvci50ZXN0KHNlbGVjdG9yKTtcblxuICAgIGlmIChpc1NpbXBsZVNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChzZWxlY3RvclswXSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gKGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgPyBjb250ZXh0IDogZG9jdW1lbnQpLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID8gW2VsZW1lbnRdIDogW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yWzBdID09PSBcIi5cIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xufVxuXG4vKlxuICogQ3JlYXRlIERPTSBmcmFnbWVudCBmcm9tIGFuIEhUTUwgc3RyaW5nXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIFN0cmluZyByZXByZXNlbnRpbmcgSFRNTC5cbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KGh0bWwpIHtcblxuICAgIGlmIChyZVNpbmdsZVRhZy50ZXN0KGh0bWwpKSB7XG4gICAgICAgIHJldHVybiBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpXTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGROb2RlcztcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG4vKlxuICogQ2FsbGluZyBgJChzZWxlY3RvcilgIHJldHVybnMgYSB3cmFwcGVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8QXJyYXl9IGNvbGxlY3Rpb24gRWxlbWVudChzKSB0byB3cmFwLlxuICogQHJldHVybiAoT2JqZWN0KSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gd3JhcChjb2xsZWN0aW9uKSB7XG5cbiAgICBpZiAoIWlzUHJvdG90eXBlU2V0KSB7XG4gICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gJC5mbjtcbiAgICAgICAgV3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXcmFwcGVyO1xuICAgICAgICBpc1Byb3RvdHlwZVNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKGNvbGxlY3Rpb24pO1xufVxuXG4vKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBPYmplY3QucHJvdG90eXBlIHN0cmF0ZWd5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvbiBFbGVtZW50KHMpIHRvIHdyYXAuXG4gKi9cblxuZnVuY3Rpb24gV3JhcHBlcihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgdGhpc1tpXSA9IGNvbGxlY3Rpb25baSsrXTtcbiAgICB9XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0cy4kID0gJDtcbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5leHBvcnRzLm1hdGNoZXMgPSBtYXRjaGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAbW9kdWxlIFR5cGVcbiAqL1xuXG4vKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBhcmd1bWVudCBwYXNzZWQgaXMgYSBKYXZhc2NyaXB0IGZ1bmN0aW9uIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29ial0gT2JqZWN0IHRvIHRlc3Qgd2hldGhlciBvciBub3QgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFxuICogQGV4YW1wbGVcbiAqICAgICAkLmlzRnVuY3Rpb24oZnVuY3Rpb24oKXt9KTtcbiAqICAgICAvLyB0cnVlXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNGdW5jdGlvbih7fSk7XG4gKiAgICAgLy8gZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqXSBPYmplY3QgdG8gdGVzdCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFxuICogQGV4YW1wbGVcbiAqICAgICAkLmlzQXJyYXkoW10pO1xuICogICAgIC8vIHRydWVcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0FycmF5KHt9KTtcbiAqICAgICAvLyBmYWxzZVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLypcbiAqIEBtb2R1bGUgVXRpbFxuICovXG5cbi8qXG4gKiBSZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBzY29wZVxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZ2xvYmFsID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLyoqXG4gKiBDb252ZXJ0IGBOb2RlTGlzdGAgdG8gYEFycmF5YC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheShjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGNvbGxlY3Rpb25baV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRmFzdGVyIGFsdGVybmF0aXZlIHRvIFtdLmZvckVhY2ggbWV0aG9kXG4gKlxuICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7Tm9kZXxOb2RlTGlzdHxBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgY29sbGVjdGlvbi5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGNvbGxlY3Rpb24sIDAsIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuLyoqXG4gKiBBc3NpZ24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIG9iamVjdChzKSB0byB0YXJnZXQgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgT2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IFtzb3VyY2VdIE9iamVjdCB0byBleHRlbmQgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5leHRlbmQoe2E6IDF9LCB7YjogMn0pO1xuICogICAgIC8vIHthOiAxLCBiOiAyfVxuICogQGV4YW1wbGVcbiAqICAgICAkLmV4dGVuZCh7YTogMX0sIHtiOiAyfSwge2E6IDN9KTtcbiAqICAgICAvLyB7YTogMywgYjogMn1cbiAqL1xuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc3JjKSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzcmNbcHJvcF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY29sbGVjdGlvbiB3aXRob3V0IGR1cGxpY2F0ZXNcbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvbiBDb2xsZWN0aW9uIHRvIHJlbW92ZSBkdXBsaWNhdGVzIGZyb21cbiAqIEByZXR1cm4ge05vZGV8Tm9kZUxpc3R8QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHVuaXEoY29sbGVjdGlvbikge1xuICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0cy5nbG9iYWwgPSBnbG9iYWw7XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZXhwb3J0cy5lYWNoID0gZWFjaDtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuZXhwb3J0cy51bmlxID0gdW5pcTsiXX0=
