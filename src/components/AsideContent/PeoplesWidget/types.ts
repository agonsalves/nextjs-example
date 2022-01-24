interface PositionData {
    id: number;
    term: string;
}

export interface PeopleData {
    alternate_title?: string;
    email: string;
    id: number;
    phone: string;
    position: PositionData[];
    post_name: string;
    post_title: string;
    post_type: string;
    slug: string;
    thumbnail_teaser?: {
        height?: string;
        width?: string;
        url: string;
    };
}