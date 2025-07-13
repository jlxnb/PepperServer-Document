---
sidebar_position: 6
---

# 关系

城镇关系，在HuskTowns v2.6版本中新增，允许[[城镇]]之间将彼此标记为盟友或敌人。

## 1. 启用/禁用城镇关系
城镇关系功能默认启用，可以通过编辑[`config.yml`](config-files)来禁用。

<details>
<summary>城镇关系 (config.yml)</summary>

```yaml
relations:
    # 启用城镇关系（联盟和敌对）。文档：https://william278.net/docs/husktowns/town-relations/
    enabled: true
```
</details>


## 2. 管理关系
`/town relations` 命令允许你查看当前所在城镇的关系。你可以使用 `/town relations list (town)` 来查看另一个城镇的关系。

如果你在当前城镇拥有 `MANAGE_RELATIONS` 权限，你可以使用 `/town relations set <ally/enemy> <town>` 将另一个城镇标记为盟友或敌人。该城镇随后会显示在你的关系列表中。

### 2.1 建立联盟
被你标记为盟友的城镇会授予一个额外的属性：如果启用了限制友军伤害的选项，两个联盟城镇之间的PvP将不被允许。

### 2.2 敌人与战争
如果你在服务器上启用了[[战争]]，彼此标记为敌人的城镇将能够宣战并互相交战。

### 2.3 中立关系
未被标记为盟友或敌人的城镇被视为具有“中立”关系。换句话说，这是你与服务器上其他城镇的默认关系。

要将你标记为盟友或敌人的城镇设置为“中立”，请使用 `/town relations set neutral <town>`。
