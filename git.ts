interface Git {
  repository: string
  lastCommitId: number;
  branches: Branch[],
  head: Branch;
}

class Git {
  repository: string;
  lastCommitId: number;
  branches: Branch[];
  head: Branch;

  constructor(repository: string) {
    this.lastCommitId = -1;
    const main: Branch = new Branch('main', null);

    this.branches.push(main);
    this.head = this.branches[this.branches.length];
  } 

  commit(id: number, message: string) {
    
  }
}

interface Commit {
  id: number;
  parent: Commit;
  message: string;
}

interface Branch {
  name: string;
  commits: string[];
}

class Branch {
  name: string;
  commits: string[];

  constructor(name: string, commit: string) {
    this.name = name;
    this.commits.push(commit);
  }
}

const git = new Git("git@example.com");