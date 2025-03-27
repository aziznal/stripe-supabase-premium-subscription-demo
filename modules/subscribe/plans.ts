export enum SubscriptionTier {
  Basic = "basic",
  Standard = "standard",
  Premium = "premium",
}

export function getSubscriptionTiers(): [SubscriptionTier] {
  return Object.values(SubscriptionTier) as [SubscriptionTier];
}
