const Cards = (props) => {
    const { resdata } = props
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resdata.info

    return (
        <div  className="w-[210px] h-[340px] p-1 m-1 border bg-slate-200 rounded-md drop-shadow-md hover:bg-slate-300">
            <img className="w-[210px] h-[170px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
            <h4 className="font-bold">{name}</h4>
            <h4 className="font-medium">{avgRating}</h4>
            <p className="font-medium">{cuisines}</p>
        </div>

    )
}
export default Cards