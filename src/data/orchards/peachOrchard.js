import peaches1 from '../../images/orchards/peaches/peaches-1.jpeg';
import peaches2 from '../../images/orchards/peaches/peaches-2.jpeg';
import peaches3 from '../../images/orchards/peaches/peaches-3.jpeg';
import peaches4 from '../../images/orchards/peaches/peaches-4.jpeg';

const peachOrchard = {
    "name": "Peach Orchard",
    "type": "red",
    "description": "Delicate pink blossoms give way to fuzzy peach fruits in the peach orchard. The trees provide shade from the sun, creating a serene atmosphere.",
    "images": [peaches1, peaches2, peaches3, peaches4],
    "purchase": 160,
    "mortgage": 80,
    "income": 12,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Summer',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Pruning and Thinning Program",
            "value": 48,
            "dependency": ["Autumn"]
        },
        {
            "name": "Frost Protection",
            "value": 120,
            "dependency": ["Winter"]
        },
        {
            "name": "Drip Irrigation",
            "value": 320,
            "dependency": ["Summer"]
        },
        {
            "name": "Soil Amendmentm",
            "value": 200,
            "dependency": ["Spring"]
        },
        {
            "name": "Harvesting Equipment",
            "value": 200,
            "dependency": []
        }
    ]
}

export default peachOrchard;