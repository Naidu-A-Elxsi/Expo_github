# Variables
CC = gcc
CFLAGS = -Wall -Wextra -g -Iinclude
TARGET = src/helloworld
OBJS = src/helloworld.o src/helper.o

# Default target
all: $(TARGET)

# Build the target
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)

# Compile source files into object files
src/%.o: src/%.c
	$(CC) $(CFLAGS) -c $< -o $@

# Clean up build files
clean:
	rm -f $(TARGET) src/*.o
