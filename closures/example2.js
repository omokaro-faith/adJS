const sendRequest = () => {
  var requestID = '12345'
  $.ajax({
    url: '/myUrl',
    success: (response) => {
      alert('Request ' + requestID + ' returned')
    }
  });
}