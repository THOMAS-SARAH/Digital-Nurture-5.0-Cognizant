# Theory – Git Branching and Merging

## Objectives

* Understand the concept of **Git Branching**.
* Learn how **Git Merging** combines changes from different branches.
* Understand **Branch Requests** and **Merge Requests** in GitLab.
* Learn how developers collaborate using branches without affecting the main project.

---

# Introduction to Branching

A **branch** in Git is an independent line of development that allows developers to work on new features, bug fixes, or experiments without modifying the main project.

By default, every Git repository contains a primary branch called **master** (older repositories) or **main** (newer repositories).

Using branches enables multiple developers to work simultaneously on different features without interfering with each other's work.

---

# Why Use Branches?

Branches are used to:

* Develop new features independently.
* Fix bugs without affecting the stable code.
* Experiment with new ideas safely.
* Allow multiple developers to work in parallel.
* Maintain different versions of a project.

---

# Benefits of Branching

* Prevents changes from affecting the main project.
* Supports team collaboration.
* Makes testing easier before merging.
* Provides isolation for development.
* Enables quick rollback if needed.

---

# Git Branch Workflow

```text
             main/master
                  │
                  │
        ---------------------
                  │
          Create Branch
                  │
                  ▼
          GitNewBranch
                  │
        Add files & Commit
                  │
                  ▼
            Test Changes
                  │
                  ▼
           Merge into Main
                  │
                  ▼
         Delete Feature Branch
```

---

# Git Branch Commands

## Create a New Branch

Creates a new branch without switching to it.

```bash
git branch GitNewBranch
```

---

## List Local Branches

Displays all local branches.

```bash
git branch
```

The current branch is indicated by an asterisk (`*`).

Example:

```text
* master
  GitNewBranch
```

---

## List Local and Remote Branches

Displays both local and remote branches.

```bash
git branch -a
```

Example:

```text
* master
  GitNewBranch
  remotes/origin/master
```

---

## Switch to Another Branch

Changes the current working branch.

```bash
git checkout GitNewBranch
```

or (newer Git versions)

```bash
git switch GitNewBranch
```

---

# Working on a Branch

Once switched to a branch, developers can:

* Create new files.
* Modify existing files.
* Delete files.
* Stage changes.
* Commit changes.

These modifications remain only in that branch until they are merged.

---

# Git Status

The `git status` command displays:

* Current branch.
* Modified files.
* Staged files.
* Untracked files.
* Repository status.

Syntax:

```bash
git status
```

---

# Introduction to Merging

**Merging** is the process of combining changes from one branch into another.

After development is completed and tested in a feature branch, it is merged into the main branch.

Git automatically combines the changes whenever possible.

---

# Types of Merge

## Fast-Forward Merge

Occurs when no new commits exist in the target branch.

```
master

A ---- B

GitNewBranch

A ---- B ---- C
```

After merge:

```
master

A ---- B ---- C
```

---

## Three-Way Merge

Occurs when both branches contain different commits.

```
        C
       /
A ---- B
       \
        D
```

Git creates a merge commit to combine both histories.

---

# Merge Conflicts

A **merge conflict** occurs when two branches modify the same part of the same file.

Git cannot automatically decide which change should be kept.

The developer must manually resolve the conflict before completing the merge.

---

# Git Diff

The `git diff` command compares differences between files, commits, or branches.

Example:

```bash
git diff master GitNewBranch
```

It displays:

* Added lines
* Deleted lines
* Modified content

---

# P4Merge Tool

**P4Merge** is a graphical merge and comparison tool developed by Perforce.

It provides a visual interface for comparing files and resolving merge conflicts.

### Features

* Side-by-side file comparison.
* Highlights added, deleted, and modified lines.
* Assists in resolving merge conflicts.
* Supports directory comparison.

Example command:

```bash
git difftool master GitNewBranch
```

---

# Git Log

Git maintains the complete history of all commits.

To display a compact graphical history:

```bash
git log --oneline --graph --decorate
```

### Purpose

* Shows commit history.
* Displays branch structure.
* Identifies merge commits.
* Indicates current branch.

Example:

```text
*   Merge branch 'GitNewBranch'
|\
| * Added sample file
|/
* Initial Commit
```

---

# Deleting a Branch

After successful merging, the feature branch is no longer required.

Delete it using:

```bash
git branch -d GitNewBranch
```

This keeps the repository clean by removing completed branches.

---

# Branch Request in GitLab

A **Branch Request** refers to creating and using a separate branch for development instead of making changes directly to the main branch.

Developers create branches for:

* New features
* Bug fixes
* Performance improvements
* Documentation updates

Working in separate branches ensures the stability of the main project.

---

# Merge Request (MR) in GitLab

A **Merge Request (MR)** is a GitLab feature used to request that changes from one branch be merged into another.

It is similar to a **Pull Request (PR)** in GitHub.

### Merge Request Workflow

1. Create a feature branch.
2. Make changes.
3. Commit and push the branch.
4. Open a Merge Request in GitLab.
5. Team members review the changes.
6. Resolve comments if any.
7. Approve the Merge Request.
8. Merge into the main branch.

---

# Advantages of Merge Requests

* Facilitates code review.
* Improves code quality.
* Prevents accidental changes.
* Supports collaboration.
* Maintains project history.

---

# Branching and Merging Workflow

```text
Initialize Repository
          │
          ▼
Create Branch
          │
          ▼
Switch Branch
          │
          ▼
Modify Files
          │
          ▼
Stage Changes
          │
          ▼
Commit Changes
          │
          ▼
Switch to Main Branch
          │
          ▼
Compare Differences
          │
          ▼
Merge Branch
          │
          ▼
View Commit History
          │
          ▼
Delete Branch
```

---

# Advantages of Branching and Merging

* Enables parallel development.
* Protects the stable version of the project.
* Simplifies feature development.
* Supports collaboration among multiple developers.
* Maintains complete version history.
* Facilitates testing before release.
* Allows easy rollback if necessary.

---

# Best Practices

* Create a separate branch for every new feature or bug fix.
* Commit changes frequently with meaningful commit messages.
* Keep branches updated with the latest changes from the main branch.
* Test changes thoroughly before merging.
* Delete branches after successful merging.
* Use Merge Requests for code review before integrating changes.

---

# Summary

* A **branch** is an independent line of development in Git.
* Branches allow developers to work safely without affecting the main project.
* **Merging** combines changes from one branch into another.
* The `git diff` command compares differences between branches.
* **P4Merge** provides a graphical interface for comparing files and resolving conflicts.
* **Merge Requests** in GitLab enable code review and controlled integration of changes into the main branch.
* After a successful merge, the feature branch can be safely deleted to keep the repository organized.
