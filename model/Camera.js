import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import getPositionData from '../utility/PositionRecognizer'


export default function GCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera

    const takePicture = async () => {
        if (this.camera) {
            const options = {quality: 1};
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            console.log("===")
            await getPositionData(data)
            console.log("===")
        } else {
            console.log("no")
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // console.log(camera.current.takePictureAsync())

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (



        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cam=>{this.camera = cam;}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            // setType(
                            //     type === Camera.Constants.Type.back
                            //         ? Camera.Constants.Type.front
                            //         : Camera.Constants.Type.back
                            // );
                            takePicture()
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        width: "100%",
        height: "100%",
    },
    button: {
        width: "100%",
        height: "100%",
    },
    text: {

    }
})
