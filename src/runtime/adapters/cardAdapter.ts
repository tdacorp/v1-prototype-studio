import { CardProps, componentStatus } from "@/components/card/types";

export function cardAdapter(apiProps: any): CardProps & { status: componentStatus } {
  return {
    title: apiProps.title || "",
    subtitle: apiProps.subtitle || "",
    description: apiProps.description || "",

    image: apiProps.image,
    tags: apiProps.tags || [],
    button: apiProps.button?.map((b: any) => ({
      label: b.label,
      action: b.action,
      to: b.to,
      style: b.style,
      size: b.size
    })) || [],
    author: apiProps.author,
    socialProfile: apiProps.socialProfile,

    icon: apiProps.icon,        
    user: apiProps.user,
    bookmark: apiProps.bookmark,
    badge: apiProps.badge,

    status: (apiProps.status as componentStatus) || "default"
  };
}
