/*** Bridge4KT Z-Way HA module *******************************
 
 Author: Ralph Wetzel <bridge4kt@gmx.com>
 Version: 1.4
 Description:
   This module announces Z-Way HA devices to Apple HomeKit
 
 Conceptually based on:
   HomeKitGate Z-Way HA module
   Author: Andreas Freud <andreas.freud@gmx.net>

**************************************************************/

(function(){
    "use strict";
    var ρσ_iterator_symbol = (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") ? Symbol.iterator : "iterator-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_kwargs_symbol = (typeof Symbol === "function") ? Symbol("kwargs-object") : "kwargs-object-Symbol-5d0927e5554349048cf0e3762a228256";
    var ρσ_cond_temp, ρσ_expr_temp, ρσ_last_exception;
    var ρσ_object_counter = 0;
var ρσ_len;
function ρσ_bool(val) {
    return !!val;
};
if (!ρσ_bool.__argnames__) Object.defineProperties(ρσ_bool, {
    __argnames__ : {value: ["val"]}
});

function ρσ_print() {
    var parts;
    if (typeof console === "object") {
        parts = [];
        for (var i = 0; i < arguments.length; i++) {
            parts.push(ρσ_str(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]));
        }
        console.log(parts.join(" "));
    }
};

function ρσ_int(val, base) {
    var ans;
    if (typeof val === "number") {
        ans = val | 0;
    } else {
        ans = parseInt(val, base || 10);
    }
    if (isNaN(ans)) {
        throw new ValueError("Invalid literal for int with base " + (base || 10) + ": " + val);
    }
    return ans;
};
if (!ρσ_int.__argnames__) Object.defineProperties(ρσ_int, {
    __argnames__ : {value: ["val", "base"]}
});

function ρσ_float(val) {
    var ans;
    if (typeof val === "number") {
        ans = val;
    } else {
        ans = parseFloat(val);
    }
    if (isNaN(ans)) {
        throw new ValueError("Could not convert string to float: " + arguments[0]);
    }
    return ans;
};
if (!ρσ_float.__argnames__) Object.defineProperties(ρσ_float, {
    __argnames__ : {value: ["val"]}
});

function ρσ_arraylike_creator() {
    var names;
    names = "Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    if (typeof HTMLCollection === "function") {
        names = names.concat("HTMLCollection NodeList NamedNodeMap TouchList".split(" "));
    }
    return (function() {
        var ρσ_anonfunc = function (x) {
            if (Array.isArray(x) || typeof x === "string" || names.indexOf(Object.prototype.toString.call(x).slice(8, -1)) > -1) {
                return true;
            }
            return false;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["x"]}
        });
        return ρσ_anonfunc;
    })();
};

function options_object(f) {
    return function () {
        if (typeof arguments[arguments.length - 1] === "object") {
            arguments[ρσ_bound_index(arguments.length - 1, arguments)][ρσ_kwargs_symbol] = true;
        }
        return f.apply(this, arguments);
    };
};
if (!options_object.__argnames__) Object.defineProperties(options_object, {
    __argnames__ : {value: ["f"]}
});

function ρσ_id(x) {
    return x.ρσ_object_id;
};
if (!ρσ_id.__argnames__) Object.defineProperties(ρσ_id, {
    __argnames__ : {value: ["x"]}
});

function ρσ_dir(item) {
    var arr;
    arr = ρσ_list_decorate([]);
    for (var i in item) {
        arr.push(i);
    }
    return arr;
};
if (!ρσ_dir.__argnames__) Object.defineProperties(ρσ_dir, {
    __argnames__ : {value: ["item"]}
});

function ρσ_ord(x) {
    var ans, second;
    ans = x.charCodeAt(0);
    if (55296 <= ans && ans <= 56319) {
        second = x.charCodeAt(1);
        if (56320 <= second && second <= 57343) {
            return (ans - 55296) * 1024 + second - 56320 + 65536;
        }
        throw new TypeError("string is missing the low surrogate char");
    }
    return ans;
};
if (!ρσ_ord.__argnames__) Object.defineProperties(ρσ_ord, {
    __argnames__ : {value: ["x"]}
});

function ρσ_chr(code) {
    if (code <= 65535) {
        return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
};
if (!ρσ_chr.__argnames__) Object.defineProperties(ρσ_chr, {
    __argnames__ : {value: ["code"]}
});

function ρσ_callable(x) {
    return typeof x === "function";
};
if (!ρσ_callable.__argnames__) Object.defineProperties(ρσ_callable, {
    __argnames__ : {value: ["x"]}
});

function ρσ_bin(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(2);
    if (ans[0] === "-") {
        ans = "-" + "0b" + ans.slice(1);
    } else {
        ans = "0b" + ans;
    }
    return ans;
};
if (!ρσ_bin.__argnames__) Object.defineProperties(ρσ_bin, {
    __argnames__ : {value: ["x"]}
});

function ρσ_hex(x) {
    var ans;
    if (typeof x !== "number" || x % 1 !== 0) {
        throw new TypeError("integer required");
    }
    ans = x.toString(16);
    if (ans[0] === "-") {
        ans = "-" + "0x" + ans.slice(1);
    } else {
        ans = "0x" + ans;
    }
    return ans;
};
if (!ρσ_hex.__argnames__) Object.defineProperties(ρσ_hex, {
    __argnames__ : {value: ["x"]}
});

function ρσ_enumerate(iterable) {
    var ans, iterator;
    ans = {"_i":-1};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    if (ρσ_arraylike(iterable)) {
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':[this._i, iterable[this._i]]};
            }
            return {'done':true};
        };
        return ans;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans["_iterator"] = iterator;
        ans["next"] = function () {
            var r;
            r = this._iterator.next();
            if (r.done) {
                return {'done':true};
            }
            this._i += 1;
            return {'done':false, 'value':[this._i, r.value]};
        };
        return ans;
    }
    return ρσ_enumerate(Object.keys(iterable));
};
if (!ρσ_enumerate.__argnames__) Object.defineProperties(ρσ_enumerate, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_reversed(iterable) {
    var ans;
    if (ρσ_arraylike(iterable)) {
        ans = {"_i": iterable.length};
        ans["next"] = function () {
            this._i -= 1;
            if (this._i > -1) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        return ans;
    }
    throw new TypeError("reversed() can only be called on arrays or strings");
};
if (!ρσ_reversed.__argnames__) Object.defineProperties(ρσ_reversed, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_iter(iterable) {
    var ans;
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        return (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
    }
    if (ρσ_arraylike(iterable)) {
        ans = {"_i":-1};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i < iterable.length) {
                return {'done':false, 'value':iterable[this._i]};
            }
            return {'done':true};
        };
        return ans;
    }
    return ρσ_iter(Object.keys(iterable));
};
if (!ρσ_iter.__argnames__) Object.defineProperties(ρσ_iter, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_range_next(step, length) {
    var ρσ_unpack;
    this._i += step;
    this._idx += 1;
    if (this._idx >= length) {
        ρσ_unpack = [this.__i, -1];
        this._i = ρσ_unpack[0];
        this._idx = ρσ_unpack[1];
        return {'done':true};
    }
    return {'done':false, 'value':this._i};
};
if (!ρσ_range_next.__argnames__) Object.defineProperties(ρσ_range_next, {
    __argnames__ : {value: ["step", "length"]}
});

function ρσ_range(start, stop, step) {
    var length, ans;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    ans = {start:start, step:step, stop:stop};
    ans[ρσ_iterator_symbol] = function () {
        var it;
        it = {"_i": start - step, "_idx": -1};
        it.next = ρσ_range_next.bind(it, step, length);
        it[ρσ_iterator_symbol] = function () {
            return this;
        };
        return it;
    };
    ans.count = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.count(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    ans.index = (function() {
        var ρσ_anonfunc = function (val) {
            if (!this._cached) {
                this._cached = list(this);
            }
            return this._cached.index(val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val"]}
        });
        return ρσ_anonfunc;
    })();
    if (typeof Proxy === "function") {
        ans = new Proxy(ans, (function(){
            var ρσ_d = {};
            ρσ_d["get"] = (function() {
                var ρσ_anonfunc = function (obj, prop) {
                    var iprop;
                    if (typeof prop === "string") {
                        iprop = parseInt(prop);
                        if (!isNaN(iprop)) {
                            prop = iprop;
                        }
                    }
                    if (typeof prop === "number") {
                        if (!obj._cached) {
                            obj._cached = list(obj);
                        }
                        return (ρσ_expr_temp = obj._cached)[(typeof prop === "number" && prop < 0) ? ρσ_expr_temp.length + prop : prop];
                    }
                    return obj[(typeof prop === "number" && prop < 0) ? obj.length + prop : prop];
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["obj", "prop"]}
                });
                return ρσ_anonfunc;
            })();
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_range.__argnames__) Object.defineProperties(ρσ_range, {
    __argnames__ : {value: ["start", "stop", "step"]}
});

function ρσ_getattr(obj, name, defval) {
    var ret;
    try {
        ret = obj[(typeof name === "number" && name < 0) ? obj.length + name : name];
    } catch (ρσ_Exception) {
        ρσ_last_exception = ρσ_Exception;
        if (ρσ_Exception instanceof TypeError) {
            if (defval === undefined) {
                throw new AttributeError("The attribute " + name + " is not present");
            }
            return defval;
        } else {
            throw ρσ_Exception;
        }
    }
    if (ret === undefined && !(name in obj)) {
        if (defval === undefined) {
            throw new AttributeError("The attribute " + name + " is not present");
        }
        ret = defval;
    }
    return ret;
};
if (!ρσ_getattr.__argnames__) Object.defineProperties(ρσ_getattr, {
    __argnames__ : {value: ["obj", "name", "defval"]}
});

function ρσ_setattr(obj, name, value) {
    obj[(typeof name === "number" && name < 0) ? obj.length + name : name] = value;
};
if (!ρσ_setattr.__argnames__) Object.defineProperties(ρσ_setattr, {
    __argnames__ : {value: ["obj", "name", "value"]}
});

function ρσ_hasattr(obj, name) {
    return name in obj;
};
if (!ρσ_hasattr.__argnames__) Object.defineProperties(ρσ_hasattr, {
    __argnames__ : {value: ["obj", "name"]}
});

ρσ_len = function () {
    function len(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        if (obj instanceof Set || obj instanceof Map) {
            return obj.size;
        }
        return Object.keys(obj).length;
    };
    if (!len.__argnames__) Object.defineProperties(len, {
        __argnames__ : {value: ["obj"]}
    });

    function len5(obj) {
        if (ρσ_arraylike(obj)) {
            return obj.length;
        }
        if (typeof obj.__len__ === "function") {
            return obj.__len__();
        }
        return Object.keys(obj).length;
    };
    if (!len5.__argnames__) Object.defineProperties(len5, {
        __argnames__ : {value: ["obj"]}
    });

    return (typeof Set === "function" && typeof Map === "function") ? len : len5;
}();
function ρσ_get_module(name) {
    return ρσ_modules[(typeof name === "number" && name < 0) ? ρσ_modules.length + name : name];
};
if (!ρσ_get_module.__argnames__) Object.defineProperties(ρσ_get_module, {
    __argnames__ : {value: ["name"]}
});

function ρσ_pow(x, y, z) {
    var ans;
    ans = Math.pow(x, y);
    if (z !== undefined) {
        ans %= z;
    }
    return ans;
};
if (!ρσ_pow.__argnames__) Object.defineProperties(ρσ_pow, {
    __argnames__ : {value: ["x", "y", "z"]}
});

function ρσ_type(x) {
    return x.constructor;
};
if (!ρσ_type.__argnames__) Object.defineProperties(ρσ_type, {
    __argnames__ : {value: ["x"]}
});

function ρσ_divmod(x, y) {
    var d;
    if (y === 0) {
        throw new ZeroDivisionError("integer division or modulo by zero");
    }
    d = Math.floor(x / y);
    return [d, x - d * y];
};
if (!ρσ_divmod.__argnames__) Object.defineProperties(ρσ_divmod, {
    __argnames__ : {value: ["x", "y"]}
});

function ρσ_max() {
    var kwargs = arguments[arguments.length-1];
    if (kwargs === null || typeof kwargs !== "object" || kwargs [ρσ_kwargs_symbol] !== true) kwargs = {};
    var args = Array.prototype.slice.call(arguments, 0);
    if (kwargs !== null && typeof kwargs === "object" && kwargs [ρσ_kwargs_symbol] === true) args.pop();
    var args, x;
    if (args.length === 0) {
        if (kwargs.defval !== undefined) {
            return kwargs.defval;
        }
        throw new TypeError("expected at least one argument");
    }
    if (args.length === 1) {
        args = args[0];
    }
    if (kwargs.key) {
        args = (function() {
            var ρσ_Iter = ρσ_Iterable(args), ρσ_Result = [], x;
            for (var ρσ_Index = 0; ρσ_Index < ρσ_Iter.length; ρσ_Index++) {
                x = ρσ_Iter[ρσ_Index];
                ρσ_Result.push(kwargs.key(x));
            }
            ρσ_Result = ρσ_list_constructor(ρσ_Result);
            return ρσ_Result;
        })();
    }
    if (!Array.isArray(args)) {
        args = list(args);
    }
    if (args.length) {
        return this.apply(null, args);
    }
    if (kwargs.defval !== undefined) {
        return kwargs.defval;
    }
    throw new TypeError("expected at least one argument");
};
if (!ρσ_max.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_max, {
    __handles_kwarg_interpolation__ : {value: true}
});

var abs = Math.abs, max = ρσ_max.bind(Math.max), min = ρσ_max.bind(Math.min), bool = ρσ_bool, type = ρσ_type;
var float = ρσ_float, int = ρσ_int, arraylike = ρσ_arraylike_creator(), ρσ_arraylike = arraylike;
var print = ρσ_print, id = ρσ_id, get_module = ρσ_get_module, pow = ρσ_pow, divmod = ρσ_divmod;
var dir = ρσ_dir, ord = ρσ_ord, chr = ρσ_chr, bin = ρσ_bin, hex = ρσ_hex, callable = ρσ_callable;
var enumerate = ρσ_enumerate, iter = ρσ_iter, reversed = ρσ_reversed, len = ρσ_len;
var range = ρσ_range, getattr = ρσ_getattr, setattr = ρσ_setattr, hasattr = ρσ_hasattr;function ρσ_equals(a, b) {
    var ρσ_unpack, akeys, bkeys, key;
    if (a === b) {
        return true;
    }
    if (a && typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    if (b && typeof b.__eq__ === "function") {
        return b.__eq__(a);
    }
    if (ρσ_arraylike(a) && ρσ_arraylike(b)) {
        if ((a.length !== b.length && (typeof a.length !== "object" || ρσ_not_equals(a.length, b.length)))) {
            return false;
        }
        for (var i=0; i < a.length; i++) {
            if (!((a[(typeof i === "number" && i < 0) ? a.length + i : i] === b[(typeof i === "number" && i < 0) ? b.length + i : i] || typeof a[(typeof i === "number" && i < 0) ? a.length + i : i] === "object" && ρσ_equals(a[(typeof i === "number" && i < 0) ? a.length + i : i], b[(typeof i === "number" && i < 0) ? b.length + i : i])))) {
                return false;
            }
        }
        return true;
    }
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null && (a.constructor === Object && b.constructor === Object || Object.getPrototypeOf(a) === null && Object.getPrototypeOf(b) === null)) {
        ρσ_unpack = [Object.keys(a), Object.keys(b)];
        akeys = ρσ_unpack[0];
        bkeys = ρσ_unpack[1];
        if (akeys.length !== bkeys.length) {
            return false;
        }
        for (var j=0; j < akeys.length; j++) {
            key = akeys[(typeof j === "number" && j < 0) ? akeys.length + j : j];
            if (!((a[(typeof key === "number" && key < 0) ? a.length + key : key] === b[(typeof key === "number" && key < 0) ? b.length + key : key] || typeof a[(typeof key === "number" && key < 0) ? a.length + key : key] === "object" && ρσ_equals(a[(typeof key === "number" && key < 0) ? a.length + key : key], b[(typeof key === "number" && key < 0) ? b.length + key : key])))) {
                return false;
            }
        }
        return true;
    }
    return false;
};
if (!ρσ_equals.__argnames__) Object.defineProperties(ρσ_equals, {
    __argnames__ : {value: ["a", "b"]}
});

function ρσ_not_equals(a, b) {
    if (a === b) {
        return false;
    }
    if (a && typeof a.__ne__ === "function") {
        return a.__ne__(b);
    }
    if (b && typeof b.__ne__ === "function") {
        return b.__ne__(a);
    }
    return !ρσ_equals(a, b);
};
if (!ρσ_not_equals.__argnames__) Object.defineProperties(ρσ_not_equals, {
    __argnames__ : {value: ["a", "b"]}
});

var equals = ρσ_equals;
function ρσ_list_extend(iterable) {
    var start, iterator, result;
    if (Array.isArray(iterable) || typeof iterable === "string") {
        start = this.length;
        this.length += iterable.length;
        for (var i = 0; i < iterable.length; i++) {
            (ρσ_expr_temp = this)[ρσ_bound_index(start + i, ρσ_expr_temp)] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            this.push(result.value);
            result = iterator.next();
        }
    }
};
if (!ρσ_list_extend.__argnames__) Object.defineProperties(ρσ_list_extend, {
    __argnames__ : {value: ["iterable"]}
});

function ρσ_list_index(val, start, stop) {
    var idx;
    start = start || 0;
    if (start < 0) {
        start = this.length + start;
    }
    if (start < 0) {
        throw new ValueError(val + " is not in list");
    }
    if (stop === undefined) {
        idx = this.indexOf(val, start);
        if (idx === -1) {
            throw new ValueError(val + " is not in list");
        }
        return idx;
    }
    if (stop < 0) {
        stop = this.length + stop;
    }
    for (var i = start; i < stop; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return i;
        }
    }
    throw new ValueError(val + " is not in list");
};
if (!ρσ_list_index.__argnames__) Object.defineProperties(ρσ_list_index, {
    __argnames__ : {value: ["val", "start", "stop"]}
});

function ρσ_list_pop(index) {
    var ans;
    if (this.length === 0) {
        throw new IndexError("list is empty");
    }
    if (index === undefined) {
        index = -1;
    }
    ans = this.splice(index, 1);
    if (!ans.length) {
        throw new IndexError("pop index out of range");
    }
    return ans[0];
};
if (!ρσ_list_pop.__argnames__) Object.defineProperties(ρσ_list_pop, {
    __argnames__ : {value: ["index"]}
});

function ρσ_list_remove(value) {
    var idx;
    idx = this.indexOf(value);
    if (idx === -1) {
        throw new ValueError(value + " not in list");
    }
    this.splice(idx, 1);
};
if (!ρσ_list_remove.__argnames__) Object.defineProperties(ρσ_list_remove, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_to_string() {
    return "[" + this.join(", ") + "]";
};

function ρσ_list_insert(index, val) {
    if (index < 0) {
        index += this.length;
    }
    index = min(this.length, max(index, 0));
    if (index === 0) {
        this.unshift(val);
        return;
    }
    for (var i = this.length; i > index; i--) {
        (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = this)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
    }
    (ρσ_expr_temp = this)[(typeof index === "number" && index < 0) ? ρσ_expr_temp.length + index : index] = val;
};
if (!ρσ_list_insert.__argnames__) Object.defineProperties(ρσ_list_insert, {
    __argnames__ : {value: ["index", "val"]}
});

function ρσ_list_copy() {
    return ρσ_list_constructor(this);
};

function ρσ_list_clear() {
    this.length = 0;
};

function ρσ_list_as_array() {
    return Array.prototype.slice.call(this);
};

function ρσ_list_count(value) {
    return this.reduce((function() {
        var ρσ_anonfunc = function (n, val) {
            return n + (val === value);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["n", "val"]}
        });
        return ρσ_anonfunc;
    })(), 0);
};
if (!ρσ_list_count.__argnames__) Object.defineProperties(ρσ_list_count, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_key(value) {
    var t;
    t = typeof value;
    if (t === "string" || t === "number") {
        return value;
    }
    return value.toString();
};
if (!ρσ_list_sort_key.__argnames__) Object.defineProperties(ρσ_list_sort_key, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_sort_cmp(a, b, ap, bp) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return ap - bp;
};
if (!ρσ_list_sort_cmp.__argnames__) Object.defineProperties(ρσ_list_sort_cmp, {
    __argnames__ : {value: ["a", "b", "ap", "bp"]}
});

function ρσ_list_sort() {
    var key = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.key : arguments[0];
    var reverse = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_list_sort.__defaults__.reverse : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var mult, keymap, posmap, k;
    key = key || ρσ_list_sort_key;
    mult = (reverse) ? -1 : 1;
    keymap = dict();
    posmap = dict();
    for (var i=0; i < this.length; i++) {
        k = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        keymap.set(k, key(k));
        posmap.set(k, i);
    }
    this.sort((function() {
        var ρσ_anonfunc = function (a, b) {
            return mult * ρσ_list_sort_cmp(keymap.get(a), keymap.get(b), posmap.get(a), posmap.get(b));
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return ρσ_anonfunc;
    })());
};
if (!ρσ_list_sort.__defaults__) Object.defineProperties(ρσ_list_sort, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["key", "reverse"]}
});

function ρσ_list_concat() {
    var ans;
    ans = Array.prototype.concat.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_slice() {
    var ans;
    ans = Array.prototype.slice.apply(this, arguments);
    ρσ_list_decorate(ans);
    return ans;
};

function ρσ_list_iterator(value) {
    var self;
    self = this;
    return (function(){
        var ρσ_d = {};
        ρσ_d["_i"] = -1;
        ρσ_d["_list"] = self;
        ρσ_d["next"] = function () {
            this._i += 1;
            if (this._i >= this._list.length) {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["done"] = true;
                    return ρσ_d;
                }).call(this);
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["done"] = false;
                ρσ_d["value"] = (ρσ_expr_temp = this._list)[ρσ_bound_index(this._i, ρσ_expr_temp)];
                return ρσ_d;
            }).call(this);
        };
        return ρσ_d;
    }).call(this);
};
if (!ρσ_list_iterator.__argnames__) Object.defineProperties(ρσ_list_iterator, {
    __argnames__ : {value: ["value"]}
});

function ρσ_list_len() {
    return this.length;
};

function ρσ_list_contains(val) {
    for (var i = 0; i < this.length; i++) {
        if (((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === val || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], val))) {
            return true;
        }
    }
    return false;
};
if (!ρσ_list_contains.__argnames__) Object.defineProperties(ρσ_list_contains, {
    __argnames__ : {value: ["val"]}
});

function ρσ_list_eq(other) {
    if (!ρσ_arraylike(other)) {
        return false;
    }
    if ((this.length !== other.length && (typeof this.length !== "object" || ρσ_not_equals(this.length, other.length)))) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (!(((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === other[(typeof i === "number" && i < 0) ? other.length + i : i] || typeof (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] === "object" && ρσ_equals((ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i], other[(typeof i === "number" && i < 0) ? other.length + i : i])))) {
            return false;
        }
    }
    return true;
};
if (!ρσ_list_eq.__argnames__) Object.defineProperties(ρσ_list_eq, {
    __argnames__ : {value: ["other"]}
});

function ρσ_list_decorate(ans) {
    ans.append = Array.prototype.push;
    ans.toString = ρσ_list_to_string;
    ans.inspect = ρσ_list_to_string;
    ans.extend = ρσ_list_extend;
    ans.index = ρσ_list_index;
    ans.pypop = ρσ_list_pop;
    ans.remove = ρσ_list_remove;
    ans.insert = ρσ_list_insert;
    ans.copy = ρσ_list_copy;
    ans.clear = ρσ_list_clear;
    ans.count = ρσ_list_count;
    ans.concat = ρσ_list_concat;
    ans.pysort = ρσ_list_sort;
    ans.slice = ρσ_list_slice;
    ans.as_array = ρσ_list_as_array;
    ans.__len__ = ρσ_list_len;
    ans.__contains__ = ρσ_list_contains;
    ans.__eq__ = ρσ_list_eq;
    ans.constructor = ρσ_list_constructor;
    if (typeof ans[ρσ_iterator_symbol] !== "function") {
        ans[ρσ_iterator_symbol] = ρσ_list_iterator;
    }
    return ans;
};
if (!ρσ_list_decorate.__argnames__) Object.defineProperties(ρσ_list_decorate, {
    __argnames__ : {value: ["ans"]}
});

