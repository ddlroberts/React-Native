import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Infomation" wrapperStyle={{ margin: 20 }}>
          <Text style={{ marginBottom: 10 }}>
            1 Nucamp Way{"\n"} Seattle, WA 98001{"\n"}
            USA
          </Text>
          <Text>Phone: 1.206-55-1234 Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
