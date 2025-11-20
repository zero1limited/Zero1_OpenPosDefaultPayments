define([
    'ko',
    'Magento_Checkout/js/view/payment/default'
], function (ko, Component) {
    'use strict';

    return Component.extend({
        isPlaceOrderActionAllowed: ko.observable(true),
        defaults: {
            template: 'Zero1_OpenPosDefaultPayments/payment/cash'
        },
    });
});
