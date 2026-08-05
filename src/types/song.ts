export interface Song {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items : {
        added_at: string;
        added_by: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
        };
        is_local: boolean;
        item: {
            trackObject: {
                album: {
                    album_type: string;
                    total_tracks: number;
                    available_markets: string[];
                    external_urls: {
                        spotify: string;
                    };
                    href: string;
                    id: string;
                    images: {
                        url: string;
                        height: number;
                        width: number;
                    };
                    name: string;
                    release_date: string;
                    release_date_precision: string;
                    restrictions?: {
                        reason: string;
                    };
                    type: string;
                    uri: string;
                    artists: {
                        external_urls: {
                            spotify: string;
                        };
                        href: string;
                        id: string;
                        type: string;
                        uri: string;
                    };
                };
                artists: {
                    external_urls: {
                        spotify: string;
                    };
                    href: string;
                    id: string;
                    type: string;
                    uri: string;
                };
                disc_number: number;
                duration_ms: number;
                explicit: boolean;
                external_ids: {
                    isrc: string;
                    ean: string;
                    upc: string;
                };
                external_urls: {
                    spotify: string;
                };
                href: string;
                id: string;
                is_playable: boolean;
                restrictions?: {
                    reason: string;
                };
                name: string;
                popularity: number;
                track_number: number;
                type: string;
                uri: string;
                is_local: boolean;
            };
            
        };
    };
}