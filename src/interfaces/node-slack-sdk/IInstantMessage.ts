export interface IInstantMessage {
    id: string;
    created: number;
    is_im: boolean;
    is_org_shared: boolean;
    user: string;
    has_pins: boolean;
    last_read: string;
    is_open: boolean;
}
