import { h1, div, button} from '@cycle/dom'
import xs from 'xstream'

export default function main (sources) {
  const plus$ = sources.DOM.select('.plus').events('click').mapTo(1)
  const minus$ = sources.DOM.select('.minus').events('click').mapTo(-1)
  const view$ = xs.merge(plus$, minus$).fold((a,b) => a + b, 0).map(count => (
    div([
      h1(`count: ${count}`),
      div([
        button('.plus', 'plus'),
        button('.minus', 'minus')
      ])
    ])
  ))
  const skins = {
    DOM: view$
  }
  return skins
} 