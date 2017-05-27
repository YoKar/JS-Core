function trackPlaying(arr) {
    let trackName = arr[0].trim("'");
    let artistName = arr[1].trim("'");
    let duration=arr[2].trim("'");
    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`)
}
trackPlaying(['Number One', 'Nelly', '4:09']);