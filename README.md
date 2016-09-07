#Node.js+Express+Bootstrap


<B>没有测试的电影swf文件地址，可以用这个试试 http://player.youku.com/player.php/sid/XMTYzMDQ3ODgxMg==/v.swf </B>

<hr>
<ul>
<li><h3>1. 2016-09-04 第一步，简单功能搭建。</h3></li>
</ul>
<hr>
#mongodb
<ul>
Windows 安装 MongoDB 【ubuntu 安装比较简单，直接sudo apt-get install mongodb】

<li>1.下载mongodb，点击安装</li>

<li>2.找到mongodb安装后的bin目录下，加入环境变量下，使得在cmd可以直接运行</li>


<li>3.mongodb服务启动   c:>mongod --dbpath "d:\mongodb\data\db"   (在执行前先建立d:\mongodb\data\db目录)</li>


<li>4.执行了3以后，mongodb服务就启动了，可以进行连接操作，但是不能每次都这样执行命令，太麻烦，所以需要将其加入windows服务中：c:>mongod --dbpath "d:\mongodb\data\db" --logpath "d:\mongodb\data\log\MongoDB.log" --install --serviceName "MongoDB"【必须在管理员状态下执行，否则没法添加】</li>


<li>5.通过net start MongoDB 可以开启mongodb服务，net stop MongoDB 可以关闭服务</li>
</ul>
<hr>





