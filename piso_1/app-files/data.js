var APP_DATA = {
  "scenes": [
    {
      "id": "0-programacin",
      "name": "Programación",
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
        "yaw": -0.16675647992401643,
        "pitch": -0.05497158135731439,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.9215809021516002,
          "pitch": 0.20945672417982308,
          "rotation": 0,
          "target": "2-marketing-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6795864880556692,
          "pitch": -0.11978756026817905,
          "title": "Programación&nbsp;",
          "text": "Encargado: Lic. Roberto Pérez Ochoa<div>esta en Marketing</div>"
        }
      ]
    },
    {
      "id": "1-ac",
      "name": "AC",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2246179559619428,
          "pitch": 0.18247060820851502,
          "rotation": 0,
          "target": "3-descanso-"
        },
        {
          "yaw": 0.8078913686885567,
          "pitch": 0.17388656851106887,
          "rotation": 0,
          "target": "2-marketing-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9770682751620363,
          "pitch": -0.13444920384159964,
          "title": "Atención al cliente",
          "text": "Encargado Lic. Juan Issac"
        }
      ]
    },
    {
      "id": "2-marketing-",
      "name": "Marketing ",
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
        "yaw": -2.1018280911627443,
        "pitch": -0.15072295108631906,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.985336239664168,
          "pitch": 0.4938765778579661,
          "rotation": 0,
          "target": "1-ac"
        },
        {
          "yaw": 0.18263723562866652,
          "pitch": 0.3119454518173779,
          "rotation": 0,
          "target": "0-programacin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3536077426666644,
          "pitch": -0.14569638864853118,
          "title": "Marketing",
          "text": "Encargada Lic. Gabriela Martinez"
        },
        {
          "yaw": -2.8372160957940764,
          "pitch": -0.17807320937800597,
          "title": "Oficina Principal",
          "text": "Aquí está el Lic. Roberto&nbsp;"
        }
      ]
    },
    {
      "id": "3-descanso-",
      "name": "Descanso ",
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
        "yaw": 0.19936290440609739,
        "pitch": -0.017310905487523343,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.8016354570773068,
          "pitch": 0.8018606385487246,
          "rotation": 0,
          "target": "1-ac"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4742400581856998,
          "pitch": -0.16453864219342407,
          "title": "Descanso",
          "text": "Aquí puedes descansar"
        }
      ]
    }
  ],
  "name": "Piso_1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
