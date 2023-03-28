/* 
在国内下载外国资源会很慢，切换成国内的镜像服务器就变快了

1、查看当前的下包镜像源
npm config get registry

显示：https://registry.npmjs.org/   ，这是官方服务器

2、更换下包镜像源
例如：淘宝镜像源 npm config set registry=https://registry.npmmirror.com/

3、nrm 工具
在 cmd 运行终端

通过 npm 将 nrm 安装为全局可用的工具
npm i nrm -g
查看所有可用的镜像源
nrm ls
更改镜像源
nrm use 名称



*/