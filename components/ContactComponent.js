import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card title="Contact Infomation" wrapperStyle={{ margin: 20 }}>
          <Text style={{ marginBottom: 10 }}>
            1 Nucamp Way{"\n"} Seattle, WA 98001{"\n"}
            USA
          </Text>
          <Text>Phone: 1.206-55-1234 Email: campsites@nucamp.co</Text>
        </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
