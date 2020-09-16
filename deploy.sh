#!/usr/bin/env sh


echo "请输入提交的信息"                   # 参数-n的作用是不换行，echo默认换行
read  information                   # 把键盘输入放入变量name

#格式化当前时间
DATE=$(date +%Y年%m月%d日%H点%M分%)

# 生成静态文件
echo '执行命令：vuepress build .'
# yarn build

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit "
git commit -m "$DATE  $information"