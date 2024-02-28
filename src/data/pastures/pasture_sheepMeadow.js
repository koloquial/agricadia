import sheepMeadowImage from '../../images/sheepMeadow.png';

const pasture_sheepMeadow = {
    "name": "Sheep Meadow",
    "type": "blue",
    "description": "Rolling hills covered with soft, green grass, where fluffy sheep graze peacefully. The gentle bleating of lambs echoes across the meadow, creating a serene atmosphere.",
    "image": sheepMeadowImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Improved Fencing",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Shelter Construction",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Grazing Rotation",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Shearing Station",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Predator Deterrent",
            "value": 125,
            "dependency": []
        }
    ]
}

export default pasture_sheepMeadow;