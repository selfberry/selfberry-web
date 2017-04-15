import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';

export default class GifImage extends Component {
  render() {
    return (
      <Card className="App-header">
          <CardMedia overlay={<CardTitle title="0.gif" subtitle="gif" />} >
          <img src="img/gif/0.gif" className="App-gif" alt="gif" />
          </CardMedia>
        </Card>
    );
  }
}
/*import './App.css';
.App-gif {
  height: 80px;
}*/
