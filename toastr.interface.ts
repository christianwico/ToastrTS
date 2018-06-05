interface IToastr {
    /**
     * Toastr options.
     */
    options: IToastrOptions;

    /**
     * Display a Warning-style _(orange)_ toastr message.
     * @param message The toast `message`.
     * @param title The toast `title`.
     * @param options Toastr `options`.
     */
    warning(message: string, title?: string, options?: IToastrOptions);

    /**
     * Display an Error-style _(red)_ toastr message.
     * @param message The toast `message`.
     * @param title The toast `title`.
     * @param options Toastr `options`.
     */
    error(message: string, title?: string, options?: IToastrOptions);

    /**
     * Display a Success-style _(green)_ toastr message.
     * @param message The toast `message`.
     * @param title The toast `title`.
     * @param options Toastr `options`.
     */
    success(message: string, title?: string, options?: IToastrOptions);

    /**
     * Display an Info-style _(blue)_ toastr message.
     * @param message The toast `message`.
     * @param title The toast `title`.
     * @param options Toastr `options`.
     */
    info(message: string, title?: string, options?: IToastrOptions);

    /**
     * Immediately remove current toasts without using animation
     */
    remove();

    /**
     * Remove current toasts using animation
     */
    clear();
}

interface IToastrOptions {
    /**
     * Enable/Disable the escape of HTML characters in title and message.
     */
    escapeHtml?: boolean;

    /**
     * Enable/Disable a close button.
     */
    closeButton?: boolean;

    /**
     * Override the close button's HTML.
     */
    closeHtml?: string;

    /**
     * CLOSE ANIMATION
     */
    closeMethod?: string;

    /**
     * Set the close animation duration in **ms**. _Default is **300**._
     */
    closeDuration?: number;

    /**
     * Set the easing applied to the close animation. _Default is `swing`._
     */
    closeEasing?: string;

    /**
     * Set the easing applied to the hide animation. _Default is `swing`._
     */
    hideEasing?: string;

    /**
     * Set the easing applied to the show animation. _Default is `swing`._
     */
    showEasing?: string;

    /**
     * Show the newest toast at the top.
     */
    newestOnTop?: boolean;

    /**
     * Set whether or not to prevent duplicate toasts.
     */
    preventDuplicates?: boolean;

    /**
     * Set how long the toast will display without user interaction.
     */
    timeOut?: number;

    /**
     * Set how long the toast will display after a user hovers on it.
     */
    extendedTimeOut?: number;

    /**
     * Set whether or not to show a progress bar to indicate expiration.
     */
    progressBar?: boolean;

    /**
     * Set whether or not to use RTL format for supported languages.
     */
    rtl?: boolean;

    /**
     * Callback when a toast is shown.
     */
    onShown?();

    /**
     * Callback when a toast is hidden.
     */
    onHidden?();

    /**
     * Callback when a toast is clicked.
     */
    onClick?();

    /**
     * Callback when a toast's close button is clicked.
     */
    onCloseClick?();
}
