import crawfish1 from '../../images/crawfish-1.jpeg';
import crawfish2 from '../../images/crawfish-2.jpeg';
import crawfish3 from '../../images/crawfish-3.jpeg';
import crawfish4 from '../../images/crawfish-4.jpeg';
import crawfish5 from '../../images/crawfish-5.jpeg';
import crawfish6 from '../../images/crawfish-6.jpeg';

const aqua_crawfishFarm = {
    "name": "Crawfish Aquaculture",
    "type": "gray",
    "description": "Rolling hills carpeted with fields of barley, their slender stalks swaying gently in the wind. Birds flit among the plants, feasting on insects and adding to the bucolic scene.",
    "images": [crawfish1, crawfish2, crawfish3, crawfish4, crawfish5, crawfish6],
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Habitat Enhancement",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Water Quality",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Feeding Enhancement",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Predator Control",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Pond Dredging",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default aqua_crawfishFarm;