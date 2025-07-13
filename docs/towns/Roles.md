---
sidebar_position: 4
---

# 角色

您可以自定义城镇成员可能担任的角色以及每个角色在城镇内的权限。城镇至少需要两个具有不同权重的角色；一个“市长”角色和一个默认的市民角色，否则您会遇到错误。

### 重要事项
* 如果您更改角色数量，您需要重置数据，因为数据库中存储的角色权重将变得不兼容。
* 不过，您可以随时在配置中更改权限
* 您也可以根据需要更改角色名称。只是权重不能更改，因为这些权重存储在数据库中。

## 定义角色
角色在下面的城镇 `roles.yml` 文件中定义，这是默认设置的副本。
<details>
<summary>roles.yml</summary>

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃  HuskTowns 城镇角色配置  ┃
# ┃    由 William278 开发    ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件用于配置城镇角色及相关权限。
# ┣╸ 每个角色都映射到一个权重，标识其层次位置。每个权重也映射到角色名称。
# ┣╸ 配置帮助：https://william278.net/docs/husktowns/config-files
# ┗╸ 文档：https://william278.net/docs/husktowns/town-roles
# 角色权重 ID 到显示名称的映射
names:
  '3': 市长
  '2': 受托人
  '1': 居民
# 角色权重 ID 到权限的映射
roles:
  '3':
  - set_bio
  - evict
  - promote
  - demote
  - withdraw
  - level_up
  - set_rules
  - rename
  - set_color
  - declare_war
  '2':
  - set_farm
  - set_plot
  - manage_plot_members
  - trusted_access
  - unclaim
  - claim
  - set_greeting
  - set_farewell
  - invite
  - set_spawn
  - manage_relations
  - spawn_privacy
  - view_logs
  '1':
  - deposit
  - chat
  - claim_plot
  - spawn
```

</details>

### 权限
角色权限是您指定每个角色在城镇中拥有哪些权利的方式。下表列出了所有这些权限以及它们赋予每个角色的权利。如果您没有将权限分配给角色，则没有人能够执行该操作，因此请确保所有权限都已分配。

> ✅ 请记住，较高角色继承较低权重角色的权限。

| 权限                  | 描述                                                   |
|-----------------------|--------------------------------------------------------|
| `set_bio`             | 更新城镇简介                                           |
| `evict`               | 驱逐城镇成员                                           |
| `promote`             | 将城镇成员提升到更高角色                               |
| `demote`              | 将成员降级到较低角色                                   |
| `withdraw`            | 从金库中提取资金到自己的银行余额                       |
| `level_up`            | 从金库中花费资金以升级城镇                             |
| `set_rules`           | 更新城镇领地/旗帜规则设置                               |
| `rename`              | 重命名城镇                                             |
| `set_color`           | 设置城镇颜色                                           |
| `set_farm`            | 将已声明的区块变为农场                                 |
| `set_plot`            | 将已声明的区块变为地块                                 |
| `manage_plot_members` | 添加成员和管理员到地块                                 |
| `manage_relations`    | 管理[[关系]]，如果启用                                 |
| `declare_war`         | 声明和管理[[战争]]，如果启用                           |
| `trusted_access`      | 在城镇内任何地方建造，包括地块外                       |
| `unclaim`             | 移除领地                                               |
| `claim`               | 创建领地                                               |
| `set_greeting`        | 更新城镇欢迎信息                                       |
| `set_farewell`        | 更新城镇告别信息                                       |
| `invite`              | 邀请玩家加入城镇                                       |
| `set_spawn`           | 更新城镇出生点位置                                     |
| `spawn_privacy`       | 更新城镇出生点的隐私设置                               |
| `view_logs`           | 查看城镇审计日志                                       |
| `deposit`             | 将资金存入城镇金库                                     |
| `chat`                | 使用城镇聊天                                           |
| `spawn`               | 如果出生点是私有的，则传送到城镇出生点                 |
| `claim_plot`          | 使用 `/town plot claim` 声明一个空闲的城镇地块         |

某些操作自动仅授予市长——例如解散和转移城镇所有权的能力。只有一个玩家可以担任市长。如果您想要一个“共同市长”设置，建议您定义两个角色——一个具有最高权重的“真正”市长，以及一个权重略低的“共同市长”，并为该角色分配所有权限。