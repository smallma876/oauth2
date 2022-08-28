module.exports = {
  'src/**/*.+(js|jsx|ts|tsx|md)': ['eslint --fix', 'prettier --write'],
  'src/**/*(css|sass|scss)': ['prettier --write'],
  'sonar-project.properties': ['update-sonar-properties'],
}
