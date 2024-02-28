import oysterFarmImage from '../../images/oysterFarm.png';

const aqua_oysterFarm = {
    "name": "Oyster Farm",
    "type": "gray",
    "description": "An oyster farm where these bivalve mollusks are cultivated in coastal waters. Oysters are prized for their briny flavor and are enjoyed raw or cooked in various dishes.",
    "image": oysterFarmImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Bed Expansion",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Spat Collector",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Grading and Sorting Equipment",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Reef Restoration",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Shell Recycling",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_oysterFarm;