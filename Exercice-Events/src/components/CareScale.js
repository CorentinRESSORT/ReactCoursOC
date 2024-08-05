import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function need(scaleVal)
{
		let val = "";
		switch(scaleVal){
			case (1):
				val = "peu";
				break;
			case(2):
				val = "modérément";
				break;
			case(3):
				val = "beaucoup";
				break;
			default:
			}
			return (val);
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={(e)=>{
			e.stopPropagation();
			alert(`Cette Element requiert ${need(scaleValue)} ${careType === "light" ? 'de lumière' : "d'arrosage"}`)}}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
