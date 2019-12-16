import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default function EpisodeCard({ EpisodeData }) {
    return (
        <div className="episode_card">
            <Card>
                <CardTitle>Name: {EpisodeData.name}</CardTitle>
                <CardBody>
                    <CardText>Date: {EpisodeData.air_date} </CardText>
                    <CardText>Episode Number: {EpisodeData.episode} </CardText>
                    <CardText>Characters: {EpisodeData.characters} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}