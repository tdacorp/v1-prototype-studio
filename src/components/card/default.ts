// import { CardSchema } from "./type"

// import { CardSchema } from "@/types/type";

export const imagetop = {
    "id": "card-1",
    "type": "Card",
    variant: {
        value: "image-top",
        default: "image-top",
        variant: ["image-top"],
    },
    "status": {
        "value": "published",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "title": "Empowering Digital Solutions",
        "subtitle": "Building the future of web development services that help businesses go online with speed and scalability",
        "description": "We provide modern web development services that help businesses go online with speed and scalability.",
        "image": {
            "src": "/topimage.jpeg",
            "alt": "Developer working on modern web solutions",
            aspectRatio: "16:9",
            position: {
                vertical: {
                    value: "top",
                    default: "top",
                    enum: ["top", "center", "bottom"],
                },
                horizontal: {
                    value: "center",
                    default: "center",
                    enum: ["left", "center", "right"],
                },
            },
        },
        tags: ["web", "react", "nextjs"],
        "button": {
            "label": "Learn More",
            "action": "navigate",
            "to": "/about"
        }
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "outlined",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderRadius": "12px",
        "shadow": "medium",
        "padding": "16px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-15T09:45:00Z",
        "author": {
            "id": "author-001"
        }
    }
}
export const bgimgage = {

    "id": "card-5",
    "type": "Card",
    variant: {
        value: "bg-image",
        default: "bg-image",
        variant: ["bg-image"],
    },
    "status": {
        "value": "published",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "title": "Empowering AI and Artificial Intelligence",
        "subtitle": "We help businesses grow faster using AI-driven solutions and automation.",
        "backgroundImage": {
            "src": "https://m.media-amazon.com/images/I/815K8DgRN3L._AC_UF1000,1000_QL80_.jpg",
            "alt": "AI technology concept image"
        },
        "tags": [
            "AI",
            "ML",
            "LLM"
        ],
        button: {
            label: "Discover AI",
            action: "navigate",
            to: "/about",
            style: "primary",
            size: "large",
        },
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "glass",
        "backgroundColor": "#222A",
        "textColor": "#ffffff",
        "borderRadius": "12px",
        "shadow": "large",
        "padding": "20px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:05:00Z",
        "updatedAt": "2025-10-10T12:32:00Z",
        "lastModified": "2025-10-15T09:48:00Z",
        "author": {
            "id": "author-001"
        }
    }
}
export const userprofile = {
    id: "card-9",
    type: "Card",
    variant: {
        value: "user-profile",
        default: "user-profile",
        variant: ["user-profile"],
    },
    status: {
        value: "published",
        default: "draft",
        enum: ["published", "draft"],
    },
    props: {
        title: "Data Scientist Profile",
        user: {
            avatar: "/user.jpg",
            name: "Johep Waillim",
            position: "Data Scientist",
            followers: "1.5M",
            following: "92",
        },
        description: "Intern at the Falaa company.",
        button: {
            label: "follow",
            action: "navigate",
            to: "/about",
            style: "primary",
            size: "large",
        },
        secondaryButton: {
            label: "message",
            action: "navigate",
            to: "/about",
            style: "primary",
            size: "large",
        },
    },
    config: {
        layout: "standard",
        orientation: "vertical",
        responsive: true,
        clickable: true,
    },
    style: {
        variant: "outlined",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        borderRadius: "12px",
        shadow: "medium",
        padding: "16px",
        hoverEffect: "lift",
    },
    meta: {
        createdAt: "2025-10-10T11:00:00Z",
        updatedAt: "2025-10-10T12:30:00Z",
        lastModified: "2025-10-15T09:45:00Z",
        author: {
            id: "author-001",
        },
    },
};


export const iconinfo = {
    "id": "card-15",
    "type": "Card",
    variant: {
        value: "icon-info",
        default: "icon-info",
        variant: ["icon-info"],
    },
    "status": {
        "value": "published",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "icon": {
            "src": "/home.svg",
            "alt": "Live logs icon",
            "size": "large"
        },
        "title": "Live logs",
        "subtitle": "See your workflow run in realtime with color and emoji. It's one click to copy a link that highlights a specific line number to share a CI/CD failure.",
        "description": "Linux, macOS, Windows, ARM, GPU, and containers make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners.",
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "outlined",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderRadius": "12px",
        "shadow": "medium",
        "padding": "16px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-15T09:45:00Z",
        "author": {
            "id": "author-001"
        }
    }
}

export const socialProfile = {

    "id": "card-17",
    "type": "Card",
    variant: {
        value: "social-profile",
        default: "social-profile",
        variant: ["social-profile"],
    },
    "status": {
        "value": "published",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "title": "this title",
        "socialProfile": {
            "avatar": "/avater.svg",
            "name": "Jerome Bell",
            "username": "whitefish664",
            "title": "Constructive and destructive waves",
            "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        button: {
            label: "follow",
            action: "navigate",
            to: "/about",
            style: "primary",
            size: "large",
        },
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "outlined",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderRadius": "12px",
        "shadow": "medium",
        "padding": "16px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-15T09:45:00Z",
        "author": {
            "id": "author-001"
        }
    }
}


export const articlecard = {

    "id": "card-18",
    "type": "Card",
    variant: {
        value: "article-card",
        default: "article-card",
        variant: ["article-card"],
    },
    "status": {
        "value": "published",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "image": {
            "src": "/articlalcard.jpeg",
            "alt": "Spider-Man: Across the Spider-Verse",
            "aspectRatio": "16:9"
        },
        "badge": ["Sony", "Miles Morales"],
        "title": "Spider-Man: Across the Spider-Verse",
        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...",
        "author": {
            "avatar": "/avater.svg",
            "name": "Sainath Reddy",
            "date": "July 6 2023"
        },
        "bookmark": true
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "outlined",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderRadius": "12px",
        "shadow": "medium",
        "padding": "16px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-15T09:45:00Z",
        "author": {
            "id": "author-001"
        }
    }
}