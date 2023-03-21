function connectToFTP() {
  var ftpServer = document.getElementById('ftpServer').value;
  var ftpUser = document.getElementById('ftpUser').value;
  var ftpPassword = document.getElementById('ftpPassword').value;
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseText = xhr.responseText;
      document.getElementById('ftpDirectories').innerHTML = responseText;
    }
  };
  xhr.open('GET', 'ftp.php?server=' + ftpServer + '&user=' + ftpUser + '&password=' + ftpPassword, true);
  xhr.send();
}
