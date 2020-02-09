const COUNT_VERBS = 100
const verbs = `{
  "Infinitive": [
    "be",
    "beat",
    "become",
    "begin",
    "bend",
    "bet",
    "bite",
    "blow",
    "break",
    "bring",
    "build",
    "buy",
    "catch",
    "choose",
    "come",
    "cost",
    "cut",
    "deal",
    "dig",
    "do",
    "draw",
    "drink",
    "drive",
    "eat",
    "fall",
    "feed",
    "feel",
    "fight",
    "find",
    "fly",
    "forget",
    "forgive",
    "freeze",
    "get",
    "give",
    "go",
    "grow",
    "hang",
    "have",
    "hear",
    "hide",
    "hit",
    "hold",
    "hurt",
    "keep",
    "know",
    "lay",
    "lead",
    "leave",
    "lend",
    "let",
    "lie",
    "light",
    "lose",
    "make",
    "mean",
    "meet",
    "pay",
    "put",
    "read",
    "ride",
    "ring",
    "rise",
    "run",
    "say",
    "see",
    "seek",
    "sell",
    "send",
    "set",
    "shake",
    "shine",
    "shoot",
    "show",
    "shut",
    "sing",
    "sink",
    "sit",
    "sleep",
    "speak",
    "spend",
    "stand",
    "steal",
    "stick",
    "strike",
    "swear",
    "sweep",
    "swim",
    "swing",
    "take",
    "teach",
    "tear",
    "tell",
    "think",
    "throw",
    "understand",
    "wake",
    "wear",
    "win",
    "write"
  ],
  "Past Simple": [
    "was, were",
    "beat",
    "became",
    "began",
    "bent",
    "bet",
    "bit",
    "blew",
    "broke",
    "brought",
    "built",
    "bought",
    "caught",
    "chose",
    "came",
    "cost",
    "cut",
    "dealt",
    "dug",
    "did",
    "drew",
    "drank",
    "drove",
    "ate",
    "fell",
    "fed",
    "felt",
    "fought",
    "found",
    "flew",
    "forgot",
    "forgave",
    "froze",
    "got",
    "gave",
    "went",
    "grew",
    "hung",
    "had",
    "heard",
    "hid",
    "hit",
    "held",
    "hurt",
    "kept",
    "knew",
    "laid",
    "led",
    "left",
    "lent",
    "let",
    "lay",
    "lit",
    "lost",
    "made",
    "meant",
    "met",
    "paid",
    "put",
    "read",
    "rode",
    "rang",
    "rose",
    "ran",
    "said",
    "saw",
    "sought",
    "sold",
    "sent",
    "set",
    "shook",
    "shone",
    "shot",
    "showed",
    "shut",
    "sang",
    "sank",
    "sat",
    "slept",
    "spoke",
    "spent",
    "stood",
    "stole",
    "stuck",
    "struck",
    "swore",
    "swept",
    "swam",
    "swung",
    "took",
    "taught",
    "tore",
    "told",
    "thought",
    "threw",
    "understood",
    "woke",
    "wore",
    "won",
    "wrote"
  ],
  "Past Participle": [
    "been",
    "beaten",
    "become",
    "begun",
    "bent",
    "bet",
    "bitten",
    "blown",
    "broken",
    "brought",
    "built",
    "bought",
    "caught",
    "chosen",
    "come",
    "cost",
    "cut",
    "dealt",
    "dug",
    "done",
    "drawn",
    "drunk",
    "driven",
    "eaten",
    "fallen",
    "fed",
    "felt",
    "fought",
    "found",
    "flown",
    "forgotten",
    "forgiven",
    "frozen",
    "got",
    "given",
    "gone",
    "grown",
    "hung",
    "had",
    "heard",
    "hidden",
    "hit",
    "held",
    "hurt",
    "kept",
    "known",
    "laid",
    "led",
    "left",
    "lent",
    "let",
    "lain",
    "lit",
    "lost",
    "made",
    "meant",
    "met",
    "paid",
    "put",
    "read",
    "ridden",
    "rung",
    "risen",
    "run",
    "said",
    "seen",
    "sought",
    "sold",
    "sent",
    "set",
    "shaken",
    "shone",
    "shot",
    "shown, showed",
    "shut",
    "sung",
    "sunk",
    "sat",
    "slept",
    "spoken",
    "spent",
    "stood",
    "stolen",
    "stuck",
    "struck, stricken",
    "sworn",
    "swept",
    "swum",
    "swung",
    "taken",
    "taught",
    "torn",
    "told",
    "thought",
    "thrown",
    "understood",
    "woken",
    "worn",
    "won",
    "written"
  ]
}`

export {COUNT_VERBS, verbs}