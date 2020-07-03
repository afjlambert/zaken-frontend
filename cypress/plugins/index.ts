import { parse } from "dotenv-flow"
import produce from "immer"

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => 
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

   produce(config, draft => {
    // Set environment variables from .env.test:
    const env = parse(".env.test")
    draft.env = env
    draft.baseUrl = env.CYPRESS_FRONTEND_HOST
  })

