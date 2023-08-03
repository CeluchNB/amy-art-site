import Image from 'next/image'

interface ArtPieceProps {
    index: number;
}

const ArtPiece = ({ index }: ArtPieceProps) => {
    return (
        <div className="bg-stone-100 transition ease-in-out hover:scale-125">
            <div className="p-4 flex flex-col items-center">
                <Image src="https://placekitten.com/640/360" height="320" width="640" alt='A placeholder image' />
                <h2 className="text-bone-text">Piece #{index}</h2>
            </div>
        </div>
    )
}

export default ArtPiece
