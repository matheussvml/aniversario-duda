// =====================================================
//  PREENCHA AS RESPOSTAS DO QUIZ ANTES DE MOSTRAR
//  Substitua cada valor entre aspas pelo correto.
// =====================================================
const QUIZ_CONFIG = {
  songName:          "Rubel — Quando Bate Aquela Saudade ",       // ex: "Tudo Que Você Quiser - Lucas e Orelha"
  firstMessage:      "Pra começar 2026 no shape",  // ex: "Oi, vi que você gosta de..."
  firstRestaurant:   "Joá Ristobar",         // ex: "Outback do Shopping"
  firstToSayILoveYou:"Ela",                          // "EU" ou "ELA"
  firstMovie:        "O drama",      // ex: "Morbius"
  sadSound:          "ããii",       // ex: "aquele 'hmm' baixinho"
};
// =====================================================

// ── DATA ──

const timelineData = [
  { date:"18 de Janeiro de 2026", emoji:"💋", title:"Nosso Primeiro Beijo",
    desc:"O início de tudo. Esse dia mudou tudo.",
    photos:["20260118_172913.jpg","20260118_173125.jpg","20260118_173930.jpg","20260118_173933.jpg"] },

  { date:"24 de Janeiro de 2026", emoji:"🌹", title:"O Primeiro Pedido de Namoro",
    desc:"Sem foto, mas guardado pra sempre aqui dentro.",
    photos:[] },

  { date:"25 de Janeiro de 2026", emoji:"✨", title:"Nosso Primeiro Encontro",
    desc:"",
    photos:["20260125_220241.jpg","20260125_220244.jpg","IMG-20260126-WA0102.jpeg"] },

  { date:"31 de Janeiro de 2026", emoji:"🖱️", title:"O Dia do Celular com Mouse",
    desc:"Primeiro dia que você usou o celular com mouse.",
    photos:["20260131_200141.jpg","IMG-20260131-WA0076.jpg"] },

  { date:"01 de Fevereiro de 2026", emoji:"😄", title:"Conheci o Grupo Caloteiros",
    desc:"Primeiro dia que conheci o grupo caloteiros.",
    photos:["IMG-20260201-WA0028.jpg","IMG-20260201-WA0033.jpg"] },

  { date:"02 de Fevereiro de 2026", emoji:"📸", title:"Nosso Primeiro Post Juntos",
    desc:"",
    photos:["IMG-20260202-WA0081.jpg"] },

  { date:"07 de Fevereiro de 2026", emoji:"💍", title:"O Pedido de Namoro Oficial",
    desc:"O dia em que ficou oficial. ❤️",
    photos:["20260207_231528.jpg","20260207_232854.jpg","20260207_232859.jpg",
            "20260207_232902.jpg","20260207_233033.jpg","20260207_233036.jpg",
            "IMG-20260208-WA0120.jpeg","20260208_200840.jpg","20260208_200847.jpg"] },

  { date:"10 de Fevereiro de 2026", emoji:"💕", title:"Um Momentinho Especial",
    desc:"",
    photos:["IMG-20260210-WA0067.jpg","IMG-20260210-WA0068.jpg"] },

  { date:"14 de Fevereiro de 2026", emoji:"🎂", title:"Primeira Vez em Cascavel + Bolo da Tia Isete",
    desc:"Primeira vez que fui pra Cascavel e te ajudei a fazer o bolo da tia Isete.",
    photos:["20260213_195853.jpg","20260213_195859.jpg","IMG-20260213-WA0059.jpeg","IMG-20260213-WA0061.jpeg"] },

  { date:"15 de Fevereiro de 2026", emoji:"🎵", title:"Nosso Primeiro Show Juntos",
    desc:"",
    photos:["VID_20260215_221607_393.mp4","IMG-20260216-WA0012.jpeg","20260216_015003(1).jpg",
            "20260216_022223.jpg","20260216_022229.jpg","20260216_182911.jpg",
            "IMG-20260216-WA0089.jpg","IMG-20260216-WA0090.jpg","IMG-20260216-WA0091(1).jpg"] },

  { date:"17 de Fevereiro de 2026", emoji:"💃", title:"Dia que a Gente Viu É o Tchan",
    desc:"",
    photos:["IMG-20260217-WA0018.jpeg"] },

  { date:"05 de Março de 2026", emoji:"👥", title:"Tu Conheceu Meu Outro Grupo de Amigos",
    desc:"",
    photos:["IMG-20260305-WA0010.jpg"] },

  { date:"06 de Março de 2026", emoji:"🧙", title:"Hogwarts Legacy pela Primeira Vez",
    desc:"Primeiro dia que você jogou Hogwarts Legacy na minha casa.",
    photos:["20260306_235747.jpg"] },

  { date:"07 de Março de 2026", emoji:"🎉", title:"Nosso Primeiro Mês de Namoro",
    desc:"",
    photos:["20260307_125627.jpg","20260307_180244.jpg"] },

  { date:"08 de Março de 2026", emoji:"🐾", title:"Uma das Últimas Vezes com o Apzinho",
    desc:"Uma das últimas vezes que vimos o apzinho juntos.",
    photos:["20260308_222015.jpg","20260308_222017.jpg"] },

  { date:"14 de Março de 2026", emoji:"🌙", title:"Dormindo na Tua Casa",
    desc:"",
    photos:["20260314_234627.jpg","20260314_234636.jpg","20260314_234640.jpg",
            "20260314_234642.jpg","20260314_234645.jpg"] },

  { date:"17 de Março de 2026", emoji:"🎂", title:"Meu Primeiro Aniversário Juntos",
    desc:"Comemoramos meu aniversário juntos pela primeira vez.",
    photos:["IMG-20260317-WA0142.jpg","IMG-20260317-WA0160.jpg","IMG-20260317-WA0162.jpg"] },

  { date:"20 de Março de 2026", emoji:"⚔️", title:"Clash of Clans na Minha Conta",
    desc:"Primeira vez que você jogou Clash of Clans na minha conta.",
    photos:["IMG-20260320-WA0076.jpg"] },

  { date:"23 de Março de 2026", emoji:"👨‍👩‍👧‍👦", title:"Conheceu Minha Família",
    desc:"Conheceu minha família quase completa por parte de mãe.",
    photos:["IMG-20260322-WA0070.jpg"] },

  { date:"28 de Março de 2026", emoji:"🎊", title:"Meu Aniversário com Todos os Amigos",
    desc:"Comemoramos meu aniversário com todos os meus amigos pela primeira vez juntos.",
    photos:["IMG-20260328-WA0162.jpg","IMG-20260328-WA0164.jpg","IMG-20260328-WA0166.jpg",
            "IMG-20260328-WA0168.jpg","IMG-20260328-WA0170.jpg","IMG-20260328-WA0172.jpg",
            "IMG-20260328-WA0176.jpg","IMG-20260328-WA0178.jpg","IMG-20260328-WA0180.jpg",
            "IMG-20260328-WA0182.jpg"] },

  { date:"29 de Março de 2026", emoji:"🐾", title:"Última Vez Vendo o Apzinho Juntos",
    desc:"",
    photos:["20260329_135137.jpg","20260329_135139.jpg","20260329_135936.jpg"] },

  { date:"30 de Março de 2026", emoji:"⌚", title:"Tua Foto no Meu Smartwatch",
    desc:"Coloquei tua foto no meu smartwatch.",
    photos:["VID-20260330-WA0060.mp4"] },

  { date:"02 – 04 de Abril de 2026", emoji:"🚣", title:"Primeira Vez no Mangue + Caiaque",
    desc:"Fui pro mangue pela primeira vez, brinquei com o Bernardinho e andei de caiaque.",
    photos:["20260403_113123.jpg","20260403_113132.jpg","20260404_160925.jpg",
            "20260404_160934.jpg","IMG-20260404-WA0041.jpeg"] },

  { date:"05 de Abril de 2026", emoji:"🏡", title:"Casa das Minhas Tias",
    desc:"Primeira vez que foi pra casa das minhas tias.",
    photos:["IMG-20260405-WA0033.jpg", "IMG-20260405-WA0036.jpg"] },

  { date:"10 de Abril de 2026", emoji:"🍣", title:"Nosso Primeiro Sushi Juntos",
    desc:"",
    photos:["20260410_191730.jpg","20260410_191738.jpg","20260410_191739.jpg","20260410_192615.jpg"] },

  { date:"11 de Abril de 2026", emoji:"🎬", title:"Nosso Primeiro Cinema Juntos",
    desc:"",
    photos:["20260411_222252.jpg","20260411_222255.jpg","20260411_222258.jpg",
            "20260411_222300.jpg","20260411_222305.jpg","20260411_222307.jpg",
            "20260411_222310.jpg","20260411_222312.jpg","20260411_222315.jpg"] },

  { date:"12 de Abril de 2026", emoji:"🌊", title:"Primeira Vez na Praia Juntos",
    desc:"A praia com você, a Ariane e o Valmir.",
    photos:["20260412_170639.jpg","20260412_170641.jpg","20260412_170644.jpg",
            "20260412_170652.jpg","20260412_170654.jpg","20260412_170708(0).jpg",
            "20260412_170709.jpg","20260412_170901(0).jpg","20260412_170907.jpg",
            "20260412_170908.jpg","20260412_170919.jpg","20260412_170921.jpg","20260412_170922.jpg"] },

  { date:"14 de Abril de 2026", emoji:"🐱", title:"Dormiu com a Mariazinha Juntinha",
    desc:"",
    photos:["IMG-20260415-WA0003.jpg"] },

  { date:"18 de Abril de 2026", emoji:"🎸", title:"Show do Guns N' Roses",
    desc:"Te recebi na madrugada quando você foi ao show do Guns N' Roses.",
    photos:["câmera externa_20260419_10259.mp4"] },

  { date:"21 de Abril de 2026", emoji:"📷", title:"Fotinhas no Computador",
    desc:"Tiramos fotinhas no computador testando a webcam.",
    photos:["IMG-20260421-WA0236.jpg","IMG-20260421-WA0237.jpg","IMG-20260421-WA0238.jpg",
            "IMG-20260421-WA0239.jpg","IMG-20260421-WA0240.jpg","IMG-20260421-WA0241.jpg",
            "IMG-20260421-WA0242.jpg"] },

  { date:"25 de Abril de 2026", emoji:"🛍️", title:"Abrimos as Coisinhas do Shopping",
    desc:"Abrimos juntos as coisinhas que compramos no shopping.",
    photos:["20260425_170748.mp4","20260425_170617.mp4","20260425_173501.mp4","20260425_171159.mp4"] },

  { date:"01 de Maio de 2026", emoji:"💕", title:"Mais um Momentinho Juntos",
    desc:"",
    photos:["IMG-20260501-WA0122.jpeg"] },
];

