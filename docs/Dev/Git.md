---
sidebar_position: 1
---

# Git - Complete Guide

## Table of Contents

- [Introduction](#introduction)
- [Basic Git Commands](#basic-git-commands)
  - [Repository Setup](#repository-setup)
  - [Basic Operations](#basic-operations)
  - [Branching and Merging](#branching-and-merging)
  - [Remote Operations](#remote-operations)
  - [Advanced Operations](#advanced-operations)
- [Common Git Workflows](#common-git-workflows)
  - [Feature Branch Workflow](#feature-branch-workflow)
  - [Gitflow Workflow](#gitflow-workflow)
  - [Trunk-Based Development](#trunk-based-development)
- [Best Practices](#best-practices)
- [Practice Questions](#practice-questions)
- [Resources](#resources)

## Introduction

Git is a distributed version control system that helps track changes in source code during software development. It's designed for coordinating work among programmers, but it can be used to track changes in any set of files. This guide covers essential Git commands, common workflows, and best practices for effective version control.

## Basic Git Commands

### Repository Setup

```bash
# Initialize a new Git repository
git init

# Clone an existing repository
git clone <repository-url>

# Configure Git user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Basic Operations

| Command      | 🧠 What it does                                              | 🕐 When to use it                                                       |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `git add`    | Stages changes (prepares files to be committed)              | After editing or creating files, before you commit                      |
| `git commit` | Saves a snapshot of the staged changes locally               | When your work is complete enough to be recorded                        |
| `git push`   | Uploads your commits to the remote repository (e.g., GitHub) | After you commit and want to share your changes with the team or backup |

```bash
# Check repository status
git status

# Add files to staging area
git add <file>          # Add specific file
git add .               # Add all files
git add *.js            # Add all JavaScript files

# Commit changes
git commit -m "Commit message"
git commit -am "Commit message"  # Add and commit in one command

# View commit history
git log
git log --oneline      # Compact view
git log --graph        # Show branch structure
```

### Branching and Merging

```bash
# Branch operations
git branch                    # List branches
git branch <branch-name>      # Create new branch
git checkout <branch-name>    # Switch to branch
git checkout -b <branch-name> # Create and switch to new branch

# Merge operations
git merge <branch-name>       # Merge branch into current branch
git merge --abort             # Abort merge in case of conflicts

# Stash operations
git stash                     # Save changes temporarily
git stash list               # List stashed changes
git stash pop                # Apply and remove most recent stash
```

### Remote Operations

```bash
# Remote repository operations
git remote add origin <url>   # Add remote repository
git remote -v                 # List remote repositories
git fetch origin              # Download objects and refs
git pull origin <branch>      # Fetch and merge remote changes
git push origin <branch>      # Push changes to remote

# Remote branch operations
git branch -r                 # List remote branches
git checkout -b <branch> origin/<branch>  # Create local branch from remote
```

### Advanced Operations

```bash
# Reset operations
git reset HEAD~1             # Undo last commit, keep changes
git reset --hard HEAD~1      # Undo last commit, discard changes

# Rebase operations
git rebase <branch>          # Rebase current branch onto another
git rebase --abort           # Abort rebase operation

# Cherry-pick
git cherry-pick <commit-hash> # Apply specific commit to current branch

# Interactive rebase
git rebase -i HEAD~3         # Interactive rebase of last 3 commits
```

### Undoing Changes and Restoring

```bash
# Undo last commit but keep changes staged
git reset --soft HEAD~1

# Undo last commit and unstage changes
git reset HEAD~1

# Undo last commit and discard changes
git reset --hard HEAD~1

# Undo multiple commits
git reset --hard HEAD~3      # Undo last 3 commits

# Restore specific file to last commit
git restore <file>           # New way (Git 2.23+)
git checkout -- <file>       # Old way

# Restore specific file to specific commit
git restore --source=<commit-hash> <file>

# Discard all local changes
git restore .                # New way (Git 2.23+)
git checkout -- .            # Old way

# Undo a merge commit
git revert -m 1 <merge-commit-hash>

# Undo a specific commit but keep history
git revert <commit-hash>
```

### Deleting and Cleaning

```bash
# Delete untracked files
git clean -f                 # Delete files
git clean -fd               # Delete files and directories
git clean -n                # Dry run (show what would be deleted)

# Delete a branch
git branch -d <branch>      # Safe delete (only if merged)
git branch -D <branch>      # Force delete

# Delete a remote branch
git push origin --delete <branch>

# Remove a file from Git but keep it locally
git rm --cached <file>

# Remove a file from Git and delete it locally
git rm <file>
```

### Fixing Pushed Commits

```bash
# Undo last pushed commit but keep changes
git reset HEAD~1
git push -f origin <branch>  # Force push (use with caution!)

# Undo last pushed commit and discard changes
git reset --hard HEAD~1
git push -f origin <branch>  # Force push (use with caution!)

# Revert a pushed commit (safer than reset)
git revert <commit-hash>
git push origin <branch>     # No force push needed

# Amend last commit message
git commit --amend
git push -f origin <branch>  # Force push needed

# Add changes to last commit
git add <file>
git commit --amend --no-edit
git push -f origin <branch>  # Force push needed
```

⚠️ **Important Notes:**

1. `git reset --hard` and `git clean` are destructive commands - they permanently delete changes
2. Force pushing (`git push -f`) can cause problems for other team members
3. Always communicate with your team before force pushing
4. Consider using `git revert` instead of `git reset` for pushed commits
5. Make sure you have a backup or the changes are committed before using destructive commands

## Common Git Workflows

### Feature Branch Workflow

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/new-feature
   ```

2. **Develop Feature**

   ```bash
   git add .
   git commit -m "Implement new feature"
   ```

3. **Update with Main Branch**

   ```bash
   git checkout main
   git pull origin main
   git checkout feature/new-feature
   git rebase main
   ```

4. **Merge Feature**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   ```

### Gitflow Workflow

1. **Main Branches**

   - `main`: Production-ready code
   - `develop`: Integration branch for features

2. **Supporting Branches**

   - `feature/*`: New features
   - `release/*`: Release preparation
   - `hotfix/*`: Production fixes

   | Type     | Purpose                  | Example                        |
   | -------- | ------------------------ | ------------------------------ |
   | feature/ | New feature              | feature/signup-form            |
   | bugfix/  | Bug fix                  | bugfix/navbar-overlap          |
   | hotfix/  | Emergency production fix | hotfix/critical-security-patch |
   | release/ | Pre-release branch       | release/v1.2.0                 |
   | chore/   | Minor changes            | chore/upgrade-deps             |
   | test/    | Experimentation          | test/new-auth-flow             |

3. **Workflow Steps**

   ```bash
   # Start new feature
   git checkout develop
   git checkout -b feature/new-feature

   # Complete feature
   git checkout develop
   git merge feature/new-feature

   # Start release
   git checkout -b release/1.0.0

   # Finish release
   git checkout main
   git merge release/1.0.0
   git tag -a v1.0.0 -m "Version 1.0.0"
   ```

### Trunk-Based Development

1. **Short-lived Feature Branches**

   ```bash
   git checkout -b feature/quick-change
   # Make changes
   git commit -m "Quick change"
   git push origin feature/quick-change
   # Create pull request
   ```

2. **Continuous Integration**
   - Small, frequent commits
   - Regular integration with main branch
   - Automated testing

## Best Practices

1. **Commit Messages**

   - Use present tense
   - Be specific and descriptive
   - Reference issue numbers when applicable

2. **Branching Strategy**

   - Keep branches short-lived
   - Use meaningful branch names
   - Delete merged branches

3. **Code Review**

   - Review before merging
   - Use pull requests
   - Require approvals

4. **Security**
   - Never commit sensitive data
   - Use .gitignore effectively
   - Review access permissions

## Practice Questions

### Beginner Level

1. **Basic Repository Setup**

   - Initialize a new Git repository
   - Create a README.md file
   - Make your first commit
   - Verify the commit was successful

   ```bash
   # Initialize new repository
   git init

   # Create README.md file and write "# My project"
   echo "# My Project" > README.md

   # Add and commit the file
   git add README.md
   git commit -m "Initial commit: Add README"

   # Verify the commit
   git log --oneline
   ```

2. **Branch Management**

   - Create a new feature branch
   - Make some changes to files
   - Switch back to main branch
   - Merge your feature branch into main
   - Verify the changes are present in main

   ```bash
   # Create and switch to new feature branch
   git checkout -b feature/new-feature

   # Make changes to files
   echo "New feature content" > feature.txt
   git add feature.txt
   git commit -m "Add new feature"

   # Switch back to main branch
   git checkout main

   # Merge feature branch into main
   git merge feature/new-feature

   # Verify changes
   # HEAD: the latest commit
   # HEAD~1 means "one commit before HEAD."
   git diff HEAD~1
   ```

3. **Remote Operations**

   - Clone an existing repository
   - Make some changes to the code
   - Push your changes to the remote repository
   - Verify your changes are visible on the remote

   ```bash
   # Clone the repository
   git clone https://github.com/username/repository.git
   cd repository
   git checkout -b feature/new-feature

   # Make changes to files
   echo "New feature implementation" > feature.txt
   git add feature.txt
   git commit -m "Add new feature implementation"

   # Push changes to remote repository
   git push origin feature/new-feature

   # Verify changes on remote
   git fetch origin
   git diff origin/main feature/new-feature
   ```

### Intermediate Level

4. **Conflict Resolution**

   - Create a feature branch
   - Make changes to a file that also exists in main
   - Switch to main and make different changes to the same file
   - Attempt to merge your feature branch
   - Resolve the merge conflict
   - Complete the merge successfully

   ```bash
   # Create and switch to feature branch
   git checkout -b feature/new-feature

   # Make changes to a file in feature branch
   echo "Feature branch changes" > example.txt
   git add example.txt
   git commit -m "Update file in feature branch"

   # Switch to main and make conflicting changes
   git checkout main
   echo "Main branch changes" > example.txt
   git add example.txt
   git commit -m "Update file in main branch"

   # Attempt to merge feature branch
   git merge feature/new-feature

   # Resolve conflicts in example.txt
   # After resolving conflicts:
   git add example.txt
   git commit -m "Resolve merge conflicts"

   # Verify merge was successful
   # View commit history with branch visualization and compact format
   git log --graph --oneline
   ```

5. **Stash Usage**

   - Make some changes to your working directory
   - Save your changes using stash
   - Switch to a different branch
   - Make some changes there
   - Return to your original branch
   - Apply your stashed changes
   - Verify all changes are present

   ```bash
   # Make changes to working directory
   echo "New feature implementation" > feature.txt
   git add feature.txt

   # Stash changes
   git stash save "WIP: New feature"

   # Switch to different branch and make changes
   git checkout fix/bug
   echo "Bug fix" > bugfix.txt
   git add bugfix.txt
   git commit -m "Fix critical bug"

   # Return to original branch and apply stashed changes
   git checkout feature/new-feature
   git stash pop

   # Verify changes
   git status
   git diff
   ```

6. **Rebase Practice**
   - Create a feature branch with multiple commits
   - Make some changes to main branch
   - Rebase your feature branch onto main
   - Resolve any conflicts during rebase
   - Verify your feature branch history is clean

### Advanced Level

7. **Interactive Rebase**

   - Create a branch with multiple commits
   - Use interactive rebase to:
     - Combine multiple commits into one
     - Edit commit messages
     - Reorder commits
   - Verify the new commit history

8. **Cherry-pick**

   - Identify a specific commit from another branch
   - Apply that commit to your current branch
   - Resolve any conflicts
   - Verify the changes are correctly applied

9. **Submodule Management**

   - Add a Git submodule to your repository
   - Make changes to the submodule
   - Update the submodule reference
   - Push changes to both main repository and submodule

10. **Git Hooks**
    - Create a pre-commit hook
    - Implement basic validation in the hook
    - Test the hook with valid and invalid commits
    - Verify the hook prevents invalid commits

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
