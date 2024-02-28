import salmonHatcheryImage from '../../images/salmonHatchery.png';

const aqua_salmonHatchery = {
    "name": "Salmon Hatchery",
    "type": "blue",
    "description": " A salmon hatchery dedicated to breeding and raising salmon fry before releasing them into rivers and streams. Salmon are prized for their rich flavor and high nutritional value.",
    "image": salmonHatcheryImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Feeding Automation",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Water Quality",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Disease Prevention",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Genetics Research",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Escape Prevention",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_salmonHatchery;