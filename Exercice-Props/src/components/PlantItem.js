import CareScale from "./CareScale";

function handleClick(plantName)
{
    alert("Vous allez achetez une Plante" + plantName);
}

function PlantItem({id, cover, name, water, light})
{
   return (
   <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
        <h2>{name}</h2>
        <img src={cover} className="lmj-plant-cover" alt={`${name}`}/>
        <div>
            <CareScale careType="water" scaleValue={water}/>
            <CareScale careType="light" scaleValue={light}/>
        </div>
   </li>
   )
}

export default PlantItem;