import jwtDecode from 'jwt-decode'

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('http://localhost:8000/auth/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify({
            email,
            password
        })
    })

    const userData = await response.json()

    if(!userData.ok) return userData.message

    dispatch({
        type : "LOGIN",
        payload : {
            userData : jwtDecode(userData.token),
            token : userData.token,
            loggedIn : true
        }
    })
}