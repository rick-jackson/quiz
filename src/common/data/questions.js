const questionsConfig = [
  {
    id: 1,
    nexQuestionId: 2,
    type: "single-select",
    title: {
      en: "What is yourpreferred language?",
      fr: "Quelle est votre langue préférée ?",
      de: "Was ist Ihre bevorzugte Sprache?",
      es: "¿Cuál es tu idioma preferido?",
    },
    subtitle: {
      en: "Choose language",
      fr: "Choisissez la langue",
      de: "Sprache wählen",
      es: "Elige lengua",
    },
    answers: [
      {
        id: 1,
        text: {
          en: "English",
          fr: "English",
          de: "English",
          es: "English",
        },
      },
      {
        id: 2,
        text: {
          en: "French",
          fr: "French",
          de: "French",
          es: "French",
        },
      },
      {
        id: 3,
        text: {
          en: "German",
          fr: "German",
          de: "German",
          es: "German",
        },
      },
      {
        id: 4,
        text: {
          en: "Spanish",
          fr: "Spanish",
          de: "Spanish",
          es: "Spanish",
        },
      },
    ],
  },

  {
    id: 2,
    nexQuestionId: 3,
    type: "single-select-image",
    title: {
      en: "What gender do you identify with?",
      fr: "À quel genre vous identifiez-vous?",
      de: "Mit welchem ​​Geschlecht identifizierst du dich?",
      es: "Con qué género te identificas?",
    },
    subtitle: {
      en: "Please share how do you identify yourself",
      fr: "Veuillez partager comment vous identifiez-vous",
      de: "Bitte teilen Sie uns mit, wie Sie sich identifizieren",
      es: "Por favor comparte como te identificas",
    },
    answers: [
      {
        id: 5,
        text: {
          en: "👩\nFemale",
          fr: "👩\nFemelle",
          de: "👩\nWeiblich",
          es: "👩\nFemenina",
        },
      },
      {
        id: 6,
        text: {
          en: "👨\nMale",
          fr: "👨\nMâle",
          de: "👨\nMännlich",
          es: "👨\nFemenino",
        },
      },
      {
        id: 7,
        text: {
          en: "😉\nOther",
          fr: "😉\nAutre",
          de: "😉\nAndere",
          es: "😉\nOtra",
        },
      },
    ],
  },

  {
    id: 3,
    nexQuestionId: 4,
    type: "single-select",
    title: {
      en: "What is your age?",
      fr: "Quel âge avez-vous?",
      de: "Wie alt bist du?",
      es: "¿Cuál es tu edad?",
    },
    answers: [
      {
        id: 8,
        text: {
          en: "18-29 years",
          fr: "18-29 années",
          de: "18-29 Jahre",
          es: "18-29 años",
        },
      },
      {
        id: 9,
        text: {
          en: "30-39 years",
          fr: "30-39 années",
          de: "30-39 Jahre",
          es: "30-39 años",
        },
      },
      {
        id: 10,
        text: {
          en: "40-49 years",
          fr: "40-49 années",
          de: "40-49 Jahre",
          es: "40-49 años",
        },
      },
      {
        id: 11,
        text: {
          en: "50+",
          fr: "50+",
          de: "50+",
          es: "50+",
        },
      },
    ],
  },

  {
    id: 4,
    nexQuestionId: 5,
    type: "multiple-select",
    isMultiple: true,
    title: {
      en: "What do you <span>hate</span> the most in a book?",
      fr: "Qu'est-ce que tu <span>détestes</span> le plus dans un livre?",
      de: "Was <span>hasst</span> du am meisten an einem Buch?",
      es: "¿Qué es lo que más <span>odias</span> en un libro?",
    },
    answers: [
      {
        id: 12,
        text: {
          en: "Lack of logic",
          fr: "Manque de logique",
          de: "Mangel an Logik",
          es: "falta de logica",
        },
      },
      {
        id: 13,
        text: {
          en: "A slow speed",
          fr: "Une vitesse lente",
          de: "Eine langsame Geschwindigkeit",
          es: "una velocidad lenta",
        },
      },
      {
        id: 14,
        text: {
          en: "Lack of humor",
          fr: "Manque d'humour",
          de: "Mangel an Humor",
          es: "falta de humor",
        },
      },
      {
        id: 15,
        text: {
          en: "Way too generic ending",
          fr: "Une fin bien trop générique",
          de: "Viel zu allgemeines Ende",
          es: "Final demasiado genérico",
        },
      },
    ],
  },

  {
    id: 5,
    type: "bubble",
    isMultiple: true,
    maxItems: 3,
    title: {
      en: "What are your favorite topics?",
      fr: "Quels sont vos sujets favoris ?",
      de: "Was sind deine Lieblingsthemen?",
      es: "¿Cuales son tus temas favoritos?",
    },
    subtitle: {
      en: "Choose up to 3 topics you like",
      fr: "Choisissez jusqu'à 3 sujets que vous aimez",
      de: "Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen",
      es: "Elige hasta 3 temas que te gusten",
    },
    answers: [
      {
        id: 16,
        text: {
          en: `🐺\nWerewolf`,
          fr: `🐺\nLoup-garou`,
          de: `🐺\nWerwolf`,
          es: `🐺\nHombre-lobo`,
        },
      },
      {
        id: 17,
        text: {
          en: "💃\nAction",
          fr: "💃\nAction",
          de: "💃\nAktion",
          es: "💃\nAcción",
        },
      },
      {
        id: 18,
        text: {
          en: "👑\nRoyal Obsession",
          fr: "👑\nObsession royale",
          de: "👑\nKönigliche Obsession",
          es: "👑\nObsesión real",
        },
      },
      {
        id: 19,
        text: {
          en: "🥰\nRomance",
          fr: "🥰\nRomance",
          de: "🥰\nRomantik",
          es: "🥰\nRomance",
        },
      },
      {
        id: 20,
        text: {
          en: "💁‍♀️\nYoung Adult",
          fr: "💁‍♀️\nJeune adulte",
          de: "💁‍♀️\nJunger Erwachsener",
          es: "💁‍♀️\nAdulta joven",
        },
      },
      {
        id: 21,
        text: {
          en: "🤠\nBad Boy",
          fr: "🤠\nMauvais garçon",
          de: "🤠\nBöser Bub",
          es: "🤠\nChico malo",
        },
      },
      {
        id: 22,
        text: {
          en: "🤑\nBillionaire",
          fr: "🤑\nMilliardaire",
          de: "🤑\nMilliardär",
          es: "🤑\nMultimillonario",
        },
      },
    ],
  },
];

export default questionsConfig;
