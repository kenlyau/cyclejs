import { h1 } from '@cycle/dom'
import xs from 'xstream'

export default function main (sources) {
  return {
    DOM: xs.of(h1('hello'))
  }
}