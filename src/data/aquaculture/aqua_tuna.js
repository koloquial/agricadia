import tunaImage from '../../images/tuna.png';

const aqua_tuna = {
    "name": "Bluefin Tuna Angling",
    "type": "blue",
    "description": "Prepare for an exhilarating Tuna Fishing Expedition, where you'll venture into the deep waters in pursuit of the mighty tuna. Equip your vessel with specialized gear, harness your angling skills, and get ready for the adventure of a lifetime as you aim to reel in these powerful and prized fish.",
    "image": tunaImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Tuna Tower",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "High-performance Outboard Motors",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Rigging Station and Tackle Storage",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Electronic Chumming",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Underwater LED Lights",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_tuna;