---
title: MySQL 安装教程
date: 2023/11/04
categories:
 - 后端
---

## 下载 MySQL

访问 MySQL 官网下载地址 [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/) 。
<br>
选择版本号，选择操作系统，下载压缩包。

![](/imgs/blogs/backend/mysqlinstall/download_mysql.png)

将下载的压缩包解压到英文路径下。

## 安装配置

1. 在解压的同级目录下创建 `data` 文件夹，作为数据库目录。

![](/imgs/blogs/backend/mysqlinstall/createdir.png)

2. 创建 `my.ini` 文件，在文件中写入以下代码：

```ini
[mysqld]
# 设置服务端使⽤用的字符集为utf-8
character-set-server=utf8
# 绑定IPv4地址，这里一般可以不绑定
# bind-address=127.0.0.1
# 设置mysql的端⼝口号
port=3306
# 设置mysql的安装⽬目录
basedir=D:\Java\mysql-8.0.35-winx64
# 设置mysql数据库的数据的存放⽬目录
datadir=D:\Java\mysql-8.0.35-winx64\data
# 允许最大连接数
max_connections=2000
# 创建新表时将使⽤用的默认存储引擎
default-storage-engine=INNODB
# 设置mysql以及数据库的默认编码
[mysql]
default-character-set=utf8
[mysql.server]
default-character-set=utf8
# 设置客户端默认字符集
[client]
default-character-set=utf8
```

3. 进入 `bin` 目录，以管理员身份运行 cmd。
4. 输入命令 `mysqld --initialize --console` 初始化数据库。记住 A temporary password is generated for root@localhost: 后面生成的随机密码。
![](/imgs/blogs/backend/mysqlinstall/initialize.png)
5. 输入命令 `mysqld --install` 安装 MySQL 服务。
![](/imgs/blogs/backend/mysqlinstall/install.png)
6. 输入命令 `net start mysql` 启动 MySQL 服务。
![](/imgs/blogs/backend/mysqlinstall/start.png)
7. 输入命令 `mysql -u root -p` 输入随机临时密码，登录 MySQL。
![](/imgs/blogs/backend/mysqlinstall/login.png)
8. 输入命令 `ALTER USER root@localhost IDENTIFIED BY '新密码';` 修改密码。
![](/imgs/blogs/backend/mysqlinstall/alter.png)
9. 输入命令 `exit` 退出 MySQL。
![](/imgs/blogs/backend/mysqlinstall/exit.png)
10. 尝试使用新密码登录一次 MySQL。
![](/imgs/blogs/backend/mysqlinstall/newpwd.png)

登录成功，至此，MySQL 安装完毕。

## 使用 Navicat 连接数据库

新建 MySQL 连接，输入连接名，用户名，密码，点击测试连接。

![](/imgs/blogs/backend/mysqlinstall/connect.png)

连接成功。

![](/imgs/blogs/backend/mysqlinstall/success.png)