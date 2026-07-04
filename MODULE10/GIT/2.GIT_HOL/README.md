# Theory – Git Ignore (`.gitignore`)

## Objective

The purpose of **Git Ignore** is to prevent Git from tracking files and folders that should not be included in the repository. This helps keep the repository clean by excluding temporary files, logs, build files, cache files, and other unnecessary content.

---

# What is `.gitignore`?

A **`.gitignore`** file is a special text file that contains patterns specifying which files and directories Git should ignore.

When a file or folder matches a pattern in `.gitignore`, Git:

* Does not show it as an untracked file.
* Does not add it to commits.
* Does not push it to the remote repository.

> **Note:** `.gitignore` affects only **untracked files**. If a file has already been committed, Git will continue tracking it unless it is removed from tracking using `git rm --cached`.

---

# Why is `.gitignore` Needed?

Using `.gitignore` offers several advantages:

* Prevents unnecessary files from being committed.
* Keeps the repository clean and organized.
* Reduces repository size.
* Protects sensitive files like configuration files containing passwords or API keys.
* Avoids committing generated files that can be recreated.

---

# Common Files and Folders Ignored

Some commonly ignored files and directories include:

* Log files (`*.log`)
* Temporary files (`*.tmp`)
* Cache folders
* Build directories (`build/`, `dist/`)
* Dependency folders (`node_modules/`)
* IDE configuration files (`.vscode/`, `.idea/`)
* Operating system files (`.DS_Store`, `Thumbs.db`)

---

# Syntax of `.gitignore`

Patterns are written line by line.

### Ignore all files with a specific extension

```text
*.log
```

Ignores every file ending with `.log`.

Example:

```
error.log
server.log
debug.log
```

---

### Ignore a specific file

```text
config.txt
```

Only `config.txt` will be ignored.

---

### Ignore an entire folder

```text
logs/
```

Ignores the `logs` directory and all its contents.

---

### Ignore all folders with the same name

```text
log/
```

Any folder named `log` anywhere in the project will be ignored.

---

### Ignore files in a specific directory

```text
logs/*.txt
```

Ignores only `.txt` files inside the `logs` directory.

---

### Ignore all files inside a directory

```text
logs/*
```

Ignores every file inside the `logs` folder.

---

### Exclude a file from being ignored

Use `!` to unignore a file.

Example:

```text
*.log
!important.log
```

All `.log` files are ignored except `important.log`.

---

# Wildcards Used in `.gitignore`

| Pattern | Meaning                                      |
| ------- | -------------------------------------------- |
| `*`     | Matches zero or more characters              |
| `?`     | Matches exactly one character                |
| `[]`    | Matches one character from the specified set |
| `!`     | Negates an ignore rule                       |
| `/`     | Specifies a directory                        |

---

# How Git Processes `.gitignore`

When Git checks the working directory:

1. It reads the `.gitignore` file.
2. It compares every untracked file with the patterns.
3. Matching files are ignored.
4. Remaining files appear in `git status`.

---

# Git Ignore Workflow

```
Create Files
      │
      ▼
Update .gitignore
      │
      ▼
Run git status
      │
      ▼
Ignored files disappear
from Untracked Files
      │
      ▼
Commit remaining files
```

---

# Git Commands Used with `.gitignore`

### Check repository status

```bash
git status
```

Displays tracked, modified, staged, and untracked files.

---

### Stage files

```bash
git add .
```

Stages all files except those ignored by `.gitignore`.

---

### Commit changes

```bash
git commit -m "Updated gitignore"
```

Commits only tracked and staged files.

---

### Remove an already tracked file

If a file was committed before adding it to `.gitignore`:

```bash
git rm --cached filename
```

Then commit the changes.

---

# Example `.gitignore`

```text
# Ignore log files
*.log

# Ignore log directory
log/

# Ignore build folder
build/

# Ignore temporary files
*.tmp

# Ignore IDE files
.vscode/
.idea/
```

---

# Example Scenario (Lab)

Suppose the working directory contains:

```
GitLabProject/
│
├── README.md
├── Main.java
├── error.log
├── server.log
├── log/
│   ├── app.log
│   └── test.txt
└── .gitignore
```

Contents of `.gitignore`:

```text
*.log
log/
```

When the following command is executed:

```bash
git status
```

Git displays only:

```
README.md
Main.java
.gitignore
```

The `.log` files and the `log` directory are ignored.

---

# Advantages of Using `.gitignore`

* Keeps repositories clean.
* Prevents accidental commits of unnecessary files.
* Saves storage space.
* Improves collaboration by excluding machine-specific files.
* Protects sensitive information.
* Makes repositories easier to maintain.

---

# Limitations of `.gitignore`

* Does not remove files that are already tracked.
* Only affects untracked files.
* Incorrect patterns may unintentionally ignore required files.

---

# Best Practices

* Create a `.gitignore` file at the beginning of the project.
* Ignore generated files instead of source code.
* Never commit passwords, tokens, or API keys.
* Keep `.gitignore` updated as the project evolves.
* Verify ignored files using `git status` before committing.

---

# Summary

* **`.gitignore`** tells Git which files and folders should not be tracked.
* It helps maintain a clean and efficient repository.
* Patterns such as `*.log` ignore all log files, while `log/` ignores an entire directory.
* Ignored files do not appear in `git status` and are not included in commits.
* If a file is already tracked, it must first be removed from Git tracking using `git rm --cached` before `.gitignore` can ignore it.
