import { h1, div } from '@cycle/dom'
import xs from 'xstream'
import List from './list'
export default function main (sources) {
  const list = List(sources)
  return {
    DOM: list
  }
}