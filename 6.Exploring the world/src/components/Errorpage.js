import { useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1>opppsssss! page not found</h1>
            <h1>{error.status}</h1>
        </>
    )

}
export default Error;