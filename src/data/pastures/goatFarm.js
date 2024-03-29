import goats1 from '../../images/pastures/goats/goat-1.jpeg';
import goats2 from '../../images/pastures/goats/goat-2.jpeg';
import goats3 from '../../images/pastures/goats/goat-3.jpeg';

const goatFarm = {
    "name": "Goat Farm",
    "type": "blue",
    "description": "Rocky hillsides dotted with agile goats, their nimble hooves traversing steep terrain with ease. Goat milk and cheese produced here are prized for their rich flavor and nutritional value.",
    "images": [goats1, goats2, goats3],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Rock Climbing",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Milking Parlor",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Herbal Forage Garden",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Agility Course",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Creamery",
            "value": 125,
            "dependency": []
        }
    ]
}

export default goatFarm;