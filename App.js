import React, { useState } from "react";
import { Text, View, Button, ScrollView, Image } from "react-native";
import { infoButtonControl } from "./theta_control/info-button-control";
import { stateButtonControl } from "./theta_control/state-button-control";
import { listFilesButtonControl} from "./theta_control/list-files-button-control";
import {takePictureButtonControl} from "./theta_control/take-picture-button-control";
import { setVideoButtonControl } from "./theta_control/set-video-button-control";
import { setImageButtonControl } from "./theta_control/set-image-button-control";
import { lastFileUrlButtonControl } from "./theta_control/last-file-url-button-control";

import { styles } from "./styles";

export default function App() {
  // fake-theta
  // const urlEndpoint = "https://fake-theta.vercel.app/osc/";
  const urlEndpoint = "https://fake-theta-alpha.vercel.app/osc/";

  // real theta physical device in access point mode
  // const urlEndpoint = "http://192.168.1.1/osc/";

  // end camera endpoint config
  const [responseWindow, onChangeResponseWindow] = useState(
    "press button to test API"
  );

  const [thetaImageUri, onChangeThetaImageUri] = useState("https://placehold.co/400x200/orange/white.jpg");


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>RICOH THETA JavaScript Demo</Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="info"
            onPress={() => {
              infoButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="state"
            onPress={() => {
              stateButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="file"
            onPress={() => {
              listFilesButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>      
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="pic"
            onPress={() => {
              takePictureButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>           
      </View>
      {/* start of second row of buttons */}
      <View style={styles.buttonRow}>
      <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="video"
            onPress={() => {
              setVideoButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View> 
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="image"
            onPress={() => {
              setImageButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow(data);
              });
            }}
          ></Button>
        </View>         
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="url"
            onPress={() => {
              lastFileUrlButtonControl(urlEndpoint).then(function (data) {
                onChangeThetaImageUri(data);
                onChangeResponseWindow(data);
                console.log(thetaImageUri);

              });
            }}
          ></Button>
        </View>          
      </View>
      {/* end of second row of buttons */}

      <View style={styles.responseWindowContainer}>
        <Text>{responseWindow}</Text>
      </View>
      <View>
        <Image style={styles.thetaImage} source={{uri: thetaImageUri}}/>
      </View>      

    </ScrollView>
  );
}
