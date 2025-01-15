# Type Safety Issue in TypeScript Function Parameters

This repository demonstrates a type safety issue in TypeScript where a type error is not caught at compile time when a function expects a number but receives a string.  The addition of number and string results in string concatenation instead of numerical addition. 

## Bug

The `add` function is defined to accept two number parameters and return a number. However, when we call the `add` function with a string as the second argument, TypeScript doesn't throw an error during compilation, and the result is unexpected string concatenation.

## Solution

The solution involves using type guards or assertion to ensure type safety.   The solution example uses a type guard to check for number type before performing the addition.  This ensures that the function will only perform addition operation if the parameters are both numbers; otherwise, it will throw an error.