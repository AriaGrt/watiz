import React, { Component } from "react";
import { View, Image, Dimensions, PanResponder } from "react-native";

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    let { width } = Dimensions.get("window");
    this.state = {
      width: width
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        Math.abs(gestureState.dx) > 7;
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: () => false
    });
  }

  getStyle() {
    return {
      slider: {
        flexDirection: "row",
        height: 300,
        width: this.props.images.length * this.state.width
      },
      image: {
        width: this.state.width,
        height: 300
      }
    };
  }

  render() {
    const style = this.getStyle();
    return (
      <View {...this.panResponder.panHandlers} style={style.slider}>
        {this.props.images.map((image, key) => {
          return (
            <Image key={key} source={{ uri: image }} style={style.image} />
          );
        })}
      </View>
    );
  }
}
