# Variables
CC = gcc
CFLAGS = -Wall -Wextra -g
TARGET = helloworld
OBJS = $(TARGET).o helper.o

# Default target
all: $(TARGET)

# Build the target
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)


# Compile source files into object files
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@


# Clean up build files
clean:
	rm -f $(TARGET) *.o
