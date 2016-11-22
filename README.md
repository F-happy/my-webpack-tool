# 我的纯 webpack 构建工具
### 技术栈
> HTML + reactJs + SCSS + webpack(构建工具)

## 目录结构

- config 所有的配置文件
- build 编译之后的目标文件
- mobile 移动版的源代码
- desktop 桌面版的源代码

> 更多信息可查看 package.json 文件

## 安装
```
$ npm install

```

## 部署
只需要通过不同的命令来进行部署即可

```
# 启动本地移动端测试模式，本地地址为: http//127.0.0.1:1024
$ npm run dev:mobile

# 启动本地桌面端测试模式，本地地址为: http//127.0.0.1:1025
$ npm run dev:desktop

# 编译移动端代码
$ npm run build:mobile

# 编译移动桌面端
$ npm run build:desktop
```