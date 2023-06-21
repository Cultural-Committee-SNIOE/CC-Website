# CC - Website

## Setup and local deployment
Clone the website
```
git clone https://github.com/Cultural-Committee-SNIOE/CC-Website.git
```
Install the modules
```
npm i
```
Start the server
```
npm run dev
```

## Contributing
Create a new branch
```
git checkout -b feat/<branch-name>
```
Create a commit with a message
```
git commit -am "<commit-message>"
```
Push the branch
```
git push origin feat/<branch-name>
```

## Branch Naming Convention

When creating a new branch for a feature, bug fix, or any other development task, follow this naming convention:

```bash
<type>/<short_description>
```

- `<type>`: The type of the task (e.g., feature, bug, hotfix, refactor, etc.).
- `<short_description>`: A brief description of the task, using hyphens (-) to separate words.

Examples:
- `feature/user-login`
- `bug/homepage-crash`
- `refactor/database-utils`

## Commit Message Format

For commit messages, follow this format:

```bash
<type>: <subject>
```

- `<type>`: The type of the commit (e.g., feat, fix, docs, refactor, chore, etc.).
- `<subject>`: A brief description of the change in the commit.

Examples:
- `feat: Add user authentication`
- `fix: Fix null pointer exception in homepage`
- `docs: Update README with project setup instructions`










