# Git cheat sheet

| Action                      | Command                                     |
| --------------------------- | ------------------------------------------- |
|  Remove all untracked files |  `git clean -f`                             |
| Reuse commit message        | `git commit -C <hash>`                      |
| Checkout remote branch      | `git checkout --track origin/<branchname> ` |

To add in slices:

1. `git add -p`
2. It may be that the hunk is splittable using `s`
3. You can also use edit to add the specific rows that will be added

Split a commit inside interactive rebase:
Given you have a commit history where you want to split a nth commit from head where n isn't 1:

1. `git rebase -i HEAD~n`
2. Edit that commit
3. `git reset HEAD~`
4. Add what you want to add
5. `git commit -m first split` and then, when added the rest, `git commit -C <hash>` to add reuse a commit message

## Tags

1. update e.g. version numbers in the code, add and commit with something like "become v0.0.1"
2. git tag -a v0.0.1
3. git push origin v0.0.1 --dry-run (and then without dry run)
