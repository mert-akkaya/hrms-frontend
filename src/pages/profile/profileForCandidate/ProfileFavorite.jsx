import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import FavoriteService from '../../../services/favoriteService';

export default function ProfileFavorite() {
   
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        let favoriteService = new FavoriteService();
        favoriteService.getAllByCandidateId(1).then((result)=>{
            setFavorites(result.data.data);
        })
    },[])
    return (
        <div>
            {favorites.map((favorite)=>(
                <Card fluid>
                    <Card.Content>{favorite.jobAdvertisement.jobTitle.title}</Card.Content>
                </Card>
            ))}
            
        </div>
    )
}
