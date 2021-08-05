export declare namespace Rushour {

  type Courier = {
    name: string,
    phone: string
  }

  type Fee = {
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

  enum paymentMethod {
    cash = 'cash',
    mealVoucher = 'meal_voucher',
    voucher = 'voucher',
    card = 'card'
  }

  enum actions {
    accept = 'accept',
    complete = 'complete',
    delivery = 'delivery'
  }

  type Order = {
    id: string
    externalId: string
    displayId: string
    status: string
    type: string
    paymentMethod?: paymentMethod,
    isPaid?: boolean,
    cutleryRequested: boolean,
    customer: Customer

    actions: Array<string>,
    items: Array<OrderItem>,
    couriers: Array<Courier>,
    fees: Array<Fee>,

    total: number,
    instructions: string,
    prepareBy?: string,
    orderedAt: string, // isostring date
    acceptedAt?: string, // isostring date
    readiedAt?: string, // isostring date
    pickedUpAt?: string, // isostring date
    completedAt?: string // isostring date
  }


  type MenuModifiers = {
    [modifierId: string]: {
      id: string
      externalId: string
      name: string
      minSelection: number
      maxSelection: number
      items: string[]
    }
  }

  enum dayOfWeek {
    sun, mon, tue, wed, thu, fri, sat
  }

  type Shifts = {
    [day in dayOfWeek]: [{
      startTime: string
      endTime: string
    }]
  }

  type MenuCategory = {
    id: string
    externalId: string
    name: string
    description: string
    items: string[]
  }

  type MenuCategories = {
    [categoryId: string]: MenuCategory
  }

  type MenuItems = {
    [itemId: string]: {
      id: string
      externalId: string
      name: string
      meta?: any,
      description?: string
      image: {
        url: string
      }
      price: {
        default: number
        modifiers?: {
          [modifierId: string]: number
        }
      }
      isAlcohol?: boolean
      vat: number
      suspendUntil?: string | boolean
      modifiers?: string[]
    }
  }

  type MenusShifts = {
    [menuId: string]: {
      id: string
      externalId: string
      name: string
      description: string
      categories: string[]
      shifts?: Shifts
    }
  }

  type Menu = {
    categories: MenuCategories,
    items: MenuItems,
    modifiers: MenuModifiers,
    menus: MenusShifts
  }
}
