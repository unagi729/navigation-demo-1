const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    { logo: 'A', url: 'https://www.acfun.cn' },
    { logo: 'B', url: 'http://bilibili.com' }
]
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach(node => {
        const $li = $(`<li>
        <a href="${node.url}">
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${node.url}</div>
            </div>
        </a>
    </li>`).insertBefore($lastLi)
    })
}
render()
$('.addButton').on('click', () => {
    let url = window.prompt('请输入要添加的网址：')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    hashMap.push({
        logo: url[0],
        url: url
    })
    render()

})

window.onbeforeload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)//在本地设置一个x，它的值是string
}