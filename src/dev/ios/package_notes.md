# 打包注意事项

第一步：

Podfile里的dev_team换成自己开发者账号的team id


第二步：

```

修改 /Pods/Target Support Files/Pods-{product名称}/Pods-{product名称}-frameworks.sh

替换
source="$(readlink "${source}")"

为

source="$(readlink -f "${source}")"

```