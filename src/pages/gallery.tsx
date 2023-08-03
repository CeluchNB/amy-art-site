import ArtPiece from "@/app/components/ArtPiece"

export default function Gallery() {
    return (
        <>
            <h1 className="text-6xl font-heading text-bone-text">GALLERY</h1>
            <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => <ArtPiece key={i} index={i} />)}
            </div>
        </>
    )
}
