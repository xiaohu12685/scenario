import { BasedCall } from './interface/Base';
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
    constructor(option: {});
    /**
     * @description: 创建前
     * @param {Function} callback
     */
    willCreate: BasedCall;
    /**
     * @description: 创建后
     * @param {Function} callback
     */
    didCreate: BasedCall;
    /**
     * @description: 挂在前
     * @param {Function} callback
     */
    willMount: BasedCall;
    /**
     * @description: 挂在后
     * @param {Function} callback
     */
    didMount: BasedCall;
    /**
     * @description: 更新前
     * @param {Function} callback
     */
    willUpdate: BasedCall;
    /**
     * @description: 更新后
     * @param {Function} callback
     */
    didUpdate: BasedCall;
    /**
     * @description: 卸载前
     * @param {Function} callback
     */
    willUnMount: BasedCall;
    /**
     * @description: 卸载后
     * @param {Function} callback
     */
    didUnMount: BasedCall;
}
