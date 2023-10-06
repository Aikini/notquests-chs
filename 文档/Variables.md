# ⭐ 变量
变量还可以用于快速创建高级事件和条件！正因如此，下面的很多变量都可以运用于条件当中，并且大多数情况也可以运用于事件当中。不仅如此，变量还可以在一些所谓的表达式中运用。因此，你甚至可以对这样变量进行计算！  
# 默认变量
## ❓ ActiveQuests
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
> **条件示例**：  
> + ```/qa conditions add isWoodCutterQuestActive ActiveQuests contains woodCutter```（设定条件isWoodCutterQuestActive为名叫“woodCutter”的任务处于激活状态）
> + ```/qa conditions add isOnlyWoodCutterQuestActive ActiveQuests equals woodCutter```（设定条件isOnlyWoodCutterQuestActive为名叫“woodCutter”的任务处于激活状态，且除此之外没有其它任务）
> + ```/qa conditions add hasAllWoodQuestsActive ActiveQuests contains woodCutter,saveTheWoods```（设定条件hasAllWoodQuestsActive为名叫“woodCutter”和“saveTheWoods”的任务同时处于激活状态）
> **事件示例**：
> + ```/qa actions add giveQuestWoodCutter ActiveQuests add woodCutter```（设定事件giveQuestWoodCutter为强制给予玩家名叫“woodCutter”的任务）
> + ```/qa actions add setQuestWoodCutter ActiveQuests set woodCutter```（设定事件setQuestWoodCutter为强制给予玩家名叫“woodCutter”的任务，同时放弃玩家其它所有任务）
> + ```/qa actions add giveForestQuests ActiveQuests add woodCutter,saveTheWoods```（设定事件giveForestQuests为强制给予玩家名叫“woodCutter”和“saveTheWoods”的任务）
<br/>

## ❓ Advancement
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ Block
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ Chance
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ Climbing
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ CompletedObjectiveIDsOfQuest
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ CompletedQuests
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ Condition
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ ContainerInventory
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ CurrentBiome
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：字符串
<br/>

## ❓ ContainerInventory
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ CurrentPositionX
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ CurrentPositionY
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ CurrentPositionZ
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ CurrentWorld
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ DayOfWeek
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：字符串
<br/>

## ❓ EnderChest
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：ItemStack、列表
<br/>

## ❓ Experience
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：整数
<br/>

## ❓ ExperienceLevel
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：整数
<br/>

## ❓ False
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ Flying
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：单精度浮点数
<br/>

## ❓ FlySpeed
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ GameMode
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ Glowing
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ Health
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ InLava
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ InWater
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ Inventory
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：ItemStack、列表
<br/>

## ❓ ItemInInventoryEnchantments
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：字符串、列表
<br/>

## ❓ MaxHealth
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ Money
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ Name
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ Op
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ Permission
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**（需要LuckPerms前置）
> **类型**：布尔值
<br/>

## ❓ Ping
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：整数
<br/>

## ❓ PlaytimeTicks
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：整数
<br/>

## ❓ PlaytimeMinutes
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ PlaytimeHours
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ QuestAbleToAccept
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ QuestOnCooldown
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ QuestPoints
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：长整型数
<br/>

## ❓ QuestReachedMaxAccepts
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ QuestReachedMaxCompletions
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ QuestReachedMaxFails
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ RandomNumberBetweenRange
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：整数
<br/>

## ❓ ReflectionStaticBoolean
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ ReflectionStaticDouble
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：双精度浮点数
<br/>

## ❓ ReflectionStaticFloat
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：单精度浮点数
<br/>

## ❓ ReflectionStaticInteger
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：整数
<br/>

## ❓ ReflectionStaticString
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ Sleeping
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ Sneaking
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ Sprinting
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ Swimming
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：布尔值
<br/>

## ❓ True
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ WalkSpeed
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：单精度浮点数
<br/>

# [BetonQuest](https://dev.betonquest.org/)联动变量
## ❓ BetonQuestCondition
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

# [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/releases)联动变量
## ❓ PlaceholderAPINumber
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：双精度浮点数
<br/>

## ❓ PlaceholderAPIString
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：字符串
<br/>

# [Project Korra](https://github.com/ProjectKorra/ProjectKorra/releases)联动变量
## ❓ ProjectKorraElements
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

## ❓ ProjectKorraIsBender
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>

## ❓ ProjectKorraSubElements
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串、列表
<br/>

# [Towny](https://github.com/TownyAdvanced/Towny/releases)联动变量
## ❓ TownyNationName
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：字符串
<br/>

## ❓ TownyNationTownCount
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：整数
<br/>

## ❓ TownyTownPlotCount
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：整数
<br/>

## ❓ TownyTownResidentCountVariable
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：整数
<br/>

# [UltimateClans](https://polymart.org/resource/ultimate-clans-v5.1162)联动变量
## ❓ UltimateClansClanLevel
> [!NOTE|label:描述]
> **条件：✅ 事件：✅**
> **类型**：整数
<br/>

# [Floodgate](https://github.com/GeyserMC/Floodgate)联动变量
## ❓ FloodgateIsFloodgatePlayer
> [!NOTE|label:描述]
> **条件：✅ 事件：❌**
> **类型**：布尔值
<br/>
