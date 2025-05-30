# Variables
CC = gcc
CFLAGS = -Wall -Wextra -g
TARGET = helloworld

# Default target
all: $(TARGET)

# Build the target
$(TARGET): $(TARGET).c
	$(CC) $(CFLAGS) -o $(TARGET) $(TARGET).c

# Clean up build files
clean:
	rm -f $(TARGET)
