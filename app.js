const units = [
  {
    id: "numbers",
    name: "数と式",
    mark: "±",
    color: "#287783",
    skills: ["正負の数", "文字式"],
    generator: generateNumberProblem,
  },
  {
    id: "equations",
    name: "一次方程式",
    mark: "x",
    color: "#315e9f",
    skills: ["方程式"],
    generator: generateEquationProblem,
  },
  {
    id: "geometry",
    name: "図形",
    mark: "△",
    color: "#7861b8",
    skills: ["平面図形", "空間図形"],
    generator: generateGeometryProblem,
  },
  {
    id: "functions",
    name: "比例・反比例",
    mark: "ƒ",
    color: "#27745d",
    skills: ["比例", "反比例"],
    generator: generateFunctionProblem,
  },
  {
    id: "data",
    name: "データ・確率",
    mark: "□",
    color: "#bc7917",
    skills: ["データの分布", "確率"],
    generator: generateDataProblem,
  },
];

const levels = [
  { id: "basic", name: "基礎" },
  { id: "standard", name: "標準" },
  { id: "advanced", name: "発展" },
  { id: "expert", name: "お受験" },
];

const subjects = [
  { id: "math", name: "数学", mark: "∑" },
  { id: "english", name: "英語", mark: "Aa" },
  { id: "science", name: "理科", mark: "理" },
  { id: "social", name: "社会", mark: "社" },
  { id: "japanese", name: "国語", mark: "国" },
];

const grades = [
  { id: "1", name: "中1" },
  { id: "2", name: "中2" },
  { id: "3", name: "中3" },
];

const curriculum = {
  math: {
    1: units,
    2: [
      {
        id: "m2-expressions",
        name: "式の計算",
        mark: "ab",
        color: "#287783",
        skills: ["単項式", "多項式"],
        generator: generateM2ExpressionProblem,
      },
      {
        id: "m2-systems",
        name: "連立方程式",
        mark: "xy",
        color: "#315e9f",
        skills: ["連立方程式"],
        generator: generateM2SystemProblem,
      },
      {
        id: "m2-functions",
        name: "一次関数",
        mark: "ƒ",
        color: "#27745d",
        skills: ["一次関数"],
        generator: generateM2LinearFunctionProblem,
      },
      {
        id: "m2-geometry",
        name: "図形の性質",
        mark: "∠",
        color: "#7861b8",
        skills: ["平行線", "多角形"],
        generator: generateM2GeometryProblem,
      },
      {
        id: "m2-probability",
        name: "確率",
        mark: "□",
        color: "#bc7917",
        skills: ["確率"],
        generator: generateM2ProbabilityProblem,
      },
    ],
    3: [
      {
        id: "m3-expansion",
        name: "展開・因数分解",
        mark: "×",
        color: "#287783",
        skills: ["展開", "因数分解"],
        generator: generateM3ExpansionProblem,
      },
      {
        id: "m3-quadratic",
        name: "二次方程式",
        mark: "x²",
        color: "#315e9f",
        skills: ["二次方程式"],
        generator: generateM3QuadraticProblem,
      },
      {
        id: "m3-functions",
        name: "関数 y=ax²",
        mark: "ƒ",
        color: "#27745d",
        skills: ["二乗に比例する関数"],
        generator: generateM3QuadraticFunctionProblem,
      },
      {
        id: "m3-geometry",
        name: "相似・三平方",
        mark: "△",
        color: "#7861b8",
        skills: ["相似", "三平方の定理"],
        generator: generateM3GeometryProblem,
      },
      {
        id: "m3-data",
        name: "標本調査",
        mark: "□",
        color: "#bc7917",
        skills: ["標本調査"],
        generator: generateM3SampleProblem,
      },
    ],
  },
  english: {
    1: [
      {
        id: "e1-vocab",
        name: "基本語彙",
        mark: "A",
        color: "#287783",
        skills: ["単語"],
        generator: generateE1VocabularyProblem,
      },
      {
        id: "e1-be",
        name: "be動詞",
        mark: "be",
        color: "#315e9f",
        skills: ["be動詞"],
        generator: generateE1BeVerbProblem,
      },
      {
        id: "e1-present",
        name: "一般動詞",
        mark: "do",
        color: "#27745d",
        skills: ["現在形"],
        generator: generateE1PresentVerbProblem,
      },
      {
        id: "e1-word-order",
        name: "語順",
        mark: "→",
        color: "#7861b8",
        skills: ["文の語順"],
        generator: generateE1WordOrderProblem,
      },
    ],
    2: [
      {
        id: "e2-past",
        name: "過去形",
        mark: "ed",
        color: "#287783",
        skills: ["過去形"],
        generator: generateE2PastProblem,
      },
      {
        id: "e2-future",
        name: "未来表現",
        mark: "→",
        color: "#315e9f",
        skills: ["will", "be going to"],
        generator: generateE2FutureProblem,
      },
      {
        id: "e2-comparison",
        name: "比較",
        mark: ">",
        color: "#27745d",
        skills: ["比較級", "最上級"],
        generator: generateE2ComparisonProblem,
      },
      {
        id: "e2-there",
        name: "There is/are",
        mark: "T",
        color: "#7861b8",
        skills: ["There is", "There are"],
        generator: generateE2ThereProblem,
      },
    ],
    3: [
      {
        id: "e3-perfect",
        name: "現在完了",
        mark: "H",
        color: "#287783",
        skills: ["現在完了"],
        generator: generateE3PerfectProblem,
      },
      {
        id: "e3-passive",
        name: "受け身",
        mark: "P",
        color: "#315e9f",
        skills: ["受動態"],
        generator: generateE3PassiveProblem,
      },
      {
        id: "e3-relative",
        name: "関係代名詞",
        mark: "W",
        color: "#27745d",
        skills: ["関係代名詞"],
        generator: generateE3RelativeProblem,
      },
      {
        id: "e3-infinitive",
        name: "不定詞",
        mark: "to",
        color: "#7861b8",
        skills: ["不定詞"],
        generator: generateE3InfinitiveProblem,
      },
    ],
  },
  science: {
    1: [
      {
        id: "s1-plants",
        name: "植物の分類",
        mark: "植",
        color: "#27745d",
        skills: ["植物", "分類"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s1-plants", level, weights),
      },
      {
        id: "s1-substances",
        name: "物質と気体",
        mark: "物",
        color: "#315e9f",
        skills: ["物質", "気体"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s1-substances", level, weights),
      },
      {
        id: "s1-light-sound",
        name: "光・音・力",
        mark: "光",
        color: "#7861b8",
        skills: ["光", "音", "力"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s1-light-sound", level, weights),
      },
    ],
    2: [
      {
        id: "s2-chemical-change",
        name: "化学変化",
        mark: "化",
        color: "#287783",
        skills: ["化合", "分解"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s2-chemical-change", level, weights),
      },
      {
        id: "s2-weather",
        name: "天気と大気",
        mark: "天",
        color: "#315e9f",
        skills: ["気象", "前線"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s2-weather", level, weights),
      },
      {
        id: "s2-electricity",
        name: "電流と磁界",
        mark: "電",
        color: "#bc7917",
        skills: ["電流", "磁界"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s2-electricity", level, weights),
      },
    ],
    3: [
      {
        id: "s3-cells",
        name: "生命のつながり",
        mark: "生",
        color: "#27745d",
        skills: ["細胞", "遺伝"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s3-cells", level, weights),
      },
      {
        id: "s3-motion-energy",
        name: "運動とエネルギー",
        mark: "力",
        color: "#315e9f",
        skills: ["運動", "エネルギー"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s3-motion-energy", level, weights),
      },
      {
        id: "s3-earth-space",
        name: "地球と宇宙",
        mark: "宙",
        color: "#7861b8",
        skills: ["天体", "地球"],
        generator: (level, weights) => generateKnowledgeProblem("science", "s3-earth-space", level, weights),
      },
    ],
  },
  social: {
    1: [
      {
        id: "so1-world-geography",
        name: "世界のすがた",
        mark: "世",
        color: "#287783",
        skills: ["地理", "世界"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so1-world-geography", level, weights),
      },
      {
        id: "so1-japan-geography",
        name: "日本の地域",
        mark: "日",
        color: "#315e9f",
        skills: ["地理", "日本"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so1-japan-geography", level, weights),
      },
      {
        id: "so1-ancient-history",
        name: "古代までの日本",
        mark: "古",
        color: "#7861b8",
        skills: ["歴史", "古代"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so1-ancient-history", level, weights),
      },
    ],
    2: [
      {
        id: "so2-regions",
        name: "日本の諸地域",
        mark: "地",
        color: "#287783",
        skills: ["地理", "地域"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so2-regions", level, weights),
      },
      {
        id: "so2-medieval-modern",
        name: "中世から近世",
        mark: "歴",
        color: "#315e9f",
        skills: ["歴史", "中世", "近世"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so2-medieval-modern", level, weights),
      },
      {
        id: "so2-industry",
        name: "産業と交通",
        mark: "産",
        color: "#bc7917",
        skills: ["産業", "交通"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so2-industry", level, weights),
      },
    ],
    3: [
      {
        id: "so3-modern-history",
        name: "近現代史",
        mark: "近",
        color: "#287783",
        skills: ["歴史", "近現代"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so3-modern-history", level, weights),
      },
      {
        id: "so3-constitution",
        name: "憲法と政治",
        mark: "憲",
        color: "#315e9f",
        skills: ["公民", "憲法"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so3-constitution", level, weights),
      },
      {
        id: "so3-economy",
        name: "経済と社会",
        mark: "経",
        color: "#27745d",
        skills: ["公民", "経済"],
        generator: (level, weights) => generateKnowledgeProblem("social", "so3-economy", level, weights),
      },
    ],
  },
  japanese: {
    1: [
      {
        id: "j1-kanji",
        name: "漢字・語句",
        mark: "漢",
        color: "#287783",
        skills: ["漢字", "語句"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j1-kanji", level, weights),
      },
      {
        id: "j1-grammar",
        name: "文法の基礎",
        mark: "文",
        color: "#315e9f",
        skills: ["文法"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j1-grammar", level, weights),
      },
      {
        id: "j1-reading",
        name: "説明文・文学",
        mark: "読",
        color: "#7861b8",
        skills: ["読解"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j1-reading", level, weights),
      },
    ],
    2: [
      {
        id: "j2-kanji",
        name: "漢字・熟語",
        mark: "熟",
        color: "#287783",
        skills: ["漢字", "熟語"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j2-kanji", level, weights),
      },
      {
        id: "j2-grammar",
        name: "品詞と活用",
        mark: "品",
        color: "#315e9f",
        skills: ["品詞", "活用"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j2-grammar", level, weights),
      },
      {
        id: "j2-classics",
        name: "古典入門",
        mark: "古",
        color: "#bc7917",
        skills: ["古文", "漢文"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j2-classics", level, weights),
      },
    ],
    3: [
      {
        id: "j3-kanji",
        name: "漢字・語彙",
        mark: "語",
        color: "#287783",
        skills: ["漢字", "語彙"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j3-kanji", level, weights),
      },
      {
        id: "j3-grammar",
        name: "文法総合",
        mark: "総",
        color: "#315e9f",
        skills: ["文法"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j3-grammar", level, weights),
      },
      {
        id: "j3-reading",
        name: "読解・表現",
        mark: "表",
        color: "#27745d",
        skills: ["読解", "表現"],
        generator: (level, weights) => generateKnowledgeProblem("japanese", "j3-reading", level, weights),
      },
    ],
  },
};

const juniorSubjects = subjects;
const juniorGrades = grades;
const juniorCurriculum = curriculum;

const elementarySubjects = [
  { id: "math", name: "算数", mark: "算" },
  { id: "japanese", name: "国語", mark: "国" },
  { id: "science", name: "理科", mark: "理" },
  { id: "social", name: "社会", mark: "社" },
  { id: "english", name: "英語", mark: "Aa" },
];

const elementaryGrades = [
  { id: "1", name: "小1" },
  { id: "2", name: "小2" },
  { id: "3", name: "小3" },
  { id: "4", name: "小4" },
  { id: "5", name: "小5" },
  { id: "6", name: "小6" },
];

const elementaryCurriculum = {
  math: {
    1: [
      elementaryMathUnit("p1-add-sub", "10までのたし算・ひき算", "+", ["たし算", "ひき算"], "1"),
      elementaryMathUnit("p1-shapes", "かたちと数", "○", ["数え方", "図形"], "1"),
    ],
    2: [
      elementaryMathUnit("p2-add-sub", "2けたの計算", "+", ["筆算", "くり上がり"], "2"),
      elementaryMathUnit("p2-multiplication", "九九", "×", ["かけ算", "九九"], "2"),
      elementaryMathUnit("p2-length", "長さ・かさ", "cm", ["長さ", "かさ"], "2"),
    ],
    3: [
      elementaryMathUnit("p3-multiplication", "かけ算の筆算", "×", ["筆算", "文章題"], "3"),
      elementaryMathUnit("p3-division", "わり算", "÷", ["わり算", "あまり"], "3"),
      elementaryMathUnit("p3-fractions", "分数・小数の入り口", "1/2", ["分数", "小数"], "3"),
    ],
    4: [
      elementaryMathUnit("p4-division", "わり算の筆算", "÷", ["筆算", "あまり"], "4"),
      elementaryMathUnit("p4-decimals", "小数と概数", "0.1", ["小数", "概数"], "4"),
      elementaryMathUnit("p4-area", "面積", "□", ["長方形", "正方形"], "4"),
    ],
    5: [
      elementaryMathUnit("p5-fractions", "分数の計算", "1/3", ["通分", "約分"], "5"),
      elementaryMathUnit("p5-decimals", "小数のかけ算・わり算", "0.5", ["小数", "文章題"], "5"),
      elementaryMathUnit("p5-average", "割合・平均", "%", ["割合", "平均"], "5"),
    ],
    6: [
      elementaryMathUnit("p6-fractions", "分数のかけ算・わり算", "2/3", ["分数", "逆数"], "6"),
      elementaryMathUnit("p6-ratio", "比と速さ", "比", ["比", "速さ"], "6"),
      elementaryMathUnit("p6-volume", "体積・比例", "cm³", ["体積", "比例"], "6"),
    ],
  },
  japanese: {
    1: [
      elementaryKnowledgeUnit("japanese", "p1-japanese-hiragana", "ひらがな・ことば", "あ", ["ひらがな", "ことば"]),
      elementaryKnowledgeUnit("japanese", "p1-japanese-reading", "文を読む", "読", ["読解", "主語"]),
    ],
    2: [
      elementaryKnowledgeUnit("japanese", "p2-japanese-kanji", "小2の漢字", "漢", ["漢字", "読み"]),
      elementaryKnowledgeUnit("japanese", "p2-japanese-grammar", "文のきまり", "文", ["主語", "述語"]),
    ],
    3: [
      elementaryKnowledgeUnit("japanese", "p3-japanese-kanji", "小3の漢字・語句", "語", ["漢字", "語句"]),
      elementaryKnowledgeUnit("japanese", "p3-japanese-reading", "物語・説明文", "読", ["読解", "要点"]),
    ],
    4: [
      elementaryKnowledgeUnit("japanese", "p4-japanese-kanji", "小4の漢字・熟語", "熟", ["漢字", "熟語"]),
      elementaryKnowledgeUnit("japanese", "p4-japanese-grammar", "修飾語と段落", "段", ["修飾語", "段落"]),
    ],
    5: [
      elementaryKnowledgeUnit("japanese", "p5-japanese-kanji", "小5の語彙", "語", ["漢字", "語彙"]),
      elementaryKnowledgeUnit("japanese", "p5-japanese-reading", "要旨と資料", "要", ["要旨", "資料"]),
    ],
    6: [
      elementaryKnowledgeUnit("japanese", "p6-japanese-kanji", "小6の漢字・表現", "表", ["漢字", "表現"]),
      elementaryKnowledgeUnit("japanese", "p6-japanese-reading", "読解・意見文", "意", ["読解", "意見文"]),
    ],
  },
  science: {
    1: [
      elementaryKnowledgeUnit("science", "p1-science-life", "せいかつと自然", "自", ["身近な自然", "季節"]),
      elementaryKnowledgeUnit("science", "p1-science-observe", "見る・くらべる", "目", ["観察", "分類"]),
    ],
    2: [
      elementaryKnowledgeUnit("science", "p2-science-life", "生きものとくらし", "生", ["植物", "生きもの"]),
      elementaryKnowledgeUnit("science", "p2-science-seasons", "きせつの変化", "季", ["季節", "天気"]),
    ],
    3: [
      elementaryKnowledgeUnit("science", "p3-science-plants", "植物とこん虫", "植", ["植物", "昆虫"]),
      elementaryKnowledgeUnit("science", "p3-science-light", "光・音・磁石", "光", ["光", "音", "磁石"]),
    ],
    4: [
      elementaryKnowledgeUnit("science", "p4-science-water", "水・空気・天気", "水", ["水", "空気", "天気"]),
      elementaryKnowledgeUnit("science", "p4-science-electricity", "電気とからだ", "電", ["電気", "人体"]),
    ],
    5: [
      elementaryKnowledgeUnit("science", "p5-science-life", "植物・動物のつながり", "命", ["生命", "受粉"]),
      elementaryKnowledgeUnit("science", "p5-science-weather", "天気と流れる水", "天", ["天気", "川"]),
    ],
    6: [
      elementaryKnowledgeUnit("science", "p6-science-body", "人体と燃焼", "体", ["人体", "燃焼"]),
      elementaryKnowledgeUnit("science", "p6-science-earth", "大地と月・太陽", "月", ["大地", "月", "太陽"]),
    ],
  },
  social: {
    1: [
      elementaryKnowledgeUnit("social", "p1-social-life", "学校とくらし", "学", ["学校", "地域"]),
      elementaryKnowledgeUnit("social", "p1-social-safety", "安全なくらし", "安", ["安全", "きまり"]),
    ],
    2: [
      elementaryKnowledgeUnit("social", "p2-social-town", "町たんけん", "町", ["地域", "しごと"]),
      elementaryKnowledgeUnit("social", "p2-social-rules", "くらしのきまり", "決", ["きまり", "公共"]),
    ],
    3: [
      elementaryKnowledgeUnit("social", "p3-social-town", "市のようす", "市", ["市", "地図"]),
      elementaryKnowledgeUnit("social", "p3-social-work", "店・農家・工場", "仕", ["仕事", "産業"]),
    ],
    4: [
      elementaryKnowledgeUnit("social", "p4-social-prefecture", "都道府県", "県", ["都道府県", "地図"]),
      elementaryKnowledgeUnit("social", "p4-social-water", "くらしを支える水・ごみ", "水", ["水道", "ごみ"]),
    ],
    5: [
      elementaryKnowledgeUnit("social", "p5-social-industry", "日本の産業", "産", ["農業", "工業"]),
      elementaryKnowledgeUnit("social", "p5-social-land", "国土と気候", "国", ["国土", "気候"]),
    ],
    6: [
      elementaryKnowledgeUnit("social", "p6-social-history", "日本の歴史", "歴", ["歴史", "人物"]),
      elementaryKnowledgeUnit("social", "p6-social-politics", "政治と平和", "政", ["政治", "憲法"]),
    ],
  },
  english: {
    1: [
      elementaryKnowledgeUnit("english", "p1-english-sounds", "アルファベットの音", "A", ["音", "文字"]),
      elementaryKnowledgeUnit("english", "p1-english-words", "身近な英語", "Aa", ["単語", "あいさつ"]),
    ],
    2: [
      elementaryKnowledgeUnit("english", "p2-english-words", "色・数・もの", "2", ["色", "数"]),
      elementaryKnowledgeUnit("english", "p2-english-greetings", "あいさつ", "Hi", ["あいさつ", "会話"]),
    ],
    3: [
      elementaryKnowledgeUnit("english", "p3-english-alphabet", "アルファベット", "ABC", ["大文字", "小文字"]),
      elementaryKnowledgeUnit("english", "p3-english-words", "身近な単語", "cat", ["単語", "発音"]),
    ],
    4: [
      elementaryKnowledgeUnit("english", "p4-english-phrases", "短い会話", "Hi", ["会話", "質問"]),
      elementaryKnowledgeUnit("english", "p4-english-words", "曜日・天気", "Sun", ["曜日", "天気"]),
    ],
    5: [
      elementaryKnowledgeUnit("english", "p5-english-sentences", "英語の文", "I", ["語順", "be動詞"]),
      elementaryKnowledgeUnit("english", "p5-english-vocab", "小5の英単語", "go", ["単語", "表現"]),
    ],
    6: [
      elementaryKnowledgeUnit("english", "p6-english-sentences", "小6の英文", "Do", ["語順", "疑問文"]),
      elementaryKnowledgeUnit("english", "p6-english-vocab", "中学準備英単語", "word", ["単語", "表現"]),
    ],
  },
};

const schoolStages = {
  elementary: {
    id: "elementary",
    name: "小学生",
    eyebrow: "小1〜小6 5教科",
    title: "小学生 学習トレーナー",
    subjects: elementarySubjects,
    grades: elementaryGrades,
    curriculum: elementaryCurriculum,
    defaultSubject: "math",
    defaultGrade: "1",
  },
  junior: {
    id: "junior",
    name: "中学生",
    eyebrow: "中学1〜3年 5教科",
    title: "中学生 学習トレーナー",
    subjects: juniorSubjects,
    grades: juniorGrades,
    curriculum: juniorCurriculum,
    defaultSubject: "math",
    defaultGrade: "1",
  },
};

const STUDENT_LIMIT = 10;
const TEACHER_PASSWORD = "1008";
const ANSWER_AUTO_START_MS = 500;
const AUTO_ADVANCE_MS = 2200;
const HOLD_ADVANCE_MS = 1400;
const RESULT_RETURN_MS = 5200;
const RECENT_QUESTION_LIMIT = 180;
const QUESTION_ROLL_ATTEMPTS = 900;
const PRINT_QUESTIONS_PER_PAGE = 20;
const PRINT_MAX_PAGES_PER_UNIT = 8;
const QUESTION_COUNT_ESTIMATE_LIMIT = 160;
const QUESTION_COUNT_STALE_LIMIT = 180;
const QUESTION_FRAME_VARIANTS = Object.freeze([
  "基本確認",
  "短答確認",
  "入試準備",
  "理解チェック",
  "まとめ確認",
  "弱点補強",
  "一問集中",
  "復習確認",
  "実力確認",
  "説明準備",
  "用語確認",
  "判断練習",
  "得点練習",
  "スピード確認",
  "ミス防止",
  "応用入口",
]);
const QUESTION_FOCUS_VARIANTS = Object.freeze([
  "意味を思い出す",
  "正確に答える",
  "根拠を考える",
  "似た内容と区別する",
  "短く答える",
  "声に出して確認する",
  "説明できる形で答える",
  "重要語を意識する",
  "単元名と結びつける",
  "次に間違えないようにする",
]);
const SOUND_LIBRARY = Object.freeze([
  { id: "none", label: "なし", src: "" },
  { id: "question", label: "出題音", src: "./assets/sounds/question.mp3" },
  { id: "answer", label: "回答開始音", src: "./assets/sounds/answer.mp3" },
  { id: "check", label: "答え合わせ音", src: "./assets/sounds/check.mp3" },
  { id: "correct", label: "正解音", src: "./assets/sounds/correct.mp3" },
  { id: "wrong", label: "誤答音", src: "./assets/sounds/wrong.mp3" },
  { id: "data-display-1", label: "データ表示1", src: "./assets/sounds/data-display-1.mp3" },
  { id: "data-display-2", label: "データ表示2", src: "./assets/sounds/data-display-2.mp3" },
  { id: "button-37", label: "決定ボタン1", src: "./assets/sounds/button-37.mp3" },
  { id: "button-confirm-5", label: "決定ボタン2", src: "./assets/sounds/button-confirm-5.mp3" },
  { id: "button-confirm-7", label: "決定ボタン3", src: "./assets/sounds/button-confirm-7.mp3" },
  { id: "button-confirm-4", label: "決定ボタン4", src: "./assets/sounds/button-confirm-4.mp3" },
  { id: "beep-1", label: "ビープ音1", src: "./assets/sounds/beep-1.mp3" },
  { id: "beep-2", label: "ビープ音2", src: "./assets/sounds/beep-2.mp3" },
  { id: "success", label: "成功音1", src: "./assets/sounds/success.mp3" },
  { id: "success-alt", label: "成功音2", src: "./assets/sounds/success-alt.mp3" },
  { id: "warning-1", label: "警告音1", src: "./assets/sounds/warning-1.mp3" },
  { id: "warning-2", label: "警告音2", src: "./assets/sounds/warning-2.mp3" },
  { id: "message-popup-3", label: "メッセージ音3", src: "./assets/sounds/message-popup-3.mp3" },
  { id: "gauge-recover-1", label: "ゲージ回復1", src: "./assets/sounds/gauge-recover-1.mp3" },
  { id: "window-open", label: "ウインドウ表示", src: "./assets/sounds/window-open.mp3" },
  { id: "roulette-stop", label: "ルーレット停止", src: "./assets/sounds/roulette-stop.mp3" },
]);
const SOUND_EVENTS = Object.freeze([
  { id: "question", label: "出題時" },
  { id: "answer", label: "回答入力開始" },
  { id: "check", label: "答え合わせ" },
  { id: "correct", label: "正解時" },
  { id: "wrong", label: "誤答時" },
  { id: "result", label: "結果表示" },
  { id: "next", label: "次の問題へ進む" },
  { id: "return", label: "選択画面へ戻る" },
  { id: "start", label: "学習開始" },
  { id: "quit", label: "途中でやめる" },
  { id: "restart", label: "同じ条件でもう一度" },
  { id: "stage", label: "小学生/中学生切替" },
  { id: "teacher", label: "講師画面へ切替" },
  { id: "student", label: "生徒登録・選択" },
  { id: "subject", label: "教科選択" },
  { id: "grade", label: "学年選択" },
  { id: "unit", label: "単元選択" },
  { id: "level", label: "難易度選択" },
  { id: "print", label: "印刷画面・問題集作成" },
  { id: "settings", label: "設定変更" },
  { id: "memo", label: "メモ消去" },
  { id: "operation", label: "その他の操作" },
]);
const DEFAULT_SOUND_SETTINGS = Object.freeze({
  question: "question",
  answer: "answer",
  check: "answer",
  correct: "correct",
  wrong: "wrong",
  result: "success",
  next: "button-confirm-4",
  return: "button-confirm-4",
  start: "button-confirm-4",
  quit: "warning-1",
  restart: "button-confirm-4",
  stage: "success-alt",
  teacher: "button-confirm-4",
  student: "success-alt",
  subject: "button-confirm-4",
  grade: "success-alt",
  unit: "button-confirm-4",
  level: "warning-1",
  print: "button-confirm-4",
  settings: "warning-1",
  memo: "warning-1",
  operation: "none",
});
const SOUND_VOLUME = Object.freeze({
  question: 0.75,
  answer: 0.75,
  check: 0.7,
  correct: 0.82,
  wrong: 0.78,
  result: 0.78,
  next: 0.55,
  return: 0.58,
  start: 0.58,
  quit: 0.78,
  restart: 0.58,
  stage: 0.55,
  teacher: 0.55,
  student: 0.55,
  subject: 0.55,
  grade: 0.55,
  unit: 0.55,
  level: 0.55,
  print: 0.55,
  settings: 0.45,
  memo: 0.45,
  operation: 0.45,
});
const ROSTER_KEY = "jhs1-math-trainer-students";
const LEGACY_STATS_KEY = "jhs1-math-trainer";
const SOUND_SETTINGS_KEY = "jhs-learning-trainer-sounds";
const MOBILE_SIMPLE_KEY = "jhs-learning-trainer-mobile-simple";
const SCHOOL_STAGE_KEY = "jhs-learning-trainer-school-stage";
const ELEMENTARY_ROSTER_KEY = "jhs-learning-trainer-students-elementary";
const MISSION_TAGS = Object.freeze(["今日の一手", "ミニ挑戦", "ひらめき回", "集中チャージ", "小さな冒険"]);
const CORRECT_FLAVORS = Object.freeze(["いいリズムです。", "その調子。", "きれいに決まりました。", "頭が温まってきました。"]);
const WRONG_FLAVORS = Object.freeze(["次で取り返せます。", "惜しい、ここが伸びしろです。", "答えを見て、次の一手へ。"]);
const MONOMIAL_VARIABLES = Object.freeze(["a", "b", "c", "x", "y"]);
const MATH_KEYPAD_TOKENS = Object.freeze([
  { label: "0", value: "0", title: "0" },  
  { label: "1", value: "1", title: "1" },
  { label: "2", value: "2", title: "2" },
  { label: "3", value: "3", title: "3" },
  { label: "4", value: "4", title: "4" },
  { label: "5", value: "5", title: "5" },
  { label: "6", value: "6", title: "6" },
  { label: "7", value: "7", title: "7" },
  { label: "8", value: "8", title: "8" },
  { label: "9", value: "9", title: "9" },
  { label: "a", value: "a", title: "a" },
  { label: "b", value: "b", title: "b" },
  { label: "c", value: "c", title: "c" },
  { label: "x", value: "x", title: "x" },
  { label: "y", value: "y", title: "y" },
  { label: "²", value: "²", title: "2乗" },
  { label: "³", value: "³", title: "3乗" },
  { label: "⁴", value: "⁴", title: "4乗" },
  { label: ".", value: ".", title: "小数点" },
  { label: "(", value: "(", title: "左かっこ" },
  { label: ")", value: ")", title: "右かっこ" },
  { label: "+", value: "+", title: "たす" },
  { label: "-", value: "-", title: "ひく" },
  { label: "×", value: "×", title: "かける" },
  { label: "÷", value: "÷", title: "わる" },
  { label: "分数", value: "/", title: "分数線" },
  { label: "=", value: "=", title: "イコール" },
]);

const initialSchoolStage = loadSchoolStage();

const state = {
  mode: "teacher",
  schoolStage: initialSchoolStage,
  subject: "math",
  grade: "1",
  unitId: "numbers",
  level: "basic",
  questionNumber: 1,
  answered: false,
  answerStage: "question",
  activeAnswerKey: "value",
  activeFractionPart: "",
  current: null,
  history: [],
  recentQuestionKeys: {},
  sessionQuestionKeys: [],
  session: defaultSession(),
  sessionSnapshot: null,
  roster: loadRoster(initialSchoolStage),
  activeStudentId: null,
  stats: defaultStats(),
  soundSettings: loadSoundSettings(),
  mobileSimpleMode: loadMobileSimpleMode(),
  autoAnswerTimer: null,
  autoAdvanceTimer: null,
  resultReturnTimer: null,
};

const els = {
  appEyebrow: document.querySelector("#appEyebrow"),
  appTitle: document.querySelector("#appTitle"),
  schoolStageButton: document.querySelector("#schoolStageButton"),
  teacherScreen: document.querySelector("#teacherScreen"),
  studentScreen: document.querySelector("#studentScreen"),
  teacherModeButton: document.querySelector("#teacherModeButton"),
  startSession: document.querySelector("#startSession"),
  activeStudentName: document.querySelector("#activeStudentName"),
  subjectTabs: document.querySelector("#subjectTabs"),
  gradeTabs: document.querySelector("#gradeTabs"),
  studentForm: document.querySelector("#studentForm"),
  studentNameInput: document.querySelector("#studentNameInput"),
  studentList: document.querySelector("#studentList"),
  studentCount: document.querySelector("#studentCount"),
  addStudent: document.querySelector("#addStudent"),
  unitList: document.querySelector("#unitList"),
  levelTabs: document.querySelector("#levelTabs"),
  questionCount: document.querySelector("#questionCount"),
  mistakeMode: document.querySelector("#mistakeMode"),
  mobileSimpleMode: document.querySelector("#mobileSimpleMode"),
  resetStats: document.querySelector("#resetStats"),
  printWorkbook: document.querySelector("#printWorkbook"),
  printDialog: document.querySelector("#printDialog"),
  closePrintDialog: document.querySelector("#closePrintDialog"),
  cancelPrintWorkbook: document.querySelector("#cancelPrintWorkbook"),
  createPrintWorkbook: document.querySelector("#createPrintWorkbook"),
  printSubject: document.querySelector("#printSubject"),
  printGrade: document.querySelector("#printGrade"),
  printUnit: document.querySelector("#printUnit"),
  printLevel: document.querySelector("#printLevel"),
  printPages: document.querySelector("#printPages"),
  printEstimate: document.querySelector("#printEstimate"),
  refreshCache: document.querySelector("#refreshCache"),
  showQuestionCounts: document.querySelector("#showQuestionCounts"),
  questionCountDialog: document.querySelector("#questionCountDialog"),
  closeQuestionCountDialog: document.querySelector("#closeQuestionCountDialog"),
  questionCountSummary: document.querySelector("#questionCountSummary"),
  questionCountTableBody: document.querySelector("#questionCountTableBody"),
  restartSession: document.querySelector("#restartSession"),
  beginAnswer: document.querySelector("#beginAnswer"),
  checkAnswer: document.querySelector("#checkAnswer"),
  saveQuestion: document.querySelector("#saveQuestion"),
  nextQuestion: document.querySelector("#nextQuestion"),
  streakCount: document.querySelector("#streakCount"),
  accuracyRate: document.querySelector("#accuracyRate"),
  todayCount: document.querySelector("#todayCount"),
  totalAnswers: document.querySelector("#totalAnswers"),
  totalCorrect: document.querySelector("#totalCorrect"),
  unitKicker: document.querySelector("#unitKicker"),
  questionTitle: document.querySelector("#questionTitle"),
  progressText: document.querySelector("#progressText"),
  progressFill: document.querySelector("#progressFill"),
  skillTag: document.querySelector("#skillTag"),
  levelTag: document.querySelector("#levelTag"),
  problemText: document.querySelector("#problemText"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  scratchPad: document.querySelector("#scratchPad"),
  inlineScratchPad: document.querySelector("#inlineScratchPad"),
  clearMemo: document.querySelector("#clearMemo"),
  clearInlineMemo: document.querySelector("#clearInlineMemo"),
  sessionResult: document.querySelector("#sessionResult"),
  resultKicker: document.querySelector("#resultKicker"),
  resultTitle: document.querySelector("#resultTitle"),
  resultCorrect: document.querySelector("#resultCorrect"),
  resultTotal: document.querySelector("#resultTotal"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
  returnSelection: document.querySelector("#returnSelection"),
  soundSettings: document.querySelector("#soundSettings"),
  historyList: document.querySelector("#historyList"),
  resultsSummary: document.querySelector("#resultsSummary"),
  resultsTableBody: document.querySelector("#resultsTableBody"),
  subjectInsight: document.querySelector("#subjectInsight"),
  learningAdvice: document.querySelector("#learningAdvice"),
  unitBreakdown: document.querySelector("#unitBreakdown"),
  canvas: document.querySelector("#visualCanvas"),
};

const ctx = els.canvas.getContext("2d");
let audioContext = null;
const soundPlayers = new Map();
const activeSounds = new Set();
const questionCountEstimateCache = new Map();

function boot() {
  updateDeviceClass();
  applySchoolStage();
  setMode("teacher");
  state.activeStudentId = state.roster.activeId;
  activateStudent(state.activeStudentId, false);
  renderStudentPanel();
  renderControls();
  renderSoundSettings();
  renderDeviceSettings();
  bindEvents();
  newQuestion(true);
  renderStats();
  renderHistory();
  renderResults();
  window.setTimeout(focusTeacherStartButton, 30);
}

function setMode(mode) {
  clearSessionTimers();
  state.mode = mode;
  document.body.classList.toggle("teacher-mode", mode === "teacher");
  document.body.classList.toggle("student-mode", mode === "student");
  els.studentScreen.classList.remove("show-result");
  if (mode === "student") {
    window.setTimeout(() => {
      drawVisual(state.current);
    }, 40);
  }
}

function getSchoolStageConfig(stageId = state.schoolStage) {
  return schoolStages[stageId] || schoolStages.junior;
}

function getSubjects(stageId = state.schoolStage) {
  return getSchoolStageConfig(stageId).subjects;
}

function getGrades(stageId = state.schoolStage) {
  return getSchoolStageConfig(stageId).grades;
}

function getCurriculum(stageId = state.schoolStage) {
  return getSchoolStageConfig(stageId).curriculum;
}

function isExpertLevelAvailable(stageId = state.schoolStage, gradeId = state.grade) {
  return ["elementary", "junior"].includes(stageId) && Boolean(gradeId);
}

function getAvailableLevels(stageId = state.schoolStage, gradeId = state.grade) {
  return levels.filter((level) => level.id !== "expert" || isExpertLevelAvailable(stageId, gradeId));
}

function getGeneratorLevel(levelId) {
  return levelId === "expert" ? "advanced" : levelId;
}

function ensureAvailableLevel() {
  const available = getAvailableLevels();
  if (!available.some((level) => level.id === state.level)) {
    state.level = available.some((level) => level.id === "advanced") ? "advanced" : available[0]?.id || "basic";
  }
}

function applySchoolStage() {
  const config = getSchoolStageConfig();
  state.schoolStage = config.id;
  if (!getSubjects().some((subject) => subject.id === state.subject)) state.subject = config.defaultSubject;
  if (!getGrades().some((grade) => grade.id === state.grade)) state.grade = config.defaultGrade;
  const unitsForGrade = getCurriculum()[state.subject]?.[state.grade] || [];
  if (state.unitId !== "all" && !unitsForGrade.some((unit) => unit.id === state.unitId)) state.unitId = unitsForGrade[0]?.id || "";
  ensureAvailableLevel();
  els.appEyebrow.textContent = config.eyebrow;
  els.appTitle.textContent = config.title;
  els.schoolStageButton.textContent = config.id === "junior" ? "小学生へ切替" : "中学生へ切替";
  document.title = config.title;
  document.body.classList.toggle("elementary-stage", config.id === "elementary");
  document.body.classList.toggle("junior-stage", config.id === "junior");
}

function toggleSchoolStage() {
  chooseSchoolStage(state.schoolStage === "junior" ? "elementary" : "junior");
}

function chooseSchoolStage(stageId) {
  if (!schoolStages[stageId]) return;
  if (state.schoolStage !== stageId) {
    saveRoster();
    state.schoolStage = stageId;
    state.roster = loadRoster(stageId);
    state.activeStudentId = state.roster.activeId;
    applySchoolStage();
    saveSchoolStage();
    state.questionNumber = 1;
    state.history = [];
    state.stats = defaultStats();
    activateStudent(state.activeStudentId, false);
    clearSessionTimers();
    state.session = defaultSession();
    state.sessionSnapshot = null;
    state.sessionQuestionKeys = [];
    els.studentScreen.classList.remove("show-result");
    renderControls();
    renderStats();
    renderHistory();
    renderResults();
    renderStudentPanel();
    newQuestion(true);
  } else {
    applySchoolStage();
    saveSchoolStage();
  }
  window.setTimeout(focusTeacherStartButton, 30);
}

function renderControls() {
  els.subjectTabs.innerHTML = getSubjects()
    .map(
      (subject) => `
        <button type="button" role="tab" aria-selected="${subject.id === state.subject}" class="${subject.id === state.subject ? "active" : ""}" data-subject="${subject.id}">
          ${subject.name}
        </button>
      `
    )
    .join("");

  els.gradeTabs.innerHTML = getGrades()
    .map(
      (grade) => `
        <button type="button" role="tab" aria-selected="${grade.id === state.grade}" class="${grade.id === state.grade ? "active" : ""}" data-grade="${grade.id}">
          ${grade.name}
        </button>
      `
    )
    .join("");

  const availableUnits = getAvailableUnits();
  els.unitList.innerHTML = [
    `
      <button class="unit-button all-unit-button ${state.unitId === "all" ? "active" : ""}" type="button" data-unit="all">
        <span style="background:#172033">全</span>
        <strong>全単元</strong>
        <small>${availableUnits.length}</small>
      </button>
    `,
    ...availableUnits.map(
      (unit) => `
        <button class="unit-button ${unit.id === state.unitId ? "active" : ""}" type="button" data-unit="${unit.id}">
          <span style="background:${unit.color}">${unit.mark}</span>
          <strong>${unit.name}</strong>
          <small>${unit.skills.length}</small>
        </button>
      `
    ),
  ].join("");

  ensureAvailableLevel();
  els.levelTabs.innerHTML = getAvailableLevels()
    .map(
      (level) => `
        <button type="button" role="tab" aria-selected="${level.id === state.level}" class="${level.id === state.level ? "active" : ""}" data-level="${level.id}">
          ${level.name}
        </button>
      `
    )
    .join("");
}

function renderStudentPanel() {
  const count = state.roster.students.length;
  els.studentCount.textContent = `${count} / ${STUDENT_LIMIT}`;
  els.addStudent.disabled = count >= STUDENT_LIMIT;
  els.studentNameInput.disabled = count >= STUDENT_LIMIT;
  els.studentNameInput.placeholder = count >= STUDENT_LIMIT ? "登録は10名まで" : "生徒名を入力";

  if (count === 0) {
    els.studentList.innerHTML = `<div class="empty-history">生徒名を登録してください</div>`;
    return;
  }

  els.studentList.innerHTML = state.roster.students
    .map((student) => {
      const stats = normalizeStats(student.stats);
      const accuracy = stats.total ? `${Math.round((stats.correct / stats.total) * 100)}%` : "--";
      return `
        <div class="student-row">
          <button class="student-button ${student.id === state.activeStudentId ? "active" : ""}" type="button" data-student="${student.id}">
            <span>${escapeHtml(student.name)}</span>
            <small>${stats.total}問 / ${accuracy}</small>
          </button>
          <button class="delete-student" type="button" data-remove-student="${student.id}" aria-label="${escapeHtml(student.name)}を削除">×</button>
        </div>
      `;
    })
    .join("");
}

function renderSoundSettings() {
  els.soundSettings.innerHTML = SOUND_EVENTS.map(
    (event) => `
      <div class="sound-row">
        <label for="sound-${event.id}">${event.label}</label>
        <select id="sound-${event.id}" data-sound-event="${event.id}">
          ${SOUND_LIBRARY.map(
            (sound) => `
              <option value="${sound.id}" ${state.soundSettings[event.id] === sound.id ? "selected" : ""}>
                ${sound.label}
              </option>
            `
          ).join("")}
        </select>
      </div>
    `
  ).join("");
}

function addStudent() {
  const name = els.studentNameInput.value.trim();
  if (!name || state.roster.students.length >= STUDENT_LIMIT) return;
  const hasActiveStudent = Boolean(getActiveStudent());

  const student = {
    id: `student-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    stats: defaultStats(),
  };
  state.roster.students.push(student);
  els.studentNameInput.value = "";
  if (!hasActiveStudent) {
    activateStudent(student.id, true);
    return;
  }

  saveRoster();
  renderStudentPanel();
  renderResults();
  window.setTimeout(() => els.studentNameInput.focus(), 20);
}

function removeStudent(id) {
  const student = state.roster.students.find((item) => item.id === id);
  if (!student) return;
  if (!window.confirm(`${student.name} の登録と学習記録を削除しますか？`)) return;

  state.roster.students = state.roster.students.filter((item) => item.id !== id);
  const nextStudent = state.roster.students[0];
  activateStudent(nextStudent?.id || null, true);
}

function activateStudent(id, shouldRender) {
  const student = state.roster.students.find((item) => item.id === id);
  state.activeStudentId = student?.id || null;
  state.roster.activeId = state.activeStudentId;
  state.stats = student ? normalizeStats(student.stats) : defaultStats();
  if (student) student.stats = state.stats;
  state.history = state.stats.history || [];
  saveRoster();

  if (!shouldRender) return;
  state.questionNumber = 1;
  state.history = state.stats.history || [];
  renderStudentPanel();
  renderStats();
  renderHistory();
  renderResults();
  newQuestion(true);
}

function bindEvents() {
  document.addEventListener("pointerdown", handleOperationSound);
  els.startSession.addEventListener("click", startStudentSession);
  els.teacherModeButton.addEventListener("click", requestTeacherMode);
  els.schoolStageButton.addEventListener("click", toggleSchoolStage);

  els.subjectTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-subject]");
    if (!button) return;
    state.subject = button.dataset.subject;
    if (state.unitId !== "all") state.unitId = getAvailableUnits()[0]?.id || "";
    state.questionNumber = 1;
    renderControls();
    newQuestion(true);
    renderResults();
  });

  els.gradeTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-grade]");
    if (!button) return;
    state.grade = button.dataset.grade;
    if (state.unitId !== "all") state.unitId = getAvailableUnits()[0]?.id || "";
    state.questionNumber = 1;
    renderControls();
    newQuestion(true);
    renderResults();
  });

  els.studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addStudent();
  });

  els.studentList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-student]");
    if (removeButton) {
      removeStudent(removeButton.dataset.removeStudent);
      return;
    }

    const button = event.target.closest("[data-student]");
    if (!button) return;
    activateStudent(button.dataset.student, true);
  });

  els.resultsTableBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-result-student]");
    if (!button) return;
    activateStudent(button.dataset.resultStudent, true);
  });

  els.unitList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-unit]");
    if (!button) return;
    state.unitId = button.dataset.unit;
    state.questionNumber = 1;
    state.history = [];
    renderControls();
    newQuestion(true);
    renderHistory();
  });

  els.levelTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    state.level = button.dataset.level;
    state.questionNumber = 1;
    state.history = [];
    renderControls();
    newQuestion(true);
    renderHistory();
  });

  els.questionCount.addEventListener("change", () => {
    const value = getQuestionLimit();
    els.questionCount.value = value;
    state.questionNumber = Math.min(state.questionNumber, value);
    updateProgress();
  });

  els.beginAnswer.addEventListener("click", beginAnswerStage);
  els.checkAnswer.addEventListener("click", checkCurrentAnswer);
  els.saveQuestion.addEventListener("click", quitCurrentSession);
  els.nextQuestion.addEventListener("click", advanceAfterAnswer);
  els.returnSelection.addEventListener("click", returnToTeacherSelection);
  els.restartSession.addEventListener("click", restartSession);
  els.resetStats.addEventListener("click", resetStats);
  els.printWorkbook.addEventListener("click", openPrintDialog);
  els.closePrintDialog.addEventListener("click", closePrintDialog);
  els.cancelPrintWorkbook.addEventListener("click", closePrintDialog);
  els.createPrintWorkbook.addEventListener("click", createSelectedPrintWorkbook);
  els.printSubject.addEventListener("change", () => {
    renderPrintLevelOptions();
    renderPrintUnitOptions();
  });
  els.printGrade.addEventListener("change", () => {
    renderPrintLevelOptions();
    renderPrintUnitOptions();
  });
  els.printUnit.addEventListener("change", updatePrintEstimate);
  els.printLevel.addEventListener("change", updatePrintEstimate);
  els.printPages.addEventListener("input", updatePrintEstimate);
  els.printDialog.addEventListener("click", (event) => {
    if (event.target === els.printDialog) closePrintDialog();
  });
  els.refreshCache.addEventListener("click", refreshAppCache);
  els.showQuestionCounts.addEventListener("click", openQuestionCountDialog);
  els.closeQuestionCountDialog.addEventListener("click", closeQuestionCountDialog);
  els.questionCountDialog.addEventListener("click", (event) => {
    if (event.target === els.questionCountDialog) closeQuestionCountDialog();
  });
  els.mobileSimpleMode.addEventListener("change", updateMobileSimpleMode);
  els.soundSettings.addEventListener("change", updateSoundSetting);
  els.clearMemo.addEventListener("click", clearScratchPad);
  els.clearInlineMemo?.addEventListener("click", clearScratchPad);
  els.scratchPad?.addEventListener("input", () => syncScratchPads(els.scratchPad));
  els.inlineScratchPad?.addEventListener("input", () => syncScratchPads(els.inlineScratchPad));
  document.addEventListener("keydown", handleStudentEnterShortcut);
  document.addEventListener("keydown", handlePrintDialogShortcut);
  document.addEventListener("keydown", handleQuestionCountDialogShortcut);

  els.answerArea.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (state.answerStage === "answering") {
      checkCurrentAnswer();
    } else if (state.answerStage === "checked") {
      advanceAfterAnswer();
    }
  });
  els.answerArea.addEventListener("focusin", rememberActiveAnswerField);
  els.answerArea.addEventListener("click", handleFractionAnswerClick);
  els.answerArea.addEventListener("click", handleMathInputTool);
  els.answerArea.addEventListener("input", handleFractionAnswerInput);
}

function handleOperationSound(event) {
  const target = event.target.closest("button, select, input[type='checkbox'], input[type='number']");
  if (!target || target.disabled) return;
  const soundType = getOperationSoundType(target);
  if (!soundType) return;
  unlockAudio();
  playSound(soundType);
}

function getOperationSoundType(target) {
  if (target.matches("#beginAnswer, #checkAnswer, #saveQuestion, #nextQuestion, #returnSelection, #restartSession, #startSession, #teacherModeButton")) return null;
  if (target.closest("#soundSettings")) return "settings";
  if (target.matches("#schoolStageButton")) return "stage";
  if (target.matches("[data-subject]")) return "subject";
  if (target.matches("[data-grade]")) return "grade";
  if (target.matches("[data-unit]")) return "unit";
  if (target.matches("[data-level]")) return "level";
  if (target.matches("[data-student], [data-result-student], [data-remove-student]") || target.closest("#studentForm")) return "student";
  if (target.matches("#printWorkbook, #closePrintDialog, #cancelPrintWorkbook, #createPrintWorkbook, #runPrintPreview, #closePrintPreview, #showQuestionCounts, #closeQuestionCountDialog")) return "print";
  if (target.closest("#printDialog") || target.matches("#printSubject, #printGrade, #printUnit, #printLevel, #printPages")) return "print";
  if (target.matches("#mobileSimpleMode, #questionCount, #refreshCache, #mistakeMode")) return "settings";
  if (target.matches("#clearMemo, #clearInlineMemo")) return "memo";
  return "operation";
}

function handleStudentEnterShortcut(event) {
  if (event.key !== "Enter" || state.mode !== "student") return;
  const target = event.target;
  if (target?.closest?.(".answer-area")) return;
  if (target?.matches?.("textarea, select")) return;

  if (els.studentScreen.classList.contains("show-result")) {
    event.preventDefault();
    returnToTeacherSelection();
  } else if (state.answerStage === "question" && !els.beginAnswer.disabled) {
    event.preventDefault();
    beginAnswerStage();
  } else if (state.answerStage === "checked" && !els.nextQuestion.disabled) {
    event.preventDefault();
    advanceAfterAnswer();
  }
}

function focusBeginAnswerButton() {
  if (state.mode !== "student" || state.answerStage !== "question" || els.beginAnswer.disabled) return;
  els.beginAnswer.focus({ preventScroll: true });
}

function focusNextQuestionButton() {
  if (state.mode !== "student" || state.answerStage !== "checked" || els.nextQuestion.disabled) return;
  els.nextQuestion.focus({ preventScroll: true });
}

function focusReturnSelectionButton() {
  if (state.mode !== "student" || !els.studentScreen.classList.contains("show-result")) return;
  els.returnSelection.focus({ preventScroll: true });
}

function focusTeacherStartButton() {
  if (state.mode !== "teacher" || els.startSession.disabled) return;
  els.startSession.focus({ preventScroll: true });
}

function updateSoundSetting(event) {
  const select = event.target.closest("[data-sound-event]");
  if (!select) return;
  state.soundSettings[select.dataset.soundEvent] = select.value;
  saveSoundSettings();
  playSound(select.dataset.soundEvent);
}

function renderDeviceSettings() {
  els.mobileSimpleMode.checked = state.mobileSimpleMode;
}

function updateMobileSimpleMode() {
  state.mobileSimpleMode = els.mobileSimpleMode.checked;
  saveMobileSimpleMode();
  if (state.mode === "student") {
    state.questionNumber = 1;
    newQuestion(true);
  }
}

function clearScratchPad() {
  if (els.scratchPad) els.scratchPad.value = "";
  if (els.inlineScratchPad) els.inlineScratchPad.value = "";
}

function syncScratchPads(source) {
  const value = source?.value || "";
  [els.scratchPad, els.inlineScratchPad].forEach((field) => {
    if (field && field !== source && field.value !== value) field.value = value;
  });
}

function openPrintDialog() {
  renderPrintDialogOptions();
  els.printDialog.hidden = false;
  window.setTimeout(() => els.createPrintWorkbook.focus({ preventScroll: true }), 20);
}

function closePrintDialog() {
  els.printDialog.hidden = true;
  els.printWorkbook.focus({ preventScroll: true });
}

function handlePrintDialogShortcut(event) {
  if (els.printDialog.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closePrintDialog();
    return;
  }
  if (event.key !== "Enter") return;
  const target = event.target;
  if (target?.matches?.("select")) return;
  event.preventDefault();
  createSelectedPrintWorkbook();
}

function handleQuestionCountDialogShortcut(event) {
  if (els.questionCountDialog.hidden || event.key !== "Escape") return;
  event.preventDefault();
  closeQuestionCountDialog();
}

function renderPrintDialogOptions() {
  els.printSubject.innerHTML = getSubjects()
    .map((subject) => `<option value="${subject.id}" ${subject.id === state.subject ? "selected" : ""}>${subject.name}</option>`)
    .join("");
  els.printGrade.innerHTML = getGrades()
    .map((grade) => `<option value="${grade.id}" ${grade.id === state.grade ? "selected" : ""}>${grade.name}</option>`)
    .join("");
  renderPrintLevelOptions();
  els.printPages.value = "1";
  renderPrintUnitOptions();
}

function renderPrintLevelOptions() {
  const gradeId = els.printGrade.value || state.grade;
  const available = getAvailableLevels(state.schoolStage, gradeId);
  const selectedLevel = available.some((level) => level.id === state.level)
    ? state.level
    : available.some((level) => level.id === "advanced")
      ? "advanced"
      : available[0]?.id || "basic";
  els.printLevel.innerHTML = available
    .map((level) => `<option value="${level.id}" ${level.id === selectedLevel ? "selected" : ""}>${level.name}</option>`)
    .join("");
}

function renderPrintUnitOptions() {
  const subjectId = els.printSubject.value || state.subject;
  const gradeId = els.printGrade.value || state.grade;
  const printUnits = getCurriculum()[subjectId]?.[gradeId] || [];
  const selectedUnitId = printUnits.some((unit) => unit.id === state.unitId) ? state.unitId : "";
  els.printUnit.innerHTML = [
    `<option value="all" ${selectedUnitId ? "" : "selected"}>全単元</option>`,
    ...printUnits.map((unit) => `<option value="${unit.id}" ${unit.id === selectedUnitId ? "selected" : ""}>${unit.name}</option>`),
  ].join("");
  updatePrintEstimate();
}

function updatePrintEstimate() {
  const selection = getPrintSelection();
  const units = getPrintUnits(selection);
  const unitCount = units.length || 1;
  const questionCount = unitCount * selection.pageCount * PRINT_QUESTIONS_PER_PAGE;
  const unitText = selection.unitId === "all" ? `${unitCount}単元それぞれ` : "選択した1単元";
  els.printEstimate.textContent = `${unitText}に問題ページ${selection.pageCount}枚を作成します。1枚20問、最低20問から印刷できます。目安は全${questionCount}問で、解答も同じ形式で作成します。`;
}

function createSelectedPrintWorkbook() {
  const selection = getPrintSelection();
  els.printPages.value = String(selection.pageCount);
  closePrintDialog();
  openPrintWorkbook(selection);
}

function getPrintSelection() {
  return {
    schoolStageId: state.schoolStage,
    subjectId: els.printSubject.value || state.subject,
    gradeId: els.printGrade.value || state.grade,
    unitId: els.printUnit.value || "all",
    levelId: els.printLevel.value || state.level,
    pageCount: clamp(Number(els.printPages.value) || 1, 1, PRINT_MAX_PAGES_PER_UNIT),
  };
}

function getPrintUnits(selection) {
  const unitsForGrade = getCurriculum(selection.schoolStageId)[selection.subjectId]?.[selection.gradeId] || [];
  return selection.unitId && selection.unitId !== "all" ? unitsForGrade.filter((unit) => unit.id === selection.unitId) : unitsForGrade;
}

function resetSoundSettingsToDefaults() {
  state.soundSettings = { ...DEFAULT_SOUND_SETTINGS };
  saveSoundSettings();
  renderSoundSettings();
}

function openQuestionCountDialog() {
  renderQuestionCountDialog();
  els.questionCountDialog.hidden = false;
  window.setTimeout(() => els.closeQuestionCountDialog.focus({ preventScroll: true }), 30);
}

function closeQuestionCountDialog() {
  els.questionCountDialog.hidden = true;
  window.setTimeout(focusTeacherStartButton, 30);
}

function renderQuestionCountDialog() {
  const config = getSchoolStageConfig();
  const rows = [];
  let totalMinimum = 0;
  let cappedCount = 0;

  config.grades.forEach((grade) => {
    config.subjects.forEach((subject) => {
      const unitsForGrade = config.curriculum[subject.id]?.[grade.id] || [];
      unitsForGrade.forEach((unit) => {
        const counts = getAvailableLevels(config.id, grade.id).reduce((acc, level) => {
          const estimate = estimateQuestionCount(config.id, subject.id, grade.id, unit, level.id);
          acc[level.id] = formatQuestionCountEstimate(estimate);
          totalMinimum += estimate.count;
          if (estimate.capped) cappedCount += 1;
          return acc;
        }, {});
        rows.push(`
          <tr>
            <td>${escapeHtml(grade.name)}</td>
            <td>${escapeHtml(subject.name)}</td>
            <td>${escapeHtml(unit.name)}</td>
            <td>${counts.basic || "-"}</td>
            <td>${counts.standard || "-"}</td>
            <td>${counts.advanced || "-"}</td>
            <td>${counts.expert || "-"}</td>
          </tr>
        `);
      });
    });
  });

  els.questionCountSummary.textContent = `${config.name}コースの各単元で生成できる問題数の目安です。合計は少なくとも${totalMinimum}問${cappedCount ? "以上" : ""}です。`;
  els.questionCountTableBody.innerHTML = rows.join("");
}

function estimateQuestionCount(stageId, subjectId, gradeId, unit, levelId) {
  const cacheKey = `${stageId}:${subjectId}:${gradeId}:${unit.id}:${levelId}`;
  if (questionCountEstimateCache.has(cacheKey)) return questionCountEstimateCache.get(cacheKey);

  const keys = new Set();
  let staleAttempts = 0;
  const selection = { schoolStageId: stageId, subjectId, gradeId };
  const attemptLimit = QUESTION_COUNT_ESTIMATE_LIMIT * 12;

  for (let attempt = 0; attempt < attemptLimit && keys.size < QUESTION_COUNT_ESTIMATE_LIMIT && staleAttempts < QUESTION_COUNT_STALE_LIMIT; attempt += 1) {
    const problem = createProblemForUnit(unit, levelId, [], selection);
    const key = `${unit.id}|${getPrintQuestionIdentity(problem)}`;
    const before = keys.size;
    keys.add(key);
    staleAttempts = keys.size === before ? staleAttempts + 1 : 0;
  }

  const estimate = { count: keys.size, capped: keys.size >= QUESTION_COUNT_ESTIMATE_LIMIT };
  questionCountEstimateCache.set(cacheKey, estimate);
  return estimate;
}

function formatQuestionCountEstimate(estimate) {
  return estimate.capped ? `${estimate.count}+` : String(estimate.count);
}

async function refreshAppCache() {
  resetSoundSettingsToDefaults();
  els.refreshCache.disabled = true;
  els.refreshCache.textContent = "更新中...";
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
  } catch {
    // Browser cache APIs are unavailable on some file:// or restricted mobile contexts.
  }

  const url = new URL(window.location.href);
  url.searchParams.set("refresh", String(Date.now()));
  window.location.replace(url.toString());
}

function openPrintWorkbook(selection) {
  const html = buildPrintableWorkbook(selection);
  printWorkbookInCurrentPage(html);
}

function writePrintDocument(targetDocument, html) {
  targetDocument.open();
  targetDocument.write(html);
  targetDocument.close();
}

function schedulePrint(targetWindow) {
  window.setTimeout(() => {
    try {
      targetWindow.focus();
      targetWindow.print();
    } catch {
      window.alert("印刷画面を開けませんでした。ブラウザの印刷メニューから再度お試しください。");
    }
  }, 350);
}

function printWorkbookInFrame(html) {
  const frame = document.createElement("iframe");
  frame.title = "印刷用問題集";
  frame.style.position = "fixed";
  frame.style.right = "0";
  frame.style.bottom = "0";
  frame.style.width = "1px";
  frame.style.height = "1px";
  frame.style.border = "0";
  frame.style.opacity = "0";
  frame.onload = () => {
    if (!frame.contentWindow) return;
    schedulePrint(frame.contentWindow);
    window.setTimeout(() => frame.remove(), 4000);
  };
  document.body.appendChild(frame);
  frame.srcdoc = html;
}

function printWorkbookInCurrentPage(html) {
  document.querySelector("#printPreview")?.remove();
  document.querySelector("#printPreviewStyle")?.remove();

  const preview = document.createElement("section");
  preview.id = "printPreview";
  preview.setAttribute("aria-label", "印刷プレビュー");
  preview.innerHTML = `
    <div class="print-preview-toolbar">
      <div>
        <strong>印刷プレビュー</strong>
        <span>内容を確認してから「印刷する」を押してください。</span>
      </div>
      <div class="print-preview-actions">
        <button class="secondary" id="closePrintPreview" type="button">戻る</button>
        <button class="primary" id="runPrintPreview" type="button">印刷する</button>
      </div>
    </div>
    <div class="print-preview-body">
      <section class="print-preview-content print-document">
        ${extractPrintableBody(html)}
      </section>
    </div>
  `;

  const style = document.createElement("style");
  style.id = "printPreviewStyle";
  style.textContent = `
    @media screen {
      #printPreview {
        position: fixed;
        inset: 0;
        z-index: 100;
        display: grid;
        grid-template-rows: auto 1fr;
        background: #eef3f7;
      }
      .print-preview-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        border-bottom: 1px solid #d9e0ea;
        padding: 12px 16px;
        background: #fff;
        color: #172033;
        box-shadow: 0 8px 24px rgba(24, 33, 47, 0.1);
      }
      .print-preview-toolbar strong,
      .print-preview-toolbar span {
        display: block;
      }
      .print-preview-toolbar span {
        color: #667085;
        font-size: 0.84rem;
        font-weight: 750;
      }
      .print-preview-actions {
        display: flex;
        gap: 10px;
      }
      .print-preview-body {
        min-height: 0;
        overflow: auto;
        padding: 16px;
      }
    }
    @media print {
      body > :not(#printPreview) { display: none !important; }
      #printPreview,
      .print-preview-body,
      .print-preview-content { display: block !important; padding: 0 !important; overflow: visible !important; background: #fff !important; }
      .print-preview-toolbar { display: none !important; }
    }
    ${getWorkbookPrintStyles()}
  `;

  document.head.appendChild(style);
  document.body.appendChild(preview);

  const cleanup = () => {
    preview.remove();
    style.remove();
  };
  preview.querySelector("#closePrintPreview").addEventListener("click", cleanup);
  preview.querySelector("#runPrintPreview").addEventListener("click", () => {
    try {
      preview.getBoundingClientRect();
      window.print();
    } catch {
      window.alert("印刷画面を開けませんでした。ブラウザの共有メニュー、またはブラウザの印刷メニューから再度お試しください。");
    }
  });
  window.setTimeout(() => preview.querySelector("#runPrintPreview").focus({ preventScroll: true }), 30);
}

function extractPrintableBody(html) {
  const match = String(html).match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return match ? match[1] : html;
}

function buildPrintableWorkbook(selection = {}) {
  const questionSheets = [];
  const answerSheets = [];
  let questionNumber = 1;
  const config = getSchoolStageConfig(selection.schoolStageId || state.schoolStage);
  const subject = config.subjects.find((item) => item.id === selection.subjectId) || getCurrentSubject();
  const grade = config.grades.find((item) => item.id === selection.gradeId) || getCurrentGrade();
  const availableLevels = getAvailableLevels(config.id, grade.id);
  const level = availableLevels.find((item) => item.id === selection.levelId) || availableLevels.find((item) => item.id === "advanced") || availableLevels[0] || levels[0];
  const normalizedSelection = {
    schoolStageId: config.id,
    subjectId: subject.id,
    gradeId: grade.id,
    unitId: selection.unitId || "all",
    levelId: level.id,
    pageCount: clamp(Number(selection.pageCount) || 1, 1, PRINT_MAX_PAGES_PER_UNIT),
  };
  const isSingleUnit = selection.unitId && selection.unitId !== "all";
  const selectedUnits = getPrintUnits(normalizedSelection);
  const questionsPerUnit = normalizedSelection.pageCount * PRINT_QUESTIONS_PER_PAGE;
  const relatedPrintUnits = getPrintUnits({ ...normalizedSelection, unitId: "all" });

  selectedUnits.forEach((unit) => {
    const fallbackUnits = relatedPrintUnits.filter((item) => item.id !== unit.id);
    const problems = rollUniquePrintQuestions(unit, level.id, questionsPerUnit, fallbackUnits, normalizedSelection);
    const cards = [];
    problems.forEach((problem) => {
      const sourceUnitName = problem.printSourceUnitName || unit.name;
      cards.push({
        number: questionNumber,
        level,
        levelLabel: sourceUnitName === unit.name ? level.name : `${level.name}・${sourceUnitName}`,
        problem,
        answer: problem.displayAnswer,
        explain: problem.explain,
      });
      questionNumber += 1;
    });
    chunkItems(cards, PRINT_QUESTIONS_PER_PAGE).forEach((items, index, chunks) => {
      const common = {
        subject,
        grade,
        unit,
        level,
        pageIndex: index + 1,
        pageCount: chunks.length,
        items,
      };
      questionSheets.push({ ...common, mode: "問題" });
      answerSheets.push({ ...common, mode: "解答" });
    });
  });

  const totalQuestions = Math.max(0, questionNumber - 1);
  const unitLabel = isSingleUnit ? selectedUnits[0]?.name || "単元未選択" : "全単元";
  const title = `${grade.name} ${subject.name} ${unitLabel} ${level.name} 予習問題集`;
  const pageMeta = isSingleUnit
    ? `問題ページ${normalizedSelection.pageCount}枚 / 1ページ${PRINT_QUESTIONS_PER_PAGE}問`
    : `単元あたり問題ページ${normalizedSelection.pageCount}枚 / 1ページ${PRINT_QUESTIONS_PER_PAGE}問`;
  const sheets = [...questionSheets, ...answerSheets];

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>${getWorkbookPrintStyles()}</style>
  </head>
  <body class="print-document">
    <main class="workbook" aria-label="${escapeHtml(title)}">
      ${sheets.map((sheet, index) => renderWorkbookSheet(sheet, title, pageMeta, totalQuestions, index + 1, sheets.length)).join("")}
    </main>
  </body>
</html>`;
}

function chunkItems(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function rollUniquePrintQuestions(unit, levelId, count, fallbackUnits = [], selection = {}) {
  const questions = [];
  const keys = new Set();
  const attemptLimit = Math.max(QUESTION_ROLL_ATTEMPTS, count * 16);
  const sources = [unit, ...fallbackUnits.filter((item) => item && item.id !== unit.id)];
  let lastDuplicateKey = "";

  for (let attempt = 0; questions.length < count && attempt < attemptLimit; attempt += 1) {
    appendUniquePrintQuestion(unit);
  }

  for (let attempt = 0; questions.length < count && attempt < attemptLimit; attempt += 1) {
    appendUniquePrintQuestion(sources[attempt % sources.length]);
  }

  for (let attempt = 0; questions.length < count && attempt < attemptLimit; attempt += 1) {
    const sourceUnit = sources[attempt % sources.length];
    const problem = createProblemForUnit(sourceUnit, levelId, [], selection);
    const key = `${sourceUnit.id}|${getPrintQuestionIdentity(problem)}`;
    if (key === lastDuplicateKey) continue;
    problem.printSourceUnitName = sourceUnit.name;
    questions.push(problem);
    lastDuplicateKey = key;
  }

  return questions.slice(0, count);

  function appendUniquePrintQuestion(sourceUnit) {
    if (!sourceUnit || questions.length >= count) return;
    const problem = createProblemForUnit(sourceUnit, levelId, [], selection);
    const key = `${sourceUnit.id}|${getPrintQuestionIdentity(problem)}`;
    if (keys.has(key)) return;
    keys.add(key);
    problem.printSourceUnitName = sourceUnit.name;
    questions.push(problem);
  }
}

function getPrintQuestionIdentity(problem) {
  if (problem.kind?.endsWith(":knowledge")) return `${problem.kind}|${stripTags(problem.text)}|${problem.displayAnswer}`;
  return getQuestionIdentity(problem);
}

function renderWorkbookSheet(sheet, title, pageMeta, totalQuestions, sheetNumber, totalSheets) {
  return `<section class="print-sheet ${sheet.mode === "解答" ? "answer-sheet" : "question-sheet"}">
    <header class="sheet-head">
      <div>
        <p>中学学習トレーナー</p>
        <h1>${escapeHtml(title)}</h1>
      </div>
      <div class="sheet-meta">
        <strong>${escapeHtml(sheet.mode)}</strong>
        <span>${escapeHtml(sheet.grade.name)} / ${escapeHtml(sheet.subject.name)} / ${escapeHtml(sheet.unit.name)} / ${escapeHtml(sheet.level.name)}</span>
        <span>${escapeHtml(pageMeta)} / 全${totalQuestions}問 / ${sheetNumber}/${totalSheets}</span>
      </div>
      <div class="student-line"><span>名前</span><b></b><span>日付</span><b></b></div>
    </header>
    <ol class="questions">
      ${sheet.items.map((item) => renderWorkbookCard(item, sheet.mode === "解答")).join("")}
    </ol>
  </section>`;
}

function renderWorkbookCard(item, showAnswer) {
  return `<li>
    <div class="question-head"><span>${item.number}</span><span>${escapeHtml(item.levelLabel || item.level.name)}</span></div>
    <div class="question-text">${item.problem.text}</div>
    ${
      showAnswer
        ? `<div class="answer-box"><strong>${getProblemAnswerHtml(item.problem)}</strong><span>${escapeHtml(stripTags(item.explain || ""))}</span></div>`
        : `<div class="answer-line"></div>`
    }
  </li>`;
}

function getWorkbookPrintStyles() {
  return `
    @page { size: A4 portrait; margin: 6mm; }
    .print-document,
    .print-document * { box-sizing: border-box; }
    .print-document { margin: 0; background: #fff; color: #172033; font-family: "Yu Gothic UI", "Meiryo", sans-serif; font-variant-numeric: tabular-nums; }
    .workbook { width: 100%; margin: 0; padding: 0; }
    .print-sheet {
      width: 100%;
      height: 285mm;
      overflow: hidden;
      break-after: page;
      page-break-after: always;
      break-inside: avoid;
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 1.6mm;
      background: #fff;
    }
    .print-sheet:last-child { break-after: auto; page-break-after: auto; }
    .sheet-head {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(58mm, 0.9fr);
      gap: 1.8mm 4mm;
      align-items: end;
      min-height: 15mm;
      padding-bottom: 1.2mm;
      border-bottom: 2px solid #172033;
    }
    .sheet-head p { grid-column: 1 / -1; margin: 0 0 -1mm; color: #516070; font-size: 7pt; font-weight: 900; letter-spacing: 0; }
    .sheet-head h1 { margin: 0; font-size: 10.8pt; line-height: 1.12; letter-spacing: 0; }
    .sheet-meta { display: grid; gap: 0.5mm; color: #516070; font-size: 6.5pt; font-weight: 850; line-height: 1.16; text-align: right; }
    .sheet-meta strong { color: #172033; font-size: 8.8pt; }
    .student-line {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: auto minmax(34mm, 1fr) auto 32mm;
      gap: 2mm;
      align-items: end;
      color: #516070;
      font-size: 6.8pt;
      font-weight: 850;
    }
    .student-line b { display: block; height: 4mm; border-bottom: 1px solid #8792a0; }
    .questions {
      min-height: 0;
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(10, minmax(0, 1fr));
      column-gap: 2.2mm;
      row-gap: 1.1mm;
    }
    .questions li {
      min-height: 0;
      break-inside: avoid;
      overflow: hidden;
      border: 1px solid #d6dee8;
      border-radius: 3px;
      padding: 0.8mm 1.1mm;
      background: #fff;
    }
    .question-head {
      display: flex;
      justify-content: space-between;
      gap: 2mm;
      margin-bottom: 0.8mm;
      padding-bottom: 0.7mm;
      border-bottom: 1px solid #edf1f6;
      color: #516070;
      font-size: 6.7pt;
      font-weight: 900;
      line-height: 1;
    }
    .question-head span:first-child::before { content: "Q"; color: #172033; }
    .question-text { color: #172033; font-size: 6.8pt; font-weight: 780; line-height: 1.22; letter-spacing: 0; }
    .math { font-family: "Cambria Math", "Yu Gothic UI", "Meiryo", sans-serif; font-weight: 800; }
    .frac-wrap { display: inline-flex; align-items: center; vertical-align: middle; }
    .frac-render { display: inline-flex; align-items: center; gap: 0.05em; vertical-align: middle; }
    .frac-sign::before { content: attr(data-value); display: inline-block; margin-right: 0.03em; }
    .frac { display: inline-grid; grid-template-rows: auto auto; align-items: center; justify-items: center; min-width: 1.05em; margin: 0 0.08em; line-height: 1; vertical-align: middle; }
    .frac-top, .frac-bottom { min-width: 100%; padding: 0 0.18em; text-align: center; }
    .frac-top { border-bottom: 0.12em solid currentColor; padding-bottom: 0.08em; }
    .frac-bottom { padding-top: 0.1em; }
    .frac-top::before, .frac-bottom::before { content: attr(data-value); }
    .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
    .answer-line { height: 4mm; margin-top: 0.7mm; border-bottom: 1px solid #8792a0; }
    .answer-box {
      display: grid;
      gap: 0.35mm;
      margin-top: 0.5mm;
      border-top: 1px solid #edf1f6;
      padding-top: 0.5mm;
      color: #516070;
      font-size: 5.9pt;
      font-weight: 750;
      line-height: 1.16;
    }
    .answer-box strong { color: #172033; font-size: 6.7pt; }
    @media screen {
      .print-document { max-width: 210mm; margin: 0 auto; padding: 8mm; }
      .print-sheet { height: auto; min-height: 285mm; margin-bottom: 8mm; border: 1px solid #d6dee8; padding: 6mm; }
    }
  `;
}

function startStudentSession() {
  if (!getActiveStudent()) {
    window.alert("生徒を選択してください。");
    return;
  }

  unlockAudio();
  playSound("start");
  resetSession();
  state.questionNumber = 1;
  setMode("student");
  renderStats();
  renderHistory();
  renderResults();
  newQuestion(true);
}

function requestTeacherMode() {
  const password = window.prompt("講師画面のパスワードを入力してください。");
  if (password === null) return;
  if (password !== TEACHER_PASSWORD) {
    window.alert("パスワードが違います。");
    return;
  }
  setMode("teacher");
  playSound("teacher");
  renderStudentPanel();
  renderControls();
  renderStats();
  renderHistory();
  renderResults();
  window.setTimeout(focusTeacherStartButton, 30);
}

function newQuestion(resetFeedback) {
  clearSessionTimers();
  els.studentScreen.classList.remove("show-result");
  const unit = getCurrentUnit();
  state.current = rollQuestion(unit);
  state.answered = false;

  if (!resetFeedback) {
    const limit = getQuestionLimit();
    state.questionNumber = state.questionNumber >= limit ? 1 : state.questionNumber + 1;
  }

  els.unitKicker.textContent = `${getCurrentGrade().name} ${getCurrentSubject().name}・${state.current.sourceUnitName || unit.name}`;
  els.questionTitle.textContent = state.current.title;
  els.skillTag.textContent = state.current.skill;
  els.levelTag.textContent = getCurrentLevelLabel();
  els.problemText.innerHTML = decorateProblemText(state.current.text);
  clearScratchPad();
  els.feedback.className = "feedback";
  els.feedback.textContent = "問題を確認してから「回答する」を押してください。";
  renderAnswerInputs(state.current);
  setAnswerStage("question");
  updateProgress();
  drawVisual(state.current);
  if (state.mode === "student") {
    playSound("question");
    window.setTimeout(focusBeginAnswerButton, 30);
    state.autoAnswerTimer = window.setTimeout(autoBeginAnswerStage, ANSWER_AUTO_START_MS);
  }
}

function autoBeginAnswerStage() {
  state.autoAnswerTimer = null;
  if (state.mode !== "student" || state.answerStage !== "question" || state.answered) return;
  beginAnswerStage({ auto: true });
}

function rollQuestion(unit) {
  const recentKey = getRecentBucketKey();
  const recent = state.recentQuestionKeys[recentKey] || [];
  const sessionKeys = state.sessionQuestionKeys || [];
  let candidate = null;
  let candidateKey = "";
  const effectiveLevel = getEffectiveQuestionLevel();
  let fallback = null;
  let fallbackKey = "";

  for (let attempt = 0; attempt < QUESTION_ROLL_ATTEMPTS; attempt += 1) {
    candidate = createProblemForUnit(unit, effectiveLevel, getMistakeWeights(unit.id));
    attachQuestionMeta(candidate, unit, effectiveLevel);
    candidateKey = getQuestionIdentity(candidate);
    if (!fallback || !recent.includes(candidateKey)) {
      fallback = candidate;
      fallbackKey = candidateKey;
    }
    if (!recent.includes(candidateKey) && !sessionKeys.includes(candidateKey)) break;
  }

  if (sessionKeys.includes(candidateKey) && fallback && !sessionKeys.includes(fallbackKey)) {
    candidate = fallback;
    candidateKey = fallbackKey;
  }
  if (sessionKeys.includes(candidateKey)) {
    const related = rollRelatedQuestion(unit, effectiveLevel, recent, sessionKeys);
    if (related) {
      candidate = related.problem;
      candidateKey = related.key;
    }
  }
  state.sessionQuestionKeys = [candidateKey, ...sessionKeys.filter((key) => key !== candidateKey)].slice(0, getQuestionLimit());
  rememberQuestion(recentKey, candidateKey);
  return candidate;
}

function attachQuestionMeta(problem, unit, effectiveLevel) {
  problem.effectiveLevel = effectiveLevel;
  problem.mobileSimple = effectiveLevel !== state.level;
  problem.sourceUnitId = unit.id;
  problem.sourceUnitName = unit.name;
}

function rollRelatedQuestion(currentUnit, effectiveLevel, recent, sessionKeys) {
  const relatedUnits = getAvailableUnits().filter((unit) => unit.id !== currentUnit.id);
  if (!relatedUnits.length) return null;

  for (let attempt = 0; attempt < QUESTION_ROLL_ATTEMPTS; attempt += 1) {
    const unit = pick(relatedUnits);
    const problem = createProblemForUnit(unit, effectiveLevel, []);
    attachQuestionMeta(problem, unit, effectiveLevel);
    const key = getQuestionIdentity(problem);
    if (!recent.includes(key) && !sessionKeys.includes(key)) return { problem, key };
  }
  return null;
}

function createProblemForUnit(unit, levelId, weights = [], context = {}) {
  const stageId = context.schoolStageId || state.schoolStage;
  const gradeId = context.gradeId || state.grade;
  const subjectId = context.subjectId || state.subject;
  let problem = null;
  if (levelId === "expert") {
    const expert = generateExpertProblem({ stageId, gradeId, subjectId, unit, weights });
    if (expert) problem = expert;
  }
  if (!problem) problem = unit.generator(getGeneratorLevel(levelId), weights);
  return applyQuestionVariant(problem);
}

function applyQuestionVariant(problem) {
  const frameIndex = randInt(0, QUESTION_FRAME_VARIANTS.length - 1);
  const focusIndex = randInt(0, QUESTION_FOCUS_VARIANTS.length - 1);
  const frame = QUESTION_FRAME_VARIANTS[frameIndex];
  const focus = QUESTION_FOCUS_VARIANTS[focusIndex];
  const variantId = `${frameIndex + 1}-${focusIndex + 1}`;
  const baseIdentity = problem.identityKey || `${problem.kind}|${stripTags(problem.text)}|${problem.displayAnswer || ""}`;
  problem.identityKey = `${baseIdentity}|variant:${variantId}`;
  problem.text = `<span class="question-variant">${frame} / ${focus}</span><br>${problem.text}`;
  return problem;
}

function generateExpertProblem({ stageId, gradeId, subjectId, unit, weights }) {
  if (stageId === "elementary") {
    if (subjectId === "math") return generateElementaryEntranceMathProblem(unit.id, Number(gradeId));
    return generateElementaryEntranceKnowledgeProblem(subjectId, unit.id, weights);
  }
  if (stageId === "junior") {
    if (subjectId === "math") return generateHighSchoolEntranceMathProblem(unit.id, Number(gradeId));
    return generateJuniorEntranceKnowledgeProblem(subjectId, unit, weights);
  }
  return null;
}

function generateElementaryEntranceKnowledgeProblem(subjectId, unitId, weights) {
  const problem = generateElementaryKnowledgeProblem(subjectId, unitId, "advanced", weights);
  return {
    ...problem,
    kind: `elementary-expert:${problem.kind}`,
    title: `中学受験 お受験 ${getSubjectName(subjectId)}`,
    skill: `入試準備・${problem.skill}`,
    text: `中学受験で問われやすい知識です。<br>${problem.text}`,
    visual: { ...problem.visual, heading: "中学受験 お受験" },
  };
}

function generateJuniorEntranceKnowledgeProblem(subjectId, unit, weights) {
  const problem = unit.generator("advanced", weights);
  return {
    ...problem,
    kind: `junior-expert:${problem.kind}`,
    title: `高校入試 お受験 ${getSubjectName(subjectId)}`,
    skill: `入試準備・${problem.skill}`,
    text: `高校入試で差がつきやすい確認問題です。<br>${problem.text}`,
    visual: { ...problem.visual, heading: "高校入試 お受験" },
  };
}

function getRecentBucketKey() {
  return `${state.schoolStage}:${state.subject}:${state.grade}:${state.unitId}`;
}

function getEffectiveQuestionLevel() {
  return isMobileSimpleActive() ? "basic" : state.level;
}

function isMobileSimpleActive() {
  return state.mobileSimpleMode && isPhoneViewport();
}

function isPhoneViewport() {
  const shortSide = Math.min(window.innerWidth || 0, window.innerHeight || 0);
  const longSide = Math.max(window.innerWidth || 0, window.innerHeight || 0);
  return shortSide <= 480 && longSide <= 980;
}

function getCurrentLevelLabel() {
  if (state.current?.mobileSimple) return "スマホ簡易";
  return levels.find((level) => level.id === state.level)?.name || "";
}

function getQuestionIdentity(problem) {
  if (problem.identityKey) return problem.identityKey;
  return `${problem.kind}|${stripTags(problem.text)}|${problem.displayAnswer}`;
}

function rememberQuestion(bucketKey, questionKey) {
  if (!questionKey) return;
  const recent = state.recentQuestionKeys[bucketKey] || [];
  state.recentQuestionKeys[bucketKey] = [questionKey, ...recent.filter((key) => key !== questionKey)].slice(0, RECENT_QUESTION_LIMIT);
}

function decorateProblemText(problemText) {
  if (state.mode !== "student") return problemText;
  return `<span class="mission-tag">${pick(MISSION_TAGS)}</span><br>${problemText}`;
}

function setAnswerStage(stage) {
  state.answerStage = stage;
  const card = els.answerArea.closest(".problem-card");
  card?.classList.remove("stage-question", "stage-answering", "stage-checked");
  card?.classList.add(`stage-${stage}`);
  els.beginAnswer.disabled = stage !== "question";
  els.checkAnswer.disabled = stage !== "answering";
  els.saveQuestion.disabled = false;
  els.nextQuestion.disabled = stage !== "checked";
  els.nextQuestion.textContent = state.questionNumber >= getQuestionLimit() ? "結果を見る" : "次の問題";
}

function beginAnswerStage(options = {}) {
  if (!state.current || state.answered) return;
  if (state.autoAnswerTimer) {
    window.clearTimeout(state.autoAnswerTimer);
    state.autoAnswerTimer = null;
  }
  unlockAudio();
  playSound("answer");
  setAnswerStage("answering");
  els.feedback.className = "feedback";
  els.feedback.textContent = "答えを入力して「答え合わせ」を押してください。";
  if (!shouldDeferAutoFocus(options)) focusFirstInput();
}

function shouldDeferAutoFocus(options = {}) {
  return Boolean(options.auto && isTouchDevice());
}

function isTouchDevice() {
  return (navigator.maxTouchPoints || 0) > 0 || window.matchMedia?.("(pointer: coarse)")?.matches;
}

function updateDeviceClass() {
  document.body.classList.toggle("touch-device", isTouchDevice());
}

function renderAnswerInputs(problem) {
  state.activeAnswerKey = "value";
  state.activeFractionPart = "";
  const placeholder = getAnswerPlaceholder(problem);
  els.answerArea.innerHTML = `
    <div class="answer-field">
      <label for="mainAnswer">${problem.answerLabel}</label>
      <input id="mainAnswer" data-answer-key="value" inputmode="text" autocomplete="off" placeholder="${escapeHtml(placeholder)}" />
    </div>
    ${renderFractionAnswerTools(problem)}
    ${renderMathInputTools(problem)}
  `;
}

function getAnswerPlaceholder(problem) {
  if (state.subject !== "math") return "";
  const answer = String(problem?.displayAnswer || "");
  if (answer.includes("/")) return answer.startsWith("x=") ? "例: x=3/4" : "例: 3/4";
  return "";
}

function renderFractionAnswerTools(problem) {
  if (!shouldShowFractionAnswerTools(problem)) return "";
  const prefix = getFractionAnswerPrefix(problem);
  return `
    <div class="fraction-answer-panel" data-fraction-prefix="${escapeHtml(prefix)}">
      <span>横棒の分数で入力</span>
      <div class="fraction-answer-row">
        ${prefix ? `<b>${escapeHtml(prefix)}</b>` : ""}
        <div class="fraction-input-stack">
          <input type="text" inputmode="numeric" autocomplete="off" data-fraction-part="numerator" aria-label="分子" placeholder="分子" />
          <i aria-hidden="true"></i>
          <input type="text" inputmode="numeric" autocomplete="off" data-fraction-part="denominator" aria-label="分母" placeholder="分母" />
        </div>
        <button class="secondary small-button" type="button" data-fraction-action="apply">入力</button>
      </div>
      <small>分子に - を付けると負の分数になります。通常の欄へ自動入力されます。</small>
    </div>
  `;
}

function shouldShowFractionAnswerTools(problem) {
  if (state.subject !== "math" || problem.answerType !== "single") return false;
  return /^(?:[xyab]=)?-?\d+\/\d+$/.test(getFractionAnswerValueText(problem));
}

function getFractionAnswerPrefix(problem) {
  const match = getFractionAnswerValueText(problem).match(/^([xyab]=)-?\d+\/\d+$/i);
  return match ? match[1] : "";
}

function getFractionAnswerValueText(problem) {
  return normalizeAnswerText(problem?.displayAnswer || "").replace(/(?:円|個|本|冊|人|時間|km|cm\^?3|cm\^?2|cm|m\^?3|m\^?2|m|l)$/i, "");
}

function handleFractionAnswerInput(event) {
  if (!event.target.closest("[data-fraction-part], [data-fraction-action]")) return;
  syncFractionAnswerFromPanel();
}

function handleFractionAnswerClick(event) {
  const button = event.target.closest("[data-fraction-action='apply']");
  if (!button) return;
  event.preventDefault();
  syncFractionAnswerFromPanel();
  els.answerArea.querySelector("#mainAnswer")?.focus({ preventScroll: true });
}

function syncFractionAnswerFromPanel() {
  const panel = els.answerArea.querySelector(".fraction-answer-panel");
  if (!panel) return;
  const numerator = normalizeAnswerText(panel.querySelector("[data-fraction-part='numerator']")?.value || "");
  const denominator = normalizeAnswerText(panel.querySelector("[data-fraction-part='denominator']")?.value || "");
  const main = els.answerArea.querySelector("#mainAnswer");
  if (!main || !numerator || !denominator) return;
  const prefix = panel.dataset.fractionPrefix || "";
  main.value = `${prefix}${numerator}/${denominator}`;
}

function renderMathInputTools(problem) {
  if (!shouldShowMathInputTools(problem)) return "";
  const buttons = MATH_KEYPAD_TOKENS.map(
    (token) =>
      `<button class="math-key" type="button" data-math-token="${escapeHtml(token.value)}" title="${escapeHtml(token.title)}" aria-label="${escapeHtml(token.title)}">${escapeHtml(token.label)}</button>`
  ).join("");
  return `
    <div class="math-input-tools" aria-label="数式入力">
      <div class="math-key-grid">
        ${buttons}
        <button class="math-key utility" type="button" data-math-action="backspace" title="1文字消す" aria-label="1文字消す">⌫</button>
        <button class="math-key utility" type="button" data-math-action="clear" title="全部消す" aria-label="全部消す">消</button>
      </div>
    </div>
  `;
}

function shouldShowMathInputTools(problem) {
  return state.subject === "math" && problem.answerType === "single";
}

function rememberActiveAnswerField(event) {
  const fractionField = event.target.closest("[data-fraction-part]");
  if (fractionField) {
    state.activeFractionPart = fractionField.dataset.fractionPart;
    state.activeAnswerKey = "value";
    return;
  }
  const field = event.target.closest("[data-answer-key]");
  if (field) {
    state.activeAnswerKey = field.dataset.answerKey;
    state.activeFractionPart = "";
  }
}

function handleMathInputTool(event) {
  const button = event.target.closest("[data-math-token], [data-math-action]");
  if (!button) return;
  event.preventDefault();
  if (state.answerStage !== "answering") return;

  const field = getActiveAnswerField();
  if (!field) return;
  field.focus({ preventScroll: true });

  const action = button.dataset.mathAction;
  if (action === "backspace") {
    deleteBeforeCursor(field);
    syncFractionAnswerFromPanel();
    return;
  }
  if (action === "clear") {
    field.value = "";
    syncFractionAnswerFromPanel();
    return;
  }
  insertAtCursor(field, button.dataset.mathToken || "");
  syncFractionAnswerFromPanel();
}

function getActiveAnswerField() {
  if (state.activeFractionPart) {
    const fractionField = els.answerArea.querySelector(`[data-fraction-part="${CSS.escape(state.activeFractionPart)}"]`);
    if (fractionField) return fractionField;
  }
  const selector = `[data-answer-key="${CSS.escape(state.activeAnswerKey || "value")}"]`;
  return els.answerArea.querySelector(selector) || els.answerArea.querySelector("[data-answer-key]");
}

function insertAtCursor(field, value) {
  const start = field.selectionStart ?? field.value.length;
  const end = field.selectionEnd ?? field.value.length;
  field.value = `${field.value.slice(0, start)}${value}${field.value.slice(end)}`;
  const cursor = start + value.length;
  field.setSelectionRange?.(cursor, cursor);
}

function deleteBeforeCursor(field) {
  const start = field.selectionStart ?? field.value.length;
  const end = field.selectionEnd ?? field.value.length;
  if (start !== end) {
    field.value = `${field.value.slice(0, start)}${field.value.slice(end)}`;
    field.setSelectionRange?.(start, start);
    return;
  }
  if (start <= 0) return;
  field.value = `${field.value.slice(0, start - 1)}${field.value.slice(end)}`;
  field.setSelectionRange?.(start - 1, start - 1);
}

function checkCurrentAnswer() {
  if (!state.current || state.answered) return;
  if (state.answerStage !== "answering") {
    beginAnswerStage();
    return;
  }
  if (!getActiveStudent()) {
    els.feedback.className = "feedback wrong";
    els.feedback.textContent = "先に生徒名を登録して、学習する生徒を選んでください。";
    return;
  }

  playSound("check");
  const result = state.current.check(readAnswer());
  const isCorrect = typeof result === "object" ? Boolean(result.correct) : Boolean(result);
  recordCurrentOutcome(isCorrect, { unanswered: false });
}

function quitCurrentSession() {
  if (state.mode !== "student") return;
  unlockAudio();
  playSound("quit");
  clearSessionTimers();
  restoreSessionSnapshot();
  state.session = defaultSession();
  state.sessionQuestionKeys = [];
  state.questionNumber = 1;
  state.answered = false;
  setMode("teacher");
  renderStudentPanel();
  renderControls();
  renderStats();
  renderHistory();
  renderResults();
  window.setTimeout(focusTeacherStartButton, 30);
}

function restoreSessionSnapshot() {
  if (!state.sessionSnapshot) return;
  state.stats = cloneStats(state.sessionSnapshot.stats);
  state.history = Array.isArray(state.stats.history) ? state.stats.history : [];
  const student = getActiveStudent();
  if (student) student.stats = state.stats;
  state.sessionSnapshot = null;
  saveRoster();
}

function recordCurrentOutcome(isCorrect, options = {}) {
  const unit = getQuestionSourceUnit();
  state.answered = true;
  setAnswerStage("checked");
  drawVisual(state.current);
  state.session.total += 1;
  state.stats.total += 1;
  state.stats.today += 1;
  state.stats.lastStudiedAt = new Date().toISOString();
  state.stats.byKind[state.current.kind] ||= { wrong: 0, total: 0 };
  state.stats.byKind[state.current.kind].total += 1;
  const unitKey = getUnitProgressKey(unit.id);
  state.stats.byUnit[unitKey] ||= { total: 0, correct: 0 };
  state.stats.byUnit[unitKey].total += 1;

  if (isCorrect) {
    state.session.correct += 1;
    state.stats.correct += 1;
    state.stats.streak += 1;
    state.stats.byUnit[unitKey].correct += 1;
    els.feedback.className = "feedback correct";
    els.feedback.innerHTML = `正解です。${pick(CORRECT_FLAVORS)} ${state.current.explain}`;
    window.setTimeout(() => playSound("correct"), 120);
  } else {
    state.session.wrong += 1;
    state.stats.streak = 0;
    state.stats.byKind[state.current.kind].wrong += 1;
    els.feedback.className = "feedback wrong";
    if (options.unanswered) {
      els.feedback.innerHTML = `未回答です。正解は <strong>${getProblemAnswerHtml(state.current)}</strong>。`;
    } else {
      els.feedback.innerHTML = `もう一歩です。${pick(WRONG_FLAVORS)} 正解は <strong>${getProblemAnswerHtml(state.current)}</strong>。${state.current.explain}`;
      window.setTimeout(() => playSound("wrong"), 120);
    }
  }

  state.history.unshift({
    correct: isCorrect,
    unanswered: Boolean(options.unanswered),
    unit: unit.name,
    skill: state.current.skill,
    summary: stripTags(state.current.text),
    subject: getCurrentSubject().name,
    grade: getCurrentGrade().name,
    level: state.level,
    answeredAt: state.stats.lastStudiedAt,
  });
  state.history = state.history.slice(0, 8);
  state.stats.history = state.history;

  saveStats();
  renderStats();
  renderHistory();
  renderStudentPanel();
  renderResults();
  window.setTimeout(focusNextQuestionButton, 30);
  if (isCorrect) scheduleCorrectAdvance();
}

function getQuestionSourceUnit() {
  if (!state.current?.sourceUnitId) return getCurrentUnit();
  return getAvailableUnits().find((unit) => unit.id === state.current.sourceUnitId) || getCurrentUnit();
}

function readAnswer() {
  syncFractionAnswerFromPanel();
  const fields = [...els.answerArea.querySelectorAll("input")];
  return fields.reduce((acc, field) => {
    if (!field.dataset.answerKey) return acc;
    acc[field.dataset.answerKey] = field.value;
    return acc;
  }, {});
}

function scheduleCorrectAdvance() {
  scheduleAdvance(AUTO_ADVANCE_MS);
}

function scheduleAdvance(delay) {
  clearSessionTimers();
  state.autoAdvanceTimer = window.setTimeout(() => {
    state.autoAdvanceTimer = null;
    advanceAfterAnswer();
  }, delay);
}

function advanceAfterAnswer() {
  if (!state.answered) return;
  clearSessionTimers();
  if (state.questionNumber >= getQuestionLimit()) {
    showSessionResult();
    return;
  }
  playSound("next");
  newQuestion(false);
}

function resetSession() {
  clearSessionTimers();
  state.session = defaultSession();
  state.sessionSnapshot = getActiveStudent() ? { stats: cloneStats(state.stats) } : null;
  state.sessionQuestionKeys = [];
  state.session.startedAt = new Date().toISOString();
  els.studentScreen.classList.remove("show-result");
}

function showSessionResult() {
  clearSessionTimers();
  const total = state.session.total;
  const correct = state.session.correct;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const student = getActiveStudent();
  state.session.completed = true;
  state.sessionSnapshot = null;
  els.resultKicker.textContent = `${student ? student.name : "生徒"} / ${getCurrentGrade().name} ${getCurrentSubject().name}`;
  els.resultTitle.textContent = `${getCurrentUnitDisplayName()} の結果`;
  els.resultCorrect.textContent = String(correct);
  els.resultTotal.textContent = String(total);
  els.resultAccuracy.textContent = total ? `${accuracy}%` : "--";
  els.studentScreen.classList.add("show-result");
  playSound("result");
  window.setTimeout(focusReturnSelectionButton, 30);
  state.resultReturnTimer = window.setTimeout(returnToTeacherSelection, RESULT_RETURN_MS);
}

function returnToTeacherSelection() {
  clearSessionTimers();
  playSound("return");
  els.studentScreen.classList.remove("show-result");
  state.questionNumber = 1;
  setMode("teacher");
  renderStudentPanel();
  renderControls();
  renderStats();
  renderHistory();
  renderResults();
  window.setTimeout(focusTeacherStartButton, 30);
}

function clearSessionTimers() {
  if (state.autoAnswerTimer) {
    window.clearTimeout(state.autoAnswerTimer);
    state.autoAnswerTimer = null;
  }
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
  if (state.resultReturnTimer) {
    window.clearTimeout(state.resultReturnTimer);
    state.resultReturnTimer = null;
  }
}

function getAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioContext) audioContext = new AudioCtor();
  return audioContext;
}

function unlockAudio() {
  preloadSoundPlayers();
  soundPlayers.forEach((player) => player.load());
  const context = getAudioContext();
  if (!context || context.state !== "suspended") return;
  context.resume().catch(() => {});
}

function preloadSoundPlayers() {
  SOUND_EVENTS.forEach((event) => getSoundPlayer(event.id));
}

function getSoundPlayer(type) {
  const source = getSoundSource(type);
  if (!source || typeof Audio === "undefined") return null;
  if (!soundPlayers.has(source)) {
    const player = new Audio(source);
    player.preload = "auto";
    player.volume = SOUND_VOLUME[type] ?? 0.75;
    soundPlayers.set(source, player);
  }
  return soundPlayers.get(source);
}

function getSelectedSound(type) {
  const selectedId = state.soundSettings[type] || DEFAULT_SOUND_SETTINGS[type] || "none";
  return SOUND_LIBRARY.find((sound) => sound.id === selectedId) || SOUND_LIBRARY[0];
}

function getSoundSource(type) {
  return getSelectedSound(type)?.src || "";
}

function playSound(type) {
  const selected = getSelectedSound(type);
  if (!selected || selected.id === "none") return;
  const basePlayer = getSoundPlayer(type);
  if (basePlayer) {
    const player = basePlayer.cloneNode(true);
    const release = () => activeSounds.delete(player);
    player.volume = SOUND_VOLUME[type] ?? 0.75;
    player.addEventListener("ended", release, { once: true });
    player.addEventListener("error", release, { once: true });
    activeSounds.add(player);
    const promise = player.play();
    if (promise?.catch) {
      promise.catch(() => {
        release();
      });
    }
  }
}

function renderStats() {
  const student = getActiveStudent();
  els.activeStudentName.textContent = student ? student.name : "未登録";
  els.streakCount.textContent = state.stats.streak;
  els.todayCount.textContent = state.stats.today;
  els.totalAnswers.textContent = state.stats.total;
  els.totalCorrect.textContent = state.stats.correct;
  els.accuracyRate.textContent = state.stats.total ? `${Math.round((state.stats.correct / state.stats.total) * 100)}%` : "--";
}

function renderHistory() {
  state.history = state.stats.history || [];
  if (state.history.length === 0) {
    els.historyList.innerHTML = `<div class="empty-history">選択中の生徒の結果がここに残ります</div>`;
    return;
  }

  els.historyList.innerHTML = state.history
    .map(
      (item) => `
        <div class="history-card ${item.correct ? "correct" : "wrong"}">
          <strong>${item.correct ? "正解" : item.unanswered ? "未回答" : "復習"}・${item.grade || ""}${item.subject || ""} ${item.skill}</strong>
          <span>${item.summary}</span>
        </div>
      `
    )
    .join("");
}

function renderResults() {
  const students = state.roster.students;
  if (students.length === 0) {
    els.resultsSummary.textContent = "生徒を登録してください";
    els.resultsTableBody.innerHTML = `<tr><td colspan="5">まだ生徒が登録されていません。</td></tr>`;
    els.subjectInsight.innerHTML = `<div class="empty-history">教科別理解度がここに表示されます</div>`;
    els.learningAdvice.innerHTML = `<div class="empty-history">学習アドバイスがここに表示されます</div>`;
    els.unitBreakdown.innerHTML = `<div class="empty-history">単元別の結果がここに表示されます</div>`;
    return;
  }

  const totalAnswers = students.reduce((acc, student) => acc + normalizeStats(student.stats).total, 0);
  els.resultsSummary.textContent = `${students.length}名登録 / 累計${totalAnswers}問`;
  els.resultsTableBody.innerHTML = students
    .map((student) => {
      const stats = normalizeStats(student.stats);
      const accuracy = stats.total ? `${Math.round((stats.correct / stats.total) * 100)}%` : "--";
      return `
        <tr class="${student.id === state.activeStudentId ? "active" : ""}">
          <td><button class="student-result-button" type="button" data-result-student="${student.id}">${escapeHtml(student.name)}</button></td>
          <td>${stats.total}</td>
          <td>${accuracy}</td>
          <td>${stats.streak}</td>
          <td>${formatDateTime(stats.lastStudiedAt)}</td>
        </tr>
      `;
    })
    .join("");

  renderUnitBreakdown();
  renderSubjectInsight();
  renderLearningAdvice();
}

function renderUnitBreakdown() {
  const student = getActiveStudent();
  if (!student) {
    els.subjectInsight.innerHTML = `<div class="empty-history">生徒を選択してください</div>`;
    els.learningAdvice.innerHTML = `<div class="empty-history">生徒を選択してください</div>`;
    els.unitBreakdown.innerHTML = `<div class="empty-history">生徒を選択してください</div>`;
    return;
  }

  const stats = normalizeStats(student.stats);
  els.unitBreakdown.innerHTML = getAvailableUnits()
    .map((unit) => {
      const record = stats.byUnit[getUnitProgressKey(unit.id)] || { total: 0, correct: 0 };
      const accuracy = record.total ? Math.round((record.correct / record.total) * 100) : 0;
      const label = record.total ? `${record.correct}/${record.total}問` : "未学習";
      return `
        <div class="breakdown-card">
          <strong>${unit.name}<span>${record.total ? `${accuracy}%` : "--"}</span></strong>
          <div class="breakdown-meter"><i style="width:${accuracy}%"></i></div>
          <span>${label}</span>
        </div>
      `;
    })
    .join("");
}

function renderSubjectInsight() {
  const student = getActiveStudent();
  if (!student) {
    els.subjectInsight.innerHTML = `<div class="empty-history">生徒を選択してください</div>`;
    return;
  }
  const stats = normalizeStats(student.stats);
  const records = getSubjects().map((subject) => {
    const prefix = getSubjectProgressPrefix(subject.id);
    const totals = Object.entries(stats.byUnit)
      .filter(([key]) => key.startsWith(prefix))
      .reduce(
        (acc, [, record]) => {
          acc.total += record.total || 0;
          acc.correct += record.correct || 0;
          return acc;
        },
        { total: 0, correct: 0 }
      );
    const accuracy = totals.total ? Math.round((totals.correct / totals.total) * 100) : 0;
    return { subject, ...totals, accuracy };
  });

  els.subjectInsight.innerHTML = `
    <h3>教科別理解度</h3>
    <div class="radar-wrap">
      ${renderSubjectRadar(records)}
      <div class="subject-scores">
        ${records
          .map(
            (record) =>
              `<span><b>${escapeHtml(record.subject.name)}</b><em>${record.total ? `${record.accuracy}% / ${record.total}問` : "未学習"}</em></span>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderLearningAdvice() {
  const student = getActiveStudent();
  if (!student) {
    els.learningAdvice.innerHTML = `<div class="empty-history">生徒を選択してください</div>`;
    return;
  }

  const stats = normalizeStats(student.stats);
  const cards = buildLearningAdviceCards(stats);
  els.learningAdvice.innerHTML = `
    <h3>個別アドバイス</h3>
    <div class="advice-list">
      ${cards.map(renderAdviceCard).join("")}
    </div>
  `;
}

function buildLearningAdviceCards(stats) {
  const unitRecords = getStageUnitRecords(stats);
  const stageTotal = unitRecords.reduce((acc, record) => acc + record.total, 0);
  const stageCorrect = unitRecords.reduce((acc, record) => acc + record.correct, 0);
  const stageAccuracy = stageTotal ? Math.round((stageCorrect / stageTotal) * 100) : 0;
  const cards = [];

  if (stageTotal < 5) {
    cards.push({
      tone: "start",
      label: "はじめの一歩",
      title: "まずは5問分の記録を作りましょう",
      body: `${getSchoolStageConfig().name}コースで少し解くと、苦手な単元や教科が見え始めます。今日は${getCurrentSubject().name}の${getCurrentUnitDisplayName()}から始めるのがよさそうです。`,
      detail: "5問終わると、次に何を復習するかを絞りやすくなります。",
    });
  }

  const weakUnit = unitRecords
    .filter((record) => record.total >= 3)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)[0];
  if (weakUnit && weakUnit.accuracy < 75) {
    cards.push({
      tone: "weak",
      label: "重点復習",
      title: `${weakUnit.unit.name}が少し苦手なようですね`,
      body: getUnitPracticeAdvice(weakUnit),
      detail: `${weakUnit.correct}/${weakUnit.total}問 正解。次は同じ単元を${state.level === "advanced" ? "標準で整えてから発展へ戻る" : "5問だけ続ける"}のがおすすめです。`,
    });
  }

  const weakKind = getWeakKindAdvice(stats);
  if (weakKind) {
    cards.push(weakKind);
  }

  const strongSubject = getStrongSubjectRecord(stats);
  if (strongSubject && strongSubject.total >= 5 && strongSubject.accuracy >= 80) {
    cards.push({
      tone: "strong",
      label: "伸びている点",
      title: `${strongSubject.subject.name}はよい調子です`,
      body: `正答率は${strongSubject.accuracy}%です。今のリズムを残しつつ、次は苦手単元を短く混ぜると学習のバランスが良くなります。`,
      detail: `${strongSubject.correct}/${strongSubject.total}問 正解。得意を足場にできます。`,
    });
  }

  cards.push(getLevelAdviceCard(stageTotal, stageAccuracy));
  return cards.slice(0, 4);
}

function renderAdviceCard(card) {
  return `
    <article class="advice-card ${card.tone}">
      <span>${escapeHtml(card.label)}</span>
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.body)}</p>
      <small>${escapeHtml(card.detail)}</small>
    </article>
  `;
}

function getStageUnitRecords(stats) {
  const config = getSchoolStageConfig();
  return config.subjects.flatMap((subject) =>
    config.grades.flatMap((grade) => {
      const units = config.curriculum[subject.id]?.[grade.id] || [];
      return units.map((unit) => {
        const record = stats.byUnit[getUnitProgressKeyFor(subject.id, grade.id, unit.id)] || { total: 0, correct: 0 };
        const accuracy = record.total ? Math.round((record.correct / record.total) * 100) : 0;
        return { subject, grade, unit, total: record.total || 0, correct: record.correct || 0, accuracy };
      });
    })
  );
}

function getStrongSubjectRecord(stats) {
  return getSubjects()
    .map((subject) => {
      const prefix = getSubjectProgressPrefix(subject.id);
      const totals = Object.entries(stats.byUnit)
        .filter(([key]) => key.startsWith(prefix))
        .reduce(
          (acc, [, record]) => {
            acc.total += record.total || 0;
            acc.correct += record.correct || 0;
            return acc;
          },
          { total: 0, correct: 0 }
        );
      const accuracy = totals.total ? Math.round((totals.correct / totals.total) * 100) : 0;
      return { subject, ...totals, accuracy };
    })
    .filter((record) => record.total > 0)
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)[0];
}

function getWeakKindAdvice(stats) {
  const record = Object.entries(stats.byKind)
    .filter(([kind, value]) => isKindForCurrentStage(kind) && (value.total || 0) >= 2 && (value.wrong || 0) > 0)
    .map(([kind, value]) => ({
      kind,
      total: value.total || 0,
      wrong: value.wrong || 0,
      wrongRate: (value.wrong || 0) / Math.max(1, value.total || 0),
      meta: getKindAdviceMeta(kind),
    }))
    .sort((a, b) => b.wrongRate - a.wrongRate || b.wrong - a.wrong)[0];
  if (!record || record.wrongRate < 0.34) return null;
  return {
    tone: "weak",
    label: "問題形式",
    title: `${record.meta.label}をもう少し練習しましょう`,
    body: record.meta.body,
    detail: `${record.total}問中${record.wrong}問を復習対象にしています。`,
  };
}

function isKindForCurrentStage(kind) {
  const isElementaryKind = kind.includes("elementary") || /^p\d-/.test(kind);
  return state.schoolStage === "elementary" ? isElementaryKind : !isElementaryKind;
}

function getKindAdviceMeta(kind) {
  const normalized = kind.toLowerCase();
  if (normalized.includes("fraction")) {
    return { label: "分数の計算", body: "通分・約分・逆数のどこで止まるかを確認しましょう。途中式を1行ずつ書くと、符号や分母の見落としが減ります。" };
  }
  if (normalized.includes("vocab") || normalized.includes("english")) {
    return { label: "英語の単語・表現", body: "英単語をもっと覚えよう。見るだけでなく、日本語から英語を書く練習を1日5語ずつ入れると定着しやすくなります。" };
  }
  if (normalized.includes("kanji") || normalized.includes("japanese")) {
    return { label: "漢字・語句", body: "読み、意味、使い方をセットで確認しましょう。間違えた語は短い文にして書くと覚えやすくなります。" };
  }
  if (normalized.includes("equation") || normalized.includes("systems") || normalized.includes("quadratic")) {
    return { label: "方程式", body: "移項した後の符号を声に出して確認しましょう。解いたあとに代入して確かめる習慣をつけると安定します。" };
  }
  if (normalized.includes("geometry") || normalized.includes("shape") || normalized.includes("area") || normalized.includes("volume")) {
    return { label: "図形", body: "公式を使う前に、図に分かっている長さや角度を書き込みましょう。単位も最後に確認すると点が落ちにくくなります。" };
  }
  if (normalized.includes("probability") || normalized.includes("data") || normalized.includes("average")) {
    return { label: "データ・確率", body: "全体の数と求めたい数を分けて書きましょう。平均は合計、確率は全体の場合の数から確認すると整理できます。" };
  }
  if (normalized.includes("science")) {
    return { label: "理科の用語", body: "用語だけでなく、何を観察したときの言葉かを一緒に思い出しましょう。図や実験の場面と結びつけると強くなります。" };
  }
  if (normalized.includes("social")) {
    return { label: "社会の用語", body: "地名・人物・制度は、時代や場所と一緒に覚えると混乱しにくくなります。短い説明を自分で言えるか確認しましょう。" };
  }
  return { label: "よく間違える形式", body: "間違えた問題をすぐ解き直し、どこで迷ったかを一言メモに残すと次の正解につながります。" };
}

function getUnitPracticeAdvice(record) {
  const subjectId = record.subject.id;
  const unitId = record.unit.id;
  if (subjectId === "math" && unitId.includes("fraction")) return "分数の計算が苦手なようですね。まず約分だけ、次に通分だけ、最後に計算全体という順に分けると進みやすいです。";
  if (subjectId === "math" && (unitId.includes("ratio") || unitId.includes("average"))) return "割合・比は、全体を何と見るかが大事です。問題文の数に線を引き、もとにする量を先に決めましょう。";
  if (subjectId === "english") return "英語は単語と短い文を声に出す回数が効きます。間違えた語を3回書き、最後に何も見ずに1回書きましょう。";
  if (subjectId === "japanese") return "国語は言葉の意味を自分の文で言えるかが鍵です。漢字は読み、意味、例文をセットで復習しましょう。";
  if (subjectId === "science") return "理科は用語と実験・観察の場面を結びつけると覚えやすくなります。図を見ながら一問一答で確認しましょう。";
  if (subjectId === "social") return "社会は場所・時代・理由を一緒に覚えると強くなります。用語だけでなく、なぜそうなったかを一言で言ってみましょう。";
  return "同じ単元を短いセットでくり返しましょう。正解した問題も、翌日にもう一度解くと定着しやすくなります。";
}

function getLevelAdviceCard(stageTotal, stageAccuracy) {
  const level = levels.find((item) => item.id === state.level) || levels[0];
  if (stageTotal === 0) {
    return {
      tone: "level",
      label: level.name,
      title: `${level.name}レベルの始め方`,
      body: "最初は問題を見て、分からない言葉や式だけをメモしましょう。答え合わせ後に同じ型をもう一度解くと学習が残ります。",
      detail: "今日の1セット目は5問で十分です。",
    };
  }
  if (state.level === "basic") {
    return {
      tone: "level",
      label: "基礎",
      title: "基礎は正確さを固める段階です",
      body: stageAccuracy >= 85 ? "基礎はかなり安定しています。次は標準で同じ単元を5問試すと、理解の深さを確認できます。" : "基礎では速さよりも、なぜその答えになるかを一言で説明する練習を入れましょう。",
      detail: `現在の${getSchoolStageConfig().name}コース正答率は${stageAccuracy}%です。`,
    };
  }
  if (state.level === "standard") {
    return {
      tone: "level",
      label: "標準",
      title: "標準は解き方を言葉にする段階です",
      body: stageAccuracy >= 80 ? "標準が安定してきました。発展へ進む前に、間違えた形式だけ基礎へ戻して穴を埋めましょう。" : "標準で迷う問題は、基礎の考え方を使う場所が隠れています。途中式や根拠をメモしてから答えましょう。",
      detail: `現在の${getSchoolStageConfig().name}コース正答率は${stageAccuracy}%です。`,
    };
  }
  return {
    tone: "level",
    label: "発展",
    title: "発展は条件整理が勝負です",
    body: stageAccuracy >= 70 ? "発展でも粘れています。解けた問題は、別の解き方や理由の説明までできるとさらに伸びます。" : "発展で詰まるときは、同じ単元の標準を5問だけ挟みましょう。条件を表や式に分けると突破口が見えます。",
    detail: `現在の${getSchoolStageConfig().name}コース正答率は${stageAccuracy}%です。`,
  };
}

function renderSubjectRadar(records) {
  const center = 75;
  const radius = 54;
  const pointAt = (index, scale = 1) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / records.length;
    return [center + Math.cos(angle) * radius * scale, center + Math.sin(angle) * radius * scale];
  };
  const polygon = (scale) => records.map((_, index) => pointAt(index, scale).map((value) => formatNumber(value)).join(",")).join(" ");
  const dataPoints = records
    .map((record, index) => pointAt(index, record.accuracy / 100).map((value) => formatNumber(value)).join(","))
    .join(" ");
  const axes = records
    .map((record, index) => {
      const [x, y] = pointAt(index, 1);
      const [labelX, labelY] = pointAt(index, 1.18);
      return `<line x1="${center}" y1="${center}" x2="${formatNumber(x)}" y2="${formatNumber(y)}"></line><text x="${formatNumber(labelX)}" y="${formatNumber(labelY)}">${escapeHtml(record.subject.name.slice(0, 2))}</text>`;
    })
    .join("");
  return `
    <svg viewBox="0 0 150 150" role="img" aria-label="教科別理解度レーダー">
      <g class="radar-grid">
        <polygon points="${polygon(0.33)}"></polygon>
        <polygon points="${polygon(0.66)}"></polygon>
        <polygon points="${polygon(1)}"></polygon>
        ${axes}
      </g>
      <polygon class="radar-score" points="${dataPoints}"></polygon>
    </svg>
  `;
}

function updateProgress() {
  const limit = getQuestionLimit();
  els.progressText.textContent = `${state.questionNumber} / ${limit}`;
  els.progressFill.style.width = `${(state.questionNumber / limit) * 100}%`;
}

function getQuestionLimit() {
  const raw = Number(els.questionCount.value) || 5;
  return clamp(Math.round(raw / 5) * 5, 5, 100);
}

function restartSession() {
  unlockAudio();
  playSound("restart");
  resetSession();
  state.questionNumber = 1;
  state.history = [];
  newQuestion(true);
  renderHistory();
}

function resetStats() {
  const student = getActiveStudent();
  if (!student) {
    els.feedback.className = "feedback wrong";
    els.feedback.textContent = "記録をリセットする生徒を選んでください。";
    return;
  }
  if (!window.confirm(`${student.name} の学習記録をリセットしますか？`)) return;

  state.stats = defaultStats();
  student.stats = state.stats;
  saveStats();
  renderStats();
  state.history = [];
  renderHistory();
  renderStudentPanel();
  renderResults();
}

function getCurrentUnit() {
  const units = getAvailableUnits();
  if (state.unitId === "all") return pick(units);
  return units.find((unit) => unit.id === state.unitId) || units[0];
}

function getCurrentUnitDisplayName() {
  return state.unitId === "all" ? "全単元" : getCurrentUnit()?.name || "選択単元";
}

function getActiveStudent() {
  return state.roster.students.find((student) => student.id === state.activeStudentId);
}

function getAvailableUnits() {
  return getCurriculum()[state.subject]?.[state.grade] || [];
}

function getCurrentSubject() {
  return getSubjects().find((subject) => subject.id === state.subject) || getSubjects()[0];
}

function getSubjectName(subjectId) {
  return getSubjects().find((subject) => subject.id === subjectId)?.name || subjects.find((subject) => subject.id === subjectId)?.name || subjectId;
}

function getCurrentGrade() {
  return getGrades().find((grade) => grade.id === state.grade) || getGrades()[0];
}

function getUnitProgressKey(unitId) {
  return getUnitProgressKeyFor(state.subject, state.grade, unitId);
}

function getUnitProgressKeyFor(subjectId, gradeId, unitId) {
  return `${getProgressStagePrefix()}${subjectId}:${gradeId}:${unitId}`;
}

function getProgressStagePrefix() {
  return state.schoolStage === "elementary" ? "elementary:" : "";
}

function getSubjectProgressPrefix(subjectId) {
  return `${getProgressStagePrefix()}${subjectId}:`;
}

function getMistakeWeights(unitId) {
  if (!els.mistakeMode.checked) return null;
  const prefix = `${unitId}:`;
  return Object.entries(state.stats.byKind)
    .filter(([kind, record]) => kind.startsWith(prefix) && record.wrong > 0)
    .map(([kind, record]) => ({ kind, weight: record.wrong / Math.max(1, record.total) + record.wrong }));
}

function getRosterStorageKey(stageId = state?.schoolStage || "junior") {
  return stageId === "elementary" ? ELEMENTARY_ROSTER_KEY : ROSTER_KEY;
}

function loadRoster(stageId = "junior") {
  try {
    const saved = JSON.parse(localStorage.getItem(getRosterStorageKey(stageId)) || "null");
    if (saved?.students?.length) {
      const students = saved.students.slice(0, STUDENT_LIMIT).map((student) => ({
        id: student.id || `student-${Math.random().toString(16).slice(2)}`,
        name: String(student.name || "生徒").slice(0, 16),
        stats: normalizeStats(student.stats),
      }));
      const activeId = students.some((student) => student.id === saved.activeId) ? saved.activeId : students[0].id;
      return { activeId, students };
    }

    if (stageId === "elementary") return { activeId: null, students: [] };
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STATS_KEY) || "null");
    if (legacy?.total) {
      const id = `student-${Date.now()}`;
      return {
        activeId: id,
        students: [{ id, name: "生徒1", stats: normalizeStats(legacy) }],
      };
    }
  } catch {
    return { activeId: null, students: [] };
  }
  return { activeId: null, students: [] };
}

function saveStats() {
  const student = getActiveStudent();
  if (student) student.stats = state.stats;
  saveRoster();
}

function saveRoster() {
  try {
    localStorage.setItem(getRosterStorageKey(), JSON.stringify(state.roster));
  } catch {
    // File access or strict browser settings can disable localStorage.
  }
}

function loadSoundSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SOUND_SETTINGS_KEY) || "null");
    if (!saved || typeof saved !== "object") return { ...DEFAULT_SOUND_SETTINGS };
    return SOUND_EVENTS.reduce((settings, event) => {
      const value = saved[event.id];
      settings[event.id] = SOUND_LIBRARY.some((sound) => sound.id === value)
        ? value
        : DEFAULT_SOUND_SETTINGS[event.id];
      return settings;
    }, {});
  } catch {
    return { ...DEFAULT_SOUND_SETTINGS };
  }
}

function saveSoundSettings() {
  try {
    localStorage.setItem(SOUND_SETTINGS_KEY, JSON.stringify(state.soundSettings));
  } catch {
    // File access or strict browser settings can disable localStorage.
  }
}

function loadMobileSimpleMode() {
  try {
    const saved = localStorage.getItem(MOBILE_SIMPLE_KEY);
    return saved === null ? true : saved === "true";
  } catch {
    return true;
  }
}

function saveMobileSimpleMode() {
  try {
    localStorage.setItem(MOBILE_SIMPLE_KEY, String(state.mobileSimpleMode));
  } catch {
    // Keep the default setting when storage is unavailable.
  }
}

function loadSchoolStage() {
  try {
    const saved = localStorage.getItem(SCHOOL_STAGE_KEY);
    return schoolStages[saved] ? saved : "junior";
  } catch {
    return "junior";
  }
}

function saveSchoolStage() {
  try {
    localStorage.setItem(SCHOOL_STAGE_KEY, state.schoolStage);
  } catch {
    // Keep the in-memory setting when storage is unavailable.
  }
}

function normalizeStats(stats = {}) {
  const todayKey = todayString();
  const normalized = {
    ...defaultStats(),
    ...stats,
    byKind: stats.byKind || {},
    byUnit: stats.byUnit || {},
    history: Array.isArray(stats.history) ? stats.history.slice(0, 8) : [],
  };
  if (normalized.todayKey !== todayKey) {
    normalized.today = 0;
    normalized.todayKey = todayKey;
  }
  return normalized;
}

function cloneStats(stats) {
  return normalizeStats(JSON.parse(JSON.stringify(stats || defaultStats())));
}

function defaultStats() {
  return {
    total: 0,
    correct: 0,
    streak: 0,
    today: 0,
    todayKey: todayString(),
    byKind: {},
    byUnit: {},
    history: [],
    lastStudiedAt: "",
  };
}

function defaultSession() {
  return {
    total: 0,
    correct: 0,
    wrong: 0,
    startedAt: "",
    completed: false,
  };
}

function todayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function elementaryMathUnit(id, name, mark, skills, grade) {
  return {
    id,
    name,
    mark,
    color: pickElementaryColor(id),
    skills,
    generator: (level, weights) => generateElementaryMathProblem(id, grade, level, weights),
  };
}

function elementaryKnowledgeUnit(subjectId, id, name, mark, skills) {
  return {
    id,
    name,
    mark,
    color: pickElementaryColor(id),
    skills,
    generator: (level, weights) => generateElementaryKnowledgeProblem(subjectId, id, level, weights),
  };
}

function pickElementaryColor(id) {
  if (id.includes("math") || id.includes("add") || id.includes("fraction") || id.includes("ratio")) return "#287783";
  if (id.includes("japanese")) return "#315e9f";
  if (id.includes("science")) return "#27745d";
  if (id.includes("social")) return "#bc7917";
  if (id.includes("english")) return "#7861b8";
  return "#315e9f";
}

function generateElementaryMathProblem(unitId, grade, level) {
  if (unitId.includes("shapes")) return generateElementaryShapeProblem(level);
  if (unitId.includes("multiplication")) return generateElementaryMultiplicationProblem(Number(grade), level);
  if (unitId.includes("division")) return generateElementaryDivisionProblem(Number(grade), level);
  if (unitId.includes("fractions")) return generateElementaryFractionProblem(Number(grade), level);
  if (unitId.includes("decimals")) return generateElementaryDecimalProblem(Number(grade), level);
  if (unitId.includes("length")) return generateElementaryMeasureProblem(level);
  if (unitId.includes("area")) return generateElementaryAreaProblem(level);
  if (unitId.includes("average")) return generateElementaryAverageProblem(level);
  if (unitId.includes("ratio")) return generateElementaryRatioProblem(level);
  if (unitId.includes("volume")) return generateElementaryVolumeProblem(level);
  return generateElementaryAddSubProblem(Number(grade), level);
}

function generateElementaryEntranceMathProblem(unitId, grade = 6) {
  const gradeNumber = Number(grade) || 6;
  const lowerPool = ["pattern", "age", "geometry-area", "cases"];
  const middlePool = ["tsurukame", "pattern", "age", "work", "geometry-area", "fraction-trick"];
  const upperPool = unitId.includes("ratio")
    ? ["tsurukame", "ratio-difference", "speed", "work", "water-tank"]
    : unitId.includes("volume") || unitId.includes("area")
      ? ["geometry-area", "water-tank", "cases", "ratio-difference"]
      : unitId.includes("fractions")
        ? ["ratio-difference", "speed", "fraction-trick", "work"]
        : ["tsurukame", "speed", "cases", "geometry-area", "pattern", "work", "water-tank", "age"];
  const pool = gradeNumber <= 2 ? lowerPool : gradeNumber <= 4 ? middlePool : upperPool;
  const pattern = pick(pool);

  if (pattern === "tsurukame") return generateEntranceTsurukameProblem();
  if (pattern === "speed") return generateEntranceSpeedProblem();
  if (pattern === "cases") return generateEntranceCasesProblem();
  if (pattern === "geometry-area") return generateEntranceGeometryAreaProblem();
  if (pattern === "fraction-trick") return generateEntranceFractionTrickProblem();
  if (pattern === "pattern") return generateEntrancePatternProblem(gradeNumber);
  if (pattern === "work") return generateEntranceWorkProblem();
  if (pattern === "water-tank") return generateEntranceWaterTankProblem();
  if (pattern === "age") return generateEntranceAgeProblem();
  return generateEntranceRatioDifferenceProblem();
}

function generateEntranceTsurukameProblem() {
  const turtles = randInt(3, 14);
  const cranes = randInt(4, 18);
  const total = turtles + cranes;
  const legs = turtles * 4 + cranes * 2;
  return {
    kind: "elementary-expert:tsurukame",
    title: "中学受験 お受験",
    skill: "つるかめ算",
    text: `つるとかめが合わせて <span class="math">${total}</span> 匹います。足の数は全部で <span class="math">${legs}</span> 本です。かめは何匹ですか。`,
    hint: "全部をつると考えたとき、足が2本ずつ増える分に注目します。",
    answerType: "single",
    answerLabel: "かめの数",
    displayAnswer: `${turtles}匹`,
    visual: { type: "english", heading: "つるかめ算", lines: [`合計 ${total}匹`, `足 ${legs}本`, "差に注目"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/匹/g, ""), turtles),
    explain: `全部つるなら足は ${total * 2} 本。差は ${legs - total * 2} 本で、かめ1匹につき2本増えるので ${turtles} 匹です。`,
  };
}

function generateEntranceRatioDifferenceProblem() {
  const a = randInt(2, 5);
  const b = randInt(a + 1, 9);
  const unit = randInt(4, 18);
  const difference = (b - a) * unit;
  const total = (a + b) * unit;
  return {
    kind: "elementary-expert:ratio-difference",
    title: "中学受験 お受験",
    skill: "割合と比",
    text: `AとBの人数の比は <span class="math">${a}:${b}</span> で、BはAより <span class="math">${difference}</span> 人多いです。AとBを合わせると何人ですか。`,
    hint: "比の差が実際の差にあたります。1つ分を先に求めます。",
    answerType: "single",
    answerLabel: "合計人数",
    displayAnswer: `${total}人`,
    visual: { type: "english", heading: "比の差", lines: [`差 ${b - a}つ分`, `${difference}人`, "合計"] },
    check: (input) => numericEquals(stripUnit(input.value), total),
    explain: `比の差 ${b - a} が ${difference} 人なので、1つ分は ${unit} 人。合計は ${a + b}つ分で ${total} 人です。`,
  };
}

function generateEntranceSpeedProblem() {
  const speedA = pick([45, 50, 60, 72, 80]);
  const speedB = pick([30, 40, 48, 54, 60].filter((value) => value !== speedA));
  const time = randInt(4, 15);
  const distance = (speedA + speedB) * time;
  return {
    kind: "elementary-expert:speed-meet",
    title: "中学受験 お受験",
    skill: "速さ",
    text: `池のまわりの道を、Aさんは分速 <span class="math">${speedA}m</span>、Bさんは分速 <span class="math">${speedB}m</span> で反対向きに歩きます。2人が同時に同じ場所を出発し、道の長さが <span class="math">${distance}m</span> のとき、何分後に出会いますか。`,
    hint: "反対向きに進むので、2人の速さを足して考えます。",
    answerType: "single",
    answerLabel: "時間",
    displayAnswer: `${time}分`,
    visual: { type: "english", heading: "旅人算", lines: [`${speedA}+${speedB}`, `${distance}m`, "時間"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/分/g, ""), time),
    explain: `${distance}÷(${speedA}+${speedB})=${time} なので、${time}分後です。`,
  };
}

function generateEntranceCasesProblem() {
  const digits = [1, 2, 3, 4, 5, 6].slice(0, randInt(5, 6));
  const evenCount = digits.filter((digit) => digit % 2 === 0).length;
  const answer = evenCount * (digits.length - 1) * (digits.length - 2);
  return {
    kind: "elementary-expert:cases",
    title: "中学受験 お受験",
    skill: "場合の数",
    text: `数字 <span class="math">${digits.join("、")}</span> から異なる3つを選んで3けたの整数を作ります。偶数は全部で何個できますか。`,
    hint: "偶数なので一の位を先に決めます。そのあと百の位、十の位を順に考えます。",
    answerType: "single",
    answerLabel: "個数",
    displayAnswer: `${answer}個`,
    visual: { type: "english", heading: "場合の数", lines: ["一の位", "百の位", "十の位"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `一の位は偶数で ${evenCount} 通り、残りは ${digits.length - 1} 通り、${digits.length - 2} 通りなので ${answer} 個です。`,
  };
}

function generateEntranceGeometryAreaProblem() {
  const width = randInt(10, 24);
  const height = randInt(8, 18);
  const cutWidth = randInt(3, Math.floor(width / 2));
  const cutHeight = randInt(2, Math.floor(height / 2));
  const answer = width * height - cutWidth * cutHeight;
  return {
    kind: "elementary-expert:geometry-area",
    title: "中学受験 お受験",
    skill: "図形の面積",
    text: `たて <span class="math">${height}cm</span>、横 <span class="math">${width}cm</span> の長方形から、たて <span class="math">${cutHeight}cm</span>、横 <span class="math">${cutWidth}cm</span> の長方形を1つ切り取りました。残りの面積を求めなさい。`,
    hint: "全体の面積から、切り取った長方形の面積を引きます。",
    answerType: "single",
    answerLabel: "面積",
    displayAnswer: `${answer}cm²`,
    visual: { type: "english", heading: "面積", lines: ["全体", "切り取り", "差"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${width}×${height}-${cutWidth}×${cutHeight}=${answer} です。`,
  };
}

function generateEntranceFractionTrickProblem() {
  const denominator = randInt(6, 14);
  const numerator = randInt(2, denominator - 2);
  const multiplier = randInt(3, 9);
  const total = denominator * multiplier;
  const used = numerator * multiplier;
  const remaining = total - used;
  return {
    kind: "elementary-expert:fraction-trick",
    title: "中学受験 お受験",
    skill: "分数と割合",
    text: `全体の <span class="math">${formatFraction(makeFraction(numerator, denominator), { html: true })}</span> にあたる量が <span class="math">${used}</span> です。残りの量はいくつですか。`,
    hint: "まず全体を求めてから、使った量を引きます。",
    answerType: "single",
    answerLabel: "残り",
    displayAnswer: String(remaining),
    visual: { type: "english", heading: "分数の逆算", lines: ["全体", "使った量", "残り"] },
    check: (input) => numericEquals(input.value, remaining),
    explain: `全体は ${used}÷${numerator}×${denominator}=${total}、残りは ${total}-${used}=${remaining} です。`,
  };
}

function generateEntrancePatternProblem(grade = 6) {
  const start = randInt(2, 9);
  const diff = grade <= 2 ? randInt(2, 4) : randInt(3, 8);
  const index = grade <= 2 ? randInt(7, 12) : randInt(16, 36);
  const answer = start + diff * (index - 1);
  return {
    kind: "elementary-expert:pattern-sequence",
    title: "中学受験 お受験",
    skill: "規則性",
    text: `数が <span class="math">${start}, ${start + diff}, ${start + diff * 2}, ${start + diff * 3}, ...</span> と同じきまりで続きます。<span class="math">${index}</span> 番目の数を求めなさい。`,
    hint: "となり合う数の差が何ずつ増えるかを見つけ、1番目から何回増えるかを考えます。",
    answerType: "single",
    answerLabel: "数",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "規則性", lines: [`はじめ ${start}`, `差 ${diff}`, `${index}番目`] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `1番目から${index}番目までは ${index - 1} 回増えるので、${start}+${diff}×${index - 1}=${answer} です。`,
  };
}

function generateEntranceWorkProblem() {
  const pairs = [
    [6, 12, 4],
    [10, 15, 6],
    [12, 24, 8],
    [9, 18, 6],
    [8, 24, 6],
  ];
  const [daysA, daysB, answer] = pick(pairs);
  return {
    kind: "elementary-expert:work",
    title: "中学受験 お受験",
    skill: "仕事算",
    text: `Aさんだけなら <span class="math">${daysA}</span> 日、Bさんだけなら <span class="math">${daysB}</span> 日かかる仕事があります。2人で同時に行うと何日で終わりますか。`,
    hint: "1日に進む仕事の量を分数で考えます。",
    answerType: "single",
    answerLabel: "日数",
    displayAnswer: `${answer}日`,
    visual: { type: "english", heading: "仕事算", lines: [`A 1/${daysA}`, `B 1/${daysB}`, "合計"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/日/g, ""), answer),
    explain: `1日に進む量は 1/${daysA}+1/${daysB}=1/${answer} なので、${answer}日で終わります。`,
  };
}

function generateEntranceWaterTankProblem() {
  const fill = pick([18, 24, 30, 36]);
  const drain = pick([4, 6, 8, 10].filter((value) => value < fill));
  const time = randInt(8, 18);
  const water = (fill - drain) * time;
  return {
    kind: "elementary-expert:water-tank",
    title: "中学受験 お受験",
    skill: "水そうとグラフ",
    text: `水そうに水を毎分 <span class="math">${fill}L</span> 入れながら、同時に毎分 <span class="math">${drain}L</span> ずつ水を抜きます。水そうの水が <span class="math">${water}L</span> 増えるのは何分後ですか。`,
    hint: "1分あたりに実際に増える水の量を先に求めます。",
    answerType: "single",
    answerLabel: "時間",
    displayAnswer: `${time}分`,
    visual: { type: "english", heading: "水そう", lines: [`入る ${fill}L/分`, `出る ${drain}L/分`, `${water}L`] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/分/g, ""), time),
    explain: `1分に ${fill}-${drain}=${fill - drain}L 増えるので、${water}÷${fill - drain}=${time}分です。`,
  };
}

function generateEntranceAgeProblem() {
  const child = randInt(6, 14);
  const years = randInt(4, 16);
  const parent = child * 2 + years;
  return {
    kind: "elementary-expert:age",
    title: "中学受験 お受験",
    skill: "年齢算",
    text: `現在、子どもは <span class="math">${child}</span> 才、親は <span class="math">${parent}</span> 才です。親の年齢が子どもの年齢の2倍になるのは何年後ですか。`,
    hint: "何年後かを□年後として、親も子どもも同じだけ年を取ることに注目します。",
    answerType: "single",
    answerLabel: "年後",
    displayAnswer: `${years}年後`,
    visual: { type: "english", heading: "年齢算", lines: [`子 ${child}才`, `親 ${parent}才`, "2倍"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/年後|年/g, ""), years),
    explain: `${years}年後には、子どもは ${child + years}才、親は ${parent + years}才で、${parent + years}=2×${child + years} です。`,
  };
}

function generateElementaryAddSubProblem(grade, level) {
  const max = grade <= 1 ? (level === "basic" ? 10 : 20) : level === "advanced" ? 500 : 100;
  const useThree = level === "advanced";
  const a = randInt(2, max);
  const b = randInt(1, Math.min(max, a + (grade <= 1 ? 8 : 70)));
  const c = useThree ? randInt(1, grade <= 1 ? 9 : 80) : 0;
  const op = b > a || Math.random() > 0.45 ? "+" : "-";
  const answer = op === "+" ? a + b + c : a - b + c;
  const expression = useThree
    ? `${a} ${op} ${b} + ${c}`
    : `${a} ${op} ${b}`;
  return {
    kind: `elementary-math:add-sub`,
    title: "たし算・ひき算",
    skill: "計算",
    text: `<span class="math">${expression}</span> を計算しなさい。`,
    hint: "位をそろえ、くり上がり・くり下がりを確認します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "算数", lines: ["位をそろえる", "順に計算", "答えを確認"] },
    check: (input) => numericEquals(input.value, answer),
    explain: `順に計算すると ${answer} です。`,
  };
}

function generateElementaryShapeProblem(level) {
  const items = level === "advanced"
    ? [
        ["三角形の辺の数を答えなさい。", 3, "三角形には辺が3本あります。"],
        ["四角形の角の数を答えなさい。", 4, "四角形には角が4つあります。"],
        ["正方形の同じ長さの辺は何本ありますか。", 4, "正方形は4本の辺がすべて同じ長さです。"],
      ]
    : [
        ["丸い形を何といいますか。", "円", "丸い形は円です。"],
        ["角が3つある形を何といいますか。", "三角形", "角が3つなら三角形です。"],
        ["角が4つある形を何といいますか。", "四角形", "角が4つなら四角形です。"],
      ];
  const [question, answer, explain] = pick(items);
  return {
    kind: "elementary-math:shape",
    title: "かたちと数",
    skill: "図形",
    text: question,
    hint: "辺や角の数を数えます。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "図形", lines: ["辺", "角", "形の名前"] },
    check: (input) => knowledgeEquals(input.value, [String(answer)]),
    explain,
  };
}

function generateElementaryMultiplicationProblem(grade, level) {
  const left = grade <= 2 ? randInt(2, 9) : randInt(11, level === "advanced" ? 39 : 19);
  const right = grade <= 2 ? randInt(2, 9) : randInt(2, level === "advanced" ? 12 : 9);
  const answer = left * right;
  const isWord = level !== "basic" && Math.random() > 0.45;
  return {
    kind: "elementary-math:multiplication",
    title: "かけ算",
    skill: "九九・筆算",
    text: isWord
      ? `1ふくろに <span class="math">${left}</span> こ入っています。<span class="math">${right}</span> ふくろでは何こですか。`
      : `<span class="math">${left} × ${right}</span> を計算しなさい。`,
    hint: "同じ数を何回分か考えます。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "かけ算", lines: [`${left}ずつ`, `${right}組`, `${answer}`] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/こ|個/g, ""), answer),
    explain: `${left}×${right}=${answer} です。`,
  };
}

function generateElementaryDivisionProblem(grade, level) {
  const divisor = randInt(2, level === "advanced" ? 12 : 9);
  const quotient = randInt(2, grade >= 4 ? 24 : 12);
  const remainder = level === "basic" ? 0 : randInt(0, divisor - 1);
  const total = divisor * quotient + remainder;
  const answer = remainder ? `${quotient}あまり${remainder}` : String(quotient);
  return {
    kind: "elementary-math:division",
    title: "わり算",
    skill: "わり算",
    text: `<span class="math">${total} ÷ ${divisor}</span> を計算しなさい。`,
    hint: "わる数の九九を使い、あまりがわる数より小さいか確認します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: answer,
    visual: { type: "english", heading: "わり算", lines: [`${divisor}の段`, `商 ${quotient}`, remainder ? `あまり ${remainder}` : "わり切れる"] },
    check: (input) => remainder ? divisionRemainderEquals(input.value, quotient, remainder) : numericEquals(input.value, quotient),
    explain: `${divisor}×${quotient}=${divisor * quotient} なので、答えは ${answer} です。`,
  };
}

function generateElementaryFractionProblem(grade, level) {
  if (grade <= 3 || level === "basic") {
    const denominator = randInt(2, 8);
    const unit = randInt(2, 5);
    const total = denominator * unit;
    const numerator = randInt(1, denominator - 1);
    const answer = unit * numerator;
    return {
      kind: "elementary-math:fraction-of",
      title: "分数",
      skill: "分数の意味",
      text: `<span class="math">${total}</span> この ${formatFraction(makeFraction(numerator, denominator), { html: true })} は何こですか。`,
      hint: "まず全体を分母の数で分け、そのいくつ分かを考えます。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: String(answer),
      visual: { type: "english", heading: "分数", lines: [`${total}を${denominator}等分`, `${numerator}つ分`, `${answer}`] },
      check: (input) => numericEquals(stripUnit(input.value).replace(/こ|個/g, ""), answer),
      explain: `${total}÷${denominator}=${unit}、${unit}×${numerator}=${answer} です。`,
    };
  }
  if (grade >= 5 && (level === "advanced" || Math.random() > 0.7)) return generateElementaryFractionWordProblem(grade, level);
  const left = randomFraction(9, false, false);
  const right = randomFraction(9, false, false);
  const pattern = grade >= 6 && level === "advanced" ? pick(["multiply", "divide"]) : pick(["add", "subtract"]);
  const [op, answer] =
    pattern === "multiply"
      ? ["×", multiplyFractions(left, right)]
      : pattern === "divide"
        ? ["÷", divideFractions(left, right)]
        : pattern === "subtract"
          ? ["-", subtractFractions(left, right)]
          : ["+", addFractions(left, right)];
  return {
    kind: `elementary-math:fraction-${pattern}`,
    title: "分数の計算",
    skill: "分数",
    text: `<span class="math">${formatFraction(left, { html: true })} ${op} ${formatFraction(right, { html: true })}</span> を計算しなさい。`,
    hint: "たし算・ひき算は通分、かけ算・わり算は分子と分母の関係を見ます。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatFraction(answer),
    displayAnswerHtml: formatFraction(answer, { html: true }),
    visual: { type: "english", heading: "分数", lines: ["通分", "約分", "答え"] },
    check: (input) => fractionEquals(input.value, fractionToNumber(answer)),
    explain: `約分すると ${formatFraction(answer, { html: true })} です。`,
  };
}

function generateElementaryFractionWordProblem(grade, level) {
  const pattern = level === "advanced" ? pick(["remaining", "recipe", "equivalent"]) : pick(["remaining", "equivalent"]);

  if (pattern === "equivalent") {
    const denominator = randInt(3, grade >= 6 ? 9 : 7);
    const numerator = randInt(1, denominator - 1);
    const multiplier = randInt(2, level === "advanced" ? 8 : 5);
    const targetDenominator = denominator * multiplier;
    const answer = numerator * multiplier;
    return {
      kind: "elementary-math:fraction-equivalent",
      title: "等しい分数",
      skill: "分数の性質",
      text: `<span class="math">${formatFraction(makeFraction(numerator, denominator), { html: true })} = <span class="blank-box">□</span>/${targetDenominator}</span> です。□に入る数を求めなさい。`,
      hint: "分母が何倍になったかを見て、分子も同じ倍にします。",
      answerType: "single",
      answerLabel: "□",
      displayAnswer: String(answer),
      visual: { type: "english", heading: "等しい分数", lines: [`分母 ${denominator}→${targetDenominator}`, `${multiplier}倍`, "分子も同じ"] },
      check: (input) => numericEquals(input.value, answer),
      explain: `${targetDenominator}÷${denominator}=${multiplier} なので、${numerator}×${multiplier}=${answer} です。`,
    };
  }

  if (pattern === "recipe") {
    const one = randomFraction(8, false, false);
    const servings = randInt(3, level === "advanced" ? 9 : 6);
    const answer = multiplyFractions(one, makeFraction(servings, 1));
    return {
      kind: "elementary-math:fraction-recipe",
      title: "分数の文章題",
      skill: "分数のかけ算",
      text: `1人分に <span class="math">${formatFraction(one, { html: true })}L</span> 使う飲み物を <span class="math">${servings}</span> 人分作ります。全部で何L必要ですか。`,
      hint: "1人分の量に人数をかけます。最後に約分します。",
      answerType: "single",
      answerLabel: "量",
      displayAnswer: `${formatFraction(answer)}L`,
      displayAnswerHtml: `${formatFraction(answer, { html: true })}L`,
      visual: { type: "english", heading: "分数×整数", lines: ["1人分", `${servings}人分`, "約分"] },
      check: (input) => fractionEquals(stripUnit(input.value), fractionToNumber(answer)),
      explain: `${formatFraction(one, { html: true })}×${servings}=${formatFraction(answer, { html: true })} です。`,
    };
  }

  const first = randomFraction(8, false, false);
  const second = randomFraction(8, false, false);
  const remaining = randomFraction(8, false, false);
  const answer = addFractions(addFractions(first, second), remaining);
  return {
    kind: "elementary-math:fraction-remaining",
    title: "分数の文章題",
    skill: "分数のたし算",
    text: `テープを <span class="math">${formatFraction(first, { html: true })}m</span> 使い、さらに <span class="math">${formatFraction(second, { html: true })}m</span> 使いました。残りが <span class="math">${formatFraction(remaining, { html: true })}m</span> のとき、はじめの長さは何mですか。`,
    hint: "使った長さと残りの長さをすべてたします。",
    answerType: "single",
    answerLabel: "はじめの長さ",
    displayAnswer: `${formatFraction(answer)}m`,
    displayAnswerHtml: `${formatFraction(answer, { html: true })}m`,
    visual: { type: "english", heading: "分数文章題", lines: ["使った量", "残り", "合計"] },
    check: (input) => fractionEquals(stripUnit(input.value), fractionToNumber(answer)),
    explain: `${formatFraction(first, { html: true })}+${formatFraction(second, { html: true })}+${formatFraction(remaining, { html: true })}=${formatFraction(answer, { html: true })} です。`,
  };
}

function generateElementaryDecimalProblem(grade, level) {
  const scale = level === "advanced" ? 100 : 10;
  const left = randInt(12, 98) / scale;
  const right = randInt(4, 45) / scale;
  const op = pick(["+", "-", "×"]);
  const answer = op === "+" ? left + right : op === "-" ? left - right : left * (grade >= 5 ? right : 10);
  const textRight = op === "×" && grade < 5 ? "10" : formatNumber(right);
  return {
    kind: "elementary-math:decimal",
    title: "小数の計算",
    skill: "小数",
    text: `<span class="math">${formatNumber(left)} ${op} ${textRight}</span> を計算しなさい。`,
    hint: "小数点の位置をそろえて考えます。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatNumber(answer),
    visual: { type: "english", heading: "小数", lines: ["小数点", "位", "答え"] },
    check: (input) => numericEquals(input.value, answer),
    explain: `小数点に気をつけて計算すると ${formatNumber(answer)} です。`,
  };
}

function generateElementaryMeasureProblem(level) {
  const cm = randInt(12, level === "advanced" ? 180 : 90);
  const answer = cm / 100;
  return {
    kind: "elementary-math:measure",
    title: "長さ・かさ",
    skill: "単位",
    text: `<span class="math">${cm}cm</span> は何 m ですか。小数で答えなさい。`,
    hint: "1m は 100cm です。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: `${formatNumber(answer)}m`,
    visual: { type: "english", heading: "単位", lines: ["100cm = 1m", "小数", "確認"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${cm}÷100=${formatNumber(answer)} です。`,
  };
}

function generateElementaryAreaProblem(level) {
  const width = randInt(3, level === "advanced" ? 18 : 12);
  const height = randInt(2, level === "advanced" ? 15 : 10);
  const answer = width * height;
  return {
    kind: "elementary-math:area",
    title: "面積",
    skill: "図形",
    text: `たて <span class="math">${height}cm</span>、横 <span class="math">${width}cm</span> の長方形の面積を求めなさい。`,
    hint: "長方形の面積は、たて×横です。",
    answerType: "single",
    answerLabel: "面積",
    displayAnswer: `${answer}cm²`,
    visual: { type: "english", heading: "面積", lines: [`たて ${height}`, `横 ${width}`, `${answer}`] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${height}×${width}=${answer} です。`,
  };
}

function generateElementaryAverageProblem(level) {
  const values = Array.from({ length: level === "advanced" ? 5 : 4 }, () => randInt(60, 100));
  const total = sum(values);
  const answer = total / values.length;
  if (!Number.isInteger(answer)) return generateElementaryAverageProblem(level);
  return {
    kind: "elementary-math:average",
    title: "平均",
    skill: "平均・割合",
    text: `点数 <span class="math">${values.join("、")}</span> の平均を求めなさい。`,
    hint: "合計を個数で割ります。",
    answerType: "single",
    answerLabel: "平均",
    displayAnswer: String(answer),
    visual: { type: "bars", data: values },
    check: (input) => numericEquals(input.value, answer),
    explain: `合計は ${total}、${values.length}個なので平均は ${answer} です。`,
  };
}

function generateElementaryRatioProblem(level) {
  if (level === "advanced" && Math.random() > 0.45) {
    const speed = pick([40, 50, 60, 80]);
    const time = pick([0.5, 1.5, 2, 2.5]);
    const answer = speed * time;
    return {
      kind: "elementary-math:speed",
      title: "速さ",
      skill: "速さ",
      text: `時速 <span class="math">${speed}km</span> で <span class="math">${time}</span> 時間進むと、道のりは何 km ですか。`,
      hint: "道のり = 速さ × 時間です。",
      answerType: "single",
      answerLabel: "道のり",
      displayAnswer: `${formatNumber(answer)}km`,
      visual: { type: "english", heading: "速さ", lines: ["速さ", "時間", "道のり"] },
      check: (input) => numericEquals(stripUnit(input.value), answer),
      explain: `${speed}×${time}=${formatNumber(answer)} です。`,
    };
  }
  if (level === "advanced" && Math.random() > 0.5) return generateElementaryRatioPercentProblem();
  const a = randInt(2, 5);
  const b = randInt(2, 6, [a]);
  const unit = randInt(3, 12);
  const total = (a + b) * unit;
  const answer = a * unit;
  return {
    kind: "elementary-math:ratio",
    title: "比",
    skill: "比",
    text: `<span class="math">${total}</span> 個を <span class="math">${a}:${b}</span> に分けます。小さいほうの数を求めなさい。`,
    hint: "比の合計を考え、1つ分を求めます。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(Math.min(answer, b * unit)),
    visual: { type: "english", heading: "比", lines: [`${a}+${b}`, "1つ分", "分ける"] },
    check: (input) => numericEquals(input.value, Math.min(answer, b * unit)),
    explain: `${total}÷${a + b}=${unit} なので、小さいほうは ${Math.min(answer, b * unit)} です。`,
  };
}

function generateElementaryRatioPercentProblem() {
  const pattern = pick(["percent", "reverse-speed"]);

  if (pattern === "reverse-speed") {
    const speed = pick([40, 45, 50, 60, 72, 80]);
    const time = pick([0.5, 1.25, 1.5, 2, 2.5]);
    const distance = speed * time;
    const askTime = Math.random() > 0.5;
    const answer = askTime ? time : speed;
    return {
      kind: "elementary-math:speed-reverse",
      title: "速さの逆算",
      skill: "速さ",
      text: askTime
        ? `時速 <span class="math">${speed}km</span> で <span class="math">${formatNumber(distance)}km</span> 進みました。かかった時間は何時間ですか。`
        : `<span class="math">${formatNumber(distance)}km</span> を <span class="math">${time}</span> 時間で進みました。時速は何kmですか。`,
      hint: askTime ? "時間 = 道のり ÷ 速さ です。" : "速さ = 道のり ÷ 時間 です。",
      answerType: "single",
      answerLabel: askTime ? "時間" : "速さ",
      displayAnswer: askTime ? `${formatNumber(answer)}時間` : `時速${formatNumber(answer)}km`,
      visual: { type: "english", heading: "速さ", lines: ["道のり", "速さ", "時間"] },
      check: (input) => numericEquals(stripUnit(input.value).replace(/時速|時間/g, ""), answer),
      explain: askTime ? `${formatNumber(distance)}÷${speed}=${formatNumber(answer)} です。` : `${formatNumber(distance)}÷${time}=${formatNumber(answer)} です。`,
    };
  }

  const total = pick([400, 500, 600, 800, 1000, 1200]);
  const rate = pick([15, 20, 25, 30, 35, 40]);
  const answer = (total * rate) / 100;
  if (!Number.isInteger(answer)) return generateElementaryRatioPercentProblem();
  return {
    kind: "elementary-math:percent",
    title: "割合",
    skill: "割合・百分率",
    text: `<span class="math">${total}</span> 円の <span class="math">${rate}%</span> は何円ですか。`,
    hint: `${rate}% は ${formatFraction(makeFraction(rate, 100), { html: true })} と同じです。`,
    answerType: "single",
    answerLabel: "金額",
    displayAnswer: `${answer}円`,
    visual: { type: "english", heading: "百分率", lines: [`${rate}%`, "100で割る", "かける"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/円/g, ""), answer),
    explain: `${total}×${rate}÷100=${answer} です。`,
  };
}

function generateElementaryVolumeProblem(level) {
  const width = randInt(3, level === "advanced" ? 12 : 8);
  const height = randInt(2, level === "advanced" ? 10 : 7);
  const depth = randInt(2, level === "advanced" ? 9 : 6);
  const answer = width * height * depth;
  return {
    kind: "elementary-math:volume",
    title: "体積",
    skill: "体積",
    text: `たて <span class="math">${height}cm</span>、横 <span class="math">${width}cm</span>、高さ <span class="math">${depth}cm</span> の直方体の体積を求めなさい。`,
    hint: "直方体の体積は、たて×横×高さです。",
    answerType: "single",
    answerLabel: "体積",
    displayAnswer: `${answer}cm³`,
    visual: { type: "english", heading: "体積", lines: [`${height}×${width}`, `×${depth}`, `${answer}`] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${height}×${width}×${depth}=${answer} です。`,
  };
}

function divisionRemainderEquals(raw, quotient, remainder) {
  const normalized = normalizeAnswerText(raw).replace(/\s/g, "");
  if (numericEquals(normalized, quotient) && remainder === 0) return true;
  return new RegExp(`^${quotient}(?:あまり|余り|r)${remainder}$`, "i").test(normalized);
}

const ELEMENTARY_KNOWLEDGE_POOLS = {
  japanese: {
    lower: {
      basic: [
        ["「山」の読みをひらがなで書きなさい。", "やま", ["ヤマ"], "形から意味を思い出します。"],
        ["「川」の読みをひらがなで書きなさい。", "かわ", ["カワ"], "水が流れる場所です。"],
        ["文の終わりにつけるしるしを何といいますか。", "句点", ["くてん", "。"], "「。」の名前です。"],
        ["ものの名前を表す言葉を何といいますか。", "名詞", ["めいし"], "人・もの・ことの名前です。"],
      ],
      standard: [
        ["「明るい」の反対の意味の言葉を書きなさい。", "暗い", ["くらい"], "反対語を考えます。"],
        ["「大きい」の反対の意味の言葉を書きなさい。", "小さい", ["ちいさい"], "反対語を考えます。"],
        ["「走る」のように動きを表す言葉を何といいますか。", "動詞", ["どうし"], "動作を表します。"],
      ],
      advanced: [
        ["文の中で「だれが」にあたる部分を何といいますか。", "主語", ["しゅご"], "文の中心です。"],
        ["文の中で「どうする」にあたる部分を何といいますか。", "述語", ["じゅつご"], "主語の動きや様子です。"],
      ],
    },
    middle: {
      basic: [
        ["同じ意味に近い言葉を何といいますか。", "類義語", ["るいぎご"], "似た意味の言葉です。"],
        ["反対の意味をもつ言葉を何といいますか。", "対義語", ["たいぎご"], "反対語とも言います。"],
        ["文章のまとまりを何といいますか。", "段落", ["だんらく"], "内容のまとまりです。"],
      ],
      standard: [
        ["名詞をくわしく説明する言葉を何といいますか。", "修飾語", ["しゅうしょくご"], "ほかの言葉を詳しくします。"],
        ["話の中心になる考えを何といいますか。", "要点", ["ようてん"], "大事なところです。"],
        ["二つ以上の漢字が結びついた語を何といいますか。", "熟語", ["じゅくご"], "漢字の組み合わせです。"],
      ],
      advanced: [
        ["文章全体で筆者が最も伝えたいことを何といいますか。", "要旨", ["ようし"], "中心となる考えです。"],
        ["理由や例を出して自分の考えを書く文を何といいますか。", "意見文", ["いけんぶん"], "主張と理由をそろえます。"],
      ],
    },
    upper: {
      basic: [
        ["言葉を敬って使う表現を何といいますか。", "敬語", ["けいご"], "相手や場面に合わせます。"],
        ["漢字の音による読みを何といいますか。", "音読み", ["おんよみ"], "中国から伝わった読み方です。"],
        ["漢字の意味による読みを何といいますか。", "訓読み", ["くんよみ"], "日本語の意味に合わせた読みです。"],
      ],
      standard: [
        ["事実にもとづいて理由を整理する文章を何といいますか。", "説明文", ["せつめいぶん"], "順序や理由を読み取ります。"],
        ["文章の組み立てを何といいますか。", "構成", ["こうせい"], "はじめ・中・終わりなどです。"],
        ["同じ読み方で意味が違う語を何といいますか。", "同音異義語", ["どうおんいぎご"], "漢字で意味を区別します。"],
      ],
      advanced: [
        ["主張を支える具体的な出来事や数値を何といいますか。", "根拠", ["こんきょ"], "考えを支える材料です。"],
        ["文章から必要な情報だけを短くまとめることを何といいますか。", "要約", ["ようやく"], "大事な点を残します。"],
      ],
    },
  },
  science: {
    lower: {
      basic: [
        ["春・夏・秋・冬のような一年の区切りを何といいますか。", "季節", ["きせつ"], "一年の変化です。"],
        ["ものをよく見ることを何といいますか。", "観察", ["かんさつ"], "理科の基本です。"],
        ["同じところと違うところを見つけることを何といいますか。", "比較", ["ひかく"], "くらべることです。"],
      ],
      standard: [
        ["植物のからだで水や養分を吸う部分を何といいますか。", "根", ["ね"], "土の中にあります。"],
        ["雨・晴れ・くもりなど空のようすを何といいますか。", "天気", ["てんき"], "毎日変わります。"],
      ],
      advanced: [
        ["同じ特徴をもつものを分けて整理することを何といいますか。", "分類", ["ぶんるい"], "共通点で分けます。"],
        ["生きものが育つ場所を何といいますか。", "すみか", ["住みか"], "くらしている場所です。"],
      ],
    },
    middle: {
      basic: [
        ["植物が日光を受けて養分を作るはたらきを何といいますか。", "光合成", ["こうごうせい"], "葉で行います。"],
        ["音が伝わるときにふるえるものを何といいますか。", "振動", ["しんどう"], "ふるえです。"],
        ["磁石で鉄を引きつける力を何といいますか。", "磁力", ["じりょく"], "磁石の力です。"],
      ],
      standard: [
        ["水が氷になるような状態の変化を何といいますか。", "凝固", ["ぎょうこ"], "液体から固体です。"],
        ["電気の通り道を何といいますか。", "回路", ["かいろ"], "輪のようにつながります。"],
      ],
      advanced: [
        ["あたためられた空気が上に動くことを何といいますか。", "対流", ["たいりゅう"], "空気や水の動きです。"],
        ["太陽・月・星など空に見えるものを何といいますか。", "天体", ["てんたい"], "宇宙にあるものです。"],
      ],
    },
    upper: {
      basic: [
        ["花粉がめしべにつくことを何といいますか。", "受粉", ["じゅふん"], "種子ができる前の過程です。"],
        ["ものが燃えるときに必要な気体を何といいますか。", "酸素", ["さんそ"], "空気中にあります。"],
        ["血液を全身に送り出す器官を何といいますか。", "心臓", ["しんぞう"], "拍動します。"],
      ],
      standard: [
        ["川が土地をけずるはたらきを何といいますか。", "侵食", ["しんしょく"], "流れる水のはたらきです。"],
        ["月の形が日によって変わって見えることを何といいますか。", "満ち欠け", ["みちかけ"], "太陽の光の当たり方です。"],
      ],
      advanced: [
        ["水溶液が酸性かアルカリ性かを調べる紙を何といいますか。", "リトマス紙", ["リトマスし"], "色の変化を見ます。"],
        ["地層ができた順序を考えるときの、下ほど古いという考えを何といいますか。", "重なりの法則", ["かさなりのほうそく"], "地層の基本です。"],
      ],
    },
  },
  social: {
    lower: {
      basic: [
        ["みんなで使う場所を何といいますか。", "公共の場所", ["公共"], "学校や公園などです。"],
        ["道路を安全に歩くためのきまりを何といいますか。", "交通ルール", ["こうつうルール"], "安全のためです。"],
        ["学校のまわりのようすを記号で表したものを何といいますか。", "地図", ["ちず"], "場所を表します。"],
      ],
      standard: [
        ["まちで働く人々の仕事をまとめて何といいますか。", "しごと", ["仕事"], "くらしを支えます。"],
        ["火事や事故から人を守る仕事をするところを何といいますか。", "消防署", ["しょうぼうしょ"], "119番に関係します。"],
      ],
      advanced: [
        ["地域に住む人々のまとまりを何といいますか。", "地域社会", ["ちいきしゃかい"], "まちのつながりです。"],
        ["きまりを守って生活することを何といいますか。", "公共心", ["こうきょうしん"], "みんなのために考えます。"],
      ],
    },
    middle: {
      basic: [
        ["日本を47に分けた地方公共団体を何といいますか。", "都道府県", ["とどうふけん"], "県や府などです。"],
        ["方角を表す東西南北をまとめて何といいますか。", "方位", ["ほうい"], "地図で使います。"],
        ["水を家庭へ送るしくみを何といいますか。", "水道", ["すいどう"], "くらしを支えます。"],
      ],
      standard: [
        ["ものを売り買いする仕事を何といいますか。", "商業", ["しょうぎょう"], "店や流通に関係します。"],
        ["土地の高さを線で表した地図の線を何といいますか。", "等高線", ["とうこうせん"], "地形を読み取ります。"],
      ],
      advanced: [
        ["地域の特色を生かして作られる品物を何といいますか。", "特産品", ["とくさんひん"], "地域の産業です。"],
        ["ごみを減らし資源として使うことを何といいますか。", "リサイクル", ["再利用"], "環境を守ります。"],
      ],
    },
    upper: {
      basic: [
        ["米や野菜を作る産業を何といいますか。", "農業", ["のうぎょう"], "第一次産業です。"],
        ["材料を加工して製品を作る産業を何といいますか。", "工業", ["こうぎょう"], "工場に関係します。"],
        ["日本国憲法の三つの原則の一つで、国民が主役という考えを何といいますか。", "国民主権", ["こくみんしゅけん"], "政治の基本です。"],
      ],
      standard: [
        ["源頼朝が開いた武士の政治を何といいますか。", "鎌倉幕府", ["かまくらばくふ"], "1192年で覚えることがあります。"],
        ["江戸時代に国を閉ざした政策を何といいますか。", "鎖国", ["さこく"], "外国との交流を制限しました。"],
        ["国の政治を行う三つの機関のうち、法律を作る機関を何といいますか。", "国会", ["こっかい"], "立法を担当します。"],
      ],
      advanced: [
        ["税金の使い道を決める国の計画を何といいますか。", "予算", ["よさん"], "国会で審議されます。"],
        ["平和主義・基本的人権の尊重と並ぶ憲法の原則を答えなさい。", "国民主権", ["こくみんしゅけん"], "三大原則です。"],
      ],
    },
  },
  english: {
    lower: {
      basic: [
        ["A の小文字を書きなさい。", "a", ["Ａ"], "大文字と小文字を対応させます。"],
        ["「こんにちは」に近い英語のあいさつを書きなさい。", "hello", ["hi"], "あいさつの言葉です。"],
        ["「赤」を英語で書きなさい。", "red", [], "色の言葉です。"],
      ],
      standard: [
        ["「青」を英語で書きなさい。", "blue", [], "色の言葉です。"],
        ["「1」を英語で書きなさい。", "one", [], "数の言葉です。"],
        ["「ありがとう」を英語で書きなさい。", "thank you", ["thanks"], "お礼の言葉です。"],
      ],
      advanced: [
        ["「またね」に近い英語のあいさつを書きなさい。", "see you", ["goodbye"], "別れる時の表現です。"],
        ["「私は元気です」を英語で書きなさい。", "I am fine.", ["I am fine", "I'm fine"], "I am を使います。"],
      ],
    },
    middle: {
      basic: [
        ["「月曜日」を英語で書きなさい。", "Monday", [], "曜日の言葉です。"],
        ["「晴れ」を英語で書きなさい。", "sunny", [], "天気の言葉です。"],
        ["「犬」を英語で書きなさい。", "dog", [], "身近な動物です。"],
      ],
      standard: [
        ["「私は野球が好きです」を英語で書きなさい。", "I like baseball.", ["I like baseball"], "I like ... を使います。"],
        ["「これは何ですか」を英語で書きなさい。", "What is this?", ["What is this"], "What で始めます。"],
      ],
      advanced: [
        ["「あなたは何色が好きですか」を英語で書きなさい。", "What color do you like?", ["What color do you like"], "do you like を使います。"],
        ["「私はピアノをひけます」を英語で書きなさい。", "I can play the piano.", ["I can play the piano"], "can を使います。"],
      ],
    },
    upper: {
      basic: [
        ["「私はサッカーをします」を英語で書きなさい。", "I play soccer.", ["I play soccer"], "主語のあとに動詞を置きます。"],
        ["「彼は先生です」を英語で書きなさい。", "He is a teacher.", ["He is a teacher"], "He is を使います。"],
        ["「英語」を英語で書きなさい。", "English", [], "教科名です。"],
      ],
      standard: [
        ["「あなたは音楽が好きですか」を英語で書きなさい。", "Do you like music?", ["Do you like music"], "Do you で始めます。"],
        ["「私は昨日公園へ行きました」を英語で書きなさい。", "I went to the park yesterday.", ["I went to the park yesterday"], "過去形 went を使います。"],
      ],
      advanced: [
        ["「私は将来医者になりたい」を英語で書きなさい。", "I want to be a doctor.", ["I want to be a doctor"], "want to を使います。"],
        ["「これは私が好きな本です」を英語で書きなさい。", "This is a book I like.", ["This is the book I like", "This is a book I like"], "中学英語への橋渡しです。"],
      ],
    },
  },
};

function generateElementaryKnowledgeProblem(subjectId, unitId, level) {
  const grade = Number(unitId.match(/^p(\d)/)?.[1] || state.grade || 1);
  const tier = grade <= 2 ? "lower" : grade <= 4 ? "middle" : "upper";
  const pools = ELEMENTARY_KNOWLEDGE_POOLS[subjectId]?.[tier] || ELEMENTARY_KNOWLEDGE_POOLS.japanese.lower;
  const levelItems = [
    ...(pools.basic || []),
    ...(level !== "basic" ? pools.standard || [] : []),
    ...(level === "advanced" ? pools.advanced || [] : []),
  ];
  const [question, answer, aliases = [], hint = "大事な言葉を思い出しましょう。"] = pick(levelItems);
  const unit = Object.values(elementaryCurriculum[subjectId] || {})
    .flat()
    .find((item) => item.id === unitId);
  const skill = pick(unit?.skills || ["確認"]);
  return {
    kind: `${unitId}:elementary-knowledge`,
    identityKey: `${unitId}:elementary|${normalizeJapaneseText(stripTags(question))}|${normalizeJapaneseText(answer)}`,
    title: unit?.name || "小学生問題",
    skill,
    text: formatElementaryKnowledgeQuestion(question, level),
    hint,
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: answer,
    visual: { type: "english", heading: unit?.name || "小学生問題", lines: [getSubjectName(subjectId), skill, "確認"] },
    check: (input) => knowledgeEquals(input.value, [answer, ...aliases]),
    explain: `正解は ${answer} です。${hint}`,
  };
}

function formatElementaryKnowledgeQuestion(question, level) {
  if (level === "advanced") return `チャレンジ問題です。<br><span class="math">${question}</span>`;
  if (level === "standard") return `よく読んで答えなさい。<br><span class="math">${question}</span>`;
  return `<span class="math">${question}</span>`;
}

function generateNumberProblem(level, weights) {
  const kinds =
    level === "basic"
      ? ["integer", "absolute"]
      : level === "standard"
        ? ["expression", "power", "application", "fraction", "challenge"]
        : ["expression", "power", "application", "challenge", "fraction"];
  const kind = pickKind("numbers", kinds, weights, level === "basic" ? [4, 2] : level === "standard" ? [3, 2, 2, 3, 1] : level === "advanced" ? [2, 2, 2, 3, 5] : undefined);
  if (kind === "numbers:challenge") return generateNumberChallengeProblem();
  if (kind === "numbers:fraction") return generateNumberFractionProblem(level);
  if (kind === "numbers:expression") return generateExpressionProblem(level);
  if (kind === "numbers:absolute") return generateAbsoluteProblem(level);
  if (kind === "numbers:power") return generatePowerProblem(level);
  if (kind === "numbers:application") return generateNumberApplicationProblem(level);

  const range = level === "advanced" ? 16 : level === "standard" ? 12 : 9;
  const a = randInt(-range, range, [0]);
  const b = randInt(-range, range, [0]);
  const op = pick(level === "basic" ? ["+", "-"] : ["+", "-", "×"]);
  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  return {
    kind,
    title: "正負の数を計算する",
    skill: "正負の数",
    text: `<span class="math">${formatSigned(a)} ${op} (${formatSigned(b)})</span> を計算しなさい。`,
    hint: "符号を先に見ます。かけ算は符号を決めてから絶対値を計算します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "numberLine", a, b, op, answer },
    check: (input) => numericEquals(input.value, answer),
    explain: `符号を整理すると ${answer} になります。`,
  };
}

function generateNumberFractionProblem(level = "standard") {
  const pattern = pick(
    level === "advanced"
      ? ["add", "subtract", "multiply", "divide", "mixed", "three", "distributive", "nested"]
      : level === "standard"
        ? ["add", "subtract", "multiply", "divide", "mixed", "three"]
        : ["add", "subtract"]
  );

  if (pattern === "three") {
    const first = randomFraction(9, true, true);
    const second = randomFraction(9, true, true);
    const third = randomFraction(9, true, false);
    const sign = pick(["+", "-"]);
    const answer = sign === "+" ? addFractions(addFractions(first, second), third) : subtractFractions(addFractions(first, second), third);
    return {
      kind: "numbers:fraction-three",
      title: "分数を含む3項の計算",
      skill: "正負の数と分数の計算",
      text: `<span class="math">${formatFraction(first, { html: true })} + (${formatFraction(second, { html: true })}) ${sign} (${formatFraction(third, { html: true })})</span> を計算しなさい。`,
      hint: "通分してから、符号に気をつけて分子をまとめます。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: formatFraction(answer),
      displayAnswerHtml: formatFraction(answer, { html: true }),
      visual: { type: "english", heading: "分数3項", lines: ["通分", "符号", "約分"] },
      check: (input) => numericEquals(input.value, fractionToNumber(answer)),
      explain: `通分して整理すると ${formatFraction(answer, { html: true })} です。`,
    };
  }

  if (pattern === "distributive") {
    const factor = randomFraction(8, true, false);
    const left = randomFraction(9, true, false);
    const right = randomFraction(9, true, false);
    const inside = addFractions(left, right);
    const answer = multiplyFractions(factor, inside);
    return {
      kind: "numbers:fraction-distributive",
      title: "分数と分配法則",
      skill: "分数計算の応用",
      text: `<span class="math">${formatFraction(factor, { html: true })} × (${formatFraction(left, { html: true })} + ${formatFraction(right, { html: true })})</span> を計算しなさい。`,
      hint: "かっこの中を先に通分してから、分数のかけ算をします。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: formatFraction(answer),
      displayAnswerHtml: formatFraction(answer, { html: true }),
      visual: { type: "english", heading: "分配法則", lines: ["かっこ", "通分", "約分"] },
      check: (input) => numericEquals(input.value, fractionToNumber(answer)),
      explain: `かっこの中は ${formatFraction(inside, { html: true })}、全体は ${formatFraction(answer, { html: true })} です。`,
    };
  }

  if (pattern === "nested") {
    const first = randomFraction(8, true, true);
    const second = randomFraction(8, true, false);
    const divisor = randomFraction(7, true, false);
    const addend = randomFraction(8, true, false);
    const answer = addFractions(divideFractions(subtractFractions(first, second), divisor), addend);
    return {
      kind: "numbers:fraction-nested",
      title: "分数の混合計算",
      skill: "正負の数の発展",
      text: `<span class="math">(${formatFraction(first, { html: true })} - ${formatFraction(second, { html: true })}) ÷ (${formatFraction(divisor, { html: true })}) + ${formatFraction(addend, { html: true })}</span> を計算しなさい。`,
      hint: "かっこ、わり算、たし算の順に進めます。わり算は逆数をかけます。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: formatFraction(answer),
      displayAnswerHtml: formatFraction(answer, { html: true }),
      visual: { type: "english", heading: "混合計算", lines: ["かっこ", "逆数", "約分"] },
      check: (input) => numericEquals(input.value, fractionToNumber(answer)),
      explain: `順に計算すると ${formatFraction(answer, { html: true })} です。`,
    };
  }

  if (pattern === "mixed") {
    const start = randomFraction(8, true, true);
    const factor = randomFraction(7, true, false);
    const multiplier = randInt(-6, 6, [0, 1, -1]);
    const product = multiplyFractions(factor, makeFraction(multiplier, 1));
    const answer = addFractions(start, product);
    return {
      kind: "numbers:fraction-mixed",
      title: "分数を含む四則計算",
      skill: "正負の数の発展",
      text: `<span class="math">${formatFraction(start, { html: true })} + (${formatFraction(factor, { html: true })}) × (${formatSigned(multiplier)})</span> を計算しなさい。`,
      hint: "先にかけ算をし、最後に通分してたします。答えは 3/4 のような分数で入力できます。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: formatFraction(answer),
      displayAnswerHtml: formatFraction(answer, { html: true }),
      visual: { type: "english", heading: "分数の計算", lines: ["符号", "乗除", "通分"] },
      check: (input) => numericEquals(input.value, fractionToNumber(answer)),
      explain: `乗法を先に計算してから通分すると ${formatFraction(answer, { html: true })} です。`,
    };
  }

  const left = randomFraction(9, true, true);
  const right = randomFraction(9, true, true);
  const operation = {
    add: ["+", addFractions(left, right)],
    subtract: ["-", subtractFractions(left, right)],
    multiply: ["×", multiplyFractions(left, right)],
    divide: ["÷", divideFractions(left, right)],
  }[pattern];
  const [op, answer] = operation;

  return {
    kind: `numbers:fraction-${pattern}`,
    title: "分数を含む正負の数",
    skill: "分数の四則計算",
    text: `<span class="math">${formatFraction(left, { html: true })} ${op} (${formatFraction(right, { html: true })})</span> を計算しなさい。`,
    hint: "符号を決めてから、分母をそろえる・逆数を使うなど、分数のルールで計算します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatFraction(answer),
    displayAnswerHtml: formatFraction(answer, { html: true }),
    visual: { type: "english", heading: "分数", lines: [formatFraction(left), op, formatFraction(right)] },
    check: (input) => numericEquals(input.value, fractionToNumber(answer)),
    explain: `約分して ${formatFraction(answer, { html: true })} です。`,
  };
}

function generateNumberChallengeProblem() {
  const a = randInt(-9, 9, [0]);
  const b = randInt(-8, 8, [0]);
  const c = randInt(-6, 6, [0, 1, -1]);
  const d = randInt(2, 6);
  const answer = (a - b) * c + d ** 2;
  return {
    kind: "numbers:challenge",
    title: "正負の数を組み合わせる",
    skill: "正負の数の応用",
    text: `<span class="math">(${formatSigned(a)} - (${formatSigned(b)})) × (${formatSigned(c)}) + ${d}²</span> を計算しなさい。`,
    hint: "かっこの中、累乗、かけ算、たし算の順で計算します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "計算順序", lines: ["かっこ", "累乗", "乗除・加減"] },
    check: (input) => numericEquals(input.value, answer),
    explain: `${a} - (${b}) = ${a - b}、${a - b}×${c}+${d ** 2}=${answer} です。`,
  };
}

function generateAbsoluteProblem(level) {
  const a = randInt(-14, 14, [0]);
  const b = randInt(-14, 14, [0, a, -a]);
  const asksDifference = level !== "basic" && Math.random() > 0.45;
  const answer = asksDifference ? Math.abs(a) - Math.abs(b) : Math.abs(a);
  return {
    kind: "numbers:absolute",
    title: "絶対値を使う",
    skill: "正負の数",
    text: asksDifference
      ? `<span class="math">|${formatSigned(a)}| - |${formatSigned(b)}|</span> を計算しなさい。`
      : `<span class="math">${formatSigned(a)}</span> の絶対値を求めなさい。`,
    hint: "絶対値は、数直線上で0からどれだけ離れているかを表します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "numberLine", a, b: 0, op: "絶対値", answer: Math.abs(a) },
    check: (input) => numericEquals(input.value, answer),
    explain: asksDifference ? `|${a}|=${Math.abs(a)}、|${b}|=${Math.abs(b)} です。` : `0からの距離は ${Math.abs(a)} です。`,
  };
}

function generatePowerProblem(level) {
  const base = randInt(-6, 6, [0, 1, -1]);
  const exponent = level === "advanced" ? pick([2, 3]) : 2;
  const hasParentheses = Math.random() > 0.35;
  const answer = hasParentheses ? base ** exponent : -(Math.abs(base) ** exponent);
  return {
    kind: "numbers:power",
    title: "累乗を計算する",
    skill: "正負の数",
    text: hasParentheses
      ? `<span class="math">(${formatSigned(base)})${toSuperscript(exponent)}</span> を計算しなさい。`
      : `<span class="math">-${Math.abs(base)}${toSuperscript(exponent)}</span> を計算しなさい。`,
    hint: "かっこがあるかどうかで、マイナスも累乗するかが変わります。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: String(answer),
    visual: { type: "english", heading: "累乗", lines: [hasParentheses ? `(${base})${toSuperscript(exponent)}` : `-${Math.abs(base)}${toSuperscript(exponent)}`, `答え ${answer}`] },
    check: (input) => numericEquals(input.value, answer),
    explain: hasParentheses ? `${base} を ${exponent} 回かけます。` : `かっこがないので、${Math.abs(base)}${toSuperscript(exponent)} を計算してからマイナスを付けます。`,
  };
}

function generateNumberApplicationProblem(level) {
  const start = randInt(-8, 12);
  const first = randInt(-9, 9, [0]);
  const second = randInt(-9, 9, [0]);
  const answer = start + first + second;
  return {
    kind: "numbers:application",
    title: "正負の数を場面で使う",
    skill: "正負の数の利用",
    text: `朝の気温は <span class="math">${start}℃</span> でした。午前に <span class="math">${formatSigned(first)}℃</span>、午後に <span class="math">${formatSigned(second)}℃</span> 変化しました。午後の気温を求めなさい。`,
    hint: "上がる変化はプラス、下がる変化はマイナスとして足します。",
    answerType: "single",
    answerLabel: "気温",
    displayAnswer: `${answer}℃`,
    visual: { type: "numberLine", a: start, b: first + second, op: "変化", answer },
    check: (input) => numericEquals(stripDegree(stripUnit(input.value)), answer),
    explain: `${start} ${formatConst(first, false)} ${formatConst(second, false)} = ${answer} です。`,
  };
}

function generateExpressionProblem(level) {
  const a = randInt(-7, 7, [0]);
  const b = randInt(-9, 9);
  const c = randInt(-7, 7, [0]);
  const d = randInt(-9, 9);
  const sign = pick(["+", "-"]);
  const answerA = sign === "+" ? a + c : a - c;
  const answerB = sign === "+" ? b + d : b - d;
  const right = `${formatTerm(c, "x", true)} ${formatConst(d, false)}`.trim();
  return {
    kind: "numbers:expression",
    title: "文字式をまとめる",
    skill: "文字式",
    text: `<span class="math">(${formatLinear(a, b)}) ${sign} (${right})</span> を <span class="math">ax+b</span> の形にしなさい。`,
    hint: "x の係数どうし、数だけの項どうしを別々にまとめます。",
    answerType: "single",
    answerLabel: "式",
    displayAnswer: formatLinear(answerA, answerB),
    visual: { type: "tiles", a: answerA, b: answerB },
    check: (input) => linearExpressionEquals(input.value, answerA, answerB),
    explain: `x の係数は ${answerA}、定数項は ${answerB} なので ${formatLinear(answerA, answerB)} です。`,
  };
}

function generateEquationProblem(level, weights) {
  if (level === "basic") return generateSimpleEquationProblem();
  const kind = pickKind(
    "equations",
    level === "standard" ? ["linear", "proportion", "parentheses", "fraction", "percent-word"] : ["linear", "proportion", "word", "percent-word", "parentheses", "fraction"],
    weights,
    level === "standard" ? [2, 2, 2, 2, 1] : level === "advanced" ? [1, 1, 2, 4, 3, 5] : undefined
  );
  if (kind === "equations:proportion") return generateProportionEquationProblem(level);
  if (kind === "equations:word") return generateEquationWordProblem(level);
  if (kind === "equations:percent-word") return generateEquationPercentWordProblem(level);
  if (kind === "equations:parentheses") return generateParenthesesEquationProblem();
  if (kind === "equations:fraction") return generateFractionEquationProblem();
  const answer = level === "advanced" ? randInt(-8, 8, [0]) : randInt(-6, 6, [0]);
  const leftA = randInt(2, level === "advanced" ? 9 : 6);
  const rightA = randInt(-5, 5, [leftA, 0]);
  const leftB = randInt(-10, 10);
  const rightB = leftA * answer + leftB - rightA * answer;

  return {
    kind,
    title: "一次方程式を解く",
    skill: "方程式",
    text: `<span class="math">${formatLinear(leftA, leftB)} = ${formatLinear(rightA, rightB)}</span> を解きなさい。`,
    hint: "x を含む項を左辺、数だけの項を右辺に集めます。両辺に同じ操作をしても等式は保たれます。",
    answerType: "single",
    answerLabel: "x の値",
    displayAnswer: `x=${answer}`,
    visual: { type: "balance", leftA, leftB, rightA, rightB },
    check: (input) => numericEquals(input.value.replace(/^x\s*=\s*/i, ""), answer),
    explain: `整理すると ${(leftA - rightA)}x = ${rightB - leftB}、したがって x=${answer} です。`,
  };
}

function generateFractionEquationProblem() {
  const answer = randomFraction(7, true, false);
  const coefficient = randomFraction(7, false, false);
  const constant = randomFraction(8, true, false);
  const right = addFractions(multiplyFractions(coefficient, answer), constant);
  const leftText = `${formatFractionVariableTerm(coefficient, "x", true, { html: true })} ${formatSignedFractionTerm(constant, false, { html: true })}`.trim();

  return {
    kind: "equations:fraction",
    title: "分数係数の一次方程式",
    skill: "一次方程式の発展",
    text: `<span class="math">${leftText} = ${formatFraction(right, { html: true })}</span> を解きなさい。`,
    hint: "分母を払うか、同じ数を両辺にたしてから係数で割ります。答えは分数で入力できます。",
    answerType: "single",
    answerLabel: "x の値",
    displayAnswer: `x=${formatFraction(answer)}`,
    displayAnswerHtml: `x=${formatFraction(answer, { html: true })}`,
    visual: { type: "english", heading: "分数方程式", lines: ["移項", "係数で割る", "約分"] },
    check: (input) => numericEquals(input.value, fractionToNumber(answer)),
    explain: `${formatSignedFractionTerm(constant, true, { html: true })} を移項して、${formatFractionVariableTerm(coefficient, "x", true, { html: true })} の係数で割ると x=${formatFraction(answer, { html: true })} です。`,
  };
}

function generateSimpleEquationProblem() {
  const answer = randInt(1, 9);
  const a = randInt(2, 6);
  const b = randInt(-8, 8, [0]);
  const right = a * answer + b;
  return {
    kind: "equations:simple",
    title: "一次方程式を解く",
    skill: "一次方程式",
    text: `<span class="math">${formatLinear(a, b)} = ${right}</span> を解きなさい。`,
    hint: "まず数だけの項を右辺に移し、最後に x の係数で割ります。",
    answerType: "single",
    answerLabel: "x の値",
    displayAnswer: `x=${answer}`,
    visual: { type: "balance", leftA: a, leftB: b, rightA: 0, rightB: right },
    check: (input) => numericEquals(input.value.replace(/^x\s*=\s*/i, ""), answer),
    explain: `${formatLinear(a, b)}=${right} より ${a}x=${right - b}、x=${answer} です。`,
  };
}

function generateParenthesesEquationProblem() {
  const answer = randInt(-7, 9, [0]);
  const a = randInt(2, 6);
  const b = randInt(-6, 6, [0]);
  const c = randInt(-9, 9, [0]);
  const right = a * (answer + b) + c;
  return {
    kind: "equations:parentheses",
    title: "かっこのある一次方程式",
    skill: "一次方程式の応用",
    text: `<span class="math">${a}(x ${formatConst(b, false)}) ${formatConst(c, false)} = ${right}</span> を解きなさい。`,
    hint: "かっこを展開してから、x の項と数だけの項を整理します。",
    answerType: "single",
    answerLabel: "x の値",
    displayAnswer: `x=${answer}`,
    visual: { type: "balance", leftA: a, leftB: a * b + c, rightA: 0, rightB: right },
    check: (input) => numericEquals(input.value.replace(/^x\s*=\s*/i, ""), answer),
    explain: `${a}x ${formatConst(a * b + c, false)} = ${right} となるので、x=${answer} です。`,
  };
}

function generateProportionEquationProblem(level) {
  const x = randInt(2, level === "advanced" ? 14 : 10);
  const a = randInt(2, 9);
  const b = randInt(2, 9, [a]);
  const c = (a * x) / b;
  if (!Number.isInteger(c)) return generateProportionEquationProblem(level);
  return {
    kind: "equations:proportion",
    title: "比例式を解く",
    skill: "一次方程式",
    text: `<span class="math">${a}:${b} = ${c}:x</span> のとき、<span class="math">x</span> を求めなさい。`,
    hint: "比例式では、内側どうしの積と外側どうしの積が等しくなります。",
    answerType: "single",
    answerLabel: "x の値",
    displayAnswer: `x=${x}`,
    visual: { type: "balance", leftA: a, leftB: b, rightA: c, rightB: x },
    check: (input) => numericEquals(input.value.replace(/^x\s*=\s*/i, ""), x),
    explain: `${a}×x = ${b}×${c} より、x=${x} です。`,
  };
}

function generateEquationWordProblem(level) {
  const price = pick([80, 90, 100, 120, 150]);
  const count = randInt(3, level === "advanced" ? 12 : 9);
  const fee = pick([120, 150, 180, 200]);
  const total = price * count + fee;
  return {
    kind: "equations:word",
    title: "文章題を方程式で解く",
    skill: "一次方程式の利用",
    text: `1個 <span class="math">${price}円</span> の品物をいくつか買い、送料 <span class="math">${fee}円</span> を足すと合計 <span class="math">${total}円</span> でした。買った個数を求めなさい。`,
    hint: "個数を x として、代金 price×x と送料を足した式を作ります。",
    answerType: "single",
    answerLabel: "個数",
    displayAnswer: `${count}個`,
    visual: { type: "balance", leftA: price / 10, leftB: fee / 10, rightA: 0, rightB: total / 10 },
    check: (input) => numericEquals(stripUnit(input.value).replace(/個/g, ""), count),
    explain: `${price}x+${fee}=${total} を解くと x=${count} です。`,
  };
}

function generateEquationPercentWordProblem(level) {
  const pattern = level === "advanced" ? pick(["discount", "increase", "mixed"]) : pick(["discount", "increase"]);

  if (pattern === "mixed") {
    const original = pick([800, 1000, 1200, 1500, 1800, 2400]);
    const discount = pick([10, 20, 25]);
    const point = pick([50, 80, 120, 150]);
    const total = (original * (100 - discount)) / 100 + point;
    if (!Number.isInteger(total)) return generateEquationPercentWordProblem(level);
    return {
      kind: "equations:percent-word",
      title: "割合を使う一次方程式",
      skill: "一次方程式の利用",
      text: `定価 <span class="math">x</span> 円の商品を <span class="math">${discount}%</span> 引きで買い、さらに送料 <span class="math">${point}</span> 円を払うと合計 <span class="math">${total}</span> 円でした。定価を求めなさい。`,
      hint: `${discount}%引きは、定価の ${100 - discount}% を払うという意味です。`,
      answerType: "single",
      answerLabel: "定価",
      displayAnswer: `${original}円`,
      visual: { type: "english", heading: "割合方程式", lines: [`${100 - discount}%`, `+${point}円`, "xを求める"] },
      check: (input) => numericEquals(stripUnit(input.value).replace(/円/g, ""), original),
      explain: `${(100 - discount) / 100}x+${point}=${total} を解くと x=${original} です。`,
    };
  }

  const original = pick(pattern === "discount" ? [900, 1000, 1200, 1500, 1800, 2000] : [600, 800, 1000, 1200, 1500, 2000]);
  const rate = pattern === "discount" ? pick([10, 20, 25, 30, 40]) : pick([5, 10, 15, 20]);
  const total = pattern === "discount" ? (original * (100 - rate)) / 100 : (original * (100 + rate)) / 100;
  if (!Number.isInteger(total)) return generateEquationPercentWordProblem(level);
  return {
    kind: "equations:percent-word",
    title: "割合を使う一次方程式",
    skill: "一次方程式の利用",
    text:
      pattern === "discount"
        ? `定価 <span class="math">x</span> 円の商品を <span class="math">${rate}%</span> 引きで買うと <span class="math">${total}</span> 円でした。定価を求めなさい。`
        : `ある数 <span class="math">x</span> を <span class="math">${rate}%</span> 増やすと <span class="math">${total}</span> になりました。もとの数を求めなさい。`,
    hint: pattern === "discount" ? `${rate}%引きは ${100 - rate}% を払います。` : `${rate}%増しは ${100 + rate}% になります。`,
    answerType: "single",
    answerLabel: pattern === "discount" ? "定価" : "もとの数",
    displayAnswer: pattern === "discount" ? `${original}円` : String(original),
    visual: { type: "english", heading: "割合方程式", lines: [pattern === "discount" ? `${100 - rate}%` : `${100 + rate}%`, "xを決める", "方程式"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/円/g, ""), original),
    explain: pattern === "discount" ? `${(100 - rate) / 100}x=${total} より x=${original} です。` : `${(100 + rate) / 100}x=${total} より x=${original} です。`,
  };
}

function generateGeometryProblem(level, weights) {
  const kind = pickKind(
    "geometry",
    level === "basic" ? ["triangle", "circle"] : level === "standard" ? ["triangle", "prism", "circle"] : ["triangle", "prism", "circle", "composite"],
    weights,
    level === "advanced" ? [1, 2, 2, 3] : undefined
  );
  if (kind === "geometry:composite") return generateCompositeGeometryProblem();
  if (kind === "geometry:prism") return generatePrismProblem(level);
  if (kind === "geometry:circle") return generateCircleProblem(level);

  const a = randInt(35, 75);
  const b = randInt(35, 85);
  const answer = 180 - a - b;
  return {
    kind,
    title: "角の大きさを求める",
    skill: "平面図形",
    text: `三角形の2つの角が <span class="math">${a}°</span> と <span class="math">${b}°</span> のとき、残りの角を求めなさい。`,
    hint: "三角形の内角の和は 180° です。分かっている角を合計してから引きます。",
    answerType: "single",
    answerLabel: "角度",
    displayAnswer: `${answer}°`,
    visual: { type: "triangle", a, b, answer },
    check: (input) => numericEquals(stripDegree(input.value), answer),
    explain: `180 - (${a}+${b}) = ${answer} です。`,
  };
}

function generateCircleProblem(level) {
  const radius = randInt(2, level === "advanced" ? 10 : 7);
  const useSector = level !== "basic" && (level === "advanced" || Math.random() > 0.5);
  const angle = pick([60, 90, 120, 180]);
  const fullArea = 3.14 * radius * radius;
  const answer = useSector ? (fullArea * angle) / 360 : fullArea;
  return {
    kind: "geometry:circle",
    title: useSector ? "おうぎ形の面積" : "円の面積",
    skill: "平面図形",
    text: useSector
      ? `半径 <span class="math">${radius}cm</span>、中心角 <span class="math">${angle}°</span> のおうぎ形の面積を求めなさい。ただし円周率は <span class="math">3.14</span> とします。`
      : `半径 <span class="math">${radius}cm</span> の円の面積を求めなさい。ただし円周率は <span class="math">3.14</span> とします。`,
    hint: useSector ? "円全体の面積を求め、中心角/360 を掛けます。" : "円の面積は 半径×半径×円周率 です。",
    answerType: "single",
    answerLabel: "面積",
    displayAnswer: `${formatNumber(answer)}cm²`,
    visual: { type: "english", heading: useSector ? "おうぎ形" : "円", lines: [`半径 ${radius}cm`, useSector ? `中心角 ${angle}°` : "π=3.14", `面積 ${formatNumber(answer)}`] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: useSector
      ? `${radius}×${radius}×3.14×${angle}/360 = ${formatNumber(answer)} です。`
      : `${radius}×${radius}×3.14 = ${formatNumber(answer)} です。`,
  };
}

function generateCompositeGeometryProblem() {
  const width = randInt(8, 16);
  const height = randInt(6, 12);
  const cut = randInt(2, Math.min(width, height) - 2);
  const answer = width * height - cut * cut;
  return {
    kind: "geometry:composite",
    title: "複合図形の面積",
    skill: "平面図形の応用",
    text: `縦 <span class="math">${height}cm</span>、横 <span class="math">${width}cm</span> の長方形から、1辺 <span class="math">${cut}cm</span> の正方形を切り取ります。残った部分の面積を求めなさい。`,
    hint: "大きい長方形の面積から、切り取った正方形の面積を引きます。",
    answerType: "single",
    answerLabel: "面積",
    displayAnswer: `${answer}cm²`,
    visual: { type: "english", heading: "複合図形", lines: ["全体の面積", "切り取る面積", "差を求める"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${width}×${height}-${cut}×${cut}=${answer} です。`,
  };
}

function generatePrismProblem(level) {
  const width = randInt(3, level === "advanced" ? 10 : 8);
  const depth = randInt(3, level === "advanced" ? 10 : 8);
  const height = randInt(4, level === "advanced" ? 12 : 9);
  const answer = width * depth * height;
  return {
    kind: "geometry:prism",
    title: "空間図形の体積",
    skill: "空間図形",
    text: `縦 <span class="math">${width}cm</span>、横 <span class="math">${depth}cm</span>、高さ <span class="math">${height}cm</span> の直方体の体積を求めなさい。`,
    hint: "直方体の体積は、縦 × 横 × 高さで求めます。単位は cm³ です。",
    answerType: "single",
    answerLabel: "体積",
    displayAnswer: `${answer}cm³`,
    visual: { type: "prism", width, depth, height },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${width} × ${depth} × ${height} = ${answer} です。`,
  };
}

function generateFunctionProblem(level, weights) {
  const kind = pickKind(
    "functions",
    level === "basic" ? ["proportion", "table"] : level === "standard" ? ["proportion", "inverse", "table"] : ["inverse", "table", "application"],
    weights,
    level === "basic" ? [4, 2] : level === "standard" ? [2, 3, 3] : [2, 2, 4]
  );
  if (kind === "functions:application") return generateFunctionApplicationProblem();
  if (kind === "functions:inverse") return generateInverseProblem(level);
  if (kind === "functions:table") return generateProportionTableProblem(level);

  const a = randInt(-5, 6, [0]);
  const x = randInt(-6, 6, [0]);
  const y = a * x;
  const askY = level === "basic" || Math.random() > 0.35;
  return {
    kind,
    title: "比例の式を使う",
    skill: "比例",
    text: askY
      ? `比例 <span class="math">y=${formatCoeff(a)}x</span> で、<span class="math">x=${x}</span> のときの <span class="math">y</span> を求めなさい。`
      : `<span class="math">y=ax</span> で、<span class="math">x=${x}</span> のとき <span class="math">y=${y}</span> です。比例定数 <span class="math">a</span> を求めなさい。`,
    hint: askY ? "比例の式に x の値を代入します。" : "比例では a = y ÷ x です。",
    answerType: "single",
    answerLabel: askY ? "y の値" : "a の値",
    displayAnswer: String(askY ? y : a),
    visual: { type: "graph", mode: "proportion", a, point: [x, y] },
    check: (input) => numericEquals(input.value, askY ? y : a),
    explain: askY ? `${a}×${x} = ${y} です。` : `${y} ÷ ${x} = ${a} です。`,
  };
}

function generateFunctionApplicationProblem() {
  const per = pick([40, 50, 60, 80]);
  const fixed = pick([100, 120, 150, 200]);
  const x = randInt(4, 15);
  const total = fixed + per * x;
  return {
    kind: "functions:application",
    title: "関数を場面で使う",
    skill: "比例・一次式の応用",
    text: `基本料金 <span class="math">${fixed}円</span> に、1回ごと <span class="math">${per}円</span> が加わるサービスがあります。合計が <span class="math">${total}円</span> のとき、何回利用しましたか。`,
    hint: "合計から基本料金を引き、1回ごとの料金で割ります。",
    answerType: "single",
    answerLabel: "回数",
    displayAnswer: `${x}回`,
    visual: { type: "english", heading: "関数の利用", lines: ["合計 - 基本料金", "1回分で割る", "回数を求める"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/回/g, ""), x),
    explain: `(${total}-${fixed})÷${per}=${x} です。`,
  };
}

function generateProportionTableProblem(level) {
  const a = randInt(-5, 6, [0]);
  const x1 = randInt(-5, 5, [0]);
  const x2 = randInt(-6, 6, [0, x1]);
  const askA = level !== "basic" && Math.random() > 0.35;
  const y1 = a * x1;
  const y2 = a * x2;
  return {
    kind: "functions:table",
    title: "比例の表を読む",
    skill: "比例",
    text: askA
      ? `比例の表で、<span class="math">x=${x1}</span> のとき <span class="math">y=${y1}</span> です。比例定数 <span class="math">a</span> を求めなさい。`
      : `比例 <span class="math">y=${formatCoeff(a)}x</span> の表で、<span class="math">x=${x2}</span> のときの <span class="math">y</span> を求めなさい。`,
    hint: askA ? "比例定数は y÷x で求めます。" : "式に x の値を代入します。",
    answerType: "single",
    answerLabel: askA ? "a の値" : "y の値",
    displayAnswer: String(askA ? a : y2),
    visual: { type: "graph", mode: "proportion", a, point: [askA ? x1 : x2, askA ? y1 : y2] },
    check: (input) => numericEquals(input.value, askA ? a : y2),
    explain: askA ? `${y1}÷${x1}=${a} です。` : `${a}×${x2}=${y2} です。`,
  };
}

function generateInverseProblem(level) {
  const a = pick([12, -12, 18, -18, 24, -24, 30, -30]);
  const divisors = [2, 3, 4, 6].filter((value) => Math.abs(a) % value === 0);
  const x = pick(divisors) * pick([-1, 1]);
  const y = a / x;
  return {
    kind: "functions:inverse",
    title: "反比例の式を使う",
    skill: "反比例",
    text: `反比例 <span class="math">y=${a}/x</span> で、<span class="math">x=${x}</span> のときの <span class="math">y</span> を求めなさい。`,
    hint: "反比例では x と y の積が一定です。式の x に値を代入します。",
    answerType: "single",
    answerLabel: "y の値",
    displayAnswer: String(y),
    visual: { type: "graph", mode: "inverse", a, point: [x, y] },
    check: (input) => numericEquals(input.value, y),
    explain: `${a} ÷ ${x} = ${y} です。`,
  };
}

function generateDataProblem(level, weights) {
  const kind = pickKind(
    "data",
    level === "basic"
      ? ["mean", "range", "median"]
      : level === "standard"
        ? ["mean", "range", "median", "relative", "probability"]
        : ["relative", "probability", "missing"],
    weights
  );
  if (kind === "data:missing") return generateMissingDataProblem();
  if (kind === "data:probability") return generateProbabilityProblem(level);
  if (kind === "data:relative") return generateRelativeFrequencyProblem(level);

  const count = level === "advanced" ? 6 : 5;
  const data = Array.from({ length: count }, () => randInt(2, level === "advanced" ? 18 : 12));
  const sorted = [...data].sort((a, b) => a - b);
  const median = sorted.length % 2 ? sorted[Math.floor(sorted.length / 2)] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  const answer = kind === "data:mean" ? sum(data) / data.length : kind === "data:median" ? median : Math.max(...data) - Math.min(...data);
  const label = kind === "data:mean" ? "平均値" : kind === "data:median" ? "中央値" : "範囲";

  return {
    kind,
    title: `${label}を求める`,
    skill: "データの分布",
    text: `データ <span class="math">${data.join("、")}</span> の ${label} を求めなさい。`,
    hint:
      kind === "data:mean"
        ? "平均値は、合計をデータの個数で割ります。"
        : kind === "data:median"
          ? "中央値は、データを小さい順に並べたときの真ん中の値です。"
          : "範囲は、最大値から最小値を引きます。",
    answerType: "single",
    answerLabel: label,
    displayAnswer: formatNumber(answer),
    visual: { type: "bars", data },
    check: (input) => numericEquals(input.value, answer),
    explain:
      kind === "data:mean"
        ? `合計は ${sum(data)}、個数は ${data.length} なので ${formatNumber(answer)} です。`
        : kind === "data:median"
          ? `小さい順に並べると ${sorted.join("、")} なので、中央値は ${formatNumber(answer)} です。`
        : `最大値 ${Math.max(...data)} から最小値 ${Math.min(...data)} を引きます。`,
  };
}

function generateMissingDataProblem() {
  const known = Array.from({ length: 4 }, () => randInt(5, 18));
  const missing = randInt(5, 18);
  const targetMean = (sum(known) + missing) / (known.length + 1);
  if (!Number.isInteger(targetMean)) return generateMissingDataProblem();
  return {
    kind: "data:missing",
    title: "平均から不足データを求める",
    skill: "データの活用",
    text: `5個のデータの平均値が <span class="math">${targetMean}</span> です。分かっている4個のデータが <span class="math">${known.join("、")}</span> のとき、残り1個の値を求めなさい。`,
    hint: "平均×個数で合計を求め、分かっている値の合計を引きます。",
    answerType: "single",
    answerLabel: "残りの値",
    displayAnswer: String(missing),
    visual: { type: "bars", data: known },
    check: (input) => numericEquals(input.value, missing),
    explain: `${targetMean}×5=${targetMean * 5}、${targetMean * 5}-${sum(known)}=${missing} です。`,
  };
}

function generateRelativeFrequencyProblem(level) {
  const total = randInt(20, level === "advanced" ? 60 : 40);
  const count = randInt(3, Math.floor(total / 2));
  const answer = count / total;
  return {
    kind: "data:relative",
    title: "相対度数を求める",
    skill: "データの分布",
    text: `全体が <span class="math">${total}</span> 人で、ある階級に入る人数が <span class="math">${count}</span> 人でした。この階級の相対度数を小数で求めなさい。`,
    hint: "相対度数は、その階級の度数を全体の度数で割ります。",
    answerType: "single",
    answerLabel: "相対度数",
    displayAnswer: formatNumber(answer),
    visual: { type: "bars", data: [count, total - count] },
    check: (input) => numericEquals(input.value, answer),
    explain: `${count}÷${total}=${formatNumber(answer)} です。`,
  };
}

function generateProbabilityProblem(level) {
  const red = randInt(2, level === "advanced" ? 7 : 5);
  const blue = randInt(2, level === "advanced" ? 7 : 5);
  const total = red + blue;
  const simplified = simplifyFraction(red, total);
  return {
    kind: "data:probability",
    title: "確率を求める",
    skill: "確率",
    text: `袋に赤玉が <span class="math">${red}</span> 個、青玉が <span class="math">${blue}</span> 個あります。1個取り出すとき、赤玉が出る確率を求めなさい。`,
    hint: "起こりやすさが同様に確からしいとき、確率は 期待する場合の数 ÷ 全体の場合の数 です。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplified,
    visual: { type: "probability", red, blue },
    check: (input) => fractionEquals(input.value, red / total),
    explain: `赤玉は ${red} 個、全体は ${total} 個なので ${simplified} です。`,
  };
}

function generateM2ExpressionProblem(level, weights) {
  const kind = pickKind(
    "m2-expressions",
    level === "basic"
      ? ["monomial", "polynomial"]
      : level === "standard"
        ? ["polynomial", "mixed", "monomial-product", "monomial-division", "fraction-product"]
        : ["mixed", "application", "monomial-product", "monomial-division", "fraction-product", "fraction-division"],
    weights,
    level === "standard" ? [2, 3, 2, 2, 1] : level === "advanced" ? [1, 3, 2, 3, 5, 5] : undefined
  );
  if (kind.endsWith("mixed")) return generateM2ExpressionMixedProblem();
  if (kind.endsWith("application")) return generateM2ExpressionApplicationProblem();
  if (kind.endsWith("fraction-product")) return generateM2FractionMonomialProblem("product");
  if (kind.endsWith("fraction-division")) return generateM2FractionMonomialProblem("division");
  if (kind.endsWith("monomial-product")) return generateM2MonomialProductProblem();
  if (kind.endsWith("monomial-division")) return generateM2MonomialDivisionProblem();
  if (kind.endsWith("monomial")) {
    const a = randInt(2, level === "advanced" ? 9 : 6);
    const b = randInt(2, level === "advanced" ? 8 : 5);
    const answer = a * b;
    return {
      kind,
      title: "単項式の乗法",
      skill: "式の計算",
      text: `<span class="math">${a}x × ${b}x</span> を計算しなさい。`,
      hint: "係数どうし、文字どうしをそれぞれ掛けます。x×x は x² です。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: `${answer}x²`,
      visual: { type: "tiles", a: answer, b: 0 },
      check: (input) => monomialEquals(input.value, answer, { x: 2 }) || termEquals(input.value, answer, "x2"),
      explain: `${a}×${b}=${answer}、x×x=x² なので ${answer}x² です。`,
    };
  }

  const a = randInt(2, 7);
  const b = randInt(-8, 8, [0]);
  const c = randInt(-6, 6, [0]);
  const answerA = a;
  const answerB = a * b + c;
  return {
    kind,
    title: "多項式を整理する",
    skill: "式の計算",
    text: `<span class="math">${a}(x ${formatConst(b, false)}) ${formatConst(c, false)}</span> を <span class="math">ax+b</span> の形にしなさい。`,
    hint: "かっこの前の数を、かっこの中の各項に掛けます。",
    answerType: "single",
    answerLabel: "式",
    displayAnswer: formatLinear(answerA, answerB),
    visual: { type: "tiles", a: answerA, b: answerB },
    check: (input) => linearExpressionEquals(input.value, answerA, answerB),
    explain: `${a}×x と ${a}×${b} を計算し、定数項をまとめると ${formatLinear(answerA, answerB)} です。`,
  };
}

function generateM2FractionMonomialProblem(mode) {
  if (mode === "division") {
    const answer = {
      coefficient: randomFraction(7, true, true),
      powers: { x: randInt(1, 3), y: randInt(0, 2) },
    };
    const divisor = {
      coefficient: randomFraction(6, true, false),
      powers: { x: randInt(0, 2), y: randInt(0, 1) },
    };
    const dividend = multiplyFractionMonomials(answer, divisor);
    return {
      kind: "m2-expressions:fraction-division",
      title: "分数係数の単項式の除法",
      skill: "式の計算の発展",
      text: `<span class="math">${formatFractionMonomial(dividend, { html: true })} ÷ ${formatFractionMonomialFactor(divisor, { html: true })}</span> を計算しなさい。`,
      hint: "係数は分数の割り算、文字は指数を引きます。分数の割り算は逆数を掛けます。",
      answerType: "single",
      answerLabel: "答え",
      displayAnswer: formatFractionMonomial(answer),
      displayAnswerHtml: formatFractionMonomial(answer, { html: true }),
      visual: { type: "english", heading: "分数係数", lines: [formatFractionMonomial(dividend), "÷", formatFractionMonomial(divisor)] },
      check: (input) => monomialEquals(input.value, fractionToNumber(answer.coefficient), answer.powers),
      explain: `係数を約分し、指数を引くと ${formatFractionMonomial(answer, { html: true })} です。`,
    };
  }

  const left = {
    coefficient: randomFraction(7, true, false),
    powers: { x: randInt(1, 2), y: randInt(0, 1) },
  };
  const right = {
    coefficient: randomFraction(6, true, false),
    powers: { x: randInt(0, 2), y: randInt(1, 2) },
  };
  const answer = multiplyFractionMonomials(left, right);
  return {
    kind: "m2-expressions:fraction-product",
    title: "分数係数の単項式の乗法",
    skill: "式の計算の発展",
    text: `<span class="math">${formatFractionMonomialFactor(left, { html: true })} × ${formatFractionMonomialFactor(right, { html: true })}</span> を計算しなさい。`,
    hint: "分子どうし・分母どうしを掛け、同じ文字は指数を足します。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatFractionMonomial(answer),
    displayAnswerHtml: formatFractionMonomial(answer, { html: true }),
    visual: { type: "english", heading: "分数係数", lines: [formatFractionMonomial(left), "×", formatFractionMonomial(right)] },
    check: (input) => monomialEquals(input.value, fractionToNumber(answer.coefficient), answer.powers),
    explain: `係数を掛けて約分し、指数を足すと ${formatFractionMonomial(answer, { html: true })} です。`,
  };
}

function generateM2MonomialProductProblem() {
  const left = {
    coefficient: randInt(-6, 6, [0]),
    powers: { x: randInt(1, 2), y: randInt(0, 2) },
  };
  const right = {
    coefficient: randInt(-5, 5, [0]),
    powers: { x: randInt(0, 2), y: randInt(1, 2) },
  };
  const answer = multiplyMonomials(left, right);
  return {
    kind: "m2-expressions:monomial-product",
    title: "単項式の乗法",
    skill: "単項式",
    text: `<span class="math">${formatMonomialFactor(left)} × ${formatMonomialFactor(right)}</span> を計算しなさい。`,
    hint: "係数は係数どうし、同じ文字は指数を足します。x²×x は x³ になります。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatMonomial(answer),
    visual: { type: "english", heading: "単項式", lines: [formatMonomialFactor(left), "×", formatMonomialFactor(right)] },
    check: (input) => monomialEquals(input.value, answer.coefficient, answer.powers),
    explain: `係数は ${left.coefficient}×${right.coefficient}=${answer.coefficient}、指数を足して ${formatMonomial(answer)} です。`,
  };
}

function generateM2MonomialDivisionProblem() {
  const answer = {
    coefficient: randInt(-8, 8, [0]),
    powers: { x: randInt(1, 3), y: randInt(0, 2) },
  };
  const divisor = {
    coefficient: randInt(2, 6),
    powers: { x: randInt(0, 2), y: randInt(0, 2) },
  };
  const dividend = multiplyMonomials(answer, divisor);
  return {
    kind: "m2-expressions:monomial-division",
    title: "単項式の除法",
    skill: "単項式",
    text: `<span class="math">${formatMonomial(dividend)} ÷ ${formatMonomialFactor(divisor)}</span> を計算しなさい。`,
    hint: "係数は割り算し、同じ文字は指数を引きます。割る式の文字を引き忘れないようにします。",
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: formatMonomial(answer),
    visual: { type: "english", heading: "単項式", lines: [formatMonomial(dividend), "÷", formatMonomialFactor(divisor)] },
    check: (input) => monomialEquals(input.value, answer.coefficient, answer.powers),
    explain: `係数は ${dividend.coefficient}÷${divisor.coefficient}=${answer.coefficient}、指数を引いて ${formatMonomial(answer)} です。`,
  };
}

function generateM2ExpressionMixedProblem() {
  const sign = pick(["+", "-"]);
  const a = randInt(2, 7);
  const b = randInt(-7, 7, [0]);
  const c = sign === "-" ? randInt(2, 6, [a]) : randInt(2, 6);
  const d = randInt(-6, 6, [0]);
  const answerA = sign === "+" ? a + c : a - c;
  const answerB = sign === "+" ? a * b + c * d : a * b - c * d;
  return {
    kind: "m2-expressions:mixed",
    title: "式を展開して整理する",
    skill: "式の計算",
    text: `<span class="math">${a}(x ${formatConst(b, false)}) ${sign} ${c}(x ${formatConst(d, false)})</span> を <span class="math">ax+b</span> の形にしなさい。`,
    hint: "それぞれのかっこを展開してから、x の項と数だけの項をまとめます。",
    answerType: "single",
    answerLabel: "式",
    displayAnswer: formatLinear(answerA, answerB),
    visual: { type: "tiles", a: answerA, b: answerB },
    check: (input) => linearExpressionEquals(input.value, answerA, answerB),
    explain: `x の係数は ${answerA}、定数項は ${answerB} なので ${formatLinear(answerA, answerB)} です。`,
  };
}

function generateM2ExpressionApplicationProblem() {
  const widthA = randInt(1, 4);
  const widthB = randInt(2, 9);
  const heightA = randInt(1, 4);
  const heightB = randInt(2, 9);
  const answerA = 2 * (widthA + heightA);
  const answerB = 2 * (widthB + heightB);
  return {
    kind: "m2-expressions:application",
    title: "文章から式を作る",
    skill: "式の計算",
    text: `縦が <span class="math">${formatLinear(widthA, widthB)}cm</span>、横が <span class="math">${formatLinear(heightA, heightB)}cm</span> の長方形があります。周の長さを <span class="math">ax+b</span> の形で表しなさい。`,
    hint: "長方形の周の長さは 2×(縦+横) です。まず縦と横を足してから2倍します。",
    answerType: "single",
    answerLabel: "式",
    displayAnswer: formatLinear(answerA, answerB),
    visual: { type: "tiles", a: answerA, b: answerB },
    check: (input) => linearExpressionEquals(input.value, answerA, answerB),
    explain: `2×(${formatLinear(widthA + heightA, widthB + heightB)}) = ${formatLinear(answerA, answerB)} です。`,
  };
}

function generateM2SystemProblem(level, weights) {
  const kind = pickKind("m2-systems", level === "advanced" ? ["linear", "word"] : ["linear"], weights, level === "advanced" ? [1, 4] : undefined);
  if (kind.endsWith("word")) return generateM2SystemWordProblem();

  const x = level === "basic" ? randInt(1, 6) : randInt(-7, 8, [0]);
  const y = level === "basic" ? randInt(1, 6) : randInt(-7, 8, [0]);
  const maxCoefficient = level === "basic" ? 3 : level === "standard" ? 6 : 8;
  const a = randInt(1, maxCoefficient);
  const b = randInt(1, maxCoefficient);
  const c = randInt(1, maxCoefficient);
  let d = randInt(1, maxCoefficient);
  while (a * d - b * c === 0) {
    d = randInt(1, 5);
  }
  const e = a * x + b * y;
  const f = c * x + d * y;
  return {
    kind: "m2-systems:linear",
    title: "連立方程式を解く",
    skill: "連立方程式",
    text: `<span class="math">${formatLinearXY(a, b)} = ${e}</span><br><span class="math">${formatLinearXY(c, d)} = ${f}</span> を解きなさい。`,
    hint: "加減法では、一方の文字の係数をそろえて消去します。",
    answerType: "single",
    answerLabel: "x と y の値",
    displayAnswer: `x=${x}, y=${y}`,
    visual: { type: "balance", leftA: a, leftB: b, rightA: c, rightB: d },
    check: (input) => orderedPairTextEquals(input.value, x, y),
    explain: `代入して確かめると、x=${x}, y=${y} が両方の式を満たします。`,
  };
}

function generateM2SystemWordProblem() {
  const applePrice = pick([120, 130, 150, 180]);
  const orangePrice = pick([70, 80, 90, 100, 110].filter((price) => price !== applePrice));
  const x = randInt(2, 8);
  const y = randInt(2, 9);
  const total = x + y;
  const amount = applePrice * x + orangePrice * y;
  return {
    kind: "m2-systems:word",
    title: "文章題を連立方程式にする",
    skill: "連立方程式",
    text: `りんごは1個 <span class="math">${applePrice}円</span>、みかんは1個 <span class="math">${orangePrice}円</span> です。合わせて <span class="math">${total}個</span> 買ったら、代金は <span class="math">${amount}円</span> でした。りんごを <span class="math">x個</span>、みかんを <span class="math">y個</span> とするとき、<span class="math">x</span> と <span class="math">y</span> を求めなさい。`,
    hint: "個数の式 x+y と、代金の式を立てます。2つの条件を同時に満たす値を探します。",
    answerType: "single",
    answerLabel: "x と y の値",
    displayAnswer: `x=${x}, y=${y}`,
    visual: { type: "balance", leftA: applePrice / 10, leftB: orangePrice / 10, rightA: total, rightB: Math.round(amount / 100) },
    check: (input) => orderedPairTextEquals(input.value, x, y),
    explain: `x+y=${total}、${applePrice}x+${orangePrice}y=${amount} を解くと、x=${x}, y=${y} です。`,
  };
}

function generateM2LinearFunctionProblem(level, weights) {
  const kind = pickKind(
    "m2-functions",
    level === "basic" ? ["linear"] : level === "standard" ? ["linear", "two-points"] : ["two-points", "application"],
    weights,
    level === "standard" ? [2, 2] : level === "advanced" ? [3, 4] : undefined
  );
  if (kind.endsWith("two-points")) return generateM2LinearTwoPointProblem();
  if (kind.endsWith("application")) return generateM2LinearApplicationProblem();

  const a = randInt(-5, 5, [0]);
  const b = randInt(-8, 8);
  const x = randInt(-5, 5, [0]);
  const y = a * x + b;
  const askY = level === "basic" || Math.random() > 0.35;
  return {
    kind: "m2-functions:linear",
    title: "一次関数を使う",
    skill: "一次関数",
    text: askY
      ? `一次関数 <span class="math">y=${formatLinear(a, b)}</span> で、<span class="math">x=${x}</span> のときの <span class="math">y</span> を求めなさい。`
      : `一次関数 <span class="math">y=ax+b</span> で、<span class="math">a=${a}</span>、点 <span class="math">(${x}, ${y})</span> を通ります。<span class="math">b</span> を求めなさい。`,
    hint: askY ? "式に x の値を代入します。" : "y=ax+b に x, y, a を代入して b を求めます。",
    answerType: "single",
    answerLabel: askY ? "y の値" : "b の値",
    displayAnswer: String(askY ? y : b),
    visual: { type: "graph", mode: "linear", a, b, point: [x, y] },
    check: (input) => numericEquals(input.value, askY ? y : b),
    explain: askY ? `${a}×${x} ${formatConst(b, false)} = ${y} です。` : `${y}=${a}×${x}+b より b=${b} です。`,
  };
}

function generateM2LinearTwoPointProblem() {
  const a = randInt(-3, 3, [0]);
  const b = randInt(-5, 5);
  const x1 = randInt(-3, 1);
  const x2 = randInt(2, 4);
  const y1 = a * x1 + b;
  const y2 = a * x2 + b;
  return {
    kind: "m2-functions:two-points",
    title: "2点から一次関数を求める",
    skill: "一次関数",
    text: `一次関数 <span class="math">y=ax+b</span> が、2点 <span class="math">(${x1}, ${y1})</span>、<span class="math">(${x2}, ${y2})</span> を通ります。<span class="math">a</span> と <span class="math">b</span> を求めなさい。`,
    hint: "まず変化の割合 a を求めます。その後、どちらかの点を y=ax+b に代入して b を求めます。",
    answerType: "single",
    answerLabel: "一次関数の式",
    displayAnswer: `y=${formatLinear(a, b)}`,
    visual: { type: "graph", mode: "linear", a, b, point: [x1, y1] },
    check: (input) => linearExpressionEquals(input.value, a, b),
    explain: `変化の割合は (${y2}-${y1})÷(${x2}-${x1})=${a}。点を代入すると b=${b} なので y=${formatLinear(a, b)} です。`,
  };
}

function generateM2LinearApplicationProblem() {
  const base = pick([120, 150, 180, 200]);
  const per = pick([30, 40, 50, 60]);
  const x = randInt(4, 12);
  const y = base + per * x;
  return {
    kind: "m2-functions:application",
    title: "一次関数で場面を表す",
    skill: "一次関数",
    text: `基本料金が <span class="math">${base}円</span>、1分ごとに <span class="math">${per}円</span> かかるサービスがあります。利用時間を <span class="math">x分</span>、料金を <span class="math">y円</span> とすると <span class="math">y=${per}x+${base}</span> です。<span class="math">x=${x}</span> のときの <span class="math">y</span> を求めなさい。`,
    hint: "一次関数の式に x の値を代入します。基本料金を最後に足し忘れないようにします。",
    answerType: "single",
    answerLabel: "y の値",
    displayAnswer: String(y),
    visual: { type: "english", heading: "料金モデル", lines: [`基本 ${base}円`, `1分 ${per}円`, `${x}分 → ${y}円`] },
    check: (input) => numericEquals(input.value, y),
    explain: `${per}×${x}+${base}=${y} です。`,
  };
}

function generateM2GeometryProblem(level, weights) {
  const kind = pickKind(
    "m2-geometry",
    level === "basic" ? ["polygon", "parallel"] : level === "standard" ? ["polygon", "parallel", "regular"] : ["parallel", "regular", "exterior"],
    weights,
    level === "standard" ? [1, 2, 2] : level === "advanced" ? [1, 3, 3] : undefined
  );
  if (kind.endsWith("exterior")) return generateM2ExteriorAngleProblem();
  if (kind.endsWith("regular")) return generateM2RegularPolygonProblem();

  if (kind.endsWith("parallel")) {
    const angle = randInt(35, 130);
    return {
      kind,
      title: "平行線と角",
      skill: "図形の性質",
      text: `平行な2直線に1本の直線が交わっています。錯角の一つが <span class="math">${angle}°</span> のとき、対応する錯角を求めなさい。`,
      hint: "平行線では、錯角は等しくなります。",
      answerType: "single",
      answerLabel: "角度",
      displayAnswer: `${angle}°`,
      visual: { type: "triangle", a: angle, b: 60, answer: angle },
      check: (input) => numericEquals(stripDegree(input.value), angle),
      explain: `平行線の錯角は等しいので ${angle}° です。`,
    };
  }

  const n = randInt(5, level === "advanced" ? 9 : 7);
  const answer = (n - 2) * 180;
  return {
    kind,
    title: "多角形の内角の和",
    skill: "図形の性質",
    text: `<span class="math">${n}</span> 角形の内角の和を求めなさい。`,
    hint: "n角形の内角の和は (n-2)×180° です。",
    answerType: "single",
    answerLabel: "内角の和",
    displayAnswer: `${answer}°`,
    visual: { type: "polygon", n, answer },
    check: (input) => numericEquals(stripDegree(input.value), answer),
    explain: `(${n}-2)×180 = ${answer} です。`,
  };
}

function generateM2ExteriorAngleProblem() {
  const n = pick([5, 6, 8, 9, 10, 12]);
  const exterior = 360 / n;
  const interior = 180 - exterior;
  return {
    kind: "m2-geometry:exterior",
    title: "正多角形の外角と内角",
    skill: "図形の性質の応用",
    text: `正 <span class="math">${n}</span> 角形で、1つの外角と1つの内角の和は <span class="math">180°</span> です。1つの内角を求めなさい。`,
    hint: "正多角形の1つの外角は 360°÷角の数です。内角は 180° から外角を引きます。",
    answerType: "single",
    answerLabel: "1つの内角",
    displayAnswer: `${formatNumber(interior)}°`,
    visual: { type: "polygon", n, answer: interior },
    check: (input) => numericEquals(stripDegree(input.value), interior),
    explain: `外角は 360÷${n}=${formatNumber(exterior)}°。内角は 180-${formatNumber(exterior)}=${formatNumber(interior)}° です。`,
  };
}

function generateM2RegularPolygonProblem() {
  const n = pick([5, 6, 8, 9, 10, 12]);
  const answer = ((n - 2) * 180) / n;
  return {
    kind: "m2-geometry:regular",
    title: "正多角形の角を求める",
    skill: "図形の性質",
    text: `正 <span class="math">${n}</span> 角形の1つの内角の大きさを求めなさい。`,
    hint: "まず内角の和を求め、正多角形なので角の数で割ります。",
    answerType: "single",
    answerLabel: "1つの内角",
    displayAnswer: `${formatNumber(answer)}°`,
    visual: { type: "polygon", n, answer },
    check: (input) => numericEquals(stripDegree(input.value), answer),
    explain: `内角の和は (${n}-2)×180=${(n - 2) * 180}。これを ${n} で割ると ${formatNumber(answer)}° です。`,
  };
}

function generateM2ProbabilityProblem(level, weights) {
  const kinds =
    level === "basic"
      ? ["die", "marble", "card"]
      : level === "standard"
        ? ["card", "two-dice-sum", "two-dice-condition"]
        : ["two-dice-sum", "two-dice-condition", "two-dice-difference", "coin-dice", "two-dice-product", "three-coins", "no-replacement"];
  const kind = pickKind("m2-probability", kinds, weights);
  if (kind.endsWith("marble")) return generateM2MarbleProbabilityProblem();
  if (kind.endsWith("card")) return generateM2CardProbabilityProblem(level);
  if (kind.endsWith("two-dice-sum")) return generateM2TwoDiceProbabilityProblem();
  if (kind.endsWith("two-dice-condition")) return generateM2TwoDiceConditionProblem();
  if (kind.endsWith("two-dice-difference")) return generateM2TwoDiceDifferenceProblem();
  if (kind.endsWith("two-dice-product")) return generateM2TwoDiceProductProblem();
  if (kind.endsWith("three-coins")) return generateM2ThreeCoinsProblem();
  if (kind.endsWith("no-replacement")) return generateM2NoReplacementMarbleProblem();
  if (kind.endsWith("coin-dice")) return generateM2CoinDiceProblem();
  return generateM2SingleDieProbabilityProblem(level);
}

function generateM2SingleDieProbabilityProblem(level) {
  const target = randInt(2, 6);
  const total = 6;
  const patterns = [
    { label: `${target}以上`, favorable: 7 - target, explain: `${target}以上の目は ${7 - target} 通りです。` },
    { label: `${target}以下`, favorable: target, explain: `${target}以下の目は ${target} 通りです。` },
    { label: "偶数", favorable: 3, explain: "偶数は2,4,6の3通りです。" },
    { label: "奇数", favorable: 3, explain: "奇数は1,3,5の3通りです。" },
    { label: "素数", favorable: 3, explain: "素数は2,3,5の3通りです。" },
    { label: "3の倍数", favorable: 2, explain: "3の倍数は3,6の2通りです。" },
  ];
  const pattern = pick(level === "basic" ? patterns.slice(0, 4) : patterns);
  const answer = pattern.favorable / total;
  return {
    kind: "m2-probability:die",
    title: "確率を求める",
    skill: "確率",
    text: `1個のさいころを投げます。出た目が <span class="math">${pattern.label}</span> になる確率を求めなさい。`,
    hint: "条件に合う目の数を、全体の6通りで割ります。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(pattern.favorable, total),
    visual: { type: "probability", red: pattern.favorable, blue: total - pattern.favorable },
    check: (input) => fractionEquals(input.value, answer),
    explain: `${pattern.explain} 全体は6通りです。`,
  };
}

function generateM2MarbleProbabilityProblem() {
  const red = randInt(2, 7);
  const blue = randInt(2, 7);
  const white = randInt(1, 5);
  const [color, favorable] = pick([
    ["赤", red],
    ["青", blue],
    ["白", white],
  ]);
  const total = red + blue + white;
  return {
    kind: "m2-probability:marble",
    title: "確率を求める",
    skill: "確率",
    text: `袋の中に赤玉 <span class="math">${red}</span> 個、青玉 <span class="math">${blue}</span> 個、白玉 <span class="math">${white}</span> 個があります。1個取り出すとき、${color}玉である確率を求めなさい。`,
    hint: "ほしい色の玉の数を、玉全体の数で割ります。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `${color}玉は${favorable}個、全体は${total}個なので ${simplifyFraction(favorable, total)} です。`,
  };
}

function generateM2CardProbabilityProblem(level) {
  const max = level === "basic" ? randInt(8, 12) : randInt(10, 20);
  const patterns = [
    { label: "偶数", count: Math.floor(max / 2), explain: "2で割り切れる数を数えます。" },
    { label: "奇数", count: Math.ceil(max / 2), explain: "2で割り切れない数を数えます。" },
    { label: "3の倍数", count: Math.floor(max / 3), explain: "3,6,9,... を数えます。" },
    { label: "5以上", count: Math.max(0, max - 4), explain: "5から最後の数までを数えます。" },
    { label: "素数", count: countPrimes(max), explain: "1は素数ではありません。" },
  ];
  const pattern = pick(level === "basic" ? patterns.slice(0, 4) : patterns);
  return {
    kind: "m2-probability:card",
    title: "確率を求める",
    skill: "確率",
    text: `<span class="math">1</span> から <span class="math">${max}</span> までの数が1つずつ書かれたカードがあります。1枚引くとき、${pattern.label}である確率を求めなさい。`,
    hint: "条件に合うカードの枚数を、カード全体の枚数で割ります。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(pattern.count, max),
    visual: { type: "probability", red: pattern.count, blue: max - pattern.count },
    check: (input) => fractionEquals(input.value, pattern.count / max),
    explain: `${pattern.explain} 条件に合うカードは${pattern.count}枚、全体は${max}枚です。`,
  };
}

function generateM2TwoDiceProbabilityProblem() {
  const target = randInt(3, 11);
  const favorable = countDicePairs((first, second) => first + second === target);
  const total = 36;
  return {
    kind: "m2-probability:two-dice",
    title: "2つのさいころの確率",
    skill: "確率",
    text: `大小2個のさいころを同時に投げます。出た目の和が <span class="math">${target}</span> になる確率を求めなさい。`,
    hint: "大小を区別すると、全体は 6×6=36 通りです。和が目標になる組を数えます。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `和が ${target} になる組は ${favorable} 通り、全体は36通りなので ${simplifyFraction(favorable, total)} です。`,
  };
}

function generateM2TwoDiceConditionProblem() {
  const pattern = pick([
    {
      label: "2つの目が同じになる",
      test: (first, second) => first === second,
      explain: "同じ目は (1,1) から (6,6) までです。",
    },
    {
      label: "少なくとも一方が6になる",
      test: (first, second) => first === 6 || second === 6,
      explain: "片方だけでなく、両方6の場合も含めます。",
    },
    {
      label: "積が偶数になる",
      test: (first, second) => (first * second) % 2 === 0,
      explain: "少なくとも一方が偶数なら積は偶数です。",
    },
    {
      label: "和が偶数になる",
      test: (first, second) => (first + second) % 2 === 0,
      explain: "偶数同士、または奇数同士のとき和が偶数です。",
    },
  ]);
  const favorable = countDicePairs(pattern.test);
  const total = 36;
  return {
    kind: "m2-probability:two-dice-condition",
    title: "2つのさいころの確率",
    skill: "確率",
    text: `大小2個のさいころを同時に投げます。${pattern.label}確率を求めなさい。`,
    hint: "大小を区別して36通りから数えます。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `${pattern.explain} 条件に合う組は${favorable}通り、全体は36通りです。`,
  };
}

function generateM2TwoDiceDifferenceProblem() {
  const target = randInt(0, 4);
  const favorable = countDicePairs((first, second) => Math.abs(first - second) === target);
  const total = 36;
  return {
    kind: "m2-probability:two-dice-difference",
    title: "2つのさいころの確率",
    skill: "確率",
    text: `大小2個のさいころを同時に投げます。2つの目の差が <span class="math">${target}</span> になる確率を求めなさい。`,
    hint: "大小を区別して、差が条件に合う組を数えます。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `差が${target}になる組は${favorable}通り、全体は36通りです。`,
  };
}

function generateM2CoinDiceProblem() {
  const target = randInt(3, 6);
  const favorable = countCoinDicePairs((coin, die) => coin === "表" && die >= target);
  const total = 12;
  return {
    kind: "m2-probability:coin-dice",
    title: "組み合わせの確率",
    skill: "確率",
    text: `硬貨1枚とさいころ1個を同時に投げます。硬貨が表で、さいころの目が <span class="math">${target}</span> 以上になる確率を求めなさい。`,
    hint: "硬貨2通り、さいころ6通りなので全体は12通りです。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `表で${target}以上になる組は${favorable}通り、全体は12通りです。`,
  };
}

function generateM2TwoDiceProductProblem() {
  const pattern = pick([
    {
      label: "積が3の倍数",
      test: (first, second) => (first * second) % 3 === 0,
      explain: "少なくとも一方が3または6のときを数えます。",
    },
    {
      label: "積が4の倍数",
      test: (first, second) => (first * second) % 4 === 0,
      explain: "2の因数を2つ以上もつ組を数えます。",
    },
    {
      label: "積が12以上",
      test: (first, second) => first * second >= 12,
      explain: "積を表で整理すると数えやすくなります。",
    },
    {
      label: "積が奇数",
      test: (first, second) => first % 2 === 1 && second % 2 === 1,
      explain: "両方とも奇数のときだけ積が奇数になります。",
    },
  ]);
  const favorable = countDicePairs(pattern.test);
  const total = 36;
  return {
    kind: "m2-probability:two-dice-product",
    title: "2つのさいころの発展確率",
    skill: "確率の応用",
    text: `大小2個のさいころを同時に投げます。出た目の <span class="math">${pattern.label}</span> となる確率を求めなさい。`,
    hint: "大小を区別して36通りを表で整理します。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(favorable, total),
    visual: { type: "probability", red: favorable, blue: total - favorable },
    check: (input) => fractionEquals(input.value, favorable / total),
    explain: `${pattern.explain} 条件に合う組は${favorable}通り、全体は36通りです。`,
  };
}

function generateM2ThreeCoinsProblem() {
  const pattern = pick([
    { label: "表がちょうど1枚", favorable: 3, explain: "表の位置を3通りに選びます。" },
    { label: "表がちょうど2枚", favorable: 3, explain: "裏の位置を3通りに選びます。" },
    { label: "表が少なくとも2枚", favorable: 4, explain: "表2枚の3通りと表3枚の1通りです。" },
    { label: "3枚とも同じ面", favorable: 2, explain: "表表表、裏裏裏の2通りです。" },
  ]);
  const total = 8;
  return {
    kind: "m2-probability:three-coins",
    title: "3枚の硬貨の確率",
    skill: "確率の応用",
    text: `硬貨を3枚同時に投げます。<span class="math">${pattern.label}</span> となる確率を求めなさい。`,
    hint: "表・裏の並びは全部で 2×2×2=8 通りです。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(pattern.favorable, total),
    visual: { type: "probability", red: pattern.favorable, blue: total - pattern.favorable },
    check: (input) => fractionEquals(input.value, pattern.favorable / total),
    explain: `${pattern.explain} 全体は8通りなので ${simplifyFraction(pattern.favorable, total)} です。`,
  };
}

function generateM2NoReplacementMarbleProblem() {
  const red = randInt(2, 7);
  const blue = randInt(2, 7);
  const white = randInt(1, 5);
  const totalBalls = red + blue + white;
  const total = totalBalls * (totalBalls - 1);
  const same = red * (red - 1) + blue * (blue - 1) + white * Math.max(0, white - 1);
  const pattern = pick([
    { label: "1個目が赤、2個目が青", favorable: red * blue, explain: `赤→青は ${red}×${blue} 通りです。` },
    { label: "2個とも赤", favorable: red * (red - 1), explain: `赤を続けて引くので ${red}×${red - 1} 通りです。` },
    { label: "2個が同じ色", favorable: same, explain: "赤赤、青青、白白をそれぞれ数えて足します。" },
    { label: "2個が違う色", favorable: total - same, explain: "全体から同じ色になる場合を引きます。" },
  ]);
  return {
    kind: "m2-probability:no-replacement",
    title: "戻さずに取り出す確率",
    skill: "確率の応用",
    text: `袋に赤玉 <span class="math">${red}</span> 個、青玉 <span class="math">${blue}</span> 個、白玉 <span class="math">${white}</span> 個があります。玉を1個取り出して戻さず、続けてもう1個取り出すとき、<span class="math">${pattern.label}</span> となる確率を求めなさい。`,
    hint: "1個目と2個目を区別して、全体は 玉の総数×残りの玉の数 で考えます。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: simplifyFraction(pattern.favorable, total),
    visual: { type: "probability", red: pattern.favorable, blue: total - pattern.favorable },
    check: (input) => fractionEquals(input.value, pattern.favorable / total),
    explain: `${pattern.explain} 全体は ${totalBalls}×${totalBalls - 1}=${total} 通りです。`,
  };
}

function countDicePairs(test) {
  let count = 0;
  for (let first = 1; first <= 6; first += 1) {
    for (let second = 1; second <= 6; second += 1) {
      if (test(first, second)) count += 1;
    }
  }
  return count;
}

function countCoinDicePairs(test) {
  let count = 0;
  ["表", "裏"].forEach((coin) => {
    for (let die = 1; die <= 6; die += 1) {
      if (test(coin, die)) count += 1;
    }
  });
  return count;
}

function countPrimes(max) {
  let count = 0;
  for (let value = 2; value <= max; value += 1) {
    let prime = true;
    for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
      if (value % divisor === 0) {
        prime = false;
        break;
      }
    }
    if (prime) count += 1;
  }
  return count;
}

function generateHighSchoolEntranceMathProblem(unitId, grade = 3) {
  const gradeNumber = Number(grade) || 3;
  if (gradeNumber <= 1 && (unitId.includes("numbers") || unitId.includes("linear") || unitId.includes("equations"))) {
    return pick([generateHighSchoolEntranceWordEquationProblem, generateHighSchoolEntranceDataProblem, generateHighSchoolEntranceProbabilityProblem])();
  }
  if (gradeNumber <= 2 && (unitId.includes("linear") || unitId.includes("functions"))) {
    return pick([generateHighSchoolEntranceLinearFunctionProblem, generateHighSchoolEntranceWordEquationProblem])();
  }
  if (unitId.includes("functions")) return pick([generateHighSchoolEntranceFunctionProblem, generateHighSchoolEntranceLinearFunctionProblem])();
  if (unitId.includes("geometry")) return pick([generateHighSchoolEntranceGeometryProblem, generateHighSchoolEntranceCoordinateAreaProblem])();
  if (unitId.includes("data") || unitId.includes("probability")) return pick([generateHighSchoolEntranceProbabilityProblem, generateHighSchoolEntranceDataProblem])();
  if (unitId.includes("quadratic") || unitId.includes("expansion")) return generateHighSchoolEntranceQuadraticProblem();
  return pick([
    generateHighSchoolEntranceQuadraticProblem,
    generateHighSchoolEntranceFunctionProblem,
    generateHighSchoolEntranceGeometryProblem,
    generateHighSchoolEntranceProbabilityProblem,
    generateHighSchoolEntranceWordEquationProblem,
    generateHighSchoolEntranceDataProblem,
    generateHighSchoolEntranceCoordinateAreaProblem,
  ])();
}

function generateHighSchoolEntranceQuadraticProblem() {
  const coefficient = randInt(1, 3);
  const r1 = randInt(-8, 8, [0]);
  const r2 = randInt(-8, 8, [0, r1]);
  const b = -coefficient * (r1 + r2);
  const c = coefficient * r1 * r2;
  return {
    kind: "junior-expert:quadratic",
    title: "高校入試 お受験",
    skill: "二次方程式",
    text: `<span class="math">${coefficient === 1 ? "" : coefficient}x² ${formatTerm(b, "x", false)} ${formatConst(c, false)} = 0</span> を解きなさい。`,
    hint: "共通因数や因数分解を使い、積が0になる条件を考えます。",
    answerType: "single",
    answerLabel: "解",
    displayAnswer: `x=${r1}, ${r2}`,
    visual: { type: "graph", mode: "quadratic", a: coefficient, b, c, point: [r1, 0] },
    check: (input) => unorderedPairTextEquals(input.value, r1, r2),
    explain: `${coefficient === 1 ? "" : coefficient}(x ${formatConst(-r1, false)})(x ${formatConst(-r2, false)})=0 より、x=${r1}, ${r2} です。`,
  };
}

function generateHighSchoolEntranceFunctionProblem() {
  const a = pick([-2, -1, 1, 2]);
  const x1 = randInt(-4, -1);
  const x2 = randInt(1, 4, [Math.abs(x1)]);
  const y1 = a * x1 * x1;
  const y2 = a * x2 * x2;
  const slope = (y2 - y1) / (x2 - x1);
  if (!Number.isInteger(slope)) return generateHighSchoolEntranceFunctionProblem();
  const intercept = y1 - slope * x1;
  return {
    kind: "junior-expert:function-intersection",
    title: "高校入試 お受験",
    skill: "関数 y=ax²",
    text: `放物線 <span class="math">y=${formatCoeff(a)}x²</span> と直線 <span class="math">y=${formatLinear(slope, intercept)}</span> が2点で交わります。交点の1つのx座標が <span class="math">${x1}</span> のとき、もう1つの交点のx座標を求めなさい。`,
    hint: "直線と放物線の式を連立し、二次方程式の2つの解として考えます。",
    answerType: "single",
    answerLabel: "x座標",
    displayAnswer: String(x2),
    visual: { type: "graph", mode: "quadratic", a, b: 0, c: 0, point: [x2, y2] },
    check: (input) => numericEquals(input.value, x2),
    explain: `${formatCoeff(a)}x²=${formatLinear(slope, intercept)} を解くと、x=${x1}, ${x2} です。`,
  };
}

function generateHighSchoolEntranceGeometryProblem() {
  const small = pick([
    [3, 4, 5],
    [5, 12, 13],
    [8, 15, 17],
  ]);
  const scaleNumerator = randInt(3, 7);
  const scaleDenominator = randInt(2, scaleNumerator - 1);
  const [a, b, c] = small;
  const answer = (c * scaleNumerator) / scaleDenominator;
  if (!Number.isInteger(answer)) return generateHighSchoolEntranceGeometryProblem();
  return {
    kind: "junior-expert:geometry-similar",
    title: "高校入試 お受験",
    skill: "相似と三平方",
    text: `直角三角形Aの2辺は <span class="math">${a}cm</span>、<span class="math">${b}cm</span> です。これと相似な三角形Bは、Aに対して相似比 <span class="math">${scaleNumerator}:${scaleDenominator}</span> です。三角形Bの斜辺の長さを求めなさい。`,
    hint: "まずAの斜辺を三平方の定理で求め、相似比をかけます。",
    answerType: "single",
    answerLabel: "斜辺",
    displayAnswer: `${answer}cm`,
    visual: { type: "english", heading: "相似・三平方", lines: [`${a}²+${b}²`, `${scaleNumerator}:${scaleDenominator}`, "斜辺"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `Aの斜辺は ${c}cm。${c}×${scaleNumerator}÷${scaleDenominator}=${answer}cm です。`,
  };
}

function generateHighSchoolEntranceProbabilityProblem() {
  const pattern = pick(["sum", "product"]);
  let count = 0;
  for (let first = 1; first <= 6; first += 1) {
    for (let second = 1; second <= 6; second += 1) {
      if (pattern === "sum" ? (first + second) % 4 === 0 : (first * second) % 3 === 0) count += 1;
    }
  }
  const answer = makeFraction(count, 36);
  return {
    kind: "junior-expert:probability-dice",
    title: "高校入試 お受験",
    skill: "確率",
    text:
      pattern === "sum"
        ? "大小2つのさいころを同時に投げます。出た目の和が4の倍数になる確率を求めなさい。"
        : "大小2つのさいころを同時に投げます。出た目の積が3の倍数になる確率を求めなさい。",
    hint: "全部で36通りあります。条件に合う組を表にして数えます。",
    answerType: "single",
    answerLabel: "確率",
    displayAnswer: formatFraction(answer),
    displayAnswerHtml: formatFraction(answer, { html: true }),
    visual: { type: "probability", red: count, blue: 36 - count },
    check: (input) => fractionEquals(input.value, fractionToNumber(answer)),
    explain: `条件に合う場合は ${count} 通り、全部で36通りなので ${formatFraction(answer, { html: true })} です。`,
  };
}

function generateHighSchoolEntranceWordEquationProblem() {
  const priceA = pick([120, 150, 180, 200, 240]);
  const priceB = pick([60, 80, 100, 120].filter((value) => value < priceA));
  const totalCount = randInt(8, 18);
  const countA = randInt(2, totalCount - 2);
  const total = priceA * countA + priceB * (totalCount - countA);
  return {
    kind: "junior-expert:word-equation",
    title: "高校入試 お受験",
    skill: "方程式の利用",
    text: `1個 <span class="math">${priceA}</span> 円の商品Aと、1個 <span class="math">${priceB}</span> 円の商品Bを合わせて <span class="math">${totalCount}</span> 個買うと、代金は <span class="math">${total}</span> 円でした。商品Aは何個買いましたか。`,
    hint: "商品Aをx個とおき、商品Bは全体から引いて表します。",
    answerType: "single",
    answerLabel: "Aの個数",
    displayAnswer: `${countA}個`,
    visual: { type: "english", heading: "方程式", lines: [`A ${priceA}円`, `B ${priceB}円`, `合計 ${total}円`] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/個/g, ""), countA),
    explain: `Aをx個とすると、${priceA}x+${priceB}(${totalCount}-x)=${total}。これを解いて x=${countA} です。`,
  };
}

function generateHighSchoolEntranceLinearFunctionProblem() {
  const slope = pick([-3, -2, -1, 1, 2, 3, 4]);
  const intercept = randInt(-8, 8, [0]);
  const x1 = randInt(-4, 1);
  const x2 = randInt(2, 6, [x1]);
  const x = randInt(-5, 7, [x1, x2]);
  const y1 = slope * x1 + intercept;
  const y2 = slope * x2 + intercept;
  const answer = slope * x + intercept;
  return {
    kind: "junior-expert:linear-function",
    title: "高校入試 お受験",
    skill: "一次関数",
    text: `直線は2点 <span class="math">(${x1}, ${y1})</span>、<span class="math">(${x2}, ${y2})</span> を通ります。この直線上で <span class="math">x=${x}</span> のとき、<span class="math">y</span> の値を求めなさい。`,
    hint: "まず傾きを求め、一次関数 y=ax+b の形にします。",
    answerType: "single",
    answerLabel: "y",
    displayAnswer: String(answer),
    visual: { type: "graph", mode: "linear", a: slope, b: intercept, point: [x, answer] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `傾きは ${slope}、直線は y=${formatLinear(slope, intercept)}。したがって x=${x} のとき y=${answer} です。`,
  };
}

function generateHighSchoolEntranceDataProblem() {
  const count = randInt(5, 9);
  const average = randInt(54, 78);
  const added = randInt(70, 96);
  const newAverage = (average * count + added) / (count + 1);
  if (!Number.isInteger(newAverage)) return generateHighSchoolEntranceDataProblem();
  return {
    kind: "junior-expert:data-average",
    title: "高校入試 お受験",
    skill: "資料の活用",
    text: `<span class="math">${count}</span> 人のテストの平均点は <span class="math">${average}</span> 点でした。あとから1人分の点数を加えると、平均点は <span class="math">${newAverage}</span> 点になりました。あとから加えた点数を求めなさい。`,
    hint: "平均点×人数で合計点を作り、差を取ります。",
    answerType: "single",
    answerLabel: "点数",
    displayAnswer: `${added}点`,
    visual: { type: "english", heading: "平均", lines: [`${count}人 平均${average}`, `${count + 1}人 平均${newAverage}`, "追加点"] },
    check: (input) => numericEquals(stripUnit(input.value).replace(/点/g, ""), added),
    explain: `${count + 1}人の合計は ${newAverage}×${count + 1}=${newAverage * (count + 1)} 点。もとの合計 ${average * count} 点を引いて ${added} 点です。`,
  };
}

function generateHighSchoolEntranceCoordinateAreaProblem() {
  const base = pick([6, 8, 10, 12]);
  const height = pick([4, 6, 8, 10]);
  const x = randInt(1, base - 1);
  const answer = (base * height) / 2;
  return {
    kind: "junior-expert:coordinate-area",
    title: "高校入試 お受験",
    skill: "座標と図形",
    text: `座標平面上に3点 <span class="math">A(0,0)</span>、<span class="math">B(${base},0)</span>、<span class="math">C(${x},${height})</span> があります。三角形ABCの面積を求めなさい。`,
    hint: "底辺をAB、高さをCのy座標として考えます。",
    answerType: "single",
    answerLabel: "面積",
    displayAnswer: `${answer}`,
    visual: { type: "english", heading: "座標と面積", lines: [`底辺 ${base}`, `高さ ${height}`, "三角形"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `ABを底辺にすると長さは ${base}、高さは ${height}。面積は ${base}×${height}÷2=${answer} です。`,
  };
}

function generateM3ExpansionProblem(level, weights) {
  if (level === "advanced") return Math.random() > 0.45 ? generateM3ExpansionFractionProblem() : generateM3ExpansionAdvancedProblem();
  const m = randInt(-6, 6, [0]);
  const n = randInt(-6, 6, [0, -m]);
  const b = m + n;
  const c = m * n;
  return {
    kind: "m3-expansion:factor",
    title: "展開・因数分解",
    skill: "展開・因数分解",
    text: `<span class="math">(x ${formatConst(m, false)})(x ${formatConst(n, false)})</span> を展開し、式で答えなさい。`,
    hint: "xの係数は2つの数の和、定数項は2つの数の積です。",
    answerType: "single",
    answerLabel: "展開した式",
    displayAnswer: `x² ${formatTerm(b, "x", false)} ${formatConst(c, false)}`,
    visual: { type: "tiles", a: b, b: c },
    check: (input) => quadraticExpressionEquals(input.value, b, c),
    explain: `${m}+${n}=${b}、${m}×${n}=${c} です。`,
  };
}

function generateM3ExpansionFractionProblem() {
  const coefficient = randomFraction(6, false, false);
  const m = randInt(-7, 7, [0]);
  const n = randInt(-7, 7, [0, -m]);
  const x2 = coefficient;
  const x = multiplyFractions(coefficient, makeFraction(m + n, 1));
  const constant = multiplyFractions(coefficient, makeFraction(m * n, 1));
  return {
    kind: "m3-expansion:fraction",
    title: "分数係数つきの展開",
    skill: "展開・因数分解の発展",
    text: `<span class="math">${formatFraction(coefficient, { html: true })}(x ${formatConst(m, false)})(x ${formatConst(n, false)})</span> を展開し、式で答えなさい。`,
    hint: "2つのかっこを先に展開し、分数係数を x² の項、x の項、定数項すべてに掛けます。",
    answerType: "single",
    answerLabel: "展開した式",
    displayAnswer: formatFractionPolynomial(x2, x, constant),
    displayAnswerHtml: formatFractionPolynomial(x2, x, constant, { html: true }),
    visual: { type: "tiles", a: fractionToNumber(x), b: fractionToNumber(constant) },
    check: (input) => quadraticExpressionFullEquals(input.value, fractionToNumber(x2), fractionToNumber(x), fractionToNumber(constant)),
    explain: `かっこ内は x² ${formatTerm(m + n, "x", false)} ${formatConst(m * n, false)}。全体に ${formatFraction(coefficient, { html: true })} を掛けると ${formatFractionPolynomial(x2, x, constant, { html: true })} です。`,
  };
}

function generateM3ExpansionAdvancedProblem() {
  const coefficient = randInt(2, 5);
  const m = randInt(-7, 7, [0]);
  const n = randInt(-7, 7, [0, -m]);
  const x2 = coefficient;
  const x = coefficient * (m + n);
  const constant = coefficient * m * n;
  return {
    kind: "m3-expansion:advanced",
    title: "係数つきの展開",
    skill: "展開・因数分解の応用",
    text: `<span class="math">${coefficient}(x ${formatConst(m, false)})(x ${formatConst(n, false)})</span> を展開し、式で答えなさい。`,
    hint: "まず2つのかっこを展開し、最後に外側の係数を全体に掛けます。",
    answerType: "single",
    answerLabel: "展開した式",
    displayAnswer: `${x2}x² ${formatTerm(x, "x", false)} ${formatConst(constant, false)}`,
    visual: { type: "tiles", a: x, b: constant },
    check: (input) => quadraticExpressionFullEquals(input.value, x2, x, constant),
    explain: `(x ${formatConst(m, false)})(x ${formatConst(n, false)})=x² ${formatTerm(m + n, "x", false)} ${formatConst(m * n, false)}。全体に ${coefficient} を掛けます。`,
  };
}

function generateM3QuadraticProblem(level, weights) {
  if (level === "advanced") return generateM3QuadraticAdvancedProblem();
  const r1 = randInt(-6, 6, [0]);
  const r2 = randInt(-6, 6, [0, r1]);
  const b = -(r1 + r2);
  const c = r1 * r2;
  return {
    kind: "m3-quadratic:roots",
    title: "二次方程式を解く",
    skill: "二次方程式",
    text: `<span class="math">x² ${formatTerm(b, "x", false)} ${formatConst(c, false)} = 0</span> を解きなさい。`,
    hint: "因数分解して、積が0になる条件を使います。答えの順番はどちらでも構いません。",
    answerType: "single",
    answerLabel: "2つの解",
    displayAnswer: `x=${r1}, ${r2}`,
    visual: { type: "graph", mode: "quadratic", a: 1, b: b, c: c, point: [r1, 0] },
    check: (input) => unorderedPairTextEquals(input.value, r1, r2),
    explain: `(x ${formatConst(-r1, false)})(x ${formatConst(-r2, false)})=0 より、x=${r1}, ${r2} です。`,
  };
}

function generateM3QuadraticAdvancedProblem() {
  const coefficient = randInt(2, 4);
  const r1 = randInt(-7, 7, [0]);
  const r2 = randInt(-7, 7, [0, r1]);
  const b = -coefficient * (r1 + r2);
  const c = coefficient * r1 * r2;
  return {
    kind: "m3-quadratic:advanced",
    title: "係数つき二次方程式を解く",
    skill: "二次方程式の応用",
    text: `<span class="math">${coefficient}x² ${formatTerm(b, "x", false)} ${formatConst(c, false)} = 0</span> を解きなさい。`,
    hint: "共通因数や因数分解を意識します。積が0になる条件を使います。",
    answerType: "single",
    answerLabel: "2つの解",
    displayAnswer: `x=${r1}, ${r2}`,
    visual: { type: "graph", mode: "quadratic", a: coefficient, b, c, point: [r1, 0] },
    check: (input) => unorderedPairTextEquals(input.value, r1, r2),
    explain: `${coefficient}(x ${formatConst(-r1, false)})(x ${formatConst(-r2, false)})=0 より、x=${r1}, ${r2} です。`,
  };
}

function generateM3QuadraticFunctionProblem(level, weights) {
  const a = pick([-3, -2, -1, 1, 2, 3]);
  const x = randInt(-5, 5, [0]);
  const y = a * x * x;
  if (level === "standard") {
    return {
      kind: "m3-functions:quadratic-a",
      title: "関数 y=ax² の a を求める",
      skill: "二乗に比例する関数",
      text: `<span class="math">y=ax²</span> で、<span class="math">x=${x}</span> のとき <span class="math">y=${y}</span> です。<span class="math">a</span> を求めなさい。`,
      hint: "a = y ÷ x² で求めます。",
      answerType: "single",
      answerLabel: "a の値",
      displayAnswer: String(a),
      visual: { type: "graph", mode: "quadratic", a, b: 0, c: 0, point: [x, y] },
      check: (input) => numericEquals(input.value, a),
      explain: `${y}÷${x * x}=${a} です。`,
    };
  }
  if (level === "advanced") {
    const targetY = a * x * x;
    return {
      kind: "m3-functions:quadratic-x",
      title: "関数 y=ax² を逆算する",
      skill: "二乗に比例する関数の応用",
      text: `<span class="math">y=${a}x²</span> で、<span class="math">y=${targetY}</span> となる <span class="math">x</span> の値を2つ求めなさい。`,
      hint: "まず x² の値を求めます。正と負の2つの x を考えます。",
      answerType: "single",
      answerLabel: "x の値",
      displayAnswer: `x=${x}, ${-x}`,
      visual: { type: "graph", mode: "quadratic", a, b: 0, c: 0, point: [x, targetY] },
      check: (input) => unorderedPairTextEquals(input.value, x, -x),
      explain: `x²=${targetY}÷${a}=${x * x} なので、x=${x}, ${-x} です。`,
    };
  }
  return {
    kind: "m3-functions:quadratic",
    title: "関数 y=ax² を使う",
    skill: "二乗に比例する関数",
    text: `<span class="math">y=${a}x²</span> で、<span class="math">x=${x}</span> のときの <span class="math">y</span> を求めなさい。`,
    hint: "x² を先に計算し、その後に a を掛けます。",
    answerType: "single",
    answerLabel: "y の値",
    displayAnswer: String(y),
    visual: { type: "graph", mode: "quadratic", a, b: 0, c: 0, point: [x, y] },
    check: (input) => numericEquals(input.value, y),
    explain: `${x}²=${x * x}、${a}×${x * x}=${y} です。`,
  };
}

function generateM3GeometryProblem(level, weights) {
  if (level === "advanced" && Math.random() > 0.45) return generateM3PythagorasMissingLegProblem();
  const kind = pickKind("m3-geometry", ["pythagoras", "similarity"], weights);
  if (kind.endsWith("similarity")) {
    const small = randInt(3, 8);
    const scale = randInt(2, 5);
    const answer = small * scale;
    return {
      kind,
      title: "相似比を使う",
      skill: "相似",
      text: `相似な図形で、相似比が <span class="math">1:${scale}</span> です。小さい図形の辺が <span class="math">${small}cm</span> のとき、大きい図形の対応する辺を求めなさい。`,
      hint: "対応する辺の長さは、相似比と同じ割合になります。",
      answerType: "single",
      answerLabel: "辺の長さ",
      displayAnswer: `${answer}cm`,
      visual: { type: "prism", width: small, depth: scale, height: answer, heightIsAnswer: true },
      check: (input) => numericEquals(stripUnit(input.value), answer),
      explain: `${small}×${scale}=${answer} です。`,
    };
  }

  const triples = [
    [3, 4, 5],
    [5, 12, 13],
    [6, 8, 10],
    [8, 15, 17],
    [7, 24, 25],
  ];
  const [a, b, c] = pick(triples);
  return {
    kind,
    title: "三平方の定理を使う",
    skill: "三平方の定理",
    text: `直角三角形の直角をはさむ2辺が <span class="math">${a}cm</span> と <span class="math">${b}cm</span> のとき、斜辺の長さを求めなさい。`,
    hint: "斜辺を c とすると、a²+b²=c² です。",
    answerType: "single",
    answerLabel: "斜辺",
    displayAnswer: `${c}cm`,
    visual: { type: "english", heading: "三平方", lines: [`${a}² + ${b}²`, "斜辺を求める"] },
    check: (input) => numericEquals(stripUnit(input.value), c),
    explain: `${a}²+${b}²=${c * c} なので、斜辺は ${c}cm です。`,
  };
}

function generateM3PythagorasMissingLegProblem() {
  const triples = [
    [3, 4, 5],
    [5, 12, 13],
    [6, 8, 10],
    [8, 15, 17],
    [7, 24, 25],
  ];
  const [a, b, c] = pick(triples);
  const known = pick([a, b]);
  const answer = known === a ? b : a;
  return {
    kind: "m3-geometry:pythagoras-missing",
    title: "三平方の定理で逆算する",
    skill: "三平方の定理の応用",
    text: `直角三角形の斜辺が <span class="math">${c}cm</span>、直角をはさむ1辺が <span class="math">${known}cm</span> です。もう1つの辺の長さを求めなさい。`,
    hint: "斜辺の2乗から、分かっている辺の2乗を引きます。",
    answerType: "single",
    answerLabel: "辺の長さ",
    displayAnswer: `${answer}cm`,
    visual: { type: "english", heading: "三平方", lines: [`${c}² - ${known}²`, "もう1辺を求める"] },
    check: (input) => numericEquals(stripUnit(input.value), answer),
    explain: `${c}²-${known}²=${answer * answer} なので、もう1つの辺は ${answer}cm です。`,
  };
}

function generateM3SampleProblem(level, weights) {
  const sample = randInt(40, 120);
  const hits = randInt(8, Math.floor(sample / 2));
  const population = pick([400, 500, 800, 1000, 1200]);
  const answer = Math.round((hits / sample) * population);
  return {
    kind: "m3-data:sample",
    title: "標本調査で推定する",
    skill: "標本調査",
    text: `全体が <span class="math">${population}</span> 個ある集団から <span class="math">${sample}</span> 個を調べたところ、条件に合うものが <span class="math">${hits}</span> 個ありました。全体では約何個と推定できますか。`,
    hint: "標本での割合を全体の数に掛けます。",
    answerType: "single",
    answerLabel: "推定値",
    displayAnswer: `約${answer}個`,
    visual: { type: "bars", data: [hits, sample - hits] },
    check: (input) => numericEquals(normalizeAnswerText(input.value).replace(/約|個/g, ""), answer),
    explain: `${hits}/${sample}×${population}≈${answer} です。`,
  };
}

const ADVANCED_ENGLISH_BANK = Object.freeze({
  "e1-vocab": [
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">the natural world around us, including air, water, plants, and animals</span>", "environment", "説明全体から名詞を推測します。", "自然や生活を取り巻くものなので environment です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">something that people have done for a long time</span>", "tradition", "長く続く習慣や文化を表します。", "長く受け継がれるものは tradition です。"],
    ["次の英文の空欄に合う語を1語で書きなさい。<br><span class=\"math\">Working at the event was a good ___ for me.</span>", "experience", "体験・経験を表す名詞です。", "経験としてよかった、という意味なので experience です。"],
    ["次の英文の空欄に合う語を1語で書きなさい。<br><span class=\"math\">Many students joined the clean-up activity as ___ workers.</span>", "volunteer", "報酬を目的にしない活動です。", "ボランティア活動なので volunteer です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">the people who live in the same area</span>", "community", "地域社会を表す語です。", "同じ地域に住む人々のまとまりは community です。"],
    ["次の英文の空欄に合う語を1語で書きなさい。<br><span class=\"math\">Please tell us your ___ about this plan.</span>", "opinion", "考えや意見を表す名詞です。", "計画についての意見なので opinion です。"],
  ],
  "e1-be": [
    ["主語に注意して空欄に入る語を書きなさい。<br><span class=\"math\">The results of the survey ___ interesting to many students.</span>", "are", "中心になる名詞は results です。", "results は複数なので are を使います。"],
    ["主語に注意して空欄に入る語を書きなさい。<br><span class=\"math\">Each of the answers ___ different.</span>", "is", "Each は単数扱いです。", "Each of ... は単数扱いなので is です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">Neither Ken nor his brother ___ at home now.</span>", "is", "nor の後ろの his brother に合わせます。", "近い主語 his brother が単数なので is です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There ___ a dictionary and some notebooks on the desk.</span>", "is", "There is / are は直後の名詞に合わせます。", "直後が a dictionary なので is です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">The news about the match ___ surprising.</span>", "is", "news は単数扱いです。", "news は形は s で終わりますが単数扱いなので is です。"],
  ],
  "e1-present": [
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">One of my friends ___ French after school. (study)</span>", "studies", "主語の中心は One です。", "One が主語なので studies です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">The teacher, with two students, ___ the room every morning. (clean)</span>", "cleans", "with 以下ではなく teacher が主語です。", "主語は The teacher なので cleans です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">My sister ___ not usually watch videos before dinner.</span>", "does", "三人称単数の否定です。", "My sister は三人称単数なので does not です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">This train ___ at every station on Sundays. (stop)</span>", "stops", "主語 train は単数です。", "単数主語なので stops です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">How often ___ your parents go shopping?</span>", "do", "parents は複数です。", "複数主語の疑問文なので do を使います。"],
  ],
  "e1-word-order": [
    ["次の日本語を自然な英文にしなさい。<br><span class=\"math\">私は宿題を終えたあとで、母を手伝います。</span>", "I help my mother after I finish my homework.", "接続詞 after を使います。", "after I finish my homework を後ろに置きます。"],
    ["次の日本語を自然な英文にしなさい。<br><span class=\"math\">彼がなぜ怒っているのか、私は知りません。</span>", "I do not know why he is angry.", "間接疑問文は語順に注意します。", "why he is angry は疑問文の語順にしません。"],
    ["次の日本語を自然な英文にしなさい。<br><span class=\"math\">これは私が昨日買った本です。</span>", "This is the book I bought yesterday.", "名詞を後ろから説明します。", "the book の後に I bought yesterday を続けます。"],
    ["次の日本語を自然な英文にしなさい。<br><span class=\"math\">雨が降っていたので、私たちは家にいました。</span>", "We stayed home because it was raining.", "理由は because で表します。", "because it was raining で理由を表します。"],
    ["次の日本語を自然な英文にしなさい。<br><span class=\"math\">彼女は英語を上手に話すだけでなく、フランス語も読めます。</span>", "She not only speaks English well but also can read French.", "not only A but also B を使います。", "not only と but also の対応をそろえます。"],
  ],
  "e2-past": [
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">I ___ a book when my father came home. (read)</span>", "was reading", "過去のある時点で進行中の動作です。", "when 以下の時点で読書中なので was reading です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">Ken did not ___ what the teacher said.</span>", "understand", "did not の後は原形です。", "過去の否定では動詞は原形 understand です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">They ___ already left when I arrived. (have)</span>", "had", "過去より前の完了を表します。", "arrived より前に去っていたので had left です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">She ___ to play the piano when she was five. (begin)</span>", "began", "begin の過去形です。", "begin の過去形は began です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">What ___ you doing at eight last night?</span>", "were", "過去進行形の疑問文です。", "主語 you には were を使います。"],
  ],
  "e2-future": [
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">By this time tomorrow, we will ___ in Kyoto.</span>", "be", "未来の状態を表します。", "will の後は原形 be です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">I am going to ___ my report before dinner.</span>", "finish", "be going to の後は原形です。", "to の後は finish です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">The train is about ___ leave.</span>", "to", "be about to は「まさに〜するところ」です。", "is about to leave が正しい形です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">If it rains tomorrow, the game will ___ canceled.</span>", "be", "will be + 過去分詞です。", "受け身の未来なので will be canceled です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">Are you going to ___ part in the speech contest?</span>", "take", "take part in で参加するです。", "take part in の形を使います。"],
  ],
  "e2-comparison": [
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">This is one of the ___ books in the library. (popular)</span>", "most popular", "one of the + 最上級 + 複数名詞です。", "長い形容詞なので most popular です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">This river is not ___ long as that one.</span>", "as", "not as ... as の形です。", "同程度ではないことを not as ... as で表します。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">The more I practice, the ___ I become. (good)</span>", "better", "the 比較級, the 比較級 の形です。", "good の比較級は better です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">No other student in our class is ___ fast as Ken.</span>", "as", "同等比較で最上級に近い意味を作ります。", "as fast as Ken の形です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">This problem is far ___ difficult than the first one. (much)</span>", "more", "difficult の比較級です。", "far more difficult で差の大きさを表します。"],
  ],
  "e2-there": [
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There ___ been many changes in this town.</span>", "have", "現在完了で many changes に合わせます。", "複数なので There have been です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There ___ to be a small castle here.</span>", "used", "かつてあったことを表します。", "There used to be の形です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There will ___ an online meeting after school.</span>", "be", "will の後は原形です。", "There will be が正しい形です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There ___ not seem to be enough time.</span>", "does", "seem を使う否定です。", "There does not seem to be の形です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">There ___ a few reasons why I disagree.</span>", "are", "reasons は複数です。", "a few reasons に合わせて are です。"],
  ],
  "e3-perfect": [
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">I have ___ English since I was ten. (study)</span>", "studied", "since と現在完了です。", "継続なので have studied です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">She has been ___ for the bus for twenty minutes.</span>", "waiting", "現在完了進行形です。", "has been waiting が正しい形です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">This is the first time I have ___ sushi. (make)</span>", "made", "経験を表す現在完了です。", "make の過去分詞は made です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">How long ___ your brother been a member of the team?</span>", "has", "主語 brother に合わせます。", "your brother は単数なので has です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">The train has already ___. (leave)</span>", "left", "完了を表します。", "leave の過去分詞は left です。"],
  ],
  "e3-passive": [
    ["能動態の文を受け身にしたとき、空欄に入る語句を書きなさい。<br><span class=\"math\">People speak English in many countries.<br>English ___ in many countries.</span>", "is spoken", "be + 過去分詞です。", "English が主語なので is spoken です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">This bridge has ___ used for more than fifty years.</span>", "been", "現在完了の受け身です。", "has been used の形です。"],
    ["かっこの語を正しい形にしなさい。<br><span class=\"math\">The old house will be ___ next month. (repair)</span>", "repaired", "未来の受け身です。", "will be repaired が正しい形です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">The window was broken ___ someone last night.</span>", "by", "動作主を表します。", "by someone で動作主を示します。"],
    ["能動態の文を受け身にしたとき、空欄に入る語句を書きなさい。<br><span class=\"math\">They did not invite Ken.<br>Ken ___ invited.</span>", "was not", "過去の否定の受け身です。", "Ken was not invited が正しい形です。"],
  ],
  "e3-relative": [
    ["2文を1文にするとき、空欄に入る語を書きなさい。<br><span class=\"math\">I know a girl. Her father is a doctor.<br>I know a girl ___ father is a doctor.</span>", "whose", "所有を表します。", "her father を whose father にします。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">The reason ___ I was late was simple.</span>", "why", "理由を説明する関係副詞です。", "reason を説明するので why です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">This is the village ___ my grandmother grew up.</span>", "where", "場所を説明します。", "場所を表す village なので where です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">The book ___ I borrowed from the library was very useful.</span>", "that", "目的語になる関係代名詞です。", "the book を説明するので that です。"],
    ["空欄に入る語を書きなさい。<br><span class=\"math\">The day ___ we first visited Kyoto is still special to me.</span>", "when", "時を説明します。", "day を説明するので when です。"],
  ],
  "e3-infinitive": [
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">I want you ___ more carefully.</span>", "to listen", "want 人 to の形です。", "want you to listen が正しい形です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">This problem is too difficult for me ___.</span>", "to solve", "too ... to の形です。", "too difficult to solve です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">I do not know what ___ next.</span>", "to do", "疑問詞 + to の形です。", "what to do で何をすべきかです。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">She was kind enough ___ me the way.</span>", "to show", "形容詞 enough to の形です。", "kind enough to show です。"],
    ["空欄に入る語句を書きなさい。<br><span class=\"math\">My mother made me ___ my room before dinner.</span>", "clean", "使役動詞 make + 人 + 原形です。", "made me clean が正しい形です。"],
  ],
});

function generateAdvancedEnglishProblem(unitId, title, skill, answerLabel = "答え") {
  const [prompt, answer, clue, explanation] = pick(ADVANCED_ENGLISH_BANK[unitId] || []);
  return englishProblem({
    kind: `${unitId}:advanced`,
    title,
    skill,
    text: prompt,
    answerLabel,
    answer,
    hint: clue,
    explain: explanation || `答えは ${answer} です。`,
    visual: { type: "english", heading: "Advanced", lines: [skill, "高難度", "考えて入力"] },
  });
}

function generateExpandedEnglishProblem(unitId, level, title, skill, answerLabel = "答え") {
  const factory = ENGLISH_EXPANSION_GENERATORS[unitId];
  if (!factory) return null;
  const item = factory(level);
  if (!item) return null;
  const effectiveTitle = level === "advanced" && !title.includes("発展") ? `${skill}の発展` : title;
  return englishProblem({
    kind: `${unitId}:expanded-${item.kind || level}`,
    title: effectiveTitle,
    skill,
    text: item.prompt,
    answerLabel,
    answer: item.answer,
    hint: item.hint,
    explain: item.explain || `答えは ${item.answer} です。`,
    visual: { type: "english", heading: skill, lines: [levelLabel(level), "組み合わせ問題", "入力して確認"] },
  });
}

const ENGLISH_EXPANSION_GENERATORS = Object.freeze({
  "e1-vocab": generateExpandedVocabularyProblem,
  "e1-be": generateExpandedBeVerbProblem,
  "e1-present": generateExpandedPresentVerbProblem,
  "e1-word-order": generateExpandedWordOrderProblem,
  "e2-past": generateExpandedPastProblem,
  "e2-future": generateExpandedFutureProblem,
  "e2-comparison": generateExpandedComparisonProblem,
  "e2-there": generateExpandedThereProblem,
  "e3-perfect": generateExpandedPerfectProblem,
  "e3-passive": generateExpandedPassiveProblem,
  "e3-relative": generateExpandedRelativeProblem,
  "e3-infinitive": generateExpandedInfinitiveProblem,
});

const EXPANDED_VOCABULARY = Object.freeze({
  basic: [
    ["「鉛筆」を英語で書きなさい。", "pencil", "教室で使うものです。"],
    ["「机」を英語で書きなさい。", "desk", "教室や部屋にあります。"],
    ["「窓」を英語で書きなさい。", "window", "部屋にあるものです。"],
    ["「夕食」を英語で書きなさい。", "dinner", "夜に食べる食事です。"],
    ["「兄弟」を英語で書きなさい。", "brother", "男の兄弟です。"],
    ["「姉妹」を英語で書きなさい。", "sister", "女の兄弟です。"],
    ["「川」を英語で書きなさい。", "river", "自然を表す語です。"],
    ["「町」を英語で書きなさい。", "town", "人が住む場所です。"],
    ["「写真」を英語で書きなさい。", "picture", "見るものです。"],
    ["「質問」を英語で書きなさい。", "question", "たずねる内容です。"],
  ],
  standard: [
    ["「習慣」を英語で書きなさい。", "habit", "毎日の行動です。"],
    ["「理由」を英語で書きなさい。", "reason", "なぜ、に答える語です。"],
    ["「文化」を英語で書きなさい。", "culture", "生活や考え方のまとまりです。"],
    ["「未来」を英語で書きなさい。", "future", "これからの時間です。"],
    ["「歴史」を英語で書きなさい。", "history", "過去の出来事です。"],
    ["「自然」を英語で書きなさい。", "nature", "人が作ったものではありません。"],
    ["「情報」を英語で書きなさい。", "information", "知らせや知識です。"],
    ["「練習」を英語で書きなさい。", "practice", "上達のために行います。"],
    ["「大会」を英語で書きなさい。", "contest", "競い合う場です。"],
    ["「地域」を英語で書きなさい。", "area", "場所のまとまりです。"],
  ],
  advanced: [
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">a person who visits a place for pleasure</span>", "tourist", "旅行で訪れる人です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">a plan for doing something</span>", "schedule", "予定を表す名詞です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">a problem that needs careful thinking</span>", "issue", "議論すべき問題です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">the ability to do something well</span>", "skill", "能力や技術を表します。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">a result that you try to achieve</span>", "goal", "目標を表す語です。"],
    ["次の説明に合う英単語を1語で書きなさい。<br><span class=\"math\">something important that happens</span>", "event", "出来事や行事です。"],
  ],
});

function generateExpandedVocabularyProblem(level) {
  const [prompt, answer, hint] = pickByLevel(EXPANDED_VOCABULARY, level);
  return { kind: "vocab", prompt, answer, hint, explain: `答えは ${answer} です。` };
}

function generateExpandedBeVerbProblem(level) {
  const subjects = pickByLevel(
    {
      basic: [
        ["I", "am"], ["You", "are"], ["He", "is"], ["She", "is"], ["They", "are"], ["We", "are"], ["This", "is"], ["Those boys", "are"],
      ],
      standard: [
        ["My parents", "are"], ["The library", "is"], ["These flowers", "are"], ["A lot of students", "are"], ["Some milk", "is"], ["The news", "is"], ["Each answer", "is"],
      ],
      advanced: [
        ["The results of the survey", "are"], ["One of the pictures", "is"], ["Neither Ken nor his brother", "is"], ["The books on the shelf", "are"], ["The information on the website", "is"],
      ],
    },
    level
  );
  const complements = pick(level === "basic" ? ["happy", "in the park", "a student", "busy", "from Osaka"] : ["important to us", "different from mine", "on the table", "popular in our town", "useful for the report"]);
  const pattern = pick(level === "basic" ? ["plain", "question"] : ["plain", "negative", "question"]);
  const [subject, be] = subjects;
  if (pattern === "question") return { kind: "be-question", prompt: `空欄に入るbe動詞を書きなさい。<br><span class="math">___ ${subject} ${complements}?</span>`, answer: capitalize(be), hint: "疑問文ではbe動詞が前に出ます。", explain: `${subject} に合う be動詞は ${be} です。` };
  if (pattern === "negative") return { kind: "be-negative", prompt: `空欄に入るbe動詞を書きなさい。<br><span class="math">${subject} ___ not ${complements}.</span>`, answer: be, hint: "主語の中心を見ます。", explain: `${subject} に合う be動詞は ${be} です。` };
  return { kind: "be-plain", prompt: `空欄に入るbe動詞を書きなさい。<br><span class="math">${subject} ___ ${complements}.</span>`, answer: be, hint: "主語に合わせてbe動詞を選びます。", explain: `${subject} に合う be動詞は ${be} です。` };
}

function generateExpandedPresentVerbProblem(level) {
  const subject = pickByLevel(
    {
      basic: [["He", "does"], ["She", "does"], ["I", "do"], ["They", "do"], ["We", "do"], ["My brother", "does"]],
      standard: [["The bus", "does"], ["My friends", "do"], ["A student in my class", "does"], ["These children", "do"], ["Ken and Yui", "do"]],
      advanced: [["One of my friends", "does"], ["The teacher with two students", "does"], ["The trains on this line", "do"], ["My sister", "does"], ["Your parents", "do"]],
    },
    level
  );
  const verb = pick([
    ["play soccer", "plays soccer"], ["study English", "studies English"], ["go to school", "goes to school"], ["watch videos", "watches videos"], ["have lunch", "has lunch"], ["read books", "reads books"], ["clean the room", "cleans the room"], ["do homework", "does homework"],
  ]);
  const pattern = pick(level === "basic" ? ["form", "question"] : ["form", "negative", "question"]);
  const [subjectText, helper] = subject;
  const [base, third] = verb;
  const [baseVerb, ...objectParts] = base.split(" ");
  const object = objectParts.join(" ");
  if (pattern === "negative") return { kind: "present-negative", prompt: `空欄に入る語句を書きなさい。<br><span class="math">${subjectText} ___ not ${base} every day.</span>`, answer: helper, hint: "否定文では do / does を使います。", explain: `${subjectText} に合わせて ${helper} not を使います。` };
  if (pattern === "question") return { kind: "present-question", prompt: `空欄に入る語を書きなさい。<br><span class="math">___ ${subjectText.toLowerCase()} ${base} on Sundays?</span>`, answer: capitalize(helper), hint: "疑問文では do / does が前に出ます。", explain: `${subjectText} に合わせて ${helper} を使います。` };
  return { kind: "present-form", prompt: `かっこの語を正しい形にしなさい。<br><span class="math">${subjectText} ___ ${object} every day. (${baseVerb})</span>`, answer: helper === "does" ? third.split(" ")[0] : baseVerb, hint: "主語が三人称単数かを見ます。", explain: `${subjectText} には ${helper === "does" ? third : base} を使います。` };
}

function generateExpandedWordOrderProblem(level) {
  const items = {
    basic: [
      ["私は毎朝英語を勉強します。", "I study English every morning."],
      ["彼女は放課後に音楽を聞きます。", "She listens to music after school."],
      ["あなたはこの本を読みますか。", "Do you read this book?"],
      ["私たちは日曜日に公園へ行きます。", "We go to the park on Sunday."],
      ["これは私の新しいノートです。", "This is my new notebook."],
    ],
    standard: [
      ["私は昨日、駅で友だちに会いました。", "I met my friend at the station yesterday."],
      ["彼は明日、祖母を訪ねる予定です。", "He is going to visit his grandmother tomorrow."],
      ["この町には大きな図書館があります。", "There is a large library in this town."],
      ["彼女は私より早く起きます。", "She gets up earlier than I do."],
      ["私たちは昼食を食べたあとで宿題をしました。", "We did our homework after we ate lunch."],
    ],
    advanced: [
      ["彼がなぜ遅れたのか私は知りません。", "I do not know why he was late."],
      ["これは私が先週読んだ本です。", "This is the book I read last week."],
      ["雨が降っていたので、試合は中止されました。", "The game was canceled because it was raining."],
      ["彼女は何をすべきか分かりませんでした。", "She did not know what to do."],
      ["英語を学ぶことは、世界を知る助けになります。", "Learning English helps us know the world."],
    ],
  };
  const [jp, answer] = pickByLevel(items, level);
  return { kind: "word-order", prompt: `次の日本語を英語にしなさい。<br><span class="math">${jp}</span>`, answer, hint: "主語、動詞、時や場所の語順を整えます。", explain: `自然な英文は "${answer}" です。` };
}

function generateExpandedPastProblem(level) {
  const verbs = pickByLevel(
    {
      basic: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["play", "played"], ["visit", "visited"], ["study", "studied"]],
      standard: [["write", "wrote"], ["take", "took"], ["come", "came"], ["make", "made"], ["read", "read"], ["forget", "forgot"], ["begin", "began"]],
      advanced: [["read a book", "was reading a book"], ["wait for the bus", "was waiting for the bus"], ["leave", "had left"], ["finish the work", "had finished the work"], ["speak to Ken", "was speaking to Ken"]],
    },
    level
  );
  if (level === "advanced") return { kind: "past-advanced", prompt: `空欄に入る語句を書きなさい。<br><span class="math">I ___ when the phone rang. (${verbs[0]})</span>`, answer: verbs[1], hint: "過去進行形や過去完了を考えます。", explain: `この文では ${verbs[1]} が自然です。` };
  return { kind: "past-form", prompt: `かっこの語を過去形にしなさい。<br><span class="math">I ___ yesterday. (${verbs[0]})</span>`, answer: verbs[1], hint: "規則動詞か不規則動詞かを見ます。", explain: `${verbs[0]} の過去形は ${verbs[1]} です。` };
}

function generateExpandedFutureProblem(level) {
  const items = {
    basic: [["I ___ visit Kyoto tomorrow.", "will"], ["She is ___ to cook dinner.", "going"], ["We ___ have a test next week.", "will"], ["They are ___ to play tennis.", "going"]],
    standard: [["Ken will ___ a speech tomorrow. (give)", "give"], ["I am going to ___ my report tonight. (finish)", "finish"], ["___ you help me after school?", "Will"], ["We are not ___ to swim today.", "going"]],
    advanced: [["The meeting is about ___ start.", "to"], ["If it rains, the game will ___ canceled.", "be"], ["Are you going to ___ part in the contest?", "take"], ["By next year, I will ___ in high school.", "be"], ["She is going to ___ a presentation in English.", "give"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "future", prompt: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`, answer, hint: "will / be going to / 未来の受け身を考えます。", explain: `この文では ${answer} を入れます。` };
}

function generateExpandedComparisonProblem(level) {
  const items = {
    basic: [["This bag is ___ than that one. (heavy)", "heavier"], ["Ken is the ___ in his class. (tall)", "tallest"], ["This question is ___ than that one. (easy)", "easier"], ["This book is the ___ of the three. (interesting)", "most interesting"]],
    standard: [["This story is as ___ as that one. (funny)", "funny"], ["My score is ___ than last time. (good)", "better"], ["This problem is ___ difficult than the first one. (more)", "more"], ["Mt. Fuji is ___ than Mt. Aso. (high)", "higher"]],
    advanced: [["This is one of the ___ books in the library. (popular)", "most popular"], ["The more I practice, the ___ I become. (good)", "better"], ["No other student is as ___ as Ken. (fast)", "fast"], ["This bag is not as ___ as mine. (heavy)", "heavy"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "comparison", prompt: `かっこの語を正しい形にしなさい。<br><span class="math">${sentence}</span>`, answer, hint: "比較級・最上級・as ... as を見分けます。", explain: `正しい形は ${answer} です。` };
}

function generateExpandedThereProblem(level) {
  const items = {
    basic: [["There ___ a dog under the table.", "is"], ["There ___ three books on the desk.", "are"], ["There ___ a park near my house.", "is"], ["There ___ many students in the room.", "are"]],
    standard: [["There ___ some water in the bottle.", "is"], ["There ___ no buses near my house.", "are"], ["There ___ a lot of clouds today.", "are"], ["There ___ a museum and two parks in this town.", "is"]],
    advanced: [["There ___ been many changes in this town.", "have"], ["There ___ to be a small castle here.", "used"], ["There will ___ an online meeting tomorrow.", "be"], ["There ___ not seem to be enough time.", "does"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "there", prompt: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`, answer, hint: "There の後の名詞や時制を見ます。", explain: `この文では ${answer} を入れます。` };
}

function generateExpandedPerfectProblem(level) {
  const items = {
    basic: [["I have ___ in Tokyo for three years. (live)", "lived"], ["She has ___ her homework. (finish)", "finished"], ["Have you ever ___ to Kyoto? (be)", "been"], ["We have ___ this movie before. (see)", "seen"]],
    standard: [["He has just ___ lunch. (eat)", "eaten"], ["I have never ___ snow. (see)", "seen"], ["She has already ___ the book. (read)", "read"], ["They have ___ here since 2020. (live)", "lived"]],
    advanced: [["She has been ___ for the bus for twenty minutes.", "waiting"], ["This is the first time I have ___ sushi. (make)", "made"], ["How long ___ your brother been on the team?", "has"], ["The train has already ___. (leave)", "left"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "perfect", prompt: `空欄を正しい形で補いなさい。<br><span class="math">${sentence}</span>`, answer, hint: "have / has と過去分詞、継続表現を確認します。", explain: `正しい形は ${answer} です。` };
}

function generateExpandedPassiveProblem(level) {
  const items = {
    basic: [["This book was ___ by many students. (read)", "read"], ["The song is ___ by everyone. (love)", "loved"], ["English is ___ in many countries. (speak)", "spoken"], ["The window was ___ yesterday. (break)", "broken"]],
    standard: [["Rice is ___ in many parts of Japan. (grow)", "grown"], ["This temple was ___ a long time ago. (build)", "built"], ["The room is ___ every day. (clean)", "cleaned"], ["This picture was ___ by my sister. (draw)", "drawn"]],
    advanced: [["English ___ in many countries.", "is spoken"], ["This bridge has ___ used for fifty years.", "been"], ["The old house will be ___. (repair)", "repaired"], ["Ken ___ invited to the party.", "was not"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "passive", prompt: `受け身の文に合う形にしなさい。<br><span class="math">${sentence}</span>`, answer, hint: "be動詞 + 過去分詞を作ります。", explain: `正しい形は ${answer} です。` };
}

function generateExpandedRelativeProblem(level) {
  const items = {
    basic: [["The boy ___ is running is my brother.", "who"], ["This is the book ___ I bought yesterday.", "that"], ["The girl ___ plays the piano is Emi.", "who"], ["The song ___ I like best is this.", "that"]],
    standard: [["The man ___ lives next door is a teacher.", "who"], ["The bike ___ Ken uses is new.", "that"], ["The student ___ won the race is my friend.", "who"], ["This is the park ___ we visited last week.", "that"]],
    advanced: [["I know a girl ___ father is a doctor.", "whose"], ["The reason ___ I was late was simple.", "why"], ["This is the village ___ my grandmother grew up.", "where"], ["The day ___ we first visited Kyoto is special.", "when"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "relative", prompt: `空欄に入る関係詞を書きなさい。<br><span class="math">${sentence}</span>`, answer, hint: "人・もの・所有・場所・理由を見分けます。", explain: `この文では ${answer} が自然です。` };
}

function generateExpandedInfinitiveProblem(level) {
  const items = {
    basic: [["It is important ___ study every day.", "to"], ["I went to the library ___ read books.", "to"], ["She wants ___ be a teacher.", "to"], ["I have many things ___ do today.", "to"]],
    standard: [["Ken got up early ___ catch the train.", "to"], ["I need something ___ drink.", "to"], ["She was happy ___ hear the news.", "to"], ["My dream is ___ work in Canada.", "to"]],
    advanced: [["I want you ___ more carefully.", "to listen"], ["This problem is too difficult for me ___.", "to solve"], ["I do not know what ___ next.", "to do"], ["My mother made me ___ my room.", "clean"]],
  };
  const [sentence, answer] = pickByLevel(items, level);
  return { kind: "infinitive", prompt: `空欄に入る語句を書きなさい。<br><span class="math">${sentence}</span>`, answer, hint: "to不定詞・疑問詞+to・使役を見分けます。", explain: `この文では ${answer} を入れます。` };
}

function capitalize(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

function levelLabel(level) {
  return levels.find((item) => item.id === level)?.name || level;
}

function generateE1VocabularyProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e1-vocab", level, "語彙の確認", "単語", "英単語");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e1-vocab", "語彙の発展", "語彙", "英単語");
  const [prompt, answer, clue] = pickByLevel(
    {
      basic: [
        ["「りんご」を英語で書きなさい。", "apple", "身近な食べ物です。"],
        ["「本」を英語で書きなさい。", "book", "読むものです。"],
        ["「友だち」を英語で書きなさい。", "friend", "人を表す語です。"],
        ["「学校」を英語で書きなさい。", "school", "学ぶ場所です。"],
        ["「先生」を英語で書きなさい。", "teacher", "教える人です。"],
        ["「音楽」を英語で書きなさい。", "music", "聴いたり演奏したりします。"],
        ["「朝食」を英語で書きなさい。", "breakfast", "朝に食べます。"],
        ["「図書館」を英語で書きなさい。", "library", "本を借りる場所です。"],
      ],
      standard: [
        ["昼に食べる食事を英語で書きなさい。", "lunch", "breakfast, lunch, dinner の真ん中です。"],
        ["「季節」を英語で書きなさい。", "season", "spring, summer などのまとまりです。"],
        ["「自転車」を英語で書きなさい。", "bike", "bicycle とも言います。"],
        ["「家族」を英語で書きなさい。", "family", "身近な人たちです。"],
        ["「宿題」を英語で書きなさい。", "homework", "家で取り組む課題です。"],
        ["「公園」を英語で書きなさい。", "park", "外で遊ぶ場所です。"],
        ["「手紙」を英語で書きなさい。", "letter", "書いて送るものです。"],
        ["「駅」を英語で書きなさい。", "station", "電車に関係します。"],
      ],
      advanced: [
        ["A place where students study is a ___.", "school", "説明から単語を推理します。"],
        ["A person who teaches students is a ___.", "teacher", "職業を表す語です。"],
        ["A building where you can borrow books is a ___.", "library", "本の場所です。"],
        ["A meal you eat in the morning is ___.", "breakfast", "morning meal です。"],
        ["A person you like and spend time with is a ___.", "friend", "人間関係の語です。"],
        ["Things you do after school for class are ___.", "homework", "課題を表す語です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e1-vocab:word",
    title: "基本語彙を書く",
    skill: "単語",
    text: `${prompt}`,
    answerLabel: "英単語",
    answer,
    hint: clue,
    explain: `答えは ${answer} です。`,
  });
}

function generateE1BeVerbProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e1-be", level, "be動詞の確認", "be動詞");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e1-be", "be動詞の発展", "be動詞");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["I ___ a student.", "am", "I には am を使います。"],
        ["You ___ kind.", "are", "You には are を使います。"],
        ["He ___ my brother.", "is", "He には is を使います。"],
        ["She ___ from Osaka.", "is", "She には is を使います。"],
        ["They ___ friends.", "are", "They は複数です。"],
        ["This ___ my bag.", "is", "This は単数です。"],
      ],
      standard: [
        ["I ___ not tired.", "am", "否定文でも be動詞は主語で決まります。"],
        ["___ you a tennis player?", "Are", "疑問文では be動詞が前に出ます。"],
        ["My parents ___ busy.", "are", "parents は複数です。"],
        ["The cat ___ under the chair.", "is", "cat は単数です。"],
        ["We ___ in the same class.", "are", "We には are を使います。"],
      ],
      advanced: [
        ["Ken and I ___ good friends.", "are", "Ken and I は We と同じです。"],
        ["The books on the desk ___ old.", "are", "中心になる名詞 books を見ます。"],
        ["My favorite subject ___ English.", "is", "subject は単数です。"],
        ["___ your sister a junior high school student?", "Is", "your sister は単数です。"],
        ["It ___ not sunny today.", "is", "天気の文では It を主語にします。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e1-be:blank",
    title: "be動詞を選ぶ",
    skill: "be動詞",
    text: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "be動詞",
    answer,
    hint: clue,
    explain: `この文では ${answer} を使います。`,
  });
}

function generateE1PresentVerbProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e1-present", level, "現在形の確認", "現在形");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e1-present", "現在形の発展", "現在形");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["He ___ soccer. (play)", "plays", "三人称単数なので s が付きます。"],
        ["She ___ English every day. (study)", "studies", "子音字+y は ies にします。"],
        ["I ___ milk. (drink)", "drink", "I では原形です。"],
        ["They ___ in Tokyo. (live)", "live", "They は複数です。"],
        ["My brother ___ a bike. (have)", "has", "have は has になります。"],
      ],
      standard: [
        ["Yuki ___ her room on Sundays. (clean)", "cleans", "主語は三人称単数です。"],
        ["My friends ___ video games after school. (play)", "play", "friends は複数です。"],
        ["The dog ___ very fast. (run)", "runs", "dog は単数です。"],
        ["We ___ lunch at twelve. (eat)", "eat", "We では原形です。"],
        ["Tom ___ his homework before dinner. (do)", "does", "do は does になります。"],
      ],
      advanced: [
        ["She ___ TV before breakfast. (not watch)", "does not watch", "三人称単数の否定は does not + 原形です。"],
        ["___ he play the guitar?", "Does", "三人称単数の疑問文は Does で始めます。"],
        ["My sister ___ to school by bus. (go)", "goes", "go は goes になります。"],
        ["They ___ have any pencils.", "do not", "複数主語の否定は do not です。"],
        ["___ your parents work on Saturdays?", "Do", "parents は複数です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e1-present:verb",
    title: "一般動詞の現在形",
    skill: "現在形",
    text: `空欄を正しい形で補いなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `正しい形は ${answer} です。`,
  });
}

function generateE1WordOrderProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e1-word-order", level, "語順の確認", "文の語順", "英文");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e1-word-order", "語順の発展", "文の語順", "英文");
  const [jp, answer, cards] = pickByLevel(
    {
      basic: [
        ["私は音楽が好きです。", "I like music.", ["I", "like", "music"]],
        ["彼女は英語を話します。", "She speaks English.", ["She", "speaks", "English"]],
        ["あなたはテニスをしますか。", "Do you play tennis?", ["Do", "you", "play", "tennis"]],
        ["私は学生ではありません。", "I am not a student.", ["I", "am", "not", "a", "student"]],
      ],
      standard: [
        ["私たちは放課後にサッカーをします。", "We play soccer after school.", ["We", "play", "soccer", "after", "school"]],
        ["彼は毎朝早く起きます。", "He gets up early every morning.", ["He", "gets", "up", "early", "every", "morning"]],
        ["この本はおもしろいです。", "This book is interesting.", ["This", "book", "is", "interesting"]],
        ["あなたのお母さんは料理をしますか。", "Does your mother cook?", ["Does", "your", "mother", "cook"]],
      ],
      advanced: [
        ["私は昨日、図書館で友だちに会いました。", "I met my friend at the library yesterday.", ["I", "met", "my", "friend", "at", "the", "library", "yesterday"]],
        ["彼女は英語を勉強するために早く起きました。", "She got up early to study English.", ["She", "got", "up", "early", "to", "study", "English"]],
        ["私たちは来週テストがあります。", "We will have a test next week.", ["We", "will", "have", "a", "test", "next", "week"]],
        ["彼はクラスで一番速く走ります。", "He runs the fastest in his class.", ["He", "runs", "the", "fastest", "in", "his", "class"]],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e1-word-order:sentence",
    title: "英語の語順",
    skill: "文の語順",
    text: `次の日本語を英語にしなさい。<br>${jp}<br><span class="math">${cards.join(" / ")}</span>`,
    answerLabel: "英文",
    answer,
    hint: "主語、動詞、補足情報の順を意識します。",
    explain: `正しい語順は "${answer}" です。`,
    visual: { type: "english", heading: "Word Order", lines: cards.slice(0, 6) },
  });
}

function generateE2PastProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e2-past", level, "過去表現の確認", "過去形");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e2-past", "過去表現の発展", "過去形");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["I ___ to the library yesterday. (go)", "went", "go の過去形です。"],
        ["She ___ dinner last night. (cook)", "cooked", "規則動詞なので ed を付けます。"],
        ["We ___ soccer yesterday. (play)", "played", "play の過去形です。"],
        ["He ___ a letter last week. (write)", "wrote", "write は不規則に変化します。"],
      ],
      standard: [
        ["They ___ a movie last Sunday. (see)", "saw", "see の過去形です。"],
        ["My father ___ home at nine. (come)", "came", "come は came になります。"],
        ["I ___ my room yesterday. (clean)", "cleaned", "規則動詞です。"],
        ["She ___ her bag at school. (forget)", "forgot", "forget は forgot になります。"],
        ["Ken ___ lunch at twelve. (eat)", "ate", "eat の過去形です。"],
      ],
      advanced: [
        ["I ___ not watch TV last night.", "did", "過去の否定は did not + 原形です。"],
        ["___ you finish your homework yesterday?", "Did", "過去の疑問文は Did で始めます。"],
        ["She did not ___ to school yesterday. (go)", "go", "did not の後は原形です。"],
        ["What ___ you do last weekend?", "did", "疑問詞の後に did を置きます。"],
        ["Ken ___ his bike to the park and met his friends. (ride)", "rode", "ride は rode に変化します。"],
        ["I ___ my umbrella because it was sunny. (not take)", "did not take", "過去の否定は did not + 原形です。"],
        ["Why ___ Mika leave the classroom early?", "did", "疑問詞 why の後に did を置きます。"],
        ["They ___ a new word in English class yesterday. (learn)", "learned", "規則動詞なので learned です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e2-past:verb",
    title: "過去形を書く",
    skill: "過去形",
    text: `空欄を正しい形で補いなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `正しい形は ${answer} です。`,
  });
}

function generateE2FutureProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e2-future", level, "未来表現の確認", "未来表現");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e2-future", "未来表現の発展", "未来表現");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["I ___ visit Kyoto tomorrow.", "will", "未来の予定を表します。"],
        ["She is ___ to study English tonight.", "going", "be going to の形です。"],
        ["We ___ have a test next week.", "will", "next week が未来のヒントです。"],
        ["They are ___ to play soccer tomorrow.", "going", "are going to の形です。"],
      ],
      standard: [
        ["I am going to ___ my grandmother this weekend. (visit)", "visit", "going to の後は動詞の原形です。"],
        ["___ you help me after school?", "Will", "未来の疑問文です。"],
        ["Ken will ___ a new bike next month. (buy)", "buy", "will の後は原形です。"],
        ["We are not ___ to swim today.", "going", "be going to の否定文です。"],
      ],
      advanced: [
        ["It will ___ sunny tomorrow. (be)", "be", "will の後は原形です。"],
        ["What are you going to ___ next Sunday? (do)", "do", "going to の後は原形です。"],
        ["She ___ going to make dinner tonight.", "is", "主語 She に合う be動詞です。"],
        ["I will not ___ late tomorrow. (be)", "be", "will not の後も原形です。"],
        ["We are going to ___ the science museum during summer vacation. (visit)", "visit", "be going to の後は動詞の原形です。"],
        ["___ your brother going to join the soccer team?", "Is", "your brother は単数なので Is で始めます。"],
        ["They will ___ a presentation about their town next week. (give)", "give", "will の後は原形です。"],
        ["I am not going to ___ games before I finish my homework. (play)", "play", "not going to の後も原形です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e2-future:blank",
    title: "未来表現",
    skill: "未来表現",
    text: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `この文では ${answer} を入れます。`,
  });
}

function generateE2ComparisonProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e2-comparison", level, "比較表現の確認", "比較");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e2-comparison", "比較表現の発展", "比較");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["This bag is ___ than that one. (heavy)", "heavier", "than が比較級の合図です。"],
        ["Ken is the ___ in his class. (tall)", "tallest", "the と範囲が最上級の合図です。"],
        ["Math is ___ than English for me. (easy)", "easier", "easy は y を i にして er です。"],
        ["This book is the ___ of the three. (interesting)", "most interesting", "長い語は most を使います。"],
      ],
      standard: [
        ["My bag is ___ than yours. (light)", "lighter", "比較級です。"],
        ["This question is the ___ in the test. (difficult)", "most difficult", "長い形容詞の最上級です。"],
        ["Winter is ___ than fall. (cold)", "colder", "短い語は er を付けます。"],
        ["Soccer is ___ than baseball for me. (exciting)", "more exciting", "長い語は more を使います。"],
      ],
      advanced: [
        ["This is the ___ movie I have ever seen. (good)", "best", "good の最上級は best です。"],
        ["My score is ___ than last time. (bad)", "worse", "bad の比較級は worse です。"],
        ["Mt. Fuji is ___ than Mt. Aso. (high)", "higher", "高さの比較です。"],
        ["This story is as ___ as that one. (funny)", "funny", "as ... as では原級です。"],
        ["This bag is not as ___ as mine. (heavy)", "heavy", "not as ... as でも原級を使います。"],
        ["English is ___ interesting than I expected. (more)", "more", "長い形容詞の比較級は more を使います。"],
        ["This is the ___ question of all. (difficult)", "most difficult", "the と of all が最上級の合図です。"],
        ["My sister gets up ___ than I do. (early)", "earlier", "early は y を i にして er を付けます。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e2-comparison:form",
    title: "比較表現",
    skill: "比較",
    text: `かっこの語を正しい比較の形にしなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `正しい形は ${answer} です。`,
  });
}

function generateE2ThereProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e2-there", level, "There構文の確認", "There is / are");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e2-there", "There構文の発展", "There is / are");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["There ___ a cat under the table.", "is", "cat は単数です。"],
        ["There ___ three books on the desk.", "are", "books は複数です。"],
        ["There ___ many students in the room.", "are", "students は複数です。"],
        ["There ___ a park near my house.", "is", "park は単数です。"],
      ],
      standard: [
        ["There ___ some milk in the glass.", "is", "milk は数えない名詞です。"],
        ["There ___ two pencils in my pencil case.", "are", "pencils は複数です。"],
        ["There ___ a lot of clouds today.", "are", "clouds は複数です。"],
        ["There ___ no water in the bottle.", "is", "water は数えない名詞です。"],
      ],
      advanced: [
        ["___ there any questions?", "Are", "questions は複数です。"],
        ["There ___ not any chairs in this room.", "are", "chairs は複数です。"],
        ["There ___ a museum and two parks in this town.", "is", "最初の名詞 museum に合わせます。"],
        ["How many students ___ there in your class?", "are", "students は複数です。"],
        ["There ___ two pens and an eraser in the box.", "are", "最初の名詞 two pens に合わせます。"],
        ["There will ___ a school festival next month.", "be", "will の後は be を使います。"],
        ["There ___ going to be a test tomorrow.", "is", "a test に合わせて is going to be です。"],
        ["There ___ no buses near my house yesterday.", "were", "過去で buses は複数なので were です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e2-there:blank",
    title: "There is / are",
    skill: "There is / are",
    text: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `この文では ${answer} を使います。`,
  });
}

function generateE3PerfectProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e3-perfect", level, "現在完了の確認", "現在完了");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e3-perfect", "現在完了の発展", "現在完了");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["I have ___ in Tokyo for three years. (live)", "lived", "have + 過去分詞です。"],
        ["She has ___ her homework. (finish)", "finished", "finish の過去分詞です。"],
        ["Have you ever ___ to Kyoto? (be)", "been", "be の過去分詞です。"],
        ["We have ___ this movie before. (see)", "seen", "see の過去分詞です。"],
      ],
      standard: [
        ["He has just ___ lunch. (eat)", "eaten", "eat の過去分詞です。"],
        ["I have never ___ snow. (see)", "seen", "never と現在完了です。"],
        ["They have ___ in this town since 2020. (live)", "lived", "since が継続のヒントです。"],
        ["She has already ___ the book. (read)", "read", "read の過去分詞はつづりが同じです。"],
      ],
      advanced: [
        ["How long have you ___ English? (study)", "studied", "How long と現在完了です。"],
        ["I have not ___ breakfast yet. (eat)", "eaten", "yet と現在完了の否定です。"],
        ["Has Ken ever ___ abroad? (go)", "gone", "go の過去分詞です。"],
        ["We have ___ each other for ten years. (know)", "known", "know の過去分詞です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e3-perfect:participle",
    title: "現在完了",
    skill: "現在完了",
    text: `かっこの動詞を正しい形にしなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `正しい形は ${answer} です。`,
  });
}

function generateE3PassiveProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e3-passive", level, "受け身の確認", "受動態");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e3-passive", "受け身の発展", "受動態");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["This book was ___ by many students. (read)", "read", "受け身は be + 過去分詞です。"],
        ["The song is ___ by everyone. (love)", "loved", "love の過去分詞です。"],
        ["English is ___ in many countries. (speak)", "spoken", "speak の過去分詞です。"],
        ["The window was ___ yesterday. (break)", "broken", "break の過去分詞です。"],
      ],
      standard: [
        ["This picture was ___ by my sister. (draw)", "drawn", "draw の過去分詞です。"],
        ["Rice is ___ in many parts of Japan. (grow)", "grown", "grow の過去分詞です。"],
        ["The room is ___ every day. (clean)", "cleaned", "規則動詞です。"],
        ["This temple was ___ a long time ago. (build)", "built", "build の過去分詞です。"],
      ],
      advanced: [
        ["The meeting will be ___ tomorrow. (hold)", "held", "will be + 過去分詞です。"],
        ["This story has been ___ by many children. (read)", "read", "現在完了の受け身です。"],
        ["The computer was not ___ by Ken. (use)", "used", "否定でも過去分詞です。"],
        ["Were these flowers ___ by students? (plant)", "planted", "疑問文でも過去分詞です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e3-passive:participle",
    title: "受け身",
    skill: "受動態",
    text: `受け身の文に合う形にしなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `正しい形は ${answer} です。`,
  });
}

function generateE3RelativeProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e3-relative", level, "関係詞の確認", "関係代名詞");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e3-relative", "関係詞の発展", "関係代名詞");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["The boy ___ is running is my brother.", "who", "人を説明しています。"],
        ["This is the book ___ I bought yesterday.", "that", "ものを説明しています。"],
        ["The girl ___ plays the piano is Emi.", "who", "人を説明しています。"],
        ["The song ___ I like best is this.", "that", "ものを説明しています。"],
      ],
      standard: [
        ["The man ___ lives next door is a teacher.", "who", "人を説明しています。"],
        ["The bike ___ Ken uses is new.", "that", "ものを説明しています。"],
        ["This is the park ___ we visited last week.", "that", "場所を表す名詞を説明しています。"],
        ["The student ___ won the race is my friend.", "who", "人を説明しています。"],
      ],
      advanced: [
        ["The book ___ cover is blue is mine.", "whose", "所有を表す関係代名詞です。"],
        ["The person ___ I respect most is my grandmother.", "that", "目的語になる関係代名詞です。"],
        ["This is the town ___ I was born.", "where", "場所を表す関係副詞です。"],
        ["The day ___ we first met was rainy.", "when", "時を表す関係副詞です。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e3-relative:pronoun",
    title: "関係代名詞",
    skill: "関係代名詞",
    text: `空欄に入る関係代名詞を書きなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `この文では ${answer} が自然です。`,
  });
}

function generateE3InfinitiveProblem(level, weights) {
  const expanded = generateExpandedEnglishProblem("e3-infinitive", level, "不定詞の確認", "不定詞");
  if (expanded) return expanded;
  if (level === "advanced") return generateAdvancedEnglishProblem("e3-infinitive", "不定詞の発展", "不定詞");
  const [sentence, answer, clue] = pickByLevel(
    {
      basic: [
        ["It is important ___ study every day.", "to", "to + 動詞の原形です。"],
        ["I went to the library ___ read books.", "to", "目的を表します。"],
        ["She wants ___ be a teacher.", "to", "want to の形です。"],
        ["I have many things ___ do today.", "to", "名詞を後ろから説明します。"],
      ],
      standard: [
        ["Ken got up early ___ catch the train.", "to", "目的を表す不定詞です。"],
        ["My dream is ___ work in Canada.", "to", "補語になる不定詞です。"],
        ["I need something ___ drink.", "to", "名詞を後ろから説明します。"],
        ["She was happy ___ hear the news.", "to", "感情の理由を表します。"],
      ],
      advanced: [
        ["This question is difficult ___ answer.", "to", "形容詞の後に続く不定詞です。"],
        ["I asked him ___ help me.", "to", "ask 人 to の形です。"],
        ["It is kind of you ___ help us.", "to", "It is ... of 人 to の形です。"],
        ["The first person ___ arrive was Mika.", "to", "名詞を後ろから説明します。"],
      ],
    },
    level
  );
  return englishProblem({
    kind: "e3-infinitive:to",
    title: "不定詞",
    skill: "不定詞",
    text: `空欄に入る語を書きなさい。<br><span class="math">${sentence}</span>`,
    answerLabel: "答え",
    answer,
    hint: clue,
    explain: `この文では ${answer} を入れます。`,
  });
}

function englishProblem({ kind, title, skill, text: problemText, answerLabel, answer, hint, explain, visual }) {
  return {
    kind,
    identityKey: `${kind}|${normalizeEnglishText(stripTags(problemText))}|${normalizeEnglishText(answer)}`,
    title,
    skill,
    text: formatEnglishQuestion(problemText, skill),
    hint,
    answerType: "single",
    answerLabel,
    displayAnswer: answer,
    visual: visual || { type: "english", heading: skill, lines: [answerLabel, "考えて入力", "スペル確認"] },
    check: (input) => englishEquals(input.value, answer),
    explain,
  };
}

function formatEnglishQuestion(problemText, skill) {
  return pick([
    problemText,
    `ミニ確認: ${problemText}`,
    `次の英語問題に答えなさい。<br>${problemText}`,
    `語尾や大文字を意識して答えなさい。<br>${problemText}`,
    `${skill}の確認です。<br>${problemText}`,
    `音読するつもりで読み、答えを書きなさい。<br>${problemText}`,
    `空欄や語順の手がかりを見つけて答えなさい。<br>${problemText}`,
    `今日の一問。<br>${problemText}`,
  ]);
}

const KNOWLEDGE_BANK = Object.freeze({
  "s1-plants": [
    ["花が咲き、種子でふえる植物を何といいますか。", "種子植物", ["しゅししょくぶつ"], "種子をつくるかどうかで分類します。"],
    ["維管束のうち、水や無機養分の通り道を何といいますか。", "道管", ["どうかん"], "根から吸い上げた水が通ります。"],
    ["シダ植物やコケ植物は何でふえますか。", "胞子", ["ほうし"], "花や種子をつくらない植物のふえ方です。"],
  ],
  "s1-substances": [
    ["水に溶けてアルカリ性を示す気体で、刺激臭があるものは何ですか。", "アンモニア", [], "水に非常によく溶けます。"],
    ["酸素を発生させるとき、うすい過酸化水素水に加える黒い物質は何ですか。", "二酸化マンガン", ["にさんかマンガン"], "反応を助けるはたらきをします。"],
    ["物質が水に溶けて全体が均一になった液体を何といいますか。", "水溶液", ["すいようえき"], "食塩水などが例です。"],
  ],
  "s1-light-sound": [
    ["光が鏡に当たってはね返る現象を何といいますか。", "反射", ["はんしゃ"], "入射角と反射角は等しくなります。"],
    ["光が別の物質へ進むときに折れ曲がる現象を何といいますか。", "屈折", ["くっせつ"], "空気から水へ進むときなどに起こります。"],
    ["音の高さは、音源の何の数で決まりますか。", "振動数", ["しんどうすう"], "振動数が多いほど高い音になります。"],
  ],
  "s2-chemical-change": [
    ["鉄と硫黄が結びついてできる黒い物質は何ですか。", "硫化鉄", ["りゅうかてつ"], "化合によって別の物質ができます。"],
    ["物質が酸素と結びつく化学変化を何といいますか。", "酸化", ["さんか"], "燃焼も酸化の一種です。"],
    ["酸化物から酸素を取り除く化学変化を何といいますか。", "還元", ["かんげん"], "酸化と反対の変化です。"],
  ],
  "s2-weather": [
    ["空気中の水蒸気が水滴に変わり始める温度を何といいますか。", "露点", ["ろてん"], "湿度の学習で大切な用語です。"],
    ["冷たい空気と暖かい空気の境目を何といいますか。", "前線", ["ぜんせん"], "天気の変化が起こりやすいところです。"],
    ["低気圧のまわりでは、北半球で風はどちら向きに吹き込みますか。", "反時計回り", ["はんとけいまわり"], "中心へ向かって渦を巻きます。"],
  ],
  "s2-electricity": [
    ["電流の単位を記号で書きなさい。", "A", ["アンペア"], "電流計で測ります。"],
    ["電圧の単位を記号で書きなさい。", "V", ["ボルト"], "電圧計で測ります。"],
    ["コイルに電流を流すと磁界ができる性質を利用したものを何といいますか。", "電磁石", ["でんじしゃく"], "モーターなどにも関係します。"],
  ],
  "s3-cells": [
    ["生物のからだをつくる基本単位を何といいますか。", "細胞", ["さいぼう"], "植物も動物も細胞からできています。"],
    ["親の形質が子に伝わることを何といいますか。", "遺伝", ["いでん"], "メンデルの法則で学びます。"],
    ["植物の細胞にあり、光合成を行うつくりは何ですか。", "葉緑体", ["ようりょくたい"], "緑色の粒です。"],
  ],
  "s3-motion-energy": [
    ["物体にはたらく重力の大きさを何といいますか。", "重さ", ["おもさ"], "質量とは区別します。"],
    ["物体がもつ運動によるエネルギーを何といいますか。", "運動エネルギー", ["うんどうエネルギー"], "速さが大きいほど大きくなります。"],
    ["高い位置にある物体がもつエネルギーを何といいますか。", "位置エネルギー", ["いちエネルギー"], "高さと重さに関係します。"],
  ],
  "s3-earth-space": [
    ["太陽の表面に見える黒い斑点を何といいますか。", "黒点", ["こくてん"], "周囲より温度が低く見えます。"],
    ["月が地球のまわりを回ることを何といいますか。", "公転", ["こうてん"], "地球が太陽のまわりを回ることも公転です。"],
    ["地球が地軸を中心に1日に1回回ることを何といいますか。", "自転", ["じてん"], "昼と夜に関係します。"],
  ],
  "so1-world-geography": [
    ["地球を南北に分ける0度の緯線を何といいますか。", "赤道", ["せきどう"], "緯度0度の線です。"],
    ["地球上の位置を表すために使う、東西の線の値を何といいますか。", "緯度", ["いど"], "赤道を基準にします。"],
    ["地球上の位置を表すために使う、南北の線の値を何といいますか。", "経度", ["けいど"], "本初子午線を基準にします。"],
  ],
  "so1-japan-geography": [
    ["日本で最も面積が大きい島は何ですか。", "本州", ["ほんしゅう"], "日本列島の中心となる島です。"],
    ["日本の標準時子午線が通る兵庫県の都市はどこですか。", "明石市", ["明石", "あかしし"], "東経135度です。"],
    ["北海道で見られる、冷涼な気候を何といいますか。", "冷帯", ["亜寒帯", "れいたい"], "気候区分で使う言葉です。"],
  ],
  "so1-ancient-history": [
    ["米づくりが広まった時代を何といいますか。", "弥生時代", ["弥生", "やよいじだい"], "水田稲作が広まりました。"],
    ["奈良に都がおかれた時代を何といいますか。", "奈良時代", ["奈良", "ならじだい"], "平城京が中心です。"],
    ["聖徳太子が定めた役人の心構えを何といいますか。", "十七条の憲法", ["17条の憲法"], "冠位十二階と合わせて覚えます。"],
  ],
  "so2-regions": [
    ["都道府県や市町村が行う政治を何といいますか。", "地方自治", ["ちほうじち"], "地域の課題を地域で解決します。"],
    ["日本で稲作が盛んな平野の一つで、山形県に広がる平野は何ですか。", "庄内平野", ["しょうないへいや"], "米づくりで有名です。"],
    ["日本海側で冬に雪が多い原因となる季節風は、どの方角から吹きますか。", "北西", ["北西の季節風"], "大陸から吹いてきます。"],
  ],
  "so2-medieval-modern": [
    ["鎌倉幕府を開いた人物は誰ですか。", "源頼朝", ["みなもとのよりとも"], "1192年または1185年で学ぶことがあります。"],
    ["江戸幕府を開いた人物は誰ですか。", "徳川家康", ["とくがわいえやす"], "関ヶ原の戦いの後に幕府を開きました。"],
    ["豊臣秀吉が行った、田畑の面積や収穫量を調べる政策を何といいますか。", "太閤検地", ["たいこうけんち"], "石高を調べました。"],
  ],
  "so2-industry": [
    ["原料を加工して製品をつくる産業を何といいますか。", "工業", ["こうぎょう"], "第二次産業に含まれます。"],
    ["農業・林業・漁業などをまとめて何といいますか。", "第一次産業", ["1次産業"], "自然から資源を得る産業です。"],
    ["大量の人や物を運ぶための道路・鉄道・港などをまとめて何といいますか。", "交通網", ["こうつうもう"], "地域の結びつきを強めます。"],
  ],
  "so3-modern-history": [
    ["明治時代に、近代国家を目指して行われた改革を何といいますか。", "明治維新", ["めいじいしん"], "廃藩置県などが行われました。"],
    ["第二次世界大戦後に制定された日本の憲法を何といいますか。", "日本国憲法", ["にほんこくけんぽう"], "1947年に施行されました。"],
    ["国際連合が発足したのは、どの戦争の後ですか。", "第二次世界大戦", ["第二次世界大戦後"], "国際平和を目的に発足しました。"],
  ],
  "so3-constitution": [
    ["日本国憲法の三つの基本原理の一つで、国民が政治の主体である考えを何といいますか。", "国民主権", ["こくみんしゅけん"], "主権は国民にあります。"],
    ["日本国憲法第9条に関係する基本原理を何といいますか。", "平和主義", ["へいわしゅぎ"], "戦争放棄を定めています。"],
    ["国会・内閣・裁判所が権力を分け合うしくみを何といいますか。", "三権分立", ["さんけんぶんりつ"], "権力の集中を防ぎます。"],
  ],
  "so3-economy": [
    ["ものやサービスを買う人を何といいますか。", "消費者", ["しょうひしゃ"], "家計の立場です。"],
    ["企業がものやサービスをつくり出す活動を何といいますか。", "生産", ["せいさん"], "消費と対になる言葉です。"],
    ["国や地方公共団体が集めるお金を何といいますか。", "税金", ["ぜいきん", "税"], "公共サービスの財源になります。"],
  ],
  "j1-kanji": [
    ["「山頂」の読みを書きなさい。", "さんちょう", ["サンチョウ"], "山の頂上という意味です。"],
    ["「努力」の読みを書きなさい。", "どりょく", ["ドリョク"], "目標に向けて力を尽くすことです。"],
    ["「自然」の読みを書きなさい。", "しぜん", ["シゼン"], "人工でないものを表します。"],
  ],
  "j1-grammar": [
    ["文の終わりにあり、意味をまとめる文節を何といいますか。", "述語", ["じゅつご"], "主語に対して、どうする・どんなだを表します。"],
    ["「私は本を読む」の主語は何ですか。", "私は", ["私", "わたしは"], "だれが、にあたる部分です。"],
    ["自立語に付いて意味を添える語を何といいますか。", "付属語", ["ふぞくご"], "助詞・助動詞などです。"],
  ],
  "j1-reading": [
    ["文章で、筆者が最も伝えたい考えを何といいますか。", "主題", ["しゅだい"], "説明文や文学で読み取ります。"],
    ["物語で、できごとが起こる場所や時代などを何といいますか。", "設定", ["せってい"], "登場人物や場面と合わせて読みます。"],
    ["説明文で、理由を述べるときによく使う接続語を一つ書きなさい。", "なぜなら", ["なぜならば"], "理由を示す接続語です。"],
  ],
  "j2-kanji": [
    ["「創造」の読みを書きなさい。", "そうぞう", ["ソウゾウ"], "新しいものをつくり出すことです。"],
    ["「比較」の読みを書きなさい。", "ひかく", ["ヒカク"], "くらべることです。"],
    ["「責任」の読みを書きなさい。", "せきにん", ["セキニン"], "引き受けるべき務めです。"],
  ],
  "j2-grammar": [
    ["動詞・形容詞・形容動詞のように形が変わることを何といいますか。", "活用", ["かつよう"], "未然形・連用形などがあります。"],
    ["「走る」は品詞でいうと何ですか。", "動詞", ["どうし"], "動作を表す自立語です。"],
    ["名詞を説明するはたらきがある品詞を何といいますか。", "連体詞", ["れんたいし"], "体言に連なります。"],
  ],
  "j2-classics": [
    ["古文で「いと」は現代語でどんな意味ですか。", "たいへん", ["とても", "非常に"], "程度が大きいことを表します。"],
    ["漢文を日本語の語順で読むために付ける記号を何といいますか。", "返り点", ["かえりてん"], "レ点などがあります。"],
    ["古文で歴史的仮名遣いの「けふ」は現代仮名遣いで何ですか。", "きょう", ["今日"], "読み替えを覚えます。"],
  ],
  "j3-kanji": [
    ["「抽象」の読みを書きなさい。", "ちゅうしょう", ["チュウショウ"], "具体の反対語として使います。"],
    ["「推敲」の読みを書きなさい。", "すいこう", ["スイコウ"], "文章を練り直すことです。"],
    ["「葛藤」の読みを書きなさい。", "かっとう", ["カットウ"], "心の中の対立などを表します。"],
  ],
  "j3-grammar": [
    ["文と文をつなぎ、前後の関係を示す語を何といいますか。", "接続詞", ["せつぞくし"], "そして・しかしなどです。"],
    ["「美しい」は品詞でいうと何ですか。", "形容詞", ["けいようし"], "言い切りが「い」で終わる用言です。"],
    ["「静かだ」は品詞でいうと何ですか。", "形容動詞", ["けいようどうし"], "言い切りが「だ」で終わる用言です。"],
  ],
  "j3-reading": [
    ["文章中の言葉をそのまま使って答えることを何といいますか。", "抜き出し", ["ぬきだし"], "設問の条件に合わせます。"],
    ["自分の考えを理由とともに書く表現を何といいますか。", "意見文", ["いけんぶん"], "根拠を明確にします。"],
    ["俳句で、季節を表す言葉を何といいますか。", "季語", ["きご"], "五・七・五と合わせて覚えます。"],
  ],
});

const EXTRA_KNOWLEDGE_BANK = Object.freeze({
  "s1-plants": [
    ["光合成で植物がつくる養分は何ですか。", "デンプン", ["でんぷん"], "葉に光が当たるとつくられます。"],
    ["植物のからだを支え、水や養分の通り道になる束を何といいますか。", "維管束", ["いかんそく"], "道管と師管を含みます。"],
    ["葉の表側と裏側にある、気体の出入り口を何といいますか。", "気孔", ["きこう"], "蒸散にも関係します。"],
  ],
  "s1-substances": [
    ["水に溶けにくく、ものを燃やすはたらきを助ける気体は何ですか。", "酸素", ["さんそ"], "燃焼を助ける気体です。"],
    ["石灰水を白くにごらせる気体は何ですか。", "二酸化炭素", ["にさんかたんそ"], "呼吸や燃焼で発生します。"],
    ["水に溶けた物質を何といいますか。", "溶質", ["ようしつ"], "溶かしている液体は溶媒です。"],
  ],
  "s1-light-sound": [
    ["凸レンズで光が集まる点を何といいますか。", "焦点", ["しょうてん"], "焦点距離と合わせて覚えます。"],
    ["音の大きさは、音源の何の大きさで決まりますか。", "振幅", ["しんぷく"], "振幅が大きいほど大きな音になります。"],
    ["力の大きさを表す単位を記号で書きなさい。", "N", ["ニュートン"], "ばねばかりで測ります。"],
  ],
  "s2-chemical-change": [
    ["炭酸水素ナトリウムを加熱すると発生し、石灰水を白くにごらせる気体は何ですか。", "二酸化炭素", ["にさんかたんそ"], "分解で発生する気体です。"],
    ["化学変化の前後で物質全体の質量が変わらない法則を何といいますか。", "質量保存の法則", ["しつりょうほぞんのほうそく"], "密閉容器で確かめます。"],
    ["原子が結びついてできた粒を何といいますか。", "分子", ["ぶんし"], "酸素分子や水分子などがあります。"],
  ],
  "s2-weather": [
    ["空気1立方メートル中に含むことができる最大の水蒸気量を何といいますか。", "飽和水蒸気量", ["ほうわすいじょうきりょう"], "温度が高いほど大きくなります。"],
    ["暖気が寒気の上にはい上がる前線を何といいますか。", "温暖前線", ["おんだんぜんせん"], "広い範囲に雨が降りやすい前線です。"],
    ["寒気が暖気を押し上げる前線を何といいますか。", "寒冷前線", ["かんれいぜんせん"], "強い雨が短時間に降りやすい前線です。"],
  ],
  "s2-electricity": [
    ["電流の流れにくさを表す量を何といいますか。", "抵抗", ["ていこう"], "単位はオームです。"],
    ["電圧、電流、抵抗の関係を表す法則を何といいますか。", "オームの法則", [], "電圧=抵抗×電流です。"],
    ["磁石のまわりや電流のまわりにできる磁力のはたらく空間を何といいますか。", "磁界", ["じかい"], "磁力線で表します。"],
  ],
  "s3-cells": [
    ["細胞の核の中にあり、遺伝に関わるものを何といいますか。", "染色体", ["せんしょくたい"], "遺伝子を含みます。"],
    ["生殖細胞がつくられるとき、染色体の数が半分になる分裂を何といいますか。", "減数分裂", ["げんすうぶんれつ"], "卵や精子をつくるときに起こります。"],
    ["親から子へ受けつがれる形や性質を何といいますか。", "形質", ["けいしつ"], "遺伝で扱う性質です。"],
  ],
  "s3-motion-energy": [
    ["物体の速さが一定で、一直線上を進む運動を何といいますか。", "等速直線運動", ["とうそくちょくせんうんどう"], "速さが変わらない運動です。"],
    ["力が物体を動かしたときの量を何といいますか。", "仕事", ["しごと"], "力×力の向きに動いた距離で考えます。"],
    ["一定時間にする仕事の量を何といいますか。", "仕事率", ["しごとりつ"], "単位はワットです。"],
  ],
  "s3-earth-space": [
    ["太陽のまわりを回る天体を何といいますか。", "惑星", ["わくせい"], "地球も惑星です。"],
    ["月が満ち欠けして見えるのは、月が何を反射しているからですか。", "太陽の光", ["太陽光"], "月自身は光っていません。"],
    ["地震で、地下の岩石が最初に破壊された場所を何といいますか。", "震源", ["しんげん"], "地表の真上の地点は震央です。"],
  ],
  "so1-world-geography": [
    ["赤道に平行に引かれた線を何といいますか。", "緯線", ["いせん"], "緯度を表す線です。"],
    ["北極と南極を結ぶように引かれた線を何といいますか。", "経線", ["けいせん"], "経度を表す線です。"],
    ["面積や形をなるべく正確に表すために地球を球体で表したものを何といいますか。", "地球儀", ["ちきゅうぎ"], "地図と合わせて使います。"],
  ],
  "so1-japan-geography": [
    ["日本の国土の約4分の3を占める地形は何ですか。", "山地", ["山地・山脈", "山地山脈"], "日本は山が多い国です。"],
    ["川が山地から平地へ出るところにできる扇形の地形を何といいますか。", "扇状地", ["せんじょうち"], "果樹栽培に使われることがあります。"],
    ["川の河口付近に土砂がたまってできる三角形の低地を何といいますか。", "三角州", ["さんかくす"], "稲作や都市に利用されます。"],
  ],
  "so1-ancient-history": [
    ["縄文時代に使われた、厚手で縄目の模様がある土器を何といいますか。", "縄文土器", ["じょうもんどき"], "縄文時代を代表する道具です。"],
    ["弥生時代に使われた、うすくてかたい土器を何といいますか。", "弥生土器", ["やよいどき"], "米づくりの広まりと関係します。"],
    ["古墳時代に有力者の墓としてつくられた大きな墓を何といいますか。", "古墳", ["こふん"], "前方後円墳などがあります。"],
  ],
  "so2-regions": [
    ["地域の自然、産業、交通などの特徴をまとめたものを何といいますか。", "地域的特色", ["ちいきてきとくしょく"], "地理で大切な見方です。"],
    ["都市の人口が増え、建物や道路が広がることを何といいますか。", "都市化", ["としか"], "大都市周辺で見られます。"],
    ["人口の多くが高齢者になる社会の状態を何といいますか。", "高齢化", ["こうれいか"], "地域課題の一つです。"],
  ],
  "so2-medieval-modern": [
    ["鎌倉時代に、御家人が将軍に仕える代わりに土地を守ってもらう関係を何といいますか。", "御恩と奉公", ["ごおんとほうこう"], "鎌倉幕府のしくみです。"],
    ["室町幕府を開いた人物は誰ですか。", "足利尊氏", ["あしかがたかうじ"], "京都に幕府を開きました。"],
    ["江戸幕府が大名を統制するために定めた法令を何といいますか。", "武家諸法度", ["ぶけしょはっと"], "大名を統制しました。"],
  ],
  "so2-industry": [
    ["製品を大量に生産するため、工場が集まっている地域を何といいますか。", "工業地帯", ["こうぎょうちたい"], "太平洋ベルトなどと関連します。"],
    ["都市と都市を結び、人や物の移動を支えるしくみを何といいますか。", "交通", ["こうつう"], "鉄道・道路・航空などがあります。"],
    ["情報通信技術をアルファベット3文字で何といいますか。", "ICT", ["アイシーティー"], "産業や生活に関係します。"],
  ],
  "so3-modern-history": [
    ["江戸幕府を倒して明治政府が成立した政治の変化を何といいますか。", "明治維新", ["めいじいしん"], "近代化の出発点です。"],
    ["第一次世界大戦後、国際平和を目的に設立された組織を何といいますか。", "国際連盟", ["こくさいれんめい"], "国際連合の前身です。"],
    ["第二次世界大戦後、日本で農村の土地制度を変えた改革を何といいますか。", "農地改革", ["のうちかいかく"], "戦後改革の一つです。"],
  ],
  "so3-constitution": [
    ["人間が生まれながらにもつ権利を何といいますか。", "基本的人権", ["きほんてきじんけん"], "日本国憲法の基本原理の一つです。"],
    ["国民が代表者を選ぶために投票することを何といいますか。", "選挙", ["せんきょ"], "民主政治の基礎です。"],
    ["法律にもとづいて政治を行う考え方を何といいますか。", "法の支配", ["ほうのしはい"], "権力を制限する考え方です。"],
  ],
  "so3-economy": [
    ["ものやサービスを売買する場を何といいますか。", "市場", ["しじょう"], "需要と供給が関係します。"],
    ["ものを買いたい量を何といいますか。", "需要", ["じゅよう"], "価格が上がると変化します。"],
    ["ものを売りたい量を何といいますか。", "供給", ["きょうきゅう"], "需要と合わせて価格に関係します。"],
  ],
  "j1-kanji": [
    ["「登校」の読みを書きなさい。", "とうこう", ["トウコウ"], "学校へ行くことです。"],
    ["「観察」の読みを書きなさい。", "かんさつ", ["カンサツ"], "よく見て調べることです。"],
    ["「協力」の読みを書きなさい。", "きょうりょく", ["キョウリョク"], "力を合わせることです。"],
  ],
  "j1-grammar": [
    ["「走った」のように、動作を表す自立語を何といいますか。", "動詞", ["どうし"], "言い切りがウ段の音になることが多いです。"],
    ["「白い」のように、性質や状態を表す自立語を何といいますか。", "形容詞", ["けいようし"], "言い切りが「い」です。"],
    ["「が」「を」「に」のように、文節同士の関係を示す語を何といいますか。", "助詞", ["じょし"], "付属語の一種です。"],
  ],
  "j1-reading": [
    ["文章の各段落で中心となる文を何といいますか。", "中心文", ["ちゅうしんぶん"], "段落の要点を表します。"],
    ["物語で、人物の気持ちが変わるきっかけになる出来事を何といいますか。", "転機", ["てんき"], "場面の変化に注目します。"],
    ["説明文で、例を示すときによく使う言葉を一つ書きなさい。", "たとえば", ["例えば"], "具体例を導く言葉です。"],
  ],
  "j2-kanji": [
    ["「継続」の読みを書きなさい。", "けいぞく", ["ケイゾク"], "続けることです。"],
    ["「判断」の読みを書きなさい。", "はんだん", ["ハンダン"], "物事を見極めることです。"],
    ["「尊重」の読みを書きなさい。", "そんちょう", ["ソンチョウ"], "大切に扱うことです。"],
  ],
  "j2-grammar": [
    ["「ない」「ようだ」のように、用言などに付いて意味を加える語を何といいますか。", "助動詞", ["じょどうし"], "付属語の一種です。"],
    ["活用する自立語をまとめて何といいますか。", "用言", ["ようげん"], "動詞・形容詞・形容動詞です。"],
    ["活用しない自立語をまとめて何といいますか。", "体言", ["たいげん"], "名詞などです。"],
  ],
  "j2-classics": [
    ["古文で「をかし」は現代語でどんな意味ですか。", "趣がある", ["おもしろい", "風情がある"], "古文の重要語です。"],
    ["古文で「ありがたし」は現代語でどんな意味ですか。", "めったにない", ["珍しい"], "現代語の「ありがとう」とは違います。"],
    ["漢文で、読む順番を返すための「レ」を何といいますか。", "レ点", ["れてん"], "返り点の一つです。"],
  ],
  "j3-kanji": [
    ["「普遍」の読みを書きなさい。", "ふへん", ["フヘン"], "広くあてはまることです。"],
    ["「緻密」の読みを書きなさい。", "ちみつ", ["チミツ"], "細かく整っていることです。"],
    ["「邂逅」の読みを書きなさい。", "かいこう", ["カイコウ"], "思いがけなく出会うことです。"],
  ],
  "j3-grammar": [
    ["「だろう」「です」のように、文末で判断や丁寧さを表す語を何といいますか。", "助動詞", ["じょどうし"], "文末表現に関わります。"],
    ["前の語を打ち消す意味を持つ助動詞を一つ書きなさい。", "ない", [], "否定を表します。"],
    ["文の成分で、主語・述語を補って説明する部分を何といいますか。", "修飾語", ["しゅうしょくご"], "詳しく説明するはたらきです。"],
  ],
  "j3-reading": [
    ["文章中の表現から、直接書かれていない内容を考えることを何といいますか。", "推論", ["すいろん"], "根拠をもとに考えます。"],
    ["根拠を示して自分の考えを書く文章を何といいますか。", "論説文", ["ろんせつぶん"], "主張と根拠を意識します。"],
    ["詩や短歌で、言葉の響きやリズムを整える表現上の工夫を何といいますか。", "表現技法", ["ひょうげんぎほう"], "比喩や倒置などがあります。"],
  ],
});

const ADVANCED_KNOWLEDGE_BANK = Object.freeze({
  "s2-chemical-change": [
    ["酸化銅から酸素を取り除き、銅に戻すような化学変化を何といいますか。", "還元", ["かんげん"], "酸化と反対の変化です。"],
    ["化学変化の前後で、物質全体の質量が変わらない法則を何といいますか。", "質量保存の法則", ["しつりょうほぞんのほうそく"], "密閉した容器で確かめます。"],
    ["水を電気分解したとき、陽極側に発生する気体は何ですか。", "酸素", ["さんそ"], "陰極側には水素が発生します。"],
    ["2種類以上の物質が結びつき、別の物質ができる化学変化を何といいますか。", "化合", ["かごう"], "鉄と硫黄から硫化鉄ができる変化が例です。"],
  ],
  "s2-weather": [
    ["空気1m³に含むことができる水蒸気の最大量を何といいますか。", "飽和水蒸気量", ["ほうわすいじょうきりょう"], "温度が高いほど大きくなります。"],
    ["寒冷前線付近で発達しやすく、短時間に強い雨を降らせる雲は何ですか。", "積乱雲", ["せきらんうん"], "上昇気流が強いときに発達します。"],
    ["暖気が寒気の上にはい上がる前線を何といいますか。", "温暖前線", ["おんだんぜんせん"], "広い範囲に雨が降りやすい前線です。"],
    ["日本付近を西から東へ移動し、前線をともなうことが多い低気圧を何といいますか。", "温帯低気圧", ["おんたいていきあつ"], "中緯度の天気変化に関係します。"],
  ],
  "s2-electricity": [
    ["電圧が6V、電流が0.3Aのとき、抵抗の大きさは何Ωですか。", "20", ["20Ω", "20オーム"], "抵抗=電圧÷電流で求めます。"],
    ["直列回路で、各抵抗を流れる電流の大きさはどうなりますか。", "等しい", ["同じ", "同じになる"], "直列回路では電流の通り道が1本です。"],
    ["電流が磁界から力を受ける性質を利用し、回転する装置を何といいますか。", "モーター", [], "電気エネルギーを運動に変えます。"],
    ["電流のまわりにできる磁界の向きを調べるときに使う、小さな磁石を何といいますか。", "方位磁針", ["ほういじしん"], "N極の向きで磁界の向きを調べます。"],
  ],
  "so2-regions": [
    ["自然、人口、産業、交通などを関連付けて見た、地域ならではの性質を何といいますか。", "地域的特色", ["ちいきてきとくしょく"], "複数の資料を結び付けて考えます。"],
    ["都市に人口や産業が集中しすぎる状態を何といいますか。", "過密", ["かみつ"], "交通渋滞や住宅不足などにつながります。"],
    ["人口が減り、生活や産業を維持しにくくなる地域の状態を何といいますか。", "過疎", ["かそ"], "高齢化と合わせて考えることが多いです。"],
    ["太平洋側と日本海側で冬の降水量が大きく違う原因になる風を何といいますか。", "季節風", ["きせつふう"], "冬は大陸から北西の風が吹きます。"],
  ],
  "so2-medieval-modern": [
    ["鎌倉幕府で、将軍が御家人に土地を保障し、御家人が軍役でこたえる関係を何といいますか。", "御恩と奉公", ["ごおんとほうこう"], "武士の主従関係を表します。"],
    ["豊臣秀吉が田畑の面積や収穫量を調べ、石高で表した政策を何といいますか。", "太閤検地", ["たいこうけんち"], "全国支配を進めるための政策です。"],
    ["豊臣秀吉が農民から武器を取り上げた政策を何といいますか。", "刀狩", ["かたながり"], "兵農分離を進めました。"],
    ["江戸幕府がキリスト教禁止や貿易統制のため、外国との交流を制限した政策を何といいますか。", "鎖国", ["さこく"], "長崎など限られた窓口で交流しました。"],
  ],
  "so2-industry": [
    ["工場が多く集まり、工業生産が盛んな地域を何といいますか。", "工業地帯", ["こうぎょうちたい"], "太平洋沿岸などに多く見られます。"],
    ["情報通信技術をアルファベット3文字で何といいますか。", "ICT", ["アイシーティー"], "産業や生活の効率化に関係します。"],
    ["商品が生産者から消費者へ届くまでの流れを何といいますか。", "流通", ["りゅうつう"], "輸送、保管、販売などを含みます。"],
    ["石油化学工業で、原料や製品を運びやすい海沿いに工場が集まる地域を何といいますか。", "臨海工業地域", ["りんかいこうぎょうちいき"], "港や船による輸送と関係します。"],
  ],
  "j2-kanji": [
    ["「敬意」の読みを書きなさい。", "けいい", ["ケイイ"], "相手を尊重する気持ちです。"],
    ["「批評」の読みを書きなさい。", "ひひょう", ["ヒヒョウ"], "よい点や問題点を考えて述べることです。"],
    ["「具体」の読みを書きなさい。", "ぐたい", ["グタイ"], "抽象の反対に近い言葉です。"],
    ["「根拠」の読みを書きなさい。", "こんきょ", ["コンキョ"], "考えを支える理由や証拠です。"],
  ],
  "j2-grammar": [
    ["「読まない」の「読ま」は、動詞の何形ですか。", "未然形", ["みぜんけい"], "後ろに「ない」が続きます。"],
    ["「読みます」の「読み」は、動詞の何形ですか。", "連用形", ["れんようけい"], "後ろに「ます」が続きます。"],
    ["「読むとき」の「読む」は、動詞の何形ですか。", "連体形", ["れんたいけい"], "体言に続く形です。"],
    ["活用する自立語をまとめて何といいますか。", "用言", ["ようげん"], "動詞・形容詞・形容動詞です。"],
  ],
  "j2-classics": [
    ["古文で「ぞ・なむ・や・か」があると文末の形が変わる決まりを何といいますか。", "係り結び", ["かかりむすび"], "係助詞と文末の活用形が関係します。"],
    ["係助詞「こそ」の結びは何形になりますか。", "已然形", ["いぜんけい"], "ぞ・なむ・や・かとは違う形です。"],
    ["係助詞「ぞ」の結びは何形になりますか。", "連体形", ["れんたいけい"], "なむ・や・かも連体形で結びます。"],
    ["漢文で、下から上へ一字返って読む記号を何といいますか。", "レ点", ["れてん"], "返り点の一つです。"],
  ],
});

const DEEPENED_KNOWLEDGE_BANK = Object.freeze({
  "s1-plants": [
    ["胚珠が子房の中にある種子植物を何といいますか。", "被子植物", ["ひししょくぶつ"], "花が咲く植物の大きな分類です。"],
    ["胚珠がむき出しになっている種子植物を何といいますか。", "裸子植物", ["らししょくぶつ"], "マツやイチョウなどが例です。"],
    ["植物の葉から水蒸気が出ていく現象を何といいますか。", "蒸散", ["じょうさん"], "気孔の開閉と関係します。"],
    ["植物が光を使ってデンプンなどをつくるはたらきを何といいますか。", "光合成", ["こうごうせい"], "葉緑体で行われます。"],
  ],
  "s1-substances": [
    ["物質1cm³あたりの質量を何といいますか。", "密度", ["みつど"], "物質を区別する手がかりになります。"],
    ["水溶液で、溶けている物質を何といいますか。", "溶質", ["ようしつ"], "食塩水では食塩がこれにあたります。"],
    ["水溶液で、物質を溶かしている液体を何といいますか。", "溶媒", ["ようばい"], "食塩水では水がこれにあたります。"],
    ["物質の状態が固体・液体・気体の間で変わることを何といいますか。", "状態変化", ["じょうたいへんか"], "物質そのものは変わりません。"],
  ],
  "s1-light-sound": [
    ["光が鏡に入ってくる角を何といいますか。", "入射角", ["にゅうしゃかく"], "鏡に垂直な線との角です。"],
    ["光が鏡で反射して出ていく角を何といいますか。", "反射角", ["はんしゃかく"], "入射角と等しくなります。"],
    ["光を集めるはたらきをもつ中央が厚いレンズを何といいますか。", "凸レンズ", ["とつレンズ"], "焦点をつくります。"],
    ["ばねののびは加えた力に比例するという法則を何といいますか。", "フックの法則", [], "力とばねののびの関係です。"],
  ],
  "s2-chemical-change": [
    ["物質をつくる最小の粒を何といいますか。", "原子", ["げんし"], "化学変化でも原子はなくなりません。"],
    ["物質を元素記号と数字で表した式を何といいますか。", "化学式", ["かがくしき"], "H2O などが例です。"],
    ["1種類の物質が2種類以上の物質に分かれる化学変化を何といいますか。", "分解", ["ぶんかい"], "炭酸水素ナトリウムの加熱などが例です。"],
    ["熱を外へ出す化学変化を何といいますか。", "発熱反応", ["はつねつはんのう"], "温度が上がることがあります。"],
  ],
  "s2-weather": [
    ["空気の重さによる圧力を何といいますか。", "気圧", ["きあつ"], "単位はhPaを使います。"],
    ["空気中の水蒸気の割合を表す量を何といいますか。", "湿度", ["しつど"], "露点や飽和水蒸気量と関係します。"],
    ["天気図で気圧が等しい地点を結んだ線を何といいますか。", "等圧線", ["とうあつせん"], "間隔が狭いほど風が強くなりやすいです。"],
    ["まわりより気圧が低いところを何といいますか。", "低気圧", ["ていきあつ"], "上昇気流が起こりやすいです。"],
  ],
  "s2-electricity": [
    ["電流の通り道が1本だけの回路を何といいますか。", "直列回路", ["ちょくれつかいろ"], "電流は各部分で等しくなります。"],
    ["電流の通り道が枝分かれしている回路を何といいますか。", "並列回路", ["へいれつかいろ"], "各枝に同じ電圧がかかります。"],
    ["磁界の向きや強さを表す線を何といいますか。", "磁力線", ["じりょくせん"], "N極から出てS極へ向かうように表します。"],
    ["コイルの中の磁界が変化すると電流が流れる現象で生じる電流を何といいますか。", "誘導電流", ["ゆうどうでんりゅう"], "発電機のしくみに関係します。"],
  ],
  "s3-cells": [
    ["形質を決める情報をもつものを何といいますか。", "遺伝子", ["いでんし"], "染色体に含まれます。"],
    ["卵と精子が合体することを何といいますか。", "受精", ["じゅせい"], "受精卵ができます。"],
    ["受精卵が細胞分裂して成長した初期の個体を何といいますか。", "胚", ["はい"], "発生の学習で使う語です。"],
    ["細胞が分かれて数を増やすことを何といいますか。", "細胞分裂", ["さいぼうぶんれつ"], "成長や生殖に関係します。"],
  ],
  "s3-motion-energy": [
    ["位置エネルギーと運動エネルギーを合わせたものを何といいますか。", "力学的エネルギー", ["りきがくてきエネルギー"], "保存の考え方で扱います。"],
    ["物体が運動の状態を保とうとする性質を何といいますか。", "慣性", ["かんせい"], "急停止したとき体が前へ動く例があります。"],
    ["一方が力を加えると、相手から大きさが等しく向きが反対の力を受ける法則を何といいますか。", "作用・反作用", ["作用反作用", "さようはんさよう"], "力は対で現れます。"],
    ["道具を使っても仕事の総量は変わらないという考えを何といいますか。", "仕事の原理", ["しごとのげんり"], "斜面や滑車で考えます。"],
  ],
  "s3-earth-space": [
    ["太陽系を含む多数の恒星の集まりを何といいますか。", "銀河系", ["ぎんがけい"], "天の川銀河とも呼ばれます。"],
    ["月が太陽をかくして見える現象を何といいますか。", "日食", ["にっしょく"], "太陽・月・地球の順に並びます。"],
    ["地球の影に月が入る現象を何といいますか。", "月食", ["げっしょく"], "太陽・地球・月の順に並びます。"],
    ["地球の表面をおおう岩盤の板を何といいますか。", "プレート", [], "地震や火山活動と関係します。"],
  ],
  "so1-world-geography": [
    ["ユーラシア、アフリカなど地球上の大きな陸地を何といいますか。", "大陸", ["たいりく"], "六大陸として学びます。"],
    ["太平洋、大西洋など地球上の大きな海を何といいますか。", "海洋", ["かいよう"], "三大洋として学びます。"],
    ["地域によって時刻が違うことを何といいますか。", "時差", ["じさ"], "経度の違いで生じます。"],
    ["経度0度の基準となる線を何といいますか。", "本初子午線", ["ほんしょしごせん"], "イギリスのグリニッジを通ります。"],
  ],
  "so1-japan-geography": [
    ["本州中央部を南北に走る大きな地質の境目を何といいますか。", "フォッサマグナ", [], "日本列島の成り立ちに関係します。"],
    ["山に囲まれた平らな土地を何といいますか。", "盆地", ["ぼんち"], "内陸で気温差が大きくなりやすいです。"],
    ["海岸線が複雑に入り組んだ海岸を何といいますか。", "リアス海岸", ["リアス式海岸"], "養殖業に利用されることがあります。"],
    ["夏に雨が多く冬に乾燥しやすい、日本の気候区分の一つは何ですか。", "太平洋側の気候", ["太平洋側"], "季節風と山地の影響を受けます。"],
  ],
  "so1-ancient-history": [
    ["古墳時代に近畿地方を中心に成立した政治勢力を何といいますか。", "大和政権", ["ヤマト政権", "やまとせいけん"], "有力な豪族がまとまりました。"],
    ["聖徳太子の時代に中国へ送られた使者を何といいますか。", "遣隋使", ["けんずいし"], "隋の制度や文化を学びました。"],
    ["人々に口分田を与え、税を負担させた制度を何といいますか。", "班田収授法", ["はんでんしゅうじゅのほう"], "律令国家の土地制度です。"],
    ["645年に始まった政治改革を何といいますか。", "大化の改新", ["たいかのかいしん"], "公地公民の方針が示されました。"],
  ],
  "so2-regions": [
    ["地域に根づき、特色ある製品をつくる産業を何といいますか。", "地場産業", ["じばさんぎょう"], "伝統工芸などと関係します。"],
    ["人口50万人以上などの条件を満たし、県に近い権限をもつ市を何といいますか。", "政令指定都市", ["せいれいしていとし"], "大都市の行政制度です。"],
    ["都市の中心部で昼間人口が夜間人口より多くなる地域を何といいますか。", "都心", ["としん"], "オフィスや商業施設が集まります。"],
    ["農山村などで人口が少なくなり、地域の維持が難しくなる状態を何といいますか。", "過疎", ["かそ"], "高齢化とあわせて考えます。"],
  ],
  "so2-medieval-modern": [
    ["室町時代に京都を中心に長く続いた内乱を何といいますか。", "応仁の乱", ["おうにんのらん"], "戦国時代へつながります。"],
    ["織田信長が商工業を活発にするために進めた政策を何といいますか。", "楽市・楽座", ["楽市楽座", "らくいちらくざ"], "座の特権を廃止しました。"],
    ["江戸時代に大名が江戸と領地を往復した制度を何といいますか。", "参勤交代", ["さんきんこうたい"], "大名統制のしくみです。"],
    ["室町時代に将軍を中心に京都で開かれた幕府を何といいますか。", "室町幕府", ["むろまちばくふ"], "足利氏が開きました。"],
  ],
  "so2-industry": [
    ["商業やサービス業などをまとめた産業を何といいますか。", "第三次産業", ["3次産業"], "小売業、観光業、医療などが含まれます。"],
    ["太平洋沿岸に工業地域が連なる地帯を何といいますか。", "太平洋ベルト", [], "工業生産が盛んな地域です。"],
    ["温暖な地域で出荷時期を早める栽培方法を何といいますか。", "促成栽培", ["そくせいさいばい"], "ビニールハウスなどを使います。"],
    ["国と国の間で商品を売買することを何といいますか。", "貿易", ["ぼうえき"], "輸出と輸入があります。"],
  ],
  "so3-modern-history": [
    ["国会開設や憲法制定を求めた明治時代の運動を何といいますか。", "自由民権運動", ["じゆうみんけんうんどう"], "板垣退助らが中心でした。"],
    ["1889年に発布された明治時代の憲法を何といいますか。", "大日本帝国憲法", ["だいにほんていこくけんぽう"], "天皇主権の憲法です。"],
    ["1894年に日本と清の間で起こった戦争を何といいますか。", "日清戦争", ["にっしんせんそう"], "朝鮮をめぐる対立が背景です。"],
    ["1950年代半ばから1970年代初めに日本経済が大きく成長したことを何といいますか。", "高度経済成長", ["こうどけいざいせいちょう"], "生活や産業が大きく変わりました。"],
  ],
  "so3-constitution": [
    ["内閣が国会の信任にもとづいて成り立つ制度を何といいますか。", "議院内閣制", ["ぎいんないかくせい"], "国会と内閣の関係です。"],
    ["裁判所が法律や命令が憲法に反していないか判断する制度を何といいますか。", "違憲審査制", ["いけんしんさせい"], "司法権の重要なはたらきです。"],
    ["住民が地域の政治に参加し、地域で自治を行うしくみを何といいますか。", "地方自治", ["ちほうじち"], "地方公共団体が担います。"],
    ["最高裁判所の裁判官を国民が審査する制度を何といいますか。", "国民審査", ["こくみんしんさ"], "司法への民主的統制です。"],
  ],
  "so3-economy": [
    ["国や地方公共団体の収入と支出の活動を何といいますか。", "財政", ["ざいせい"], "税金と公共サービスに関係します。"],
    ["年金、医療、介護など生活を支える制度を何といいますか。", "社会保障", ["しゃかいほしょう"], "少子高齢社会で重要です。"],
    ["日本の中央銀行は何ですか。", "日本銀行", ["日銀", "にほんぎんこう"], "通貨や金融政策に関係します。"],
    ["円の価値が外国通貨に対して高くなることを何といいますか。", "円高", ["えんだか"], "輸出入に影響します。"],
  ],
  "j1-kanji": [
    ["「伝統」の読みを書きなさい。", "でんとう", ["デントウ"], "昔から受け継がれているものです。"],
    ["「責任」の読みを書きなさい。", "せきにん", ["セキニン"], "自分が果たすべき役目です。"],
    ["「分類」の読みを書きなさい。", "ぶんるい", ["ブルイ"], "種類ごとに分けることです。"],
    ["「豊富」の読みを書きなさい。", "ほうふ", ["ホウフ"], "たくさんあることです。"],
  ],
  "j1-grammar": [
    ["文を意味のまとまりで区切った単位を何といいますか。", "文節", ["ぶんせつ"], "「ね」を入れて自然に区切れるまとまりです。"],
    ["文節をさらに小さく分けた、言葉の最小単位を何といいますか。", "単語", ["たんご"], "文法で扱う基本単位です。"],
    ["前後の文や文節をつなぐはたらきの文節を何といいますか。", "接続語", ["せつぞくご"], "だから、しかし、などが例です。"],
    ["文中で他の文節と直接関係せず、呼びかけなどを表す文節を何といいますか。", "独立語", ["どくりつご"], "感動や呼びかけに使われます。"],
  ],
  "j1-reading": [
    ["文章を内容のまとまりごとに分けたものを何といいますか。", "段落", ["だんらく"], "形式段落と意味段落があります。"],
    ["文章全体で筆者が述べたい中心内容を何といいますか。", "要旨", ["ようし"], "説明文で大切です。"],
    ["物語で、時間・場所・人物などによって区切られるまとまりを何といいますか。", "場面", ["ばめん"], "人物の変化を読み取ります。"],
    ["登場人物の気持ちを表す言葉を何といいますか。", "心情", ["しんじょう"], "行動や会話からも考えます。"],
  ],
  "j2-kanji": [
    ["「比較」の読みを書きなさい。", "ひかく", ["ヒカク"], "比べることです。"],
    ["「資料」の読みを書きなさい。", "しりょう", ["シリョウ"], "考えるための材料です。"],
    ["「象徴」の読みを書きなさい。", "しょうちょう", ["ショウチョウ"], "別のものを表すしるしです。"],
    ["「展開」の読みを書きなさい。", "てんかい", ["テンカイ"], "広げること、話を進めることです。"],
  ],
  "j2-grammar": [
    ["「静かだ」のように、性質や状態を表し「だ」で言い切る自立語を何といいますか。", "形容動詞", ["けいようどうし"], "用言の一つです。"],
    ["用言を修飾することが多い自立語を何といいますか。", "副詞", ["ふくし"], "「とても」「ゆっくり」などです。"],
    ["体言を修飾する自立語を何といいますか。", "連体詞", ["れんたいし"], "「この」「大きな」などです。"],
    ["文と文、語と語をつなぐ自立語を何といいますか。", "接続詞", ["せつぞくし"], "「しかし」「だから」などです。"],
  ],
  "j2-classics": [
    ["古文で昔の仮名の書き方を何といいますか。", "歴史的仮名遣い", ["れきしてきかなづかい"], "現代仮名遣いと異なることがあります。"],
    ["古文で動詞などの形が変わることを何といいますか。", "活用", ["かつよう"], "未然形、連用形などがあります。"],
    ["漢文で、返り点にしたがって読む順番を変える読み方を何といいますか。", "訓読", ["くんどく"], "日本語の語順に直して読みます。"],
    ["短歌の五・七・五・七・七のような音数の決まりを何といいますか。", "定型", ["ていけい"], "韻文のリズムに関係します。"],
  ],
  "j3-kanji": [
    ["「概念」の読みを書きなさい。", "がいねん", ["ガイネン"], "物事の大まかな意味内容です。"],
    ["「示唆」の読みを書きなさい。", "しさ", ["シサ"], "それとなく示すことです。"],
    ["「葛藤」の読みを書きなさい。", "かっとう", ["カットウ"], "心の中で対立することです。"],
    ["「論理」の読みを書きなさい。", "ろんり", ["ロンリ"], "筋道だった考え方です。"],
  ],
  "j3-grammar": [
    ["相手や場面に応じて相手を敬う言葉づかいを何といいますか。", "敬語", ["けいご"], "尊敬語、謙譲語、丁寧語があります。"],
    ["相手や相手側の動作を高めて表す敬語を何といいますか。", "尊敬語", ["そんけいご"], "「いらっしゃる」などが例です。"],
    ["自分側の動作を低めて相手を敬う敬語を何といいますか。", "謙譲語", ["けんじょうご"], "「うかがう」などが例です。"],
    ["「です」「ます」のように、丁寧に述べる敬語を何といいますか。", "丁寧語", ["ていねいご"], "文末表現でよく使います。"],
  ],
  "j3-reading": [
    ["筆者が文章で最も伝えたい考えを何といいますか。", "主張", ["しゅちょう"], "論説文では根拠と合わせて読みます。"],
    ["相手の意見に対して別の考えを述べることを何といいますか。", "反論", ["はんろん"], "説得力を高めるために扱うことがあります。"],
    ["抽象的な説明を分かりやすくするために挙げる例を何といいますか。", "具体例", ["ぐたいれい"], "「たとえば」に続くことがあります。"],
    ["複数の具体的なものから共通点を取り出して考えることを何といいますか。", "抽象化", ["ちゅうしょうか"], "要約や読解で役立ちます。"],
  ],
});

const HIGH_ADVANCED_KNOWLEDGE_BANK = Object.freeze({
  "s1-plants": [
    ["蒸散量の調節に直接関わる、葉の表皮にある開閉するつくりは何ですか。", "気孔", ["きこう"], "水蒸気や気体の出入りを調節します。"],
    ["被子植物で、受粉後に種子になる部分を何といいますか。", "胚珠", ["はいしゅ"], "子房は果実になります。"],
    ["植物が光合成で作った養分を運ぶ維管束の部分を何といいますか。", "師管", ["しかん"], "道管は水や無機養分を運びます。"],
  ],
  "s1-substances": [
    ["溶液を冷やしたり水を蒸発させたりして、溶けていた物質を結晶として取り出す方法を何といいますか。", "再結晶", ["さいけっしょう"], "溶解度の差を利用します。"],
    ["物質を区別するために使う、1cm³あたりの質量を何といいますか。", "密度", ["みつど"], "質量を体積で割ります。"],
    ["アンモニアを集めるとき、水に非常に溶けやすい性質から避けるべき集め方は何ですか。", "水上置換法", ["すいじょうちかんほう"], "水に溶けやすい気体には向きません。"],
  ],
  "s1-light-sound": [
    ["凸レンズでスクリーンに映すことができる、上下左右が逆になる像を何といいますか。", "実像", ["じつぞう"], "焦点距離との位置関係で大きさが変わります。"],
    ["2つ以上の力と同じはたらきをする1つの力を何といいますか。", "合力", ["ごうりょく"], "力の合成で求めます。"],
    ["音源が1秒間に振動する回数を何といいますか。", "振動数", ["しんどうすう"], "単位はHzです。"],
  ],
  "s2-chemical-change": [
    ["化合物をつくる元素の質量比が常に一定であることを示す法則を何といいますか。", "定比例の法則", ["ていひれいのほうそく"], "化合する物質の質量比を考えます。"],
    ["化学変化を化学式と係数で表したものを何といいますか。", "化学反応式", ["かがくはんのうしき"], "原子の種類と数が両辺で等しくなります。"],
    ["酸化銅から酸素を取り除いて銅にする反応を何といいますか。", "還元", ["かんげん"], "酸化と同時に起こることがあります。"],
  ],
  "s2-weather": [
    ["山を越えた空気が乾いて高温になる現象を何といいますか。", "フェーン現象", [], "風下側で気温が上がりやすくなります。"],
    ["寒気が暖気の下にもぐりこみ、短時間に強い雨を降らせやすい前線は何ですか。", "寒冷前線", ["かんれいぜんせん"], "積乱雲が発達しやすい前線です。"],
    ["空気が水蒸気を最大限含んだ状態になったときの湿度は何％ですか。", "100%", ["100", "百パーセント"], "飽和している状態です。"],
  ],
  "s2-electricity": [
    ["電流の向きと磁界の向きを調べるときに使う、親指と4本指で考える法則を何といいますか。", "右ねじの法則", ["右ねじ"], "電流のまわりにできる磁界の向きを考えます。"],
    ["電流が流れることで発生する熱量が、電流・電圧・時間に関係することを表す法則を何といいますか。", "ジュールの法則", [], "電熱線の発熱で扱います。"],
    ["磁界の変化によってコイルに電流が流れる現象を何といいますか。", "電磁誘導", ["でんじゆうどう"], "発電機の原理です。"],
  ],
  "s3-cells": [
    ["対立形質のうち、子に現れやすい形質を何といいますか。", "優性形質", ["ゆうせいけいしつ"], "現在は顕性形質とも表されます。"],
    ["減数分裂で対になった遺伝子が別々の生殖細胞に入ることを説明する法則は何ですか。", "分離の法則", ["ぶんりのほうそく"], "メンデルの法則の一つです。"],
    ["親と同じ遺伝情報をもつ細胞を増やす分裂を何といいますか。", "体細胞分裂", ["たいさいぼうぶんれつ"], "成長や修復に関係します。"],
  ],
  "s3-motion-energy": [
    ["摩擦や空気抵抗を無視すると、位置エネルギーと運動エネルギーの和が一定になることを何といいますか。", "力学的エネルギー保存", ["力学的エネルギーの保存"], "エネルギーの移り変わりで考えます。"],
    ["1秒あたりにする仕事の量を何といいますか。", "仕事率", ["しごとりつ"], "単位はWです。"],
    ["物体が受ける力がつり合っているとき、運動の状態を保つ性質を何といいますか。", "慣性", ["かんせい"], "等速直線運動と関係します。"],
  ],
  "s3-earth-space": [
    ["震源からの距離が遠いほど長くなる、P波とS波の到着時間の差を何といいますか。", "初期微動継続時間", ["しょきびどうけいぞくじかん"], "震源距離の推定に使います。"],
    ["太陽に近い側を地球より内側で公転する惑星を何といいますか。", "内惑星", ["ないわくせい"], "金星や水星が当てはまります。"],
    ["月や惑星の見かけの形が変わることを何といいますか。", "満ち欠け", ["みちかけ"], "太陽・地球・天体の位置関係で起こります。"],
  ],
  "so1-world-geography": [
    ["中緯度の上空を西から東へ吹き、天気や航空路にも影響する風を何といいますか。", "偏西風", ["へんせいふう"], "日本付近の天気にも関係します。"],
    ["気温と降水量の月ごとの変化を1つの図に表したものを何といいますか。", "雨温図", ["うおんず"], "気候の読み取りに使います。"],
    ["各国が漁業資源や海底資源を利用する権利をもつ、沿岸から200海里までの水域を何といいますか。", "排他的経済水域", ["EEZ"], "海洋資源と関係します。"],
  ],
  "so1-japan-geography": [
    ["日本列島を東西に分ける大きな地質構造線の一つで、静岡から九州へ続くものは何ですか。", "中央構造線", ["ちゅうおうこうぞうせん"], "日本列島の地形を考える手がかりです。"],
    ["都市の気温が周辺部より高くなる現象を何といいますか。", "ヒートアイランド現象", ["ヒートアイランド"], "人工排熱や地表面の変化が関係します。"],
    ["三陸海岸などに見られる、谷に海水が入り込んだ複雑な海岸を何といいますか。", "リアス海岸", ["リアス式海岸"], "養殖業や津波被害と関係します。"],
  ],
  "so1-ancient-history": [
    ["743年に出され、開墾した土地の私有を認めた法令は何ですか。", "墾田永年私財法", ["こんでんえいねんしざいほう"], "荘園の拡大につながりました。"],
    ["大宝律令などにもとづく、律と令で国家を治めるしくみを何といいますか。", "律令制度", ["りつりょうせいど"], "中央集権国家のしくみです。"],
    ["平安時代に藤原氏が天皇の外祖父として政治を行った政治を何といいますか。", "摂関政治", ["せっかんせいじ"], "摂政・関白の地位を利用しました。"],
  ],
  "so2-regions": [
    ["都市の中心部の人口が減り、周辺部の人口が増える現象を何といいますか。", "ドーナツ化現象", ["ドーナツ化"], "郊外化と関係します。"],
    ["地域の人口に占める高齢者の割合が高くなることを何といいますか。", "高齢化", ["こうれいか"], "地域課題の分析に使います。"],
    ["大都市の中心部で再び人口が増える現象を何といいますか。", "都心回帰", ["としんかいき"], "再開発や交通利便性が関係します。"],
  ],
  "so2-medieval-modern": [
    ["鎌倉幕府が御家人の権利や裁判の基準として定めた法律は何ですか。", "御成敗式目", ["ごせいばいしきもく", "貞永式目"], "1232年に定められました。"],
    ["江戸時代に商工業者が同業者でつくり、幕府に営業を認められた組織は何ですか。", "株仲間", ["かぶなかま"], "流通統制にも関係しました。"],
    ["江戸幕府が大名を統制するために定めた法令は何ですか。", "武家諸法度", ["ぶけしょはっと"], "大名統制の基本法です。"],
  ],
  "so2-industry": [
    ["原料や燃料を輸入し、製品を輸出する工業の形を何といいますか。", "加工貿易", ["かこうぼうえき"], "日本の工業発展で重要でした。"],
    ["都市周辺で新鮮な野菜や花などを大都市へ出荷する農業を何といいますか。", "近郊農業", ["きんこうのうぎょう"], "消費地に近い立地を生かします。"],
    ["企業が海外に生産拠点を移すことで国内産業が衰える問題を何といいますか。", "産業の空洞化", ["産業空洞化"], "グローバル化と関係します。"],
  ],
  "so3-modern-history": [
    ["明治政府が土地所有者に地価の3%を金納させた改革を何といいますか。", "地租改正", ["ちそかいせい"], "近代的な税制の基礎です。"],
    ["1871年に藩を廃止して府県を置いた改革は何ですか。", "廃藩置県", ["はいはんちけん"], "中央集権化を進めました。"],
    ["1925年に25歳以上の男子に選挙権を認めた法律は何ですか。", "普通選挙法", ["ふつうせんきょほう"], "同じ年に治安維持法も制定されました。"],
  ],
  "so3-constitution": [
    ["国民が最高裁判所裁判官を審査する制度を何といいますか。", "国民審査", ["こくみんしんさ"], "司法権への民主的統制です。"],
    ["法律や命令が憲法に違反していないか裁判所が判断する制度は何ですか。", "違憲審査制", ["いけんしんさせい"], "法の支配と関係します。"],
    ["選挙で政党の得票率に応じて議席を配分する制度を何といいますか。", "比例代表制", ["ひれいだいひょうせい"], "死票を少なくしやすい制度です。"],
  ],
  "so3-economy": [
    ["需要と供給の関係によって価格が決まる経済のしくみを何といいますか。", "市場経済", ["しじょうけいざい"], "価格のはたらきが重要です。"],
    ["政府が税金や公共支出を調整して景気に働きかける政策を何といいますか。", "財政政策", ["ざいせいせいさく"], "金融政策とは区別します。"],
    ["景気の過熱を抑えるため、日本銀行が金利を上げるような政策を何といいますか。", "金融引き締め", ["きんゆうひきしめ"], "通貨量を抑える方向です。"],
  ],
  "j1-kanji": [
    ["「推移」の読みを書きなさい。", "すいい", ["スイイ"], "物事が移り変わることです。"],
    ["「緩和」の読みを書きなさい。", "かんわ", ["カンワ"], "きびしさをゆるめることです。"],
    ["「顕著」の読みを書きなさい。", "けんちょ", ["ケンチョ"], "はっきり目立つことです。"],
  ],
  "j1-grammar": [
    ["二つ以上の文節がまとまって、一つの文節と同じような働きをするものを何といいますか。", "連文節", ["れんぶんせつ"], "文の構造を大きくとらえます。"],
    ["他の文節をくわしく説明する文節を何といいますか。", "修飾語", ["しゅうしょくご"], "どんな、どのように、などを表します。"],
    ["文の中で意味が切れず、主語と述語を含むまとまりを何といいますか。", "節", ["せつ"], "複文の理解に必要です。"],
  ],
  "j1-reading": [
    ["二つの内容を比べ、違いを際立たせる表現技法を何といいますか。", "対比", ["たいひ"], "説明文や評論でよく使われます。"],
    ["物語の後の展開を予想させる手がかりを何といいますか。", "伏線", ["ふくせん"], "結末と結び付けて読みます。"],
    ["筆者の考えを支える具体的な事実や理由を何といいますか。", "根拠", ["こんきょ"], "主張とセットで読み取ります。"],
  ],
  "j2-kanji": [
    ["「陶酔」の読みを書きなさい。", "とうすい", ["トウスイ"], "うっとりとすることです。"],
    ["「彷徨」の読みを書きなさい。", "ほうこう", ["ホウコウ"], "さまようことです。"],
    ["「示唆」の読みを書きなさい。", "しさ", ["シサ"], "それとなく示すことです。"],
  ],
  "j2-grammar": [
    ["本来の意味が薄れ、他の語を補助する動詞を何といいますか。", "補助動詞", ["ほじょどうし"], "「読んでいる」の「いる」などです。"],
    ["文末に置かれ、話し手の判断や気持ちを添える付属語を何といいますか。", "助動詞", ["じょどうし"], "れる・られる、ない、た、などです。"],
    ["単独で文節を作ることができる単語を何といいますか。", "自立語", ["じりつご"], "名詞・動詞・形容詞などが含まれます。"],
  ],
  "j2-classics": [
    ["係助詞「こそ」の結びとして現れる活用形は何ですか。", "已然形", ["いぜんけい"], "係り結びの例外的な形です。"],
    ["古文で「けり」のように、過去や詠嘆を表す付属語を何といいますか。", "助動詞", ["じょどうし"], "古典文法で重要です。"],
    ["漢文で、送り仮名や返り点を付けて日本語として読むことを何といいますか。", "訓読", ["くんどく"], "白文を読むための方法です。"],
  ],
  "j3-kanji": [
    ["「敷衍」の読みを書きなさい。", "ふえん", ["フエン"], "意味を押し広げて説明することです。"],
    ["「含蓄」の読みを書きなさい。", "がんちく", ["ガンチク"], "深い意味を含んでいることです。"],
    ["「脆弱」の読みを書きなさい。", "ぜいじゃく", ["ゼイジャク"], "もろく弱いことです。"],
  ],
  "j3-grammar": [
    ["同じ音で意味が異なる語を何といいますか。", "同音異義語", ["どうおんいぎご"], "文脈で意味を判断します。"],
    ["形は似ているが意味や使い方が異なる語を何といいますか。", "類義語", ["るいぎご"], "近い意味の違いを押さえます。"],
    ["文中で省かれている主語や目的語などを読み取ることを何といいますか。", "省略", ["しょうりゃく"], "読解や文法で重要です。"],
  ],
  "j3-reading": [
    ["反対の意味をもつ表現を用いて、実際には強い肯定や否定を表す表現を何といいますか。", "反語", ["はんご"], "問いの形で強く述べる表現です。"],
    ["主張を根拠によって筋道立てて説明することを何といいますか。", "論証", ["ろんしょう"], "評論文の読み取りで重要です。"],
    ["具体例から共通点を取り出し、より一般的な考えにまとめることを何といいますか。", "抽象化", ["ちゅうしょうか"], "要約や評論の理解に役立ちます。"],
  ],
});

const JAPANESE_SUPPLEMENTAL_KNOWLEDGE_BANK = Object.freeze({
  "j1-kanji": {
    basic: [
      ["「安全」の読みを書きなさい。", "あんぜん", ["アンゼン"], "危険が少ないことです。"],
      ["「希望」の読みを書きなさい。", "きぼう", ["キボウ"], "こうなってほしいと思うことです。"],
      ["「協力」の読みを書きなさい。", "きょうりょく", ["キョウリョク"], "力を合わせることです。"],
      ["「説明」の読みを書きなさい。", "せつめい", ["セツメイ"], "分かるように述べることです。"],
    ],
    standard: [
      ["「構成」の読みを書きなさい。", "こうせい", ["コウセイ"], "組み立てを表す語です。"],
      ["「観察」の読みを書きなさい。", "かんさつ", ["カンサツ"], "よく見て調べることです。"],
      ["「判断」の読みを書きなさい。", "はんだん", ["ハンダン"], "物事を見きわめることです。"],
      ["「継続」の読みを書きなさい。", "けいぞく", ["ケイゾク"], "続けることです。"],
    ],
    advanced: [
      ["「顕著」の読みを書きなさい。", "けんちょ", ["ケンチョ"], "はっきり目立つことです。"],
      ["「緩和」の読みを書きなさい。", "かんわ", ["カンワ"], "きびしさをゆるめることです。"],
      ["「推移」の読みを書きなさい。", "すいい", ["スイイ"], "物事が移り変わることです。"],
      ["「抑制」の読みを書きなさい。", "よくせい", ["ヨクセイ"], "おさえとどめることです。"],
    ],
  },
  "j1-grammar": {
    basic: [
      ["文の中で「だれが」「何が」にあたる文節を何といいますか。", "主語", ["しゅご"], "述語と対応します。"],
      ["文の中で「どうする」「どんなだ」にあたる文節を何といいますか。", "述語", ["じゅつご"], "文の中心になります。"],
      ["文を意味のまとまりで区切った単位を何といいますか。", "文節", ["ぶんせつ"], "「ね」を入れて区切ります。"],
      ["文節をさらに小さく分けた単位を何といいますか。", "単語", ["たんご"], "文法の基本単位です。"],
    ],
    standard: [
      ["他の文節をくわしく説明する文節を何といいますか。", "修飾語", ["しゅうしょくご"], "どんな、どのように、を表します。"],
      ["前後の文や文節をつなぐ文節を何といいますか。", "接続語", ["せつぞくご"], "しかし、だから、などです。"],
      ["呼びかけや感動などを表し、他の文節と直接関係しない文節を何といいますか。", "独立語", ["どくりつご"], "文の中で独立しています。"],
      ["二つ以上の文節がまとまって一つの働きをするものを何といいますか。", "連文節", ["れんぶんせつ"], "文を大きくとらえます。"],
    ],
    advanced: [
      ["主語と述語を含み、一つの文の中で意味のまとまりを作る部分を何といいますか。", "節", ["せつ"], "複文の理解に必要です。"],
      ["文の成分どうしの関係を図で表すとき、文節のつながりを何といいますか。", "係り受け", ["かかりうけ"], "どの文節がどの文節に係るかを見ます。"],
      ["文中で省かれた主語などを前後から補って読むことを何といいますか。", "省略", ["しょうりゃく"], "読解でも重要です。"],
      ["語の形は同じでも文中での働きが変わることを考える文法上の観点を何といいますか。", "品詞", ["ひんし"], "単語を性質で分類します。"],
    ],
  },
  "j1-reading": {
    basic: [
      ["文章で筆者が最も伝えたい中心内容を何といいますか。", "要旨", ["ようし"], "説明文で大切です。"],
      ["物語で、時間や場所が変わって区切られるまとまりを何といいますか。", "場面", ["ばめん"], "人物の変化を追います。"],
      ["登場人物の気持ちを何といいますか。", "心情", ["しんじょう"], "行動や会話から読み取ります。"],
      ["文章を内容のまとまりで分けたものを何といいますか。", "段落", ["だんらく"], "意味段落もあります。"],
    ],
    standard: [
      ["筆者の考えを支える事実や理由を何といいますか。", "根拠", ["こんきょ"], "主張とセットで読みます。"],
      ["二つの内容を比べて違いを目立たせる表現を何といいますか。", "対比", ["たいひ"], "評論でよく使われます。"],
      ["物語の後の展開につながる手がかりを何といいますか。", "伏線", ["ふくせん"], "結末と結び付けます。"],
      ["文章全体を短くまとめることを何といいますか。", "要約", ["ようやく"], "大事な内容を残します。"],
    ],
    advanced: [
      ["具体例から共通点を取り出し、一般的な考えにまとめることを何といいますか。", "抽象化", ["ちゅうしょうか"], "評論文で重要です。"],
      ["問いの形を使って、実際には強い肯定や否定を表す表現を何といいますか。", "反語", ["はんご"], "強調表現です。"],
      ["主張を根拠によって筋道立てて説明することを何といいますか。", "論証", ["ろんしょう"], "評論の構造です。"],
      ["文章中でくり返し出る語句や表現から読み取る中心的な考えを何といいますか。", "主題", ["しゅだい"], "作品全体の中心です。"],
    ],
  },
  "j2-kanji": {
    basic: [
      ["「資料」の読みを書きなさい。", "しりょう", ["シリョウ"], "考える材料です。"],
      ["「責任」の読みを書きなさい。", "せきにん", ["セキニン"], "果たすべき務めです。"],
      ["「比較」の読みを書きなさい。", "ひかく", ["ヒカク"], "くらべることです。"],
      ["「創造」の読みを書きなさい。", "そうぞう", ["ソウゾウ"], "新しく作り出すことです。"],
    ],
    standard: [
      ["「象徴」の読みを書きなさい。", "しょうちょう", ["ショウチョウ"], "別のものを表すしるしです。"],
      ["「展開」の読みを書きなさい。", "てんかい", ["テンカイ"], "話や内容を広げることです。"],
      ["「仮説」の読みを書きなさい。", "かせつ", ["カセツ"], "仮に立てる説明です。"],
      ["「均衡」の読みを書きなさい。", "きんこう", ["キンコウ"], "つり合いが取れていることです。"],
    ],
    advanced: [
      ["「陶酔」の読みを書きなさい。", "とうすい", ["トウスイ"], "うっとりすることです。"],
      ["「彷徨」の読みを書きなさい。", "ほうこう", ["ホウコウ"], "さまようことです。"],
      ["「示唆」の読みを書きなさい。", "しさ", ["シサ"], "それとなく示すことです。"],
      ["「逡巡」の読みを書きなさい。", "しゅんじゅん", ["シュンジュン"], "ためらうことです。"],
    ],
  },
  "j2-grammar": {
    basic: [
      ["「走る」のように動作を表す自立語を何といいますか。", "動詞", ["どうし"], "用言の一つです。"],
      ["「美しい」のように性質を表し「い」で終わる語を何といいますか。", "形容詞", ["けいようし"], "用言の一つです。"],
      ["「静かだ」のように「だ」で言い切る語を何といいますか。", "形容動詞", ["けいようどうし"], "用言の一つです。"],
      ["物の名前を表す自立語を何といいますか。", "名詞", ["めいし"], "体言の中心です。"],
    ],
    standard: [
      ["用言をくわしく説明する自立語を何といいますか。", "副詞", ["ふくし"], "とても、ゆっくり、などです。"],
      ["体言を修飾する自立語を何といいますか。", "連体詞", ["れんたいし"], "この、大きな、などです。"],
      ["文と文、語と語をつなぐ自立語を何といいますか。", "接続詞", ["せつぞくし"], "しかし、そして、などです。"],
      ["感動や呼びかけを表す自立語を何といいますか。", "感動詞", ["かんどうし"], "ああ、はい、などです。"],
    ],
    advanced: [
      ["本来の意味が薄れ、他の語を補助する動詞を何といいますか。", "補助動詞", ["ほじょどうし"], "読んでいる、のいるなどです。"],
      ["文末に置かれ、話し手の判断や気持ちを添える付属語を何といいますか。", "助動詞", ["じょどうし"], "ない、た、られる、などです。"],
      ["単独で文節を作れず、自立語に付く語を何といいますか。", "付属語", ["ふぞくご"], "助詞・助動詞です。"],
      ["文中で語と語の関係を示す付属語を何といいますか。", "助詞", ["じょし"], "が、を、に、などです。"],
    ],
  },
  "j2-classics": {
    basic: [
      ["古文で昔の仮名の書き方を何といいますか。", "歴史的仮名遣い", ["れきしてきかなづかい"], "現代仮名遣いと違います。"],
      ["古文で「いと」は現代語で何という意味ですか。", "たいへん", ["とても", "非常に"], "程度が大きいことです。"],
      ["漢文を日本語の語順で読むための記号を何といいますか。", "返り点", ["かえりてん"], "レ点などがあります。"],
      ["五・七・五・七・七の形式をもつ和歌を何といいますか。", "短歌", ["たんか"], "定型詩です。"],
    ],
    standard: [
      ["古文で動詞などの形が変わることを何といいますか。", "活用", ["かつよう"], "未然形などがあります。"],
      ["漢文を日本語として読むことを何といいますか。", "訓読", ["くんどく"], "返り点や送り仮名を使います。"],
      ["短歌や俳句で決まった音数の形を何といいますか。", "定型", ["ていけい"], "五七五などです。"],
      ["古文で「けふ」を現代仮名遣いに直すと何ですか。", "きょう", ["今日"], "歴史的仮名遣いです。"],
    ],
    advanced: [
      ["係助詞「こそ」の結びとして現れる活用形は何ですか。", "已然形", ["いぜんけい"], "係り結びの重要事項です。"],
      ["係助詞「ぞ・なむ・や・か」の結びとして現れる活用形は何ですか。", "連体形", ["れんたいけい"], "こそとは違います。"],
      ["下から上へ一字返って読む返り点を何といいますか。", "レ点", ["れてん"], "漢文の読み順です。"],
      ["古文で過去や詠嘆を表す「けり」は品詞で何ですか。", "助動詞", ["じょどうし"], "古典文法の要点です。"],
    ],
  },
  "j3-kanji": {
    basic: [
      ["「抽象」の読みを書きなさい。", "ちゅうしょう", ["チュウショウ"], "具体の反対です。"],
      ["「推敲」の読みを書きなさい。", "すいこう", ["スイコウ"], "文章を練り直すことです。"],
      ["「葛藤」の読みを書きなさい。", "かっとう", ["カットウ"], "心の中の対立です。"],
      ["「論理」の読みを書きなさい。", "ろんり", ["ロンリ"], "筋道だった考えです。"],
    ],
    standard: [
      ["「概念」の読みを書きなさい。", "がいねん", ["ガイネン"], "大まかな意味内容です。"],
      ["「示唆」の読みを書きなさい。", "しさ", ["シサ"], "それとなく示すことです。"],
      ["「矛盾」の読みを書きなさい。", "むじゅん", ["ムジュン"], "つじつまが合わないことです。"],
      ["「克服」の読みを書きなさい。", "こくふく", ["コクフク"], "困難を乗り越えることです。"],
    ],
    advanced: [
      ["「敷衍」の読みを書きなさい。", "ふえん", ["フエン"], "意味を押し広げて説明することです。"],
      ["「含蓄」の読みを書きなさい。", "がんちく", ["ガンチク"], "深い意味を含むことです。"],
      ["「脆弱」の読みを書きなさい。", "ぜいじゃく", ["ゼイジャク"], "もろく弱いことです。"],
      ["「恣意」の読みを書きなさい。", "しい", ["シイ"], "気ままな考えです。"],
    ],
  },
  "j3-grammar": {
    basic: [
      ["相手を敬う言葉づかいを何といいますか。", "敬語", ["けいご"], "場面に応じて使います。"],
      ["相手や相手側の動作を高める敬語を何といいますか。", "尊敬語", ["そんけいご"], "いらっしゃる、などです。"],
      ["自分側の動作を低める敬語を何といいますか。", "謙譲語", ["けんじょうご"], "うかがう、などです。"],
      ["です・ますのように丁寧に述べる敬語を何といいますか。", "丁寧語", ["ていねいご"], "文末表現です。"],
    ],
    standard: [
      ["同じ音で意味が異なる語を何といいますか。", "同音異義語", ["どうおんいぎご"], "文脈で判断します。"],
      ["意味が近い語を何といいますか。", "類義語", ["るいぎご"], "使い分けが大切です。"],
      ["反対の意味をもつ語を何といいますか。", "対義語", ["たいぎご"], "対になる語です。"],
      ["文中で省かれている言葉を前後から補うことを何といいますか。", "省略", ["しょうりゃく"], "読解にも関係します。"],
    ],
    advanced: [
      ["尊敬語・謙譲語・丁寧語を場面に応じて使い分ける観点を何といいますか。", "敬意", ["けいい"], "誰を高めるかを考えます。"],
      ["語句が文脈によって別の意味合いを帯びることを何といいますか。", "含意", ["がんい"], "言外の意味です。"],
      ["言葉の意味が広がったり変わったりすることを何といいますか。", "意味変化", ["いみへんか"], "語彙の発展です。"],
      ["文や文章の流れの中で、前後の関係を示す語を何といいますか。", "接続詞", ["せつぞくし"], "論理展開を支えます。"],
    ],
  },
  "j3-reading": {
    basic: [
      ["筆者が文章で最も伝えたい考えを何といいますか。", "主張", ["しゅちょう"], "評論文で重要です。"],
      ["自分の考えを理由とともに書く文章を何といいますか。", "意見文", ["いけんぶん"], "根拠が必要です。"],
      ["俳句で季節を表す言葉を何といいますか。", "季語", ["きご"], "季節の手がかりです。"],
      ["文章中の言葉をそのまま使って答えることを何といいますか。", "抜き出し", ["ぬきだし"], "条件に合わせます。"],
    ],
    standard: [
      ["相手の意見に対して別の考えを述べることを何といいますか。", "反論", ["はんろん"], "説得力を高めます。"],
      ["抽象的な説明を分かりやすくするために挙げる例を何といいますか。", "具体例", ["ぐたいれい"], "たとえば、に続きます。"],
      ["筆者の考えを支える理由や事実を何といいますか。", "根拠", ["こんきょ"], "主張とセットです。"],
      ["文章の構成で、話題を提示する部分を何といいますか。", "序論", ["じょろん"], "本論・結論へ続きます。"],
    ],
    advanced: [
      ["主張を根拠によって筋道立てて説明することを何といいますか。", "論証", ["ろんしょう"], "評論の骨組みです。"],
      ["反対の意味をもつ表現を使い、強い肯定や否定を表す表現を何といいますか。", "反語", ["はんご"], "問いの形で強調します。"],
      ["具体例から共通点を取り出して一般化することを何といいますか。", "抽象化", ["ちゅうしょうか"], "要約で重要です。"],
      ["文章の中で対立する二つの考えを示し、違いを明確にすることを何といいますか。", "対比", ["たいひ"], "論理展開を読み取ります。"],
    ],
  },
});

function generateKnowledgeProblem(subjectId, unitId, level, weights) {
  const baseItems = KNOWLEDGE_BANK[unitId] || [];
  const extraItems = EXTRA_KNOWLEDGE_BANK[unitId] || [];
  const deepenedItems = DEEPENED_KNOWLEDGE_BANK[unitId] || [];
  const advancedItems = ADVANCED_KNOWLEDGE_BANK[unitId] || [];
  const highAdvancedItems = HIGH_ADVANCED_KNOWLEDGE_BANK[unitId] || [];
  const japaneseSupplementalItems = subjectId === "japanese" ? JAPANESE_SUPPLEMENTAL_KNOWLEDGE_BANK[unitId]?.[level] || [] : [];
  const levelPools =
    level === "advanced"
      ? [
          japaneseSupplementalItems,
          highAdvancedItems,
          highAdvancedItems,
          highAdvancedItems,
          highAdvancedItems,
          highAdvancedItems,
          highAdvancedItems,
          advancedItems,
          advancedItems,
          deepenedItems,
        ]
      : level === "standard"
        ? [japaneseSupplementalItems, deepenedItems, deepenedItems, extraItems, extraItems, advancedItems]
        : [japaneseSupplementalItems, baseItems, extraItems];
  const items = levelPools.flat().filter(Boolean);
  const [question, answer, aliases = [], hint = "用語の意味を思い出しましょう。"] = pick(items);
  const unit = Object.values(curriculum[subjectId])
    .flat()
    .find((item) => item.id === unitId);
  const skill = pick(unit?.skills || ["一問一答"]);
  return {
    kind: `${unitId}:knowledge`,
    identityKey: `${unitId}:knowledge|${normalizeJapaneseText(answer)}`,
    title: unit?.name || "一問一答",
    skill,
    text: formatKnowledgeQuestion(question, answer, hint, level),
    hint,
    answerType: "single",
    answerLabel: "答え",
    displayAnswer: answer,
    visual: { type: "english", heading: unit?.name || "一問一答", lines: [getSubjectName(subjectId), skill, "一問一答"] },
    check: (input) => knowledgeEquals(input.value, [answer, ...aliases]),
    explain: `正解は ${answer} です。${hint}`,
  };
}

function formatKnowledgeQuestion(question, answer, hint, level) {
  if (level === "standard") {
    return pick([
      `用語カードを完成させなさい。<br><span class="math">${question}</span>`,
      `ミニ確認: ${question}`,
      `次の問いに答えなさい。<br><span class="math">${question}</span>`,
      `短く答えなさい。<br><span class="math">${question}</span>`,
      `説明を読んで、関係する語を書きなさい。<br><span class="math">${question}</span>`,
      `授業ノートの空欄を埋めるつもりで答えなさい。<br><span class="math">${question}</span>`,
      `似た言葉と区別しながら答えなさい。<br><span class="math">${question}</span>`,
      `今日の確認問題です。<br><span class="math">${question}</span>`,
    ]);
  }
  if (level === "advanced") {
    return pick([
      `発展問題です。条件を整理して答えなさい。<br><span class="math">${question}</span>`,
      `次の説明に関係する語を書きなさい。<br><span class="math">${question}</span>`,
      `理由まで思い出しながら答えなさい。<br><span class="math">${question}</span>`,
      `関連する背景も考えながら、最も適切な語を書きなさい。<br><span class="math">${question}</span>`,
      `入試の小問を意識して答えなさい。<br><span class="math">${question}</span>`,
      `用語の意味を自分の中で説明してから答えなさい。<br><span class="math">${question}</span>`,
      `次の内容を表す語句を答えなさい。<br><span class="math">${question}</span>`,
      `ひっかかりやすい語と比べながら答えなさい。<br><span class="math">${question}</span>`,
    ]);
  }
  return pick([
    question,
    `次の問いに答えなさい。<br><span class="math">${question}</span>`,
    `用語を思い出して答えなさい。<br><span class="math">${question}</span>`,
    `まずは一語で答えなさい。<br><span class="math">${question}</span>`,
    `基本確認です。<br><span class="math">${question}</span>`,
    `ノートの見出しを思い出して答えなさい。<br><span class="math">${question}</span>`,
    `意味を確認しながら答えなさい。<br><span class="math">${question}</span>`,
    `今日の小問です。<br><span class="math">${question}</span>`,
  ]);
}

function drawVisual(problem) {
  if (!problem?.visual) return;
  resizeCanvas();
  ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
  drawGrid();
  const visual = { ...problem.visual, revealAnswer: shouldRevealVisualAnswer() };
  if (visual.type === "numberLine") drawNumberLine(visual);
  if (visual.type === "tiles") drawTiles(visual);
  if (visual.type === "balance") drawBalance(visual);
  if (visual.type === "triangle") drawTriangle(visual);
  if (visual.type === "prism") drawPrism(visual);
  if (visual.type === "graph") drawGraph(visual);
  if (visual.type === "bars") drawBars(visual);
  if (visual.type === "probability") drawProbability(visual);
  if (visual.type === "polygon") drawPolygon(visual);
  if (visual.type === "english") drawEnglishCard(visual);
}

function shouldRevealVisualAnswer() {
  return state.mode !== "student" || state.answerStage === "checked" || state.answered;
}

function resizeCanvas() {
  const rect = els.canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  els.canvas.width = Math.max(420, Math.floor(rect.width * ratio));
  els.canvas.height = Math.max(300, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawGrid() {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  ctx.fillStyle = "#fbfdff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#e8eef5";
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 28) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 28) {
    line(0, y, width, y);
  }
}

function drawNumberLine({ a, b, op, answer, revealAnswer }) {
  const width = els.canvas.clientWidth;
  const y = els.canvas.clientHeight / 2;
  const min = Math.min(-15, a, b, answer) - 1;
  const max = Math.max(15, a, b, answer) + 1;
  const scale = (width - 80) / (max - min);
  const px = (value) => 40 + (value - min) * scale;
  ctx.strokeStyle = "#2f3b4d";
  ctx.lineWidth = 2;
  line(36, y, width - 36, y);
  for (let value = Math.ceil(min); value <= max; value += 3) {
    line(px(value), y - 7, px(value), y + 7);
    text(String(value), px(value), y + 25, 12, "#667085", "center");
  }
  drawDot(px(a), y, "#315e9f", `開始 ${a}`);
  const mid = revealAnswer ? (px(a) + px(answer)) / 2 : width / 2;
  if (revealAnswer) {
    drawDot(px(answer), y, "#27745d", `結果 ${answer}`);
    ctx.strokeStyle = "#287783";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(mid, y - 6, Math.abs(px(answer) - px(a)) / 2, Math.PI, 0, answer < a);
    ctx.stroke();
  }
  text(`${op} (${formatSigned(b)})`, mid, y - 52, 16, "#287783", "center");
  if (!revealAnswer) text("答え合わせ後に結果を表示", width / 2, y + 68, 14, "#667085", "center", 800);
}

function drawTiles({ a, b, revealAnswer }) {
  const width = els.canvas.clientWidth;
  text("ax + b", width / 2, 42, 18, "#18212f", "center", 800);
  if (!revealAnswer) {
    const startX = Math.max(30, width / 2 - 150);
    drawTileGroup(startX, 96, 3, "#27745d", "x");
    drawTileGroup(startX, 210, 6, "#315e9f", "1");
    text("同類項をメモで整理", width - 118, 132, 15, "#18212f", "center", 800);
    text("係数と定数は答え合わせ後", width - 118, 244, 14, "#667085", "center", 800);
    return;
  }
  const startX = Math.max(30, width / 2 - 190);
  drawTileGroup(startX, 88, Math.abs(a), a >= 0 ? "#27745d" : "#b44745", a >= 0 ? "+x" : "-x");
  drawTileGroup(startX, 210, Math.min(Math.abs(b), 18), b >= 0 ? "#315e9f" : "#bc7917", b >= 0 ? "+1" : "-1");
  text(`x の係数: ${a}`, width - 120, 122, 15, "#18212f", "center", 800);
  text(`定数項: ${b}`, width - 120, 244, 15, "#18212f", "center", 800);
}

function drawTileGroup(x, y, count, color, label) {
  const columns = 6;
  for (let i = 0; i < count; i += 1) {
    const cx = x + (i % columns) * 46;
    const cy = y + Math.floor(i / columns) * 38;
    roundRect(cx, cy, 36, 28, 6, color);
    text(label, cx + 18, cy + 19, 12, "#fff", "center", 800);
  }
}

function drawBalance({ leftA, leftB, rightA, rightB }) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  ctx.strokeStyle = "#2f3b4d";
  ctx.lineWidth = 4;
  line(width / 2, 92, width / 2, height - 70);
  line(width / 2 - 190, 132, width / 2 + 190, 132);
  line(width / 2 - 150, 132, width / 2 - 205, 250);
  line(width / 2 - 150, 132, width / 2 - 95, 250);
  line(width / 2 + 150, 132, width / 2 + 95, 250);
  line(width / 2 + 150, 132, width / 2 + 205, 250);
  drawPan(width / 2 - 150, 252, `${formatLinear(leftA, leftB)}`);
  drawPan(width / 2 + 150, 252, `${formatLinear(rightA, rightB)}`);
  text("等式は左右のつり合い", width / 2, 56, 17, "#18212f", "center", 800);
}

function drawPan(x, y, label) {
  ctx.fillStyle = "#e9f5f0";
  ctx.strokeStyle = "#27745d";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(x, y, 92, 28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  text(label, x, y + 5, 17, "#174c3c", "center", 800);
}

function drawTriangle({ a, b, answer, revealAnswer }) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const p1 = { x: width * 0.24, y: height * 0.72 };
  const p2 = { x: width * 0.76, y: height * 0.72 };
  const p3 = { x: width * 0.48, y: height * 0.24 };
  ctx.fillStyle = "rgba(120, 97, 184, 0.13)";
  ctx.strokeStyle = "#7861b8";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  text(`${a}°`, p1.x + 38, p1.y - 24, 18, "#315e9f", "center", 850);
  text(`${b}°`, p2.x - 38, p2.y - 24, 18, "#315e9f", "center", 850);
  text("?°", p3.x, p3.y + 42, 20, "#b44745", "center", 850);
  text(`180° - ${a}° - ${b}° = ${revealAnswer ? `${answer}°` : "?°"}`, width / 2, height - 34, 16, "#18212f", "center", 800);
}

function drawPrism({ width, depth, height, revealAnswer, heightIsAnswer }) {
  const canvasWidth = els.canvas.clientWidth;
  const x = canvasWidth / 2 - 110;
  const y = 118;
  const dx = 72;
  const dy = -50;
  const w = 180;
  const h = 140;
  ctx.fillStyle = "rgba(49, 94, 159, 0.12)";
  ctx.strokeStyle = "#315e9f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + dx, y + dy);
  ctx.lineTo(x + dx + w, y + dy);
  ctx.lineTo(x + w, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + w, y);
  ctx.lineTo(x + dx + w, y + dy);
  ctx.lineTo(x + dx + w, y + dy + h);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  text(`${width}cm`, x + w / 2, y + h + 28, 15, "#18212f", "center", 800);
  text(`${depth}cm`, x + w + dx / 2 + 18, y + dy / 2 + h + 10, 15, "#18212f", "center", 800);
  text(heightIsAnswer && !revealAnswer ? "?cm" : `${height}cm`, x - 34, y + h / 2, 15, "#18212f", "center", 800);
}

function drawGraph({ mode, a, point, revealAnswer }) {
  const args = arguments[0];
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const origin = { x: width / 2, y: height / 2 };
  const scale = Math.min(width, height) / 15;
  ctx.strokeStyle = "#2f3b4d";
  ctx.lineWidth = 2;
  line(24, origin.y, width - 24, origin.y);
  line(origin.x, 24, origin.x, height - 24);
  text("x", width - 32, origin.y - 10, 14, "#667085", "center");
  text("y", origin.x + 14, 32, 14, "#667085", "center");
  ctx.strokeStyle = mode === "proportion" ? "#27745d" : "#bc7917";
  ctx.lineWidth = 3;
  ctx.beginPath();
  if (mode === "proportion") {
    ctx.moveTo(origin.x - 7 * scale, origin.y + a * 7 * scale);
    ctx.lineTo(origin.x + 7 * scale, origin.y - a * 7 * scale);
  } else if (mode === "linear") {
    const b = args.b || 0;
    ctx.moveTo(origin.x - 7 * scale, origin.y - (a * -7 + b) * scale);
    ctx.lineTo(origin.x + 7 * scale, origin.y - (a * 7 + b) * scale);
  } else if (mode === "quadratic") {
    const b = args.b || 0;
    const c = args.c || 0;
    let started = false;
    for (let x = -7; x <= 7; x += 0.2) {
      const y = a * x * x + b * x + c;
      const px = origin.x + x * scale;
      const py = origin.y - y * scale;
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
  } else {
    let started = false;
    for (let x = -7; x <= 7; x += 0.2) {
      if (Math.abs(x) < 0.2) {
        started = false;
        continue;
      }
      const y = a / x;
      const px = origin.x + x * scale;
      const py = origin.y - y * scale;
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
  }
  ctx.stroke();
  if (revealAnswer) {
    const px = origin.x + point[0] * scale;
    const py = origin.y - point[1] * scale;
    drawDot(px, py, "#b44745", `(${point[0]}, ${point[1]})`);
  } else {
    text("点や値は答え合わせ後に表示", width / 2, height - 34, 14, "#667085", "center", 800);
  }
}

function drawPolygon({ n, answer, revealAnswer }) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) * 0.28;
  ctx.fillStyle = "rgba(120, 97, 184, 0.13)";
  ctx.strokeStyle = "#7861b8";
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let i = 0; i < n; i += 1) {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / n;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  text(`${n}角形`, cx, cy, 20, "#18212f", "center", 850);
  text(`内角の和 ${revealAnswer ? `${answer}°` : "?°"}`, cx, height - 42, 16, "#315e9f", "center", 850);
}

function drawEnglishCard({ heading, lines, revealAnswer }) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const mayRevealAnswer = lines.some((lineText) => /答え|面積|→|->|⇒|\d{3,}/.test(String(lineText)));
  const displayLines =
    !revealAnswer && mayRevealAnswer
      ? ["条件を整理", "メモ欄に途中式", "答え合わせで確認"]
      : lines;
  text(heading || "English", width / 2, 46, 20, "#18212f", "center", 850);
  const startY = Math.max(94, height / 2 - displayLines.length * 28);
  displayLines.forEach((lineText, index) => {
    const y = startY + index * 58;
    roundRect(width * 0.16, y - 20, width * 0.68, 38, 8, index % 2 ? "#315e9f" : "#27745d");
    text(lineText, width / 2, y, 18, "#fff", "center", 850);
  });
  text("Read / Write / Check", width / 2, height - 38, 14, "#667085", "center", 800);
}

function drawBars({ data }) {
  const width = els.canvas.clientWidth;
  const height = els.canvas.clientHeight;
  const max = Math.max(...data);
  const barWidth = Math.min(46, (width - 90) / data.length - 8);
  const baseY = height - 54;
  data.forEach((value, index) => {
    const x = 50 + index * (barWidth + 14);
    const h = (value / max) * (height - 130);
    roundRect(x, baseY - h, barWidth, h, 6, "#315e9f");
    text(String(value), x + barWidth / 2, baseY - h - 10, 14, "#18212f", "center", 800);
  });
  line(34, baseY, width - 34, baseY);
  text("データの大きさ", width / 2, 34, 17, "#18212f", "center", 800);
}

function drawProbability({ red, blue, revealAnswer }) {
  const width = els.canvas.clientWidth;
  const centerY = els.canvas.clientHeight / 2;
  const total = red + blue;
  if (!revealAnswer) {
    const visibleTotal = Math.min(total, 12);
    const spacing = Math.min(48, (width - 100) / visibleTotal);
    const start = width / 2 - ((visibleTotal - 1) * spacing) / 2;
    for (let i = 0; i < visibleTotal; i += 1) {
      drawBall(start + i * spacing, centerY, "#6b7a90", "?");
    }
    text("条件に合う場合の数をメモで数えます", width / 2, centerY + 82, 16, "#18212f", "center", 850);
    return;
  }
  const spacing = Math.min(48, (width - 100) / total);
  const start = width / 2 - ((total - 1) * spacing) / 2;
  for (let i = 0; i < total; i += 1) {
    const isRed = i < red;
    drawBall(start + i * spacing, centerY, isRed ? "#b44745" : "#315e9f", isRed ? "赤" : "青");
  }
  text(`赤 ${red} / 全体 ${total}`, width / 2, centerY + 82, 18, "#18212f", "center", 850);
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function roundRect(x, y, width, height, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, width, height, radius);
  } else {
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }
  ctx.fill();
}

function drawDot(x, y, color, label) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, Math.PI * 2);
  ctx.fill();
  text(label, x, y - 16, 13, color, "center", 800);
}

function drawBall(x, y, color, label) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.fill();
  text(label, x, y + 5, 13, "#fff", "center", 850);
}

function text(value, x, y, size = 14, color = "#18212f", align = "left", weight = 700) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px "Yu Gothic UI", "Meiryo", sans-serif`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(value, x, y);
}

function pickKind(prefix, kinds, weights, defaults) {
  const weighted = weights?.filter((item) => kinds.includes(item.kind.replace(`${prefix}:`, "")));
  if (weighted?.length) {
    return weightedPick(weighted.map((item) => item.kind), weighted.map((item) => item.weight));
  }
  return `${prefix}:${weightedPick(kinds, defaults || kinds.map(() => 1))}`;
}

function weightedPick(items, weights) {
  const total = weights.reduce((acc, value) => acc + value, 0);
  let cursor = Math.random() * total;
  for (let i = 0; i < items.length; i += 1) {
    cursor -= weights[i];
    if (cursor <= 0) return items[i];
  }
  return items[items.length - 1];
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickByLevel(itemSets, level) {
  const primary = itemSets[level] || [];
  const fallback =
    level === "advanced"
      ? [itemSets.standard, itemSets.basic]
      : level === "standard"
        ? [itemSets.basic]
        : [itemSets.standard];
  const items = [primary, ...fallback].flat().filter(Boolean);
  return pick(items.length ? items : [itemSets.basic, itemSets.standard, itemSets.advanced].flat().filter(Boolean));
}

function randInt(min, max, excludes = []) {
  let value = min;
  do {
    value = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludes.includes(value));
  return value;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function sum(values) {
  return values.reduce((acc, value) => acc + value, 0);
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : String(value);
}

function formatCoeff(value) {
  if (value === 1) return "";
  if (value === -1) return "-";
  return String(value);
}

function formatTerm(coef, variable, first = false) {
  if (coef === 0) return first ? "0" : "";
  const abs = Math.abs(coef);
  const body = `${abs === 1 ? "" : abs}${variable}`;
  if (first) return coef < 0 ? `-${body}` : body;
  return coef < 0 ? `- ${body}` : `+ ${body}`;
}

function formatConst(value, first = false) {
  if (value === 0) return first ? "0" : "";
  if (first) return String(value);
  return value < 0 ? `- ${Math.abs(value)}` : `+ ${value}`;
}

function formatLinear(a, b) {
  if (a === 0) return String(b);
  const left = formatTerm(a, "x", true);
  const right = formatConst(b, false);
  if (b === 0) return left;
  return `${left} ${right}`.trim();
}

function formatLinearXY(a, b) {
  const xTerm = formatTerm(a, "x", true);
  const yTerm = formatTerm(b, "y", false);
  return `${xTerm} ${yTerm}`.trim();
}

function makeFraction(numerator, denominator) {
  if (!denominator) return { numerator: 0, denominator: 1 };
  let top = numerator;
  let bottom = denominator;
  if (bottom < 0) {
    top *= -1;
    bottom *= -1;
  }
  const divisor = gcd(Math.abs(top), Math.abs(bottom)) || 1;
  return { numerator: top / divisor, denominator: bottom / divisor };
}

function randomFraction(maxDenominator = 9, allowNegative = false, allowImproper = false) {
  const denominator = randInt(2, maxDenominator);
  const maxNumerator = allowImproper ? denominator * 2 : denominator - 1;
  let numerator = 1;
  do {
    numerator = randInt(1, maxNumerator);
  } while (numerator % denominator === 0);
  if (allowNegative && Math.random() > 0.5) numerator *= -1;
  return makeFraction(numerator, denominator);
}

function fractionToNumber(fraction) {
  return fraction.numerator / fraction.denominator;
}

function addFractions(left, right) {
  return makeFraction(left.numerator * right.denominator + right.numerator * left.denominator, left.denominator * right.denominator);
}

function subtractFractions(left, right) {
  return makeFraction(left.numerator * right.denominator - right.numerator * left.denominator, left.denominator * right.denominator);
}

function multiplyFractions(left, right) {
  return makeFraction(left.numerator * right.numerator, left.denominator * right.denominator);
}

function divideFractions(left, right) {
  return makeFraction(left.numerator * right.denominator, left.denominator * right.numerator);
}

function isZeroFraction(fraction) {
  return !fraction || fraction.numerator === 0;
}

function formatFraction(fraction, options = {}) {
  const normalized = makeFraction(fraction.numerator, fraction.denominator);
  if (options.html) return formatFractionHtml(normalized);
  return normalized.denominator === 1 ? String(normalized.numerator) : `${normalized.numerator}/${normalized.denominator}`;
}

function formatFractionHtml(fraction) {
  const normalized = makeFraction(fraction.numerator, fraction.denominator);
  const plain = formatFraction(normalized);
  if (normalized.denominator === 1) return escapeHtml(plain);
  const sign = normalized.numerator < 0 ? `<span class="frac-sign" data-value="-"></span>` : "";
  return `<span class="frac-wrap" aria-label="${escapeHtml(plain)}"><span class="sr-only">${escapeHtml(plain)}</span><span class="frac-render" aria-hidden="true">${sign}<span class="frac"><span class="frac-top" data-value="${Math.abs(normalized.numerator)}"></span><span class="frac-bottom" data-value="${normalized.denominator}"></span></span></span></span>`;
}

function formatSignedFractionTerm(fraction, first = false, options = {}) {
  const normalized = makeFraction(fraction.numerator, fraction.denominator);
  if (normalized.numerator === 0) return first ? "0" : "";
  const absolute = makeFraction(Math.abs(normalized.numerator), normalized.denominator);
  const body = formatFraction(absolute, options);
  if (first) return normalized.numerator < 0 ? `-${body}` : body;
  return normalized.numerator < 0 ? `- ${body}` : `+ ${body}`;
}

function formatFractionVariableTerm(fraction, variable, first = false, options = {}) {
  const normalized = makeFraction(fraction.numerator, fraction.denominator);
  if (normalized.numerator === 0) return first ? "0" : "";
  const absolute = makeFraction(Math.abs(normalized.numerator), normalized.denominator);
  const coefficient = absolute.numerator === 1 && absolute.denominator === 1 ? "" : formatFraction(absolute, options);
  const body = `${coefficient}${variable}`;
  if (first) return normalized.numerator < 0 ? `-${body}` : body;
  return normalized.numerator < 0 ? `- ${body}` : `+ ${body}`;
}

function formatFractionPolynomial(x2, x, constant, options = {}) {
  let text = "";
  if (!isZeroFraction(x2)) text = formatFractionVariableTerm(x2, "x²", true, options);
  if (!isZeroFraction(x)) text = text ? `${text} ${formatFractionVariableTerm(x, "x", false, options)}` : formatFractionVariableTerm(x, "x", true, options);
  if (!isZeroFraction(constant)) text = text ? `${text} ${formatSignedFractionTerm(constant, false, options)}` : formatSignedFractionTerm(constant, true, options);
  return text || "0";
}

function multiplyMonomials(left, right) {
  return {
    coefficient: left.coefficient * right.coefficient,
    powers: MONOMIAL_VARIABLES.reduce((powers, variable) => {
      powers[variable] = (left.powers[variable] || 0) + (right.powers[variable] || 0);
      return powers;
    }, {}),
  };
}

function multiplyFractionMonomials(left, right) {
  return {
    coefficient: multiplyFractions(left.coefficient, right.coefficient),
    powers: MONOMIAL_VARIABLES.reduce((powers, variable) => {
      powers[variable] = (left.powers[variable] || 0) + (right.powers[variable] || 0);
      return powers;
    }, {}),
  };
}

function formatMonomial(term) {
  const variables = MONOMIAL_VARIABLES
    .map((name) => formatVariablePower(name, term.powers[name] || 0))
    .join("");
  if (!variables) return formatNumber(term.coefficient);
  if (term.coefficient === 1) return variables;
  if (term.coefficient === -1) return `-${variables}`;
  return `${formatNumber(term.coefficient)}${variables}`;
}

function formatFractionMonomial(term, options = {}) {
  const coefficient = makeFraction(term.coefficient.numerator, term.coefficient.denominator);
  const variables = MONOMIAL_VARIABLES
    .map((name) => formatVariablePower(name, term.powers[name] || 0))
    .join("");
  if (!variables) return formatFraction(coefficient, options);
  if (coefficient.numerator === 1 && coefficient.denominator === 1) return variables;
  if (coefficient.numerator === -1 && coefficient.denominator === 1) return `-${variables}`;
  return `${formatFraction(coefficient, options)}${variables}`;
}

function formatMonomialFactor(term) {
  const text = formatMonomial(term);
  return term.coefficient < 0 ? `(${text})` : text;
}

function formatFractionMonomialFactor(term, options = {}) {
  const text = formatFractionMonomial(term, options);
  return term.coefficient.numerator < 0 ? `(${text})` : text;
}

function formatVariablePower(name, power) {
  if (!power) return "";
  if (power === 1) return name;
  return `${name}${toSuperscript(power)}`;
}

function toSuperscript(value) {
  const map = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  return String(value)
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 100) / 100);
}

function numericEquals(raw, answer) {
  const value = parseNumeric(raw);
  return Number.isFinite(value) && Math.abs(value - answer) < 0.005;
}

function fractionEquals(raw, answer) {
  const value = parseNumeric(raw);
  return Number.isFinite(value) && Math.abs(value - answer) < 0.0001;
}

function unorderedPairEquals(rawA, rawB, answerA, answerB) {
  const a = parseNumeric(rawA);
  const b = parseNumeric(rawB);
  return (
    (Math.abs(a - answerA) < 0.0001 && Math.abs(b - answerB) < 0.0001) ||
    (Math.abs(a - answerB) < 0.0001 && Math.abs(b - answerA) < 0.0001)
  );
}

function coefficientPairEquals(input, answerA, answerB) {
  return numericEquals(input.a, answerA) && numericEquals(input.b, answerB);
}

function linearExpressionEquals(raw, answerA, answerB) {
  const polynomial = parsePolynomialExpression(raw);
  if (!polynomial) return false;
  return (
    Math.abs(polynomial.x2) < 0.0001 &&
    Math.abs(polynomial.x - answerA) < 0.0001 &&
    Math.abs(polynomial.constant - answerB) < 0.0001
  );
}

function quadraticExpressionEquals(raw, answerA, answerB) {
  const polynomial = parsePolynomialExpression(raw);
  if (!polynomial) return false;
  return (
    Math.abs(polynomial.x2 - 1) < 0.0001 &&
    Math.abs(polynomial.x - answerA) < 0.0001 &&
    Math.abs(polynomial.constant - answerB) < 0.0001
  );
}

function quadraticExpressionFullEquals(raw, answerX2, answerX, answerConstant) {
  const polynomial = parsePolynomialExpression(raw);
  if (!polynomial) return false;
  return (
    Math.abs(polynomial.x2 - answerX2) < 0.0001 &&
    Math.abs(polynomial.x - answerX) < 0.0001 &&
    Math.abs(polynomial.constant - answerConstant) < 0.0001
  );
}

function parsePolynomialExpression(raw) {
  let normalized = normalizeAnswerText(raw)
    .toLowerCase()
    .replace(/^(?:答え|解|式|y)\s*=/i, "")
    .replace(/[＊×·・*]/g, "")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3");
  if (!normalized) return null;
  normalized = normalized.replace(/-/g, "+-");
  if (normalized.startsWith("+")) normalized = normalized.slice(1);
  const terms = normalized.split("+").filter(Boolean);
  if (!terms.length) return null;

  const polynomial = { x2: 0, x: 0, constant: 0 };
  for (const term of terms) {
    if (/x\^?2|x2/.test(term)) {
      const coefficientText = term.replace(/x\^?2|x2/g, "");
      const coefficient = parseCoefficient(coefficientText);
      if (!Number.isFinite(coefficient)) return null;
      polynomial.x2 += coefficient;
    } else if (term.includes("x")) {
      const coefficientText = term.replace(/x/g, "");
      const coefficient = parseCoefficient(coefficientText);
      if (!Number.isFinite(coefficient)) return null;
      polynomial.x += coefficient;
    } else {
      const constant = parseNumeric(term);
      if (!Number.isFinite(constant)) return null;
      polynomial.constant += constant;
    }
  }
  return polynomial;
}

function parseCoefficient(value) {
  if (value === "" || value === "+") return 1;
  if (value === "-") return -1;
  return parseNumeric(value);
}

function orderedPairTextEquals(raw, answerA, answerB) {
  const values = extractNumericAnswers(raw);
  return values.length >= 2 && Math.abs(values[0] - answerA) < 0.0001 && Math.abs(values[1] - answerB) < 0.0001;
}

function unorderedPairTextEquals(raw, answerA, answerB) {
  const values = extractNumericAnswers(raw);
  return values.length >= 2 && unorderedPairEquals(String(values[0]), String(values[1]), answerA, answerB);
}

function extractNumericAnswers(raw) {
  return String(raw)
    .normalize("NFKC")
    .trim()
    .replace(/[−‐‑‒–—―ーｰ]/g, "-")
    .replace(/[()（）]/g, "")
    .replace(/\s+/g, ",")
    .split(/[、，,;；]/)
    .filter((part) => part.trim())
    .map((part) => parseNumeric(part))
    .filter((value) => Number.isFinite(value));
}

function termEquals(raw, coefficient, variable) {
  const normalized = normalizeAnswerText(raw)
    .replace(/\*/g, "")
    .replace(/\^2/g, "2")
    .replace(/²/g, "2");
  if (variable === "x2") {
    const match = normalized.match(/^(-?\d*)x2$/i);
    if (!match) return numericEquals(normalized, coefficient);
    const rawCoef = match[1];
    const parsed = rawCoef === "" ? 1 : rawCoef === "-" ? -1 : Number(rawCoef);
    return Math.abs(parsed - coefficient) < 0.0001;
  }
  return false;
}

function monomialEquals(raw, coefficient, powers = {}) {
  const parsed = parseMonomial(raw);
  if (!parsed) return false;
  const expected = normalizePowers(powers);
  const actual = normalizePowers(parsed.powers);
  return Math.abs(parsed.coefficient - coefficient) < 0.0001 && MONOMIAL_VARIABLES.every((variable) => actual[variable] === expected[variable]);
}

function parseMonomial(raw) {
  let normalized = normalizeAnswerText(raw)
    .toLowerCase()
    .replace(/^(?:答え|解)=/i, "")
    .replace(/[＊×·・*]/g, "")
    .replace(/\^/g, "")
    .replace(/²/g, "2")
    .replace(/³/g, "3");
  if (!normalized) return null;

  const powers = normalizePowers();
  normalized = normalized.replace(/([abcxy])(\d*)/g, (_, variable, power) => {
    powers[variable] += power ? Number(power) : 1;
    return "";
  });
  normalized = normalized.replace(/[()]/g, "");
  const coefficient =
    normalized === "" || normalized === "+"
      ? 1
      : normalized === "-"
        ? -1
        : parseNumeric(normalized);
  if (!Number.isFinite(coefficient)) return null;
  return { coefficient, powers };
}

function normalizePowers(powers = {}) {
  return MONOMIAL_VARIABLES.reduce((normalized, variable) => {
    normalized[variable] = powers[variable] || 0;
    return normalized;
  }, {});
}

function englishEquals(raw, answer) {
  return normalizeEnglishText(raw) === normalizeEnglishText(answer);
}

function knowledgeEquals(raw, answers) {
  const normalized = normalizeJapaneseText(raw);
  return answers.some((answer) => normalizeJapaneseText(answer) === normalized);
}

function normalizeJapaneseText(value) {
  return String(value)
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[、。，．・･「」『』（）()【】\[\]\s]/g, "");
}

function normalizeEnglishText(value) {
  return String(value)
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[.!?。！？]/g, "")
    .replace(/\s+/g, " ");
}

function parseNumeric(raw) {
  if (typeof raw !== "string") return Number.NaN;
  let normalized = normalizeAnswerText(raw);
  const isPercent = normalized.endsWith("%");
  normalized = normalized
    .replace(/%$/, "")
    .replace(/^(?:[xyab]|答え|解|角度|体積|確率)=/i, "")
    .replace(/[°度]/g, "")
    .replace(/cm\^?3|cm\^?2|cm|立方センチメートル|平方センチメートル|センチメートル/gi, "");
  if (/^-?\d+\/-?\d+$/.test(normalized)) {
    const [top, bottom] = normalized.split("/").map(Number);
    const value = bottom === 0 ? Number.NaN : top / bottom;
    return isPercent ? value / 100 : value;
  }
  const value = Number(normalized);
  return isPercent ? value / 100 : value;
}

function normalizeAnswerText(raw) {
  return String(raw)
    .normalize("NFKC")
    .trim()
    .replace(/[−‐‑‒–—―ーｰ]/g, "-")
    .replace(/[，、,]/g, ".")
    .replace(/\s/g, "");
}

function stripDegree(value) {
  return normalizeAnswerText(value).replace(/[°度]/g, "");
}

function stripUnit(value) {
  return normalizeAnswerText(value).replace(/km|m\^?3|m\^?2|m|l|cm\^?3|cm\^?2|cm|円|個|本|冊|人|時間|時速|立方センチメートル|平方センチメートル|センチメートル|キロメートル|メートル|リットル|℃/gi, "");
}

function simplifyFraction(top, bottom) {
  const divisor = gcd(Math.abs(top), Math.abs(bottom));
  const a = top / divisor;
  const b = bottom / divisor;
  return b === 1 ? String(a) : `${a}/${b}`;
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function formatDateTime(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripTags(value) {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.textContent || "";
}

function getProblemAnswerHtml(problem) {
  if (!problem) return "";
  return problem.displayAnswerHtml || formatInlineFractionsHtml(problem.displayAnswer || "");
}

function formatInlineFractionsHtml(value) {
  return String(value)
    .split(/(-?\d+\/\d+)/g)
    .map((part) => {
      const match = part.match(/^(-?\d+)\/(\d+)$/);
      return match ? formatFractionHtml(makeFraction(Number(match[1]), Number(match[2]))) : escapeHtml(part);
    })
    .join("");
}

function focusFirstInput() {
  if (state.mode !== "student" || state.answerStage !== "answering") return;
  const field = els.answerArea.querySelector("[data-fraction-part='numerator']") || els.answerArea.querySelector("input");
  if (!field) return;
  state.activeAnswerKey = field.dataset.answerKey || "value";
  state.activeFractionPart = field.dataset.fractionPart || "";
  field.focus({ preventScroll: true });
  field.select?.();
  if (!isTabletLearningViewport()) {
    field.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function isTabletLearningViewport() {
  return state.mode === "student" && (Math.max(window.innerWidth || 0, window.innerHeight || 0) <= 1180 || isTouchDevice());
}

window.addEventListener("resize", () => {
  updateDeviceClass();
  if (state.current) drawVisual(state.current);
});

boot();
