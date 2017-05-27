function inchesToFoot(n) {
    let foot = n/12;
    let rest = n%12;
    console.log(`${Math.floor(foot)}'-${Math.floor(rest)}"`)
}
inchesToFoot(36);