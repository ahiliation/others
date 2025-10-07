;; Define a default port for the echo server.
(defvar my-echo-server-port 10000
  "The default TCP port for the echo server.")

;; Function to start the echo server.
(defun my-start-echo-server ()
  "Start a TCP echo server on `my-echo-server-port`."
  (interactive)
  (unless (get-process "my-echo-server")
    (let ((server-process (make-network-process
                           :name "my-echo-server"
                           :server t
                           :service my-echo-server-port
                           :filter #'my-echo-server-filter
                           :sentinel #'my-echo-server-sentinel)))
      (message "Echo server started on port %s" my-echo-server-port))))

;; Function to stop the echo server.
(defun my-stop-echo-server ()
  "Stop the TCP echo server."
  (interactive)
  (let ((server-process (get-process "my-echo-server")))
    (when server-process
      (delete-process server-process)
      (message "Echo server stopped."))))

;; The filter function, called when the server receives data.
(defun my-echo-server-filter (process string)
  "Echo back the received STRING to the PROCESS."
  (when (string-equal (process-status process) 'open)
    (process-send-string process string)))

;; The sentinel function, called when a process changes status.
(defun my-echo-server-sentinel (process event)
  "Logs server events."
  (message "Process %s: %s" (process-name process) event))

;; Provide the functions for external use.
(provide 'echo-server)

;; (load-file "path/to/echo-server.el")
;; netcat localhost 10000
;; M-x my-stop-echo-server
