import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { purple900, deepPurple900, blue300 }  from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class GifImage extends Component {
  render() {
    return (
      <Card className="App-header">
        <CardMedia overlay={<CardTitle title="0.gif" subtitle="gif" />} >
          <img src="img/gif/0.gif" className="App-gif" alt="gif" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
                backgroundColor={purple900}
                style={styles.chip}
            >
            <Avatar size={32} color={blue300} backgroundColor={deepPurple900}>
                FB
            </Avatar>
                Facebook
            </Chip>
            <Chip
                backgroundColor={purple900}
                style={styles.chip}
            >
            <Avatar size={32} color={blue300} backgroundColor={deepPurple900}>
                TW
            </Avatar>
                Twitter
            </Chip>
         </div>
        </CardText>
        <CardActions>
        
        </CardActions>
      </Card>
    );
  }
}
/*import './App.css';
.App-gif {
  height: 80px;
}*/
