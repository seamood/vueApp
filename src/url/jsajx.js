// import store from '../store'
export const jsajx = function (dataType, urlType, url, fromData, fn) {
  url = '/api' + url
  fromData = fromData || ''
  urlType = urlType.toUpperCase()
  dataType = dataType.toUpperCase()
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open(urlType, url, true)
  // xmlhttp.setRequestHeader('Content-Type', 'application/json')
  switch (dataType) {
    case 'JSON':
      xmlhttp.setRequestHeader('Content-Type', 'application/json')
      break
    case 'FROMDATA':
    // xmlhttp.setRequestHeader('Content-Type', 'multipart/form-data')
      break
    default:
      xmlhttp.setRequestHeader('Content-Type', 'application/json')
  }
  //   xmlhttp.setRequestHeader('Content-Type', 'multipart/form-data')
  //   xmlhttp.setRequestHeader('admin-token-key', store.state.userInfo.token)
  if (urlType === 'POST') {
    xmlhttp.send(fromData)
  } else {
    xmlhttp.send()
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      //   console.log(xmlhttp.responseText)
      fn(xmlhttp.responseText)
    }
  }
}
// 列子
// jsajx(
//   '',
//   "post",
//   "/admin/department/getdepartmenttreedata.json",
//   paramData,
//   res => {
//     res = JSON.parse(res);
//     const data = res.data || [];
//     if (res.status === 200) {
//       // 请求成功
//     }
//   })
