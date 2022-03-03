const initialState = {
    toasts: [],
}

const toastsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [...state.toasts, action.data],
            }
        case 'REMOVE_FIRST_TOAST':
            const newToasts = [...state.toasts]
            newToasts.shift()
            return {
                toasts: newToasts,
            }
        default:
            return state
    }
}

export default toastsReducer
