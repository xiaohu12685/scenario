/*
 * @Author: tiger.wang
 * @Date: 2021-08-10 17:43:01
 * @LastEditors: your name
 * @LastEditTime: 2021-08-29 02:08:17
 * @Description: In User Settings Edit
 */
import { BasedCall } from './interface/Base';
import { Option } from './interface/Scenario';

/**
 * 生命周期创建
 *  创建前 willCreate
 *  创建后 didCreate
 * 
 *  挂在前 willMount
 *  挂在后 didMount
 * 
 *  更新前 willUpdate
 *  更新后 didUpdate
 * 
 *  卸载前 willUnMount
 *  卸载后 didUnMount
 */
export default class Scenario {
    constructor(option: Option) {
        this.willCreate();

        this.didCreate();
    }

    /**
     * @description: 创建前
     * @param {Function} callback
     */
    public willCreate: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 创建后
     * @param {Function} callback
     */
    public didCreate: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 挂在前
     * @param {Function} callback
     */
    public willMount: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 挂在后
     * @param {Function} callback
     */
    public didMount: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 更新前
     * @param {Function} callback
     */
    public willUpdate: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 更新后
     * @param {Function} callback
     */
    public didUpdate: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 卸载前
     * @param {Function} callback
     */
    public willUnMount: BasedCall = (callback) => {
        callback && callback();
    }

    /**
     * @description: 卸载后
     * @param {Function} callback
     */
    public didUnMount: BasedCall = (callback) => {
        callback && callback();
    }
}