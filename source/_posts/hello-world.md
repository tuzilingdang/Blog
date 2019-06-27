---
title: Hello Hexo —— Hexo使用扫盲
date: 2016-08-02 22:01:10
tags: Hexo使用
---


##  Hello Hexo
折腾了好久，博客终于可以无障碍使用了。直接上步骤：
## 配置环境
### node是必须的
安装homebrew，有ruby的话这样：

``` bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

安装node：

```
brew link node
brew uninstall node
brew install node
```

### Github是必须的
没有注册下，创建博客的远程库

#####  1. 建立Repository
建立与用户名对应的仓库，仓库名必须为【username.github.io】，务必严格一致，务必一致，一致

本地Blog我的地址是： /Documents/Blog ,里面是这样的文件夹：

```
_config.yml    node_modules    public      source

db.json        package.json    scaffolds  themes

```

修改_config.yml文件：

``` bash
vim _config.yml
```

类似这样，务必冒号后面跟个空格，务必冒号后面跟个空格，务必冒号后面跟个空格：

``` 
deploy:
```

```
type: git
```

``` 
repo: https://github.com/tuzilingdang/tuzilingdang.github.io.git
```

```
branch: master
```

执行命令(cnpm是淘宝的镜像，没有装就写npm)，每次修改了_config.yml都要这样一下呀，不然不能生效：

``` bash
$ cnpm install hexo-deployer-git --save
```

### hexo是必须的
执行如下命令安装Hexo：

``` bash
$ sudo npm install -g hexo
``` 

初始化命令，然后Blog下面就有Hexo的文件夹了：

``` bash
$ hexo init
```

使用下面的命令把你编辑的各种东西生成到public文件夹下，这样部署到github上的博客就是生成的public文件夹，简写的话就是hexo g就可以了：

``` bash
$ hexo generate
```

然后可以写文章啦^ 

``` bash
$ hexo new "My New Post"
```
去source下找到生成的marddown格式的文件，编辑就好啦。 记得编辑完，Hexo g一下。

启动本地服务可以先看下效果：

``` bash
$ hexo server
```


## 每次部署github
每次执行这三条命令就OK了。

``` bash
$ hexo clean
```

``` bash
$ hexo generate
```

``` bash
$ hexo deploy
```

clean会把public和相关数据全部删掉，慎用。我一般就hexo g和hexo d两下，就可以在github上部署成功。

然后访问[tuzilingdang.github.io](https://tuzilingdang.github.io)，换成自己的名字能看到了。

