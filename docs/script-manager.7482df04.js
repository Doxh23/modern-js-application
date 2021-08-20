parcelRequire = (function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function (r) {
        return e[n][1][r] || r;
      };
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function (e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function (r, n) {
      e[r] = [
        function (e, r) {
          r.exports = n;
        },
        {},
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
      ? define(function () {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    35: [
      function (require, module, exports) {
        var define;
        var t,
          r = (function (t) {
            "use strict";
            var r,
              e = Object.prototype,
              n = e.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              i = o.iterator || "@@iterator",
              a = o.asyncIterator || "@@asyncIterator",
              c = o.toStringTag || "@@toStringTag";
            function u(t, r, e) {
              return (
                Object.defineProperty(t, r, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[r]
              );
            }
            try {
              u({}, "");
            } catch (t) {
              u = function (t, r, e) {
                return (t[r] = e);
              };
            }
            function h(t, r, e, n) {
              var o = r && r.prototype instanceof g ? r : g,
                i = Object.create(o.prototype),
                a = new G(n || []);
              return (
                (i._invoke = (function (t, r, e) {
                  var n = l;
                  return function (o, i) {
                    if (n === p)
                      throw new Error("Generator is already running");
                    if (n === y) {
                      if ("throw" === o) throw i;
                      return T();
                    }
                    for (e.method = o, e.arg = i; ; ) {
                      var a = e.delegate;
                      if (a) {
                        var c = j(a, e);
                        if (c) {
                          if (c === v) continue;
                          return c;
                        }
                      }
                      if ("next" === e.method) e.sent = e._sent = e.arg;
                      else if ("throw" === e.method) {
                        if (n === l) throw ((n = y), e.arg);
                        e.dispatchException(e.arg);
                      } else "return" === e.method && e.abrupt("return", e.arg);
                      n = p;
                      var u = f(t, r, e);
                      if ("normal" === u.type) {
                        if (((n = e.done ? y : s), u.arg === v)) continue;
                        return { value: u.arg, done: e.done };
                      }
                      "throw" === u.type &&
                        ((n = y), (e.method = "throw"), (e.arg = u.arg));
                    }
                  };
                })(t, e, a)),
                i
              );
            }
            function f(t, r, e) {
              try {
                return { type: "normal", arg: t.call(r, e) };
              } catch (t) {
                return { type: "throw", arg: t };
              }
            }
            t.wrap = h;
            var l = "suspendedStart",
              s = "suspendedYield",
              p = "executing",
              y = "completed",
              v = {};
            function g() {}
            function d() {}
            function m() {}
            var w = {};
            u(w, i, function () {
              return this;
            });
            var L = Object.getPrototypeOf,
              x = L && L(L(N([])));
            x && x !== e && n.call(x, i) && (w = x);
            var b = (m.prototype = g.prototype = Object.create(w));
            function E(t) {
              ["next", "throw", "return"].forEach(function (r) {
                u(t, r, function (t) {
                  return this._invoke(r, t);
                });
              });
            }
            function _(t, r) {
              var e;
              this._invoke = function (o, i) {
                function a() {
                  return new r(function (e, a) {
                    !(function e(o, i, a, c) {
                      var u = f(t[o], t, i);
                      if ("throw" !== u.type) {
                        var h = u.arg,
                          l = h.value;
                        return l && "object" == typeof l && n.call(l, "__await")
                          ? r.resolve(l.__await).then(
                              function (t) {
                                e("next", t, a, c);
                              },
                              function (t) {
                                e("throw", t, a, c);
                              }
                            )
                          : r.resolve(l).then(
                              function (t) {
                                (h.value = t), a(h);
                              },
                              function (t) {
                                return e("throw", t, a, c);
                              }
                            );
                      }
                      c(u.arg);
                    })(o, i, e, a);
                  });
                }
                return (e = e ? e.then(a, a) : a());
              };
            }
            function j(t, e) {
              var n = t.iterator[e.method];
              if (n === r) {
                if (((e.delegate = null), "throw" === e.method)) {
                  if (
                    t.iterator.return &&
                    ((e.method = "return"),
                    (e.arg = r),
                    j(t, e),
                    "throw" === e.method)
                  )
                    return v;
                  (e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a 'throw' method"
                    ));
                }
                return v;
              }
              var o = f(n, t.iterator, e.arg);
              if ("throw" === o.type)
                return (
                  (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), v
                );
              var i = o.arg;
              return i
                ? i.done
                  ? ((e[t.resultName] = i.value),
                    (e.next = t.nextLoc),
                    "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                    (e.delegate = null),
                    v)
                  : i
                : ((e.method = "throw"),
                  (e.arg = new TypeError("iterator result is not an object")),
                  (e.delegate = null),
                  v);
            }
            function O(t) {
              var r = { tryLoc: t[0] };
              1 in t && (r.catchLoc = t[1]),
                2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                this.tryEntries.push(r);
            }
            function k(t) {
              var r = t.completion || {};
              (r.type = "normal"), delete r.arg, (t.completion = r);
            }
            function G(t) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                t.forEach(O, this),
                this.reset(!0);
            }
            function N(t) {
              if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var o = -1,
                    a = function e() {
                      for (; ++o < t.length; )
                        if (n.call(t, o))
                          return (e.value = t[o]), (e.done = !1), e;
                      return (e.value = r), (e.done = !0), e;
                    };
                  return (a.next = a);
                }
              }
              return { next: T };
            }
            function T() {
              return { value: r, done: !0 };
            }
            return (
              (d.prototype = m),
              u(b, "constructor", m),
              u(m, "constructor", d),
              (d.displayName = u(m, c, "GeneratorFunction")),
              (t.isGeneratorFunction = function (t) {
                var r = "function" == typeof t && t.constructor;
                return (
                  !!r &&
                  (r === d || "GeneratorFunction" === (r.displayName || r.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, m)
                    : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
                  (t.prototype = Object.create(b)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return { __await: t };
              }),
              E(_.prototype),
              u(_.prototype, a, function () {
                return this;
              }),
              (t.AsyncIterator = _),
              (t.async = function (r, e, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(h(r, e, n, o), i);
                return t.isGeneratorFunction(e)
                  ? a
                  : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                    });
              }),
              E(b),
              u(b, c, "Generator"),
              u(b, i, function () {
                return this;
              }),
              u(b, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (t) {
                var r = [];
                for (var e in t) r.push(e);
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in t) return (e.value = n), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = N),
              (G.prototype = {
                constructor: G,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(k),
                    !t)
                  )
                    for (var e in this)
                      "t" === e.charAt(0) &&
                        n.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = r);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var e = this;
                  function o(n, o) {
                    return (
                      (c.type = "throw"),
                      (c.arg = t),
                      (e.next = n),
                      o && ((e.method = "next"), (e.arg = r)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                      var u = n.call(a, "catchLoc"),
                        h = n.call(a, "finallyLoc");
                      if (u && h) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!h)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, r) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var o = this.tryEntries[e];
                    if (
                      o.tryLoc <= this.prev &&
                      n.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ("break" === t || "continue" === t) &&
                    i.tryLoc <= r &&
                    r <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = t),
                    (a.arg = r),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                      : this.complete(a)
                  );
                },
                complete: function (t, r) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && r && (this.next = r),
                    v
                  );
                },
                finish: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t)
                      return this.complete(e.completion, e.afterLoc), k(e), v;
                  }
                },
                catch: function (t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                      var n = e.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        k(e);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (t, e, n) {
                  return (
                    (this.delegate = {
                      iterator: N(t),
                      resultName: e,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = r),
                    v
                  );
                },
              }),
              t
            );
          })("object" == typeof module ? module.exports : {});
        try {
          regeneratorRuntime = r;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
      {},
    ],
    33: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.idsingle =
            exports.searchbar =
            exports.singlecharac =
            exports.template =
              void 0);
        var e = void 0;
        function t(e) {
          return function () {
            var t = e.apply(this, arguments);
            return new Promise(function (e, n) {
              return (function r(a, o) {
                try {
                  var i = t[a](o),
                    c = i.value;
                } catch (e) {
                  return void n(e);
                }
                if (!i.done)
                  return Promise.resolve(c).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                e(c);
              })("next");
            });
          };
        }
        require("regenerator-runtime/runtime");
        var n = (exports.template = (function () {
            var n = t(
              regeneratorRuntime.mark(function t(n) {
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.forEach(function (e) {
                            var t =
                                document.getElementsByTagName("template")[0],
                              n = document.getElementById("target"),
                              r = t.content.cloneNode(!0);
                            (r.querySelector("img").src =
                              "data:image/png;base64," + e.image),
                              (r.querySelector("p").innerHTML =
                                e.shortDescription),
                              (r.querySelector("h3").innerHTML = e.name),
                              (r.querySelector("a").href =
                                "single-character.html?" + e.id),
                              n.appendChild(r);
                          });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  e
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })()),
          r = (exports.singlecharac = (function () {
            var n = t(
              regeneratorRuntime.mark(function t(n, r) {
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.forEach(function (e) {
                            r === e.id &&
                              ((document.querySelector("img").src =
                                "data:image/png;base64, " + e.image),
                              (document.getElementById(
                                "single__name"
                              ).innerHTML = e.name),
                              (document.getElementById(
                                "single__preface"
                              ).innerHTML = e.shortDescription),
                              (document.getElementById(
                                "single__text"
                              ).innerHTML = e.description));
                          });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  e
                );
              })
            );
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })()),
          a = (exports.searchbar = function () {
            document
              .getElementById("search-bar")
              .addEventListener("keyup", function () {
                var e = document
                  .getElementById("search-bar")
                  .value.toUpperCase();
                console.log(e);
                for (
                  var t = document.querySelectorAll(".carte"), n = 0;
                  n < t.length;
                  n++
                ) {
                  var r = t[n].querySelector("h3");
                  (r.textContent || r.innerText).toUpperCase().indexOf(e) > -1
                    ? (t[n].style.display = "")
                    : (t[n].style.display = "none");
                }
              });
          }),
          o = (exports.idsingle = (function () {
            var n = t(
              regeneratorRuntime.mark(function t(n) {
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (document.querySelector("img").src =
                            "data:image/png;base64, " + n.image),
                            (document.getElementById("manager__name").value =
                              n.name),
                            (document.getElementById("manager__preface").value =
                              n.shortDescription),
                            (document.querySelector(
                              "#manager__text"
                            ).children[0].innerHTML = n.description);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  e
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })());
      },
      { "regenerator-runtime/runtime": 35 },
    ],
    20: [
      function (require, module, exports) {
        "use strict";
        var e = void 0;
        require("regenerator-runtime/runtime");
        var t = require("./script.js");
        function n(e) {
          return function () {
            var t = e.apply(this, arguments);
            return new Promise(function (e, n) {
              return (function r(a, o) {
                try {
                  var c = t[a](o),
                    i = c.value;
                } catch (e) {
                  return void n(e);
                }
                if (!c.done)
                  return Promise.resolve(i).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                e(i);
              })("next");
            });
          };
        }
        var r = "";
        function a() {
          var e = document.querySelector("input[type=file]").files[0],
            t = new FileReader();
          (t.onload = function () {
            (r = t.result.replace("data:", "").replace(/^.+,/, "")),
              (document.getElementById("importid").src =
                "data:image/jpeg;base64," + r);
          }),
            t.readAsDataURL(e);
        }
        n(
          regeneratorRuntime.mark(function a() {
            var o, c, i, d;
            return regeneratorRuntime.wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (o = location.search.substring(1)),
                        (a.next = 3),
                        fetch(
                          "https://character-database.becode.xyz/characters"
                        )
                      );
                    case 3:
                      return (c = a.sent), (a.next = 6), c.json();
                    case 6:
                      (i = a.sent),
                        void 0 ===
                          (d = i.find(function (e) {
                            return e.id === o;
                          })) &&
                          (console.log("f"),
                          document.getElementById("update").addEventListener(
                            "click",
                            n(
                              regeneratorRuntime.mark(function t() {
                                var n, a, c;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((n =
                                              document.getElementById(
                                                "manager__name"
                                              ).value),
                                            (a =
                                              document.getElementById(
                                                "manager__preface"
                                              ).value),
                                            (c =
                                              document.getElementById(
                                                "manager__text"
                                              ).children[0].innerHTML),
                                            !confirm(
                                              "Do you want to add this character?"
                                            ))
                                          ) {
                                            e.next = 10;
                                            break;
                                          }
                                          return (
                                            (e.next = 6),
                                            fetch(
                                              "https://character-database.becode.xyz/characters/" +
                                                o,
                                              {
                                                method: "POST",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify({
                                                  name: n,
                                                  description: c,
                                                  shortDescription: a,
                                                  image: "" + r,
                                                }),
                                              }
                                            )
                                          );
                                        case 6:
                                          alert(
                                            "Your character is added to the DB"
                                          ),
                                            (window.location.href =
                                              "index.html"),
                                            (e.next = 11);
                                          break;
                                        case 10:
                                          alert(
                                            "This character isn't add to the DB"
                                          );
                                        case 11:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  t,
                                  e
                                );
                              })
                            )
                          )),
                        o === d.id &&
                          ((0, t.idsingle)(d),
                          document.getElementById("update").addEventListener(
                            "click",
                            n(
                              regeneratorRuntime.mark(function t() {
                                var n, a, c;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((n =
                                              document.getElementById(
                                                "manager__name"
                                              ).value),
                                            (a =
                                              document.getElementById(
                                                "manager__preface"
                                              ).value),
                                            (c =
                                              document.getElementById(
                                                "manager__text"
                                              ).children[0].innerHTML),
                                            0 !== r.length)
                                          ) {
                                            e.next = 14;
                                            break;
                                          }
                                          if (
                                            !confirm(
                                              "Do you want to change this character ?"
                                            )
                                          ) {
                                            e.next = 11;
                                            break;
                                          }
                                          return (
                                            (e.next = 7),
                                            fetch(
                                              "https://character-database.becode.xyz/characters/" +
                                                o,
                                              {
                                                method: "PUT",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify({
                                                  name: n,
                                                  description: c,
                                                  shortDescription: a,
                                                  image: "" + d.image,
                                                }),
                                              }
                                            )
                                          );
                                        case 7:
                                          alert(
                                            "Your character has been modified in the DB"
                                          ),
                                            (window.location.href =
                                              "../pages/index.html"),
                                            (e.next = 12);
                                          break;
                                        case 11:
                                          alert(
                                            "your character hasn't been modify!"
                                          );
                                        case 12:
                                          e.next = 22;
                                          break;
                                        case 14:
                                          if (
                                            !confirm(
                                              "Do you want to change this character ?"
                                            )
                                          ) {
                                            e.next = 21;
                                            break;
                                          }
                                          return (
                                            (e.next = 17),
                                            fetch(
                                              "https://character-database.becode.xyz/characters/" +
                                                o,
                                              {
                                                method: "PUT",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify({
                                                  name: n,
                                                  description: c,
                                                  shortDescription: a,
                                                  image: r,
                                                }),
                                              }
                                            )
                                          );
                                        case 17:
                                          alert(
                                            "Your character has been modified in the DB"
                                          ),
                                            (window.location.href =
                                              "../pages/index.html"),
                                            (e.next = 22);
                                          break;
                                        case 21:
                                          alert(
                                            "your character hasn't been modify!"
                                          );
                                        case 22:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  t,
                                  e
                                );
                              })
                            )
                          )),
                        document.getElementById("delete").addEventListener(
                          "click",
                          n(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          !confirm("Do you want to delete it ?")
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (e.next = 3),
                                          fetch(
                                            "https://character-database.becode.xyz/characters/" +
                                              o,
                                            {
                                              method: "DELETE",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                            }
                                          )
                                        );
                                      case 3:
                                        alert(
                                          "votre personnage a bien été supprimé"
                                        ),
                                          (window.location.href = "index.html"),
                                          (e.next = 8);
                                        break;
                                      case 7:
                                        alert(
                                          "This character isn't delete of your API"
                                        );
                                      case 8:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                e
                              );
                            })
                          )
                        ),
                        document
                          .getElementById("manager__name")
                          .addEventListener("input", function () {
                            var e =
                              document.getElementById("manager__name").value;
                            console.log(e);
                            var t = e.length;
                            console.log(t),
                              (document.getElementById(
                                "counter__name"
                              ).innerText = t + "  on max 20 char.");
                          }),
                        document
                          .getElementById("manager__preface")
                          .addEventListener("input", function () {
                            var e =
                              document.getElementById("manager__preface").value;
                            console.log(e);
                            var t = e.length;
                            console.log(t),
                              (document.getElementById(
                                "counter__preface"
                              ).innerText = t + " + on max 70 char.");
                          }),
                        document
                          .getElementById("manager__text")
                          .addEventListener("input", function () {
                            var e = document.querySelector("p").childNodes[0];
                            console.log(e);
                            var t = e.length;
                            console.log(t),
                              (document.getElementById(
                                "counter__text"
                              ).innerText = t + "  on max 350 char.");
                          });
                    case 14:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              e
            );
          })
        )();
      },
      { "regenerator-runtime/runtime": 35, "./script.js": 33 },
    ],
  },
  {},
  [20],
  null
);
//# sourceMappingURL=script-manager.7482df04.map
