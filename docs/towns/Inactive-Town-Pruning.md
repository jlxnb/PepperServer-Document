---
sidebar_position: 8
---

# 不活跃城镇清理

HuskTowns（v2.4+）提供了一个基于不活跃状态清理城镇的选项；在可配置的时间内没有成员登录的城镇可以被删除，无论是自动删除还是通过`/admintown prune <time>`命令手动删除。

## 使用 /admintown prune
`/admintown prune <time> [confirm]`命令可用于删除在一定时间内不活跃的城镇。时间格式为`<number><unit>`，其中`<number>`是时间单位的数量。例如，`1d`表示一天，`2w`表示两周，`3m`表示三个月。如果未指定单位，则默认使用天。支持的单位如下：
- `d`: 天
- `w`: 周
- `m`: 月
- `y`: 年

在指定时间内没有成员登录的城镇将被删除，同时删除所有相关的领地。

执行命令时，系统会在聊天中提示确认删除。受影响的城镇数量将显示在聊天消息中。如果想跳过确认，可以在命令中添加`confirm`参数。

## 启动时自动清理
HuskTowns可以自动清理在一定时间内不活跃的城镇。要启用此功能，请在`town_pruning`下将`prune_on_startup`设置为`true`，并通过修改`prune_after_days`设置来配置不活跃城镇应被清理的天数（最小值为1天）。服务器启动时，HuskTowns将自动清理在指定时间内不活跃的城镇。

<details>
<summary>示例配置</summary>

```yaml
town_pruning:
  prune_on_startup: true
  prune_after_days: 90
```
</details>