import lemons1 from '../../images/orchards/lemons/lemons-1.jpeg';
import lemons2 from '../../images/orchards/lemons/lemons-2.jpeg';
import lemons3 from '../../images/orchards/lemons/lemons-3.jpeg';
import lemons4 from '../../images/orchards/lemons/lemons-4.jpeg';

const lemonGrove = {
    "name": "Lemon Grove",
    "type": "purple",
    "description": "Rows of lemon trees laden with bright yellow fruits characterize the lemon grove. The air is infused with the zesty fragrance of lemon blossoms, invigorating the senses.",
    "images": [lemons1, lemons2, lemons3, lemons4],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Summer", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Fertilization",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Solar-Powered Irrigation",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Scented Pheromone Traps",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Grove Expansion",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "High-Efficiency Harvesting Equipment",
            "value": 125,
            "dependency": []
        }
    ]
}

export default lemonGrove;