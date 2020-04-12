## portal template ##

> 通过修改 [PanJiaChen/vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 得到的模板

修改范围：
+ 将框架本身的大部分内容都移入 `Framework` 目录
+ 提供全局 `$http`, `$logger`, `$message` 对象
+ 目录 `src/router` 下仅保存路由信息，注册由 `Framework` 完成
+ 目录 `src/store` 下 `export` 相关的 `module` 和 `getters`, 注册由 `Framework` 完成
+ ...

