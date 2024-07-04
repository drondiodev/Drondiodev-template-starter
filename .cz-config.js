const { resolve, basename, extname, join } = require('path')
const { readdirSync, statSync } = require('fs')

// Fonction récursive pour parcourir tous les répertoires et générer les scopes
function getAllDirectories(dirPath, arrayOfDirs = []) {
  const files = readdirSync(dirPath)

  files.forEach((file) => {
    const fullPath = join(dirPath, file)
    if (statSync(fullPath).isDirectory()) {
      // Exclure les répertoires spécifiques comme node_modules
      if (file === 'node_modules' || file.startsWith('.')) return
      arrayOfDirs.push(fullPath)
      getAllDirectories(fullPath, arrayOfDirs)
    }
  })

  return arrayOfDirs
}

// Fonction pour créer les scopes à partir des répertoires
function createScopes(namespace, directories) {
  return directories.reduce((scopes, dirPath) => {
    const dirName = basename(dirPath)
    if (
      dirName.indexOf('index') === 0 ||
      dirName.indexOf('@') === 0 ||
      dirName.indexOf('_') === 0
    )
      return scopes
    return scopes.concat(`${namespace}:${dirName}`)
  }, [])
}

// Obtenir tous les répertoires du dépôt
const allDirectories = getAllDirectories(resolve(__dirname))

// Créer les scopes à partir de tous les répertoires
const scopes = createScopes('repo', allDirectories)

console.log(scopes)

module.exports = {
  types: [
    { value: 'WIP', name: '💪  WIP:      Work in progress' },
    { value: 'feat', name: '✨  feat:     A new feature' },
    { value: 'fix', name: '🐞  fix:      A bug fix' },
    {
      value: 'refactor',
      name: '🛠   refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'docs', name: '📚  docs:     Documentation only changes' },
    {
      value: 'test',
      name: '🏁  test:     Add missing tests or correcting existing tests',
    },
    {
      value: 'chore',
      name: "🗯   chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager",
    },
    {
      value: 'style',
      name: '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'ci',
      name: 'ci: Changes to our CI configuration files and scripts',
    },
    { value: 'perf', name: 'perf: A code change that improves performance' },
    { value: 'revert', name: '⏪  revert:   Revert to a commit' },
  ],
  scopes: scopes,
  messages: {
    type: "Select the type of change that you're committing :",
    scope: '\nDenote the SCOPE of this change (optional) :',

    customScope: 'Denote the SCOPE of this change :',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change :\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line :\n',
    breaking: 'List any BREAKING CHANGES (optional) :\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above ?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
}
