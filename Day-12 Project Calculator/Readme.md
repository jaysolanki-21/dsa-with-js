# CLI Calculator in JavaScript

## Overview

This is a simple command-line calculator built using Node.js and the `prompt-sync` package. It allows users to perform basic arithmetic operations interactively via terminal input.

## Features

- Supports the following operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
- Handles invalid operators and input gracefully
- Prevents division by zero
- Continues to run in a loop until the user types `'exit'`

## How It Works

The program prompts the user to enter an arithmetic operator. If the input is valid, it then asks for two numbers and performs the selected operation. The result is displayed immediately, and the user can repeat the process or type `'exit'` to quit.

If the user inputs an invalid operator or non-numeric values, the program provides an appropriate error message and reprompts.

## Requirements

- [Node.js](https://nodejs.org/)
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) package for synchronous input handling

## Installation

1. Clone the repository or copy the script.
2. Install dependencies:

   ```bash
   npm install prompt-sync
   ```
    ```bash
    node <filename>.js
    ```