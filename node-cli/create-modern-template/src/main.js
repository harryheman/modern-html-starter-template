import path from 'path'
import chalk from 'chalk'
import execa from 'execa'
import fs from 'fs'
import Listr from 'listr'
import ncp from 'ncp'
import { projectInstall } from 'pkg-install'
import { promisify } from 'util'
import clear from 'clear'
import figlet from 'figlet'

const access = promisify(fs.access)
const copy = promisify(ncp)

clear()

console.log(
  chalk.yellowBright(figlet.textSync('HTML', { horizontalLayout: 'full' }))
)

const copyFiles = async (options) => {
  try {
    await copy(options.templateDirectory, options.targetDirectory, {
      clobber: false,
    })
  } catch {
    console.error('%s Failed to copy files', chalk.red.bold('ERROR'))
    process.exit(1)
  }
}

const initGit = async (options) => {
  try {
    await execa('git', ['init'], {
      cwd: options.targetDirectory,
    })
  } catch {
    console.error('%s Failed to initialize git', chalk.red.bold('ERROR'))
    process.exit(1)
  }
}

export const createProject = async (options) => {
  options.targetDirectory = process.cwd()

  const fullPath = path.resolve(__filename)

  const templateDir = fullPath.replace('main.js', `${options.template}`)

  options.templateDirectory = templateDir

  try {
    await access(templateDir, fs.constants.R_OK)
  } catch {
    console.error('%s Invalid template name', chalk.red.bold('ERROR'))
    process.exit(1)
  }

  const tasks = new Listr(
    [
      {
        title: 'Copy project files',
        task: () => copyFiles(options),
      },
      {
        title: 'Initialize git',
        task: () => initGit(options),
        enabled: () => options.git,
      },
      {
        title: 'Install dependencies',
        task: () =>
          projectInstall({
            cwd: options.targetDirectory,
          }),
        enabled: () => options.install,
      },
    ],
    {
      exitOnError: false,
    }
  )

  await tasks.run()

  console.log('%s Project ready', chalk.green.bold('DONE'))

  return true
}
