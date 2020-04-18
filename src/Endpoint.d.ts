/**
 * SIP headers object, where each key is a header name and value is a header value.
 * Example:
 * {
 *   "X-Custom-Header": "Test Header Value",
 *   "X-Custom-ID": "Awesome Header"
 * }
 *
 * @typedef {Object} PjSipHdrList
 */
/**
 * An additional information to be sent with outgoing SIP message.
 * It can (optionally) be specified for example
 * with #Endpoint.makeCall(), #Endpoint.answerCall(), #Endpoint.hangupCall(),
 * #Endpoint.holdCall() and many more.
 *
 * @typedef {Object} PjSipMsgData
 * @property {String} target_uri - Indicates whether the Courage component is present.
 * @property {PjSipHdrList} hdr_list - Additional message headers as linked list.
 * @property {String} content_type - MIME type of optional message body.
 * @property {String} msg_body - MIME type of optional message body.
 */
/**
 * An additional information to be sent with outgoing SIP message.
 * It can (optionally) be specified for example
 * with #Endpoint.makeCall(), #Endpoint.answerCall(), #Endpoint.hangupCall(),
 * #Endpoint.holdCall() and many more.
 *
 * @typedef {Object} PjSipCallSetttings
 * @property {number} flag - Bitmask of #pjsua_call_flag constants.
 * @property {number} req_keyframe_method - This flag controls what methods to request keyframe are allowed on the call.
 * @property {number} aud_cnt - Number of simultaneous active audio streams for this call. Setting this to zero will disable audio in this call.
 * @property {number} vid_cnt - Number of simultaneous active video streams for this call. Setting this to zero will disable video in this call.
 */
