!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (h, e) {
  function t(e, t) {
    return t.toUpperCase();
  }
  var c = ($ = []).slice,
    g = $.concat,
    a = $.push,
    i = $.indexOf,
    n = {},
    r = n.toString,
    m = n.hasOwnProperty,
    o = "".trim,
    v = {},
    y = h.document,
    s = "2.1.0",
    T = function (e, t) {
      return new T.fn.init(e, t);
    },
    u = /^-ms-/,
    l = /-([\da-z])/gi;
  function f(e) {
    var t = e.length,
      n = T.type(e);
    return (
      "function" !== n &&
      !T.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (T.fn = T.prototype =
    {
      jquery: s,
      constructor: T,
      selector: "",
      length: 0,
      toArray: function () {
        return c.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : c.call(this);
      },
      pushStack: function (e) {
        return (
          ((e = T.merge(this.constructor(), e)).prevObject = this),
          (e.context = this.context),
          e
        );
      },
      each: function (e, t) {
        return T.each(this, e, t);
      },
      map: function (n) {
        return this.pushStack(
          T.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(c.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: a,
      sort: $.sort,
      splice: $.splice,
    }),
    (T.extend = T.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o = arguments[0] || {},
          s = 1,
          a = arguments.length,
          u = !1;
        for (
          "boolean" == typeof o && ((u = o), (o = arguments[s] || {}), s++),
            "object" == typeof o || T.isFunction(o) || (o = {}),
            s === a && ((o = this), s--);
          s < a;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (i = o[t]),
                o !== (n = e[t]) &&
                  (u && n && (T.isPlainObject(n) || (r = T.isArray(n)))
                    ? ((i = r
                        ? ((r = !1), i && T.isArray(i) ? i : [])
                        : i && T.isPlainObject(i)
                        ? i
                        : {}),
                      (o[t] = T.extend(u, i, n)))
                    : void 0 !== n && (o[t] = n));
        return o;
      }),
    T.extend({
      expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === T.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return 0 <= e - parseFloat(e);
      },
      isPlainObject: function (e) {
        if ("object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
        try {
          if (
            e.constructor &&
            !m.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? n[r.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = T.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? (((t = y.createElement("script")).text = e),
              y.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(u, "ms-").replace(l, t);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r = 0,
          i = e.length,
          o = f(e);
        if (n) {
          if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
          else for (r in e) if (!1 === t.apply(e[r], n)) break;
        } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : o.call(e);
      },
      makeArray: function (e, t) {
        return (
          (t = t || []),
          null != e &&
            (f(Object(e))
              ? T.merge(t, "string" == typeof e ? [e] : e)
              : a.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) != s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i = 0,
          o = e.length,
          s = [];
        if (f(e)) for (; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);
        else for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
        return g.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r;
        return (
          "string" == typeof t && ((r = e[t]), (t = e), (e = r)),
          T.isFunction(e)
            ? ((n = c.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, n.concat(c.call(arguments)));
              }).guid = e.guid =
                e.guid || T.guid++),
              r)
            : void 0
        );
      },
      now: Date.now,
      support: v,
    }),
    T.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    var e,
      d,
      b,
      o,
      t,
      h,
      w,
      l,
      c,
      g,
      T,
      r,
      m,
      v,
      i,
      s,
      y,
      C = "sizzle" + -new Date(),
      x = n.document,
      N = 0,
      f = 0,
      a = ne(),
      p = ne(),
      u = ne(),
      k = function (e, t) {
        return e === t && (c = !0), 0;
      },
      E = "undefined",
      D = {}.hasOwnProperty,
      j = [],
      S = j.pop,
      A = j.push,
      L = j.push,
      q = j.slice,
      H =
        j.indexOf ||
        function (e) {
          for (var t = 0, n = this.length; t < n; t++)
            if (this[t] === e) return t;
          return -1;
        },
      O =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      F = "[\\x20\\t\\r\\n\\f]",
      P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = P.replace("w", "w#"),
      R =
        "\\[" +
        F +
        "*(" +
        P +
        ")" +
        F +
        "*(?:([*^$|!~]?=)" +
        F +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        M +
        ")|)|)" +
        F +
        "*\\]",
      W =
        ":(" +
        P +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        R.replace(3, 8) +
        ")*)|.*)\\)|)",
      $ = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
      B = new RegExp("^" + F + "*," + F + "*"),
      I = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
      _ = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
      X = new RegExp(W),
      z = new RegExp("^" + M + "$"),
      U = {
        ID: new RegExp("^#(" + P + ")"),
        CLASS: new RegExp("^\\.(" + P + ")"),
        TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            F +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            F +
            "*(?:([+-]|)" +
            F +
            "*(\\d+)|))" +
            F +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + O + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            F +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            F +
            "*((?:-\\d)?\\d*)" +
            F +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      G = /^[^{]+\{\s*\[native \w/,
      Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      K = /'|\\/g,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(65536 + r)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
    try {
      L.apply((j = q.call(x.childNodes)), x.childNodes),
        j[x.childNodes.length].nodeType;
    } catch (n) {
      L = {
        apply: j.length
          ? function (e, t) {
              A.apply(e, q.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function te(e, t, n, r) {
      var i, o, s, a, u, l, c, f, p;
      if (
        ((t ? t.ownerDocument || t : x) !== T && g(t),
        (n = n || []),
        !e || "string" != typeof e)
      )
        return n;
      if (1 !== (s = (t = t || T).nodeType) && 9 !== s) return [];
      if (m && !r) {
        if ((i = Q.exec(e)))
          if ((l = i[1])) {
            if (9 === s) {
              if (!(o = t.getElementById(l)) || !o.parentNode) return n;
              if (o.id === l) return n.push(o), n;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(l)) &&
              y(t, o) &&
              o.id === l
            )
              return n.push(o), n;
          } else {
            if (i[2]) return L.apply(n, t.getElementsByTagName(e)), n;
            if (
              (l = i[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(n, t.getElementsByClassName(l)), n;
          }
        if (d.qsa && (!v || !v.test(e))) {
          if (
            ((c = l = C),
            (f = t),
            (p = 9 === s && e),
            1 === s && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              u = ce(e),
                (l = t.getAttribute("id"))
                  ? (c = l.replace(K, "\\$&"))
                  : t.setAttribute("id", c),
                c = "[id='" + c + "'] ",
                a = u.length;
              a--;

            )
              u[a] = c + fe(u[a]);
            (f = (J.test(e) && ue(t.parentNode)) || t), (p = u.join(","));
          }
          if (p)
            try {
              return L.apply(n, f.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              l || t.removeAttribute("id");
            }
        }
      }
      return (function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l = ce(e);
        if (!r && 1 === l.length) {
          if (
            2 < (o = l[0] = l[0].slice(0)).length &&
            "ID" === (s = o[0]).type &&
            d.getById &&
            9 === t.nodeType &&
            m &&
            b.relative[o[1].type]
          ) {
            if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0]))
              return n;
            e = e.slice(o.shift().value.length);
          }
          for (
            i = U.needsContext.test(e) ? 0 : o.length;
            i-- && ((s = o[i]), !b.relative[(a = s.type)]);

          )
            if (
              (u = b.find[a]) &&
              (r = u(
                s.matches[0].replace(Z, ee),
                (J.test(o[0].type) && ue(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && fe(o))))
                return L.apply(n, r), n;
              break;
            }
        }
        return h(e, l)(r, t, !m, n, (J.test(e) && ue(t.parentNode)) || t), n;
      })(e.replace($, "$1"), t, n, r);
    }
    function ne() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function re(e) {
      return (e[C] = !0), e;
    }
    function ie(e) {
      var t = T.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function oe(e, t) {
      for (var n = e.split("|"), r = e.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function se(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ae(s) {
      return re(function (o) {
        return (
          (o = +o),
          re(function (e, t) {
            for (var n, r = s([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ue(e) {
      return e && typeof e.getElementsByTagName !== E && e;
    }
    for (e in ((d = te.support = {}),
    (t = te.isXML =
      function (e) {
        return (
          !!(e = e && (e.ownerDocument || e).documentElement) &&
          "HTML" !== e.nodeName
        );
      }),
    (g = te.setDocument =
      function (e) {
        var u = e ? e.ownerDocument || e : x,
          e = u.defaultView;
        return u !== T && 9 === u.nodeType && u.documentElement
          ? ((r = (T = u).documentElement),
            (m = !t(u)),
            e &&
              e !== e.top &&
              (e.addEventListener
                ? e.addEventListener(
                    "unload",
                    function () {
                      g();
                    },
                    !1
                  )
                : e.attachEvent &&
                  e.attachEvent("onunload", function () {
                    g();
                  })),
            (d.attributes = ie(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ie(function (e) {
              return (
                e.appendChild(u.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName =
              G.test(u.getElementsByClassName) &&
              ie(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
            (d.getById = ie(function (e) {
              return (
                (r.appendChild(e).id = C),
                !u.getElementsByName || !u.getElementsByName(C).length
              );
            })),
            d.getById
              ? ((b.find.ID = function (e, t) {
                  if (typeof t.getElementById !== E && m)
                    return (e = t.getElementById(e)) && e.parentNode ? [e] : [];
                }),
                (b.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete b.find.ID,
                (b.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return (
                      (e =
                        typeof e.getAttributeNode !== E &&
                        e.getAttributeNode("id")) && e.value === t
                    );
                  };
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return typeof t.getElementsByTagName !== E
                    ? t.getElementsByTagName(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                return typeof t.getElementsByClassName !== E && m
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (i = []),
            (v = []),
            (d.qsa = G.test(u.querySelectorAll)) &&
              (ie(function (e) {
                (e.innerHTML =
                  "<select t=''><option selected=''></option></select>"),
                  e.querySelectorAll("[t^='']").length &&
                    v.push("[*^$]=" + F + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + F + "*(?:value|" + O + ")"),
                  e.querySelectorAll(":checked").length || v.push(":checked");
              }),
              ie(function (e) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + F + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = G.test(
              (s =
                r.webkitMatchesSelector ||
                r.mozMatchesSelector ||
                r.oMatchesSelector ||
                r.msMatchesSelector)
            )) &&
              ie(function (e) {
                (d.disconnectedMatch = s.call(e, "div")),
                  s.call(e, "[s!='']:x"),
                  i.push("!=", W);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (i = i.length && new RegExp(i.join("|"))),
            (e = G.test(r.compareDocumentPosition)),
            (y =
              e || G.test(r.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e;
                    return (
                      e === (t = t && t.parentNode) ||
                      !(
                        !t ||
                        1 !== t.nodeType ||
                        !(n.contains
                          ? n.contains(t)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(t))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (k = e
              ? function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === u || (e.ownerDocument === x && y(x, e))
                        ? -1
                        : t === u || (t.ownerDocument === x && y(x, t))
                        ? 1
                        : l
                        ? H.call(l, e) - H.call(l, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                  if (!i || !o)
                    return e === u
                      ? -1
                      : t === u
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : l
                      ? H.call(l, e) - H.call(l, t)
                      : 0;
                  if (i === o) return se(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (; s[r] === a[r]; ) r++;
                  return r
                    ? se(s[r], a[r])
                    : s[r] === x
                    ? -1
                    : a[r] === x
                    ? 1
                    : 0;
                }),
            u)
          : T;
      }),
    (te.matches = function (e, t) {
      return te(e, null, null, t);
    }),
    (te.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== T && g(e),
        (t = t.replace(_, "='$1']")),
        !(!d.matchesSelector || !m || (i && i.test(t)) || (v && v.test(t))))
      )
        try {
          var n = s.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < te(t, T, null, [e]).length;
    }),
    (te.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && g(e), y(e, t);
    }),
    (te.attr = function (e, t) {
      (e.ownerDocument || e) !== T && g(e);
      var n = b.attrHandle[t.toLowerCase()];
      return void 0 !==
        (n = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !m) : void 0)
        ? n
        : d.attributes || !m
        ? e.getAttribute(t)
        : (n = e.getAttributeNode(t)) && n.specified
        ? n.value
        : null;
    }),
    (te.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (te.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((c = !d.detectDuplicates),
        (l = !d.sortStable && e.slice(0)),
        e.sort(k),
        c)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (l = null), e;
    }),
    (o = te.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((b = te.selectors =
      {
        cacheLength: 50,
        createPseudo: re,
        match: U,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || te.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && te.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[5] && e[2];
            return U.CHILD.test(e[0])
              ? null
              : (e[3] && void 0 !== e[4]
                  ? (e[2] = e[4])
                  : n &&
                    X.test(n) &&
                    (t = ce(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = a[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
                a(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (typeof e.getAttribute !== E &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, n, r) {
            return function (e) {
              return null == (e = te.attr(e, t))
                ? "!=" === n
                : !n ||
                    ((e += ""),
                    "=" === n
                      ? e === r
                      : "!=" === n
                      ? e !== r
                      : "^=" === n
                      ? r && 0 === e.indexOf(r)
                      : "*=" === n
                      ? r && -1 < e.indexOf(r)
                      : "$=" === n
                      ? r && e.slice(-r.length) === r
                      : "~=" === n
                      ? -1 < (" " + e + " ").indexOf(r)
                      : "|=" === n &&
                        (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var m = "nth" !== d.slice(0, 3),
              v = "last" !== d.slice(-4),
              y = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l = m != v ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = y && e.nodeName.toLowerCase(),
                    p = !n && !y;
                  if (c) {
                    if (m) {
                      for (; l; ) {
                        for (o = e; (o = o[l]); )
                          if (
                            y
                              ? o.nodeName.toLowerCase() === f
                              : 1 === o.nodeType
                          )
                            return !1;
                        u = l = "only" === d && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [v ? c.firstChild : c.lastChild]), v && p)) {
                      for (
                        a =
                          (r = (i = c[C] || (c[C] = {}))[d] || [])[0] === N &&
                          r[1],
                          s = r[0] === N && r[2],
                          o = a && c.childNodes[a];
                        (o = (++a && o && o[l]) || (s = a = 0) || u.pop());

                      )
                        if (1 === o.nodeType && ++s && o === e) {
                          i[d] = [N, a, s];
                          break;
                        }
                    } else if (
                      p &&
                      (r = (e[C] || (e[C] = {}))[d]) &&
                      r[0] === N
                    )
                      s = r[1];
                    else
                      for (
                        ;
                        (o = (++a && o && o[l]) || (s = a = 0) || u.pop()) &&
                        ((y
                          ? o.nodeName.toLowerCase() !== f
                          : 1 !== o.nodeType) ||
                          !++s ||
                          (p && ((o[C] || (o[C] = {}))[d] = [N, s]), o !== e));

                      );
                    return (s -= g) === h || (s % h == 0 && 0 <= s / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              s =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                te.error("unsupported pseudo: " + e);
            return s[C]
              ? s(o)
              : 1 < s.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? re(function (e, t) {
                      for (var n, r = s(e, o), i = r.length; i--; )
                        e[(n = H.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return s(e, 0, t);
                    })
              : s;
          },
        },
        pseudos: {
          not: re(function (e) {
            var r = [],
              i = [],
              a = h(e.replace($, "$1"));
            return a[C]
              ? re(function (e, t, n, r) {
                  for (var i, o = a(e, null, r, []), s = e.length; s--; )
                    (i = o[s]) && (e[s] = !(t[s] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), a(r, null, n, i), !i.pop();
                };
          }),
          has: re(function (t) {
            return function (e) {
              return 0 < te(t, e).length;
            };
          }),
          contains: re(function (t) {
            return function (e) {
              return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
            };
          }),
          lang: re(function (n) {
            return (
              z.test(n || "") || te.error("unsupported lang: " + n),
              (n = n.replace(Z, ee).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = m
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (e = e.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: ae(function () {
            return [0];
          }),
          last: ae(function (e, t) {
            return [t - 1];
          }),
          eq: ae(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ae(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ae(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ae(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ae(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = (function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      b.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      })(e);
    function le() {}
    function ce(e, t) {
      var n,
        r,
        i,
        o,
        s,
        a,
        u,
        l = p[e + " "];
      if (l) return t ? 0 : l.slice(0);
      for (s = e, a = [], u = b.preFilter; s; ) {
        for (o in ((n && !(r = B.exec(s))) ||
          (r && (s = s.slice(r[0].length) || s), a.push((i = []))),
        (n = !1),
        (r = I.exec(s)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace($, " ") }),
          (s = s.slice(n.length))),
        b.filter))
          !(r = U[o].exec(s)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (s = s.slice(n.length)));
        if (!n) break;
      }
      return t ? s.length : s ? te.error(e) : p(e, a).slice(0);
    }
    function fe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function pe(s, e, t) {
      var a = e.dir,
        u = t && "parentNode" === a,
        l = f++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[a]); ) if (1 === e.nodeType || u) return s(e, t, n);
          }
        : function (e, t, n) {
            var r,
              i,
              o = [N, l];
            if (n) {
              for (; (e = e[a]); )
                if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
            } else
              for (; (e = e[a]); )
                if (1 === e.nodeType || u) {
                  if (
                    (r = (i = e[C] || (e[C] = {}))[a]) &&
                    r[0] === N &&
                    r[1] === l
                  )
                    return (o[2] = r[2]);
                  if (((i[a] = o)[2] = s(e, t, n))) return !0;
                }
          };
    }
    function de(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function he(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
        !(o = e[a]) || (n && !n(o, r, i)) || (s.push(o), l && t.push(a));
      return s;
    }
    return (
      (le.prototype = b.filters = b.pseudos),
      (b.setFilters = new le()),
      (h = te.compile =
        function (e, t) {
          var n,
            m,
            v,
            y,
            x,
            r = [],
            i = [],
            o = u[e + " "];
          if (!o) {
            for (n = (t = t || ce(e)).length; n--; )
              ((o = (function e(t) {
                for (
                  var r,
                    n,
                    i,
                    o = t.length,
                    s = b.relative[t[0].type],
                    a = s || b.relative[" "],
                    u = s ? 1 : 0,
                    l = pe(
                      function (e) {
                        return e === r;
                      },
                      a,
                      !0
                    ),
                    c = pe(
                      function (e) {
                        return -1 < H.call(r, e);
                      },
                      a,
                      !0
                    ),
                    f = [
                      function (e, t, n) {
                        return (
                          (!s && (n || t !== w)) ||
                          ((r = t).nodeType ? l : c)(e, t, n)
                        );
                      },
                    ];
                  u < o;
                  u++
                )
                  if ((n = b.relative[t[u].type])) f = [pe(de(f), n)];
                  else {
                    if (
                      (n = b.filter[t[u].type].apply(null, t[u].matches))[C]
                    ) {
                      for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                      return (function e(d, h, g, m, v, t) {
                        return (
                          m && !m[C] && (m = e(m)),
                          v && !v[C] && (v = e(v, t)),
                          re(function (e, t, n, r) {
                            var i,
                              o,
                              s,
                              a = [],
                              u = [],
                              l = t.length,
                              c =
                                e ||
                                (function (e, t, n) {
                                  for (var r = 0, i = t.length; r < i; r++)
                                    te(e, t[r], n);
                                  return n;
                                })(h || "*", n.nodeType ? [n] : n, []),
                              f = !d || (!e && h) ? c : he(c, a, d, n, r),
                              p = g ? (v || (e ? d : l || m) ? [] : t) : f;
                            if ((g && g(f, p, n, r), m))
                              for (
                                i = he(p, u), m(i, [], n, r), o = i.length;
                                o--;

                              )
                                (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                            if (e) {
                              if (v || d) {
                                if (v) {
                                  for (i = [], o = p.length; o--; )
                                    (s = p[o]) && i.push((f[o] = s));
                                  v(null, (p = []), i, r);
                                }
                                for (o = p.length; o--; )
                                  (s = p[o]) &&
                                    -1 < (i = v ? H.call(e, s) : a[o]) &&
                                    (e[i] = !(t[i] = s));
                              }
                            } else (p = he(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : L.apply(t, p);
                          })
                        );
                      })(
                        1 < u && de(f),
                        1 < u &&
                          fe(
                            t.slice(0, u - 1).concat({
                              value: " " === t[u - 2].type ? "*" : "",
                            })
                          ).replace($, "$1"),
                        n,
                        u < i && e(t.slice(u, i)),
                        i < o && e((t = t.slice(i))),
                        i < o && fe(t)
                      );
                    }
                    f.push(n);
                  }
                return de(f);
              })(t[n]))[C]
                ? r
                : i
              ).push(o);
            o = u(
              e,
              ((y = 0 < (v = r).length),
              (x = 0 < (m = i).length),
              y ? re(s) : s)
            );
          }
          function s(e, t, n, r, i) {
            var o,
              s,
              a,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (N += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (i && (w = t !== T && t); l !== g && null != (o = d[l]); l++) {
              if (x && o) {
                for (s = 0; (a = m[s++]); )
                  if (a(o, t, n)) {
                    r.push(o);
                    break;
                  }
                i && (N = h);
              }
              y && ((o = !a && o) && u--, e && c.push(o));
            }
            if (((u += l), y && l !== u)) {
              for (s = 0; (a = v[s++]); ) a(c, f, t, n);
              if (e) {
                if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = S.call(r));
                f = he(f);
              }
              L.apply(r, f),
                i && !e && 0 < f.length && 1 < u + v.length && te.uniqueSort(r);
            }
            return i && ((N = h), (w = p)), c;
          }
          return o;
        }),
      (d.sortStable = C.split("").sort(k).join("") === C),
      (d.detectDuplicates = !!c),
      g(),
      (d.sortDetached = ie(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("div"));
      })),
      ie(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        oe("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ie(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        oe("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      ie(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        oe(O, function (e, t, n) {
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (t = e.getAttributeNode(t)) && t.specified
            ? t.value
            : null;
        }),
      te
    );
  })(h);
  (T.find = p),
    (T.expr = p.selectors),
    (T.expr[":"] = T.expr.pseudos),
    (T.unique = p.uniqueSort),
    (T.text = p.getText),
    (T.isXMLDoc = p.isXML),
    (T.contains = p.contains);
  var d = T.expr.match.needsContext,
    x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    b = /^.[^:#\[\.,]*$/;
  function w(e, n, r) {
    if (T.isFunction(n))
      return T.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r;
      });
    if (n.nodeType)
      return T.grep(e, function (e) {
        return (e === n) !== r;
      });
    if ("string" == typeof n) {
      if (b.test(n)) return T.filter(n, e, r);
      n = T.filter(n, e);
    }
    return T.grep(e, function (e) {
      return 0 <= i.call(n, e) !== r;
    });
  }
  (T.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? T.find.matchesSelector(r, e)
          ? [r]
          : []
        : T.find.matches(
            e,
            T.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    T.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            T(e).filter(function () {
              for (t = 0; t < n; t++) if (T.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < n; t++) T.find(e, i[t], r);
        return (
          ((r = this.pushStack(1 < n ? T.unique(r) : r)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(w(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(w(this, e || [], !0));
      },
      is: function (e) {
        return !!w(this, "string" == typeof e && d.test(e) ? T(e) : e || [], !1)
          .length;
      },
    });
  var C,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((T.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" != typeof e)
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : T.isFunction(e)
        ? void 0 !== C.ready
          ? C.ready(e)
          : e(T)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          T.makeArray(e, this));
    if (
      !(n =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : N.exec(e)) ||
      (!n[1] && t)
    )
      return (!t || t.jquery ? t || C : this.constructor(t)).find(e);
    if (n[1]) {
      if (
        ((t = t instanceof T ? t[0] : t),
        T.merge(
          this,
          T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)
        ),
        x.test(n[1]) && T.isPlainObject(t))
      )
        for (n in t) T.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return (
      (r = y.getElementById(n[2])) &&
        r.parentNode &&
        ((this.length = 1), (this[0] = r)),
      (this.context = y),
      (this.selector = e),
      this
    );
  }).prototype = T.fn),
    (C = T(y));
  var k = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  T.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && T(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    T.fn.extend({
      has: function (e) {
        var t = T(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = d.test(e) || "string" != typeof e ? T(e, t || this.context) : 0;
          r < i;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && T.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(1 < o.length ? T.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(T(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(T.unique(T.merge(this.get(), T(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    T.each(
      {
        parent: function (e) {
          return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return T.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T.dir(e, "parentNode", n);
        },
        next: function (e) {
          return D(e, "nextSibling");
        },
        prev: function (e) {
          return D(e, "previousSibling");
        },
        nextAll: function (e) {
          return T.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return T.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || T.merge([], e.childNodes);
        },
      },
      function (r, i) {
        T.fn[r] = function (e, t) {
          var n = T.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = T.filter(t, n)),
            1 < this.length && (E[r] || T.unique(n), k.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var j,
    S = /\S+/g,
    A = {};
  function L() {
    y.removeEventListener("DOMContentLoaded", L, !1),
      h.removeEventListener("load", L, !1),
      T.ready();
  }
  (T.Callbacks = function (i) {
    var n;
    i =
      "string" == typeof i
        ? A[i] ||
          ((n = A[i] = {}),
          T.each(i.match(S) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : T.extend({}, i);
    var t,
      r,
      o,
      s,
      a,
      u,
      l = [],
      c = !i.once && [],
      f = function (e) {
        for (
          t = i.memory && e, r = !0, u = s || 0, s = 0, a = l.length, o = !0;
          l && u < a;
          u++
        )
          if (!1 === l[u].apply(e[0], e[1]) && i.stopOnFalse) {
            t = !1;
            break;
          }
        (o = !1),
          l && (c ? c.length && f(c.shift()) : t ? (l = []) : p.disable());
      },
      p = {
        add: function () {
          var e;
          return (
            l &&
              ((e = l.length),
              (function r(e) {
                T.each(e, function (e, t) {
                  var n = T.type(t);
                  "function" === n
                    ? (i.unique && p.has(t)) || l.push(t)
                    : t && t.length && "string" !== n && r(t);
                });
              })(arguments),
              o ? (a = l.length) : t && ((s = e), f(t))),
            this
          );
        },
        remove: function () {
          return (
            l &&
              T.each(arguments, function (e, t) {
                for (var n; -1 < (n = T.inArray(t, l, n)); )
                  l.splice(n, 1), o && (n <= a && a--, n <= u && u--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < T.inArray(e, l) : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (a = 0), this;
        },
        disable: function () {
          return (l = c = t = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (c = void 0), t || p.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            !l ||
              (r && !c) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              o ? c.push(t) : f(t)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return p;
  }),
    T.extend({
      Deferred: function (e) {
        var o = [
            ["resolve", "done", T.Callbacks("once memory"), "resolved"],
            ["reject", "fail", T.Callbacks("once memory"), "rejected"],
            ["notify", "progress", T.Callbacks("memory")],
          ],
          i = "pending",
          s = {
            state: function () {
              return i;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var i = arguments;
              return T.Deferred(function (r) {
                T.each(o, function (e, t) {
                  var n = T.isFunction(i[e]) && i[e];
                  a[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && T.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(r.resolve)
                          .fail(r.reject)
                          .progress(r.notify)
                      : r[t[0] + "With"](
                          this === s ? r.promise() : this,
                          n ? [e] : arguments
                        );
                  });
                }),
                  (i = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? T.extend(e, s) : s;
            },
          },
          a = {};
        return (
          (s.pipe = s.then),
          T.each(o, function (e, t) {
            var n = t[2],
              r = t[3];
            (s[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[1 ^ e][2].disable,
                  o[2][2].lock
                ),
              (a[t[0]] = function () {
                return a[t[0] + "With"](this === a ? s : this, arguments), this;
              }),
              (a[t[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        function t(t, n, r) {
          return function (e) {
            (n[t] = this),
              (r[t] = 1 < arguments.length ? c.call(arguments) : e),
              r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
          };
        }
        var i,
          n,
          r,
          o = 0,
          s = c.call(arguments),
          a = s.length,
          u = 1 !== a || (e && T.isFunction(e.promise)) ? a : 0,
          l = 1 === u ? e : T.Deferred();
        if (1 < a)
          for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++)
            s[o] && T.isFunction(s[o].promise)
              ? s[o]
                  .promise()
                  .done(t(o, r, s))
                  .fail(l.reject)
                  .progress(t(o, n, i))
              : --u;
        return u || l.resolveWith(r, s), l.promise();
      },
    }),
    (T.fn.ready = function (e) {
      return T.ready.promise().done(e), this;
    }),
    T.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? T.readyWait++ : T.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) ||
          ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
          (j.resolveWith(y, [T]),
          T.fn.trigger && T(y).trigger("ready").off("ready"));
      },
    }),
    (T.ready.promise = function (e) {
      return (
        j ||
          ((j = T.Deferred()),
          "complete" === y.readyState
            ? setTimeout(T.ready)
            : (y.addEventListener("DOMContentLoaded", L, !1),
              h.addEventListener("load", L, !1))),
        j.promise(e)
      );
    }),
    T.ready.promise();
  var q = (T.access = function (e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === T.type(n))
      for (a in ((i = !0), n)) T.access(e, t, a, n[a], !0, o, s);
    else if (
      void 0 !== r &&
      ((i = !0),
      T.isFunction(r) || (s = !0),
      l &&
        (t = s
          ? (t.call(e, r), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(T(e), n);
            })),
      t)
    )
      for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  });
  function H() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = T.expando + Math.random());
  }
  (T.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (H.uid = 1),
    (H.accepts = T.acceptData),
    (H.prototype = {
      key: function (t) {
        if (!H.accepts(t)) return 0;
        var n = {},
          r = t[this.expando];
        if (!r) {
          r = H.uid++;
          try {
            (n[this.expando] = { value: r }), Object.defineProperties(t, n);
          } catch (e) {
            (n[this.expando] = r), T.extend(t, n);
          }
        }
        return this.cache[r] || (this.cache[r] = {}), r;
      },
      set: function (e, t, n) {
        var r,
          e = this.key(e),
          i = this.cache[e];
        if ("string" == typeof t) i[t] = n;
        else if (T.isEmptyObject(i)) T.extend(this.cache[e], t);
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function (e, t) {
        return (e = this.cache[this.key(e)]), void 0 === t ? e : e[t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? void 0 !== (r = this.get(e, t))
            ? r
            : this.get(e, T.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          e = this.key(e),
          i = this.cache[e];
        if (void 0 === t) this.cache[e] = {};
        else {
          n = (r = T.isArray(t)
            ? t.concat(t.map(T.camelCase))
            : ((e = T.camelCase(t)),
              t in i ? [t, e] : (r = e) in i ? [r] : r.match(S) || [])).length;
          for (; n--; ) delete i[r[n]];
        }
      },
      hasData: function (e) {
        return !T.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var O = new H(),
    F = new H(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    M = /([A-Z])/g;
  function R(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(M, "-$1").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : P.test(n)
                ? T.parseJSON(n)
                : n));
        } catch (e) {}
        F.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function W(e, t) {
    return (
      (e = t || e),
      "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e)
    );
  }
  T.extend({
    hasData: function (e) {
      return F.hasData(e) || O.hasData(e);
    },
    data: function (e, t, n) {
      return F.access(e, t, n);
    },
    removeData: function (e, t) {
      F.remove(e, t);
    },
    _data: function (e, t, n) {
      return O.access(e, t, n);
    },
    _removeData: function (e, t) {
      O.remove(e, t);
    },
  }),
    T.fn.extend({
      data: function (r, e) {
        var t,
          n,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== r)
          return "object" == typeof r
            ? this.each(function () {
                F.set(this, r);
              })
            : q(
                this,
                function (t) {
                  var e,
                    n = T.camelCase(r);
                  if (o && void 0 === t)
                    return void 0 !== (e = F.get(o, r)) ||
                      void 0 !== (e = F.get(o, n)) ||
                      void 0 !== (e = R(o, n, void 0))
                      ? e
                      : void 0;
                  this.each(function () {
                    var e = F.get(this, n);
                    F.set(this, n, t),
                      -1 !== r.indexOf("-") &&
                        void 0 !== e &&
                        F.set(this, r, t);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = F.get(o)), 1 === o.nodeType && !O.get(o, "hasDataAttrs"))
        ) {
          for (t = s.length; t--; )
            0 === (n = s[t].name).indexOf("data-") &&
              ((n = T.camelCase(n.slice(5))), R(o, n, i[n]));
          O.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          F.remove(this, e);
        });
      },
    }),
    T.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = O.get(e, t)),
            n &&
              (!r || T.isArray(n)
                ? (r = O.access(e, t, T.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = T._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                T.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          O.get(e, n) ||
          O.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              O.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    T.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? T.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(s, [s]);
        }
        var r,
          i = 1,
          o = T.Deferred(),
          s = this,
          a = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (r = O.get(s[a], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    B = ["Top", "Right", "Bottom", "Left"],
    I = /^(?:checkbox|radio)$/i;
  ((s = y
    .createDocumentFragment()
    .appendChild(y.createElement("div"))).innerHTML =
    "<input type='radio' checked='checked' name='t'/>"),
    (v.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (s.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue);
  var _ = "undefined";
  v.focusinBubbles = "onfocusin" in h;
  var X = /^key/,
    z = /^(?:mouse|contextmenu)|click/,
    U = /^(?:focusinfocus|focusoutblur)$/,
    V = /^([^.]*)(?:\.(.+)|)$/;
  function Y() {
    return !0;
  }
  function G() {
    return !1;
  }
  function Q() {
    try {
      return y.activeElement;
    } catch (e) {}
  }
  (T.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h = O.get(t);
      if (h)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            n.guid || (n.guid = T.guid++),
            (a = h.events) || (a = h.events = {}),
            (s = h.handle) ||
              (s = h.handle =
                function (e) {
                  return typeof T != _ && T.event.triggered !== e.type
                    ? T.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            u = (e = (e || "").match(S) || [""]).length;
          u--;

        )
          (f = d = (l = V.exec(e[u]) || [])[1]),
            (p = (l[2] || "").split(".").sort()),
            f &&
              ((c = T.event.special[f] || {}),
              (f = (i ? c.delegateType : c.bindType) || f),
              (c = T.event.special[f] || {}),
              (l = T.extend(
                {
                  type: f,
                  origType: d,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && T.expr.match.needsContext.test(i),
                  namespace: p.join("."),
                },
                o
              )),
              (d = a[f]) ||
                (((d = a[f] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, r, p, s)) ||
                  (t.addEventListener && t.addEventListener(f, s, !1))),
              c.add &&
                (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (T.event.global[f] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = O.hasData(e) && O.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(S) || [""]).length; l--; )
          if (
            ((d = g = (a = V.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = T.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                T.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) T.event.remove(e, d + t[l], n, r, !0);
        T.isEmptyObject(u) && (delete m.handle, O.remove(e, "events"));
      }
    },
    trigger: function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c = [n || y],
        f = m.call(e, "type") ? e.type : e,
        p = m.call(e, "namespace") ? e.namespace.split(".") : [],
        d = (o = n = n || y);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !U.test(f + T.event.triggered) &&
        (0 <= f.indexOf(".") && ((f = (p = f.split(".")).shift()), p.sort()),
        (a = f.indexOf(":") < 0 && "on" + f),
        ((e = e[T.expando]
          ? e
          : new T.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = p.join(".")),
        (e.namespace_re = e.namespace
          ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : T.makeArray(t, [e])),
        (l = T.event.special[f] || {}),
        r || !l.trigger || !1 !== l.trigger.apply(n, t))
      ) {
        if (!r && !l.noBubble && !T.isWindow(n)) {
          for (
            s = l.delegateType || f, U.test(s + f) || (d = d.parentNode);
            d;
            d = d.parentNode
          )
            c.push(d), (o = d);
          o === (n.ownerDocument || y) &&
            c.push(o.defaultView || o.parentWindow || h);
        }
        for (i = 0; (d = c[i++]) && !e.isPropagationStopped(); )
          (e.type = 1 < i ? s : l.bindType || f),
            (u = (O.get(d, "events") || {})[e.type] && O.get(d, "handle")) &&
              u.apply(d, t),
            (u = a && d[a]) &&
              u.apply &&
              T.acceptData(d) &&
              ((e.result = u.apply(d, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = f),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(c.pop(), t)) ||
            !T.acceptData(n) ||
            (a &&
              T.isFunction(n[f]) &&
              !T.isWindow(n) &&
              ((o = n[a]) && (n[a] = null),
              n[(T.event.triggered = f)](),
              (T.event.triggered = void 0),
              o && (n[a] = o))),
          e.result
        );
      }
    },
    dispatch: function (e) {
      e = T.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = c.call(arguments),
        a = (O.get(this, "events") || {})[e.type] || [],
        u = T.event.special[e.type] || {};
      if (
        (((s[0] = e).delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, e))
      ) {
        for (
          o = T.event.handlers.call(this, e, a), t = 0;
          (r = o[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = r.elem, n = 0;
            (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
              ((e.handleObj = i),
              (e.data = i.data),
              void 0 !==
                (i = (
                  (T.event.special[i.origType] || {}).handle || i.handler
                ).apply(r.elem, s)) &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || "click" !== e.type) {
            for (r = [], n = 0; n < a; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? 0 <= T(i, this).index(u)
                  : T.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: u, handlers: r });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = (r = e.target.ownerDocument || y).documentElement),
            (r = r.body),
            (e.pageX =
              t.clientX +
              ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((n && n.scrollTop) || (r && r.scrollTop) || 0) -
              ((n && n.clientTop) || (r && r.clientTop) || 0))),
          e.which ||
            void 0 === i ||
            (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[T.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            z.test(i) ? this.mouseHooks : X.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new T.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = y),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== Q() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === Q() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            T.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return T.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      (e = T.extend(new T.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      })),
        r ? T.event.trigger(e, null, t) : T.event.dispatch.call(t, e),
        e.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (T.Event = function (e, t) {
      return this instanceof T.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented &&
                  e.getPreventDefault &&
                  e.getPreventDefault())
                  ? Y
                  : G))
            : (this.type = e),
          t && T.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || T.now()),
          void (this[T.expando] = !0))
        : new T.Event(e, t);
    }),
    (T.Event.prototype = {
      isDefaultPrevented: G,
      isPropagationStopped: G,
      isImmediatePropagationStopped: G,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Y),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Y),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = Y), this.stopPropagation();
      },
    }),
    T.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, i) {
        T.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || T.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    v.focusinBubbles ||
      T.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          T.event.simulate(r, e.target, T.event.fix(e), !0);
        }
        T.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = O.access(e, r);
            t || e.addEventListener(n, i, !0), O.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = O.access(e, r) - 1;
            t
              ? O.access(e, r, t)
              : (e.removeEventListener(n, i, !0), O.remove(e, r));
          },
        };
      }),
    T.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          for (s in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
            this.on(s, t, n, e[s], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r)
        )
          r = G;
        else if (!r) return this;
        return (
          1 === i &&
            ((o = r),
            ((r = function (e) {
              return T().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = T.guid++))),
          this.each(function () {
            T.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            T(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = G),
            this.each(function () {
              T.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
      trigger: function (e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? T.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var J =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    K = /<([\w:]+)/,
    Z = /<|&#?\w+;/,
    ee = /<(?:script|style|link)/i,
    te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ne = /^$|\/(?:java|ecma)script/i,
    re = /^true\/(.*)/,
    ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    oe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function se(e, t) {
    return T.nodeName(e, "table") &&
      T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function ae(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function ue(e) {
    var t = re.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function le(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      O.set(e[n], "globalEval", !t || O.get(t[n], "globalEval"));
  }
  function ce(e, t) {
    var n, r, i, o, s, a;
    if (1 === t.nodeType) {
      if (
        O.hasData(e) &&
        ((o = O.access(e)), (s = O.set(t, o)), (a = o.events))
      )
        for (i in (delete s.handle, (s.events = {}), a))
          for (n = 0, r = a[i].length; n < r; n++) T.event.add(t, i, a[i][n]);
      F.hasData(e) && ((e = F.access(e)), (e = T.extend({}, e)), F.set(t, e));
    }
  }
  function fe(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && T.nodeName(e, t)) ? T.merge([e], n) : n;
  }
  (oe.optgroup = oe.option),
    (oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead),
    (oe.th = oe.td),
    T.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = e.cloneNode(!0),
          f = T.contains(e.ownerDocument, e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            T.isXMLDoc(e)
          )
        )
          for (s = fe(c), r = 0, i = (o = fe(e)).length; r < i; r++)
            (a = o[r]),
              "input" === (l = (u = s[r]).nodeName.toLowerCase()) &&
              I.test(a.type)
                ? (u.checked = a.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (
              o = o || fe(e), s = s || fe(c), r = 0, i = o.length;
              r < i;
              r++
            )
              ce(o[r], s[r]);
          else ce(e, c);
        return (
          0 < (s = fe(c, "script")).length && le(s, !f && fe(e, "script")), c
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i,
            o,
            s,
            a,
            u,
            l = t.createDocumentFragment(),
            c = [],
            f = 0,
            p = e.length;
          f < p;
          f++
        )
          if ((i = e[f]) || 0 === i)
            if ("object" === T.type(i)) T.merge(c, i.nodeType ? [i] : i);
            else if (Z.test(i)) {
              for (
                o = o || l.appendChild(t.createElement("div")),
                  s = (K.exec(i) || ["", ""])[1].toLowerCase(),
                  s = oe[s] || oe._default,
                  o.innerHTML = s[1] + i.replace(J, "<$1></$2>") + s[2],
                  u = s[0];
                u--;

              )
                o = o.lastChild;
              T.merge(c, o.childNodes), ((o = l.firstChild).textContent = "");
            } else c.push(t.createTextNode(i));
        for (l.textContent = "", f = 0; (i = c[f++]); )
          if (
            (!r || -1 === T.inArray(i, r)) &&
            ((a = T.contains(i.ownerDocument, i)),
            (o = fe(l.appendChild(i), "script")),
            a && le(o),
            n)
          )
            for (u = 0; (i = o[u++]); ) ne.test(i.type || "") && n.push(i);
        return l;
      },
      cleanData: function (e) {
        for (
          var t, n, r, i, o, s, a = T.event.special, u = 0;
          void 0 !== (n = e[u]);
          u++
        ) {
          if (T.acceptData(n) && (o = n[O.expando]) && (t = O.cache[o])) {
            if ((r = Object.keys(t.events || {})).length)
              for (s = 0; void 0 !== (i = r[s]); s++)
                a[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
            O.cache[o] && delete O.cache[o];
          }
          delete F.cache[n[F.expando]];
        }
      },
    }),
    T.fn.extend({
      text: function (e) {
        return q(
          this,
          function (e) {
            return void 0 === e
              ? T.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            se(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = se(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? T.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || T.cleanData(fe(n)),
            n.parentNode &&
              (t && T.contains(n.ownerDocument, n) && le(fe(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (T.cleanData(fe(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return T.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return q(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ee.test(e) &&
              !oe[(K.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(J, "<$1></$2>");
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (T.cleanData(fe(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              T.cleanData(fe(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, r) {
        n = g.apply([], n);
        var e,
          t,
          i,
          o,
          s,
          a,
          u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          p = n[0],
          d = T.isFunction(p);
        if (d || (1 < l && "string" == typeof p && !v.checkClone && te.test(p)))
          return this.each(function (e) {
            var t = c.eq(e);
            d && (n[0] = p.call(this, e, t.html())), t.domManip(n, r);
          });
        if (
          l &&
          ((t = (e = T.buildFragment(n, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === e.childNodes.length && (e = t),
          t)
        ) {
          for (o = (i = T.map(fe(e, "script"), ae)).length; u < l; u++)
            (s = e),
              u !== f &&
                ((s = T.clone(s, !0, !0)), o && T.merge(i, fe(s, "script"))),
              r.call(this[u], s, u);
          if (o)
            for (
              a = i[i.length - 1].ownerDocument, T.map(i, ue), u = 0;
              u < o;
              u++
            )
              (s = i[u]),
                ne.test(s.type || "") &&
                  !O.access(s, "globalEval") &&
                  T.contains(a, s) &&
                  (s.src
                    ? T._evalUrl && T._evalUrl(s.src)
                    : T.globalEval(s.textContent.replace(ie, "")));
        }
        return this;
      },
    }),
    T.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, s) {
        T.fn[e] = function (e) {
          for (var t, n = [], r = T(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              T(r[o])[s](t),
              a.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var pe,
    de = {};
  function he(e, t) {
    return (
      (e = T(t.createElement(e)).appendTo(t.body)),
      (t = h.getDefaultComputedStyle
        ? h.getDefaultComputedStyle(e[0]).display
        : T.css(e[0], "display")),
      e.detach(),
      t
    );
  }
  function ge(e) {
    var t = y,
      n = de[e];
    return (
      n ||
        (("none" !== (n = he(e, t)) && n) ||
          ((t = (pe = (
            pe || T("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = he(e, t)),
          pe.detach()),
        (de[e] = n)),
      n
    );
  }
  var me,
    ve,
    ye,
    xe,
    be,
    we = /^margin/,
    Te = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
    Ce = function (e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null);
    };
  function Ne(e, t, n) {
    var r,
      i,
      o = e.style;
    return (
      (n = n || Ce(e)) && (i = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== i || T.contains(e.ownerDocument, e) || (i = T.style(e, t)),
        Te.test(i) &&
          we.test(t) &&
          ((r = o.width),
          (e = o.minWidth),
          (t = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = i),
          (i = n.width),
          (o.width = r),
          (o.minWidth = e),
          (o.maxWidth = t))),
      void 0 !== i ? i + "" : i
    );
  }
  function ke(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function Ee() {
    (be.style.cssText =
      "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
      ye.appendChild(xe);
    var e = h.getComputedStyle(be, null);
    (me = "1%" !== e.top), (ve = "4px" === e.width), ye.removeChild(xe);
  }
  (ye = y.documentElement),
    (xe = y.createElement("div")),
    ((be = y.createElement("div")).style.backgroundClip = "content-box"),
    (be.cloneNode(!0).style.backgroundClip = ""),
    (v.clearCloneStyle = "content-box" === be.style.backgroundClip),
    (xe.style.cssText =
      "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
    xe.appendChild(be),
    h.getComputedStyle &&
      T.extend(v, {
        pixelPosition: function () {
          return Ee(), me;
        },
        boxSizingReliable: function () {
          return null == ve && Ee(), ve;
        },
        reliableMarginRight: function () {
          var e = be.appendChild(y.createElement("div"));
          return (
            (e.style.cssText = be.style.cssText =
              "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
            (e.style.marginRight = e.style.width = "0"),
            (be.style.width = "1px"),
            ye.appendChild(xe),
            (e = !parseFloat(h.getComputedStyle(e, null).marginRight)),
            ye.removeChild(xe),
            (be.innerHTML = ""),
            e
          );
        },
      }),
    (T.swap = function (e, t, n, r) {
      var i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.apply(e, r || [])), t)) e.style[i] = o[i];
      return r;
    });
  var De = /^(none|table(?!-c[ea]).+)/,
    je = new RegExp("^(" + $ + ")(.*)$", "i"),
    Se = new RegExp("^([+-])=(" + $ + ")", "i"),
    Ae = { position: "absolute", visibility: "hidden", display: "block" },
    Le = { letterSpacing: 0, fontWeight: 400 },
    qe = ["Webkit", "O", "Moz", "ms"];
  function He(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = qe.length; i--; )
      if ((t = qe[i] + n) in e) return t;
    return r;
  }
  function Oe(e, t, n) {
    var r = je.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function Fe(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (s += T.css(e, n + B[o], !0, i)),
        r
          ? ("content" === n && (s -= T.css(e, "padding" + B[o], !0, i)),
            "margin" !== n && (s -= T.css(e, "border" + B[o] + "Width", !0, i)))
          : ((s += T.css(e, "padding" + B[o], !0, i)),
            "padding" !== n &&
              (s += T.css(e, "border" + B[o] + "Width", !0, i)));
    return s;
  }
  function Pe(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Ce(e),
      s = "border-box" === T.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = Ne(e, t, o)) < 0 || null == i) && (i = e.style[t]), Te.test(i))
      )
        return i;
      (r = s && (v.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + Fe(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function Me(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]).style &&
        ((o[s] = O.get(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              W(r) &&
              (o[s] = O.access(r, "olddisplay", ge(r.nodeName))))
          : o[s] ||
            ((i = W(r)),
            ((n && "none" !== n) || !i) &&
              O.set(r, "olddisplay", i ? n : T.css(r, "display"))));
    for (s = 0; s < a; s++)
      (r = e[s]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function Re(e, t, n, r, i) {
    return new Re.prototype.init(e, t, n, r, i);
  }
  T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (e = Ne(e, "opacity")) ? "1" : e;
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = T.camelCase(t),
          u = e.style;
        return (
          (t = T.cssProps[a] || (T.cssProps[a] = He(u, a))),
          (s = T.cssHooks[t] || T.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : u[t]
            : ("string" == (o = typeof n) &&
                (i = Se.exec(n)) &&
                ((n = (i[1] + 1) * i[2] + parseFloat(T.css(e, t))),
                (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" !== o || T.cssNumber[a] || (n += "px"),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  ((u[t] = ""), (u[t] = n)))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o = T.camelCase(t);
      return (
        (t = T.cssProps[o] || (T.cssProps[o] = He(e.style, o))),
        (o = T.cssHooks[t] || T.cssHooks[o]) &&
          "get" in o &&
          (i = o.get(e, !0, n)),
        void 0 === i && (i = Ne(e, t, r)),
        "normal" === i && t in Le && (i = Le[t]),
        "" === n || n
          ? ((t = parseFloat(i)), !0 === n || T.isNumeric(t) ? t || 0 : i)
          : i
      );
    },
  }),
    T.each(["height", "width"], function (e, i) {
      T.cssHooks[i] = {
        get: function (e, t, n) {
          return t
            ? 0 === e.offsetWidth && De.test(T.css(e, "display"))
              ? T.swap(e, Ae, function () {
                  return Pe(e, i, n);
                })
              : Pe(e, i, n)
            : void 0;
        },
        set: function (e, t, n) {
          var r = n && Ce(e);
          return Oe(
            0,
            t,
            n
              ? Fe(e, i, n, "border-box" === T.css(e, "boxSizing", !1, r), r)
              : 0
          );
        },
      };
    }),
    (T.cssHooks.marginRight = ke(v.reliableMarginRight, function (e, t) {
      return t
        ? T.swap(e, { display: "inline-block" }, Ne, [e, "marginRight"])
        : void 0;
    })),
    T.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (T.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + B[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        we.test(i) || (T.cssHooks[i + o].set = Oe);
    }),
    T.fn.extend({
      css: function (e, t) {
        return q(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (T.isArray(t)) {
              for (r = Ce(e), i = t.length; s < i; s++)
                o[t[s]] = T.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function () {
        return Me(this, !0);
      },
      hide: function () {
        return Me(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              W(this) ? T(this).show() : T(this).hide();
            });
      },
    }),
    ((T.Tween = Re).prototype = {
      constructor: Re,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (T.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Re.propHooks[this.prop];
        return (e && e.get ? e : Re.propHooks._default).get(this);
      },
      run: function (e) {
        var t = Re.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? T.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (t && t.set ? t : Re.propHooks._default).set(this),
          this
        );
      },
    }),
    (Re.prototype.init.prototype = Re.prototype),
    (Re.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = T.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          T.fx.step[e.prop]
            ? T.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[T.cssProps[e.prop]] || T.cssHooks[e.prop])
            ? T.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (Re.propHooks.scrollTop = Re.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (T.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (T.fx = Re.prototype.init),
    (T.fx.step = {});
  var We,
    $e,
    Be = /^(?:toggle|show|hide)$/,
    Ie = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
    _e = /queueHooks$/,
    Xe = [
      function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = this,
          f = {},
          p = t.style,
          d = t.nodeType && W(t),
          h = O.get(t, "fxshow");
        for (r in (n.queue ||
          (null == (a = T._queueHooks(t, "fx")).unqueued &&
            ((a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || u();
            })),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--, T.queue(t, "fx").length || a.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          "none" === (l = T.css(t, "display")) && (l = ge(t.nodeName)),
          "inline" === l &&
            "none" === T.css(t, "float") &&
            (p.display = "inline-block")),
        n.overflow &&
          ((p.overflow = "hidden"),
          c.always(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          })),
        e))
          if (((i = e[r]), Be.exec(i))) {
            if (
              (delete e[r],
              (o = o || "toggle" === i),
              i === (d ? "hide" : "show"))
            ) {
              if ("show" !== i || !h || void 0 === h[r]) continue;
              d = !0;
            }
            f[r] = (h && h[r]) || T.style(t, r);
          }
        if (!T.isEmptyObject(f))
          for (r in (h
            ? "hidden" in h && (d = h.hidden)
            : (h = O.access(t, "fxshow", {})),
          o && (h.hidden = !d),
          d
            ? T(t).show()
            : c.done(function () {
                T(t).hide();
              }),
          c.done(function () {
            for (var e in (O.remove(t, "fxshow"), f)) T.style(t, e, f[e]);
          }),
          f))
            (s = Ye(d ? h[r] : 0, r, c)),
              r in h ||
                ((h[r] = s.start),
                d &&
                  ((s.end = s.start),
                  (s.start = "width" === r || "height" === r ? 1 : 0)));
      },
    ],
    ze = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = ((t = Ie.exec(t)) && t[3]) || (T.cssNumber[e] ? "" : "px"),
            o =
              (T.cssNumber[e] || ("px" !== i && +r)) &&
              Ie.exec(T.css(n.elem, e)),
            s = 1,
            a = 20;
          if (o && o[3] !== i)
            for (
              i = i || o[3], t = t || [], o = +r || 1;
              (o /= s = s || ".5"),
                T.style(n.elem, e, o + i),
                s !== (s = n.cur() / r) && 1 !== s && --a;

            );
          return (
            t &&
              ((o = n.start = +o || +r || 0),
              (n.unit = i),
              (n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2])),
            n
          );
        },
      ],
    };
  function Ue() {
    return (
      setTimeout(function () {
        We = void 0;
      }),
      (We = T.now())
    );
  }
  function Ve(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = B[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function Ye(e, t, n) {
    for (
      var r, i = (ze[t] || []).concat(ze["*"]), o = 0, s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function Ge(i, e, t) {
    var n,
      o,
      r = 0,
      s = Xe.length,
      a = T.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (o) return !1;
        for (
          var e = We || Ue(),
            t =
              1 -
              ((e = Math.max(0, l.startTime + l.duration - e)) / l.duration ||
                0),
            n = 0,
            r = l.tweens.length;
          n < r;
          n++
        )
          l.tweens[n].run(t);
        return (
          a.notifyWith(i, [l, t, e]),
          t < 1 && r ? e : (a.resolveWith(i, [l]), !1)
        );
      },
      l = a.promise({
        elem: i,
        props: T.extend({}, e),
        opts: T.extend(!0, { specialEasing: {} }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: We || Ue(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          return (
            (e = T.Tween(
              i,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            )),
            l.tweens.push(e),
            e
          );
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (o) return this;
          for (o = !0; t < n; t++) l.tweens[t].run(1);
          return e ? a.resolveWith(i, [l, e]) : a.rejectWith(i, [l, e]), this;
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = T.camelCase(n))]),
            (o = e[n]),
            T.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = T.cssHooks[r]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < s;
      r++
    )
      if ((n = Xe[r].call(l, i, c, l.opts))) return n;
    return (
      T.map(c, Ye, l),
      T.isFunction(l.opts.start) && l.opts.start.call(i, l),
      T.fx.timer(T.extend(u, { elem: i, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (T.Animation = T.extend(Ge, {
    tweener: function (e, t) {
      for (
        var n,
          r = 0,
          i = (e = T.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length;
        r < i;
        r++
      )
        (n = e[r]), (ze[n] = ze[n] || []), ze[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Xe.unshift(e) : Xe.push(e);
    },
  })),
    (T.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? T.extend({}, e)
          : {
              complete: n || (!n && t) || (T.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !T.isFunction(t) && t),
            };
      return (
        (r.duration = T.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in T.fx.speeds
          ? T.fx.speeds[r.duration]
          : T.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          T.isFunction(r.old) && r.old.call(this),
            r.queue && T.dequeue(this, r.queue);
        }),
        r
      );
    }),
    T.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(W)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = T.isEmptyObject(t),
          o = T.speed(e, n, r);
        return (
          ((r = function () {
            var e = Ge(this, T.extend({}, t), o);
            (i || O.get(this, "finish")) && e.stop(!0);
          }).finish = r),
          i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (i, e, o) {
        function s(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = T.timers,
              r = O.get(this);
            if (t) r[t] && r[t].stop && s(r[t]);
            else for (t in r) r[t] && r[t].stop && _e.test(t) && s(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || T.dequeue(this, i);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = O.get(this),
              n = t[s + "queue"],
              r = t[s + "queueHooks"],
              i = T.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                T.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === s &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    T.each(["toggle", "show", "hide"], function (e, r) {
      var i = T.fn[r];
      T.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(Ve(r, !0), e, t, n);
      };
    }),
    T.each(
      {
        slideDown: Ve("show"),
        slideUp: Ve("hide"),
        slideToggle: Ve("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        T.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (T.timers = []),
    (T.fx.tick = function () {
      var e,
        t = 0,
        n = T.timers;
      for (We = T.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || T.fx.stop(), (We = void 0);
    }),
    (T.fx.timer = function (e) {
      T.timers.push(e), e() ? T.fx.start() : T.timers.pop();
    }),
    (T.fx.interval = 13),
    (T.fx.start = function () {
      $e = $e || setInterval(T.fx.tick, T.fx.interval);
    }),
    (T.fx.stop = function () {
      clearInterval($e), ($e = null);
    }),
    (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (T.fn.delay = function (r, e) {
      return (
        (r = (T.fx && T.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = setTimeout(e, r);
          t.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (p = y.createElement("input")),
    ($ = (s = y.createElement("select")).appendChild(
      y.createElement("option")
    )),
    (p.type = "checkbox"),
    (v.checkOn = "" !== p.value),
    (v.optSelected = $.selected),
    (s.disabled = !0),
    (v.optDisabled = !$.disabled),
    ((p = y.createElement("input")).value = "t"),
    (p.type = "radio"),
    (v.radioValue = "t" === p.value);
  var Qe,
    Je = T.expr.attrHandle;
  T.fn.extend({
    attr: function (e, t) {
      return q(this, T.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        T.removeAttr(this, e);
      });
    },
  }),
    T.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute == _
            ? T.prop(e, t, n)
            : ((1 === o && T.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  T.attrHooks[t] || (T.expr.match.bool.test(t) ? Qe : void 0))),
              void 0 === n
                ? (r && "get" in r && null !== (i = r.get(e, t))) ||
                  null != (i = T.find.attr(e, t))
                  ? i
                  : void 0
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void T.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(S);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = T.propFix[n] || n),
              T.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && T.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (Qe = {
      set: function (e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = Je[t] || T.find.attr;
      Je[t] = function (e, t, n) {
        var r, i;
        return (
          n ||
            ((i = Je[t]),
            (Je[t] = r),
            (r = null != o(e, t, n) ? t.toLowerCase() : null),
            (Je[t] = i)),
          r
        );
      };
    });
  var Ke = /^(?:input|select|textarea|button)$/i;
  T.fn.extend({
    prop: function (e, t) {
      return q(this, T.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e];
      });
    },
  }),
    T.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && T.isXMLDoc(e)) ||
              ((t = T.propFix[t] || t), (i = T.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    v.optSelected ||
      (T.propHooks.selected = {
        get: function (e) {
          return (
            (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex,
            null
          );
        },
      }),
    T.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        T.propFix[this.toLowerCase()] = this;
      }
    );
  var Ze = /[\t\r\n\f]/g;
  T.fn.extend({
    addClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a = "string" == typeof t && t,
        u = 0,
        l = this.length;
      if (T.isFunction(t))
        return this.each(function (e) {
          T(this).addClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(S) || []; u < l; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ze, " ") : " "))
          ) {
            for (o = 0; (i = e[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (s = T.trim(r)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a = 0 === arguments.length || ("string" == typeof t && t),
        u = 0,
        l = this.length;
      if (T.isFunction(t))
        return this.each(function (e) {
          T(this).removeClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(S) || []; u < l; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ze, " ") : ""))
          ) {
            for (o = 0; (i = e[o++]); )
              for (; 0 <= r.indexOf(" " + i + " "); )
                r = r.replace(" " + i + " ", " ");
            (s = t ? T.trim(r) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return "boolean" == typeof t && "string" == o
        ? t
          ? this.addClass(i)
          : this.removeClass(i)
        : this.each(
            T.isFunction(i)
              ? function (e) {
                  T(this).toggleClass(i.call(this, e, this.className, t), t);
                }
              : function () {
                  if ("string" == o)
                    for (
                      var e, t = 0, n = T(this), r = i.match(S) || [];
                      (e = r[t++]);

                    )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (o != _ && "boolean" != o) ||
                      (this.className &&
                        O.set(this, "__className__", this.className),
                      (this.className =
                        (!this.className &&
                          !1 !== i &&
                          O.get(this, "__className__")) ||
                        ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace(Ze, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
  });
  var et = /\r/g;
  T.fn.extend({
    val: function (t) {
      var n,
        e,
        r,
        i = this[0];
      return arguments.length
        ? ((r = T.isFunction(t)),
          this.each(function (e) {
            1 === this.nodeType &&
              (null == (e = r ? t.call(this, e, T(this).val()) : t)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : T.isArray(e) &&
                  (e = T.map(e, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((n =
                T.valHooks[this.type] ||
                T.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, e, "value")) ||
                (this.value = e));
          }))
        : i
        ? (n = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (e = n.get(i, "value"))
          ? e
          : "string" == typeof (e = i.value)
          ? e.replace(et, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    T.extend({
      valHooks: {
        select: {
          get: function (e) {
            for (
              var t,
                n = e.options,
                r = e.selectedIndex,
                i = "select-one" === e.type || r < 0,
                o = i ? null : [],
                s = i ? r + 1 : n.length,
                a = r < 0 ? s : i ? r : 0;
              a < s;
              a++
            )
              if (
                !(
                  (!(t = n[a]).selected && a !== r) ||
                  (v.optDisabled
                    ? t.disabled
                    : null !== t.getAttribute("disabled")) ||
                  (t.parentNode.disabled &&
                    T.nodeName(t.parentNode, "optgroup"))
                )
              ) {
                if (((t = T(t).val()), i)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = T.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected = 0 <= T.inArray(T(r).val(), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    T.each(["radio", "checkbox"], function () {
      (T.valHooks[this] = {
        set: function (e, t) {
          return T.isArray(t)
            ? (e.checked = 0 <= T.inArray(T(e).val(), t))
            : void 0;
        },
      }),
        v.checkOn ||
          (T.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    T.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        T.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    T.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var tt = T.now(),
    nt = /\?/;
  (T.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (T.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          T.error("Invalid XML: " + e),
        t
      );
    });
  var rt,
    it,
    ot = /#.*$/,
    st = /([?&])_=[^&]*/,
    at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ut = /^(?:GET|HEAD)$/,
    lt = /^\/\//,
    ct = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ft = {},
    pt = {},
    dt = "*/".concat("*");
  try {
    it = location.href;
  } catch (h) {
    ((it = y.createElement("a")).href = ""), (it = it.href);
  }
  function ht(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(S) || [];
      if (T.isFunction(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function gt(t, r, i, o) {
    var s = {},
      a = t === pt;
    function u(e) {
      var n;
      return (
        (s[e] = !0),
        T.each(t[e] || [], function (e, t) {
          return "string" != typeof (t = t(r, i, o)) || a || s[t]
            ? a
              ? !(n = t)
              : void 0
            : (r.dataTypes.unshift(t), u(t), !1);
        }),
        n
      );
    }
    return u(r.dataTypes[0]) || (!s["*"] && u("*"));
  }
  function mt(e, t) {
    var n,
      r,
      i = T.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && T.extend(!0, e, r), e;
  }
  (rt = ct.exec(it.toLowerCase()) || []),
    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: it,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            rt[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": dt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": T.parseJSON,
          "text xml": T.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? mt(mt(e, T.ajaxSettings), t) : mt(T.ajaxSettings, e);
      },
      ajaxPrefilter: ht(ft),
      ajaxTransport: ht(pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var u,
          l,
          c,
          n,
          f,
          r,
          p,
          i,
          d = T.ajaxSetup({}, t),
          h = d.context || d,
          g = d.context && (h.nodeType || h.jquery) ? T(h) : T.event,
          m = T.Deferred(),
          v = T.Callbacks("once memory"),
          y = d.statusCode || {},
          o = {},
          s = {},
          x = 0,
          a = "canceled",
          b = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!n)
                  for (n = {}; (t = at.exec(c)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? c : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || ((e = s[n] = s[n] || e), (o[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return x || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (x < 2) for (var t in e) y[t] = [y[t], e[t]];
                else b.always(e[b.status]);
              return this;
            },
            abort: function (e) {
              return (e = e || a), u && u.abort(e), w(0, e), this;
            },
          };
        if (
          ((m.promise(b).complete = v.add),
          (b.success = b.done),
          (b.error = b.fail),
          (d.url = ((e || d.url || it) + "")
            .replace(ot, "")
            .replace(lt, rt[1] + "//")),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = T.trim(d.dataType || "*")
            .toLowerCase()
            .match(S) || [""]),
          null == d.crossDomain &&
            ((r = ct.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] === rt[1] &&
                r[2] === rt[2] &&
                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                  (rt[3] || ("http:" === rt[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = T.param(d.data, d.traditional)),
          gt(ft, d, t, b),
          2 === x)
        )
          return b;
        for (i in ((p = d.global) &&
          0 == T.active++ &&
          T.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !ut.test(d.type)),
        (l = d.url),
        d.hasContent ||
          (d.data &&
            ((l = d.url += (nt.test(l) ? "&" : "?") + d.data), delete d.data),
          !1 === d.cache &&
            (d.url = st.test(l)
              ? l.replace(st, "$1_=" + tt++)
              : l + (nt.test(l) ? "&" : "?") + "_=" + tt++)),
        d.ifModified &&
          (T.lastModified[l] &&
            b.setRequestHeader("If-Modified-Since", T.lastModified[l]),
          T.etag[l] && b.setRequestHeader("If-None-Match", T.etag[l])),
        ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) &&
          b.setRequestHeader("Content-Type", d.contentType),
        b.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ("*" !== d.dataTypes[0] ? ", " + dt + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          b.setRequestHeader(i, d.headers[i]);
        if (d.beforeSend && (!1 === d.beforeSend.call(h, b, d) || 2 === x))
          return b.abort();
        for (i in ((a = "abort"), { success: 1, error: 1, complete: 1 }))
          b[i](d[i]);
        if ((u = gt(pt, d, t, b))) {
          (b.readyState = 1),
            p && g.trigger("ajaxSend", [b, d]),
            d.async &&
              0 < d.timeout &&
              (f = setTimeout(function () {
                b.abort("timeout");
              }, d.timeout));
          try {
            (x = 1), u.send(o, w);
          } catch (e) {
            if (!(x < 2)) throw e;
            w(-1, e);
          }
        } else w(-1, "No Transport");
        function w(e, t, n, r) {
          var i,
            o,
            s,
            a = t;
          2 !== x &&
            ((x = 2),
            f && clearTimeout(f),
            (u = void 0),
            (c = r || ""),
            (b.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    s = s || i;
                  }
                  o = o || s;
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
              })(d, b, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(d, s, b, r)),
            r
              ? (d.ifModified &&
                  ((n = b.getResponseHeader("Last-Modified")) &&
                    (T.lastModified[l] = n),
                  (n = b.getResponseHeader("etag")) && (T.etag[l] = n)),
                204 === e || "HEAD" === d.type
                  ? (a = "nocontent")
                  : 304 === e
                  ? (a = "notmodified")
                  : ((a = s.state), (i = s.data), (r = !(o = s.error))))
              : ((o = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
            (b.status = e),
            (b.statusText = (t || a) + ""),
            r ? m.resolveWith(h, [i, a, b]) : m.rejectWith(h, [b, a, o]),
            b.statusCode(y),
            (y = void 0),
            p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? i : o]),
            v.fireWith(h, [b, a]),
            p &&
              (g.trigger("ajaxComplete", [b, d]),
              --T.active || T.event.trigger("ajaxStop")));
        }
        return b;
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script");
      },
    }),
    T.each(["get", "post"], function (e, i) {
      T[i] = function (e, t, n, r) {
        return (
          T.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          T.ajax({ url: e, type: i, dataType: r, data: t, success: n })
        );
      };
    }),
    T.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (T._evalUrl = function (e) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    T.fn.extend({
      wrapAll: function (t) {
        var e;
        return T.isFunction(t)
          ? this.each(function (e) {
              T(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = T(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (n) {
        return this.each(
          T.isFunction(n)
            ? function (e) {
                T(this).wrapInner(n.call(this, e));
              }
            : function () {
                var e = T(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              }
        );
      },
      wrap: function (t) {
        var n = T.isFunction(t);
        return this.each(function (e) {
          T(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            T.nodeName(this, "body") || T(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (T.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (T.expr.filters.visible = function (e) {
      return !T.expr.filters.hidden(e);
    });
  var vt = /%20/g,
    yt = /\[\]$/,
    xt = /\r?\n/g,
    bt = /^(?:submit|button|image|reset|file)$/i,
    wt = /^(?:input|select|textarea|keygen)/i;
  (T.param = function (e, t) {
    function n(e, t) {
      (t = T.isFunction(t) ? t() : null == t ? "" : t),
        (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
    }
    var r,
      i = [];
    if (
      (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional),
      T.isArray(e) || (e.jquery && !T.isPlainObject(e)))
    )
      T.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, i, o) {
          if (T.isArray(e))
            T.each(e, function (e, t) {
              i || yt.test(r)
                ? o(r, t)
                : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o);
            });
          else if (i || "object" !== T.type(e)) o(r, e);
          else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
        })(r, e[r], t, n);
    return i.join("&").replace(vt, "+");
  }),
    T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !T(this).is(":disabled") &&
              wt.test(this.nodeName) &&
              !bt.test(e) &&
              (this.checked || !I.test(e))
            );
          })
          .map(function (e, t) {
            var n = T(this).val();
            return null == n
              ? null
              : T.isArray(n)
              ? T.map(n, function (e) {
                  return { name: t.name, value: e.replace(xt, "\r\n") };
                })
              : { name: t.name, value: n.replace(xt, "\r\n") };
          })
          .get();
      },
    }),
    (T.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var Tt = 0,
    Ct = {},
    Nt = { 0: 200, 1223: 204 },
    kt = T.ajaxSettings.xhr();
  h.ActiveXObject &&
    T(h).on("unload", function () {
      for (var e in Ct) Ct[e]();
    }),
    (v.cors = !!kt && "withCredentials" in kt),
    (v.ajax = kt = !!kt),
    T.ajaxTransport(function (o) {
      var s;
      return v.cors || (kt && !o.crossDomain)
        ? {
            send: function (e, t) {
              var n,
                r = o.xhr(),
                i = ++Tt;
              if (
                (r.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (n in o.xhrFields) r[n] = o.xhrFields[n];
              for (n in (o.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (s = function (e) {
                return function () {
                  s &&
                    (delete Ct[i],
                    (s = r.onload = r.onerror = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? t(r.status, r.statusText)
                      : t(
                          Nt[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = s()),
                (r.onerror = s("error")),
                (s = Ct[i] = s("abort")),
                r.send((o.hasContent && o.data) || null);
            },
            abort: function () {
              s && s();
            },
          }
        : void 0;
    }),
    T.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return T.globalEval(e), e;
        },
      },
    }),
    T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    T.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (r = T("<script>")
              .prop({ async: !0, charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              y.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Et = [],
    Dt = /(=)\?(?=&|$)|\?\?/;
  T.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Et.pop() || T.expando + "_" + tt++;
      return (this[e] = !0), e;
    },
  }),
    T.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        s =
          !1 !== e.jsonp &&
          (Dt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Dt.test(e.data) &&
              "data");
      return s || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            T.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(Dt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || T.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = h[r]),
          (h[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (h[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Et.push(r)),
              o && T.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script")
        : void 0;
    }),
    (T.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || y);
      var r = x.exec(e),
        n = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = T.buildFragment([e], t, n)),
          n && n.length && T(n).remove(),
          T.merge([], r.childNodes));
    });
  var jt = T.fn.load;
  (T.fn.load = function (e, t, n) {
    if ("string" != typeof e && jt) return jt.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      0 <= a && ((r = e.slice(a)), (e = e.slice(0, a))),
      T.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      0 < s.length &&
        T.ajax({ url: e, type: i, dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                s.each(n, o || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    (T.expr.filters.animated = function (t) {
      return T.grep(T.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var St = h.document.documentElement;
  function At(e) {
    return T.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (T.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = T.css(e, "position"),
        u = T(e),
        l = {};
      "static" === a && (e.style.position = "relative"),
        (o = u.offset()),
        (r = T.css(e, "top")),
        (s = T.css(e, "left")),
        (s =
          ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto")
            ? ((i = (a = u.position()).top), a.left)
            : ((i = parseFloat(r) || 0), parseFloat(s) || 0)),
        T.isFunction(t) && (t = t.call(e, n, o)),
        null != t.top && (l.top = t.top - o.top + i),
        null != t.left && (l.left = t.left - o.left + s),
        "using" in t ? t.using.call(e, l) : u.css(l);
    },
  }),
    T.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                T.offset.setOffset(this, t, e);
              });
        var e,
          n = this[0],
          r = { top: 0, left: 0 },
          i = n && n.ownerDocument;
        return i
          ? ((e = i.documentElement),
            T.contains(e, n)
              ? (typeof n.getBoundingClientRect != _ &&
                  (r = n.getBoundingClientRect()),
                (i = At(i)),
                {
                  top: r.top + i.pageYOffset - e.clientTop,
                  left: r.left + i.pageXOffset - e.clientLeft,
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === T.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                T.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += T.css(e[0], "borderTopWidth", !0)),
                (r.left += T.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - T.css(n, "marginTop", !0),
              left: t.left - r.left - T.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || St;
            e && !T.nodeName(e, "html") && "static" === T.css(e, "position");

          )
            e = e.offsetParent;
          return e || St;
        });
      },
    }),
    T.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        T.fn[t] = function (e) {
          return q(
            this,
            function (e, t, n) {
              var r = At(e);
              return void 0 === n
                ? r
                  ? r[i]
                  : e[t]
                : void (r
                    ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    T.each(["top", "left"], function (e, n) {
      T.cssHooks[n] = ke(v.pixelPosition, function (e, t) {
        return t
          ? ((t = Ne(e, n)), Te.test(t) ? T(e).position()[n] + "px" : t)
          : void 0;
      });
    }),
    T.each({ Height: "height", Width: "width" }, function (o, s) {
      T.each(
        { padding: "inner" + o, content: s, "": "outer" + o },
        function (r, e) {
          T.fn[e] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return q(
              this,
              function (e, t, n) {
                var r;
                return T.isWindow(e)
                  ? e.document.documentElement["client" + o]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + o],
                      r["scroll" + o],
                      e.body["offset" + o],
                      r["offset" + o],
                      r["client" + o]
                    ))
                  : void 0 === n
                  ? T.css(e, t, i)
                  : T.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
              null
            );
          };
        }
      );
    }),
    (T.fn.size = function () {
      return this.length;
    }),
    (T.fn.andSelf = T.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return T;
      });
  var Lt = h.jQuery,
    qt = h.$;
  return (
    (T.noConflict = function (e) {
      return h.$ === T && (h.$ = qt), e && h.jQuery === T && (h.jQuery = Lt), T;
    }),
    typeof e == _ && (h.jQuery = h.$ = T),
    T
  );
});
