const products = [
  {
    nom: "Mobilier et Décoration intérieure",
    code: "MDI",
    souscategories: [
      {
        nom: "Chaises",
        description: "En inox pour un design moderne et épuré.",
        idcode: 1,
        image: "/products/chaises/chaise1.jpeg",
        produits: [
          {
            id: "c1",
            titre: "Chaise moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise1.jpeg",
          },
          {
            id: "c2",
            titre: "Chaise 2  moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: ["/products/chaises/chaise2.jpeg"],
          },
          {
            id: "c3",
            titre: "Chaise 3 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise3.jpeg",
          },
          {
            id: "c4",
            titre: "Chaise 1 de bar en inox",
            description:
              "Haute et élégante, idéale pour les comptoirs et bars.",
            images: "/products/chaises/chaiseb1.jpg",
          },
          {
            id: "c5",
            titre: "Chaise 2 de bar en inox",
            description:
              "Haute et élégante, idéale pour les comptoirs et bars.",
            images: "/products/chaises/chaiseb2.jpg",
          },
          {
            id: "c6",
            titre: "Chaise 1 avec accoudoirs en inox ",
            description: "Confortable, avec des accoudoirs intégrés .",
            images: "/products/chaises/chaisea1.jpg",
          },
          {
            id: "c7",
            titre: "Chaise 2 avec accoudoirs en inox ",
            description:
              "Confortable, Chaise de chirurgien avec accoudoirs pivotants .",
            images: "/products/chaises/chaisea2.jpg",
          },
          {
            id: "c8",
            titre: "Chaise 1 pliante en inox",
            description:
              "Pratique et légère, parfaite pour les espaces réduits.",
            images: "/products/chaises/chaisep1.jpeg",
          },
          {
            id: "c9",
            titre: "Chaise 2 pliante en inox",
            description:
              "Pratique et légère, parfaite pour les espaces réduits.",
            images: "/products/chaises/chaisep2.jpeg",
          },
          {
            id: "c10",
            titre: "Chaise 4 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise7.jpeg",
          },
          {
            id: "c11",
            titre: "Chaise 5 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise8.jpeg",
          },
          {
            id: "c12",
            titre: "Chaise 6 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise9.jpeg",
          },
          {
            id: "c13",
            titre: "Chaise 7 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise10.jpeg",
          },
          {
            id: "c14",
            titre: "Chaise 8 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise11.jpeg",
          },
          {
            id: "c15",
            titre: "Chaise 9 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise12.jpeg",
          },
          {
            id: "c16",
            titre: "Chaise 10 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise13.jpeg",
          },
          {
            id: "c17",
            titre: "Chaise 11 moderne en inox",
            description:
              "Une chaise élégante en inox avec un design minimaliste.",
            images: "/products/chaises/chaise14.jpeg",
          },
        ],
      },
      {
        nom: "Tables",
        description:
          "Tables à manger, de bureau, ou de café avec des pieds en inox.",
        idcode: 2,
        image: "/products/tables/tablev6.jpeg",

        produits: [
          {
            id: "t10",
            titre: "Table 1 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev1.jpeg",
          },
          {
            id: "t11",
            titre: "Table 2 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev2.jpeg",
          },
          {
            id: "t12",
            titre: "Table 3 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev3.jpeg",
          },
          {
            id: "t13",
            titre: "Table 4 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev4.jpeg",
          },
          {
            id: "t14",
            titre: "Table 5 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev5.jpeg",
          },
          {
            id: "t15",
            titre: "Table 6 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev6.jpeg",
          },
          {
            id: "t16",
            titre: "Table 7 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev7.jpeg",
          },
          {
            id: "t17",
            titre: "Table à manger ",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev8.jpeg",
          },
          {
            id: "t18",
            titre: "Table 8 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev9.jpeg",
          },
          {
            id: "t19",
            titre: "Table 9 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev10.jpeg",
          },
          {
            id: "t20",
            titre: "Table107 en inox avec plateau en verre",
            description:
              "Une table robuste et moderne avec un plateau en verre et des pieds en inox.",
            images: "/products/tables/tablev11.jpeg",
          },
        ],
      },

      {
        nom: "Bureaux ",
        description:
          "Sur mesure, avec des structures en inox pour une allure contemporaine.",
        idcode: 3,
        image: "/products/bureaux/bureaux.jpg",
        produits: [
          {
            id: "b1",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b1.jpeg",
          },
          {
            id: "b2",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b2.jpeg",
          },
          {
            id: "b3",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b3.jpg",
          },
          {
            id: "b4",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b4.jpeg",
          },
          {
            id: "b5",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b5.jpeg",
          },
          {
            id: "b6",
            titre: "Bureau Professionnel",
            description:
              "offrir un espace de travail confortable et ergonomique. Fabriqués avec des matériaux de qualité",
            images: "/products/bureaux/b6.jpeg",
          },
        ],
      },
      {
        nom: "Bibliothèques et étagères",
        description: "Avec des étagères en inox pour un aspect industriel.",
        idcode: 4,
        image: "/products/biblio/bibliotheque.jpg",
        produits: [
          {
            id: "e1",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b1.jpeg",
          },
          {
            id: "e2",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b2.jpeg",
          },
          {
            id: "e3",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b3.jpeg",
          },
          {
            id: "e4",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b4.jpeg",
          },
          {
            id: "e5",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b5.jpeg",
          },
          {
            id: "e6",
            titre: "Étagère design en inox ",
            description:
              "Alliant élégance et modernité, cette étagère en inox doré avec des plateaux en verre apporte une touche de luxe à tout intérieu",
            images: "/products/biblio/b6.jpeg",
          },
        ],
      },
      {
        nom: "Éléments de décoration ",
        description: "Sculptures, miroirs avec cadres en inox, lampes, etc.",
        idcode: 5,
        image: "/products/decoration/decoration.jpeg",
        produits: [
          {
            id: "m1",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m1.jpeg",
          },
          {
            id: "m2",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m2.jpeg",
          },
          {
            id: "m3",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m3.jpeg",
          },
          {
            id: "m4",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m4.jpeg",
          },
          {
            id: "m5",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m5.jpeg",
          },
          {
            id: "m6",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m6.jpeg",
          },
          {
            id: "m7",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m7.jpeg",
          },
          {
            id: "m8",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m8.jpeg",
          },
          {
            id: "m9",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m9.jpeg",
          },
          {
            id: "m10",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m10.jpeg",
          },
          {
            id: "m11",
            titre: "Miroir mural en inox doré",
            description:
              "Ce miroir au design moderne et sophistiqué est sublimé par un cadre en inox doré aux lignes géométriques élégantes",
            images: "/products/decoration/m11.jpeg",
          },
        ],
      },
    ],
  },
  {
    nom: "Menuiserie",
    code: "Menuiserie",
    souscategories: [
      {
        nom: "Portes",
        description:
          "Portes extérieures ou intérieures en inox, utilisées pour leur robustesse et leur résistance.",
        idcode: 6,
        image: "/products/portes/porte.jpeg",
        produits: [
          {
            id: "p1",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p1.jpeg",
          },
          {
            id: "p2",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p2.jpeg",
          },
          {
            id: "p3",
            titre: "Porte d’entrée moderne en fer",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p3.jpeg",
          },
          {
            id: "p4",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p4.jpeg",
          },
          {
            id: "p5",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p5.jpeg",
          },
          {
            id: "p6",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p6.jpeg",
          },
          {
            id: "p7",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p7.jpeg",
          },
          {
            id: "p8",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p8.jpeg",
          },
          {
            id: "p9",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p9.jpeg",
          },
          {
            id: "p10",
            titre: "Porte d’entrée moderne en inox et finition noire",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "/products/portes/p10.jpeg",
          },
        ],
      },
      {
        nom: "Fenêtres",
        description:
          "Cadres de fenêtres, offrant un look moderne et une haute résistance aux intempéries.",
        idcode: 7,
        image: "/products/fenetres/fenetre.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Volets roulants",
        description: "Avec des matériaux inox pour une meilleure durée de vie.",
        idcode: 8,
        image: "/products/Volets/volet.jpeg",
        produits: [
          {
            id: "5",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Portails et grilles",
        description:
          "Portails extérieurs et grilles de sécurité fabriqués en inox.",
        idcode: 9,
        image: "/products/portails/Portail.jpeg",
        produits: [
          {
            id: "g1",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g1.jpeg",
          },
          {
            id: "g2",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g2.jpeg",
          },
          {
            id: "g3",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g3.jpeg",
          },
          {
            id: "g4",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g4.jpeg",
          },
          {
            id: "g5",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g5.jpeg",
          },
          {
            id: "g6",
            titre: "Porte moderne en inox",
            description: "Portail coulissant moderne en inox",
            images: "/products/portails/g6.jpeg",
          },
        ],
      },
    ],
  },
  {
    nom: "Équipements sanitaires et industriels",
    code: "ESI",
    souscategories: [
      {
        nom: "Sanitaires ",
        idcode: 10,
        image: "/products/industrie/sanitaire.jpeg",
        description:
          "Lavabos, douches, et autres équipements sanitaires en inox pour leur résistance et leur facilité d’entretien.",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Tuyauteries ",
        idcode: 11,
        image: "/products/industrie/tuyautrie.jpeg",
        description:
          "Conduites, tuyaux et raccords en inox pour le transport de fluides dans les systèmes industriels.",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Réservoirs",
        idcode: 12,
        image: "/products/industrie/reservoir.jpeg",
        description:
          "Réservoirs de stockage ou cuves en inox utilisés dans l'industrie alimentaire, chimique, ou pharmaceutique",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
      {
        nom: "Machines industrielles ",
        idcode: 13,
        image: "/products/industrie/machine.jpg",
        description:
          "Composants de machines, comme des supports ou des éléments en inox pour leur robustesse et leur résistance à la chaleur",
        produits: [
          {
            id: "7",
            titre: "Porte moderne en inox",
            description:
              "Une porte élégante et résistante pour une sécurité accrue.",
            images: "image7.jpg",
          },
        ],
      },
    ],
  },
];

export default products;
