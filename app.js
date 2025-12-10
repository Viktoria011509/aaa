const SECTION_LABELS = {
  noun: "Գոյական",
  adj: "Ածական",
  pron: "Դերանուն",
  num: "Թվական"
};

const defaultGames = {
  noun: [
    {
      word: "աթոռ",
      questions: [
        {
          prompt: "«աթոռ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«աթոռ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«աթոռ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«աթոռ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "կատու",
      questions: [
        {
          prompt: "«կատու» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«կատու» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«կատու» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«կատու» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "Արարատ",
      questions: [
        {
          prompt: "«Արարատ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«Արարատ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«Արարատ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«Արարատ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "ԱՄՆ",
      questions: [
        {
          prompt: "«ԱՄՆ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«ԱՄՆ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«ԱՄՆ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 1
        },
        {
          prompt: "«ԱՄՆ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "Հարություն",
      questions: [
        {
          prompt: "«Հարություն» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«Հարություն» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 0
        },
        {
          prompt: "«Հարություն» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«Հարություն» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "ամուսին",
      questions: [
        {
          prompt: "«ամուսին» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«ամուսին» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 0
        },
        {
          prompt: "«ամուսին» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«ամուսին» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 3
        }
      ]
    },
    {
      word: "Նկարներ",
      questions: [
        {
          prompt: "«Նկարներ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«Նկարներ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«Նկարներ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 2
        },
        {
          prompt: "«Նկարներ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "ձիեր",
      questions: [
        {
          prompt: "«ձիեր» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«ձիեր» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«ձիեր» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 2
        },
        {
          prompt: "«ձիեր» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 3
        }
      ]
    },
    {
      word: "մատանիներ",
      questions: [
        {
          prompt: "«մատանիներ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«մատանիներ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«մատանիներ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 2
        },
        {
          prompt: "«մատանիներ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 3
        }
      ]
    },
    {
      word: "գարուն",
      questions: [
        {
          prompt: "«գարուն» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«գարուն» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«գարուն» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«գարուն» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 4
        }
      ]
    },
    {
      word: "Տիգրան",
      questions: [
        {
          prompt: "«Տիգրան» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«Տիգրան» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 0
        },
        {
          prompt: "«Տիգրան» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«Տիգրան» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "Խուստուփ",
      questions: [
        {
          prompt: "«Խուստուփ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«Խուստուփ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«Խուստուփ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«Խուստուփ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "մկներ",
      questions: [
        {
          prompt: "«մկներ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«մկներ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«մկներ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 2
        },
        {
          prompt: "«մկներ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 4
        }
      ]
    },
    {
      word: "շարժում",
      questions: [
        {
          prompt: "«շարժում» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«շարժում» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«շարժում» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«շարժում» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 4
        }
      ]
    },
    {
      word: "շուն",
      questions: [
        {
          prompt: "«շուն» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«շուն» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«շուն» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«շուն» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 0
        }
      ]
    },
    {
      word: "Արաքս",
      questions: [
        {
          prompt: "«Արաքս» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 0
        },
        {
          prompt: "«Արաքս» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«Արաքս» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«Արաքս» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "արևածաղիկ",
      questions: [
        {
          prompt: "«արևածաղիկ» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«արևածաղիկ» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 1
        },
        {
          prompt: "«արևածաղիկ» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«արևածաղիկ» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 2
        }
      ]
    },
    {
      word: "ընկեր",
      questions: [
        {
          prompt: "«ընկեր» բառը հատուկ է, թե հասարակ։",
          choices: ["հատուկ", "հասարակ"],
          correctIndex: 1
        },
        {
          prompt: "«ընկեր» գոյականը անձնանիշ է, թե իրանիշ։",
          choices: ["անձնանիշ", "իրանիշ"],
          correctIndex: 0
        },
        {
          prompt: "«ընկեր» գոյականը ինչ թվով է։",
          choices: ["եզակի", "անեզակի", "հոգնակի", "անհոգնակի"],
          correctIndex: 0
        },
        {
          prompt: "«ընկեր» գոյականի վերջում ինչ մասնիկ / վերջավորություն կա։",
          choices: [
            "ա(ներքին)",
            "ո(ներքին)",
            "ի(արտաքին)",
            "ու(արտաքին)",
            "ան(արտաքին)",
            "ոջ(արտաքին)",
            "վա(արտաքին)",
            "ց(արտաքին)"
          ],
          correctIndex: 5
        }
      ]
    }
  ],
  adj: [
    {
      word: "գեղեցիկ",
      questions: [
        {
          prompt: "«գեղեցիկ» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«գեղեցիկ» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 0
        }
      ]
    },
    {
      word: "քիչ բարձր",
      questions: [
        {
          prompt: "«քիչ բարձր» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«քիչ բարձր» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "քարե",
      questions: [
        {
          prompt: "«քարե» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "բարձրագույն",
      questions: [
        {
          prompt: "«բարձրագույն» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«բարձրագույն» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 2
        }
      ]
    },
    {
      word: "քաղաքային",
      questions: [
        {
          prompt: "«քաղաքային» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "դպրոցական",
      questions: [
        {
          prompt: "«դպրոցական» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "գիշերային",
      questions: [
        {
          prompt: "«գիշերային» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "գնային",
      questions: [
        {
          prompt: "«գնային» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "ավելի լավ",
      questions: [
        {
          prompt: "«ավելի լավ» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«ավելի լավ» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "ոսկյա",
      questions: [
        {
          prompt: "«ոսկյա» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "անգլուխ",
      questions: [
        {
          prompt: "«անգլուխ» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 1
        }
      ]
    },
    {
      word: "ամենից քաղցր",
      questions: [
        {
          prompt: "«ամենից քաղցր» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«ամենից քաղցր» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 2
        }
      ]
    },
    {
      word: "ամենափայլուն",
      questions: [
        {
          prompt: "«ամենափայլուն» ածականը որակական է, թե հարաբերական։",
          choices: ["որակական", "հարաբերական"],
          correctIndex: 0
        },
        {
          prompt: "«ամենափայլուն» ածականը ինչ աստիճանով է։",
          choices: ["դրական", "բաղդատական", "գերադրական"],
          correctIndex: 2
        }
      ]
    }
  ],
  pron: [
  {
    word: "նա",
    questions: [
      {
        prompt: "Ընտրեք «նա» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 0
      },
      {
        prompt: "«նա» դերանունը ո՞ր դեմքին է պատկանում:",
        choices: ["1-ին դեմք", "2-րդ դեմք", "3-րդ դեմք"],
        correctIndex: 2
      },
      {
        prompt: "«նա» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "նրանք",
    questions: [
      {
        prompt: "Ընտրեք «նրանք» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 0
      },
      {
        prompt: "«նրանք» դերանունը ո՞ր դեմքին է պատկանում:",
        choices: ["1-ին դեմք", "2-րդ դեմք", "3-րդ դեմք"],
        correctIndex: 2
      },
      {
        prompt: "«նրանք» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "քո",
    questions: [
      {
        prompt: "Ընտրեք «քո» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 0
      },
      {
        prompt: "«քո» դերանունը ո՞ր դեմքին է պատկանում:",
        choices: ["1-ին դեմք", "2-րդ դեմք", "3-րդ դեմք"],
        correctIndex: 1
      },
      {
        prompt: "«քո» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "իրենց",
    questions: [
      {
        prompt: "Ընտրեք «իրենց» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 0
      },
      {
        prompt: "«իրենց» դերանունը ո՞ր դեմքին է պատկանում:",
        choices: ["1-ին դեմք", "2-րդ դեմք", "3-րդ դեմք"],
        correctIndex: 2
      },
      {
        prompt: "«իրենց» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "դրանց",
    questions: [
      {
        prompt: "Ընտրեք «դրանց» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 1
      },
      {
        prompt: "«դրանց» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "մյուս",
    questions: [
      {
        prompt: "Ընտրեք «մյուս» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "սա",
    questions: [
      {
        prompt: "Ընտրեք «սա» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 1
      },
      {
        prompt: "«սա» դերանունը ինչի՞ց է:",
        choices: ["եզակի", "հոգնակի"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "ինչպիսի",
    questions: [
      {
        prompt: "Ընտրեք «ինչպիսի» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 3
      }
    ]
  },
  {
    word: "ում",
    questions: [
      {
        prompt: "Ընտրեք «ում» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 4
      }
    ]
  },
  {
    word: "երբ",
    questions: [
      {
        prompt: "Ընտրեք «երբ» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 4
      }
    ]
  },
  {
    word: "ամեն մեկը",
    questions: [
      {
        prompt: "Ընտրեք «ամեն մեկը» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 5
      }
    ]
  },
  {
    word: "ամեն ինչ",
    questions: [
      {
        prompt: "Ընտրեք «ամեն ինչ» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 5
      }
    ]
  },
  {
    word: "ոչ ոք",
    questions: [
      {
        prompt: "Ընտրեք «ոչ ոք» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 7
      }
    ]
  },
  {
    word: "իրար",
    questions: [
      {
        prompt: "Ընտրեք «իրար» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 2
      }
    ]
  },
  {
    word: "ինչ-ինչ",
    questions: [
      {
        prompt: "Ընտրեք «ինչ-ինչ» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 6
      }
    ]
  },
  {
    word: "ումն",
    questions: [
      {
        prompt: "Ընտրեք «ումն» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 6
      }
    ]
  },
  {
    word: "ոչ մի",
    questions: [
      {
        prompt: "Ընտրեք «ոչ մի» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 7
      }
    ]
  },
  {
    word: "ոչ մեկը",
    questions: [
      {
        prompt: "Ընտրեք «ոչ մեկը» դերանվան տեսակը:",
        choices: ["Անձնական", "Ցուցական", "Փոխադարձ", "Հարցական", "Հարաբերական", "Որոշյալ", "Անորոշ", "Ժխտական"],
        correctIndex: 7
      }
    ]
  }
],
  num: [
  {
    word: "առաջին",
    questions: [
      {
        prompt: "«առաջին»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "մեկ չորրորդ",
    questions: [
      {
        prompt: "«մեկ չորրորդ»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«մեկ չորրորդ»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "մեկական",
    questions: [
      {
        prompt: "«մեկական»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«մեկական»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 2
      }
    ]
  },
  {
    word: "հինգերորդ",
    questions: [
      {
        prompt: "«հինգերորդ»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "ութ ամբողջ յոթ տասնորդական",
    questions: [
      {
        prompt: "«ութ ամբողջ յոթ տասնորդական»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«ութ ամբողջ յոթ տասնորդական»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "տասներորդ",
    questions: [
      {
        prompt: "«տասներորդ»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "քսանվեց",
    questions: [
      {
        prompt: "«քսանվեց»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«քսանվեց»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "երկու-երկու",
    questions: [
      {
        prompt: "«երկու-երկու»-ն քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«երկու-երկու»-ն ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 2
      }
    ]
  },
  {
    word: "վեց հարյուր հիսուն",
    questions: [
      {
        prompt: "«վեց հարյուր հիսուն»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«վեց հարյուր հիսուն»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "քսանական",
    questions: [
      {
        prompt: "«քսանական»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«քսանական»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 2
      }
    ]
  },
  {
    word: "երեք հարյուր քսան",
    questions: [
      {
        prompt: "«երեք հարյուր քսան»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«երեք հարյուր քսան»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "ութ հինգերորդ",
    questions: [
      {
        prompt: "«ութ հինգերորդ»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«ութ հինգերորդ»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "երեք երկրորդ",
    questions: [
      {
        prompt: "«երեք երկրորդ»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«երեք երկրորդ»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 1
      }
    ]
  },
  {
    word: "երկու միլիոն քառասուն հազար",
    questions: [
      {
        prompt: "«երկու միլիոն քառասուն հազար»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«երկու միլիոն քառասուն հազար»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 0
      }
    ]
  },
  {
    word: "երկու միլիոն չորս հարյուր ութսուն հազար",
    questions: [
      {
        prompt: "«երկու միլիոն չորս հարյուր ութսուն հազար»-ը քանակական է, թե դասական։",
        choices: ["քանակական", "դասական"],
        correctIndex: 0
      },
      {
        prompt: "«երկու միլիոն չորս հարյուր ութսուն հազար»-ը ինչ տեսակի թիվ է։",
        choices: ["բացարձակ", "կոտորակային", "բաշխական"],
        correctIndex: 0
      }
    ]
  }
]
};

const STORAGE_KEY = "barakhagh_user_games_v1";

function loadUserGames() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
    return {};
  } catch (e) {
    return {};
  }
}

function saveUserGames(data) {
  saveUserGamesLocal(data);
  syncUserGamesToServer(data);
}

function saveUserGamesLocal(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function syncUserGamesToServer(data) {
  try {
    fetch("/api/user-games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).catch(function () {});
  } catch (e) {}
}

function syncUserGamesFromServer() {
  try {
    fetch("/api/user-games")
      .then(function (response) {
        if (!response.ok) {
          return null;
        }
        return response.json();
      })
      .then(function (data) {
        if (data && typeof data === "object") {
          saveUserGamesLocal(data);
        }
      })
      .catch(function () {});
  } catch (e) {}
}

const state = {
  currentView: "landing",
  currentSectionKey: null,
  currentWords: [],
  currentWordIndex: 0,
  currentQuestionIndex: 0,
  score: 0,
  gameOver: false
};

let views;
let gameSectionLabelEl;
let gameScoreEl;
let gameWordTextEl;
let gameQuestionTextEl;
let gameChoicesEl;
let gameMessageEl;
let questionsContainerEl;
let createMessageEl;
let createWordInputEl;
let createSectionSelectEl;
let createNameInputEl;
let createQuestionCountInputEl;
let questionCounter = 0;

function setView(name) {
  state.currentView = name;
  Object.keys(views).forEach(function (key) {
    if (key === name) {
      views[key].classList.add("active");
      views[key].classList.remove("hidden");
    } else {
      views[key].classList.remove("active");
      views[key].classList.add("hidden");
    }
  });
}

function getSectionWords(sectionKey) {
  const userGames = loadUserGames();
  const defaults = defaultGames[sectionKey] || [];
  const userList = userGames[sectionKey] || [];
  return defaults.concat(userList);
}

function resetGameState() {
  state.currentWordIndex = 0;
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.gameOver = false;
  if (gameScoreEl) {
    gameScoreEl.textContent = "0";
  }
  if (gameMessageEl) {
    gameMessageEl.textContent = "";
  }
}

function startSection(sectionKey) {
  const words = getSectionWords(sectionKey);
  if (!words || !words.length) {
    alert("Այս բաժնում դեռ խաղեր չկան։");
    return;
  }
  state.currentSectionKey = sectionKey;
  state.currentWords = words;
  resetGameState();
  if (gameSectionLabelEl) {
    gameSectionLabelEl.textContent = SECTION_LABELS[sectionKey] || "";
  }
  setView("game");
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  if (!state.currentWords.length || state.gameOver) {
    return;
  }
  const wordData = state.currentWords[state.currentWordIndex];
  const question = wordData.questions[state.currentQuestionIndex];
  gameWordTextEl.textContent = wordData.word;
  gameQuestionTextEl.textContent = question.prompt;
  gameChoicesEl.innerHTML = "";
  gameMessageEl.textContent = "";
  question.choices.forEach(function (choice, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-button";
    btn.textContent = choice;
    btn.addEventListener("click", function () {
      handleAnswer(index);
    });
    gameChoicesEl.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  if (state.gameOver) {
    return;
  }
  const wordData = state.currentWords[state.currentWordIndex];
  const question = wordData.questions[state.currentQuestionIndex];
  if (selectedIndex === question.correctIndex) {
    state.score += 1;
    gameScoreEl.textContent = String(state.score);
    const isLastQuestionInWord = state.currentQuestionIndex >= wordData.questions.length - 1;
    if (isLastQuestionInWord) {
      const isLastWord = state.currentWordIndex >= state.currentWords.length - 1;
      if (isLastWord) {
        endGame(true);
        return;
      }
      state.currentWordIndex += 1;
      state.currentQuestionIndex = 0;
    } else {
      state.currentQuestionIndex += 1;
    }
    if (!state.gameOver) {
      gameMessageEl.textContent = "Ճիշտ պատասխան։ Շարունակի՛ր։";
      renderCurrentQuestion();
    }
  } else {
    endGame(false);
  }
}

function clearGameOverActions() {
  const actions = gameMessageEl.querySelector(".game-over-actions");
  if (actions) {
    actions.remove();
  }
}

function endGame(completedAll) {
  state.gameOver = true;
  gameChoicesEl.innerHTML = "";
  gameMessageEl.innerHTML = "";
  const text = document.createElement("p");
  if (completedAll) {
    const totalPossibleScore = state.currentWords.reduce((total, word) => total + word.questions.length, 0);
    if (state.score === totalPossibleScore) {
      text.textContent = "Շնորհավորում ենք դու բոլոր հարցերին ճիշտ ես պատասխանել։ ՔՈ ՄԻԱՎՈՐՆԵՐԸ՝ " + state.score + ".";
    } else {
      text.textContent = "Շնորհավորում ենք։ Դու ավարտեցիր խաղը։ Քո միավորները՝ " + state.score + ".";
    }
  } else {
    text.textContent = "Սխալ պատասխան։ Խաղն ավարտվեց։ Քո միավորները՝ " + state.score + ".";
  }
  gameMessageEl.appendChild(text);
  const actions = document.createElement("div");
  actions.className = "game-over-actions";
  const againBtn = document.createElement("button");
  againBtn.type = "button";
  againBtn.className = "primary-button";
  againBtn.textContent = "Կրկնել բաժինը";
  againBtn.addEventListener("click", function () {
    if (state.currentSectionKey) {
      startSection(state.currentSectionKey);
    }
  });
  const backBtn = document.createElement("button");
  backBtn.type = "button";
  backBtn.className = "secondary-button";
  backBtn.textContent = "Վերադառնալ բաժինների";
  backBtn.addEventListener("click", function () {
    setView("section");
  });
  actions.appendChild(againBtn);
  actions.appendChild(backBtn);
  gameMessageEl.appendChild(actions);
}

function resetCreateForm() {
  createSectionSelectEl.value = "noun";
  createNameInputEl.value = "";
  createWordInputEl.value = "";
  if (createQuestionCountInputEl) {
    createQuestionCountInputEl.value = 1;
  }
  questionsContainerEl.innerHTML = "";
  questionCounter = 0;
  ensureQuestionCount(1);
}

function addQuestionItem() {
  const id = "q" + questionCounter;
  questionCounter += 1;
  const wrapper = document.createElement("div");
  wrapper.className = "question-item";
  wrapper.dataset.questionId = id;
  const title = document.createElement("div");
  title.className = "question-title";
  title.textContent = "Հարց " + questionCounter;
  wrapper.appendChild(title);
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "form-input question-text";
  textInput.placeholder = "Գրի՛ր հարցը";
  wrapper.appendChild(textInput);
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options-container";
  wrapper.appendChild(optionsContainer);
  addOptionRow(optionsContainer, id);
  addOptionRow(optionsContainer, id);
  const controlsRow = document.createElement("div");
  controlsRow.className = "question-controls";
  const addOptionBtn = document.createElement("button");
  addOptionBtn.type = "button";
  addOptionBtn.className = "secondary-button question-add-option";
  addOptionBtn.textContent = "Ավելացնել տարբերակ";
  addOptionBtn.addEventListener("click", function () {
    addOptionRow(optionsContainer, id);
  });
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "secondary-button question-remove";
  removeBtn.textContent = "Ջնջել այս հարցը";
  removeBtn.addEventListener("click", function () {
    if (questionsContainerEl.children.length > 1) {
      wrapper.remove();
    }
  });
  controlsRow.appendChild(addOptionBtn);
  controlsRow.appendChild(removeBtn);
  wrapper.appendChild(controlsRow);
  questionsContainerEl.appendChild(wrapper);
}

function addOptionRow(optionsContainer, questionId) {
  const row = document.createElement("div");
  row.className = "option-row";
  const label = document.createElement("span");
  label.className = "option-label";
  label.textContent = "Տարբերակ " + (optionsContainer.children.length + 1) + ":";
  const optionInput = document.createElement("input");
  optionInput.type = "text";
  optionInput.className = "form-input option-input";
  const radioLabel = document.createElement("span");
  radioLabel.className = "option-label";
  radioLabel.textContent = "Ճիշտ";
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.className = "correct-radio";
  radio.name = "correct-" + questionId;
  const removeOptionBtn = document.createElement("button");
  removeOptionBtn.type = "button";
  removeOptionBtn.className = "option-remove-button";
  removeOptionBtn.textContent = "Ջնջել";
  removeOptionBtn.addEventListener("click", function () {
    if (optionsContainer.children.length > 2) {
      row.remove();
    }
  });
  row.appendChild(label);
  row.appendChild(optionInput);
  row.appendChild(radioLabel);
  row.appendChild(radio);
  row.appendChild(removeOptionBtn);
  optionsContainer.appendChild(row);
}

function ensureQuestionCount(targetCount) {
  let count = questionsContainerEl.children.length;
  while (count < targetCount) {
    addQuestionItem();
    count += 1;
  }
  while (count > targetCount && count > 1) {
    questionsContainerEl.removeChild(questionsContainerEl.lastElementChild);
    count -= 1;
  }
}

function showCreateMessage(text, type) {
  createMessageEl.textContent = text;
  createMessageEl.classList.remove("error");
  createMessageEl.classList.remove("success");
  if (type === "error") {
    createMessageEl.classList.add("error");
  }
  if (type === "success") {
    createMessageEl.classList.add("success");
  }
}

function handleCreateSubmit(event) {
  event.preventDefault();
  const sectionKey = createSectionSelectEl.value;
  const word = createWordInputEl.value.trim();
  const name = createNameInputEl.value.trim();
  if (!SECTION_LABELS[sectionKey]) {
    showCreateMessage("Խնդրում ենք ընտրել բաժին։", "error");
    return;
  }
  if (!name) {
    showCreateMessage("Խնդրում ենք գրել խաղի անուն։", "error");
    return;
  }
  if (!word) {
    showCreateMessage("Խնդրում ենք գրել բառ։", "error");
    return;
  }
  const items = Array.prototype.slice.call(questionsContainerEl.querySelectorAll(".question-item"));
  if (!items.length) {
    showCreateMessage("Ավելացրու գոնե մեկ հարց։", "error");
    return;
  }
  const questions = [];
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const textInput = item.querySelector(".question-text");
    const optionInputs = item.querySelectorAll(".option-input");
    const radios = item.querySelectorAll(".correct-radio");
    const qText = textInput.value.trim();
    if (!qText) {
      showCreateMessage("Հարցերից մեկը դատարկ է։ Լրացրու բոլոր հարցերը։", "error");
      return;
    }
    const choices = [];
    let correctIndex = -1;
    for (let j = 0; j < optionInputs.length; j += 1) {
      const opt = optionInputs[j].value.trim();
      const radio = radios[j];
      if (opt) {
        choices.push(opt);
        if (radio.checked) {
          correctIndex = choices.length - 1;
        }
      }
    }
    if (choices.length < 2) {
      showCreateMessage("Յուրաքանչյուր հարցի համար գրիր առնվազն երկու տարբերակ։", "error");
      return;
    }
    if (correctIndex === -1) {
      showCreateMessage("Յուրաքանչյուր հարցի համար նշիր ճիշտ տարբերակը։", "error");
      return;
    }
    questions.push({
      prompt: qText,
      choices: choices,
      correctIndex: correctIndex
    });
  }
  const userGames = loadUserGames();
  if (!userGames[sectionKey]) {
    userGames[sectionKey] = [];
  }
  userGames[sectionKey].push({
    name: name,
    word: word,
    questions: questions
  });
  saveUserGames(userGames);
  showCreateMessage("Խաղը պահպանված է։ Այն կավելացվի ընտրված բաժնի խաղերին։", "success");
  resetCreateForm();
}

document.addEventListener("DOMContentLoaded", function () {
  views = {
    landing: document.getElementById("view-landing"),
    section: document.getElementById("view-section"),
    game: document.getElementById("view-game"),
    create: document.getElementById("view-create")
  };
  gameSectionLabelEl = document.getElementById("game-section-label");
  gameScoreEl = document.getElementById("game-score");
  gameWordTextEl = document.getElementById("game-word-text");
  gameQuestionTextEl = document.getElementById("game-question-text");
  gameChoicesEl = document.getElementById("game-choices");
  gameMessageEl = document.getElementById("game-message");
  questionsContainerEl = document.getElementById("questions-container");
  createMessageEl = document.getElementById("create-message");
  createWordInputEl = document.getElementById("create-word");
  createSectionSelectEl = document.getElementById("create-section");
  createNameInputEl = document.getElementById("create-name");
  createQuestionCountInputEl = document.getElementById("create-question-count");
  const btnStart = document.getElementById("btn-start");
  const btnCreateGame = document.getElementById("btn-create-game");
  const btnBackLanding = document.getElementById("btn-back-landing");
  const btnBackSections = document.getElementById("btn-back-sections");
  const btnAddQuestion = document.getElementById("btn-add-question");
  const createForm = document.getElementById("create-game-form");
  const btnGameQuit = document.getElementById("btn-game-quit");

  btnStart.addEventListener("click", function () {
    setView("section");
  });

  btnCreateGame.addEventListener("click", function () {
    setView("create");
    resetCreateForm();
  });

  btnBackLanding.addEventListener("click", function () {
    setView("landing");
  });

  btnBackSections.addEventListener("click", function () {
    setView("section");
  });

  btnAddQuestion.addEventListener("click", function () {
    addQuestionItem();
  });

  if (createQuestionCountInputEl) {
    createQuestionCountInputEl.addEventListener("change", function () {
      let value = parseInt(createQuestionCountInputEl.value, 10);
      if (isNaN(value) || value < 1) {
        value = 1;
      }
      if (value > 10) {
        value = 10;
      }
      createQuestionCountInputEl.value = value;
      ensureQuestionCount(value);
    });
  }

  createForm.addEventListener("submit", handleCreateSubmit);

  btnGameQuit.addEventListener("click", function () {
    setView("section");
  });

  const sectionButtons = document.querySelectorAll(".section-button");
  sectionButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const key = btn.getAttribute("data-section");
      startSection(key);
    });
  });

  syncUserGamesFromServer();
  setView("landing");
  resetCreateForm();
});
