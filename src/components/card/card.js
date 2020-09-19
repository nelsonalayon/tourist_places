import React from 'react'
import Places from '../../places.json'
import { PhotoContainer } from './styles'


export const Card = () => {
    console.log(Places.placesPhotos[3])
    return (       

    <div>
        <PhotoContainer>
            <h1>hola mundo</h1>
            <img src = {Places.placesPhotos[2].image} alt ="foto" width = "100%"/>
        </PhotoContainer>        
        
    </div>
    )
}