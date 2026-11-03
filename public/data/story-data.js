window.STORY_DATA={
 "title": "The Quiet Kind",
 "chapters": [
  {
   "n": 0,
   "title": "A Lamp in October",
   "sub": "Ironwood Junction, today",
   "intro": "The wire office is quiet for the night. Eli Ashby isn't."
  },
  {
   "n": 1,
   "title": "Chalk and Ruler",
   "sub": "Larkspur, years ago",
   "intro": "A quiet boy, a loud schoolhouse, and the first things he learned to keep to himself."
  },
  {
   "n": 2,
   "title": "Paper Outlaws",
   "sub": "Larkspur, the middle years",
   "intro": "Friends, a fight over drawings, and the night the money was gone."
  },
  {
   "n": 3,
   "title": "The New Girl",
   "sub": "Larkspur, seventh year",
   "intro": "October 14th. He was home sick. Everything started without him."
  },
  {
   "n": 4,
   "title": "Across the Yard",
   "sub": "Larkspur, eighth to tenth year",
   "intro": "Three years. One girl. A lot of looks, and not one real conversation."
  },
  {
   "n": 5,
   "title": "The Road That Loops",
   "sub": "Larkspur and Ironwood, eleventh year",
   "intro": "The one time he asked for something. And what it cost."
  },
  {
   "n": 6,
   "title": "What Would You Say",
   "sub": "Larkspur, twelfth year",
   "intro": "The happiest letter he ever got. And the silence after it."
  },
  {
   "n": 7,
   "title": "Second-Hand Truths",
   "sub": "Larkspur and North Ridge",
   "intro": "Everything he learned about her, he heard from somebody else."
  },
  {
   "n": 8,
   "title": "The Cousin's Handwriting",
   "sub": "The Territorial Academy, North Ridge",
   "intro": "She came back as a friend. With a story he couldn't believe and couldn't argue with."
  },
  {
   "n": 9,
   "title": "The Long Quarantine",
   "sub": "Larkspur and North Ridge",
   "intro": "Two years stuck inside. Time to heal. Time to try again, and to learn what \"okay\" can really mean."
  },
  {
   "n": 10,
   "title": "Same Sky, Same Birthday",
   "sub": "Ironwood Junction, the first working years",
   "intro": "A stranger kept showing up right when he wished for her. Then the wishing stopped working."
  },
  {
   "n": 11,
   "title": "The Relay Shack",
   "sub": "The beach outside Ironwood Junction",
   "intro": "Alone at a relay station by the sea, with a wire that never stops talking. And one piece of news it never should have carried."
  },
  {
   "n": 12,
   "title": "The Spark at the Sink",
   "sub": "Ironwood Junction, back at the main office",
   "intro": "He'd decided to be alone, and he was finally okay with it. Then someone else decided differently."
  },
  {
   "n": 13,
   "title": "Coffee at the Kettle & Lamp",
   "sub": "Ironwood Junction",
   "intro": "A new clerk who got him without needing it explained. A coffee nobody planned. And a story everyone told without him."
  },
  {
   "n": 14,
   "title": "Autopilot",
   "sub": "Ironwood and Larkspur",
   "intro": "The road gets him to work every day. He just isn't really on it."
  },
  {
   "n": 15,
   "title": "The Question",
   "sub": "Larkspur, October again",
   "intro": "One honest question. Asked the right way, for once."
  }
 ],
 "scenes": [
  {
   "id": "p1",
   "chapter": 0,
   "lines": [
    {
     "k": "narr",
     "t": "The last telegram of the night comes in at 10:15. Cattle prices from some town far away."
    },
    {
     "k": "narr",
     "t": "Eli writes it down in his neat handwriting. Good handwriting is one of the few things he's always been sure about."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "10:15. Nine hours of other people's messages. Not one of them was for me."
    },
    {
     "k": "narr",
     "t": "He takes off the headset. The key goes quiet. The silence is louder than the clicking ever was."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Go home. Sleep. Do it all again tomorrow."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "...When did tomorrow start feeling like homework?"
    }
   ],
   "loc": "office",
   "mood": "night",
   "goal": "Finish the last message of your shift",
   "place": "Ironwood Wire Office",
   "date": "October, today"
  },
  {
   "id": "p2",
   "chapter": 0,
   "lines": [
    {
     "k": "narr",
     "t": "He doesn't remember riding home. He knows he did. Pilgrim is in the stall. The gate is shut."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "How did I get here? I know the road. I just can't picture it. It's like someone else rode it for me."
    },
    {
     "k": "narr",
     "t": "Ma's lamp is still on in the window. She leaves it on until he gets home. She always has."
    },
    {
     "s": "ma",
     "t": "Eli? Is that you?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "It's me, Ma. Go to sleep.",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "There's bread under the cloth. I know you didn't eat at that office.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I ate.",
     "to": "ma"
    },
    {
     "k": "narr",
     "t": "He didn't."
    },
    {
     "s": "ma",
     "t": "...Goodnight, son.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "What do you say back?",
      "opts": [
       {
        "t": "\"Goodnight, Ma. Thanks for leaving the lamp on.\"",
        "fx": {
         "HEART": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "It's just a lamp.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "It isn't. They both know it isn't."
         }
        ]
       },
       {
        "t": "\"Goodnight.\"",
        "say": [
         {
          "k": "narr",
          "t": "A moment later the lamp goes out."
         }
        ]
       },
       {
        "silent": true,
        "t": "Go upstairs without a word.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You hear her wait a little longer before she turns it off."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Ride home to the Ashby cottage",
   "place": "The Ashby cottage",
   "date": "Later that night"
  },
  {
   "id": "p3",
   "chapter": 0,
   "lines": [
    {
     "k": "narr",
     "t": "Under the bed there's an old cookie tin with a ship on the lid. The paint is worn off where his thumbs have held it."
    },
    {
     "k": "narr",
     "t": "He hasn't opened it in a long time. But tonight he can't sleep, and this box is the only thing in the room that really knows him."
    },
    {
     "item": {
      "id": "tin",
      "name": "The tin box",
      "desc": "An old cookie tin with a ship on the lid. Everything you never threw away is inside."
     }
    },
    {
     "k": "narr",
     "t": "Inside: a splinter of yellow wood. A drawing of an outlaw on a card. A page from an autograph book. A stack of letters tied with string. A newspaper clipping folded up small."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "If anyone ever finds this, it won't be by accident. I'd have to hand it to them myself."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And if they're reading it... I wasn't doing okay. I want that written down somewhere."
    },
    {
     "k": "narr",
     "t": "He picks up the splinter first. It's the oldest thing in the box."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Where do I even start?"
    },
    {
     "choice": {
      "prompt": "Where do you start?",
      "opts": [
       {
        "t": "\"At the beginning. The schoolhouse.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "The beginning, then. Before any of it hurt."
         }
        ]
       },
       {
        "t": "\"It doesn't matter. None of it does.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "...But my hands are already untying the string."
         }
        ]
       },
       {
        "t": "\"Wherever it stops hurting.\"",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "It doesn't stop hurting anywhere. That's the problem. Start anyway."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "The lamp flickers. The splinter is warm in his hand."
    },
    {
     "k": "narr",
     "t": "And Larkspur comes back to him the way it used to be. Small, loud, and full of chalk dust."
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Open the tin box under your bed",
   "place": "Upstairs",
   "date": "After midnight",
   "journal": [
    {
     "t": "I'm going to remember it properly this time. All of it.",
     "fx": {
      "HEART": 1
     }
    },
    {
     "t": "Remembering is just another way of not sleeping. Fine.",
     "fx": {
      "DRIFT": 1
     }
    },
    {
     "t": "I keep this stuff because nobody else would.",
     "fx": {
      "STONE": 1
     }
    }
   ]
  },
  {
   "id": "c1a",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "Larkspur. A small town. You can hear the church bell from every porch, and at night the creek is the loudest thing around."
    },
    {
     "k": "narr",
     "t": "Eli is five. His new boots pinch. His collar is buttoned so high he has to lift his chin to breathe."
    },
    {
     "s": "ma",
     "t": "Hold still. There. Now you look like somebody's son.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Is Pa coming to watch?",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "Your Pa's with the cavalry, way out west. He'll write. He always writes.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "He doesn't always write. I count the letters. There have been three."
    },
    {
     "s": "june",
     "t": "The schoolhouse smells like wet chalk and Miss Thorne. You're gonna hate it.",
     "to": "eli"
    },
    {
     "s": "ma",
     "t": "June Ashby.",
     "to": "june"
    },
    {
     "s": "june",
     "t": "...You'll be fine. I'm right across the hall. If anyone's mean to you, come get me.",
     "to": "eli"
    },
    {
     "s": "ma",
     "t": "The coach comes at 8:30. Old Amos will take you there and bring you back. Don't get off anywhere else, okay?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ma is waiting for an answer.",
      "opts": [
       {
        "t": "\"Okay, Ma. I won't get lost.\"",
        "fx": {
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "I know you won't. You're careful. You get that from me.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Can't I just stay home with you?\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "Oh, Eli. If I could keep you in my pocket all day, I would.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "She holds his face in her hands a little longer than she needs to."
         }
        ]
       },
       {
        "silent": true,
        "t": "Look down at your boots.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "Ma kneels down and reties a lace that wasn't loose. It's the only way she knows how to say it."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "ma",
     "t": "Go on. Big day. The lamp will be on when you get home.",
     "to": "eli"
    }
   ],
   "loc": "home",
   "mood": "day",
   "goal": "Talk to Ma before your first day of school",
   "talk": "ma",
   "others": [
    "june"
   ],
   "place": "The Ashby cottage",
   "date": "Autumn, years ago"
  },
  {
   "id": "c1b",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "The schoolhouse is the biggest building Eli has ever been inside. The ceiling is so high his voice would get lost up there. So he doesn't use it."
    },
    {
     "s": "larkin",
     "t": "You must be the Ashby boy. Come here. Stand on the line. Hands out of your pockets.",
     "to": "eli"
    },
    {
     "s": "larkin",
     "t": "I'm going to point at a few things, and you tell me what they are. That's all. No wrong answers today.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She points at a slate."
    },
    {
     "choice": {
      "prompt": "\"What's this?\"",
      "opts": [
       {
        "t": "\"A slate.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "larkin",
          "t": "Good.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"...It's for writing.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "larkin",
          "t": "That's right. Good boy.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "She points at a bell. He knows that one. A cup. Easy. Then a globe, which he has never seen in his life."
    },
    {
     "s": "larkin",
     "t": "And this?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...A ball with the whole world painted on it.",
     "to": "larkin"
    },
    {
     "s": "larkin",
     "t": "Ha! Well, that's exactly what it is. Write him down, Mr. Cutter. He's in.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It's the only thing I really remember from that day. A ball with the whole world on it, and a lady laughing like I'd said something smart."
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Meet the headmistress at the schoolhouse",
   "talk": "larkin",
   "place": "Larkspur Schoolhouse",
   "date": "First day"
  },
  {
   "id": "c1c",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "Thirty kids. One Eli. Everyone else seems to already know each other."
    },
    {
     "s": "bright",
     "t": "You can sit by the window, Eli. It's the best seat. When your eyes get tired, you can watch the birds.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Miss Bright has a soft voice and chalk on her sleeves. She's the nicest grown-up he's ever met who isn't his mom."
    },
    {
     "s": "bright",
     "t": "Let's try the reading book. Sound it out with me.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "The reading book is full of hard little sounds that trip over each other. After two lines out loud, his throat closes up and the third line won't come."
    },
    {
     "s": "bright",
     "t": "That's okay. Let's try something else. Watch my hand.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She writes his name on the slate in cursive. E-l-i, every letter holding hands with the next one."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Oh."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It looks like it's moving, even when it's still."
    },
    {
     "choice": {
      "prompt": "What do you do?",
      "opts": [
       {
        "t": "Copy the loops again and again.",
        "fx": {
         "NERVE": 1,
         "HEART": 1,
         "set": [
          "cursive"
         ]
        },
        "say": [
         {
          "s": "bright",
          "t": "Look at that. You've got a writer's hand, Eli Ashby.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "He fills the slate. Then the back. Then he asks for more chalk."
         }
        ]
       },
       {
        "t": "Copy it once, then wipe it off before anyone sees.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "bright",
          "t": "I saw it anyway. It was really good.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Stare at it until the bell rings.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "When the bell rings, the letters are still there. He doesn't want to wipe them off."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Nobody sits with him at lunch. He eats by the window and watches the birds, like she said."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It would be nice to have a friend. Just one. Someone to sit next to."
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Find your seat in Miss Bright's class",
   "talk": "bright",
   "place": "The little classroom",
   "date": "The first few weeks"
  },
  {
   "id": "c1d",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "The homework is three pages copied out of the reading book. Eli gets through a line and a half before his hand just stops."
    },
    {
     "s": "june",
     "t": "Give it here.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Miss Thorne will know.",
     "to": "june"
    },
    {
     "s": "june",
     "t": "Miss Thorne can't tell a five-year-old's writing from an eight-year-old's. She can barely tell kids from chairs.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "June copies the pages fast, tongue sticking out. Ma pretends not to see from the stove."
    },
    {
     "choice": {
      "prompt": "June hands it back.",
      "opts": [
       {
        "t": "\"Thanks, June.\"",
        "fx": {
         "HEART": 1,
         "june": 1
        },
        "say": [
         {
          "s": "june",
          "t": "Don't thank me. Just get better at it so I don't have to.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I could have done it.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "june",
          "t": "Sure you could. Next year.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Take it without saying anything."
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "That night he practices his cursive by the lamp until Ma takes the slate away and tucks him in."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Writing my own letters is easy. Writing what they want is impossible. Nobody seems to get that those are different things."
    }
   ],
   "loc": "home",
   "mood": "golden",
   "goal": "Go home and do your homework",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "That evening"
  },
  {
   "id": "c1e",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "The next year, June has her own homework. Eli's isn't done. Just the first page in his best cursive, and then nothing."
    },
    {
     "k": "narr",
     "t": "Before morning prayers, every kid brings their book up to Miss Thorne's desk."
    },
    {
     "s": "thorne",
     "t": "Ashby. Book.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "If I don't hand it in, she'll count the books and know. If I do, she'll open it and know."
    },
    {
     "choice": {
      "prompt": "There's no good choice. What do you do?",
      "opts": [
       {
        "t": "Hand it in and hope she doesn't open it.",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She opens it."
         }
        ]
       },
       {
        "t": "Tell her the truth: \"I couldn't finish it.\"",
        "fx": {
         "NERVE": 1,
         "HEART": 1,
         "set": [
          "told_thorne"
         ]
        },
        "say": [
         {
          "s": "thorne",
          "t": "Couldn't? Couldn't?",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Hide the book behind your back.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She takes it out of his hands."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Miss Thorne keeps a yellow wooden ruler on her desk. Everybody knows about the ruler."
    },
    {
     "k": "narr",
     "t": "She uses it on him in front of the whole class. She doesn't stop until the ruler breaks."
    },
    {
     "k": "narr",
     "t": "A splinter slides across the floor and stops against his boot."
    },
    {
     "k": "narr",
     "t": "Nobody says a word. Thirty kids stare at their hands. Then they say their prayers."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't cry. I want that written down. I didn't cry."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "...I didn't cry because I couldn't find where the crying was supposed to come from."
    },
    {
     "item": {
      "id": "splinter",
      "name": "A splinter of yellow wood",
      "desc": "From a ruler that broke before you did."
     }
    }
   ],
   "loc": "school",
   "mood": "overcast",
   "goal": "Hand in your homework before morning prayers",
   "talk": "thorne",
   "place": "The upper classroom",
   "date": "The next year, a grey morning",
   "journal": [
    {
     "t": "I learned to keep my head down. It works.",
     "fx": {
      "STONE": 1
     }
    },
    {
     "t": "I learned that grown-ups can be wrong, and loud about it.",
     "fx": {
      "NERVE": 1
     }
    },
    {
     "t": "I don't really remember the pain. I remember the floor.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c1f",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "He doesn't take the coach home. He walks to the creek and sits where the water is loudest."
    },
    {
     "k": "narr",
     "t": "There's a girl there already, skipping stones. She's really bad at it."
    },
    {
     "s": "girl",
     "t": "You're the kid who got the ruler.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...",
     "to": "girl"
    },
    {
     "s": "girl",
     "t": "It's okay. She's horrible. My brother says she eats kids for dinner.",
     "to": "eli"
    },
    {
     "s": "girl",
     "t": "Here. You try. I can never make them jump.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "She holds out a flat stone.",
      "opts": [
       {
        "t": "Throw it. Show her how.",
        "fx": {
         "HEART": 1,
         "set": [
          "stone_girl"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "It skips four times. She claps like it's the best thing she's ever seen."
         },
         {
          "s": "girl",
          "t": "Again! Teach me!",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't know how either.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "girl",
          "t": "Then we'll both be bad at it. That's better than being bad alone.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Shake your head.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "girl",
          "t": "Fine. I'll sit here anyway.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "They sit there until the sky goes orange. She talks. He listens. He likes it. Around her, he doesn't feel weird at all."
    },
    {
     "k": "narr",
     "t": "Years later, Eli will try really hard to remember her face. He won't be able to. Not her face, not her name."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Just the stones. And the feeling that I was allowed to be quiet next to someone."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Girls were always easier to be around. I don't know why. It wasn't a crush. It was just... quieter."
    }
   ],
   "loc": "bridge",
   "mood": "golden",
   "goal": "Walk down to the creek after school",
   "talk": "girl",
   "place": "The creek bridge",
   "date": "That afternoon"
  },
  {
   "id": "c1g",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "When the fair comes to town, Aunt Rhoda takes them. There's a man who eats fire, a dancing dog, and a tent that smells like sugar."
    },
    {
     "s": "rhoda",
     "t": "Hold my hand, Eli. If you get lost in this crowd, they'll sell you to the circus.",
     "to": "eli"
    },
    {
     "s": "june",
     "t": "No they won't. He's too small to be useful.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Later they stand on a little wooden walkway over the water, watching a small painted boat bob on its rope."
    },
    {
     "s": "rhoda",
     "t": "You like the boat?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "It looks like it wants to go somewhere.",
     "to": "rhoda"
    },
    {
     "s": "rhoda",
     "t": "Boats always do. That's why you tie them up.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I remember the boat. I remember the boards under my feet. I've never found that spot again."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I've walked every pier around here. None of them are it. Maybe it only existed that one afternoon."
    },
    {
     "item": {
      "id": "boat",
      "name": "A ticket from the summer fair",
      "desc": "Admit one. The ink has almost faded away."
     }
    }
   ],
   "loc": "pond",
   "mood": "golden",
   "goal": "Go to the summer fair with Aunt Rhoda",
   "talk": "rhoda",
   "others": [
    "june"
   ],
   "place": "The south pier",
   "date": "Summer, the fair is in town"
  },
  {
   "id": "c1h",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "In second year, a kid named Theo Briggs has a brass pencil sharpener shaped like a rocket. Everyone wants to touch it. Eli just wants to look at it."
    },
    {
     "k": "narr",
     "t": "There's another new kid too, the shortest in the class. He sits down next to Eli without asking."
    },
    {
     "s": "toby",
     "t": "I'm Toby. Toby Pruett. My dad runs the general store. You can have a peppermint if you don't tell anyone I gave you one.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...Why are you sitting here?",
     "to": "toby"
    },
    {
     "s": "toby",
     "t": "You looked quiet. I like quiet people. They don't laugh when I can't reach the coat hooks.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Toby holds out a peppermint.",
      "opts": [
       {
        "t": "Take it. \"I'm Eli.\"",
        "fx": {
         "HEART": 1,
         "toby": 2
        },
        "say": [
         {
          "s": "toby",
          "t": "I know. Everybody knows. You're the ruler kid. Don't worry, I won't call you that.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't take stuff from people.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "toby",
          "t": "That's dumb. It's a peppermint, not a loan.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "He leaves it on Eli's desk anyway. Eli eats it on the coach home."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I don't know how, but I knew right then. This short, loud kid was going to be around for the rest of my life."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I was right about that. I've been wrong about almost everything else."
    },
    {
     "s": "toby",
     "t": "Want to see something? Penelope Gray brought a music box. It plays a waltz. Come on!",
     "to": "eli"
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Find out who the new boy in your class is",
   "talk": "toby",
   "place": "Larkspur Schoolhouse",
   "date": "Second year"
  },
  {
   "id": "c1i",
   "chapter": 1,
   "lines": [
    {
     "k": "narr",
     "t": "Penelope Gray is the class leader. She has fancy ribbons from back East, a music box, and handwriting even neater than his. Everyone wants to be her friend."
    },
    {
     "k": "narr",
     "t": "Eli wants to be her friend more than anyone. He's never said a single word to her."
    },
    {
     "s": "toby",
     "t": "She's leaving. Her family's moving to Denver. Today's her last day.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Penelope is standing by the churchyard gate with her mom and a big trunk. She's crying a little, very neatly."
    },
    {
     "choice": {
      "prompt": "This is your last chance to talk to her.",
      "opts": [
       {
        "t": "Walk over. \"Bye, Penelope. I liked your music box.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "set": [
          "said_bye_pen"
         ]
        },
        "say": [
         {
          "s": "penelope",
          "t": "...You're Eli. You never talk.",
          "to": "eli"
         },
         {
          "s": "penelope",
          "t": "Thank you. I'm going to miss it here. Even Miss Thorne.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "She gives him a ribbon. A blue one. He keeps it for twenty years."
         }
        ]
       },
       {
        "t": "Wave from where you are.",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She doesn't see. Or she does and doesn't know who you are. Either way, the coach pulls away."
         }
        ]
       },
       {
        "crack": true,
        "crackNote": "Your feet won't move. Your mouth won't open.",
        "t": "Walk over and say goodbye."
       },
       {
        "silent": true,
        "t": "Stay behind Toby.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "The trunk goes up on the coach. The coach goes down the road. That's it."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "toby",
     "t": "That's sad, huh?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...I don't know what you mean.",
     "to": "toby"
    },
    {
     "s": "toby",
     "t": "Sure you don't.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That's when I learned that people leave before you're ready. I wish it had been the last time."
    }
   ],
   "loc": "yard",
   "mood": "overcast",
   "goal": "Say goodbye to Penelope Gray",
   "talk": "penelope",
   "others": [
    "toby"
   ],
   "place": "The old churchyard",
   "date": "Third year",
   "journal": [
    {
     "t": "I should've said more. Next time I will.",
     "fx": {
      "NERVE": 1,
      "HEART": 1
     }
    },
    {
     "t": "People leave. It's better not to want them in the first place.",
     "fx": {
      "STONE": 1
     }
    },
    {
     "t": "It's just a girl with a music box. It doesn't matter.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c2a",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "In fourth year, Eli eats lunch with two boys from June's class, Nate and Nico. They're older, and they let him sit with them anyway."
    },
    {
     "s": "nate",
     "t": "Look what Nico snuck in. His uncle's picture viewer.",
     "to": "eli"
    },
    {
     "s": "nico",
     "t": "You put the card in and look, and it's like you're standing in Paris. Or on the moon. Go on.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli looks. Two flat pictures turn into one deep one. A city he'll never see pops right off the card."
    },
    {
     "choice": {
      "prompt": "What do you say?",
      "opts": [
       {
        "t": "\"How does it do that?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "nico",
          "t": "Nobody knows. My uncle says it's your two eyes lying to your brain at the same time.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Can I look again?\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "nate",
          "t": "Look as long as you want. Just don't let Miss Thorne see.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "He doesn't remember much else about that year. Lunches. Laughing. Two older boys being nice to a younger one for no reason."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Nate still writes to me sometimes. Nico, I don't know. People just... go somewhere. Nobody sends you a letter saying where."
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Eat lunch with Nate and Nico",
   "talk": "nate",
   "others": [
    "nico"
   ],
   "place": "Behind the schoolhouse",
   "date": "Fourth year"
  },
  {
   "id": "c2b",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "Sixth year. A new kid shows up with a name so long the teacher gives up halfway through reading it."
    },
    {
     "s": "rook",
     "t": "Reginald Oswin Okafor-Kincaid. Don't even try. Everyone calls me Rook. Because of the R. And because I steal stuff.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...You do?",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "Only shiny stuff, and only from people who deserve it. Want a cookie? I took it from the teacher's tin.",
     "to": "eli"
    },
    {
     "s": "toby",
     "t": "He's crazy. I like him.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Rook is everything Eli isn't. Loud. Not scared of anything. He climbs the bell rope at recess. He talks to girls like they're just people, which they are."
    },
    {
     "choice": {
      "prompt": "Rook holds out the stolen cookie.",
      "opts": [
       {
        "t": "Take it and grin.",
        "fx": {
         "HEART": 1,
         "rook": 2
        },
        "say": [
         {
          "s": "rook",
          "t": "See? I knew you had it in you. Quiet ones always do.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"We'll get in trouble.\"",
        "fx": {
         "NERVE": 1,
         "rook": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Trouble is just what grown-ups call fun they didn't think of first.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the cookie, then at him.",
        "fx": {
         "rook": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Fine, I'll eat it. But I'm saving you the next one. Partners.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Rook. \"Brother from another mother,\" he'd say, years later. He never worried about anything. He did all the crazy stuff I only wished I could do."
    }
   ],
   "loc": "school",
   "mood": "golden",
   "goal": "Meet the new kid everyone is talking about",
   "talk": "rook",
   "others": [
    "toby"
   ],
   "place": "The schoolyard",
   "date": "Sixth year"
  },
  {
   "id": "c2c",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "That spring, every boy in Larkspur is drawing outlaws on squares of cardboard. The Ghost of Dry Gulch. Six-Gun Sal. The Iron Train Gang."
    },
    {
     "k": "narr",
     "t": "Eli's drawings are the best. Everyone says so. He makes up his own outlaws, and the faces look like they're actually thinking."
    },
    {
     "s": "gideon",
     "t": "That's a good one. The Lantern Kid. You made him up?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Yeah. He only robs trains at night, so nobody can see he's scared.",
     "to": "gideon"
    },
    {
     "k": "narr",
     "t": "Gideon Hale is a strange, stubborn kid. If you give him something and then you fight, he'll make you take it back. Fair is fair."
    },
    {
     "s": "gideon",
     "t": "Don't give me anything. I don't take stuff. If you take stuff, people own a piece of you.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I remember that. I took it home and kept it. For years I didn't take anything from anyone, so nobody could ever ask for it back."
    },
    {
     "s": "abel",
     "t": "Gideon's just being Gideon. Here, Eli, trade me the Lantern Kid. I'll give you two Sals.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Abel wants to trade.",
      "opts": [
       {
        "t": "Trade with Abel.",
        "fx": {
         "HEART": 1,
         "set": [
          "traded"
         ]
        },
        "say": [
         {
          "s": "abel",
          "t": "Nice doing business with you.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't trade them. I just draw them.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "abel",
          "t": "Okay, artist.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Just give Abel the card.",
        "fx": {
         "HEART": 1,
         "abel": 1
        },
        "say": [
         {
          "s": "gideon",
          "t": "You'll regret that.",
          "to": "eli"
         },
         {
          "s": "abel",
          "t": "No he won't. Mind your own cards.",
          "to": "gideon"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "statue",
   "mood": "day",
   "goal": "Trade outlaw cards at Founder's Rock",
   "talk": "gideon",
   "others": [
    "abel",
    "rook"
   ],
   "place": "Founder's Rock",
   "date": "That spring"
  },
  {
   "id": "c2d",
   "chapter": 2,
   "lines": [
    {
     "s": "gideon",
     "t": "Those are mine.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "What?",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "The Lantern Kid. The Coyote Twins. You copied them from my cards. Everyone can see it.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "It's not true. Eli drew every line himself, at night, by the lamp. But Gideon says it loudly, in the yard, and a circle of kids is forming."
    },
    {
     "s": "toby",
     "t": "That's a lie and you know it.",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "Is it? Let him prove it.",
     "to": "toby"
    },
    {
     "k": "narr",
     "t": "Eli can't prove it. Nobody ever believes the quiet kid."
    },
    {
     "choice": {
      "prompt": "Everyone is watching. What do you do?",
      "opts": [
       {
        "t": "\"I drew them. You know I drew them.\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "stood_up"
         ]
        },
        "say": [
         {
          "s": "gideon",
          "t": "Then draw one right now. Go on. In front of everybody.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "His hand won't stop shaking. The line comes out crooked. Someone laughs."
         }
        ]
       },
       {
        "t": "Rip the cards up. All of them.",
        "fx": {
         "STONE": 2,
         "set": [
          "tore_cards"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "He tears them in half, then in half again. The Lantern Kid splits right down the middle of his scared little face."
         },
         {
          "s": "toby",
          "t": "Eli, no! Those were yours!",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Walk away.",
        "fx": {
         "DRIFT": 1,
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "He walks away. That night he burns the whole stack in Ma's stove, one card at a time."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "After that, Gideon didn't talk to me for months. A war nobody else could see. Two kids walking past each other in silence, every single day."
    },
    {
     "item": {
      "id": "card",
      "name": "The Lantern Kid",
      "desc": "One outlaw card that survived. He only robs trains at night so nobody sees he's scared."
     }
    }
   ],
   "loc": "school",
   "mood": "overcast",
   "goal": "Find out why Gideon is mad at you",
   "talk": "gideon",
   "others": [
    "toby"
   ],
   "place": "The schoolyard",
   "date": "A week later"
  },
  {
   "id": "c2e",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "Only one person knows about the silent war. Abel Finch. He finds Eli behind the chapel, where nobody ever goes."
    },
    {
     "s": "abel",
     "t": "You didn't copy them. I watched you draw the Coyote Twins in class. You drew the second one upside down to check if it looked right.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Nobody else thinks so.",
     "to": "abel"
    },
    {
     "s": "abel",
     "t": "Nobody else was watching. I was.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Abel thinks the same way Eli does, but he says it out loud. Last month he knocked over the glass jars in the science cupboard. The snake in a jar. The two-headed frog. The room stank for a week."
    },
    {
     "s": "abel",
     "t": "You know Dahlia Reyes? Third row? She asked me if you were okay. She said you looked sad.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Dahlia. I liked her. I never told her. I never told anyone anything back then."
    },
    {
     "choice": {
      "prompt": "Abel waits.",
      "opts": [
       {
        "t": "\"Tell her I'm fine. ...And thank her.\"",
        "fx": {
         "HEART": 1,
         "abel": 1
        },
        "say": [
         {
          "s": "abel",
          "t": "Tell her yourself. She won't bite. Probably.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Why would she care?\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "abel",
          "t": "People care, Eli. You just don't let them see that you notice.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Thanks for being on my side, Abel.\"",
        "fx": {
         "HEART": 2,
         "abel": 2
        },
        "say": [
         {
          "s": "abel",
          "t": "There's no sides. There's just you, the truth, and Gideon being an idiot.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "chapel",
   "mood": "golden",
   "goal": "Find Abel behind the chapel",
   "talk": "abel",
   "place": "Behind St. Agnes' Chapel",
   "date": "The silent war"
  },
  {
   "id": "c2f",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "A notice goes up at school. The telegraph company will teach one smart student how to use the wire, for free, at the post office in town."
    },
    {
     "k": "narr",
     "t": "Eli takes the test. He finishes first. He gets every answer right."
    },
    {
     "s": "clerk",
     "t": "Eli Ashby. Top score in the whole area. You start Tuesday. Four to six.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "The telegraph key sits on the counter like a strange brass animal. When the clerk taps it, a needle answers from a hundred miles away."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It was like something from another planet. I didn't get it. I didn't know I'd end up spending my whole life next to one of these."
    },
    {
     "choice": {
      "prompt": "The clerk lets you try the key.",
      "opts": [
       {
        "t": "Tap out your name, slowly.",
        "fx": {
         "NERVE": 1,
         "set": [
          "wire_name"
         ]
        },
        "say": [
         {
          "s": "clerk",
          "t": "Not bad. A little heavy on the dots.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Ask how far the wire goes.",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "clerk",
          "t": "All the way to the ocean, kid. And under it, they say.",
          "to": "eli"
         },
         {
          "s": "eli",
          "k": "thought",
          "t": "All the way to the ocean. And I'd never even seen a lake."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "post",
   "mood": "day",
   "goal": "Take the telegraph test at the post office",
   "talk": "clerk",
   "place": "Post & Coach Office",
   "date": "End of sixth year"
  },
  {
   "id": "c2g",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "After his lesson, Eli goes to catch the coach home. He reaches into his pocket for the fare."
    },
    {
     "k": "narr",
     "t": "It's empty."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "No. No, no. It was right there. Ma gave it to me this morning. Two coins. It was right there."
    },
    {
     "k": "narr",
     "t": "He checks his other pocket. His boots. The post office floor. Nothing."
    },
    {
     "s": "amos",
     "t": "Fare, kid?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...I'll take the next one.",
     "to": "amos"
    },
    {
     "k": "narr",
     "t": "He sits on the bench under the coach sign. People from Larkspur come and go. Mr. Pruett. Mrs. Bell. A man from church. Any of them would lend a kid a coin."
    },
    {
     "choice": {
      "prompt": "Mrs. Bell is walking by. You could ask her.",
      "opts": [
       {
        "crack": true,
        "crackNote": "Your throat closes up. She's already gone.",
        "t": "\"Mrs. Bell, could I... borrow...\""
       },
       {
        "crack": true,
        "crackNote": "You open your mouth. Nothing comes out.",
        "t": "Ask the man from church."
       },
       {
        "silent": true,
        "t": "Stay on the bench.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "An hour goes by. Then two. The lamps come on. The last coach of the day goes by without him."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I've never been able to explain why I couldn't ask. It wasn't pride. It was like the words were stuck behind glass."
    },
    {
     "k": "narr",
     "t": "Then a horse comes up the road way too fast, and it's Ma, still in her apron, her hair coming loose."
    },
    {
     "s": "ma",
     "t": "Eli! Oh thank God, thank God.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She rode all the way to the junction looking for him. She asked at every house on the way."
    },
    {
     "s": "ma",
     "t": "Why didn't you ask someone? Anyone? You know half this town!",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ma is hugging you so tight it hurts.",
      "opts": [
       {
        "t": "\"I lost the money. I'm sorry. I'm sorry, Ma.\"",
        "fx": {
         "HEART": 2,
         "ma": 2
        },
        "say": [
         {
          "s": "ma",
          "t": "Shh. Money's just money. You're you. Don't you ever sit in the dark over two coins again.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I couldn't.\"",
        "fx": {
         "NERVE": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "...I know, baby. I know you couldn't. I don't understand it, but I know.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Hold on to her.",
        "fx": {
         "ma": 1,
         "DRIFT": -1
        },
        "say": [
         {
          "k": "narr",
          "t": "Neither of you says anything the whole way home. She keeps one hand behind her, holding your wrist, the entire ride."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "post",
   "mood": "dusk",
   "goal": "Catch the evening coach home from the post office",
   "talk": "amos",
   "place": "The coach stop",
   "date": "A Tuesday evening"
  },
  {
   "id": "c2h",
   "chapter": 2,
   "lines": [
    {
     "k": "narr",
     "t": "The silent war ends the way those things usually end. Nobody says sorry. One day Gideon just sits down next to him and says, \"Pass the salt,\" and that's it."
    },
    {
     "s": "rook",
     "t": "To the Paper Outlaws. Wanted in six towns. Mostly for being ugly.",
     "to": "eli"
    },
    {
     "s": "gideon",
     "t": "...I know you drew them. I always knew.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Then why?",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "I don't know. I was jealous. I get stuck on something and I can't get unstuck. I'm sorry.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Gideon is waiting.",
      "opts": [
       {
        "t": "\"It's okay. Pass the salt.\"",
        "fx": {
         "HEART": 2,
         "gideon": 2
        },
        "say": [
         {
          "s": "gideon",
          "t": "Ha. Fair is fair.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"You made me burn them all.\"",
        "fx": {
         "NERVE": 1,
         "gideon": 1
        },
        "say": [
         {
          "s": "gideon",
          "t": "I know. I'll owe you for that forever. I don't take stuff, but I'll owe you.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Nod and look at the fire.",
        "fx": {
         "gideon": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Gideon taught me something without meaning to. That it's okay to take things from people. That he could be mad at me and still never take back what he gave."
    },
    {
     "s": "abel",
     "t": "Eli. You're smiling.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Am I?",
     "to": "abel"
    },
    {
     "s": "abel",
     "t": "First time all year.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That year, I loved being alive. I'm writing that down too. Everything was going well. I was happy, and I knew I was happy while it was happening. That almost never happens."
    }
   ],
   "loc": "ridge",
   "mood": "dusk",
   "goal": "Meet the boys at the Coyote Ridge campfire",
   "talk": "rook",
   "others": [
    "gideon",
    "abel",
    "toby"
   ],
   "place": "Coyote Ridge",
   "date": "End of sixth year",
   "journal": [
    {
     "t": "I was happy. It still counts, even if it didn't last.",
     "fx": {
      "HEART": 2
     }
    },
    {
     "t": "I should have learned to ask for help that night at the coach stop. I didn't.",
     "fx": {
      "NERVE": 1
     }
    },
    {
     "t": "Nothing good lasts. I learned that too.",
     "fx": {
      "STONE": 1
     }
    }
   ]
  },
  {
   "id": "c3a",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "In seventh year, the school splits the class in two. Rook and Abel go upstairs to Miss Bright's room. Eli stays downstairs with Mr. Cutter."
    },
    {
     "k": "narr",
     "t": "He makes three new friends. Adam, who's very serious. Bram, who's very tall. And Ezra Cole, who listens like it actually matters."
    },
    {
     "s": "ezra",
     "t": "You miss them. Rook and Abel.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "They're only upstairs.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Upstairs is pretty far when you're twelve.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Something weird has happened in the downstairs room. The girls have stopped talking to the boys. If a boy talks to a girl, the other boys make fun of him for a week."
    },
    {
     "s": "adam",
     "t": "Upstairs, Miss Bright told them it's fine for boys and girls to be friends. They all talk to each other up there. It's like a different country.",
     "to": "eli"
    },
    {
     "s": "bram",
     "t": "I'd switch rooms if they let me.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ezra looks at you.",
      "opts": [
       {
        "t": "\"Me too. I'd switch tomorrow.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "You'd have to ask. You never ask for anything.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Doesn't matter. I don't talk to anyone anyway.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "You talk to me.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "...You don't count. You're Ezra.",
          "to": "ezra"
         },
         {
          "s": "ezra",
          "t": "I'll take that as a compliment.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I think it's sad. Everyone being scared of each other.\"",
        "fx": {
         "HEART": 1,
         "ezra": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Yeah. It is.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Find your new classmates in seventh year",
   "talk": "ezra",
   "others": [
    "adam",
    "bram"
   ],
   "place": "Larkspur Schoolhouse",
   "date": "Seventh year, fall"
  },
  {
   "id": "c3b",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "On October 14th, Eli wakes up with a fever and Ma keeps him home. He sleeps most of the day."
    },
    {
     "k": "narr",
     "t": "In the afternoon, June comes home from school full of news."
    },
    {
     "s": "june",
     "t": "There's a new girl. Rosalind Marlowe. From Fort Calder. Her dad's the new surveyor.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "So?",
     "to": "june"
    },
    {
     "s": "june",
     "t": "So she's in the upstairs room, and she talks to the boys. Just walks right up and talks to them. Like it's normal. Half the girls already hate her.",
     "to": "eli"
    },
    {
     "s": "june",
     "t": "Rook challenged her to a race and she beat him. In a skirt.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli lies in bed and listens to June describe a girl he's never met. He builds a picture of her out of words."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Years later I'd think: I missed her first day. I wasn't there. Everyone else met her first. Maybe that set the pattern for everything."
    },
    {
     "choice": {
      "prompt": "You ask June...",
      "opts": [
       {
        "t": "\"What does she look like?\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "june",
          "t": "Ooh. Why do you want to know?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "I don't. Forget it.",
          "to": "june"
         }
        ]
       },
       {
        "t": "\"Is she nice?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "june",
          "t": "She's loud. But yeah. I think she's nice.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Roll over and face the wall.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "june",
          "t": "...You're no fun when you're sick.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "overcast",
   "goal": "You're home sick. Listen to June's news",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "October 14th"
  },
  {
   "id": "c3c",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "She's easy to find. She's in the middle of a group of upstairs boys, playing kick-the-can and screaming with laughter."
    },
    {
     "k": "narr",
     "t": "Rosalind Marlowe. Rosie. Dark hair falling out of its braid. A scab on one knee. She kicks the can so hard it hits the bell."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'd never seen a girl talk to boys without being scared. She hung out with all of them like it was nothing. Like it was the most normal thing in the world."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And I felt something I didn't have a name for yet. It wasn't love. It was jealousy. Of every one of those boys."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I wanted to be her friend. That's all. I really wanted to be her friend."
    },
    {
     "choice": {
      "prompt": "You watch from across the yard.",
      "opts": [
       {
        "t": "Move a little closer.",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You get as far as the water pump. Then the bell rings, and she runs inside without seeing you."
         }
        ]
       },
       {
        "t": "Keep watching.",
        "fx": {
         "DRIFT": 1
        }
       },
       {
        "t": "Look away before anyone notices.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Go back to school and see the new girl",
   "place": "The schoolyard",
   "date": "A few days later"
  },
  {
   "id": "c3d",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "After school, kids wait for their coaches at the stop by the post office. Rosie and Rook are arguing, which is how they say hi."
    },
    {
     "s": "rook",
     "t": "You cheated. Nobody beats me fair.",
     "to": "rosie"
    },
    {
     "s": "rosie",
     "t": "I beat you fair and square, you sore loser.",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "Go jump in the creek, Marlowe.",
     "to": "rosie"
    },
    {
     "k": "narr",
     "t": "Rosie turns around. And for the first time, she looks right at Eli."
    },
    {
     "s": "rosie",
     "t": "Did you hear that? He told me to go jump in the creek. You're my witness.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She's talking to him. She's actually talking to him."
    },
    {
     "choice": {
      "prompt": "Rosie is waiting for you to say something.",
      "opts": [
       {
        "t": "\"He says that to everyone. It means he likes you.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "rosie": 2,
         "set": [
          "first_words"
         ]
        },
        "say": [
         {
          "s": "rosie",
          "t": "Ha! Really? Rook, is that true?",
          "to": "eli"
         },
         {
          "s": "rook",
          "t": "Traitor.",
          "to": "eli"
         },
         {
          "s": "rosie",
          "t": "I like you. What's your name?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Eli.",
          "to": "rosie"
         },
         {
          "s": "rosie",
          "t": "I like you, Eli. You're on my side now.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"...Yeah, I heard.\"",
        "fx": {
         "NERVE": 1,
         "rosie": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "Good. If I drown, tell them it was Rook.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "She laughs. The coach comes. She waves at him from the step. At him."
         }
        ]
       },
       {
        "crack": true,
        "crackNote": "Your face goes hot. Nothing comes out.",
        "t": "Say something clever."
       },
       {
        "silent": true,
        "t": "Nod.",
        "fx": {
         "rosie": 0,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "...Okay, quiet witness. I'll take a nod.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That was the first time. I've replayed it so many times it's worn thin, like an old ticket you keep in your pocket."
    }
   ],
   "loc": "post",
   "mood": "golden",
   "goal": "Wait for the coach after school",
   "talk": "rosie",
   "others": [
    "rook"
   ],
   "place": "The coach stop",
   "date": "Late October"
  },
  {
   "id": "c3e",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "The plan is simple. At recess, he'll walk up to her by the churchyard wall where she likes to sit, and say: \"Do you want to be friends?\""
    },
    {
     "k": "narr",
     "t": "Six words. He practices them every night."
    },
    {
     "s": "ezra",
     "t": "Today?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Today.",
     "to": "ezra"
    },
    {
     "k": "narr",
     "t": "Rosie is sitting on the wall, braiding grass."
    },
    {
     "choice": {
      "prompt": "You walk up to her...",
      "opts": [
       {
        "crack": true,
        "crackNote": "Halfway there, someone calls her name. She jumps down and runs off.",
        "t": "\"Rosie, do you want to be—\""
       },
       {
        "crack": true,
        "crackNote": "She looks up and smiles. You say \"Nice day,\" and keep walking.",
        "t": "\"Do you want to be friends?\""
       },
       {
        "crack": true,
        "crackNote": "The bell rings.",
        "t": "Just say it."
       },
       {
        "t": "Turn around. Try tomorrow.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Tomorrow turns into next week. Next week turns into spring. Spring turns into the last week of school."
    },
    {
     "s": "ezra",
     "t": "You never asked her.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "There's still time.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Is there?",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every day of seventh year, I meant to ask. I've never been so sure about something I didn't do."
    }
   ],
   "loc": "yard",
   "mood": "golden",
   "goal": "Ask Rosie to be your friend",
   "talk": "rosie",
   "others": [
    "ezra"
   ],
   "place": "The old churchyard",
   "date": "All that year"
  },
  {
   "id": "c3f",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "Last day. Sam Whitley has a brass telegraph token he's not supposed to have, and he asks Eli to hide it in his bag."
    },
    {
     "s": "sam",
     "t": "Just until the bell. Cutter checks my desk.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "When the bell rings, Sam asks for it back. Eli tosses it to him across the room."
    },
    {
     "k": "narr",
     "t": "Sam misses. The token flies right past him, out the open window, and gets stuck behind the shutter."
    },
    {
     "k": "narr",
     "t": "Sam doesn't see where it went. He starts yelling. Eli starts yelling. Then Mr. Cutter walks in, furious about the noise."
    },
    {
     "s": "master",
     "t": "What is all this noise? And whose shoe is that on the windowsill?",
     "to": "sam"
    },
    {
     "k": "narr",
     "t": "In the front row, Henry Pike leans over to peek at the muddy shoe, like a chicken looking at a worm."
    },
    {
     "k": "narr",
     "t": "It's so ridiculous that Eli laughs out loud."
    },
    {
     "k": "narr",
     "t": "Mr. Cutter turns around. He doesn't ask a single question. He slaps Eli across the face."
    },
    {
     "k": "narr",
     "t": "The sound is really loud in the quiet room. The mark of four fingers stays on his cheek all the way home."
    },
    {
     "choice": {
      "prompt": "Ma sees your face when you get home. What do you tell her?",
      "opts": [
       {
        "t": "The truth. All of it.",
        "fx": {
         "NERVE": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "He did what? Without even asking you? I'm going down there tomorrow.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Don't, Ma. It's the last day. It's over.",
          "to": "ma"
         }
        ]
       },
       {
        "t": "\"I fell.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She looks at the shape of a hand on your cheek and doesn't believe you. But she doesn't push."
         }
        ]
       },
       {
        "silent": true,
        "t": "Go straight upstairs.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "The grown-ups at that school always decided what happened before anyone told them."
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Pack up your things on the last day of school",
   "talk": "sam",
   "others": [
    "master"
   ],
   "place": "The downstairs room",
   "date": "Last day of seventh year"
  },
  {
   "id": "c3g",
   "chapter": 3,
   "lines": [
    {
     "k": "narr",
     "t": "Summer. Rook knows a way up the old water tower that nobody's supposed to know about. From the top, you can see all of Larkspur, every light."
    },
    {
     "s": "rook",
     "t": "That one's the Marlowe house. On the hill. See the yellow window?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Why would I care which one's the Marlowe house?",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "No reason. No reason at all.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Something changed over the summer, in the quiet part of Eli where he keeps things."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "At first I just wanted to be her friend. Now I caught myself thinking: what if she was always around? Not just at school. Always. What if she was always with me?"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I was thirteen. I didn't know anything. I just knew the yellow window on the hill was the brightest one."
    },
    {
     "s": "rook",
     "t": "Next year we'll all be in the same room again. Upstairs. Her too.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Rook is trying to help.",
      "opts": [
       {
        "t": "\"Next year I'll talk to her. I swear.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "set": [
          "swore"
         ]
        },
        "say": [
         {
          "s": "rook",
          "t": "That's my guy. I'll hold you to it. I'll push you down the stairs at her if I have to.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Don't tell anyone, Rook.\"",
        "fx": {
         "rook": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Tell them what? I don't know anything. I'm just a kid on a water tower.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Watch the yellow window until it goes dark.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "card": {
      "title": "Next year",
      "body": "The school board decided that eighth-year boys and girls would be taught in separate rooms. Eli read the notice twice. Then a third time, in case it changed."
     }
    }
   ],
   "loc": "tower",
   "mood": "night",
   "goal": "Climb the old water tower with Rook",
   "talk": "rook",
   "place": "The old water tower",
   "date": "That summer",
   "journal": [
    {
     "t": "I'll talk to her the next chance I get.",
     "fx": {
      "NERVE": 1,
      "HEART": 1
     }
    },
    {
     "t": "Of course. Of course they split us up.",
     "fx": {
      "STONE": 1
     }
    },
    {
     "t": "It's just a window. It's just a girl.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c4a",
   "chapter": 4,
   "lines": [
    {
     "k": "narr",
     "t": "Eighth year goes by in separate rooms. In ninth year, somehow, they put everyone back together. Rosie sits two rows ahead of him, one seat to the left."
    },
    {
     "k": "narr",
     "t": "Their teacher, Mr. Avery, is young and friendly and lets them talk. It should be easy now."
    },
    {
     "k": "narr",
     "t": "It isn't. If a boy even borrows a girl's pencil, the others tease him for days. And Eli has no idea how to start a conversation with someone he's been thinking about for two years."
    },
    {
     "s": "ezra",
     "t": "You're staring at the back of her head again.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "No I'm not.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Yes you are. Your ears go red. It's like a signal fire.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli has never told anyone. Not Toby. Not even Rook, though Rook guessed. He's always been scared of being judged for wanting something."
    },
    {
     "choice": {
      "prompt": "Ezra is the one person you trust. Tell him?",
      "opts": [
       {
        "t": "\"I like her, Ezra. I've liked her since seventh year.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "ezra": 2,
         "set": [
          "told_ezra"
         ]
        },
        "say": [
         {
          "s": "ezra",
          "t": "I know.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "You know?",
          "to": "ezra"
         },
         {
          "s": "ezra",
          "t": "Everyone's got a face, Eli. Yours just takes longer to read. I won't tell anyone. Ever.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "He never does."
         }
        ]
       },
       {
        "t": "\"Don't be stupid.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Okay. I'll be stupid quietly then.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Shrug.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Your secret's safe. Whatever it is.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Talk to Ezra after class",
   "talk": "ezra",
   "place": "Larkspur Schoolhouse",
   "date": "Ninth year"
  },
  {
   "id": "c4b",
   "chapter": 4,
   "lines": [
    {
     "k": "narr",
     "t": "Eli did something stupid. At night, by the lamp, it had seemed clever."
    },
    {
     "k": "narr",
     "t": "He wrote a little card in his best cursive, like the fancy ones in the newspaper: \"Mr. E. Ashby and Miss R. Marlowe invite you...\" and pinned it to the board without a name."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I thought people would read it and think someone else had noticed us. That it would just... put the idea out there. Without me having to say anything."
    },
    {
     "k": "narr",
     "t": "It took them less than a day to recognize his handwriting. Nobody else in Larkspur writes a capital M like that."
    },
    {
     "s": "bram",
     "t": "\"Invite you!\" Ashby, you sly dog. Invite us to what?",
     "to": "eli"
    },
    {
     "s": "sam",
     "t": "Does Marlowe know? Someone go ask Marlowe!",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "The laughing is getting louder. Rosie is across the room. She's seen it.",
      "opts": [
       {
        "t": "Rip the card down. \"It's a joke. It's just a joke.\"",
        "fx": {
         "STONE": 1,
         "rosie": -1
        },
        "say": [
         {
          "k": "narr",
          "t": "Rosie looks at you for a long second. Then she looks away."
         }
        ]
       },
       {
        "t": "\"Yeah. I wrote it. So what?\"",
        "fx": {
         "NERVE": 2,
         "rosie": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "The laughing stops for a second. Nobody knows what to do with a quiet kid who doesn't deny it. Rosie bites her lip. She might be smiling. You'll never know."
         }
        ]
       },
       {
        "silent": true,
        "t": "Walk out of the room.",
        "fx": {
         "DRIFT": 1,
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You sit behind the woodshed until the bell rings. Ezra brings your coat."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "After that, everyone knew. I'd been so careful to never tell anyone, and then I told everyone at once, in the worst way possible."
    }
   ],
   "loc": "school",
   "mood": "overcast",
   "goal": "See what everyone is laughing at by the notice board",
   "talk": "bram",
   "others": [
    "sam",
    "adam"
   ],
   "place": "The schoolhouse notice board",
   "date": "Winter of ninth year"
  },
  {
   "id": "c4c",
   "chapter": 4,
   "lines": [
    {
     "k": "narr",
     "t": "Tenth year. Big exams. They split the boys and girls again, but in the afternoons everyone studies outside, each kid at their own post along the long porch, so nobody can chat."
    },
    {
     "k": "narr",
     "t": "Rosie picks the post you can see from Eli's window. Out of all of them. That one."
    },
    {
     "k": "narr",
     "t": "He looks up from his book. She's looking at him."
    },
    {
     "k": "narr",
     "t": "She doesn't look away."
    },
    {
     "choice": {
      "prompt": "She's still looking.",
      "opts": [
       {
        "t": "Look back at her.",
        "fx": {
         "NERVE": 1,
         "rosie": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "Three seconds. Four. She tilts her head a little, then goes back to her book."
         }
        ]
       },
       {
        "t": "Look down at your book, fast.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "When you look up again, she's smiling at her page."
         }
        ]
       },
       {
        "t": "Smile. Just a little.",
        "fx": {
         "HEART": 1,
         "rosie": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "She smiles back. It's the smallest thing in the world. It's enough to live on for a month."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It happened every day. If she didn't like it, she could have complained. Moved. Turned around. She didn't. She looked at me every day, and I could never be sure why."
    },
    {
     "k": "narr",
     "t": "And sometimes, on the porch, when she thinks no one's watching, she cries. Quietly, into her sleeve. Eli doesn't know why."
    },
    {
     "choice": {
      "prompt": "She's crying again. You could go to her.",
      "opts": [
       {
        "crack": true,
        "crackNote": "What if you say the wrong thing and she moves away for good?",
        "t": "Go over and ask if she's okay."
       },
       {
        "t": "Leave your handkerchief on her post when she's not looking.",
        "fx": {
         "HEART": 2,
         "rosie": 1,
         "set": [
          "handkerchief"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "The next day it's folded neatly on your windowsill. Nobody saw who put it there."
         }
        ]
       },
       {
        "silent": true,
        "t": "Stay where you are.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I was always too scared to ask. I told myself I was being respectful. I wasn't. I was just scared."
    }
   ],
   "loc": "school",
   "mood": "golden",
   "goal": "Take your study spot on the schoolhouse porch",
   "place": "The study porch",
   "date": "Tenth year"
  },
  {
   "id": "c4d",
   "chapter": 4,
   "lines": [
    {
     "k": "narr",
     "t": "Last day of school. Everyone has an autograph book, and they pass them around. Favorite color. Favorite song. Best memory. What do you think of the owner?"
    },
    {
     "k": "narr",
     "t": "Eli has decided. Today he'll tell her. If not today, there might not be another chance."
    },
    {
     "k": "narr",
     "t": "But Rosie is never alone. Hattie and Lou are stuck to her like glue."
    },
    {
     "s": "rosie",
     "t": "Eli! Give me your book. I'll sign it.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She writes for a long time. He watches her hand move and tries to guess the words."
    },
    {
     "s": "rosie",
     "t": "There. Don't read it until you get home.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "She hands it back. Hattie is already pulling her away.",
      "opts": [
       {
        "t": "\"Rosie, wait. Can I tell you something?\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "almost"
         ]
        },
        "say": [
         {
          "s": "rosie",
          "t": "Can it wait? Lou's mom is taking our picture at the photographer's. Write to me! My address is in the book.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "And she's gone."
         }
        ]
       },
       {
        "t": "\"Thanks.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "Don't be a stranger, Ashby.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Take the book.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "At home, he opens it. Under \"Address,\" in her round handwriting: 14 Hill Road, Larkspur."
    },
    {
     "k": "narr",
     "t": "Under \"What do you think of the owner?\" there's nothing. Instead, she wrote a quote about time."
    },
    {
     "card": {
      "title": "The autograph book",
      "body": "\"Time is a river. It doesn't wait for anyone.\" — R.M."
     }
    },
    {
     "item": {
      "id": "page",
      "name": "A page from the autograph book",
      "desc": "Her address, and a line about time. Nothing about you. You read it a thousand times anyway."
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I should have understood. A girl who liked me would have written something about me. But I was fifteen, and I read it a thousand ways, and every way had me in it somewhere."
    }
   ],
   "loc": "school",
   "mood": "golden",
   "goal": "Get Rosie to sign your autograph book",
   "talk": "rosie",
   "others": [
    "hattie",
    "lou"
   ],
   "place": "The schoolyard",
   "date": "Last day of tenth year"
  },
  {
   "id": "c4e",
   "chapter": 4,
   "lines": [
    {
     "k": "narr",
     "t": "Eli finds Abel sitting on the churchyard wall."
    },
    {
     "s": "eli",
     "t": "Will you tell her? That I like her? Just tell her. You talk to everyone.",
     "to": "abel"
    },
    {
     "k": "narr",
     "t": "Abel is quiet for a long time."
    },
    {
     "s": "abel",
     "t": "No.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Abel—",
     "to": "abel"
    },
    {
     "s": "abel",
     "t": "It's not right, Eli. It's not mine to say. If you like her, she deserves to hear it from you. Not from me, not from a card on a board. From you.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "He's right, and you hate that he's right.",
      "opts": [
       {
        "t": "\"You're right.\"",
        "fx": {
         "NERVE": 1,
         "abel": 1
        },
        "say": [
         {
          "s": "abel",
          "t": "I know. It's the worst. Being right is the worst.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Some friend you are.\"",
        "fx": {
         "STONE": 1,
         "abel": -1
        },
        "say": [
         {
          "s": "abel",
          "t": "I'm the friend who won't let you hide behind me. That's the good kind, even if it doesn't feel like it.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the graves.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "abel",
          "t": "...You can still write to her. She gave you her address. That's not nothing.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "yard",
   "mood": "dusk",
   "goal": "Ask Abel to tell Rosie for you",
   "talk": "abel",
   "place": "The old churchyard",
   "date": "That evening"
  },
  {
   "id": "c4f",
   "chapter": 4,
   "lines": [
    {
     "s": "bram",
     "t": "I know where she lives. Well, kind of. Somewhere past the hill road.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "The book says Hill Road.",
     "to": "bram"
    },
    {
     "s": "bram",
     "t": "There are three hill roads, Ashby. Get on the horse.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "They borrow Pilgrim and Bram's dad's horse. It's a warm evening. The kind where anything could happen."
    },
    {
     "ride": {
      "notices": [
       "A bird on a fence post",
       "The smell of fresh hay",
       "Bram singing badly"
      ]
     }
    },
    {
     "k": "narr",
     "t": "They take the hill road. It curves through the trees, goes up, around, back down..."
    },
    {
     "k": "narr",
     "t": "...and brings them out right where they started. Founder's Rock. Same stone. Same tree."
    },
    {
     "s": "bram",
     "t": "That's... that's not possible.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "They try the second hill road. Same thing. The road loops back on itself like a snake eating its tail."
    },
    {
     "s": "bram",
     "t": "Sorry, Eli. I really thought I knew.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "The sun is going down.",
      "opts": [
       {
        "t": "\"It's fine. It was fun anyway.\"",
        "fx": {
         "HEART": 1,
         "set": [
          "loop_ok"
         ]
        },
        "say": [
         {
          "s": "bram",
          "t": "Yeah. It kind of was.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Of course. Of course it loops.\"",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Look back down the road.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Years later, that road became the shape of everything. I'd take a road toward her and end up right back where I started. Again and again. Same rock. Same tree."
    }
   ],
   "loc": "statue",
   "mood": "golden",
   "goal": "Meet Bram at Founder's Rock to go find her house",
   "talk": "bram",
   "place": "Founder's Rock",
   "date": "A week later",
   "journal": [
    {
     "t": "I'll write to her. She gave me the address for a reason.",
     "fx": {
      "NERVE": 1,
      "HEART": 1
     }
    },
    {
     "t": "I'm the kind of person who almost gets there. Every time.",
     "fx": {
      "STONE": 1,
      "DRIFT": 1
     }
    },
    {
     "t": "Maybe it wasn't the road. Maybe it was me.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c5a",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "Uncle Wendell says the school in Ironwood is better. Better teachers, better future. Ma and Pa listen to Uncle Wendell, because Uncle Wendell has money."
    },
    {
     "k": "narr",
     "t": "So it's decided, and nobody asks Eli. He finds out the way he finds out most things: someone tells him."
    },
    {
     "s": "ma",
     "t": "It's a good school, Eli. Your Pa wrote. He says it's the best thing for you.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Pa hasn't been home in two years.",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "Eli.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...Sorry.",
     "to": "ma"
    },
    {
     "k": "narr",
     "t": "The Ironwood school is all red brick and strangers. The boys have pressed collars and already know each other. Nobody here has seen him draw the Lantern Kid or stare at the back of anyone's head."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It should have felt like a fresh start. It felt like being erased."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And under all that was the real reason, the one I couldn't say out loud: What if she goes back to Larkspur for the upper years? What if I'm here and she's there?"
    },
    {
     "choice": {
      "prompt": "Ma is watching you look at the building.",
      "opts": [
       {
        "t": "\"I'll try, Ma.\"",
        "fx": {
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "That's all I'm asking.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't belong here.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "Give it a week.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Pick up your bag.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "depot",
   "mood": "golden",
   "goal": "Take the coach to your new school in Ironwood",
   "talk": "ma",
   "place": "Ironwood stage depot",
   "date": "Early summer"
  },
  {
   "id": "c5b",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "He gives it a week. On the seventh day, he comes home, puts his bag on the kitchen table, and doesn't take it upstairs."
    },
    {
     "k": "narr",
     "t": "The school fees haven't been paid yet. There's still time. Just enough."
    },
    {
     "s": "ma",
     "t": "What's this?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "You've never asked her for anything. Not once. Not a toy, not a coin, not a day off.",
      "opts": [
       {
        "t": "\"I want to go back to Larkspur. Please. I've never asked you for anything.\"",
        "fx": {
         "NERVE": 3,
         "HEART": 1,
         "ma": 2,
         "set": [
          "asked_ma"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "Ma sits down slowly."
         },
         {
          "s": "ma",
          "t": "No. You haven't. Not since you were little. Not even when you should have.",
          "to": "eli"
         },
         {
          "s": "ma",
          "t": "...Okay. I'll write to your father. I'll deal with Wendell. You go back.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Really?",
          "to": "ma"
         },
         {
          "s": "ma",
          "t": "If my boy finally wants something badly enough to say it out loud, I'm not going to be the one who teaches him not to.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'm not going back to Ironwood.\"",
        "fx": {
         "NERVE": 2,
         "STONE": 1,
         "ma": 1,
         "set": [
          "asked_ma"
         ]
        },
        "say": [
         {
          "s": "ma",
          "t": "Oh really?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Please, Ma.",
          "to": "ma"
         },
         {
          "k": "narr",
          "t": "It's the \"please\" that does it. She's never heard him say it like that."
         },
         {
          "s": "ma",
          "t": "...Okay. Okay. Larkspur it is.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It was the only time in my life I went against them. And the last time I ever asked them for anything. I've regretted a lot of things. Never that."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "...Even though, of course, it was because of her. Of course it was."
    }
   ],
   "loc": "home",
   "mood": "dusk",
   "goal": "Tell Ma you want to go back",
   "talk": "ma",
   "place": "The Ashby cottage",
   "date": "One week later"
  },
  {
   "id": "c5c",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "Back in Larkspur. Toby yells so loud Mr. Avery drops his chalk. Rook picks him up off the ground. Ezra just nods, like he knew all along."
    },
    {
     "s": "rook",
     "t": "He's back! I'd throw a party, but all I've got is a sausage in my lunch tin.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli looks around the room. At every desk. At the door, every time it opens."
    },
    {
     "s": "toby",
     "t": "She's not coming, Eli.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Who?",
     "to": "toby"
    },
    {
     "s": "toby",
     "t": "Don't. The Marlowes sent her to St. Ursula's. The girls' school out past Fort Calder. She lives there now.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "The room tilts a little."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'd fought my parents for the first and only time. I'd come all the way back. And she'd gone somewhere else."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It felt like I'd lost her for good. And I never even had her."
    },
    {
     "choice": {
      "prompt": "Toby has a hand on your shoulder.",
      "opts": [
       {
        "t": "\"I'm glad I'm back anyway. I missed you idiots.\"",
        "fx": {
         "HEART": 2,
         "toby": 1,
         "rook": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Idiots! We're idiots now! He's been back thirty seconds and he's insulting us. I love it.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It doesn't matter.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "toby",
          "t": "It does. And it's okay that it does.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Sit down at your old desk.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "Ezra sits down next to you without saying anything. He doesn't move for the rest of the day."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "If it weren't for them, I think I would've just drifted away right then. They kept me in the room."
    }
   ],
   "loc": "school",
   "mood": "day",
   "goal": "Find your friends on your first day back",
   "talk": "toby",
   "others": [
    "rook",
    "ezra"
   ],
   "place": "Larkspur Schoolhouse",
   "date": "Eleventh year"
  },
  {
   "id": "c5d",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "Then one Sunday, Eli hears from Hattie's little sister that the Marlowes come down to St. Agnes' every Sunday when Rosie is home from school."
    },
    {
     "k": "narr",
     "t": "Every Sunday."
    },
    {
     "k": "narr",
     "t": "Eli hasn't gone to church on his own since he was nine. Suddenly he has a reason every week. Ma needs an arm to hold. June needs someone to walk with. He's gotten very religious, very fast."
    },
    {
     "k": "narr",
     "t": "She sits four rows from the front, in a grey dress. He sits in the back, behind a pillar, where he can see her and she can't see him."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't pray. I watched. I'm not proud of it. But it was the only window I had left."
    },
    {
     "choice": {
      "prompt": "The service is ending. She's turning toward the aisle.",
      "opts": [
       {
        "t": "Lean out from behind the pillar. Let her see you.",
        "fx": {
         "NERVE": 1,
         "rosie": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "Her eyes find you. A flicker of surprise, and something else. Then her mom takes her arm."
         }
        ]
       },
       {
        "t": "Duck behind the pillar.",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Keep watching. Just watch.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Every Sunday after that, he's there. He watches her from far away, week after week, and tells himself that's close."
    },
    {
     "item": {
      "id": "ribbon",
      "name": "A grey ribbon",
      "desc": "It fell from her hair onto the chapel step. You meant to give it back. You never did."
     }
    }
   ],
   "loc": "chapel",
   "mood": "day",
   "goal": "Go to Sunday service at St. Agnes'",
   "place": "St. Agnes' Chapel",
   "date": "A Sunday in the fall"
  },
  {
   "id": "c5e",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "There's a boy in Eli's class named Percy Dunn. Jumpy, smart, talks way too fast, laughs at his own jokes before he's done telling them."
    },
    {
     "k": "narr",
     "t": "Percy's cousin Sadie went to St. Ursula's with Rosie, before she left. And Percy writes to Rosie sometimes. He has her address at the girls' school."
    },
    {
     "s": "eli",
     "t": "Percy. Please. I just want to write to her.",
     "to": "percy"
    },
    {
     "s": "percy",
     "t": "Ha! No. No way. That's private mail. It's a matter of honor, Ashby. Ha!",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Percy is enjoying this.",
      "opts": [
       {
        "t": "\"I'll do your math homework for a month.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "Tempting! No.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Please. I'll beg if you want. I'll get on my knees right here.\"",
        "fx": {
         "NERVE": 2,
         "HEART": -1,
         "set": [
          "begged"
         ]
        },
        "say": [
         {
          "s": "percy",
          "t": "Whoa, whoa. Get up. People are looking. ...Still no, though.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Forget it.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha! Forgotten.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I was ready to get on my knees in front of that kid for one line of ink. I've never felt so humiliated by something that felt so necessary."
    }
   ],
   "loc": "store",
   "mood": "day",
   "goal": "Ask Percy Dunn for Rosie's address at St. Ursula's",
   "talk": "percy",
   "place": "Pruett's General Store",
   "date": "Winter of eleventh year"
  },
  {
   "id": "c5f",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "There's one person in Larkspur that Percy Dunn is scared of, and it's Gideon Hale."
    },
    {
     "s": "gideon",
     "t": "I heard about Percy.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Everyone heard about Percy.",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "Here.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He holds out a scrap of paper. An address in Percy's messy handwriting. Miss R. Marlowe, St. Ursula's School for Girls, Fort Calder Road."
    },
    {
     "s": "eli",
     "t": "How did you—",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "I asked him. Nicely. In a certain tone of voice. ...I told you I'd owe you forever. For the drawings. Now I don't. Fair is fair.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Gideon is already turning to leave.",
      "opts": [
       {
        "t": "\"Gideon. Thank you. Seriously.\"",
        "fx": {
         "HEART": 2,
         "gideon": 2
        },
        "say": [
         {
          "s": "gideon",
          "t": "Don't thank me. Write her a good letter. Don't make it weird.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"You didn't have to do that.\"",
        "fx": {
         "NERVE": 1,
         "gideon": 1
        },
        "say": [
         {
          "s": "gideon",
          "t": "I know. That's what makes it count.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Hold the paper like it's made of glass."
       }
      ]
     }
    },
    {
     "item": {
      "id": "address",
      "name": "An address in Percy's handwriting",
      "desc": "St. Ursula's School for Girls. Fort Calder Road."
     }
    }
   ],
   "loc": "statue",
   "mood": "golden",
   "goal": "Find Gideon at Founder's Rock",
   "talk": "gideon",
   "place": "Founder's Rock",
   "date": "A few days later"
  },
  {
   "id": "c5g",
   "chapter": 5,
   "lines": [
    {
     "k": "narr",
     "t": "There's a problem. The house has one mailbox, and Ma reads everything that comes through it."
    },
    {
     "s": "june",
     "t": "So have it sent to me. Under a girl's name. \"Ellie Ash.\" Ma never opens my letters. She says they're full of nonsense.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "You'd do that?",
     "to": "june"
    },
    {
     "s": "june",
     "t": "I'd do anything that annoys Uncle Wendell. And this would, if he knew. Go write your letter, lovesick.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He writes it. Crosses it out. Writes it again. In the end, he sends one word."
    },
    {
     "s": "eli",
     "t": "Hi.",
     "to": "rosie",
     "k": "letter"
    },
    {
     "k": "narr",
     "t": "Two weeks later, June slides an envelope under his door, addressed to Miss Ellie Ash."
    },
    {
     "s": "rosie",
     "t": "Who is this?",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "t": "Take a guess.",
     "to": "rosie",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "Sadie? Is it Sadie? Sadie, if this is you, I'm going to kill you.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "t": "It's not Sadie.",
     "to": "rosie",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "Then tell me your name, or I'm burning the next one without reading it.",
     "to": "eli",
     "k": "letter"
    },
    {
     "choice": {
      "prompt": "This is it. What do you write?",
      "opts": [
       {
        "t": "\"If I tell you my name, will you still write back?\"",
        "fx": {
         "NERVE": 2,
         "rosie": 1,
         "set": [
          "asked_first"
         ]
        },
        "say": [
         {
          "s": "rosie",
          "t": "Yes. Probably. Tell me.",
          "to": "eli",
          "k": "letter"
         },
         {
          "s": "eli",
          "t": "It's Eli. Eli Ashby. The kid by the window.",
          "to": "rosie",
          "k": "letter"
         }
        ]
       },
       {
        "t": "\"It's Eli. From the coach stop. Your witness.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "rosie": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "You hold your breath for two weeks."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "The reply comes on a Thursday."
    },
    {
     "s": "rosie",
     "t": "Eli! The quiet witness! Why didn't you just say so? You're so weird. Write back, I'm bored to death here.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She wrote back. She actually wrote back. I read it standing up in June's room, and June pretended not to watch me, and I didn't care."
    },
    {
     "item": {
      "id": "letters",
      "name": "A stack of letters",
      "desc": "Addressed to Miss Ellie Ash. Every one of them is from Fort Calder."
     }
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Write your first letter to Rosie",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "That night",
   "journal": [
    {
     "t": "I'll write to her every week. Small stuff. I won't push.",
     "fx": {
      "HEART": 1,
      "NERVE": 1
     }
    },
    {
     "t": "I'll wait. We'll talk properly after exams. I don't want to mess up her studies.",
     "fx": {
      "HEART": 1,
      "set": [
       "patient"
      ]
     }
    },
    {
     "t": "What if she stops? She'll stop. Everyone does.",
     "fx": {
      "STONE": 1,
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c6a",
   "chapter": 6,
   "lines": [
    {
     "k": "narr",
     "t": "The letters come every week or two. Little things. Her awful roommate. The nuns' terrible soup. A cat that sneaks into chapel. He writes back about Larkspur, about Pilgrim, about nothing."
    },
    {
     "k": "narr",
     "t": "Sometimes his letters are a little cringey. He doesn't care. He keeps finding things to talk about, like keeping a fire going in the rain."
    },
    {
     "s": "rook",
     "t": "So? What did she say this week? Read it out loud.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I'm not reading it out loud.",
     "to": "rook"
    },
    {
     "s": "toby",
     "t": "He tells us anyway. Every time. Give him a minute.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He tells them. He always does. They helped get the address, so it feels fair."
    },
    {
     "s": "gideon",
     "t": "She asked if you were telling the whole school about her letters. Percy told her you were.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I told her the truth. Only one friend knows. The one who got me the address. And he's not mad.",
     "to": "gideon"
    },
    {
     "s": "gideon",
     "t": "I'm not. I'm the least mad person on this hill.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ezra is looking at you.",
      "opts": [
       {
        "t": "\"I'm going to wait. After final exams, I'll tell her properly.\"",
        "fx": {
         "HEART": 1,
         "NERVE": 1,
         "set": [
          "patient"
         ]
        },
        "say": [
         {
          "s": "ezra",
          "t": "That's... actually really decent of you.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "I don't want to mess up her studies. She works hard.",
          "to": "ezra"
         }
        ]
       },
       {
        "t": "\"What if she's just bored at school? What if it's nothing?\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Then it's nothing and you had fun. Stop overthinking everything.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Watch the fire.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "ridge",
   "mood": "dusk",
   "goal": "Meet the boys at Coyote Ridge",
   "talk": "rook",
   "others": [
    "toby",
    "ezra",
    "gideon"
   ],
   "place": "Coyote Ridge",
   "date": "Spring of twelfth year"
  },
  {
   "id": "c6b",
   "chapter": 6,
   "lines": [
    {
     "s": "june",
     "t": "Miss Ellie Ash. Another one. This one's thick.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He takes it upstairs. It starts like a normal letter. The soup. The cat. Exams. Then at the bottom, in handwriting that looks a little different, a little rushed:"
    },
    {
     "s": "rosie",
     "t": "What would you say if I said I love you?",
     "to": "eli",
     "k": "letter"
    },
    {
     "k": "narr",
     "t": "He reads it eleven times."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every year since seventh. Every look on that porch. Every Sunday behind that pillar. All of it was in that one line."
    },
    {
     "choice": {
      "prompt": "You pick up your pen.",
      "opts": [
       {
        "t": "\"Yes. You know, this is what I've wanted to tell you for so long. I love you too.\"",
        "fx": {
         "HEART": 3,
         "NERVE": 2,
         "rosie": 3,
         "set": [
          "said_love"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "And because he's Eli, he adds: \"But let's not worry about it now. We'll talk properly after exams. I'll wait. I always have.\""
         },
         {
          "k": "narr",
          "t": "And because he's seventeen, he adds: \"But say it to me. Just once. For real.\""
         }
        ]
       },
       {
        "t": "\"Are you sure? Don't joke about this.\"",
        "fx": {
         "NERVE": 1,
         "rosie": 1,
         "set": [
          "said_love"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "He crosses it out and writes the first thing instead. Of course he does."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Two weeks. Three. Then the reply comes."
    },
    {
     "s": "rosie",
     "t": "I love you.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "My hand is shaking. I'm writing this in the chapel so the nuns can't see. My hand is shaking so much I can barely hold the pen.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It was the best moment of my life. I've had years to find a better one, and I haven't."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I felt like I finally had a reason. To work hard, to become someone. To deserve that shaking hand."
    },
    {
     "item": {
      "id": "loveletter",
      "name": "\"My hand is shaking.\"",
      "desc": "The letter. You keep it at the bottom of the stack, so it's the last one you read."
     }
    }
   ],
   "loc": "home",
   "mood": "golden",
   "goal": "June has a letter for you",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "A normal Tuesday"
  },
  {
   "id": "c6c",
   "chapter": 6,
   "lines": [
    {
     "k": "narr",
     "t": "He doesn't have to tell Toby. His face says it all."
    },
    {
     "s": "toby",
     "t": "She said it. She said it! Rook! ROOK! She said it!",
     "to": "eli"
    },
    {
     "s": "rook",
     "t": "I'm right here, you don't have to scream. ...Come here, Ashby. Come here.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Rook hugs him so hard his ribs creak. Mr. Pruett gives them each a peppermint and doesn't ask why."
    },
    {
     "choice": {
      "prompt": "What do you do now that she's said it?",
      "opts": [
       {
        "t": "Keep it simple. A little heart at the end of each letter. Nothing that puts pressure on her.",
        "fx": {
         "HEART": 1,
         "NERVE": 1,
         "set": [
          "light"
         ]
        },
        "say": [
         {
          "s": "toby",
          "t": "Look at you. Respectful. Patient. Who even are you?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "If you keep pushing someone, they start to hate it. I never want her to hate it.",
          "to": "toby"
         }
        ]
       },
       {
        "t": "\"I'm riding to St. Ursula's this weekend.\"",
        "fx": {
         "NERVE": 1,
         "rosie": -1
        },
        "say": [
         {
          "s": "rook",
          "t": "To a girls' school run by nuns? You'll get chased off with a broom.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "You don't go. You write instead. It's probably for the best."
         }
        ]
       },
       {
        "silent": true,
        "t": "Grin until your face hurts.",
        "fx": {
         "HEART": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "She writes about her classes. He writes about seeing her at chapel on Sundays, from behind his pillar. She writes back that she knew he was there. She always knew."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That summer, her dream and my dream were the same dream. I really believe that. For a little while, we were both alive in the same direction."
    }
   ],
   "loc": "store",
   "mood": "day",
   "goal": "Tell Toby the news",
   "talk": "toby",
   "others": [
    "rook"
   ],
   "place": "Pruett's General Store",
   "date": "The next day"
  },
  {
   "id": "c6d",
   "chapter": 6,
   "lines": [
    {
     "k": "narr",
     "t": "August 24th. He writes like always. Just \"Hi, how was your week?\""
    },
    {
     "k": "narr",
     "t": "The reply isn't in her handwriting."
    },
    {
     "s": "danny",
     "t": "My sister went out. She's not available. — D. Marlowe",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "june",
     "t": "Who's D. Marlowe?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Her brother. Danny. He's in eighth year with Percy's brother.",
     "to": "june"
    },
    {
     "k": "narr",
     "t": "After that, the letters still come, but they're different. Short. Late. Polite, like a letter to an uncle."
    },
    {
     "s": "rosie",
     "t": "I've been moved to the boarding house for the rest of the year. I won't be able to write much.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She never mentioned it. Not once. All those letters about soup and the cat, and not one word about moving."
    },
    {
     "choice": {
      "prompt": "June is watching your face.",
      "opts": [
       {
        "t": "\"Something's wrong. Something happened.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "june",
          "t": "Maybe she's just busy. It's her last year.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"She's just busy. It's fine.\"",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "june",
          "t": "...Sure.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"June, did Ma read one of the letters?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "june",
          "t": "No! Never. I swear, Eli.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "overcast",
   "goal": "June has another letter",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "August 24th"
  },
  {
   "id": "c6e",
   "chapter": 6,
   "lines": [
    {
     "s": "eli",
     "t": "Write to her. Just ask where she is. How she is. Please.",
     "to": "percy"
    },
    {
     "s": "percy",
     "t": "Ha. Okay. Okay! Since you look like a ghost.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Percy writes. The reply comes back fast. Percy reads it out at the post office counter."
    },
    {
     "s": "percy",
     "t": "\"She's at the boarding house until the end of the term. — D.\" That's her brother again. Huh. Weird. She usually writes back herself.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It looked wrong. It felt wrong. Her brother answering her letters, twice, like he was guarding the door."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But I didn't want it to mean anything. So I didn't let it."
    },
    {
     "choice": {
      "prompt": "Percy shrugs.",
      "opts": [
       {
        "t": "\"Thanks, Percy. Really.\"",
        "fx": {
         "HEART": 1,
         "percy": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha. Don't. Now I feel bad. Why do I feel bad?",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Something's wrong, Percy. You can see it too.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "I see a nosy brother. That's all brothers are for.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Walk out.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "post",
   "mood": "overcast",
   "goal": "Ask Percy to write to her for you",
   "talk": "percy",
   "place": "Post & Coach Office",
   "date": "September"
  },
  {
   "id": "c6f",
   "chapter": 6,
   "lines": [
    {
     "k": "narr",
     "t": "Then the letters stop coming at all. Instead, his own letters come back. Unopened. Stamped in red: RETURN TO SENDER."
    },
    {
     "k": "narr",
     "t": "He writes under June's name. Returned. Under Toby's name. She opens that one and answers it, nicely, until he signs it \"Eli.\" Then that one comes back too."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every time I said my name, the door closed."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I couldn't send a telegram. She'd kept my letters under a girl's name. If her family saw a telegram from a boy... I told myself her parents had found out. That was the only thing that made sense."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But it wasn't that. I know now it wasn't that."
    },
    {
     "k": "narr",
     "t": "He walks to the post office every day for three months. Every day, the box is either empty or full of his own handwriting coming back to him."
    },
    {
     "choice": {
      "prompt": "The clerk is closing up. There's one letter. It's yours. Returned.",
      "opts": [
       {
        "t": "Put it in the tin with the others.",
        "fx": {
         "DRIFT": 1
        }
       },
       {
        "t": "Tear it up on the steps.",
        "fx": {
         "STONE": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "The pieces blow down Main Street. You don't chase them."
         }
        ]
       },
       {
        "t": "Write another one tonight.",
        "fx": {
         "NERVE": 1,
         "HEART": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You write it. It comes back on Thursday."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "What happened? What did I do? I asked myself that every day. I still ask. Some questions never wear out."
    }
   ],
   "loc": "post",
   "mood": "night",
   "goal": "Check the mailbox one more time",
   "place": "The coach office, after hours",
   "date": "Fall, every day"
  },
  {
   "id": "c6g",
   "chapter": 6,
   "lines": [
    {
     "k": "narr",
     "t": "One evening, the clerk waves him over. A telegram came in for \"E. Ashby, Larkspur.\" From Red Bluff."
    },
    {
     "k": "narr",
     "t": "Red Bluff is near Fort Calder. His heart does something painful."
    },
    {
     "s": "lettie",
     "t": "WHO IS THIS STOP YOU SENT A LETTER TO MY BOARDING HOUSE STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "He'd written to every boarding house near St. Ursula's. Half crazy. Hoping one of them was hers."
    },
    {
     "choice": {
      "prompt": "You wire back. Ten cents a word.",
      "opts": [
       {
        "t": "\"WHY WONT YOU TALK TO ME STOP PLEASE STOP\"",
        "fx": {
         "NERVE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "lettie",
          "t": "IM SORRY STOP I DONT KNOW YOU STOP WRONG PERSON STOP",
          "to": "eli",
          "k": "wire"
         }
        ]
       },
       {
        "t": "\"IS THAT YOU STOP PLEASE JUST TELL ME\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "lettie",
          "t": "NO STOP SORRY STOP WRONG PERSON STOP",
          "to": "eli",
          "k": "wire"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "It isn't her. Of course it isn't. He'd heard something that sounded a little like her in the clicking of a wire, and reached for it."
    },
    {
     "s": "eli",
     "t": "SORRY STOP I THOUGHT YOU WERE MY GIRL STOP",
     "to": "lettie",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "He thinks that's the end of it. But a week later, a letter comes from Red Bluff."
    },
    {
     "s": "lettie",
     "t": "My name is Lettie Shaw. I'm not your girl, but it sounds like you need someone to talk to. So talk. What happened?",
     "to": "eli",
     "k": "letter"
    },
    {
     "choice": {
      "prompt": "A stranger is asking.",
      "opts": [
       {
        "t": "Tell her everything.",
        "fx": {
         "HEART": 2,
         "NERVE": 1,
         "set": [
          "told_lettie"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "You write eleven pages. She writes back four. She doesn't tell you what to do. She just says: \"That sounds like it really hurt. I'm sorry.\""
         },
         {
          "k": "narr",
          "t": "Nobody else had said that. Not like that."
         }
        ]
       },
       {
        "t": "Write back: \"Thanks. I'm okay.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She writes one more time anyway. \"You don't sound okay. The offer's still there.\""
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Lettie Shaw writes to him on and off for a year. Then one spring, she sends him an invitation on cream-colored card. She's getting married."
    },
    {
     "item": {
      "id": "invitation",
      "name": "A wedding invitation from Red Bluff",
      "desc": "From a stranger who listened. You didn't go. You wrote to say congratulations, and you meant it."
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It's strange, what life sends you. I lost the girl I loved, and a stranger I'd never met was kinder to me than anyone."
    }
   ],
   "loc": "post",
   "mood": "dusk",
   "goal": "Answer the telegram that came for you",
   "talk": "clerk",
   "place": "Post & Coach Office",
   "date": "Winter",
   "journal": [
    {
     "t": "I'll find out what happened. One day she'll tell me.",
     "fx": {
      "NERVE": 1
     }
    },
    {
     "t": "I don't want to know anymore. Knowing would be worse.",
     "fx": {
      "STONE": 1
     }
    },
    {
     "t": "It's like it happened to someone else. I'm watching from far away.",
     "fx": {
      "DRIFT": 2
     }
    }
   ]
  },
  {
   "id": "c7a",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "Months go by. Then one day June walks in holding a letter like it might bite her."
    },
    {
     "s": "june",
     "t": "It's her. That's her handwriting.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "It's a short letter. Polite. Like nothing ever happened. Like there was never a shaking hand in a chapel."
    },
    {
     "s": "rosie",
     "t": "Hi Eli. Hope you're well. I'm going to nursing school in Port Ellis after this term, so I won't be able to write much. Also, I told your cousin Mabel about you.",
     "to": "eli",
     "k": "letter"
    },
    {
     "k": "narr",
     "t": "He didn't even know Mabel was her cousin. He reads that line six times."
    },
    {
     "s": "eli",
     "t": "What did she say?",
     "to": "rosie",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "I'll tell you when I leave for Port Ellis.",
     "to": "eli",
     "k": "letter"
    },
    {
     "choice": {
      "prompt": "What do you write back?",
      "opts": [
       {
        "t": "Don't ask about any of it. Just be glad she's writing.",
        "fx": {
         "HEART": 1,
         "DRIFT": 1,
         "set": [
          "never_asked"
         ]
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "If I asked why she stopped, she might stop again. Talking to her made me happy. That was enough. I made it be enough."
         }
        ]
       },
       {
        "t": "Ask her gently: \"What happened last year?\"",
        "fx": {
         "NERVE": 2,
         "rosie": -1
        },
        "say": [
         {
          "k": "narr",
          "t": "Her reply takes a month. It doesn't mention last year at all. You don't ask again."
         }
        ]
       },
       {
        "silent": true,
        "t": "Fold it up without answering.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You last four days before you write back."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "golden",
   "goal": "Read the letter that finally came back",
   "talk": "june",
   "place": "The Ashby cottage",
   "date": "Spring, months later"
  },
  {
   "id": "c7b",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "The letters are formal now. And whenever he tries to be kind, she snaps at him."
    },
    {
     "s": "eli",
     "t": "Have you been eating okay? The nuns' soup sounded awful.",
     "to": "rosie",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "And what exactly are you going to do about it if I'm not?",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every nice thing I said bounced off like it hit a wall. But I kept trying. I didn't know how to stop."
    },
    {
     "choice": {
      "prompt": "You read her reply.",
      "opts": [
       {
        "t": "Write back something gentle anyway.",
        "fx": {
         "HEART": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "eli",
          "t": "Nothing, I guess. I just want to know you're okay.",
          "to": "rosie",
          "k": "letter"
         },
         {
          "k": "narr",
          "t": "She doesn't answer that part."
         }
        ]
       },
       {
        "t": "Write back something sharp.",
        "fx": {
         "STONE": 1,
         "rosie": -1
        },
        "say": [
         {
          "s": "eli",
          "t": "Nothing. Obviously.",
          "to": "rosie",
          "k": "letter"
         },
         {
          "k": "narr",
          "t": "You regret it before the ink is dry."
         }
        ]
       },
       {
        "t": "Don't answer this one. Wait for the next.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "dusk",
   "goal": "Write to Rosie again",
   "place": "Upstairs",
   "date": "That summer"
  },
  {
   "id": "c7c",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "Hattie Lowe, who sat next to Rosie in tenth year, still writes to her too. One afternoon she pulls Eli aside by the churchyard wall."
    },
    {
     "s": "hattie",
     "t": "You should see this. I don't know if I should show you. But you should see it.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "It's a letter from Rosie to Hattie. Hattie had asked, the way girls do: \"Do you like anyone?\""
    },
    {
     "s": "rosie",
     "t": "No. But I did get a confession from someone. I don't think I'm mature enough to decide something like that. And my parents matter to me.",
     "to": "hattie",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "A confession. Mine. That was me. \"I got a confession,\" like a package delivered to the wrong house."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But didn't she ask first? \"What would you say if I said I love you?\" Wasn't her hand shaking?"
    },
    {
     "choice": {
      "prompt": "Hattie is watching you.",
      "opts": [
       {
        "t": "\"Thanks for showing me, Hattie.\"",
        "fx": {
         "NERVE": 1,
         "HEART": 1,
         "hattie": 1
        },
        "say": [
         {
          "s": "hattie",
          "t": "I'm sorry, Eli. I think she's... confused. I don't think she meant to hurt you.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"That's not what happened. She asked first.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "hattie",
          "t": "I believe you. I just don't know what she believes.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Give the letter back.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "yard",
   "mood": "day",
   "goal": "See what Hattie wants to show you",
   "talk": "hattie",
   "place": "The old churchyard",
   "date": "End of twelfth year"
  },
  {
   "id": "c7d",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "The last night of school. All of them together. The Paper Outlaws, wanted in six towns. Abel brought a bottle of root beer he swears is whiskey."
    },
    {
     "s": "rook",
     "t": "To the end of being kids. Tomorrow we're grown-ups. God help us all.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Halfway through the night, June rides up the hill with a letter in her coat. She shrugs. \"It came this afternoon. Figured you'd want it.\""
    },
    {
     "s": "rosie",
     "t": "Congrats on finishing school. I wish you the best. I'm leaving for Port Ellis next week, and I won't be writing anymore. Please don't write back. Bye, Eli.",
     "to": "eli",
     "k": "letter"
    },
    {
     "k": "narr",
     "t": "The fire crackles. Rook is still talking. Nobody sees Eli fold the letter into a tiny square."
    },
    {
     "choice": {
      "prompt": "Ezra notices.",
      "opts": [
       {
        "t": "Hand him the letter.",
        "fx": {
         "NERVE": 1,
         "ezra": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "...Do you want to talk about it, or do you want to sit by the fire and not talk about it?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "The second one.",
          "to": "ezra"
         },
         {
          "s": "ezra",
          "t": "Good. I'm better at that one.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It's nothing. A letter from June's friend.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Okay. If you say so.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Throw it in the fire.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "Ezra watches it burn. He doesn't ask. He just sits closer."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "But she doesn't stay gone. That's the thing. Three months later, another letter. Then nothing. Then another one."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She'd close the door and then open it again. Over and over. And every time it opened, I walked right back in."
    }
   ],
   "loc": "ridge",
   "mood": "night",
   "goal": "Ride out with the boys for your last night of school",
   "talk": "rook",
   "others": [
    "toby",
    "ezra",
    "gideon",
    "abel"
   ],
   "place": "Coyote Ridge",
   "date": "Last night of school"
  },
  {
   "id": "c7e",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "She's home for Christmas. After the service, in the crowd at the chapel door, they end up face to face for the first time in two years."
    },
    {
     "s": "rosie",
     "t": "Eli.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Rosie. ...Merry Christmas.",
     "to": "rosie"
    },
    {
     "k": "narr",
     "t": "She's wearing a locket, open. Inside is a photo of a handsome man with slicked-back hair."
    },
    {
     "choice": {
      "prompt": "You ask...",
      "opts": [
       {
        "t": "\"Who's that in the locket?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "That? That's my boyfriend.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "...Okay.",
          "to": "rosie"
         },
         {
          "k": "narr",
          "t": "Just \"okay.\" You don't know what else to say. Inside, everything is falling apart."
         }
        ]
       },
       {
        "t": "\"It looks nice on you.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "Thanks. That's my boyfriend.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "...Okay.",
          "to": "rosie"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the locket and say nothing.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "rosie",
          "t": "That's my boyfriend, if you're wondering.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Weeks later, Hattie tells him: it was a photo of a stage actor. A famous one from the theater in Fort Calder. Rosie had laughed about it with her friends."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She showed me a picture of a stranger and called him her boyfriend. Just to see what I'd do. Or to make me stop. I never knew which."
    },
    {
     "k": "narr",
     "t": "After the holidays, the letters stop again. All of them come back."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And I just... kept hoping. That she'd come back. Or that I could change her mind. Or at least that someone would tell me what happened."
    }
   ],
   "loc": "chapel",
   "mood": "day",
   "goal": "Go to Sunday service. She's home for the holidays",
   "talk": "rosie",
   "place": "St. Agnes' Chapel",
   "date": "Christmas"
  },
  {
   "id": "c7f",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "August 25th. Opening day at the Territorial Academy up on North Ridge. Toby is going here too. And for some reason, so is Percy."
    },
    {
     "k": "narr",
     "t": "There's a ceremony. A brass band. A speech about the future. Eli doesn't hear any of it."
    },
    {
     "s": "percy",
     "t": "I wrote to Rosie last week. Ha. I told her, \"Our guy's still thinking about you. He's really down. You should write him.\"",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "You what?",
     "to": "percy"
    },
    {
     "s": "percy",
     "t": "Somebody had to say something! You never say anything!",
     "to": "eli"
    },
    {
     "s": "toby",
     "t": "Percy. Shut up. Right now.",
     "to": "percy"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Percy meant well. Percy always meant well. That was the worst thing about him."
    },
    {
     "choice": {
      "prompt": "You can't take it back now.",
      "opts": [
       {
        "t": "\"...Thanks for trying, Percy.\"",
        "fx": {
         "HEART": 1,
         "percy": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha. Yeah. You're welcome. Why do you look like that?",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Don't ever talk to her about me again.\"",
        "fx": {
         "STONE": 1,
         "percy": -1
        },
        "say": [
         {
          "s": "percy",
          "t": "Okay, okay! Ha. Sorry.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Walk away from the ceremony.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "academy",
   "mood": "golden",
   "goal": "Go to the opening day at the Territorial Academy",
   "talk": "toby",
   "others": [
    "percy"
   ],
   "place": "Territorial Academy",
   "date": "August 25th"
  },
  {
   "id": "c7g",
   "chapter": 7,
   "lines": [
    {
     "k": "narr",
     "t": "When he gets home that night, there's a telegram waiting. The first one she's ever sent him."
    },
    {
     "s": "rosie",
     "t": "STILL HUNG UP ON THAT STOP GO DO SOMETHING WITH YOUR LIFE STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "Then nothing. Every letter comes back. For good this time."
    },
    {
     "k": "narr",
     "t": "He stands in the kitchen holding the paper. Ma is asleep. The lamp is on."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every dream I had just... fell apart. All at once, really quietly. No noise. Like a drawing ripped down the middle."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She left without telling me why. Without anything. I wasn't even worth the truth."
    },
    {
     "choice": {
      "prompt": "Ma's lamp is still on.",
      "opts": [
       {
        "t": "Wake Ma up. Tell her.",
        "fx": {
         "HEART": 2,
         "ma": 2,
         "NERVE": 1,
         "set": [
          "told_ma"
         ]
        },
        "say": [
         {
          "s": "ma",
          "t": "Eli? What's wrong? Oh... oh, baby. Come here.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "You don't tell her everything. You don't know how. But you tell her a girl hurt you, and she doesn't ask which one, and she holds on to you until the lamp burns low."
         }
        ]
       },
       {
        "t": "Turn the lamp down and go upstairs.",
        "fx": {
         "STONE": 2
        }
       },
       {
        "t": "Sit at the table until the sun comes up.",
        "fx": {
         "DRIFT": 2
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "After that night, everything goes grey. Not dark. Just grey. He goes to class. He passes his exams. He smiles when people expect him to."
    },
    {
     "k": "narr",
     "t": "He tries to cry once, alone, in the barn. Nothing comes. Like the well has run dry."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I stopped caring about everything. I just acted like I was fine. Nobody could help, because nobody knew anything was wrong."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "At night she came back. Every night, for a long time. Thinking about her was the only thing in that house that wasn't grey."
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Ride home after the ceremony",
   "place": "The Ashby cottage",
   "date": "That same night",
   "journal": [
    {
     "t": "One day I'll stop asking why. Not yet.",
     "fx": {
      "NERVE": 1,
      "HEART": 1
     }
    },
    {
     "t": "I don't feel anything. That's easier.",
     "fx": {
      "STONE": 2
     }
    },
    {
     "t": "I'm just going through the motions. My body goes to class. I don't know where the rest of me goes.",
     "fx": {
      "DRIFT": 2
     }
    }
   ]
  },
  {
   "id": "c8a",
   "chapter": 8,
   "lines": [
    {
     "k": "narr",
     "t": "She doesn't write to Eli. But she writes to Toby. And to Percy. Long, chatty letters. She's training to be an X-ray nurse in Port Ellis, working the new machines that can see through skin to the bone."
    },
    {
     "s": "toby",
     "t": "She asked about you again. Kind of. She asked \"how everyone is,\" then she asked about you, then she said \"never mind.\"",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Sometimes, when Toby writes back, Eli takes the pen and adds a paragraph at the end. She answers those paragraphs. She never says she knows they're his."
    },
    {
     "s": "toby",
     "t": "Percy heard an older student at her school asked her out. And she liked him, Percy said. Then it just... ended. Nobody knows why.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Another story I'd only ever know the outline of."
    },
    {
     "choice": {
      "prompt": "Toby slides his letter paper across the table.",
      "opts": [
       {
        "t": "Add a paragraph. Something light.",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You write about Pilgrim getting into the Academy apple orchard. She writes back: \"Tell Eli his horse is a criminal.\" It's the best thing you've read all year."
         }
        ]
       },
       {
        "t": "\"No. I'm done writing to her through you.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "toby",
          "t": "Okay. ...You know I don't mind, though.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look out the window.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "academy",
   "mood": "day",
   "goal": "Find Toby after class",
   "talk": "toby",
   "place": "Territorial Academy",
   "date": "Second year at the Academy"
  },
  {
   "id": "c8b",
   "chapter": 8,
   "lines": [
    {
     "k": "narr",
     "t": "He decides not to let her go completely. He writes to her himself. Just a friendly note."
    },
    {
     "k": "narr",
     "t": "She writes back. And again. They write every week. Sometimes she sends a telegram for no reason, just \"HI STOP BORED STOP.\" He's happy again. Really happy."
    },
    {
     "k": "narr",
     "t": "Then one letter, out of nowhere, near the bottom:"
    },
    {
     "s": "rosie",
     "t": "I need to tell you something. That letter back in school, the one that said \"what would you say if I said I love you\"? That wasn't me. My cousin Mabel was staying with me, and she wrote that part. I didn't even know. I only just found out.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "rosie",
     "t": "Sorry if it confused you.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Confused me."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "The shaking hand. The chapel. The nuns. \"I love you. My hand is shaking.\" Was that Mabel too? For three weeks, every letter?"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I knew she was lying. I knew it the way you know your own handwriting. But I wanted to keep talking to her more than I wanted to be right."
    },
    {
     "choice": {
      "prompt": "How do you answer?",
      "opts": [
       {
        "t": "Don't fight it. \"Okay. Thanks for telling me.\"",
        "fx": {
         "HEART": 1,
         "DRIFT": 1,
         "rosie": 1,
         "set": [
          "swallowed"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "You write it in your neatest handwriting so it doesn't look like it cost you anything."
         }
        ]
       },
       {
        "t": "\"That's not true, Rosie. We both know it's not.\"",
        "fx": {
         "NERVE": 3,
         "rosie": -2,
         "set": [
          "called_lie"
         ]
        },
        "say": [
         {
          "k": "narr",
          "t": "Her reply takes six weeks. It says: \"Believe whatever you want.\" Then the week after, a letter about her exams, like nothing happened."
         }
        ]
       },
       {
        "silent": true,
        "t": "Don't answer for a month.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She writes first. That's never happened before. \"Are you mad?\" You write back: \"No.\" It's not true, and it's not false."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "lodging",
   "mood": "golden",
   "goal": "Read the letter waiting at your room",
   "place": "Academy lodging",
   "date": "Third year"
  },
  {
   "id": "c8c",
   "chapter": 8,
   "lines": [
    {
     "s": "ezra",
     "t": "So you believe it? The cousin thing?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "No.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Then why are you still writing to her?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Because if I believed the truth, I'd have to stop. And I'm not ready.",
     "to": "ezra"
    },
    {
     "k": "narr",
     "t": "Larkspur is spread out below them. The yellow window on the hill is still there. Her parents' house. She's not in it."
    },
    {
     "s": "ezra",
     "t": "What do you actually want, Eli? Not from her. In general. What do you want?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ezra has never asked you that before.",
      "opts": [
       {
        "t": "\"I want to know what happened. Just the truth. That's all.\"",
        "fx": {
         "NERVE": 2
        },
        "say": [
         {
          "s": "ezra",
          "t": "And if she never tells you?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Then I guess I'll want it forever.",
          "to": "ezra"
         }
        ]
       },
       {
        "t": "\"I want to stop wanting her.\"",
        "fx": {
         "NERVE": 1,
         "HEART": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "That's the first honest thing you've said all summer.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't know. I don't think I want anything anymore.\"",
        "fx": {
         "DRIFT": 2,
         "STONE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "...That scares me more than anything else you could've said.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "tower",
   "mood": "night",
   "goal": "Climb the water tower with Ezra",
   "talk": "ezra",
   "place": "The old water tower",
   "date": "That summer, home from school"
  },
  {
   "id": "c8d",
   "chapter": 8,
   "lines": [
    {
     "k": "narr",
     "t": "More news, second-hand. A boy in her class asked her out. She said no. But the girls in her dorm were pushing her to say yes, Percy says. Wouldn't leave her alone about it."
    },
    {
     "k": "narr",
     "t": "He can't carry it anymore. Not knowing. He decides to end it the only way he knows how: by saying the true thing, plainly, one time. So that whatever happens, it's done."
    },
    {
     "k": "narr",
     "t": "He walks up to the old wishing well on North Ridge, where students go to make wishes, and writes it on his knee."
    },
    {
     "choice": {
      "prompt": "What do you write?",
      "opts": [
       {
        "t": "\"I've loved you since seventh year. I still do. You don't have to answer to be kind. I just needed you to hear it from me. Not from a cousin, or a card, or Percy.\"",
        "fx": {
         "NERVE": 3,
         "HEART": 2,
         "set": [
          "confessed_rosie"
         ]
        }
       },
       {
        "t": "\"I think I still have feelings for you. Do you have any for me?\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "confessed_rosie"
         ]
        }
       },
       {
        "crack": true,
        "crackNote": "You write three pages and tear them all up.",
        "t": "Write everything."
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "He drops a coin in the well before he mails it. Then a second one, in case the first one didn't count."
    },
    {
     "k": "narr",
     "t": "Her answer comes ten days later."
    },
    {
     "s": "rosie",
     "t": "I don't like you that way, Eli. I think we should just be friends. I hope that's okay.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She didn't block me. She didn't send it back. She just... put me in a room called \"friend\" and closed the door gently."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Somehow that was worse. At least you can be angry at a slammed door."
    },
    {
     "choice": {
      "prompt": "You read it at the well.",
      "opts": [
       {
        "t": "\"It's okay. Friends, then.\"",
        "fx": {
         "HEART": 1,
         "NERVE": 1
        }
       },
       {
        "t": "\"Friends. Sure.\"",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Drop the letter down the well.",
        "fx": {
         "DRIFT": 1,
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "It floats for a second on the dark water. Then it's gone."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "well",
   "mood": "dusk",
   "goal": "Write your confession at the wishing well",
   "place": "The wishing well",
   "date": "Fall of third year"
  },
  {
   "id": "c8e",
   "chapter": 8,
   "lines": [
    {
     "k": "narr",
     "t": "The letters thin out. Every week. Then every month. Then once a season. Then a card at Christmas and nothing in between."
    },
    {
     "s": "ma",
     "t": "You've got a letter. From Port Ellis.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "It's just a Christmas card.",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "You read a Christmas card like it's a will, Eli.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Even after all that, the questions kept me up at night. If she never liked me, why did she look at me every day on that porch? Why did she shut me out the one time I said \"I love you\"? Why did she tell Hattie she \"got a confession,\" like it just happened to her, when she was the one who started it?"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Only she knows. And she'll never say. And if she did, I wouldn't believe her. That's how it ends: with no ending at all."
    },
    {
     "choice": {
      "prompt": "Ma puts a cup of coffee in front of you.",
      "opts": [
       {
        "t": "\"Ma... how did you know, with Pa?\"",
        "fx": {
         "HEART": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "I didn't. I just picked him, and then I kept picking him. Some days that's all love is. Picking someone again.",
          "to": "eli"
         },
         {
          "s": "ma",
          "t": "But they have to pick you back, son. Or it's just you standing in a field, picking.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Thanks, Ma.\"",
        "fx": {
         "ma": 1
        }
       },
       {
        "silent": true,
        "t": "Drink the coffee.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "winter",
   "goal": "Go home for winter break",
   "talk": "ma",
   "place": "The Ashby cottage",
   "date": "The years after",
   "journal": [
    {
     "t": "I'm going to stop waiting for her to explain. I'm allowed to move on without an answer.",
     "fx": {
      "NERVE": 2,
      "HEART": 1
     }
    },
    {
     "t": "Some people don't deserve the truth. I guess I'm one of them.",
     "fx": {
      "STONE": 2
     }
    },
    {
     "t": "I'll keep the questions. They're all I have left of her.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c9a",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "The fever comes up the river in March. By April, the whole territory is shut down. The Academy closes. The coaches stop. Everyone stays home and waits."
    },
    {
     "k": "narr",
     "t": "It lasts two years."
    },
    {
     "s": "ma",
     "t": "Eggs. Water. Wood. Then you can go back to staring at the wall.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I don't stare at the wall.",
     "to": "ma"
    },
    {
     "s": "june",
     "t": "You stare at it like it owes you money.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Strangely, those two years are the gentlest he's had in a long time. Nobody expects anything from him except eggs, water and wood. Nobody's writing. Nobody's leaving."
    },
    {
     "choice": {
      "prompt": "Ma hands you the egg basket.",
      "opts": [
       {
        "t": "\"Thanks, Ma. For everything.\"",
        "fx": {
         "HEART": 2,
         "ma": 2,
         "DRIFT": -1
        },
        "say": [
         {
          "s": "ma",
          "t": "For eggs? Good grief. Go on. The hens won't wait.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Make a joke. \"Me and the hens understand each other.\"",
        "fx": {
         "HEART": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "june",
          "t": "Because you both sit around all day making weird noises?",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Take the basket.",
        "fx": {
         "DRIFT": -1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Slowly, really slowly, the grey starts to lift. He starts noticing things again. The light on the creek. Pilgrim's bad manners. June's laugh."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "The quarantine was what finally let me breathe. Everything stopped, so I could stop too. Nobody could leave, so nobody could leave me."
    }
   ],
   "loc": "home",
   "mood": "overcast",
   "goal": "Help Ma with the morning chores",
   "talk": "ma",
   "others": [
    "june"
   ],
   "place": "The Ashby cottage",
   "date": "The year of the fever"
  },
  {
   "id": "c9b",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "When the Academy opens again, there's a girl in his year he's known since the first week. Delphine Moreau. Sharp eyes, sharp tongue. He never really noticed her before. He was too busy being heartbroken."
    },
    {
     "k": "narr",
     "t": "Now he notices."
    },
    {
     "k": "narr",
     "t": "But he's learned one thing, at least. This time, he wants to know first if she's seeing someone."
    },
    {
     "s": "eli",
     "t": "Is Delphine seeing anyone?",
     "to": "percy"
    },
    {
     "s": "percy",
     "t": "Moreau? Ha! No. Totally single. But... people say she's got an attitude. She'll bite your head off.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I like that she says what she thinks.",
     "to": "percy"
    },
    {
     "s": "percy",
     "t": "Ha! Of course you do. She takes the north coach, same as Toby.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "You could switch coaches.",
      "opts": [
       {
        "t": "Switch to the north coach.",
        "fx": {
         "NERVE": 1,
         "set": [
          "switched_coach"
         ]
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha! Look at you. Making a plan.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'll just say hi in the hallway.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "You? Say hi? In a hallway? Ha!",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Think about it for a week.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You switch coaches anyway, a week later."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "academy",
   "mood": "day",
   "goal": "Ask Percy about Delphine Moreau",
   "talk": "percy",
   "place": "Territorial Academy",
   "date": "Final year, after the fever"
  },
  {
   "id": "c9c",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "The north coach. Delphine sits by the window. Eli sits two rows back, next to Toby."
    },
    {
     "s": "toby",
     "t": "You should know something. There's this blacksmith's apprentice. Jack Kettle. Big shoulders. He's always hanging around the depot when this coach comes in.",
     "to": "eli"
    },
    {
     "s": "toby",
     "t": "People say she went riding with him. On her birthday.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Percy said she was single.",
     "to": "toby"
    },
    {
     "s": "toby",
     "t": "Maybe she is. Maybe Percy's an idiot. Could be both.",
     "to": "eli"
    },
    {
     "ride": {
      "notices": [
       "Delphine laughing at something",
       "Sun through the coach window",
       "Toby asleep on your shoulder"
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every time I heard Jack Kettle's name, my chest got tight. Same feeling. Same spot. Like an old injury that can tell when it's going to rain."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But I wanted her to know. Even if it was hopeless. Just once, I wanted to say it before someone else decided for me."
    }
   ],
   "loc": "depot",
   "mood": "golden",
   "goal": "Catch the north coach home",
   "talk": "toby",
   "place": "The stage depot",
   "date": "Fall"
  },
  {
   "id": "c9d",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "He finds her on the Academy steps, alone for once."
    },
    {
     "s": "eli",
     "t": "Delphine. Can I tell you something?",
     "to": "delphine"
    },
    {
     "s": "delphine",
     "t": "You're Eli. From the north coach. You always look like you're about to say something and then you don't.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "This time you say it.",
      "opts": [
       {
        "t": "\"I like you. I've liked you since spring. I don't need anything back. I just wanted you to know.\"",
        "fx": {
         "NERVE": 3,
         "HEART": 1,
         "set": [
          "told_delphine"
         ]
        }
       },
       {
        "t": "\"Would you ever want to go out with me?\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "told_delphine"
         ]
        }
       }
      ]
     }
    },
    {
     "s": "delphine",
     "t": "...Oh.",
     "to": "eli"
    },
    {
     "s": "delphine",
     "t": "That's really nice. But I'm not interested. I don't really know anything about love. Can we just be friends?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "She's waiting.",
      "opts": [
       {
        "t": "\"Friends. Okay. Thanks for being honest.\"",
        "fx": {
         "HEART": 2,
         "NERVE": 1,
         "delphine": 1
        },
        "say": [
         {
          "s": "delphine",
          "t": "You're weird, Eli Ashby. Most guys sulk.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "At least I said it. That's something.",
          "to": "delphine"
         }
        ]
       },
       {
        "t": "\"Sure.\"",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Nod and leave.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It hurt. But at least I said it. That was new. That was mine."
    },
    {
     "k": "narr",
     "t": "Three weeks later, she and Jack Kettle are dating. Openly. Everyone knows."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "\"I don't know anything about love.\" But she knew enough for Jack. Why couldn't she just tell me she was already seeing someone? I would have backed off without a word."
    }
   ],
   "loc": "academy",
   "mood": "golden",
   "goal": "Tell Delphine how you feel",
   "talk": "delphine",
   "place": "Territorial Academy",
   "date": "That week"
  },
  {
   "id": "c9e",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "A few weeks later, she and Jack break up. Loudly, from what people say."
    },
    {
     "s": "toby",
     "t": "Start over. Be friends first, for real. Talk to her. Then later, ask again.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "So he does. He writes her notes. He thinks of things to talk about all day. Books. Classes. The Academy cat. The weather, even."
    },
    {
     "s": "eli",
     "t": "Did you finish the Henley essay? I thought the second half made no sense.",
     "to": "delphine",
     "k": "letter"
    },
    {
     "s": "delphine",
     "t": "Yes.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "t": "Did you hear Professor Gault fell in the pond?",
     "to": "delphine",
     "k": "letter"
    },
    {
     "s": "delphine",
     "t": "Mm.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "t": "Are you going to the spring dance?",
     "to": "delphine",
     "k": "letter"
    },
    {
     "s": "delphine",
     "t": "Okay.",
     "to": "eli",
     "k": "letter"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "\"Okay.\" \"Mm.\" \"Yes.\" Like answering questions on a test. I was the only one keeping it going, blowing on a fire that didn't want to burn."
    },
    {
     "choice": {
      "prompt": "You read \"Okay.\" for the fourth time.",
      "opts": [
       {
        "t": "Keep trying. One more note.",
        "fx": {
         "HEART": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "eli",
          "t": "Want to go for a walk sometime? Just to talk, face to face.",
          "to": "delphine",
          "k": "letter"
         },
         {
          "s": "delphine",
          "t": "Maybe some other time.",
          "to": "eli",
          "k": "letter"
         }
        ]
       },
       {
        "t": "Stop writing.",
        "fx": {
         "NERVE": 2,
         "STONE": 1,
         "set": [
          "let_delphine_go"
         ]
        }
       },
       {
        "silent": true,
        "t": "Stare at \"Okay.\" until it stops looking like a word.",
        "fx": {
         "DRIFT": 2
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'm not a stranger. I'm not asking for a dance or a ring. Just a walk. And she couldn't even give me that."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But it's not worth anything when the other person doesn't want it. So I stopped. Quietly. No big speech. I just stopped, and she never noticed."
    }
   ],
   "loc": "lodging",
   "mood": "dusk",
   "goal": "Write to Delphine",
   "place": "Academy lodging",
   "date": "The next spring"
  },
  {
   "id": "c9f",
   "chapter": 9,
   "lines": [
    {
     "k": "narr",
     "t": "He graduates. He's good at the wire. The best in his year. Of course he is. It's the one thing he was always going to be good at."
    },
    {
     "k": "narr",
     "t": "Mr. Hargrove, the head operator at Ironwood, looks him up and down."
    },
    {
     "s": "hargrove",
     "t": "Ashby. They say you can do sixty words a minute and never miss a letter.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Sixty-four, sir.",
     "to": "hargrove"
    },
    {
     "s": "hargrove",
     "t": "Ha. And humble, too. Desk by the window. Your shift's two to ten. Don't fall for the girls on the Port Ellis line. They're all engaged.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Desk by the window. Just like Miss Bright's class. Some things find you again."
    },
    {
     "choice": {
      "prompt": "Mr. Hargrove is waiting.",
      "opts": [
       {
        "t": "\"Thank you, sir. I won't let you down.\"",
        "fx": {
         "HEART": 1,
         "NERVE": 1
        },
        "say": [
         {
          "s": "hargrove",
          "t": "They all say that. Prove it.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Two to ten. Got it.\"",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Sit down at the key.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "day",
   "goal": "Show up for your first day at the wire office",
   "talk": "hargrove",
   "place": "Ironwood Wire Office",
   "date": "After graduation",
   "journal": [
    {
     "t": "I said it out loud to Delphine. I didn't hide. That counts.",
     "fx": {
      "NERVE": 2,
      "HEART": 1
     }
    },
    {
     "t": "I keep choosing people who don't choose me back.",
     "fx": {
      "STONE": 1
     }
    },
    {
     "t": "Work is good. Work is quiet. Work doesn't leave.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c10a",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "There's a woman who takes the evening coach from the hat shop, one stop past the wire office. Brown coat. A book always open, never read."
    },
    {
     "k": "narr",
     "t": "Her coach and his coach cross at the Ironwood depot every evening. Most nights he doesn't need her coach. Some nights he takes it anyway, gets off at her stop, and catches another one home."
    },
    {
     "k": "narr",
     "t": "Her name, he finds out from the depot ledger, is Iris Lane."
    },
    {
     "k": "narr",
     "t": "And her birthday, from the same ledger, is the same as his. Same day. Same month."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every time I wanted to see her, there she was. Like wanting was a kind of telegraph, and somewhere a needle twitched."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I see a hundred people from that hat shop every week. None of them have my birthday. None of them keep showing up like that."
    },
    {
     "choice": {
      "prompt": "Iris is getting on her coach. She glances up.",
      "opts": [
       {
        "t": "Tip your hat.",
        "fx": {
         "NERVE": 1,
         "iris": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She smiles, a little confused, the way you smile at someone you've seen before but can't place."
         }
        ]
       },
       {
        "t": "Look at your boots.",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Watch the coach leave.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "depot",
   "mood": "dusk",
   "goal": "Wait for your evening coach at the depot",
   "others": [
    "iris"
   ],
   "place": "Ironwood stage depot",
   "date": "Second spring at the wire office"
  },
  {
   "id": "c10b",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "Rook works at the Ironwood freight yard now. He still laughs like he's twelve."
    },
    {
     "s": "rook",
     "t": "Iris Lane? I know her! Well, I know who she is. I thought she was from the Academy. I've been saying hi to her for a year.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "You've been— for a year?",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "I say hi to everyone, Ashby. That's the trick. That's the whole trick. You should try it.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli tells him about the coaches. The birthday. All the coincidences."
    },
    {
     "s": "rook",
     "t": "So say something. \"Happy almost-birthday, I think we share it.\" It's practically a poem.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Rook is grinning.",
      "opts": [
       {
        "t": "\"Maybe she's the one, Rook. Could she be?\"",
        "fx": {
         "HEART": 1,
         "rook": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Could be. Could also be she's a lady who likes hats. Only one way to find out.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'll get nervous. I always get nervous.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Then be nervous out loud. Nervous out loud still counts as out loud.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Stir your coffee.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "teahouse",
   "mood": "golden",
   "goal": "Meet Rook at the Kettle & Lamp",
   "talk": "rook",
   "place": "The Kettle & Lamp",
   "date": "That week"
  },
  {
   "id": "c10c",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "Ten o'clock. He's so tired he gets on the wrong coach. It's halfway back to the office before he notices."
    },
    {
     "k": "narr",
     "t": "He gets off. Waits in the cold. Catches the next coach toward the hat shop to loop back around."
    },
    {
     "k": "narr",
     "t": "And there she is. Iris Lane. Alone, by the window, at ten at night, with her unread book."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "No way. There's just no way. Out of every coach in this town, at this hour—"
    },
    {
     "choice": {
      "prompt": "There's an empty seat across from her.",
      "opts": [
       {
        "crack": true,
        "crackNote": "You sit two rows behind instead. You don't know why.",
        "t": "Take the seat across from her."
       },
       {
        "t": "Sit two rows behind. Close enough to see her reflection in the window.",
        "fx": {
         "DRIFT": 1
        }
       },
       {
        "silent": true,
        "t": "Stand by the door.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "She gets off at her stop. She doesn't look back. Why would she?"
    }
   ],
   "loc": "office",
   "mood": "night",
   "goal": "Catch a coach home after your shift",
   "others": [
    "iris"
   ],
   "place": "Ironwood Wire Office",
   "date": "A tired Thursday"
  },
  {
   "id": "c10d",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "He makes himself a promise. If he sees her this week, any day this week, he'll talk to her. Introduce himself. Ask her name like he doesn't already know it."
    },
    {
     "k": "narr",
     "t": "Monday. Nothing. Tuesday. Wednesday. Thursday."
    },
    {
     "k": "narr",
     "t": "Friday, he's given up, he's turning to go home, and a guy from the hat shop rides up and drops her off at the depot on the back of his horse."
    },
    {
     "k": "narr",
     "t": "She laughs at something he says. She waves him off. Then she stands there, alone, ten feet away."
    },
    {
     "choice": {
      "prompt": "Ten feet.",
      "opts": [
       {
        "crack": true,
        "crackNote": "Your heart is pounding so hard you can feel it in your teeth.",
        "t": "Walk up and say hi."
       },
       {
        "crack": true,
        "crackNote": "The words are right there. They won't come out.",
        "t": "\"Excuse me, miss—\""
       },
       {
        "t": "Get on your coach.",
        "fx": {
         "DRIFT": 1,
         "STONE": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "He gets on his coach. Through the window, he watches her open her book."
    },
    {
     "k": "narr",
     "t": "After that week, he never sees her again. Not once. He takes her coach every night for a month. She's just gone."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Was she seeing someone? I don't know. Older? Younger? Did she ever even notice me? I'll never know. I missed every chance, and they were handed to me."
    }
   ],
   "loc": "depot",
   "mood": "dusk",
   "goal": "Wait for Iris at the depot, like you promised yourself",
   "others": [
    "iris"
   ],
   "place": "Ironwood stage depot",
   "date": "The next week"
  },
  {
   "id": "c10e",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "The end of the east pier. Black water. Someone's lantern on a boat, far away."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Three weeks. No coincidences. No luck. Whatever was connecting us just snapped and blew away."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "My whole life, whenever I needed something, I'd get close. So close I could almost touch it. And then I wouldn't get it. Ever since I was a kid."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I just want someone to hold my hand and say: Don't worry. It's going to be okay."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That's all. That's such a small thing to want."
    },
    {
     "choice": {
      "prompt": "The water is very dark.",
      "opts": [
       {
        "t": "Think about Ma's lamp in the window.",
        "fx": {
         "HEART": 1,
         "ma": 1,
         "DRIFT": -1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "She'll have it on. She always does. Go home, Eli."
         }
        ]
       },
       {
        "t": "Think about nothing at all.",
        "fx": {
         "DRIFT": 2
        }
       },
       {
        "t": "Throw a stone as far as you can.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You don't hear it land."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "He stays until the lantern on the boat goes out. Then he walks back down the pier, one board at a time, and goes home."
    }
   ],
   "loc": "pier",
   "mood": "night",
   "goal": "Walk out to the end of the east pier",
   "place": "The east pier",
   "date": "Three weeks later"
  },
  {
   "id": "c10f",
   "chapter": 10,
   "lines": [
    {
     "k": "narr",
     "t": "His birthday. Iris Lane's birthday too, somewhere out there."
    },
    {
     "k": "narr",
     "t": "If things had gone differently, he'd planned to spend it with her. Even just as friends. Even just one coffee."
    },
    {
     "s": "clerk",
     "t": "Nothing for you today, Mr. Ashby. Sorry.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Nobody remembers. Not the office. Not the guys, who have their own problems now. Ma is away visiting Aunt Rhoda. Her card will come late."
    },
    {
     "k": "narr",
     "t": "He's short on money this month. He already owes Ma thirty dollars he hasn't paid back. He's too ashamed to ask for more."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Sometimes I feel like I don't exist. Like I'm walking around inside the world, but nobody can see in."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "My friends do care. I know they do. But friends can't hold you up forever. They've got their own stuff to carry."
    },
    {
     "k": "narr",
     "t": "There's a new telephone at the post office. Five cents a minute to Port Ellis. He's been thinking about it for a year."
    },
    {
     "k": "narr",
     "t": "He puts in the coins. He asks for the nursing school. He waits while they go get her."
    },
    {
     "s": "rosie",
     "t": "...Eli? Is something wrong?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "This is the third time you've tried to call. The first two times, you hung up before they found her.",
      "opts": [
       {
        "t": "\"Rosie. I still love you. I wanted you to hear me say it. Just once.\"",
        "fx": {
         "NERVE": 3,
         "set": [
          "called_rosie"
         ]
        }
       },
       {
        "t": "\"Nothing's wrong. I just... wanted to tell you something.\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "called_rosie"
         ]
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "And then she says something."
    },
    {
     "k": "narr",
     "t": "He's never repeated it. Not to Rook, not to Ezra, not to Ma. Not even in the diary he keeps under the floorboard. He doesn't have words for it."
    },
    {
     "k": "narr",
     "t": "It wasn't \"I'm not interested.\" It wasn't \"I'm not ready.\" It was something else. Something meant to make sure he never called again."
    },
    {
     "k": "narr",
     "t": "It works."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I hung up. I stood there holding the earpiece until the operator asked if I needed help."
    }
   ],
   "loc": "post",
   "mood": "overcast",
   "goal": "It's your birthday. Check the mail",
   "talk": "clerk",
   "place": "Post & Coach Office",
   "date": "Your birthday",
   "journal": [
    {
     "t": "I don't have to repeat what she said. But I did call. I did say it.",
     "fx": {
      "NERVE": 2
     }
    },
    {
     "t": "That's it. No more. I'm done reaching out to people.",
     "fx": {
      "STONE": 2
     }
    },
    {
     "t": "I don't remember walking home.",
     "fx": {
      "DRIFT": 2
     }
    }
   ]
  },
  {
   "id": "c10g",
   "chapter": 10,
   "lines": [
    {
     "s": "percy",
     "t": "Ha. Did you see? The photographer in Port Ellis put her picture in his window. Rosie Marlowe. With some guy in a nice suit. Arm in arm. Ha. ...Sorry. Was that the wrong thing to say?",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "It's in the society page too. \"Miss R. Marlowe, often seen with Mr. —.\" He doesn't read the name."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Even after she said no. Even after the phone call. Somewhere inside I'd kept a little bit of hope. That one day she'd turn around."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Now it's never going to happen. Never. I said that word out loud in my room and it didn't even echo."
    },
    {
     "choice": {
      "prompt": "Percy is fidgeting.",
      "opts": [
       {
        "t": "\"It's okay, Percy. Thanks for telling me straight.\"",
        "fx": {
         "HEART": 1,
         "NERVE": 1,
         "percy": 1
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha. Yeah. You're... taking this well? You're taking this weirdly well.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't care anymore.\"",
        "fx": {
         "STONE": 2
        },
        "say": [
         {
          "s": "percy",
          "t": "Ha. Right. Sure. Me neither.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Fold the newspaper up really small.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "You put it in your shirt pocket. Later, it goes in the tin."
         }
        ]
       }
      ]
     }
    },
    {
     "item": {
      "id": "clipping",
      "name": "A newspaper clipping",
      "desc": "The society page. You never read the name."
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "That spring, I decided to quit. Quit reaching out. Quit writing. Quit everyone I knew, quietly, one by one, until there was nobody left to let me down."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't quite manage it. Rook wouldn't let me. But I tried."
    }
   ],
   "loc": "teahouse",
   "mood": "overcast",
   "goal": "See what Percy is waving at you",
   "talk": "percy",
   "place": "The Kettle & Lamp",
   "date": "That spring"
  },
  {
   "id": "c11a",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "The company sends him out to the relay shack on the beach. One man, one key, one stove, and the ocean. He passes messages between the Port Ellis line and the main office."
    },
    {
     "k": "narr",
     "t": "Nobody visits. That's fine with him."
    },
    {
     "k": "narr",
     "t": "But the wire is never quiet. Every afternoon, the main office taps him. It's Viola Sutton, the operator on the Port Ellis desk. She's from down south, and she taps faster than most people talk."
    },
    {
     "s": "viola",
     "t": "ASHBY STOP YOU ALIVE OUT THERE STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "s": "viola",
     "t": "HARGROVE SPILLED COFFEE ON THE LEDGER AGAIN STOP NEW GIRL ON NIGHT SHIFT LIKES THE COAL GUY STOP TELL ME SOMETHING STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "She tells him everything. Who's fighting, who's dating, what everyone had for lunch. He doesn't care about most of it. He listens anyway. It's company."
    },
    {
     "choice": {
      "prompt": "Viola is waiting for an answer.",
      "opts": [
       {
        "t": "\"ALIVE STOP TELL ME ABOUT THE COAL GUY STOP\"",
        "fx": {
         "HEART": 1,
         "viola": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "HA STOP KNEW YOU LOVED GOSSIP STOP",
          "to": "eli",
          "k": "wire"
         }
        ]
       },
       {
        "t": "\"BUSY STOP\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "LIAR STOP NOBODY IS BUSY AT A RELAY SHACK STOP",
          "to": "eli",
          "k": "wire"
         }
        ]
       },
       {
        "silent": true,
        "t": "Tap back a single dot. Got it.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "A DOT STOP YOU ARE IMPOSSIBLE STOP",
          "to": "eli",
          "k": "wire"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't talk much. I never have. But she didn't seem to mind. She talked enough for both of us."
    }
   ],
   "loc": "shack",
   "mood": "day",
   "goal": "Start your new post at the relay shack",
   "place": "The relay shack",
   "date": "Two years later"
  },
  {
   "id": "c11b",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "Toby rides all the way out to the shack, which nobody ever does. He's got his serious face on."
    },
    {
     "s": "toby",
     "t": "It's Rosie. Her boyfriend, the guy from the photo, they're done. It was bad, Eli. She called me in the middle of the night. She was... in a really dark place. She said some stuff that scared me.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Is she okay?",
     "to": "toby"
    },
    {
     "s": "toby",
     "t": "She is now. She's got people around her. Her sister's with her. I just thought you'd want to know.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Something awful and something hopeful happen in Eli's chest at the same time."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I hated that I felt it. She was hurting, and some small, selfish part of me thought: Now she won't love anyone else. Now maybe..."
    },
    {
     "choice": {
      "prompt": "Toby is watching you.",
      "opts": [
       {
        "t": "\"I hope she's okay. Really. That's what matters.\"",
        "fx": {
         "HEART": 2,
         "NERVE": 1
        },
        "say": [
         {
          "s": "toby",
          "t": "Yeah. It is.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Do you think she'd want to hear from me?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "toby",
          "t": "I don't know. Give it time. Her birthday's in a month. Wish her a happy birthday. Just that.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the ocean.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "A month later, on her birthday, he sends a short, careful telegram. HAPPY BIRTHDAY STOP HOPE THIS YEAR IS GOOD TO YOU STOP. She wires back: THANK YOU STOP."
    },
    {
     "k": "narr",
     "t": "Two words. He reads them all night."
    }
   ],
   "loc": "shack",
   "mood": "golden",
   "goal": "Toby has ridden all the way out to see you",
   "talk": "toby",
   "place": "The relay shack",
   "date": "Fall"
  },
  {
   "id": "c11c",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "Then, out of nowhere, a message on the Port Ellis line for the relay shack. For him."
    },
    {
     "s": "rosie",
     "t": "ELI STOP NEED HELP WITH A PAPER ON X-RAY WIRING STOP YOU KNOW WIRES STOP ARE YOU BUSY STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "He's never busy. He helps. They wire back and forth for two weeks. Coils and currents, then jokes about her teacher, then how her mom is, and how his is."
    },
    {
     "s": "rosie",
     "t": "YOU WERE ALWAYS SMART STOP I REMEMBER THE WINDOW SEAT STOP",
     "to": "eli",
     "k": "wire"
    },
    {
     "choice": {
      "prompt": "It feels like being friends. Real friends, finally.",
      "opts": [
       {
        "t": "Enjoy it. Don't ask for anything more.",
        "fx": {
         "HEART": 2,
         "rosie": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "For two weeks it was like being fifteen on that porch again. Except this time we were actually talking."
         }
        ]
       },
       {
        "t": "Bring up the past. Just a little.",
        "fx": {
         "NERVE": 1,
         "rosie": -1
        },
        "say": [
         {
          "s": "eli",
          "t": "DO YOU REMEMBER THE PORCH STOP",
          "to": "rosie",
          "k": "wire"
         },
         {
          "k": "narr",
          "t": "A long pause on the line. Then: PAPER IS DUE FRIDAY STOP. You don't bring it up again."
         }
        ]
       },
       {
        "silent": true,
        "t": "Help with the paper and nothing else.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "shack",
   "mood": "dusk",
   "goal": "Answer the message from Port Ellis",
   "place": "The relay shack",
   "date": "That winter"
  },
  {
   "id": "c11d",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "September. Her birthday again. He sends good wishes and asks how the paper turned out."
    },
    {
     "k": "narr",
     "t": "The telegraph company sends back a slip: DELIVERED. READ. No reply."
    },
    {
     "k": "narr",
     "t": "Then he and Ezra plan a trip up north, to the Dakota hills. She's working at a hospital near there now. He wires to ask if she knows a good place to stay in that town."
    },
    {
     "k": "narr",
     "t": "DELIVERED. READ. No reply."
    },
    {
     "s": "ezra",
     "t": "She saw it. She just didn't answer.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Maybe she's busy.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Eli.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...I know.",
     "to": "ezra"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Left on \"read.\" There's a special kind of quiet in that word."
    },
    {
     "ride": {
      "notices": [
       "Ezra pointing at an eagle",
       "The Dakota hills, blue in the morning",
       "A town you'll never see again"
      ]
     }
    },
    {
     "choice": {
      "prompt": "On the trip, Ezra asks if you're okay.",
      "opts": [
       {
        "t": "\"No. But I'm glad you're here.\"",
        "fx": {
         "HEART": 2,
         "ezra": 2,
         "NERVE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Me too. Even though you snore.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'm fine.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "You've been saying that since seventh year. It's never been true once.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Watch the hills.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "depot",
   "mood": "golden",
   "goal": "Meet Ezra at the depot for your trip north",
   "talk": "ezra",
   "place": "Ironwood stage depot",
   "date": "The next September"
  },
  {
   "id": "c11e",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "He tries the Lonely Hearts column in the Ironwood paper. Once. Rook dares him, and he's too tired to argue."
    },
    {
     "s": "clerk",
     "t": "Two replies for box 14, Mr. Ashby.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "The first one is from a teacher up north. They write five letters. She's funny and careful. Then her letters just stop, mid-conversation, like a door left open to an empty room. He writes twice more and gives up."
    },
    {
     "k": "narr",
     "t": "The second one is from a woman in Red Bluff who, by her third letter, mentions her husband."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Why do married women answer the Lonely Hearts? Why does anybody write to anybody and then disappear? I'm so tired of always being the one left holding the pen."
    },
    {
     "choice": {
      "prompt": "The clerk is waiting.",
      "opts": [
       {
        "t": "Laugh about it. \"Well, at least I tried.\"",
        "fx": {
         "HEART": 1,
         "NERVE": 1
        },
        "say": [
         {
          "s": "clerk",
          "t": "That's the spirit, Mr. Ashby.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Cancel the ad.\"",
        "fx": {
         "STONE": 1
        }
       },
       {
        "silent": true,
        "t": "Put the letters in your pocket.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "post",
   "mood": "overcast",
   "goal": "Pick up replies to your ad in the Lonely Hearts column",
   "talk": "clerk",
   "place": "Post & Coach Office",
   "date": "That fall"
  },
  {
   "id": "c11f",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "Since New Year's, he's had a feeling. A cold, heavy feeling, like a storm coming. Something bad is on its way. He couldn't say what."
    },
    {
     "s": "rook",
     "t": "Sit down. Did you hear?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Hear what?",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "I didn't want you to read it in the paper. There's a rumor. About Rosie. That she's getting married.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Eli laughs. He actually laughs."
    },
    {
     "s": "eli",
     "t": "That's not true. She'd— no. That's not true.",
     "to": "rook"
    },
    {
     "s": "rook",
     "t": "I hope it's not. I'm just telling you what I heard.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Rook has his hand on your arm.",
      "opts": [
       {
        "t": "\"Thanks for telling me, Rook. Really.\"",
        "fx": {
         "HEART": 1,
         "rook": 2
        },
        "say": [
         {
          "s": "rook",
          "t": "Brother from another mother. Who else was going to?",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It's a rumor. Percy-level nonsense.\"",
        "fx": {
         "DRIFT": 1
        }
       },
       {
        "silent": true,
        "t": "Pull your arm away.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "teahouse",
   "mood": "winter",
   "goal": "Meet Rook at the Kettle & Lamp",
   "talk": "rook",
   "place": "The Kettle & Lamp",
   "date": "January"
  },
  {
   "id": "c11g",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "January 18th. It's in the Port Ellis Herald. The engagement announcement."
    },
    {
     "card": {
      "title": "The Port Ellis Herald",
      "body": "Dr. and Mrs. H. Marlowe are pleased to announce the engagement of their daughter, Miss Rosalind Marlowe, to Dr. A. Pemberton of the Royal Infirmary, Liverpool. The couple will live overseas."
     }
    },
    {
     "k": "narr",
     "t": "Not the guy from the photo. Not anyone she loved. An arranged match, people say. A doctor her parents picked, older than her, same church, a job overseas."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I would have done anything. Switched churches. Crossed an ocean. Become a doctor, if that's what it took. I'm not stupid. I could have done it. I just never thought I'd have to."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And she didn't even marry someone she loved. She married someone she was handed."
    },
    {
     "k": "narr",
     "t": "He walks to the key in the back of the office. The clerk is at lunch. He puts his hand on the brass and taps."
    },
    {
     "s": "eli",
     "t": "WHY STOP WHY STOP WHY WOULD YOU STOP EVERYONE CHANGES THEIR MIND STOP STUPID STOP STUPID PEOPLE STOP I COULD HAVE STOP I COULD HAVE STOP",
     "to": "nobody",
     "k": "wire"
    },
    {
     "s": "eli",
     "t": "XXXXXX EEEEE TTTTTTTTTTTTT 9999 STOP STOP STOP STOP",
     "to": "nobody",
     "k": "wire"
    },
    {
     "k": "narr",
     "t": "The line isn't connected to anything. It goes nowhere. He taps until his fingers hurt."
    },
    {
     "choice": {
      "prompt": "The clerk comes back. You take your hand off the key.",
      "opts": [
       {
        "t": "Say sorry. Go home.",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "clerk",
          "t": "You okay, Mr. Ashby?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "No. But I will be. I think.",
          "to": "clerk"
         }
        ]
       },
       {
        "t": "Walk out without a word.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        }
       },
       {
        "t": "Sit down on the floor behind the counter.",
        "fx": {
         "DRIFT": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "The clerk doesn't say anything. He puts a cup of water next to you and goes back to sorting mail."
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It felt like watching someone I loved die right in front of me. And I couldn't do anything. And I wasn't even allowed to grieve, because she was never mine to lose."
    }
   ],
   "loc": "post",
   "mood": "winter",
   "goal": "Read the Port Ellis paper at the post office",
   "place": "Post & Coach Office",
   "date": "January 18th"
  },
  {
   "id": "c11h",
   "chapter": 11,
   "lines": [
    {
     "k": "narr",
     "t": "She starts showing up in his dreams. Every night. Sometimes she's fifteen, on the porch. Sometimes she's a stranger in a wedding dress who doesn't know who he is."
    },
    {
     "k": "narr",
     "t": "He wakes up with his heart racing and his hands shaking. It happens during the day too. At the key. On the coach. His hands just... shake."
    },
    {
     "k": "narr",
     "t": "Then a telegram from Mr. Hargrove: the relay shack is closing. Everyone back at the main office by mid-February. Two to ten, every day."
    },
    {
     "s": "ma",
     "t": "You're not sleeping.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I'm sleeping.",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "I hear you walking. Every night. Back and forth. Like your Pa used to before a long ride.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ma is standing in the doorway.",
      "opts": [
       {
        "t": "\"Something's wrong with me, Ma. I don't know what.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "ma": 2,
         "set": [
          "told_ma_shaking"
         ]
        },
        "say": [
         {
          "s": "ma",
          "t": "Then we'll find out what. That's all. You don't have to know yet. You just have to stop hiding it.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It's just work.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "It's not work. But I'll wait until you're ready.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Pretend you're asleep.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Go home and try to sleep",
   "talk": "ma",
   "place": "The Ashby cottage",
   "date": "February",
   "journal": [
    {
     "t": "If she'd loved me, I would've fought the whole world. But there was nothing to fight for. That's the hard part.",
     "fx": {
      "NERVE": 1,
      "HEART": 1
     }
    },
    {
     "t": "I'm done. I don't care who stays. If you want to leave, leave.",
     "fx": {
      "STONE": 2
     }
    },
    {
     "t": "My hands keep shaking. My head is too loud. Maybe it's not just heartbreak.",
     "fx": {
      "NERVE": 1,
      "set": [
       "noticed_symptoms"
      ]
     }
    }
   ]
  },
  {
   "id": "c12a",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "Something strange happens after the engagement news. A few weeks of being wrecked, and then... quiet. Like a fever breaking."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "The closure I'd waited ten years for finally came. Not the way I wanted. But it came. I could stop asking. For the first time in years, I felt a little lighter."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I decided to stay single. Live my own life. No more complicated stuff."
    },
    {
     "k": "narr",
     "t": "Back at the main office. Two to ten. And at the Port Ellis desk, in person after two years of dots and dashes: Viola Sutton."
    },
    {
     "s": "viola",
     "t": "Well, well. The relay shack hermit. You're taller than you sound on the wire.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "How do I sound short on the wire?",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "You tap like a guy saving his words for something. Sit down, sit down. Night shift eats at eight. You're eating with us. I'll catch you up on everything.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She does. She tells him everything. He listens. That's how it always was on the wire, and it's how it is in person."
    },
    {
     "choice": {
      "prompt": "Viola is in the middle of a story about the coal guy.",
      "opts": [
       {
        "t": "Laugh at the right part.",
        "fx": {
         "HEART": 1,
         "viola": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "See? You do have a laugh in there. I knew it.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Ask her something about herself.",
        "fx": {
         "NERVE": 1,
         "viola": 2
        },
        "say": [
         {
          "s": "viola",
          "t": "About me? Nobody ever asks about me. ...Okay. Sit down. This is gonna take a while.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Nod along.",
        "fx": {
         "viola": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "golden",
   "goal": "Report back to the main wire office",
   "talk": "viola",
   "others": [
    "hargrove"
   ],
   "place": "Ironwood Wire Office",
   "date": "Mid-February"
  },
  {
   "id": "c12b",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "Every night at eight, the night shift eats together. After, everyone washes their tins at the sink in the back. It's the one time all day nobody's tapping."
    },
    {
     "k": "narr",
     "t": "One night at the sink, Viola reaches past him for the soap and ends up really close. Face to face. Close enough that neither of them moves for a second."
    },
    {
     "k": "narr",
     "t": "That night he walks her home down Willow Lane, like he usually does now."
    },
    {
     "s": "viola",
     "t": "At the sink tonight. Did you feel that?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Feel what?",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "A spark. I felt a spark, Eli. Don't pretend you didn't notice.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He didn't see that coming. Not this. Not from her."
    },
    {
     "choice": {
      "prompt": "What do you say?",
      "opts": [
       {
        "t": "The truth: \"Viola, I've always thought of you as... one of the guys. Someone I'm comfortable around.\"",
        "fx": {
         "NERVE": 2,
         "viola": -1
        },
        "say": [
         {
          "s": "viola",
          "t": "One of the guys. Great. Every girl's dream.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't know what I felt.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "Then think about it. I'll wait. Not forever, but I'll wait.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Keep walking.",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "Say something, Eli. Anything.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "viola",
     "t": "If you don't feel it too, then... I'll stop. Talking to you so much, I mean. It's not fair to me otherwise.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She was already picturing us like a love story in a book. Moonlight and violins. She saw love so differently from me. But she was the only person who'd talked to me every single day for two years."
    }
   ],
   "loc": "lane",
   "mood": "night",
   "goal": "Walk Viola home down Willow Lane",
   "talk": "viola",
   "place": "Willow Lane",
   "date": "Two months later"
  },
  {
   "id": "c12c",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "She talks him into trying. Or he talks himself into it. He's never been sure which."
    },
    {
     "k": "narr",
     "t": "But first he has to tell her who he really is. All of it. He's never said it out loud before. Not in order. Not to anyone."
    },
    {
     "s": "eli",
     "t": "You need to know some things first. Before anything else.",
     "to": "viola"
    },
    {
     "k": "narr",
     "t": "He tells her about the quiet house. Pa's three letters a year. The ruler. The coach stop and the two coins. Seventh year. The porch. The shaking hand that wasn't hers, or was. The phone call. The engagement announcement."
    },
    {
     "k": "narr",
     "t": "Halfway through, he realizes his face is wet. He didn't feel it start."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "All those years I couldn't cry. And it came out at the end of a pier, in front of a girl I wasn't even sure I loved."
    },
    {
     "s": "eli",
     "t": "I'm not in a good place, Viola. I don't know if I can be what you want. I keep people at a distance. I don't know how not to.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "...Then we'll go slow. No promises. No commitment. We'll just see. Can we just see?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "She's holding your hand.",
      "opts": [
       {
        "t": "\"We can just see.\"",
        "fx": {
         "HEART": 2,
         "viola": 2,
         "set": [
          "with_viola"
         ]
        }
       },
       {
        "t": "\"Are you sure you want this? Want me?\"",
        "fx": {
         "NERVE": 1,
         "viola": 1,
         "set": [
          "with_viola"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "I'm sure. I've been sure since the relay shack.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Squeeze her hand.",
        "fx": {
         "viola": 1,
         "set": [
          "with_viola"
         ]
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I knew she'd been in love before. Seriously. I knew she was used to guys falling all over themselves for her. I wasn't like that. I didn't chase. But she wanted me anyway. And nobody had wanted me in a really long time."
    }
   ],
   "loc": "pier",
   "mood": "night",
   "goal": "Meet Viola at the east pier to talk for real",
   "talk": "viola",
   "place": "The east pier",
   "date": "A week later"
  },
  {
   "id": "c12d",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "They see each other every day. And almost right away, it's clear they think about love totally differently."
    },
    {
     "k": "narr",
     "t": "She wants a note on her desk every morning. She wants him to ask every day if she's eaten. She wants to hear it a lot, out loud, in the ways she's used to."
    },
    {
     "k": "narr",
     "t": "He thinks two people should be free. That you shouldn't have to report every hour of your day. That just being there is the proof, not the routine."
    },
    {
     "s": "viola",
     "t": "You were talking to Nell. From the night shift. For twenty minutes.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "She asked me how to fix her sounder.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "For twenty minutes? It's a sounder, Eli, not a train engine.",
     "to": "eli"
    },
    {
     "s": "nell",
     "t": "...I'm just gonna. Go. Over there.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Viola's eyes are wet.",
      "opts": [
       {
        "t": "\"I'm sorry. I'll be more careful.\"",
        "fx": {
         "HEART": 1,
         "viola": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "You always say that. And then you forget to ask if I ate.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'm allowed to talk to people, Viola.\"",
        "fx": {
         "NERVE": 2,
         "viola": -1
        },
        "say": [
         {
          "s": "viola",
          "t": "I know you're allowed! I'm not stupid! I just want to feel like I'm the one you pick.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I need time. I've never done this before. I'm learning.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "viola": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "...I know. I know you are. I'm sorry. I just get scared.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "viola",
     "t": "I'm not okay. I think you should leave me alone tonight.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "He goes. An hour later there's a note under his door: \"I'd never leave you like that. Don't go. I didn't mean it.\""
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It kept happening. \"Leave me alone.\" \"Don't leave me.\" I couldn't keep up with how fast she switched. I needed time to learn how she loved. And it felt like we were fighting every day about things I didn't even understand."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Wanting reassurance isn't wrong. I know that. But needing space didn't mean I didn't care."
    }
   ],
   "loc": "office",
   "mood": "dusk",
   "goal": "Find out why Viola is upset with you",
   "talk": "viola",
   "others": [
    "nell"
   ],
   "place": "Ironwood Wire Office",
   "date": "That summer"
  },
  {
   "id": "c12e",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "The fair comes to town, just like when he was little. He takes Viola. The fire-eater. The sugar tent. A little painted boat bobbing on a rope."
    },
    {
     "s": "eli",
     "t": "I've been here before. When I was five. My aunt brought us. I've been looking for this exact spot my whole life.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "And now you found it. With me.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "She's happy. Really happy, in that simple way she gets sometimes, like a kid."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Early on, I'd told her I didn't think I'd ever get married. I didn't know what love was supposed to feel like. I'd been alone too long."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But somewhere along the way, that changed. Standing on that walkway, I could picture it. Her. A house. Ma liking her. A future. I'd stopped believing in that."
    },
    {
     "choice": {
      "prompt": "Viola is leaning on the railing.",
      "opts": [
       {
        "t": "\"Viola... I think I'd marry you. If you'd have me. Someday.\"",
        "fx": {
         "HEART": 2,
         "viola": 3,
         "set": [
          "promised"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "Eli Ashby. Are you serious?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "I'm always serious. It's my worst quality.",
          "to": "viola"
         },
         {
          "k": "narr",
          "t": "She cries and laughs at the same time. You make promises to each other on that pier. Real ones."
         }
        ]
       },
       {
        "t": "\"This is a good day.\"",
        "fx": {
         "HEART": 1,
         "viola": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "It's the best day.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Watch the boat.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "s": "eli",
     "t": "And if we ever break up... don't worry about me. I'll be fine. I can handle it.",
     "to": "viola"
    },
    {
     "k": "narr",
     "t": "He believes it when he says it."
    },
    {
     "k": "narr",
     "t": "On the way home, she squeezes his arm."
    },
    {
     "s": "viola",
     "t": "You take care of me like a husband would. Did you know that?",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Nobody had ever said anything like that to me. I'd been alone for so long. Those words went somewhere really deep, and they stayed there."
    }
   ],
   "loc": "pond",
   "mood": "golden",
   "goal": "Take Viola to the summer fair at the south pier",
   "talk": "viola",
   "place": "The south pier",
   "date": "Late summer"
  },
  {
   "id": "c12f",
   "chapter": 12,
   "lines": [
    {
     "k": "narr",
     "t": "Viola has rheumatism in her joints. A real illness that she'll have her whole life. Some weeks her hands swell up so badly she can't use the key."
    },
    {
     "k": "narr",
     "t": "Doc Whitlow gave her medicine and some rules to follow. She doesn't always take the medicine. She doesn't always follow the rules."
    },
    {
     "s": "eli",
     "t": "Did you take your medicine today?",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "Don't. Don't be my doctor. Be my boyfriend.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't want to treat her like a patient. I wanted her to live her life. But I was scared for her."
    },
    {
     "k": "narr",
     "t": "And there's something else. Something he knows and has tried not to think about. She still has feelings for the man she loved before him. A man from a different faith. They both knew it could never work. Knowing that didn't make the feelings go away."
    },
    {
     "choice": {
      "prompt": "She's lying back on the pillows with her eyes closed. You've wanted to ask her this for weeks.",
      "opts": [
       {
        "t": "\"Viola. Who do you want? Him, or me? I need to know.\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "asked_who"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "...I don't know. I don't want anyone. I don't want anything. I just want my hands to stop hurting.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "She's sick. She's in pain. You know those words might not mean everything. But they go in like a nail."
         }
        ]
       },
       {
        "t": "Don't ask. Not today.",
        "fx": {
         "HEART": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "I didn't ask. I'd changed my whole idea of the future to choose her. I couldn't stand finding out she wasn't choosing me the same way."
         }
        ]
       },
       {
        "silent": true,
        "t": "Hold her hand, very gently.",
        "fx": {
         "HEART": 1,
         "viola": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "lane",
   "mood": "overcast",
   "goal": "Visit Viola. She's sick again",
   "talk": "viola",
   "place": "Willow Lane",
   "date": "Fall",
   "journal": [
    {
     "t": "I love her. I think. Or I'm trying to, which might be the same thing.",
     "fx": {
      "HEART": 1
     }
    },
    {
     "t": "I changed everything for her, and I don't know if she'd do the same for me.",
     "fx": {
      "NERVE": 1
     }
    },
    {
     "t": "I'm doing everything right and it still feels wrong. Something inside me is going quiet again.",
     "fx": {
      "DRIFT": 2
     }
    }
   ]
  },
  {
   "id": "c13a",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "It doesn't happen all at once. It happens the way a river changes direction. A little bit at a time."
    },
    {
     "k": "narr",
     "t": "The fights. The expectations. The not-knowing. Slowly, what he feels for Viola stops being love and turns into something else. Care. Worry. Duty."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I still wanted her to be okay. I still worried about her hands, about whether she'd eaten. I didn't want her to suffer. But the romantic part of me was going out, like a lamp running out of oil."
    },
    {
     "s": "eli",
     "t": "Viola. I need some time. To... recover. I'm worn out. I'm not leaving. I just need some room to breathe.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "Room. From me.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "From everything.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "Then why can't it be like before? You used to walk me home every night. You used to look at me.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "She wants it back the way it was. You don't know how to give her that.",
      "opts": [
       {
        "t": "\"I'm trying. I promise I'm trying.\"",
        "fx": {
         "HEART": 1,
         "DRIFT": 1,
         "viola": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "Then try harder. Please.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It can't be like before. Not right now. I'm sorry.\"",
        "fx": {
         "NERVE": 2,
         "viola": -1
        },
        "say": [
         {
          "s": "viola",
          "t": "Don't say that. Don't you dare say that to me.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the floor.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "You're doing it again. You're going somewhere behind your eyes.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "overcast",
   "goal": "Talk to Viola after your shift",
   "talk": "viola",
   "place": "Ironwood Wire Office",
   "date": "Winter"
  },
  {
   "id": "c13b",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "In the spring, the office hires a new clerk for the ledger desk. Wren Ellery. Quiet hands. Ink on her sleeve. She draws little birds in the margins of the ledger and erases them before Hargrove sees."
    },
    {
     "s": "wren",
     "t": "Mr. Hargrove says you know where everything is.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I know where everything was. Hargrove moves stuff around to see if we notice.",
     "to": "wren"
    },
    {
     "s": "wren",
     "t": "Ha. So it's a test.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Everything's a test with Hargrove. Even the coffee.",
     "to": "wren"
    },
    {
     "k": "narr",
     "t": "He shows her the ledger. It takes an hour. The hour goes by really fast."
    },
    {
     "choice": {
      "prompt": "She's looking at the margin where she drew a little brown bird, half erased.",
      "opts": [
       {
        "t": "\"You should keep that one. It's good.\"",
        "fx": {
         "HEART": 1,
         "wren": 2
        },
        "say": [
         {
          "s": "wren",
          "t": "It's a self-portrait. A wren. See? Small, brown, and judgy.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "I see a bird that's paying attention.",
          "to": "wren"
         },
         {
          "s": "wren",
          "t": "...That's a nice thing to say. You don't say a lot, do you? But it's nice when you do.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Hargrove's gonna see it.\"",
        "fx": {
         "NERVE": 1,
         "wren": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "Let him. Maybe he'll learn to appreciate art.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Smile at the bird.",
        "fx": {
         "wren": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "I saw that. Don't worry, I won't tell.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "day",
   "goal": "Show the new clerk how the ledger works",
   "talk": "wren",
   "place": "Ironwood Wire Office",
   "date": "That spring"
  },
  {
   "id": "c13c",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "Their coaches leave from the same corner. They start walking there together. Neither of them really decides to."
    },
    {
     "s": "wren",
     "t": "Sometimes you go somewhere. In the middle of a sentence. Like you stepped out of the room for a minute.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "...People don't usually notice that.",
     "to": "wren"
    },
    {
     "s": "wren",
     "t": "I notice things. It's my worst quality.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "With Wren, he doesn't have to explain. He says half a thought, and she finishes it. Not with what she wants it to mean. With what it actually means."
    },
    {
     "choice": {
      "prompt": "Wren asks: \"Where do you go?\"",
      "opts": [
       {
        "t": "Tell her the truth. \"Somewhere quiet. Somewhere I don't have to be anyone.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "wren": 2
        },
        "say": [
         {
          "s": "wren",
          "t": "That sounds lonely.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "It is. But it's quiet.",
          "to": "wren"
         },
         {
          "s": "wren",
          "t": "Well. When you come back, I'll be here. Quietly. If that helps.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Nowhere. I'm just tired.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "Okay. You don't have to tell me. But you can.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Look at the water.",
        "fx": {
         "DRIFT": 1,
         "wren": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "...That's okay too.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I felt safe. I don't have a better word for it. With her, I felt safe. I didn't have to act like a person. I could just be one."
    }
   ],
   "loc": "bridge",
   "mood": "golden",
   "goal": "Walk to the coach with Wren",
   "talk": "wren",
   "place": "The creek bridge",
   "date": "A few weeks later"
  },
  {
   "id": "c13d",
   "chapter": 13,
   "lines": [
    {
     "s": "viola",
     "t": "You talk to her. Wren. You talk to her the way you used to talk to me.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "We walk to the coach. That's it.",
     "to": "viola"
    },
    {
     "s": "viola",
     "t": "You never tell me what you're thinking. Ever. But you tell her. I've seen your face when you talk to her. You don't make that face for me anymore.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "She wasn't totally wrong. That was the worst part."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But I wasn't looking for someone to replace her. I was looking for somewhere I could breathe. I'd been trying to tell her for months that we weren't working. She never heard it. Now it was all about Wren."
    },
    {
     "s": "viola",
     "t": "I loved her like a sister, Eli. Like my own sister. And now you—",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Viola is shaking.",
      "opts": [
       {
        "t": "\"This isn't about Wren. It's about us. We haven't been okay for a long time.\"",
        "fx": {
         "NERVE": 3,
         "viola": -1,
         "set": [
          "named_problem"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "Don't. Don't make it sound reasonable. It's not reasonable. I'm hurting.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I'm sorry. I'll stop walking with her.\"",
        "fx": {
         "HEART": 1,
         "DRIFT": 1,
         "wren": -1,
         "viola": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "I said it, and I felt something inside me go dark, like someone closing a window."
         }
        ]
       },
       {
        "silent": true,
        "t": "Let her be angry.",
        "fx": {
         "STONE": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "lane",
   "mood": "dusk",
   "goal": "Viola wants to talk",
   "talk": "viola",
   "place": "Willow Lane",
   "date": "That week"
  },
  {
   "id": "c13e",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "Four o'clock. Coffee break. He walks to the Kettle & Lamp, like every Thursday."
    },
    {
     "k": "narr",
     "t": "Wren is there. She came in from the other direction, from the bank. Neither of them planned it."
    },
    {
     "s": "wren",
     "t": "Oh! Hey. What are the odds.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "What are the odds.",
     "to": "wren"
    },
    {
     "s": "wren",
     "t": "Well, I'm not drinking alone if you're standing right there. Sit.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "You sit down. It's just coffee.",
      "opts": [
       {
        "t": "Talk about her birds, her family, anything.",
        "fx": {
         "HEART": 1,
         "wren": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "She tells you about her grandma, who kept canaries and named them all after presidents. You laugh. Really laugh."
         }
        ]
       },
       {
        "t": "Tell her about your week. The real version.",
        "fx": {
         "NERVE": 1,
         "wren": 2
        },
        "say": [
         {
          "k": "narr",
          "t": "She listens like nobody has since Lettie Shaw. Not trying to fix it. Just hearing it."
         }
        ]
       },
       {
        "silent": true,
        "t": "Drink your coffee and watch the street.",
        "fx": {
         "wren": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "She doesn't fill the silence. She just drinks hers too. It's the most relaxing ten minutes you've had all year."
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Outside the window, across the street, Viola is walking with Nell from the night shift."
    },
    {
     "k": "narr",
     "t": "Viola stops. She looks through the window. She sees them."
    },
    {
     "k": "narr",
     "t": "She doesn't come in. She doesn't wave. She turns around and walks the other way."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "It was a coincidence. We didn't plan it. We weren't hiding. We weren't trying to make anyone jealous. We were just two people who wanted coffee at four o'clock."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But I knew, the second I saw her face, that it wouldn't matter what it was. Only what it looked like."
    }
   ],
   "loc": "teahouse",
   "mood": "golden",
   "goal": "Take your coffee break at the Kettle & Lamp",
   "talk": "wren",
   "place": "The Kettle & Lamp",
   "date": "A normal Thursday"
  },
  {
   "id": "c13f",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "Viola goes home and doesn't come back to work. She sends a message through Nell: she's really sick. Her joints have flared up. She can't get out of bed."
    },
    {
     "k": "narr",
     "t": "Then a package comes to the office for him. Inside is an X-ray plate. A picture of her hands, the bones grey and strange, the joints swollen."
    },
    {
     "k": "narr",
     "t": "There's a note pinned to it, in her handwriting."
    },
    {
     "s": "viola",
     "t": "Thank you for your gift.",
     "to": "eli",
     "k": "letter"
    },
    {
     "k": "narr",
     "t": "Nell says Viola thinks this might be the end. That it's his fault. That she was fine until the coffee shop."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I didn't know what to say. I couldn't breathe. \"Thank you for your gift.\" Like I'd wrapped up the illness and handed it to her."
    },
    {
     "k": "narr",
     "t": "He goes to Doc Whitlow. It's ten at night. Doc answers the door in his shirtsleeves."
    },
    {
     "s": "doc",
     "t": "Ashby. You look like you've seen a ghost. Come in. Sit.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Did I do this, Doc? To Viola. Did I make her sick?",
     "to": "doc"
    },
    {
     "s": "doc",
     "t": "I can't talk about my patients, son. You know that. But I can talk about the illness in general, and I will.",
     "to": "eli"
    },
    {
     "s": "doc",
     "t": "Rheumatism in the joints is a disease of the body. It flares up and calms down on its own schedule. Stress can make anyone feel worse, and skipping medicine will definitely make it worse. But no man ever gave a woman that disease by drinking a cup of coffee.",
     "to": "eli"
    },
    {
     "s": "doc",
     "t": "You're not her illness. And you're not her cure.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "The words land somewhere you didn't know was waiting for them.",
      "opts": [
       {
        "t": "\"Then why do I feel like I'm both?\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "set": [
          "doc_talk"
         ]
        },
        "say": [
         {
          "s": "doc",
          "t": "Because someone you care about told you that you were. And you believed her, because you're the kind of guy who carries things. That doesn't make it true.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Thanks, Doc.\"",
        "fx": {
         "HEART": 1
        },
        "say": [
         {
          "s": "doc",
          "t": "Get some sleep. You look worse than she does, and you're the one walking around.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Stare at the X-ray in your hands.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "doc",
          "t": "Put that down, son. It's not yours to carry.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'm not a doctor. I couldn't cure her. I couldn't promise she'd be okay if I stayed. And still I felt like she thought I was the only one who could make her better."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Every time she said she needed me, I got angry. Not because I wanted her to suffer. Because I felt trapped in a responsibility nobody could carry."
    }
   ],
   "loc": "doc",
   "mood": "night",
   "goal": "Go to Doc Whitlow's. You need to understand",
   "talk": "doc",
   "place": "Doc Whitlow's",
   "date": "Three days later"
  },
  {
   "id": "c13g",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "At the office, the story has already been decided. Everyone knows Viola and Eli were together. Everyone saw her get sick. Everyone heard about the coffee shop."
    },
    {
     "k": "narr",
     "t": "The story is simple. Viola loved Eli. Eli was seen with Wren. Viola got sick. So."
    },
    {
     "s": "nell",
     "t": "Hope you're proud of yourself.",
     "to": "eli"
    },
    {
     "s": "hargrove",
     "t": "Ashby. A word. ...Keep your personal life out of my office. I won't have my operators falling apart over you.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Nobody knew my side. Nobody knew how long I'd been struggling before that coffee. How many times I'd said \"I need time.\" The things she said that I still can't repeat."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "They could all see her pain. Mine was private. I didn't have anyone to tell the whole story to."
    },
    {
     "choice": {
      "prompt": "Hargrove is waiting.",
      "opts": [
       {
        "t": "\"Yes, sir.\" Say nothing else.",
        "fx": {
         "STONE": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "I didn't want to make her the bad guy just to save myself. She had her own fears and her own pain. But I didn't want to live in a story where only hers counted."
         }
        ]
       },
       {
        "t": "\"Sir, there's more to it than what people are saying.\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "spoke_up"
         ]
        },
        "say": [
         {
          "s": "hargrove",
          "t": "There always is. ...I'll keep that in mind. Get back to your key.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "It's not much. But it's not nothing. He looks at you a little differently after that."
         }
        ]
       },
       {
        "silent": true,
        "t": "Go back to your desk.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Wren walks past his desk with the ledger. She doesn't stop. She just leaves a small folded piece of paper by his hand."
    },
    {
     "k": "narr",
     "t": "Inside: a drawing of a bird sitting on a wire, in the rain. Underneath: \"Still here. Quietly.\""
    },
    {
     "item": {
      "id": "bird",
      "name": "A bird on a wire, in the rain",
      "desc": "Drawn in pencil. \"Still here. Quietly.\""
     }
    }
   ],
   "loc": "office",
   "mood": "overcast",
   "goal": "Go to work",
   "talk": "hargrove",
   "others": [
    "nell"
   ],
   "place": "Ironwood Wire Office",
   "date": "The next week"
  },
  {
   "id": "c13h",
   "chapter": 13,
   "lines": [
    {
     "k": "narr",
     "t": "Viola is back on her feet. Thinner. Tired. Her hands wrapped in flannel. She lets him in."
    },
    {
     "k": "narr",
     "t": "He's been trying to say it for months. Gently. Indirectly. Hoping she'd hear it. Now he has to say it plainly."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I tried. I changed my mind about getting married for her. I tried to understand what she needed and explain what I couldn't give. I stayed after the feelings changed, because caring doesn't just disappear when things get hard."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "But I can't keep being her partner without losing myself. And I've already lost so much of myself. There's not much left."
    },
    {
     "s": "viola",
     "t": "Say it. Whatever it is. I can see it on your face.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "This is the hardest thing you'll ever say. How do you end it?",
      "opts": [
       {
        "t": "\"I care about you. I always will. But I can't be your partner anymore. Not without disappearing. I'm sorry.\"",
        "fx": {
         "NERVE": 3,
         "HEART": 2,
         "set": [
          "ended_honest"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "...You said if we ever broke up, I shouldn't worry about you.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "I did. I was wrong about that. But I meant the rest. I hope your hands get better. I hope you take your medicine. I hope you find someone who knows how to love you the way you need.",
          "to": "viola"
         },
         {
          "s": "viola",
          "t": "That's... that's a horrible, kind thing to say.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "She cries. You let her. You don't leave until she asks you to. Then you leave."
         }
        ]
       },
       {
        "t": "\"I'll stay. I'll stay until you're better.\"",
        "fx": {
         "HEART": 1,
         "DRIFT": 2,
         "set": [
          "stayed_guilt"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "You will? You promise?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "...I promise.",
          "to": "viola"
         },
         {
          "s": "eli",
          "k": "thought",
          "t": "I said it, and something in me lay down and didn't get back up."
         }
        ]
       },
       {
        "t": "\"We're done, Viola. I'm not your cure. Stop telling people I'm your illness.\"",
        "fx": {
         "STONE": 3,
         "NERVE": 1,
         "set": [
          "ended_cold"
         ]
        },
        "say": [
         {
          "s": "viola",
          "t": "Get out. Get out!",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "Everything you said was true. It was also cruel. Both of those things walked out the door with you."
         }
        ]
       },
       {
        "silent": true,
        "t": "Say nothing. Let it fade.",
        "fx": {
         "DRIFT": 2,
         "STONE": 1
        },
        "say": [
         {
          "s": "viola",
          "t": "Eli? ...Eli, say something.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "You don't. Nothing ends. Nothing gets better. It just goes quiet, the way things do when nobody's brave."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "lane",
   "mood": "overcast",
   "goal": "Go to Viola's place. It's time to talk",
   "talk": "viola",
   "place": "Willow Lane",
   "date": "A week later",
   "journal": [
    {
     "t": "I can care about someone and still leave when it's not healthy for me. Both are true.",
     "fx": {
      "NERVE": 2,
      "HEART": 2
     }
    },
    {
     "t": "I'm her illness and her cure. That's what everyone thinks. Maybe they're right.",
     "fx": {
      "DRIFT": 2
     }
    },
    {
     "t": "I'm done being responsible for everyone's feelings. Starting now.",
     "fx": {
      "STONE": 2
     }
    }
   ]
  },
  {
   "id": "c14a",
   "chapter": 14,
   "lines": [
    {
     "k": "narr",
     "t": "He saddles Pilgrim. He opens the gate."
    },
    {
     "ride": {
      "drift": true,
      "notices": [
       "Frost on the fence wire",
       "A hawk, way up high",
       "Your own breath"
      ]
     }
    },
    {
     "k": "narr",
     "t": "He's at the office. Pilgrim is tied up outside. His coat is on the hook."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I don't remember the ride. I know I did it. I know every turn. But if you asked me to picture it, the bridge, the mill, the depot... there's nothing. Just a blank where the road should be."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Like someone else rode my horse and dropped me off at my desk."
    },
    {
     "k": "narr",
     "t": "It's happened before. It keeps happening. Home to work. Work to home. Whole hours, folded up and put somewhere he can't find."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'm not drinking. I sleep about seven hours, just in pieces. I'm not sick, as far as I know. So what is this?"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "What if one day I'm on the road and I'm not really there, and somebody steps out in front of the horse?"
    },
    {
     "choice": {
      "prompt": "You sit at your key. Your hands are steady for once. It's the rest of you that's far away.",
      "opts": [
       {
        "t": "Press your hands flat on the desk. Feel the wood. Name five things you can see.",
        "fx": {
         "NERVE": 1,
         "DRIFT": -2,
         "set": [
          "grounding"
         ]
        },
        "say": [
         {
          "s": "eli",
          "k": "thought",
          "t": "The key. The window. The ink. Hargrove's hat. Wren's bird in the ledger. ...Okay. I'm here. I'm here."
         }
        ]
       },
       {
        "t": "Start working. Don't think about it.",
        "fx": {
         "DRIFT": 1
        }
       },
       {
        "silent": true,
        "t": "Stare at the key.",
        "fx": {
         "DRIFT": 2
        }
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "overcast",
   "goal": "Ride to work",
   "place": "Ironwood Wire Office",
   "date": "Late winter",
   "onEnter": {
    "minDrift": 5
   }
  },
  {
   "id": "c14b",
   "chapter": 14,
   "lines": [
    {
     "k": "narr",
     "t": "At night, it's two voices. They argue inside him like two people in the next room."
    },
    {
     "s": "wanting",
     "t": "You need someone. Someone to hold onto. Someone to tell you it's going to be okay. Find someone. Anyone. Just don't be alone with this.",
     "to": "eli"
    },
    {
     "s": "knowing",
     "t": "Leaning your whole weight on another person is how you ended up here. It didn't work with Viola. It won't work with anyone. Nobody else can carry you out of this.",
     "to": "eli"
    },
    {
     "s": "wanting",
     "t": "Then who will?",
     "to": "eli"
    },
    {
     "s": "knowing",
     "t": "...I don't know. You, maybe. Eventually.",
     "to": "eli"
    },
    {
     "s": "wanting",
     "t": "I can't even feel my own hands.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Sometimes the disappointment turns into anger. And after the anger, everything goes flat and far away, like a painted background."
    },
    {
     "choice": {
      "prompt": "Both voices are waiting for you to pick a side.",
      "opts": [
       {
        "t": "\"You're both right. I need people. I just can't make one person my whole world.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "DRIFT": -1
        },
        "say": [
         {
          "s": "knowing",
          "t": "...That actually makes sense.",
          "to": "eli"
         },
         {
          "s": "wanting",
          "t": "I hate it. But fine.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Side with the one that wants comfort.",
        "fx": {
         "HEART": 1,
         "DRIFT": 1
        },
        "say": [
         {
          "s": "wanting",
          "t": "See? We'll find someone. It'll be fine.",
          "to": "eli"
         },
         {
          "s": "knowing",
          "t": "That's what you said last time.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Side with the one that wants to shut everything out.",
        "fx": {
         "STONE": 2
        },
        "say": [
         {
          "s": "knowing",
          "t": "That's not what I said. I said you'd have to learn to stand. Not that you'd have to stand alone forever.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Let them argue until you fall asleep.",
        "fx": {
         "DRIFT": 2
        }
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "night",
   "goal": "Go home",
   "place": "The Ashby cottage",
   "date": "That night"
  },
  {
   "id": "c14c",
   "chapter": 14,
   "lines": [
    {
     "k": "narr",
     "t": "He wakes up. Ma's at the stove. Bacon. Coffee. Normal."
    },
    {
     "s": "ma",
     "t": "Morning, sleepyhead. You've got chalk on your face.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Chalk?",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "Go wash up. The coach comes at 8:30. Old Amos won't wait.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Old Amos. Old Amos died six years ago."
    },
    {
     "k": "narr",
     "t": "He wakes up."
    },
    {
     "k": "narr",
     "t": "The room is dark. It's four in the morning. He's in his own bed. There's no bacon."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "A dream. A dream about waking up. That keeps happening too. I wake up and it's not real, and then I wake up again and I'm not sure."
    },
    {
     "k": "narr",
     "t": "He waits for the window to turn grey. He gets up. He goes downstairs. Ma's at the stove."
    },
    {
     "s": "ma",
     "t": "You're up early. Couldn't sleep?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Is this one real?",
      "opts": [
       {
        "t": "Touch the door frame. It's solid. Rough. \"This one's real.\"",
        "fx": {
         "NERVE": 1,
         "DRIFT": -1
        },
        "say": [
         {
          "s": "ma",
          "t": "What's real? Are you okay, son?",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Ma. Is this real?\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "ma": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "...Eli. Sit down. Sit down right now and tell me what's going on.",
          "to": "eli"
         },
         {
          "k": "narr",
          "t": "For the first time, you tell her. Not everything. But the dreams. The road. The hours you lose. She listens with both hands around her cup, very still."
         },
         {
          "s": "ma",
          "t": "Then you're going to see Doc Whitlow. This week. I'll come with you if you want. That's not a question.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Sit down and eat.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "k": "narr",
          "t": "It's real. Probably. You eat without tasting anything."
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "home",
   "mood": "day",
   "goal": "Wake up",
   "talk": "ma",
   "place": "The Ashby cottage",
   "date": "Morning"
  },
  {
   "id": "c14d",
   "chapter": 14,
   "lines": [
    {
     "s": "rook",
     "t": "You've been staring at that cup for ten minutes, Ashby. It's not going to tell your fortune.",
     "to": "eli"
    },
    {
     "s": "ezra",
     "t": "You're gone again. Where are you?",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Rook knows him better than anyone. But even Rook doesn't know all of it. Nobody does. That's partly Eli's fault. It's always been easier to say \"fine\" and move on than to explain."
    },
    {
     "s": "rook",
     "t": "People say you look like you don't care. Like nothing gets to you. But you've never been like that. You care so much it fries your brain.",
     "to": "eli"
    },
    {
     "s": "rook",
     "t": "Brother from another mother. Tell me what's going on.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Your two oldest friends are waiting.",
      "opts": [
       {
        "t": "Tell them everything. The road. The dreams. The voices.",
        "fx": {
         "NERVE": 3,
         "HEART": 2,
         "rook": 2,
         "ezra": 2,
         "set": [
          "told_friends"
         ]
        },
        "say": [
         {
          "s": "ezra",
          "t": "...How long has this been going on?",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Since the engagement. Maybe before. I don't know. I can't tell where it started.",
          "to": "ezra"
         },
         {
          "s": "rook",
          "t": "Okay. Then we figure it out. Together. You don't get to do this one quietly.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"It's nothing. Work. I'm tired.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "rook",
          "t": "Liar. You've been saying that since we were twelve. One day you'll tell me. I'll be here when you do.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"I don't know how to explain it.\"",
        "fx": {
         "NERVE": 1,
         "HEART": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Then don't explain. Just tell us one piece. We'll figure out the rest.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "teahouse",
   "mood": "golden",
   "goal": "Meet Rook at the Kettle & Lamp",
   "talk": "rook",
   "others": [
    "ezra"
   ],
   "place": "The Kettle & Lamp",
   "date": "That week"
  },
  {
   "id": "c14e",
   "chapter": 14,
   "lines": [
    {
     "k": "narr",
     "t": "He goes. Ma comes with him and waits outside, pretending to read a seed catalog."
    },
    {
     "s": "doc",
     "t": "So. You this time. Tell me.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Doc Whitlow is listening.",
      "opts": [
       {
        "t": "Tell him all of it. The lost hours, the dreams, the shaking, the voices, the feeling that you're not real.",
        "fx": {
         "NERVE": 3,
         "HEART": 1,
         "DRIFT": -2,
         "set": [
          "saw_doc"
         ]
        },
        "say": [
         {
          "s": "doc",
          "t": "Okay. Thank you. That can't have been easy.",
          "to": "eli"
         },
         {
          "s": "doc",
          "t": "What you're describing, feeling like you're outside yourself, like the world is painted on glass... I've seen it before. In soldiers back from war. In widows. In people who've carried too much for too long without putting it down.",
          "to": "eli"
         },
         {
          "s": "doc",
          "t": "You're not crazy, son. It's a mind that's been running hot for years, trying to protect you by closing the curtains.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "Will it stop?",
          "to": "doc"
         },
         {
          "s": "doc",
          "t": "It can. It often does. But not by itself, and not if you keep pushing through it like a mule through mud. There's a doctor in Port Ellis who works with nerves. I'll write to him. You're going to sleep, eat, and walk. You're going to talk to someone regularly. And you're going to stop riding that horse when you're not all there.",
          "to": "eli"
         },
         {
          "s": "eli",
          "t": "...Okay.",
          "to": "doc"
         },
         {
          "s": "doc",
          "t": "\"Okay.\" Ha. Coming from you, I'll take that as a promise.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "Only tell him about the sleep.",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "doc",
          "t": "Sleeping powders, then. And come back if it's more than sleep. I have a feeling it is.",
          "to": "eli"
         }
        ]
       },
       {
        "crack": true,
        "crackNote": "You open your mouth and the curtain comes down. \"I'm fine, Doc.\"",
        "t": "Tell him everything."
       },
       {
        "silent": true,
        "t": "Just sit there.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "doc",
          "t": "Your mom's outside pretending to read about turnips. Want me to bring her in?",
          "to": "eli"
         }
        ]
       }
      ]
     }
    },
    {
     "k": "narr",
     "t": "Outside, Ma closes the seed catalog."
    },
    {
     "s": "ma",
     "t": "Well?",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ma is holding your arm.",
      "opts": [
       {
        "t": "\"I'm going to be okay, Ma. Not today. But I'm going to be.\"",
        "fx": {
         "HEART": 2,
         "ma": 2,
         "NERVE": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "I know you are. You're careful. You get that from me.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"He says I'm just tired.\"",
        "fx": {
         "STONE": 1
        },
        "say": [
         {
          "s": "ma",
          "t": "Hm. Then we'll get you some rest.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "doc",
   "mood": "day",
   "goal": "See Doc Whitlow about yourself this time",
   "talk": "doc",
   "place": "Doc Whitlow's",
   "date": "End of winter",
   "journal": [
    {
     "t": "My feelings, memories and experiences deserve to be taken seriously. Even by me.",
     "fx": {
      "NERVE": 2,
      "HEART": 1,
      "DRIFT": -1
     }
    },
    {
     "t": "I'll push through. I always have.",
     "fx": {
      "STONE": 1,
      "DRIFT": 1
     }
    },
    {
     "t": "I'm scared this is just who I am now.",
     "fx": {
      "DRIFT": 1
     }
    }
   ]
  },
  {
   "id": "c15a",
   "chapter": 15,
   "lines": [
    {
     "k": "narr",
     "t": "Lately, whenever he plans to meet Wren after work, something gets in the way. Her sister visits. Hargrove keeps her late. The coach changes its schedule."
    },
    {
     "k": "narr",
     "t": "He starts to wonder. If she's pulling away. If he's been too much without noticing."
    },
    {
     "s": "eli",
     "t": "Want to walk to the coach with me tonight?",
     "to": "wren"
    },
    {
     "s": "wren",
     "t": "Oh— not tonight. Sorry. My sister's in town again. She's... a lot. Another time?",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "\"Another time.\" I've heard that before. From Delphine, in a note. It sounded exactly the same."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "...Or maybe it doesn't. Maybe I'm just reading every little change through ten years of bad weather."
    },
    {
     "choice": {
      "prompt": "Wren is putting on her coat.",
      "opts": [
       {
        "t": "\"Of course. Another time. Hope your sister's visit goes okay.\"",
        "fx": {
         "HEART": 1,
         "wren": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "Okay? Ha. She'll reorganize my whole kitchen. ...Thanks, though. Really.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"Did I do something? Be honest.\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "What? No. No, Eli. Really. It's just my sister. I promise.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Nod.",
        "fx": {
         "DRIFT": 1
        },
        "say": [
         {
          "s": "wren",
          "t": "...Eli? I mean it. Another time.",
          "to": "eli"
         }
        ]
       }
      ]
     }
    }
   ],
   "loc": "office",
   "mood": "dusk",
   "goal": "Ask Wren if she wants to walk after work",
   "talk": "wren",
   "place": "Ironwood Wire Office",
   "date": "Fall"
  },
  {
   "id": "c15b",
   "chapter": 15,
   "lines": [
    {
     "k": "narr",
     "t": "Ezra is fishing off the creek bridge, like he has since they were nine. He's never caught anything."
    },
    {
     "s": "eli",
     "t": "If I see her, I want to ask her something. Before I say anything else.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Ask her what?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "If she's comfortable. With how close I've gotten. If I'm too much. Expecting too much. I want her to be able to tell me the truth, even if it's bad.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "And then?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "If she says I'm too close, I listen. I back off. I don't make her responsible for how I feel.",
     "to": "ezra"
    },
    {
     "s": "eli",
     "t": "If she says she's comfortable... then I'll tell her I feel safe with her. And ask if there's room for me in her life. Not as a boyfriend. Not with some promise she has to keep. Just... close.",
     "to": "ezra"
    },
    {
     "k": "narr",
     "t": "Ezra reels in his empty line."
    },
    {
     "s": "ezra",
     "t": "Eli. That's the most grown-up thing I've ever heard you say.",
     "to": "eli"
    },
    {
     "s": "ezra",
     "t": "In seventh year you couldn't say six words to a girl sitting on a wall. Look at you now.",
     "to": "eli"
    },
    {
     "choice": {
      "prompt": "Ezra is smiling.",
      "opts": [
       {
        "t": "\"I'm still terrified.\"",
        "fx": {
         "NERVE": 1,
         "HEART": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Good. That means it matters. Be terrified and ask anyway.",
          "to": "eli"
         }
        ]
       },
       {
        "t": "\"What if she says no?\"",
        "fx": {
         "NERVE": 1
        },
        "say": [
         {
          "s": "ezra",
          "t": "Then she says no, and you're still a guy who asked the right way. Nobody can take that from you.",
          "to": "eli"
         }
        ]
       },
       {
        "silent": true,
        "t": "Watch his fishing line.",
        "fx": {
         "DRIFT": 1
        }
       }
      ]
     }
    }
   ],
   "loc": "bridge",
   "mood": "golden",
   "goal": "Find Ezra at the creek bridge",
   "talk": "ezra",
   "place": "The creek bridge",
   "date": "A Sunday"
  },
  {
   "id": "c15c",
   "chapter": 15,
   "lines": [
    {
     "k": "narr",
     "t": "She sends a note on Friday. \"My sister went home. I've always wanted to see the view from that old tower you talk about. Sunday?\""
    },
    {
     "k": "narr",
     "t": "So here they are. On top of the old water tower in Larkspur, where Rook pointed out a yellow window on a hill a lifetime ago."
    },
    {
     "k": "narr",
     "t": "That window is dark now. The Marlowes moved away years ago."
    },
    {
     "s": "wren",
     "t": "It's beautiful. You can see the whole valley. Is that your mom's house? With the lamp?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "She lights it every night. Until I get home.",
     "to": "wren"
    },
    {
     "s": "wren",
     "t": "That's the sweetest thing I've ever heard.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "The sun is going down behind the mill. It's now or never. It's always been now or never. He's spent his whole life picking never."
    },
    {
     "choice": {
      "prompt": "What do you ask her?",
      "opts": [
       {
        "req": "NERVE >= 12",
        "lock": "You don't trust yourself to ask it clearly. Not yet.",
        "t": "\"Before I say anything... can I ask you something? Are you comfortable with how I've been around you? Have I been too close, or expected too much? I want the truth. Even if it hurts.\"",
        "fx": {
         "NERVE": 2,
         "set": [
          "asked",
          "asked_kindly"
         ]
        }
       },
       {
        "t": "\"Wren, I think I'm falling for you.\"",
        "fx": {
         "NERVE": 2,
         "HEART": 1,
         "set": [
          "asked"
         ]
        }
       },
       {
        "crack": true,
        "crackNote": "Your heart is pounding. The sun drops behind the mill.",
        "t": "Say everything at once."
       },
       {
        "silent": true,
        "t": "Look at the view. Say nothing.",
        "fx": {
         "DRIFT": 2
        }
       }
      ]
     }
    },
    {
     "s": "wren",
     "t": "...Eli. Nobody's ever asked me that. Not like that. Not first.",
     "to": "eli",
     "if": "flag('asked_kindly') and wren >= 5"
    },
    {
     "s": "wren",
     "t": "Yes. I'm comfortable. You've never once made me feel like I owe you something. That's... rarer than you think.",
     "to": "eli",
     "if": "flag('asked_kindly') and wren >= 5"
    },
    {
     "s": "eli",
     "t": "Then can I tell you something? I feel safe with you. That's all. I don't need you to be anything. I just wanted to ask if there's room for me in your life. Close. However close you want.",
     "to": "wren",
     "if": "flag('asked_kindly') and wren >= 5"
    },
    {
     "s": "wren",
     "t": "There's room. There's a whole chair. ...I don't know what we are yet. But I'd like to figure it out slowly. Is slow okay?",
     "to": "eli",
     "if": "flag('asked_kindly') and wren >= 5"
    },
    {
     "s": "eli",
     "t": "Slow is the only speed I've got.",
     "to": "wren",
     "if": "flag('asked_kindly') and wren >= 5"
    },
    {
     "s": "wren",
     "t": "...Thanks for asking that first. Really. Most people just say the big thing and leave you holding it.",
     "to": "eli",
     "if": "flag('asked_kindly') and wren >= 3 and wren < 5"
    },
    {
     "s": "wren",
     "t": "Honestly? Sometimes it's been a little much. I care about you. I do. But I've got my own stuff going on, and I need to go slow. Can we stay friends? Real ones. And see what happens?",
     "to": "eli",
     "if": "flag('asked_kindly') and wren >= 3 and wren < 5"
    },
    {
     "s": "eli",
     "t": "Yes. Of course. Thanks for telling me the truth.",
     "to": "wren",
     "if": "flag('asked_kindly') and wren >= 3 and wren < 5"
    },
    {
     "s": "wren",
     "t": "...I'm glad you asked. Because honestly, yes. It's been too close for me. I don't think I can be what you need, Eli. I need some space.",
     "to": "eli",
     "if": "flag('asked_kindly') and wren < 3"
    },
    {
     "s": "eli",
     "t": "Then you'll have it. Thank you for telling me. I mean it.",
     "to": "wren",
     "if": "flag('asked_kindly') and wren < 3"
    },
    {
     "s": "wren",
     "t": "Oh. Oh, Eli. ...I don't know what I feel yet. You mean a lot to me. But that's a big thing to hand someone on top of a tower.",
     "to": "eli",
     "if": "flag('asked') and not flag('asked_kindly') and wren >= 6"
    },
    {
     "s": "wren",
     "t": "Can you give me time? It's not a no. Just... time.",
     "to": "eli",
     "if": "flag('asked') and not flag('asked_kindly') and wren >= 6"
    },
    {
     "s": "wren",
     "t": "Eli... I'm sorry. I don't feel that way. I care about you. But I don't. I'm really sorry.",
     "to": "eli",
     "if": "flag('asked') and not flag('asked_kindly') and wren < 6"
    },
    {
     "k": "narr",
     "t": "She means it kindly. It's the kindest no you've ever gotten. It still lands like a rock.",
     "if": "flag('asked') and not flag('asked_kindly') and wren < 6"
    },
    {
     "k": "narr",
     "t": "You look at the view. She looks at the view. The sun goes down. She says it's getting cold. You walk her back to the coach.",
     "if": "not flag('asked')"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Another time. There's always another time. There's always another porch, another coach, another Sunday.",
     "if": "not flag('asked')"
    },
    {
     "k": "narr",
     "t": "The lamps come on, one by one, all across Larkspur. Ma's is the first."
    }
   ],
   "loc": "tower",
   "mood": "dusk",
   "goal": "Meet Wren at the old water tower in Larkspur",
   "talk": "wren",
   "place": "The old water tower",
   "date": "Last Sunday in October",
   "journal": [
    {
     "t": "Whatever she said, I asked. I asked the right way. That's mine to keep.",
     "fx": {
      "NERVE": 2,
      "HEART": 2
     }
    },
    {
     "t": "I don't need someone to choose me to be worth something. I'm learning that.",
     "fx": {
      "HEART": 1,
      "DRIFT": -1
     }
    },
    {
     "t": "It doesn't matter. Nothing ever does.",
     "fx": {
      "STONE": 2
     }
    }
   ]
  }
 ],
 "endingRules": [
  {
   "if": "DRIFT >= 8",
   "go": "autopilot"
  },
  {
   "if": "flag('stayed_guilt')",
   "go": "cure"
  },
  {
   "if": "STONE >= 8 or flag('ended_cold')",
   "go": "stone"
  },
  {
   "if": "flag('saw_doc') and flag('ended_honest') and DRIFT <= 4 and HEART >= 6 and flag('asked_kindly')",
   "go": "present"
  },
  {
   "if": "flag('asked') and wren >= 5",
   "go": "room"
  },
  {
   "if": "flag('asked')",
   "go": "kindno"
  },
  {
   "go": "unsaid"
  }
 ],
 "endings": {
  "present": {
   "title": "Present Again",
   "sub": "You learned to care without losing yourself.",
   "loc": "home",
   "mood": "golden",
   "lines": [
    {
     "k": "narr",
     "t": "The next October. The lamp in the window. The tin box on the kitchen table now, not under the bed."
    },
    {
     "k": "narr",
     "t": "Eli sees the nerve doctor in Port Ellis every other Thursday. Some weeks are good. Some weeks the curtain comes down, and he sits, and names five things he can see, and waits for it to lift. It always lifts."
    },
    {
     "k": "narr",
     "t": "He rides to work and remembers the bridge. The mill. The hawk on the fence post. He's started noticing hawks."
    },
    {
     "k": "narr",
     "t": "Viola wrote once, in the spring. Her hands are better. She's taking her medicine. She's seeing a schoolteacher who leaves her a note every morning. Eli wrote back: \"I'm really glad.\" He meant it."
    },
    {
     "k": "narr",
     "t": "And on Sundays, Wren comes over for dinner. Ma likes her. Ma pretends she doesn't, which is how you know."
    },
    {
     "s": "ma",
     "t": "That girl draws birds on my napkins.",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "I know, Ma.",
     "to": "ma"
    },
    {
     "s": "ma",
     "t": "...Keep her.",
     "to": "eli"
    },
    {
     "k": "narr",
     "t": "Into the tin box, on top of everything else, goes a drawing of a bird on a wire. Not in the rain this time. In the sun."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I still care. I just learned how to do it without disappearing."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "And for once, I'm giving myself the same patience I spent my whole life giving everyone else."
    }
   ],
   "cast": "ma"
  },
  "room": {
   "title": "Room at the Table",
   "sub": "There was room for you after all.",
   "loc": "home",
   "mood": "golden",
   "lines": [
    {
     "k": "narr",
     "t": "The next October. Wren comes over for dinner on Sundays, and they walk to the coach on Thursdays, and they're taking it slow, like he promised."
    },
    {
     "k": "narr",
     "t": "Some mornings he still loses the road. He hasn't told anyone how often. One day he'll see someone about it. One day."
    },
    {
     "k": "narr",
     "t": "But there's a chair at the table with a bird drawn on the napkin next to it. And Ma's lamp is on. And for now, that's a lot."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I asked. She answered. I'm still here. For a long time I didn't think all three of those could be true at once."
    }
   ],
   "cast": "ma"
  },
  "kindno": {
   "title": "Alone, Not Lonely",
   "sub": "She told you the truth. You took it well.",
   "loc": "bridge",
   "mood": "golden",
   "lines": [
    {
     "k": "narr",
     "t": "The next October. He and Wren still eat lunch together on Thursdays. Friends. Real ones. It's not what he hoped for. It's something he didn't know he needed."
    },
    {
     "k": "narr",
     "t": "On Sundays, he fishes off the creek bridge with Ezra. They never catch anything."
    },
    {
     "s": "ezra",
     "t": "You okay?",
     "to": "eli"
    },
    {
     "s": "eli",
     "t": "Yeah. I actually am. Not happy, exactly. But here.",
     "to": "ezra"
    },
    {
     "s": "ezra",
     "t": "Here's good. Here's a start.",
     "to": "eli"
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Maybe moving on doesn't mean finding someone new. Maybe it just means being alone for a while. Not as a punishment. Just as a place to rest."
    }
   ],
   "cast": "ezra"
  },
  "cure": {
   "title": "The Cure",
   "sub": "You stayed, and slowly stopped being anyone at all.",
   "loc": "lane",
   "mood": "overcast",
   "lines": [
    {
     "k": "narr",
     "t": "He stays. Of course he stays. He brings her medicine. He asks every morning if she's eaten. He walks her home every night."
    },
    {
     "k": "narr",
     "t": "Viola gets a little better, then a little worse, and every time she's worse he hears \"thank you for your gift,\" even when she doesn't say it."
    },
    {
     "k": "narr",
     "t": "Years go by. He's really good at the wire. He's really good at being needed. He's not good at all at being himself. He's forgotten who that was."
    },
    {
     "k": "narr",
     "t": "Wren left the office the next spring. He never asked her anything."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I wanted to be someone's cure. I ended up being someone's furniture."
    }
   ],
   "cast": "viola",
   "retry": "c13h",
   "retryLabel": "Go back to Willow Lane",
   "retryFx": {
    "eq": {
     "DRIFT": 5
    }
   }
  },
  "stone": {
   "title": "Stone",
   "sub": "Nothing gets in anymore. Nothing gets out.",
   "loc": "home",
   "mood": "night",
   "lines": [
    {
     "k": "narr",
     "t": "He shuts every door. Viola. Wren. Even Rook, eventually, who keeps knocking for a year and then stops."
    },
    {
     "k": "narr",
     "t": "He goes to work. He comes home. Ma's lamp is on. He turns it off himself now, so she won't wait up."
    },
    {
     "k": "narr",
     "t": "Nothing hurts. That was the plan. He just didn't know that nothing would also mean nothing."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I turned myself into stone so nobody could break me. It worked. It worked perfectly."
    }
   ],
   "retry": "c13a",
   "retryLabel": "Go back to that winter at the office",
   "retryFx": {
    "eq": {
     "STONE": 4
    }
   }
  },
  "autopilot": {
   "title": "Autopilot",
   "sub": "The road keeps going. You just aren't on it.",
   "loc": "home",
   "mood": "night",
   "lines": [
    {
     "k": "narr",
     "t": "He rides to work. He rides home. He doesn't remember either one. Pilgrim knows the way. Pilgrim always has."
    },
    {
     "k": "narr",
     "t": "The tin box stays under the bed. He means to open it again someday. He doesn't remember to."
    },
    {
     "k": "narr",
     "t": "Ma's lamp is on in the window every night. Some nights he sits in the yard and looks at it for an hour, and can't feel why it matters, only that it does."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "I'm here. I think I'm here. If someone finds this, please. Ask me how I'm doing. Ask me twice."
    }
   ],
   "retry": "c14a",
   "retryLabel": "Go back to the morning ride",
   "retryFx": {
    "eq": {
     "DRIFT": 5
    }
   }
  },
  "unsaid": {
   "title": "The Unsaid",
   "sub": "Another time. There's always another time.",
   "loc": "tower",
   "mood": "night",
   "lines": [
    {
     "k": "narr",
     "t": "Wren moves to Port Ellis in the spring. A better job, she writes. \"Thanks for the tower. I'll never forget that view.\""
    },
    {
     "k": "narr",
     "t": "He keeps her bird drawing in the tin box, on top of the autograph page, on top of the letters, on top of the splinter of yellow wood."
    },
    {
     "k": "narr",
     "t": "A box full of things he never said."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "Next time. Next time I'll ask."
    },
    {
     "s": "eli",
     "k": "thought",
     "t": "...I've been saying that since seventh year."
    }
   ],
   "retry": "c15c",
   "retryLabel": "Climb the tower again"
  }
 },
 "names": {
  "abel": "Abel",
  "adam": "Adam",
  "amos": "Old Amos",
  "bram": "Bram",
  "bright": "Miss Bright",
  "clerk": "Mr. Odell",
  "danny": "Danny Marlowe",
  "delphine": "Delphine",
  "doc": "Doc Whitlow",
  "eli": "Eli",
  "ezra": "Ezra",
  "gideon": "Gideon",
  "girl": "A girl by the creek",
  "hargrove": "Mr. Hargrove",
  "hattie": "Hattie",
  "iris": "Iris Lane",
  "june": "June",
  "knowing": "The part that knows",
  "larkin": "Mrs. Larkin",
  "lettie": "Lettie Shaw",
  "lou": "Lou",
  "ma": "Ma",
  "master": "Mr. Cutter",
  "nate": "Nate",
  "nell": "Nell",
  "nico": "Nico",
  "nobody": "no one",
  "penelope": "Penelope",
  "percy": "Percy",
  "rhoda": "Aunt Rhoda",
  "rook": "Rook",
  "rosie": "Rosie",
  "sam": "Sam",
  "thorne": "Miss Thorne",
  "toby": "Toby",
  "viola": "Viola",
  "wanting": "The part that wants",
  "wren": "Wren"
 }
};
