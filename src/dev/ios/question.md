
# 常见问题

----------------

`序号：2001`: IntermediateBuildFilesPath/UninstalledProducts/iphoneos/Aspects.framework" failed: No such file or directory

```

修改 /Pods/Target Support Files/Pods-{product名称}/Pods-{product名称}-frameworks.sh

替换
source="$(readlink "${source}")"

为

source="$(readlink -f "${source}")"

```