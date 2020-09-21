export const SavePlace = () => (dispatch) => {
    dispatch({
        type: "bring_places",
        payload: [1,2,3]
    })
}