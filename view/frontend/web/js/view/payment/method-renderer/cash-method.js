define([
    'ko',
    'Magento_Checkout/js/view/payment/default',
    'Magento_Checkout/js/model/quote',
    'Magento_Catalog/js/price-utils'
], function (ko, Component, quote, priceUtils) {
    'use strict';

    return Component.extend({
        isPlaceOrderActionAllowed: ko.observable(true),
        defaults: {
            template: 'Zero1_OpenPosDefaultPayments/payment/cash',
            cashTendered: null
        },

        initObservable: function () {
            this._super()
                .observe(['cashTendered']);
            return this;
        },

        /**
         * Format and calculate the change amount
         */
        getChangeAmount: function() {
            var tendered = parseFloat(this.cashTendered());
            var total = quote.totals().grand_total;

            if (isNaN(tendered)) {
                return priceUtils.formatPrice(0, quote.getPriceFormat());
            }

            var change = tendered - total;
            return priceUtils.formatPrice(change, quote.getPriceFormat());
        },

        /**
         * Send data to the backend
         */
        getData: function () {
            return {
                'method': this.item.method,
                'additional_data': {
                    'cash_tendered': this.cashTendered()
                }
            };
        }
    });
});