const reasons = [
  "Por você ser espontânea do jeito que é.",
  "Por ser você mesma, sempre.",
  "Por você me amar tanto.",
  "Por me aceitar do jeito que sou, independente dos meus defeitos.",
  "Por sempre me fazer sorrir, todos os dias, sempre.",
  "Por cuidar de mim mesmo quando eu fico bicudo às vezes.",
  "Por me amar mesmo eu sendo meio bobão.",
  "Por ter paciência comigo mesmo eu testando sua paciência sempre.",
  "Por ver suas coisinhas comigo e ficar animadinha.",
  "Por falar de tudo que você gosta pra mim com um sorriso no rosto.",
  "Por me fazer perceber que eu te quero ao meu lado o resto da minha vida.",
  "Por não desistir de mim.",
  "Por me olhar como se eu fosse a melhor coisa do mundo todo.",
  "Por me dizer que me ama sempre com palavras bonitas.",
  "Por ter o sorriso mais lindo de todos os multiversos.",
  "Por ter os olhos mais bonitos que qualquer ser humano poderia ter.",
  "Por ser você. Simplesmente por ser você.",
];

const quizData = [
  { q:"Qual é a nossa música?",
    opts:[ QUIZ_CONFIG.songName, "Faz Me Feliz — Léo Magalhães", "Esse Cara Sou Eu — Roberto Carlos", "Não Precisa — Matheus e Kauan" ],
    correct:0, fun:"Nossa trilha sonora ❤️" },

  { q:"Quando foi nosso primeiro beijo?",
    opts:["18 de Janeiro de 2026","25 de Janeiro de 2026","24 de Janeiro de 2026","07 de Fevereiro de 2026"],
    correct:0, fun:"O início de tudo 💋" },

  { q:"Quando foi nossa primeira saída juntos?",
    opts:["25 de Janeiro de 2026","18 de Janeiro de 2026","07 de Fevereiro de 2026","01 de Fevereiro de 2026"],
    correct:0, fun:"O começo de tudo ✨" },

  { q:"Qual foi a primeira mensagem que eu escrevi tentando puxar assunto contigo no Instagram?",
    opts:[ QUIZ_CONFIG.firstMessage, "Oi, tudo bem?", "Vi teu story e resolvi falar", "Que foto linda essa sua" ],
    correct:0, fun:"Eu tinha um plano desde o início 😄" },

  { q:"Qual foi o restaurante do nosso primeiro encontro?",
    opts:[ QUIZ_CONFIG.firstRestaurant, "Subway", "McDonald's", "Madero" ],
    correct:0, fun:"Boa lembrança essa 🍽️" },

  { q:"Quem disse 'eu te amo' primeiro?",
    opts:[ QUIZ_CONFIG.firstToSayILoveYou === "EU" ? "Você (Matheus)" : "Você (Duda)",
           QUIZ_CONFIG.firstToSayILoveYou === "EU" ? "Você (Duda)" : "Você (Matheus)" ],
    correct:0, fun:"Coragem não falta pra nenhum dos dois 💕" },

  { q:"Qual foi o primeiro filme que a gente viu juntos?",
    opts:[ QUIZ_CONFIG.firstMovie, "Homem-Aranha", "Deadpool", "As Marvels" ],
    correct:0, fun:"Boa escolha pra um primeiro filme 🎬" },

  { q:"Qual sonzinho eu faço quando algo triste acontece (tipo saber que tenho que ir embora)?",
    opts:[ QUIZ_CONFIG.sadSound, "Um suspiro dramático", "Assobio triste", "Nenhum som" ],
    correct:0, fun:"É o meu modo sad ativado 🥺" },

  { q:"Quando foi nosso primeiro pedido de namoro?",
    opts:["24 de Janeiro de 2026","18 de Janeiro de 2026","25 de Janeiro de 2026","07 de Fevereiro de 2026"],
    correct:0, fun:"A primeira tentativa 🌹" },
];

