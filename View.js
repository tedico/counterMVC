import hh from 'hyperscript-helpers'
import h from 'hyperscript'

const { div, button } = hh(h)

const MSGS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
}

function view(dispatch, model) {
  return div({ className: 'container'}, [
    div({ className: 'counter'},`Counter: ${model}`, [
      div({ className: 'button-set'}, [
        button({ onclick: () => dispatch(MSGS.ADD) }, '+'),
        button({ onclick: () => dispatch(MSGS.SUBTRACT) }, '-')
     ])
    ])
  ])
}

export default view