export const FETCH_USERS = 'fetch_users';
export const STORE_USER = 'store_user';
export const LOADING = 'loading';

export function fetchUsers(axiosUsers) {

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