// ── STATE ──
let lbItems = [];
let lbIndex = 0;
let quizIndex = 0;
let quizScore = 0;
let currentQuizOptions = [];
let currentQuizCorrect = 0;
let musicPlaying = false;

// ── HELPERS ──
const PHOTO_BLOB_URLS = {
  "20260118_172913.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260118_172913.jpg",
  "20260118_173125.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260118_173125.jpg",
  "20260118_173930.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260118_173930.jpg",
  "20260118_173933.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260118_173933.jpg",
  "20260125_220241.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260125_220241.jpg",
  "20260125_220244.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260125_220244.jpg",
  "20260131_200141.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260131_200141.jpg",
  "20260207_231528.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_231528.jpg",
  "20260207_232854.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_232854.jpg",
  "20260207_232859.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_232859.jpg",
  "20260207_232902.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_232902.jpg",
  "20260207_233033.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_233033.jpg",
  "20260207_233036.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260207_233036.jpg",
  "20260208_200840.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260208_200840.jpg",
  "20260208_200847.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260208_200847.jpg",
  "20260213_195853.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260213_195853.jpg",
  "20260213_195859.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260213_195859.jpg",
  "20260216_015003(1).jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260216_015003(1).jpg",
  "20260216_022223.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260216_022223.jpg",
  "20260216_022229.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260216_022229.jpg",
  "20260216_182911.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260216_182911.jpg",
  "20260306_235747.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260306_235747.jpg",
  "20260307_125627.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260307_125627.jpg",
  "20260307_180244.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260307_180244.jpg",
  "20260308_222015.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260308_222015.jpg",
  "20260308_222017.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260308_222017.jpg",
  "20260314_234627.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260314_234627.jpg",
  "20260314_234636.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260314_234636.jpg",
  "20260314_234640.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260314_234640.jpg",
  "20260314_234642.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260314_234642.jpg",
  "20260314_234645.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260314_234645.jpg",
  "20260329_135137.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260329_135137.jpg",
  "20260329_135139.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260329_135139.jpg",
  "20260329_135936.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260329_135936.jpg",
  "20260403_113123.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260403_113123.jpg",
  "20260403_113132.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260403_113132.jpg",
  "20260404_160925.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260404_160925.jpg",
  "20260404_160934.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260404_160934.jpg",
  "20260410_191730.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260410_191730.jpg",
  "20260410_191738.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260410_191738.jpg",
  "20260410_191739.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260410_191739.jpg",
  "20260410_192615.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260410_192615.jpg",
  "20260411_222252.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222252.jpg",
  "20260411_222255.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222255.jpg",
  "20260411_222258.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222258.jpg",
  "20260411_222300.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222300.jpg",
  "20260411_222305.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222305.jpg",
  "20260411_222307.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222307.jpg",
  "20260411_222310.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222310.jpg",
  "20260411_222312.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222312.jpg",
  "20260411_222315.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260411_222315.jpg",
  "20260412_170639.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170639.jpg",
  "20260412_170641.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170641.jpg",
  "20260412_170644.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170644.jpg",
  "20260412_170652.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170652.jpg",
  "20260412_170654.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170654.jpg",
  "20260412_170708(0).jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170708(0).jpg",
  "20260412_170709.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170709.jpg",
  "20260412_170901(0).jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170901(0).jpg",
  "20260412_170907.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170907.jpg",
  "20260412_170908.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170908.jpg",
  "20260412_170919.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170919.jpg",
  "20260412_170921.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170921.jpg",
  "20260412_170922.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260412_170922.jpg",
  "câmera externa_20260419_10259.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/c%C3%A2mera%20externa_20260419_10259.mp4",
  "IMG-20260126-WA0102.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260126-WA0102.jpeg",
  "IMG-20260131-WA0076.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260131-WA0076.jpg",
  "IMG-20260201-WA0028.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260201-WA0028.jpg",
  "IMG-20260201-WA0033.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260201-WA0033.jpg",
  "IMG-20260202-WA0081.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260202-WA0081.jpg",
  "IMG-20260208-WA0120.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260208-WA0120.jpeg",
  "IMG-20260210-WA0067.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260210-WA0067.jpg",
  "IMG-20260210-WA0068.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260210-WA0068.jpg",
  "IMG-20260213-WA0059.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260213-WA0059.jpeg",
  "IMG-20260213-WA0061.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260213-WA0061.jpeg",
  "IMG-20260216-WA0012.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260216-WA0012.jpeg",
  "IMG-20260216-WA0089.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260216-WA0089.jpg",
  "IMG-20260216-WA0090.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260216-WA0090.jpg",
  "IMG-20260216-WA0091(1).jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260216-WA0091(1).jpg",
  "IMG-20260217-WA0018.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260217-WA0018.jpeg",
  "IMG-20260305-WA0010.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260305-WA0010.jpg",
  "IMG-20260317-WA0142.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260317-WA0142.jpg",
  "IMG-20260317-WA0160.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260317-WA0160.jpg",
  "IMG-20260317-WA0162.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260317-WA0162.jpg",
  "IMG-20260320-WA0076.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260320-WA0076.jpg",
  "IMG-20260322-WA0070.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260322-WA0070.jpg",
  "IMG-20260328-WA0162.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0162.jpg",
  "IMG-20260328-WA0164.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0164.jpg",
  "IMG-20260328-WA0166.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0166.jpg",
  "IMG-20260328-WA0168.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0168.jpg",
  "IMG-20260328-WA0170.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0170.jpg",
  "IMG-20260328-WA0172.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0172.jpg",
  "IMG-20260328-WA0176.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0176.jpg",
  "IMG-20260328-WA0178.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0178.jpg",
  "IMG-20260328-WA0180.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0180.jpg",
  "IMG-20260328-WA0182.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260328-WA0182.jpg",
  "IMG-20260404-WA0041.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260404-WA0041.jpeg",
  "IMG-20260405-WA0033.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260405-WA0033.jpg",
  "IMG-20260405-WA0036.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260405-WA0036.jpg",
  "IMG-20260415-WA0003.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260415-WA0003.jpg",
  "IMG-20260421-WA0236.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0236.jpg",
  "IMG-20260421-WA0237.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0237.jpg",
  "IMG-20260421-WA0238.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0238.jpg",
  "IMG-20260421-WA0239.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0239.jpg",
  "IMG-20260421-WA0240.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0240.jpg",
  "IMG-20260421-WA0241.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0241.jpg",
  "IMG-20260421-WA0242.jpg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260421-WA0242.jpg",
  "IMG-20260501-WA0122.jpeg": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/IMG-20260501-WA0122.jpeg",
  "VID-20260330-WA0060.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/VID-20260330-WA0060.mp4",
  "VID_20260215_221607_393.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/VID_20260215_221607_393.mp4",
  "20260425_170617.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260425_170617.mp4",
  "20260425_170748.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260425_170748.mp4",
  "20260425_171159.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260425_171159.mp4",
  "20260425_173501.mp4": "https://pub-81a1b0a194e04076b91ffdb7db0e8ec6.r2.dev/timeline/20260425_173501.mp4"
}

