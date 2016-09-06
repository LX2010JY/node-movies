#Node.js+Express+Bootstrap

1.2016-09-04 第一步，简单功能搭建。

#mongodb
Windows 安装 MongoDB 【ubuntu 安装比较简单，直接sudo apt-get install mongodb】

1.下载mongodb，点击安装

2.找到mongodb安装后的bin目录下，加入环境变量下，使得在cmd可以直接运行


3.mongodb服务启动   c:>mongod --dbpath "d:\mongodb\data\db"   (在执行前先建立d:\mongodb\data\db目录)


4.执行了3以后，mongodb服务就启动了，可以进行连接操作，但是不能每次都这样执行命令，太麻烦，所以需要将其加入windows服务中：c:>mongod --dbpath "d:\mongodb\data\db" --logpath "d:\mongodb\data\log\MongoDB.log" --install --serviceName "MongoDB"


5.通过net start MongoDB 可以开启mongodb服务，net stop MongoDB 可以关闭服务

<em>没有测试的电影swf文件地址，可以用和这个试试 http://player.youku.com/player.php/sid/XMTYzMDQ3ODgxMg==/v.swf </em>
