/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
    constructor({ status, statusText, active, reason }: {
        status: any;
        statusText: any;
        active: any;
        reason: any;
    });
    _status: any;
    _statusText: any;
    _active: any;
    _reason: any;
    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered. Any other value indicates the SIP
     * status code of the registration.
     *
     * @returns {string|null}
     */
    getStatus(): string;
    /**
     * String describing the registration status.
     *
     * @returns {string|null}
     */
    getStatusText(): string;
    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * @returns boolean
     */
    isActive(): any;
    /**
     * Reason phrase received.
     *
     * @returns {String|null}
     */
    getReason(): string;
    toJson(): {
        status: any;
        statusText: any;
        active: any;
        reason: any;
    };
}
