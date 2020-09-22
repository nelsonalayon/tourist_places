export const SavePlace = (n) => (dispatch, getState) => {

    const {placesSaved}= getState().placeReducer  
    
    placesSaved.push(n)

    const place_add = [
        ...placesSaved
    ]
   
    dispatch({
        type: "bring_places",
        payload: place_add
    })
}