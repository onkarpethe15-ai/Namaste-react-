import { useState, useEffect } from "react"
const Checkonlinestatus = () => {
    const [status, setstatus] = useState(true)
    useEffect(() => {
        window.addEventListener('offline', () => { setstatus(false) })
        window.addEventListener('online', () => { setstatus(true) })

    }, [])
    return status
}
export default Checkonlinestatus;