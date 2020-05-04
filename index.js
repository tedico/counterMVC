// import { hello } from './hello'
import updateState from './UpdateState'
import initModel from './Model'
import view from './View'
import app from './App'

// hello() // works! yay!
// fix site.webmanifest!! Either fix the icon path array or delete it coz it's sometimes causing compile errors
const rootNode = document.getElementById('root')

app(initModel, updateState, view, rootNode)


