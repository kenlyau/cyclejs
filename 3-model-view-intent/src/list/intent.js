export default function intent (sources) {
  const keyup$ = sources.DOM.select('input').events('keyup').filter(e => e.keyCode === 13).map(e => e.target.value)
  const delete$ = sources.DOM.select('.delete').events('click').map(e => e.dataset.id)
  return {
    keyup$,
    delete$
  }
}