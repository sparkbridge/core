import { Adapter } from ".";

export class Send {
    type: string;
}

export class at extends Send {
    type: 'at';
    qq: number
}

export class img extends Send {
    type: 'img';
    url:string
}

export class text extends Send{
    type:'text';
    text:string;
}

export class face extends Send{
    type:'face';
    id:number;
}

export class Sender {
    /**
     * 年龄
     */
    age: number;
    /**
     * 地区
     */
    area: string;
    /**
     * 群名片
     */
    card: string;
    /**
     * 等级
     */
    level: string;
    /**
     * 昵称
     */
    nickname: string;
    /**
     * 群地位
     */
    role: string;
    /**
     * 性别
     */
    sex:string;
    /**
     * 称号
     */
    title: string;
    /**
     * qq号
     */
    user_id: number;
}

export class GroupJoinEvent {
    constructor(_adapter: Adapter, type: string, e: any);
    sub_type : string;
    /**
     * 群号
     */
    group: number;
    /**
     * 变动成员
     */
    user:number;
    /**
     * 操作人
     */
    operator:number;
}

export class GroupLeftEvent {
    constructor(_adapter: Adapter, type: string, e: any);
    sub_type : string;
    /**
     * 群号
     */
    group: number;
    /**
     * 变动成员
     */
    user:number;
    /**
     * 操作人
     */
    operator:number;
}

export class GroupMessageEvent {
    constructor(_adapter: Adapter, type: string, e: any);
    /**
     * 群号
     */
    group: number;
    /**
     * 回复发信人
     * @param msg 发送的消息
     */
    reply(msg: Send | string): void;
    /**
     * 格式化的消息
     */
    raw_message: string;
    message: Send[];
    sender : Sender;
}

export class FriendMessageEvent {
    constructor(_adapter: Adapter, type: string, e: any);
    /**
     * 回复发信人
     * @param msg 发送的消息
     */
    reply(msg: Send | string): void;
    /**
     * 格式化的消息
     */
    raw_message: string;
    message: Send[];
    sender : Sender;
}