function isVideo(f) { return /\.(mp4|webm|mov)$/i.test(f); }

function src(filename) {
  return PHOTO_BLOB_URLS[filename] || 'photos-3-001/' + encodeURIComponent(filename);
}

// ── TABS ──
function goTo(tabId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
  window.scrollTo(0, 0);

  if (tabId === 'galeria') {
    if (!document.getElementById('gallery').dataset.built) buildGallery();
    loadUploadedPhotos();
  }
  if (tabId === 'historia' && !document.getElementById('timeline').dataset.built) buildTimeline();
  if (tabId === 'amote') initReasons();
  if (tabId === 'quiz' && !document.getElementById('quizWrap').dataset.built) buildQuiz();
}

// ── DAYS COUNTER ──
function initCounter() {
  const start = new Date('2026-02-07');
  const today = new Date();
  today.setHours(0,0,0,0);
  const diff = Math.floor((today - start) / 86400000);
  const el = document.getElementById('daysCounter');
  if (diff >= 0) {
    el.textContent = diff + (diff === 1 ? ' dia juntos 🥰' : ' dias juntos 🥰');
  }
}

// ── PETALS ──
function initPetals() {
  const container = document.getElementById('petals');
  const emojis = ['🌸','🌺','❤️','🌹','💕','✨','🫧'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (6 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    container.appendChild(p);
  }
}

// ── TIMELINE ──
function buildTimeline() {
  const container = document.getElementById('timeline');
  container.dataset.built = '1';
  container.innerHTML = '';

  timelineData.forEach(function(item, i) {
    const el = document.createElement('div');
    el.className = 'tl-item';

    let photosHtml = '';
    if (item.photos.length === 0) {
      photosHtml = '<p class="tl-nophoto">📷 sem foto, mas guardado no coração</p>';
    } else {
      photosHtml = '<div class="tl-photos">';
      item.photos.forEach(function(f, fi) {
        if (isVideo(f)) {
          photosHtml += '<div class="tl-vid-thumb" onclick="openLb(\'tl-' + i + '\',' + fi + ')">▶️</div>';
        } else {
          photosHtml += '<img class="tl-thumb" src="' + src(f) + '" loading="lazy" onclick="openLb(\'tl-' + i + '\',' + fi + ')" alt="">';
        }
      });
      photosHtml += '</div>';
    }

    el.innerHTML =
      '<div class="tl-dot">' + item.emoji + '</div>' +
      '<div class="tl-card">' +
        '<p class="tl-date">' + item.date + '</p>' +
        '<h3 class="tl-title">' + item.title + '</h3>' +
        (item.desc ? '<p class="tl-desc">' + item.desc + '</p>' : '') +
        photosHtml +
      '</div>';

    container.appendChild(el);

    // Register lightbox items for this group
    lbItems['tl-' + i] = item.photos.map(function(f) {
      return { file: f, caption: item.title + ', ' + item.date };
    });
  });
}

// ── GALLERY ──
function buildGallery() {
  const container = document.getElementById('gallery');
  container.dataset.built = '1';
  container.innerHTML = '';

  // Collect all media in timeline order
  const all = [];
  timelineData.forEach(function(item) {
    item.photos.forEach(function(f) {
      all.push({ file: f, caption: item.title + ', ' + item.date });
    });
  });

  lbItems['gallery'] = all;

  all.forEach(function(item, i) {
    const el = document.createElement('div');
    el.className = 'gal-item';
    el.onclick = function() { openLb('gallery', i); };

    if (isVideo(item.file)) {
      el.innerHTML =
        '<div class="gal-vid-cover">' +
          '<span>▶️</span>' +
          '<p>' + item.file.replace(/.*[\\/]/, '') + '</p>' +
        '</div>';
    } else {
      el.innerHTML = '<img src="' + src(item.file) + '" loading="lazy" alt="' + item.caption + '">';
    }

    container.appendChild(el);
  });
}

// ── LIGHTBOX ──
function openLb(group, index) {
  lbIndex = index;
  const lb = document.getElementById('lightbox');
  lb.dataset.group = group;
  lb.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderLb();
}

function renderLb() {
  const lb = document.getElementById('lightbox');
  const group = lb.dataset.group;
  const items = lbItems[group] || [];
  const item = items[lbIndex];
  if (!item) return;

  const img = document.getElementById('lbImg');
  const vid = document.getElementById('lbVid');
  document.getElementById('lbCaption').textContent = item.caption || '';

  const fileSrc = item.isRemote ? item.file : src(item.file)
  if (isVideo(item.file)) {
    img.style.display = 'none';
    vid.style.display = 'block';
    vid.src = fileSrc;
    vid.load();
  } else {
    vid.style.display = 'none';
    vid.src = '';
    img.style.display = 'block';
    img.src = fileSrc;
  }
}

function closeLb(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lb-close')) return;
  document.getElementById('lightbox').classList.add('hidden');
  const vid = document.getElementById('lbVid');
  vid.pause();
  vid.src = '';
  document.body.style.overflow = '';
}

function prevLb(e) {
  if (e) e.stopPropagation();
  const group = document.getElementById('lightbox').dataset.group;
  const len = (lbItems[group] || []).length;
  lbIndex = (lbIndex - 1 + len) % len;
  renderLb();
}

function nextLb(e) {
  if (e) e.stopPropagation();
  const group = document.getElementById('lightbox').dataset.group;
  const len = (lbItems[group] || []).length;
  lbIndex = (lbIndex + 1) % len;
  renderLb();
}

document.addEventListener('keydown', function(e) {
  if (document.getElementById('lightbox').classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft')  prevLb();
  if (e.key === 'ArrowRight') nextLb();
  if (e.key === 'Escape')     { document.getElementById('lightbox').classList.add('hidden'); document.getElementById('lbVid').pause(); document.body.style.overflow = ''; }
});

// ── REASONS ──
function initReasons() {
  const container = document.getElementById('reasons');
  if (container.dataset.built) {
    observeReasons();
    return;
  }
  container.dataset.built = '1';
  container.innerHTML = '';

  reasons.forEach(function(text, i) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML =
      '<span class="reason-num">' + (i + 1) + '</span>' +
      '<span class="reason-text">' + text + '</span>';
    container.appendChild(card);
  });

  observeReasons();
}

function observeReasons() {
  const cards = document.querySelectorAll('.reason-card');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(function(c) { c.classList.add('visible'); });
    return;
  }
  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  cards.forEach(function(c) { c.classList.remove('visible'); obs.observe(c); });
}

