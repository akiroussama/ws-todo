import shortid from 'shortid'

export const fakeTasks = [
  {
    id: shortid.generate(),
    subject: 'LiveCo RN: setup & sample to do list',
    done: true
  },
  {
    id: shortid.generate(),
    subject: 'LiveCo RN: todo done interaction + Animations',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'LiveCo RN: Add/remove todo + Animations',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'LiveCo RN: About Page',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'LiveCo RN: Deploy the app',
    done: false
  }
]

export default fakeTasks