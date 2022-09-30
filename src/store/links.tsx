import shortid from 'shortid'

const Links = [
  {
    id: shortid.generate(),
    href: 'https://github.com/akiroussama/ws-todo',
    title: ' Go to the github repository',
    colorScheme: 'yellow'
  },
  {
    id: shortid.generate(),
    href: 'https://snack.expo.dev/',
    title: 'link of deployment ( snack ? )',
    colorScheme: 'pink'
  },
  {
    id: shortid.generate(),
    href: 'https://www.wildcodeschool.com/',
    title: 'Wild School',
    colorScheme: 'green'
  }
]

export default Links
