# Variables
CC = gcc
CFLAGS = -Wall -Wextra -g
TARGET = helloworld
OBJS = $(TARGET).o helper.o

# Default target
all: $(TARGET)

# Build the target
$(TARGET): $(OBJS)
	@echo "Linking object files into $(TARGET)..."
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)


# Compile source files into object files
%.o: %.c
	echo "Compiling $<"
	$(CC) $(CFLAGS) -c $< -o $@


# Clean up build files
clean:
	@echo "Cleaning up..."
	rm -f $(TARGET) *.o
