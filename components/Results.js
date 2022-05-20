import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {/* ici, on applique un display:grid et on modifie le nombre de colonnes en fonction de l'ecran */}
            {/*  a partir de 3xl, on repasse en display:flex */}
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Results;