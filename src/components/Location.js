export default function Location({locationData}) {
    return (
        <ul>
            <li><span>Name:</span> {locationData.name}</li>
            <li><span>Climate:</span> {locationData.climate}</li>
            <li><span>Terrain:</span> {locationData.terrain}</li>
        </ul>
    )
}