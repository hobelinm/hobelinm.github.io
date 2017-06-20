/**
 * This class depicts a key value pair
 */
export interface KeyValuePair {
    [Key : string] : string;
}

export interface EKeyValuePair<T> {
    [key : string] : T;
}
