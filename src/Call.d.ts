/**
 * This class describes the information and current status of a call.
 */
export default class Call {
    constructor({ id, callId, accountId, localContact, localUri, remoteContact, remoteUri, state, stateText, held, muted, speaker, connectDuration, totalDuration, remoteOfferer, remoteAudioCount, remoteVideoCount, audioCount, videoCount, lastStatusCode, lastReason, media, provisionalMedia }: {
        id: any;
        callId: any;
        accountId: any;
        localContact: any;
        localUri: any;
        remoteContact: any;
        remoteUri: any;
        state: any;
        stateText: any;
        held: any;
        muted: any;
        speaker: any;
        connectDuration: any;
        totalDuration: any;
        remoteOfferer: any;
        remoteAudioCount: any;
        remoteVideoCount: any;
        audioCount: any;
        videoCount: any;
        lastStatusCode: any;
        lastReason: any;
        media: any;
        provisionalMedia: any;
    });
    _id: any;
    _callId: any;
    _accountId: any;
    _localContact: any;
    _localUri: any;
    _remoteContact: any;
    _remoteUri: any;
    _state: any;
    _stateText: any;
    _held: any;
    _muted: any;
    _speaker: any;
    _connectDuration: any;
    _totalDuration: any;
    _remoteOfferer: any;
    _remoteAudioCount: any;
    _remoteVideoCount: any;
    _remoteNumber: any;
    _remoteName: any;
    _audioCount: any;
    _videoCount: any;
    _lastStatusCode: any;
    _lastReason: any;
    _media: any;
    _provisionalMedia: any;
    _constructionTime: number;
    /**
     * Call identification.
     * @returns {int}
     */
    getId(): any;
    /**
     * The account ID where this call belongs.
     * @returns {int}
     */
    getAccountId(): any;
    /**
     * Dialog Call-ID string.
     *
     * @returns {String}
     */
    getCallId(): string;
    /**
     * Up-to-date call duration in seconds.
     * Use local time to calculate actual call duration.
     *
     * @public
     * @returns {int}
     */
    getTotalDuration(): any;
    /**
     * Up-to-date call connected duration (zero when call is not established)
     *
     * @returns {int}
     */
    getConnectDuration(): any;
    /**
     * Call duration in "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    getFormattedTotalDuration(): string;
    /**
     * Call duration in "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    getFormattedConnectDuration(): string;
    /**
     * Local Contact.
     * TODO: Provide example
     * @returns {String}
     */
    getLocalContact(): string;
    /**
     * Local URI.
     * TODO: Provide example
     * @returns {String}
     */
    getLocalUri(): string;
    /**
     * Remote contact.
     * TODO: Provide example
     * @returns {String}
     */
    getRemoteContact(): string;
    /**
     * Remote URI.
     * TODO: Provide example
     * @returns {String}
     */
    getRemoteUri(): string;
    /**
     * Callee name. Could be null if no name specified in URI.
     * @returns {String}
     */
    getRemoteName(): string;
    /**
     * Callee number
     * @returns {String}
     */
    getRemoteNumber(): string;
    /**
     * @returns {String}
     */
    getRemoteFormattedNumber(): string;
    /**
     * Invite session state.
     *
     * PJSIP_INV_STATE_NULL           Before INVITE is sent or received
     * PJSIP_INV_STATE_CALLING        After INVITE is sent
     * PJSIP_INV_STATE_INCOMING       After INVITE is received.
     * PJSIP_INV_STATE_EARLY          After response with To tag.
     * PJSIP_INV_STATE_CONNECTING     After 2xx is sent/received.
     * PJSIP_INV_STATE_CONFIRMED      After ACK is sent/received.
     * PJSIP_INV_STATE_DISCONNECTED   Session is terminated.
     *
     * @returns {String}
     */
    getState(): string;
    /**
     * Text describing the state.
     *
     * @returns {String}
     */
    getStateText(): string;
    isHeld(): any;
    isMuted(): any;
    isSpeaker(): any;
    isTerminated(): boolean;
    /**
     * Flag if remote was SDP offerer
     * @returns {boolean}
     */
    getRemoteOfferer(): boolean;
    /**
     * Number of audio streams offered by remote.
     * @returns {int}
     */
    getRemoteAudioCount(): any;
    /**
     * Number of video streams offered by remote.
     * @returns {int}
     */
    getRemoteVideoCount(): any;
    /**
     * Number of simultaneous active audio streams for this call. If zero - audio is disabled in this call.
     * @returns {int}
     */
    getAudioCount(): any;
    /**
     * Number of simultaneous active video streams for this call. If zero - video is disabled in this call.
     * @returns {*}
     */
    getVideoCount(): any;
    /**
     * Last status code heard, which can be used as cause code.
     * Possible values:
     * - PJSIP_SC_TRYING / 100
     * - PJSIP_SC_RINGING / 180
     * - PJSIP_SC_CALL_BEING_FORWARDED / 181
     * - PJSIP_SC_QUEUED / 182
     * - PJSIP_SC_PROGRESS / 183
     * - PJSIP_SC_OK / 200
     * - PJSIP_SC_ACCEPTED / 202
     * - PJSIP_SC_MULTIPLE_CHOICES / 300
     * - PJSIP_SC_MOVED_PERMANENTLY / 301
     * - PJSIP_SC_MOVED_TEMPORARILY / 302
     * - PJSIP_SC_USE_PROXY / 305
     * - PJSIP_SC_ALTERNATIVE_SERVICE / 380
     * - PJSIP_SC_BAD_REQUEST / 400
     * - PJSIP_SC_UNAUTHORIZED / 401
     * - PJSIP_SC_PAYMENT_REQUIRED / 402
     * - PJSIP_SC_FORBIDDEN / 403
     * - PJSIP_SC_NOT_FOUND / 404
     * - PJSIP_SC_METHOD_NOT_ALLOWED / 405
     * - PJSIP_SC_NOT_ACCEPTABLE / 406
     * - PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED / 407
     * - PJSIP_SC_REQUEST_TIMEOUT / 408
     * - PJSIP_SC_GONE / 410
     * - PJSIP_SC_REQUEST_ENTITY_TOO_LARGE / 413
     * - PJSIP_SC_REQUEST_URI_TOO_LONG / 414
     * - PJSIP_SC_UNSUPPORTED_MEDIA_TYPE / 415
     * - PJSIP_SC_UNSUPPORTED_URI_SCHEME / 416
     * - PJSIP_SC_BAD_EXTENSION / 420
     * - PJSIP_SC_EXTENSION_REQUIRED / 421
     * - PJSIP_SC_SESSION_TIMER_TOO_SMALL / 422
     * - PJSIP_SC_INTERVAL_TOO_BRIEF / 423
     * - PJSIP_SC_TEMPORARILY_UNAVAILABLE / 480
     * - PJSIP_SC_CALL_TSX_DOES_NOT_EXIST / 481
     * - PJSIP_SC_LOOP_DETECTED / 482
     * - PJSIP_SC_TOO_MANY_HOPS / 483
     * - PJSIP_SC_ADDRESS_INCOMPLETE / 484
     * - PJSIP_AC_AMBIGUOUS / 485
     * - PJSIP_SC_BUSY_HERE / 486
     * - PJSIP_SC_REQUEST_TERMINATED / 487
     * - PJSIP_SC_NOT_ACCEPTABLE_HERE / 488
     * - PJSIP_SC_BAD_EVENT / 489
     * - PJSIP_SC_REQUEST_UPDATED / 490
     * - PJSIP_SC_REQUEST_PENDING / 491
     * - PJSIP_SC_UNDECIPHERABLE / 493
     * - PJSIP_SC_INTERNAL_SERVER_ERROR / 500
     * - PJSIP_SC_NOT_IMPLEMENTED / 501
     * - PJSIP_SC_BAD_GATEWAY / 502
     * - PJSIP_SC_SERVICE_UNAVAILABLE / 503
     * - PJSIP_SC_SERVER_TIMEOUT / 504
     * - PJSIP_SC_VERSION_NOT_SUPPORTED / 505
     * - PJSIP_SC_MESSAGE_TOO_LARGE / 513
     * - PJSIP_SC_PRECONDITION_FAILURE / 580
     * - PJSIP_SC_BUSY_EVERYWHERE / 600
     * - PJSIP_SC_DECLINE / 603
     * - PJSIP_SC_DOES_NOT_EXIST_ANYWHERE / 604
     * - PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE / 606
     * - PJSIP_SC_TSX_TIMEOUT / PJSIP_SC_REQUEST_TIMEOUT
     * - PJSIP_SC_TSX_TRANSPORT_ERROR / PJSIP_SC_SERVICE_UNAVAILABLE
     *
     * @returns {string}
     */
    getLastStatusCode(): string;
    /**
     * The reason phrase describing the last status.
     *
     * @returns {string}
     */
    getLastReason(): string;
    getMedia(): any;
    getProvisionalMedia(): any;
    /**
     * Format seconds to "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    _formatTime(seconds: any): string;
}
