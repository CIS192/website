const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/cis192/cis192.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)