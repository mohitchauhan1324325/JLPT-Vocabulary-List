// 800 N5 Vocabulary — converted from 800_n5_vocab.docx
// Example sentences hand-reviewed for natural, N5-appropriate Japanese grammar.
const n5Vocab = [
  {
    kanji: 'ああ',
    kana: 'ああ',
    romaji: 'ah',
    meaning: 'Ah!',
    type: 'noun',
    example: 'ああ、そうですか。',
    exampleRomaji: 'Aa, sou desu ka.',
    exampleMeaning: 'Ah, is that so?'
  },
  {
    kanji: '会う',
    kana: 'あう',
    romaji: 'au',
    meaning: 'to meet',
    type: 'verb',
    example: '友達[ともだち]に会[あ]います。',
    exampleRomaji: 'Tomodachi ni aimasu.',
    exampleMeaning: 'I meet a friend.'
  },
  {
    kanji: '青い',
    kana: 'あおい',
    romaji: 'aoi',
    meaning: 'blue',
    type: 'adjective',
    example: '空[そら]が青[あお]いです。',
    exampleRomaji: 'Sora ga aoi desu.',
    exampleMeaning: 'The sky is blue.'
  },
  {
    kanji: '赤い',
    kana: 'あかい',
    romaji: 'akai',
    meaning: 'red',
    type: 'adjective',
    example: 'りんごが赤[あか]いです。',
    exampleRomaji: 'Ringo ga akai desu.',
    exampleMeaning: 'The apple is red.'
  },
  {
    kanji: '明るい',
    kana: 'あかるい',
    romaji: 'akarui',
    meaning: 'light, bright',
    type: 'adjective',
    example: 'この部屋[へや]は明[あか]るいです。',
    exampleRomaji: 'Kono heya wa akarui desu.',
    exampleMeaning: 'This room is bright.'
  },
  {
    kanji: '秋',
    kana: 'あき',
    romaji: 'aki',
    meaning: 'autumn, fall',
    type: 'noun',
    example: '秋[あき]が好[す]きです。',
    exampleRomaji: 'Aki ga suki desu.',
    exampleMeaning: 'I like autumn, fall.'
  },
  {
    kanji: '開く',
    kana: 'あく',
    romaji: 'aku',
    meaning: 'open',
    type: 'verb',
    example: 'ドアが開[あ]きます。',
    exampleRomaji: 'Doa ga akimasu.',
    exampleMeaning: 'The door opens.'
  },
  {
    kanji: '開ける',
    kana: 'あける',
    romaji: 'akeru',
    meaning: 'to open',
    type: 'verb',
    example: '窓[まど]を開[あ]けます。',
    exampleRomaji: 'Mado o akemasu.',
    exampleMeaning: 'I open the window.'
  },
  {
    kanji: 'あげる',
    kana: 'あげる',
    romaji: 'ageru',
    meaning: 'to give',
    type: 'verb',
    example: '友達[ともだち]にプレゼントをあげます。',
    exampleRomaji: 'Tomodachi ni purezento o agemasu.',
    exampleMeaning: 'I give my friend a present.'
  },
  {
    kanji: '朝',
    kana: 'あさ',
    romaji: 'asa',
    meaning: 'morning',
    type: 'noun',
    example: '朝[あさ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Asa, nihongo o benkyou shimasu.',
    exampleMeaning: 'Morning, I study Japanese.'
  },
  {
    kanji: '朝ご飯',
    kana: 'あさごはん',
    romaji: 'asagohan',
    meaning: 'breakfast',
    type: 'noun',
    example: 'これは朝ご飯[あさごはん]です。',
    exampleRomaji: 'Kore wa asagohan desu.',
    exampleMeaning: 'This is a breakfast.'
  },
  {
    kanji: 'あさって',
    kana: 'あさって',
    romaji: 'asatte',
    meaning: 'the day after tomorrow',
    type: 'noun',
    example: 'あさって、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Asatte, nihongo o benkyou shimasu.',
    exampleMeaning: 'The day after tomorrow, I study Japanese.'
  },
  {
    kanji: '足',
    kana: 'あし',
    romaji: 'ashi',
    meaning: 'leg, foot',
    type: 'noun',
    example: 'これは足[あし]です。',
    exampleRomaji: 'Kore wa ashi desu.',
    exampleMeaning: 'This is a leg, foot.'
  },
  {
    kanji: '明日',
    kana: 'あした',
    romaji: 'ashita',
    meaning: 'tomorrow',
    type: 'noun',
    example: '明日[あした]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Ashita, nihongo o benkyou shimasu.',
    exampleMeaning: 'Tomorrow, I study Japanese.'
  },
  {
    kanji: 'あそこ',
    kana: 'あそこ',
    romaji: 'asoko',
    meaning: 'over there',
    type: 'noun',
    example: 'あそこです。',
    exampleRomaji: 'Asoko desu.',
    exampleMeaning: 'It is over there.'
  },
  {
    kanji: '遊ぶ',
    kana: 'あそぶ',
    romaji: 'asobu',
    meaning: 'to play',
    type: 'verb',
    example: '公園[こうえん]で遊[あそ]びます。',
    exampleRomaji: 'Kouen de asobimasu.',
    exampleMeaning: 'I play in the park.'
  },
  {
    kanji: '温かい',
    kana: 'あたたかい',
    romaji: 'atatakai',
    meaning: 'warm',
    type: 'adjective',
    example: 'このスープは温[あたた]かいです。',
    exampleRomaji: 'Kono suupu wa atatakai desu.',
    exampleMeaning: 'This soup is warm.'
  },
  {
    kanji: '頭',
    kana: 'あたま',
    romaji: 'atama',
    meaning: 'head',
    type: 'noun',
    example: 'これは頭[あたま]です。',
    exampleRomaji: 'Kore wa atama desu.',
    exampleMeaning: 'This is a head.'
  },
  {
    kanji: '新しい',
    kana: 'あたらしい',
    romaji: 'atarashii',
    meaning: 'new',
    type: 'adjective',
    example: 'これは新[あたら]しい靴[くつ]です。',
    exampleRomaji: 'Kore wa atarashii kutsu desu.',
    exampleMeaning: 'This is a new pair of shoes.'
  },
  {
    kanji: 'あちら',
    kana: 'あちら',
    romaji: 'achira',
    meaning: 'over there (polite)',
    type: 'noun',
    example: 'これはあちらです。',
    exampleRomaji: 'Kore wa achira desu.',
    exampleMeaning: 'This is an over there (polite).'
  },
  {
    kanji: '暑い',
    kana: 'あつい',
    romaji: 'atsui',
    meaning: 'hot (air)',
    type: 'adjective',
    example: '今日[きょう]は暑[あつ]いです。',
    exampleRomaji: 'Kyou wa atsui desu.',
    exampleMeaning: 'It is hot today.'
  },
  {
    kanji: '厚い',
    kana: 'あつい',
    romaji: 'atsui',
    meaning: 'thick',
    type: 'adjective',
    example: 'この本[ほん]は厚[あつ]いです。',
    exampleRomaji: 'Kono hon wa atsui desu.',
    exampleMeaning: 'This book is thick.'
  },
  {
    kanji: '後',
    kana: 'あと',
    romaji: 'ato',
    meaning: 'later, after',
    type: 'noun',
    example: 'これは後[あと]です。',
    exampleRomaji: 'Kore wa ato desu.',
    exampleMeaning: 'This is a later, after.'
  },
  {
    kanji: '貴方',
    kana: 'あなた',
    romaji: 'anata',
    meaning: 'you',
    type: 'noun',
    example: 'あなたは先生[せんせい]ですか。',
    exampleRomaji: 'Anata wa sensei desu ka.',
    exampleMeaning: 'Are you a teacher?'
  },
  {
    kanji: '兄',
    kana: 'あに',
    romaji: 'ani',
    meaning: 'older brother',
    type: 'noun',
    example: 'これは兄[あに]です。',
    exampleRomaji: 'Kore wa ani desu.',
    exampleMeaning: 'This is an older brother.'
  },
  {
    kanji: '姉',
    kana: 'あね',
    romaji: 'ane',
    meaning: 'older sister',
    type: 'noun',
    example: 'これは姉[あね]です。',
    exampleRomaji: 'Kore wa ane desu.',
    exampleMeaning: 'This is an older sister.'
  },
  {
    kanji: 'あの',
    kana: 'あの',
    romaji: 'ano',
    meaning: 'that (over there)',
    type: 'noun',
    example: 'あの人[ひと]は誰[だれ]ですか。',
    exampleRomaji: 'Ano hito wa dare desu ka.',
    exampleMeaning: 'Who is that person over there?'
  },
  {
    kanji: 'あの',
    kana: 'あの',
    romaji: 'ano',
    meaning: 'well, then',
    type: 'noun',
    example: 'あの人[ひと]は誰[だれ]ですか。',
    exampleRomaji: 'Ano hito wa dare desu ka.',
    exampleMeaning: 'Who is that person over there?'
  },
  {
    kanji: 'アパート',
    kana: 'アパート',
    romaji: 'apaato',
    meaning: 'apartment',
    type: 'noun',
    example: 'これはアパート[アパート]です。',
    exampleRomaji: 'Kore wa apaato desu.',
    exampleMeaning: 'This is an apartment.'
  },
  {
    kanji: '浴びる',
    kana: 'あびる',
    romaji: 'abiru',
    meaning: 'to take a shower',
    type: 'verb',
    example: 'シャワーを浴[あ]びます。',
    exampleRomaji: 'Shawaa o abimasu.',
    exampleMeaning: 'I take a shower.'
  },
  {
    kanji: '危ない',
    kana: 'あぶない',
    romaji: 'abunai',
    meaning: 'dangerous',
    type: 'adjective',
    example: 'あの道[みち]は危[あぶ]ないです。',
    exampleRomaji: 'Ano michi wa abunai desu.',
    exampleMeaning: 'That road is dangerous.'
  },
  {
    kanji: '甘い',
    kana: 'あまい',
    romaji: 'amai',
    meaning: 'sweet',
    type: 'adjective',
    example: 'このケーキは甘[あま]いです。',
    exampleRomaji: 'Kono keeki wa amai desu.',
    exampleMeaning: 'This cake is sweet.'
  },
  {
    kanji: 'あまり',
    kana: 'あまり',
    romaji: 'amari',
    meaning: 'not so',
    type: 'adverb',
    example: 'あまり寒[さむ]くないです。',
    exampleRomaji: 'Amari samukunai desu.',
    exampleMeaning: 'It is not very cold.'
  },
  {
    kanji: '雨',
    kana: 'あめ',
    romaji: 'ame',
    meaning: 'rain',
    type: 'noun',
    example: 'これは雨[あめ]です。',
    exampleRomaji: 'Kore wa ame desu.',
    exampleMeaning: 'This is rain.'
  },
  {
    kanji: '洗う',
    kana: 'あらう',
    romaji: 'arau',
    meaning: 'to wash',
    type: 'verb',
    example: '手[て]を洗[あら]います。',
    exampleRomaji: 'Te o araimasu.',
    exampleMeaning: 'I wash my hands.'
  },
  {
    kanji: '有る',
    kana: 'ある',
    romaji: 'aru',
    meaning: 'to be, to exist',
    type: 'verb',
    example: '机[つくえ]の上[うえ]に本[ほん]があります。',
    exampleRomaji: 'Tsukue no ue ni hon ga arimasu.',
    exampleMeaning: 'There is a book on the desk.'
  },
  {
    kanji: 'ある',
    kana: 'ある',
    romaji: 'aru',
    meaning: 'to possess',
    type: 'verb',
    example: 'わたしは車[くるま]があります。',
    exampleRomaji: 'Watashi wa kuruma ga arimasu.',
    exampleMeaning: 'I have a car.'
  },
  {
    kanji: '歩く',
    kana: 'あるく',
    romaji: 'aruku',
    meaning: 'to walk',
    type: 'verb',
    example: '駅[えき]まで歩[ある]きます。',
    exampleRomaji: 'Eki made arukimasu.',
    exampleMeaning: 'I walk to the station.'
  },
  {
    kanji: 'あれ',
    kana: 'あれ',
    romaji: 'are',
    meaning: 'that one',
    type: 'noun',
    example: 'あれです。',
    exampleRomaji: 'Are desu.',
    exampleMeaning: 'It is that one over there.'
  },
  {
    kanji: '良い',
    kana: 'いい / よい',
    romaji: 'ii, yoi',
    meaning: 'good',
    type: 'adjective',
    example: 'この店[みせ]はいいです。',
    exampleRomaji: 'Kono mise wa ii desu.',
    exampleMeaning: 'This shop is good.'
  },
  {
    kanji: 'いいえ',
    kana: 'いいえ',
    romaji: 'iie',
    meaning: 'no',
    type: 'noun',
    example: 'いいえ、違[ちが]います。',
    exampleRomaji: 'Iie, chigaimasu.',
    exampleMeaning: 'No, that is not right.'
  },
  {
    kanji: '言う',
    kana: 'いう',
    romaji: 'iu',
    meaning: 'to say, to tell',
    type: 'verb',
    example: '名前[なまえ]を言[い]います。',
    exampleRomaji: 'Namae o iimasu.',
    exampleMeaning: 'I say my name.'
  },
  {
    kanji: '家',
    kana: 'いえ',
    romaji: 'ie',
    meaning: 'house, home',
    type: 'noun',
    example: 'これは家[いえ]です。',
    exampleRomaji: 'Kore wa ie desu.',
    exampleMeaning: 'This is a house, home.'
  },
  {
    kanji: '行く',
    kana: 'いく',
    romaji: 'iku',
    meaning: 'to go',
    type: 'verb',
    example: '学校[がっこう]に行[い]きます。',
    exampleRomaji: 'Gakkou ni ikimasu.',
    exampleMeaning: 'I go to school.'
  },
  {
    kanji: 'いくつ',
    kana: 'いくつ',
    romaji: 'ikutsu',
    meaning: 'how many, how old',
    type: 'noun',
    example: 'お子[こ]さんはいくつですか。',
    exampleRomaji: 'Okosan wa ikutsu desu ka.',
    exampleMeaning: 'How old is your child?'
  },
  {
    kanji: 'いくら',
    kana: 'いくら',
    romaji: 'ikura',
    meaning: 'how much',
    type: 'noun',
    example: 'この本[ほん]はいくらですか。',
    exampleRomaji: 'Kono hon wa ikura desu ka.',
    exampleMeaning: 'How much is this book?'
  },
  {
    kanji: '池',
    kana: 'いけ',
    romaji: 'ike',
    meaning: 'pond',
    type: 'noun',
    example: 'これは池[いけ]です。',
    exampleRomaji: 'Kore wa ike desu.',
    exampleMeaning: 'This is a pond.'
  },
  {
    kanji: '医者',
    kana: 'いしゃ',
    romaji: 'isha',
    meaning: 'doctor',
    type: 'noun',
    example: 'これは医者[いしゃ]です。',
    exampleRomaji: 'Kore wa isha desu.',
    exampleMeaning: 'This is a doctor.'
  },
  {
    kanji: '椅子',
    kana: 'いす',
    romaji: 'isu',
    meaning: 'chair',
    type: 'noun',
    example: 'これは椅子[いす]です。',
    exampleRomaji: 'Kore wa isu desu.',
    exampleMeaning: 'This is a chair.'
  },
  {
    kanji: '忙しい',
    kana: 'いそがしい',
    romaji: 'isogashii',
    meaning: 'to be busy',
    type: 'adjective',
    example: 'わたしは忙[いそが]しいです。',
    exampleRomaji: 'Watashi wa isogashii desu.',
    exampleMeaning: 'I am busy.'
  },
  {
    kanji: '痛い',
    kana: 'いたい',
    romaji: 'itai',
    meaning: 'to be painful',
    type: 'adjective',
    example: '頭[あたま]が痛[いた]いです。',
    exampleRomaji: 'Atama ga itai desu.',
    exampleMeaning: 'My head hurts.'
  },
  {
    kanji: '一',
    kana: 'いち',
    romaji: 'ichi',
    meaning: 'one',
    type: 'noun',
    example: 'これは一[いち]です。',
    exampleRomaji: 'Kore wa ichi desu.',
    exampleMeaning: 'This is one.'
  },
  {
    kanji: '一日',
    kana: 'いちにち',
    romaji: 'ichinichi',
    meaning: 'one day',
    type: 'noun',
    example: '一日[いちにち]、家[いえ]にいます。',
    exampleRomaji: 'Ichinichi, ie ni imasu.',
    exampleMeaning: 'I stay home for one day.'
  },
  {
    kanji: '一番',
    kana: 'いちばん',
    romaji: 'ichiban',
    meaning: 'No. 1, the best, the first',
    type: 'adverb',
    example: 'これが一番[いちばん]いいです。',
    exampleRomaji: 'Kore ga ichiban ii desu.',
    exampleMeaning: 'This is the best.'
  },
  {
    kanji: 'いつ',
    kana: 'いつ',
    romaji: 'itsu',
    meaning: 'when',
    type: 'noun',
    example: '誕生日[たんじょうび]はいつですか。',
    exampleRomaji: 'Tanjoubi wa itsu desu ka.',
    exampleMeaning: 'When is your birthday?'
  },
  {
    kanji: '五日',
    kana: 'いつか',
    romaji: 'itsuka',
    meaning: 'the 5th day of the month, 5 days',
    type: 'noun',
    example: '今日[きょう]は五日[いつか]です。',
    exampleRomaji: 'Kyou wa itsuka desu.',
    exampleMeaning: 'Today is the the 5th day of the month, 5 days.'
  },
  {
    kanji: '一緒',
    kana: 'いっしょ',
    romaji: 'issho',
    meaning: 'together',
    type: 'adjective',
    example: '友達[ともだち]と一緒[いっしょ]に行[い]きます。',
    exampleRomaji: 'Tomodachi to issho ni ikimasu.',
    exampleMeaning: 'I go together with my friend.'
  },
  {
    kanji: '五つ',
    kana: 'いつつ',
    romaji: 'itsutsu',
    meaning: 'five',
    type: 'noun',
    example: 'これは五[いつ]つです。',
    exampleRomaji: 'Kore wa itsutsu desu.',
    exampleMeaning: 'This is five.'
  },
  {
    kanji: 'いつも',
    kana: 'いつも',
    romaji: 'itsumo',
    meaning: 'always',
    type: 'adverb',
    example: 'いつも六時[ろくじ]に起[お]きます。',
    exampleRomaji: 'Itsumo rokuji ni okimasu.',
    exampleMeaning: 'I always get up at six o\'clock.'
  },
  {
    kanji: '今',
    kana: 'いま',
    romaji: 'ima',
    meaning: 'now',
    type: 'noun',
    example: '今[いま]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Ima, nihongo o benkyou shimasu.',
    exampleMeaning: 'Now, I study Japanese.'
  },
  {
    kanji: '意味',
    kana: 'いみ',
    romaji: 'imi',
    meaning: 'meaning',
    type: 'noun',
    example: 'これは意味[いみ]です。',
    exampleRomaji: 'Kore wa imi desu.',
    exampleMeaning: 'This is a meaning.'
  },
  {
    kanji: '妹',
    kana: 'いもうと',
    romaji: 'imouto',
    meaning: 'someone’s younger sister',
    type: 'noun',
    example: 'これは妹[いもうと]です。',
    exampleRomaji: 'Kore wa imouto desu.',
    exampleMeaning: 'This is someone’s younger sister.'
  },
  {
    kanji: 'いや',
    kana: 'いや',
    romaji: 'iya',
    meaning: 'not likable, unpleasant',
    type: 'noun',
    example: 'いや、けっこうです。',
    exampleRomaji: 'Iya, kekkou desu.',
    exampleMeaning: 'No, that\'s all right.'
  },
  {
    kanji: '入口',
    kana: 'いりぐち',
    romaji: 'iriguchi',
    meaning: 'entrance',
    type: 'noun',
    example: 'これは入口[いりぐち]です。',
    exampleRomaji: 'Kore wa iriguchi desu.',
    exampleMeaning: 'This is an entrance.'
  },
  {
    kanji: 'いる',
    kana: 'いる',
    romaji: 'iru',
    meaning: 'need, must have, be required',
    type: 'verb',
    example: 'お金[かね]がいります。',
    exampleRomaji: 'Okane ga irimasu.',
    exampleMeaning: 'I need money.'
  },
  {
    kanji: 'いる',
    kana: 'いる',
    romaji: 'iru',
    meaning: 'to exist',
    type: 'verb',
    example: '教室[きょうしつ]に学生[がくせい]がいます。',
    exampleRomaji: 'Kyoushitsu ni gakusei ga imasu.',
    exampleMeaning: 'There are students in the classroom.'
  },
  {
    kanji: '入れる',
    kana: 'いれる',
    romaji: 'ireru',
    meaning: 'to insert, to put in',
    type: 'verb',
    example: 'かばんに本[ほん]を入[い]れます。',
    exampleRomaji: 'Kaban ni hon o iremasu.',
    exampleMeaning: 'I put a book in my bag.'
  },
  {
    kanji: '色',
    kana: 'いろ',
    romaji: 'iro',
    meaning: 'color',
    type: 'noun',
    example: 'これは色[いろ]です。',
    exampleRomaji: 'Kore wa iro desu.',
    exampleMeaning: 'This is a color.'
  },
  {
    kanji: '色々',
    kana: 'いろいろ',
    romaji: 'iroiro',
    meaning: 'various',
    type: 'adjective',
    example: '店[みせ]には色々[いろいろ]な物[もの]があります。',
    exampleRomaji: 'Mise ni wa iroiro na mono ga arimasu.',
    exampleMeaning: 'There are various things in the shop.'
  },
  {
    kanji: '上',
    kana: 'うえ',
    romaji: 'ue',
    meaning: 'top, on, above',
    type: 'noun',
    example: 'これは上[うえ]です。',
    exampleRomaji: 'Kore wa ue desu.',
    exampleMeaning: 'This is a top, on, above.'
  },
  {
    kanji: '後ろ',
    kana: 'うしろ',
    romaji: 'ushiro',
    meaning: 'back, rear, behind',
    type: 'noun',
    example: 'これは後[うし]ろです。',
    exampleRomaji: 'Kore wa ushiro desu.',
    exampleMeaning: 'This is a back, rear, behind.'
  },
  {
    kanji: '薄い',
    kana: 'うすい',
    romaji: 'usui',
    meaning: 'thin',
    type: 'adjective',
    example: 'この紙[かみ]は薄[うす]いです。',
    exampleRomaji: 'Kono kami wa usui desu.',
    exampleMeaning: 'This paper is thin.'
  },
  {
    kanji: '歌',
    kana: 'うた',
    romaji: 'uta',
    meaning: 'song',
    type: 'noun',
    example: 'これは歌[うた]です。',
    exampleRomaji: 'Kore wa uta desu.',
    exampleMeaning: 'This is a song.'
  },
  {
    kanji: '歌う',
    kana: 'うたう',
    romaji: 'utau',
    meaning: 'to sing',
    type: 'verb',
    example: '歌[うた]を歌[うた]います。',
    exampleRomaji: 'Uta o utaimasu.',
    exampleMeaning: 'I sing a song.'
  },
  {
    kanji: '内',
    kana: 'うち',
    romaji: 'uchi',
    meaning: 'home',
    type: 'noun',
    example: 'これは内[うち]です。',
    exampleRomaji: 'Kore wa uchi desu.',
    exampleMeaning: 'This is a home.'
  },
  {
    kanji: '生まれる',
    kana: 'うまれる',
    romaji: 'umareru',
    meaning: 'to be born',
    type: 'verb',
    example: '来年[らいねん]、子供[こども]が生[う]まれます。',
    exampleRomaji: 'Rainen, kodomo ga umaremasu.',
    exampleMeaning: 'Next year, a baby will be born.'
  },
  {
    kanji: '海',
    kana: 'うみ',
    romaji: 'umi',
    meaning: 'sea',
    type: 'noun',
    example: 'これは海[うみ]です。',
    exampleRomaji: 'Kore wa umi desu.',
    exampleMeaning: 'This is a sea.'
  },
  {
    kanji: '売る',
    kana: 'うる',
    romaji: 'uru',
    meaning: 'to sell',
    type: 'verb',
    example: 'パン屋[や]でパンを売[う]ります。',
    exampleRomaji: 'Panya de pan o urimasu.',
    exampleMeaning: 'They sell bread at the bakery.'
  },
  {
    kanji: '上着',
    kana: 'うわぎ',
    romaji: 'uwagi',
    meaning: 'coat, jacket',
    type: 'noun',
    example: 'これは上着[うわぎ]です。',
    exampleRomaji: 'Kore wa uwagi desu.',
    exampleMeaning: 'This is a coat, jacket.'
  },
  {
    kanji: '絵',
    kana: 'え',
    romaji: 'e',
    meaning: 'picture',
    type: 'noun',
    example: 'これは絵[え]です。',
    exampleRomaji: 'Kore wa e desu.',
    exampleMeaning: 'This is a picture.'
  },
  {
    kanji: '映画',
    kana: 'えいが',
    romaji: 'eiga',
    meaning: 'movie',
    type: 'noun',
    example: 'これは映画[えいが]です。',
    exampleRomaji: 'Kore wa eiga desu.',
    exampleMeaning: 'This is a movie.'
  },
  {
    kanji: '映画館',
    kana: 'えいがかん',
    romaji: 'eigakan',
    meaning: 'cinema',
    type: 'noun',
    example: 'これは映画館[えいがかん]です。',
    exampleRomaji: 'Kore wa eigakan desu.',
    exampleMeaning: 'This is a cinema.'
  },
  {
    kanji: '英語',
    kana: 'えいご',
    romaji: 'eigo',
    meaning: 'English language',
    type: 'noun',
    example: 'これは英語[えいご]です。',
    exampleRomaji: 'Kore wa eigo desu.',
    exampleMeaning: 'This is English language.'
  },
  {
    kanji: 'ええ',
    kana: 'ええ',
    romaji: 'ee',
    meaning: 'Yes, I see',
    type: 'noun',
    example: 'ええ、そうです。',
    exampleRomaji: 'Ee, sou desu.',
    exampleMeaning: 'Yes, that is right.'
  },
  {
    kanji: '駅',
    kana: 'えき',
    romaji: 'eki',
    meaning: 'station',
    type: 'noun',
    example: 'これは駅[えき]です。',
    exampleRomaji: 'Kore wa eki desu.',
    exampleMeaning: 'This is a station.'
  },
  {
    kanji: 'エレベータ',
    kana: 'エレベータ',
    romaji: 'erebeeta',
    meaning: 'elevator',
    type: 'noun',
    example: 'これはエレベータ[エレベータ]です。',
    exampleRomaji: 'Kore wa erebeeta desu.',
    exampleMeaning: 'This is an elevator.'
  },
  {
    kanji: '円',
    kana: 'えん',
    romaji: 'en',
    meaning: 'Yen',
    type: 'noun',
    example: 'これは円[えん]です。',
    exampleRomaji: 'Kore wa en desu.',
    exampleMeaning: 'This is Yen.'
  },
  {
    kanji: '鉛筆',
    kana: 'えんぴつ',
    romaji: 'enpitsu',
    meaning: 'pencil',
    type: 'noun',
    example: 'これは鉛筆[えんぴつ]です。',
    exampleRomaji: 'Kore wa enpitsu desu.',
    exampleMeaning: 'This is a pencil.'
  },
  {
    kanji: '御',
    kana: 'お',
    romaji: 'o',
    meaning: 'honorific prefix',
    type: 'noun',
    example: 'お名前[なまえ]は何[なん]ですか。',
    exampleRomaji: 'Onamae wa nan desu ka.',
    exampleMeaning: 'What is your name?'
  },
  {
    kanji: '美味しい',
    kana: 'おいしい',
    romaji: 'oishii',
    meaning: 'tasty, delicious',
    type: 'adjective',
    example: 'この料理[りょうり]はおいしいです。',
    exampleRomaji: 'Kono ryouri wa oishii desu.',
    exampleMeaning: 'This dish is delicious.'
  },
  {
    kanji: '大きい',
    kana: 'おおきい',
    romaji: 'ookii',
    meaning: 'big',
    type: 'adjective',
    example: 'あの家[いえ]は大[おお]きいです。',
    exampleRomaji: 'Ano ie wa ookii desu.',
    exampleMeaning: 'That house is big.'
  },
  {
    kanji: 'おおぜい',
    kana: 'おおぜい',
    romaji: 'oozei',
    meaning: 'many people',
    type: 'adverb',
    example: '公園[こうえん]に人[ひと]がおおぜいいます。',
    exampleRomaji: 'Kouen ni hito ga oozei imasu.',
    exampleMeaning: 'There are many people in the park.'
  },
  {
    kanji: 'お母さん',
    kana: 'おかあさん',
    romaji: 'okaasan',
    meaning: 'my own mother',
    type: 'noun',
    example: 'これはお母[おかあ]さんです。',
    exampleRomaji: 'Kore wa okaasan desu.',
    exampleMeaning: 'This is my own mother.'
  },
  {
    kanji: 'お菓子',
    kana: 'おかし',
    romaji: 'okashi',
    meaning: 'confectionary, cake',
    type: 'noun',
    example: 'これはお菓子[おかし]です。',
    exampleRomaji: 'Kore wa okashi desu.',
    exampleMeaning: 'This is a confectionary, cake.'
  },
  {
    kanji: 'お金',
    kana: 'おかね',
    romaji: 'okane',
    meaning: 'money',
    type: 'noun',
    example: 'これはお金[おかね]です。',
    exampleRomaji: 'Kore wa okane desu.',
    exampleMeaning: 'This is money.'
  },
  {
    kanji: '起きる',
    kana: 'おきる',
    romaji: 'okiru',
    meaning: 'to get up, to stand up',
    type: 'verb',
    example: '六時[ろくじ]に起[お]きます。',
    exampleRomaji: 'Rokuji ni okimasu.',
    exampleMeaning: 'I get up at six o\'clock.'
  },
  {
    kanji: '置く',
    kana: 'おく',
    romaji: 'oku',
    meaning: 'to put, to place',
    type: 'verb',
    example: '机[つくえ]の上[うえ]に本[ほん]を置[お]きます。',
    exampleRomaji: 'Tsukue no ue ni hon o okimasu.',
    exampleMeaning: 'I put a book on the desk.'
  },
  {
    kanji: '奥さん',
    kana: 'おくさん',
    romaji: 'okusan',
    meaning: 'someone’s wife',
    type: 'noun',
    example: 'これは奥[おく]さんです。',
    exampleRomaji: 'Kore wa okusan desu.',
    exampleMeaning: 'This is someone’s wife.'
  },
  {
    kanji: '送る',
    kana: 'おくる',
    romaji: 'okuru',
    meaning: 'to send',
    type: 'verb',
    example: '友達[ともだち]にメールを送[おく]ります。',
    exampleRomaji: 'Tomodachi ni meeru o okurimasu.',
    exampleMeaning: 'I send an email to my friend.'
  },
  {
    kanji: 'お酒',
    kana: 'おさけ',
    romaji: 'osake',
    meaning: 'alcohol, sake',
    type: 'noun',
    example: 'これはお酒[おさけ]です。',
    exampleRomaji: 'Kore wa osake desu.',
    exampleMeaning: 'This is an alcohol, sake.'
  },
  {
    kanji: 'お皿',
    kana: 'おさら',
    romaji: 'osara',
    meaning: 'plate',
    type: 'noun',
    example: 'これはお皿[おさら]です。',
    exampleRomaji: 'Kore wa osara desu.',
    exampleMeaning: 'This is a plate.'
  },
  {
    kanji: '伯父さん',
    kana: 'おじさん',
    romaji: 'ojisan',
    meaning: 'uncle',
    type: 'noun',
    example: 'これは伯父[おじ]さんです。',
    exampleRomaji: 'Kore wa ojisan desu.',
    exampleMeaning: 'This is an uncle.'
  },
  {
    kanji: 'おじいさん',
    kana: 'おじいさん',
    romaji: 'ojiisan',
    meaning: 'grand father',
    type: 'noun',
    example: 'これはおじいさんです。',
    exampleRomaji: 'Kore wa ojiisan desu.',
    exampleMeaning: 'This is a grand father.'
  },
  {
    kanji: '押す',
    kana: 'おす',
    romaji: 'osu',
    meaning: 'to push',
    type: 'verb',
    example: 'ボタンを押[お]します。',
    exampleRomaji: 'Botan o oshimasu.',
    exampleMeaning: 'I push the button.'
  },
  {
    kanji: '遅い',
    kana: 'おそい',
    romaji: 'osoi',
    meaning: 'late, slow',
    type: 'adjective',
    example: 'バスが遅[おそ]いです。',
    exampleRomaji: 'Basu ga osoi desu.',
    exampleMeaning: 'The bus is late.'
  },
  {
    kanji: 'お茶',
    kana: 'おちゃ',
    romaji: 'ocha',
    meaning: 'tea',
    type: 'noun',
    example: 'これはお茶[おちゃ]です。',
    exampleRomaji: 'Kore wa ocha desu.',
    exampleMeaning: 'This is tea.'
  },
  {
    kanji: 'お手洗い',
    kana: 'おてあらい',
    romaji: 'otearai',
    meaning: 'toilet, lavatory',
    type: 'noun',
    example: 'これはお手洗[おてあら]いです。',
    exampleRomaji: 'Kore wa otearai desu.',
    exampleMeaning: 'This is a toilet, lavatory.'
  },
  {
    kanji: 'お父さん',
    kana: 'おとうさん',
    romaji: 'otousan',
    meaning: 'father',
    type: 'noun',
    example: 'これはお父[おとう]さんです。',
    exampleRomaji: 'Kore wa otousan desu.',
    exampleMeaning: 'This is a father.'
  },
  {
    kanji: '弟',
    kana: 'おとうと',
    romaji: 'otouto',
    meaning: 'someone’s younger brother',
    type: 'noun',
    example: 'これは弟[おとうと]です。',
    exampleRomaji: 'Kore wa otouto desu.',
    exampleMeaning: 'This is someone’s younger brother.'
  },
  {
    kanji: '男',
    kana: 'おとこ',
    romaji: 'otoko',
    meaning: 'man',
    type: 'noun',
    example: 'これは男[おとこ]です。',
    exampleRomaji: 'Kore wa otoko desu.',
    exampleMeaning: 'This is a man.'
  },
  {
    kanji: '男の子',
    kana: 'おとこのこ',
    romaji: 'otokonoko',
    meaning: 'boy',
    type: 'noun',
    example: 'これは男の子[おとこのこ]です。',
    exampleRomaji: 'Kore wa otokonoko desu.',
    exampleMeaning: 'This is a boy.'
  },
  {
    kanji: '一昨日',
    kana: 'おととい',
    romaji: 'ototoi',
    meaning: 'the day before yesterday',
    type: 'noun',
    example: 'これは一昨日[おととい]です。',
    exampleRomaji: 'Kore wa ototoi desu.',
    exampleMeaning: 'This is the day before yesterday.'
  },
  {
    kanji: '一昨年',
    kana: 'おととし',
    romaji: 'ototoshi',
    meaning: 'the year before last',
    type: 'noun',
    example: '一昨年[おととし]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Ototoshi, nihongo o benkyou shimasu.',
    exampleMeaning: 'The year before last, I study Japanese.'
  },
  {
    kanji: '大人',
    kana: 'おとな',
    romaji: 'otona',
    meaning: 'adult',
    type: 'noun',
    example: 'これは大人[おとな]です。',
    exampleRomaji: 'Kore wa otona desu.',
    exampleMeaning: 'This is an adult.'
  },
  {
    kanji: 'お腹',
    kana: 'おなか',
    romaji: 'onaka',
    meaning: 'stomach',
    type: 'noun',
    example: 'これはお腹[おなか]です。',
    exampleRomaji: 'Kore wa onaka desu.',
    exampleMeaning: 'This is a stomach.'
  },
  {
    kanji: '同じ',
    kana: 'おなじ',
    romaji: 'onaji',
    meaning: 'same',
    type: 'adjective',
    example: 'わたしと同[おな]じです。',
    exampleRomaji: 'Watashi to onaji desu.',
    exampleMeaning: 'It\'s the same as me.'
  },
  {
    kanji: 'お兄さん',
    kana: 'おにいさん',
    romaji: 'oniisan',
    meaning: 'someone’s elder brother',
    type: 'noun',
    example: 'これはお兄[おにい]さんです。',
    exampleRomaji: 'Kore wa oniisan desu.',
    exampleMeaning: 'This is someone’s elder brother.'
  },
  {
    kanji: 'お姉さん',
    kana: 'おねえさん',
    romaji: 'oneesan',
    meaning: 'someone’s elder sister',
    type: 'noun',
    example: 'これはお姉[おねえ]さんです。',
    exampleRomaji: 'Kore wa oneesan desu.',
    exampleMeaning: 'This is someone’s elder sister.'
  },
  {
    kanji: '伯母さん',
    kana: 'おばさん',
    romaji: 'obasan',
    meaning: 'aunt',
    type: 'noun',
    example: 'これは伯母[おば]さんです。',
    exampleRomaji: 'Kore wa obasan desu.',
    exampleMeaning: 'This is an aunt.'
  },
  {
    kanji: 'おばあさん',
    kana: 'おばあさん',
    romaji: 'obaasan',
    meaning: 'grandmother',
    type: 'noun',
    example: 'これはおばあさんです。',
    exampleRomaji: 'Kore wa obaasan desu.',
    exampleMeaning: 'This is a grandmother.'
  },
  {
    kanji: 'お弁当',
    kana: 'おべんとう',
    romaji: 'obentou',
    meaning: 'lunchbox',
    type: 'noun',
    example: 'これはお弁当[おべんとう]です。',
    exampleRomaji: 'Kore wa obentou desu.',
    exampleMeaning: 'This is a lunchbox.'
  },
  {
    kanji: '覚える',
    kana: 'おぼえる',
    romaji: 'oboeru',
    meaning: 'to memorize, to remember',
    type: 'verb',
    example: '新[あたら]しい言葉[ことば]を覚[おぼ]えます。',
    exampleRomaji: 'Atarashii kotoba o oboemasu.',
    exampleMeaning: 'I memorize new words.'
  },
  {
    kanji: '重い',
    kana: 'おもい',
    romaji: 'omoi',
    meaning: 'heavy',
    type: 'adjective',
    example: 'このかばんは重[おも]いです。',
    exampleRomaji: 'Kono kaban wa omoi desu.',
    exampleMeaning: 'This bag is heavy.'
  },
  {
    kanji: '面白い',
    kana: 'おもしろい',
    romaji: 'omoshiroi',
    meaning: 'interesting, funny',
    type: 'adjective',
    example: 'この映画[えいが]は面白[おもしろ]いです。',
    exampleRomaji: 'Kono eiga wa omoshiroi desu.',
    exampleMeaning: 'This movie is interesting.'
  },
  {
    kanji: '泳ぐ',
    kana: 'およぐ',
    romaji: 'oyogu',
    meaning: 'to swim',
    type: 'verb',
    example: 'プールで泳[およ]ぎます。',
    exampleRomaji: 'Puuru de oyogimasu.',
    exampleMeaning: 'I swim in the pool.'
  },
  {
    kanji: '降りる',
    kana: 'おりる',
    romaji: 'oriru',
    meaning: 'to get off',
    type: 'verb',
    example: '駅[えき]でバスを降[お]ります。',
    exampleRomaji: 'Eki de basu o orimasu.',
    exampleMeaning: 'I get off the bus at the station.'
  },
  {
    kanji: '終わる',
    kana: 'おわる',
    romaji: 'owaru',
    meaning: 'to end',
    type: 'verb',
    example: '授業[じゅぎょう]が終[お]わります。',
    exampleRomaji: 'Jugyou ga owarimasu.',
    exampleMeaning: 'Class ends.'
  },
  {
    kanji: '音楽',
    kana: 'おんがく',
    romaji: 'ongaku',
    meaning: 'music',
    type: 'noun',
    example: 'これは音楽[おんがく]です。',
    exampleRomaji: 'Kore wa ongaku desu.',
    exampleMeaning: 'This is music.'
  },
  {
    kanji: '女',
    kana: 'おんな',
    romaji: 'onna',
    meaning: 'woman',
    type: 'noun',
    example: 'これは女[おんな]です。',
    exampleRomaji: 'Kore wa onna desu.',
    exampleMeaning: 'This is a woman.'
  },
  {
    kanji: '女の子',
    kana: 'おんなのこ',
    romaji: 'onnanoko',
    meaning: 'girl',
    type: 'noun',
    example: 'これは女の子[おんなのこ]です。',
    exampleRomaji: 'Kore wa onnanoko desu.',
    exampleMeaning: 'This is a girl.'
  },
  {
    kanji: '〜回',
    kana: '〜かい',
    romaji: '~kai',
    meaning: '~times',
    type: 'noun',
    example: '三回[さんかい]あります。',
    exampleRomaji: 'San kai arimasu.',
    exampleMeaning: 'There are three times.'
  },
  {
    kanji: '〜階',
    kana: '〜かい',
    romaji: '~kai',
    meaning: '~floor',
    type: 'noun',
    example: 'わたしの部屋[へや]は三階[さんがい]です。',
    exampleRomaji: 'Watashi no heya wa san gai desu.',
    exampleMeaning: 'My room is on the third floor.'
  },
  {
    kanji: '外国',
    kana: 'がいこく',
    romaji: 'gaikoku',
    meaning: 'foreign country',
    type: 'noun',
    example: 'これは外国[がいこく]です。',
    exampleRomaji: 'Kore wa gaikoku desu.',
    exampleMeaning: 'This is a foreign country.'
  },
  {
    kanji: '外国人',
    kana: 'がいこくじん',
    romaji: 'gaikokujin',
    meaning: 'foreigner',
    type: 'noun',
    example: 'これは外国人[がいこくじん]です。',
    exampleRomaji: 'Kore wa gaikokujin desu.',
    exampleMeaning: 'This is a foreigner.'
  },
  {
    kanji: '会社',
    kana: 'かいしゃ',
    romaji: 'kaisha',
    meaning: 'company, enterprise',
    type: 'noun',
    example: 'これは会社[かいしゃ]です。',
    exampleRomaji: 'Kore wa kaisha desu.',
    exampleMeaning: 'This is a company, enterprise.'
  },
  {
    kanji: '階段',
    kana: 'かいだん',
    romaji: 'kaidan',
    meaning: 'stairs',
    type: 'noun',
    example: 'これは階段[かいだん]です。',
    exampleRomaji: 'Kore wa kaidan desu.',
    exampleMeaning: 'This is a stairs.'
  },
  {
    kanji: '買物',
    kana: 'かいもの',
    romaji: 'kaimono',
    meaning: 'shopping',
    type: 'noun',
    example: 'これは買物[かいもの]です。',
    exampleRomaji: 'Kore wa kaimono desu.',
    exampleMeaning: 'This is a shopping.'
  },
  {
    kanji: '買う',
    kana: 'かう',
    romaji: 'kau',
    meaning: 'to buy',
    type: 'verb',
    example: 'スーパーで果物[くだもの]を買[か]います。',
    exampleRomaji: 'Suupaa de kudamono o kaimasu.',
    exampleMeaning: 'I buy fruit at the supermarket.'
  },
  {
    kanji: '返す',
    kana: 'かえす',
    romaji: 'kaesu',
    meaning: 'to return an object',
    type: 'verb',
    example: '図書館[としょかん]に本[ほん]を返[かえ]します。',
    exampleRomaji: 'Toshokan ni hon o kaeshimasu.',
    exampleMeaning: 'I return the book to the library.'
  },
  {
    kanji: '帰る',
    kana: 'かえる',
    romaji: 'kaeru',
    meaning: 'to return home',
    type: 'verb',
    example: '六時[ろくじ]に家[いえ]に帰[かえ]ります。',
    exampleRomaji: 'Rokuji ni ie ni kaerimasu.',
    exampleMeaning: 'I go home at six o\'clock.'
  },
  {
    kanji: '顔',
    kana: 'かお',
    romaji: 'kao',
    meaning: 'face',
    type: 'noun',
    example: 'これは顔[かお]です。',
    exampleRomaji: 'Kore wa kao desu.',
    exampleMeaning: 'This is a face.'
  },
  {
    kanji: 'かかる',
    kana: 'かかる',
    romaji: 'kakaru',
    meaning: 'to take time, money',
    type: 'verb',
    example: '駅[えき]まで十分[じゅっぷん]かかります。',
    exampleRomaji: 'Eki made juppun kakarimasu.',
    exampleMeaning: 'It takes ten minutes to the station.'
  },
  {
    kanji: '鍵',
    kana: 'かぎ',
    romaji: 'kagi',
    meaning: 'key',
    type: 'noun',
    example: 'これは鍵[かぎ]です。',
    exampleRomaji: 'Kore wa kagi desu.',
    exampleMeaning: 'This is a key.'
  },
  {
    kanji: '書く',
    kana: 'かく',
    romaji: 'kaku',
    meaning: 'to write',
    type: 'verb',
    example: '手紙[てがみ]を書[か]きます。',
    exampleRomaji: 'Tegami o kakimasu.',
    exampleMeaning: 'I write a letter.'
  },
  {
    kanji: '学生',
    kana: 'がくせい',
    romaji: 'gakusei',
    meaning: 'student',
    type: 'noun',
    example: 'これは学生[がくせい]です。',
    exampleRomaji: 'Kore wa gakusei desu.',
    exampleMeaning: 'This is a student.'
  },
  {
    kanji: '〜か月',
    kana: '〜かげつ',
    romaji: '~kagetsu',
    meaning: '~ number of months',
    type: 'noun',
    example: '三[さん]か月、日本[にほん]にいます。',
    exampleRomaji: 'San kagetsu, Nihon ni imasu.',
    exampleMeaning: 'I will be in Japan for three months.'
  },
  {
    kanji: 'かける',
    kana: 'かける',
    romaji: 'kakeru',
    meaning: 'to wear',
    type: 'verb',
    example: '眼鏡[めがね]をかけます。',
    exampleRomaji: 'Megane o kakemasu.',
    exampleMeaning: 'I wear glasses.'
  },
  {
    kanji: 'かける',
    kana: 'かける',
    romaji: 'kakeru',
    meaning: 'to make a phone call',
    type: 'verb',
    example: '友達[ともだち]に電話[でんわ]をかけます。',
    exampleRomaji: 'Tomodachi ni denwa o kakemasu.',
    exampleMeaning: 'I make a phone call to my friend.'
  },
  {
    kanji: '傘',
    kana: 'かさ',
    romaji: 'kasa',
    meaning: 'umbrella',
    type: 'noun',
    example: 'これは傘[かさ]です。',
    exampleRomaji: 'Kore wa kasa desu.',
    exampleMeaning: 'This is an umbrella.'
  },
  {
    kanji: '貸す',
    kana: 'かす',
    romaji: 'kasu',
    meaning: 'to lend',
    type: 'verb',
    example: '友達[ともだち]にお金[かね]を貸[か]します。',
    exampleRomaji: 'Tomodachi ni okane o kashimasu.',
    exampleMeaning: 'I lend money to my friend.'
  },
  {
    kanji: '風',
    kana: 'かぜ',
    romaji: 'kaze',
    meaning: 'wind',
    type: 'noun',
    example: 'これは風[かぜ]です。',
    exampleRomaji: 'Kore wa kaze desu.',
    exampleMeaning: 'This is wind.'
  },
  {
    kanji: '風邪',
    kana: 'かぜ',
    romaji: 'kaze',
    meaning: 'a cold',
    type: 'noun',
    example: 'これは風邪[かぜ]です。',
    exampleRomaji: 'Kore wa kaze desu.',
    exampleMeaning: 'This is a cold.'
  },
  {
    kanji: '家族',
    kana: 'かぞく',
    romaji: 'kazoku',
    meaning: 'family',
    type: 'noun',
    example: 'これは家族[かぞく]です。',
    exampleRomaji: 'Kore wa kazoku desu.',
    exampleMeaning: 'This is a family.'
  },
  {
    kanji: '方',
    kana: 'かた',
    romaji: 'kata',
    meaning: 'person (polite)',
    type: 'noun',
    example: 'あの方[かた]は先生[せんせい]です。',
    exampleRomaji: 'Ano kata wa sensei desu.',
    exampleMeaning: 'That person is a teacher.'
  },
  {
    kanji: '片仮名',
    kana: 'かたかな',
    romaji: 'katakana',
    meaning: 'Katakana',
    type: 'noun',
    example: 'これは片仮名[かたかな]です。',
    exampleRomaji: 'Kore wa katakana desu.',
    exampleMeaning: 'This is Katakana.'
  },
  {
    kanji: '一月',
    kana: 'いちがつ',
    romaji: 'ichigatsu',
    meaning: 'January',
    type: 'noun',
    example: '一月[いちがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Ichigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in January.'
  },
  {
    kanji: '二月',
    kana: 'にがつ',
    romaji: 'nigatsu',
    meaning: 'February',
    type: 'noun',
    example: '二月[にがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Nigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in February.'
  },
  {
    kanji: '三月',
    kana: 'さんがつ',
    romaji: 'sangatsu',
    meaning: 'March',
    type: 'noun',
    example: '三月[さんがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Sangatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in March.'
  },
  {
    kanji: '四月',
    kana: 'しがつ',
    romaji: 'shigatsu',
    meaning: 'April',
    type: 'noun',
    example: '四月[しがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Shigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in April.'
  },
  {
    kanji: '五月',
    kana: 'ごがつ',
    romaji: 'gogatsu',
    meaning: 'May',
    type: 'noun',
    example: '五月[ごがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Gogatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in May.'
  },
  {
    kanji: '六月',
    kana: 'ろくがつ',
    romaji: 'rokugatsu',
    meaning: 'June',
    type: 'noun',
    example: '六月[ろくがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Rokugatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in June.'
  },
  {
    kanji: '七月',
    kana: 'しちがつ',
    romaji: 'shichigatsu',
    meaning: 'July',
    type: 'noun',
    example: '七月[しちがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Shichigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in July.'
  },
  {
    kanji: '八月',
    kana: 'はちがつ',
    romaji: 'hachigatsu',
    meaning: 'August',
    type: 'noun',
    example: '八月[はちがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Hachigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in August.'
  },
  {
    kanji: '九月',
    kana: 'くがつ',
    romaji: 'kugatsu',
    meaning: 'September',
    type: 'noun',
    example: '九月[くがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Kugatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in September.'
  },
  {
    kanji: '十月',
    kana: 'じゅうがつ',
    romaji: 'juugatsu',
    meaning: 'October',
    type: 'noun',
    example: '十月[じゅうがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Juugatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in October.'
  },
  {
    kanji: '十一月',
    kana: 'じゅういちがつ',
    romaji: 'juuichigatsu',
    meaning: 'November',
    type: 'noun',
    example: '十一月[じゅういちがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Juuichigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in November.'
  },
  {
    kanji: '十二月',
    kana: 'じゅうにがつ',
    romaji: 'juunigatsu',
    meaning: 'December',
    type: 'noun',
    example: '十二月[じゅうにがつ]に日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Juunigatsu ni Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan in December.'
  },
  {
    kanji: '学校',
    kana: 'がっこう',
    romaji: 'gakkou',
    meaning: 'school',
    type: 'noun',
    example: 'これは学校[がっこう]です。',
    exampleRomaji: 'Kore wa gakkou desu.',
    exampleMeaning: 'This is a school.'
  },
  {
    kanji: '角',
    kana: 'かど',
    romaji: 'kado',
    meaning: 'corner',
    type: 'noun',
    example: 'これは角[かど]です。',
    exampleRomaji: 'Kore wa kado desu.',
    exampleMeaning: 'This is a corner.'
  },
  {
    kanji: '家内',
    kana: 'かない',
    romaji: 'kanai',
    meaning: 'my wife',
    type: 'noun',
    example: 'これは家内[かない]です。',
    exampleRomaji: 'Kore wa kanai desu.',
    exampleMeaning: 'This is my wife.'
  },
  {
    kanji: '鞄',
    kana: 'かばん',
    romaji: 'kaban',
    meaning: 'bag',
    type: 'noun',
    example: 'これは鞄[かばん]です。',
    exampleRomaji: 'Kore wa kaban desu.',
    exampleMeaning: 'This is a bag.'
  },
  {
    kanji: '花瓶',
    kana: 'かびん',
    romaji: 'kabin',
    meaning: 'vase',
    type: 'noun',
    example: 'これは花瓶[かびん]です。',
    exampleRomaji: 'Kore wa kabin desu.',
    exampleMeaning: 'This is a vase.'
  },
  {
    kanji: '冠る',
    kana: 'かぶる',
    romaji: 'kaburu',
    meaning: 'to put on a hat',
    type: 'verb',
    example: '帽子[ぼうし]をかぶります。',
    exampleRomaji: 'Boushi o kaburimasu.',
    exampleMeaning: 'I put on a hat.'
  },
  {
    kanji: '紙',
    kana: 'かみ',
    romaji: 'kami',
    meaning: 'paper',
    type: 'noun',
    example: 'これは紙[かみ]です。',
    exampleRomaji: 'Kore wa kami desu.',
    exampleMeaning: 'This is a paper.'
  },
  {
    kanji: 'カメラ',
    kana: 'かめら',
    romaji: 'kamera',
    meaning: 'camera',
    type: 'noun',
    example: 'これはカメラ[かめら]です。',
    exampleRomaji: 'Kore wa kamera desu.',
    exampleMeaning: 'This is a camera.'
  },
  {
    kanji: '火曜日',
    kana: 'かようび',
    romaji: 'kayoubi',
    meaning: 'Tuesday',
    type: 'noun',
    example: '火曜日[かようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Kayoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Tuesday.'
  },
  {
    kanji: '辛い',
    kana: 'からい',
    romaji: 'karai',
    meaning: 'hot, spicy',
    type: 'adjective',
    example: 'このカレーは辛[から]いです。',
    exampleRomaji: 'Kono karee wa karai desu.',
    exampleMeaning: 'This curry is spicy.'
  },
  {
    kanji: '体',
    kana: 'からだ',
    romaji: 'karada',
    meaning: 'body',
    type: 'noun',
    example: 'これは体[からだ]です。',
    exampleRomaji: 'Kore wa karada desu.',
    exampleMeaning: 'This is a body.'
  },
  {
    kanji: '借りる',
    kana: 'かりる',
    romaji: 'kariru',
    meaning: 'to borrow',
    type: 'verb',
    example: '図書館[としょかん]で本[ほん]を借[か]ります。',
    exampleRomaji: 'Toshokan de hon o karimasu.',
    exampleMeaning: 'I borrow a book from the library.'
  },
  {
    kanji: '〜がります',
    kana: '〜がります',
    romaji: '~garimasu',
    meaning: '3rd person wants to',
    type: 'noun',
    example: '子供[こども]はお菓子[かし]を欲[ほ]しがります。',
    exampleRomaji: 'Kodomo wa okashi o hoshigarimasu.',
    exampleMeaning: 'The child wants sweets.'
  },
  {
    kanji: '軽い',
    kana: 'かるい',
    romaji: 'karui',
    meaning: 'light (not heavy)',
    type: 'adjective',
    example: 'このかばんは軽[かる]いです。',
    exampleRomaji: 'Kono kaban wa karui desu.',
    exampleMeaning: 'This bag is light.'
  },
  {
    kanji: 'カレンダー',
    kana: 'カレンダー',
    romaji: 'karendaa',
    meaning: 'calendar',
    type: 'noun',
    example: 'これはカレンダ[カレンダ]ーです。',
    exampleRomaji: 'Kore wa karendaa desu.',
    exampleMeaning: 'This is a calendar.'
  },
  {
    kanji: '川',
    kana: 'かわ',
    romaji: 'kawa',
    meaning: 'river',
    type: 'noun',
    example: 'これは川[かわ]です。',
    exampleRomaji: 'Kore wa kawa desu.',
    exampleMeaning: 'This is a river.'
  },
  {
    kanji: '〜側',
    kana: '~がわ',
    romaji: '~gawa',
    meaning: '~side',
    type: 'noun',
    example: '駅[えき]の向[む]こう側[がわ]です。',
    exampleRomaji: 'Eki no mukou gawa desu.',
    exampleMeaning: 'It\'s on the other side of the station.'
  },
  {
    kanji: '可愛い',
    kana: 'かわいい',
    romaji: 'kawaii',
    meaning: 'cute, pretty',
    type: 'adjective',
    example: 'あの犬[いぬ]はかわいいです。',
    exampleRomaji: 'Ano inu wa kawaii desu.',
    exampleMeaning: 'That dog is cute.'
  },
  {
    kanji: '漢字',
    kana: 'かんじ',
    romaji: 'kanji',
    meaning: 'Kanji character',
    type: 'noun',
    example: 'これは漢字[かんじ]です。',
    exampleRomaji: 'Kore wa kanji desu.',
    exampleMeaning: 'This is Kanji character.'
  },
  {
    kanji: '木',
    kana: 'き',
    romaji: 'ki',
    meaning: 'tree',
    type: 'noun',
    example: 'これは木[き]です。',
    exampleRomaji: 'Kore wa ki desu.',
    exampleMeaning: 'This is a tree.'
  },
  {
    kanji: '黄色い',
    kana: 'きいろい',
    romaji: 'kiiroi',
    meaning: 'yellow',
    type: 'adjective',
    example: 'このバナナは黄色[きいろ]いです。',
    exampleRomaji: 'Kono banana wa kiiroi desu.',
    exampleMeaning: 'This banana is yellow.'
  },
  {
    kanji: '消える',
    kana: 'きえる',
    romaji: 'kieru',
    meaning: 'to go out, to vanish',
    type: 'verb',
    example: '電気[でんき]が消[き]えます。',
    exampleRomaji: 'Denki ga kiemasu.',
    exampleMeaning: 'The light goes out.'
  },
  {
    kanji: '聞く',
    kana: 'きく',
    romaji: 'kiku',
    meaning: 'to hear, to listen, to ask',
    type: 'verb',
    example: '音楽[おんがく]を聞[き]きます。',
    exampleRomaji: 'Ongaku o kikimasu.',
    exampleMeaning: 'I listen to music.'
  },
  {
    kanji: '北',
    kana: 'きた',
    romaji: 'kita',
    meaning: 'north',
    type: 'noun',
    example: 'これは北[きた]です。',
    exampleRomaji: 'Kore wa kita desu.',
    exampleMeaning: 'This is a north.'
  },
  {
    kanji: 'ギター',
    kana: 'ギター',
    romaji: 'gitaa',
    meaning: 'guitar',
    type: 'noun',
    example: 'これはギタ[ギタ]ーです。',
    exampleRomaji: 'Kore wa gitaa desu.',
    exampleMeaning: 'This is a guitar.'
  },
  {
    kanji: '汚い',
    kana: 'きたない',
    romaji: 'kitanai',
    meaning: 'dirty',
    type: 'adjective',
    example: 'この部屋[へや]は汚[きたな]いです。',
    exampleRomaji: 'Kono heya wa kitanai desu.',
    exampleMeaning: 'This room is dirty.'
  },
  {
    kanji: '喫茶店',
    kana: 'きっさてん',
    romaji: 'kissaten',
    meaning: 'coffee shop',
    type: 'noun',
    example: 'これは喫茶店[きっさてん]です。',
    exampleRomaji: 'Kore wa kissaten desu.',
    exampleMeaning: 'This is a coffee shop.'
  },
  {
    kanji: '切手',
    kana: 'きって',
    romaji: 'kitte',
    meaning: 'stamp',
    type: 'noun',
    example: 'これは切手[きって]です。',
    exampleRomaji: 'Kore wa kitte desu.',
    exampleMeaning: 'This is a stamp.'
  },
  {
    kanji: '切符',
    kana: 'きっぷ',
    romaji: 'kippu',
    meaning: 'ticket',
    type: 'noun',
    example: 'これは切符[きっぷ]です。',
    exampleRomaji: 'Kore wa kippu desu.',
    exampleMeaning: 'This is a ticket.'
  },
  {
    kanji: '昨日',
    kana: 'きのう',
    romaji: 'kinou',
    meaning: 'yesterday',
    type: 'noun',
    example: '昨日[きのう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kinou, nihongo o benkyou shimasu.',
    exampleMeaning: 'Yesterday, I study Japanese.'
  },
  {
    kanji: '九',
    kana: 'きゅう',
    romaji: 'kyuu',
    meaning: 'nine',
    type: 'noun',
    example: 'これは九[きゅう]です。',
    exampleRomaji: 'Kore wa kyuu desu.',
    exampleMeaning: 'This is nine.'
  },
  {
    kanji: '牛肉',
    kana: 'ぎゅうにく',
    romaji: 'gyuuniku',
    meaning: 'beef',
    type: 'noun',
    example: 'これは牛肉[ぎゅうにく]です。',
    exampleRomaji: 'Kore wa gyuuniku desu.',
    exampleMeaning: 'This is a beef.'
  },
  {
    kanji: '牛乳',
    kana: 'ぎゅうにゅう',
    romaji: 'gyuunyuu',
    meaning: 'milk',
    type: 'noun',
    example: 'これは牛乳[ぎゅうにゅう]です。',
    exampleRomaji: 'Kore wa gyuunyuu desu.',
    exampleMeaning: 'This is a milk.'
  },
  {
    kanji: '今日',
    kana: 'きょう',
    romaji: 'kyou',
    meaning: 'today',
    type: 'noun',
    example: '今日[きょう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kyou, nihongo o benkyou shimasu.',
    exampleMeaning: 'Today, I study Japanese.'
  },
  {
    kanji: '教室',
    kana: 'きょうしつ',
    romaji: 'kyoushitsu',
    meaning: 'class room',
    type: 'noun',
    example: 'これは教室[きょうしつ]です。',
    exampleRomaji: 'Kore wa kyoushitsu desu.',
    exampleMeaning: 'This is a class room.'
  },
  {
    kanji: '兄弟',
    kana: 'きょうだい',
    romaji: 'kyoudai',
    meaning: 'siblings',
    type: 'noun',
    example: 'これは兄弟[きょうだい]です。',
    exampleRomaji: 'Kore wa kyoudai desu.',
    exampleMeaning: 'This is a siblings.'
  },
  {
    kanji: '去年',
    kana: 'きょねん',
    romaji: 'kyonen',
    meaning: 'last year',
    type: 'noun',
    example: '去年[きょねん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kyonen, nihongo o benkyou shimasu.',
    exampleMeaning: 'Last year, I study Japanese.'
  },
  {
    kanji: '嫌い',
    kana: 'きらい',
    romaji: 'kirai',
    meaning: 'unpleasant, not likable',
    type: 'adjective',
    example: 'わたしは納豆[なっとう]が嫌[きら]いです。',
    exampleRomaji: 'Watashi wa nattou ga kirai desu.',
    exampleMeaning: 'I dislike natto.'
  },
  {
    kanji: '切る',
    kana: 'きる',
    romaji: 'kiru',
    meaning: 'to cut',
    type: 'verb',
    example: '野菜[やさい]を切[き]ります。',
    exampleRomaji: 'Yasai o kirimasu.',
    exampleMeaning: 'I cut the vegetables.'
  },
  {
    kanji: '着る',
    kana: 'きる',
    romaji: 'kiru',
    meaning: 'to wear, to put on',
    type: 'verb',
    example: 'コートを着[き]ます。',
    exampleRomaji: 'Kooto o kimasu.',
    exampleMeaning: 'I put on a coat.'
  },
  {
    kanji: '来る',
    kana: 'くる',
    romaji: 'kuru',
    meaning: 'to come',
    type: 'verb',
    example: '友達[ともだち]が家[いえ]に来[き]ます。',
    exampleRomaji: 'Tomodachi ga ie ni kimasu.',
    exampleMeaning: 'My friend comes to my house.'
  },
  {
    kanji: 'きれい',
    kana: 'きれい',
    romaji: 'kirei',
    meaning: 'beautiful, clean',
    type: 'adjective',
    example: 'この公園[こうえん]はきれいです。',
    exampleRomaji: 'Kono kouen wa kirei desu.',
    exampleMeaning: 'This park is beautiful.'
  },
  {
    kanji: 'キロ',
    kana: 'キロ',
    romaji: 'kiro',
    meaning: 'kg',
    type: 'noun',
    example: '駅[えき]まで三[さん]キロです。',
    exampleRomaji: 'Eki made san kiro desu.',
    exampleMeaning: 'It is three kilometers to the station.'
  },
  {
    kanji: 'キロ',
    kana: 'キロ',
    romaji: 'kiro',
    meaning: 'km',
    type: 'noun',
    example: '駅[えき]まで三[さん]キロです。',
    exampleRomaji: 'Eki made san kiro desu.',
    exampleMeaning: 'It is three kilometers to the station.'
  },
  {
    kanji: '銀行',
    kana: 'ぎんこう',
    romaji: 'ginkou',
    meaning: 'bank',
    type: 'noun',
    example: 'これは銀行[ぎんこう]です。',
    exampleRomaji: 'Kore wa ginkou desu.',
    exampleMeaning: 'This is a bank.'
  },
  {
    kanji: '金曜日',
    kana: 'きんようび',
    romaji: 'kinyoubi',
    meaning: 'Friday',
    type: 'noun',
    example: '金曜日[きんようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Kinyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Friday.'
  },
  {
    kanji: '九',
    kana: 'く',
    romaji: 'ku',
    meaning: 'nine',
    type: 'noun',
    example: 'これは九[く]です。',
    exampleRomaji: 'Kore wa ku desu.',
    exampleMeaning: 'This is nine.'
  },
  {
    kanji: '薬',
    kana: 'くすり',
    romaji: 'kusuri',
    meaning: 'medicine',
    type: 'noun',
    example: 'これは薬[くすり]です。',
    exampleRomaji: 'Kore wa kusuri desu.',
    exampleMeaning: 'This is a medicine.'
  },
  {
    kanji: '下さい',
    kana: 'ください',
    romaji: 'kudasai',
    meaning: 'give me…',
    type: 'verb',
    example: '水[みず]をください。',
    exampleRomaji: 'Mizu o kudasai.',
    exampleMeaning: 'Please give me some water.'
  },
  {
    kanji: '果物',
    kana: 'くだもの',
    romaji: 'kudamono',
    meaning: 'fruit',
    type: 'noun',
    example: 'これは果物[くだもの]です。',
    exampleRomaji: 'Kore wa kudamono desu.',
    exampleMeaning: 'This is a fruit.'
  },
  {
    kanji: '口',
    kana: 'くち',
    romaji: 'kuchi',
    meaning: 'mouth',
    type: 'noun',
    example: 'これは口[くち]です。',
    exampleRomaji: 'Kore wa kuchi desu.',
    exampleMeaning: 'This is a mouth.'
  },
  {
    kanji: '靴',
    kana: 'くつ',
    romaji: 'kutsu',
    meaning: 'shoe',
    type: 'noun',
    example: 'これは靴[くつ]です。',
    exampleRomaji: 'Kore wa kutsu desu.',
    exampleMeaning: 'This is a shoe.'
  },
  {
    kanji: '靴下',
    kana: 'くつした',
    romaji: 'kutsushita',
    meaning: 'socks',
    type: 'noun',
    example: 'これは靴下[くつした]です。',
    exampleRomaji: 'Kore wa kutsushita desu.',
    exampleMeaning: 'This is a socks.'
  },
  {
    kanji: '国',
    kana: 'くに',
    romaji: 'kuni',
    meaning: 'country',
    type: 'noun',
    example: 'これは国[くに]です。',
    exampleRomaji: 'Kore wa kuni desu.',
    exampleMeaning: 'This is a country.'
  },
  {
    kanji: '曇り',
    kana: 'くもり',
    romaji: 'kumori',
    meaning: 'cloudy weather',
    type: 'noun',
    example: 'これは曇[くも]りです。',
    exampleRomaji: 'Kore wa kumori desu.',
    exampleMeaning: 'This is a cloudy weather.'
  },
  {
    kanji: '暗い',
    kana: 'くらい',
    romaji: 'kurai',
    meaning: 'dark',
    type: 'adjective',
    example: 'この部屋[へや]は暗[くら]いです。',
    exampleRomaji: 'Kono heya wa kurai desu.',
    exampleMeaning: 'This room is dark.'
  },
  {
    kanji: 'ぐらい',
    kana: 'ぐらい',
    romaji: 'gurai',
    meaning: 'about',
    type: 'noun',
    example: '三十分[さんじゅっぷん]ぐらいかかります。',
    exampleRomaji: 'Sanjuppun gurai kakarimasu.',
    exampleMeaning: 'It takes about thirty minutes.'
  },
  {
    kanji: 'クラス',
    kana: 'クラス',
    romaji: 'kurasu',
    meaning: 'class',
    type: 'noun',
    example: 'これはクラス[クラス]です。',
    exampleRomaji: 'Kore wa kurasu desu.',
    exampleMeaning: 'This is a class.'
  },
  {
    kanji: 'グラム',
    kana: 'グラム',
    romaji: 'guramu',
    meaning: 'gram',
    type: 'noun',
    example: 'これはグラム[グラム]です。',
    exampleRomaji: 'Kore wa guramu desu.',
    exampleMeaning: 'This is a gram.'
  },
  {
    kanji: '車',
    kana: 'くるま',
    romaji: 'kuruma',
    meaning: 'car',
    type: 'noun',
    example: 'これは車[くるま]です。',
    exampleRomaji: 'Kore wa kuruma desu.',
    exampleMeaning: 'This is a car.'
  },
  {
    kanji: '黒い',
    kana: 'くろい',
    romaji: 'kuroi',
    meaning: 'black',
    type: 'adjective',
    example: 'あの猫[ねこ]は黒[くろ]いです。',
    exampleRomaji: 'Ano neko wa kuroi desu.',
    exampleMeaning: 'That cat is black.'
  },
  {
    kanji: '今朝',
    kana: 'けさ',
    romaji: 'kesa',
    meaning: 'this morning',
    type: 'noun',
    example: '今朝[けさ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kesa, nihongo o benkyou shimasu.',
    exampleMeaning: 'This morning, I study Japanese.'
  },
  {
    kanji: '消す',
    kana: 'けす',
    romaji: 'kesu',
    meaning: 'to turn off, switch off',
    type: 'verb',
    example: '電気[でんき]を消[け]します。',
    exampleRomaji: 'Denki o keshimasu.',
    exampleMeaning: 'I turn off the light.'
  },
  {
    kanji: 'けっこう',
    kana: 'けっこう',
    romaji: 'kekkou',
    meaning: 'fine, all right',
    type: 'adjective',
    example: 'もうけっこうです。',
    exampleRomaji: 'Mou kekkou desu.',
    exampleMeaning: 'That\'s enough, thank you.'
  },
  {
    kanji: '結婚',
    kana: 'けっこん',
    romaji: 'kekkon',
    meaning: 'marriage',
    type: 'noun',
    example: 'これは結婚[けっこん]です。',
    exampleRomaji: 'Kore wa kekkon desu.',
    exampleMeaning: 'This is a marriage.'
  },
  {
    kanji: '月曜日',
    kana: 'げつようび',
    romaji: 'getsuyoubi',
    meaning: 'Monday',
    type: 'noun',
    example: '月曜日[げつようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Getsuyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Monday.'
  },
  {
    kanji: '玄関',
    kana: 'げんかん',
    romaji: 'genkan',
    meaning: 'entrance of a house',
    type: 'noun',
    example: 'これは玄関[げんかん]です。',
    exampleRomaji: 'Kore wa genkan desu.',
    exampleMeaning: 'This is entrance of a house.'
  },
  {
    kanji: '元気',
    kana: 'げんき',
    romaji: 'genki',
    meaning: 'vigor, health, vitality',
    type: 'adjective',
    example: '田中[たなか]さんは元気[げんき]です。',
    exampleRomaji: 'Tanaka-san wa genki desu.',
    exampleMeaning: 'Mr. Tanaka is well.'
  },
  {
    kanji: '〜個',
    kana: '〜こ',
    romaji: '~ko',
    meaning: 'counter for small objects',
    type: 'noun',
    example: 'りんごを三個[さんこ]買[か]います。',
    exampleRomaji: 'Ringo o san ko kaimasu.',
    exampleMeaning: 'I buy three apples.'
  },
  {
    kanji: '五',
    kana: 'ご',
    romaji: 'go',
    meaning: 'five',
    type: 'noun',
    example: 'これは五[ご]です。',
    exampleRomaji: 'Kore wa go desu.',
    exampleMeaning: 'This is five.'
  },
  {
    kanji: '〜語',
    kana: '〜ご',
    romaji: '~go',
    meaning: '~ language',
    type: 'noun',
    example: 'わたしは日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Watashi wa nihongo o benkyou shimasu.',
    exampleMeaning: 'I study Japanese.'
  },
  {
    kanji: '公園',
    kana: 'こうえん',
    romaji: 'kouen',
    meaning: 'park, large garden',
    type: 'noun',
    example: 'これは公園[こうえん]です。',
    exampleRomaji: 'Kore wa kouen desu.',
    exampleMeaning: 'This is a park, large garden.'
  },
  {
    kanji: '交番',
    kana: 'こうばん',
    romaji: 'kouban',
    meaning: 'police box',
    type: 'noun',
    example: 'これは交番[こうばん]です。',
    exampleRomaji: 'Kore wa kouban desu.',
    exampleMeaning: 'This is a police box.'
  },
  {
    kanji: '声',
    kana: 'こえ',
    romaji: 'koe',
    meaning: 'voice',
    type: 'noun',
    example: 'これは声[こえ]です。',
    exampleRomaji: 'Kore wa koe desu.',
    exampleMeaning: 'This is a voice.'
  },
  {
    kanji: 'コート',
    kana: 'コート',
    romaji: 'kooto',
    meaning: 'coat',
    type: 'noun',
    example: 'これはコート[コート]です。',
    exampleRomaji: 'Kore wa kooto desu.',
    exampleMeaning: 'This is a coat.'
  },
  {
    kanji: 'ここ',
    kana: 'ここ',
    romaji: 'koko',
    meaning: 'here',
    type: 'noun',
    example: 'ここです。',
    exampleRomaji: 'Koko desu.',
    exampleMeaning: 'It is here.'
  },
  {
    kanji: '午後',
    kana: 'ごご',
    romaji: 'gogo',
    meaning: 'afternoon',
    type: 'noun',
    example: '午後[ごご]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Gogo, nihongo o benkyou shimasu.',
    exampleMeaning: 'Afternoon, I study Japanese.'
  },
  {
    kanji: '九日',
    kana: 'ここのか',
    romaji: 'kokonoka',
    meaning: '9th day of a month, 9 days',
    type: 'noun',
    example: '今日[きょう]は九日[ここのか]です。',
    exampleRomaji: 'Kyou wa kokonoka desu.',
    exampleMeaning: 'Today is the 9th day of a month, 9 days.'
  },
  {
    kanji: '九つ',
    kana: 'ここのつ',
    romaji: 'kokonotsu',
    meaning: 'nine',
    type: 'noun',
    example: 'これは九[ここの]つです。',
    exampleRomaji: 'Kore wa kokonotsu desu.',
    exampleMeaning: 'This is nine.'
  },
  {
    kanji: 'ご主人',
    kana: 'ごしゅじん',
    romaji: 'goshujin',
    meaning: 'someone else’s husband',
    type: 'noun',
    example: 'これはご主人[ごしゅじん]です。',
    exampleRomaji: 'Kore wa goshujin desu.',
    exampleMeaning: 'This is someone else’s husband.'
  },
  {
    kanji: '午前',
    kana: 'ごぜん',
    romaji: 'gozen',
    meaning: 'morning, a.m.',
    type: 'noun',
    example: '午前[ごぜん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Gozen, nihongo o benkyou shimasu.',
    exampleMeaning: 'Morning, a.m., I study Japanese.'
  },
  {
    kanji: '答える',
    kana: 'こたえる',
    romaji: 'kotaeru',
    meaning: 'to answer',
    type: 'verb',
    example: '質問[しつもん]に答[こた]えます。',
    exampleRomaji: 'Shitsumon ni kotaemasu.',
    exampleMeaning: 'I answer the question.'
  },
  {
    kanji: 'こちら',
    kana: 'こちら',
    romaji: 'kochira',
    meaning: 'this side, this place',
    type: 'noun',
    example: 'これはこちらです。',
    exampleRomaji: 'Kore wa kochira desu.',
    exampleMeaning: 'This is a this side, this place.'
  },
  {
    kanji: 'コップ',
    kana: 'コップ',
    romaji: 'koppu',
    meaning: 'cup, glass',
    type: 'noun',
    example: 'これはコップ[コップ]です。',
    exampleRomaji: 'Kore wa koppu desu.',
    exampleMeaning: 'This is a cup, glass.'
  },
  {
    kanji: '今年',
    kana: 'ことし',
    romaji: 'kotoshi',
    meaning: 'this year',
    type: 'noun',
    example: '今年[ことし]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kotoshi, nihongo o benkyou shimasu.',
    exampleMeaning: 'This year, I study Japanese.'
  },
  {
    kanji: '言葉',
    kana: 'ことば',
    romaji: 'kotoba',
    meaning: 'phrase, language',
    type: 'noun',
    example: 'これは言葉[ことば]です。',
    exampleRomaji: 'Kore wa kotoba desu.',
    exampleMeaning: 'This is a phrase, language.'
  },
  {
    kanji: '子供',
    kana: 'こども',
    romaji: 'kodomo',
    meaning: 'child',
    type: 'noun',
    example: 'これは子供[こども]です。',
    exampleRomaji: 'Kore wa kodomo desu.',
    exampleMeaning: 'This is a child.'
  },
  {
    kanji: 'この',
    kana: 'この',
    romaji: 'kono',
    meaning: 'this…',
    type: 'noun',
    example: 'この本[ほん]はわたしのです。',
    exampleRomaji: 'Kono hon wa watashi no desu.',
    exampleMeaning: 'This book is mine.'
  },
  {
    kanji: '御飯',
    kana: 'ごはん',
    romaji: 'gohan',
    meaning: 'meal, cooked rice',
    type: 'noun',
    example: 'これは御飯[ごはん]です。',
    exampleRomaji: 'Kore wa gohan desu.',
    exampleMeaning: 'This is a meal, cooked rice.'
  },
  {
    kanji: '困る',
    kana: 'こまる',
    romaji: 'komaru',
    meaning: 'to be in trouble',
    type: 'verb',
    example: 'お金[かね]がなくて困[こま]ります。',
    exampleRomaji: 'Okane ga nakute komarimasu.',
    exampleMeaning: 'I\'m in trouble because I have no money.'
  },
  {
    kanji: 'これ',
    kana: 'これ',
    romaji: 'kore',
    meaning: 'this',
    type: 'noun',
    example: 'これです。',
    exampleRomaji: 'Kore desu.',
    exampleMeaning: 'It is this one.'
  },
  {
    kanji: 'ごろ',
    kana: 'ごろ',
    romaji: 'goro',
    meaning: 'around…',
    type: 'noun',
    example: '三時[さんじ]ごろ帰[かえ]ります。',
    exampleRomaji: 'San ji goro kaerimasu.',
    exampleMeaning: 'I will go home around three o\'clock.'
  },
  {
    kanji: '今月',
    kana: 'こんげつ',
    romaji: 'kongetsu',
    meaning: 'this month',
    type: 'noun',
    example: '今月[こんげつ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Kongetsu, nihongo o benkyou shimasu.',
    exampleMeaning: 'This month, I study Japanese.'
  },
  {
    kanji: '今週',
    kana: 'こんしゅう',
    romaji: 'konshuu',
    meaning: 'this week',
    type: 'noun',
    example: '今週[こんしゅう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Konshuu, nihongo o benkyou shimasu.',
    exampleMeaning: 'This week, I study Japanese.'
  },
  {
    kanji: 'こんな',
    kana: 'こんな',
    romaji: 'konna',
    meaning: 'this sort of, this kind of',
    type: 'noun',
    example: 'これはこんなです。',
    exampleRomaji: 'Kore wa konna desu.',
    exampleMeaning: 'This is a this sort of, this kind of.'
  },
  {
    kanji: '今晩',
    kana: 'こんばん',
    romaji: 'konban',
    meaning: 'this evening',
    type: 'noun',
    example: '今晩[こんばん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Konban, nihongo o benkyou shimasu.',
    exampleMeaning: 'This evening, I study Japanese.'
  },
  {
    kanji: 'さあ',
    kana: 'さあ',
    romaji: 'saa',
    meaning: 'well…',
    type: 'noun',
    example: 'さあ、行[い]きましょう。',
    exampleRomaji: 'Saa, ikimashou.',
    exampleMeaning: 'Well, let\'s go.'
  },
  {
    kanji: '〜歳',
    kana: '〜さい',
    romaji: '~sai',
    meaning: 'years old',
    type: 'noun',
    example: 'わたしは二十歳[はたち]です。',
    exampleRomaji: 'Watashi wa hatachi desu.',
    exampleMeaning: 'I am twenty years old.'
  },
  {
    kanji: '魚',
    kana: 'さかな',
    romaji: 'sakana',
    meaning: 'fish',
    type: 'noun',
    example: 'これは魚[さかな]です。',
    exampleRomaji: 'Kore wa sakana desu.',
    exampleMeaning: 'This is a fish.'
  },
  {
    kanji: '先',
    kana: 'さき',
    romaji: 'saki',
    meaning: 'earlier, former',
    type: 'noun',
    example: 'これは先[さき]です。',
    exampleRomaji: 'Kore wa saki desu.',
    exampleMeaning: 'This is an earlier, former.'
  },
  {
    kanji: '咲く',
    kana: 'さく',
    romaji: 'saku',
    meaning: 'to blossom',
    type: 'verb',
    example: '花[はな]が咲[さ]きます。',
    exampleRomaji: 'Hana ga sakimasu.',
    exampleMeaning: 'The flowers bloom.'
  },
  {
    kanji: '作文',
    kana: 'さくぶん',
    romaji: 'sakubun',
    meaning: 'composition',
    type: 'noun',
    example: 'これは作文[さくぶん]です。',
    exampleRomaji: 'Kore wa sakubun desu.',
    exampleMeaning: 'This is a composition.'
  },
  {
    kanji: 'さす',
    kana: 'さす',
    romaji: 'sasu',
    meaning: 'to open an umbrella',
    type: 'verb',
    example: '傘[かさ]をさします。',
    exampleRomaji: 'Kasa o sashimasu.',
    exampleMeaning: 'I open an umbrella.'
  },
  {
    kanji: '冊',
    kana: '〜さつ',
    romaji: '~satsu',
    meaning: 'counter for books',
    type: 'noun',
    example: '本[ほん]を三冊[さんさつ]買[か]います。',
    exampleRomaji: 'Hon o san satsu kaimasu.',
    exampleMeaning: 'I buy three books.'
  },
  {
    kanji: '雑誌',
    kana: 'ざっし',
    romaji: 'zasshi',
    meaning: 'magazine',
    type: 'noun',
    example: 'これは雑誌[ざっし]です。',
    exampleRomaji: 'Kore wa zasshi desu.',
    exampleMeaning: 'This is a magazine.'
  },
  {
    kanji: '砂糖',
    kana: 'さとう',
    romaji: 'satou',
    meaning: 'sugar',
    type: 'noun',
    example: 'これは砂糖[さとう]です。',
    exampleRomaji: 'Kore wa satou desu.',
    exampleMeaning: 'This is a sugar.'
  },
  {
    kanji: '寒い',
    kana: 'さむい',
    romaji: 'samui',
    meaning: 'cold',
    type: 'adjective',
    example: '今日[きょう]は寒[さむ]いです。',
    exampleRomaji: 'Kyou wa samui desu.',
    exampleMeaning: 'It is cold today.'
  },
  {
    kanji: '再来年',
    kana: 'さらいねん',
    romaji: 'sarainen',
    meaning: 'the year after next year',
    type: 'noun',
    example: '再来年[さらいねん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Sarainen, nihongo o benkyou shimasu.',
    exampleMeaning: 'The year after next year, I study Japanese.'
  },
  {
    kanji: '三',
    kana: 'さん',
    romaji: 'san',
    meaning: 'three',
    type: 'noun',
    example: 'これは三[さん]です。',
    exampleRomaji: 'Kore wa san desu.',
    exampleMeaning: 'This is three.'
  },
  {
    kanji: '〜さん',
    kana: '〜さん',
    romaji: '~san',
    meaning: 'Mr., Mrs.',
    type: 'noun',
    example: '田中[たなか]さんはやさしいです。',
    exampleRomaji: 'Tanaka-san wa yasashii desu.',
    exampleMeaning: 'Mr. Tanaka is kind.'
  },
  {
    kanji: '散歩',
    kana: 'さんぽ',
    romaji: 'sanpo',
    meaning: 'to take a walk',
    type: 'verb',
    example: '公園[こうえん]を散歩[さんぽ]します。',
    exampleRomaji: 'Kouen o sanpo shimasu.',
    exampleMeaning: 'I take a walk in the park.'
  },
  {
    kanji: '四',
    kana: 'し',
    romaji: 'shi',
    meaning: 'four',
    type: 'noun',
    example: 'これは四[し]です。',
    exampleRomaji: 'Kore wa shi desu.',
    exampleMeaning: 'This is four.'
  },
  {
    kanji: '〜時',
    kana: '〜じ',
    romaji: '~ji',
    meaning: 'o’clock',
    type: 'noun',
    example: '今[いま]、三時[さんじ]です。',
    exampleRomaji: 'Ima, san ji desu.',
    exampleMeaning: 'It is three o\'clock now.'
  },
  {
    kanji: '塩',
    kana: 'しお',
    romaji: 'shio',
    meaning: 'salt',
    type: 'noun',
    example: 'これは塩[しお]です。',
    exampleRomaji: 'Kore wa shio desu.',
    exampleMeaning: 'This is a salt.'
  },
  {
    kanji: 'しかし',
    kana: 'しかし',
    romaji: 'shikashi',
    meaning: 'however, but',
    type: 'noun',
    example: 'これはしかしです。',
    exampleRomaji: 'Kore wa shikashi desu.',
    exampleMeaning: 'This is a however, but.'
  },
  {
    kanji: '時間',
    kana: 'じかん',
    romaji: 'jikan',
    meaning: 'time',
    type: 'noun',
    example: 'これは時間[じかん]です。',
    exampleRomaji: 'Kore wa jikan desu.',
    exampleMeaning: 'This is a time.'
  },
  {
    kanji: '〜時間',
    kana: '〜じかん',
    romaji: '~jikan',
    meaning: '~hours (classificator)',
    type: 'noun',
    example: '三時間[さんじかん]勉強[べんきょう]します。',
    exampleRomaji: 'San jikan benkyou shimasu.',
    exampleMeaning: 'I study for three hours.'
  },
  {
    kanji: '仕事',
    kana: 'しごと',
    romaji: 'shigoto',
    meaning: 'work',
    type: 'noun',
    example: 'これは仕事[しごと]です。',
    exampleRomaji: 'Kore wa shigoto desu.',
    exampleMeaning: 'This is a work.'
  },
  {
    kanji: '辞書',
    kana: 'じしょ',
    romaji: 'jisho',
    meaning: 'dictionary',
    type: 'noun',
    example: 'これは辞書[じしょ]です。',
    exampleRomaji: 'Kore wa jisho desu.',
    exampleMeaning: 'This is a dictionary.'
  },
  {
    kanji: '静か',
    kana: 'しずか',
    romaji: 'shizuka',
    meaning: 'quiet',
    type: 'adjective',
    example: '図書館[としょかん]は静[しず]かです。',
    exampleRomaji: 'Toshokan wa shizuka desu.',
    exampleMeaning: 'The library is quiet.'
  },
  {
    kanji: '下',
    kana: 'した',
    romaji: 'shita',
    meaning: 'under, below',
    type: 'noun',
    example: 'これは下[した]です。',
    exampleRomaji: 'Kore wa shita desu.',
    exampleMeaning: 'This is an under, below.'
  },
  {
    kanji: '質問',
    kana: 'しつもん',
    romaji: 'shitsumon',
    meaning: 'question',
    type: 'noun',
    example: 'これは質問[しつもん]です。',
    exampleRomaji: 'Kore wa shitsumon desu.',
    exampleMeaning: 'This is a question.'
  },
  {
    kanji: '自転車',
    kana: 'じてんしゃ',
    romaji: 'jitensha',
    meaning: 'bicycle',
    type: 'noun',
    example: 'これは自転車[じてんしゃ]です。',
    exampleRomaji: 'Kore wa jitensha desu.',
    exampleMeaning: 'This is a bicycle.'
  },
  {
    kanji: '自動車',
    kana: 'じどうしゃ',
    romaji: 'jidousha',
    meaning: 'car, vehicle',
    type: 'noun',
    example: 'これは自動車[じどうしゃ]です。',
    exampleRomaji: 'Kore wa jidousha desu.',
    exampleMeaning: 'This is a car, vehicle.'
  },
  {
    kanji: '死ぬ',
    kana: 'しぬ',
    romaji: 'shinu',
    meaning: 'to die, to pas away',
    type: 'verb',
    example: '魚[さかな]が死[し]にます。',
    exampleRomaji: 'Sakana ga shinimasu.',
    exampleMeaning: 'The fish dies.'
  },
  {
    kanji: '字引',
    kana: 'じびき',
    romaji: 'jibiki',
    meaning: 'dictionary',
    type: 'noun',
    example: 'これは字引[じびき]です。',
    exampleRomaji: 'Kore wa jibiki desu.',
    exampleMeaning: 'This is a dictionary.'
  },
  {
    kanji: '自分',
    kana: 'じぶん',
    romaji: 'jibun',
    meaning: 'oneself',
    type: 'noun',
    example: 'これは自分[じぶん]です。',
    exampleRomaji: 'Kore wa jibun desu.',
    exampleMeaning: 'This is an oneself.'
  },
  {
    kanji: '閉まる',
    kana: 'しまる',
    romaji: 'shimaru',
    meaning: 'to close',
    type: 'verb',
    example: '店[みせ]が九時[くじ]に閉[し]まります。',
    exampleRomaji: 'Mise ga kuji ni shimarimasu.',
    exampleMeaning: 'The shop closes at nine o\'clock.'
  },
  {
    kanji: '閉める',
    kana: 'しめる',
    romaji: 'shimeru',
    meaning: 'to close',
    type: 'verb',
    example: 'ドアを閉[し]めます。',
    exampleRomaji: 'Doa o shimemasu.',
    exampleMeaning: 'I close the door.'
  },
  {
    kanji: '締める',
    kana: 'しめる',
    romaji: 'shimeru',
    meaning: 'to fasten a seatbelt',
    type: 'verb',
    example: 'シートベルトを締[し]めます。',
    exampleRomaji: 'Shiitoberuto o shimemasu.',
    exampleMeaning: 'I fasten my seatbelt.'
  },
  {
    kanji: 'じゃ',
    kana: 'じゃ',
    romaji: 'ja',
    meaning: 'well, then',
    type: 'noun',
    example: 'じゃ、また明日[あした]。',
    exampleRomaji: 'Ja, mata ashita.',
    exampleMeaning: 'Well then, see you tomorrow.'
  },
  {
    kanji: '写真',
    kana: 'しゃしん',
    romaji: 'shashin',
    meaning: 'photo',
    type: 'noun',
    example: 'これは写真[しゃしん]です。',
    exampleRomaji: 'Kore wa shashin desu.',
    exampleMeaning: 'This is a photo.'
  },
  {
    kanji: 'シャツ',
    kana: 'シャツ',
    romaji: 'shatsu',
    meaning: 'shirt',
    type: 'noun',
    example: 'これはシャツ[シャツ]です。',
    exampleRomaji: 'Kore wa shatsu desu.',
    exampleMeaning: 'This is a shirt.'
  },
  {
    kanji: '十',
    kana: 'じゅう',
    romaji: 'juu',
    meaning: 'ten',
    type: 'noun',
    example: 'これは十[じゅう]です。',
    exampleRomaji: 'Kore wa juu desu.',
    exampleMeaning: 'This is ten.'
  },
  {
    kanji: '~週間',
    kana: '〜しゅうかん',
    romaji: '~shuukan',
    meaning: '… weeks',
    type: 'noun',
    example: '三週間[さんしゅうかん]、日本[にほん]にいます。',
    exampleRomaji: 'San shuukan, Nihon ni imasu.',
    exampleMeaning: 'I will be in Japan for three weeks.'
  },
  {
    kanji: '授業',
    kana: 'じゅぎょう',
    romaji: 'jugyou',
    meaning: 'lesson, class',
    type: 'noun',
    example: 'これは授業[じゅぎょう]です。',
    exampleRomaji: 'Kore wa jugyou desu.',
    exampleMeaning: 'This is a lesson, class.'
  },
  {
    kanji: '宿題',
    kana: 'しゅくだい',
    romaji: 'shukudai',
    meaning: 'homework',
    type: 'noun',
    example: 'これは宿題[しゅくだい]です。',
    exampleRomaji: 'Kore wa shukudai desu.',
    exampleMeaning: 'This is homework.'
  },
  {
    kanji: '上手',
    kana: 'じょうず',
    romaji: 'jouzu',
    meaning: 'to be good at something',
    type: 'adjective',
    example: '田中[たなか]さんはピアノが上手[じょうず]です。',
    exampleRomaji: 'Tanaka-san wa piano ga jouzu desu.',
    exampleMeaning: 'Mr. Tanaka is good at the piano.'
  },
  {
    kanji: '丈夫',
    kana: 'じょうぶ',
    romaji: 'joubu',
    meaning: 'to be strong, durable',
    type: 'adjective',
    example: 'この靴[くつ]は丈夫[じょうぶ]です。',
    exampleRomaji: 'Kono kutsu wa joubu desu.',
    exampleMeaning: 'These shoes are durable.'
  },
  {
    kanji: '醤油',
    kana: 'しょうゆ',
    romaji: 'shouyu',
    meaning: 'soy sauce',
    type: 'noun',
    example: 'これは醤油[しょうゆ]です。',
    exampleRomaji: 'Kore wa shouyu desu.',
    exampleMeaning: 'This is a soy sauce.'
  },
  {
    kanji: '食堂',
    kana: 'しょくどう',
    romaji: 'shokudou',
    meaning: 'dining room, canteen',
    type: 'noun',
    example: 'これは食堂[しょくどう]です。',
    exampleRomaji: 'Kore wa shokudou desu.',
    exampleMeaning: 'This is a dining room, canteen.'
  },
  {
    kanji: '知る',
    kana: 'しる',
    romaji: 'shiru',
    meaning: 'to know',
    type: 'verb',
    example: 'あの人[ひと]を知[し]っています。',
    exampleRomaji: 'Ano hito o shitte imasu.',
    exampleMeaning: 'I know that person.'
  },
  {
    kanji: '白い',
    kana: 'しろい',
    romaji: 'shiroi',
    meaning: 'white',
    type: 'adjective',
    example: 'あの猫[ねこ]は白[しろ]いです。',
    exampleRomaji: 'Ano neko wa shiroi desu.',
    exampleMeaning: 'That cat is white.'
  },
  {
    kanji: '〜人',
    kana: '〜じん',
    romaji: '~jin',
    meaning: '~an, ~ese (nationality)',
    type: 'noun',
    example: 'わたしはアメリカ人[じん]です。',
    exampleRomaji: 'Watashi wa amerika jin desu.',
    exampleMeaning: 'I am American.'
  },
  {
    kanji: '新聞',
    kana: 'しんぶん',
    romaji: 'shinbun',
    meaning: 'newspaper',
    type: 'noun',
    example: 'これは新聞[しんぶん]です。',
    exampleRomaji: 'Kore wa shinbun desu.',
    exampleMeaning: 'This is a newspaper.'
  },
  {
    kanji: '水曜日',
    kana: 'すいようび',
    romaji: 'suiyoubi',
    meaning: 'Wednesday',
    type: 'noun',
    example: '水曜日[すいようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Suiyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Wednesday.'
  },
  {
    kanji: '吸う',
    kana: 'すう',
    romaji: 'suu',
    meaning: 'to breathe, to smoke',
    type: 'verb',
    example: 'たばこを吸[す]います。',
    exampleRomaji: 'Tabako o suimasu.',
    exampleMeaning: 'I smoke a cigarette.'
  },
  {
    kanji: 'スカート',
    kana: 'スカート',
    romaji: 'sukaato',
    meaning: 'skirt',
    type: 'noun',
    example: 'これはスカート[スカート]です。',
    exampleRomaji: 'Kore wa sukaato desu.',
    exampleMeaning: 'This is a skirt.'
  },
  {
    kanji: '好き',
    kana: 'すき',
    romaji: 'suki',
    meaning: 'to like',
    type: 'adjective',
    example: 'わたしは音楽[おんがく]が好[す]きです。',
    exampleRomaji: 'Watashi wa ongaku ga suki desu.',
    exampleMeaning: 'I like music.'
  },
  {
    kanji: '〜過ぎ',
    kana: '〜すぎ',
    romaji: '~sugi',
    meaning: 'past, over',
    type: 'noun',
    example: '三時過[さんじす]ぎに来[き]ます。',
    exampleRomaji: 'San ji sugi ni kimasu.',
    exampleMeaning: 'I will come a little after three o\'clock.'
  },
  {
    kanji: 'すぐに',
    kana: 'すぐに',
    romaji: 'sugu ni',
    meaning: 'at once',
    type: 'noun',
    example: 'これはすぐにです。',
    exampleRomaji: 'Kore wa sugu ni desu.',
    exampleMeaning: 'This is an at once.'
  },
  {
    kanji: '少し',
    kana: 'すこし',
    romaji: 'sukoshi',
    meaning: 'a little',
    type: 'adverb',
    example: '日本語[にほんご]が少[すこ]しわかります。',
    exampleRomaji: 'Nihongo ga sukoshi wakarimasu.',
    exampleMeaning: 'I understand a little Japanese.'
  },
  {
    kanji: '涼しい',
    kana: 'すずしい',
    romaji: 'suzushii',
    meaning: 'cool',
    type: 'adjective',
    example: '今日[きょう]は涼[すず]しいです。',
    exampleRomaji: 'Kyou wa suzushii desu.',
    exampleMeaning: 'It is cool today.'
  },
  {
    kanji: '〜ずつ',
    kana: '〜ずつ',
    romaji: '~zutsu',
    meaning: 'each',
    type: 'noun',
    example: '一人[ひとり]に一[ひと]つずつあげます。',
    exampleRomaji: 'Hitori ni hitotsu zutsu agemasu.',
    exampleMeaning: 'I give one to each person.'
  },
  {
    kanji: 'ストーブ',
    kana: 'ストーブ',
    romaji: 'sutoobu',
    meaning: 'stove, heater',
    type: 'noun',
    example: 'これはストーブ[ストーブ]です。',
    exampleRomaji: 'Kore wa sutoobu desu.',
    exampleMeaning: 'This is a stove, heater.'
  },
  {
    kanji: 'スプーン',
    kana: 'スプーン',
    romaji: 'supuun',
    meaning: 'spoon',
    type: 'noun',
    example: 'これはスプーン[スプーン]です。',
    exampleRomaji: 'Kore wa supuun desu.',
    exampleMeaning: 'This is a spoon.'
  },
  {
    kanji: 'スポーツ',
    kana: 'スポーツ',
    romaji: 'supootsu',
    meaning: 'sports',
    type: 'noun',
    example: 'これはスポーツ[スポーツ]です。',
    exampleRomaji: 'Kore wa supootsu desu.',
    exampleMeaning: 'This is a sports.'
  },
  {
    kanji: 'ズボン',
    kana: 'ズボン',
    romaji: 'zubon',
    meaning: 'trousers',
    type: 'noun',
    example: 'これはズボン[ズボン]です。',
    exampleRomaji: 'Kore wa zubon desu.',
    exampleMeaning: 'This is a trousers.'
  },
  {
    kanji: '住む',
    kana: 'すむ',
    romaji: 'sumu',
    meaning: 'to live, to reside somewhere',
    type: 'verb',
    example: '東京[とうきょう]に住[す]んでいます。',
    exampleRomaji: 'Toukyou ni sunde imasu.',
    exampleMeaning: 'I live in Tokyo.'
  },
  {
    kanji: 'スリッパ',
    kana: 'スリッパ',
    romaji: 'surippa',
    meaning: 'slipper',
    type: 'noun',
    example: 'これはスリッパ[スリッパ]です。',
    exampleRomaji: 'Kore wa surippa desu.',
    exampleMeaning: 'This is a slipper.'
  },
  {
    kanji: 'する',
    kana: 'する',
    romaji: 'suru',
    meaning: 'to do',
    type: 'verb',
    example: 'スポーツをします。',
    exampleRomaji: 'Supootsu o shimasu.',
    exampleMeaning: 'I do sports.'
  },
  {
    kanji: '座る',
    kana: 'すわる',
    romaji: 'suwaru',
    meaning: 'to sit',
    type: 'verb',
    example: '椅子[いす]に座[すわ]ります。',
    exampleRomaji: 'Isu ni suwarimasu.',
    exampleMeaning: 'I sit on the chair.'
  },
  {
    kanji: '背',
    kana: 'せい',
    romaji: 'sei',
    meaning: 'height',
    type: 'noun',
    example: 'これは背[せい]です。',
    exampleRomaji: 'Kore wa sei desu.',
    exampleMeaning: 'This is a height.'
  },
  {
    kanji: '生徒',
    kana: 'せいと',
    romaji: 'seito',
    meaning: 'student',
    type: 'noun',
    example: 'これは生徒[せいと]です。',
    exampleRomaji: 'Kore wa seito desu.',
    exampleMeaning: 'This is a student.'
  },
  {
    kanji: 'セーター',
    kana: 'セーター',
    romaji: 'seetaa',
    meaning: 'sweater',
    type: 'noun',
    example: 'これはセータ[セータ]ーです。',
    exampleRomaji: 'Kore wa seetaa desu.',
    exampleMeaning: 'This is a sweater.'
  },
  {
    kanji: '石鹸',
    kana: 'せっけん',
    romaji: 'sekken',
    meaning: 'soap',
    type: 'noun',
    example: 'これは石鹸[せっけん]です。',
    exampleRomaji: 'Kore wa sekken desu.',
    exampleMeaning: 'This is a soap.'
  },
  {
    kanji: '背広',
    kana: 'せびろ',
    romaji: 'sebiro',
    meaning: 'jacket, suit',
    type: 'noun',
    example: 'これは背広[せびろ]です。',
    exampleRomaji: 'Kore wa sebiro desu.',
    exampleMeaning: 'This is a jacket, suit.'
  },
  {
    kanji: '狭い',
    kana: 'せまい',
    romaji: 'semai',
    meaning: 'narrow',
    type: 'adjective',
    example: 'この部屋[へや]は狭[せま]いです。',
    exampleRomaji: 'Kono heya wa semai desu.',
    exampleMeaning: 'This room is narrow.'
  },
  {
    kanji: 'ゼロ',
    kana: 'ゼロ',
    romaji: 'zero',
    meaning: 'zero',
    type: 'noun',
    example: 'これはゼロ[ゼロ]です。',
    exampleRomaji: 'Kore wa zero desu.',
    exampleMeaning: 'This is zero.'
  },
  {
    kanji: '千',
    kana: 'せん',
    romaji: 'sen',
    meaning: '1,000, thousand',
    type: 'noun',
    example: 'これは千[せん]です。',
    exampleRomaji: 'Kore wa sen desu.',
    exampleMeaning: 'This is 1,000, thousand.'
  },
  {
    kanji: '先月',
    kana: 'せんげつ',
    romaji: 'sengetsu',
    meaning: 'last month',
    type: 'noun',
    example: '先月[せんげつ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Sengetsu, nihongo o benkyou shimasu.',
    exampleMeaning: 'Last month, I study Japanese.'
  },
  {
    kanji: '先週',
    kana: 'せんしゅう',
    romaji: 'senshuu',
    meaning: 'last week',
    type: 'noun',
    example: '先週[せんしゅう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Senshuu, nihongo o benkyou shimasu.',
    exampleMeaning: 'Last week, I study Japanese.'
  },
  {
    kanji: '先生',
    kana: 'せんせい',
    romaji: 'sensei',
    meaning: 'teacher',
    type: 'noun',
    example: 'これは先生[せんせい]です。',
    exampleRomaji: 'Kore wa sensei desu.',
    exampleMeaning: 'This is a teacher.'
  },
  {
    kanji: '洗濯',
    kana: 'せんたく',
    romaji: 'sentaku',
    meaning: 'washing, to wash',
    type: 'noun',
    example: 'これは洗濯[せんたく]です。',
    exampleRomaji: 'Kore wa sentaku desu.',
    exampleMeaning: 'This is a washing, to wash.'
  },
  {
    kanji: '全部',
    kana: 'ぜんぶ',
    romaji: 'zenbu',
    meaning: 'all',
    type: 'noun',
    example: 'これは全部[ぜんぶ]です。',
    exampleRomaji: 'Kore wa zenbu desu.',
    exampleMeaning: 'This is an all.'
  },
  {
    kanji: 'そう',
    kana: 'そう',
    romaji: 'sou',
    meaning: 'so',
    type: 'noun',
    example: 'ええ、そうです。',
    exampleRomaji: 'Ee, sou desu.',
    exampleMeaning: 'Yes, that is right.'
  },
  {
    kanji: '掃除',
    kana: 'そうじ',
    romaji: 'souji',
    meaning: 'to clean',
    type: 'verb',
    example: '部屋[へや]を掃除[そうじ]します。',
    exampleRomaji: 'Heya o souji shimasu.',
    exampleMeaning: 'I clean my room.'
  },
  {
    kanji: 'そうして',
    kana: 'そうして',
    romaji: 'soushite',
    meaning: 'and then',
    type: 'noun',
    example: 'これはそうしてです。',
    exampleRomaji: 'Kore wa soushite desu.',
    exampleMeaning: 'This is an and then.'
  },
  {
    kanji: 'そこ',
    kana: 'そこ',
    romaji: 'soko',
    meaning: 'there',
    type: 'noun',
    example: 'そこです。',
    exampleRomaji: 'Soko desu.',
    exampleMeaning: 'It is there.'
  },
  {
    kanji: 'そちら',
    kana: 'そちら',
    romaji: 'sochira',
    meaning: 'there (polite)',
    type: 'noun',
    example: 'これはそちらです。',
    exampleRomaji: 'Kore wa sochira desu.',
    exampleMeaning: 'This is a there (polite).'
  },
  {
    kanji: '外',
    kana: 'そと',
    romaji: 'soto',
    meaning: 'outside',
    type: 'noun',
    example: 'これは外[そと]です。',
    exampleRomaji: 'Kore wa soto desu.',
    exampleMeaning: 'This is an outside.'
  },
  {
    kanji: 'その',
    kana: 'その',
    romaji: 'sono',
    meaning: 'that…',
    type: 'noun',
    example: 'そのペンをください。',
    exampleRomaji: 'Sono pen o kudasai.',
    exampleMeaning: 'Please give me that pen.'
  },
  {
    kanji: 'そば',
    kana: 'そば',
    romaji: 'soba',
    meaning: 'next to',
    type: 'noun',
    example: '駅[えき]のそばに住[す]んでいます。',
    exampleRomaji: 'Eki no soba ni sunde imasu.',
    exampleMeaning: 'I live near the station.'
  },
  {
    kanji: '空',
    kana: 'そら',
    romaji: 'sora',
    meaning: 'sky',
    type: 'noun',
    example: 'これは空[そら]です。',
    exampleRomaji: 'Kore wa sora desu.',
    exampleMeaning: 'This is a sky.'
  },
  {
    kanji: 'それ',
    kana: 'それ',
    romaji: 'sore',
    meaning: 'that',
    type: 'noun',
    example: 'それです。',
    exampleRomaji: 'Sore desu.',
    exampleMeaning: 'It is that one.'
  },
  {
    kanji: 'それから',
    kana: 'それから',
    romaji: 'sorekara',
    meaning: 'after that',
    type: 'noun',
    example: 'これはそれからです。',
    exampleRomaji: 'Kore wa sorekara desu.',
    exampleMeaning: 'This is an after that.'
  },
  {
    kanji: 'それでは',
    kana: 'それでは',
    romaji: 'soredewa',
    meaning: 'then, well',
    type: 'noun',
    example: 'これはそれではです。',
    exampleRomaji: 'Kore wa soredewa desu.',
    exampleMeaning: 'This is a then, well.'
  },
  {
    kanji: '〜台',
    kana: '〜だい',
    romaji: '~dai',
    meaning: 'counter for machines',
    type: 'noun',
    example: '車[くるま]が三台[さんだい]あります。',
    exampleRomaji: 'Kuruma ga san dai arimasu.',
    exampleMeaning: 'There are three cars.'
  },
  {
    kanji: '大学',
    kana: 'だいがく',
    romaji: 'daigaku',
    meaning: 'university',
    type: 'noun',
    example: 'これは大学[だいがく]です。',
    exampleRomaji: 'Kore wa daigaku desu.',
    exampleMeaning: 'This is an university.'
  },
  {
    kanji: '大使館',
    kana: 'たいしかん',
    romaji: 'taishikan',
    meaning: 'embassy',
    type: 'noun',
    example: 'これは大使館[たいしかん]です。',
    exampleRomaji: 'Kore wa taishikan desu.',
    exampleMeaning: 'This is an embassy.'
  },
  {
    kanji: '大丈夫',
    kana: 'だいじょうぶ',
    romaji: 'daijoubu',
    meaning: 'OK',
    type: 'adjective',
    example: 'わたしは大丈夫[だいじょうぶ]です。',
    exampleRomaji: 'Watashi wa daijoubu desu.',
    exampleMeaning: 'I am okay.'
  },
  {
    kanji: '大好き',
    kana: 'だいすき',
    romaji: 'daisuki',
    meaning: 'to be very fond of',
    type: 'adjective',
    example: 'わたしは猫[ねこ]が大好[だいす]きです。',
    exampleRomaji: 'Watashi wa neko ga daisuki desu.',
    exampleMeaning: 'I love cats.'
  },
  {
    kanji: '大切',
    kana: 'たいせつ',
    romaji: 'taisetsu',
    meaning: 'very important',
    type: 'adjective',
    example: '家族[かぞく]は大切[たいせつ]です。',
    exampleRomaji: 'Kazoku wa taisetsu desu.',
    exampleMeaning: 'Family is important.'
  },
  {
    kanji: 'たいてい',
    kana: 'たいてい',
    romaji: 'taitei',
    meaning: 'mostly, usually',
    type: 'adverb',
    example: 'たいてい七時[しちじ]に起[お]きます。',
    exampleRomaji: 'Taitei shichiji ni okimasu.',
    exampleMeaning: 'I usually get up at seven o\'clock.'
  },
  {
    kanji: '台所',
    kana: 'だいどころ',
    romaji: 'daidokoro',
    meaning: 'kitchen',
    type: 'noun',
    example: 'これは台所[だいどころ]です。',
    exampleRomaji: 'Kore wa daidokoro desu.',
    exampleMeaning: 'This is a kitchen.'
  },
  {
    kanji: '大変',
    kana: 'たいへん',
    romaji: 'taihen',
    meaning: 'very, serious',
    type: 'adjective',
    example: '今日[きょう]の仕事[しごと]は大変[たいへん]です。',
    exampleRomaji: 'Kyou no shigoto wa taihen desu.',
    exampleMeaning: 'Today\'s work is tough.'
  },
  {
    kanji: '高い',
    kana: 'たかい',
    romaji: 'takai',
    meaning: 'high, expensive',
    type: 'adjective',
    example: 'この時計[とけい]は高[たか]いです。',
    exampleRomaji: 'Kono tokei wa takai desu.',
    exampleMeaning: 'This watch is expensive.'
  },
  {
    kanji: '沢山',
    kana: 'たくさん',
    romaji: 'takusan',
    meaning: 'many, much',
    type: 'adverb',
    example: '公園[こうえん]に花[はな]が沢山[たくさん]あります。',
    exampleRomaji: 'Kouen ni hana ga takusan arimasu.',
    exampleMeaning: 'There are many flowers in the park.'
  },
  {
    kanji: 'タクシー',
    kana: 'タクシー',
    romaji: 'takushii',
    meaning: 'taxi',
    type: 'noun',
    example: 'これはタクシ[タクシ]ーです。',
    exampleRomaji: 'Kore wa takushii desu.',
    exampleMeaning: 'This is a taxi.'
  },
  {
    kanji: '出す',
    kana: 'だす',
    romaji: 'dasu',
    meaning: 'to take out, hand in',
    type: 'verb',
    example: '宿題[しゅくだい]を出[だ]します。',
    exampleRomaji: 'Shukudai o dashimasu.',
    exampleMeaning: 'I hand in my homework.'
  },
  {
    kanji: '~達',
    kana: '〜たち',
    romaji: '~tachi',
    meaning: 'more than one, and others',
    type: 'noun',
    example: 'わたしたちは友達[ともだち]です。',
    exampleRomaji: 'Watashitachi wa tomodachi desu.',
    exampleMeaning: 'We are friends.'
  },
  {
    kanji: '立つ',
    kana: 'たつ',
    romaji: 'tatsu',
    meaning: 'to stand',
    type: 'verb',
    example: '教室[きょうしつ]の前[まえ]に立[た]ちます。',
    exampleRomaji: 'Kyoushitsu no mae ni tachimasu.',
    exampleMeaning: 'I stand in front of the classroom.'
  },
  {
    kanji: '建物',
    kana: 'たてもの',
    romaji: 'tatemono',
    meaning: 'building',
    type: 'noun',
    example: 'これは建物[たてもの]です。',
    exampleRomaji: 'Kore wa tatemono desu.',
    exampleMeaning: 'This is a building.'
  },
  {
    kanji: '楽しい',
    kana: 'たのしい',
    romaji: 'tanoshii',
    meaning: 'pleasant, enjoyable',
    type: 'adjective',
    example: 'パーティーは楽[たの]しいです。',
    exampleRomaji: 'Paatii wa tanoshii desu.',
    exampleMeaning: 'The party is fun.'
  },
  {
    kanji: '頼む',
    kana: 'たのむ',
    romaji: 'tanomu',
    meaning: 'to ask, to request',
    type: 'verb',
    example: '友達[ともだち]に頼[たの]みます。',
    exampleRomaji: 'Tomodachi ni tanomimasu.',
    exampleMeaning: 'I ask my friend for a favor.'
  },
  {
    kanji: 'たばこ',
    kana: 'たばこ',
    romaji: 'tabako',
    meaning: 'cigarette',
    type: 'noun',
    example: 'これはたばこです。',
    exampleRomaji: 'Kore wa tabako desu.',
    exampleMeaning: 'This is a cigarette.'
  },
  {
    kanji: '多分',
    kana: 'たぶん',
    romaji: 'tabun',
    meaning: 'perhaps, probably',
    type: 'adverb',
    example: '多分[たぶん]明日[あした]は雨[あめ]です。',
    exampleRomaji: 'Tabun ashita wa ame desu.',
    exampleMeaning: 'It will probably rain tomorrow.'
  },
  {
    kanji: '食べ物',
    kana: 'たべもの',
    romaji: 'tabemono',
    meaning: 'food',
    type: 'noun',
    example: 'これは食べ物[たべもの]です。',
    exampleRomaji: 'Kore wa tabemono desu.',
    exampleMeaning: 'This is a food.'
  },
  {
    kanji: '食べる',
    kana: 'たべる',
    romaji: 'taberu',
    meaning: 'to eat',
    type: 'verb',
    example: '朝[あさ]ご飯[はん]を食[た]べます。',
    exampleRomaji: 'Asagohan o tabemasu.',
    exampleMeaning: 'I eat breakfast.'
  },
  {
    kanji: '卵',
    kana: 'たまご',
    romaji: 'tamago',
    meaning: 'egg',
    type: 'noun',
    example: 'これは卵[たまご]です。',
    exampleRomaji: 'Kore wa tamago desu.',
    exampleMeaning: 'This is an egg.'
  },
  {
    kanji: '誰',
    kana: 'だれ',
    romaji: 'dare',
    meaning: 'who?',
    type: 'noun',
    example: 'あの人[ひと]は誰[だれ]ですか。',
    exampleRomaji: 'Ano hito wa dare desu ka.',
    exampleMeaning: 'Who is that person?'
  },
  {
    kanji: '誕生日',
    kana: 'たんじょうび',
    romaji: 'tanjoubi',
    meaning: 'birthday',
    type: 'noun',
    example: '誕生日[たんじょうび]はいつですか。',
    exampleRomaji: 'Tanjoubi wa itsu desu ka.',
    exampleMeaning: 'When is your birthday?'
  },
  {
    kanji: 'だんだん',
    kana: 'だんだん',
    romaji: 'dandan',
    meaning: 'gradually',
    type: 'adverb',
    example: 'だんだん暖[あたた]かくなります。',
    exampleRomaji: 'Dandan atatakaku narimasu.',
    exampleMeaning: 'It is gradually getting warmer.'
  },
  {
    kanji: '小さい',
    kana: 'ちいさい',
    romaji: 'chiisai',
    meaning: 'small',
    type: 'adjective',
    example: 'この犬[いぬ]は小[ちい]さいです。',
    exampleRomaji: 'Kono inu wa chiisai desu.',
    exampleMeaning: 'This dog is small.'
  },
  {
    kanji: '近い',
    kana: 'ちかい',
    romaji: 'chikai',
    meaning: 'near, close',
    type: 'adjective',
    example: '駅[えき]は近[ちか]いです。',
    exampleRomaji: 'Eki wa chikai desu.',
    exampleMeaning: 'The station is close.'
  },
  {
    kanji: '違う',
    kana: 'ちがう',
    romaji: 'chigau',
    meaning: 'different',
    type: 'verb',
    example: 'わたしの意見[いけん]は違[ちが]います。',
    exampleRomaji: 'Watashi no iken wa chigaimasu.',
    exampleMeaning: 'My opinion is different.'
  },
  {
    kanji: '地下鉄',
    kana: 'ちかてつ',
    romaji: 'chikatetsu',
    meaning: 'subway',
    type: 'noun',
    example: 'これは地下鉄[ちかてつ]です。',
    exampleRomaji: 'Kore wa chikatetsu desu.',
    exampleMeaning: 'This is a subway.'
  },
  {
    kanji: '地図',
    kana: 'ちず',
    romaji: 'chizu',
    meaning: 'map',
    type: 'noun',
    example: 'これは地図[ちず]です。',
    exampleRomaji: 'Kore wa chizu desu.',
    exampleMeaning: 'This is a map.'
  },
  {
    kanji: '父',
    kana: 'ちち',
    romaji: 'chichi',
    meaning: 'my father',
    type: 'noun',
    example: 'これは父[ちち]です。',
    exampleRomaji: 'Kore wa chichi desu.',
    exampleMeaning: 'This is my father.'
  },
  {
    kanji: '茶色',
    kana: 'ちゃいろ',
    romaji: 'chairo',
    meaning: 'brown',
    type: 'noun',
    example: 'これは茶色[ちゃいろ]です。',
    exampleRomaji: 'Kore wa chairo desu.',
    exampleMeaning: 'This is a brown.'
  },
  {
    kanji: '茶碗',
    kana: 'ちゃわん',
    romaji: 'chawan',
    meaning: 'rice bowl',
    type: 'noun',
    example: 'これは茶碗[ちゃわん]です。',
    exampleRomaji: 'Kore wa chawan desu.',
    exampleMeaning: 'This is rice bowl.'
  },
  {
    kanji: '〜中',
    kana: '〜ちゅう',
    romaji: '~chuu',
    meaning: 'in the middle of',
    type: 'noun',
    example: '今[いま]、勉強中[べんきょうちゅう]です。',
    exampleRomaji: 'Ima, benkyouchuu desu.',
    exampleMeaning: 'I am studying right now.'
  },
  {
    kanji: 'ちょうど',
    kana: 'ちょうど',
    romaji: 'choudo',
    meaning: 'just',
    type: 'noun',
    example: 'これはちょうどです。',
    exampleRomaji: 'Kore wa choudo desu.',
    exampleMeaning: 'This is a just.'
  },
  {
    kanji: 'ちょっと',
    kana: 'ちょっと',
    romaji: 'chotto',
    meaning: 'a little',
    type: 'adverb',
    example: 'ちょっと待[ま]ってください。',
    exampleRomaji: 'Chotto matte kudasai.',
    exampleMeaning: 'Please wait a moment.'
  },
  {
    kanji: '一日',
    kana: 'ついたち',
    romaji: 'tsuitachi',
    meaning: 'the 1st day of a month',
    type: 'noun',
    example: '今日[きょう]は一日[ついたち]です。',
    exampleRomaji: 'Kyou wa tsuitachi desu.',
    exampleMeaning: 'Today is the the 1st day of a month.'
  },
  {
    kanji: '使う',
    kana: 'つかう',
    romaji: 'tsukau',
    meaning: 'to use',
    type: 'verb',
    example: 'パソコンを使[つか]います。',
    exampleRomaji: 'Pasokon o tsukaimasu.',
    exampleMeaning: 'I use a computer.'
  },
  {
    kanji: '疲れる',
    kana: 'つかれる',
    romaji: 'tsukareru',
    meaning: 'to get tired',
    type: 'verb',
    example: '仕事[しごと]で疲[つか]れます。',
    exampleRomaji: 'Shigoto de tsukaremasu.',
    exampleMeaning: 'I get tired from work.'
  },
  {
    kanji: '次',
    kana: 'つぎ',
    romaji: 'tsugi',
    meaning: 'next',
    type: 'noun',
    example: 'これは次[つぎ]です。',
    exampleRomaji: 'Kore wa tsugi desu.',
    exampleMeaning: 'This is a next.'
  },
  {
    kanji: '着く',
    kana: 'つく',
    romaji: 'tsuku',
    meaning: 'to arrive',
    type: 'verb',
    example: '駅[えき]に着[つ]きます。',
    exampleRomaji: 'Eki ni tsukimasu.',
    exampleMeaning: 'I arrive at the station.'
  },
  {
    kanji: '机',
    kana: 'つくえ',
    romaji: 'tsukue',
    meaning: 'table',
    type: 'noun',
    example: 'これは机[つくえ]です。',
    exampleRomaji: 'Kore wa tsukue desu.',
    exampleMeaning: 'This is a table.'
  },
  {
    kanji: '作る',
    kana: 'つくる',
    romaji: 'tsukuru',
    meaning: 'to make, to produce',
    type: 'verb',
    example: '晩[ばん]ご飯[はん]を作[つく]ります。',
    exampleRomaji: 'Bangohan o tsukurimasu.',
    exampleMeaning: 'I make dinner.'
  },
  {
    kanji: '点ける',
    kana: 'つける',
    romaji: 'tsukeru',
    meaning: 'to turn on',
    type: 'verb',
    example: 'テレビを点[つ]けます。',
    exampleRomaji: 'Terebi o tsukemasu.',
    exampleMeaning: 'I turn on the TV.'
  },
  {
    kanji: '勤める',
    kana: 'つとめる',
    romaji: 'tsutomeru',
    meaning: 'to work for someone',
    type: 'verb',
    example: '銀行[ぎんこう]に勤[つと]めています。',
    exampleRomaji: 'Ginkou ni tsutomete imasu.',
    exampleMeaning: 'I work at a bank.'
  },
  {
    kanji: '詰らない',
    kana: 'つまらない',
    romaji: 'tsumaranai',
    meaning: 'uninteresting',
    type: 'adjective',
    example: 'この映画[えいが]はつまらないです。',
    exampleRomaji: 'Kono eiga wa tsumaranai desu.',
    exampleMeaning: 'This movie is boring.'
  },
  {
    kanji: '冷たい',
    kana: 'つめたい',
    romaji: 'tsumetai',
    meaning: 'cold',
    type: 'adjective',
    example: 'この水[みず]は冷[つめ]たいです。',
    exampleRomaji: 'Kono mizu wa tsumetai desu.',
    exampleMeaning: 'This water is cold.'
  },
  {
    kanji: '強い',
    kana: 'つよい',
    romaji: 'tsuyoi',
    meaning: 'strong',
    type: 'adjective',
    example: '田中[たなか]さんは強[つよ]いです。',
    exampleRomaji: 'Tanaka-san wa tsuyoi desu.',
    exampleMeaning: 'Mr. Tanaka is strong.'
  },
  {
    kanji: '手',
    kana: 'て',
    romaji: 'te',
    meaning: 'hand',
    type: 'noun',
    example: 'これは手[て]です。',
    exampleRomaji: 'Kore wa te desu.',
    exampleMeaning: 'This is a hand.'
  },
  {
    kanji: 'テープ',
    kana: 'テープ',
    romaji: 'teepu',
    meaning: 'tape',
    type: 'noun',
    example: 'これはテープ[テープ]です。',
    exampleRomaji: 'Kore wa teepu desu.',
    exampleMeaning: 'This is a tape.'
  },
  {
    kanji: 'テープレコーダー',
    kana: 'テープレコーダー',
    romaji: 'teepu rekoodaa',
    meaning: 'tape recorder',
    type: 'noun',
    example: 'これはテープレコーダ[テープレコーダ]ーです。',
    exampleRomaji: 'Kore wa teepu rekoodaa desu.',
    exampleMeaning: 'This is a tape recorder.'
  },
  {
    kanji: 'テーブル',
    kana: 'テーブル',
    romaji: 'teeburu',
    meaning: 'table',
    type: 'noun',
    example: 'これはテーブル[テーブル]です。',
    exampleRomaji: 'Kore wa teeburu desu.',
    exampleMeaning: 'This is a table.'
  },
  {
    kanji: '出かける',
    kana: 'でかける',
    romaji: 'dekakeru',
    meaning: 'to go out',
    type: 'verb',
    example: '友達[ともだち]と出[で]かけます。',
    exampleRomaji: 'Tomodachi to dekakemasu.',
    exampleMeaning: 'I go out with my friend.'
  },
  {
    kanji: '手紙',
    kana: 'てがみ',
    romaji: 'tegami',
    meaning: 'letter',
    type: 'noun',
    example: 'これは手紙[てがみ]です。',
    exampleRomaji: 'Kore wa tegami desu.',
    exampleMeaning: 'This is a letter.'
  },
  {
    kanji: '出来る',
    kana: 'できる',
    romaji: 'dekiru',
    meaning: 'can',
    type: 'verb',
    example: '日本語[にほんご]が少[すこ]し出来[でき]ます。',
    exampleRomaji: 'Nihongo ga sukoshi dekimasu.',
    exampleMeaning: 'I can speak a little Japanese.'
  },
  {
    kanji: '出口',
    kana: 'でぐち',
    romaji: 'deguchi',
    meaning: 'exit',
    type: 'noun',
    example: 'これは出口[でぐち]です。',
    exampleRomaji: 'Kore wa deguchi desu.',
    exampleMeaning: 'This is an exit.'
  },
  {
    kanji: 'テスト',
    kana: 'テスト',
    romaji: 'tesuto',
    meaning: 'test',
    type: 'noun',
    example: 'これはテスト[テスト]です。',
    exampleRomaji: 'Kore wa tesuto desu.',
    exampleMeaning: 'This is a test.'
  },
  {
    kanji: 'では',
    kana: 'では',
    romaji: 'dewa',
    meaning: 'then, well',
    type: 'noun',
    example: 'では、始[はじ]めましょう。',
    exampleRomaji: 'Dewa, hajimemashou.',
    exampleMeaning: 'Well then, let\'s begin.'
  },
  {
    kanji: 'デパート',
    kana: 'デパート',
    romaji: 'depaato',
    meaning: 'department store',
    type: 'noun',
    example: 'これはデパート[デパート]です。',
    exampleRomaji: 'Kore wa depaato desu.',
    exampleMeaning: 'This is a department store.'
  },
  {
    kanji: 'でも',
    kana: 'でも',
    romaji: 'demo',
    meaning: 'but',
    type: 'noun',
    example: '雨[あめ]です。でも、行[い]きます。',
    exampleRomaji: 'Ame desu. Demo, ikimasu.',
    exampleMeaning: 'It is raining. But I will go.'
  },
  {
    kanji: '出ます',
    kana: 'でます',
    romaji: 'demasu',
    meaning: 'to leave',
    type: 'verb',
    example: '八時[はちじ]に家[いえ]を出[で]ます。',
    exampleRomaji: 'Hachiji ni ie o demasu.',
    exampleMeaning: 'I leave home at eight o\'clock.'
  },
  {
    kanji: 'テレビ',
    kana: 'テレビ',
    romaji: 'terebi',
    meaning: 'TV',
    type: 'noun',
    example: 'これはテレビ[テレビ]です。',
    exampleRomaji: 'Kore wa terebi desu.',
    exampleMeaning: 'This is TV.'
  },
  {
    kanji: '天気',
    kana: 'てんき',
    romaji: 'tenki',
    meaning: 'weather',
    type: 'noun',
    example: 'これは天気[てんき]です。',
    exampleRomaji: 'Kore wa tenki desu.',
    exampleMeaning: 'This is a weather.'
  },
  {
    kanji: '電気',
    kana: 'でんき',
    romaji: 'denki',
    meaning: 'electricity',
    type: 'noun',
    example: 'これは電気[でんき]です。',
    exampleRomaji: 'Kore wa denki desu.',
    exampleMeaning: 'This is an electricity.'
  },
  {
    kanji: '電車',
    kana: 'でんしゃ',
    romaji: 'densha',
    meaning: 'train',
    type: 'noun',
    example: 'これは電車[でんしゃ]です。',
    exampleRomaji: 'Kore wa densha desu.',
    exampleMeaning: 'This is a train.'
  },
  {
    kanji: '電話',
    kana: 'でんわ',
    romaji: 'denwa',
    meaning: 'phone',
    type: 'noun',
    example: 'これは電話[でんわ]です。',
    exampleRomaji: 'Kore wa denwa desu.',
    exampleMeaning: 'This is a phone.'
  },
  {
    kanji: '戸',
    kana: 'と',
    romaji: 'to',
    meaning: 'door',
    type: 'noun',
    example: 'これは戸[と]です。',
    exampleRomaji: 'Kore wa to desu.',
    exampleMeaning: 'This is a door.'
  },
  {
    kanji: '〜度',
    kana: '〜ど',
    romaji: '~do',
    meaning: '~times, ~degree',
    type: 'noun',
    example: 'もう一度[いちど]言[い]ってください。',
    exampleRomaji: 'Mou ichido itte kudasai.',
    exampleMeaning: 'Please say it once more.'
  },
  {
    kanji: 'ドア',
    kana: 'ドア',
    romaji: 'doa',
    meaning: 'door',
    type: 'noun',
    example: 'これはドア[ドア]です。',
    exampleRomaji: 'Kore wa doa desu.',
    exampleMeaning: 'This is a door.'
  },
  {
    kanji: 'トイレ',
    kana: 'トイレ',
    romaji: 'toire',
    meaning: 'toilet, lavatory',
    type: 'noun',
    example: 'これはトイレ[トイレ]です。',
    exampleRomaji: 'Kore wa toire desu.',
    exampleMeaning: 'This is a toilet, lavatory.'
  },
  {
    kanji: 'どう',
    kana: 'どう',
    romaji: 'dou',
    meaning: 'how?',
    type: 'noun',
    example: '日本語[にほんご]はどうですか。',
    exampleRomaji: 'Nihongo wa dou desu ka.',
    exampleMeaning: 'How is Japanese (going)?'
  },
  {
    kanji: 'どうして',
    kana: 'どうして',
    romaji: 'doushite',
    meaning: 'why?',
    type: 'noun',
    example: 'どうして学校[がっこう]を休[やす]みましたか。',
    exampleRomaji: 'Doushite gakkou o yasumimashita ka.',
    exampleMeaning: 'Why did you miss school?'
  },
  {
    kanji: 'どうぞ',
    kana: 'どうぞ',
    romaji: 'douzo',
    meaning: 'please, here you are',
    type: 'adverb',
    example: 'どうぞ、こちらへ。',
    exampleRomaji: 'Douzo, kochira e.',
    exampleMeaning: 'Please, this way.'
  },
  {
    kanji: '動物',
    kana: 'どうぶつ',
    romaji: 'doubutsu',
    meaning: 'animal',
    type: 'noun',
    example: 'これは動物[どうぶつ]です。',
    exampleRomaji: 'Kore wa doubutsu desu.',
    exampleMeaning: 'This is an animal.'
  },
  {
    kanji: 'どうも',
    kana: 'どうも',
    romaji: 'doumo',
    meaning: 'thanks',
    type: 'adverb',
    example: 'どうも、ありがとう。',
    exampleRomaji: 'Doumo, arigatou.',
    exampleMeaning: 'Thanks very much.'
  },
  {
    kanji: '十',
    kana: 'とお',
    romaji: 'too',
    meaning: 'ten',
    type: 'noun',
    example: 'これは十[とお]です。',
    exampleRomaji: 'Kore wa too desu.',
    exampleMeaning: 'This is ten.'
  },
  {
    kanji: '遠い',
    kana: 'とおい',
    romaji: 'tooi',
    meaning: 'far',
    type: 'adjective',
    example: '学校[がっこう]は遠[とお]いです。',
    exampleRomaji: 'Gakkou wa tooi desu.',
    exampleMeaning: 'The school is far.'
  },
  {
    kanji: '十日',
    kana: 'とおか',
    romaji: 'tooka',
    meaning: 'the 10th day of a month, 10 days',
    type: 'noun',
    example: '今日[きょう]は十日[とおか]です。',
    exampleRomaji: 'Kyou wa tooka desu.',
    exampleMeaning: 'Today is the the 10th day of a month, 10 days.'
  },
  {
    kanji: '時々',
    kana: 'ときどき',
    romaji: 'tokidoki',
    meaning: 'sometimes',
    type: 'adverb',
    example: '時々[ときどき]映画[えいが]を見[み]ます。',
    exampleRomaji: 'Tokidoki eiga o mimasu.',
    exampleMeaning: 'I sometimes watch movies.'
  },
  {
    kanji: '時計',
    kana: 'とけい',
    romaji: 'tokei',
    meaning: 'watch, clock',
    type: 'noun',
    example: 'これは時計[とけい]です。',
    exampleRomaji: 'Kore wa tokei desu.',
    exampleMeaning: 'This is a watch, clock.'
  },
  {
    kanji: 'どこ',
    kana: 'どこ',
    romaji: 'doko',
    meaning: 'where?',
    type: 'noun',
    example: 'お手洗[てあら]いはどこですか。',
    exampleRomaji: 'Otearai wa doko desu ka.',
    exampleMeaning: 'Where is the restroom?'
  },
  {
    kanji: '所',
    kana: 'ところ',
    romaji: 'tokoro',
    meaning: 'place',
    type: 'noun',
    example: 'これは所[ところ]です。',
    exampleRomaji: 'Kore wa tokoro desu.',
    exampleMeaning: 'This is a place.'
  },
  {
    kanji: '図書館',
    kana: 'としょかん',
    romaji: 'toshokan',
    meaning: 'library',
    type: 'noun',
    example: 'これは図書館[としょかん]です。',
    exampleRomaji: 'Kore wa toshokan desu.',
    exampleMeaning: 'This is a library.'
  },
  {
    kanji: 'どちら',
    kana: 'どちら',
    romaji: 'dochira',
    meaning: 'which, where (polite)',
    type: 'noun',
    example: 'お国[くに]はどちらですか。',
    exampleRomaji: 'Okuni wa dochira desu ka.',
    exampleMeaning: 'Where are you from?'
  },
  {
    kanji: 'とても',
    kana: 'とても',
    romaji: 'totemo',
    meaning: 'very much, quiet',
    type: 'adverb',
    example: '今日[きょう]はとても暑[あつ]いです。',
    exampleRomaji: 'Kyou wa totemo atsui desu.',
    exampleMeaning: 'Today is very hot.'
  },
  {
    kanji: 'どなた',
    kana: 'どなた',
    romaji: 'donata',
    meaning: 'who (polite)',
    type: 'noun',
    example: 'あの方[かた]はどなたですか。',
    exampleRomaji: 'Ano kata wa donata desu ka.',
    exampleMeaning: 'Who is that person?'
  },
  {
    kanji: '隣り',
    kana: 'となり',
    romaji: 'tonari',
    meaning: 'next to',
    type: 'noun',
    example: 'これは隣[とな]りです。',
    exampleRomaji: 'Kore wa tonari desu.',
    exampleMeaning: 'This is a next to.'
  },
  {
    kanji: 'どの',
    kana: 'どの',
    romaji: 'dono',
    meaning: 'which?',
    type: 'noun',
    example: 'どの本[ほん]ですか。',
    exampleRomaji: 'Dono hon desu ka.',
    exampleMeaning: 'Which book is it?'
  },
  {
    kanji: '飛ぶ',
    kana: 'とぶ',
    romaji: 'tobu',
    meaning: 'to fly',
    type: 'verb',
    example: '鳥[とり]が空[そら]を飛[と]びます。',
    exampleRomaji: 'Tori ga sora o tobimasu.',
    exampleMeaning: 'A bird flies in the sky.'
  },
  {
    kanji: '止まる',
    kana: 'とまる',
    romaji: 'tomaru',
    meaning: 'to stop',
    type: 'verb',
    example: 'バスが止[と]まります。',
    exampleRomaji: 'Basu ga tomarimasu.',
    exampleMeaning: 'The bus stops.'
  },
  {
    kanji: '友達',
    kana: 'ともだち',
    romaji: 'tomodachi',
    meaning: 'friend',
    type: 'noun',
    example: 'これは友達[ともだち]です。',
    exampleRomaji: 'Kore wa tomodachi desu.',
    exampleMeaning: 'This is a friend.'
  },
  {
    kanji: '土曜日',
    kana: 'どようび',
    romaji: 'doyoubi',
    meaning: 'Saturday',
    type: 'noun',
    example: '土曜日[どようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Doyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Saturday.'
  },
  {
    kanji: '鳥',
    kana: 'とり',
    romaji: 'tori',
    meaning: 'bird',
    type: 'noun',
    example: 'これは鳥[とり]です。',
    exampleRomaji: 'Kore wa tori desu.',
    exampleMeaning: 'This is a bird.'
  },
  {
    kanji: '鶏肉',
    kana: 'とりにく',
    romaji: 'toriniku',
    meaning: 'chicken meat',
    type: 'noun',
    example: 'これは鶏肉[とりにく]です。',
    exampleRomaji: 'Kore wa toriniku desu.',
    exampleMeaning: 'This is a chicken meat.'
  },
  {
    kanji: '取る',
    kana: 'とる',
    romaji: 'toru',
    meaning: 'to take',
    type: 'verb',
    example: '塩[しお]を取[と]ってください。',
    exampleRomaji: 'Shio o totte kudasai.',
    exampleMeaning: 'Please pass me the salt.'
  },
  {
    kanji: '撮る',
    kana: 'とる',
    romaji: 'toru',
    meaning: 'to take a photo',
    type: 'verb',
    example: '写真[しゃしん]を撮[と]ります。',
    exampleRomaji: 'Shashin o torimasu.',
    exampleMeaning: 'I take a photo.'
  },
  {
    kanji: 'どれ',
    kana: 'どれ',
    romaji: 'dore',
    meaning: 'which?',
    type: 'noun',
    example: 'あなたの傘[かさ]はどれですか。',
    exampleRomaji: 'Anata no kasa wa dore desu ka.',
    exampleMeaning: 'Which one is your umbrella?'
  },
  {
    kanji: 'どんな',
    kana: 'どんな',
    romaji: 'donna',
    meaning: 'what kind of?',
    type: 'noun',
    example: 'どんな音楽[おんがく]が好[す]きですか。',
    exampleRomaji: 'Donna ongaku ga suki desu ka.',
    exampleMeaning: 'What kind of music do you like?'
  },
  {
    kanji: 'ナイフ',
    kana: 'ナイフ',
    romaji: 'naifu',
    meaning: 'knife',
    type: 'noun',
    example: 'これはナイフ[ナイフ]です。',
    exampleRomaji: 'Kore wa naifu desu.',
    exampleMeaning: 'This is a knife.'
  },
  {
    kanji: '中',
    kana: 'なか',
    romaji: 'naka',
    meaning: 'inside',
    type: 'noun',
    example: 'これは中[なか]です。',
    exampleRomaji: 'Kore wa naka desu.',
    exampleMeaning: 'This is an inside.'
  },
  {
    kanji: '長い',
    kana: 'ながい',
    romaji: 'nagai',
    meaning: 'long',
    type: 'adjective',
    example: 'この川[かわ]は長[なが]いです。',
    exampleRomaji: 'Kono kawa wa nagai desu.',
    exampleMeaning: 'This river is long.'
  },
  {
    kanji: '鳴く',
    kana: 'なく',
    romaji: 'naku',
    meaning: 'to sing, mew, moo',
    type: 'verb',
    example: '鳥[とり]が鳴[な]きます。',
    exampleRomaji: 'Tori ga nakimasu.',
    exampleMeaning: 'The bird sings.'
  },
  {
    kanji: '夏',
    kana: 'なつ',
    romaji: 'natsu',
    meaning: 'summer',
    type: 'noun',
    example: '夏[なつ]が好[す]きです。',
    exampleRomaji: 'Natsu ga suki desu.',
    exampleMeaning: 'I like summer.'
  },
  {
    kanji: '夏休み',
    kana: 'なつやすみ',
    romaji: 'natsuyasumi',
    meaning: 'summer vacation',
    type: 'noun',
    example: '夏休[なつやす]みに旅行[りょこう]します。',
    exampleRomaji: 'Natsuyasumi ni ryokou shimasu.',
    exampleMeaning: 'I will travel during summer vacation.'
  },
  {
    kanji: '〜など',
    kana: '〜など',
    romaji: '~nado',
    meaning: 'and so on',
    type: 'noun',
    example: 'りんごやみかんなどが好[す]きです。',
    exampleRomaji: 'Ringo ya mikan nado ga suki desu.',
    exampleMeaning: 'I like apples, tangerines, and so on.'
  },
  {
    kanji: '七つ',
    kana: 'ななつ',
    romaji: 'nanatsu',
    meaning: 'seven',
    type: 'noun',
    example: 'これは七[なな]つです。',
    exampleRomaji: 'Kore wa nanatsu desu.',
    exampleMeaning: 'This is seven.'
  },
  {
    kanji: '何',
    kana: 'なに',
    romaji: 'nani',
    meaning: 'what?',
    type: 'noun',
    example: 'これは何[なに]ですか。',
    exampleRomaji: 'Kore wa nani desu ka.',
    exampleMeaning: 'What is this?'
  },
  {
    kanji: '七日',
    kana: 'なのか',
    romaji: 'nanoka',
    meaning: 'the 7th of a month, 7 days',
    type: 'noun',
    example: '今日[きょう]は七日[なのか]です。',
    exampleRomaji: 'Kyou wa nanoka desu.',
    exampleMeaning: 'Today is the the 7th of a month, 7 days.'
  },
  {
    kanji: '名前',
    kana: 'なまえ',
    romaji: 'namae',
    meaning: 'name',
    type: 'noun',
    example: 'これは名前[なまえ]です。',
    exampleRomaji: 'Kore wa namae desu.',
    exampleMeaning: 'This is a name.'
  },
  {
    kanji: '習う',
    kana: 'ならう',
    romaji: 'narau',
    meaning: 'to learn',
    type: 'verb',
    example: '日本語[にほんご]を習[なら]います。',
    exampleRomaji: 'Nihongo o naraimasu.',
    exampleMeaning: 'I learn Japanese.'
  },
  {
    kanji: '並ぶ',
    kana: 'ならぶ',
    romaji: 'narabu',
    meaning: 'to form a line',
    type: 'verb',
    example: '店[みせ]の前[まえ]に並[なら]びます。',
    exampleRomaji: 'Mise no mae ni narabimasu.',
    exampleMeaning: 'I line up in front of the shop.'
  },
  {
    kanji: '並べる',
    kana: 'ならべる',
    romaji: 'naraberu',
    meaning: 'to line up',
    type: 'verb',
    example: '机[つくえ]の上[うえ]に本[ほん]を並[なら]べます。',
    exampleRomaji: 'Tsukue no ue ni hon o narabemasu.',
    exampleMeaning: 'I line up the books on the desk.'
  },
  {
    kanji: 'なる',
    kana: 'なる',
    romaji: 'naru',
    meaning: 'to become',
    type: 'verb',
    example: '先生[せんせい]になります。',
    exampleRomaji: 'Sensei ni narimasu.',
    exampleMeaning: 'I will become a teacher.'
  },
  {
    kanji: '二',
    kana: 'に',
    romaji: 'ni',
    meaning: 'two',
    type: 'noun',
    example: 'これは二[に]です。',
    exampleRomaji: 'Kore wa ni desu.',
    exampleMeaning: 'This is two.'
  },
  {
    kanji: '賑やか',
    kana: 'にぎやか',
    romaji: 'nigiyaka',
    meaning: 'lively',
    type: 'adjective',
    example: 'この町[まち]は賑[にぎ]やかです。',
    exampleRomaji: 'Kono machi wa nigiyaka desu.',
    exampleMeaning: 'This town is lively.'
  },
  {
    kanji: 'お肉',
    kana: 'おにく',
    romaji: 'oniku',
    meaning: 'meat',
    type: 'noun',
    example: 'これはお肉[おにく]です。',
    exampleRomaji: 'Kore wa oniku desu.',
    exampleMeaning: 'This is a meat.'
  },
  {
    kanji: '西',
    kana: 'にし',
    romaji: 'nishi',
    meaning: 'west',
    type: 'noun',
    example: 'これは西[にし]です。',
    exampleRomaji: 'Kore wa nishi desu.',
    exampleMeaning: 'This is a west.'
  },
  {
    kanji: '〜日',
    kana: '〜にち',
    romaji: '~nichi',
    meaning: '…st, ..nd, ..th',
    type: 'noun',
    example: '今日[きょう]は三日[みっか]です。',
    exampleRomaji: 'Kyou wa mikka desu.',
    exampleMeaning: 'Today is the third.'
  },
  {
    kanji: '日曜日',
    kana: 'にちようび',
    romaji: 'nichiyoubi',
    meaning: 'Sunday',
    type: 'noun',
    example: '日曜日[にちようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Nichiyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Sunday.'
  },
  {
    kanji: '荷物',
    kana: 'にもつ',
    romaji: 'nimotsu',
    meaning: 'luggage',
    type: 'noun',
    example: 'これは荷物[にもつ]です。',
    exampleRomaji: 'Kore wa nimotsu desu.',
    exampleMeaning: 'This is luggage.'
  },
  {
    kanji: 'ニュース',
    kana: 'ニュース',
    romaji: 'nyuusu',
    meaning: 'news',
    type: 'noun',
    example: 'これはニュース[ニュース]です。',
    exampleRomaji: 'Kore wa nyuusu desu.',
    exampleMeaning: 'This is a news.'
  },
  {
    kanji: '庭',
    kana: 'にわ',
    romaji: 'niwa',
    meaning: 'garden',
    type: 'noun',
    example: 'これは庭[にわ]です。',
    exampleRomaji: 'Kore wa niwa desu.',
    exampleMeaning: 'This is a garden.'
  },
  {
    kanji: '〜人',
    kana: '~にん',
    romaji: '~nin',
    meaning: '… people',
    type: 'noun',
    example: '学生[がくせい]が三人[さんにん]います。',
    exampleRomaji: 'Gakusei ga san nin imasu.',
    exampleMeaning: 'There are three students.'
  },
  {
    kanji: '脱ぐ',
    kana: 'ぬぐ',
    romaji: 'nugu',
    meaning: 'to take off clothes',
    type: 'verb',
    example: '靴[くつ]を脱[ぬ]ぎます。',
    exampleRomaji: 'Kutsu o nugimasu.',
    exampleMeaning: 'I take off my shoes.'
  },
  {
    kanji: 'ネクタイ',
    kana: 'ネクタイ',
    romaji: 'nekutai',
    meaning: 'necktie',
    type: 'noun',
    example: 'これはネクタイ[ネクタイ]です。',
    exampleRomaji: 'Kore wa nekutai desu.',
    exampleMeaning: 'This is a necktie.'
  },
  {
    kanji: '寝る',
    kana: 'ねる',
    romaji: 'neru',
    meaning: 'to go to bed',
    type: 'verb',
    example: '十一時[じゅういちじ]に寝[ね]ます。',
    exampleRomaji: 'Juuichiji ni nemasu.',
    exampleMeaning: 'I go to bed at eleven o\'clock.'
  },
  {
    kanji: '〜年',
    kana: '〜ねん',
    romaji: '~nen',
    meaning: '~years',
    type: 'noun',
    example: '三年[さんねん]、日本[にほん]にいます。',
    exampleRomaji: 'San nen, Nihon ni imasu.',
    exampleMeaning: 'I will be in Japan for three years.'
  },
  {
    kanji: 'ノート',
    kana: 'ノート',
    romaji: 'nooto',
    meaning: 'notebook',
    type: 'noun',
    example: 'これはノート[ノート]です。',
    exampleRomaji: 'Kore wa nooto desu.',
    exampleMeaning: 'This is a notebook.'
  },
  {
    kanji: '登る',
    kana: 'のぼる',
    romaji: 'noboru',
    meaning: 'to climb up',
    type: 'verb',
    example: '山[やま]に登[のぼ]ります。',
    exampleRomaji: 'Yama ni noborimasu.',
    exampleMeaning: 'I climb a mountain.'
  },
  {
    kanji: '飲物',
    kana: 'のみもの',
    romaji: 'nomimono',
    meaning: 'drinks',
    type: 'noun',
    example: 'これは飲物[のみもの]です。',
    exampleRomaji: 'Kore wa nomimono desu.',
    exampleMeaning: 'This is a drinks.'
  },
  {
    kanji: '飲む',
    kana: 'のむ',
    romaji: 'nomu',
    meaning: 'to drink',
    type: 'verb',
    example: '水[みず]を飲[の]みます。',
    exampleRomaji: 'Mizu o nomimasu.',
    exampleMeaning: 'I drink water.'
  },
  {
    kanji: '乗る',
    kana: 'のる',
    romaji: 'noru',
    meaning: 'to take, to ride',
    type: 'verb',
    example: 'バスに乗[の]ります。',
    exampleRomaji: 'Basu ni norimasu.',
    exampleMeaning: 'I ride the bus.'
  },
  {
    kanji: '歯',
    kana: 'は',
    romaji: 'ha',
    meaning: 'teeth',
    type: 'noun',
    example: 'これは歯[は]です。',
    exampleRomaji: 'Kore wa ha desu.',
    exampleMeaning: 'This is a teeth.'
  },
  {
    kanji: 'パーテイー',
    kana: 'パーテイー',
    romaji: 'paateii',
    meaning: 'party',
    type: 'noun',
    example: 'これはパーテイ[パーテイ]ーです。',
    exampleRomaji: 'Kore wa paateii desu.',
    exampleMeaning: 'This is a party.'
  },
  {
    kanji: 'はい',
    kana: 'はい',
    romaji: 'hai',
    meaning: 'yes',
    type: 'noun',
    example: 'はい、そうです。',
    exampleRomaji: 'Hai, sou desu.',
    exampleMeaning: 'Yes, that is correct.'
  },
  {
    kanji: '〜はい',
    kana: '〜はい',
    romaji: '~hai',
    meaning: 'cups of ~',
    type: 'noun',
    example: 'お茶[ちゃ]を一杯[いっぱい]飲[の]みます。',
    exampleRomaji: 'Ocha o ippai nomimasu.',
    exampleMeaning: 'I drink one cup of tea.'
  },
  {
    kanji: '灰皿',
    kana: 'はいざら',
    romaji: 'haizara',
    meaning: 'ashtray',
    type: 'noun',
    example: 'これは灰皿[はいざら]です。',
    exampleRomaji: 'Kore wa haizara desu.',
    exampleMeaning: 'This is an ashtray.'
  },
  {
    kanji: '入る',
    kana: 'はいる',
    romaji: 'hairu',
    meaning: 'to enter',
    type: 'verb',
    example: '部屋[へや]に入[はい]ります。',
    exampleRomaji: 'Heya ni hairimasu.',
    exampleMeaning: 'I enter the room.'
  },
  {
    kanji: '葉書',
    kana: 'はがき',
    romaji: 'hagaki',
    meaning: 'postcard',
    type: 'noun',
    example: 'これは葉書[はがき]です。',
    exampleRomaji: 'Kore wa hagaki desu.',
    exampleMeaning: 'This is a postcard.'
  },
  {
    kanji: '履く',
    kana: 'はく',
    romaji: 'haku',
    meaning: 'to put on shoes',
    type: 'verb',
    example: '靴[くつ]を履[は]きます。',
    exampleRomaji: 'Kutsu o hakimasu.',
    exampleMeaning: 'I put on my shoes.'
  },
  {
    kanji: '箱',
    kana: 'はこ',
    romaji: 'hako',
    meaning: 'box',
    type: 'noun',
    example: 'これは箱[はこ]です。',
    exampleRomaji: 'Kore wa hako desu.',
    exampleMeaning: 'This is a box.'
  },
  {
    kanji: '橋',
    kana: 'はし',
    romaji: 'hashi',
    meaning: 'bridge',
    type: 'noun',
    example: 'これは橋[はし]です。',
    exampleRomaji: 'Kore wa hashi desu.',
    exampleMeaning: 'This is a bridge.'
  },
  {
    kanji: '箸',
    kana: 'はし',
    romaji: 'hashi',
    meaning: 'chopsticks',
    type: 'noun',
    example: 'これは箸[はし]です。',
    exampleRomaji: 'Kore wa hashi desu.',
    exampleMeaning: 'This is a chopsticks.'
  },
  {
    kanji: '始まる',
    kana: 'はじまる',
    romaji: 'hajimaru',
    meaning: 'to begin, to start',
    type: 'verb',
    example: '授業[じゅぎょう]が九時[くじ]に始[はじ]まります。',
    exampleRomaji: 'Jugyou ga kuji ni hajimarimasu.',
    exampleMeaning: 'Class starts at nine o\'clock.'
  },
  {
    kanji: '始め',
    kana: 'はじめ',
    romaji: 'hajime',
    meaning: 'start, the beginning',
    type: 'noun',
    example: 'これは始[はじ]めです。',
    exampleRomaji: 'Kore wa hajime desu.',
    exampleMeaning: 'This is a start, the beginning.'
  },
  {
    kanji: '初めて',
    kana: 'はじめて',
    romaji: 'hajimete',
    meaning: 'for the first time',
    type: 'adverb',
    example: '初[はじ]めて日本[にほん]へ行[い]きます。',
    exampleRomaji: 'Hajimete Nihon e ikimasu.',
    exampleMeaning: 'I will go to Japan for the first time.'
  },
  {
    kanji: '走る',
    kana: 'はしる',
    romaji: 'hashiru',
    meaning: 'to run',
    type: 'verb',
    example: '公園[こうえん]を走[はし]ります。',
    exampleRomaji: 'Kouen o hashirimasu.',
    exampleMeaning: 'I run in the park.'
  },
  {
    kanji: 'バス',
    kana: 'バス',
    romaji: 'basu',
    meaning: 'bus',
    type: 'noun',
    example: 'これはバス[バス]です。',
    exampleRomaji: 'Kore wa basu desu.',
    exampleMeaning: 'This is a bus.'
  },
  {
    kanji: 'バター',
    kana: 'バター',
    romaji: 'bataa',
    meaning: 'butter',
    type: 'noun',
    example: 'これはバタ[バタ]ーです。',
    exampleRomaji: 'Kore wa bataa desu.',
    exampleMeaning: 'This is a butter.'
  },
  {
    kanji: '二十歳',
    kana: 'はたち',
    romaji: 'hatachi',
    meaning: '20 years old',
    type: 'noun',
    example: 'わたしは二十歳[はたち]です。',
    exampleRomaji: 'Watashi wa hatachi desu.',
    exampleMeaning: 'I am twenty years old.'
  },
  {
    kanji: '働く',
    kana: 'はたらく',
    romaji: 'hataraku',
    meaning: 'to work',
    type: 'verb',
    example: '会社[かいしゃ]で働[はたら]きます。',
    exampleRomaji: 'Kaisha de hatarakimasu.',
    exampleMeaning: 'I work at a company.'
  },
  {
    kanji: '八',
    kana: 'はち',
    romaji: 'hachi',
    meaning: 'eight',
    type: 'noun',
    example: 'これは八[はち]です。',
    exampleRomaji: 'Kore wa hachi desu.',
    exampleMeaning: 'This is eight.'
  },
  {
    kanji: '二十日',
    kana: 'はつか',
    romaji: 'hatsuka',
    meaning: 'the 20th of the month, 20 days',
    type: 'noun',
    example: '今日[きょう]は二十日[はつか]です。',
    exampleRomaji: 'Kyou wa hatsuka desu.',
    exampleMeaning: 'Today is the the 20th of the month, 20 days.'
  },
  {
    kanji: '花',
    kana: 'はな',
    romaji: 'hana',
    meaning: 'flower',
    type: 'noun',
    example: 'これは花[はな]です。',
    exampleRomaji: 'Kore wa hana desu.',
    exampleMeaning: 'This is a flower.'
  },
  {
    kanji: '鼻',
    kana: 'はな',
    romaji: 'hana',
    meaning: 'nose',
    type: 'noun',
    example: 'これは鼻[はな]です。',
    exampleRomaji: 'Kore wa hana desu.',
    exampleMeaning: 'This is a nose.'
  },
  {
    kanji: '話',
    kana: 'はなし',
    romaji: 'hanashi',
    meaning: 'conversation, tale',
    type: 'noun',
    example: 'これは話[はなし]です。',
    exampleRomaji: 'Kore wa hanashi desu.',
    exampleMeaning: 'This is a conversation, tale.'
  },
  {
    kanji: '話す',
    kana: 'はなす',
    romaji: 'hanasu',
    meaning: 'to talk, to speak, to tell',
    type: 'verb',
    example: '友達[ともだち]と話[はな]します。',
    exampleRomaji: 'Tomodachi to hanashimasu.',
    exampleMeaning: 'I talk with my friend.'
  },
  {
    kanji: '母',
    kana: 'はは',
    romaji: 'haha',
    meaning: 'my mother',
    type: 'noun',
    example: 'これは母[はは]です。',
    exampleRomaji: 'Kore wa haha desu.',
    exampleMeaning: 'This is my mother.'
  },
  {
    kanji: '早い',
    kana: 'はやい',
    romaji: 'hayai',
    meaning: 'early',
    type: 'adjective',
    example: '今日[きょう]は早[はや]いです。',
    exampleRomaji: 'Kyou wa hayai desu.',
    exampleMeaning: 'It is early today.'
  },
  {
    kanji: '速い',
    kana: 'はやい',
    romaji: 'hayai',
    meaning: 'fast, quick',
    type: 'adjective',
    example: 'あの車[くるま]は速[はや]いです。',
    exampleRomaji: 'Ano kuruma wa hayai desu.',
    exampleMeaning: 'That car is fast.'
  },
  {
    kanji: '春',
    kana: 'はる',
    romaji: 'haru',
    meaning: 'spring',
    type: 'noun',
    example: '春[はる]が好[す]きです。',
    exampleRomaji: 'Haru ga suki desu.',
    exampleMeaning: 'I like spring.'
  },
  {
    kanji: '張る',
    kana: 'はる',
    romaji: 'haru',
    meaning: 'to put something on, to stick',
    type: 'verb',
    example: '壁[かべ]にポスターを張[は]ります。',
    exampleRomaji: 'Kabe ni posutaa o harimasu.',
    exampleMeaning: 'I put a poster on the wall.'
  },
  {
    kanji: '晴れる',
    kana: 'はれる',
    romaji: 'hareru',
    meaning: 'to clear up',
    type: 'verb',
    example: '明日[あした]は晴[は]れます。',
    exampleRomaji: 'Ashita wa haremasu.',
    exampleMeaning: 'It will clear up tomorrow.'
  },
  {
    kanji: '〜半',
    kana: '〜はん',
    romaji: '~han',
    meaning: 'Half~',
    type: 'noun',
    example: '三時半[さんじはん]です。',
    exampleRomaji: 'San ji han desu.',
    exampleMeaning: 'It is half past three.'
  },
  {
    kanji: '晩',
    kana: 'ばん',
    romaji: 'ban',
    meaning: 'evening',
    type: 'noun',
    example: '晩[ばん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Ban, nihongo o benkyou shimasu.',
    exampleMeaning: 'Evening, I study Japanese.'
  },
  {
    kanji: '~番',
    kana: '〜ばん',
    romaji: '~ban',
    meaning: 'No.~, ranking',
    type: 'noun',
    example: 'わたしは一番[いちばん]です。',
    exampleRomaji: 'Watashi wa ichiban desu.',
    exampleMeaning: 'I am number one.'
  },
  {
    kanji: 'パン',
    kana: 'パン',
    romaji: 'pan',
    meaning: 'bread',
    type: 'noun',
    example: 'これはパン[パン]です。',
    exampleRomaji: 'Kore wa pan desu.',
    exampleMeaning: 'This is a bread.'
  },
  {
    kanji: 'ハンカチ',
    kana: 'ハンカチ',
    romaji: 'hankachi',
    meaning: 'handkerchief',
    type: 'noun',
    example: 'これはハンカチ[ハンカチ]です。',
    exampleRomaji: 'Kore wa hankachi desu.',
    exampleMeaning: 'This is a handkerchief.'
  },
  {
    kanji: '番号',
    kana: 'ばんごう',
    romaji: 'bangou',
    meaning: 'number',
    type: 'noun',
    example: 'これは番号[ばんごう]です。',
    exampleRomaji: 'Kore wa bangou desu.',
    exampleMeaning: 'This is a number.'
  },
  {
    kanji: '晩ご飯',
    kana: 'ばんごはん',
    romaji: 'bangohan',
    meaning: 'dinner',
    type: 'noun',
    example: 'これは晩ご飯[ばんごはん]です。',
    exampleRomaji: 'Kore wa bangohan desu.',
    exampleMeaning: 'This is a dinner.'
  },
  {
    kanji: '半分',
    kana: 'はんぶん',
    romaji: 'hanbun',
    meaning: 'half',
    type: 'noun',
    example: 'これは半分[はんぶん]です。',
    exampleRomaji: 'Kore wa hanbun desu.',
    exampleMeaning: 'This is a half.'
  },
  {
    kanji: '東',
    kana: 'ひがし',
    romaji: 'higashi',
    meaning: 'east',
    type: 'noun',
    example: 'これは東[ひがし]です。',
    exampleRomaji: 'Kore wa higashi desu.',
    exampleMeaning: 'This is an east.'
  },
  {
    kanji: '〜匹',
    kana: '〜ひき',
    romaji: '~hiki',
    meaning: 'counter for animals',
    type: 'noun',
    example: '猫[ねこ]が三匹[さんびき]います。',
    exampleRomaji: 'Neko ga san biki imasu.',
    exampleMeaning: 'There are three cats.'
  },
  {
    kanji: '引く',
    kana: 'ひく',
    romaji: 'hiku',
    meaning: 'to pull',
    type: 'verb',
    example: 'ドアを引[ひ]きます。',
    exampleRomaji: 'Doa o hikimasu.',
    exampleMeaning: 'I pull the door.'
  },
  {
    kanji: '弾く',
    kana: 'ひく',
    romaji: 'hiku',
    meaning: 'to play (an instrument)',
    type: 'verb',
    example: 'ピアノを弾[ひ]きます。',
    exampleRomaji: 'Piano o hikimasu.',
    exampleMeaning: 'I play the piano.'
  },
  {
    kanji: '低い',
    kana: 'ひくい',
    romaji: 'hikui',
    meaning: 'low',
    type: 'adjective',
    example: 'この机[つくえ]は低[ひく]いです。',
    exampleRomaji: 'Kono tsukue wa hikui desu.',
    exampleMeaning: 'This desk is low.'
  },
  {
    kanji: '飛行機',
    kana: 'ひこうき',
    romaji: 'hikouki',
    meaning: 'plane',
    type: 'noun',
    example: 'これは飛行機[ひこうき]です。',
    exampleRomaji: 'Kore wa hikouki desu.',
    exampleMeaning: 'This is a plane.'
  },
  {
    kanji: '左',
    kana: 'ひだり',
    romaji: 'hidari',
    meaning: 'left',
    type: 'noun',
    example: 'これは左[ひだり]です。',
    exampleRomaji: 'Kore wa hidari desu.',
    exampleMeaning: 'This is a left.'
  },
  {
    kanji: '人',
    kana: 'ひと',
    romaji: 'hito',
    meaning: 'person',
    type: 'noun',
    example: 'これは人[ひと]です。',
    exampleRomaji: 'Kore wa hito desu.',
    exampleMeaning: 'This is a person.'
  },
  {
    kanji: '一つ',
    kana: 'ひとつ',
    romaji: 'hitotsu',
    meaning: 'one',
    type: 'noun',
    example: 'これは一[ひと]つです。',
    exampleRomaji: 'Kore wa hitotsu desu.',
    exampleMeaning: 'This is one.'
  },
  {
    kanji: '一月',
    kana: 'ひとつき',
    romaji: 'hitotsuki',
    meaning: 'one month',
    type: 'noun',
    example: '一月[ひとつき]、日本[にほん]にいます。',
    exampleRomaji: 'Hitotsuki, Nihon ni imasu.',
    exampleMeaning: 'I will be in Japan for one month.'
  },
  {
    kanji: '一人',
    kana: 'ひとり',
    romaji: 'hitori',
    meaning: 'one person',
    type: 'noun',
    example: 'これは一人[ひとり]です。',
    exampleRomaji: 'Kore wa hitori desu.',
    exampleMeaning: 'This is one person.'
  },
  {
    kanji: '暇',
    kana: 'ひま',
    romaji: 'hima',
    meaning: 'free time, leisure',
    type: 'adjective',
    example: '今日[きょう]は暇[ひま]です。',
    exampleRomaji: 'Kyou wa hima desu.',
    exampleMeaning: 'I am free today.'
  },
  {
    kanji: '百',
    kana: 'ひゃく',
    romaji: 'hyaku',
    meaning: 'hundred',
    type: 'noun',
    example: 'これは百[ひゃく]です。',
    exampleRomaji: 'Kore wa hyaku desu.',
    exampleMeaning: 'This is hundred.'
  },
  {
    kanji: '病院',
    kana: 'びょういん',
    romaji: 'byouin',
    meaning: 'hospital',
    type: 'noun',
    example: 'これは病院[びょういん]です。',
    exampleRomaji: 'Kore wa byouin desu.',
    exampleMeaning: 'This is a hospital.'
  },
  {
    kanji: '病気',
    kana: 'びょうき',
    romaji: 'byouki',
    meaning: 'ill, sick',
    type: 'noun',
    example: 'これは病気[びょうき]です。',
    exampleRomaji: 'Kore wa byouki desu.',
    exampleMeaning: 'This is an ill, sick.'
  },
  {
    kanji: '平仮名',
    kana: 'ひらがな',
    romaji: 'hiragana',
    meaning: 'hiragana characters',
    type: 'noun',
    example: 'これは平仮名[ひらがな]です。',
    exampleRomaji: 'Kore wa hiragana desu.',
    exampleMeaning: 'This is a hiragana characters.'
  },
  {
    kanji: '昼',
    kana: 'ひる',
    romaji: 'hiru',
    meaning: 'noon',
    type: 'noun',
    example: '昼[ひる]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Hiru, nihongo o benkyou shimasu.',
    exampleMeaning: 'Noon, I study Japanese.'
  },
  {
    kanji: '昼ご飯',
    kana: 'ひるごはん',
    romaji: 'hirugohan',
    meaning: 'lunch',
    type: 'noun',
    example: 'これは昼ご飯[ひるごはん]です。',
    exampleRomaji: 'Kore wa hirugohan desu.',
    exampleMeaning: 'This is a lunch.'
  },
  {
    kanji: '広い',
    kana: 'ひろい',
    romaji: 'hiroi',
    meaning: 'wide, spacious',
    type: 'adjective',
    example: 'この部屋[へや]は広[ひろ]いです。',
    exampleRomaji: 'Kono heya wa hiroi desu.',
    exampleMeaning: 'This room is spacious.'
  },
  {
    kanji: 'フィルム',
    kana: 'フィルム',
    romaji: 'firumu',
    meaning: 'film',
    type: 'noun',
    example: 'これはフィルム[フィルム]です。',
    exampleRomaji: 'Kore wa firumu desu.',
    exampleMeaning: 'This is a film.'
  },
  {
    kanji: '封筒',
    kana: 'ふうとう',
    romaji: 'fuutou',
    meaning: 'envelope',
    type: 'noun',
    example: 'これは封筒[ふうとう]です。',
    exampleRomaji: 'Kore wa fuutou desu.',
    exampleMeaning: 'This is an envelope.'
  },
  {
    kanji: 'プール',
    kana: 'プール',
    romaji: 'puuru',
    meaning: 'pool',
    type: 'noun',
    example: 'これはプール[プール]です。',
    exampleRomaji: 'Kore wa puuru desu.',
    exampleMeaning: 'This is a pool.'
  },
  {
    kanji: 'フォーク',
    kana: 'フォーク',
    romaji: 'fooku',
    meaning: 'fork',
    type: 'noun',
    example: 'これはフォーク[フォーク]です。',
    exampleRomaji: 'Kore wa fooku desu.',
    exampleMeaning: 'This is a fork.'
  },
  {
    kanji: '吹く',
    kana: 'ふく',
    romaji: 'fuku',
    meaning: 'to blow (wind)',
    type: 'verb',
    example: '風[かぜ]が吹[ふ]きます。',
    exampleRomaji: 'Kaze ga fukimasu.',
    exampleMeaning: 'The wind blows.'
  },
  {
    kanji: '服',
    kana: 'ふく',
    romaji: 'fuku',
    meaning: 'clothes',
    type: 'noun',
    example: 'これは服[ふく]です。',
    exampleRomaji: 'Kore wa fuku desu.',
    exampleMeaning: 'This is clothes.'
  },
  {
    kanji: '二つ',
    kana: 'ふたつ',
    romaji: 'futatsu',
    meaning: 'two',
    type: 'noun',
    example: 'これは二[ふた]つです。',
    exampleRomaji: 'Kore wa futatsu desu.',
    exampleMeaning: 'This is two.'
  },
  {
    kanji: '豚肉',
    kana: 'ぶたにく',
    romaji: 'butaniku',
    meaning: 'pork',
    type: 'noun',
    example: 'これは豚肉[ぶたにく]です。',
    exampleRomaji: 'Kore wa butaniku desu.',
    exampleMeaning: 'This is a pork.'
  },
  {
    kanji: '二人',
    kana: 'ふたり',
    romaji: 'futari',
    meaning: 'two people',
    type: 'noun',
    example: 'これは二人[ふたり]です。',
    exampleRomaji: 'Kore wa futari desu.',
    exampleMeaning: 'This is two people.'
  },
  {
    kanji: '二日',
    kana: 'ふつか',
    romaji: 'futsuka',
    meaning: '2nd day of the month, 2 days',
    type: 'noun',
    example: '今日[きょう]は二日[ふつか]です。',
    exampleRomaji: 'Kyou wa futsuka desu.',
    exampleMeaning: 'Today is the 2nd day of the month, 2 days.'
  },
  {
    kanji: '太い',
    kana: 'ふとい',
    romaji: 'futoi',
    meaning: 'thick, fat',
    type: 'adjective',
    example: 'この木[き]は太[ふと]いです。',
    exampleRomaji: 'Kono ki wa futoi desu.',
    exampleMeaning: 'This tree is thick.'
  },
  {
    kanji: '降る',
    kana: 'ふる',
    romaji: 'furu',
    meaning: 'to fall (rain, snow)',
    type: 'verb',
    example: '雨[あめ]が降[ふ]ります。',
    exampleRomaji: 'Ame ga furimasu.',
    exampleMeaning: 'It rains.'
  },
  {
    kanji: '古い',
    kana: 'ふるい',
    romaji: 'furui',
    meaning: 'old',
    type: 'adjective',
    example: 'この家[いえ]は古[ふる]いです。',
    exampleRomaji: 'Kono ie wa furui desu.',
    exampleMeaning: 'This house is old.'
  },
  {
    kanji: 'お風呂',
    kana: 'おふろ',
    romaji: 'ofuro',
    meaning: 'bath',
    type: 'noun',
    example: 'これはお風呂[おふろ]です。',
    exampleRomaji: 'Kore wa ofuro desu.',
    exampleMeaning: 'This is a bath.'
  },
  {
    kanji: '〜分',
    kana: '〜ふん',
    romaji: '~fun',
    meaning: '~minutes',
    type: 'noun',
    example: '十分[じゅっぷん]待[ま]ってください。',
    exampleRomaji: 'Juppun matte kudasai.',
    exampleMeaning: 'Please wait ten minutes.'
  },
  {
    kanji: 'ページ',
    kana: 'ページ',
    romaji: 'peeji',
    meaning: 'page',
    type: 'noun',
    example: 'これはページ[ページ]です。',
    exampleRomaji: 'Kore wa peeji desu.',
    exampleMeaning: 'This is a page.'
  },
  {
    kanji: '下手',
    kana: 'へた',
    romaji: 'heta',
    meaning: 'not good at something',
    type: 'adjective',
    example: 'わたしは歌[うた]が下手[へた]です。',
    exampleRomaji: 'Watashi wa uta ga heta desu.',
    exampleMeaning: 'I am not good at singing.'
  },
  {
    kanji: 'ベッド',
    kana: 'ベッド',
    romaji: 'beddo',
    meaning: 'bed',
    type: 'noun',
    example: 'これはベッド[ベッド]です。',
    exampleRomaji: 'Kore wa beddo desu.',
    exampleMeaning: 'This is a bed.'
  },
  {
    kanji: '部屋',
    kana: 'へや',
    romaji: 'heya',
    meaning: 'room',
    type: 'noun',
    example: 'これは部屋[へや]です。',
    exampleRomaji: 'Kore wa heya desu.',
    exampleMeaning: 'This is a room.'
  },
  {
    kanji: '辺',
    kana: 'へん',
    romaji: 'hen',
    meaning: 'side, part, area',
    type: 'noun',
    example: 'これは辺[へん]です。',
    exampleRomaji: 'Kore wa hen desu.',
    exampleMeaning: 'This is a side, part, area.'
  },
  {
    kanji: 'ペン',
    kana: 'ぺん',
    romaji: 'pen',
    meaning: 'pen',
    type: 'noun',
    example: 'これはペン[ぺん]です。',
    exampleRomaji: 'Kore wa pen desu.',
    exampleMeaning: 'This is a pen.'
  },
  {
    kanji: '勉強',
    kana: 'べんきょう',
    romaji: 'benkyou',
    meaning: 'to study',
    type: 'verb',
    example: '日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Nihongo o benkyou shimasu.',
    exampleMeaning: 'I study Japanese.'
  },
  {
    kanji: '便利',
    kana: 'べんり',
    romaji: 'benri',
    meaning: 'convenient',
    type: 'adjective',
    example: 'このアプリは便利[べんり]です。',
    exampleRomaji: 'Kono apuri wa benri desu.',
    exampleMeaning: 'This app is convenient.'
  },
  {
    kanji: '方',
    kana: 'ほう',
    romaji: 'hou',
    meaning: '~より〜のほうが〜',
    type: 'noun',
    example: 'こちらのほうが安[やす]いです。',
    exampleRomaji: 'Kochira no hou ga yasui desu.',
    exampleMeaning: 'This one is cheaper.'
  },
  {
    kanji: '帽子',
    kana: 'ぼうし',
    romaji: 'boushi',
    meaning: 'hat',
    type: 'noun',
    example: 'これは帽子[ぼうし]です。',
    exampleRomaji: 'Kore wa boushi desu.',
    exampleMeaning: 'This is a hat.'
  },
  {
    kanji: 'ボールペン',
    kana: 'ボールペン',
    romaji: 'boorupen',
    meaning: 'ballpen',
    type: 'noun',
    example: 'これはボールペン[ボールペン]です。',
    exampleRomaji: 'Kore wa boorupen desu.',
    exampleMeaning: 'This is a ballpen.'
  },
  {
    kanji: '他',
    kana: 'ほか',
    romaji: 'hoka',
    meaning: 'another, other',
    type: 'noun',
    example: 'これは他[ほか]です。',
    exampleRomaji: 'Kore wa hoka desu.',
    exampleMeaning: 'This is an another, other.'
  },
  {
    kanji: 'ポケット',
    kana: 'ポケット',
    romaji: 'poketto',
    meaning: 'pocket',
    type: 'noun',
    example: 'これはポケット[ポケット]です。',
    exampleRomaji: 'Kore wa poketto desu.',
    exampleMeaning: 'This is a pocket.'
  },
  {
    kanji: '欲しい',
    kana: 'ほしい',
    romaji: 'hoshii',
    meaning: 'to want something',
    type: 'adjective',
    example: '新[あたら]しい靴[くつ]が欲[ほ]しいです。',
    exampleRomaji: 'Atarashii kutsu ga hoshii desu.',
    exampleMeaning: 'I want new shoes.'
  },
  {
    kanji: '細い',
    kana: 'ほそい',
    romaji: 'hosoi',
    meaning: 'thin, fine',
    type: 'adjective',
    example: 'この道[みち]は細[ほそ]いです。',
    exampleRomaji: 'Kono michi wa hosoi desu.',
    exampleMeaning: 'This road is narrow.'
  },
  {
    kanji: 'ボタン',
    kana: 'ボタン',
    romaji: 'botan',
    meaning: 'button',
    type: 'noun',
    example: 'これはボタン[ボタン]です。',
    exampleRomaji: 'Kore wa botan desu.',
    exampleMeaning: 'This is a button.'
  },
  {
    kanji: 'ホテル',
    kana: 'ホテル',
    romaji: 'hoteru',
    meaning: 'hotel',
    type: 'noun',
    example: 'これはホテル[ホテル]です。',
    exampleRomaji: 'Kore wa hoteru desu.',
    exampleMeaning: 'This is a hotel.'
  },
  {
    kanji: '本',
    kana: 'ほん',
    romaji: 'hon',
    meaning: 'book',
    type: 'noun',
    example: 'これは本[ほん]です。',
    exampleRomaji: 'Kore wa hon desu.',
    exampleMeaning: 'This is a book.'
  },
  {
    kanji: '〜本',
    kana: '~ほん',
    romaji: '~hon',
    meaning: 'counter for long objects',
    type: 'noun',
    example: 'えんぴつを三本[さんぼん]買[か]います。',
    exampleRomaji: 'Enpitsu o san bon kaimasu.',
    exampleMeaning: 'I buy three pencils.'
  },
  {
    kanji: '本棚',
    kana: 'ほんだな',
    romaji: 'hondana',
    meaning: 'bookshelf',
    type: 'noun',
    example: 'これは本棚[ほんだな]です。',
    exampleRomaji: 'Kore wa hondana desu.',
    exampleMeaning: 'This is a bookshelf.'
  },
  {
    kanji: '本当に',
    kana: 'ほんとうに',
    romaji: 'hontouni',
    meaning: 'really',
    type: 'adverb',
    example: 'この映画[えいが]は本当[ほんとう]に面白[おもしろ]いです。',
    exampleRomaji: 'Kono eiga wa hontou ni omoshiroi desu.',
    exampleMeaning: 'This movie is really interesting.'
  },
  {
    kanji: '〜枚',
    kana: '〜まい',
    romaji: '~mai',
    meaning: 'counter for thin objects',
    type: 'noun',
    example: '紙[かみ]を三枚[さんまい]ください。',
    exampleRomaji: 'Kami o san mai kudasai.',
    exampleMeaning: 'Please give me three sheets of paper.'
  },
  {
    kanji: '毎朝',
    kana: 'まいあさ',
    romaji: 'maiasa',
    meaning: 'every morning',
    type: 'noun',
    example: '毎朝[まいあさ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Maiasa, nihongo o benkyou shimasu.',
    exampleMeaning: 'Every morning, I study Japanese.'
  },
  {
    kanji: '毎月',
    kana: 'まいつき/まいげつ',
    romaji: 'maitsuki/maigetsu',
    meaning: 'every month',
    type: 'noun',
    example: '毎月[まいつき]、本[ほん]を買[か]います。',
    exampleRomaji: 'Maitsuki, hon o kaimasu.',
    exampleMeaning: 'I buy a book every month.'
  },
  {
    kanji: '毎週',
    kana: 'まいしゅう',
    romaji: 'maishuu',
    meaning: 'every week',
    type: 'noun',
    example: '毎週[まいしゅう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Maishuu, nihongo o benkyou shimasu.',
    exampleMeaning: 'Every week, I study Japanese.'
  },
  {
    kanji: '毎日',
    kana: 'まいにち',
    romaji: 'mainichi',
    meaning: 'every day',
    type: 'noun',
    example: '毎日[まいにち]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Mainichi, nihongo o benkyou shimasu.',
    exampleMeaning: 'Every day, I study Japanese.'
  },
  {
    kanji: '毎年',
    kana: 'まいとし/まいねん',
    romaji: 'maitoshi/mainen',
    meaning: 'every year',
    type: 'noun',
    example: '毎年[まいとし]、旅行[りょこう]します。',
    exampleRomaji: 'Maitoshi, ryokou shimasu.',
    exampleMeaning: 'I travel every year.'
  },
  {
    kanji: '毎晩',
    kana: 'まいばん',
    romaji: 'maiban',
    meaning: 'every evening',
    type: 'noun',
    example: '毎晩[まいばん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Maiban, nihongo o benkyou shimasu.',
    exampleMeaning: 'Every evening, I study Japanese.'
  },
  {
    kanji: '前',
    kana: 'まえ',
    romaji: 'mae',
    meaning: 'front',
    type: 'noun',
    example: 'これは前[まえ]です。',
    exampleRomaji: 'Kore wa mae desu.',
    exampleMeaning: 'This is a front.'
  },
  {
    kanji: '〜前',
    kana: '〜まえ',
    romaji: '~mae',
    meaning: 'before, in front of',
    type: 'noun',
    example: '駅[えき]の前[まえ]です。',
    exampleRomaji: 'Eki no mae desu.',
    exampleMeaning: 'It is in front of the station.'
  },
  {
    kanji: '曲がる',
    kana: 'まがる',
    romaji: 'magaru',
    meaning: 'to turn',
    type: 'verb',
    example: 'そこを右[みぎ]に曲[ま]がります。',
    exampleRomaji: 'Soko o migi ni magarimasu.',
    exampleMeaning: 'I turn right there.'
  },
  {
    kanji: '不味い',
    kana: 'まずい',
    romaji: 'mazui',
    meaning: 'bad tasting',
    type: 'adjective',
    example: 'この料理[りょうり]はまずいです。',
    exampleRomaji: 'Kono ryouri wa mazui desu.',
    exampleMeaning: 'This dish tastes bad.'
  },
  {
    kanji: 'また',
    kana: 'また',
    romaji: 'mata',
    meaning: 'also, again',
    type: 'noun',
    example: 'また明日[あした]、来[き]てください。',
    exampleRomaji: 'Mata ashita, kite kudasai.',
    exampleMeaning: 'Please come again tomorrow.'
  },
  {
    kanji: 'まだ',
    kana: 'まだ',
    romaji: 'mada',
    meaning: 'not yet',
    type: 'adverb',
    example: '宿題[しゅくだい]はまだ終[お]わりません。',
    exampleRomaji: 'Shukudai wa mada owarimasen.',
    exampleMeaning: 'My homework is not finished yet.'
  },
  {
    kanji: '町',
    kana: 'まち',
    romaji: 'machi',
    meaning: 'city, town',
    type: 'noun',
    example: 'これは町[まち]です。',
    exampleRomaji: 'Kore wa machi desu.',
    exampleMeaning: 'This is a city, town.'
  },
  {
    kanji: '待つ',
    kana: 'まつ',
    romaji: 'matsu',
    meaning: 'to wait',
    type: 'verb',
    example: '友達[ともだち]を待[ま]ちます。',
    exampleRomaji: 'Tomodachi o machimasu.',
    exampleMeaning: 'I wait for my friend.'
  },
  {
    kanji: '真直ぐに',
    kana: 'まっすぐに',
    romaji: 'massugu ni',
    meaning: 'straight ahead',
    type: 'noun',
    example: 'これは真直[まっす]ぐにです。',
    exampleRomaji: 'Kore wa massugu ni desu.',
    exampleMeaning: 'This is a straight ahead.'
  },
  {
    kanji: 'マッチ',
    kana: 'マッチ',
    romaji: 'machi',
    meaning: 'matches',
    type: 'noun',
    example: 'これはマッチ[マッチ]です。',
    exampleRomaji: 'Kore wa machi desu.',
    exampleMeaning: 'This is a matches.'
  },
  {
    kanji: '窓',
    kana: 'まど',
    romaji: 'mado',
    meaning: 'window',
    type: 'noun',
    example: 'これは窓[まど]です。',
    exampleRomaji: 'Kore wa mado desu.',
    exampleMeaning: 'This is a window.'
  },
  {
    kanji: '丸い',
    kana: 'まるい',
    romaji: 'marui',
    meaning: 'round',
    type: 'adjective',
    example: 'このテーブルは丸[まる]いです。',
    exampleRomaji: 'Kono teeburu wa marui desu.',
    exampleMeaning: 'This table is round.'
  },
  {
    kanji: '万',
    kana: 'まん',
    romaji: 'man',
    meaning: 'ten thousand',
    type: 'noun',
    example: 'これは万[まん]です。',
    exampleRomaji: 'Kore wa man desu.',
    exampleMeaning: 'This is ten thousand.'
  },
  {
    kanji: '万年筆',
    kana: 'まんねんひつ',
    romaji: 'mannenhitsu',
    meaning: 'fountain pen',
    type: 'noun',
    example: 'これは万年筆[まんねんひつ]です。',
    exampleRomaji: 'Kore wa mannenhitsu desu.',
    exampleMeaning: 'This is a fountain pen.'
  },
  {
    kanji: '磨く',
    kana: 'みがく',
    romaji: 'migaku',
    meaning: 'to polish, to brush',
    type: 'verb',
    example: '歯[は]を磨[みが]きます。',
    exampleRomaji: 'Ha o migakimasu.',
    exampleMeaning: 'I brush my teeth.'
  },
  {
    kanji: '右',
    kana: 'みぎ',
    romaji: 'migi',
    meaning: 'right',
    type: 'noun',
    example: 'これは右[みぎ]です。',
    exampleRomaji: 'Kore wa migi desu.',
    exampleMeaning: 'This is a right.'
  },
  {
    kanji: '短い',
    kana: 'みじかい',
    romaji: 'mijikai',
    meaning: 'short',
    type: 'adjective',
    example: 'この鉛筆[えんぴつ]は短[みじか]いです。',
    exampleRomaji: 'Kono enpitsu wa mijikai desu.',
    exampleMeaning: 'This pencil is short.'
  },
  {
    kanji: 'お水',
    kana: 'おみず',
    romaji: 'omizu',
    meaning: 'water',
    type: 'noun',
    example: 'これはお水[おみず]です。',
    exampleRomaji: 'Kore wa omizu desu.',
    exampleMeaning: 'This is water.'
  },
  {
    kanji: '店',
    kana: 'みせ',
    romaji: 'mise',
    meaning: 'shop',
    type: 'noun',
    example: 'これは店[みせ]です。',
    exampleRomaji: 'Kore wa mise desu.',
    exampleMeaning: 'This is a shop.'
  },
  {
    kanji: '見せる',
    kana: 'みせる',
    romaji: 'miseru',
    meaning: 'to look, to watch',
    type: 'verb',
    example: '友達[ともだち]に写真[しゃしん]を見[み]せます。',
    exampleRomaji: 'Tomodachi ni shashin o misemasu.',
    exampleMeaning: 'I show my friend a photo.'
  },
  {
    kanji: '道',
    kana: 'みち',
    romaji: 'michi',
    meaning: 'road',
    type: 'noun',
    example: 'これは道[みち]です。',
    exampleRomaji: 'Kore wa michi desu.',
    exampleMeaning: 'This is a road.'
  },
  {
    kanji: '三日',
    kana: 'みっか',
    romaji: 'mikka',
    meaning: '3rd day of a month, 3 days',
    type: 'noun',
    example: '今日[きょう]は三日[みっか]です。',
    exampleRomaji: 'Kyou wa mikka desu.',
    exampleMeaning: 'Today is the 3rd day of a month, 3 days.'
  },
  {
    kanji: '三つ',
    kana: 'みっつ',
    romaji: 'mittsu',
    meaning: 'three',
    type: 'noun',
    example: 'これは三[みっ]つです。',
    exampleRomaji: 'Kore wa mittsu desu.',
    exampleMeaning: 'This is three.'
  },
  {
    kanji: '皆さん',
    kana: 'みなさん',
    romaji: 'minsan',
    meaning: 'everyone',
    type: 'noun',
    example: 'これは皆[みな]さんです。',
    exampleRomaji: 'Kore wa minsan desu.',
    exampleMeaning: 'This is an everyone.'
  },
  {
    kanji: '南',
    kana: 'みなみ',
    romaji: 'minami',
    meaning: 'south',
    type: 'noun',
    example: 'これは南[みなみ]です。',
    exampleRomaji: 'Kore wa minami desu.',
    exampleMeaning: 'This is a south.'
  },
  {
    kanji: '耳',
    kana: 'みみ',
    romaji: 'mimi',
    meaning: 'ear',
    type: 'noun',
    example: 'これは耳[みみ]です。',
    exampleRomaji: 'Kore wa mimi desu.',
    exampleMeaning: 'This is an ear.'
  },
  {
    kanji: '見る',
    kana: 'みる',
    romaji: 'miru',
    meaning: 'to see, to watch',
    type: 'verb',
    example: 'テレビを見[み]ます。',
    exampleRomaji: 'Terebi o mimasu.',
    exampleMeaning: 'I watch TV.'
  },
  {
    kanji: '皆',
    kana: 'みんな',
    romaji: 'minna',
    meaning: 'all, everyone',
    type: 'noun',
    example: 'これは皆[みんな]です。',
    exampleRomaji: 'Kore wa minna desu.',
    exampleMeaning: 'This is an all, everyone.'
  },
  {
    kanji: '六日',
    kana: 'むいか',
    romaji: 'muika',
    meaning: 'the 6th day of a month, 6 days',
    type: 'noun',
    example: '今日[きょう]は六日[むいか]です。',
    exampleRomaji: 'Kyou wa muika desu.',
    exampleMeaning: 'Today is the the 6th day of a month, 6 days.'
  },
  {
    kanji: '向こう',
    kana: 'むこう',
    romaji: 'mukou',
    meaning: 'over there',
    type: 'noun',
    example: 'これは向[む]こうです。',
    exampleRomaji: 'Kore wa mukou desu.',
    exampleMeaning: 'This is an over there.'
  },
  {
    kanji: '難しい',
    kana: 'むずかしい',
    romaji: 'muzukashii',
    meaning: 'difficult',
    type: 'adjective',
    example: 'この問題[もんだい]は難[むずか]しいです。',
    exampleRomaji: 'Kono mondai wa muzukashii desu.',
    exampleMeaning: 'This problem is difficult.'
  },
  {
    kanji: '六つ',
    kana: 'むっつ',
    romaji: 'muttsu',
    meaning: 'six',
    type: 'noun',
    example: 'これは六[むっ]つです。',
    exampleRomaji: 'Kore wa muttsu desu.',
    exampleMeaning: 'This is six.'
  },
  {
    kanji: '目',
    kana: 'め',
    romaji: 'me',
    meaning: 'eye',
    type: 'noun',
    example: 'これは目[め]です。',
    exampleRomaji: 'Kore wa me desu.',
    exampleMeaning: 'This is an eye.'
  },
  {
    kanji: 'メートル',
    kana: 'メートル',
    romaji: 'meetoru',
    meaning: 'meter',
    type: 'noun',
    example: 'これはメートル[メートル]です。',
    exampleRomaji: 'Kore wa meetoru desu.',
    exampleMeaning: 'This is a meter.'
  },
  {
    kanji: 'めがね',
    kana: 'めがね',
    romaji: 'megane',
    meaning: 'a pair of glasses',
    type: 'noun',
    example: 'これはめがねです。',
    exampleRomaji: 'Kore wa megane desu.',
    exampleMeaning: 'This is a pair of glasses.'
  },
  {
    kanji: 'もう',
    kana: 'もう',
    romaji: 'mou',
    meaning: 'already, yet',
    type: 'adverb',
    example: 'もう食[た]べました。',
    exampleRomaji: 'Mou tabemashita.',
    exampleMeaning: 'I have already eaten.'
  },
  {
    kanji: 'もう',
    kana: 'もう',
    romaji: 'mou',
    meaning: '(one) more',
    type: 'adverb',
    example: 'もう一[ひと]つください。',
    exampleRomaji: 'Mou hitotsu kudasai.',
    exampleMeaning: 'One more, please.'
  },
  {
    kanji: '木曜日',
    kana: 'もくようび',
    romaji: 'mokuyoubi',
    meaning: 'Thursday',
    type: 'noun',
    example: '木曜日[もくようび]に学校[がっこう]へ行[い]きます。',
    exampleRomaji: 'Mokuyoubi ni gakkou e ikimasu.',
    exampleMeaning: 'I go to school on Thursday.'
  },
  {
    kanji: 'もしもし',
    kana: 'もしもし',
    romaji: 'moshimoshi',
    meaning: 'hello on the phone',
    type: 'noun',
    example: 'もしもし、田中[たなか]です。',
    exampleRomaji: 'Moshi moshi, Tanaka desu.',
    exampleMeaning: 'Hello, this is Tanaka.'
  },
  {
    kanji: '勿論',
    kana: 'もちろん',
    romaji: 'mochiron',
    meaning: 'of course',
    type: 'adverb',
    example: 'もちろん行[い]きます。',
    exampleRomaji: 'Mochiron ikimasu.',
    exampleMeaning: 'Of course I will go.'
  },
  {
    kanji: '持つ',
    kana: 'もつ',
    romaji: 'motsu',
    meaning: 'to have, to own',
    type: 'verb',
    example: 'かばんを持[も]ちます。',
    exampleRomaji: 'Kaban o mochimasu.',
    exampleMeaning: 'I hold a bag.'
  },
  {
    kanji: 'もっと',
    kana: 'もっと',
    romaji: 'motto',
    meaning: 'more',
    type: 'noun',
    example: 'これはもっとです。',
    exampleRomaji: 'Kore wa motto desu.',
    exampleMeaning: 'This is a more.'
  },
  {
    kanji: '物',
    kana: 'もの',
    romaji: 'mono',
    meaning: 'thing',
    type: 'noun',
    example: 'これは物[もの]です。',
    exampleRomaji: 'Kore wa mono desu.',
    exampleMeaning: 'This is a thing.'
  },
  {
    kanji: '門',
    kana: 'もん',
    romaji: 'mon',
    meaning: 'gate',
    type: 'noun',
    example: 'これは門[もん]です。',
    exampleRomaji: 'Kore wa mon desu.',
    exampleMeaning: 'This is a gate.'
  },
  {
    kanji: '問題',
    kana: 'もんだい',
    romaji: 'mondai',
    meaning: 'problem, question',
    type: 'noun',
    example: 'これは問題[もんだい]です。',
    exampleRomaji: 'Kore wa mondai desu.',
    exampleMeaning: 'This is a problem, question.'
  },
  {
    kanji: '〜屋',
    kana: '〜や',
    romaji: '~ya',
    meaning: 'shop. store',
    type: 'noun',
    example: 'パン屋[や]でパンを買[か]います。',
    exampleRomaji: 'Panya de pan o kaimasu.',
    exampleMeaning: 'I buy bread at the bakery.'
  },
  {
    kanji: '八百屋',
    kana: 'やおや',
    romaji: 'yaoya',
    meaning: 'vegetable shop',
    type: 'noun',
    example: 'これは八百屋[やおや]です。',
    exampleRomaji: 'Kore wa yaoya desu.',
    exampleMeaning: 'This is a vegetable shop.'
  },
  {
    kanji: '野菜',
    kana: 'やさい',
    romaji: 'yasai',
    meaning: 'vegetable',
    type: 'noun',
    example: 'これは野菜[やさい]です。',
    exampleRomaji: 'Kore wa yasai desu.',
    exampleMeaning: 'This is a vegetable.'
  },
  {
    kanji: '優しい',
    kana: 'やさしい',
    romaji: 'yasashii',
    meaning: 'gentle',
    type: 'adjective',
    example: '田中[たなか]さんは優[やさ]しいです。',
    exampleRomaji: 'Tanaka-san wa yasashii desu.',
    exampleMeaning: 'Mr. Tanaka is kind.'
  },
  {
    kanji: '安い',
    kana: 'やすい',
    romaji: 'yasui',
    meaning: 'cheap, inexpensive',
    type: 'adjective',
    example: 'この店[みせ]は安[やす]いです。',
    exampleRomaji: 'Kono mise wa yasui desu.',
    exampleMeaning: 'This shop is cheap.'
  },
  {
    kanji: '休み',
    kana: 'やすみ',
    romaji: 'yasumi',
    meaning: 'holiday, vacation',
    type: 'noun',
    example: '来週[らいしゅう]は休[やす]みです。',
    exampleRomaji: 'Raishuu wa yasumi desu.',
    exampleMeaning: 'Next week is a holiday.'
  },
  {
    kanji: '休む',
    kana: 'やすむ',
    romaji: 'yasumu',
    meaning: 'to rest',
    type: 'verb',
    example: '今日[きょう]は家[いえ]で休[やす]みます。',
    exampleRomaji: 'Kyou wa ie de yasumimasu.',
    exampleMeaning: 'Today I rest at home.'
  },
  {
    kanji: '八つ',
    kana: 'やっつ',
    romaji: 'yattsu',
    meaning: 'eight',
    type: 'noun',
    example: 'これは八[やっ]つです。',
    exampleRomaji: 'Kore wa yattsu desu.',
    exampleMeaning: 'This is eight.'
  },
  {
    kanji: '山',
    kana: 'やま',
    romaji: 'yama',
    meaning: 'mountain',
    type: 'noun',
    example: 'これは山[やま]です。',
    exampleRomaji: 'Kore wa yama desu.',
    exampleMeaning: 'This is a mountain.'
  },
  {
    kanji: 'やる',
    kana: 'やる',
    romaji: 'yaru',
    meaning: 'to do',
    type: 'verb',
    example: '宿題[しゅくだい]をやります。',
    exampleRomaji: 'Shukudai o yarimasu.',
    exampleMeaning: 'I do my homework.'
  },
  {
    kanji: '八日',
    kana: 'ようか',
    romaji: 'youka',
    meaning: '8th day of the month, 8 days',
    type: 'noun',
    example: '今日[きょう]は八日[ようか]です。',
    exampleRomaji: 'Kyou wa youka desu.',
    exampleMeaning: 'Today is the 8th day of the month, 8 days.'
  },
  {
    kanji: '洋服',
    kana: 'ようふく',
    romaji: 'youfuku',
    meaning: 'western style clothing',
    type: 'noun',
    example: 'これは洋服[ようふく]です。',
    exampleRomaji: 'Kore wa youfuku desu.',
    exampleMeaning: 'This is a western style clothing.'
  },
  {
    kanji: 'よく',
    kana: 'よく',
    romaji: 'yoku',
    meaning: 'often',
    type: 'adverb',
    example: 'よく公園[こうえん]で遊[あそ]びます。',
    exampleRomaji: 'Yoku kouen de asobimasu.',
    exampleMeaning: 'I often play in the park.'
  },
  {
    kanji: '横',
    kana: 'よこ',
    romaji: 'yoko',
    meaning: 'horizontal',
    type: 'noun',
    example: 'これは横[よこ]です。',
    exampleRomaji: 'Kore wa yoko desu.',
    exampleMeaning: 'This is a horizontal.'
  },
  {
    kanji: '四日',
    kana: 'よっか',
    romaji: 'yokka',
    meaning: '4th day of the month, 4 days',
    type: 'noun',
    example: '今日[きょう]は四日[よっか]です。',
    exampleRomaji: 'Kyou wa yokka desu.',
    exampleMeaning: 'Today is the 4th day of the month, 4 days.'
  },
  {
    kanji: '四つ',
    kana: 'よっつ',
    romaji: 'yottsu',
    meaning: 'four',
    type: 'noun',
    example: 'これは四[よっ]つです。',
    exampleRomaji: 'Kore wa yottsu desu.',
    exampleMeaning: 'This is four.'
  },
  {
    kanji: '呼ぶ',
    kana: 'よぶ',
    romaji: 'yobu',
    meaning: 'to call',
    type: 'verb',
    example: '友達[ともだち]の名前[なまえ]を呼[よ]びます。',
    exampleRomaji: 'Tomodachi no namae o yobimasu.',
    exampleMeaning: 'I call my friend\'s name.'
  },
  {
    kanji: '読む',
    kana: 'よむ',
    romaji: 'yomu',
    meaning: 'to read',
    type: 'verb',
    example: '本[ほん]を読[よ]みます。',
    exampleRomaji: 'Hon o yomimasu.',
    exampleMeaning: 'I read a book.'
  },
  {
    kanji: '夜',
    kana: 'よる',
    romaji: 'yoru',
    meaning: 'night',
    type: 'noun',
    example: '夜[よる]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Yoru, nihongo o benkyou shimasu.',
    exampleMeaning: 'Night, I study Japanese.'
  },
  {
    kanji: '来月',
    kana: 'らいげつ',
    romaji: 'raigetsu',
    meaning: 'next month',
    type: 'noun',
    example: '来月[らいげつ]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Raigetsu, nihongo o benkyou shimasu.',
    exampleMeaning: 'Next month, I study Japanese.'
  },
  {
    kanji: '来週',
    kana: 'らいしゅう',
    romaji: 'raishuu',
    meaning: 'next week',
    type: 'noun',
    example: '来週[らいしゅう]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Raishuu, nihongo o benkyou shimasu.',
    exampleMeaning: 'Next week, I study Japanese.'
  },
  {
    kanji: '来年',
    kana: 'らいねん',
    romaji: 'rainen',
    meaning: 'next year',
    type: 'noun',
    example: '来年[らいねん]、日本語[にほんご]を勉強[べんきょう]します。',
    exampleRomaji: 'Rainen, nihongo o benkyou shimasu.',
    exampleMeaning: 'Next year, I study Japanese.'
  },
  {
    kanji: 'ラジオ',
    kana: 'ラジオ',
    romaji: 'rajio',
    meaning: 'radio',
    type: 'noun',
    example: 'これはラジオ[ラジオ]です。',
    exampleRomaji: 'Kore wa rajio desu.',
    exampleMeaning: 'This is a radio.'
  },
  {
    kanji: '立派',
    kana: 'りっぱ',
    romaji: 'rippa',
    meaning: 'splendid',
    type: 'noun',
    example: 'これは立派[りっぱ]です。',
    exampleRomaji: 'Kore wa rippa desu.',
    exampleMeaning: 'This is a splendid.'
  },
  {
    kanji: '留学生',
    kana: 'りゅうがくせい',
    romaji: 'ryuugakusei',
    meaning: 'foreign student',
    type: 'noun',
    example: 'これは留学生[りゅうがくせい]です。',
    exampleRomaji: 'Kore wa ryuugakusei desu.',
    exampleMeaning: 'This is a foreign student.'
  },
  {
    kanji: '両親',
    kana: 'りょうしん',
    romaji: 'ryoushin',
    meaning: 'parents',
    type: 'noun',
    example: 'これは両親[りょうしん]です。',
    exampleRomaji: 'Kore wa ryoushin desu.',
    exampleMeaning: 'This is a parents.'
  },
  {
    kanji: '料理',
    kana: 'りょうり',
    romaji: 'ryouri',
    meaning: 'cooking',
    type: 'noun',
    example: 'これは料理[りょうり]です。',
    exampleRomaji: 'Kore wa ryouri desu.',
    exampleMeaning: 'This is a cooking.'
  },
  {
    kanji: '旅行',
    kana: 'りょこう',
    romaji: 'ryokou',
    meaning: 'travel',
    type: 'noun',
    example: 'これは旅行[りょこう]です。',
    exampleRomaji: 'Kore wa ryokou desu.',
    exampleMeaning: 'This is a travel.'
  },
  {
    kanji: 'れい',
    kana: 'れい',
    romaji: 'rei',
    meaning: 'zero',
    type: 'noun',
    example: 'これはれいです。',
    exampleRomaji: 'Kore wa rei desu.',
    exampleMeaning: 'This is zero.'
  },
  {
    kanji: '冷蔵庫',
    kana: 'れいぞうこ',
    romaji: 'reizouko',
    meaning: 'refrigerator',
    type: 'noun',
    example: 'これは冷蔵庫[れいぞうこ]です。',
    exampleRomaji: 'Kore wa reizouko desu.',
    exampleMeaning: 'This is a refrigerator.'
  },
  {
    kanji: 'レコード',
    kana: 'レコード',
    romaji: 'rekoodo',
    meaning: 'record',
    type: 'noun',
    example: 'これはレコード[レコード]です。',
    exampleRomaji: 'Kore wa rekoodo desu.',
    exampleMeaning: 'This is a record.'
  },
  {
    kanji: 'レストラン',
    kana: 'レストラン',
    romaji: 'resutoran',
    meaning: 'restaurant',
    type: 'noun',
    example: 'これはレストラン[レストラン]です。',
    exampleRomaji: 'Kore wa resutoran desu.',
    exampleMeaning: 'This is a restaurant.'
  },
  {
    kanji: '練習',
    kana: 'れんしゅう',
    romaji: 'renshuu',
    meaning: 'practice',
    type: 'noun',
    example: 'これは練習[れんしゅう]です。',
    exampleRomaji: 'Kore wa renshuu desu.',
    exampleMeaning: 'This is a practice.'
  },
  {
    kanji: '六',
    kana: 'ろく',
    romaji: 'roku',
    meaning: 'six',
    type: 'noun',
    example: 'これは六[ろく]です。',
    exampleRomaji: 'Kore wa roku desu.',
    exampleMeaning: 'This is six.'
  },
  {
    kanji: 'ワイシャツ',
    kana: 'ワイシャツ',
    romaji: 'waishatsu',
    meaning: 'white shirt',
    type: 'noun',
    example: 'これはワイシャツ[ワイシャツ]です。',
    exampleRomaji: 'Kore wa waishatsu desu.',
    exampleMeaning: 'This is a white shirt.'
  },
  {
    kanji: '若い',
    kana: 'わかい',
    romaji: 'wakai',
    meaning: 'young',
    type: 'adjective',
    example: 'あの人[ひと]は若[わか]いです。',
    exampleRomaji: 'Ano hito wa wakai desu.',
    exampleMeaning: 'That person is young.'
  },
  {
    kanji: '分かる',
    kana: 'わかる',
    romaji: 'wakaru',
    meaning: 'to know, to understand',
    type: 'verb',
    example: '日本語[にほんご]がわかります。',
    exampleRomaji: 'Nihongo ga wakarimasu.',
    exampleMeaning: 'I understand Japanese.'
  },
  {
    kanji: '忘れる',
    kana: 'わすれる',
    romaji: 'wasureru',
    meaning: 'to forget',
    type: 'verb',
    example: '傘[かさ]を忘[わす]れます。',
    exampleRomaji: 'Kasa o wasuremasu.',
    exampleMeaning: 'I forget my umbrella.'
  },
  {
    kanji: '私',
    kana: 'わたし',
    romaji: 'watashi',
    meaning: 'me, I',
    type: 'noun',
    example: 'わたしは学生[がくせい]です。',
    exampleRomaji: 'Watashi wa gakusei desu.',
    exampleMeaning: 'I am a student.'
  },
  {
    kanji: '渡す',
    kana: 'わたす',
    romaji: 'watasu',
    meaning: 'to hand over',
    type: 'verb',
    example: '友達[ともだち]にペンを渡[わた]します。',
    exampleRomaji: 'Tomodachi ni pen o watashimasu.',
    exampleMeaning: 'I hand a pen to my friend.'
  },
  {
    kanji: '渡る',
    kana: 'わたる',
    romaji: 'wataru',
    meaning: 'to cross',
    type: 'verb',
    example: '橋[はし]を渡[わた]ります。',
    exampleRomaji: 'Hashi o watarimasu.',
    exampleMeaning: 'I cross the bridge.'
  },
  {
    kanji: '悪い',
    kana: 'わるい',
    romaji: 'warui',
    meaning: 'bad',
    type: 'adjective',
    example: '天気[てんき]が悪[わる]いです。',
    exampleRomaji: 'Tenki ga warui desu.',
    exampleMeaning: 'The weather is bad.'
  },
];

module.exports = n5Vocab;