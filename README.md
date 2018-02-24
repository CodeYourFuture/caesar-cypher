# Secret message decryption

## Overview
In this exercise, you are given a message in a text file, `secret_message.txt`, which is encrypted. Write a program to decrypt it, save the decrypted phrase to a file called `solution.txt`. If the content of the message is equal to `today is sunny`, send a warning to the console instead.

The encryption is a Caesar cypher, with a key of +1 (all letters shifted up by one)

## Caesar cypher
The Caesar cypher is a simple encryption allegedly invented in roman times to conceal important informations [Wikipedia entry for the curious](https://en.wikipedia.org/wiki/Caesar_cipher).

Each letter of a message is shifted by a fixed number of places up or down the alphabet. For example, if letters are shifted by 1 position 'up',
'a' becomes 'b', 'b' becomes 'c' and so on. 'hello' becomes 'ifmmp'. [Check this page for an interactive example](https://planetcalc.com/1434/).

While it's not being used anymore due to the ease with which it can be broken with today's analysis tools and computation power, it can still form the base for more advanced forms of encryption, and it's very similar in concept to the (in theory) unbreakable [One Time Pad](https://en.wikipedia.org/wiki/One-time_pad)
