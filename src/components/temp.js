function Fe(a) {
    a = a.toLowerCase();
    for (var b = !0, c = "", d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        /\.|\!|\?|\n|\r/.test(e) ? b = !0 : "" != e.trim() && 1 == b && (e = e.toUpperCase(), b = !1), c += e
    }
    return c = _(c = "/" == window.location.pathname && -1 == window.location.search.indexOf("skip=i") ? c.replace(/\bi\b/g, "I") : c)
}

function Je(a) {
    a = (a = "/tr/" == window.location.pathname ? a.replace(/\bİ\b/g, "i") : a).toLowerCase();
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        c % 2 ? "/tr/" == window.location.pathname && "i" == d ? b += "İ" : b += d.toUpperCase() : b += d
    }
    return b
}

function Ge(a) {
    return c = a.toLowerCase(), c = (c + "").replace(/^(\S)|\s+(\S)/g, function (a) {
        return a.toUpperCase()
    }), c = _(c), c = c.replace(/\(([A-Za-z])/g, function (a) {
        return a.toUpperCase()
    }), c
}

function _(c) {
    return c = c.replace(/\"([A-Za-z])/g, function (a) {
        return a.toUpperCase()
    })
}

function Ye(a) {
    for (var s = "", i = 0; i < a.length; i++) {
        var n = a.charAt(i);
        s += n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()
    }
    return s
}

