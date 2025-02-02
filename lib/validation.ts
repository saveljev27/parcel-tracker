export const validation = (value: string, formData: any) => {
  if (value === 'shipmentDetails' && formData.delivery === 'baltics') {
    if (formData.carrier === 'courier' && !formData.pickupAddress) {
      return 'Please provide your pickup address for courier.';
    }
    if (!formData.sendAddress) {
      return 'Please select your sending address on map';
    }
    if (!formData.shipment) {
      return 'Please select your shipment size';
    }
  }

  if (value === 'shipmentDetails' && formData.delivery === 'international') {
    if (!formData.sendAddress) {
      return 'Please provide your shipment address.';
    }
    if (formData.carrier === 'courier') {
      if (!formData.pickupAddress) {
        return 'Please provide your pickup address.';
      }
    }
  }

  if (value === 'contactDetails') {
    if (!formData.senderName) {
      return 'Please provide your name.';
    }
    if (!formData.senderPhone) {
      return 'Please provide your phone number.';
    }
    if (!formData.senderEmail) {
      return 'Please provide your email.';
    }
    if (!formData.receiverName) {
      return 'Please provide your name.';
    }
    if (!formData.receiverPhone) {
      return 'Please provide your phone number.';
    }
  }

  return '';
};
