interface CurrentOpeningsPositionCategory {
    id: number;
    term: string;
}

interface OfficeLocation {
    id: number;
    post_name: string;
    post_title: string;
    post_type: string;
    slug: string;
}

export interface JobOportunitiesData {
    current_openings_position_category: CurrentOpeningsPositionCategory[];
    full_content: string;
    full_content_continued: string;
    id: number;
    office_locations: OfficeLocation[];
    post_name: string;
    post_title: string;
    post_type: string;
    slug: string;
    url: string;
    visible: boolean;
}