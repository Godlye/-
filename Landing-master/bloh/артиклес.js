var articles = [
    {
        title: 'Article 1',
        link: 'вообще.html'
    },
    {
        title: 'Article 2',
        link: 'не люблю.html'
    },
    {
        title: 'Article 3',
        link: 'яблоки.html'
    },
]
var blog = '<ul>', 
amountOfArticles = articles.length

for (var article = 0; article < amountOfArticles; article++) {
blog += `
<li>
    <a href="articles/${articles[ article ].link}" class="article">
        <h3>${articles[ article ].title}</h3>
    </a>
</li>`
}

blog += '</ul>'

document.getElementById('root').innerHTML = blog;