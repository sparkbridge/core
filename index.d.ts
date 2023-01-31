import { FriendMessageEvent, GroupJoinEvent, GroupLeftEvent, GroupMessageEvent } from "./msgBuilder";

interface EventMap<T = any> {
    "bot.online":()=>void;
    "bot.message.group":(e:GroupMessageEvent)=>void;
    "bot.message.private":(e:FriendMessageEvent)=>void;
    "bot.notice.group.increase":(e:GroupJoinEvent)=>void;
    "bot.notice.group.decrease":(e:GroupLeftEvent)=>void;
}


class Adapter{
    type:string;
    qq:number;
    platform:string;
    log_level:string;
    target:string;
    /**
     * 
     * @param type 适配器种类，可选oicq/gocq
     * @param qq QQ号
     * @param platform 平台协议 1：手机，2：平板，3：手表 
     * @param log_level 日志等级，仅对oicq客户端生效
     * @param target go-cqhttp远程地址，在oicq模式下被忽略
     */
    constructor(type:string,qq:number,platform:string,log_level:string,target:string);
    /**
     * 创建一个客户端，使用此方法来验证适配器是否有效
     */
    createClient():void;
    /**
     * 进行登录，如果是在gocq模式下，将会对远程地址进行连接
     * @param pwd 密码，如果是在oicq情况下，使用密码为`null`进行登录则会进行扫码登录，在gocq模式下，密码是正向连接时的`access-token`
     */
    login(pwd:string?):void;
    on<T extends keyof EventMap>(event: T, listener: EventMap<this>[T]): void;
    once<T extends keyof EventMap>(event: T, listener: EventMap<this>[T]): void;
    off<T extends keyof EventMap>(event: T, listener: EventMap<this>[T]): this;
    sendGroupMsg(gid:number,msg:string | Array):void;
    sendFriendMsg(fid:number,msg:string | Array):void;
}


export {Adapter}