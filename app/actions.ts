'use server';

import { PrismaClient } from '@prisma/client';

export async function createShipment(formData: FormData) {
  const prisma = new PrismaClient();

  // Преобразуем FormData в обычный объект
  const data = Object.fromEntries(formData);
  console.log(data); // Логируем данные для проверки

  // Обрабатываем данные и приводим к нужным типам
  const shipmentData: any = {
    cardHolder: data.cardHolder,
    cardNumber: data.cardNumber,
    carrier: data.carrier,
    delivery: data.delivery,
    pickupAddress: data.pickupAddress
      ? (data.pickupAddress as string)
      : undefined,
    balticscountries: data.balticscountries,
    receiverName: data.receiverName,
    receiverPhone: data.receiverPhone,
    sendAddress: data.sendAddress,
    senderEmail: data.senderEmail,
    senderName: data.senderName,
    senderPhone: data.senderPhone,
    shipmentSize: data.shipmentSize,
    totalPrice: parseFloat(data.totalPrice as string),
  };

  try {
    // Создаем запись в базе данных
    await prisma.shipment.create({
      data: shipmentData,
    });
    console.log('Shipment successfully created');
  } catch (error) {
    console.error('Error creating shipment:', error);
    throw new Error('Failed to create shipment');
  }
}
