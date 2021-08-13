import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import FavoriteService from "../../../services/favoriteService";

export default function ProfileFavorite() {
  const [favorites, setFavorites] = useState([]);
  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService.getAllByCandidateId(1).then((result) => {
      setFavorites(result.data.data);
    });
  }, []);

  let setCurrentJobAdvertisement = (jobAdvertisement) => {
    setCurrentJob(jobAdvertisement);
  };
  let getCurrentJobClass = (jobAdvertisement) => {
    if (jobAdvertisement == currentJob) {
      return "ui link card ";
    } else {
      return "";
    }
  };
  

  return (
    <div>
      {favorites.map((favorite) => (
        <Card fluid>
          <Card.Group
            onMouseEnter={(e) => setCurrentJobAdvertisement(favorite)}
            as={NavLink}
            to={`/jobAdvertisementDetail/${favorite.jobAdvertisement.id}`}
            key={favorite.id}
          >
            <Card className={getCurrentJobClass(favorite)} fluid>
              <Card.Content>
                <Card.Header textAlign="center">
                  {favorite.jobAdvertisement.jobTitle.title}
                  <Card.Meta>
                    {favorite.jobAdvertisement.employer.companyName}
                    <p style={{ fontSize: "13px" }}>
                      ({favorite.jobAdvertisement.city.name})
                    </p>
                  </Card.Meta>
                </Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </Card>
      ))}
    </div>
  );
}
