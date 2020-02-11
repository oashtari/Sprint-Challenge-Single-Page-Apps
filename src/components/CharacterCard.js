import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default function CharacterCard({ CharacterData }) {
  return (
    <div className="character_card">
      <Card>
        <CardTitle>Name: {CharacterData.name}</CardTitle>
        <CardImg src={CharacterData.image} />
        <CardBody>
          <CardText> Species: {CharacterData.species} </CardText>
          <CardText>Identification Number: {CharacterData.id} </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
