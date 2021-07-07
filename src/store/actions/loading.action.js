// ACTIONS
export const SET_LOADING = 'SET_LOADING';

// ACTION CREATORS
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}
