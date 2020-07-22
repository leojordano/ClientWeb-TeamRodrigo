export const SET_USER_LOGED = 'SET_USER_LOGED'
export const setUserLoged = data => {
    return {
        type: SET_USER_LOGED,
        data
    }
}

export const RETURN_ALL = 'RETURN_ALL'
export const returnAll = () => {
    return {
        type: RETURN_ALL
    }
}

export const GET_TOKEN = 'GET_TOKEN'
export const getToken = () => {
    return {
        type: GET_TOKEN
    }
}