/**
 * Interface for Decoded JWT tokens.
 */
export interface DecodedJwt {
    header: string;
    JWSPayload: string;
    JWSSig: string;
}