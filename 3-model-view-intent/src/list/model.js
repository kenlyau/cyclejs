import xs from 'xstream'
const initialData = [{id: 82378273, content: 'jk会我和我'}]
export default function model (action) {
  const state$ = xs.combine(action.delete$, action.keyup$)
    .map(item => {
      console.log(item)
      return []
    })
    .startWith(initialData)
  return state$
}