export default class Endpoint {
    /**
     * Returns a Promise that will be resolved once PjSip module is initialized.
     * Do not call any function while library is not initialized.
     *
     * @returns {Promise}
     */
    start(configuration: any): Promise<any>;
    updateStunServers(accountId: any, stunServerList: any): Promise<any>;
    /**
     * @param configuration
     * @returns {Promise}
     */
    changeNetworkConfiguration(configuration: any): Promise<any>;
    /**
     * @param configuration
     * @returns {Promise}
     */
    changeServiceConfiguration(configuration: any): Promise<any>;
    /**
     * Add a new account. If registration is configured for this account, this function would also start the
     * SIP registration session with the SIP registrar server. This SIP registration session will be maintained
     * internally by the library, and application doesn't need to do anything to maintain the registration session.
     *
     * An example configuration:
     * {
     *   name: "John Doe",
     *   username: "100",
     *   domain: "pbx.com",
     *   password: "XXXXXX",
     *
     *   proxy: "192.168.100.1:5060", // default disabled.
     *   transport: "TCP", // default TCP
     *   regServer: "pbx.com", // default taken from domain
     *   regTimeout: 300, // default 300
     * }
     *
     * @param {Object} configuration
     * @returns {Promise}
     */
    createAccount(configuration: any): Promise<any>;
    replaceAccount(account: any, configuration: any): void;
    /**
     * Update registration or perform unregistration.
     * If registration is configured for this account, then initial SIP REGISTER will be sent when the account is added.
     * Application normally only need to call this function if it wants to manually update the registration or to unregister from the server.
     *
     * @param {Account} account
     * @param bool renew If renew argument is zero, this will start unregistration process.
     * @returns {Promise}
     */
    registerAccount(account: Account, renew?: boolean): Promise<any>;
    /**
     * Delete an account. This will unregister the account from the SIP server, if necessary, and terminate server side presence subscriptions associated with this account.
     *
     * @param {Account} account
     * @returns {Promise}
     */
    deleteAccount(account: Account): Promise<any>;
    /**
     * Make an outgoing call to the specified URI.
     * Available call settings:
     * - audioCount - Number of simultaneous active audio streams for this call. Setting this to zero will disable audio in this call.
     * - videoCount - Number of simultaneous active video streams for this call. Setting this to zero will disable video in this call.
     * -
     *
     * @param account {Account}
     * @param destination {String} Destination SIP URI.
     * @param callSettings {PjSipCallSetttings} Outgoing call settings.
     * @param msgSettings {PjSipMsgData} Outgoing call additional information to be sent with outgoing SIP message.
     */
    makeCall(account: Account, destination: string, callSettings: PjSipCallSetttings, msgData: any): Promise<any>;
    /**
     * Send response to incoming INVITE request.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    answerCall(call: Call): Promise<any>;
    /**
     * Hangup call by using method that is appropriate according to the call state.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    hangupCall(call: Call): Promise<any>;
    /**
     * Hangup call by using Decline (603) method.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    declineCall(call: Call): Promise<any>;
    /**
     * Put the specified call on hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is being put on hold.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    holdCall(call: Call): Promise<any>;
    /**
     * Release the specified call from hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is resumed.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    unholdCall(call: Call): Promise<any>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    muteCall(call: Call): Promise<any>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    unMuteCall(call: Call): Promise<any>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    useSpeaker(call: Call): Promise<any>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    useEarpiece(call: Call): Promise<any>;
    /**
     * Initiate call transfer to the specified address.
     * This function will send REFER request to instruct remote call party to initiate a new INVITE session to the specified destination/target.
     *
     * @param account {Account} Account associated with call.
     * @param call {Call} The call to be transferred.
     * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
     * @returns {Promise}
     */
    xferCall(account: Account, call: Call, destination: any): Promise<any>;
    /**
     * Initiate attended call transfer.
     * This function will send REFER request to instruct remote call party to initiate new INVITE session to the URL of destCall.
     * The party at destCall then should "replace" the call with us with the new call from the REFER recipient.
     *
     * @param call {Call} The call to be transferred.
     * @param destCall {Call} The call to be transferred.
     * @returns {Promise}
     */
    xferReplacesCall(call: Call, destCall: Call): Promise<any>;
    /**
     * Redirect (forward) specified call to destination.
     * This function will send response to INVITE to instruct remote call party to redirect incoming call to the specified destination/target.
     *
     * @param account {Account} Account associated with call.
     * @param call {Call} The call to be transferred.
     * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
     * @returns {Promise}
     */
    redirectCall(account: Account, call: Call, destination: any): Promise<any>;
    /**
     * Send DTMF digits to remote using RFC 2833 payload formats.
     *
     * @param call {Call} Call instance
     * @param digits {String} DTMF string digits to be sent as described on RFC 2833 section 3.10.
     * @returns {Promise}
     */
    dtmfCall(call: Call, digits: string): Promise<any>;
    activateAudioSession(): Promise<any>;
    deactivateAudioSession(): Promise<any>;
    changeOrientation(orientation: any): void;
    changeCodecSettings(codecSettings: any): Promise<any>;
    /**
     * @fires Endpoint#connectivity_changed
     * @private
     * @param data {Object}
     */
    _onConnectivityChanged(data: any): void;
    /**
     * @fires Endpoint#connectivity_changed
     * @private
     * @param available bool
     */
    _onConnectivityChanged(available: any): void;
    /**
     * @fires Endpoint#registration_changed
     * @private
     * @param data {Object}
     */
    _onRegistrationChanged(data: any): void;
    /**
     * @fires Endpoint#call_received
     * @private
     * @param data {Object}
     */
    _onCallReceived(data: any): void;
    /**
     * @fires Endpoint#call_changed
     * @private
     * @param data {Object}
     */
    _onCallChanged(data: any): void;
    /**
     * @fires Endpoint#call_terminated
     * @private
     * @param data {Object}
     */
    _onCallTerminated(data: any): void;
    /**
     * @fires Endpoint#call_screen_locked
     * @private
     * @param lock bool
     */
    _onCallScreenLocked(lock: any): void;
    /**
     * @fires Endpoint#message_received
     * @private
     * @param data {Object}
     */
    _onMessageReceived(data: any): void;
    /**
     * Normalize Destination URI
     *
     * @param account
     * @param destination {string}
     * @returns {string}
     * @private
     */
    _normalize(account: any, destination: string): string;
}
/**
 * SIP headers object, where each key is a header name and value is a header value.
 * Example:
 * {
 *    "X-Custom-Header": "Test Header Value",
 *    "X-Custom-ID": "Awesome Header"
 * }
 */
export type PjSipHdrList = any;
/**
 * An additional information to be sent with outgoing SIP message.
 * It can (optionally) be specified for example
 * with #Endpoint.makeCall(), #Endpoint.answerCall(), #Endpoint.hangupCall(),
 * #Endpoint.holdCall() and many more.
 */
export type PjSipMsgData = {
    /**
     * - Indicates whether the Courage component is present.
     */
    target_uri: string;
    /**
     * - Additional message headers as linked list.
     */
    hdr_list: any;
    /**
     * - MIME type of optional message body.
     */
    content_type: string;
    /**
     * - MIME type of optional message body.
     */
    msg_body: string;
};
/**
 * An additional information to be sent with outgoing SIP message.
 * It can (optionally) be specified for example
 * with #Endpoint.makeCall(), #Endpoint.answerCall(), #Endpoint.hangupCall(),
 * #Endpoint.holdCall() and many more.
 */
export type PjSipCallSetttings = {
    /**
     * - Bitmask of #pjsua_call_flag constants.
     */
    flag: number;
    /**
     * - This flag controls what methods to request keyframe are allowed on the call.
     */
    req_keyframe_method: number;
    /**
     * - Number of simultaneous active audio streams for this call. Setting this to zero will disable audio in this call.
     */
    aud_cnt: number;
    /**
     * - Number of simultaneous active video streams for this call. Setting this to zero will disable video in this call.
     */
    vid_cnt: number;
};
import Account from "./Account";
import Call from "./Call";
