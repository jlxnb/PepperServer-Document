---
sidebar_position: 1
---

# 命令

HuskTowns 拥有广泛的命令，每个命令都有相应的权限节点。每个命令都有一个帮助菜单，可以在游戏中访问以查看这些列表。

## /town 命令
`/town` 命令（基础权限：`husktowns.command.town`）是所有操作的入口点。除了这些权限外，玩家可能需要根据他们在城镇中的角色拥有先决条件*特权*才能使用该命令。

| 命令            | 描述                                 | 权限                          |
|--------------------|---------------------------------------------|-------------------------------------|
| `/town help`       | 查看城镇命令列表              | `husktowns.command.town.help`       |
| `/town create`     | 创建一个城镇                               | `husktowns.command.town.create`     |
| `/town about`      | 查看城镇信息               | `husktowns.command.town.about`      |
| `/town list`       | 查看城镇列表                        | `husktowns.command.town.list`       |
| `/town invite`     | 邀请某人加入你的城镇                 | `husktowns.command.town.invite`     |
| `/town claim`      | 认领一个区块                               | `husktowns.command.town.claim`      |
| `/town unclaim`    | 移除一个认领                              | `husktowns.command.town.unclaim`    |
| `/town autoclaim`  | 切换自动认领区块功能     | `husktowns.command.town.autoclaim`  |
| `/town map`        | 查看附近城镇认领的地图            | `husktowns.command.town.map`        |
| `/town promote`    | 提升成员的角色等级      | `husktowns.command.town.promote`    |
| `/town demote`     | 降低成员的角色等级     | `husktowns.command.town.demote`     |
| `/town evict`      | 驱逐城镇成员                | `husktowns.command.town.evict`      |
| `/town leave`      | 离开城镇                              | `husktowns.command.town.leave`      |
| `/town farm`       | 将认领区块变为城镇农场               | `husktowns.command.town.farm`       |
| `/town plot`       | 将认领区块变为地块并管理      | `husktowns.command.town.plot`       |
| `/town rules`      | 编辑城镇规则                         | `husktowns.command.town.rules`      |
| `/town deposit`    | 存入城镇金库               | `husktowns.command.town.deposit`    |
| `/town withdraw`   | 从城镇金库中取款              | `husktowns.command.town.withdraw`   |
| `/town level`      | 支付以升级城镇                    | `husktowns.command.town.level`      |
| `/town bio`        | 编辑城镇简介                           | `husktowns.command.town.bio`        |
| `/town greeting`   | 编辑城镇欢迎信息              | `husktowns.command.town.greeting`   |
| `/town farewell`   | 编辑城镇告别信息              | `husktowns.command.town.farewell`   |
| `/town color`      | 编辑城镇颜色                         | `husktowns.command.town.color`      |
| `/town rename`     | 重命名城镇                             | `husktowns.command.town.rename`     |
| `/town spawn`      | 传送到城镇重生点                    | `husktowns.command.town.spawn`      |
| `/town setspawn`   | 设置城镇重生点                          | `husktowns.command.town.setspawn`   |
| `/town clearspawn` | 清除城镇重生点                        | `husktowns.command.town.clearspawn` |
| `/town privacy`    | 编辑城镇重生点的隐私          | `husktowns.command.town.privacy`    |
| `/town chat`       | 向城镇聊天发送消息             | `husktowns.command.town.chat`       |
| `/town player`     | 查看玩家所属的城镇     | `husktowns.command.town.player`     |
| `/town deeds`      | 查看服务器上城镇认领的列表   | `husktowns.command.town.deeds`      |
| `/town census`     | 查看城镇成员及其角色列表 | `husktowns.command.town.census`     |
| `/town relations`  | 管理[[关系]]（如果启用）        | `husktowns.command.town.relations`  |
| `/town war`        | 查看并宣战[[战争]]（如果启用）   | `husktowns.command.town.war`        |
| `/town log`        | 查看城镇审计日志                     | `husktowns.command.town.log`        |
| `/town transfer`   | 将城镇所有权转移给某人   | `husktowns.command.town.transfer`   |
| `/town disband`    | 删除城镇                             | `husktowns.command.town.disband`    |

`husktowns.command.town.*` 权限可用于授予所有城镇 (`/town`) 命令。

## /admintown 命令
`/admintown` 命令（基础权限：`husktowns.command.admintown`）用于对城镇或世界执行管理员操作。

| 命令                   | 描述                                   | 权限                                 |
|---------------------------|-----------------------------------------------|--------------------------------------------|
| `/admintown help`         | 查看管理员命令列表       | `husktowns.command.admintown.help`         |
| `/admintown claim`        | 创建管理员认领                         | `husktowns.command.admintown.help`         |
| `/admintown unclaim`      | 删除认领                                | `husktowns.command.admintown.help`         |
| `/admintown ignoreclaims` | 切换忽略/尊重认领访问权限       | `husktowns.command.admintown.ignoreclaims` |
| `/admintown chatspy`      | 切换监听城镇聊天消息           | `husktowns.command.admintown.chatspy`      |
| `/admintown delete`       | 删除城镇                                 | `husktowns.command.admintown.delete`       |
| `/admintown takeover`     | 加入并接管城镇所有权           | `husktowns.command.admintown.takeover`     |
| `/admintown balance`      | 设置或更改城镇的余额           | `husktowns.command.admintown.balance`      |
| `/admintown setlevel`     | 设置城镇的等级                       | `husktowns.command.admintown.setlevel`     |
| `/admintown prune`        | [清理不活跃的城镇](Inactive-Town-Pruning) | `husktowns.command.admintown.prune`        |
| `/admintown advancements` | [检查城镇进展](Advancements)  | `husktowns.command.admintown.advancements` |
| `/admintown bonus`        | 应用或管理城镇奖励                  | `husktowns.command.admintown.bonus`        |

`husktowns.command.admintown.*` 权限可用于授予所有管理员 (`/admintown`) 命令。

## /husktowns 命令
`/husktowns` 命令（基础权限：`husktowns.command.husktowns`）用于插件系统维护和信息。

| 命令              | 描述                               | 权限                            |
|----------------------|-------------------------------------------|---------------------------------------|
| `/husktowns help`    | 查看系统命令列表          | `husktowns.command.husktowns.help`    |
| `/husktowns about`   | 查看插件关于菜单                | `husktowns.command.husktowns.about`   |
| `/husktowns update`  | 检查插件更新                  | `husktowns.command.husktowns.update`  |
| `/husktowns reload`  | 重新加载插件本地化文件                 | `husktowns.command.husktowns.reload`  |
| `/husktowns migrate` | 执行[迁移](legacy-migration) | `husktowns.command.husktowns.migrate` |

`husktowns.command.husktowns.*` 权限可用于授予所有系统 (`/husktowns`) 命令。

## 额外权限
以下特殊权限也可以使用
* `husktowns.admin_claim_access` - 允许在任何管理员认领中建造
* `husktowns.spawn_privacy_bypass` - 绕过重生点隐私限制，允许传送到任何城镇重生点