interface Git {
  repository: string;
  branches: Branch[];
}

interface Commit {
  id: number;
  parentId: number;
  message: string;
}

interface Branch {
  name: string;
  commits: Commit[];
}

class Git {
  private lastCommitId: number = -1;
  head: Branch;
  repository: string;
  branches: Branch[] = [];
  
  constructor(repository: string) {
    const main: Branch = new Branch('main', null);
    // init branch
    this.branches.push(main);
    // set current head
    this.head = main;
    // set remote url
    this.repository = repository;
    
    console.log(this.head);
  } 

  commit(message: string) {
    const parentId: number = this.head.commits[this.head.commits.length - 1]?.id??null;
    const commit: Commit = new Commit(++this.lastCommitId, parentId, message);

    this.head.commits.push(commit);
    console.log(`create commit: (${commit.id}) ${message}`);
  }

  checkout(branch: Branch) {
    console.log('checkout to: ' + branch.name);
    this.branches.push(branch);
    
    for(let i = 0; this.branches.length; i++) {
      if (this.branches[i].name == branch.name) {
        this.head = branch;
        break;
      }
    }
  }

  log() {
    console.log(this.head.commits.reverse());
  }
}

class Commit {
  id: number;
  parentId: number;
  message: string;

  constructor(id: number, parentId: number, message: string) {
    this.id = id;
    this.parentId = parentId;
    this.message = message;
  }
}

class Branch {
  name: string;
  commits: Commit[] = [];

  constructor(name: string, commits: null|Commit[]) {
    this.name = name;
    this.commits = commits?.reverse()??[];
  }
}

const git: Git = new Git("git@example.com");
git.commit("My first commit!");
git.commit("My second commit!");
git.commit("My third commit!");
git.log();

// create and checkout from main branch
const develop: Branch = new Branch('develop', git.head.commits);
git.checkout(develop);
git.commit("My commit in develop!");
git.log();