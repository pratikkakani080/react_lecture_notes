// localstorage
export const localHandler = (type, key, value) => {
    switch (type) {
        case 'GET':
            return localStorage.getItem(key)
        case 'SET':
            localStorage.setItem(key, value)
            break;
        case 'CLEAR':
            localStorage.clear()
            break;

        default:
            break;
    }
}

// sessionstorage
export const sessionHandler = (type, key, value) => {
    switch (type) {
        case 'GET':
            sessionStorage.getItem(key)
            break;
        case 'SET':
            sessionStorage.setItem(key, value)
            break;
        case 'CLEAR':
            sessionStorage.clear()
            break;

        default:
            break;
    }
}

