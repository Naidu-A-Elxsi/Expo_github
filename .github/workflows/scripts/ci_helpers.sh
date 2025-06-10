#!/bin/bash

info() {
  echo -e "\033[1;34m[INFO]\033[0m $*"
}

success() {
  echo -e "\033[1;32m[SUCCESS]\033[0m $*"
}

err() {
  echo -e "\033[1;31m[ERROR]\033[0m $*"
}