// ── QUIZ ──
function shuffleQuizOptions(question) {
  const options = question.opts.map(function(opt, originalIndex) {
    return { text: opt, originalIndex: originalIndex };
  });

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = options[i];
    options[i] = options[j];
    options[j] = temp;
  }

  return options;
}

function buildQuiz() {
  const wrap = document.getElementById('quizWrap');
  wrap.dataset.built = '1';
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz() {
  const wrap = document.getElementById('quizWrap');

  if (quizIndex >= quizData.length) {
    const pct = Math.round((quizScore / quizData.length) * 100);
    let msg;
    if (pct === 100) msg = 'Perfeito! Você sabe tudo sobre a gente 💕';
    else if (pct >= 70) msg = 'Muito bem! Quase tudo certo S2';
    else if (pct >= 40) msg = 'Boa tentativa! Temos histórias pra relembrar...';
    else msg = 'Hmm, vai ter que me contar mais sobre nós momozi jksadjkajdas';

    wrap.innerHTML =
      '<div class="quiz-finish">' +
        '<h3>Resultado 🎉</h3>' +
        '<div class="quiz-score">' + quizScore + '/' + quizData.length + '</div>' +
        '<p>' + msg + '</p>' +
        '<button class="quiz-restart" onclick="restartQuiz()">Jogar Novamente 🔄</button>' +
      '</div>';
    return;
  }

  const q = quizData[quizIndex];
  const prog = ((quizIndex / quizData.length) * 100).toFixed(0);
  currentQuizOptions = shuffleQuizOptions(q);
  currentQuizCorrect = currentQuizOptions.findIndex(function(opt) {
    return opt.originalIndex === q.correct;
  });

  const optsHtml = currentQuizOptions.map(function(opt, i) {
    return '<button class="quiz-opt" id="opt' + i + '" onclick="answerQuiz(' + i + ')">' + opt.text + '</button>';
  }).join('');

  wrap.innerHTML =
    '<div class="quiz-progress"><div class="quiz-progress-fill" style="width:' + prog + '%"></div></div>' +
    '<div class="quiz-card">' +
      '<p class="quiz-qnum">Pergunta ' + (quizIndex + 1) + ' de ' + quizData.length + '</p>' +
      '<p class="quiz-question">' + q.q + '</p>' +
      '<div class="quiz-options">' + optsHtml + '</div>' +
      '<p class="quiz-feedback" id="quizFeedback"></p>' +
      '<button class="quiz-next" id="quizNext" onclick="nextQuestion()">Próxima →</button>' +
    '</div>';
}

function answerQuiz(i) {
  const q = quizData[quizIndex];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach(function(b) { b.disabled = true; });

  if (i === currentQuizCorrect) {
    opts[i].classList.add('correct');
    document.getElementById('quizFeedback').textContent = '✅ ' + q.fun;
    quizScore++;
  } else {
    opts[i].classList.add('wrong');
    opts[currentQuizCorrect].classList.add('correct');
    document.getElementById('quizFeedback').textContent = '❌ A resposta era: ' + currentQuizOptions[currentQuizCorrect].text;
  }

  document.getElementById('quizNext').style.display = 'inline-block';
}

function nextQuestion() {
  quizIndex++;
  renderQuiz();
}

function restartQuiz() {
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

// ── UPLOADED PHOTOS ──
async function loadUploadedPhotos() {
  try {
    const res = await fetch('/api/photos')
    if (!res.ok) return
    const photos = await res.json()
    buildUploadedGallery(photos)
  } catch (_) {
    // API não disponível (abertura local do arquivo)
  }
}

var manageMode = false
var editingId = null

function buildUploadedGallery(photos) {
  const section = document.getElementById('uploadedSection')
  const container = document.getElementById('uploadedGallery')
  if (!photos.length) { section.style.display = 'none'; return; }

  section.style.display = 'block'
  container.innerHTML = ''

  lbItems['uploaded'] = photos.map(function(p) {
    return { file: p.url, caption: (p.caption || '') + ' — enviado por ' + p.uploaded_by, isRemote: true }
  })

  photos.forEach(function(p, i) {
    const el = document.createElement('div')
    el.className = 'gal-item'
    el.dataset.id = p.id
    el.dataset.caption = p.caption || ''
    el.dataset.url = p.url
    el.dataset.filename = p.filename || p.url.split('/').pop()

    const badge = '<span class="upload-badge">' + p.uploaded_by + '</span>'
    const dlBtn = '<button class="gal-dl-btn" onclick="downloadPhoto(event,this)" title="Baixar">⬇ Baixar</button>'
    const actions =
      '<div class="gal-manage-actions">' +
        '<button class="gal-action-btn edit" onclick="openEditModal(event,' + p.id + ',this)" title="Editar legenda">✏️</button>' +
        '<button class="gal-action-btn del" onclick="deletePhoto(event,' + p.id + ')" title="Excluir">🗑️</button>' +
      '</div>'

    if (/\.(mp4|webm|mov)$/i.test(p.url)) {
      el.innerHTML =
        '<div class="gal-vid-cover" onclick="openLb(\'uploaded\',' + i + ')">' +
          '<span>▶️</span>' +
          '<p>' + (p.caption || 'vídeo') + '</p>' +
        '</div>' + badge + dlBtn + actions
    } else {
      el.innerHTML =
        '<img src="' + p.url + '" loading="lazy" alt="' + (p.caption || '') + '" onclick="openLb(\'uploaded\',' + i + ')">' +
        badge + dlBtn + actions
    }

    container.appendChild(el)
  })

  if (manageMode) container.classList.add('manage-mode')
}

function toggleManageMode() {
  manageMode = !manageMode
  const container = document.getElementById('uploadedGallery')
  const btn = document.getElementById('manageBtn')
  container.classList.toggle('manage-mode', manageMode)
  btn.classList.toggle('active', manageMode)
  btn.textContent = manageMode ? '✅ Concluir' : '✏️ Gerenciar'
}

function openEditModal(e, id, btn) {
  e.stopPropagation()
  editingId = id
  const card = btn.closest('.gal-item')
  document.getElementById('editCaptionInput').value = card.dataset.caption || ''
  document.getElementById('editStatus').textContent = ''
  document.getElementById('editModal').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
  document.getElementById('editCaptionInput').focus()
}

function closeEditModal(e) {
  if (e && e.target !== document.getElementById('editModal')) return
  document.getElementById('editModal').classList.add('hidden')
  document.body.style.overflow = ''
  editingId = null
}

async function saveEdit() {
  if (!editingId) return
  const caption = document.getElementById('editCaptionInput').value.trim()
  const btn = document.getElementById('editSaveBtn')
  const status = document.getElementById('editStatus')
  btn.disabled = true
  status.textContent = 'Salvando...'
  try {
    const res = await fetch('/api/photos/' + editingId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getStoredToken(),
      },
      body: JSON.stringify({ caption }),
    })
    if (!res.ok) throw new Error()
    status.textContent = 'Salvo!'
    setTimeout(function() {
      document.getElementById('editModal').classList.add('hidden')
      document.body.style.overflow = ''
      editingId = null
      loadUploadedPhotos()
    }, 800)
  } catch {
    status.textContent = 'Erro ao salvar.'
    btn.disabled = false
  }
}

