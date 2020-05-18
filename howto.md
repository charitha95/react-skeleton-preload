### How to publish

1. Remove .git file (on bash `rm -rf .git`)
2. Initialize new repo by `git init`
3. Setup git locally. (Optional `git config user.name "user-name-here"` for user and `git config user.email "user-email-here"` for email)
4. Install semantic-release-cli globally by `npm install -g semantic-release-cli` then run `semantic-release-cli setup` or run `npx semantic-release-cli setup`
5. Create a github repo
6. open package.json and change following attributes

```json
{
  "name": , //packageName
  "description": ,// package description
  "keywords": [] ,// enter package keywords here
  "author": ,// package author name
  "license": , // package license
  "homepage": "https://github.com/<github handler>/<repo>#readm", // replace <github handler> with your github handler and <repo> with your repository name
  "bugs": {
    "url": "https://github.com/<github handler>/<repo>/issues"// replace <github handler> with your github handler and <repo> with your repository name
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/<github handler>/<repo>.git"// replace <github handler> with your github handler and <repo> with your repository name
  },
}
```

7. Rename `sample.travis.yml` to `.traivs.yml`
8. Install husky by `npm i -D husky`
9. commit changes by running `git add .` then `git commit -m ""` (Make sure to add an empty message. This will trigger the commitizen cli and guide you through the git commit process)
10. Finally push the project to newly created repo.

```bash
git remote add origin git@github.com:<yourGithubHandler>/<repo-name>.git
git push -u origin master
```
