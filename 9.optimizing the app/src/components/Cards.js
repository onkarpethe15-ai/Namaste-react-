const Cards = (props) => {
    const { resdata } = props
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resdata.info

    return (
        <div className="card-container">
            <img className="card-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
            <h4>{name}</h4>
            <h4>{avgRating}</h4>
            <p>{cuisines}</p>
        </div>

    )
}
export default Cards