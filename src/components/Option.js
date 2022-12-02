export default function Option({movie}) {
    return (
        <option value={movie.title} >{movie.title}</option>
    )
}