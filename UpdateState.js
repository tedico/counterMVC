import initModel from './Model'

const MSGS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
}

// functions is suuuppperrr galactic overkill here
// do this in your todoApp

// function addMsg() {

//}

// function subtractMsg() {

//}

function updateState(msg, model) {
  switch (msg) {
    case MSGS.ADD: {
      return model + 1
    }
    case MSGS.SUBTRACT: {
      return model - 1
    }
    default:
      return model
  }
}

export default updateState


