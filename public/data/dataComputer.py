from email import charset
import pandas as pd

data = pd.read_excel('./T3每日用电统计表.xlsx', header=1, sheet_name=None)  # 引入T3电力数据
data = pd.concat(data)  # 合并所有月份的数据到一张表

# 数据去重
data.drop_duplicates(keep='first', inplace=True)
# 清除空数据
data.dropna(how='any', inplace=True)
# 去除层级索引然后去除前两列
data.reset_index(inplace=True)
data.drop(data.columns[0:2], axis=1, inplace=True)
# 删除前两列的数据
result = data.set_index('日期')

# 获取数据的列名
arr = result.columns
# 循环打印数组双数列名
for i, item in enumerate(arr):
    if(i % 2 != 0):
        print(item)

# 导出为Excel
# result.to_excel('./t3.xlsx')
result.to_json('./t3_electric.json', orient='index', force_ascii=False)
# 数据导出为json
print(result)
