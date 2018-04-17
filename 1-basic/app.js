import { makeDOMDriver, div, p, span } from '@cycle/dom'
import { run } from '@cycle/run'
import xs from 'xstream'

function main(source) {
  const view = div([
    span('hello'),
    p('world')
  ])

  return {
    DOM: xs.of(view)
  }
}
const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)