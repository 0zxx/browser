<?php
  $ftpServer = $_GET['server'];
  $ftpUser = $_GET['user'];
  $ftpPassword = $_GET['password'];
  
  $connId = ftp_connect($ftpServer);
  ftp_login($connId, $ftpUser, $ftpPassword);
  
  $contents = ftp_nlist($connId, ".");
  echo "<ul>";
  foreach ($contents as $content) {
    echo "<li>$content</li>";
  }
  echo "</ul>";
  
  ftp_close($connId);
?>
