;;; A simple Emacs Lisp TCP echo client.

;; A global variable to store the process object for the network connection.
(defvar echo-client-process nil
  "The network process object for the echo client.")

(defvar echo-client-buffer-name "*echo-client*"
  "The name of the buffer for the client's interaction.")

(defun echo-client-filter (process string)
  "Filter function to handle incoming data from the echo server.
Appends the server's response (STRING) to the client's buffer."
  (with-current-buffer (process-buffer process)
    (goto-char (point-max))
    (insert "Server: " string))
  (message "Received from server: %s" string))

(defun echo-client-sentinel (process event)
  "Sentinel function to notify the user of process status changes.
Reports connection status events to the user, like success or termination."
  (message "Echo client status: %s" event)
  (unless (process-live-p process)
    (kill-buffer (process-buffer process))
    (setq echo-client-process nil)))

(defun echo-client-connect (host port)
  "Connects to a TCP echo server at HOST and PORT.
This function creates a new buffer for the client interaction."
  (interactive
   (list
    (read-string "Connect to host: " "localhost")
    (read-string "Connect to port: " "9000")))
  (when echo-client-process
    (error "Already connected. Please disconnect first."))
  (let ((client-buffer (get-buffer-create echo-client-buffer-name)))
    (with-current-buffer client-buffer
      (setq-local truncate-lines t)
      (setq-local buffer-read-only nil)
      (erase-buffer)
      (insert (format "Connecting to %s:%s...\n" host port)))
    (setq echo-client-process
          (make-network-process
           :name "echo-client"
           :buffer client-buffer
           :host host
           :service port
           :filter #'echo-client-filter
           :sentinel #'echo-client-sentinel
           :coding 'utf-8
           :noquery t)))
  (display-buffer echo-client-buffer-name))

(defun echo-client-send (message)
  "Sends a MESSAGE to the connected echo server.
Prompts for input if MESSAGE is nil. Appends the message to the client buffer."
  (interactive
   (list (read-string "Send message: ")))
  (unless echo-client-process
    (error "Not connected to an echo server."))
  (with-current-buffer (process-buffer echo-client-process)
    (goto-char (point-max))
    (insert "Client: " message "\n"))
  ;; Send the string, plus a newline, to the server.
  (process-send-string echo-client-process (concat message "\n")))

(defun echo-client-disconnect ()
  "Disconnects from the echo server."
  (interactive)
  (when echo-client-process
    (delete-process echo-client-process)
    (message "Disconnected from echo server.")))
(provide 'echo-client)

;; Type M-x eval-buffer.
;; M-x echo-client-connect.
;; M-x echo-client-send
;; M-x echo-client-disconnect
