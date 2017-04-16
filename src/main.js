// @flow
import nowClient from 'now-client'

export default async ({ token, name }: { token: string, name: string }) => {
  const now = nowClient(token)
  const deployments = await now.getDeployments()

  return deployments
    .filter(d => d.name === name)
    .sort((a, b) => b.created - a.created)[0]
}
