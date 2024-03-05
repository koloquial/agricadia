import cherries1 from '../../images/orchards/cherries/cherries-1.jpeg';
import cherries2 from '../../images/orchards/cherries/cherries-2.jpeg';
import cherries3 from '../../images/orchards/cherries/cherries-3.jpeg';
import cherries4 from '../../images/orchards/cherries/cherries-4.jpeg';

const cherryOrchard = {
    "name": "Cherry Orchard",
    "type": "red",
    "description": "Cherry trees laden with ruby-red fruits create a picturesque scene in the orchard. The gentle rustle of leaves accompanies the sweet scent of cherries.",
    "images": [cherries1, cherries2, cherries3, cherries4],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Netting System",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Cherry Festival Promotion",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Pruning and Thinning",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Drip Irrigation",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Diversity Program",
            "value": 125,
            "dependency": []
        }
    ]
}

export default cherryOrchard;