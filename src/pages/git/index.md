---
path: "/git"
---

# Git Reference
Git is extremely powerful open source version control software. It is used in some capacity by most developers and organizations in the world as a means to collaborate and back up code. Certain offerings for Git hosting are Bitbucket and Github, but you can even host Git on your own servers! In this class, you will be expected to learn how to use Github in the most basic capacity.

## Install Git
The easiest way to install Git on your computer is by following the instructions available on the [official Git website](https://git-scm.com/downloads).

## Git Basics
A **repository** is a bucket of files (code or otherwise). Code within the repository is **tracked**, which means that changes to files are recorded in a way that lets us recreate them or undo them. This enables us to collaborate with others.

Code that is stored on GitHub is what's known as a **remote** repository. If you run `git init` in a folder, you can create a new Git repository that has no history. This is known as a **local** repository. When you want to sync your local repository and your remote repository, you perform a command known as **pushing**.

## Cloning Homework Repository
Cloning a Git repository creates a local copy of the remote repository.

Run `git clone https://github.com/CIS192/homework` to download all the homework skeleton files and specifications. Keep this folder up to date by calling `git pull origin master` whenever you see a post on Piazza to do so. 

## Creating Repositories
Coming soon!

## Additional Resources
Below are a list of helpful resources in case you have any Git-related questions:

1. Interactive tutorial: https://learngitbranching.js.org/
2. A Git commands cheat sheet: https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf
3. Messed something up? Check out: https://ohshitgit.com/
