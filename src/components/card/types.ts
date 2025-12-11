export type CardVariant =
  | "image-top"
  | "bg-image"
  | "user-profile"
  | "icon-info"
  | "social-profile"
  | "article-card";

export interface CardImage {
  src: string;
  alt?: string;
}

export interface CardCTA {
  label: string;
  to?: string;
  style?: "default" | "secondary" | "destructive" | "outline";
}

export type componentStatus = "default" | "active" | "disabled";

export interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;

  image?: CardImage;
  // backgroundImage?: CardImage;

  tags?: string[];
  badge?: string[];

  button?: CardCTA[];

  user?: {
    avatar: string;
    name: string;
    position?: string;
    followers: string;
    following: string;
  };

  socialProfile?: {
    avatar: string;
    name: string;
    username: string;
    title: string;
    description: string;
  };

  author?: {
    avatar: string;
    name: string;
    date: string;
  };

  icon?: {
    src: string;
    alt?: string;
    size?: "small" | "medium" | "large";
  };

  bookmark?: boolean;
}

export interface CardSchema {
  id: string;
  type: "card";

  variant: CardVariant;

  props: CardProps;
  status?: componentStatus;
  style?: {
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    shadow?: string;
  };

  config?: {
    layout?: "standard" | "flex" | "grid";
    orientation?: "vertical" | "horizontal";
  };

  meta?: Record<string, any>;
}
