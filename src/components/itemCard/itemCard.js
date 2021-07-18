import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import './itemCard.scss';

const cutTitle = (title) => {
  if (title.length < 25) {
    return title;
  } else {
    return title.slice(0, 25).concat('...');
  }
}

const ItemCard = ({ name, author, stargazers, watchers }) => {
  const title = cutTitle(name);
  return (
    <Card className='item-card'>
      <CardBody>
        <CardTitle className='item-title' tag='h5'>{title}</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted item-subtitle'>{author}</CardSubtitle>
        <CardText className='item-text' >Звезд: {stargazers}, просмотров: {watchers}</CardText>
        <Button
          onClick={() => window.location = `https://github.com/${author}/${name}`}
          className='item-btn'
        >
          Перейти в репозиторий
        </Button>
      </CardBody>
    </Card>
  )
};

export default ItemCard;