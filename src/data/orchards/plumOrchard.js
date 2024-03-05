import plum1 from '../../images/orchards/plums/plums-1.jpeg';
import plum2 from '../../images/orchards/plums/plums-2.jpeg';
import plum3 from '../../images/orchards/plums/plums-3.jpeg';

const plumOrchard = {
    "name": "Plum Orchard",
    "type": "purple",
    "description": "Verdant plum trees, heavy with plump fruits in shades of purple and red, fill the orchard. The air is perfumed with the sweet fragrance of plum blossoms.",
    "images": [plum1, plum2, plum3],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Orchard Expansion",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Advanced Pollination",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Pest Management",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Automated Pruning",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Irrigation Upgrade",
            "value": 125,
            "dependency": []
        }
    ]
}

export default plumOrchard;