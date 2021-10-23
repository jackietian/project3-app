import React from 'react'
export const withAuthorization = (OriginalComponent) => {
    return class extends React.Component {
        render() {
            // as I mentioned earlier, we are storing current_user's role
            // in localStorage(can be tampered easily)

            const userType = sessionStorage.getItem('type')

            // we will return null if the user is not Admin else we will return
            // back the component as it is(ofcourse you can modify it like add some extra props to it)

            return userType !== 'admin' ? (
                <h1>not authorized</h1>
            ) : (
                <OriginalComponent {...this.props} />
            )
        }
    }
}
