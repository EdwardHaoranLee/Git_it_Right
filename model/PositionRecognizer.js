const posenet = require('@tensorflow-models/posenet');

async function getPositionData(image) {
    const net = await posenet.load({
        architecture: 'ResNet50',
        outputStride: 32,
        inputResolution: { width: 257, height: 200 },
        quantBytes: 2
    });

    const poses = await net.estimateSinglePose(image, {
        flipHorizontal: false,
        scoreThreshold: 0.6,

    });

    return poses;
}