async function deletePhoto(e, id) {
  e.stopPropagation()
  if (!confirm('Excluir esta foto?')) return
  try {
    const res = await fetch('/api/photos/' + id, {
      method: 'DELETE',
      headers: { 'x-auth-token': getStoredToken() },
    })
    if (!res.ok) throw new Error()
    loadUploadedPhotos()
  } catch {
    alert('Erro ao excluir. Tente novamente.')
  }
}

async function downloadPhoto(e, btn) {
  e.stopPropagation()
  const card = btn.closest('.gal-item')
  const url = card.dataset.url
  const filename = card.dataset.filename
  try {
    const res = await fetch(url)
    const blob = await res.blob()
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(function() { URL.revokeObjectURL(a.href) }, 60000)
  } catch {
    window.open(url, '_blank')
  }
}

// ── UPLOAD MODAL ──
function openUploadModal() {
  document.getElementById('uploadModal').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
  resetUploadForm()
}

function closeUploadModal(e) {
  if (e && e.target !== document.getElementById('uploadModal')) return
  document.getElementById('uploadModal').classList.add('hidden')
  document.body.style.overflow = ''
}

function resetUploadForm() {
  document.getElementById('fileInput').value = ''
  document.getElementById('captionInput').value = ''
  document.getElementById('pinInput').value = ''
  document.getElementById('uploadStatus').textContent = ''
  document.getElementById('uploadSubmitBtn').disabled = false
  document.getElementById('uploadPreview').innerHTML =
    '<span class="upload-icon">📷</span>' +
    '<p>Clique para escolher fotos ou vídeos</p>' +
    '<p class="upload-hint">JPG, PNG, MP4 até 50MB</p>'
}

