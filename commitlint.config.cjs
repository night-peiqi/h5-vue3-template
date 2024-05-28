module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    useEmoji: true,
    types: [
      {
        value: 'feat',
        name: 'feat:    ✨ Features | 新功能',
        emoji: '✨'
      },
      {
        value: 'fix',
        name: 'fix:     🐛 Bug Fixes | Bug 修复',
        emoji: '🐛'
      },
      {
        value: 'docs',
        name: 'docs:    ✏️ Documentation | 文档',
        emoji: '✏️'
      },
      {
        value: 'style',
        name: 'style:   💄 Styles | 风格',
        emoji: '💄'
      },
      {
        value: 'perf',
        name: 'perf:    ⚡ Performance Improvements | 性能优化',
        emoji: '⚡'
      },
      {
        value: 'build',
        name: 'build:   📦‍ Build System | 打包构建',
        emoji: '📦'
      },
      {
        value: 'chore',
        name: 'chore:   🚀 Chore | 构建/工程依赖/工具',
        emoji: '🚀'
      },
      {
        value: 'ci',
        name: 'ci:      👷 Continuous Integration | CI 配置',
        emoji: '👷'
      },
      {
        value: 'revert',
        name: 'revert:  ⏪ Revert | 回退',
        emoji: '⏪'
      },
      {
        value: 'test',
        name: 'test:    ✅ Tests | 测试',
        emoji: '✅'
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️ Code Refactoring | 代码重构',
        emoji: '♻️'
      }
    ]
  }
}
