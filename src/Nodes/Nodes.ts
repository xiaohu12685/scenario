/*
 * @Author: tiger.wang
 * @Date: 2021-08-11 14:37:13
 * @LastEditors: your name
 * @LastEditTime: 2021-08-26 10:06:05
 * @Description: In User Settings Edit
 */
import Event from './Event';
import { Css } from '../interface/Nodes';
import { BasedCall } from '../interface/Base';

export default class Nodes extends Event {
    // /**
    //  * @description: 唯一id
    //  */
    // id: '';
    // /**
    //  * @description: 类名
    //  */
    // class: '';
    constructor() {
        super();

    }

    getId = () => {

    }

    setId = () => {

    }

    /**
     * @description: 加载完成
     * @param {Function} callback
     */
    onLoad: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 当前对象发生变化时：位置、大小、角度、属性、样式
     * @param {Function} callback
     */
    onchange: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 卸载前
     * @param {Function} callback
     */
    willUnMount: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 处理样式问题
     * @param {string} key
     * @param {string} value
     */
    css: Css = (key, value) => {
        if (!(this as any)[key]) (this as any)[key](value);
    }
}