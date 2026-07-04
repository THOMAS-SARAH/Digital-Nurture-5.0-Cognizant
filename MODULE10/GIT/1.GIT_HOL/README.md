# Git Hands-on Lab (Detailed Guide)

## Objective

In this lab, you will learn how to:

* Install Git
* Configure Git
* Set Notepad++ as the default Git editor
* Create a Git repository
* Add and commit files
* Connect to a remote repository (GitLab/GitHub)
* Push and pull code

---

# Software to Download

## 1. Git (Mandatory)

Download:

* **Git for Windows**
* Official website: [https://git-scm.com/downloads](https://git-scm.com/downloads)

### Installation Steps

1. Download the Windows installer.
2. Double-click the installer.
3. Keep all settings as default.
4. Click **Next** until **Install**.
5. Click **Finish**.

### Verify Installation

Open **Git Bash** and type:

```bash
git --version
```

Expected Output

```bash
git version 2.xx.x.windows.x
```

---

## 2. Notepad++ (Mandatory)

Download:
[https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/)

Install using default settings.

---

## 3. GitLab Account

Create a free account at:

[https://gitlab.com](https://gitlab.com)

(You may also use GitHub if your instructor allows.)

---

# Folder Structure

After the lab:

```
GitDemo/
│
├── .git/
│
└── welcome.txt
```

---

# Step 1: Configure Git

## Check Git Installation

Open **Git Bash**

Run

```bash
git --version
```

Example Output

```bash
git version 2.48.1.windows.1
```

---

## Configure Username

```bash
git config --global user.name "Sarah Thomas"
```

Replace with your name.

---

## Configure Email

```bash
git config --global user.email "yourmail@example.com"
```

Example

```bash
git config --global user.email "sarah@gmail.com"
```

---

## Verify Configuration

```bash
git config --list
```

Expected Output

```
user.name=Sarah Thomas
user.email=sarah@gmail.com
core.editor=notepad++
```

---

# Step 2: Configure Notepad++ as Default Editor

## Check if Notepad++ Works

Type

```bash
notepad++
```

If it opens Notepad++, everything is fine.

If you get

```
command not found
```

then follow the next steps.

---

## Add Notepad++ to PATH

Open

```
Control Panel
```

↓

```
System
```

↓

```
Advanced System Settings
```

↓

```
Environment Variables
```

↓

Select **Path**

↓

Edit

↓

New

Add

```
C:\Program Files\Notepad++\
```

or

```
C:\Program Files (x86)\Notepad++\
```

depending on where it is installed.

Click OK.

Restart Git Bash.

---

## Test Again

```bash
notepad++
```

Notepad++ should open.

---

## Create Git Alias

Open Git configuration

```bash
notepad++ ~/.gitconfig
```

Add

```ini
[alias]
    np = !notepad++
```

Save.

---

## Set Notepad++ as Default Editor

Run

```bash
git config --global core.editor "notepad++"
```

---

## Verify

```bash
git config --global -e
```

It should open the Git configuration file in Notepad++.

---

# Step 3: Create Repository

Move to Desktop

```bash
cd Desktop
```

Create folder

```bash
mkdir GitDemo
```

Go inside

```bash
cd GitDemo
```

Initialize Git

```bash
git init
```

Expected Output

```
Initialized empty Git repository
```

---

## Verify Hidden Files

```bash
ls -la
```

You should see

```
.git
```

---

# Create File

Create file

```bash
echo "Welcome to Git" > welcome.txt
```

---

## Verify File

```bash
ls
```

Output

```
welcome.txt
```

---

## View Contents

```bash
cat welcome.txt
```

Output

```
Welcome to Git
```

---

# Check Status

```bash
git status
```

Output

```
Untracked files:

welcome.txt
```

Git knows the file exists but is not tracking it.

---

# Add File

```bash
git add welcome.txt
```

or

```bash
git add .
```

---

# Check Status Again

```bash
git status
```

Output

```
Changes to be committed

new file: welcome.txt
```

---

# Commit File

Run

```bash
git commit
```

Notepad++ opens.

Write

```
First commit

Added welcome.txt file.
Initial Git project.
```

Save and close.

Git creates the commit.

---

Alternatively

```bash
git commit -m "Initial Commit"
```

---

# Verify Status

```bash
git status
```

Output

```
nothing to commit
working tree clean
```

---

# Step 4: Create Remote Repository

Login to GitLab.

Click

```
New Project
```

Project Name

```
GitDemo
```

Click

```
Create Project
```

---

# Connect Local Repository

Copy repository URL.

Example

```
https://gitlab.com/username/GitDemo.git
```

Run

```bash
git remote add origin https://gitlab.com/username/GitDemo.git
```

Verify

```bash
git remote -v
```

---

# Pull Remote Repository

```bash
git pull origin master
```

If your repository uses `main` instead of `master`, run:

```bash
git pull origin main
```

---

# Push Code

```bash
git push origin master
```

or

```bash
git push origin main
```

You may be prompted to log in to GitLab.

After successful authentication, your `welcome.txt` file will appear in the remote repository.

---

# Important Git Commands

| Command                                  | Purpose                               |
| ---------------------------------------- | ------------------------------------- |
| `git --version`                          | Check Git installation                |
| `git config --global user.name "Name"`   | Set username                          |
| `git config --global user.email "Email"` | Set email                             |
| `git config --list`                      | View Git configuration                |
| `git init`                               | Initialize a Git repository           |
| `git status`                             | Check repository status               |
| `git add welcome.txt`                    | Stage a file                          |
| `git add .`                              | Stage all files                       |
| `git commit`                             | Commit with editor                    |
| `git commit -m "Message"`                | Commit with message                   |
| `git remote add origin URL`              | Add remote repository                 |
| `git pull origin master`                 | Pull changes from remote              |
| `git push origin master`                 | Push changes to remote                |
| `ls -la`                                 | Show all files, including hidden ones |
| `cat welcome.txt`                        | Display file contents                 |

---

## Final Project Structure

```
GitDemo/
│
├── .git/
│
├── welcome.txt
│
└── (Git metadata files)
```

By the end of this lab, you will have:

* Installed Git and Notepad++.
* Configured Git with your username and email.
* Set Notepad++ as the default Git editor.
* Created and initialized a local Git repository.
* Added and committed a file (`welcome.txt`).
* Created a remote repository on GitLab.
* Connected the local repository to the remote and synchronized it using `git pull` and `git push`.
