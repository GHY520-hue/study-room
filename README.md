# StudyWithMe AI - 自习室应用

一个沉浸式学习辅助应用，通过自然场景背景、专注音乐和番茄钟功能帮助你提升学习效率。

![StudyWithMe AI](https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1920&q=80)

## ✨ 功能特点

- 🎨 **沉浸式场景** - 多种学习场景可选（清晨窗边、雨天咖啡店、深夜图书馆、海边书房）
- 🎵 **背景音乐** - 内置钢琴曲，伴随你专注学习
- ⏱️ **番茄钟** - 自定义专注时长（25/45/50/90分钟）
- 📝 **目标管理** - 记录每日学习目标
- 🎧 **音量控制** - 独立调节音乐和背景音量
- 💫 **毛玻璃设计** - 现代优雅的界面设计

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173/ 查看应用

### 构建生产版本

```bash
npm run build
```

## 🛠️ 技术栈

- **React 18** - 用户界面
- **Vite 5** - 构建工具
- **Tailwind CSS** - 样式设计
- **Lucide React** - 图标库
- **React Context** - 状态管理

## 📁 项目结构

```
src/
├── components/      # UI 组件
│   ├── ControlBar.jsx    # 控制栏
│   ├── Header.jsx        # 导航头部
│   ├── SceneCard.jsx     # 场景卡片
│   └── Timer.jsx         # 计时器
├── pages/           # 页面
│   ├── Home.jsx          # 首页
│   ├── Settings.jsx      # 设置页面
│   └── StudyRoom.jsx     # 自习室
├── context/         # 状态管理
├── data/            # 场景数据
└── hooks/           # 自定义 Hooks
```

## 🎯 使用流程

1. **进入首页** - 选择沉浸式学习场景
2. **设置参数** - 调整音乐音量、选择番茄钟时长
3. **开始学习** - 进入自习室，专注学习
4. **完成任务** - 完成番茄钟，记录学习成果

## 📝 License

MIT License - 欢迎学习和交流

## 👨‍💻 作者

**GHY520-hue**

- GitHub: [@GHY520-hue](https://github.com/GHY520-hue)

---

💡 *把一天最清醒的时间留给真正重要的学习*
