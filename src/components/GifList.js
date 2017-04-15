import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

export default class GifList extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.filename}
      />
         
    );
  }
}
