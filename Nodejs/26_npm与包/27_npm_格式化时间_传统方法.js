// 1. 定义格式化时间的方法
function myDateFormat(dateStr) {
    const dt = new Date(dateStr)
    let y = dt.getFullYear()
    let m = padZero( dt.getMonth() + 1 )
    let d = padZero( dt.getDate() )
    
    let hh = padZero( dt.getHours() )
    let mm = padZero( dt.getMinutes() )
    let ss = padZero( dt.getSeconds() )

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 时间补 0，大于9都补0
function padZero(d) {
    return d > 9 ? d : '0' + d
}

// 把该模块的成员，对外暴露出去，供外界访问
module.exports = {
    myDateFormat
}