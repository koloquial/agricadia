import shrimpFarmImage from '../../images/shrimpAquaculture.png';

const aqua_shrimpFarm = {
    "name": "Shrimp Aquaculture",
    "type": "gray",
    "description": "An aquaculture facility dedicated to raising shrimp in controlled ponds or tanks. Shrimp are prized for their sweet flavor and are popular in a variety of cuisines.",
    "image": shrimpFarmImage,
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

export default aqua_shrimpFarm;