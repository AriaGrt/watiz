import React, { Component } from "react";
import { ScrollView, Image, Text } from "react-native";
import { styles } from "./styles";

import ImageCarousel from '../ImageCarousel/ImageCarousel';

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "http://placekitten.com/200/300",
        "http://placekitten.com/200/300",
        "http://placekitten.com/200/300"
      ]
    };
  }

  render() {
    return (
      <ScrollView >
        <ImageCarousel images={this.state.images} />
        <Text>Salut les gens</Text>
      </ScrollView>
    );
  }
}
