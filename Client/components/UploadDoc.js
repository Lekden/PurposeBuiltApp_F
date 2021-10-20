// Import React
import React, { useState } from "react";

// Import Document Picker
import * as DocumentPicker from "expo-document-picker";
//import { DocumentPicker } from "expo";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { Colors } from "./style";
const { tertiary, dodgerBlue } = Colors;

const UploadDoc = () => {
  const [singleFile, setSingleFile] = useState("");

  const pickDocument = async () => {
    let res = await DocumentPicker.getDocumentAsync({});

    //Printing the log realted to the file
    console.log("res : " + JSON.stringify(res));
    console.log("URI : " + res.uri);
    console.log("Type : " + res.type);
    console.log("File Name : " + res.name);
    console.log("File Size : " + res.size);
    //Setting the state to show single file attributes
    setSingleFile(res);
  };

  return (
    <View style={styles.ViewUpload}>
      <TouchableOpacity onPress={pickDocument} style={styles.UploadButton}>
        {/*Single file selection button*/}
        <Text style={styles.ButtonText}>Click to upload document</Text>
        <Image
          source={require("./../assets/img/pin.png")}
          style={styles.UploadImage}
        />
      </TouchableOpacity>
      {/*Showing the data of selected Single file*/}
      <Text style={styles.ButtonText}>
        File Name: {singleFile.name ? singleFile.name : ""}
        {"\n"}
        Type: {singleFile.type ? singleFile.type : ""}
        {"\n"}
      </Text>
    </View>
  );
};

export default UploadDoc;

const styles = StyleSheet.create({
  UploadButton: {
    backgroundColor: dodgerBlue,
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    height: 38,
    paddingTop: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: 250,
  },

  ButtonText: {
    color: tertiary,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  ViewUpload: {
    flex: 1,
    alignItems: "center",
  },

  UploadImage: {
    width: 22,
    height: 23,
    marginLeft: 10,
    marginBottom: 8,
  },
});

//Can paste the code below if we want to display file size and URI below the upload button
// File Size: {singleFile.size ? singleFile.size : ""}
//{"\n"}
//URI: {singleFile.uri ? singleFile.uri : ""}
//{"\n"}
