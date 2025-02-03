'use server';

import { PrismaClient, Shipment } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const prisma = new PrismaClient();

export async function createShipment(formData: FormData): Promise<Shipment> {
  const data = Object.fromEntries(formData);

  const shipmentData: Omit<Shipment, 'id' | 'createdAt' | 'updatedAt'> = {
    cardHolder: data.cardHolder as string,
    cardNumber: data.cardNumber as string,
    carrier: data.carrier as string,
    delivery: data.delivery as string,
    pickupAddress: data.pickupAddress ? (data.pickupAddress as string) : null,
    balticCountry: data.balticCountry ? (data.balticCountry as string) : null,
    receiverName: data.receiverName as string,
    receiverPhone: data.receiverPhone as string,
    sendAddress: data.sendAddress as string,
    senderEmail: data.senderEmail as string,
    senderName: data.senderName as string,
    senderPhone: data.senderPhone as string,
    shipmentSize: data.shipmentSize as string,
    totalPrice: parseFloat(data.totalPrice as string) || 0,
  };

  let shipmentId;

  try {
    // Создаем запись в базе данных
    const shipment = await prisma.shipment.create({
      data: shipmentData,
    });
    shipmentId = shipment.id;
    console.log('Shipment successfully created');
  } catch (error) {
    console.error('Error creating shipment:', error);
    throw new Error('Failed to create shipment');
  }
  revalidatePath('/success/' + shipmentId);
  redirect('/success/' + shipmentId);
}

export async function findAllShipments() {
  try {
    const shipments = await prisma.shipment.findMany();
    return shipments;
  } catch {
    console.error('Error fetching shipments');
  }
}

export async function findShipmentById(id: string) {
  try {
    const shipment = await prisma.shipment.findUnique({ where: { id } });
    return shipment;
  } catch {
    console.error('Error fetching shipment by id');
  }
}
