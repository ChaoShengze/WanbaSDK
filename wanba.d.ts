/**
 * Wanba SDK
 * @author ChaoShengze
 */
export as namespace wanba;

/**
 * 登录接口
 * @param loginInfo 登录信息，传入一个Object，这个Object将被赋值
 * @param callback 登录回调，会传入一个布尔值表示是否登录成功
 */
export function login(loginInfo: any, callback: Function): void;
/**
 * 添加桌面图标，请注意，iOS系统下没有回调
 * @param titleText 图标显示文本
 * @param success 添加成功回调（iOS系统无），默认传入一个对象参数，该对象的result值：0=>创建桌面快捷方式成功，-1=>url字段为空，-2=>终端拿到的json格式解析出错，
-3=>icon字段下载到的数据为空，或者下载到的不是图片数据
 */
export function addDeskIcon(titleText: string, success: Function): void;
/**
 * 设置玩吧菜单中分享功能的内容和回调
 * @param title 标题
 * @param desc 文本内容
 * @param imgUrl 图片地址
 * @param callback 回调函数
 */
export function setShareHandle(title: string, desc: string, imgUrl: string, callback: Function): void;
/**
 * 玩吧分享接口
 * @param title 标题
 * @param desc 文本内容
 * @param imgUrl 图片地址
 * @param callback 回调函数
 * @param customShareUrl (可选)自定义的分享url，不设置将使用系统默认的url
 */
export function share(title: string, desc: string, imgUrl: string, callback: Function, customShareUrl?: string): void;
/**
 * 设置支付成功的回调
 * @param success 成功时回调
 */
export function setPaySuccessCallback(success: Function): void;
/**
 * 设置支付失败的回调
 * @param error 失败时回调
 */
export function setPayErrorCallback(error: Function): void;
/**
 * 设置支付取消时的回调（仅对安卓有效）
 * @param close 关闭时回调
 */
export function setPayCloseCallback(close: Function): void;
/**
 * 玩吧支付接口
 * @param appid 游戏的Appid
 * @param price 支付的价格
 */
export function pay(appid: number, price: number): void;
/**
 * 设置剪贴板内容
 * @param text 文本内容
 * @param successCallback 复制成功回调
 * @param failCallback 复制失败回调
 */
export function setClipboard(text: string, successCallback: Function, failCallback: Function): void;
/**
 * 调用Wanba接口显示信息
 * @param tipText 信息文本
 * @param iconType 图标类型，默认为2，1：勾选图标，2：空心警告图标
 */
export function showTips(tipText: string, iconType?: number);