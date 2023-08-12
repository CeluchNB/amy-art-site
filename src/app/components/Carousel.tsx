import ArtPiece from "./ArtPiece"

const Carousel = () => {

    return (
        <div className="w-full h-full flex flex-row">
            <div className="m-4">
                <ArtPiece index={0} />
            </div>
            <div className="m-4 translate-y-48">
                <ArtPiece index={0} />
            </div>
            <div className="m-4">
                <ArtPiece index={0} />
            </div>
        </div>
    )
}

export default Carousel
