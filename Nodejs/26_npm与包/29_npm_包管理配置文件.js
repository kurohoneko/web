/* 

包配置文件，npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。
用来记录一些跟项目有关的配置信息，例如项目名称、版本号、项目有哪些包、哪些只在开发期间用、哪些在开发和部署时都用。

1、多人协作的问题
共享时剔除 node_modules 文件夹，不用共享包文件夹。

2、记录项目中安装了哪些包
在项目根目录中，创建一个 package.json 配置文件，用来记录了项目中安装了哪些包。
在安装包时 npm i xxx，会自动创建一个 package.json 文件。

注意：今后项目开发中，要把 node_modules 文件夹添加到 .gitigone 忽略文件中。

3、快速创建 package.json 
npm 包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，创建一个 package.json 包管理配置文件。
npm init -y         // 创建 package.json 配置文件

注意：目录路径不能带中文字符，不能带空格，一定要用全英文命名。
运行 npm install 命令安装包时，npm 包管理工具会自动把 包名称和版本号 ，记录到 package.json 中。

4、dependencies 节点
在 package.json 文件中，有一个 dependencies 节点，专门记录使用 npm install 安装了哪些包。

5、一次性安装所有的包 npm install
npm install 命令（或 npm i）会一次性安装所有的依赖包。

执行 npm install 命令时，npm 包管理工具会先读取 package.json 中的 dependencies 节点。
读取到记录的所有包名称和版本号之后，npm 会把这些包一次性下载到项目中。

6、卸载包 npm uninstall
npm uninstall 命令，可以卸载指定的包。
例如：npm uninstall moment
执行命令后，会把卸载的包，从 package.json 的 dependencies 中移除掉。

7、devDependencies 节点
如果某些包只在项目开发阶段中用到，在项目上线之后不会用到，建议把这些包记录到 devDependencies 节点中。
与之对应的，某些包在开发和上线都需要用到，则记录到 dependencies 节点中。
语法：
npm i 包名 -D                 //简写形式。安装指定的包，并记录到 DevDependencies 节点中
npm install 包名 --save-dev   //完整写法

其中，-D 可以写到包名的前面。

*/