function input(w2, h2, w1, h1) {
   let [s1,s2,s3]=[(h1*w1),(h2*w2),(Math.min(h1,h2)*Math.min(w1,w2))]
    console.log(s1+s2-s3);
}
