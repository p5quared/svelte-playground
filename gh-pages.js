const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/p5quared/svelte-playground.git', // Update to point to your repository
        user: {
            name: 'Peter V.', // update to use your name
            email: 'petervaiciulis@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)