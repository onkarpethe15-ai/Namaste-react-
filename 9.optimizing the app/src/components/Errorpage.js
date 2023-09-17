import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError()
    return (
        <>
            <h1>OOpss! something went wrong</h1>

        </>

    )
}
export default Error