function previewFile() {
  const files = document.getElementById('fileInput').files
  if (!files.length) return
  const preview = document.getElementById('uploadPreview')
  if (files.length === 1 && files[0].type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = function(e) {
      preview.innerHTML = '<img src="' + e.target.result + '" style="max-width:100%;max-height:180px;border-radius:8px;object-fit:cover">'
    }
    reader.readAsDataURL(files[0])
  } else {
    preview.innerHTML = '<span class="upload-icon">✅</span><p>' + files.length + ' arquivo(s) selecionado(s)</p>'
  }
}

async function submitUpload() {
  const files = document.getElementById('fileInput').files
  const pin   = document.getElementById('pinInput').value.trim()
  const status = document.getElementById('uploadStatus')
  const btn    = document.getElementById('uploadSubmitBtn')

  if (!files.length) { status.textContent = 'Escolha pelo menos uma foto.'; return; }
  if (!pin)          { status.textContent = 'Informe o PIN.'; return; }

  btn.disabled = true
  status.textContent = 'Enviando...'

  const caption    = document.getElementById('captionInput').value.trim()
  const uploadedBy = document.getElementById('uploadedByInput').value
  let successCount = 0
  let errorCount   = 0

  for (const file of Array.from(files)) {
    try {
      const safeName = Date.now() + '-' + file.name

      // 1. Pede presigned URL ao backend
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-upload-pin': pin },
        body: JSON.stringify({ filename: safeName, contentType: file.type }),
      })
      if (uploadRes.status === 401) { status.textContent = 'PIN incorreto.'; btn.disabled = false; return; }
      if (!uploadRes.ok) throw new Error('Erro ao obter URL de upload')
      const { presignedUrl, publicUrl } = await uploadRes.json()

      // 2. Envia o arquivo direto ao R2
      const putRes = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      })
      if (!putRes.ok) throw new Error('Erro ao enviar arquivo')

      // 3. Salva metadados no MySQL
      const saveRes = await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-upload-pin': pin },
        body: JSON.stringify({ url: publicUrl, filename: file.name, caption, uploaded_by: uploadedBy }),
      })
      if (!saveRes.ok) throw new Error('Erro ao salvar metadados')

      successCount++
    } catch (e) {
      console.error(e)
      errorCount++
    }
  }

  if (successCount > 0) {
    status.textContent = successCount + ' foto(s) enviada(s) com sucesso! 💕'
    loadUploadedPhotos()
    setTimeout(function() {
      document.getElementById('uploadModal').classList.add('hidden')
      document.body.style.overflow = ''
    }, 1500)
  } else {
    status.textContent = 'Erro ao enviar. Tente novamente.'
    btn.disabled = false
  }
}

