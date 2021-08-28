/*
 * @Author: tiger.wang
 * @Date: 2021-08-11 14:41:29
 * @LastEditors: your name
 * @LastEditTime: 2021-08-25 17:45:39
 * @Description: In User Settings Edit
 */
import { BasedCall } from '../interface/Base';

export default class NodesEvent {
    /**
     * @description: 单击
     * @param {Function} callback
     */
    onClick: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 单击
     * @param {Function} callback
     */
    onDblclick: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 经过
     * @param {Function} callback
     */
    onMouseover: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 离开
     * @param {Function} callback
     */
    onMouseout: BasedCall = (callback) => {
        callback && callback();
    }
}