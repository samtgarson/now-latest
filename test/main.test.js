import { resolve } from 'path'
import test from 'ava'
import retell from 'retell'
import getLatest from '../src/main'

retell.fixtures = resolve(__dirname, 'cassettes')

test('gets deployment', async (t) => {
  const { uid } = await getLatest({ name: 'engagement' })
  t.is(uid, 'SK16R9kQ1Rp7tiHWv2UeoptA')
})

test('app not found', async (t) => {
  const result = await getLatest({ name: 'non-existant' })
  t.is(result, undefined)
})
