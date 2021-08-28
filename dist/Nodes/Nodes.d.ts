import Event from './Event';
import { Css } from '../interface/Nodes';
import { BasedCall } from '../interface/Base';
export default class Nodes extends Event {
    constructor();
    getId: () => void;
    setId: () => void;
    /**
     * @description: 加载完成
     * @param {Function} callback
     */
    onLoad: BasedCall;
    /**
     * @description: 当前对象发生变化时：位置、大小、角度、属性、样式
     * @param {Function} callback
     */
    onchange: BasedCall;
    /**
     * @description: 卸载前
     * @param {Function} callback
     */
    willUnMount: BasedCall;
    /**
     * @description: 处理样式问题
     * @param {string} key
     * @param {string} value
     */
    css: Css;
}
