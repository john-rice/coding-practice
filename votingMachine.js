
// example data structure:

// example data structure
// track count of votes on candidate for easy reporting
// track who voted for whom for data integrity
// {
//     candidates: {
//         ["Alice"]: 1,
//         ["Bob"]: 1
//     }
// }
// {
//     voters: {
//         ["11111"]: "Alice",
//         ["22222"]: "Bob"
//     }
// }

class VoteStore {

    constructor () {
        this.initialize();
    }

    addCandidate (candidateName) {
        let candidates = this.getCandidates();

        // udpate candidates to include candidate
        if (!candidates.hasOwnProperty(candidateName)) {
            candidates[candidateName] = 0;
        }

        this.saveCandidates(candidates);
    }

    addVote (candidateName, voter) {
        let candidates = this.getCandidates();
        let voters = this.getVoters();

        // ensure we are tracking this candidate in storage
        if (!candidates.hasOwnProperty(candidateName)) {
            candidates[candidateName] = 0;
        }
       
        // increment the vote
        candidates[candidateName] = parseInt(candidates[candidateName]) + 1;

        // store the candiate name with the voter for data integrity
        voters[voter] = candidateName;

        this.saveCandidates(candidates);
        this.saveVoters(voters);
    }

    getCandidates () {
        return this.get("candidates");
    }

    getVoters () {
        return this.get("voters");
    }

    getVoter (voter) {
        return this.getVoters().hasOwnProperty(voter);
    }

    saveCandidates (candidates) {
        this.save("candidates", candidates);
    }

    saveVoters (voters) {
        this.save("voters", voters);
    }


    initialize () {
        if (!this.getCandidates()) {
            this.saveCandidates({});
        }
        if (!this.getVoters()) {
            this.saveVoters({});
        }
    }

    resetAll () {
        this.resetKey("candidates");
        this.resetKey("voters");
    }

    resetKey (key) {
        localStorage.setItem(key, {});
    }

    /**
     * helper method to simplify access to read json from localStorage
     */
    get (key) {
        const value = localStorage.getItem(key);
        return value? JSON.parse(value): null;
    }

    /**
     * helper method to simplify access to store json from localStorage
     */
    save (key, value) {
        const jsonValue = JSON.stringify(value);
        return localStorage.setItem(key, jsonValue);
    }
}

class VotingMaching {

    constructor () {
        this.initialize();
    }

    initialize () {
        this.store = new VoteStore();
    }

    setSession (session) {
        this.session = session;
    }

    getSessionId () {
        return this.session.id;
    }

    vote (candidateName) {
        const voter = this.getSessionId();
        if (!this.hasUserVoted(voter)) {
            this.store.addVote(candidateName, voter);
        }
    }

    hasUserVoted (voter) {
        return this.store.getVoter(voter);
    }

    addCandidates (names) {
        names.forEach(name => {
            this.addCandidate(name);
        });
    }
    
    addCandidate (name) {
        this.store.addCandidate(name);
    }

    getCandidates () {
        return this.store.getCandidates();
    }

    getCandidateList () {
        return Object.keys(this.store.getCandidates());
    }

    getVoters () {
        return this.store.getVoters();
    }

    reset () {
        this.store.resetAll();
    }
}

votingMachine = new VotingMaching();


// Everything below is for example only to show how code can be implemented in the app


// add candidates if they don't exist yet
votingMachine.addCandidates(["Alice", "Bob", "Joe", "Abe"]);

// example adding a new candiate
votingMachine.addCandidate("Jimmy");

console.log({candiates: votingMachine.getCandidates()});



// mock votes
// session is just a simple mock here - needs to use existing session logic
console.group("first vote");
votingMachine.setSession({id: '1111'});

votingMachine.vote("Alice");

console.log({candiatesAfterVote: votingMachine.getCandidates()});

console.log({voters: votingMachine.getVoters()});
console.groupEnd();


// session is just a simple mock here - needs to use existing session logic
console.group("second vote");

votingMachine.setSession({id: '22222'});

votingMachine.vote("Alice");

console.log({candiatesAfterVote: votingMachine.getCandidates()});

console.log({voters: votingMachine.getVoters()});
console.groupEnd();

// for example of getting a canidate names to use in the chart
console.log({labels: votingMachine.getCandidateList()});
