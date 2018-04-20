import intent from './intent'
import model from './model'
import view from './view'

export default function List (sources) {
  return view(model(intent(sources)))
}