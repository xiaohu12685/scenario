import { BasedCall } from '../interface/Base';
export default class NodesEvent {
    /**
     * @description: 单击
     * @param {Function} callback
     */
    onClick: BasedCall;
    /**
     * @description: 单击
     * @param {Function} callback
     */
    onDblclick: BasedCall;
    /**
     * @description: 经过
     * @param {Function} callback
     */
    onMouseover: BasedCall;
    /**
     * @description: 离开
     * @param {Function} callback
     */
    onMouseout: BasedCall;
}
