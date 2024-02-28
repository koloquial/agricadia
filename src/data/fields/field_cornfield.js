import cornfieldImage from '../../images/cornfield.png';

const field_cornfield = {
    "name": "Cornfield",
    "type": "yellow",
    "description": "Towering stalks of corn stand tall and proud, their golden ears bursting with plump kernels. A scarecrow guards the edge of the field, keeping pests at bay.",
    "image": cornfieldImage,
    "purchase": 60,
    "mortgage": 30,
    "income": 4,
    "production": ["Summer", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Hybrid Varieties",
            "value": 16,
            "dependency": ["Autumn"]
        },
        {
            "name": "Automated Irrigation",
            "value": 40,
            "dependency": ["Spring"]
        },
        {
            "name": "Nitrogen Fixing Cover Crops",
            "value": 120,
            "dependency": ["Summer"]
        },
        {
            "name": "Crop Mulching",
            "value": 140,
            "dependency": ["Winter"]
        },
        {
            "name": "Pest Control",
            "value": 130,
            "dependency": []
        }
    ]
}

export default field_cornfield;