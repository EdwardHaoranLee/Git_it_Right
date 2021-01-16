

const similar = require('compute-cosine-similarity');


function convert(pose){
  var vec = []
  for (i = 0; i < pose.keypoints.length; i++) {
  vec.push(pose.keypoints[i].position.x, pose.keypoints[i].position.y)
  }
  return vec
}

function normalize(vec) {
  var sum = 0
  for(i = 0; i < vec.length; i++){
    sum += vec[i]*vec[i];
  }
  norm = Math.sqrt(sum)

  for(i = 0; i < vec.length; i++){
    vec[i] = vec[i]/norm;
  }
  return vec;   // The function returns the product of p1 and p2
}

function cosineDistanceMatching(poseVector1, poseVector2) {
  let cosineSimilarity = similar(poseVector1, poseVector2);
  let EuclideanDistance = 2 * (1 - cosineSimilarity);
  return Math.sqrt(EuclideanDistance);
}