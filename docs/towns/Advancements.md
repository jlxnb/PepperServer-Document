---
sidebar_position: 5
---

# 成就

城镇成就功能提供了一种有趣的方式，既教会您的玩家如何使用HuskTowns，又提供了引人入胜的挑战以持续促进他们的成长。

成就功能默认是关闭的，可以通过服务器[配置文件](config-files)中`general`下的`do_advancements`选项来启用或禁用。城镇成就可以通过位于`/plugins/HuskTowns/`目录下的`advancements.json`文件进行自定义。

## 成就列表

|                                                                     图标                                                                     | 名称                  | 描述                | 解锁                        |
|:------------------------------------------------------------------------------------------------------------------------------------------:|---------------------|-------------------|---------------------------|
|     ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/oak_sign.png)      | **扎根**              | 创建或加入一个城镇         | 你并不孤单，已建立，新视野，升级，简史，省下一分钱 |
|      ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/red_dye.png)      | **你并不孤单**           | 有另一个成员加入你的城镇      | 陨落的王国，八人成众，守卫更替           |
|                                                                     -                                                                      | **陨落的王国**           | 至少有15个独特的玩家离开你的城镇 |                           |
|                                                                     -                                                                      | **八人成众**            | 你的城镇有8个成员         | 繁华社区                      |
|                                                                     -                                                                      | **繁华社区**            | 你的城镇有16个成员        | 城市社区                      |
|                                                                     -                                                                      | **城市社区** (挑战)       | 你的城镇有32个成员        |                           |
|    ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/iron_sword.png)     | **守卫更替**            | 你的城镇所有权被转移        |                           |
|     ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/clock_00.png)      | **已建立**             | 你的城镇至少存在一周        |                           |
|       ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/block/dirt.png)       | **新视野**             | 为你的城镇认领第一块土地      | 村庄扩展，城镇仍在移动，路标清晰          |
|     ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/block/oak_log.png)      | **村庄扩展**            | 为你的城镇认领6块土地       | 正式成为城镇                    |
|   ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/block/stone_bricks.png)   | **正式成为城镇** (目标)     | 为你的城镇认领18块土地      | 城市居民                      |
|  ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/block/gray_concrete.png)   | **城市居民**            | 为你的城镇认领40块土地      | 帝国事业                      |
|      ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/block/beacon.png)      | **帝国事业** (挑战)       | 为你的城镇认领80块土地      |                           |
|     ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/ender_eye.png)     | **城镇仍在移动**          | 将城镇的生成位置移动到其他地方   |                           |
|       ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/paper.png)       | **路标清晰**            | 设置欢迎和告别消息         |                           |
| ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/experience_bottle.png) | **升级**              | 将你的城镇升级到2级        | 五人组                       |
|   ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/nether_brick.png)    | **五人组** (目标)        | 将你的城镇升级到5级        | 高额赌注                      |
|    ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/iron_ingot.png)     | **高额赌注**            | 将你的城镇升级到10级       | 你有钱                       |
|    ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/gold_ingot.png)     | **你有钱**             | 将你的城镇升级到15级       | 现在你只是在炫耀                  |
|  ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/netherite_ingot.png)  | **现在你只是在炫耀** (挑战)   | 将你的城镇升级到20级       |                           |
|       ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/book.png)        | **简史**              | 为你的城镇设置一个简介       | 为城镇涂上红、绿、蓝                |
|     ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/painting.png)      | **为城镇涂上红、绿、蓝** (目标) | 改变你的城镇颜色          |                           |
| ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/chainmail_helmet.png)  | 省下一分钱               | 向城镇银行存入100        | 赚到一分钱                     |
|   ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/golden_helmet.png)   | 赚到一分钱               | 向城镇银行存入5,000      | 无利息                       |
|   ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/turtle_helmet.png)   | 无利息                 | 向城镇银行存入15,000     |                           |
|      ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/emerald.png)      | 可抵税                 | 有10个独特的玩家向城镇银行存款  | 你需要一个审计员                  |
|      ![icon](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.17.1/assets/minecraft/textures/item/diamond.png)      | 你需要一个审计员            | 有25个独特的玩家向城镇银行存款  |                           |
