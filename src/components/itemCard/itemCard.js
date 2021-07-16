import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

const ItemCard = ({ name, author, stargazers, watchers, goToProject }) => {
  return(
    <Card>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
        <CardText>Звезд: {stargazers}, просмотров: {watchers}</CardText>
        <Button onClick={() => goToProject(name, author)}>Перейти в репозиторий</Button>
      </CardBody>
    </Card>
  )
}

export default ItemCard;