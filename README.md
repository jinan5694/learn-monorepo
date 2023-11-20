# cli 脚手架

core
template
playground

# 内部依赖相关
link-workspace-packages

# 安装所有仓库的依赖
recursive-install 

## pnpm monorepo about
### filter 的使用
```bash
# filter 要放在前面，否则不生效
pnpm --filter <package_name> xxx
# or
pnpm -F <package_name> xxx
```
outdated 检查过期的包
```bash
pnpm outdated
# 检查所有包，包括子包
pnpm outdated -r
```

npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types