import os
import pygame
import time
import random

from math import pi

pygame.init()

BLACK = (  0,   0,   0)
WHITE = (255, 255, 255)
BLUE =  (  0,   0, 255)
GREEN = (  0, 255,   0)
RED =   (255,   0,   0)


size = [640, 480]
screen = pygame.display.set_mode(size)

#Loop until the user clicks the close button.
done = False
clock = pygame.time.Clock()


while not done:
 
    # This limits the while loop to a max of 10 times per second.
    # Leave this out and we will use all CPU we can.
    clock.tick(10)
     
    for event in pygame.event.get(): # User did something
        if event.type == pygame.QUIT: # If user clicked close
            done=True # Flag that we are done so we exit this loop
 

    for i in range(250):
        x = random.randint(1,300)
        y = random.randint(1,300)
        pygame.draw.line(screen, GREEN, [x*x, 100], [100,y*y], 1)
        time.sleep(0.1)
        pygame.display.flip()

pygame.quit()

