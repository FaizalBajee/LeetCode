const progress_Cmd = {
  files: `git ls-files | grep -E "\.js$" | wc -l`, // To see how many js files i have in this repo
  lines: `git ls-files '*.js' | xargs wc -l`, // To see how many lines I’ve written in this repo
};

const basic_Git_Cmd = {
  create_newBranch: `git checkout -b repoName`,
  add: "git add .",
  commit: `git commit -m "commit name"`,
  pull: `git pull origin head`,
  push: `git push origin head`,
};
