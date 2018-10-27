export const FETCH_USERS = 'fetch_users';
export const STORE_USER = 'store_user';
export const LOADING = 'loading';
export const PAGE_MINUS = 'page_minus';
export const PAGE_PLUS = 'page_plus';

export function fetchActionUsers(axiosUsers) {

    return {
        type: FETCH_USERS,
        payload: axiosUsers
    }
}

export function loadingState(loading) {
    return {
        type: LOADING,
        payload: loading
    }
}

export function plusPage() {
    return {
        type: PAGE_PLUS
    }
}

export function minusPage() {
    return {
        type: PAGE_MINUS
    }
}