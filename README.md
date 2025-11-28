This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 服务器部署指南

### 基本构建步骤

1. **进入项目目录**
   ```bash
   cd /www/project/project
   ```

2. **安装依赖（如果还没安装）**
   ```bash
   npm install
   ```

3. **构建生产版本**
   ```bash
   npm run build
   ```

4. **启动生产服务器**
   ```bash
   npm run start
   ```
   服务会在后台运行，监听 `0.0.0.0:3000`，可通过 IP 和域名访问。

### 处理内存不足问题

如果构建时遇到内存不足（OOM），可以尝试以下方法：

**方法 1：限制 Node.js 内存使用**
```bash
NODE_OPTIONS="--max-old-space-size=512" npm run build
```

**方法 2：清理旧构建文件后重新构建**
```bash
rm -rf .next
npm run build
```

**方法 3：增加 Swap 空间（推荐）**
```bash
# 检查当前 swap
free -h

# 如果 swap 不足，可以临时增加（需要 root 权限）
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### 重启服务

如果修改了代码需要重新部署：

1. **停止当前服务**
   ```bash
   # 查找进程
   ps -ef | grep "next-server" | grep -v grep
   # 或者
   ss -ltnp | grep 3000
   
   # 停止进程（替换 PID 为实际进程号）
   kill <PID>
   # 或者直接
   pkill -f "next-server"
   ```

2. **重新构建**
   ```bash
   cd /www/project/project
   npm run build
   ```

3. **启动服务**
   ```bash
   npm run start
   ```

### 后台运行（使用 nohup）

如果需要让服务在后台持续运行：

```bash
cd /www/project/project
nohup npm run start > /tmp/nextjs.log 2>&1 &
```

查看日志：
```bash
tail -f /tmp/nextjs.log
```

### 使用 PM2 管理（推荐生产环境）

```bash
# 安装 PM2
npm install -g pm2

# 启动服务
cd /www/project/project
pm2 start npm --name "nextjs-app" -- start

# 查看状态
pm2 status

# 查看日志
pm2 logs nextjs-app

# 重启
pm2 restart nextjs-app

# 停止
pm2 stop nextjs-app
```

### 访问地址

- IP 地址：`http://8.141.112.244`（通过 Nginx 反向代理，无需端口）
- 域名：`http://sxu.xiaohua.host`（DNS 解析到 `8.141.112.244`）
- 直接端口访问：`http://8.141.112.244:3000`（如果 Nginx 未配置）
