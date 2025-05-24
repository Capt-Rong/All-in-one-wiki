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

   ```bash
   # Task: Initialize a new Git repository and make your first commit
   git init
   echo "# My Project" > README.md
   git add README.md
   git commit -m "Initial commit"
   ```

2. **Branch Management**

   ```bash
   # Task: Create and switch between branches
   git checkout -b feature/login
   # Make changes
   git checkout main
   git merge feature/login
   ```

3. **Remote Operations**
   ```bash
   # Task: Clone a repository and push changes
   git clone https://github.com/user/repo.git
   # Make changes
   git push origin main
   ```

### Intermediate Level

4. **Conflict Resolution**

   ```bash
   # Task: Resolve merge conflicts
   git checkout feature/new-feature
   # Make changes to same file as main
   git checkout main
   git merge feature/new-feature
   # Resolve conflicts
   git add .
   git commit -m "Resolve merge conflicts"
   ```

5. **Stash Usage**

   ```bash
   # Task: Save and apply changes temporarily
   git stash
   git checkout hotfix
   # Fix issue
   git checkout feature
   git stash pop
   ```

6. **Rebase Practice**
   ```bash
   # Task: Rebase feature branch onto main
   git checkout feature
   git rebase main
   # Resolve conflicts
   git add .
   git rebase --continue
   ```

### Advanced Level

7. **Interactive Rebase**

   ```bash
   # Task: Clean up commit history
   git rebase -i HEAD~3
   # Squash commits
   # Edit commit messages
   ```

8. **Cherry-pick**

   ```bash
   # Task: Apply specific commit to different branch
   git checkout main
   git cherry-pick <commit-hash>
   ```

9. **Submodule Management**

   ```bash
   # Task: Add and update submodule
   git submodule add <repository-url>
   git submodule update --init --recursive
   ```

10. **Git Hooks**
    ```bash
    # Task: Set up pre-commit hook
    # Create .git/hooks/pre-commit
    # Add validation script
    chmod +x .git/hooks/pre-commit
    ```

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