function Ke(a) {
    return a = (a = (a = Ge(a)).replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Is|Of|On|Or|The|To|Vs?\\.?|Via)\b/g, function (_) {
        return _.toLowerCase()
    })).replace(/(?:([\.\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|is|of|on|or|the|to|vs?\\.?|via)/g, Ge)
}

function Ze(_, $, ee) {
    for (var te = "", c = 0; c < _.length; c++) {
        var ne = _.charAt(c),
            re = ne;
        $[re = ee ? ne.toLowerCase() : re] ? te += $[re] : te += ne
    }
    return te = te.replace(/\n/g, "<br>")
}

function Qe(_, ee) {
    return _.split("").reduce(function (_, $) {
        return _ + $ + ee
    }, "").replace(/\n/g, "<br>")
}

function $e(_) {
    -1 < window.location.search.indexOf("hyphenate=true") && (_.value = _.value.replace(/ /g, "-"), _.placeholder = _.placeholder.replace(/ /g, "-")), -1 < window.location.search.indexOf("stripdashes=true") && (_.value = _.value.replace(/-/g, " "), _.placeholder = _.placeholder.replace(/-/g, " ")), -1 < window.location.search.indexOf("stripspaces=true") && (_.value = _.value.replace(/ /g, ""), _.placeholder = _.placeholder.replace(/ /g, "")), -1 < window.location.search.indexOf("striplinebreaks=true") && (_.value = _.value.replace(/\n/g, " "), _.placeholder = _.placeholder.replace(/\n/g, " "))
}

function et(_, $) {
    var ee;
    "undefined" != typeof gtag && (value = 0, null != (ee = document.getElementById("word_count")) && (value = parseInt(ee.innerHTML)), gtag("event", $, {
        event_category: _,
        value: value
    }))
}

function tt(_) {
    var $ = _.value;
    void 0 === _.value && ($ = _.innerText), document.getElementById("char_count").innerHTML = $.length;
    var ee = 0,
        _ = $.trim().replace(/\s+/gi, " ");
    0 < _.length && (ee = _.split(" ").length), document.getElementById("word_count").innerHTML = ee;
    ee = 0;
    0 < $.length && (ee = $.split(/\r*\n/).length), document.getElementById("line_count").innerHTML = ee
}
var te;

function nt(_, $) {
    clearTimeout(te);
    var ee = document.querySelector(".messages");
    ee.innerHTML = '<div class="message ' + $ + '">' + _ + "</div>", te = setTimeout(function () {
        ee.innerHTML = ""
    }, 3e3)
}
var $ = Date.now(),
    ee = [],
    ne = ["/22181265/ConvertCase_728x90_ATF", "/22181265/ConvertCase_300x250_Belowtxtbox_1", "/22181265/ConvertCase_300x250_Belowtxtbox_2"];

function rt() {
    $ + 5e3 < Date.now() && ((window.aaw = window.aaw || {
        cmd: []
    }).cmd.push(function () {
        0 < ee.length && (window.aaw.refreshAdunits(ee), ee = [])
    }), $ = Date.now())
}

function ot(_, ee) {
    return _.replace(/[\s\S]/g, function (_) {
        var $;
        return $ = _.charCodeAt().toString(2), _ = "00000000".slice(String($).length) + $, 0 == ee ? _ : _ + " "
    })
}

function it(_) {
    var $ = (_ = (_ = _.replace(/\s+/g, "")).match(/.{1,8}/g).join(" ")).split(" "),
        ee = [];
    for (i = 0; i < $.length; i++) ee.push(String.fromCharCode(parseInt($[i], 2)));
    return ee.join("")
}

function at(a) {
    for (var _ = [], $ = [], ee = [], i = 768; i <= 789; i++) _.push(String.fromCharCode(i));
    for (i = 790; i <= 819; i++) 794 != i && 795 != i && ee.push(String.fromCharCode(i));
    _.push(String.fromCharCode(794)), _.push(String.fromCharCode(795));
    for (i = 820; i <= 824; i++) $.push(String.fromCharCode(i));
    for (i = 825; i <= 828; i++) ee.push(String.fromCharCode(i));
    for (i = 829; i <= 836; i++) _.push(String.fromCharCode(i));
    _.push(String.fromCharCode(836)), ee.push(String.fromCharCode(837)), _.push(String.fromCharCode(838)), ee.push(String.fromCharCode(839)), ee.push(String.fromCharCode(840)), ee.push(String.fromCharCode(841)), _.push(String.fromCharCode(842)), _.push(String.fromCharCode(843)), _.push(String.fromCharCode(844)), ee.push(String.fromCharCode(845)), ee.push(String.fromCharCode(846)), _.push(String.fromCharCode(848)), _.push(String.fromCharCode(849)), _.push(String.fromCharCode(850)), ee.push(String.fromCharCode(851)), ee.push(String.fromCharCode(852)), ee.push(String.fromCharCode(853)), ee.push(String.fromCharCode(854)), _.push(String.fromCharCode(855)), _.push(String.fromCharCode(856)), ee.push(String.fromCharCode(857)), ee.push(String.fromCharCode(858)), _.push(String.fromCharCode(859)), ee.push(String.fromCharCode(860)), _.push(String.fromCharCode(861)), _.push(String.fromCharCode(861)), ee.push(String.fromCharCode(863)), _.push(String.fromCharCode(864)), _.push(String.fromCharCode(865));
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        if (!/\s/.test(d)) {
            d += $[Math.floor(Math.random() * $.length)];
            for (var te = _.length - 1, ne = 0, re = 10 - 10 * Math.random(); ne < re; ne++) d += _[Math.floor(Math.random() * te)];
            for (var oe = ee.length - 1, ne = 0, re = 10 - 10 * Math.random(); ne < re; ne++) d += ee[Math.floor(Math.random() * oe)]
        }
        b += d
    }
    return b = b.replace(/\n/g, "<br>")
} (window.googletag = window.googletag || {
    cmd: []
}).cmd.push(function () {
    googletag.pubads().addEventListener("impressionViewable", function (_) {
        _ = (_ = _.slot.getAdUnitPath()).replace("22181265,153247860", "22181265");
        ne.includes(_) && ee.push(_)
    })
}), setInterval(function () {
    var _;
    "visible" === (void 0 !== document.hidden ? _ = "visibilityState" : void 0 !== document.mozHidden ? _ = "mozVisibilityState" : void 0 !== document.msHidden ? _ = "msVisibilityState" : void 0 !== document.webkitHidden && (_ = "webkitVisibilityState"), document[_]) && $ + 3e4 < Date.now() && rt()
}, 1e3);
var a, b, ut = {
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹",
    "+": "⁺",
    "-": "⁻",
    "=": "⁼",
    "(": "⁽",
    ")": "⁾",
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᶠ",
    g: "ᵍ",
    h: "ʰ",
    i: "ⁱ",
    j: "ʲ",
    k: "ᵏ",
    l: "ˡ",
    m: "ᵐ",
    n: "ⁿ",
    o: "ᵒ",
    p: "ᵖ",
    q: "ᵠ",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ"
},
    ct = {
        a: "ᴀ",
        b: "ʙ",
        c: "ᴄ",
        d: "ᴅ",
        e: "ᴇ",
        f: "ꜰ",
        g: "ɢ",
        h: "ʜ",
        i: "ɪ",
        j: "ᴊ",
        k: "ᴋ",
        l: "ʟ",
        m: "ᴍ",
        n: "ɴ",
        o: "ᴏ",
        p: "ᴘ",
        r: "ʀ",
        s: "ꜱ",
        t: "ᴛ",
        u: "ᴜ",
        v: "ᴠ",
        w: "ᴡ",
        y: "ʏ",
        z: "ᴢ"
    },
    dt = {
        " ": " ",
        0: "０",
        1: "１",
        2: "２",
        3: "３",
        4: "４",
        5: "５",
        6: "６",
        7: "７",
        8: "８",
        9: "９",
        a: "ａ",
        b: "ｂ",
        c: "ｃ",
        d: "ｄ",
        e: "ｅ",
        f: "ｆ",
        g: "ｇ",
        h: "ｈ",
        i: "ｉ",
        j: "ｊ",
        k: "ｋ",
        l: "ｌ",
        m: "ｍ",
        n: "ｎ",
        o: "ｏ",
        p: "ｐ",
        q: "ｑ",
        r: "ｒ",
        s: "ｓ",
        t: "ｔ",
        u: "ｕ",
        v: "ｖ",
        w: "ｗ",
        x: "ｘ",
        y: "ｙ",
        z: "ｚ",
        A: "Ａ",
        B: "Ｂ",
        C: "Ｃ",
        D: "Ｄ",
        E: "Ｅ",
        F: "Ｆ",
        G: "Ｇ",
        H: "Ｈ",
        I: "Ｉ",
        J: "Ｊ",
        K: "Ｋ",
        L: "Ｌ",
        M: "Ｍ",
        N: "Ｎ",
        O: "Ｏ",
        P: "Ｐ",
        Q: "Ｑ",
        R: "Ｒ",
        S: "Ｓ",
        T: "Ｔ",
        U: "Ｕ",
        V: "Ｖ",
        W: "Ｗ",
        X: "Ｘ",
        Y: "Ｙ",
        Z: "Ｚ",
        "!": "！",
        '"': "゛",
        "#": "＃",
        $: "＄",
        "%": "％",
        "&": "＆",
        "(": "（",
        ")": "）",
        "*": "＊",
        "+": "＋",
        ",": "、",
        "-": "ー",
        ".": "。",
        "/": "／",
        ":": "：",
        ";": "；",
        "<": "〈",
        "=": "＝",
        ">": "〉",
        "?": "？",
        "@": "＠",
        "[": "［",
        "'": "'",
        "]": "］",
        "^": "＾",
        _: "＿",
        "`": "‘",
        "{": "｛",
        "|": "｜",
        "}": "｝",
        "~": "～"
    },
    lt = {
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        0: "𝟬",
        1: "𝟭",
        2: "𝟮",
        3: "𝟯",
        4: "𝟰",
        5: "𝟱",
        6: "𝟲",
        7: "𝟳",
        8: "𝟴",
        9: "𝟵"
    },
    st = {
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡",
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻"
    },
    pt = {
        " ": " ",
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ɟ",
        g: "ƃ",
        h: "ɥ",
        i: "ᴉ",
        j: "ɾ",
        k: "ʞ",
        l: "l",
        m: "ɯ",
        n: "u",
        o: "o",
        p: "d",
        q: "b",
        r: "ɹ",
        s: "s",
        t: "ʇ",
        u: "n",
        v: "ʌ",
        w: "ʍ",
        x: "x",
        y: "ʎ",
        z: "z",
        A: "∀",
        B: "B",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "Ⅎ",
        G: "פ",
        H: "H",
        I: "I",
        J: "ſ",
        K: "K",
        L: "˥",
        M: "W",
        N: "N",
        O: "O",
        P: "Ԁ",
        Q: "Q",
        R: "R",
        S: "S",
        T: "┴",
        U: "∩",
        V: "Λ",
        W: "M",
        X: "X",
        Y: "⅄",
        Z: "Z",
        0: "0",
        1: "Ɩ",
        2: "ᄅ",
        3: "Ɛ",
        4: "ㄣ",
        5: "ϛ",
        6: "9",
        7: "ㄥ",
        8: "8",
        9: "6",
        ",": "'",
        ".": "˙",
        "?": "¿",
        "!": "¡",
        '"': ",,",
        "'": ",",
        "`": ",",
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
        "<": ">",
        ">": "<",
        "&": "⅋",
        _: "‾"
    },
    ft = {
        a: "ɒ",
        b: "d",
        c: "ɔ",
        d: "b",
        e: "ɘ",
        f: "ʇ",
        g: "ǫ",
        h: "ʜ",
        i: "i",
        j: "Ⴑ",
        k: "ʞ",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "q",
        q: "p",
        r: "ɿ",
        s: "ƨ",
        t: "ƚ",
        u: "u",
        v: "v",
        w: "w",
        x: "x",
        y: "y",
        z: "z",
        A: "A",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ᖷ",
        G: "Ꭾ",
        H: "H",
        I: "I",
        J: "Ⴑ",
        K: "ᐴ",
        L: "⅃",
        M: "M",
        N: "И",
        O: "O",
        P: "ꟼ",
        Q: "Ọ",
        R: "Я",
        S: "Ƨ",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Ƹ",
        0: "0",
        1: "1",
        2: "2",
        3: "Ƹ",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        "?": "␚",
        ";": "⁏"
    },
    mt = {
        a: "𝖺",
        b: "𝖻",
        c: "𝖼",
        d: "𝖽",
        e: "𝖾",
        f: "𝖿",
        g: "𝗀",
        h: "𝗁",
        i: "𝗂",
        j: "𝗃",
        k: "𝗄",
        l: "𝗅",
        m: "𝗆",
        n: "𝗇",
        o: "𝗈",
        p: "𝗉",
        q: "𝗊",
        r: "𝗋",
        s: "𝗌",
        t: "𝗍",
        u: "𝗎",
        v: "𝗏",
        w: "𝗐",
        x: "𝗑",
        y: "𝗒",
        z: "𝗓",
        A: "𝖠",
        B: "𝖡",
        C: "𝖢",
        D: "𝖣",
        E: "𝖤",
        F: "𝖥",
        G: "𝖦",
        H: "𝖧",
        I: "𝖨",
        J: "𝖩",
        K: "𝖪",
        L: "𝖫",
        M: "𝖬",
        N: "𝖭",
        O: "𝖮",
        P: "𝖯",
        Q: "𝖰",
        R: "𝖱",
        S: "𝖲",
        T: "𝖳",
        U: "𝖴",
        V: "𝖵",
        W: "𝖶",
        X: "𝖷",
        Y: "𝖸",
        Z: "𝖹",
        0: "𝟢",
        1: "𝟣",
        2: "𝟤",
        3: "𝟥",
        4: "𝟦",
        5: "𝟧",
        6: "𝟨",
        7: "𝟩",
        8: "𝟪",
        9: "𝟫"
    },
    gt = {
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻",
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡"
    },
    vt = {
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
        0: "𝟬",
        1: "𝟭",
        2: "𝟮",
        3: "𝟯",
        4: "𝟰",
        5: "𝟱",
        6: "𝟲",
        7: "𝟳",
        8: "𝟴",
        9: "𝟵"
    },
    ht = {
        a: "𝙖",
        b: "𝙗",
        c: "𝙘",
        d: "𝙙",
        e: "𝙚",
        f: "𝙛",
        g: "𝙜",
        h: "𝙝",
        i: "𝙞",
        j: "𝙟",
        k: "𝙠",
        l: "𝙡",
        m: "𝙢",
        n: "𝙣",
        o: "𝙤",
        p: "𝙥",
        q: "𝙦",
        r: "𝙧",
        s: "𝙨",
        t: "𝙩",
        u: "𝙪",
        v: "𝙫",
        w: "𝙬",
        x: "𝙭",
        y: "𝙮",
        z: "𝙯",
        A: "𝘼",
        B: "𝘽",
        C: "𝘾",
        D: "𝘿",
        E: "𝙀",
        F: "𝙁",
        G: "𝙂",
        H: "𝙃",
        I: "𝙄",
        J: "𝙅",
        K: "𝙆",
        L: "𝙇",
        M: "𝙈",
        N: "𝙉",
        O: "𝙊",
        P: "𝙋",
        Q: "𝙌",
        R: "𝙍",
        S: "𝙎",
        T: "𝙏",
        U: "𝙐",
        V: "𝙑",
        W: "𝙒",
        X: "𝙓",
        Y: "𝙔",
        Z: "𝙕"
    },
    yt = {
        a: "𝒶",
        b: "𝒷",
        c: "𝒸",
        d: "𝒹",
        e: "ℯ",
        f: "𝒻",
        g: "ℊ",
        h: "𝒽",
        i: "𝒾",
        j: "𝒿",
        k: "𝓀",
        l: "𝓁",
        m: "𝓂",
        n: "𝓃",
        o: "ℴ",
        p: "𝓅",
        q: "𝓆",
        r: "𝓇",
        s: "𝓈",
        t: "𝓉",
        u: "𝓊",
        v: "𝓋",
        w: "𝓌",
        x: "𝓍",
        y: "𝓎",
        z: "𝓏",
        A: "𝒜",
        B: "ℬ",
        C: "𝒞",
        D: "𝒟",
        E: "ℰ",
        F: "ℱ",
        G: "𝒢",
        H: "ℋ",
        I: "ℐ",
        J: "𝒥",
        K: "𝒦",
        L: "ℒ",
        M: "ℳ",
        N: "𝒩",
        O: "𝒪",
        P: "𝒫",
        Q: "𝒬",
        R: "ℛ",
        S: "𝒮",
        T: "𝒯",
        U: "𝒰",
        V: "𝒱",
        W: "𝒲",
        X: "𝒳",
        Y: "𝒴",
        Z: "𝒵"
    },
    Et = {
        a: "𝓪",
        b: "𝓫",
        c: "𝓬",
        d: "𝓭",
        e: "𝓮",
        f: "𝓯",
        g: "𝓰",
        h: "𝓱",
        i: "𝓲",
        j: "𝓳",
        k: "𝓴",
        l: "𝓵",
        m: "𝓶",
        n: "𝓷",
        o: "𝓸",
        p: "𝓹",
        q: "𝓺",
        r: "𝓻",
        s: "𝓼",
        t: "𝓽",
        u: "𝓾",
        v: "𝓿",
        w: "𝔀",
        x: "𝔁",
        y: "𝔂",
        z: "𝔃",
        A: "𝓐",
        B: "𝓑",
        C: "𝓒",
        D: "𝓓",
        E: "𝓔",
        F: "𝓕",
        G: "𝓖",
        H: "𝓗",
        I: "𝓘",
        J: "𝓙",
        K: "𝓚",
        L: "𝓛",
        M: "𝓜",
        N: "𝓝",
        O: "𝓞",
        P: "𝓟",
        Q: "𝓠",
        R: "𝓡",
        S: "𝓢",
        T: "𝓣",
        U: "𝓤",
        V: "𝓥",
        W: "𝓦",
        X: "𝓧",
        Y: "𝓨",
        Z: "𝓩",
        1: "𝟏",
        2: "𝟐",
        3: "𝟑",
        4: "𝟒",
        5: "𝟓",
        6: "𝟔",
        7: "𝟕",
        8: "𝟖",
        9: "𝟗",
        0: "𝟎",
        "!": "❗",
        "?": "❓"
    },
    Lt = {
        a: "𝔞",
        b: "𝔟",
        c: "𝔠",
        d: "𝔡",
        e: "𝔢",
        f: "𝔣",
        g: "𝔤",
        h: "𝔥",
        i: "𝔦",
        j: "𝔧",
        k: "𝔨",
        l: "𝔩",
        m: "𝔪",
        n: "𝔫",
        o: "𝔬",
        p: "𝔭",
        q: "𝔮",
        r: "𝔯",
        s: "𝔰",
        t: "𝔱",
        u: "𝔲",
        v: "𝔳",
        w: "𝔴",
        x: "𝔵",
        y: "𝔶",
        z: "𝔷",
        A: "𝔄",
        B: "𝔅",
        C: "ℭ",
        D: "𝔇",
        E: "𝔈",
        F: "𝔉",
        G: "𝔊",
        H: "ℌ",
        I: "ℑ",
        J: "𝔍",
        K: "𝔎",
        L: "𝔏",
        M: "𝔐",
        N: "𝔑",
        O: "𝔒",
        P: "𝔓",
        Q: "𝔔",
        R: "ℜ",
        S: "𝔖",
        T: "𝔗",
        U: "𝔘",
        V: "𝔙",
        W: "𝔚",
        X: "𝔛",
        Y: "𝔜",
        Z: "ℨ"
    },
    bt = {
        a: "𝖆",
        b: "𝖇",
        c: "𝖈",
        d: "𝖉",
        e: "𝖊",
        f: "𝖋",
        g: "𝖌",
        h: "𝖍",
        i: "𝖎",
        j: "𝖏",
        k: "𝖐",
        l: "𝖑",
        m: "𝖒",
        n: "𝖓",
        o: "𝖔",
        p: "𝖕",
        q: "𝖖",
        r: "𝖗",
        s: "𝖘",
        t: "𝖙",
        u: "𝖚",
        v: "𝖛",
        w: "𝖜",
        x: "𝖝",
        y: "𝖞",
        z: "𝖟",
        A: "𝕬",
        B: "𝕭",
        C: "𝕮",
        D: "𝕯",
        E: "𝕰",
        F: "𝕱",
        G: "𝕲",
        H: "𝕳",
        I: "𝕴",
        J: "𝕵",
        K: "𝕶",
        L: "𝕷",
        M: "𝕸",
        N: "𝕹",
        O: "𝕺",
        P: "𝕻",
        Q: "𝕼",
        R: "𝕽",
        S: "𝕾",
        T: "𝕿",
        U: "𝖀",
        V: "𝖁",
        W: "𝖂",
        X: "𝖃",
        Y: "𝖄",
        Z: "𝖅",
        1: "❗",
        2: "𝟐",
        3: "𝟑",
        4: "𝟒",
        5: "𝟓",
        6: "𝟔",
        7: "𝟕",
        8: "𝟖",
        9: "𝟗",
        0: "𝟎",
        "?": "❓"
    },
    wt = {
        a: "🄰",
        b: "🄱",
        c: "🄲",
        d: "🄳",
        e: "🄴",
        f: "🄵",
        g: "🄶",
        h: "🄷",
        i: "🄸",
        j: "🄹",
        k: "🄺",
        l: "🄻",
        m: "🄼",
        n: "🄽",
        o: "🄾",
        p: "🄿",
        q: "🅀",
        r: "🅁",
        s: "🅂",
        t: "🅃",
        u: "🅄",
        v: "🅅",
        w: "🅆",
        x: "🅇",
        y: "🅈",
        z: "🅉",
        A: "🄰",
        B: "🄱",
        C: "🄲",
        D: "🄳",
        E: "🄴",
        F: "🄵",
        G: "🄶",
        H: "🄷",
        I: "🄸",
        J: "🄹",
        K: "🄺",
        L: "🄻",
        M: "🄼",
        N: "🄽",
        O: "🄾",
        P: "🄿",
        Q: "🅀",
        R: "🅁",
        S: "🅂",
        T: "🅃",
        U: "🅄",
        V: "🅅",
        W: "🅆",
        X: "🅇",
        Y: "🅈",
        Z: "🅉",
        ".": "⊡"
    },
    It = {
        a: "🅰",
        b: "🅱",
        c: "🅲",
        d: "🅳",
        e: "🅴",
        f: "🅵",
        g: "🅶",
        h: "🅷",
        i: "🅸",
        j: "🅹",
        k: "🅺",
        l: "🅻",
        m: "🅼",
        n: "🅽",
        o: "🅾",
        p: "🅿",
        q: "🆀",
        r: "🆁",
        s: "🆂",
        t: "🆃",
        u: "🆄",
        v: "🆅",
        w: "🆆",
        x: "🆇",
        y: "🆈",
        z: "🆉",
        A: "🅰",
        B: "🅱",
        C: "🅲",
        D: "🅳",
        E: "🅴",
        F: "🅵",
        G: "🅶",
        H: "🅷",
        I: "🅸",
        J: "🅹",
        K: "🅺",
        L: "🅻",
        M: "🅼",
        N: "🅽",
        O: "🅾",
        P: "🅿",
        Q: "🆀",
        R: "🆁",
        S: "🆂",
        T: "🆃",
        U: "🆄",
        V: "🆅",
        W: "🆆",
        X: "🆇",
        Y: "🆈",
        Z: "🆉"
    },
    Ct = {
        a: "𝚊",
        b: "𝚋",
        c: "𝚌",
        d: "𝚍",
        e: "𝚎",
        f: "𝚏",
        g: "𝚐",
        h: "𝚑",
        i: "𝚒",
        j: "𝚓",
        k: "𝚔",
        l: "𝚕",
        m: "𝚖",
        n: "𝚗",
        o: "𝚘",
        p: "𝚙",
        q: "𝚚",
        r: "𝚛",
        s: "𝚜",
        t: "𝚝",
        u: "𝚞",
        v: "𝚟",
        w: "𝚠",
        x: "𝚡",
        y: "𝚢",
        z: "𝚣",
        A: "𝙰",
        B: "𝙱",
        C: "𝙲",
        D: "𝙳",
        E: "𝙴",
        F: "𝙵",
        G: "𝙶",
        H: "𝙷",
        I: "𝙸",
        J: "𝙹",
        K: "𝙺",
        L: "𝙻",
        M: "𝙼",
        N: "𝙽",
        O: "𝙾",
        P: "𝙿",
        Q: "𝚀",
        R: "𝚁",
        S: "𝚂",
        T: "𝚃",
        U: "𝚄",
        V: "𝚅",
        W: "𝚆",
        X: "𝚇",
        Y: "𝚈",
        Z: "𝚉",
        1: "𝟷",
        2: "𝟸",
        3: "𝟹",
        4: "𝟺",
        5: "𝟻",
        6: "𝟼",
        7: "𝟽",
        8: "𝟾",
        9: "𝟿",
        0: "𝟶",
        "!": "！",
        "?": "？",
        ".": "．"
    },
    Bt = {
        a: "ⓐ",
        b: "ⓑ",
        c: "ⓒ",
        d: "ⓓ",
        e: "ⓔ",
        f: "ⓕ",
        g: "ⓖ",
        h: "ⓗ",
        i: "ⓘ",
        j: "ⓙ",
        k: "ⓚ",
        l: "ⓛ",
        m: "ⓜ",
        n: "ⓝ",
        o: "ⓞ",
        p: "ⓟ",
        q: "ⓠ",
        r: "ⓡ",
        s: "ⓢ",
        t: "ⓣ",
        u: "ⓤ",
        v: "ⓥ",
        w: "ⓦ",
        x: "ⓧ",
        y: "ⓨ",
        z: "ⓩ",
        A: "Ⓐ",
        B: "Ⓑ",
        C: "Ⓒ",
        D: "Ⓓ",
        E: "Ⓔ",
        F: "Ⓕ",
        G: "Ⓖ",
        H: "Ⓗ",
        I: "Ⓘ",
        J: "Ⓙ",
        K: "Ⓚ",
        L: "Ⓛ",
        M: "Ⓜ",
        N: "Ⓝ",
        O: "Ⓞ",
        P: "Ⓟ",
        Q: "Ⓠ",
        R: "Ⓡ",
        S: "Ⓢ",
        T: "Ⓣ",
        U: "Ⓤ",
        V: "Ⓥ",
        W: "Ⓦ",
        X: "Ⓧ",
        Y: "Ⓨ",
        Z: "Ⓩ",
        1: "①",
        2: "②",
        3: "③",
        4: "④",
        5: "⑤",
        6: "⑥",
        7: "⑦",
        8: "⑧",
        9: "⑨",
        0: "⓪"
    },
    Tt = {
        a: "🅐",
        b: "🅑",
        c: "🅒",
        d: "🅓",
        e: "🅔",
        f: "🅕",
        g: "🅖",
        h: "🅗",
        i: "🅘",
        j: "🅙",
        k: "🅚",
        l: "🅛",
        m: "🅜",
        n: "🅝",
        o: "🅞",
        p: "🅟",
        q: "🅠",
        r: "🅡",
        s: "🅢",
        t: "🅣",
        u: "🅤",
        v: "🅥",
        w: "🅦",
        x: "🅧",
        y: "🅨",
        z: "🅩",
        1: "➊",
        2: "➋",
        3: "➌",
        4: "➍",
        5: "➎",
        6: "➏",
        7: "➐",
        8: "➑",
        9: "➒",
        0: "⓿"
    },
    Mt = {
        a: "丹",
        b: "日",
        c: "亡",
        d: "句",
        e: "ヨ",
        f: "乍",
        g: "呂",
        h: "廾",
        i: "工",
        j: "勹",
        k: "片",
        l: "し",
        m: "冊",
        n: "几",
        o: "回",
        p: "尸",
        q: "甲",
        r: "尺",
        s: "己",
        t: "卞",
        u: "凵",
        v: "レ",
        w: "山",
        x: "メ",
        y: "と",
        z: "乙",
        1: "１",
        2: "２",
        3: "３",
        4: "４",
        5: "５",
        6: "６",
        7: "７",
        8: "８",
        9: "９",
        0: "０"
    },
    St = {
        a: "ค",
        b: "๒",
        c: "ς",
        d: "๔",
        e: "є",
        f: "Ŧ",
        g: "ﻮ",
        h: "ђ",
        i: "เ",
        j: "ן",
        k: "к",
        l: "ɭ",
        m: "๓",
        n: "ภ",
        o: "๏",
        p: "ק",
        q: "ợ",
        r: "г",
        s: "ร",
        t: "Շ",
        u: "ย",
        v: "ש",
        w: "ฬ",
        x: "א",
        y: "ץ",
        z: "չ "
    },
    xt = {
        a: "α",
        b: "Ⴆ",
        c: "ƈ",
        d: "ԃ",
        e: "ҽ",
        f: "ϝ",
        g: "ɠ",
        h: "ԋ",
        i: "ι",
        j: "ʝ",
        k: "ƙ",
        l: "ʅ",
        m: "ɱ",
        n: "ɳ",
        o: "σ",
        p: "ρ",
        q: "ϙ",
        r: "ɾ",
        s: "ʂ",
        t: "ƚ",
        u: "υ",
        v: "ʋ",
        w: "ɯ",
        x: "x",
        y: "ყ",
        z: "ȥ"
    },
    Ht = {
        a: "ǟ",
        b: "ɮ",
        c: "ƈ",
        d: "ɖ",
        e: "ɛ",
        f: "ʄ",
        g: "ɢ",
        h: "ɦ",
        i: "ɨ",
        j: "ʝ",
        k: "ӄ",
        l: "ʟ",
        m: "ʍ",
        n: "ռ",
        o: "օ",
        p: "ք",
        q: "զ",
        r: "ʀ",
        s: "ֆ",
        t: "ȶ",
        u: "ʊ",
        v: "ʋ",
        w: "ա",
        x: "Ӽ",
        y: "ʏ",
        z: "ʐ"
    },
    kt = {
        a: "₳",
        b: "฿",
        c: "₵",
        d: "Đ",
        e: "Ɇ",
        f: "₣",
        g: "₲",
        h: "Ⱨ",
        i: "ł",
        j: "J",
        k: "₭",
        l: "Ⱡ",
        m: "₥",
        n: "₦",
        o: "Ø",
        p: "₱",
        q: "Q",
        r: "Ɽ",
        s: "₴",
        t: "₮",
        u: "Ʉ",
        v: "V",
        w: "₩",
        x: "Ӿ",
        y: "Ɏ",
        z: "Ⱬ "
    },
    At = {
        a: "Ａ",
        b: "ᵇ",
        c: "𝓬",
        d: "𝓭",
        e: "Ｅ",
        f: "ⓕ",
        g: "Ｇ",
        h: "𝓱",
        i: "𝐢",
        j: "נ",
        k: "𝕂",
        l: "𝔩",
        m: "爪",
        n: "Ň",
        o: "σ",
        p: "ｐ",
        q: "ⓠ",
        r: "я",
        s: "ş",
        t: "t",
        u: "𝕌",
        v: "Ѷ",
        w: "Ⓦ",
        x: "𝐗",
        y: "𝕪",
        z: "𝓏",
        1: "１",
        2: "➁",
        3: "３",
        4: "➃",
        5: "❺",
        6: "６",
        7: "７",
        8: "❽",
        9: "❾",
        0: "Ѳ"
    },
    _t = {
        a: "𝒶",
        b: "𝓫",
        c: "𝓬",
        d: "𝓭",
        e: "𝐄",
        f: "𝔽",
        g: "Ğ",
        h: "𝓗",
        i: "เ",
        j: "ڶ",
        k: "Ҝ",
        l: "ᒪ",
        m: "𝐦",
        n: "𝓝",
        o: "ㄖ",
        p: "Ⓟ",
        q: "ợ",
        r: "ℝ",
        s: "𝕤",
        t: "𝓉",
        u: "𝓤",
        v: "ᵛ",
        w: "Ŵ",
        x: "ⓧ",
        y: "ʸ",
        z: "ℤ",
        1: "➀",
        2: "２",
        3: "➂",
        4: "４",
        5: "５",
        6: "❻",
        7: "❼",
        8: "➇",
        9: "❾",
        0: "ʘ"
    },
    jt = {
        a: "ꋬ",
        b: "ꃳ",
        c: "ꉔ",
        d: "꒯",
        e: "ꏂ",
        f: "ꊰ",
        g: "ꍌ",
        h: "ꁝ",
        i: "꒐",
        j: "꒻",
        k: "ꀘ",
        l: "꒒",
        m: "ꂵ",
        n: "ꋊ",
        o: "ꄲ",
        p: "ꉣ",
        q: "ꆰ",
        r: "ꋪ",
        s: "ꇙ",
        t: "꓄",
        u: "꒤",
        v: "꒦",
        w: "ꅐ",
        x: "ꉧ",
        y: "ꌦ",
        z: "ꁴ"
    },
    Ot = {
        a: "ꁲ",
        b: "ꋰ",
        c: "ꀯ",
        d: "ꂠ",
        e: "ꈼ",
        f: "ꄞ",
        g: "ꁅ",
        h: "ꍩ",
        i: "ꂑ",
        j: "꒻",
        k: "ꀗ",
        l: "꒒",
        m: "ꂵ",
        n: "ꋊ",
        o: "ꂦ",
        p: "ꉣ",
        q: "ꁷ",
        r: "ꌅ",
        s: "ꌚ",
        t: "ꋖ",
        u: "ꐇ",
        v: "ꀰ",
        w: "ꅏ",
        x: "ꇒ",
        y: "ꐞ",
        z: "ꁴ"
    },
    Dt = {
        a: "ᗩ",
        b: "ᗷ",
        c: "ᑕ",
        d: "ᗪ",
        e: "E",
        f: "ᖴ",
        g: "G",
        h: "ᕼ",
        i: "I",
        j: "ᒍ",
        k: "K",
        l: "ᒪ",
        m: "ᗰ",
        n: "ᑎ",
        o: "O",
        p: "ᑭ",
        q: "ᑫ",
        r: "ᖇ",
        s: "ᔕ",
        t: "T",
        u: "ᑌ",
        v: "ᐯ",
        w: "ᗯ",
        x: "᙭",
        y: "Y",
        z: "ᘔ"
    };
