interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        url: string;
        _type: 'reference';
    }
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address?: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: 'skills';
    title: string;
    progress: number;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: 'skills';
    title: string;
    progress: number;
    image: Image;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    linkToBuild: string;
    summary: string;
    image: Image;
    technologies: Technology[]
}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: Image;
    dateEnded: string;
    dateStarted: string;
    jobTitle: string;
    points: string[];
    socials: Social[];
    isCrrentlyWorkingHere?: boolean;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}