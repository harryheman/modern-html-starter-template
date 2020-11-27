import arg from 'arg'
import inquirer from 'inquirer'
import { createProject } from './main'

const parseArgumentsIntoOptions = (rawArgs) => {
  const args = arg(
    {
      '--yes': Boolean,
      '--git': Boolean,
      '--install': Boolean,
      '-y': '--yes',
      '-g': '--git',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  )

  return {
    template: 'template',
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    install: args['--install'] || false,
  }
}

const promptForMissingOptions = async (options) => {
  if (options.skipPrompts) {
    return {
      ...options,
      git: false,
      install: false,
    }
  }

  const questions = []

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Would you like to initialize git?',
      default: false,
    })
  }

  if (!options.install) {
    questions.push({
      type: 'confirm',
      name: 'install',
      message: 'Would you like to install dependencies?',
      default: false,
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    git: options.git || answers.git,
    install: options.install || answers.install,
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  await createProject(options)
}
