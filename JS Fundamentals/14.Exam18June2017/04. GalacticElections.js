function solve(arr) {

    let obj= arr.sort(function(a,b) {return (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0);} );
   let sum=0;
    for(let name of obj){
        sum+=name.votes;
    }
    let candidate = new Map();

    for(let e of obj){
        if(!candidate.has(e.candidate)){
            candidate.set(e.candidate,new Map())
        }
        if(!candidate.get(e.candidate).has(e.system)){
            candidate.get(e.candidate).set(e.system,0);
        }
        let oldVotes =  candidate.get(e.candidate).get(e.system);
        candidate.get(e.candidate).set(e.system,oldVotes+e.votes);
    }
    candidate =candidate.sort(function(a,b) {return (a.values() < b.values()) ? 1 : ((b < a.values()) ? -1 : 0);} );
    console.log(candidate);


}
solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
{ system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
{ system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
{ system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
{ system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
{ system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);