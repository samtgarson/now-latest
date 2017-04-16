import { resolve } from 'path'
import test from 'ava'
import retell from 'retell'
import getLatest from '../src/main'

retell.fixtures = resolve(__dirname, 'cassettes')

test('gets deployment', async (t) => {
  const { uid } = await getLatest({ name: 'engagement', token: '2Aa62jukSsSF5KOEWHizRfwz' })
  t.is(uid, '4G1AqEAnW26V2lXVn7gWukwx')
})

test('app not found', async (t) => {
  const result = await getLatest({ name: 'non-existant', token: '2Aa62jukSsSF5KOEWHizRfwz' })
  t.is(result, undefined)
})
