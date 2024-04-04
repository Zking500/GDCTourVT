var APP_DATA = {
  "scenes": [
    {
      "id": "0-marketing",
      "name": "Marketing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 1.437247279250336,
        "pitch": -0.012231452572994073,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.9103958620208568,
          "pitch": 0.03819963846786223,
          "rotation": 0,
          "target": "1-recursos-humanos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.27010328709299,
          "pitch": 0.1495688925309615,
          "title": "Marketing",
          "text": "Encargado: Lic. Arturo Jeremías&nbsp;"
        }
      ]
    },
    {
      "id": "1-recursos-humanos",
      "name": "Recursos humanos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 1.6367726291290898,
        "pitch": 0.09466632806653763,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.7249271423728558,
          "pitch": 0.19643834541125926,
          "rotation": 0,
          "target": "0-marketing"
        },
        {
          "yaw": -1.7759905754247303,
          "pitch": 0.5308654188725299,
          "rotation": 0,
          "target": "2-seguridad-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7646709084372478,
          "pitch": -0.25237964750789743,
          "title": "Recursos Humanos",
          "text": "Encargada: Lic. Sofia Gómez&nbsp;"
        }
      ]
    },
    {
      "id": "2-seguridad-",
      "name": "Seguridad ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 0.3871475998363465,
        "pitch": -0.017341831092959836,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.0052940041868403,
          "pitch": 0.17624882135588749,
          "rotation": 0,
          "target": "3-psicloga-"
        },
        {
          "yaw": 1.1039829479150445,
          "pitch": 0.14189206608056182,
          "rotation": 0,
          "target": "1-recursos-humanos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3562664279750365,
          "pitch": -0.2132661451816258,
          "title": "Seguridad",
          "text": "Encargado: Lic. Santiago Ismael"
        }
      ]
    },
    {
      "id": "3-psicloga-",
      "name": "Psicóloga ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": 0.4617788968990233,
        "pitch": 0.17795642369193665,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.9823840448740686,
          "pitch": 0.48312733282721965,
          "rotation": 0,
          "target": "4-contadura"
        },
        {
          "yaw": -1.9122658552272895,
          "pitch": 0.6092889031442219,
          "rotation": 0,
          "target": "2-seguridad-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.38564457720673495,
          "pitch": -0.003662354129193801,
          "title": "Psicóloga",
          "text": "Encargada: Lic. Juana Rodríguez&nbsp;"
        }
      ]
    },
    {
      "id": "4-contadura",
      "name": "Contaduría",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "yaw": -1.196454390972562,
        "pitch": 0,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.1947141679728599,
          "pitch": 0.15980189880986018,
          "rotation": 0,
          "target": "3-psicloga-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.717398103453835,
          "pitch": -0.12330000186651269,
          "title": "Contaduría&nbsp;",
          "text": "Encargado: Lic.Josué Roberto&nbsp;"
        }
      ]
    }
  ],
  "name": "Piso_4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
