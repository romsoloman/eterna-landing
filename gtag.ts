type AnalyticsEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export const event = ({
  action,
  category,
  label,
  value
}: AnalyticsEvent): void => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}
