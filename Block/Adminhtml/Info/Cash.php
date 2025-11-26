<?php
declare(strict_types=1);

namespace Zero1\OpenPosDefaultPayments\Block\Adminhtml\Info;

class Cash extends \Magento\Payment\Block\Info
{
    /**
     * @var string
     */
    protected $_template = 'Zero1_OpenPosDefaultPayments::info/cash.phtml';
}
