import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

export default function LocationCard({ LocationData }) {
  return (
    <div className="location_card">
      <Card>
        <CardTitle>Name: {LocationData.name}</CardTitle>
        <CardBody>
          <CardText> Type: {LocationData.type} </CardText>
          <CardText> Dimension: {LocationData.dimension} </CardText>
          <CardText>Residents: {LocationData.residents} </CardText>
        </CardBody>
      </Card>
    </div>
  )
}