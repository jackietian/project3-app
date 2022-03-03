import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFirstToast } from '../state/toast/toast.action'

const Toasts = () => {
    const toasts = useSelector((state) => {
        return state.toasts.toasts
    })
    return (
        <ul className="list--toasts">
            {toasts.length > 0 &&
                toasts.map((toast, index) => (
                    <li key={index}>
                        <Toast toast={toast} />
                    </li>
                ))}
        </ul>
    )
}

const Toast = ({ toast }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeFirstToast())
        }, 2000)
    }, [])

    return <p>{toast}</p>
}

export default Toasts
