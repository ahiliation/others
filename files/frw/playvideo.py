import numpy as np
import cv2

video = "kkl.avi"

video_capture = cv2.VideoCapture(video)

while(True):
    # Capture frame-by-frame
    ret, frame = video_capture.read()

    # Our operations on the frame comes here
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Display the resulting frame
    cv2.imshow('frame',gray)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything's done, release the capture
video_capture.release()
cv2.destroyAllWindows()
