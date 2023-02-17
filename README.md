# Build your own Git

A simple implementation of Git.

This part implements basics of the following concepts:
1. Repository.
2. Commit.
3. Commit chaining.
4. Branch.

Run:
```
npm run build && npm run test
```

Output:
```bash
Branch { commits: [], name: 'main' }
Create commit: (0) My first commit!
Create commit: (1) My second commit!
Create commit: (2) My third commit!
[
  Commit { id: 2, parentId: 1, message: 'My third commit!' },
  Commit { id: 1, parentId: 0, message: 'My second commit!' },
  Commit { id: 0, parentId: null, message: 'My first commit!' }
]
Checkout to: develop
Create commit: (3) My commit in develop!
[
  Commit { id: 3, parentId: 2, message: 'My commit in develop!' },
  Commit { id: 2, parentId: 1, message: 'My third commit!' },
  Commit { id: 1, parentId: 0, message: 'My second commit!' },
  Commit { id: 0, parentId: null, message: 'My first commit!' }
]
```