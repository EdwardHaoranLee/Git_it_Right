import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import {Camera} from 'expo-camera';
import {cameraWithTensors} from '@tensorflow/tfjs-react-native';
import * as posenet from '@tensorflow-models/posenet';
import {StyleSheet} from 'react-native';
import Skeleton from './Skeleton';

let TensorCamera;
let model;

export default class Posenet extends Component {
    state = {
        loaded: false,
        permission: false,
        type: Camera.Constants.Type.front,
        pose: null
    }

    async componentDidMount() {
        //Set up functions
        this.mounted = true;
        this.handleCameraStream = this.handleCameraStream.bind(this);
        //Ask for camera permission
        const permission = await Camera.requestPermissionsAsync();
        this.setState({permission: (permission.status === 'granted')});
        //Load TensorFlow and PoseNet
        await tf.ready();
        TensorCamera = cameraWithTensors(Camera);
        model = await posenet.load({
            architecture: 'ResNet50',
            outputStride: 32,
            inputResolution: { width: 257, height: 200 },
            quantBytes: 2
        });
        this.setState({loaded: true});
    }

    async componentWillUnmount() {
        console.log("unmounting");
        this.mounted = false;
    }

    handleCameraStream(images) {
        const loop = async () => {
            const nextImageTensor = images.next().value;
            if (this.mounted) {
                //Apply posenet to nextImageTensor
                let cameraFlip;
                cameraFlip = Platform.OS !== 'ios';
                let pose = await model.estimateSinglePose(nextImageTensor, {flipHorizontal: cameraFlip});
                // console.log(pose.score)
                this.setState({pose: pose});
                requestAnimationFrame(loop); //.bind(this);
            }
        }
        loop();
    }

    render() {
        let textureDims;
        if (Platform.OS === 'ios') {
            textureDims = {height: 2778, width: 1284};
        } else {
            textureDims = {height: 1200, width: 1600};
        }
        if (!this.state.permission) {
            return (
                <View style={styles.text}>
                    <Text>Camera permission denied...</Text>
                </View>
            );
        } else if (!this.state.loaded) {
            return (
                <View style={styles.text}>
                    <Text>Loading...</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TensorCamera
                        style={styles.camera}
                        type={this.state.type}
                        cameraTextureHeight={textureDims.height}
                        cameraTextureWidth={textureDims.width}
                        resizeHeight={152}
                        resizeWidth={152}
                        resizeDepth={3}
                        onReady={this.handleCameraStream}
                        autorender={false}
                    />
                    <View style={styles.canvas3}>

                    </View>
                    <Skeleton pose={this.state.pose}/>
                </View>
            );
        }
    }
};

const styles = StyleSheet.create({
    //Camera.js
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    camera: {
        position: 'relative',
        // flex: 1,
        height:0,   // do not display camera view
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex:0
    },
    canvas: {
        position: 'absolute',
        zIndex: 10,
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    canvas2: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    canvas3: {
        position: 'absolute',
        zIndex: 10,
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor: "lightblue"
    },
});