// ── MUSIC ──
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    updateMusicBtn();
  } else {
    audio.play().then(function() {
      musicPlaying = true;
      updateMusicBtn();
    }).catch(function() {
      musicPlaying = false;
      updateMusicBtn();
    });
  }
}

function updateMusicBtn() {
  const btn = document.getElementById('musicBtn');
  const icon = document.getElementById('musicIcon');
  btn.classList.toggle('playing', musicPlaying);
  icon.textContent = musicPlaying ? '♫' : '♪';
  btn.title = musicPlaying ? 'Pausar música' : 'Tocar nossa música';
}

// ── AUTH ──
var currentUser = null

function getStoredToken() {
  return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token')
}

function clearToken() {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
  sessionStorage.removeItem('auth_token')
  sessionStorage.removeItem('auth_user')
}

async function checkAuth() {
  const token = getStoredToken()
  if (!token) { showLogin(); return }
  try {
    const res = await fetch('/api/verify', { headers: { 'x-auth-token': token } })
    if (!res.ok) { clearToken(); showLogin(); return }
    const data = await res.json()
    currentUser = data.user
    hideLogin()
  } catch {
    showLogin()
  }
}

function showLogin() {
  document.getElementById('loginOverlay').classList.remove('hidden')
}

function hideLogin() {
  document.getElementById('loginOverlay').classList.add('hidden')
}

async function doLogin() {
  const user = document.getElementById('loginUser').value
  const pass = document.getElementById('loginPass').value
  const remember = document.getElementById('rememberMe').checked
  const errEl = document.getElementById('loginError')
  const btn = document.querySelector('.login-btn')

  errEl.style.display = 'none'
  if (!user) { errEl.textContent = 'Escolha seu nome.'; errEl.style.display = 'block'; return }
  if (!pass) { errEl.textContent = 'Digite a senha.'; errEl.style.display = 'block'; return }

  btn.disabled = true
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, password: pass, rememberMe: remember }),
    })
    if (!res.ok) {
      errEl.textContent = 'Usuário ou senha incorretos.'
      errEl.style.display = 'block'
      btn.disabled = false
      return
    }
    const { token } = await res.json()
    const storage = remember ? localStorage : sessionStorage
    storage.setItem('auth_token', token)
    storage.setItem('auth_user', user)
    currentUser = user
    hideLogin()
  } catch {
    errEl.textContent = 'Erro de conexão. Tente novamente.'
    errEl.style.display = 'block'
    btn.disabled = false
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', function() {
  checkAuth()
  initCounter();
  initPetals();
  buildTimeline();
});
