import swordfishImage from '../../images/swordfish.png';

const aqua_swordfish = {
    "name": "Swordfishing",
    "type": "blue",
    "description": "Embark on an exhilarating Swordfishing Expedition, where you'll venture into the deep blue waters in pursuit of the legendary swordfish. Equip your vessel with specialized gear, harness your angling skills, and prepare for an unforgettable fishing adventure!",
    "image": swordfishImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Advanced Sonar",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Longline Fishing",
            "value": 60,
            "dependency": []
        },
        {
            "name": "High-Power Spotlights",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Hydraulic Reel",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Weather Monitoring Equipment",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_swordfish;