<html>
  <head>
    <title>文件上传</title>
    <link rel="stylesheet" href="/public/css/file.css" />
  </head>
  <body>
    <div class="file-container">
      <form method="POST" action="/file/upload" enctype="multipart/form-data">
        title : <input type="text" name="title"/><br/>
        file : <input type="file" name="file"/><br/>
        <button type="submit">Upload</button>
      </form>
    </div>
  </body>
</html>