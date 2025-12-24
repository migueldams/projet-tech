import type { ReactNode } from "react";

export interface serviceType {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    content: string[];
}

export interface parteernType {
    id: number;
    imageUrl: () => ReactNode;
    title: string;
    description: string;
}

export interface galleryType {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
}

export interface aboutType {
    id: number;
    title: string;
    description: string;
}

export interface blogType {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    date: string;
    path: string;
}

export interface askType {
    id: number;
    question: string;
    answer: string;
}

