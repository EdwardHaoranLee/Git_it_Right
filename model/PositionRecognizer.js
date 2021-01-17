import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import {Camera} from 'expo-camera';
import {cameraWithTensors} from '@tensorflow/tfjs-react-native';
import * as posenet from '@tensorflow-models/posenet';
import {StyleSheet} from 'react-native';
import Skeleton from './Skeleton';
import similar from 'compute-cosine-similarity';

let TensorCamera;
let model;

export default class Posenet extends Component {
    state = {
        loaded: false,
        permission: false,
        type: Camera.Constants.Type.back,
        pose: null,
        accurate: false
    }

    accurateDataNode = {
        "keypoints": [
            {
                "part": "nose",
                "position": {
                    "x": 71.85204888132296,
                    "y": 26.57723445595855,
                },
                "score": 0.88623046875,
            },
            {
                "part": "leftEye",
                "position": {
                    "x": 74.4310858463035,
                    "y": 23.52695919689119,
                },
                "score": 0.9130859375,
            },
            {
                "part": "rightEye",
                "position": {
                    "x": 69.60767266536965,
                    "y": 24.545255829015545,
                },
                "score": 0.47119140625,
            },
            {
                "part": "leftEar",
                "position": {
                    "x": 81.48659411478599,
                    "y": 23.417746113989637,
                },
                "score": 0.95458984375,
            },
            {
                "part": "rightEar",
                "position": {
                    "x": 67.69181663424125,
                    "y": 27.140220207253886,
                },
                "score": 0.060089111328125,
            },
            {
                "part": "leftShoulder",
                "position": {
                    "x": 95.49629134241245,
                    "y": 32.3639896373057,
                },
                "score": 0.9873046875,
            },
            {
                "part": "rightShoulder",
                "position": {
                    "x": 69.5370561770428,
                    "y": 36.41871761658031,
                },
                "score": 0.99072265625,
            },
            {
                "part": "leftElbow",
                "position": {
                    "x": 104.05316755836574,
                    "y": 45.34650259067357,
                },
                "score": 0.9931640625,
            },
            {
                "part": "rightElbow",
                "position": {
                    "x": 58.284472276264594,
                    "y": 46.76781088082902,
                },
                "score": 0.9931640625,
            },
            {
                "part": "leftWrist",
                "position": {
                    "x": 84.8485530155642,
                    "y": 62.38374352331606,
                },
                "score": 0.9736328125,
            },
            {
                "part": "rightWrist",
                "position": {
                    "x": 50.0127485104572,
                    "y": 62.93134715025907,
                },
                "score": 0.99365234375,
            },
            {
                "part": "leftHip",
                "position": {
                    "x": 109.10378161478599,
                    "y": 48.98283678756477,
                },
                "score": 0.9443359375,
            },
            {
                "part": "rightHip",
                "position": {
                    "x": 91.54176799610894,
                    "y": 54.711139896373055,
                },
                "score": 0.916015625,
            },
            {
                "part": "leftKnee",
                "position": {
                    "x": 100.9202325130715,
                    "y": 65.38018134715026,
                },
                "score": 0.998046875,
            },
            {
                "part": "rightKnee",
                "position": {
                    "x": 72.38013740272373,
                    "y": 63.362046632124354,
                },
                "score": 0.97265625,
            },
            {
                "part": "leftAnkle",
                "position": {
                    "x": 114.05921692607004,
                    "y": 87.02590673575129,
                },
                "score": 0.984375,
            },
            {
                "part": "rightAnkle",
                "position": {
                    "x": 74.32976653696498,
                    "y": 80.33775906735751,
                },
                "score": 0.9873046875,
            },
        ],
        "score": 0.8835036333869485,
    }

    convert(pose){
        let vec = []
        for (let i = 0; i < pose.keypoints.length; i++) {
            vec.push(pose.keypoints[i].position.x, pose.keypoints[i].position.y)
        }
        return vec
    }

    normalize(vec) {
        let sum = 0
        for(let i = 0; i < vec.length; i++){
            sum += vec[i]*vec[i];
        }
        const norm = Math.sqrt(sum)

        for(let i = 0; i < vec.length; i++){
            vec[i] = vec[i]/norm;
        }
        return vec;
    }

    cosineDistanceMatching(poseVector1, poseVector2) {
        let cosineSimilarity = similar(poseVector1, poseVector2);
        let EuclideanDistance = 2 * (1 - cosineSimilarity);
        return Math.sqrt(EuclideanDistance);
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
            inputResolution: {width: 257, height: 200},
            quantBytes: 2
        });
        this.setState({loaded: true});
    }

    async componentWillUnmount() {
        console.log("unmounting");
        this.mounted = false;
    }

    handleCameraStream(images) {
        console.log(images)

        const loop = async () => {
            const nextImageTensor = images.next().value;

            if (this.mounted) {
                //Apply posenet to nextImageTensor
                let cameraFlip;
                cameraFlip = Platform.OS !== 'ios';
                let pose = await model.estimateSinglePose(nextImageTensor, {flipHorizontal: cameraFlip});
                const norVec = this.normalize(this.convert(pose))
                const stdNorVec = this.normalize(this.convert(this.accurateDataNode))
                const similarity = this.cosineDistanceMatching(norVec, stdNorVec)
                const accurate = similarity <= 0.22
                console.log(accurate)
                this.setState({accurate: accurate, pose: pose})
                // console.log(similarity)
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
        height: 0,   // do not display camera view
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 0
    },
    canvas: {
        position: 'absolute',
        zIndex: 10,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    canvas2: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    canvas3: {
        position: 'absolute',
        zIndex: 10,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "lightblue"
    },
});
