const numberOfCandidates = parseInt(prompt('Write the number of candidates'));
const candidates = [];
for (let i=0; i < numberOfCandidates; i++){
    let name= prompt(`Name for candidate ${i+1} is: `);
    candidates.push({name: name, votes: 0});
}
const numberOfVoter = parseInt(prompt('Enter the number of voters'));
for ( let i=0; i<=numberOfVoter; i++){
    const vote = prompt(`Voter number ${i+1}, enter the name of candidate you are voting for: `);
    if (vote) {
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());

        if (candidate) {
            candidate.votes++;
        } else {
            alert(`Invalid vote`);
        }
    } else {
        alert(`Voter ${i + 1} decided not to vote.`);
    }
}

candidates.sort((a, b) => b.votes - a.votes);


const results = document.createElement('p');
const winner = candidates[0];
results.textContent = `The winner is ${winner.name} with ${winner.votes} votes.\nResults:\n` +
                      candidates.map(candidate => `${candidate.name}: has ${candidate.votes} votes`).join('\n');


document.body.appendChild(results);
