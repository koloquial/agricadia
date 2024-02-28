import dairyCowImage from '../../images/dairyCow.png';

const pasture_dairyCow = {
    "name": "Dairy Cow",
    "type": "brown",
    "description": "Lush green pastures dotted with contented dairy cows, their gentle lowing filling the air. Milk produced here is used to make a variety of dairy products, from creamy cheeses to rich ice creams.",
    "image": dairyCowImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Automated Milking",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Comfort Mats",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Nutritionist Consultation",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Manure Management",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Milking Parlor",
            "value": 125,
            "dependency": []
        }
    ]
}

export default pasture_dairyCow;