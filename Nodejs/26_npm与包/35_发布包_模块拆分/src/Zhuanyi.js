function chuli(str) {
    //正则匹配 g是全部都匹配，匹配多次，也就是【循环替换】了
    return str.replace(/<|>|"|&/g, (nnn) => {   
        switch (nnn) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}
// 把所有 ><:& 都改成了转义字符，以免页面受影响
console.log( chuli('<h1>这是h1标签</h1>') )

// 向外暴露需要的成员
module.exports = {
    chuli
}