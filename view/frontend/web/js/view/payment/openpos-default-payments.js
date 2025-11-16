define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
], function (Component, rendererList) {
    'use strict';

    rendererList.push(
        {
            type: 'openpos_pay_card',
            component: 'Zero1_OpenPosDefaultPayments/js/view/payment/method-renderer/card-method'
        },
    );

    return Component.extend({});
});
