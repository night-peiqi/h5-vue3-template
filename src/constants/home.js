/**
 * @description 日期操作类型
 */
export const DATE_OPERATE_TYPE = {
	ADD: 'add', // 加
	MINUS: 'minus' // 减
}

/**
 * tab Key map
 */
export const TAB_KEY_MAP = {
	TAB1: '1',
	TAB2: '2',
	TAB3: '3'
}
/**
 * tab 列表
 */
export const TAB_LIST = [
	{
		key: TAB_KEY_MAP.TAB1,
		name: '板块动向'
	},
	{
		key: TAB_KEY_MAP.TAB2,
		name: '个股梯队'
	},
	{
		key: TAB_KEY_MAP.TAB3,
		name: '龙虎榜'
	}
]

// 排序字段
export const SORT_TYPE = {
	ASC: 'asc', // 升序，从小到大
	DESC: 'desc' // 降序，从大到小
}

/**
 * 交易类型
 */
export const TRADE_TYPE = {
	BUY: 1, // 买入
	SELL: 2 // 卖出
}

/**
 * 股票走势
 */
export const STOCK_TREND = {
	UP: 1, // 上涨
	DOWN: 2 // 下跌
}
