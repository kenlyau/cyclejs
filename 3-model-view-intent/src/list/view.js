import { div, ul, li } from '@cycle/dom'
export default function view (state$) {
  return state$.map(list => {
    return div([
      ul(list.map(
        item => li(item.content)
      ))
    ])
  })
}