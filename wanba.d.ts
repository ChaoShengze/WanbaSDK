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
export function addDeskIcon(callback: Function, that: any): void;
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
 */
export function share(title: string, desc: string, imgUrl: string, callback: Function): void;
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