function ρσ_list_constructor(iterable) {
    var ans, iterator, result;
    if (iterable === undefined) {
        ans = [];
    } else if (ρσ_arraylike(iterable)) {
        ans = new Array(iterable.length);
        for (var i = 0; i < iterable.length; i++) {
            ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i];
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
    } else if (typeof iterable === "number") {
        ans = new Array(iterable);
    } else {
        ans = Object.keys(iterable);
    }
    return ρσ_list_decorate(ans);
};
if (!ρσ_list_constructor.__argnames__) Object.defineProperties(ρσ_list_constructor, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_list_constructor.__name__ = "list";
var list = ρσ_list_constructor, list_wrap = ρσ_list_decorate;
function sorted() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var key = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.key : arguments[1];
    var reverse = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sorted.__defaults__.reverse : arguments[2];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "key")){
        key = ρσ_kwargs_obj.key;
    }
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "reverse")){
        reverse = ρσ_kwargs_obj.reverse;
    }
    var ans;
    ans = ρσ_list_constructor(iterable);
    ans.pysort(key, reverse);
    return ans;
};
if (!sorted.__defaults__) Object.defineProperties(sorted, {
    __defaults__ : {value: {key:null, reverse:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable", "key", "reverse"]}
});

var ρσ_global_object_id = 0, ρσ_set_implementation;
function ρσ_set_keyfor(x) {
    var t, ans;
    t = typeof x;
    if (t === "string" || t === "number" || t === "boolean") {
        return "_" + t[0] + x;
    }
    if (x === null) {
        return "__!@#$0";
    }
    ans = x.ρσ_hash_key_prop;
    if (ans === undefined) {
        ans = "_!@#$" + (++ρσ_global_object_id);
        Object.defineProperty(x, "ρσ_hash_key_prop", (function(){
            var ρσ_d = {};
            ρσ_d["value"] = ans;
            return ρσ_d;
        }).call(this));
    }
    return ans;
};
if (!ρσ_set_keyfor.__argnames__) Object.defineProperties(ρσ_set_keyfor, {
    __argnames__ : {value: ["x"]}
});

function ρσ_set_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_set_polyfill.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
            (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = x;
        }
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Set !== "function" || typeof Set.prototype.delete !== "function") {
    ρσ_set_implementation = ρσ_set_polyfill;
} else {
    ρσ_set_implementation = Set;
}
function ρσ_set(iterable) {
    var ans, s, iterator, result, keys;
    if (this instanceof ρσ_set) {
        this.jsset = new ρσ_set_implementation;
        ans = this;
        if (iterable === undefined) {
            return ans;
        }
        s = ans.jsset;
        if (ρσ_arraylike(iterable)) {
            for (var i = 0; i < iterable.length; i++) {
                s.add(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i]);
            }
        } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
            iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
            result = iterator.next();
            while (!result.done) {
                s.add(result.value);
                result = iterator.next();
            }
        } else {
            keys = Object.keys(iterable);
            for (var j=0; j < keys.length; j++) {
                s.add(keys[(typeof j === "number" && j < 0) ? keys.length + j : j]);
            }
        }
        return ans;
    } else {
        return new ρσ_set(iterable);
    }
};
if (!ρσ_set.__argnames__) Object.defineProperties(ρσ_set, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_set.prototype.__name__ = "set";
Object.defineProperties(ρσ_set.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsset.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_set.prototype.__len__ = function () {
    return this.jsset.size;
};
ρσ_set.prototype.has = ρσ_set.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsset.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.add = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.add(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.clear = function () {
    this.jsset.clear();
};
ρσ_set.prototype.copy = function () {
    return ρσ_set(this);
};
ρσ_set.prototype.discard = (function() {
    var ρσ_anonfunc = function (x) {
        this.jsset.delete(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype[ρσ_iterator_symbol] = function () {
    return this.jsset.values();
};
ρσ_set.prototype.difference = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = false;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = true;
                break;
            }
        }
        if (!has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.difference_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.intersection = function () {
    var ans, s, iterator, r, x, has;
    ans = new ρσ_set;
    s = ans.jsset;
    iterator = this.jsset.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        has = true;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                has = false;
                break;
            }
        }
        if (has) {
            s.add(x);
        }
        r = iterator.next();
    }
    return ans;
};
ρσ_set.prototype.intersection_update = function () {
    var s, remove, iterator, r, x;
    s = this.jsset;
    remove = [];
    iterator = s.values();
    r = iterator.next();
    while (!r.done) {
        x = r.value;
        for (var i = 0; i < arguments.length; i++) {
            if (!arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i].has(x)) {
                remove.push(x);
                break;
            }
        }
        r = iterator.next();
    }
    for (var j = 0; j < remove.length; j++) {
        s.delete(remove[(typeof j === "number" && j < 0) ? remove.length + j : j]);
    }
};
ρσ_set.prototype.isdisjoint = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issubset = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        iterator = this.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!other.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.issuperset = (function() {
    var ρσ_anonfunc = function (other) {
        var s, iterator, r, x;
        s = this.jsset;
        iterator = other.jsset.values();
        r = iterator.next();
        while (!r.done) {
            x = r.value;
            if (!s.has(x)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.pop = function () {
    var iterator, r;
    iterator = this.jsset.values();
    r = iterator.next();
    if (r.done) {
        throw new KeyError("pop from an empty set");
    }
    this.jsset.delete(r.value);
    return r.value;
};
ρσ_set.prototype.remove = (function() {
    var ρσ_anonfunc = function (x) {
        if (!this.jsset.delete(x)) {
            throw new KeyError(x.toString());
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference = (function() {
    var ρσ_anonfunc = function (other) {
        return this.union(other).difference(this.intersection(other));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.symmetric_difference_update = (function() {
    var ρσ_anonfunc = function (other) {
        var common;
        common = this.intersection(other);
        this.update(other);
        this.difference_update(common);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_set.prototype.union = function () {
    var ans;
    ans = ρσ_set(this);
    ans.update.apply(ans, arguments);
    return ans;
};
ρσ_set.prototype.update = function () {
    var s, iterator, r;
    s = this.jsset;
    for (var i=0; i < arguments.length; i++) {
        iterator = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i][ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            s.add(r.value);
            r = iterator.next();
        }
    }
};
ρσ_set.prototype.toString = ρσ_set.prototype.__repr__ = ρσ_set.prototype.__str__ = ρσ_set.prototype.inspect = function () {
    return "{" + list(this).join(", ") + "}";
};
ρσ_set.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r;
        if (!other instanceof this.constructor) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other[ρσ_iterator_symbol]();
        r = iterator.next();
        while (!r.done) {
            if (!this.has(r.value)) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_set_wrap(x) {
    var ans;
    ans = new ρσ_set;
    ans.jsset = x;
    return ans;
};
if (!ρσ_set_wrap.__argnames__) Object.defineProperties(ρσ_set_wrap, {
    __argnames__ : {value: ["x"]}
});

var set = ρσ_set, set_wrap = ρσ_set_wrap;
var ρσ_dict_implementation;
function ρσ_dict_polyfill() {
    this._store = {};
    this.size = 0;
};

ρσ_dict_polyfill.prototype.set = (function() {
    var ρσ_anonfunc = function (x, value) {
        var key;
        key = ρσ_set_keyfor(x);
        if (!Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size += 1;
        }
        (ρσ_expr_temp = this._store)[(typeof key === "number" && key < 0) ? ρσ_expr_temp.length + key : key] = [x, value];
        return this;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.clear = (function() {
    var ρσ_anonfunc = function (x) {
        this._store = {};
        this.size = 0;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.delete = (function() {
    var ρσ_anonfunc = function (x) {
        var key;
        key = ρσ_set_keyfor(x);
        if (Object.prototype.hasOwnProperty.call(this._store, key)) {
            this.size -= 1;
            delete this._store[key];
            return true;
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.has = (function() {
    var ρσ_anonfunc = function (x) {
        return Object.prototype.hasOwnProperty.call(this._store, ρσ_set_keyfor(x));
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.get = (function() {
    var ρσ_anonfunc = function (x) {
        try {
            return (ρσ_expr_temp = this._store)[ρσ_bound_index(ρσ_set_keyfor(x), ρσ_expr_temp)][1];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return undefined;
            } else {
                throw ρσ_Exception;
            }
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.values = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][1]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.keys = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]][0]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict_polyfill.prototype.entries = (function() {
    var ρσ_anonfunc = function (x) {
        var ans;
        ans = {'_keys': Object.keys(this._store), '_i':-1, '_s':this._store};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            this._i += 1;
            if (this._i >= this._keys.length) {
                return {'done': true};
            }
            return {'done':false, 'value':this._s[this._keys[this._i]]};
        };
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
if (typeof Map !== "function" || typeof Map.prototype.delete !== "function") {
    ρσ_dict_implementation = ρσ_dict_polyfill;
} else {
    ρσ_dict_implementation = Map;
}
function ρσ_dict() {
    var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var kw = arguments[arguments.length-1];
    if (kw === null || typeof kw !== "object" || kw [ρσ_kwargs_symbol] !== true) kw = {};
    if (this instanceof ρσ_dict) {
        this.jsmap = new ρσ_dict_implementation;
        if (iterable !== undefined) {
            this.update(iterable);
        }
        this.update(kw);
        return this;
    } else {
        return ρσ_interpolate_kwargs_constructor.call(Object.create(ρσ_dict.prototype), false, ρσ_dict, [iterable].concat([ρσ_desugar_kwargs(kw)]));
    }
};
if (!ρσ_dict.__handles_kwarg_interpolation__) Object.defineProperties(ρσ_dict, {
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["iterable"]}
});

ρσ_dict.prototype.__name__ = "dict";
Object.defineProperties(ρσ_dict.prototype, (function(){
    var ρσ_d = {};
    ρσ_d["length"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    ρσ_d["size"] = (function(){
        var ρσ_d = {};
        ρσ_d["get"] = function () {
            return this.jsmap.size;
        };
        return ρσ_d;
    }).call(this);
    return ρσ_d;
}).call(this));
ρσ_dict.prototype.__len__ = function () {
    return this.jsmap.size;
};
ρσ_dict.prototype.has = ρσ_dict.prototype.__contains__ = (function() {
    var ρσ_anonfunc = function (x) {
        return this.jsmap.has(x);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["x"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set = ρσ_dict.prototype.__setitem__ = (function() {
    var ρσ_anonfunc = function (key, value) {
        this.jsmap.set(key, value);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.__delitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        this.jsmap.delete(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.clear = function () {
    this.jsmap.clear();
};
ρσ_dict.prototype.copy = function () {
    return ρσ_dict(this);
};
ρσ_dict.prototype.keys = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.values = function () {
    return this.jsmap.values();
};
ρσ_dict.prototype.items = ρσ_dict.prototype.entries = function () {
    return this.jsmap.entries();
};
ρσ_dict.prototype[ρσ_iterator_symbol] = function () {
    return this.jsmap.keys();
};
ρσ_dict.prototype.__getitem__ = (function() {
    var ρσ_anonfunc = function (key) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            throw new KeyError(key + "");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.get = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            return (defval === undefined) ? null : defval;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.set_default = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var j;
        j = this.jsmap;
        if (!j.has(key)) {
            j.set(key, defval);
            return defval;
        }
        return j.get(key);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.fromkeys = ρσ_dict.prototype.fromkeys = (function() {
    var ρσ_anonfunc = function () {
        var iterable = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var value = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? ρσ_anonfunc.__defaults__.value : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "value")){
            value = ρσ_kwargs_obj.value;
        }
        var ans, iterator, r;
        ans = ρσ_dict();
        iterator = iter(iterable);
        r = iterator.next();
        while (!r.done) {
            ans.set(r.value, value);
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__defaults__) Object.defineProperties(ρσ_anonfunc, {
        __defaults__ : {value: {value:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["iterable", "value"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.pop = (function() {
    var ρσ_anonfunc = function (key, defval) {
        var ans;
        ans = this.jsmap.get(key);
        if (ans === undefined && !this.jsmap.has(key)) {
            if (defval === undefined) {
                throw new KeyError(key);
            }
            return defval;
        }
        this.jsmap.delete(key);
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["key", "defval"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.popitem = function () {
    var r;
    r = this.jsmap.entries().next();
    if (r.done) {
        throw new KeyError("dict is empty");
    }
    this.jsmap.delete(r.value[0]);
    return r.value;
};
ρσ_dict.prototype.update = function () {
    var m, iterable, iterator, result, keys;
    if (arguments.length === 0) {
        return;
    }
    m = this.jsmap;
    iterable = arguments[0];
    if (Array.isArray(iterable)) {
        for (var i = 0; i < iterable.length; i++) {
            m.set(iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][0], iterable[(typeof i === "number" && i < 0) ? iterable.length + i : i][1]);
        }
    } else if (iterable instanceof ρσ_dict) {
        iterator = iterable.items();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof Map === "function" && iterable instanceof Map) {
        iterator = iterable.entries();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done) {
            m.set(result.value[0], result.value[1]);
            result = iterator.next();
        }
    } else {
        keys = Object.keys(iterable);
        for (var j=0; j < keys.length; j++) {
            if (keys[(typeof j === "number" && j < 0) ? keys.length + j : j] !== ρσ_iterator_symbol) {
                m.set(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], iterable)]);
            }
        }
    }
    if (arguments.length > 1) {
        ρσ_dict.prototype.update.call(this, arguments[1]);
    }
};
ρσ_dict.prototype.toString = ρσ_dict.prototype.inspect = ρσ_dict.prototype.__str__ = ρσ_dict.prototype.__repr__ = function () {
    var entries, iterator, r;
    entries = [];
    iterator = this.jsmap.entries();
    r = iterator.next();
    while (!r.done) {
        entries.push(ρσ_repr(r.value[0]) + ": " + ρσ_repr(r.value[1]));
        r = iterator.next();
    }
    return "{" + entries.join(", ") + "}";
};
ρσ_dict.prototype.__eq__ = (function() {
    var ρσ_anonfunc = function (other) {
        var iterator, r, x;
        if (!(other instanceof this.constructor)) {
            return false;
        }
        if (other.size !== this.size) {
            return false;
        }
        if (other.size === 0) {
            return true;
        }
        iterator = other.items();
        r = iterator.next();
        while (!r.done) {
            x = this.jsmap.get(r.value[0]);
            if (x === undefined && !this.jsmap.has(r.value[0]) || x !== r.value[1]) {
                return false;
            }
            r = iterator.next();
        }
        return true;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
ρσ_dict.prototype.as_object = (function() {
    var ρσ_anonfunc = function (other) {
        var ans, iterator, r;
        ans = {};
        iterator = this.jsmap.entries();
        r = iterator.next();
        while (!r.done) {
            ans[ρσ_bound_index(r.value[0], ans)] = r.value[1];
            r = iterator.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["other"]}
    });
    return ρσ_anonfunc;
})();
function ρσ_dict_wrap(x) {
    var ans;
    ans = new ρσ_dict;
    ans.jsmap = x;
    return ans;
};
if (!ρσ_dict_wrap.__argnames__) Object.defineProperties(ρσ_dict_wrap, {
    __argnames__ : {value: ["x"]}
});

var dict = ρσ_dict, dict_wrap = ρσ_dict_wrap;var NameError;
NameError = ReferenceError;
function Exception() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    Exception.prototype.__init__.apply(this, arguments);
}
ρσ_extends(Exception, Error);
Exception.prototype.__init__ = function __init__(message) {
    var self = this;
    self.message = message;
    self.stack = (new Error).stack;
    self.name = self.constructor.name;
};
if (!Exception.prototype.__init__.__argnames__) Object.defineProperties(Exception.prototype.__init__, {
    __argnames__ : {value: ["message"]}
});
Exception.__argnames__ = Exception.prototype.__init__.__argnames__;
Exception.__handles_kwarg_interpolation__ = Exception.prototype.__init__.__handles_kwarg_interpolation__;
Exception.prototype.__repr__ = function __repr__() {
    var self = this;
    return self.name + ": " + self.message;
};
if (!Exception.prototype.__repr__.__argnames__) Object.defineProperties(Exception.prototype.__repr__, {
    __argnames__ : {value: []}
});
Exception.prototype.__str__ = function __str__ () {
    if(Error.prototype.__str__) return Error.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(Exception.prototype, "__bases__", {value: [Error]});

function AttributeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AttributeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AttributeError, Exception);
AttributeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AttributeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AttributeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AttributeError.prototype, "__bases__", {value: [Exception]});


function IndexError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    IndexError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(IndexError, Exception);
IndexError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
IndexError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
IndexError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(IndexError.prototype, "__bases__", {value: [Exception]});


function KeyError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    KeyError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(KeyError, Exception);
KeyError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
KeyError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
KeyError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(KeyError.prototype, "__bases__", {value: [Exception]});


function ValueError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ValueError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ValueError, Exception);
ValueError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ValueError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ValueError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ValueError.prototype, "__bases__", {value: [Exception]});


function UnicodeDecodeError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    UnicodeDecodeError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(UnicodeDecodeError, Exception);
UnicodeDecodeError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
UnicodeDecodeError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
UnicodeDecodeError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(UnicodeDecodeError.prototype, "__bases__", {value: [Exception]});


function AssertionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    AssertionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(AssertionError, Exception);
AssertionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
AssertionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
AssertionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(AssertionError.prototype, "__bases__", {value: [Exception]});


function ZeroDivisionError() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    ZeroDivisionError.prototype.__init__.apply(this, arguments);
}
ρσ_extends(ZeroDivisionError, Exception);
ZeroDivisionError.prototype.__init__ = function __init__ () {
    Exception.prototype.__init__ && Exception.prototype.__init__.apply(this, arguments);
};
ZeroDivisionError.prototype.__repr__ = function __repr__ () {
    if(Exception.prototype.__repr__) return Exception.prototype.__repr__.call(this);
    return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
ZeroDivisionError.prototype.__str__ = function __str__ () {
    if(Exception.prototype.__str__) return Exception.prototype.__str__.call(this);
return this.__repr__();
};
Object.defineProperty(ZeroDivisionError.prototype, "__bases__", {value: [Exception]});

var ρσ_in, ρσ_desugar_kwargs, ρσ_exists;
function ρσ_eslice(arr, step, start, end) {
    var is_string;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        step = -step;
        arr = arr.slice().reverse();
        if (typeof start !== "undefined") {
            start = arr.length - start - 1;
        }
        if (typeof end !== "undefined") {
            end = arr.length - end - 1;
        }
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    arr = arr.slice(start, end).filter((function() {
        var ρσ_anonfunc = function (e, i) {
            return i % step === 0;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["e", "i"]}
        });
        return ρσ_anonfunc;
    })());
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_eslice.__argnames__) Object.defineProperties(ρσ_eslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_delslice(arr, step, start, end) {
    var is_string, ρσ_unpack, indices;
    if (typeof arr === "string" || arr instanceof String) {
        is_string = true;
        arr = arr.split("");
    }
    if (step < 0) {
        if (typeof start === "undefined") {
            start = arr.length;
        }
        if (typeof end === "undefined") {
            end = 0;
        }
        ρσ_unpack = [end, start, -step];
        start = ρσ_unpack[0];
        end = ρσ_unpack[1];
        step = ρσ_unpack[2];
    }
    if (typeof start === "undefined") {
        start = 0;
    }
    if (typeof end === "undefined") {
        end = arr.length;
    }
    if (step === 1) {
        arr.splice(start, end - start);
    } else {
        if (end > start) {
            indices = [];
            for (var i = start; i < end; i += step) {
                indices.push(i);
            }
            for (var i = indices.length - 1; i >= 0; i--) {
                arr.splice(indices[(typeof i === "number" && i < 0) ? indices.length + i : i], 1);
            }
        }
    }
    if (is_string) {
        arr = arr.join("");
    }
    return arr;
};
if (!ρσ_delslice.__argnames__) Object.defineProperties(ρσ_delslice, {
    __argnames__ : {value: ["arr", "step", "start", "end"]}
});

function ρσ_flatten(arr) {
    var ans, value;
    ans = ρσ_list_decorate([]);
    for (var i=0; i < arr.length; i++) {
        value = arr[(typeof i === "number" && i < 0) ? arr.length + i : i];
        if (Array.isArray(value)) {
            ans = ans.concat(ρσ_flatten(value));
        } else {
            ans.push(value);
        }
    }
    return ans;
};
if (!ρσ_flatten.__argnames__) Object.defineProperties(ρσ_flatten, {
    __argnames__ : {value: ["arr"]}
});

function ρσ_unpack_asarray(num, iterable) {
    var ans, iterator, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    ans = [];
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        result = iterator.next();
        while (!result.done && ans.length < num) {
            ans.push(result.value);
            result = iterator.next();
        }
    }
    return ans;
};
if (!ρσ_unpack_asarray.__argnames__) Object.defineProperties(ρσ_unpack_asarray, {
    __argnames__ : {value: ["num", "iterable"]}
});

function ρσ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};
if (!ρσ_extends.__argnames__) Object.defineProperties(ρσ_extends, {
    __argnames__ : {value: ["child", "parent"]}
});

ρσ_in = function () {
    if (typeof Map === "function" && typeof Set === "function") {
        return (function() {
            var ρσ_anonfunc = function (val, arr) {
                if (typeof arr === "string") {
                    return arr.indexOf(val) !== -1;
                }
                if (typeof arr.__contains__ === "function") {
                    return arr.__contains__(val);
                }
                if (arr instanceof Map || arr instanceof Set) {
                    return arr.has(val);
                }
                if (ρσ_arraylike(arr)) {
                    return ρσ_list_contains.call(arr, val);
                }
                return Object.prototype.hasOwnProperty.call(arr, val);
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["val", "arr"]}
            });
            return ρσ_anonfunc;
        })();
    }
    return (function() {
        var ρσ_anonfunc = function (val, arr) {
            if (typeof arr === "string") {
                return arr.indexOf(val) !== -1;
            }
            if (typeof arr.__contains__ === "function") {
                return arr.__contains__(val);
            }
            if (ρσ_arraylike(arr)) {
                return ρσ_list_contains.call(arr, val);
            }
            return Object.prototype.hasOwnProperty.call(arr, val);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["val", "arr"]}
        });
        return ρσ_anonfunc;
    })();
}();
function ρσ_Iterable(iterable) {
    var iterator, ans, result;
    if (ρσ_arraylike(iterable)) {
        return iterable;
    }
    if (typeof iterable[ρσ_iterator_symbol] === "function") {
        iterator = (typeof Map === "function" && iterable instanceof Map) ? iterable.keys() : iterable[ρσ_iterator_symbol]();
        ans = ρσ_list_decorate([]);
        result = iterator.next();
        while (!result.done) {
            ans.push(result.value);
            result = iterator.next();
        }
        return ans;
    }
    return Object.keys(iterable);
};
if (!ρσ_Iterable.__argnames__) Object.defineProperties(ρσ_Iterable, {
    __argnames__ : {value: ["iterable"]}
});

ρσ_desugar_kwargs = function () {
    if (typeof Object.assign === "function") {
        return function () {
            var ans;
            ans = Object.create(null);
            ans[ρσ_kwargs_symbol] = true;
            for (var i = 0; i < arguments.length; i++) {
                Object.assign(ans, arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            }
            return ans;
        };
    }
    return function () {
        var ans, keys;
        ans = Object.create(null);
        ans[ρσ_kwargs_symbol] = true;
        for (var i = 0; i < arguments.length; i++) {
            keys = Object.keys(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
            for (var j = 0; j < keys.length; j++) {
                ans[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ans)] = (ρσ_expr_temp = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i])[ρσ_bound_index(keys[(typeof j === "number" && j < 0) ? keys.length + j : j], ρσ_expr_temp)];
            }
        }
        return ans;
    };
}();
function ρσ_interpolate_kwargs(f, supplied_args) {
    var has_prop, kwobj, args, prop;
    if (!f.__argnames__) {
        return f.apply(this, supplied_args);
    }
    has_prop = Object.prototype.hasOwnProperty;
    kwobj = supplied_args.pop();
    if (f.__handles_kwarg_interpolation__) {
        args = new Array(Math.max(supplied_args.length, f.__argnames__.length) + 1);
        args[args.length-1] = kwobj;
        for (var i = 0; i < args.length - 1; i++) {
            if (i < f.__argnames__.length) {
                prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
                if (has_prop.call(kwobj, prop)) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
                    delete kwobj[prop];
                } else if (i < supplied_args.length) {
                    args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
                }
            } else {
                args[(typeof i === "number" && i < 0) ? args.length + i : i] = supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i];
            }
        }
        return f.apply(this, args);
    }
    for (var i = 0; i < f.__argnames__.length; i++) {
        prop = (ρσ_expr_temp = f.__argnames__)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        if (has_prop.call(kwobj, prop)) {
            supplied_args[(typeof i === "number" && i < 0) ? supplied_args.length + i : i] = kwobj[(typeof prop === "number" && prop < 0) ? kwobj.length + prop : prop];
        }
    }
    return f.apply(this, supplied_args);
};
if (!ρσ_interpolate_kwargs.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs, {
    __argnames__ : {value: ["f", "supplied_args"]}
});

function ρσ_interpolate_kwargs_constructor(apply, f, supplied_args) {
    if (apply) {
        f.apply(this, supplied_args);
    } else {
        ρσ_interpolate_kwargs.call(this, f, supplied_args);
    }
    return this;
};
if (!ρσ_interpolate_kwargs_constructor.__argnames__) Object.defineProperties(ρσ_interpolate_kwargs_constructor, {
    __argnames__ : {value: ["apply", "f", "supplied_args"]}
});

function ρσ_getitem(obj, key) {
    if (obj.__getitem__) {
        return obj.__getitem__(key);
    }
    if (typeof key === "number" && key < 0) {
        key += obj.length;
    }
    return obj[(typeof key === "number" && key < 0) ? obj.length + key : key];
};
if (!ρσ_getitem.__argnames__) Object.defineProperties(ρσ_getitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_setitem(obj, key, val) {
    if (obj.__setitem__) {
        obj.__setitem__(key, val);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        obj[(typeof key === "number" && key < 0) ? obj.length + key : key] = val;
    }
};
if (!ρσ_setitem.__argnames__) Object.defineProperties(ρσ_setitem, {
    __argnames__ : {value: ["obj", "key", "val"]}
});

function ρσ_delitem(obj, key) {
    if (obj.__delitem__) {
        obj.__delitem__(key);
    } else if (typeof obj.splice === "function") {
        obj.splice(key, 1);
    } else {
        if (typeof key === "number" && key < 0) {
            key += obj.length;
        }
        delete obj[key];
    }
};
if (!ρσ_delitem.__argnames__) Object.defineProperties(ρσ_delitem, {
    __argnames__ : {value: ["obj", "key"]}
});

function ρσ_bound_index(idx, arr) {
    if (typeof idx === "number" && idx < 0) {
        idx += arr.length;
    }
    return idx;
};
if (!ρσ_bound_index.__argnames__) Object.defineProperties(ρσ_bound_index, {
    __argnames__ : {value: ["idx", "arr"]}
});

function ρσ_splice(arr, val, start, end) {
    start = start || 0;
    if (start < 0) {
        start += arr.length;
    }
    if (end === undefined) {
        end = arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }
    Array.prototype.splice.apply(arr, [start, end - start].concat(val));
};
if (!ρσ_splice.__argnames__) Object.defineProperties(ρσ_splice, {
    __argnames__ : {value: ["arr", "val", "start", "end"]}
});

ρσ_exists = (function(){
    var ρσ_d = {};
    ρσ_d["n"] = (function() {
        var ρσ_anonfunc = function (expr) {
            return expr !== undefined && expr !== null;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["d"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null) {
                return Object.create(null);
            }
            return expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["c"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (typeof expr === "function") {
                return expr;
            }
            return function () {
                return undefined;
            };
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["g"] = (function() {
        var ρσ_anonfunc = function (expr) {
            if (expr === undefined || expr === null || typeof expr.__getitem__ !== "function") {
                return (function(){
                    var ρσ_d = {};
                    ρσ_d["__getitem__"] = function () {
                        return undefined;
                    };
                    return ρσ_d;
                }).call(this);
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr"]}
        });
        return ρσ_anonfunc;
    })();
    ρσ_d["e"] = (function() {
        var ρσ_anonfunc = function (expr, alt) {
            return (expr === undefined || expr === null) ? alt : expr;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["expr", "alt"]}
        });
        return ρσ_anonfunc;
    })();
    return ρσ_d;
}).call(this);
function ρσ_mixin() {
    var seen, resolved_props, p, target, props, name;
    seen = Object.create(null);
    seen.__argnames__ = seen.__handles_kwarg_interpolation__ = seen.__init__ = seen.__annotations__ = seen.__doc__ = seen.__bind_methods__ = seen.__bases__ = seen.constructor = seen.__class__ = true;
    resolved_props = {};
    p = target = arguments[0].prototype;
    while (p && p !== Object.prototype) {
        props = Object.getOwnPropertyNames(p);
        for (var i = 0; i < props.length; i++) {
            seen[ρσ_bound_index(props[(typeof i === "number" && i < 0) ? props.length + i : i], seen)] = true;
        }
        p = Object.getPrototypeOf(p);
    }
    for (var c = 1; c < arguments.length; c++) {
        p = arguments[(typeof c === "number" && c < 0) ? arguments.length + c : c].prototype;
        while (p && p !== Object.prototype) {
            props = Object.getOwnPropertyNames(p);
            for (var i = 0; i < props.length; i++) {
                name = props[(typeof i === "number" && i < 0) ? props.length + i : i];
                if (seen[(typeof name === "number" && name < 0) ? seen.length + name : name]) {
                    continue;
                }
                seen[(typeof name === "number" && name < 0) ? seen.length + name : name] = true;
                resolved_props[(typeof name === "number" && name < 0) ? resolved_props.length + name : name] = Object.getOwnPropertyDescriptor(p, name);
            }
            p = Object.getPrototypeOf(p);
        }
    }
    Object.defineProperties(target, resolved_props);
};

function ρσ_instanceof() {
    var obj, bases, q, cls, p;
    obj = arguments[0];
    bases = "";
    if (obj && obj.constructor && obj.constructor.prototype) {
        bases = obj.constructor.prototype.__bases__ || "";
    }
    for (var i = 1; i < arguments.length; i++) {
        q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
        if (obj instanceof q) {
            return true;
        }
        if ((q === Array || q === ρσ_list_constructor) && Array.isArray(obj)) {
            return true;
        }
        if (q === ρσ_str && (typeof obj === "string" || obj instanceof String)) {
            return true;
        }
        if (bases.length > 1) {
            for (var c = 1; c < bases.length; c++) {
                cls = bases[(typeof c === "number" && c < 0) ? bases.length + c : c];
                while (cls) {
                    if (q === cls) {
                        return true;
                    }
                    p = Object.getPrototypeOf(cls.prototype);
                    if (!p) {
                        break;
                    }
                    cls = p.constructor;
                }
            }
        }
    }
    return false;
};
function sum(iterable, start) {
    var ans, iterator, r;
    if (Array.isArray(iterable)) {
        return iterable.reduce((function() {
            var ρσ_anonfunc = function (prev, cur) {
                return prev + cur;
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["prev", "cur"]}
            });
            return ρσ_anonfunc;
        })(), start || 0);
    }
    ans = start || 0;
    iterator = iter(iterable);
    r = iterator.next();
    while (!r.done) {
        ans += r.value;
        r = iterator.next();
    }
    return ans;
};
if (!sum.__argnames__) Object.defineProperties(sum, {
    __argnames__ : {value: ["iterable", "start"]}
});

function map() {
    var iterators, func, args, ans;
    iterators = new Array(arguments.length - 1);
    func = arguments[0];
    args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
        iterators[ρσ_bound_index(i - 1, iterators)] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_func':func, '_iterators':iterators, '_args':args};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            (ρσ_expr_temp = this._args)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = r.value;
        }
        return {'done':false, 'value':this._func.apply(undefined, this._args)};
    };
    return ans;
};

function filter(func_or_none, iterable) {
    var func, ans;
    func = (func_or_none === null) ? ρσ_bool : func_or_none;
    ans = {'_func':func, '_iterator':ρσ_iter(iterable)};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var r;
        r = this._iterator.next();
        while (!r.done) {
            if (this._func(r.value)) {
                return r;
            }
            r = this._iterator.next();
        }
        return {'done':true};
    };
    return ans;
};
if (!filter.__argnames__) Object.defineProperties(filter, {
    __argnames__ : {value: ["func_or_none", "iterable"]}
});

function zip() {
    var iterators, ans;
    iterators = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        iterators[(typeof i === "number" && i < 0) ? iterators.length + i : i] = iter(arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i]);
    }
    ans = {'_iterators':iterators};
    ans[ρσ_iterator_symbol] = function () {
        return this;
    };
    ans["next"] = function () {
        var args, r;
        args = new Array(this._iterators.length);
        for (var i = 0; i < this._iterators.length; i++) {
            r = (ρσ_expr_temp = this._iterators)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i].next();
            if (r.done) {
                return {'done':true};
            }
            args[(typeof i === "number" && i < 0) ? args.length + i : i] = r.value;
        }
        return {'done':false, 'value':args};
    };
    return ans;
};

function any(iterable) {
    var i;
    var ρσ_Iter0 = ρσ_Iterable(iterable);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        i = ρσ_Iter0[ρσ_Index0];
        if (i) {
            return true;
        }
    }
    return false;
};
if (!any.__argnames__) Object.defineProperties(any, {
    __argnames__ : {value: ["iterable"]}
});

function all(iterable) {
    var i;
    var ρσ_Iter1 = ρσ_Iterable(iterable);
    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
        i = ρσ_Iter1[ρσ_Index1];
        if (!i) {
            return false;
        }
    }
    return true;
};
if (!all.__argnames__) Object.defineProperties(all, {
    __argnames__ : {value: ["iterable"]}
});
var define_str_func, ρσ_unpack, ρσ_orig_split, ρσ_orig_replace;
function ρσ_repr_js_builtin(x, as_array) {
    var ans, b, keys, key;
    ans = [];
    b = "{}";
    if (as_array) {
        b = "[]";
        for (var i = 0; i < x.length; i++) {
            ans.push(ρσ_repr(x[(typeof i === "number" && i < 0) ? x.length + i : i]));
        }
    } else {
        keys = Object.keys(x);
        for (var k = 0; k < keys.length; k++) {
            key = keys[(typeof k === "number" && k < 0) ? keys.length + k : k];
            ans.push(JSON.stringify(key) + ":" + ρσ_repr(x[(typeof key === "number" && key < 0) ? x.length + key : key]));
        }
    }
    return b[0] + ans.join(", ") + b[1];
};
if (!ρσ_repr_js_builtin.__argnames__) Object.defineProperties(ρσ_repr_js_builtin, {
    __argnames__ : {value: ["x", "as_array"]}
});

function ρσ_html_element_to_string(elem) {
    var attrs, val, attr, ans;
    attrs = [];
    var ρσ_Iter0 = ρσ_Iterable(elem.attributes);
    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
        attr = ρσ_Iter0[ρσ_Index0];
        if (attr.specified) {
            val = attr.value;
            if (val.length > 10) {
                val = val.slice(0, 15) + "...";
            }
            val = JSON.stringify(val);
            attrs.push("" + ρσ_str.format("{}", attr.name) + "=" + ρσ_str.format("{}", val) + "");
        }
    }
    attrs = (attrs.length) ? " " + attrs.join(" ") : "";
    ans = "<" + ρσ_str.format("{}", elem.tagName) + "" + ρσ_str.format("{}", attrs) + ">";
    return ans;
};
if (!ρσ_html_element_to_string.__argnames__) Object.defineProperties(ρσ_html_element_to_string, {
    __argnames__ : {value: ["elem"]}
});

function ρσ_repr(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x === "function") {
        ans = x.toString();
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    } else {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = (typeof x.toString === "function") ? x.toString() : x;
        }
        if (ans === "[object Object]") {
            return ρσ_repr_js_builtin(x);
        }
        try {
            ans = JSON.stringify(x);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
            } 
        }
    }
    return ans + "";
};
if (!ρσ_repr.__argnames__) Object.defineProperties(ρσ_repr, {
    __argnames__ : {value: ["x"]}
});

function ρσ_str(x) {
    var ans, name;
    if (x === null) {
        return "None";
    }
    if (x === undefined) {
        return "undefined";
    }
    ans = x;
    if (typeof x.__str__ === "function") {
        ans = x.__str__();
    } else if (typeof x.__repr__ === "function") {
        ans = x.__repr__();
    } else if (x === true || x === false) {
        ans = (x) ? "True" : "False";
    } else if (Array.isArray(x)) {
        ans = ρσ_repr_js_builtin(x, true);
    } else if (typeof x.toString === "function") {
        name = Object.prototype.toString.call(x).slice(8, -1);
        if (ρσ_not_equals("Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".indexOf(name), -1)) {
            return name + "([" + x.map((function() {
                var ρσ_anonfunc = function (i) {
                    return str.format("0x{:02x}", i);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["i"]}
                });
                return ρσ_anonfunc;
            })()).join(", ") + "])";
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            ans = ρσ_html_element_to_string(x);
        } else {
            ans = x.toString();
        }
        if (ans === "[object Object]") {
            ans = ρσ_repr_js_builtin(x);
        }
    } else if (typeof x === "object" && !x.toString) {
        ans = ρσ_repr_js_builtin(x);
    }
    return ans + "";
};
if (!ρσ_str.__argnames__) Object.defineProperties(ρσ_str, {
    __argnames__ : {value: ["x"]}
});

define_str_func = (function() {
    var ρσ_anonfunc = function (name, func) {
        var f;
        (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = func;
        ρσ_str[(typeof name === "number" && name < 0) ? ρσ_str.length + name : name] = f = func.call.bind(func);
        if (func.__argnames__) {
            Object.defineProperty(f, "__argnames__", (function(){
                var ρσ_d = {};
                ρσ_d["value"] = ['string'].concat(func.__argnames__);
                return ρσ_d;
            }).call(this));
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["name", "func"]}
    });
    return ρσ_anonfunc;
})();
ρσ_unpack = [String.prototype.split.call.bind(String.prototype.split), String.prototype.replace.call.bind(String.prototype.replace)];
ρσ_orig_split = ρσ_unpack[0];
ρσ_orig_replace = ρσ_unpack[1];
define_str_func("format", function () {
    var template, args, kwargs, explicit, implicit, idx, split, ans, pos, in_brace, markup, ch;
    template = this;
    if (template === undefined) {
        throw new TypeError("Template is required");
    }
    args = Array.prototype.slice.call(arguments);
    kwargs = {};
    if (args[args.length-1] && args[args.length-1][ρσ_kwargs_symbol] !== undefined) {
        kwargs = args[args.length-1];
        args = args.slice(0, -1);
    }
    explicit = implicit = false;
    idx = 0;
    split = ρσ_orig_split;
    if (ρσ_str.format._template_resolve_pat === undefined) {
        ρσ_str.format._template_resolve_pat = /[.\[]/;
    }
    function resolve(arg, object) {
        var ρσ_unpack, first, key, rest, ans;
        if (!arg) {
            return object;
        }
        ρσ_unpack = [arg[0], arg.slice(1)];
        first = ρσ_unpack[0];
        arg = ρσ_unpack[1];
        key = split(arg, ρσ_str.format._template_resolve_pat, 1)[0];
        rest = arg.slice(key.length);
        ans = (first === "[") ? object[ρσ_bound_index(key.slice(0, -1), object)] : getattr(object, key);
        if (ans === undefined) {
            throw new KeyError((first === "[") ? key.slice(0, -1) : key);
        }
        return resolve(rest, ans);
    };
    if (!resolve.__argnames__) Object.defineProperties(resolve, {
        __argnames__ : {value: ["arg", "object"]}
    });

    function resolve_format_spec(format_spec) {
        if (ρσ_str.format._template_resolve_fs_pat === undefined) {
            ρσ_str.format._template_resolve_fs_pat = /[{]([a-zA-Z0-9_]+)[}]/g;
        }
        return format_spec.replace(ρσ_str.format._template_resolve_fs_pat, (function() {
            var ρσ_anonfunc = function (match, key) {
                if (!Object.prototype.hasOwnProperty.call(kwargs, key)) {
                    return "";
                }
                return "" + kwargs[(typeof key === "number" && key < 0) ? kwargs.length + key : key];
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["match", "key"]}
            });
            return ρσ_anonfunc;
        })());
    };
    if (!resolve_format_spec.__argnames__) Object.defineProperties(resolve_format_spec, {
        __argnames__ : {value: ["format_spec"]}
    });

    function set_comma(ans, comma) {
        var sep;
        if (comma !== ",") {
            sep = 1234;
            sep = sep.toLocaleString(undefined, {useGrouping: true})[1];
            ans = str.replace(ans, sep, comma);
        }
        return ans;
    };
    if (!set_comma.__argnames__) Object.defineProperties(set_comma, {
        __argnames__ : {value: ["ans", "comma"]}
    });

    function safe_comma(value, comma) {
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toString(10);
            } 
        }
    };
    if (!safe_comma.__argnames__) Object.defineProperties(safe_comma, {
        __argnames__ : {value: ["value", "comma"]}
    });

    function safe_fixed(value, precision, comma) {
        if (!comma) {
            return value.toFixed(precision);
        }
        try {
            return set_comma(value.toLocaleString(undefined, {useGrouping: true, minimumFractionDigits: precision, maximumFractionDigits: precision}), comma);
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            {
                return value.toFixed(precision);
            } 
        }
    };
    if (!safe_fixed.__argnames__) Object.defineProperties(safe_fixed, {
        __argnames__ : {value: ["value", "precision", "comma"]}
    });

    function apply_formatting(value, format_spec) {
        var ρσ_unpack, fill, align, sign, fhash, zeropad, width, comma, precision, ftype, is_numeric, is_int, lftype, code, prec, exp, nval, is_positive, left, right;
        if (format_spec.indexOf("{") !== -1) {
            format_spec = resolve_format_spec(format_spec);
        }
        if (ρσ_str.format._template_format_pat === undefined) {
            ρσ_str.format._template_format_pat = /([^{}](?=[<>=^]))?([<>=^])?([-+\x20])?(\#)?(0)?(\d+)?([,_])?(?:\.(\d+))?([bcdeEfFgGnosxX%])?/;
        }
        try {
            ρσ_unpack = format_spec.match(ρσ_str.format._template_format_pat).slice(1);
ρσ_unpack = ρσ_unpack_asarray(9, ρσ_unpack);
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
            sign = ρσ_unpack[2];
            fhash = ρσ_unpack[3];
            zeropad = ρσ_unpack[4];
            width = ρσ_unpack[5];
            comma = ρσ_unpack[6];
            precision = ρσ_unpack[7];
            ftype = ρσ_unpack[8];
        } catch (ρσ_Exception) {
            ρσ_last_exception = ρσ_Exception;
            if (ρσ_Exception instanceof TypeError) {
                return value;
            } else {
                throw ρσ_Exception;
            }
        }
        if (zeropad) {
            fill = fill || "0";
            align = align || "=";
        } else {
            fill = fill || " ";
            align = align || ">";
        }
        is_numeric = Number(value) === value;
        is_int = is_numeric && value % 1 === 0;
        precision = parseInt(precision, 10);
        lftype = (ftype || "").toLowerCase();
        if (ftype === "n") {
            is_numeric = true;
            if (is_int) {
                if (comma) {
                    throw new ValueError("Cannot specify ',' with 'n'");
                }
                value = parseInt(value, 10).toLocaleString();
            } else {
                value = parseFloat(value).toLocaleString();
            }
        } else if (['b', 'c', 'd', 'o', 'x'].indexOf(lftype) !== -1) {
            value = parseInt(value, 10);
            is_numeric = true;
            if (!isNaN(value)) {
                if (ftype === "b") {
                    value = (value >>> 0).toString(2);
                    if (fhash) {
                        value = "0b" + value;
                    }
                } else if (ftype === "c") {
                    if (value > 65535) {
                        code = value - 65536;
                        value = String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                    } else {
                        value = String.fromCharCode(value);
                    }
                } else if (ftype === "d") {
                    if (comma) {
                        value = safe_comma(value, comma);
                    } else {
                        value = value.toString(10);
                    }
                } else if (ftype === "o") {
                    value = value.toString(8);
                    if (fhash) {
                        value = "0o" + value;
                    }
                } else if (lftype === "x") {
                    value = value.toString(16);
                    value = (ftype === "x") ? value.toLowerCase() : value.toUpperCase();
                    if (fhash) {
                        value = "0x" + value;
                    }
                }
            }
        } else if (['e','f','g','%'].indexOf(lftype) !== -1) {
            is_numeric = true;
            value = parseFloat(value);
            prec = (isNaN(precision)) ? 6 : precision;
            if (lftype === "e") {
                value = value.toExponential(prec);
                value = (ftype === "E") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "f") {
                value = safe_fixed(value, prec, comma);
                value = (ftype === "F") ? value.toUpperCase() : value.toLowerCase();
            } else if (lftype === "%") {
                value *= 100;
                value = safe_fixed(value, prec, comma) + "%";
            } else if (lftype === "g") {
                prec = max(1, prec);
                exp = parseInt(split(value.toExponential(prec - 1).toLowerCase(), "e")[1], 10);
                if (-4 <= exp && exp < prec) {
                    value = safe_fixed(value, prec - 1 - exp, comma);
                } else {
                    value = value.toExponential(prec - 1);
                }
                value = value.replace(/0+$/g, "");
                if (value[value.length-1] === ".") {
                    value = value.slice(0, -1);
                }
                if (ftype === "G") {
                    value = value.toUpperCase();
                }
            }
        } else {
            if (comma) {
                value = parseInt(value, 10);
                if (isNaN(value)) {
                    throw new ValueError("Must use numbers with , or _");
                }
                value = safe_comma(value, comma);
            }
            value += "";
            if (!isNaN(precision)) {
                value = value.slice(0, precision);
            }
        }
        value += "";
        if (is_numeric && sign) {
            nval = Number(value);
            is_positive = !isNaN(nval) && nval >= 0;
            if (is_positive && (sign === " " || sign === "+")) {
                value = sign + value;
            }
        }
        function repeat(char, num) {
            return (new Array(num+1)).join(char);
        };
        if (!repeat.__argnames__) Object.defineProperties(repeat, {
            __argnames__ : {value: ["char", "num"]}
        });

        if (is_numeric && width && width[0] === "0") {
            width = width.slice(1);
            ρσ_unpack = ["0", "="];
            fill = ρσ_unpack[0];
            align = ρσ_unpack[1];
        }
        width = parseInt(width || "-1", 10);
        if (isNaN(width)) {
            throw new ValueError("Invalid width specification: " + width);
        }
        if (fill && value.length < width) {
            if (align === "<") {
                value = value + repeat(fill, width - value.length);
            } else if (align === ">") {
                value = repeat(fill, width - value.length) + value;
            } else if (align === "^") {
                left = Math.floor((width - value.length) / 2);
                right = width - left - value.length;
                value = repeat(fill, left) + value + repeat(fill, right);
            } else if (align === "=") {
                if (ρσ_in(value[0], "+- ")) {
                    value = value[0] + repeat(fill, width - value.length) + value.slice(1);
                } else {
                    value = repeat(fill, width - value.length) + value;
                }
            } else {
                throw new ValueError("Unrecognized alignment: " + align);
            }
        }
        return value;
    };
    if (!apply_formatting.__argnames__) Object.defineProperties(apply_formatting, {
        __argnames__ : {value: ["value", "format_spec"]}
    });

    function parse_markup(markup) {
        var key, transformer, format_spec, pos, state, ch;
        key = transformer = format_spec = "";
        pos = 0;
        state = 0;
        while (pos < markup.length) {
            ch = markup[(typeof pos === "number" && pos < 0) ? markup.length + pos : pos];
            if (state === 0) {
                if (ch === "!") {
                    state = 1;
                } else if (ch === ":") {
                    state = 2;
                } else {
                    key += ch;
                }
            } else if (state === 1) {
                if (ch === ":") {
                    state = 2;
                } else {
                    transformer += ch;
                }
            } else {
                format_spec += ch;
            }
            pos += 1;
        }
        return [key, transformer, format_spec];
    };
    if (!parse_markup.__argnames__) Object.defineProperties(parse_markup, {
        __argnames__ : {value: ["markup"]}
    });

    function render_markup(markup) {
        var ρσ_unpack, key, transformer, format_spec, lkey, nvalue, object, ans;
        ρσ_unpack = parse_markup(markup);
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        key = ρσ_unpack[0];
        transformer = ρσ_unpack[1];
        format_spec = ρσ_unpack[2];
        if (transformer && ['a', 'r', 's'].indexOf(transformer) === -1) {
            throw new ValueError("Unknown conversion specifier: " + transformer);
        }
        lkey = key.length && split(key, /[.\[]/, 1)[0];
        if (lkey) {
            explicit = true;
            if (implicit) {
                throw new ValueError("cannot switch from automatic field numbering to manual field specification");
            }
            nvalue = parseInt(lkey);
            object = (isNaN(nvalue)) ? kwargs[(typeof lkey === "number" && lkey < 0) ? kwargs.length + lkey : lkey] : args[(typeof nvalue === "number" && nvalue < 0) ? args.length + nvalue : nvalue];
            if (object === undefined) {
                if (isNaN(nvalue)) {
                    throw new KeyError(lkey);
                }
                throw new IndexError(lkey);
            }
            object = resolve(key.slice(lkey.length), object);
        } else {
            implicit = true;
            if (explicit) {
                throw new ValueError("cannot switch from manual field specification to automatic field numbering");
            }
            if (idx >= args.length) {
                throw new IndexError("Not enough arguments to match template: " + template);
            }
            object = args[(typeof idx === "number" && idx < 0) ? args.length + idx : idx];
            idx += 1;
        }
        if (typeof object === "function") {
            object = object();
        }
        ans = "" + object;
        if (format_spec) {
            ans = apply_formatting(ans, format_spec);
        }
        return ans;
    };
    if (!render_markup.__argnames__) Object.defineProperties(render_markup, {
        __argnames__ : {value: ["markup"]}
    });

    ans = "";
    pos = 0;
    in_brace = 0;
    markup = "";
    while (pos < template.length) {
        ch = template[(typeof pos === "number" && pos < 0) ? template.length + pos : pos];
        if (in_brace) {
            if (ch === "{") {
                in_brace += 1;
                markup += "{";
            } else if (ch === "}") {
                in_brace -= 1;
                if (in_brace > 0) {
                    markup += "}";
                } else {
                    ans += render_markup(markup);
                }
            } else {
                markup += ch;
            }
        } else {
            if (ch === "{") {
                if (template[ρσ_bound_index(pos + 1, template)] === "{") {
                    pos += 1;
                    ans += "{";
                } else {
                    in_brace = 1;
                    markup = "";
                }
            } else {
                ans += ch;
                if (ch === "}" && template[ρσ_bound_index(pos + 1, template)] === "}") {
                    pos += 1;
                }
            }
        }
        pos += 1;
    }
    if (in_brace) {
        throw new ValueError("expected '}' before end of string");
    }
    return ans;
});
define_str_func("capitalize", function () {
    var string;
    string = this;
    if (string) {
        string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return string;
});
define_str_func("center", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var left, right;
        left = Math.floor((width - this.length) / 2);
        right = width - left - this.length;
        fill = fill || " ";
        return new Array(left+1).join(fill) + this + new Array(right+1).join(fill);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("count", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var string, ρσ_unpack, pos, step, ans;
        string = this;
        start = start || 0;
        end = end || string.length;
        if (start < 0 || end < 0) {
            string = string.slice(start, end);
            ρσ_unpack = [0, string.length];
            start = ρσ_unpack[0];
            end = ρσ_unpack[1];
        }
        pos = start;
        step = needle.length;
        if (!step) {
            return 0;
        }
        ans = 0;
        while (pos !== -1) {
            pos = string.indexOf(needle, pos);
            if (pos !== -1) {
                ans += 1;
                pos += step;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("endswith", (function() {
    var ρσ_anonfunc = function (suffixes, start, end) {
        var string, q;
        string = this;
        start = start || 0;
        if (typeof suffixes === "string") {
            suffixes = [suffixes];
        }
        if (end !== undefined) {
            string = string.slice(0, end);
        }
        for (var i = 0; i < suffixes.length; i++) {
            q = suffixes[(typeof i === "number" && i < 0) ? suffixes.length + i : i];
            if (string.indexOf(q, Math.max(start, string.length - q.length)) !== -1) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["suffixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("startswith", (function() {
    var ρσ_anonfunc = function (prefixes, start, end) {
        var prefix;
        start = start || 0;
        if (typeof prefixes === "string") {
            prefixes = [prefixes];
        }
        for (var i = 0; i < prefixes.length; i++) {
            prefix = prefixes[(typeof i === "number" && i < 0) ? prefixes.length + i : i];
            end = (end === undefined) ? this.length : end;
            if (end - start >= prefix.length && prefix === this.slice(start, start + prefix.length)) {
                return true;
            }
        }
        return false;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["prefixes", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("find", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (start < 0) {
            start += this.length;
        }
        ans = this.indexOf(needle, start);
        if (end !== undefined && ans !== -1) {
            while (end < 0) {
                end += this.length;
            }
            if (ans >= end - needle.length) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rfind", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        while (end < 0) {
            end += this.length;
        }
        ans = this.lastIndexOf(needle, end - 1);
        if (start !== undefined && ans !== -1) {
            while (start < 0) {
                start += this.length;
            }
            if (ans < start) {
                return -1;
            }
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("index", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.find.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rindex", (function() {
    var ρσ_anonfunc = function (needle, start, end) {
        var ans;
        ans = ρσ_str.prototype.rfind.apply(this, arguments);
        if (ans === -1) {
            throw new ValueError("substring not found");
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["needle", "start", "end"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("islower", function () {
    return this.length > 0 && this.toLowerCase() === this.toString();
});
define_str_func("isupper", function () {
    return this.length > 0 && this.toUpperCase() === this.toString();
});
define_str_func("isspace", function () {
    return this.length > 0 && /^\s+$/.test(this);
});
define_str_func("join", (function() {
    var ρσ_anonfunc = function (iterable) {
        var ans, r;
        if (Array.isArray(iterable)) {
            return iterable.join(this);
        }
        ans = "";
        r = iterable.next();
        while (!r.done) {
            if (ans) {
                ans += this;
            }
            ans += r.value;
            r = iterable.next();
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["iterable"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("ljust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string += new Array(width - string.length + 1).join(fill);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rjust", (function() {
    var ρσ_anonfunc = function (width, fill) {
        var string;
        string = this;
        if (width > string.length) {
            fill = fill || " ";
            string = new Array(width - string.length + 1).join(fill) + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width", "fill"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("lower", function () {
    return this.toLowerCase();
});
define_str_func("upper", function () {
    return this.toUpperCase();
});
define_str_func("lstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = 0;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos += 1;
        }
        if (pos) {
            string = string.slice(pos);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rstrip", (function() {
    var ρσ_anonfunc = function (chars) {
        var string, pos;
        string = this;
        pos = string.length - 1;
        chars = chars || ρσ_str.whitespace;
        while (chars.indexOf(string[(typeof pos === "number" && pos < 0) ? string.length + pos : pos]) !== -1) {
            pos -= 1;
        }
        if (pos < string.length - 1) {
            string = string.slice(0, pos + 1);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("strip", (function() {
    var ρσ_anonfunc = function (chars) {
        return ρσ_str.prototype.lstrip.call(ρσ_str.prototype.rstrip.call(this, chars), chars);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["chars"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("partition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.indexOf(sep);
        if (idx === -1) {
            return [this, "", ""];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rpartition", (function() {
    var ρσ_anonfunc = function (sep) {
        var idx;
        idx = this.lastIndexOf(sep);
        if (idx === -1) {
            return ["", "", this];
        }
        return [this.slice(0, idx), sep, this.slice(idx + sep.length)];
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("replace", (function() {
    var ρσ_anonfunc = function (old, repl, count) {
        var string, pos, idx;
        string = this;
        if (count === 1) {
            return ρσ_orig_replace(string, old, repl);
        }
        if (count < 1) {
            return string;
        }
        count = count || Number.MAX_VALUE;
        pos = 0;
        while (count > 0) {
            count -= 1;
            idx = string.indexOf(old, pos);
            if (idx === -1) {
                break;
            }
            pos = idx + repl.length;
            string = string.slice(0, idx) + repl + string.slice(idx + old.length);
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["old", "repl", "count"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("split", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, extra, parts;
        if (maxsplit === 0) {
            return ρσ_list_decorate([ this ]);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = split(this, /(\s+)/);
                extra = "";
                parts = [];
                for (var i = 0; i < ans.length; i++) {
                    if (parts.length >= maxsplit + 1) {
                        extra += ans[(typeof i === "number" && i < 0) ? ans.length + i : i];
                    } else if (i % 2 === 0) {
                        parts.push(ans[(typeof i === "number" && i < 0) ? ans.length + i : i]);
                    }
                }
                parts[parts.length-1] += extra;
                ans = parts;
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = split(this, sep);
            if (maxsplit > 0 && ans.length > maxsplit) {
                extra = ans.slice(maxsplit).join(sep);
                ans = ans.slice(0, maxsplit);
                ans.push(extra);
            }
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("rsplit", (function() {
    var ρσ_anonfunc = function (sep, maxsplit) {
        var split, ans, is_space, pos, current, spc, ch, end, idx;
        if (!maxsplit) {
            return ρσ_str.prototype.split.call(this, sep);
        }
        split = ρσ_orig_split;
        if (sep === undefined || sep === null) {
            if (maxsplit > 0) {
                ans = [];
                is_space = /\s/;
                pos = this.length - 1;
                current = "";
                while (pos > -1 && maxsplit > 0) {
                    spc = false;
                    ch = (ρσ_expr_temp = this)[(typeof pos === "number" && pos < 0) ? ρσ_expr_temp.length + pos : pos];
                    while (pos > -1 && is_space.test(ch)) {
                        spc = true;
                        ch = this[--pos];
                    }
                    if (spc) {
                        if (current) {
                            ans.push(current);
                            maxsplit -= 1;
                        }
                        current = ch;
                    } else {
                        current += ch;
                    }
                    pos -= 1;
                }
                ans.push(this.slice(0, pos + 1) + current);
                ans.reverse();
            } else {
                ans = split(this, /\s+/);
            }
        } else {
            if (sep === "") {
                throw new ValueError("empty separator");
            }
            ans = [];
            pos = end = this.length;
            while (pos > -1 && maxsplit > 0) {
                maxsplit -= 1;
                idx = this.lastIndexOf(sep, pos);
                if (idx === -1) {
                    break;
                }
                ans.push(this.slice(idx + sep.length, end));
                pos = idx - 1;
                end = idx;
            }
            ans.push(this.slice(0, end));
            ans.reverse();
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["sep", "maxsplit"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("splitlines", (function() {
    var ρσ_anonfunc = function (keepends) {
        var split, parts, ans;
        split = ρσ_orig_split;
        if (keepends) {
            parts = split(this, /((?:\r?\n)|\r)/);
            ans = [];
            for (var i = 0; i < parts.length; i++) {
                if (i % 2 === 0) {
                    ans.push(parts[(typeof i === "number" && i < 0) ? parts.length + i : i]);
                } else {
                    ans[ans.length-1] += parts[(typeof i === "number" && i < 0) ? parts.length + i : i];
                }
            }
        } else {
            ans = split(this, /(?:\r?\n)|\r/);
        }
        return ρσ_list_decorate(ans);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["keepends"]}
    });
    return ρσ_anonfunc;
})());
define_str_func("swapcase", function () {
    var ans, a, b;
    ans = new Array(this.length);
    for (var i = 0; i < ans.length; i++) {
        a = (ρσ_expr_temp = this)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
        b = a.toLowerCase();
        if (a === b) {
            b = a.toUpperCase();
        }
        ans[(typeof i === "number" && i < 0) ? ans.length + i : i] = b;
    }
    return ans.join("");
});
define_str_func("zfill", (function() {
    var ρσ_anonfunc = function (width) {
        var string;
        string = this;
        if (width > string.length) {
            string = new Array(width - string.length + 1).join("0") + string;
        }
        return string;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["width"]}
    });
    return ρσ_anonfunc;
})());
ρσ_str.uchrs = (function() {
    var ρσ_anonfunc = function (string, with_positions) {
        return (function(){
            var ρσ_d = {};
            ρσ_d["_string"] = string;
            ρσ_d["_pos"] = 0;
            ρσ_d[ρσ_iterator_symbol] = function () {
                return this;
            };
            ρσ_d["next"] = function () {
                var length, pos, value, ans, extra;
                length = this._string.length;
                if (this._pos >= length) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = true;
                        return ρσ_d;
                    }).call(this);
                }
                pos = this._pos;
                value = this._string.charCodeAt(this._pos++);
                ans = "\ufffd";
                if (55296 <= value && value <= 56319) {
                    if (this._pos < length) {
                        extra = this._string.charCodeAt(this._pos++);
                        if ((extra & 56320) === 56320) {
                            ans = String.fromCharCode(value, extra);
                        }
                    }
                } else if ((value & 56320) !== 56320) {
                    ans = String.fromCharCode(value);
                }
                if (with_positions) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ρσ_list_decorate([ pos, ans ]);
                        return ρσ_d;
                    }).call(this);
                } else {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["done"] = false;
                        ρσ_d["value"] = ans;
                        return ρσ_d;
                    }).call(this);
                }
            };
            return ρσ_d;
        }).call(this);
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "with_positions"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.uslice = (function() {
    var ρσ_anonfunc = function (string, start, end) {
        var items, iterator, r;
        items = [];
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        while (!r.done) {
            items.push(r.value);
            r = iterator.next();
        }
        return items.slice(start || 0, (end === undefined) ? items.length : end).join("");
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string", "start", "end"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ulen = (function() {
    var ρσ_anonfunc = function (string) {
        var iterator, r, ans;
        iterator = ρσ_str.uchrs(string);
        r = iterator.next();
        ans = 0;
        while (!r.done) {
            r = iterator.next();
            ans += 1;
        }
        return ans;
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["string"]}
    });
    return ρσ_anonfunc;
})();
ρσ_str.ascii_lowercase = "abcdefghijklmnopqrstuvwxyz";
ρσ_str.ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
ρσ_str.digits = "0123456789";
ρσ_str.punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
ρσ_str.printable = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\u000b\f";
ρσ_str.whitespace = " \t\n\r\u000b\f";
define_str_func = undefined;
var str = ρσ_str, repr = ρσ_repr;;
    var ρσ_modules = {};
    ρσ_modules.characteristics = {};
    ρσ_modules.homekit = {};
    ρσ_modules["characteristics.base"] = {};
    ρσ_modules.devices = {};
    ρσ_modules["characteristics.battery"] = {};
    ρσ_modules["characteristics.heating"] = {};
    ρσ_modules["characteristics.lightbulb"] = {};
    ρσ_modules["characteristics.shared"] = {};
    ρσ_modules["characteristics.lightbulb.rgb"] = {};
    ρσ_modules["characteristics.lightbulb.white"] = {};
    ρσ_modules["characteristics.motor"] = {};
    ρσ_modules["characteristics.outlet"] = {};
    ρσ_modules["characteristics.programmable_switch"] = {};
    ρσ_modules["characteristics.sensor"] = {};
    ρσ_modules["characteristics.create"] = {};
    ρσ_modules.services = {};
    ρσ_modules.accessories = {};

    (function(){
        var __name__ = "characteristics";

    })();

    (function(){
        var __name__ = "homekit";
        
        
        
        
        
        
        ρσ_modules.homekit.HomeKit = HomeKit;
        ρσ_modules.homekit.HKService = HKService;
        ρσ_modules.homekit.HKCharacteristic = HKCharacteristic;
    })();

    (function(){
        var __name__ = "characteristics.base";
        var homekit = ρσ_modules.homekit;

        function out() {
            var key;
            var ρσ_Iter0 = ρσ_Iterable(arguments);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                key = ρσ_Iter0[ρσ_Index0];
                if (_.isObject(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key])) {
                    arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key] = JSON.stringify(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key]);
                }
            }
            debugPrint.apply(this, arguments);
            return true;
        };

        function Base() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Base.prototype.__init__.apply(this, arguments);
        }
        Base.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.bridge = bridge4kt;
            self.id = id;
            self.name = "";
            self.zway = global["zway"];
            self.vDev = null;
            self.value = null;
            self.service = null;
            self.characteristic = null;
            self.detectType = null;
            self.alarm = {};
            self.alarm.smoke = 1;
            self.alarm.co = 2;
            self.alarm.co2 = 3;
            self.alarm.heat = 4;
            self.alarm.water = 5;
            self.alarm.access = 6;
            self.alarm.burglar = 7;
            self.alarm.power = 8;
            self.alarm.system = 9;
            self.alarm.emergency = 10;
            self.alarm.clock = 11;
            self.thermostat = {};
            self.thermostat.off = 0;
            self.thermostat.heat = 1;
            self.thermostat.cool = 2;
            self.thermostat.auto = 3;
            self.thermostat.standby = 4;
            self.thermostat.resume = 5;
            self.thermostat.fan = 6;
            self.thermostat.furnace = 7;
            self.thermostat.dryAir = 8;
            self.thermostat.moistAir = 9;
            self.thermostat.autoChange = 10;
            self.thermostat.energySaveHeat = 11;
            self.thermostat.energySaveCool = 12;
            self.thermostat.awayHeat = 13;
            self.thermostat.awayCool = 14;
            self.thermostat.boost = 15;
            self.thermostat.specific = 31;
            self.thermostat.heating = Math.pow(2, self.thermostat.heat) + Math.pow(2, self.thermostat.energySaveHeat) + Math.pow(2, self.thermostat.awayHeat) + Math.pow(2, self.thermostat.boost);
            self.thermostat.cooling = Math.pow(2, self.thermostat.cool) + Math.pow(2, self.thermostat.energySaveCool) + Math.pow(2, self.thermostat.awayCool);
            self.thermostat.automatic = Math.pow(2, self.thermostat.auto) + Math.pow(2, self.thermostat.standby) + Math.pow(2, self.thermostat.autoChange);
            self.onLevelChange = function () {
                var c, aid;
                c = self.characteristic;
                if (c !== null) {
                    aid = c.service.accessory.aid;
                    console.log(self.name + ": change:metrics:level @ " + aid + "." + self.characteristic.iid);
                    self.bridge.hk.update(aid, c.iid);
                }
            };
            self.target = null;
            self.reset_target = _.debounce(function () {
                self.target = null;
            }, 2500);
        };
        if (!Base.prototype.__init__.__argnames__) Object.defineProperties(Base.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Base.__argnames__ = Base.prototype.__init__.__argnames__;
        Base.__handles_kwarg_interpolation__ = Base.prototype.__init__.__handles_kwarg_interpolation__;
        Base.prototype.get_real_dev = function get_real_dev(vDev) {
            var self = this;
            var check;
            check = /(?:ZWayVDev_zway_)(\d+)(?:-.+)/.exec(vDev.id);
            if (!(typeof check !== "undefined" && check !== null) || len(check) < 2) {
                return null;
            }
            return check[1];
        };
        if (!Base.prototype.get_real_dev.__argnames__) Object.defineProperties(Base.prototype.get_real_dev, {
            __argnames__ : {value: ["vDev"]}
        });
        Base.prototype.perform_vDev_detection = function perform_vDev_detection(detectType) {
            var self = this;
            var vDev, definition, controller, vDevList, d, testType;
            if (!(typeof detectType !== "undefined" && detectType !== null)) {
                return null;
            }
            vDev = null;
            var ρσ_Iter1 = ρσ_Iterable(detectType);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                testType = ρσ_Iter1[ρσ_Index1];
                definition = detectType[(typeof testType === "number" && testType < 0) ? detectType.length + testType : testType];
                if (_.isArray(definition) === false) {
                    definition = ρσ_list_decorate([ definition ]);
                }
                controller = self.bridge.controller;
                var ρσ_Iter2 = ρσ_Iterable(definition);
                for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                    d = ρσ_Iter2[ρσ_Index2];
                    vDevList = controller.devices.filter((function() {
                        var ρσ_anonfunc = function (x) {
                            var check;
                            check = x.get(testType);
                            if (_.isArray(check)) {
                                return (ρσ_in(d, check)) ? true : false;
                            }
                            return (check === d || typeof check === "object" && ρσ_equals(check, d));
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["x"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    vDevList = vDevList.filter((function() {
                        var ρσ_anonfunc = function (x) {
                            var realID;
                            realID = self.get_real_dev(x);
                            return ((typeof realID !== "undefined" && realID !== null)) ? (realID === self.id || typeof realID === "object" && ρσ_equals(realID, self.id)) : false;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["x"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    if (len(vDevList) > 0) {
                        vDev = vDevList[0];
                        break;
                    }
                }
                if (vDev !== null) {
                    break;
                }
            }
            if (vDev !== null) {
                return vDev;
            }
            return null;
        };
        if (!Base.prototype.perform_vDev_detection.__argnames__) Object.defineProperties(Base.prototype.perform_vDev_detection, {
            __argnames__ : {value: ["detectType"]}
        });
        Base.prototype.add_to = function add_to(service) {
            var self = this;
            if (ρσ_exists.n(self.characteristic)) {
                return self.characteristic;
            }
            self.service = service;
            if (ρσ_exists.n(self.add_to_callback)) {
                self.characteristic = self.add_to_callback();
            }
            if (ρσ_exists.n(self.characteristic)) {
                console.log(".. HK Characteristic '" + self.name + "' added.");
                return self.characteristic;
            } else if (!ρσ_exists.n(self.vDev)) {
                console.log(".. HK Characteristic '" + self.name + "': vDev not identified.");
                return null;
            } else {
                console.log(".. Failed to add HK Characteristic '" + self.name + "'.");
                return null;
            }
        };
        if (!Base.prototype.add_to.__annotations__) Object.defineProperties(Base.prototype.add_to, {
            __annotations__ : {value: {service: homekit.HKService, return: homekit.HKCharacteristic}},
            __argnames__ : {value: ["service"]}
        });
        Base.prototype.update = function update() {
            var self = this;
            var vDev;
            vDev = null;
            vDev = self.perform_vDev_detection(self.detectType);
            if ((typeof vDev !== "undefined" && vDev !== null)) {
                if (ρσ_exists.n(self.vDev) && (vDev.id !== self.vDev.id && (typeof vDev.id !== "object" || ρσ_not_equals(vDev.id, self.vDev.id)))) {
                    if (ρσ_exists.n(self.service) && ρσ_exists.n(self.characteristic)) {
                        self.remove();
                    }
                }
                if (!ρσ_exists.n(self.vDev)) {
                    self.add_to(self.service);
                }
            } else {
                if (ρσ_exists.n(self.vDev) && (self.vDev !== -1 && (typeof self.vDev !== "object" || ρσ_not_equals(self.vDev, -1))) && ρσ_exists.n(self.characteristic)) {
                    console.log(".. HK: Removing @'" + self.name + "' vDev '" + self.vDev.id + "'.");
                    self.remove();
                }
            }
        };
        Base.prototype.remove = function remove() {
            var self = this;
            if (ρσ_exists.n(self.characteristic)) {
                self.characteristic.remove();
                self.characteristic = null;
            }
            self.vDev = null;
            console.log(".. HK Characteristic '" + self.name + "' removed.");
        };
        Base.prototype.check_alarm_supported = function check_alarm_supported(alarm, mask) {
            var self = this;
            var i, t, b;
            if (_.isArray(mask) === false) {
                mask = ρσ_list_decorate([ mask ]);
            }
            i = 0;
            t = 0;
            var ρσ_Iter3 = ρσ_Iterable(mask);
            for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                b = ρσ_Iter3[ρσ_Index3];
                t += b << i*8;
                i += 1;
            }
            return t & alarm > 0;
        };
        if (!Base.prototype.check_alarm_supported.__argnames__) Object.defineProperties(Base.prototype.check_alarm_supported, {
            __argnames__ : {value: ["alarm", "mask"]}
        });
        Base.prototype.override = function override(object, methodName, callback) {
            var self = this;
            var m;
            m = object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName];
            object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName] = callback(object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName]);
            return m;
        };
        if (!Base.prototype.override.__argnames__) Object.defineProperties(Base.prototype.override, {
            __argnames__ : {value: ["object", "methodName", "callback"]}
        });
        Base.prototype.override_reset = function override_reset(object, methodName, original) {
            var self = this;
            var m;
            m = object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName];
            object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName] = original;
            return m;
        };
        if (!Base.prototype.override_reset.__argnames__) Object.defineProperties(Base.prototype.override_reset, {
            __argnames__ : {value: ["object", "methodName", "original"]}
        });
        Base.prototype.map_hk_to_zway = function map_hk_to_zway(position) {
            var self = this;
            return Math.round(position / 1.01);
        };
        if (!Base.prototype.map_hk_to_zway.__argnames__) Object.defineProperties(Base.prototype.map_hk_to_zway, {
            __argnames__ : {value: ["position"]}
        });
        Base.prototype.map_zway_to_hk = function map_zway_to_hk(value) {
            var selfself = this;
            if ((value === 254 || typeof value === "object" && ρσ_equals(value, 254))) {
                return 50;
            }
            if (value > 99) {
                value = 99;
            }
            return Math.round(value * 1.01);
        };
        if (!Base.prototype.map_zway_to_hk.__argnames__) Object.defineProperties(Base.prototype.map_zway_to_hk, {
            __argnames__ : {value: ["value"]}
        });
        Base.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Base.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(Base.prototype, "__bases__", {value: []});

        function GetterSupport() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            GetterSupport.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(GetterSupport, Base);
        GetterSupport.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        GetterSupport.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            c = self.service.addCharacteristic(self.type, self.format, (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    return self.value;
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        GetterSupport.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        GetterSupport.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(GetterSupport.prototype, "__bases__", {value: [Base]});

        function AccessoryIdentifier() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            AccessoryIdentifier.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(AccessoryIdentifier, GetterSupport);
        AccessoryIdentifier.prototype.generateUUID = function generateUUID() {
            var self = this;
            return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function() {
                var ρσ_anonfunc = function (c) {
                    var r, v;
                    r = Math.random() * 16 | 0;
                    v = ((c === "x" || typeof c === "object" && ρσ_equals(c, "x"))) ? r : (r & 0x3|0x8);
                    return v.toString(16);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["c"]}
                });
                return ρσ_anonfunc;
            })());
        };
        AccessoryIdentifier.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "AccessoryIdentifier";
            self.type = HomeKit.Characteristics.AccessoryIdentifier;
            self.format = "string";
            self.value = self.generateUUID();
        };
        if (!AccessoryIdentifier.prototype.__init__.__argnames__) Object.defineProperties(AccessoryIdentifier.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        AccessoryIdentifier.__argnames__ = AccessoryIdentifier.prototype.__init__.__argnames__;
        AccessoryIdentifier.__handles_kwarg_interpolation__ = AccessoryIdentifier.prototype.__init__.__handles_kwarg_interpolation__;
        AccessoryIdentifier.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        AccessoryIdentifier.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(AccessoryIdentifier.prototype, "__bases__", {value: [GetterSupport]});

        function Category() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Category.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Category, GetterSupport);
        Category.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Category";
            self.type = HomeKit.Characteristics.Category;
            self.format = "uint16";
            self.value = 1;
        };
        if (!Category.prototype.__init__.__argnames__) Object.defineProperties(Category.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Category.__argnames__ = Category.prototype.__init__.__argnames__;
        Category.__handles_kwarg_interpolation__ = Category.prototype.__init__.__handles_kwarg_interpolation__;
        Category.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Category.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Category.prototype, "__bases__", {value: [GetterSupport]});

        function LinkQuality() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LinkQuality.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LinkQuality, GetterSupport);
        LinkQuality.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "LinkQuality";
            self.type = HomeKit.Characteristics.LinkQuality;
            self.format = "uint8";
            self.value = 1;
        };
        if (!LinkQuality.prototype.__init__.__argnames__) Object.defineProperties(LinkQuality.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        LinkQuality.__argnames__ = LinkQuality.prototype.__init__.__argnames__;
        LinkQuality.__handles_kwarg_interpolation__ = LinkQuality.prototype.__init__.__handles_kwarg_interpolation__;
        LinkQuality.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LinkQuality.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LinkQuality.prototype, "__bases__", {value: [GetterSupport]});

        function Reachable() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Reachable.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Reachable, GetterSupport);
        Reachable.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Reachable";
            self.type = HomeKit.Characteristics.Reachable;
            self.format = "bool";
            self.value = true;
        };
        if (!Reachable.prototype.__init__.__argnames__) Object.defineProperties(Reachable.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Reachable.__argnames__ = Reachable.prototype.__init__.__argnames__;
        Reachable.__handles_kwarg_interpolation__ = Reachable.prototype.__init__.__handles_kwarg_interpolation__;
        Reachable.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Reachable.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Reachable.prototype, "__bases__", {value: [GetterSupport]});

        ρσ_modules["characteristics.base"].out = out;
        ρσ_modules["characteristics.base"].Base = Base;
        ρσ_modules["characteristics.base"].GetterSupport = GetterSupport;
        ρσ_modules["characteristics.base"].AccessoryIdentifier = AccessoryIdentifier;
        ρσ_modules["characteristics.base"].Category = Category;
        ρσ_modules["characteristics.base"].LinkQuality = LinkQuality;
        ρσ_modules["characteristics.base"].Reachable = Reachable;
    })();

    (function(){
        var __name__ = "devices";
        function pDevice() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            pDevice.prototype.__init__.apply(this, arguments);
        }
        Object.defineProperties(pDevice.prototype,  {
            "id": {
                "enumerable": true, 
                "get": function id() {
                    var self = this;
                    return self._id;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "manufacturerID": {
                "enumerable": true, 
                "get": function manufacturerID() {
                    var self = this;
                    var zway, mI, mPT, mPI;
                    zway = global["zway"];
                    mI = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.manufacturerId.value, 4);
                    mPT = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.manufacturerProductType.value, 4);
                    mPI = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.manufacturerProductId.value, 4);
                    return mI + "." + mPT + "." + mPI;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "genericID": {
                "enumerable": true, 
                "get": function genericID() {
                    var self = this;
                    var zway, bt, gt, st;
                    zway = global["zway"];
                    bt = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.basicType.value, 2);
                    gt = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.genericType.value, 2);
                    st = pDevice.hex_pad_left((ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].data.specificType.value, 2);
                    return bt + "." + gt + "." + st;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "hashedFingerprint": {
                "enumerable": true, 
                "get": function hashedFingerprint() {
                    var self = this;
                    var fp, f;
                    function hashFnv32a(str, asString, seed) {
                        var hval, char;
                        hval = (typeof seed !== "undefined" && seed !== null ? seed : 2166136261);
                        var ρσ_Iter0 = ρσ_Iterable(str);
                        for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                            char = ρσ_Iter0[ρσ_Index0];
                            hval ^= char.charCodeAt();
                            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
                        }
                        if (asString === true) {
                            return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
                        }
                        return hval >>> 0;
                    };
                    if (!hashFnv32a.__argnames__) Object.defineProperties(hashFnv32a, {
                        __argnames__ : {value: ["str", "asString", "seed"]}
                    });

                    if (!ρσ_exists.n(self.vDevices) || len(self.vDevices) < 1) {
                        return null;
                    }
                    fp = ρσ_list_decorate([]);
                    var ρσ_Iter1 = ρσ_Iterable(self.vDevices);
                    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                        f = ρσ_Iter1[ρσ_Index1];
                        fp.push((ρσ_expr_temp = self.vDevices)[(typeof f === "number" && f < 0) ? ρσ_expr_temp.length + f : f].fingerprint);
                    }
                    if (len(fp) < 1) {
                        return null;
                    }
                    fp.sort((function() {
                        var ρσ_anonfunc = function (a, b) {
                            var i1, i2, t1, t2, index;
                            if (len(a) <= len(b)) {
                                i1 = a;
                                i2 = b;
                            } else {
                                i1 = b;
                                i2 = a;
                            }
                            var ρσ_Iter2 = ρσ_Iterable(range(len(a)));
                            for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                                index = ρσ_Iter2[ρσ_Index2];
                                t1 = i1[(typeof index === "number" && index < 0) ? i1.length + index : index];
                                t2 = i2[(typeof index === "number" && index < 0) ? i2.length + index : index];
                                if (t1 !== t1) {
                                    if (t2 !== t2) {
                                        if (t1 < t2) {
                                            return -1;
                                        } else if (t1 > t2) {
                                            return 1;
                                        } else {
                                            return 0;
                                        }
                                    } else {
                                        return 1;
                                    }
                                } else {
                                    if (t2 !== t2) {
                                        return -1;
                                    } else {
                                        return t1 - t2;
                                    }
                                }
                            }
                            if (ρσ_equals(len(a), len(b))) {
                                return 0;
                            }
                            return (len(a) < len(b)) ? -1 : 1;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["a", "b"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    return hashFnv32a(fp.join(","), true);
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "data": {
                "enumerable": true, 
                "get": function data() {
                    var self = this;
                    var zway, d, data;
                    zway = global["zway"];
                    d = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)];
                    if ((typeof d !== "undefined" && d !== null)) {
                        data = d.data;
                        if ((typeof data !== "undefined" && data !== null)) {
                            return data;
                        }
                    }
                    return null;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
        });
        pDevice.prototype.__init__ = function __init__(id) {
            var self = this;
            self._id = id;
            self.vDevices = {};
        };
        if (!pDevice.prototype.__init__.__argnames__) Object.defineProperties(pDevice.prototype.__init__, {
            __argnames__ : {value: ["id"]}
        });
        pDevice.__argnames__ = pDevice.prototype.__init__.__argnames__;
        pDevice.__handles_kwarg_interpolation__ = pDevice.prototype.__init__.__handles_kwarg_interpolation__;
        pDevice.hex_pad_left = function hex_pad_left(number, digits) {
            var hex;
            if (!(typeof digits !== "undefined" && digits !== null)) {
                digits = 2;
            }
            hex = number.toString(16);
            return ("0000000000" + hex).slice(-digits);
        };
        if (!pDevice.hex_pad_left.__annotations__) Object.defineProperties(pDevice.hex_pad_left, {
            __annotations__ : {value: {number: Number, digits: Number, return: String}},
            __argnames__ : {value: ["number", "digits"]}
        });
        pDevice.prototype.commandClass = function commandClass(cmdClass, instance) {
            var self = this;
            var zway, i, c, ii, index;
            zway = global["zway"];
            if ((typeof instance !== "undefined" && instance !== null)) {
                i = (ρσ_expr_temp = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances)[(typeof instance === "number" && instance < 0) ? ρσ_expr_temp.length + instance : instance];
                if ((typeof i !== "undefined" && i !== null)) {
                    c = (ρσ_expr_temp = i.commandClasses)[(typeof cmdClass === "number" && cmdClass < 0) ? ρσ_expr_temp.length + cmdClass : cmdClass];
                    if ((typeof c !== "undefined" && c !== null)) {
                        return c;
                    }
                }
            } else {
                ii = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances;
                var ρσ_Iter3 = ρσ_Iterable(ii);
                for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                    index = ρσ_Iter3[ρσ_Index3];
                    i = ii[(typeof index === "number" && index < 0) ? ii.length + index : index];
                    c = (ρσ_expr_temp = i.commandClasses)[(typeof cmdClass === "number" && cmdClass < 0) ? ρσ_expr_temp.length + cmdClass : cmdClass];
                    if ((typeof c !== "undefined" && c !== null)) {
                        return c;
                    }
                }
            }
            return null;
        };
        if (!pDevice.prototype.commandClass.__argnames__) Object.defineProperties(pDevice.prototype.commandClass, {
            __argnames__ : {value: ["cmdClass", "instance"]}
        });
        pDevice.prototype.supportedCommandClass = function supportedCommandClass(cmdClass, instance) {
            var self = this;
            var zway, c, i, ii, index, supported;
            zway = global["zway"];
            c = null;
            if ((typeof instance !== "undefined" && instance !== null)) {
                i = (ρσ_expr_temp = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances)[(typeof instance === "number" && instance < 0) ? ρσ_expr_temp.length + instance : instance];
                if ((typeof i !== "undefined" && i !== null)) {
                    c = (ρσ_expr_temp = i.commandClasses)[(typeof cmdClass === "number" && cmdClass < 0) ? ρσ_expr_temp.length + cmdClass : cmdClass];
                }
            } else {
                ii = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances;
                var ρσ_Iter4 = ρσ_Iterable(ii);
                for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                    index = ρσ_Iter4[ρσ_Index4];
                    i = ii[(typeof index === "number" && index < 0) ? ii.length + index : index];
                    c = (ρσ_expr_temp = i.commandClasses)[(typeof cmdClass === "number" && cmdClass < 0) ? ρσ_expr_temp.length + cmdClass : cmdClass];
                    if ((typeof c !== "undefined" && c !== null)) {
                        break;
                    }
                }
            }
            try {
                supported = c.data.supported.value;
            } catch (ρσ_Exception) {
                ρσ_last_exception = ρσ_Exception;
                {
                    supported = false;
                } 
            }
            return (supported === true) ? c : null;
        };
        if (!pDevice.prototype.supportedCommandClass.__argnames__) Object.defineProperties(pDevice.prototype.supportedCommandClass, {
            __argnames__ : {value: ["cmdClass", "instance"]}
        });
        pDevice.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        pDevice.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(pDevice.prototype, "__bases__", {value: []});
        
        
        
        
        
        

        function vDevice() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            vDevice.prototype.__init__.apply(this, arguments);
        }
        Object.defineProperties(vDevice.prototype,  {
            "parentID": {
                "enumerable": true, 
                "get": function parentID() {
                    var self = this;
                    return self._id;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "id": {
                "enumerable": true, 
                "get": function id() {
                    var self = this;
                    return self._vDev.id;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "instance": {
                "enumerable": true, 
                "get": function instance() {
                    var self = this;
                    return self._instance;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "zway": {
                "enumerable": true, 
                "get": function zway() {
                    var self = this;
                    return self._vDev;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
        });
        vDevice.prototype.__init__ = function __init__(vDev) {
            var self = this;
            self._vDev = vDev;
            self._id = null;
            self._instance = null;
            self._commandClass = null;
        };
        if (!vDevice.prototype.__init__.__argnames__) Object.defineProperties(vDevice.prototype.__init__, {
            __argnames__ : {value: ["vDev"]}
        });
        vDevice.__argnames__ = vDevice.prototype.__init__.__argnames__;
        vDevice.__handles_kwarg_interpolation__ = vDevice.prototype.__init__.__handles_kwarg_interpolation__;
        vDevice.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        vDevice.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(vDevice.prototype, "__bases__", {value: []});
        
        
        
        

        function ZWayVDev() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ZWayVDev.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ZWayVDev, vDevice);
        Object.defineProperties(ZWayVDev.prototype,  {
            "commandClass": {
                "enumerable": true, 
                "get": function commandClass() {
                    var self = this;
                    var zway;
                    zway = global["zway"];
                    if (ρσ_exists.n(self._commandClass)) {
                        return (ρσ_expr_temp = (ρσ_expr_temp = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances)[ρσ_bound_index(self._instance, ρσ_expr_temp)].commandClasses)[ρσ_bound_index(self._commandClass, ρσ_expr_temp)];
                    }
                    return null;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "commandClassID": {
                "enumerable": true, 
                "get": function commandClassID() {
                    var self = this;
                    return self._commandClass;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "sensorTypeID": {
                "enumerable": true, 
                "get": function sensorTypeID() {
                    var self = this;
                    if (ρσ_exists.n(self._sensorType)) {
                        return self._sensorType;
                    }
                    return null;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "subTypeID": {
                "enumerable": true, 
                "get": function subTypeID() {
                    var self = this;
                    if (ρσ_exists.n(self._subType)) {
                        return self._subType;
                    }
                    return null;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "commandClassBasic": {
                "enumerable": true, 
                "get": function commandClassBasic() {
                    var self = this;
                    var zway;
                    zway = global["zway"];
                    return (ρσ_expr_temp = (ρσ_expr_temp = zway.devices)[ρσ_bound_index(self._id, ρσ_expr_temp)].instances)[ρσ_bound_index(self._instance, ρσ_expr_temp)].commandClasses[32];
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "fingerprint": {
                "enumerable": true, 
                "get": function fingerprint() {
                    var self = this;
                    var splits, elements;
                    splits = str.split(self._vDev.id, "_");
                    if (len(splits) < 3 || (splits[0] !== "ZWayVDev" && (typeof splits[0] !== "object" || ρσ_not_equals(splits[0], "ZWayVDev"))) || (splits[1] !== "zway" && (typeof splits[1] !== "object" || ρσ_not_equals(splits[1], "zway")))) {
                        return;
                    }
                    elements = str.split(splits[2], "-").map((function() {
                        var ρσ_anonfunc = function (item) {
                            var v;
                            v = parseInt(item);
                            return (isNaN(v)) ? item : v;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["item"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    if (len(elements) < 3) {
                        return null;
                    }
                    elements.shift();
                    return elements;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
            "tags": {
                "enumerable": true, 
                "get": function tags() {
                    var self = this;
                    var list, tgs, t, tag;
                    list = ρσ_list_decorate([]);
                    tgs = self._vDev.get("tags");
                    if ((typeof tgs !== "undefined" && tgs !== null) && len(tgs) > 0) {
                        var ρσ_Iter5 = ρσ_Iterable(tgs);
                        for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                            tag = ρσ_Iter5[ρσ_Index5];
                            t = str.split(tag, ":");
                            if (len(t) > 1 && (t[0] === "B4KT" || typeof t[0] === "object" && ρσ_equals(t[0], "B4KT"))) {
                                t.shift();
                                list.push(t.join(":"));
                            }
                        }
                    }
                    return (len(list) > 0) ? list : ρσ_list_decorate([]);
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
        });
        ZWayVDev.prototype.__init__ = function __init__(vDev) {
            var self = this;
            var check;
            vDevice.prototype.__init__.call(self, vDev);
            check = /(?:ZWayVDev_zway_)(\d+)-(\d+)-(\d+)(?:-(\d+|.?))?(?:-([^\d]+))?/.exec(vDev.id);
            if ((typeof check !== "undefined" && check !== null) && len(check) > 3) {
                self._id = check[1];
                self._instance = check[2];
                self._commandClass = check[3];
                if (ρσ_exists.n(check[4])) {
                    self._sensorType = check[4];
                }
                if (ρσ_exists.n(check[5])) {
                    self._subType = check[5];
                }
            }
        };
        if (!ZWayVDev.prototype.__init__.__annotations__) Object.defineProperties(ZWayVDev.prototype.__init__, {
            __annotations__ : {value: {vDev: Object}},
            __argnames__ : {value: ["vDev"]}
        });
        ZWayVDev.__argnames__ = ZWayVDev.prototype.__init__.__argnames__;
        ZWayVDev.__handles_kwarg_interpolation__ = ZWayVDev.prototype.__init__.__handles_kwarg_interpolation__;
        ZWayVDev.prototype.__repr__ = function __repr__ () {
            if(vDevice.prototype.__repr__) return vDevice.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ZWayVDev.prototype.__str__ = function __str__ () {
            if(vDevice.prototype.__str__) return vDevice.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ZWayVDev.prototype, "__bases__", {value: [vDevice]});
        
        
        
        
        
        
        

        function create(vDev) {
            var id, splits;
            id = vDev.id;
            if (ρσ_equals(id.substring(0, 8), "ZWayVDev")) {
                splits = str.split(id, "_");
                if (ρσ_equals(len(splits), 3) && (splits[1] === "zway" || typeof splits[1] === "object" && ρσ_equals(splits[1], "zway"))) {
                    return new ZWayVDev(vDev);
                }
            }
            return null;
        };
        if (!create.__annotations__) Object.defineProperties(create, {
            __annotations__ : {value: {vDev: Object, return: vDevice}},
            __argnames__ : {value: ["vDev"]}
        });

        function detect_vDev(controller, pID, detectType) {
            var vDev, definition, vDevList, d, testType;
            if (!((typeof controller !== "undefined" && controller !== null) && (typeof pID !== "undefined" && pID !== null) && (typeof detectType !== "undefined" && detectType !== null))) {
                return null;
            }
            vDev = null;
            var ρσ_Iter6 = ρσ_Iterable(detectType);
            for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                testType = ρσ_Iter6[ρσ_Index6];
                definition = detectType[(typeof testType === "number" && testType < 0) ? detectType.length + testType : testType];
                if (_.isArray(definition) === false) {
                    definition = ρσ_list_decorate([ definition ]);
                }
                var ρσ_Iter7 = ρσ_Iterable(definition);
                for (var ρσ_Index7 = 0; ρσ_Index7 < ρσ_Iter7.length; ρσ_Index7++) {
                    d = ρσ_Iter7[ρσ_Index7];
                    vDevList = controller.devices.filter((function() {
                        var ρσ_anonfunc = function (x) {
                            return ρσ_equals(x.get(testType), d);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["x"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    vDevList = vDevList.filter((function() {
                        var ρσ_anonfunc = function (x) {
                            var dev;
                            dev = create(x);
                            if ((typeof dev !== "undefined" && dev !== null) && (dev.parentID === pID || typeof dev.parentID === "object" && ρσ_equals(dev.parentID, pID))) {
                                return true;
                            }
                            return false;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["x"]}
                        });
                        return ρσ_anonfunc;
                    })());
                    if (len(vDevList) > 0) {
                        vDev = vDevList[0];
                        break;
                    }
                }
                if ((typeof vDev !== "undefined" && vDev !== null)) {
                    break;
                }
            }
            if ((typeof vDev !== "undefined" && vDev !== null)) {
                return vDev;
            }
            return null;
        };
        if (!detect_vDev.__argnames__) Object.defineProperties(detect_vDev, {
            __argnames__ : {value: ["controller", "pID", "detectType"]}
        });

        ρσ_modules.devices.pDevice = pDevice;
        ρσ_modules.devices.vDevice = vDevice;
        ρσ_modules.devices.ZWayVDev = ZWayVDev;
        ρσ_modules.devices.create = create;
        ρσ_modules.devices.detect_vDev = detect_vDev;
    })();

    (function(){
        var __name__ = "characteristics.battery";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;
        var GetterSupport = ρσ_modules["characteristics.base"].GetterSupport;

        var devices = ρσ_modules.devices;

        function BatteryLevel() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            BatteryLevel.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(BatteryLevel, Base);
        BatteryLevel.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        BatteryLevel.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, dev, cc;
            self.name = "BatteryLevel";
            self.vDev = -1;
            c = null;
            dev = new devices.pDevice(self.id);
            if ((typeof dev !== "undefined" && dev !== null)) {
                cc = dev.commandClass(128);
                if (cc) {
                    self.commandClass = cc;
                    c = self.service.addCharacteristic(HomeKit.Characteristics.BatteryLevel, "uint8", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            var value;
                            value = self.commandClass.data.last.value || 0;
                            if (value > 100) {
                                value = 100;
                            }
                            return value;
                        };
                        return ρσ_d;
                    }).call(this));
                    self.commandClass.data.last.bind(self.onLevelChange);
                }
            }
            return c;
        };
        BatteryLevel.prototype.remove = function remove() {
            var self = this;
            if (self.commandClass) {
                self.commandClass.data.last.bind(null);
            }
            Base.prototype.remove.call(self);
        };
        BatteryLevel.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        BatteryLevel.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(BatteryLevel.prototype, "__bases__", {value: [Base]});

        function ChargingState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ChargingState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ChargingState, GetterSupport);
        ChargingState.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Charging State";
            self.type = HomeKit.Characteristics.ChargingState;
            self.format = "uint8";
            self.value = 2;
        };
        if (!ChargingState.prototype.__init__.__argnames__) Object.defineProperties(ChargingState.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        ChargingState.__argnames__ = ChargingState.prototype.__init__.__argnames__;
        ChargingState.__handles_kwarg_interpolation__ = ChargingState.prototype.__init__.__handles_kwarg_interpolation__;
        ChargingState.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ChargingState.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ChargingState.prototype, "__bases__", {value: [GetterSupport]});

        function StatusLowBattery() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            StatusLowBattery.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(StatusLowBattery, Base);
        StatusLowBattery.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        StatusLowBattery.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "StatusLowBattery";
            self.vDev = -1;
            self.commandClass = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)].instances[0].commandClasses[128];
            c = self.service.addCharacteristic(HomeKit.Characteristics.StatusLowBattery, "uint8", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    var value, level;
                    value = 1;
                    level = self.commandClass.data.last.value;
                    if ((typeof level !== "undefined" && level !== null)) {
                        value = (level < 15) ? 1 : 0;
                    }
                    return value;
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        StatusLowBattery.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        StatusLowBattery.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(StatusLowBattery.prototype, "__bases__", {value: [Base]});

        ρσ_modules["characteristics.battery"].BatteryLevel = BatteryLevel;
        ρσ_modules["characteristics.battery"].ChargingState = ChargingState;
        ρσ_modules["characteristics.battery"].StatusLowBattery = StatusLowBattery;
    })();

    (function(){
        var __name__ = "characteristics.heating";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        var devices = ρσ_modules.devices;

        function CurrentHeatingCoolingState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentHeatingCoolingState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentHeatingCoolingState, Base);
        CurrentHeatingCoolingState.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CurrentHeatingCoolingState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, dev;
            self.name = "CurrentHeatingCoolingState";
            c = null;
            self.vDev = -1;
            dev = new devices.pDevice(self.id);
            self.commandClass = dev.commandClass(64);
            if (ρσ_exists.n(self.commandClass)) {
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentHeatingCoolingState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var mode;
                        mode = self.commandClass.data.mode.value;
                        if (Math.pow(2, mode) & self.thermostat.heating) {
                            return 1;
                        } else if (Math.pow(2, mode) & self.thermostat.cooling) {
                            return 2;
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
                return c;
            }
            self.commandClass = dev.commandClass(66);
            if (ρσ_exists.n(self.commandClass)) {
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentHeatingCoolingState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var state;
                        state = self.commandClass.data.state.value;
                        if (Math.pow(2, state) & self.thermostat.heating) {
                            return 1;
                        } else if (Math.pow(2, state) & self.thermostat.cooling) {
                            return 2;
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
                return c;
            }
            self.commandClass = dev.commandClass(67);
            if (ρσ_exists.n(self.commandClass)) {
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentHeatingCoolingState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var modemask, i;
                        modemask = self.commandClass.data.modemask.value;
                        i = 0;
                        if (modemask > 0) {
                            while (modemask & 1 == 0) {
                                modemask = modemask >>> 1;
                                i += 1;
                                if ((modemask === 0 || typeof modemask === "object" && ρσ_equals(modemask, 0))) {
                                    break;
                                }
                            }
                        }
                        if (i > 0) {
                            if (Math.pow(2, i) & self.thermostat.heating) {
                                return 1;
                            } else if (Math.pow(2, i) & self.thermostat.cooling) {
                                return 2;
                            }
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        CurrentHeatingCoolingState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentHeatingCoolingState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentHeatingCoolingState.prototype, "__bases__", {value: [Base]});

        function TargetHeatingCoolingState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetHeatingCoolingState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetHeatingCoolingState, Base);
        TargetHeatingCoolingState.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetHeatingCoolingState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, dev, cc;
            self.name = "TargetHeatingCoolingState";
            c = null;
            d = -1;
            dev = new devices.pDevice(self.id);
            self.state = 1;
            cc = dev.supportedCommandClass(64);
            if (cc !== null) {
                self.commandClass = cc;
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetHeatingCoolingState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.state;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            try {
                                if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1))) {
                                    self.commandClass.Set(self.thermostat.heat);
                                } else if ((value === 2 || typeof value === "object" && ρσ_equals(value, 2))) {
                                    self.commandClass.Set(self.thermostat.cool);
                                } else if ((value === 3 || typeof value === "object" && ρσ_equals(value, 3))) {
                                    self.commandClass.Set(self.thermostat.auto);
                                } else {
                                    self.commandClass.Set(self.thermostat.off);
                                }
                                self.state = value;
                            } catch (ρσ_Exception) {
                                ρσ_last_exception = ρσ_Exception;
                                {
                                } 
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                return c;
            }
            cc = dev.supportedCommandClass(67);
            if (cc !== null) {
                self.commandClass = cc;
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetHeatingCoolingState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var mode;
                        mode = self.commandClass.data.modemask.value;
                        if (mode & self.thermostat.heating) {
                            return 1;
                        } else if (mode & self.thermostat.cooling) {
                            return 2;
                        } else if (mode & self.thermostat.automatic) {
                            return 3;
                        } else {
                            return 0;
                        }
                    };
                    ρσ_d["set"] = function () {
                        return;
                    };
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        TargetHeatingCoolingState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetHeatingCoolingState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetHeatingCoolingState.prototype, "__bases__", {value: [Base]});

        function TargetTemperature() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetTemperature.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetTemperature, Base);
        TargetTemperature.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetTemperature.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Target Temperature";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "thermostat";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetTemperature, "float", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.vDev.get("metrics:level");
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var pD, cc, mm, bit, mode, min, max, t;
                            pD = new devices.pDevice(self.id);
                            cc = pD.supportedCommandClass(67);
                            if (cc !== null) {
                                mm = cc.data.modemask.value;
                                var ρσ_Iter0 = ρσ_Iterable(self.thermostat);
                                for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                                    t = ρσ_Iter0[ρσ_Index0];
                                    bit = 1 << self.thermostat[t];
                                    if (((mm & bit) !== 0 && (typeof (mm & bit) !== "object" || ρσ_not_equals((mm & bit), 0)))) {
                                        mode = (ρσ_expr_temp = self.thermostat)[(typeof t === "number" && t < 0) ? ρσ_expr_temp.length + t : t];
                                        try {
                                            min = (ρσ_expr_temp = cc.data)[(typeof mode === "number" && mode < 0) ? ρσ_expr_temp.length + mode : mode].min.value;
                                        } catch (ρσ_Exception) {
                                            ρσ_last_exception = ρσ_Exception;
                                            {
                                                min = 0;
                                            } 
                                        }
                                        try {
                                            max = (ρσ_expr_temp = cc.data)[(typeof mode === "number" && mode < 0) ? ρσ_expr_temp.length + mode : mode].max.value;
                                        } catch (ρσ_Exception) {
                                            ρσ_last_exception = ρσ_Exception;
                                            {
                                                max = 100;
                                            } 
                                        }
                                        if (min <= value && value <= max) {
                                            var ρσ_try_else_1 = false;
                                            try {
                                                cc.Set(mode, value);
                                                ρσ_try_else_1 = true;
                                            } catch (ρσ_Exception) {
                                                ρσ_last_exception = ρσ_Exception;
                                                {
                                                } 
                                            }
                                            if (ρσ_try_else_1) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        TargetTemperature.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetTemperature.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetTemperature.prototype, "__bases__", {value: [Base]});

        function TemperatureDisplayUnits() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TemperatureDisplayUnits.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TemperatureDisplayUnits, Base);
        TemperatureDisplayUnits.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TemperatureDisplayUnits.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "TemperatureDisplayUnits";
            c = null;
            self.vDev = -1;
            self.ccMode = new devices.pDevice(self.id).commandClass(64);
            self.ccSetPoint = new devices.pDevice(self.id).commandClass(67);
            self.mode = null;
            if (ρσ_exists.n(self.ccMode) || ρσ_exists.n(self.ccSetPoint)) {
                c = self.service.addCharacteristic(HomeKit.Characteristics.TemperatureDisplayUnits, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var mode, modemask, i, scale;
                        if (self.mode !== null) {
                            return self.mode;
                        }
                        mode = null;
                        if (ρσ_exists.n(self.ccMode)) {
                            mode = self.ccMode.data.mode.value;
                        } else {
                            modemask = self.ccSetPoint.data.modemask.value;
                            i = 0;
                            if (modemask > 0) {
                                while (modemask & 1 == 0) {
                                    modemask = modemask >>> 1;
                                    i += 1;
                                    if ((modemask === 0 || typeof modemask === "object" && ρσ_equals(modemask, 0))) {
                                        break;
                                    }
                                }
                            }
                            if (i > 0) {
                                mode = i;
                            }
                        }
                        if (mode !== null) {
                            scale = (ρσ_expr_temp = self.ccSetPoint.data)[(typeof mode === "number" && mode < 0) ? ρσ_expr_temp.length + mode : mode].scaleString.value;
                            if ((typeof scale !== "undefined" && scale !== null) && (scale === "°F" || typeof scale === "object" && ρσ_equals(scale, "°F"))) {
                                return 1;
                            }
                        }
                        return 0;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            self.mode = value;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        TemperatureDisplayUnits.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TemperatureDisplayUnits.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TemperatureDisplayUnits.prototype, "__bases__", {value: [Base]});

        ρσ_modules["characteristics.heating"].CurrentHeatingCoolingState = CurrentHeatingCoolingState;
        ρσ_modules["characteristics.heating"].TargetHeatingCoolingState = TargetHeatingCoolingState;
        ρσ_modules["characteristics.heating"].TargetTemperature = TargetTemperature;
        ρσ_modules["characteristics.heating"].TemperatureDisplayUnits = TemperatureDisplayUnits;
    })();

    (function(){
        var __name__ = "characteristics.lightbulb";

    })();

    (function(){
        var __name__ = "characteristics.shared";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        function Brightness() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Brightness.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Brightness, Base);
        Brightness.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Brightness.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            self.name = "Brightness";
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.Brightness, "int", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        if (self.target === null) {
                            return self.map_zway_to_hk(self.vDev.get("metrics:level"));
                        }
                        return self.target;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var v;
                            self.target = value;
                            self.reset_target();
                            v = self.map_hk_to_zway(value);
                            self.vDev.performCommand("exact", (function(){
                                var ρσ_d = {};
                                ρσ_d["level"] = v;
                                return ρσ_d;
                            }).call(this));
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onLevelChange);
            }
            return c;
        };
        Brightness.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onLevelChange);
            }
            Base.prototype.remove.call(self);
        };
        Brightness.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Brightness.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Brightness.prototype, "__bases__", {value: [Base]});

        function Name() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Name.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Name, Base);
        Name.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Name.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "Name";
            c = null;
            self.vDev = -1;
            c = self.service.addCharacteristic(HomeKit.Characteristics.Name, "string", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    var name, dev;
                    name = null;
                    dev = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)];
                    if ((typeof dev !== "undefined" && dev !== null)) {
                        name = dev.data.givenName.value.toString();
                    }
                    return ((typeof name !== "undefined" && name !== null)) ? name : "Unnamed device";
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        Name.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Name.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Name.prototype, "__bases__", {value: [Base]});

        function On() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            On.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(On, Base);
        On.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        On.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "On";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchBinary";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.On, "bool", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.vDev.get("metrics:level");
                        if ((level === "on" || typeof level === "object" && ρσ_equals(level, "on"))) {
                            return true;
                        }
                        if ((level === 99 || typeof level === "object" && ρσ_equals(level, 99))) {
                            return true;
                        }
                        return false;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var v;
                            if ((value === true || typeof value === "object" && ρσ_equals(value, true)) || (value === 1 || typeof value === "object" && ρσ_equals(value, 1))) {
                                v = "on";
                            } else {
                                v = "off";
                            }
                            self.vDev.performCommand(v);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onLevelChange);
            }
            return c;
        };
        On.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onLevelChange);
            }
            Base.prototype.remove.call(self);
        };
        On.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        On.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(On.prototype, "__bases__", {value: [Base]});

        ρσ_modules["characteristics.shared"].Brightness = Brightness;
        ρσ_modules["characteristics.shared"].Name = Name;
        ρσ_modules["characteristics.shared"].On = On;
    })();

    (function(){
        var __name__ = "characteristics.lightbulb.rgb";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        var Brightness = ρσ_modules["characteristics.shared"].Brightness;
        var On = ρσ_modules["characteristics.shared"].On;

        var devices = ρσ_modules.devices;

        HomeKit.Characteristics.ColorTemperature = "CE";
        function RGBSupport() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            RGBSupport.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(RGBSupport, Base);
        Object.defineProperties(RGBSupport.prototype,  {
            "rgb": {
                "enumerable": true, 
                "get": function rgb() {
                    var self = this;
                    var COLOR_RED, COLOR_GREEN, COLOR_BLUE, r, g, b;
                    COLOR_RED = 2;
                    COLOR_GREEN = 3;
                    COLOR_BLUE = 4;
                    if (_.isObject(self.cc)) {
                        r = (ρσ_expr_temp = self.cc.data)[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? ρσ_expr_temp.length + COLOR_RED : COLOR_RED].level.value;
                        g = (ρσ_expr_temp = self.cc.data)[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? ρσ_expr_temp.length + COLOR_GREEN : COLOR_GREEN].level.value;
                        b = (ρσ_expr_temp = self.cc.data)[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? ρσ_expr_temp.length + COLOR_BLUE : COLOR_BLUE].level.value;
                    } else {
                        r = 0;
                        g = 0;
                        b = 0;
                    }
                    r = (function(){
                        var ρσ_d = {};
                        ρσ_d["r"] = r;
                        ρσ_d["g"] = g;
                        ρσ_d["b"] = b;
                        return ρσ_d;
                    }).call(this);
                    return r;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
        });
        RGBSupport.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        RGBSupport.prototype.fill = function fill(size, value) {
            var self = this;
            return _.range(size).map(function () {
                return value;
            });
        };
        if (!RGBSupport.prototype.fill.__argnames__) Object.defineProperties(RGBSupport.prototype.fill, {
            __argnames__ : {value: ["size", "value"]}
        });
        RGBSupport.prototype.hsv2rgb = function hsv2rgb(hsv) {
            var self = this;
            var h, s, v, i, f, p, q, t, sector, r, g, b;
            h = hsv.h / 360;
            s = hsv.s / 100;
            v = hsv.v / 100;
            i = Math.floor(h * 6);
            f = h * 6 - i;
            p = v * (1 - s);
            q = v * (1 - f * s);
            t = v * (1 - (1 - f) * s);
            sector = i % 6;
            if ((sector === 0 || typeof sector === "object" && ρσ_equals(sector, 0))) {
                r = v;
                g = t;
                b = p;
            } else if ((sector === 1 || typeof sector === "object" && ρσ_equals(sector, 1))) {
                r = q;
                g = v;
                b = p;
            } else if ((sector === 2 || typeof sector === "object" && ρσ_equals(sector, 2))) {
                r = p;
                g = v;
                b = t;
            } else if ((sector === 3 || typeof sector === "object" && ρσ_equals(sector, 3))) {
                r = p;
                g = q;
                b = v;
            } else if ((sector === 4 || typeof sector === "object" && ρσ_equals(sector, 4))) {
                r = t;
                g = p;
                b = v;
            } else {
                r = v;
                g = p;
                b = q;
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["r"] = Math.round(255 * r);
                ρσ_d["g"] = Math.round(255 * g);
                ρσ_d["b"] = Math.round(255 * b);
                return ρσ_d;
            }).call(this);
        };
        if (!RGBSupport.prototype.hsv2rgb.__argnames__) Object.defineProperties(RGBSupport.prototype.hsv2rgb, {
            __argnames__ : {value: ["hsv"]}
        });
        RGBSupport.prototype.rgb2hsv = function rgb2hsv(rgb) {
            var self = this;
            var r, g, b, max, min, d, s, v, h, f;
            r = rgb.r;
            g = rgb.g;
            b = rgb.b;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            d = max - min;
            s = ((max === 0 || typeof max === "object" && ρσ_equals(max, 0))) ? 0 : d / max;
            v = max / 255;
            if ((max === min || typeof max === "object" && ρσ_equals(max, min))) {
                h = 0;
            } else if ((max === r || typeof max === "object" && ρσ_equals(max, r))) {
                f = (g < b) ? 6 : 0;
                h = g - b + d * f;
                h /= 6 * d;
            } else if ((max === g || typeof max === "object" && ρσ_equals(max, g))) {
                h = b - r + d * 2;
                h /= 6 * d;
            } else {
                h = r - g + d * 4;
                h /= 6 * d;
            }
            return (function(){
                var ρσ_d = {};
                ρσ_d["h"] = h * 360;
                ρσ_d["s"] = s * 100;
                ρσ_d["v"] = Math.round(v * 100);
                return ρσ_d;
            }).call(this);
        };
        if (!RGBSupport.prototype.rgb2hsv.__argnames__) Object.defineProperties(RGBSupport.prototype.rgb2hsv, {
            __argnames__ : {value: ["rgb"]}
        });
        RGBSupport.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_RED, COLOR_GREEN, COLOR_BLUE, dev;
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_RED = 2;
            COLOR_GREEN = 3;
            COLOR_BLUE = 4;
            self.colors = ρσ_list_decorate([ COLOR_RED, COLOR_GREEN, COLOR_BLUE ]);
            self.onTarget = (function() {
                var ρσ_anonfunc = function (target) {
                    var item;
                    if (self.target === null) {
                        self.target = self.rgb2hsv(self.rgb);
                    }
                    var ρσ_Iter0 = ρσ_Iterable(target);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                        item = ρσ_Iter0[ρσ_Index0];
                        (ρσ_expr_temp = self.target)[(typeof item === "number" && item < 0) ? ρσ_expr_temp.length + item : item] = target[(typeof item === "number" && item < 0) ? target.length + item : item];
                    }
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["target"]}
                });
                return ρσ_anonfunc;
            })();
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var hsv;
                        if (self.target === null) {
                            hsv = self.rgb2hsv(self.rgb);
                            return hsv[ρσ_bound_index(self.hsv, hsv)];
                        } else {
                            return (ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)];
                        }
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var emit, rgb, cols;
                            if (self.target === null) {
                                self.target = self.rgb2hsv(self.rgb);
                            }
                            (ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] = value;
                            emit = {};
                            emit[ρσ_bound_index(self.hsv, emit)] = value;
                            self.bridge.controller.emit("B4KT:HSV:" + self.id, emit);
                            rgb = self.hsv2rgb(self.target);
                            cols = self.fill(9, 0);
                            cols[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? cols.length + COLOR_RED : COLOR_RED] = rgb.r;
                            cols[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? cols.length + COLOR_GREEN : COLOR_GREEN] = rgb.g;
                            cols[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? cols.length + COLOR_BLUE : COLOR_BLUE] = rgb.b;
                            self.service.SetMultiple(_.range(9), cols, 0);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.bridge.controller.on("B4KT:HSV:" + self.id, self.onTarget);
            }
            return c;
        };
        RGBSupport.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.bridge.controller.off("B4KT:HSV:" + self.id, self.onTarget);
                if (_.isFunction(self.reset_target) && _.isFunction(self.reset_target.cancel)) {
                    self.reset_target.cancel();
                }
            }
            Base.prototype.remove.call(self);
        };
        RGBSupport.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        RGBSupport.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(RGBSupport.prototype, "__bases__", {value: [Base]});
        

        function Brightness2RGB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Brightness2RGB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Brightness2RGB, RGBSupport);
        Brightness2RGB.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            RGBSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Brightness";
            self.type = HomeKit.Characteristics.Brightness;
            self.format = "int";
            self.hsv = "v";
        };
        if (!Brightness2RGB.prototype.__init__.__argnames__) Object.defineProperties(Brightness2RGB.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Brightness2RGB.__argnames__ = Brightness2RGB.prototype.__init__.__argnames__;
        Brightness2RGB.__handles_kwarg_interpolation__ = Brightness2RGB.prototype.__init__.__handles_kwarg_interpolation__;
        Brightness2RGB.prototype.__repr__ = function __repr__ () {
            if(RGBSupport.prototype.__repr__) return RGBSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Brightness2RGB.prototype.__str__ = function __str__ () {
            if(RGBSupport.prototype.__str__) return RGBSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Brightness2RGB.prototype, "__bases__", {value: [RGBSupport]});

        function Hue() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Hue.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Hue, RGBSupport);
        Hue.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            RGBSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Hue";
            self.type = HomeKit.Characteristics.Hue;
            self.format = "float";
            self.hsv = "h";
        };
        if (!Hue.prototype.__init__.__argnames__) Object.defineProperties(Hue.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Hue.__argnames__ = Hue.prototype.__init__.__argnames__;
        Hue.__handles_kwarg_interpolation__ = Hue.prototype.__init__.__handles_kwarg_interpolation__;
        Hue.prototype.__repr__ = function __repr__ () {
            if(RGBSupport.prototype.__repr__) return RGBSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Hue.prototype.__str__ = function __str__ () {
            if(RGBSupport.prototype.__str__) return RGBSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Hue.prototype, "__bases__", {value: [RGBSupport]});

        function OnRGB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            OnRGB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(OnRGB, RGBSupport);
        OnRGB.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            RGBSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "On";
            self.type = HomeKit.Characteristics.On;
            self.format = "bool";
            self.hsv = "v";
        };
        if (!OnRGB.prototype.__init__.__argnames__) Object.defineProperties(OnRGB.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        OnRGB.__argnames__ = OnRGB.prototype.__init__.__argnames__;
        OnRGB.__handles_kwarg_interpolation__ = OnRGB.prototype.__init__.__handles_kwarg_interpolation__;
        OnRGB.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_RED, COLOR_GREEN, COLOR_BLUE, dev;
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_RED = 2;
            COLOR_GREEN = 3;
            COLOR_BLUE = 4;
            self.colors = ρσ_list_decorate([ COLOR_RED, COLOR_GREEN, COLOR_BLUE ]);
            self.onTarget = (function() {
                var ρσ_anonfunc = function (target) {
                    var item;
                    if (self.target === null) {
                        self.target = self.rgb2hsv(self.rgb);
                    }
                    var ρσ_Iter1 = ρσ_Iterable(target);
                    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                        item = ρσ_Iter1[ρσ_Index1];
                        (ρσ_expr_temp = self.target)[(typeof item === "number" && item < 0) ? ρσ_expr_temp.length + item : item] = target[(typeof item === "number" && item < 0) ? target.length + item : item];
                    }
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["target"]}
                });
                return ρσ_anonfunc;
            })();
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var hsv;
                        if (self.target === null) {
                            hsv = self.rgb2hsv(self.rgb);
                            return hsv[ρσ_bound_index(self.hsv, hsv)] > 0;
                        } else {
                            return (ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] > 0;
                        }
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var emit, rgb, cols;
                            if (self.target === null) {
                                self.target = self.rgb2hsv(self.rgb);
                            }
                            if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1)) || (value === true || typeof value === "object" && ρσ_equals(value, true)) || (value === "1" || typeof value === "object" && ρσ_equals(value, "1"))) {
                                if ((ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] > 0) {
                                    return;
                                }
                                value = 100;
                            } else if ((value === 0 || typeof value === "object" && ρσ_equals(value, 0)) || (value === false || typeof value === "object" && ρσ_equals(value, false)) || (value === "0" || typeof value === "object" && ρσ_equals(value, "0"))) {
                                if (((ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] === 0 || typeof (ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] === "object" && ρσ_equals((ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)], 0))) {
                                    return;
                                }
                                value = 0;
                            } else {
                                return;
                            }
                            (ρσ_expr_temp = self.target)[ρσ_bound_index(self.hsv, ρσ_expr_temp)] = value;
                            emit = {};
                            emit[ρσ_bound_index(self.hsv, emit)] = value;
                            self.bridge.controller.emit("B4KT:HSV:" + self.id, emit);
                            rgb = self.hsv2rgb(self.target);
                            cols = self.fill(9, 0);
                            cols[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? cols.length + COLOR_RED : COLOR_RED] = rgb.r;
                            cols[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? cols.length + COLOR_GREEN : COLOR_GREEN] = rgb.g;
                            cols[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? cols.length + COLOR_BLUE : COLOR_BLUE] = rgb.b;
                            self.service.SetMultiple(_.range(9), cols, 0);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.bridge.controller.on("B4KT:HSV:" + self.id, self.onTarget);
            }
            return c;
        };
        OnRGB.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.bridge.controller.off("B4KT:HSV:" + self.id, self.onTarget);
                if (_.isFunction(self.reset_target) && _.isFunction(self.reset_target.cancel)) {
                    self.reset_target.cancel();
                }
            }
            RGBSupport.prototype.remove.call(self);
        };
        OnRGB.prototype.__repr__ = function __repr__ () {
            if(RGBSupport.prototype.__repr__) return RGBSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        OnRGB.prototype.__str__ = function __str__ () {
            if(RGBSupport.prototype.__str__) return RGBSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(OnRGB.prototype, "__bases__", {value: [RGBSupport]});

        function Saturation() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Saturation.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Saturation, RGBSupport);
        Saturation.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            RGBSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Saturation";
            self.type = HomeKit.Characteristics.Saturation;
            self.format = "float";
            self.hsv = "s";
        };
        if (!Saturation.prototype.__init__.__argnames__) Object.defineProperties(Saturation.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Saturation.__argnames__ = Saturation.prototype.__init__.__argnames__;
        Saturation.__handles_kwarg_interpolation__ = Saturation.prototype.__init__.__handles_kwarg_interpolation__;
        Saturation.prototype.__repr__ = function __repr__ () {
            if(RGBSupport.prototype.__repr__) return RGBSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Saturation.prototype.__str__ = function __str__ () {
            if(RGBSupport.prototype.__str__) return RGBSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Saturation.prototype, "__bases__", {value: [RGBSupport]});

        function Identify() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Identify.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Identify, RGBSupport);
        Identify.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            RGBSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Identify";
            self.type = HomeKit.Characteristics.Identify;
            self.format = "bool";
            self.hsv = "v";
        };
        if (!Identify.prototype.__init__.__argnames__) Object.defineProperties(Identify.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Identify.__argnames__ = Identify.prototype.__init__.__argnames__;
        Identify.__handles_kwarg_interpolation__ = Identify.prototype.__init__.__handles_kwarg_interpolation__;
        Identify.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_RED, COLOR_GREEN, COLOR_BLUE, dev;
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_RED = 2;
            COLOR_GREEN = 3;
            COLOR_BLUE = 4;
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var status, original, rgb, cols;
                            if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1)) || (value === true || typeof value === "object" && ρσ_equals(value, true)) || (value === "1" || typeof value === "object" && ρσ_equals(value, "1"))) {
                                status = self.rgb2hsv(self.rgb);
                                original = status[ρσ_bound_index(self.hsv, status)];
                                status[ρσ_bound_index(self.hsv, status)] = 100;
                                rgb = self.hsv2rgb(status);
                                cols = self.fill(9, 0);
                                cols[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? cols.length + COLOR_RED : COLOR_RED] = rgb.r;
                                cols[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? cols.length + COLOR_GREEN : COLOR_GREEN] = rgb.g;
                                cols[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? cols.length + COLOR_BLUE : COLOR_BLUE] = rgb.b;
                                self.cc.SetMultiple(_.range(9), cols, 0, _.delay(function () {
                                    var rgb, cols;
                                    status[ρσ_bound_index(self.hsv, status)] = 0;
                                    rgb = self.hsv2rgb(status);
                                    cols = self.fill(9, 0);
                                    cols[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? cols.length + COLOR_RED : COLOR_RED] = rgb.r;
                                    cols[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? cols.length + COLOR_GREEN : COLOR_GREEN] = rgb.g;
                                    cols[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? cols.length + COLOR_BLUE : COLOR_BLUE] = rgb.b;
                                    self.cc.SetMultiple(_.range(9), cols, 0, _.delay(function () {
                                        var rgb, cols;
                                        status[ρσ_bound_index(self.hsv, status)] = original;
                                        rgb = self.hsv2rgb(status);
                                        cols = self.fill(9, 0);
                                        cols[(typeof COLOR_RED === "number" && COLOR_RED < 0) ? cols.length + COLOR_RED : COLOR_RED] = rgb.r;
                                        cols[(typeof COLOR_GREEN === "number" && COLOR_GREEN < 0) ? cols.length + COLOR_GREEN : COLOR_GREEN] = rgb.g;
                                        cols[(typeof COLOR_BLUE === "number" && COLOR_BLUE < 0) ? cols.length + COLOR_BLUE : COLOR_BLUE] = rgb.b;
                                        self.cc.SetMultiple(_.range(9), cols, 0);
                                    }, 1500));
                                }, 1500));
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            } else {
                self.vDev = -1;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            return false;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        Identify.prototype.remove = function remove() {
            var self = this;
            Base.prototype.remove.call(self);
        };
        Identify.prototype.__repr__ = function __repr__ () {
            if(RGBSupport.prototype.__repr__) return RGBSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Identify.prototype.__str__ = function __str__ () {
            if(RGBSupport.prototype.__str__) return RGBSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Identify.prototype, "__bases__", {value: [RGBSupport]});

        ρσ_modules["characteristics.lightbulb.rgb"].RGBSupport = RGBSupport;
        ρσ_modules["characteristics.lightbulb.rgb"].Brightness2RGB = Brightness2RGB;
        ρσ_modules["characteristics.lightbulb.rgb"].Hue = Hue;
        ρσ_modules["characteristics.lightbulb.rgb"].OnRGB = OnRGB;
        ρσ_modules["characteristics.lightbulb.rgb"].Saturation = Saturation;
        ρσ_modules["characteristics.lightbulb.rgb"].Identify = Identify;
    })();

    (function(){
        var __name__ = "characteristics.lightbulb.white";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        var devices = ρσ_modules.devices;

        HomeKit.Characteristics.ColorTemperature = "CE";
        function WhiteSupport() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WhiteSupport.prototype.__init__.apply(this, arguments);
        }
        Object.defineProperties(WhiteSupport.prototype,  {
            "sc": {
                "enumerable": true, 
                "get": function sc() {
                    var self = this;
                    var COLOR_SOFT_WHITE, COLOR_COLD_WHITE, sw, cw, r;
                    COLOR_SOFT_WHITE = 0;
                    COLOR_COLD_WHITE = 1;
                    if (_.isObject(self.cc)) {
                        sw = (ρσ_expr_temp = self.cc.data)[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? ρσ_expr_temp.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE].level.value;
                        cw = (ρσ_expr_temp = self.cc.data)[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? ρσ_expr_temp.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE].level.value;
                    } else {
                        sw = 0;
                        cw = 0;
                    }
                    r = (function(){
                        var ρσ_d = {};
                        ρσ_d["s"] = sw;
                        ρσ_d["c"] = cw;
                        return ρσ_d;
                    }).call(this);
                    return r;
                }, 
                "set": function () { throw new AttributeError("can't set attribute") }
            }, 
        });
        WhiteSupport.prototype.__init__ = function __init__ () {
                    };
        WhiteSupport.prototype.fill = function fill(size, value) {
            var self = this;
            return _.range(size).map(function () {
                return value;
            });
        };
        if (!WhiteSupport.prototype.fill.__argnames__) Object.defineProperties(WhiteSupport.prototype.fill, {
            __argnames__ : {value: ["size", "value"]}
        });
        WhiteSupport.prototype.bc2sc = function bc2sc(bc) {
            var self = this;
            var b, c, TEMP_SOFT_WHITE, TEMP_COLD_UP, TEMP_SOFT_COLD, TEMP_SOFT_LOW, TEMP_COLD_WHITE, sw, cw, sc;
            b = bc.b;
            c = bc.c;
            TEMP_SOFT_WHITE = 370;
            TEMP_COLD_UP = 300;
            TEMP_SOFT_COLD = 260;
            TEMP_SOFT_LOW = 220;
            TEMP_COLD_WHITE = 200;
            sw = (c >= TEMP_SOFT_LOW) ? 255 : 0;
            cw = (c <= TEMP_COLD_UP) ? 255 : 0;
            sw *= b / 100;
            cw *= b / 100;
            sc = (function(){
                var ρσ_d = {};
                ρσ_d["s"] = Math.round(sw);
                ρσ_d["c"] = Math.round(cw);
                return ρσ_d;
            }).call(this);
            return sc;
        };
        if (!WhiteSupport.prototype.bc2sc.__argnames__) Object.defineProperties(WhiteSupport.prototype.bc2sc, {
            __argnames__ : {value: ["bc"]}
        });
        WhiteSupport.prototype.sc2bc = function sc2bc(sc) {
            var self = this;
            var sw, cw, TEMP_SOFT_WHITE, TEMP_COLD_UP, TEMP_SOFT_COLD, TEMP_SOFT_LOW, TEMP_COLD_WHITE, c, b, bc;
            sw = sc.s;
            cw = sc.c;
            TEMP_SOFT_WHITE = 370;
            TEMP_COLD_UP = 300;
            TEMP_SOFT_COLD = 260;
            TEMP_SOFT_LOW = 220;
            TEMP_COLD_WHITE = 200;
            if (sw > 0) {
                if (cw > 0) {
                    c = TEMP_SOFT_COLD;
                    b = (sw + cw) / 2;
                } else {
                    c = TEMP_SOFT_WHITE;
                    b = sw;
                }
            } else if (cw > 0) {
                c = TEMP_COLD_WHITE;
                b = cw;
            } else {
                c = 50;
                b = 0;
            }
            b /= 255 * 100;
            bc = (function(){
                var ρσ_d = {};
                ρσ_d["b"] = Math.round(b);
                ρσ_d["c"] = c;
                return ρσ_d;
            }).call(this);
            return bc;
        };
        if (!WhiteSupport.prototype.sc2bc.__argnames__) Object.defineProperties(WhiteSupport.prototype.sc2bc, {
            __argnames__ : {value: ["sc"]}
        });
        WhiteSupport.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WhiteSupport.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(WhiteSupport.prototype, "__bases__", {value: []});
        

        function ColorTemperature() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ColorTemperature.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ColorTemperature, Base);
        ColorTemperature.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        ColorTemperature.prototype.add_to = function add_to(service) {
            var self = this;
            var c;
            c = Base.prototype.add_to.call(self, service);
            if (c !== null) {
                c.format = "uint32";
            }
            return c;
        };
        if (!ColorTemperature.prototype.add_to.__argnames__) Object.defineProperties(ColorTemperature.prototype.add_to, {
            __argnames__ : {value: ["service"]}
        });
        ColorTemperature.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_SOFT_WHITE, COLOR_COLD_WHITE, dev, col;
            self.name = "ColorTemperature";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            self.target = null;
            COLOR_SOFT_WHITE = 0;
            COLOR_COLD_WHITE = 1;
            self.colors = ρσ_list_decorate([ COLOR_SOFT_WHITE, COLOR_COLD_WHITE ]);
            self.onTarget = (function() {
                var ρσ_anonfunc = function (target) {
                    var item;
                    out(self.name + "#" + self.id + " - onTarget: ", target);
                    if (self.target === null) {
                        self.target = self.sc2bc(self.sc);
                    }
                    var ρσ_Iter0 = ρσ_Iterable(target);
                    for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                        item = ρσ_Iter0[ρσ_Index0];
                        (ρσ_expr_temp = self.target)[(typeof item === "number" && item < 0) ? ρσ_expr_temp.length + item : item] = target[(typeof item === "number" && item < 0) ? target.length + item : item];
                    }
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["target"]}
                });
                return ρσ_anonfunc;
            })();
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                var ρσ_Iter1 = ρσ_Iterable(self.colors);
                for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                    col = ρσ_Iter1[ρσ_Index1];
                    
                }
                c = self.service.addCharacteristic(HomeKit.Characteristics.ColorTemperature, "uint16", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var bc;
                        if (self.target === null) {
                            bc = self.sc2bc(self.sc);
                        } else {
                            bc = self.target;
                        }
                        return bc.c;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var emit, sc, cols;
                            if (self.target === null) {
                                self.target = self.sc2bc(self.sc);
                            }
                            self.target.c = value;
                            emit = {};
                            emit["c"] = value;
                            self.bridge.controller.emit("B4KT:WHITE:" + self.id, emit);
                            sc = self.bc2sc(self.target);
                            out(self.name, self.colors, self.target, sc);
                            cols = _.range(9);
                            cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                            cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                            self.service.SetMultiple(_.range(9), cols, 0);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.bridge.controller.on("B4KT:WHITE:" + self.id, self.onTarget);
            }
            return c;
        };
        ColorTemperature.prototype.remove = function remove() {
            var self = this;
            var col;
            if (_.isObject(self.vDev) && ρσ_equals(self.vDev.get("deviceType"), "switchRGBW")) {
                var ρσ_Iter2 = ρσ_Iterable(self.colors);
                for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                    col = ρσ_Iter2[ρσ_Index2];
                    
                }
                self.bridge.controller.off("B4KT:WHITE:" + self.id, self.onTarget);
                if (_.isFunction(self.reset_target) && _.isFunction(self.reset_target.cancel)) {
                    self.reset_target.cancel();
                }
            }
            Base.prototype.remove.call(self);
        };
        ColorTemperature.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ColorTemperature.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ColorTemperature.prototype, "__bases__", {value: [Base, WhiteSupport]});
        ρσ_mixin(ColorTemperature, WhiteSupport);

        function Brightness() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Brightness.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Brightness, Base);
        Brightness.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Brightness.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_SOFT_WHITE, COLOR_COLD_WHITE, dev;
            self.name = "Brightness";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_SOFT_WHITE = 0;
            COLOR_COLD_WHITE = 1;
            self.colors = ρσ_list_decorate([ COLOR_SOFT_WHITE, COLOR_COLD_WHITE ]);
            self.onTarget = (function() {
                var ρσ_anonfunc = function (target) {
                    var item;
                    if (self.target === null) {
                        self.target = self.sc2bc(self.sc);
                    }
                    var ρσ_Iter3 = ρσ_Iterable(target);
                    for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                        item = ρσ_Iter3[ρσ_Index3];
                        (ρσ_expr_temp = self.target)[(typeof item === "number" && item < 0) ? ρσ_expr_temp.length + item : item] = target[(typeof item === "number" && item < 0) ? target.length + item : item];
                    }
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["target"]}
                });
                return ρσ_anonfunc;
            })();
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                c = self.service.addCharacteristic(HomeKit.Characteristics.Brightness, "int", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var bc;
                        if (self.target === null) {
                            bc = self.sc2bc(self.sc);
                        } else {
                            bc = self.target;
                        }
                        return bc.b;
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var emit, sc, cols;
                            if (self.target === null) {
                                self.target = self.sc2bc(self.sc);
                            }
                            self.target.b = value;
                            emit = {};
                            emit["b"] = value;
                            self.bridge.controller.emit("B4KT:WHITE:" + self.id, emit);
                            sc = self.bc2sc(self.target);
                            cols = _.range(9);
                            cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                            cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                            self.service.SetMultiple(_.range(9), cols, 0);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.bridge.controller.on("B4KT:WHITE:" + self.id, self.onTarget);
            }
            return c;
        };
        Brightness.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev) && ρσ_equals(self.vDev.get("deviceType"), "switchRGBW")) {
                self.bridge.controller.off("B4KT:WHITE:" + self.id, self.onTarget);
                if (_.isFunction(self.reset_target) && _.isFunction(self.reset_target.cancel)) {
                    self.reset_target.cancel();
                }
            }
            Base.prototype.remove.call(self);
        };
        Brightness.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Brightness.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Brightness.prototype, "__bases__", {value: [Base, WhiteSupport]});
        ρσ_mixin(Brightness, WhiteSupport);

        function On() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            On.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(On, Base);
        On.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Base.prototype.__init__.call(self, bridge4kt, id);
            WhiteSupport.prototype.__init__.call(self);
            self.name = "On";
            self.type = HomeKit.Characteristics.On;
            self.format = "bool";
            self.bc = "b";
        };
        if (!On.prototype.__init__.__argnames__) Object.defineProperties(On.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        On.__argnames__ = On.prototype.__init__.__argnames__;
        On.__handles_kwarg_interpolation__ = On.prototype.__init__.__handles_kwarg_interpolation__;
        On.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_SOFT_WHITE, COLOR_COLD_WHITE, dev, col;
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_SOFT_WHITE = 0;
            COLOR_COLD_WHITE = 1;
            self.colors = ρσ_list_decorate([ COLOR_SOFT_WHITE, COLOR_COLD_WHITE ]);
            self.onTarget = (function() {
                var ρσ_anonfunc = function (target) {
                    var item;
                    if (self.target === null) {
                        self.target = self.sc2bc(self.sc);
                    }
                    var ρσ_Iter4 = ρσ_Iterable(target);
                    for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                        item = ρσ_Iter4[ρσ_Index4];
                        (ρσ_expr_temp = self.target)[(typeof item === "number" && item < 0) ? ρσ_expr_temp.length + item : item] = target[(typeof item === "number" && item < 0) ? target.length + item : item];
                    }
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["target"]}
                });
                return ρσ_anonfunc;
            })();
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                var ρσ_Iter5 = ρσ_Iterable(self.colors);
                for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                    col = ρσ_Iter5[ρσ_Index5];
                    
                }
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var bc;
                        if (self.target === null) {
                            bc = self.sc2bc(self.sc);
                            return bc[ρσ_bound_index(self.bc, bc)] > 0;
                        } else {
                            return (ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)] > 0;
                        }
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var emit, sc, cols;
                            if (self.target === null) {
                                self.target = self.sc2bc(self.sc);
                            }
                            if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1)) || (value === true || typeof value === "object" && ρσ_equals(value, true)) || (value === "1" || typeof value === "object" && ρσ_equals(value, "1"))) {
                                if ((ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)] > 0) {
                                    return;
                                }
                                value = 100;
                            } else if ((value === 0 || typeof value === "object" && ρσ_equals(value, 0)) || (value === false || typeof value === "object" && ρσ_equals(value, false)) || (value === "0" || typeof value === "object" && ρσ_equals(value, "0"))) {
                                if (((ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)] === 0 || typeof (ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)] === "object" && ρσ_equals((ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)], 0))) {
                                    return;
                                }
                                value = 0;
                            } else {
                                return;
                            }
                            (ρσ_expr_temp = self.target)[ρσ_bound_index(self.bc, ρσ_expr_temp)] = value;
                            emit = {};
                            emit[ρσ_bound_index(self.bc, emit)] = value;
                            self.bridge.controller.emit("B4KT:WHITE:" + self.id, emit);
                            sc = self.bc2sc(self.target);
                            cols = _.range(9);
                            cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                            cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                            self.service.SetMultiple(_.range(9), cols, 0);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.bridge.controller.on("B4KT:WHITE:" + self.id, self.onTarget);
            }
            return c;
        };
        On.prototype.remove = function remove() {
            var self = this;
            var col;
            if (_.isObject(self.vDev)) {
                var ρσ_Iter6 = ρσ_Iterable(self.colors);
                for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                    col = ρσ_Iter6[ρσ_Index6];
                    
                }
                self.bridge.controller.off("B4KT:WHITE:" + self.id, self.onTarget);
                if (_.isFunction(self.reset_target) && _.isFunction(self.reset_target.cancel)) {
                    self.reset_target.cancel();
                }
            }
            Base.prototype.remove.call(self);
        };
        On.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        On.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(On.prototype, "__bases__", {value: [Base, WhiteSupport]});
        ρσ_mixin(On, WhiteSupport);

        function Identify() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Identify.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Identify, Base);
        Identify.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Base.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Identify";
            self.type = HomeKit.Characteristics.Identify;
            self.format = "bool";
            self.bc = "b";
        };
        if (!Identify.prototype.__init__.__argnames__) Object.defineProperties(Identify.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Identify.__argnames__ = Identify.prototype.__init__.__argnames__;
        Identify.__handles_kwarg_interpolation__ = Identify.prototype.__init__.__handles_kwarg_interpolation__;
        Identify.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, COLOR_SOFT_WHITE, COLOR_COLD_WHITE, dev;
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchRGBW";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            COLOR_SOFT_WHITE = 0;
            COLOR_COLD_WHITE = 1;
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                dev = devices.create(self.vDev);
                self.cc = dev.commandClass;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var status, original, sc, cols;
                            if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1)) || (value === true || typeof value === "object" && ρσ_equals(value, true)) || (value === "1" || typeof value === "object" && ρσ_equals(value, "1"))) {
                                status = self.sc2bc(self.sc);
                                original = status[ρσ_bound_index(self.bc, status)];
                                status[ρσ_bound_index(self.bc, status)] = 100;
                                sc = self.bc2sc(status);
                                cols = self.fill(9, 0);
                                cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                                cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                                self.cc.SetMultiple(_.range(9), cols, 0, _.delay(function () {
                                    var sc, cols;
                                    status[ρσ_bound_index(self.bc, status)] = 0;
                                    sc = self.bc2sc(status);
                                    cols = self.fill(9, 0);
                                    cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                                    cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                                    self.cc.SetMultiple(_.range(9), cols, 0, _.delay(function () {
                                        var sc, cols;
                                        status[ρσ_bound_index(self.bc, status)] = original;
                                        sc = self.bc2sc(status);
                                        cols = self.fill(9, 0);
                                        cols[(typeof COLOR_SOFT_WHITE === "number" && COLOR_SOFT_WHITE < 0) ? cols.length + COLOR_SOFT_WHITE : COLOR_SOFT_WHITE] = sc.s;
                                        cols[(typeof COLOR_COLD_WHITE === "number" && COLOR_COLD_WHITE < 0) ? cols.length + COLOR_COLD_WHITE : COLOR_COLD_WHITE] = sc.c;
                                        self.cc.SetMultiple(_.range(9), cols, 0);
                                    }, 1500));
                                }, 1500));
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            } else {
                self.vDev = -1;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            return false;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        Identify.prototype.remove = function remove() {
            var self = this;
            Base.prototype.remove.call(self);
        };
        Identify.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Identify.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Identify.prototype, "__bases__", {value: [Base, WhiteSupport]});
        ρσ_mixin(Identify, WhiteSupport);

        ρσ_modules["characteristics.lightbulb.white"].WhiteSupport = WhiteSupport;
        ρσ_modules["characteristics.lightbulb.white"].ColorTemperature = ColorTemperature;
        ρσ_modules["characteristics.lightbulb.white"].Brightness = Brightness;
        ρσ_modules["characteristics.lightbulb.white"].On = On;
        ρσ_modules["characteristics.lightbulb.white"].Identify = Identify;
    })();

    (function(){
        var __name__ = "characteristics.motor";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        var devices = ρσ_modules.devices;

        function SlatSupport() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SlatSupport.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SlatSupport, Base);
        SlatSupport.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.rangeMax = null;
            self.rangeMin = null;
            Base.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!SlatSupport.prototype.__init__.__argnames__) Object.defineProperties(SlatSupport.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        SlatSupport.__argnames__ = SlatSupport.prototype.__init__.__argnames__;
        SlatSupport.__handles_kwarg_interpolation__ = SlatSupport.prototype.__init__.__handles_kwarg_interpolation__;
        SlatSupport.prototype.map_zway_to_hk = function map_zway_to_hk(value) {
            var self = this;
            var t, range;
            if (self.vDev === null) {
                return Math.round(180 / 99 * value - 90);
            }
            if (self.rangeMax === null || self.rangeMin === null) {
                t = self.vDev.get("tags");
                if ((typeof t !== "undefined" && t !== null)) {
                    if (ρσ_in("B4KT:Slat:Minus90", t)) {
                        self.rangeMin = -90;
                        self.rangeMax = 0;
                    } else if (ρσ_in("B4KT:Slat:Plus90", t)) {
                        self.rangeMin = 0;
                        self.rangeMax = 90;
                    } else {
                        self.rangeMin = -90;
                        self.rangeMax = 90;
                    }
                }
            }
            range = self.rangeMax - self.rangeMin;
            return Math.round(range / 99 * value + self.rangeMin);
        };
        if (!SlatSupport.prototype.map_zway_to_hk.__argnames__) Object.defineProperties(SlatSupport.prototype.map_zway_to_hk, {
            __argnames__ : {value: ["value"]}
        });
        SlatSupport.prototype.map_hk_to_zway = function map_hk_to_zway(position) {
            var self = this;
            var t, range;
            if (self.vDev === null) {
                return Math.round((position + 90) * (99 / 180));
            }
            if (self.rangeMax === null || self.rangeMin === null) {
                t = self.vDev.get("tags");
                if ((typeof t !== "undefined" && t !== null)) {
                    if (ρσ_in("B4KT:Slat:Minus90", t)) {
                        self.rangeMin = -90;
                        self.rangeMax = 0;
                    } else if (ρσ_in("B4KT:Slat:Plus90", t)) {
                        self.rangeMin = 0;
                        self.rangeMax = 90;
                    } else {
                        self.rangeMin = -90;
                        self.rangeMax = 90;
                    }
                }
            }
            position = Math.min(self.rangeMax, position);
            position = Math.max(self.rangeMin, position);
            range = self.rangeMax - self.rangeMin;
            return Math.round((position - self.rangeMin) * (99 / range));
        };
        if (!SlatSupport.prototype.map_hk_to_zway.__argnames__) Object.defineProperties(SlatSupport.prototype.map_hk_to_zway, {
            __argnames__ : {value: ["position"]}
        });
        SlatSupport.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SlatSupport.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SlatSupport.prototype, "__bases__", {value: [Base]});

        function CurrentPositionB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentPositionB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentPositionB, Base);
        CurrentPositionB.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CurrentPositionB.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Current Position B";
            c = null;
            self.vDev = null;
            self.latest_status = 2;
            self.position = 0;
            self.onStatus = (function() {
                var ρσ_anonfunc = function (status) {
                    var current;
                    if (_.isObject(self.vDev)) {
                        current = self.vDev.get("metrics:level");
                    } else {
                        current = 50;
                    }
                    if ((status === 0 || typeof status === "object" && ρσ_equals(status, 0)) || (status === 1 || typeof status === "object" && ρσ_equals(status, 1))) {
                        self.position = current;
                    } else if ((status === 2 || typeof status === "object" && ρσ_equals(status, 2))) {
                        if (_.isObject(self.vDev)) {
                            self.position = current;
                        } else {
                            if ((self.latest_status === 0 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 0))) {
                                self.position = 0;
                            } else if ((self.latest_status === 1 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 1))) {
                                self.position = 255;
                            }
                        }
                    } else if ((status === 3 || typeof status === "object" && ρσ_equals(status, 3))) {
                        self.position = current;
                    }
                    self.latest_status = status;
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["status"]}
                });
                return ρσ_anonfunc;
            })();
            self.onPosition = function () {
                self.position = self.vDev.get("metrics:level");
                if ((self.position === 254 || typeof self.position === "object" && ρσ_equals(self.position, 254))) {
                    self.position = 50;
                }
                self.onLevelChange();
            };
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = "motor";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if (d !== null) {
                self.vDev = d;
                self.position = self.vDev.get("metrics:level");
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentPosition, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.map_zway_to_hk(self.position);
                    };
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onPosition);
            }
            return c;
        };
        CurrentPositionB.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onPosition);
            }
            Base.prototype.remove.call(self);
        };
        CurrentPositionB.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentPositionB.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentPositionB.prototype, "__bases__", {value: [Base]});

        function CurrentPositionC() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentPositionC.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentPositionC, Base);
        CurrentPositionC.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CurrentPositionC.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Current Position C";
            c = null;
            self.vDev = null;
            self.latest_status = 2;
            self.position = 0;
            self.onStatus = (function() {
                var ρσ_anonfunc = function (status) {
                    if (_.isObject(self.vDev)) {
                        self.position = self.vDev.get("metrics:level");
                    } else {
                        if ((status === 0 || typeof status === "object" && ρσ_equals(status, 0)) || (status === 1 || typeof status === "object" && ρσ_equals(status, 1))) {
                            self.position = 50;
                        } else if ((status === 2 || typeof status === "object" && ρσ_equals(status, 2))) {
                            if ((self.latest_status === 0 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 0))) {
                                self.position = 0;
                            } else if ((self.latest_status === 1 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 1))) {
                                self.position = 255;
                            }
                        } else if ((status === 3 || typeof status === "object" && ρσ_equals(status, 3))) {
                            self.position = 50;
                        }
                    }
                    self.latest_status = status;
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["status"]}
                });
                return ρσ_anonfunc;
            })();
            self.onPosition = function () {
                self.position = self.vDev.get("metrics:level");
                self.onLevelChange();
            };
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = "motor";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentPosition, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.map_zway_to_hk(self.position);
                    };
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onPosition);
            }
            self.bridge.controller.on("B4KT:PositionState:" + self.id, self.onStatus);
            return c;
        };
        CurrentPositionC.prototype.remove = function remove() {
            var self = this;
            self.bridge.controller.off("B4KT:PositionState:" + self.id, self.onStatus);
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onPosition);
            }
            Base.prototype.remove.call(self);
        };
        CurrentPositionC.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentPositionC.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentPositionC.prototype, "__bases__", {value: [Base]});

        function CurrentPositionSimple() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentPositionSimple.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentPositionSimple, Base);
        CurrentPositionSimple.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CurrentPositionSimple.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "Current Position Simple";
            c = null;
            self.vDev = -1;
            self.latest_status = 2;
            self.position = 0;
            self.onStatus = (function() {
                var ρσ_anonfunc = function (status) {
                    if ((status === 0 || typeof status === "object" && ρσ_equals(status, 0)) || (status === 1 || typeof status === "object" && ρσ_equals(status, 1))) {
                        self.position = 50;
                    } else if ((status === 2 || typeof status === "object" && ρσ_equals(status, 2))) {
                        if ((self.latest_status === 0 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 0))) {
                            self.position = 0;
                        } else if ((self.latest_status === 1 || typeof self.latest_status === "object" && ρσ_equals(self.latest_status, 1))) {
                            self.position = 255;
                        }
                    } else if ((status === 3 || typeof status === "object" && ρσ_equals(status, 3))) {
                        self.position = 50;
                    }
                    self.latest_status = status;
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["status"]}
                });
                return ρσ_anonfunc;
            })();
            self.bridge.controller.on("B4KT:PositionState:" + self.id, self.onStatus);
            c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentPosition, "uint8", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    return self.map_zway_to_hk(self.position);
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        CurrentPositionSimple.prototype.remove = function remove() {
            var self = this;
            self.bridge.controller.off("B4KT:PositionState:" + self.id, self.onStatus);
            Base.prototype.remove.call(self);
        };
        CurrentPositionSimple.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentPositionSimple.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentPositionSimple.prototype, "__bases__", {value: [Base]});

        function CurrentSlatState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentSlatState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentSlatState, Base);
        CurrentSlatState.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CurrentSlatState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            self.name = "Current Slat State";
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = ρσ_list_decorate([ "B4KT:Slat:Horizontal", "B4KT:Slat:Vertical" ]);
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentSlatState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var check, t;
                        check = "B4KT:Slat:Swing";
                        t = self.vDev.get("tags");
                        if ((typeof t !== "undefined" && t !== null)) {
                            if (_.isArray(t)) {
                                return (ρσ_in(check, t)) ? 2 : 0;
                            } else {
                                return ((t === check || typeof t === "object" && ρσ_equals(t, check))) ? 2 : 0;
                            }
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        CurrentSlatState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentSlatState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentSlatState.prototype, "__bases__", {value: [Base]});

        function CurrentTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentTiltAngle, SlatSupport);
        CurrentTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            SlatSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Current Tilt Angle";
            self.type = HomeKit.Characteristics.CurrentTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
        };
        if (!CurrentTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(CurrentTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CurrentTiltAngle.__argnames__ = CurrentTiltAngle.prototype.__init__.__argnames__;
        CurrentTiltAngle.__handles_kwarg_interpolation__ = CurrentTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        CurrentTiltAngle.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, pT;
            c = null;
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                pT = d.get("deviceType");
                if ((pT === "switchMultilevel" || typeof pT === "object" && ρσ_equals(pT, "switchMultilevel"))) {
                    self.vDev = d;
                    c = self.service.addCharacteristic(self.type, "int", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            return self.map_zway_to_hk(self.vDev.get("metrics:level"));
                        };
                        return ρσ_d;
                    }).call(this));
                    self.vDev.on("change:metrics:level", self.onLevelChange);
                }
            }
            return c;
        };
        CurrentTiltAngle.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onLevelChange);
            }
            SlatSupport.prototype.remove.call();
        };
        CurrentTiltAngle.prototype.__repr__ = function __repr__ () {
            if(SlatSupport.prototype.__repr__) return SlatSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentTiltAngle.prototype.__str__ = function __str__ () {
            if(SlatSupport.prototype.__str__) return SlatSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentTiltAngle.prototype, "__bases__", {value: [SlatSupport]});

        function CurrentHorizontalTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentHorizontalTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentHorizontalTiltAngle, CurrentTiltAngle);
        CurrentHorizontalTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            CurrentTiltAngle.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Current Horizontal Tilt Angle";
            self.type = HomeKit.Characteristics.CurrentHorizontalTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = "B4KT:Slat:Horizontal";
                return ρσ_d;
            }).call(this);
        };
        if (!CurrentHorizontalTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(CurrentHorizontalTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CurrentHorizontalTiltAngle.__argnames__ = CurrentHorizontalTiltAngle.prototype.__init__.__argnames__;
        CurrentHorizontalTiltAngle.__handles_kwarg_interpolation__ = CurrentHorizontalTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        CurrentHorizontalTiltAngle.prototype.__repr__ = function __repr__ () {
            if(CurrentTiltAngle.prototype.__repr__) return CurrentTiltAngle.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentHorizontalTiltAngle.prototype.__str__ = function __str__ () {
            if(CurrentTiltAngle.prototype.__str__) return CurrentTiltAngle.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentHorizontalTiltAngle.prototype, "__bases__", {value: [CurrentTiltAngle]});

        function CurrentVerticalTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentVerticalTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentVerticalTiltAngle, CurrentTiltAngle);
        CurrentVerticalTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            CurrentTiltAngle.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Current Vertical Tilt Angle";
            self.type = HomeKit.Characteristics.CurrentVerticalTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = "B4KT:Slat:Vertical";
                return ρσ_d;
            }).call(this);
        };
        if (!CurrentVerticalTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(CurrentVerticalTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CurrentVerticalTiltAngle.__argnames__ = CurrentVerticalTiltAngle.prototype.__init__.__argnames__;
        CurrentVerticalTiltAngle.__handles_kwarg_interpolation__ = CurrentVerticalTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        CurrentVerticalTiltAngle.prototype.__repr__ = function __repr__ () {
            if(CurrentTiltAngle.prototype.__repr__) return CurrentTiltAngle.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentVerticalTiltAngle.prototype.__str__ = function __str__ () {
            if(CurrentTiltAngle.prototype.__str__) return CurrentTiltAngle.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentVerticalTiltAngle.prototype, "__bases__", {value: [CurrentTiltAngle]});

        function HoldPosition() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            HoldPosition.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(HoldPosition, Base);
        HoldPosition.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        HoldPosition.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "Hold Position";
            c = null;
            self.vDev = -1;
            self.commandClass = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)].instances[0].commandClasses[38];
            if (ρσ_exists.n(self.commandClass.StopLevelChange)) {
                c = self.service.addCharacteristic(HomeKit.Characteristics.HoldPosition, "bool", (function(){
                    var ρσ_d = {};
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            value = ((value === true || typeof value === "object" && ρσ_equals(value, true))) ? 1 : 0;
                            if ((value === 1 || typeof value === "object" && ρσ_equals(value, 1))) {
                                out("HoldPosition");
                                self.commandClass.StopLevelChange();
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        HoldPosition.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        HoldPosition.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(HoldPosition.prototype, "__bases__", {value: [Base]});

        function PositionState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            PositionState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(PositionState, Base);
        PositionState.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        PositionState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "Position State";
            c = null;
            self.vDev = -1;
            self.status = 2;
            self.onStatus = (function() {
                var ρσ_anonfunc = function (status) {
                    if (status > 2) {
                        status = 2;
                    }
                    self.status = status;
                    self.onLevelChange();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["status"]}
                });
                return ρσ_anonfunc;
            })();
            self.bridge.controller.on("B4KT:PositionState:" + self.id, self.onStatus);
            c = self.service.addCharacteristic(HomeKit.Characteristics.PositionState, "uint8", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    return self.status;
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        PositionState.prototype.remove = function remove() {
            var self = this;
            self.bridge.controller.off("B4KT:PositionState:" + self.id, self.onStatus);
            Base.prototype.remove.call(self);
        };
        PositionState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        PositionState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(PositionState.prototype, "__bases__", {value: [Base]});

        function SlatType() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SlatType.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SlatType, Base);
        SlatType.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        SlatType.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            self.name = "Slat Type";
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = ρσ_list_decorate([ "B4KT:Slat:Horizontal", "B4KT:Slat:Vertical" ]);
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.SlatType, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var check, t;
                        check = "B4KT:Slat:Vertical";
                        t = self.vDev.get("tags");
                        if ((typeof t !== "undefined" && t !== null)) {
                            if (_.isArray(t)) {
                                return (ρσ_in(check, t)) ? 1 : 0;
                            } else {
                                return ((t === check || typeof t === "object" && ρσ_equals(t, check))) ? 1 : 0;
                            }
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        SlatType.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SlatType.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SlatType.prototype, "__bases__", {value: [Base]});

        function SwingMode() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SwingMode.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SwingMode, Base);
        SwingMode.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        SwingMode.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            self.name = "Swing Mode";
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = ρσ_list_decorate([ "B4KT:Slat:Horizontal", "B4KT:Slat:Vertical" ]);
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.CurrentSlatState, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var check, t;
                        check = "B4KT:Slat:Swing";
                        t = self.vDev.get("tags");
                        if ((typeof t !== "undefined" && t !== null)) {
                            if (_.isArray(t)) {
                                return (ρσ_in(check, t)) ? 1 : 0;
                            } else {
                                return ((t === check || typeof t === "object" && ρσ_equals(t, check))) ? 1 : 0;
                            }
                        }
                        return 0;
                    };
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        SwingMode.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SwingMode.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SwingMode.prototype, "__bases__", {value: [Base]});

        function TargetPositionA() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetPositionA.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetPositionA, Base);
        TargetPositionA.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetPositionA.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Target Position";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                self.target = 0;
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetPosition, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var t;
                        t = ((self.target === 0 || typeof self.target === "object" && ρσ_equals(self.target, 0))) ? 255 : 0;
                        return self.map_zway_to_hk(t);
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var d;
                            d = devices.create(self.vDev);
                            if ((typeof d !== "undefined" && d !== null)) {
                                if ((value === 0 || typeof value === "object" && ρσ_equals(value, 0)) || (value === 100 || typeof value === "object" && ρσ_equals(value, 100))) {
                                    if ((value === 0 || typeof value === "object" && ρσ_equals(value, 0))) {
                                        d.commandClass.StopLevelChange(function () {
                                            self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                        });
                                    } else {
                                        self.target = ((self.target === 1 || typeof self.target === "object" && ρσ_equals(self.target, 1))) ? 0 : 1;
                                        d.commandClass.StartLevelChange(self.target, function () {
                                            self.bridge.controller.emit("B4KT:PositionState:" + self.id, self.target ^ 1);
                                        });
                                    }
                                    return;
                                }
                                if (value >= 50) {
                                    self.target = 0;
                                    d.commandClass.StartLevelChange(0, function () {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 1);
                                    });
                                } else if (value < 50) {
                                    self.target = 1;
                                    d.commandClass.StartLevelChange(1, function () {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 0);
                                    });
                                }
                                setTimeout(function () {
                                    [self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2), 20];
                                });
                            }
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
            }
            return c;
        };
        TargetPositionA.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetPositionA.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetPositionA.prototype, "__bases__", {value: [Base]});

        function TargetPositionB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetPositionB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetPositionB, Base);
        TargetPositionB.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetPositionB.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Target Position";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if (d !== null) {
                self.vDev = d;
                self.target = null;
                self.display = self.vDev.get("metrics:level");
                self.trigger = null;
                self.set_level = _.debounce((function() {
                    var ρσ_anonfunc = function (target) {
                        var dev;
                        dev = devices.create(self.vDev);
                        if ((typeof dev !== "undefined" && dev !== null)) {
                            dev.commandClass.StopLevelChange(function () {
                                self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                dev.commandClass.Get(function () {
                                    var current;
                                    current = dev.commandClass.data.level.value;
                                    dev.commandClass.Set(target, 255, function () {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, (current > target) ? 0 : 1);
                                    });
                                });
                            });
                        }
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["target"]}
                    });
                    return ρσ_anonfunc;
                })(), 500);
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetPosition, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.map_zway_to_hk(self.display);
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var current, dev;
                            current = self.vDev.get("metrics:level");
                            if (0 < value && value < 100) {
                                self.target = self.display = self.map_hk_to_zway(value);
                                self.set_level(self.target);
                            }
                            if (self.trigger === null) {
                                self.display = self.map_hk_to_zway(value);
                                self.trigger = _.delay(function () {
                                    var dev;
                                    self.trigger = null;
                                    self.target = self.display;
                                    dev = devices.create(self.vDev);
                                    if ((typeof dev !== "undefined" && dev !== null)) {
                                        dev.commandClass.StopLevelChange(function () {
                                            self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                            dev.commandClass.Get(function () {
                                                var current;
                                                current = self.vDev.get("metrics:level");
                                                dev.commandClass.Set(self.target, 255, function () {
                                                    self.bridge.controller.emit("B4KT:PositionState:" + self.id, (current > self.target) ? 0 : 1);
                                                });
                                            });
                                        });
                                    }
                                }, 500);
                            } else {
                                clearTimeout(self.trigger);
                                self.trigger = null;
                                dev = devices.create(self.vDev);
                                if ((typeof dev !== "undefined" && dev !== null)) {
                                    dev.commandClass.StopLevelChange(function () {
                                        self.target = null;
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                        dev.commandClass.Get(function () {
                                            self.display = self.vDev.get("metrics:level");
                                        });
                                    });
                                }
                            }
                            return;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.onPosition = function () {
                    var current;
                    current = self.vDev.get("metrics:level");
                    if ((self.target === null || typeof self.target === "object" && ρσ_equals(self.target, null))) {
                        self.display = current;
                    } else if ((self.target === current || typeof self.target === "object" && ρσ_equals(self.target, current))) {
                        self.target = null;
                        self.display = current;
                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                    }
                    self.onLevelChange();
                };
                self.vDev.on("change:metrics:level", self.onPosition);
            }
            return c;
        };
        TargetPositionB.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onPosition);
            }
        };
        TargetPositionB.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetPositionB.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetPositionB.prototype, "__bases__", {value: [Base]});

        function TargetPositionC() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetPositionC.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetPositionC, Base);
        TargetPositionC.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetPositionC.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Target Position";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                self.target = null;
                self.display = self.vDev.get("metrics:level");
                self.trigger = null;
                self.set_level = _.debounce((function() {
                    var ρσ_anonfunc = function (target) {
                        var dev;
                        dev = devices.create(self.vDev);
                        if ((typeof dev !== "undefined" && dev !== null)) {
                            dev.commandClass.StopLevelChange(function () {
                                self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                dev.commandClass.Get(function () {
                                    var current;
                                    current = dev.commandClass.data.level.value;
                                    dev.commandClass.Set(target, 255, function () {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, (current > target) ? 0 : 1);
                                    });
                                });
                            });
                        }
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["target"]}
                    });
                    return ρσ_anonfunc;
                })(), 1e3);
                c = self.service.addCharacteristic(HomeKit.Characteristics.TargetPosition, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        out("** Get: => Display: " + self.display + " / Target: " + self.target);
                        return self.map_zway_to_hk(self.display);
                    };
                    ρσ_d["set"] = (function() {
                        var ρσ_anonfunc = function (value) {
                            var current, dev;
                            current = self.vDev.get("metrics:level");
                            if (0 < value && value < 100) {
                                self.target = self.display = self.map_hk_to_zway(value);
                                out("** SetA: => Current: " + current + " / Display: " + self.display + " / Target: " + self.target);
                                self.set_level(self.target);
                                return;
                            }
                            if (self.trigger === null) {
                                self.display = self.map_hk_to_zway(value);
                                self.trigger = _.delay(function () {
                                    var dev;
                                    self.trigger = null;
                                    self.target = self.display;
                                    dev = devices.create(self.vDev);
                                    if ((typeof dev !== "undefined" && dev !== null)) {
                                        dev.commandClass.StopLevelChange(function () {
                                            self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                            dev.commandClass.Get(function () {
                                                var current, direction;
                                                current = self.vDev.get("metrics:level");
                                                out("** SetB: => Current: " + current + " / Display: " + self.display + " / Target: " + self.target);
                                                if ((current !== self.target && (typeof current !== "object" || ρσ_not_equals(current, self.target)))) {
                                                    direction = (self.target > current) ? 0 : 1;
                                                    dev.commandClass.StartLevelChange(direction, 0, true, 50, 0, 10, function () {
                                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, (current > self.target) ? 0 : 1);
                                                    });
                                                }
                                            });
                                        });
                                    }
                                }, 500);
                            } else {
                                clearTimeout(self.trigger);
                                self.trigger = null;
                                dev = devices.create(self.vDev);
                                if ((typeof dev !== "undefined" && dev !== null)) {
                                    dev.commandClass.StopLevelChange(function () {
                                        self.target = null;
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                        dev.commandClass.Get(function () {
                                            self.display = self.vDev.get("metrics:level");
                                            out("** SetClear: => Current: " + current + " / Display: " + self.display + " / Target: " + self.target);
                                        });
                                    });
                                }
                            }
                            return;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["value"]}
                        });
                        return ρσ_anonfunc;
                    })();
                    return ρσ_d;
                }).call(this));
                self.onPosition = function () {
                    var current;
                    current = self.vDev.get("metrics:level");
                    out("** => onPosition: Current: " + current + " / Display: " + self.display + " / Target: " + self.target);
                    if (self.target === null) {
                        self.display = current;
                    } else if (abs(self.target - current) < 3) {
                        self.target = null;
                        self.display = current;
                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                    }
                    self.onLevelChange();
                };
                self.vDev.on("change:metrics:level", self.onPosition);
            }
            return c;
        };
        TargetPositionC.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onPosition);
            }
            Base.prototype.remove.call(self);
        };
        TargetPositionC.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetPositionC.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetPositionC.prototype, "__bases__", {value: [Base]});

        function TargetPositionSimple() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetPositionSimple.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetPositionSimple, Base);
        TargetPositionSimple.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        TargetPositionSimple.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, pDev, cc;
            self.name = "Target Position";
            c = null;
            self.get_config = function () {
                var pDev, cc, u1, u2, d1, d2, up, down;
                pDev = new devices.pDevice(self.id);
                if ((typeof pDev !== "undefined" && pDev !== null)) {
                    cc = pDev.commandClass(112);
                    try {
                        u1 = cc.data["177"].val.value;
                        u2 = cc.data["178"].val.value;
                        d1 = cc.data["179"].val.value;
                        d2 = cc.data["180"].val.value;
                    } catch (ρσ_Exception) {
                        ρσ_last_exception = ρσ_Exception;
                        {
                            return;
                        } 
                    }
                    up = (256 * u1 + u2) * .1;
                    down = (256 * d1 + d2) * .1;
                    self.timing = (function(){
                        var ρσ_d = {};
                        ρσ_d["up"] = up;
                        ρσ_d["down"] = down;
                        return ρσ_d;
                    }).call(this);
                }
                return;
            };
            pDev = new devices.pDevice(self.id);
            if ((typeof pDev !== "undefined" && pDev !== null)) {
                cc = pDev.commandClass(32);
                if ((typeof cc !== "undefined" && cc !== null)) {
                    self.commandClass = cc;
                    self.vDev = -1;
                    self.timing = (function(){
                        var ρσ_d = {};
                        ρσ_d["up"] = 20;
                        ρσ_d["down"] = 20;
                        return ρσ_d;
                    }).call(this);
                    cc = pDev.commandClass(112);
                    if ((typeof cc !== "undefined" && cc !== null)) {
                        cc.Get(177);
                        cc.Get(178);
                        cc.Get(179);
                        cc.Get(180, self.get_config);
                    }
                    self.sequence = ρσ_list_decorate([ 0, 255, 255, 0 ]);
                    self.state = 0;
                    self.target = null;
                    self.latest_command = 0;
                    self.latest_travel_start = null;
                    c = self.service.addCharacteristic(HomeKit.Characteristics.TargetPosition, "uint8", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            if (self.target !== null) {
                                return self.map_zway_to_hk(self.target);
                            } else if (self.latest_command !== null) {
                                return self.map_zway_to_hk(self.latest_command);
                            }
                            return 0;
                        };
                        ρσ_d["set"] = (function() {
                            var ρσ_anonfunc = function (value) {
                                var time, delta, compare;
                                time = new Date().getTime();
                                delta = time - self.latest_travel_start;
                                compare = (self.latest_command === 255) ? self.timing.up : self.timing.down;
                                if (delta < compare * 1e3) {
                                    self.state = (self.state + 1) % 4;
                                    self.target = (ρσ_expr_temp = self.sequence)[ρσ_bound_index(self.state, ρσ_expr_temp)];
                                    if ((self.target !== self.latest_command && (typeof self.target !== "object" || ρσ_not_equals(self.target, self.latest_command)))) {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, 3);
                                    } else {
                                        self.bridge.controller.emit("B4KT:PositionState:" + self.id, ((self.target === 255 || typeof self.target === "object" && ρσ_equals(self.target, 255))) ? 1 : 0);
                                        _.delay(function () {
                                            self.target = null;
                                            self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                        }, (((self.target === 255 || typeof self.target === "object" && ρσ_equals(self.target, 255))) ? self.timing.up : self.timing.down) * 1e3);
                                    }
                                    self.commandClass.Set(self.target);
                                    self.latest_command = self.target;
                                    self.latest_travel_start = time;
                                    return;
                                }
                                self.state = (value >= 50) ? 2 : 0;
                                self.target = (ρσ_expr_temp = self.sequence)[ρσ_bound_index(self.state, ρσ_expr_temp)];
                                self.latest_command = self.target;
                                self.bridge.controller.emit("B4KT:PositionState:" + self.id, ((self.target === 255 || typeof self.target === "object" && ρσ_equals(self.target, 255))) ? 1 : 0);
                                self.commandClass.Set(self.target);
                                _.delay(function () {
                                    self.target = null;
                                    self.bridge.controller.emit("B4KT:PositionState:" + self.id, 2);
                                }, (((self.target === 255 || typeof self.target === "object" && ρσ_equals(self.target, 255))) ? self.timing.up : self.timing.down) * 1e3);
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["value"]}
                            });
                            return ρσ_anonfunc;
                        })();
                        return ρσ_d;
                    }).call(this));
                }
            }
            return c;
        };
        TargetPositionSimple.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetPositionSimple.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetPositionSimple.prototype, "__bases__", {value: [Base]});

        function TargetTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetTiltAngle, SlatSupport);
        TargetTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            SlatSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Target Tilt Angle";
            self.type = HomeKit.Characteristics.TargetTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "switchMultilevel";
                return ρσ_d;
            }).call(this);
        };
        if (!TargetTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(TargetTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        TargetTiltAngle.__argnames__ = TargetTiltAngle.prototype.__init__.__argnames__;
        TargetTiltAngle.__handles_kwarg_interpolation__ = TargetTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        TargetTiltAngle.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d, pT;
            c = null;
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                pT = d.get("deviceType");
                if ((pT === "switchMultilevel" || typeof pT === "object" && ρσ_equals(pT, "switchMultilevel"))) {
                    self.vDev = d;
                    self.target = self.display = self.vDev.get("metrics:level");
                    self.performCommand = _.debounce((function() {
                        var ρσ_anonfunc = function (target) {
                            self.vDev.performCommand("exact", (function(){
                                var ρσ_d = {};
                                ρσ_d["level"] = target;
                                return ρσ_d;
                            }).call(this));
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["target"]}
                        });
                        return ρσ_anonfunc;
                    })(), 500);
                    c = self.service.addCharacteristic(self.type, "int", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            return self.map_zway_to_hk(self.display);
                        };
                        ρσ_d["set"] = (function() {
                            var ρσ_anonfunc = function (position) {
                                var v;
                                v = self.map_hk_to_zway(position);
                                self.target = self.display = v;
                                self.performCommand(v);
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["position"]}
                            });
                            return ρσ_anonfunc;
                        })();
                        return ρσ_d;
                    }).call(this));
                    self.onPosition = function () {
                        var current;
                        current = self.vDev.get("metrics:level");
                        if (self.target === null) {
                            self.display = current;
                        } else if ((self.target === current || typeof self.target === "object" && ρσ_equals(self.target, current))) {
                            self.target = null;
                        }
                        self.onLevelChange();
                    };
                    self.vDev.on("change:metrics:level", self.onPosition);
                }
            }
            return c;
        };
        TargetTiltAngle.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onPosition);
            }
            SlatSupport.prototype.remove.call(self);
        };
        TargetTiltAngle.prototype.__repr__ = function __repr__ () {
            if(SlatSupport.prototype.__repr__) return SlatSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetTiltAngle.prototype.__str__ = function __str__ () {
            if(SlatSupport.prototype.__str__) return SlatSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetTiltAngle.prototype, "__bases__", {value: [SlatSupport]});

        function TargetHorizontalTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetHorizontalTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetHorizontalTiltAngle, TargetTiltAngle);
        TargetHorizontalTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            TargetTiltAngle.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Target Horizontal Tilt Angle";
            self.type = HomeKit.Characteristics.TargetHorizontalTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = "B4KT:Slat:Horizontal";
                return ρσ_d;
            }).call(this);
        };
        if (!TargetHorizontalTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(TargetHorizontalTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        TargetHorizontalTiltAngle.__argnames__ = TargetHorizontalTiltAngle.prototype.__init__.__argnames__;
        TargetHorizontalTiltAngle.__handles_kwarg_interpolation__ = TargetHorizontalTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        TargetHorizontalTiltAngle.prototype.__repr__ = function __repr__ () {
            if(TargetTiltAngle.prototype.__repr__) return TargetTiltAngle.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetHorizontalTiltAngle.prototype.__str__ = function __str__ () {
            if(TargetTiltAngle.prototype.__str__) return TargetTiltAngle.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetHorizontalTiltAngle.prototype, "__bases__", {value: [TargetTiltAngle]});

        function TargetVerticalTiltAngle() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TargetVerticalTiltAngle.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TargetVerticalTiltAngle, TargetTiltAngle);
        TargetVerticalTiltAngle.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            TargetTiltAngle.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Target Vertical Tilt Angle";
            self.type = HomeKit.Characteristics.TargetVerticalTiltAngle;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["tags"] = "B4KT:Slat:Vertical";
                return ρσ_d;
            }).call(this);
        };
        if (!TargetVerticalTiltAngle.prototype.__init__.__argnames__) Object.defineProperties(TargetVerticalTiltAngle.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        TargetVerticalTiltAngle.__argnames__ = TargetVerticalTiltAngle.prototype.__init__.__argnames__;
        TargetVerticalTiltAngle.__handles_kwarg_interpolation__ = TargetVerticalTiltAngle.prototype.__init__.__handles_kwarg_interpolation__;
        TargetVerticalTiltAngle.prototype.__repr__ = function __repr__ () {
            if(TargetTiltAngle.prototype.__repr__) return TargetTiltAngle.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TargetVerticalTiltAngle.prototype.__str__ = function __str__ () {
            if(TargetTiltAngle.prototype.__str__) return TargetTiltAngle.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TargetVerticalTiltAngle.prototype, "__bases__", {value: [TargetTiltAngle]});

        ρσ_modules["characteristics.motor"].SlatSupport = SlatSupport;
        ρσ_modules["characteristics.motor"].CurrentPositionB = CurrentPositionB;
        ρσ_modules["characteristics.motor"].CurrentPositionC = CurrentPositionC;
        ρσ_modules["characteristics.motor"].CurrentPositionSimple = CurrentPositionSimple;
        ρσ_modules["characteristics.motor"].CurrentSlatState = CurrentSlatState;
        ρσ_modules["characteristics.motor"].CurrentTiltAngle = CurrentTiltAngle;
        ρσ_modules["characteristics.motor"].CurrentHorizontalTiltAngle = CurrentHorizontalTiltAngle;
        ρσ_modules["characteristics.motor"].CurrentVerticalTiltAngle = CurrentVerticalTiltAngle;
        ρσ_modules["characteristics.motor"].HoldPosition = HoldPosition;
        ρσ_modules["characteristics.motor"].PositionState = PositionState;
        ρσ_modules["characteristics.motor"].SlatType = SlatType;
        ρσ_modules["characteristics.motor"].SwingMode = SwingMode;
        ρσ_modules["characteristics.motor"].TargetPositionA = TargetPositionA;
        ρσ_modules["characteristics.motor"].TargetPositionB = TargetPositionB;
        ρσ_modules["characteristics.motor"].TargetPositionC = TargetPositionC;
        ρσ_modules["characteristics.motor"].TargetPositionSimple = TargetPositionSimple;
        ρσ_modules["characteristics.motor"].TargetTiltAngle = TargetTiltAngle;
        ρσ_modules["characteristics.motor"].TargetHorizontalTiltAngle = TargetHorizontalTiltAngle;
        ρσ_modules["characteristics.motor"].TargetVerticalTiltAngle = TargetVerticalTiltAngle;
    })();

    (function(){
        var __name__ = "characteristics.outlet";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;
        var GetterSupport = ρσ_modules["characteristics.base"].GetterSupport;

        function OutletInUse() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            OutletInUse.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(OutletInUse, GetterSupport);
        OutletInUse.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Outlet In Use";
            self.type = HomeKit.Characteristics.OutletInUse;
            self.format = "bool";
            self.value = true;
        };
        if (!OutletInUse.prototype.__init__.__argnames__) Object.defineProperties(OutletInUse.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        OutletInUse.__argnames__ = OutletInUse.prototype.__init__.__argnames__;
        OutletInUse.__handles_kwarg_interpolation__ = OutletInUse.prototype.__init__.__handles_kwarg_interpolation__;
        OutletInUse.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        OutletInUse.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(OutletInUse.prototype, "__bases__", {value: [GetterSupport]});

        ρσ_modules["characteristics.outlet"].OutletInUse = OutletInUse;
    })();

    (function(){
        var __name__ = "characteristics.programmable_switch";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;
        var GetterSupport = ρσ_modules["characteristics.base"].GetterSupport;

        HomeKit.Services.ServiceLabel = "CC";
        HomeKit.Characteristics.ServiceLabelIndex = "CB";
        HomeKit.Characteristics.ServiceLabelNamespace = "CD";
        function ProgrammableSwitchEvent() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ProgrammableSwitchEvent.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ProgrammableSwitchEvent, Base);
        ProgrammableSwitchEvent.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        ProgrammableSwitchEvent.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.status = null;
            self.onTrigger = (function() {
                var ρσ_anonfunc = function (vDev) {
                    var level, states, check, status, cnt;
                    level = vDev.get("metrics:level");
                    states = vDev.get("metrics:discreteStates");
                    if ((typeof level !== "undefined" && level !== null) && (typeof states !== "undefined" && states !== null)) {
                        check = level.slice(0, -1);
                        if ((check === self.responsible || typeof check === "object" && ρσ_equals(check, self.responsible))) {
                            status = states[(typeof level === "number" && level < 0) ? states.length + level : level];
                            if ((status.action === "press" || typeof status.action === "object" && ρσ_equals(status.action, "press"))) {
                                cnt = parseInt(status.cnt);
                                if ((cnt === 1 || typeof cnt === "object" && ρσ_equals(cnt, 1))) {
                                    self.status = 0;
                                } else if ((cnt === 2 || typeof cnt === "object" && ρσ_equals(cnt, 2))) {
                                    self.status = 1;
                                } else {
                                    self.status = null;
                                }
                            } else if ((status.action === "hold" || typeof status.action === "object" && ρσ_equals(status.action, "hold"))) {
                                self.status = 2;
                            } else {
                                self.status = null;
                            }
                            if (self.status !== null) {
                                self.onLevelChange();
                            }
                            return;
                        }
                    }
                    self.status = null;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["vDev"]}
                });
                return ρσ_anonfunc;
            })();
            self.name = "Programmable Switch Event";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["deviceType"] = "sensorDiscrete";
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.ProgrammableSwitchEvent, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        return self.status;
                    };
                    return ρσ_d;
                }).call(this));
                if ((typeof c !== "undefined" && c !== null)) {
                }
                self.vDev.on("change:metrics:level", self.onTrigger);
            }
            return c;
        };
        ProgrammableSwitchEvent.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onTrigger);
            }
            Base.prototype.remove.call(self);
        };
        ProgrammableSwitchEvent.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ProgrammableSwitchEvent.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ProgrammableSwitchEvent.prototype, "__bases__", {value: [Base]});

        function ServiceLabelIndex() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ServiceLabelIndex.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ServiceLabelIndex, Base);
        ServiceLabelIndex.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        ServiceLabelIndex.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.vDev = -1;
            self.name = "ServiceLabelIndex";
            c = self.service.addCharacteristic(HomeKit.Characteristics.ServiceLabelIndex, "uint8", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    return self.ServiceLabelIndex;
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        ServiceLabelIndex.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ServiceLabelIndex.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ServiceLabelIndex.prototype, "__bases__", {value: [Base]});

        function ServiceLabelNamespace() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ServiceLabelNamespace.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ServiceLabelNamespace, GetterSupport);
        ServiceLabelNamespace.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            GetterSupport.prototype.__init__.call(self, bridge4kt, id);
            self.name = "ServiceLabel Namespace";
            self.type = HomeKit.Characteristics.ServiceLabelNamespace;
            self.format = "uint8";
            self.value = 1;
        };
        if (!ServiceLabelNamespace.prototype.__init__.__argnames__) Object.defineProperties(ServiceLabelNamespace.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        ServiceLabelNamespace.__argnames__ = ServiceLabelNamespace.prototype.__init__.__argnames__;
        ServiceLabelNamespace.__handles_kwarg_interpolation__ = ServiceLabelNamespace.prototype.__init__.__handles_kwarg_interpolation__;
        ServiceLabelNamespace.prototype.__repr__ = function __repr__ () {
            if(GetterSupport.prototype.__repr__) return GetterSupport.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ServiceLabelNamespace.prototype.__str__ = function __str__ () {
            if(GetterSupport.prototype.__str__) return GetterSupport.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ServiceLabelNamespace.prototype, "__bases__", {value: [GetterSupport]});

        ρσ_modules["characteristics.programmable_switch"].ProgrammableSwitchEvent = ProgrammableSwitchEvent;
        ρσ_modules["characteristics.programmable_switch"].ServiceLabelIndex = ServiceLabelIndex;
        ρσ_modules["characteristics.programmable_switch"].ServiceLabelNamespace = ServiceLabelNamespace;
    })();

    (function(){
        var __name__ = "characteristics.sensor";
        var Base = ρσ_modules["characteristics.base"].Base;
        var out = ρσ_modules["characteristics.base"].out;

        function BinarySensorState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            BinarySensorState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(BinarySensorState, Base);
        BinarySensorState.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        BinarySensorState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(self.type, "uint8", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var value, level;
                        value = 0;
                        level = self.vDev.get("metrics:level");
                        if ((typeof level !== "undefined" && level !== null)) {
                            level = level.toString();
                            value = self.level_to_status(level);
                        }
                        return value;
                    };
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onLevelChange);
            }
            return c;
        };
        BinarySensorState.prototype.level_to_status = function level_to_status(level) {
            var self = this;
            return (ρσ_equals(level.toLowerCase(), "on")) ? 1 : 0;
        };
        if (!BinarySensorState.prototype.level_to_status.__argnames__) Object.defineProperties(BinarySensorState.prototype.level_to_status, {
            __argnames__ : {value: ["level"]}
        });
        BinarySensorState.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onLevelChange);
            }
            Base.prototype.remove.call(self);
        };
        BinarySensorState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        BinarySensorState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(BinarySensorState.prototype, "__bases__", {value: [Base]});

        function MultilevelSensorState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            MultilevelSensorState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(MultilevelSensorState, Base);
        MultilevelSensorState.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Base.prototype.__init__.call(self, bridge4kt, id);
            self.format = "float";
        };
        if (!MultilevelSensorState.prototype.__init__.__argnames__) Object.defineProperties(MultilevelSensorState.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        MultilevelSensorState.__argnames__ = MultilevelSensorState.prototype.__init__.__argnames__;
        MultilevelSensorState.__handles_kwarg_interpolation__ = MultilevelSensorState.prototype.__init__.__handles_kwarg_interpolation__;
        MultilevelSensorState.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            c = null;
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(self.type, self.format, (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var v;
                        v = self.vDev.get("metrics:level");
                        if (!(typeof v !== "undefined" && v !== null)) {
                            v = 0;
                        }
                        return self.convert(v);
                    };
                    return ρσ_d;
                }).call(this));
                self.vDev.on("change:metrics:level", self.onLevelChange);
            }
            return c;
        };
        MultilevelSensorState.prototype.convert = function convert(level) {
            var self = this;
            return level;
        };
        if (!MultilevelSensorState.prototype.convert.__argnames__) Object.defineProperties(MultilevelSensorState.prototype.convert, {
            __argnames__ : {value: ["level"]}
        });
        MultilevelSensorState.prototype.remove = function remove() {
            var self = this;
            if (_.isObject(self.vDev)) {
                self.vDev.off("change:metrics:level", self.onLevelChange);
            }
            Base.prototype.remove.call(self);
        };
        MultilevelSensorState.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        MultilevelSensorState.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(MultilevelSensorState.prototype, "__bases__", {value: [Base]});

        function CarbonDioxideDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CarbonDioxideDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CarbonDioxideDetected, BinarySensorState);
        CarbonDioxideDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Carbon Dioxide Detected";
            self.type = HomeKit.Characteristics.CarbonDioxideDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "alarm_coo", "alarmSensor_coo" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!CarbonDioxideDetected.prototype.__init__.__argnames__) Object.defineProperties(CarbonDioxideDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CarbonDioxideDetected.__argnames__ = CarbonDioxideDetected.prototype.__init__.__argnames__;
        CarbonDioxideDetected.__handles_kwarg_interpolation__ = CarbonDioxideDetected.prototype.__init__.__handles_kwarg_interpolation__;
        CarbonDioxideDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CarbonDioxideDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CarbonDioxideDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function CarbonMonoxideDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CarbonMonoxideDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CarbonMonoxideDetected, BinarySensorState);
        CarbonMonoxideDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Carbon Monoxide Detected";
            self.type = HomeKit.Characteristics.CarbonMonoxideDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "co", "alarm_co", "alarmSensor_co" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!CarbonMonoxideDetected.prototype.__init__.__argnames__) Object.defineProperties(CarbonMonoxideDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CarbonMonoxideDetected.__argnames__ = CarbonMonoxideDetected.prototype.__init__.__argnames__;
        CarbonMonoxideDetected.__handles_kwarg_interpolation__ = CarbonMonoxideDetected.prototype.__init__.__handles_kwarg_interpolation__;
        CarbonMonoxideDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CarbonMonoxideDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CarbonMonoxideDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function ContactSensorState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ContactSensorState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ContactSensorState, BinarySensorState);
        ContactSensorState.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Contact Sensor State";
            self.type = HomeKit.Characteristics.ContactSensorState;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "door-window", "alarm_door", "alarmSensor_door" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!ContactSensorState.prototype.__init__.__argnames__) Object.defineProperties(ContactSensorState.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        ContactSensorState.__argnames__ = ContactSensorState.prototype.__init__.__argnames__;
        ContactSensorState.__handles_kwarg_interpolation__ = ContactSensorState.prototype.__init__.__handles_kwarg_interpolation__;
        ContactSensorState.prototype.level_to_status = function level_to_status(level) {
            var self = this;
            return (ρσ_equals(level.toLowerCase(), "on")) ? 0 : 1;
        };
        if (!ContactSensorState.prototype.level_to_status.__argnames__) Object.defineProperties(ContactSensorState.prototype.level_to_status, {
            __argnames__ : {value: ["level"]}
        });
        ContactSensorState.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ContactSensorState.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ContactSensorState.prototype, "__bases__", {value: [BinarySensorState]});

        function CurrentRelativeHumidity() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentRelativeHumidity.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentRelativeHumidity, MultilevelSensorState);
        CurrentRelativeHumidity.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            MultilevelSensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Current Relative Humidity";
            self.type = HomeKit.Characteristics.CurrentRelativeHumidity;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = "humidity";
                return ρσ_d;
            }).call(this);
        };
        if (!CurrentRelativeHumidity.prototype.__init__.__argnames__) Object.defineProperties(CurrentRelativeHumidity.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CurrentRelativeHumidity.__argnames__ = CurrentRelativeHumidity.prototype.__init__.__argnames__;
        CurrentRelativeHumidity.__handles_kwarg_interpolation__ = CurrentRelativeHumidity.prototype.__init__.__handles_kwarg_interpolation__;
        CurrentRelativeHumidity.prototype.__repr__ = function __repr__ () {
            if(MultilevelSensorState.prototype.__repr__) return MultilevelSensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentRelativeHumidity.prototype.__str__ = function __str__ () {
            if(MultilevelSensorState.prototype.__str__) return MultilevelSensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentRelativeHumidity.prototype, "__bases__", {value: [MultilevelSensorState]});

        function CurrentTemperature() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CurrentTemperature.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CurrentTemperature, MultilevelSensorState);
        CurrentTemperature.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            MultilevelSensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Current Temperature";
            self.type = HomeKit.Characteristics.CurrentTemperature;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "temperature", "thermostat_set_point" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!CurrentTemperature.prototype.__init__.__argnames__) Object.defineProperties(CurrentTemperature.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CurrentTemperature.__argnames__ = CurrentTemperature.prototype.__init__.__argnames__;
        CurrentTemperature.__handles_kwarg_interpolation__ = CurrentTemperature.prototype.__init__.__handles_kwarg_interpolation__;
        CurrentTemperature.prototype.__repr__ = function __repr__ () {
            if(MultilevelSensorState.prototype.__repr__) return MultilevelSensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CurrentTemperature.prototype.__str__ = function __str__ () {
            if(MultilevelSensorState.prototype.__str__) return MultilevelSensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CurrentTemperature.prototype, "__bases__", {value: [MultilevelSensorState]});

        function LeakDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LeakDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LeakDetected, BinarySensorState);
        LeakDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Leak Detected";
            self.type = HomeKit.Characteristics.LeakDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "flood", "alarm_flood", "alarmSensor_flood" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!LeakDetected.prototype.__init__.__argnames__) Object.defineProperties(LeakDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        LeakDetected.__argnames__ = LeakDetected.prototype.__init__.__argnames__;
        LeakDetected.__handles_kwarg_interpolation__ = LeakDetected.prototype.__init__.__handles_kwarg_interpolation__;
        LeakDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LeakDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LeakDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function MotionDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            MotionDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(MotionDetected, BinarySensorState);
        MotionDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Motion Detected";
            self.type = HomeKit.Characteristics.MotionDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "motion", "alarm_burglar", "alarmSensor_burglar", "general_purpose" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!MotionDetected.prototype.__init__.__argnames__) Object.defineProperties(MotionDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        MotionDetected.__argnames__ = MotionDetected.prototype.__init__.__argnames__;
        MotionDetected.__handles_kwarg_interpolation__ = MotionDetected.prototype.__init__.__handles_kwarg_interpolation__;
        MotionDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        MotionDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(MotionDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function OccupancyDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            OccupancyDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(OccupancyDetected, BinarySensorState);
        OccupancyDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Occupancy Detected";
            self.type = HomeKit.Characteristics.OccupancyDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = "motion";
                return ρσ_d;
            }).call(this);
        };
        if (!OccupancyDetected.prototype.__init__.__argnames__) Object.defineProperties(OccupancyDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        OccupancyDetected.__argnames__ = OccupancyDetected.prototype.__init__.__argnames__;
        OccupancyDetected.__handles_kwarg_interpolation__ = OccupancyDetected.prototype.__init__.__handles_kwarg_interpolation__;
        OccupancyDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        OccupancyDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(OccupancyDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function SmokeDetected() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SmokeDetected.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SmokeDetected, BinarySensorState);
        SmokeDetected.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Smoke Detected";
            self.type = HomeKit.Characteristics.SmokeDetected;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "smoke", "alarm_smoke", "alarmSensor_smoke" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!SmokeDetected.prototype.__init__.__argnames__) Object.defineProperties(SmokeDetected.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        SmokeDetected.__argnames__ = SmokeDetected.prototype.__init__.__argnames__;
        SmokeDetected.__handles_kwarg_interpolation__ = SmokeDetected.prototype.__init__.__handles_kwarg_interpolation__;
        SmokeDetected.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SmokeDetected.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SmokeDetected.prototype, "__bases__", {value: [BinarySensorState]});

        function StatusActive() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            StatusActive.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(StatusActive, Base);
        StatusActive.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        StatusActive.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c, d;
            self.name = "Status Active";
            c = null;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "alarm_system", "alarmSensor_system" ]);
                return ρσ_d;
            }).call(this);
            d = self.perform_vDev_detection(self.detectType);
            if ((typeof d !== "undefined" && d !== null)) {
                self.vDev = d;
                c = self.service.addCharacteristic(HomeKit.Characteristics.StatusActive, "bool", (function(){
                    var ρσ_d = {};
                    ρσ_d["get"] = function () {
                        var value, level;
                        value = false;
                        level = self.vDev.get("metrics:level");
                        if ((typeof level !== "undefined" && level !== null)) {
                            level = level.toString();
                            value = ρσ_equals(level.toLowerCase(), "off");
                        }
                        return value;
                    };
                    return ρσ_d;
                }).call(this));
            } else {
                self.commandClass = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)].instances[0].commandClasses[113];
                if (self.check_alarm_supported(self.alarm.system, self.commandClass.data.typeMask.value)) {
                    self.vDev = -1;
                    c = self.service.addCharacteristic(HomeKit.Characteristics.StatusActive, "bool", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            var value, level;
                            value = true;
                            level = (ρσ_expr_temp = self.commandClass.data)[ρσ_bound_index(self.alarm.system, ρσ_expr_temp)].status.type;
                            if ((typeof level !== "undefined" && level !== null) && (level === 255 || typeof level === "object" && ρσ_equals(level, 255))) {
                                value = false;
                            }
                            return value;
                        };
                        return ρσ_d;
                    }).call(this));
                }
            }
            return c;
        };
        StatusActive.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        StatusActive.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(StatusActive.prototype, "__bases__", {value: [Base]});

        function StatusFault() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            StatusFault.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(StatusFault, BinarySensorState);
        StatusFault.prototype.__init__ = function __init__ () {
            BinarySensorState.prototype.__init__ && BinarySensorState.prototype.__init__.apply(this, arguments);
        };
        StatusFault.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            self.name = "Status Fault";
            self.vDev = -1;
            c = self.service.addCharacteristic(HomeKit.Characteristics.StatusFault, "uint8", (function(){
                var ρσ_d = {};
                ρσ_d["get"] = function () {
                    var value, failed;
                    value = 0;
                    failed = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)].data.isFailed;
                    if ((typeof failed !== "undefined" && failed !== null)) {
                        value = (failed === true) ? 1 : 0;
                    }
                    return value;
                };
                return ρσ_d;
            }).call(this));
            return c;
        };
        StatusFault.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        StatusFault.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(StatusFault.prototype, "__bases__", {value: [BinarySensorState]});

        function StatusTampered() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            StatusTampered.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(StatusTampered, BinarySensorState);
        StatusTampered.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            BinarySensorState.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Status Tampered";
            self.type = HomeKit.Characteristics.StatusTampered;
            self.detectType = (function(){
                var ρσ_d = {};
                ρσ_d["probeType"] = ρσ_list_decorate([ "tampered", "alarm_burglar", "alarmSensor_burglar" ]);
                return ρσ_d;
            }).call(this);
        };
        if (!StatusTampered.prototype.__init__.__argnames__) Object.defineProperties(StatusTampered.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        StatusTampered.__argnames__ = StatusTampered.prototype.__init__.__argnames__;
        StatusTampered.__handles_kwarg_interpolation__ = StatusTampered.prototype.__init__.__handles_kwarg_interpolation__;
        StatusTampered.prototype.add_to_callback = function add_to_callback() {
            var self = this;
            var c;
            c = BinarySensorState.prototype.add_to_callback.call(self);
            if (c === null) {
                self.commandClass = (ρσ_expr_temp = self.zway.devices)[ρσ_bound_index(self.id, ρσ_expr_temp)].instances[0].commandClasses[113];
                if (self.check_alarm_supported(self.alarm.burglar, self.commandClass.data.typeMask.value)) {
                    self.vDev = -1;
                    c = self.service.addCharacteristic(HomeKit.Characteristics.StatusTampered, "uint8", (function(){
                        var ρσ_d = {};
                        ρσ_d["get"] = function () {
                            var value, level;
                            value = 0;
                            level = (ρσ_expr_temp = self.commandClass.data)[ρσ_bound_index(self.alarm.burglar, ρσ_expr_temp)].status.type;
                            if ((typeof level !== "undefined" && level !== null) && (level === 255 || typeof level === "object" && ρσ_equals(level, 255))) {
                                value = 1;
                            }
                            return value;
                        };
                        return ρσ_d;
                    }).call(this));
                }
            }
            return c;
        };
        StatusTampered.prototype.__repr__ = function __repr__ () {
            if(BinarySensorState.prototype.__repr__) return BinarySensorState.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        StatusTampered.prototype.__str__ = function __str__ () {
            if(BinarySensorState.prototype.__str__) return BinarySensorState.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(StatusTampered.prototype, "__bases__", {value: [BinarySensorState]});

        ρσ_modules["characteristics.sensor"].BinarySensorState = BinarySensorState;
        ρσ_modules["characteristics.sensor"].MultilevelSensorState = MultilevelSensorState;
        ρσ_modules["characteristics.sensor"].CarbonDioxideDetected = CarbonDioxideDetected;
        ρσ_modules["characteristics.sensor"].CarbonMonoxideDetected = CarbonMonoxideDetected;
        ρσ_modules["characteristics.sensor"].ContactSensorState = ContactSensorState;
        ρσ_modules["characteristics.sensor"].CurrentRelativeHumidity = CurrentRelativeHumidity;
        ρσ_modules["characteristics.sensor"].CurrentTemperature = CurrentTemperature;
        ρσ_modules["characteristics.sensor"].LeakDetected = LeakDetected;
        ρσ_modules["characteristics.sensor"].MotionDetected = MotionDetected;
        ρσ_modules["characteristics.sensor"].OccupancyDetected = OccupancyDetected;
        ρσ_modules["characteristics.sensor"].SmokeDetected = SmokeDetected;
        ρσ_modules["characteristics.sensor"].StatusActive = StatusActive;
        ρσ_modules["characteristics.sensor"].StatusFault = StatusFault;
        ρσ_modules["characteristics.sensor"].StatusTampered = StatusTampered;
    })();

    (function(){
        var __name__ = "characteristics.create";
        var AccessoryIdentifier = ρσ_modules["characteristics.base"].AccessoryIdentifier;
        var Category = ρσ_modules["characteristics.base"].Category;
        var LinkQuality = ρσ_modules["characteristics.base"].LinkQuality;
        var Reachable = ρσ_modules["characteristics.base"].Reachable;

        var BatteryLevel = ρσ_modules["characteristics.battery"].BatteryLevel;
        var ChargingState = ρσ_modules["characteristics.battery"].ChargingState;
        var StatusLowBattery = ρσ_modules["characteristics.battery"].StatusLowBattery;

        var CurrentHeatingCoolingState = ρσ_modules["characteristics.heating"].CurrentHeatingCoolingState;
        var TargetHeatingCoolingState = ρσ_modules["characteristics.heating"].TargetHeatingCoolingState;
        var TargetTemperature = ρσ_modules["characteristics.heating"].TargetTemperature;
        var TemperatureDisplayUnits = ρσ_modules["characteristics.heating"].TemperatureDisplayUnits;

        var BrightnessRGB = ρσ_modules["characteristics.lightbulb.rgb"].Brightness2RGB;
        var Hue = ρσ_modules["characteristics.lightbulb.rgb"].Hue;
        var OnRGB = ρσ_modules["characteristics.lightbulb.rgb"].OnRGB;
        var Saturation = ρσ_modules["characteristics.lightbulb.rgb"].Saturation;
        var IdentifyRGB = ρσ_modules["characteristics.lightbulb.rgb"].Identify;

        var ColorTemperature = ρσ_modules["characteristics.lightbulb.white"].ColorTemperature;
        var BrightnessWhite = ρσ_modules["characteristics.lightbulb.white"].Brightness;
        var OnWhite = ρσ_modules["characteristics.lightbulb.white"].On;
        var IdentifyWhite = ρσ_modules["characteristics.lightbulb.white"].Identify;

        var CurrentPositionB = ρσ_modules["characteristics.motor"].CurrentPositionB;
        var CurrentPositionC = ρσ_modules["characteristics.motor"].CurrentPositionC;
        var CurrentPositionSimple = ρσ_modules["characteristics.motor"].CurrentPositionSimple;
        var CurrentSlatState = ρσ_modules["characteristics.motor"].CurrentSlatState;
        var CurrentTiltAngle = ρσ_modules["characteristics.motor"].CurrentTiltAngle;
        var CurrentHorizontalTiltAngle = ρσ_modules["characteristics.motor"].CurrentHorizontalTiltAngle;
        var CurrentVerticalTiltAngle = ρσ_modules["characteristics.motor"].CurrentVerticalTiltAngle;
        var HoldPosition = ρσ_modules["characteristics.motor"].HoldPosition;
        var PositionState = ρσ_modules["characteristics.motor"].PositionState;
        var SlatType = ρσ_modules["characteristics.motor"].SlatType;
        var SwingMode = ρσ_modules["characteristics.motor"].SwingMode;
        var TargetPositionA = ρσ_modules["characteristics.motor"].TargetPositionA;
        var TargetPositionB = ρσ_modules["characteristics.motor"].TargetPositionB;
        var TargetPositionC = ρσ_modules["characteristics.motor"].TargetPositionC;
        var TargetPositionSimple = ρσ_modules["characteristics.motor"].TargetPositionSimple;
        var TargetTiltAngle = ρσ_modules["characteristics.motor"].TargetTiltAngle;
        var TargetHorizontalTiltAngle = ρσ_modules["characteristics.motor"].TargetHorizontalTiltAngle;
        var TargetVerticalTiltAngle = ρσ_modules["characteristics.motor"].TargetVerticalTiltAngle;

        var OutletInUse = ρσ_modules["characteristics.outlet"].OutletInUse;

        var ProgrammableSwitchEvent = ρσ_modules["characteristics.programmable_switch"].ProgrammableSwitchEvent;
        var ServiceLabelIndex = ρσ_modules["characteristics.programmable_switch"].ServiceLabelIndex;
        var ServiceLabelNamespace = ρσ_modules["characteristics.programmable_switch"].ServiceLabelNamespace;

        var CarbonDioxideDetected = ρσ_modules["characteristics.sensor"].CarbonDioxideDetected;
        var CarbonMonoxideDetected = ρσ_modules["characteristics.sensor"].CarbonMonoxideDetected;
        var ContactSensorState = ρσ_modules["characteristics.sensor"].ContactSensorState;
        var CurrentRelativeHumidity = ρσ_modules["characteristics.sensor"].CurrentRelativeHumidity;
        var CurrentTemperature = ρσ_modules["characteristics.sensor"].CurrentTemperature;
        var LeakDetected = ρσ_modules["characteristics.sensor"].LeakDetected;
        var MotionDetected = ρσ_modules["characteristics.sensor"].MotionDetected;
        var OccupancyDetected = ρσ_modules["characteristics.sensor"].OccupancyDetected;
        var SmokeDetected = ρσ_modules["characteristics.sensor"].SmokeDetected;
        var StatusActive = ρσ_modules["characteristics.sensor"].StatusActive;
        var StatusFault = ρσ_modules["characteristics.sensor"].StatusFault;
        var StatusTampered = ρσ_modules["characteristics.sensor"].StatusTampered;

        var Brightness = ρσ_modules["characteristics.shared"].Brightness;
        var Name = ρσ_modules["characteristics.shared"].Name;
        var On = ρσ_modules["characteristics.shared"].On;

        function create(bridge4kt, realID, definition) {
            var known_characteristics, c;
            known_characteristics = (function(){
                var ρσ_d = {};
                ρσ_d["AccessoryIdentifier"] = AccessoryIdentifier;
                ρσ_d["BatteryLevel"] = BatteryLevel;
                ρσ_d["Brightness"] = Brightness;
                ρσ_d["BrightnessRGB"] = BrightnessRGB;
                ρσ_d["CarbonDioxideDetected"] = CarbonDioxideDetected;
                ρσ_d["CarbonMonoxideDetected"] = CarbonMonoxideDetected;
                ρσ_d["Category"] = Category;
                ρσ_d["ChargingState"] = ChargingState;
                ρσ_d["ContactSensorState"] = ContactSensorState;
                ρσ_d["CurrentHeatingCoolingState"] = CurrentHeatingCoolingState;
                ρσ_d["CurrentHorizontalTiltAngle"] = CurrentHorizontalTiltAngle;
                ρσ_d["CurrentPositionA"] = CurrentPositionSimple;
                ρσ_d["CurrentPositionB"] = CurrentPositionB;
                ρσ_d["CurrentPositionC"] = CurrentPositionC;
                ρσ_d["CurrentPositionSimple"] = CurrentPositionSimple;
                ρσ_d["CurrentSlatState"] = CurrentSlatState;
                ρσ_d["CurrentTemperature"] = CurrentTemperature;
                ρσ_d["CurrentTemperatureThermostat"] = CurrentTemperature;
                ρσ_d["CurrentTiltAngle"] = CurrentTiltAngle;
                ρσ_d["CurrentVerticalTiltAngle"] = CurrentVerticalTiltAngle;
                ρσ_d["HoldPosition"] = HoldPosition;
                ρσ_d["Hue"] = Hue;
                ρσ_d["IdentifyRGB"] = IdentifyRGB;
                ρσ_d["IdentifyWhite"] = IdentifyWhite;
                ρσ_d["LeakDetected"] = LeakDetected;
                ρσ_d["LinkQuality"] = LinkQuality;
                ρσ_d["MotionDetected"] = MotionDetected;
                ρσ_d["Name"] = Name;
                ρσ_d["OccupancyDetected"] = OccupancyDetected;
                ρσ_d["On"] = On;
                ρσ_d["OnRGB"] = OnRGB;
                ρσ_d["OnWhite"] = OnWhite;
                ρσ_d["OutletInUse"] = OutletInUse;
                ρσ_d["PositionState"] = PositionState;
                ρσ_d["ProgrammableSwitchEvent"] = ProgrammableSwitchEvent;
                ρσ_d["Reachable"] = Reachable;
                ρσ_d["Saturation"] = Saturation;
                ρσ_d["ServiceLabelIndex"] = ServiceLabelIndex;
                ρσ_d["ServiceLabelNamespace"] = ServiceLabelNamespace;
                ρσ_d["SlatType"] = SlatType;
                ρσ_d["SmokeDetected"] = SmokeDetected;
                ρσ_d["StatusActive"] = StatusActive;
                ρσ_d["StatusFault"] = StatusFault;
                ρσ_d["StatusLowBattery"] = StatusLowBattery;
                ρσ_d["StatusTampered"] = StatusTampered;
                ρσ_d["SwingMode"] = SwingMode;
                ρσ_d["TargetHeatingCoolingState"] = TargetHeatingCoolingState;
                ρσ_d["TargetHorizontalTiltAngle"] = TargetHorizontalTiltAngle;
                ρσ_d["TargetPositionA"] = TargetPositionA;
                ρσ_d["TargetPositionB"] = TargetPositionB;
                ρσ_d["TargetPositionC"] = TargetPositionC;
                ρσ_d["TargetPositionSimple"] = TargetPositionSimple;
                ρσ_d["TargetTiltAngle"] = TargetTiltAngle;
                ρσ_d["TargetVerticalTiltAngle"] = TargetVerticalTiltAngle;
                ρσ_d["TargetTemperature"] = TargetTemperature;
                ρσ_d["TemperatureDisplayUnits"] = TemperatureDisplayUnits;
                return ρσ_d;
            }).call(this);
            if (ρσ_in(definition, known_characteristics)) {
                c = new known_characteristics[(typeof definition === "number" && definition < 0) ? known_characteristics.length + definition : definition](bridge4kt, realID);
                return c;
            }
            console.log(".. HK Characteristic '" + definition + "' not implemented");
            return null;
        };
        if (!create.__argnames__) Object.defineProperties(create, {
            __argnames__ : {value: ["bridge4kt", "realID", "definition"]}
        });

        ρσ_modules["characteristics.create"].create = create;
    })();

    (function(){
        var __name__ = "services";
        
        
        
        
        
        
        var characteristics_create = ρσ_modules["characteristics.create"].create;

        var devices = ρσ_modules.devices;

        HomeKit.Services.BatteryService = "96";
        HomeKit.Services.ServiceLabel = "CC";
        HomeKit.Characteristics.ServiceLabelIndex = "CB";
        HomeKit.Characteristics.ServiceLabelNamespace = "CD";
        function out() {
            var key;
            var ρσ_Iter0 = ρσ_Iterable(arguments);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                key = ρσ_Iter0[ρσ_Index0];
                if (_.isObject(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key])) {
                    arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key] = JSON.stringify(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key]);
                }
            }
            debugPrint.apply(this, arguments);
            return true;
        };

        function Base() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Base.prototype.__init__.apply(this, arguments);
        }
        Base.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.bridge = bridge4kt;
            self.id = id;
            self.service = null;
            self.serviceID = null;
            self.name = "";
            self.definition = ρσ_list_decorate([]);
            self.characteristics = {};
            self.identify = null;
        };
        if (!Base.prototype.__init__.__argnames__) Object.defineProperties(Base.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Base.__argnames__ = Base.prototype.__init__.__argnames__;
        Base.__handles_kwarg_interpolation__ = Base.prototype.__init__.__handles_kwarg_interpolation__;
        Base.prototype.add_to = function add_to(accessory) {
            var self = this;
        };
        if (!Base.prototype.add_to.__annotations__) Object.defineProperties(Base.prototype.add_to, {
            __annotations__ : {value: {accessory: HKAccessory, return: HKService}},
            __argnames__ : {value: ["accessory"]}
        });
        Base.prototype.update = function update() {
            var self = this;
            var char;
            var ρσ_Iter1 = ρσ_Iterable(self.characteristics);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                char = ρσ_Iter1[ρσ_Index1];
                (ρσ_expr_temp = self.characteristics)[(typeof char === "number" && char < 0) ? ρσ_expr_temp.length + char : char].update();
            }
        };
        Base.prototype.remove = function remove() {
            var self = this;
            var char;
            console.log(". Removing HK Service '" + self.name + "'");
            var ρσ_Iter2 = ρσ_Iterable(self.characteristics);
            for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                char = ρσ_Iter2[ρσ_Index2];
                (ρσ_expr_temp = self.characteristics)[(typeof char === "number" && char < 0) ? ρσ_expr_temp.length + char : char].remove();
            }
            if (ρσ_exists.n(self.service)) {
                self.service.remove();
            }
            self.characteristics = {};
            self.service = null;
        };
        Base.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Base.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(Base.prototype, "__bases__", {value: []});

        function Default() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Default.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Default, Base);
        Default.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Default.prototype.add_to = function add_to(accessory, primary) {
            var self = this;
            var s, c, char;
            function log_interface(object) {
                var prop;
                var ρσ_Iter3 = ρσ_Iterable(object);
                for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                    prop = ρσ_Iter3[ρσ_Index3];
                    console.log(prop);
                }
            };
            if (!log_interface.__argnames__) Object.defineProperties(log_interface, {
                __argnames__ : {value: ["object"]}
            });

            s = accessory.addService(self.serviceID, self.name);
            console.log(". HK Service '" + self.name + "' added");
            function override(object, methodName, callback) {
                object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName] = callback(object[(typeof methodName === "number" && methodName < 0) ? object.length + methodName : methodName]);
            };
            if (!override.__argnames__) Object.defineProperties(override, {
                __argnames__ : {value: ["object", "methodName", "callback"]}
            });

            override(s, "serialize", (function() {
                var ρσ_anonfunc = function (original) {
                    return (function() {
                        var ρσ_anonfunc = function (connection) {
                            var service;
                            service = original.apply(this, arguments);
                            if (!_.isBoolean(this.primary)) {
                                service.primary = false;
                            } else {
                                service.primary = this.primary;
                            }
                            if (!_.isBoolean(this.hidden)) {
                                service.hidden = false;
                            } else {
                                service.hidden = this.hidden;
                            }
                            return service;
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["connection"]}
                        });
                        return ρσ_anonfunc;
                    })();
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["original"]}
                });
                return ρσ_anonfunc;
            })());
            s.primary = primary;
            self.service = s;
            var ρσ_Iter4 = ρσ_Iterable(self.definition);
            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                char = ρσ_Iter4[ρσ_Index4];
                c = characteristics_create(self.bridge, self.id, char);
                if ((typeof c !== "undefined" && c !== null)) {
                    (ρσ_expr_temp = self.characteristics)[(typeof char === "number" && char < 0) ? ρσ_expr_temp.length + char : char] = c;
                    c.add_to(self.service);
                }
            }
        };
        if (!Default.prototype.add_to.__argnames__) Object.defineProperties(Default.prototype.add_to, {
            __argnames__ : {value: ["accessory", "primary"]}
        });
        Default.prototype.replace_identify_of = function replace_identify_of(service) {
            var self = this;
            var c;
            if (self.identify === null) {
                return null;
            }
            c = characteristics_create(self.bridge, self.id, self.identify);
            if ((typeof c !== "undefined" && c !== null)) {
                (ρσ_expr_temp = self.characteristics)[ρσ_bound_index(self.identify, ρσ_expr_temp)] = c;
                c.add_to(service);
            }
            return c;
        };
        if (!Default.prototype.replace_identify_of.__annotations__) Object.defineProperties(Default.prototype.replace_identify_of, {
            __annotations__ : {value: {service: HKService}},
            __argnames__ : {value: ["service"]}
        });
        Default.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Default.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Default.prototype, "__bases__", {value: [Base]});

        function Sensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Sensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Sensor, Default);
        Sensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.name = "Unspecified Binary Sensor";
            self.definition = ρσ_list_decorate([ "Name", "StatusActive", "StatusFault", "StatusTampered", "StatusLowBattery" ]);
        };
        if (!Sensor.prototype.__init__.__argnames__) Object.defineProperties(Sensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Sensor.__argnames__ = Sensor.prototype.__init__.__argnames__;
        Sensor.__handles_kwarg_interpolation__ = Sensor.prototype.__init__.__handles_kwarg_interpolation__;
        Sensor.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Sensor.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Sensor.prototype, "__bases__", {value: [Default]});

        function AccessoryInformation() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            AccessoryInformation.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(AccessoryInformation, Base);
        AccessoryInformation.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        AccessoryInformation.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        AccessoryInformation.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(AccessoryInformation.prototype, "__bases__", {value: [Base]});
        

        function AirPurifier() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            AirPurifier.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(AirPurifier, Base);
        AirPurifier.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        AirPurifier.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        AirPurifier.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(AirPurifier.prototype, "__bases__", {value: [Base]});
        

        function AirQualitySensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            AirQualitySensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(AirQualitySensor, Base);
        AirQualitySensor.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        AirQualitySensor.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        AirQualitySensor.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(AirQualitySensor.prototype, "__bases__", {value: [Base]});
        

        function BatteryService() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            BatteryService.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(BatteryService, Default);
        BatteryService.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.BatteryService;
            self.name = "Battery Service";
            self.definition = ρσ_list_decorate([ "BatteryLevel", "ChargingState", "StatusLowBattery" ]);
        };
        if (!BatteryService.prototype.__init__.__argnames__) Object.defineProperties(BatteryService.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        BatteryService.__argnames__ = BatteryService.prototype.__init__.__argnames__;
        BatteryService.__handles_kwarg_interpolation__ = BatteryService.prototype.__init__.__handles_kwarg_interpolation__;
        BatteryService.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        BatteryService.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(BatteryService.prototype, "__bases__", {value: [Default]});

        function BridgingState() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            BridgingState.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(BridgingState, Default);
        BridgingState.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.BridgingState;
            self.name = "BridgingState";
            self.definition = ρσ_list_decorate([ "Reachable", "LinkQuality", "AccessoryIdentifier", "Category" ]);
        };
        if (!BridgingState.prototype.__init__.__argnames__) Object.defineProperties(BridgingState.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        BridgingState.__argnames__ = BridgingState.prototype.__init__.__argnames__;
        BridgingState.__handles_kwarg_interpolation__ = BridgingState.prototype.__init__.__handles_kwarg_interpolation__;
        BridgingState.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        BridgingState.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(BridgingState.prototype, "__bases__", {value: [Default]});

        function CameraRTPStreamManagement() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CameraRTPStreamManagement.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CameraRTPStreamManagement, Base);
        CameraRTPStreamManagement.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        CameraRTPStreamManagement.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CameraRTPStreamManagement.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CameraRTPStreamManagement.prototype, "__bases__", {value: [Base]});
        

        function CarbonDioxideSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CarbonDioxideSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CarbonDioxideSensor, Sensor);
        CarbonDioxideSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.CarbonDioxideSensor;
            self.name = "Carbon Dioxide Sensor";
            self.definition.extend("CarbonDioxideDetected", "CarbonDioxideLevel");
        };
        if (!CarbonDioxideSensor.prototype.__init__.__argnames__) Object.defineProperties(CarbonDioxideSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CarbonDioxideSensor.__argnames__ = CarbonDioxideSensor.prototype.__init__.__argnames__;
        CarbonDioxideSensor.__handles_kwarg_interpolation__ = CarbonDioxideSensor.prototype.__init__.__handles_kwarg_interpolation__;
        CarbonDioxideSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CarbonDioxideSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CarbonDioxideSensor.prototype, "__bases__", {value: [Sensor]});

        function CarbonMonoxideSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            CarbonMonoxideSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(CarbonMonoxideSensor, Sensor);
        CarbonMonoxideSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.CarbonMonoxideSensor;
            self.name = "Carbon Monoxide Sensor";
            self.definition.extend("CarbonMonoxideDetected", "CarbonMonoxideLevel", "CarbonMonoxidePeakLevel");
        };
        if (!CarbonMonoxideSensor.prototype.__init__.__argnames__) Object.defineProperties(CarbonMonoxideSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        CarbonMonoxideSensor.__argnames__ = CarbonMonoxideSensor.prototype.__init__.__argnames__;
        CarbonMonoxideSensor.__handles_kwarg_interpolation__ = CarbonMonoxideSensor.prototype.__init__.__handles_kwarg_interpolation__;
        CarbonMonoxideSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        CarbonMonoxideSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(CarbonMonoxideSensor.prototype, "__bases__", {value: [Sensor]});

        function ContactSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ContactSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ContactSensor, Sensor);
        ContactSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.ContactSensor;
            self.name = "Contact Sensor";
            self.definition.append("ContactSensorState");
        };
        if (!ContactSensor.prototype.__init__.__argnames__) Object.defineProperties(ContactSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        ContactSensor.__argnames__ = ContactSensor.prototype.__init__.__argnames__;
        ContactSensor.__handles_kwarg_interpolation__ = ContactSensor.prototype.__init__.__handles_kwarg_interpolation__;
        ContactSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ContactSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ContactSensor.prototype, "__bases__", {value: [Sensor]});

        function Door() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Door.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Door, Default);
        Door.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            if (!ρσ_exists.n(self.index)) {
                self.index = "";
            }
            self.serviceID = HomeKit.Services.Door;
            self.name = "Door";
            self.definition = ρσ_list_decorate([ "TargetPosition" + self.index, "CurrentPosition" + self.index, "PositionState", "Name", "HoldPosition", "ObstructionDetected" ]);
        };
        if (!Door.prototype.__init__.__argnames__) Object.defineProperties(Door.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Door.__argnames__ = Door.prototype.__init__.__argnames__;
        Door.__handles_kwarg_interpolation__ = Door.prototype.__init__.__handles_kwarg_interpolation__;
        Door.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Door.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Door.prototype, "__bases__", {value: [Default]});

        function DoorA() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            DoorA.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(DoorA, Door);
        DoorA.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "A";
            Door.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!DoorA.prototype.__init__.__argnames__) Object.defineProperties(DoorA.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        DoorA.__argnames__ = DoorA.prototype.__init__.__argnames__;
        DoorA.__handles_kwarg_interpolation__ = DoorA.prototype.__init__.__handles_kwarg_interpolation__;
        DoorA.prototype.__repr__ = function __repr__ () {
            if(Door.prototype.__repr__) return Door.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        DoorA.prototype.__str__ = function __str__ () {
            if(Door.prototype.__str__) return Door.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(DoorA.prototype, "__bases__", {value: [Door]});

        function DoorB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            DoorB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(DoorB, Door);
        DoorB.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "B";
            Door.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!DoorB.prototype.__init__.__argnames__) Object.defineProperties(DoorB.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        DoorB.__argnames__ = DoorB.prototype.__init__.__argnames__;
        DoorB.__handles_kwarg_interpolation__ = DoorB.prototype.__init__.__handles_kwarg_interpolation__;
        DoorB.prototype.__repr__ = function __repr__ () {
            if(Door.prototype.__repr__) return Door.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        DoorB.prototype.__str__ = function __str__ () {
            if(Door.prototype.__str__) return Door.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(DoorB.prototype, "__bases__", {value: [Door]});

        function DoorC() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            DoorC.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(DoorC, Door);
        DoorC.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "C";
            Door.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!DoorC.prototype.__init__.__argnames__) Object.defineProperties(DoorC.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        DoorC.__argnames__ = DoorC.prototype.__init__.__argnames__;
        DoorC.__handles_kwarg_interpolation__ = DoorC.prototype.__init__.__handles_kwarg_interpolation__;
        DoorC.prototype.__repr__ = function __repr__ () {
            if(Door.prototype.__repr__) return Door.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        DoorC.prototype.__str__ = function __str__ () {
            if(Door.prototype.__str__) return Door.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(DoorC.prototype, "__bases__", {value: [Door]});

        function DoorSimple() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            DoorSimple.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(DoorSimple, Default);
        DoorSimple.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Door;
            self.name = "Door";
            self.definition = ρσ_list_decorate([ "TargetPositionSimple", "CurrentPositionSimple", "PositionState", "Name" ]);
        };
        if (!DoorSimple.prototype.__init__.__argnames__) Object.defineProperties(DoorSimple.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        DoorSimple.__argnames__ = DoorSimple.prototype.__init__.__argnames__;
        DoorSimple.__handles_kwarg_interpolation__ = DoorSimple.prototype.__init__.__handles_kwarg_interpolation__;
        DoorSimple.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        DoorSimple.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(DoorSimple.prototype, "__bases__", {value: [Default]});

        function Doorbell() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Doorbell.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Doorbell, Base);
        Doorbell.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Doorbell.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Doorbell.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Doorbell.prototype, "__bases__", {value: [Base]});
        

        function Fan() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Fan.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Fan, Base);
        Fan.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Fan.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Fan.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Fan.prototype, "__bases__", {value: [Base]});
        

        function FanV2() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            FanV2.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(FanV2, Base);
        FanV2.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        FanV2.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        FanV2.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(FanV2.prototype, "__bases__", {value: [Base]});
        

        function FilterMaintenance() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            FilterMaintenance.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(FilterMaintenance, Base);
        FilterMaintenance.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        FilterMaintenance.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        FilterMaintenance.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(FilterMaintenance.prototype, "__bases__", {value: [Base]});
        

        function GarageDoorOpener() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            GarageDoorOpener.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(GarageDoorOpener, Default);
        GarageDoorOpener.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.GarageDoorOpener;
            self.name = "GarageDoorOpener";
            self.definition = ρσ_list_decorate([ "CurrentDoorState", "TargetDoorState", "ObstructionDetected", "Name", "LockCurrentState", "LockTargetState" ]);
        };
        if (!GarageDoorOpener.prototype.__init__.__argnames__) Object.defineProperties(GarageDoorOpener.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        GarageDoorOpener.__argnames__ = GarageDoorOpener.prototype.__init__.__argnames__;
        GarageDoorOpener.__handles_kwarg_interpolation__ = GarageDoorOpener.prototype.__init__.__handles_kwarg_interpolation__;
        GarageDoorOpener.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        GarageDoorOpener.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(GarageDoorOpener.prototype, "__bases__", {value: [Default]});

        function HumiditySensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            HumiditySensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(HumiditySensor, Sensor);
        HumiditySensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.HumiditySensor;
            self.name = "Humidity Sensor";
            self.definition.append("CurrentRelativeHumidity");
        };
        if (!HumiditySensor.prototype.__init__.__argnames__) Object.defineProperties(HumiditySensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        HumiditySensor.__argnames__ = HumiditySensor.prototype.__init__.__argnames__;
        HumiditySensor.__handles_kwarg_interpolation__ = HumiditySensor.prototype.__init__.__handles_kwarg_interpolation__;
        HumiditySensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        HumiditySensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(HumiditySensor.prototype, "__bases__", {value: [Sensor]});

        function LeakSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LeakSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LeakSensor, Sensor);
        LeakSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.LeakSensor;
            self.name = "Leak Sensor";
            self.definition.append("LeakDetected");
        };
        if (!LeakSensor.prototype.__init__.__argnames__) Object.defineProperties(LeakSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        LeakSensor.__argnames__ = LeakSensor.prototype.__init__.__argnames__;
        LeakSensor.__handles_kwarg_interpolation__ = LeakSensor.prototype.__init__.__handles_kwarg_interpolation__;
        LeakSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LeakSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LeakSensor.prototype, "__bases__", {value: [Sensor]});

        function Lightbulb() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Lightbulb.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Lightbulb, Default);
        Lightbulb.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Lightbulb;
            self.name = "Lightbulb";
            self.definition = ρσ_list_decorate([ "OnRGB", "Name", "BrightnessRGB", "Hue", "Saturation" ]);
            self.identify = "IdentifyRGB";
        };
        if (!Lightbulb.prototype.__init__.__argnames__) Object.defineProperties(Lightbulb.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Lightbulb.__argnames__ = Lightbulb.prototype.__init__.__argnames__;
        Lightbulb.__handles_kwarg_interpolation__ = Lightbulb.prototype.__init__.__handles_kwarg_interpolation__;
        Lightbulb.prototype.add_to = function add_to(accessory, primary) {
            var self = this;
            var cc, pD;
            Default.prototype.add_to.call(self, accessory, primary);
            cc = null;
            try {
                pD = new devices.pDevice(self.id);
                cc = pD.supportedCommandClass(51);
            } catch (ρσ_Exception) {
                ρσ_last_exception = ρσ_Exception;
                {
                    self.service.SetMultiple = function () {
                        out(self.name + "#" + self.id + ": SetMultiple not implemented");
                    };
                } 
            }
            if (cc !== null) {
                self.service.SetMultiple = _.debounce(_.bind(cc.SetMultiple, cc), 1e3);
            }
        };
        if (!Lightbulb.prototype.add_to.__argnames__) Object.defineProperties(Lightbulb.prototype.add_to, {
            __argnames__ : {value: ["accessory", "primary"]}
        });
        Lightbulb.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Lightbulb.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Lightbulb.prototype, "__bases__", {value: [Default]});

        function LightbulbWhite() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LightbulbWhite.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LightbulbWhite, Lightbulb);
        LightbulbWhite.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Lightbulb.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Lightbulb;
            self.name = "Lightbulb";
            self.definition = ρσ_list_decorate([ "OnWhite", "Name", "BrightnessWhite", "ColorTemperature" ]);
            self.identify = "IdentifyWhite";
        };
        if (!LightbulbWhite.prototype.__init__.__argnames__) Object.defineProperties(LightbulbWhite.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        LightbulbWhite.__argnames__ = LightbulbWhite.prototype.__init__.__argnames__;
        LightbulbWhite.__handles_kwarg_interpolation__ = LightbulbWhite.prototype.__init__.__handles_kwarg_interpolation__;
        LightbulbWhite.prototype.__repr__ = function __repr__ () {
            if(Lightbulb.prototype.__repr__) return Lightbulb.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LightbulbWhite.prototype.__str__ = function __str__ () {
            if(Lightbulb.prototype.__str__) return Lightbulb.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LightbulbWhite.prototype, "__bases__", {value: [Lightbulb]});

        function LightSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LightSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LightSensor, Base);
        LightSensor.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        LightSensor.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LightSensor.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LightSensor.prototype, "__bases__", {value: [Base]});
        

        function LockManagement() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LockManagement.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LockManagement, Base);
        LockManagement.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        LockManagement.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LockManagement.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LockManagement.prototype, "__bases__", {value: [Base]});
        

        function LockMechanism() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            LockMechanism.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(LockMechanism, Base);
        LockMechanism.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        LockMechanism.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        LockMechanism.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(LockMechanism.prototype, "__bases__", {value: [Base]});
        

        function Microphone() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Microphone.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Microphone, Base);
        Microphone.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Microphone.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Microphone.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Microphone.prototype, "__bases__", {value: [Base]});
        

        function MotionSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            MotionSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(MotionSensor, Sensor);
        MotionSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.MotionSensor;
            self.name = "Motion Sensor";
            self.definition.append("MotionDetected");
        };
        if (!MotionSensor.prototype.__init__.__argnames__) Object.defineProperties(MotionSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        MotionSensor.__argnames__ = MotionSensor.prototype.__init__.__argnames__;
        MotionSensor.__handles_kwarg_interpolation__ = MotionSensor.prototype.__init__.__handles_kwarg_interpolation__;
        MotionSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        MotionSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(MotionSensor.prototype, "__bases__", {value: [Sensor]});

        function OccupancySensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            OccupancySensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(OccupancySensor, Sensor);
        OccupancySensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.OccupancySensor;
            self.name = "Occupancy Sensor";
            self.definition.append("OccupancyDetected");
        };
        if (!OccupancySensor.prototype.__init__.__argnames__) Object.defineProperties(OccupancySensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        OccupancySensor.__argnames__ = OccupancySensor.prototype.__init__.__argnames__;
        OccupancySensor.__handles_kwarg_interpolation__ = OccupancySensor.prototype.__init__.__handles_kwarg_interpolation__;
        OccupancySensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        OccupancySensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(OccupancySensor.prototype, "__bases__", {value: [Sensor]});

        function Outlet() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Outlet.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Outlet, Default);
        Outlet.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Outlet;
            self.name = "Outlet";
            self.definition = ρσ_list_decorate([ "On", "OutletInUse", "Name" ]);
        };
        if (!Outlet.prototype.__init__.__argnames__) Object.defineProperties(Outlet.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Outlet.__argnames__ = Outlet.prototype.__init__.__argnames__;
        Outlet.__handles_kwarg_interpolation__ = Outlet.prototype.__init__.__handles_kwarg_interpolation__;
        Outlet.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Outlet.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Outlet.prototype, "__bases__", {value: [Default]});

        function SecuritySystem() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SecuritySystem.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SecuritySystem, Base);
        SecuritySystem.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        SecuritySystem.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SecuritySystem.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SecuritySystem.prototype, "__bases__", {value: [Base]});
        

        function ServiceLabel() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            ServiceLabel.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(ServiceLabel, Default);
        ServiceLabel.prototype.__init__ = function __init__(controller, id) {
            var self = this;
            Default.prototype.__init__.call(self, controller, id);
            self.serviceID = HomeKit.Services.ServiceLabel;
            self.name = "Service Label";
            self.definition = ρσ_list_decorate([ "ServiceLabelNamespace" ]);
        };
        if (!ServiceLabel.prototype.__init__.__argnames__) Object.defineProperties(ServiceLabel.prototype.__init__, {
            __argnames__ : {value: ["controller", "id"]}
        });
        ServiceLabel.__argnames__ = ServiceLabel.prototype.__init__.__argnames__;
        ServiceLabel.__handles_kwarg_interpolation__ = ServiceLabel.prototype.__init__.__handles_kwarg_interpolation__;
        ServiceLabel.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        ServiceLabel.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(ServiceLabel.prototype, "__bases__", {value: [Default]});

        function Slat() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Slat.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Slat, Default);
        Slat.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Slat;
            self.name = "Slat";
            self.definition = ρσ_list_decorate([ "CurrentSlatState", "SlatType", "Name", "SwingMode", "CurrentTiltAngle", "TargetTiltAngle" ]);
        };
        if (!Slat.prototype.__init__.__argnames__) Object.defineProperties(Slat.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Slat.__argnames__ = Slat.prototype.__init__.__argnames__;
        Slat.__handles_kwarg_interpolation__ = Slat.prototype.__init__.__handles_kwarg_interpolation__;
        Slat.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Slat.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Slat.prototype, "__bases__", {value: [Default]});

        function SmokeSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            SmokeSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(SmokeSensor, Sensor);
        SmokeSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.SmokeSensor;
            self.name = "Smoke Sensor";
            self.definition.append("SmokeDetected");
        };
        if (!SmokeSensor.prototype.__init__.__argnames__) Object.defineProperties(SmokeSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        SmokeSensor.__argnames__ = SmokeSensor.prototype.__init__.__argnames__;
        SmokeSensor.__handles_kwarg_interpolation__ = SmokeSensor.prototype.__init__.__handles_kwarg_interpolation__;
        SmokeSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        SmokeSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(SmokeSensor.prototype, "__bases__", {value: [Sensor]});

        function Speaker() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Speaker.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Speaker, Base);
        Speaker.prototype.__init__ = function __init__ () {
            Base.prototype.__init__ && Base.prototype.__init__.apply(this, arguments);
        };
        Speaker.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Speaker.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Speaker.prototype, "__bases__", {value: [Base]});
        

        function StatelessProgrammableSwitch() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            StatelessProgrammableSwitch.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(StatelessProgrammableSwitch, Default);
        StatelessProgrammableSwitch.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.StatelessProgrammableSwitch;
            self.name = "Stateless Programmable Switch";
            self.definition = ρσ_list_decorate([ "ProgrammableSwitchEvent", "Name", "ServiceLabelIndex" ]);
            self.ServiceLabelIndex = null;
            self.responsible = null;
        };
        if (!StatelessProgrammableSwitch.prototype.__init__.__argnames__) Object.defineProperties(StatelessProgrammableSwitch.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        StatelessProgrammableSwitch.__argnames__ = StatelessProgrammableSwitch.prototype.__init__.__argnames__;
        StatelessProgrammableSwitch.__handles_kwarg_interpolation__ = StatelessProgrammableSwitch.prototype.__init__.__handles_kwarg_interpolation__;
        StatelessProgrammableSwitch.prototype.add_to = function add_to(accessory, primary) {
            var self = this;
            var c;
            Default.prototype.add_to.call(self, accessory, primary);
            var ρσ_Iter5 = ρσ_Iterable(self.characteristics);
            for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                c = ρσ_Iter5[ρσ_Index5];
                if ((c === "ProgrammableSwitchEvent" || typeof c === "object" && ρσ_equals(c, "ProgrammableSwitchEvent"))) {
                    (ρσ_expr_temp = self.characteristics)[(typeof c === "number" && c < 0) ? ρσ_expr_temp.length + c : c].responsible = self.responsible;
                }
                if ((c === "ServiceLabelIndex" || typeof c === "object" && ρσ_equals(c, "ServiceLabelIndex"))) {
                    (ρσ_expr_temp = self.characteristics)[(typeof c === "number" && c < 0) ? ρσ_expr_temp.length + c : c].ServiceLabelIndex = self.ServiceLabelIndex;
                }
            }
        };
        if (!StatelessProgrammableSwitch.prototype.add_to.__argnames__) Object.defineProperties(StatelessProgrammableSwitch.prototype.add_to, {
            __argnames__ : {value: ["accessory", "primary"]}
        });
        StatelessProgrammableSwitch.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        StatelessProgrammableSwitch.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(StatelessProgrammableSwitch.prototype, "__bases__", {value: [Default]});

        function Switch() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Switch.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Switch, Default);
        Switch.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Switch;
            self.name = "Switch";
            self.definition = ρσ_list_decorate([ "On", "Name" ]);
        };
        if (!Switch.prototype.__init__.__argnames__) Object.defineProperties(Switch.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Switch.__argnames__ = Switch.prototype.__init__.__argnames__;
        Switch.__handles_kwarg_interpolation__ = Switch.prototype.__init__.__handles_kwarg_interpolation__;
        Switch.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Switch.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Switch.prototype, "__bases__", {value: [Default]});

        function TemperatureSensor() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            TemperatureSensor.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(TemperatureSensor, Sensor);
        TemperatureSensor.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Sensor.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.TemperatureSensor;
            self.name = "Temperature Sensor";
            self.definition.append("CurrentTemperature");
        };
        if (!TemperatureSensor.prototype.__init__.__argnames__) Object.defineProperties(TemperatureSensor.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        TemperatureSensor.__argnames__ = TemperatureSensor.prototype.__init__.__argnames__;
        TemperatureSensor.__handles_kwarg_interpolation__ = TemperatureSensor.prototype.__init__.__handles_kwarg_interpolation__;
        TemperatureSensor.prototype.__repr__ = function __repr__ () {
            if(Sensor.prototype.__repr__) return Sensor.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        TemperatureSensor.prototype.__str__ = function __str__ () {
            if(Sensor.prototype.__str__) return Sensor.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(TemperatureSensor.prototype, "__bases__", {value: [Sensor]});

        function Thermostat() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Thermostat.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Thermostat, Default);
        Thermostat.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Thermostat;
            self.name = "Thermostat";
            self.definition = ρσ_list_decorate([ "CurrentHeatingCoolingState", "TargetHeatingCoolingState", "CurrentTemperature", "TargetTemperature", "TemperatureDisplayUnits", "CoolingThresholdTemperature", "CurrentRelativeHumidity", "HeatingThresholdTemperature", "Name", "TargetRelativeHumidity" ]);
        };
        if (!Thermostat.prototype.__init__.__argnames__) Object.defineProperties(Thermostat.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Thermostat.__argnames__ = Thermostat.prototype.__init__.__argnames__;
        Thermostat.__handles_kwarg_interpolation__ = Thermostat.prototype.__init__.__handles_kwarg_interpolation__;
        Thermostat.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Thermostat.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Thermostat.prototype, "__bases__", {value: [Default]});

        function Window() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Window.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Window, Default);
        Window.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            if (!ρσ_exists.n(self.index)) {
                self.index = "";
            }
            self.serviceID = HomeKit.Services.Window;
            self.name = "Window";
            self.definition = ρσ_list_decorate([ "TargetPosition" + self.index, "CurrentPosition" + self.index, "PositionState", "Name", "HoldPosition", "ObstructionDetected" ]);
        };
        if (!Window.prototype.__init__.__argnames__) Object.defineProperties(Window.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Window.__argnames__ = Window.prototype.__init__.__argnames__;
        Window.__handles_kwarg_interpolation__ = Window.prototype.__init__.__handles_kwarg_interpolation__;
        Window.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Window.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Window.prototype, "__bases__", {value: [Default]});

        function WindowA() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowA.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowA, Window);
        WindowA.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "A";
            Window.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowA.prototype.__init__.__argnames__) Object.defineProperties(WindowA.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowA.__argnames__ = WindowA.prototype.__init__.__argnames__;
        WindowA.__handles_kwarg_interpolation__ = WindowA.prototype.__init__.__handles_kwarg_interpolation__;
        WindowA.prototype.__repr__ = function __repr__ () {
            if(Window.prototype.__repr__) return Window.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowA.prototype.__str__ = function __str__ () {
            if(Window.prototype.__str__) return Window.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowA.prototype, "__bases__", {value: [Window]});

        function WindowB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowB, Window);
        WindowB.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "B";
            Window.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowB.prototype.__init__.__argnames__) Object.defineProperties(WindowB.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowB.__argnames__ = WindowB.prototype.__init__.__argnames__;
        WindowB.__handles_kwarg_interpolation__ = WindowB.prototype.__init__.__handles_kwarg_interpolation__;
        WindowB.prototype.__repr__ = function __repr__ () {
            if(Window.prototype.__repr__) return Window.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowB.prototype.__str__ = function __str__ () {
            if(Window.prototype.__str__) return Window.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowB.prototype, "__bases__", {value: [Window]});

        function WindowC() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowC.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowC, Window);
        WindowC.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "C";
            Window.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowC.prototype.__init__.__argnames__) Object.defineProperties(WindowC.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowC.__argnames__ = WindowC.prototype.__init__.__argnames__;
        WindowC.__handles_kwarg_interpolation__ = WindowC.prototype.__init__.__handles_kwarg_interpolation__;
        WindowC.prototype.__repr__ = function __repr__ () {
            if(Window.prototype.__repr__) return Window.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowC.prototype.__str__ = function __str__ () {
            if(Window.prototype.__str__) return Window.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowC.prototype, "__bases__", {value: [Window]});

        function WindowSimple() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowSimple.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowSimple, Default);
        WindowSimple.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.Window;
            self.name = "Window";
            self.definition = ρσ_list_decorate([ "TargetPositionSimple", "CurrentPositionSimple", "PositionState", "Name" ]);
        };
        if (!WindowSimple.prototype.__init__.__argnames__) Object.defineProperties(WindowSimple.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowSimple.__argnames__ = WindowSimple.prototype.__init__.__argnames__;
        WindowSimple.__handles_kwarg_interpolation__ = WindowSimple.prototype.__init__.__handles_kwarg_interpolation__;
        WindowSimple.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowSimple.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowSimple.prototype, "__bases__", {value: [Default]});

        function WindowCovering() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowCovering.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowCovering, Default);
        WindowCovering.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            if (!ρσ_exists.n(self.index)) {
                self.index = "";
            }
            self.serviceID = HomeKit.Services.WindowCovering;
            self.name = "Window Covering";
            self.definition = ρσ_list_decorate([ "TargetPosition" + self.index, "CurrentPosition" + self.index, "PositionState", "Name", "CurrentHorizontalTiltAngle", "TargetHorizontalTiltAngle", "CurrentVerticalTiltAngle", "TargetVerticalTiltAngle", "HoldPosition", "ObstructionDetected" ]);
        };
        if (!WindowCovering.prototype.__init__.__argnames__) Object.defineProperties(WindowCovering.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowCovering.__argnames__ = WindowCovering.prototype.__init__.__argnames__;
        WindowCovering.__handles_kwarg_interpolation__ = WindowCovering.prototype.__init__.__handles_kwarg_interpolation__;
        WindowCovering.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowCovering.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowCovering.prototype, "__bases__", {value: [Default]});

        function WindowCoveringA() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowCoveringA.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowCoveringA, WindowCovering);
        WindowCoveringA.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "A";
            WindowCovering.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowCoveringA.prototype.__init__.__argnames__) Object.defineProperties(WindowCoveringA.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowCoveringA.__argnames__ = WindowCoveringA.prototype.__init__.__argnames__;
        WindowCoveringA.__handles_kwarg_interpolation__ = WindowCoveringA.prototype.__init__.__handles_kwarg_interpolation__;
        WindowCoveringA.prototype.__repr__ = function __repr__ () {
            if(WindowCovering.prototype.__repr__) return WindowCovering.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowCoveringA.prototype.__str__ = function __str__ () {
            if(WindowCovering.prototype.__str__) return WindowCovering.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowCoveringA.prototype, "__bases__", {value: [WindowCovering]});

        function WindowCoveringB() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowCoveringB.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowCoveringB, WindowCovering);
        WindowCoveringB.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "B";
            WindowCovering.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowCoveringB.prototype.__init__.__argnames__) Object.defineProperties(WindowCoveringB.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowCoveringB.__argnames__ = WindowCoveringB.prototype.__init__.__argnames__;
        WindowCoveringB.__handles_kwarg_interpolation__ = WindowCoveringB.prototype.__init__.__handles_kwarg_interpolation__;
        WindowCoveringB.prototype.__repr__ = function __repr__ () {
            if(WindowCovering.prototype.__repr__) return WindowCovering.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowCoveringB.prototype.__str__ = function __str__ () {
            if(WindowCovering.prototype.__str__) return WindowCovering.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowCoveringB.prototype, "__bases__", {value: [WindowCovering]});

        function WindowCoveringC() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowCoveringC.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowCoveringC, WindowCovering);
        WindowCoveringC.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.index = "C";
            WindowCovering.prototype.__init__.call(self, bridge4kt, id);
        };
        if (!WindowCoveringC.prototype.__init__.__argnames__) Object.defineProperties(WindowCoveringC.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowCoveringC.__argnames__ = WindowCoveringC.prototype.__init__.__argnames__;
        WindowCoveringC.__handles_kwarg_interpolation__ = WindowCoveringC.prototype.__init__.__handles_kwarg_interpolation__;
        WindowCoveringC.prototype.__repr__ = function __repr__ () {
            if(WindowCovering.prototype.__repr__) return WindowCovering.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowCoveringC.prototype.__str__ = function __str__ () {
            if(WindowCovering.prototype.__str__) return WindowCovering.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowCoveringC.prototype, "__bases__", {value: [WindowCovering]});

        function WindowCoveringSimple() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            WindowCoveringSimple.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(WindowCoveringSimple, Default);
        WindowCoveringSimple.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Default.prototype.__init__.call(self, bridge4kt, id);
            self.serviceID = HomeKit.Services.WindowCovering;
            self.name = "Window Covering";
            self.definition = ρσ_list_decorate([ "TargetPositionSimple", "CurrentPositionSimple", "PositionState", "Name" ]);
        };
        if (!WindowCoveringSimple.prototype.__init__.__argnames__) Object.defineProperties(WindowCoveringSimple.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        WindowCoveringSimple.__argnames__ = WindowCoveringSimple.prototype.__init__.__argnames__;
        WindowCoveringSimple.__handles_kwarg_interpolation__ = WindowCoveringSimple.prototype.__init__.__handles_kwarg_interpolation__;
        WindowCoveringSimple.prototype.__repr__ = function __repr__ () {
            if(Default.prototype.__repr__) return Default.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        WindowCoveringSimple.prototype.__str__ = function __str__ () {
            if(Default.prototype.__str__) return Default.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(WindowCoveringSimple.prototype, "__bases__", {value: [Default]});

        function create(bridge4kt, realID, definition) {
            var known_services, pD, type, s;
            if (!((typeof bridge4kt !== "undefined" && bridge4kt !== null))) throw new AssertionError;

            if (!((typeof realID !== "undefined" && realID !== null))) throw new AssertionError;

            if (!((typeof definition !== "undefined" && definition !== null))) throw new AssertionError;

            known_services = (function(){
                var ρσ_d = {};
                ρσ_d["BatteryService"] = BatteryService;
                ρσ_d["BridgingState"] = BridgingState;
                ρσ_d["CarbonDioxideSensor"] = CarbonDioxideSensor;
                ρσ_d["CarbonMonoxideSensor"] = CarbonMonoxideSensor;
                ρσ_d["ContactSensor"] = ContactSensor;
                ρσ_d["DoorA"] = DoorA;
                ρσ_d["DoorB"] = DoorB;
                ρσ_d["DoorC"] = DoorC;
                ρσ_d["DoorSimple"] = DoorSimple;
                ρσ_d["GarageDoorOpener"] = GarageDoorOpener;
                ρσ_d["HumiditySensor"] = HumiditySensor;
                ρσ_d["LeakSensor"] = LeakSensor;
                ρσ_d["Lightbulb"] = Lightbulb;
                ρσ_d["LightbulbWhite"] = LightbulbWhite;
                ρσ_d["MotionSensor"] = MotionSensor;
                ρσ_d["OccupancySensor"] = OccupancySensor;
                ρσ_d["Outlet"] = Outlet;
                ρσ_d["ServiceLabel"] = ServiceLabel;
                ρσ_d["Slat"] = Slat;
                ρσ_d["SmokeSensor"] = SmokeSensor;
                ρσ_d["StatelessProgrammableSwitch"] = StatelessProgrammableSwitch;
                ρσ_d["Switch"] = Switch;
                ρσ_d["TemperatureSensor"] = TemperatureSensor;
                ρσ_d["Thermostat"] = Thermostat;
                ρσ_d["WindowA"] = WindowA;
                ρσ_d["WindowB"] = WindowB;
                ρσ_d["WindowC"] = WindowC;
                ρσ_d["WindowSimple"] = WindowSimple;
                ρσ_d["WindowCoveringA"] = WindowCoveringA;
                ρσ_d["WindowCoveringB"] = WindowCoveringB;
                ρσ_d["WindowCoveringC"] = WindowCoveringC;
                ρσ_d["WindowCoveringSimple"] = WindowCoveringSimple;
                return ρσ_d;
            }).call(this);
            if (ρσ_in(definition, ρσ_list_decorate([ "WindowCovering", "Door", "Window" ]))) {
                pD = new devices.pDevice(realID);
                type = pD.genericID.split(".");
                if (ρσ_equals(len(type), 3)) {
                    if ((type[1] === "09" || typeof type[1] === "object" && ρσ_equals(type[1], "09"))) {
                        definition += "Simple";
                    } else if ((type[1] === "11" || typeof type[1] === "object" && ρσ_equals(type[1], "11"))) {
                        if ((type[2] === "05" || typeof type[2] === "object" && ρσ_equals(type[2], "05"))) {
                            definition += "A";
                        } else if ((type[2] === "06" || typeof type[2] === "object" && ρσ_equals(type[2], "06"))) {
                            definition += "B";
                        } else if ((type[2] === "07" || typeof type[2] === "object" && ρσ_equals(type[2], "07"))) {
                            definition += "C";
                        }
                    }
                }
            }
            if (ρσ_in(definition, known_services)) {
                s = new known_services[(typeof definition === "number" && definition < 0) ? known_services.length + definition : definition](bridge4kt, realID);
                return s;
            }
            return null;
        };
        if (!create.__argnames__) Object.defineProperties(create, {
            __argnames__ : {value: ["bridge4kt", "realID", "definition"]}
        });

        function check_sensor_capabilities(bridge4kt, pDev) {
            var sensor_definition, sensors, s, d, sensor;
            if (!((typeof bridge4kt !== "undefined" && bridge4kt !== null) && (typeof pDev !== "undefined" && pDev !== null))) {
                return null;
            }
            sensor_definition = ρσ_list_decorate([]);
            sensors = (function(){
                var ρσ_d = {};
                ρσ_d["SmokeDetected"] = "SmokeSensor";
                ρσ_d["CarbonMonoxideDetected"] = "CarbonMonoxideSensor";
                ρσ_d["CarbonDioxideDetected"] = "CarbonDioxideSensor";
                ρσ_d["LeakDetected"] = "LeakSensor";
                ρσ_d["ContactSensorState"] = "ContactSensor";
                ρσ_d["MotionDetected"] = "MotionSensor";
                ρσ_d["CurrentTemperature"] = "TemperatureSensor";
                return ρσ_d;
            }).call(this);
            var ρσ_Iter6 = ρσ_Iterable(sensors);
            for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                sensor = ρσ_Iter6[ρσ_Index6];
                s = characteristics_create(bridge4kt, pDev.id, sensor);
                if ((typeof s !== "undefined" && s !== null)) {
                    d = devices.detect_vDev(bridge4kt.controller, pDev.id, s.detectType);
                    if ((typeof d !== "undefined" && d !== null)) {
                        sensor_definition.append(sensors[(typeof sensor === "number" && sensor < 0) ? sensors.length + sensor : sensor]);
                    }
                }
            }
            if (len(sensor_definition) > 0) {
                return sensor_definition;
            }
            return null;
        };
        if (!check_sensor_capabilities.__annotations__) Object.defineProperties(check_sensor_capabilities, {
            __annotations__ : {value: {pDev: devices.pDevice}},
            __argnames__ : {value: ["bridge4kt", "pDev"]}
        });

        ρσ_modules.services.HomeKit = HomeKit;
        ρσ_modules.services.HKAccessory = HKAccessory;
        ρσ_modules.services.HKService = HKService;
        ρσ_modules.services.out = out;
        ρσ_modules.services.Base = Base;
        ρσ_modules.services.Default = Default;
        ρσ_modules.services.Sensor = Sensor;
        ρσ_modules.services.AccessoryInformation = AccessoryInformation;
        ρσ_modules.services.AirPurifier = AirPurifier;
        ρσ_modules.services.AirQualitySensor = AirQualitySensor;
        ρσ_modules.services.BatteryService = BatteryService;
        ρσ_modules.services.BridgingState = BridgingState;
        ρσ_modules.services.CameraRTPStreamManagement = CameraRTPStreamManagement;
        ρσ_modules.services.CarbonDioxideSensor = CarbonDioxideSensor;
        ρσ_modules.services.CarbonMonoxideSensor = CarbonMonoxideSensor;
        ρσ_modules.services.ContactSensor = ContactSensor;
        ρσ_modules.services.Door = Door;
        ρσ_modules.services.DoorA = DoorA;
        ρσ_modules.services.DoorB = DoorB;
        ρσ_modules.services.DoorC = DoorC;
        ρσ_modules.services.DoorSimple = DoorSimple;
        ρσ_modules.services.Doorbell = Doorbell;
        ρσ_modules.services.Fan = Fan;
        ρσ_modules.services.FanV2 = FanV2;
        ρσ_modules.services.FilterMaintenance = FilterMaintenance;
        ρσ_modules.services.GarageDoorOpener = GarageDoorOpener;
        ρσ_modules.services.HumiditySensor = HumiditySensor;
        ρσ_modules.services.LeakSensor = LeakSensor;
        ρσ_modules.services.Lightbulb = Lightbulb;
        ρσ_modules.services.LightbulbWhite = LightbulbWhite;
        ρσ_modules.services.LightSensor = LightSensor;
        ρσ_modules.services.LockManagement = LockManagement;
        ρσ_modules.services.LockMechanism = LockMechanism;
        ρσ_modules.services.Microphone = Microphone;
        ρσ_modules.services.MotionSensor = MotionSensor;
        ρσ_modules.services.OccupancySensor = OccupancySensor;
        ρσ_modules.services.Outlet = Outlet;
        ρσ_modules.services.SecuritySystem = SecuritySystem;
        ρσ_modules.services.ServiceLabel = ServiceLabel;
        ρσ_modules.services.Slat = Slat;
        ρσ_modules.services.SmokeSensor = SmokeSensor;
        ρσ_modules.services.Speaker = Speaker;
        ρσ_modules.services.StatelessProgrammableSwitch = StatelessProgrammableSwitch;
        ρσ_modules.services.Switch = Switch;
        ρσ_modules.services.TemperatureSensor = TemperatureSensor;
        ρσ_modules.services.Thermostat = Thermostat;
        ρσ_modules.services.Window = Window;
        ρσ_modules.services.WindowA = WindowA;
        ρσ_modules.services.WindowB = WindowB;
        ρσ_modules.services.WindowC = WindowC;
        ρσ_modules.services.WindowSimple = WindowSimple;
        ρσ_modules.services.WindowCovering = WindowCovering;
        ρσ_modules.services.WindowCoveringA = WindowCoveringA;
        ρσ_modules.services.WindowCoveringB = WindowCoveringB;
        ρσ_modules.services.WindowCoveringC = WindowCoveringC;
        ρσ_modules.services.WindowCoveringSimple = WindowCoveringSimple;
        ρσ_modules.services.create = create;
        ρσ_modules.services.check_sensor_capabilities = check_sensor_capabilities;
    })();

    (function(){
        var __name__ = "accessories";
        
        
        
        
        
        
        var services = ρσ_modules.services;

        var devices = ρσ_modules.devices;

        function out() {
            var key;
            var ρσ_Iter0 = ρσ_Iterable(arguments);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                key = ρσ_Iter0[ρσ_Index0];
                if (_.isObject(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key])) {
                    arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key] = JSON.stringify(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key]);
                }
            }
            debugPrint.apply(this, arguments);
            return true;
        };

        function Base() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Base.prototype.__init__.apply(this, arguments);
        }
        Base.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            self.bridge = bridge4kt;
            self.id = id;
            self.name = "";
            self.config = (function(){
                var ρσ_d = {};
                ρσ_d["name"] = "";
                ρσ_d["manufacturer"] = "";
                ρσ_d["model"] = "";
                ρσ_d["serial"] = "";
                return ρσ_d;
            }).call(this);
            self.services = {};
            self.definition = ρσ_list_decorate([]);
            self.accessory = null;
        };
        if (!Base.prototype.__init__.__argnames__) Object.defineProperties(Base.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Base.__argnames__ = Base.prototype.__init__.__argnames__;
        Base.__handles_kwarg_interpolation__ = Base.prototype.__init__.__handles_kwarg_interpolation__;
        Base.prototype.add_to = function add_to(collection) {
            var self = this;
            console.log("HK Accessory '" + self.name + "' created");
            self.accessory = collection.addAccessory(self.config.name, self.config.manufacturer, self.config.model, self.config.serial);
            return self.accessory;
        };
        if (!Base.prototype.add_to.__annotations__) Object.defineProperties(Base.prototype.add_to, {
            __annotations__ : {value: {collection: HKAccessoryCollection}},
            __argnames__ : {value: ["collection"]}
        });
        Base.prototype.update = function update() {
            var self = this;
        };
        Base.prototype.remove = function remove() {
            var self = this;
            var service;
            console.log("Removing HK Accessory '" + self.name + "'");
            var ρσ_Iter1 = ρσ_Iterable(self.services);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                service = ρσ_Iter1[ρσ_Index1];
                (ρσ_expr_temp = self.services)[(typeof service === "number" && service < 0) ? ρσ_expr_temp.length + service : service].remove();
            }
            if (ρσ_exists.n(self.accessory)) {
                self.accessory.remove();
            }
            self.services = {};
            self.accessory = null;
        };
        Base.prototype.__repr__ = function __repr__ () {
                        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Base.prototype.__str__ = function __str__ () {
            return this.__repr__();
        };
        Object.defineProperty(Base.prototype, "__bases__", {value: []});

        function Main() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Main.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Main, Base);
        Main.prototype.__init__ = function __init__(bridge4kt, id) {
            var self = this;
            Base.prototype.__init__.call(self, bridge4kt, id);
            self.config = (function(){
                var ρσ_d = {};
                ρσ_d["name"] = bridge4kt.meta.moduleName;
                ρσ_d["manufacturer"] = bridge4kt.meta.author;
                ρσ_d["model"] = bridge4kt.meta.version;
                ρσ_d["serial"] = bridge4kt.meta.serial;
                return ρσ_d;
            }).call(this);
        };
        if (!Main.prototype.__init__.__argnames__) Object.defineProperties(Main.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id"]}
        });
        Main.__argnames__ = Main.prototype.__init__.__argnames__;
        Main.__handles_kwarg_interpolation__ = Main.prototype.__init__.__handles_kwarg_interpolation__;
        Main.prototype.add_to = function add_to(collection) {
            var self = this;
            var ac, s;
            self.name = "Bridge4KT";
            ac = Base.prototype.add_to.call(self, collection);
            s = ac.addService(HomeKit.Services.HAPProtocolInformation, "Bridge4KT");
            s.addCharacteristic(HomeKit.Characteristics.Version, "string", "1.2", ρσ_list_decorate([ "pr", "ev" ]));
            return ac;
        };
        if (!Main.prototype.add_to.__annotations__) Object.defineProperties(Main.prototype.add_to, {
            __annotations__ : {value: {collection: HKAccessoryCollection}},
            __argnames__ : {value: ["collection"]}
        });
        Main.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Main.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Main.prototype, "__bases__", {value: [Base]});

        function Creator() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Creator.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Creator, Base);
        Creator.prototype.__init__ = function __init__(bridge4kt, id, definition) {
            var self = this;
            var pDev, name, manufacturer, model, sn, data, cc;
            Base.prototype.__init__.call(self, bridge4kt, id);
            if (!_.isArray(definition)) {
                definition = ρσ_list_decorate([ definition ]);
            }
            self.definition = definition;
            pDev = new devices.pDevice(self.id);
            name = null;
            manufacturer = null;
            model = null;
            sn = null;
            data = pDev.data;
            if ((typeof data !== "undefined" && data !== null)) {
                name = data.givenName.value;
                manufacturer = data.vendorString.value;
            }
            cc = pDev.commandClass(114);
            if ((typeof cc !== "undefined" && cc !== null)) {
                data = cc.data;
                if ((typeof data !== "undefined" && data !== null)) {
                    model = data.productId.value;
                    sn = data.serialNumber.value;
                }
            }
            if (name === null) {
                name = "Device without name";
            }
            if (manufacturer === null) {
                manufacturer = "Unknown manufacturer";
            }
            if (model === null) {
                model = "No model identifier";
            }
            if (sn === null) {
                sn = "Not provided";
            } else if (_.isArray(sn)) {
                sn = sn.join(".");
                sn = sn.replace(/^(0.)*/, "");
            }
            self.config = (function(){
                var ρσ_d = {};
                ρσ_d["name"] = name;
                ρσ_d["manufacturer"] = manufacturer;
                ρσ_d["model"] = model;
                ρσ_d["serial"] = sn;
                return ρσ_d;
            }).call(this);
        };
        if (!Creator.prototype.__init__.__argnames__) Object.defineProperties(Creator.prototype.__init__, {
            __argnames__ : {value: ["bridge4kt", "id", "definition"]}
        });
        Creator.__argnames__ = Creator.prototype.__init__.__argnames__;
        Creator.__handles_kwarg_interpolation__ = Creator.prototype.__init__.__handles_kwarg_interpolation__;
        Creator.prototype.add_to = function add_to(collection) {
            var self = this;
            var HSAccessoryInformation, HCIdentify, is_primary, s, ac, index, definition, detectType, vDev, states, inst, sli, i, ds, service, char, ρσ_unpack;
            HSAccessoryInformation = HomeKit.stPre + HomeKit.Services.AccessoryInformation + HomeKit.stPost;
            HCIdentify = HomeKit.stPre + HomeKit.Characteristics.Identify + HomeKit.stPost;
            is_primary = false;
            s = self.definition[0];
            if (ρσ_in(s, self.known_acc)) {
                self.name = s;
                is_primary = true;
            } else if (s.toLowerCase().indexOf("sensor") > -1) {
                self.name = "Sensor";
                is_primary = true;
            } else if (s.toLowerCase().indexOf("windowcovering") > -1) {
                self.name = "WindowCovering";
                is_primary = true;
            } else if (s.toLowerCase().indexOf("lightbulb") > -1) {
                self.name = "Lightbulb";
                is_primary = true;
            } else if (s.toLowerCase().indexOf("programmableswitch") > -1) {
                self.name = "ProgrammableSwitch";
                is_primary = true;
            } else {
                self.name = "Other";
            }
            if ((collection.nextAID === 7 || typeof collection.nextAID === "object" && ρσ_equals(collection.nextAID, 7))) {
                collection.nextAID += 1;
            }
            ac = Base.prototype.add_to.call(self, collection);
            index = 0;
            definition = self.definition.slice();
            definition.push("BridgingState");
            var ρσ_Iter2 = ρσ_Iterable(enumerate(definition));
            for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                ρσ_unpack = ρσ_Iter2[ρσ_Index2];
                index = ρσ_unpack[0];
                service = ρσ_unpack[1];
                if ((service === "StatelessProgrammableSwitch" || typeof service === "object" && ρσ_equals(service, "StatelessProgrammableSwitch"))) {
                    detectType = (function(){
                        var ρσ_d = {};
                        ρσ_d["deviceType"] = "sensorDiscrete";
                        return ρσ_d;
                    }).call(this);
                    vDev = devices.detect_vDev(self.bridge.controller, self.id, detectType);
                    if ((typeof vDev !== "undefined" && vDev !== null)) {
                        states = vDev.get("metrics:discreteStates");
                        inst = {};
                        sli = 0;
                        var ρσ_Iter3 = ρσ_Iterable(states);
                        for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                            ds = ρσ_Iter3[ρσ_Index3];
                            i = ds.slice(0, -1);
                            if (!ρσ_exists.n(inst[(typeof i === "number" && i < 0) ? inst.length + i : i])) {
                                s = services.create(self.bridge, self.id, service);
                                if ((typeof s !== "undefined" && s !== null)) {
                                    s.responsible = i;
                                    s.ServiceLabelIndex = sli = sli + 1;
                                    inst[(typeof i === "number" && i < 0) ? inst.length + i : i] = true;
                                    (ρσ_expr_temp = self.services)[ρσ_bound_index(service + "." + i, ρσ_expr_temp)] = s;
                                    s.add_to(ac);
                                }
                            }
                        }
                        if (len(inst) > 0) {
                            service = "ServiceLabel";
                            s = services.create(self.bridge, self.id, service);
                            if ((typeof s !== "undefined" && s !== null)) {
                                (ρσ_expr_temp = self.services)[(typeof service === "number" && service < 0) ? ρσ_expr_temp.length + service : service] = s;
                                s.add_to(ac);
                            }
                        }
                    }
                } else {
                    s = services.create(self.bridge, self.id, service);
                    if ((typeof s !== "undefined" && s !== null)) {
                        (ρσ_expr_temp = self.services)[(typeof service === "number" && service < 0) ? ρσ_expr_temp.length + service : service] = s;
                        s.add_to(ac, (index === 0 || typeof index === "object" && ρσ_equals(index, 0)) && is_primary === true);
                        if ((index === 0 || typeof index === "object" && ρσ_equals(index, 0)) && is_primary === true) {
                            var ρσ_Iter4 = ρσ_Iterable(ac.services);
                            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                                service = ρσ_Iter4[ρσ_Index4];
                                if ((service.type === HSAccessoryInformation || typeof service.type === "object" && ρσ_equals(service.type, HSAccessoryInformation))) {
                                    var ρσ_Iter5 = ρσ_Iterable(service.characteristics);
                                    for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                                        char = ρσ_Iter5[ρσ_Index5];
                                        if ((char.type === HCIdentify || typeof char.type === "object" && ρσ_equals(char.type, HCIdentify))) {
                                            if (s.replace_identify_of(service) !== null) {
                                                char.remove();
                                            }
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return ac;
        };
        if (!Creator.prototype.add_to.__annotations__) Object.defineProperties(Creator.prototype.add_to, {
            __annotations__ : {value: {collection: HKAccessoryCollection}},
            __argnames__ : {value: ["collection"]}
        });
        Creator.prototype.update = function update() {
            var self = this;
            var service;
            var ρσ_Iter6 = ρσ_Iterable(self.services);
            for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                service = ρσ_Iter6[ρσ_Index6];
                (ρσ_expr_temp = self.services)[(typeof service === "number" && service < 0) ? ρσ_expr_temp.length + service : service].update();
            }
        };
        Creator.prototype.__repr__ = function __repr__ () {
            if(Base.prototype.__repr__) return Base.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Creator.prototype.__str__ = function __str__ () {
            if(Base.prototype.__str__) return Base.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Creator.prototype, "__bases__", {value: [Base]});
        Creator.prototype.known_acc = ρσ_list_decorate([ "Garage", "Lightbulb", "Outlet", "Switch", "Thermostat", "Sensor", "Door", "Window", "WindowCovering", "ProgrammableSwitch" ]);

        function create(bridge4kt, realID, definition) {
            if (!((typeof bridge4kt !== "undefined" && bridge4kt !== null))) throw new AssertionError;

            if (!((typeof realID !== "undefined" && realID !== null))) throw new AssertionError;

            if (!((typeof definition !== "undefined" && definition !== null))) throw new AssertionError;

            return new Creator(bridge4kt, realID, definition);
        };
        if (!create.__argnames__) Object.defineProperties(create, {
            __argnames__ : {value: ["bridge4kt", "realID", "definition"]}
        });

        ρσ_modules.accessories.HomeKit = HomeKit;
        ρσ_modules.accessories.HKAccessory = HKAccessory;
        ρσ_modules.accessories.HKAccessoryCollection = HKAccessoryCollection;
        ρσ_modules.accessories.out = out;
        ρσ_modules.accessories.Base = Base;
        ρσ_modules.accessories.Main = Main;
        ρσ_modules.accessories.Creator = Creator;
        ρσ_modules.accessories.create = create;
    })();

    (function(){

        var __name__ = "__main__";


        
        
        
        
        
        
        
        
        
        
        var accessories = ρσ_modules.accessories;

        var devices = ρσ_modules.devices;

        var services = ρσ_modules.services;

        function out() {
            var key;
            var ρσ_Iter0 = ρσ_Iterable(arguments);
            for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
                key = ρσ_Iter0[ρσ_Index0];
                if (_.isObject(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key])) {
                    arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key] = JSON.stringify(arguments[(typeof key === "number" && key < 0) ? arguments.length + key : key]);
                }
            }
            debugPrint.apply(this, arguments);
            return true;
        };

        function Bridge4KT() {
            if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
            Bridge4KT.prototype.__init__.apply(this, arguments);
        }
        ρσ_extends(Bridge4KT, AutomationModule);
        Bridge4KT.prototype.__init__ = function __init__(id, controller) {
            var self = this;
            AutomationModule.call(self, id, controller);
        };
        if (!Bridge4KT.prototype.__init__.__argnames__) Object.defineProperties(Bridge4KT.prototype.__init__, {
            __argnames__ : {value: ["id", "controller"]}
        });
        Bridge4KT.__argnames__ = Bridge4KT.prototype.__init__.__argnames__;
        Bridge4KT.__handles_kwarg_interpolation__ = Bridge4KT.prototype.__init__.__handles_kwarg_interpolation__;
        Bridge4KT.prototype.merge_definition_with_tags = function merge_definition_with_tags(pDev, definition) {
            var self = this;
            var primary, secondary, skip, devices, device, tags, t, pos, tag, d, s, retval;
            if (!(typeof pDev !== "undefined" && pDev !== null)) {
                return null;
            }
            if (!(typeof definition !== "undefined" && definition !== null)) {
                definition = ρσ_list_decorate([]);
            }
            primary = (ρσ_exists.n(definition[0])) ? definition[0] : null;
            secondary = ((typeof definition !== "undefined" && definition !== null)) ? definition.slice(1) : ρσ_list_decorate([]);
            skip = ρσ_list_decorate([]);
            devices = pDev.vDevices;
            if (!(typeof devices !== "undefined" && devices !== null) || len(devices) < 1) {
                return null;
            }
            var ρσ_Iter1 = ρσ_Iterable(devices);
            for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
                d = ρσ_Iter1[ρσ_Index1];
                device = devices[(typeof d === "number" && d < 0) ? devices.length + d : d];
                tags = device.tags;
                var ρσ_Iter2 = ρσ_Iterable(tags);
                for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
                    tag = ρσ_Iter2[ρσ_Index2];
                    t = str.split(tag, ":");
                    if (ρσ_equals(len(t), 1)) {
                        if (!(typeof primary !== "undefined" && primary !== null)) {
                            primary = t[0];
                        } else {
                            pos = secondary.indexOf(t[0]);
                            if ((pos === -1 || typeof pos === "object" && ρσ_equals(pos, -1))) {
                                secondary.push(t[0]);
                            }
                        }
                    } else if (ρσ_equals(len(t), 2)) {
                        if (ρσ_equals(t[1].toLowerCase(), "primary")) {
                            if ((typeof primary !== "undefined" && primary !== null)) {
                                pos = secondary.indexOf(primary);
                                if ((pos === -1 || typeof pos === "object" && ρσ_equals(pos, -1))) {
                                    secondary.push(primary);
                                }
                            }
                            primary = t[0];
                        } else if (ρσ_equals(t[1].toLowerCase(), "skip")) {
                            pos = skip.indexOf(t[0]);
                            if ((pos === -1 || typeof pos === "object" && ρσ_equals(pos, -1))) {
                                skip.push(t[0]);
                            }
                        } else if (ρσ_equals(t[0].toLowerCase(), "lightbulb") && ρσ_equals(t[1].toLowerCase(), "white")) {
                            pos = skip.indexOf(t[0]);
                            if ((pos === -1 || typeof pos === "object" && ρσ_equals(pos, -1))) {
                                skip.push(t[0]);
                            }
                            secondary.push("LightbulbWhite");
                        }
                    }
                }
            }
            if (len(skip) > 0) {
                var ρσ_Iter3 = ρσ_Iterable(skip);
                for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                    s = ρσ_Iter3[ρσ_Index3];
                    if ((primary === s || typeof primary === "object" && ρσ_equals(primary, s))) {
                        primary = null;
                    } else {
                        pos = secondary.indexOf(s);
                        if ((pos !== -1 && (typeof pos !== "object" || ρσ_not_equals(pos, -1)))) {
                            secondary.splice(pos, 1);
                        }
                    }
                }
                if (!(typeof primary !== "undefined" && primary !== null) && len(secondary) > 0) {
                    primary = secondary.shift(1);
                }
            }
            if ((typeof primary !== "undefined" && primary !== null)) {
                secondary.unshift(primary);
                retval = _.uniq(secondary);
            } else if (len(skip) > 0) {
                retval = ρσ_list_decorate([]);
            } else {
                retval = null;
            }
            return retval;
        };
        if (!Bridge4KT.prototype.merge_definition_with_tags.__annotations__) Object.defineProperties(Bridge4KT.prototype.merge_definition_with_tags, {
            __annotations__ : {value: {pDev: Object, definition: ρσ_list_decorate([ String ]), return: ρσ_list_decorate([ String ])}},
            __argnames__ : {value: ["pDev", "definition"]}
        });
        Bridge4KT.prototype.process_changes = function process_changes(vDev_from_zway) {
            var self = this;
            var instance, vDev, pDev, config, id, definition, dd, sensors, d, a, zway, config_text, data, name, c, cc, l, tags, pos, tag;
            instance = 0;
            vDev = devices.create(vDev_from_zway);
            if (vDev === null) {
                return null;
            }
            pDev = (ρσ_expr_temp = self.devices)[ρσ_bound_index(vDev.parentID, ρσ_expr_temp)];
            if (!(typeof pDev !== "undefined" && pDev !== null)) {
                (ρσ_expr_temp = self.devices)[ρσ_bound_index(vDev.parentID, ρσ_expr_temp)] = pDev = new devices.pDevice(vDev.parentID);
            }
            (ρσ_expr_temp = pDev.vDevices)[ρσ_bound_index(vDev.zway.id, ρσ_expr_temp)] = vDev;
            config = pDev.config;
            if (!(typeof config !== "undefined" && config !== null)) {
                pDev.config = config = {};
            }
            id = null;
            definition = null;
            if (ρσ_exists.n((ρσ_expr_temp = self.known_devices)[ρσ_bound_index(pDev.manufacturerID, ρσ_expr_temp)])) {
                id = pDev.manufacturerID;
                definition = (ρσ_expr_temp = self.known_devices)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id];
            } else if (ρσ_exists.n((ρσ_expr_temp = self.known_generic)[ρσ_bound_index(pDev.genericID, ρσ_expr_temp)])) {
                id = pDev.genericID;
                definition = (ρσ_expr_temp = self.known_generic)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id];
            } else if (ρσ_exists.n((ρσ_expr_temp = self.known_fp)[ρσ_bound_index(pDev.hashedFingerprint, ρσ_expr_temp)])) {
                id = pDev.hashedFingerprint;
                definition = (ρσ_expr_temp = self.known_fp)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id];
            }
            if (!_.isArray(definition)) {
                definition = ρσ_list_decorate([ definition ]);
            }
            dd = ρσ_list_decorate([]);
            var ρσ_Iter4 = ρσ_Iterable(definition);
            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                d = ρσ_Iter4[ρσ_Index4];
                if ((d === "Sensor" || typeof d === "object" && ρσ_equals(d, "Sensor"))) {
                    sensors = services.check_sensor_capabilities(self, pDev);
                    if (sensors !== null) {
                        dd.extend(sensors);
                        id = "detection based on " + id;
                    }
                } else {
                    dd.append(d);
                }
            }
            if (len(dd) > 0) {
                definition = dd;
            } else {
                definition = null;
                id = null;
            }
            d = self.merge_definition_with_tags(pDev, null);
            if ((typeof d !== "undefined" && d !== null)) {
                if ((typeof definition !== "undefined" && definition !== null)) {
                    id = "modification of " + id;
                    definition = self.merge_definition_with_tags(pDev, definition);
                } else {
                    id = "custom";
                    definition = d;
                }
            }
            if ((typeof id !== "undefined" && id !== null) && (typeof definition !== "undefined" && definition !== null)) {
                if (ρσ_exists.n(pDev.accessory)) {
                    if (ρσ_exists.n(config.definition) && (config.definition !== definition && (typeof config.definition !== "object" || ρσ_not_equals(config.definition, definition)))) {
                        pDev.accessory.remove();
                        pDev.accessory = null;
                        config.definition = null;
                    } else {
                        pDev.accessory.update();
                    }
                }
                if (!ρσ_exists.n(pDev.accessory)) {
                    if (definition !== null && len(definition) > 0 && definition[0] !== null) {
                        a = accessories.create(self, pDev.id, definition);
                        if ((typeof a !== "undefined" && a !== null)) {
                            config.definition = definition;
                            config.id = id;
                            pDev.accessory = a;
                            a.add_to(self.hk.accessories);
                        }
                    }
                }
            }
            zway = global["zway"];
            config_text = "";
            var ρσ_Iter5 = ρσ_Iterable(self.devices);
            for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
                id = ρσ_Iter5[ρσ_Index5];
                pDev = (ρσ_expr_temp = self.devices)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id];
                data = (ρσ_expr_temp = zway.devices)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id].data;
                name = data.givenName.value || "";
                c = "(#" + id + ") " + name + ": ";
                cc = pDev.manufacturerID;
                cc += ((len(cc) > 0) ? " / " : "") + pDev.genericID;
                if (ρσ_exists.n(pDev.hashedFingerprint)) {
                    cc += ((len(cc) > 0) ? " / " : "") + pDev.hashedFingerprint;
                }
                l = ρσ_list_decorate([]);
                var ρσ_Iter6 = ρσ_Iterable(pDev.vDevices);
                for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
                    d = ρσ_Iter6[ρσ_Index6];
                    tags = (ρσ_expr_temp = pDev.vDevices)[(typeof d === "number" && d < 0) ? ρσ_expr_temp.length + d : d].tags;
                    if ((typeof tags !== "undefined" && tags !== null)) {
                        var ρσ_Iter7 = ρσ_Iterable(tags);
                        for (var ρσ_Index7 = 0; ρσ_Index7 < ρσ_Iter7.length; ρσ_Index7++) {
                            tag = ρσ_Iter7[ρσ_Index7];
                            pos = l.indexOf(tag);
                            if ((pos === -1 || typeof pos === "object" && ρσ_equals(pos, -1))) {
                                l.push(tag);
                            }
                        }
                    }
                }
                if (len(l) > 0) {
                    cc += ((len(cc) > 0) ? " / " : "") + l.join(", ");
                }
                c += cc + " >> ";
                c += (ρσ_exists.n(pDev.config.id)) ? pDev.config.id : "Unknown Device";
                if (pDev.config.definition === null) {
                    c += ": Device not bridged";
                } else {
                    c += (ρσ_exists.n(pDev.config.id)) ? ": " + pDev.config.definition.join(", ") : "";
                }
                if (len(config_text) > 0) {
                    config_text += "\n";
                }
                config_text += c;
            }
            self.config.config = config_text;
            self.hk_slow_update();
        };
        if (!Bridge4KT.prototype.process_changes.__annotations__) Object.defineProperties(Bridge4KT.prototype.process_changes, {
            __annotations__ : {value: {vDev_from_zway: Object}},
            __argnames__ : {value: ["vDev_from_zway"]}
        });
        Bridge4KT.prototype.init = function init(config) {
            var self = this;
            var zway, mac;
            function parseJSON(content) {
                var c;
                c = content.replace(/(\/{2}.*)/g, "");
                return JSON.parse(c);
            };
            if (!parseJSON.__argnames__) Object.defineProperties(parseJSON, {
                __argnames__ : {value: ["content"]}
            });

            function loadJSON(file) {
                var s;
                s = fs.load(file);
                return parseJSON(s);
            };
            if (!loadJSON.__argnames__) Object.defineProperties(loadJSON, {
                __argnames__ : {value: ["file"]}
            });

            function downloadJSON(file) {
                var check, r, response, j, d;
                if (!ρσ_exists.n(self.meta.tick)) {
                    return null;
                }
                check = new Date(self.meta.tick);
                r = (function(){
                    var ρσ_d = {};
                    ρσ_d["url"] = "https://api.github.com/repos/ralphwetzel/Bridge4KT/commits?path=" + file + "&page=1&per_page=1";
                    ρσ_d["method"] = "GET";
                    ρσ_d["timeout"] = 500;
                    return ρσ_d;
                }).call(this);
                response = http.request(r);
                if (!_.isObject(response)) {
                    return null;
                }
                if ((response.status !== 200 && (typeof response.status !== "object" || ρσ_not_equals(response.status, 200)))) {
                    return null;
                }
                try {
                    j = parseJSON(response.data);
                    out(j[0].commit.committer.date);
                    d = new Date(j[0].commit.committer.date);
                } catch (ρσ_Exception) {
                    ρσ_last_exception = ρσ_Exception;
                    {
                        return null;
                    } 
                }
                if (check > d) {
                    return null;
                }
                r = (function(){
                    var ρσ_d = {};
                    ρσ_d["url"] = "https://raw.githubusercontent.com/ralphwetzel/Bridge4KT/master/" + file;
                    ρσ_d["method"] = "GET";
                    ρσ_d["timeout"] = 5e3;
                    return ρσ_d;
                }).call(this);
                response = http.request(r);
                if (!(_.isObject(response))) throw new AssertionError;

                if ((response.status === 200 || typeof response.status === "object" && ρσ_equals(response.status, 200))) {
                    if (!(out("Bridge4KT: '" + file + "' updated from GitHub!"))) throw new AssertionError;

                    return parseJSON(response.data);
                }
                return null;
            };
            if (!downloadJSON.__argnames__) Object.defineProperties(downloadJSON, {
                __argnames__ : {value: ["file"]}
            });

            function load_known_definitions(file) {
                var kd;
                kd = downloadJSON(file);
                if (kd === null) {
                    kd = loadJSON(self.moduleBasePath() + "/" + file);
                }
                return kd;
            };
            if (!load_known_definitions.__argnames__) Object.defineProperties(load_known_definitions, {
                __argnames__ : {value: ["file"]}
            });

            self.known_devices = load_known_definitions("devices.json");
            self.known_generic = load_known_definitions("generic.json");
            self.known_fp = load_known_definitions("fp.json");
            self.devices = {};
            AutomationModule.prototype.init.call(self, config);
            zway = global["zway"];
            self.hk = new HomeKit(config.name, (function() {
                var ρσ_anonfunc = function (r) {
                    var s, characteristic, c, accessoriesCharacteristics, characteristics, item, i, null_pr, ac, retval;
                    if (!(out("...REQUEST r.method: ", r.method))) throw new AssertionError;

                    if (!(out("...REQUEST r.path: ", r.path))) throw new AssertionError;

                    if (!(out("...REQUEST r.data: ", r.data))) throw new AssertionError;

                    if ((r.method === "GET" || typeof r.method === "object" && ρσ_equals(r.method, "GET")) && (r.path === "/accessories" || typeof r.path === "object" && ρσ_equals(r.path, "/accessories"))) {
                        s = this.accessories.serialize(r);
                        if (!(out(s))) throw new AssertionError;

                        return s;
                    } else if ((r.method === "PUT" || typeof r.method === "object" && ρσ_equals(r.method, "PUT")) && (r.path === "/characteristics" || typeof r.path === "object" && ρσ_equals(r.path, "/characteristics")) && r.data && r.data.characteristics) {
                        var ρσ_Iter8 = ρσ_Iterable(r.data.characteristics);
                        for (var ρσ_Index8 = 0; ρσ_Index8 < ρσ_Iter8.length; ρσ_Index8++) {
                            c = ρσ_Iter8[ρσ_Index8];
                            if (!_.isUndefined(c.value)) {
                                characteristic = this.accessories.find(c.aid, c.iid);
                                if (characteristic) {
                                    characteristic.value = c.value;
                                }
                                this.update(c.aid, c.iid);
                            }
                            if (_.isBoolean(c.ev)) {
                                r.events(c.aid, c.iid, c.ev);
                            }
                        }
                        return null;
                    } else if ((r.method === "GET" || typeof r.method === "object" && ρσ_equals(r.method, "GET")) && ρσ_equals(r.path.slice(0, 20), "/characteristics?id=")) {
                        accessoriesCharacteristics = r.path.slice(20).split(",");
                        characteristics = ρσ_list_decorate([]);
                        var ρσ_Iter9 = ρσ_Iterable(accessoriesCharacteristics);
                        for (var ρσ_Index9 = 0; ρσ_Index9 < ρσ_Iter9.length; ρσ_Index9++) {
                            ac = ρσ_Iter9[ρσ_Index9];
                            item = (function() {
                                var ρσ_Iter = ρσ_Iterable(ac.split(".")), ρσ_Result = [], i;
                                for (var ρσ_Index = 0; ρσ_Index < ρσ_Iter.length; ρσ_Index++) {
                                    i = ρσ_Iter[ρσ_Index];
                                    ρσ_Result.push(int(i));
                                }
                                ρσ_Result = ρσ_list_constructor(ρσ_Result);
                                return ρσ_Result;
                            })();
                            characteristic = this.accessories.find(item[0], item[1]);
                            if (characteristic !== null) {
                                null_pr = characteristic.always_null_pr;
                                if ((typeof null_pr !== "undefined" && null_pr !== null) && (null_pr === true || typeof null_pr === "object" && ρσ_equals(null_pr, true))) {
                                    characteristics.push((function(){
                                        var ρσ_d = {};
                                        ρσ_d["aid"] = item[0];
                                        ρσ_d["iid"] = item[1];
                                        ρσ_d["value"] = null;
                                        return ρσ_d;
                                    }).call(this));
                                } else {
                                    characteristics.push((function(){
                                        var ρσ_d = {};
                                        ρσ_d["aid"] = item[0];
                                        ρσ_d["iid"] = item[1];
                                        ρσ_d["value"] = characteristic.value;
                                        return ρσ_d;
                                    }).call(this));
                                }
                            }
                        }
                        retval = (function(){
                            var ρσ_d = {};
                            ρσ_d["characteristics"] = characteristics;
                            return ρσ_d;
                        }).call(this);
                        if (!(out("RESPONSE TO GET /characteristics?id:", retval))) throw new AssertionError;

                        return retval;
                    } else if ((r.path === "/identify" || typeof r.path === "object" && ρσ_equals(r.path, "/identify"))) {
                        console.log(this.name, "PIN:", this.pin);
                        config.pin = this.pin;
                        self.controller.addNotification("notification", "HomeKit PIN: " + this.pin, "module", "Bridge4KT");
                        return null;
                    }
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["r"]}
                });
                return ρσ_anonfunc;
            })());
            self.hk_slow_update = _.debounce(function () {
                this.hk.update();
            }.bind(self), 1500);
            self.hk.accessories = new HKAccessoryCollection(self.hk);
            mac = new accessories.Main(self);
            mac.add_to(self.hk.accessories);
            self.controller.devices.each(function () {
                var vDev;
                if (len(arguments) > 0) {
                    vDev = arguments[0];
                    this.process_changes(vDev);
                }
            }.bind(self));
            self.onCreated = function () {
                var vDev;
                if (len(arguments) > 0) {
                    vDev = arguments[0];
                    self.process_changes(vDev);
                }
            };
            self.onTags = function () {
                var vDev;
                if (len(arguments) > 0) {
                    vDev = arguments[0];
                    self.process_changes(vDev);
                }
            };
            self.controller.devices.on("created", this.onCreated);
            self.controller.devices.on("change:tags", this.onTags);
            self.controller.devices.on("change:metrics:title", self.hk.update);
            self.hk_slow_update();
            console.log("HomeKit PIN:", self.hk.pin);
            self.config.pin = self.hk.pin;
            self.controller.addNotification("notification", "HomeKit PIN: " + self.hk.pin, "module", "Bridge4KT");
        };
        if (!Bridge4KT.prototype.init.__argnames__) Object.defineProperties(Bridge4KT.prototype.init, {
            __argnames__ : {value: ["config"]}
        });
        Bridge4KT.prototype.stop = function stop() {
            var self = this;
            var device, ac, id;
            AutomationModule.prototype.stop.call(self);
            self.controller.devices.off("created", self.onCreated);
            self.controller.devices.off("change:tags", self.onTags);
            self.controller.devices.off("change:metrics:title", self.hk.update);
            var ρσ_Iter10 = ρσ_Iterable(self.devices);
            for (var ρσ_Index10 = 0; ρσ_Index10 < ρσ_Iter10.length; ρσ_Index10++) {
                id = ρσ_Iter10[ρσ_Index10];
                device = (ρσ_expr_temp = self.devices)[(typeof id === "number" && id < 0) ? ρσ_expr_temp.length + id : id];
                ac = device.accessory;
                if ((typeof ac !== "undefined" && ac !== null)) {
                    ac.remove();
                }
            }
            delete self.devices;
            self.devices = {};
            if (ρσ_exists.n(self.hk)) {
                self.hk.update();
                self.hk.stop();
            }
            delete self.hk.accessories;
            delete self.hk;
            delete self.onCreated;
            delete self.onChange;
            delete self.onTags;
        };
        Bridge4KT.prototype.__repr__ = function __repr__ () {
            if(AutomationModule.prototype.__repr__) return AutomationModule.prototype.__repr__.call(this);
            return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
        };
        Bridge4KT.prototype.__str__ = function __str__ () {
            if(AutomationModule.prototype.__str__) return AutomationModule.prototype.__str__.call(this);
return this.__repr__();
        };
        Object.defineProperty(Bridge4KT.prototype, "__bases__", {value: [AutomationModule]});

        window.Bridge4KT = Bridge4KT;
        _module = Bridge4KT;
    })();
})();