export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",

  ExpirationComplete = "expiration:complete",

  PaymentCreated = "payment:created",
  // User
  UserCreated = "user:created",
  UserActivated = "user:activated",
  UserPhoneNumberUpdated = "user:phone-number-updated",
  UserProfileUpdated = "user:profile-updated",
  UserAccountDeleted = "user:account-deleted-event",

  // Category
  CategoryDeleted = "category:deleted",
  CategoryCreated = "category:created",
  CategoryUpdated = "category:updated",
  CategoryStatusUpdated = "category:status-updated",

  IngredientCreated = "ingredient:created",
  ExtraIngredientCreated = "extra-ingredient:created",
  ModifierGroupCreated = "modifier-group:created",
  SellerCreated = "seller:created",
  KitchenCreated = "kitchen:created",
  ProductCreated = "product:created",
}
