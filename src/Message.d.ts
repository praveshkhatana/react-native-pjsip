/**
 * This class describes the information and current status of a call.
 */
export default class Message {
    constructor({ accountId, contactUri, fromUri, toUri, body, contentType }: {
        accountId: any;
        contactUri: any;
        fromUri: any;
        toUri: any;
        body: any;
        contentType: any;
    });
    _accountId: any;
    _contactUri: any;
    _fromUri: any;
    _fromName: any;
    _fromNumber: any;
    _toUri: any;
    _body: any;
    _contentType: any;
    /**
     * The account ID where this message belongs.
     * @returns {int}
     */
    getAccountId(): any;
    /**
     * The Contact URI of the sender, if present.
     * @returns {String}
     */
    getContactUri(): string;
    /**
     * URI of the sender.
     * @returns {String}
     */
    getFromUri(): string;
    /**
     * Sender name, or NULL if no name specified in URI.
     * @returns {String}
     */
    getFromName(): string;
    /**
     * Sender number
     * @returns {String}
     */
    getFromNumber(): string;
    /**
     * URI of the destination message.
     * @returns {String}
     */
    getToUri(): string;
    /**
     * Message body, or NULL if no message body is attached to this mesage.
     * @returns {String}
     */
    getBody(): string;
    /**
     * MIME type of the message.
     * @returns {String}
     */
    getContentType(): string;
}
