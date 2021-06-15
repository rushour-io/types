export declare namespace Rushour {
  type OrderCourier = {
    name: string,
    phone: string
  }

  type OrderFee = {
    type: string,
    amount: number
  }

  type Customer = {
    name: string
    phone?: string,
    address?: {
      address?: string,
      instruction?: string
    }
  }

 type OrderItem = {
    id: string,
    menuItemId?: string,
    name: string,
    quantity: number,
    price: number,
    instructions: string,
    modifiers?: Array<OrderItem>
  }


   type Order = {
    id: string
    externalId: string
    displayId: number
    status: string
    type: string
    customer: Customer

    actions: Array<string>,
    items: Array<OrderItem>,
    couriers: Array<OrderCourier>,
    fees: Array<OrderFee>,

    total: number,
    instructions: string,
    prepareBy: string,
    orderedAt: string,
    acceptedAt: Date,
    readiedAt: Date,
    pickedUpAt: Date,
    completedAt: Date
  }
}
