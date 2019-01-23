import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

export default class App extends Component {
  state = {
    isloaded: false
  };
  render() {
    const isloaded = this.state.isloaded;
    return (
      <View style={styles.container}>
        {isloaded ? null : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}> loading </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    fontSize: 50
  }
});
