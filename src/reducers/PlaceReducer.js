import { bindActionCreators } from "redux"

import Places from '../places.json'

const INITIAL_STATE = {
    places: [Places.placesPhotos], 
    placesSaved: []
}



export default ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'bring_places':
            return { ...state, placesSaved: action.payload}
        
        case 'save_place':
            return { ...state, }
        

        default: 
            return state;
    }
}