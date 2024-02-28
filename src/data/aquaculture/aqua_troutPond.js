import troutPondImage from '../../images/troutPond.png';

const aqua_troutPond = {
    "name": "Trout Pond",
    "type": "blue",
    "description": "A tranquil pond stocked with freshwater trout, known for their delicate flavor and firm texture. Anglers flock to the pond for recreational fishing, while chefs prize the trout for its culinary versatility.",
    "image": troutPondImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Raceway Expansion",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Water Flow Optimization",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Filleting and Processing Line",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Habitat Enhancement",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Eco-Certification",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_troutPond;