import shrimp1 from '../../images/fisheries/shrimp/shrimp-1.jpeg';
import shrimp2 from '../../images/fisheries/shrimp/shrimp-2.jpeg';

const shrimpFarm = {
    "name": "Shrimp Aquaculture",
    "type": "gray",
    "description": "An aquaculture facility dedicated to raising shrimp in controlled ponds or tanks. Shrimp are prized for their sweet flavor and are popular in a variety of cuisines.",
    "images": [shrimp1, shrimp2],
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Water Aeration",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Selective Breeding",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Sustainable Aquafeed Sourcing",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Farming Racks",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Community Engagement Initiatives",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default shrimpFarm;