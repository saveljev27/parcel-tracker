export const totalPrice = (formData: any) => {
  return formData.courier
    ? formData.selectedShipment.price + 10
    : formData.selectedShipment.price;
};