a = this, b = function () {
    return n = {
        686: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return b
                }
            });
            var e = n(279),
                i = n.n(e),
                e = n(370),
                u = n.n(e),
                e = n(817),
                r = n.n(e);

            function c(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }

            function a(t) {
                return t = r()(t), c("cut"), t
            }

            function o(t, e) {
                var n, o, t = (n = t, o = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[o ? "right" : "left"] = "-9999px", o = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(o, "px"), t.setAttribute("readonly", ""), t.value = n, t);
                return e.container.appendChild(t), e = r()(t), c("copy"), t.remove(), e
            }

            function f(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                },
                    n = "";
                return "string" == typeof t ? n = o(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = o(t.value, e) : (n = r()(t), c("copy")), n
            }

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
            }
            var b = function () {
                ! function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && y(t, e)
                }(r, i());
                var t, e, n, o = function (n) {
                    var o = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var e = v(n),
                            t = o ? (t = v(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                            e = this;
                        return !t || "object" !== p(t) && "function" != typeof t ? function () {
                            if (void 0 !== e) return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }() : t
                    }
                }(r);

                function r(t, e) {
                    var n;
                    return function (t) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this), (n = o.call(this)).resolveOptions(e), n.listenClick(t), n
                }
                return n = [{
                    key: "copy",
                    value: function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return f(t, e)
                    }
                }, {
                    key: "cut",
                    value: a
                }, {
                    key: "isSupported",
                    value: function () {
                        var t = "string" == typeof (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [t] : t,
                            e = !!document.queryCommandSupported;
                        return t.forEach(function (t) {
                            e = e && !!document.queryCommandSupported(t)
                        }), e
                    }
                }], e = [{
                    key: "resolveOptions",
                    value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function (t) {
                        var e = this;
                        this.listener = u()(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function (t) {
                        var e = t.delegateTarget || t.currentTarget,
                            n = this.action(e) || "copy",
                            t = function () {
                                var n = void 0 === (e = (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : e,
                                    o = t.container,
                                    e = t.target,
                                    t = t.text;
                                if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                if (void 0 !== e) {
                                    if (!e || "object" !== l(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                                }
                                return t ? f(t, {
                                    container: o
                                }) : e ? "cut" === n ? a(e) : f(e, {
                                    container: o
                                }) : void 0
                            }({
                                action: n,
                                container: this.container,
                                target: this.target(e),
                                text: this.text(e)
                            });
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function () {
                                e && e.focus(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function (t) {
                        return m("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function (t) {
                        if (t = m("target", t)) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function (t) {
                        return m("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.listener.destroy()
                    }
                }], d((t = r).prototype, e), d(t, n), r
            }()
        },
        828: function (t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        },
        438: function (t, e, n) {
            var u = n(828);

            function i(t, e, n, o, r) {
                var i = function (e, n, t, o) {
                    return function (t) {
                        t.delegateTarget = u(t.target, n), t.delegateTarget && o.call(e, t)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, i, r), {
                    destroy: function () {
                        t.removeEventListener(n, i, r)
                    }
                }
            }
            t.exports = function (t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return i(t, e, n, o, r)
                }))
            }
        },
        879: function (t, n) {
            n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function (t, e, n) {
            var f = n(879),
                l = n(438);
            t.exports = function (t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!f.string(e)) throw new TypeError("Second argument must be a String");
                if (!f.fn(n)) throw new TypeError("Third argument must be a Function");
                if (f.node(t)) return (u = t).addEventListener(c = e, a = n), {
                    destroy: function () {
                        u.removeEventListener(c, a)
                    }
                };
                if (f.nodeList(t)) return o = t, r = e, i = n, Array.prototype.forEach.call(o, function (t) {
                    t.addEventListener(r, i)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(o, function (t) {
                            t.removeEventListener(r, i)
                        })
                    }
                };
                if (f.string(t)) return l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function (t) {
            t.exports = function (t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());
                return n
            }
        },
        279: function (t) {
            function e() { }
            e.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function (t, e, n) {
                    var o = this;

                    function r() {
                        o.off(t, r), e.apply(n, arguments)
                    }
                    return r._ = e, this.on(t, r, n)
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function (t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, r = {}, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, {
            a: e
        }), e
    }, o.d = function (t, e) {
        for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o(686).default;

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, o), e.exports
    }
    var n, r
}, "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.ClipboardJS = b() : a.ClipboardJS = b(), a = this, b = function () {
    "use strict";

    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c)
        }, d.onerror = function () {
            console.error("could not download file")
        }, d.send()
    }

    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send()
        } catch (a) { }
        return 200 <= b.status && b.status <= 299
    }

    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"))
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
        a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
        g = f.saveAs || ("object" != typeof window || window !== f ? function () { } : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
            var i = f.URL || f.webkitURL,
                j = document.createElement("a");
            g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
                i.revokeObjectURL(j.href)
            }, 4e4), setTimeout(function () {
                e(j)
            }, 0))
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
            var i;
            g = g || f.name || "download", "string" != typeof f ? navigator.msSaveOrOpenBlob(function (a, b) {
                return void 0 === b ? b = {
                    autoBom: !1
                } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                    autoBom: !b
                }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a], {
                    type: a.type
                }) : a
            }(f, h), g) : d(f) ? c(f, g, h) : ((i = document.createElement("a")).href = f, i.target = "_blank", setTimeout(function () {
                e(i)
            }))
        } : function (b, h, i, g) {
            if ((g = g || open("", "_blank")) && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, h, i);
            var k, l, m, h = "application/octet-stream" === b.type,
                i = /constructor/i.test(f.HTMLElement) || f.safari,
                j = /CriOS\/[\d]+/.test(navigator.userAgent);
            (j || h && i || a) && "undefined" != typeof FileReader ? ((k = new FileReader).onloadend = function () {
                var a = k.result,
                    a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;");
                g ? g.location.href = a : location = a, g = null
            }, k.readAsDataURL(b)) : (l = f.URL || f.webkitURL, m = l.createObjectURL(b), g ? g.location = m : location.href = m, g = null, setTimeout(function () {
                l.revokeObjectURL(m)
            }, 4e4))
        });
    f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g)
}, "function" == typeof define && define.amd ? define([], b) : "undefined" != typeof exports ? b() : (b(), a.FileSaver = {}), document.addEventListener("DOMContentLoaded", function () {
    var ne, re, _, $, oe, ee, te, ie, ae, ue, ce = document.getElementById("content"),
        de = document.getElementById("output"),
        le = '<img src="/img/copy.svg" class="copy" alt="Copy to Clipboard">';

    function se() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output_sc").innerHTML = Ze(_, ct, !0) + le, document.getElementById("output_ss").innerHTML = Ze(_, ut, !0) + le
    }

    function pe() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output_s").innerHTML = Ze(_, yt, !1) + le, document.getElementById("output_sb").innerHTML = Ze(_, Et, !1) + le, document.getElementById("output_f").innerHTML = Ze(_, Lt, !1) + le, document.getElementById("output_fb").innerHTML = Ze(_, bt, !1) + le, document.getElementById("output_b").innerHTML = Ze(_, Bt, !1) + le, document.getElementById("output_bf").innerHTML = Ze(_, Tt, !0) + le, document.getElementById("output_sq").innerHTML = Ze(_, wt, !1) + le, document.getElementById("output_sqi").innerHTML = Ze(_, It, !1) + le, document.getElementById("output_c").innerHTML = Ze(_, ct, !1) + le, document.getElementById("output_fw").innerHTML = Ze(_, dt, !1) + le, document.getElementById("output_m").innerHTML = Ze(_, Ct, !1) + le, document.getElementById("output_ss").innerHTML = Ze(_, mt, !1) + le, document.getElementById("output_ssi").innerHTML = Ze(_, gt, !1) + le, document.getElementById("output_ssb").innerHTML = Ze(_, vt, !1) + le, document.getElementById("output_ssbi").innerHTML = Ze(_, ht, !1) + le
    }

    function fe() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output_z").innerHTML = at(_) + le, document.getElementById("output_f").innerHTML = Ze(_, Lt, !1) + le, document.getElementById("output_fb").innerHTML = Ze(_, bt, !1) + le, document.getElementById("output_si").innerHTML = Ze(_, It, !1) + le, document.getElementById("output_e").innerHTML = Ze(_, Mt, !1) + le, document.getElementById("output_w").innerHTML = Ze(_, St, !1) + le, document.getElementById("output_w2").innerHTML = Ze(_, xt, !1) + le, document.getElementById("output_w3").innerHTML = Ze(_, Ht, !1) + le, document.getElementById("output_c").innerHTML = Ze(_, kt, !1) + le, document.getElementById("output_co").innerHTML = Ze(_, At, !1) + le, document.getElementById("output_co2").innerHTML = Ze(_, _t, !1) + le, document.getElementById("output_a").innerHTML = Ze(_, jt, !1) + le, document.getElementById("output_a2").innerHTML = Ze(_, Ot, !1) + le, document.getElementById("output_u").innerHTML = Ze(_, Dt, !1) + le
    }

    function me() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output_f").innerHTML = Ze(_, Lt, !1) + le, document.getElementById("output_fb").innerHTML = Ze(_, bt, !1) + le, document.getElementById("output_b").innerHTML = Ze(_, Bt, !1) + le, document.getElementById("output_bf").innerHTML = Ze(_, Tt, !0) + le, document.getElementById("output_s").innerHTML = Ze(_, wt, !1) + le, document.getElementById("output_si").innerHTML = Ze(_, It, !1) + le, document.getElementById("output_e").innerHTML = Ze(_, Mt, !1) + le, document.getElementById("output_w").innerHTML = Ze(_, St, !1) + le, document.getElementById("output_w2").innerHTML = Ze(_, xt, !1) + le, document.getElementById("output_w3").innerHTML = Ze(_, Ht, !1) + le, document.getElementById("output_c").innerHTML = Ze(_, kt, !1) + le, document.getElementById("output_co").innerHTML = Ze(_, At, !1) + le, document.getElementById("output_co2").innerHTML = Ze(_, _t, !1) + le, document.getElementById("output_a").innerHTML = Ze(_, jt, !1) + le, document.getElementById("output_a2").innerHTML = Ze(_, Ot, !1) + le, document.getElementById("output_u").innerHTML = Ze(_, Dt, !1) + le, document.getElementById("output_sc").innerHTML = Ze(_, yt, !1) + le, document.getElementById("output_scb").innerHTML = Ze(_, Et, !1) + le, document.getElementById("output_fw").innerHTML = Ze(_, dt, !1) + le
    }

    function ge() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Ze(_, Bt, !1) + le + "</p>", document.getElementById("output").innerHTML += "<p>" + Ze(_, Tt, !0) + le + "</p>"
    }

    function ve() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Ze(_, dt, !1) + "</p>"
    }

    function he() {
        var _ = parseInt(ne.value);
        _ < 1 && (_ = 1);
        for (var $ = re.value, ee = (ee = (ee = "" == (ee = ce.value) ? ce.placeholder : ee).replace("<", "&#60;")).replace(">", "&#62;"), $ = ($ = $.replace("<", "&#60;")).replace(">", "&#62;"), te = "", i = 1; i <= _; i++) 1 < i && (te += $), te += ee;
        document.getElementById("output").innerHTML = "<p>" + te + "</p>"
    }

    function ye() {
        de.innerHTML = de.innerHTML.replace(/<mark>/g, ""), de.innerHTML = de.innerHTML.replace(/<\/mark>/g, "")
    }

    function Ee() {
        ye(), "" !== _.value && (de.innerHTML = de.innerHTML.replace(new RegExp(_.value, "g"), "<mark>" + _.value + "</mark>"))
    }

    function Le() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder);
        _ = JSON.stringify(_).replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
        document.getElementById("output").innerHTML = "<p>" + _ + "</p>"
    }

    function be() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Ze(_, lt, !1) + "</p>"
    }

    function we() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Ze(_, st, !1) + "</p>"
    }

    function Ie() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Qe(_, "̲") + "</p>"
    }

    function Ce() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + at(_) + "</p>"
    }

    function Be() {
        var _ = (_ = "" == (_ = ce.value) ? ce.placeholder : _).split("").reverse().join("");
        document.getElementById("output").innerHTML = "<p>" + Ze(_, pt, !1) + "</p>"
    }

    function Te() {
        var _ = (_ = "" == (_ = ce.value) ? ce.placeholder : _).split("").reverse().join("");
        document.getElementById("output").innerHTML = "<p>" + Ze(_, ft, !1) + "</p>"
    }

    function Me() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder);
        var $ = "";
        for (let i = 0; i < _.length; i++) $ += "ㅤ ";
        document.getElementById("translated").value = $
    }

    function Se() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Qe(_, "̶") + "</p>"
    }

    function xe() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + _.split("").reverse().join("").replace(/\n/g, "<br>") + "</p>"
    }

    function He(_) {
        var $ = ce,
            ee = "translated";
        _ && ($ = oe, ee = "content");
        var te = $.value;
        "" == te && (te = $.placeholder), document.getElementById(ee).value = function (_, $) {
            var ee = {
                a: ".-",
                b: "-...",
                c: "-.-.",
                d: "-..",
                e: ".",
                f: "..-.",
                g: "--.",
                h: "....",
                i: "..",
                j: ".---",
                k: "-.-",
                l: ".-..",
                m: "--",
                n: "-.",
                o: "---",
                p: ".--.",
                q: "--.-",
                r: ".-.",
                s: "...",
                t: "-",
                u: "..-",
                v: "...-",
                w: ".--",
                x: "-..-",
                y: "-.--",
                z: "--..",
                1: ".----",
                2: "..---",
                3: "...--",
                4: "....-",
                5: ".....",
                6: "-....",
                7: "--...",
                8: "---..",
                9: "----.",
                0: "-----",
                ".": ".-.-.-",
                ",": "--..--",
                "?": "..--..",
                "'": ".----.",
                "/": "-..-.",
                "(": "-.--.",
                ")": "-.--.-",
                "&": ".-...",
                ":": "---...",
                ";": "-.-.-.",
                "=": "-...-",
                "+": ".-.-.",
                "-": "-....-",
                _: "..--.-",
                '"': ".-..-.",
                $: "...-..-",
                "!": "-.-.--",
                "@": ".--.-.",
                " ": "/"
            };
            if ($) {
                var k, te = {};
                for (k in ee) ee.hasOwnProperty(k) && (te[ee[k]] = k);
                return ee = te, Fe((_ = (_ = _.replace(/\_/g, "-")).replace(/\|/g, "/")).split(" ").filter(function (v) {
                    return ee.hasOwnProperty(v.toLowerCase())
                }).map(function (v) {
                    return ee[v.toLowerCase()]
                }).join(""))
            }
            return _.split("").filter(function (v) {
                return ee.hasOwnProperty(v.toLowerCase())
            }).map(function (v) {
                return ee[v.toLowerCase()].toUpperCase()
            }).join(" ").replace(/,\/,/g, "/")
        }(te, _), _ && tt(ce)
    }

    function ke(s) {
        var _ = ce,
            $ = "translated";
        s && (_ = oe, $ = "content");
        var ee = _.value;
        "" == ee && (ee = _.placeholder), s ? (document.getElementById($).value = (s = unescape(ee.replace(/\\/g, "%")), decodeURIComponent(escape(s))), tt(ce)) : document.getElementById($).value = function (_) {
            for (var $ = [], i = 0; i < _.length; i++) $[i] = ("00" + _.charCodeAt(i).toString(16)).slice(-4);
            return "\\u" + $.join("\\u")
        }(function (s) {
            return unescape(encodeURIComponent(s))
        }(ee))
    }

    function Ae(_) {
        var $ = ce,
            ee = "translated";
        _ && ($ = oe, ee = "content");
        var te = $.value;
        "" == te && (te = $.placeholder), _ ? (document.getElementById(ee).value = function (_) {
            for (var $ = _.split(" "), ee = "", i = 0; i < $.length; i++) ee += String.fromCharCode(parseInt($[i], 16));
            return ee
        }(te), tt(ce)) : document.getElementById(ee).value = function (_) {
            for (var $ = "", i = 0; i < _.length; i++) {
                0 < i && ($ += " ");
                var ee = _.charCodeAt(i).toString(16);
                $ += ee = ee.length < 2 ? "0" + ee : ee
            }
            return $
        }(te)
    }

    function _e(_) {
        var $ = ce,
            ee = "translated";
        _ && ($ = oe, ee = "content");
        var te = $.value;
        if ("" == te && (te = $.placeholder), _) {
            var ne = "";
            if (0 < (re = te.match(/[IVXLCDM]+|\W/gi)).length)
                for (let i = 0; i < re.length; i++) re[i].match(/[IVXLCDM]+/i) ? ne += function (_) {
                    var m, $ = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
                        ee = {
                            M: 1e3,
                            CM: 900,
                            D: 500,
                            CD: 400,
                            C: 100,
                            XC: 90,
                            L: 50,
                            XL: 40,
                            X: 10,
                            IX: 9,
                            V: 5,
                            IV: 4,
                            I: 1
                        },
                        te = 0;
                    if (!(_ = _.toUpperCase()) || !/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(_)) return !1;
                    for (; m = $.exec(_);) te += ee[m[0]];
                    return te
                }(re[i]) : ne += re[i];
            document.getElementById(ee).value = ne, tt(ce)
        } else {
            var re, ne = "";
            if (0 < (re = te.match(/\d+|\D+/g)).length)
                for (let i = 0; i < re.length; i++) parseInt(re[i]) == re[i] ? ne += function (_) {
                    var i, $ = {
                        M: 1e3,
                        CM: 900,
                        D: 500,
                        CD: 400,
                        C: 100,
                        XC: 90,
                        L: 50,
                        XL: 40,
                        X: 10,
                        IX: 9,
                        V: 5,
                        IV: 4,
                        I: 1
                    },
                        ee = "";
                    for (i in $)
                        for (; $[i] <= _;) ee += i, _ -= $[i];
                    return ee
                }(re[i]) : ne += re[i];
            document.getElementById(ee).value = ne
        }
    }

    function je(_) {
        var $ = ce,
            ee = "translated";
        _ && ($ = oe, ee = "content");
        var ne, te = $.value;
        "" == te && (te = $.placeholder), _ ? (document.getElementById(ee).value = function (_) {
            try {
                return _ = JSON.parse(_), [Object.keys(_[0])].concat(_).map(function (_) {
                    return Object.keys(_).map(function (x) {
                        return _[x]
                    }).toString()
                }).join("\n")
            } catch (e) {
                return "Invalid JSON"
            }
        }(te), tt(ce)) : document.getElementById(ee).value = JSON.stringify((ne = (te = te).slice(0, te.indexOf("\n")).split(","), te.slice(te.indexOf("\n") + 1).split("\n").map(function (v) {
            var te = v.split(",");
            return ne.reduce(function (_, $, ee) {
                return _[$] = te[ee], _
            }, {})
        })), null, "\t")
    }

    function Oe(_) {
        var $ = ce,
            ee = "translated";
        _ && ($ = oe, ee = "content");
        var te = $.value;
        "" == te && (te = $.placeholder), _ ? (document.getElementById(ee).value = it(te), tt(ce)) : document.getElementById(ee).value = ot(te)
    }

    function De() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Ke(_).replace(/\n/g, "<br>") + "</p>"
    }

    function qe() {
        var _ = ce.value;
        "" == _ && (_ = ce.placeholder), document.getElementById("output").innerHTML = "<p>" + Fe(_).replace(/\n/g, "<br>") + "</p>"
    }
    document.getElementById("upper") && document.getElementById("upper").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = ce.value.toUpperCase(), ce.placeholder = ce.placeholder.toUpperCase(), $e(ce), et("Convert", "Upper"), rt(), !1
    }), document.getElementById("lower") && document.getElementById("lower").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = ce.value.toLowerCase(), ce.placeholder = ce.placeholder.toLowerCase(), $e(ce), et("Convert", "Lower"), rt(), !1
    }), document.getElementById("capitalized") && document.getElementById("capitalized").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = Ge(ce.value.toLowerCase()), ce.placeholder = Ge(ce.placeholder.toLowerCase()), $e(ce), et("Convert", "Capitalized"), rt(), !1
    }), 
    
    document.getElementById("sentence") && document.getElementById("sentence").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = Fe(ce.value), ce.placeholder = Fe(ce.placeholder), $e(ce), et("Convert", "Sentence"), rt(), !1
    }),
    
    document.getElementById("alternating") && document.getElementById("alternating").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = Je(ce.value), ce.placeholder = Je(ce.placeholder), $e(ce), et("Convert", "Alternating"), rt(), !1
    }), document.getElementById("inverse") && document.getElementById("inverse").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = Ye(ce.value), ce.placeholder = Ye(ce.placeholder), $e(ce), et("Convert", "Inverse"), rt(), !1
    }), document.getElementById("title") && document.getElementById("title").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = Ke(ce.value), ce.placeholder = Ke(ce.placeholder), $e(ce), et("Convert", "Title"), rt(), !1
    }), document.getElementById("clear") && document.getElementById("clear").addEventListener("click", function (e) {
        return e.preventDefault(), ce.value = "", ce.placeholder = Fe(ce.placeholder.toLowerCase()), tt(ce), et("Clear", "Clear"), rt(), !1
    }), document.getElementById("smalltext") && (se(), ce.addEventListener("input", function (e) {
        se(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        se(), rt()
    })), document.getElementById("unicode") && (pe(), ce.addEventListener("input", function (e) {
        pe(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        pe(), rt()
    })), document.getElementById("cursed") && (fe(), ce.addEventListener("input", function (e) {
        fe(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        fe(), rt()
    })), document.getElementById("facebook") && (me(), ce.addEventListener("input", function (e) {
        me(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        me(), rt()
    })), document.getElementById("bubble") && (ge(), ce.addEventListener("input", function (e) {
        ge(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        ge(), rt()
    })), document.getElementById("widetext") && (ve(), ce.addEventListener("input", function (e) {
        ve(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        ve(), rt()
    })), document.getElementById("repeattext") && (ne = document.getElementById("repetitions"), re = document.getElementById("seperator"), he(), ce.addEventListener("input", function (e) {
        he(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        he(), rt()
    }), ne.addEventListener("input", function (e) {
        he(), rt()
    }), ne.addEventListener("propertychange", function (e) {
        he(), rt()
    }), re.addEventListener("input", function (e) {
        he(), rt()
    }), re.addEventListener("propertychange", function (e) {
        he(), rt()
    })), document.getElementById("replacetext") && (_ = document.getElementById("find"), $ = document.getElementById("replace"), document.getElementById("make").addEventListener("click", function (e) {
        ye(), "" !== _.value && (de.innerHTML = de.innerHTML.replace(new RegExp(_.value, "g"), $.value)), tt(de)
    }), de.addEventListener("input", function (e) {
        rt()
    }), de.addEventListener("propertychange", function (e) {
        rt()
    }), de.addEventListener("focus", function (e) {
        ye()
    }), Ee(), de.addEventListener("blur", function (e) {
        Ee()
    }), _.addEventListener("input", function (e) {
        Ee()
    }), _.addEventListener("propertychange", function (e) {
        Ee()
    })), document.getElementById("jsonstringify") && (Le(), ce.addEventListener("input", function (e) {
        Le(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Le(), rt()
    })), document.getElementById("boldtext") && (be(), ce.addEventListener("input", function (e) {
        be(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        be(), rt()
    })), document.getElementById("italictext") && (we(), ce.addEventListener("input", function (e) {
        we(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        we(), rt()
    })), document.getElementById("underlinetext") && (Ie(), ce.addEventListener("input", function (e) {
        Ie(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Ie(), rt()
    })), document.getElementById("glitchtext") && (Ce(), ce.addEventListener("input", function (e) {
        Ce(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Ce(), rt()
    })), document.getElementById("upsidedown") && (Be(), ce.addEventListener("input", function (e) {
        Be(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Be(), rt()
    })), document.getElementById("mirror") && (Te(), ce.addEventListener("input", function (e) {
        Te(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Te(), rt()
    })), document.getElementById("invisible") && (Me(), ce.addEventListener("input", function (e) {
        Me(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Me(), rt()
    })), document.getElementById("strikethrough") && (Se(), ce.addEventListener("input", function (e) {
        Se(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Se(), rt()
    })), document.getElementById("backwards") && (xe(), ce.addEventListener("input", function (e) {
        xe(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        xe(), rt()
    })), document.getElementById("morse") && (oe = document.getElementById("translated"), He(!1), ce.addEventListener("input", function (e) {
        He(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        He(!1), rt()
    }), oe.addEventListener("input", function (e) {
        He(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        He(!0), rt()
    }), ("AudioContext" in window || "webkitAudioContext" in window) && document.getElementById("playmorse").addEventListener("click", function (e) {
        ! function (_) {
            var $ = new (window.AudioContext || window.webkitAudioContext),
                t = $.currentTime,
                ee = $.createOscillator();
            ee.type = "sine", ee.frequency.value = 600;
            var te = $.createGain();
            te.gain.setValueAtTime(0, t), _.split("").forEach(function (_) {
                switch (_) {
                    case ".":
                        te.gain.setValueAtTime(1, t), t += .08, te.gain.setValueAtTime(0, t), t += .08;
                        break;
                    case "-":
                        te.gain.setValueAtTime(1, t), t += .24, te.gain.setValueAtTime(0, t), t += .08;
                        break;
                    case " ":
                    case "/":
                        t += .56
                }
            }), ee.connect(te), te.connect($.destination), ee.start()
        }(document.getElementById("translated").value), rt()
    })), document.getElementById("utf8") && (oe = document.getElementById("translated"), ke(!1), ce.addEventListener("input", function (e) {
        ke(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        ke(!1), rt()
    }), oe.addEventListener("input", function (e) {
        ke(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        ke(!0), rt()
    })), document.getElementById("hex") && (oe = document.getElementById("translated"), Ae(!1), ce.addEventListener("input", function (e) {
        Ae(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Ae(!1), rt()
    }), oe.addEventListener("input", function (e) {
        Ae(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        Ae(!0), rt()
    })), document.getElementById("roman") && (ce.setAttribute("placeholder", (new Date).toLocaleDateString()), oe = document.getElementById("translated"), _e(!1), ce.addEventListener("input", function (e) {
        _e(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        _e(!1), rt()
    }), oe.addEventListener("input", function (e) {
        _e(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        _e(!0), rt()
    })), document.getElementById("csvjson") && (oe = document.getElementById("translated"), je(!1), ce.addEventListener("input", function (e) {
        je(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        je(!1), rt()
    }), oe.addEventListener("input", function (e) {
        je(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        je(!0), rt()
    })), document.getElementById("binary") && (oe = document.getElementById("translated"), Oe(!1), ce.addEventListener("input", function (e) {
        Oe(!1), rt()
    }), ce.addEventListener("propertychange", function (e) {
        Oe(!1), rt()
    }), oe.addEventListener("input", function (e) {
        Oe(!0), rt()
    }), oe.addEventListener("propertychange", function (e) {
        Oe(!0), rt()
    })), document.getElementById("titlecase") && (De(), ce.addEventListener("input", function (e) {
        De(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        De(), rt()
    })), document.getElementById("sentencecase") && (qe(), ce.addEventListener("input", function (e) {
        qe(), rt()
    }), ce.addEventListener("propertychange", function (e) {
        qe(), rt()
    })); {
        function Re(_) {
            var $ = ee.value;
            $ < 10 ? $ = 10 : 1e3 < $ && ($ = 1e3),
                function (_, $, ee) {
                    var $ = ($ <= 0 || 1 < $ ? 1 : $) || 1,
                        ee = ee || 0,
                        te = {
                            0: ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "]
                        },
                        ne = "",
                        re = document.createElement("canvas");
                    re.width = _.width * $, re.height = _.height * $, ($ = re.getContext("2d")).drawImage(_, 0, 0, re.width, re.height);
                    var oe = $.getImageData(0, 0, re.width, re.height),
                        ie = Math.ceil(255 / te[ee].length);
                    for (let i = 0; i < oe.data.length; i += 4) {
                        for (let j = 0; j < te[ee].length; j++) {
                            var r = oe.data[i],
                                g = oe.data[i + 1],
                                b = oe.data[i + 2];
                            if (.2126 * r + .7152 * g + .0722 * b < (j + 1) * ie) {
                                const ae = te[ee][j];
                                ne += ae, ae.replace(" ", "&nbsp;");
                                break
                            }
                        } (i / 4 + 1) % re.width || (ne += "\n", 0)
                    }
                    document.getElementById("output").innerHTML = "<pre>" + ne + "</pre>", document.querySelector(".output").classList.add("show")
                }(_, $ / _.width)
        }

        function Ue(_) {
            if (-1 == ["image/jpeg", "image/jpg", "image/png"].indexOf(_.type)) return nt("File must be a JPG or PNG image", "error"), void document.querySelector("form").reset();
            const $ = new FileReader;
            $.addEventListener("load", function (_) {
                const $ = new Image;
                $.addEventListener("load", function () {
                    Re(ae = $)
                }), $.src = _.target.result
            }), $.readAsDataURL(_)
        }
        document.getElementById("ascii") && (te = document.querySelector(".drag_holder"), ie = document.querySelector('input[type="file"]'), te.addEventListener("click", function (e) {
            return e.preventDefault(), ie.click(), !1
        }), te.addEventListener("dragover", function (e) {
            return e.preventDefault(), !1
        }), te.addEventListener("drop", function (e) {
            e.preventDefault(), te.classList.remove("over"), Ue(e.dataTransfer.files[0], container)
        }), te.addEventListener("dragenter", function (e) {
            e.preventDefault(), te.classList.add("over")
        }), te.addEventListener("dragleave", function (e) {
            e.preventDefault(), te.classList.remove("over")
        }), (ee = document.getElementById("width")).addEventListener("change", function () {
            Re(ae)
        }), ee.addEventListener("keyup", function () {
            Re(ae)
        }), ie.addEventListener("change", function (e) {
            Ue(e.target.files[0])
        }))
    } {
        function Ue(ee) {
            if (-1 == ["image/webp"].indexOf(ee.type)) return nt("File must be a WebP image", "error"), void document.querySelector("form").reset();
            const _ = new FileReader;
            _.addEventListener("load", function (_) {
                console.log(_);
                const $ = new Image;
                $.addEventListener("load", function () {
                    var _ = document.createElement("canvas");
                    _.width = this.naturalWidth, _.height = this.naturalHeight, _.getContext("2d").drawImage(this, 0, 0), de.innerHTML = '<img id="outputimg" src="' + _.toDataURL("image/jpeg") + '" data-filename="' + ee.name.replace(".webp", ".jpg") + '" />', document.querySelectorAll("#webpjpg .col.hidden")[0].classList.remove("hidden")
                }), $.src = _.target.result
            }), _.readAsDataURL(ee)
        }
        document.getElementById("webpjpg") && (te = document.querySelector(".drag_holder"), ie = document.querySelector('input[type="file"]'), te.addEventListener("click", function (e) {
            return e.preventDefault(), ie.click(), !1
        }), te.addEventListener("dragover", function (e) {
            return e.preventDefault(), !1
        }), te.addEventListener("drop", function (e) {
            e.preventDefault(), te.classList.remove("over"), Ue(e.dataTransfer.files[0], container)
        }), te.addEventListener("dragenter", function (e) {
            e.preventDefault(), te.classList.add("over")
        }), te.addEventListener("dragleave", function (e) {
            e.preventDefault(), te.classList.remove("over")
        }), ie.addEventListener("change", function (e) {
            Ue(e.target.files[0])
        }))
    }
    if (null != document.getElementById("char_count") && (null != ce && (ce.addEventListener("focus", function () {
        tt(ce)
    }), ce.addEventListener("blur", function () {
        tt(ce)
    }), ce.addEventListener("input", function () {
        tt(ce)
    }), ce.addEventListener("propertychange", function () {
        tt(ce)
    }), tt(ce)), null != de && (de.addEventListener("focus", function () {
        tt(de)
    }), de.addEventListener("blur", function () {
        tt(de)
    }), de.addEventListener("input", function () {
        tt(de)
    }), de.addEventListener("propertychange", function () {
        tt(de)
    }), tt(de))), document.getElementById("copy") && ((ue = new ClipboardJS("#copy", {
        text: function (_) {
            return document.querySelectorAll(_.getAttribute("data-clipboard-target"))[0].innerText
        }
    })).on("success", function (e) {
        nt(copied, "success"), et("Copied", "Copied"), rt(), e.clearSelection()
    }), ue.on("error", function (e) {
        nt(manual_copy, "info"), et("Copied", "Manual"), rt()
    }), (ue = new ClipboardJS(".copy", {
        text: function (_) {
            return _.parentNode.innerText
        }
    })).on("success", function (e) {
        nt(copied, "success"), et("Copied", "Copied"), rt(), e.clearSelection()
    }), ue.on("error", function (e) {
        nt(manual_copy, "info"), et("Copied", "Manual"), rt()
    })), document.getElementById("download")) try {
        new Blob;
        var ze = document.getElementById("download");
        ze && (ze.style.display = "inline-block", ze.addEventListener("click", function (e) {
            var _, $;
            return "image/webp" === ze.getAttribute("data-download-type") ? ($ = function (_) {
                for (var $ = atob(_.split(",")[1]), ee = _.split(",")[0].split(":")[1].split(";")[0], _ = new ArrayBuffer($.length), te = new Uint8Array(_), i = 0; i < $.length; i++) te[i] = $.charCodeAt(i);
                return new Blob([_], {
                    type: ee
                })
            }((_ = document.getElementById(ze.getAttribute("data-download-target").slice(1))).src), saveAs($, _.getAttribute("data-filename")), nt(downloaded_image, "success"), et("Download", "Download"), rt()) : null !== ce && 0 == ce.length ? nt(no_text, "error") : (_ = ("innerText" === ze.getAttribute("data-download-type") ? document.getElementById(ze.getAttribute("data-download-target").slice(1)).innerText : document.getElementById(ze.getAttribute("data-download-target").slice(1)).value).replace(/\n/g, "\r\n"), $ = new Blob([_], {
                type: "text/plain;charset=utf-8"
            }), saveAs($, file_name), nt(downloaded, "success"), et("Download", "Download"), rt()), !1
        }))
    } catch (e) { }
    var Ve = document.querySelectorAll(".share");
    if (null != Ve)
        for (var i = 0; i < Ve.length; i++) Ve[i].addEventListener("click", function (_) {
            var $, ee, te, ne;
            return _.preventDefault(), $ = this.href, ee = 520, te = 320, ne = screen.width / 2 - ee / 2, _ = screen.height / 2 - te / 2, window.open($, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + ee + ",height=" + te + ",top=" + _ + ",left=" + ne), !1
        });
    var Xe = document.getElementById("menu");
    Xe.classList.add("js");
    var Ne = window.location.pathname.split("/")[1];

    function Pe() {
        for (var _ = Xe.children, i = 0; i < _.length; i++) {
            var $ = _[i].childNodes[0];
            ("" == Ne && 0 == i || "" != Ne && -1 < $.getAttribute("href").indexOf("/" + Ne + "/") && -1 < !$.getAttribute("href").indexOf("onlinenotepad")) && $.classList.add("active"), _[i].classList.remove("overflowed"), _[i].classList.contains("more") && _[i].parentNode.removeChild(_[i])
        }
        var ee, te = document.getElementById("container").clientWidth,
            ne = te - 60,
            re = !1,
            oe = "";
        if (te < Xe.scrollWidth)
            for (_ = Xe.children, i = 0; i < _.length; i++) {
                var ie = _[i].clientWidth;
                !re && 0 <= ne - ie ? ne -= ie : (re = !0, _[i].classList.add("overflowed"), oe += "<li>" + _[i].innerHTML.replace("<br>", " ").replace("&nbsp;", " ") + "</li>")
            }
        re && (Xe.innerHTML += '<li class="more"><a href="#">More<br>Tools</a><ul>' + oe + "</ul></li>", ee = document.querySelectorAll("#menu .more ul")[0], document.querySelectorAll("#menu .more > a")[0].addEventListener("click", function (e) {
            return e.preventDefault(), ee.parentNode.classList.toggle("open"), !1
        }))
    }
    Pe();
    var We = window.innerWidth;
    window.onresize = function (_) {
        window.innerWidth != We && Pe()
    }, "dark" === localStorage.getItem("theme") ? document.body.classList.add("dark") : "light" === localStorage.getItem("theme") && document.body.classList.add("light"), document.getElementById("toggle-theme").addEventListener("click", function (_) {
        _.preventDefault();
        _ = "auto";
        return document.body.classList.contains("dark") ? (document.body.classList.remove("dark"), document.body.classList.add("light"), _ = "light") : document.body.classList.contains("light") ? (document.body.classList.remove("light"), document.body.classList.remove("dark")) : (document.body.classList.add("dark"), _ = "dark"), localStorage.setItem("theme", _), et("Theme", _), !1
    })
}), "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");