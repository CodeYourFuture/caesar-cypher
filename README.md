# Secret message decryption

## Overview

In this exercise, you are given a message in a text file, `secret_message.txt`, which is encrypted. Write a program to decrypt it and write the decrypted text to the console.

As an extra step, write a program to encrypt messages so that you can share them in Slack without anyone being able to read them unless they have the decrypt program.

The encryption is a Caesar cypher, with a key of +1 (all letters shifted up by one)

We are writing a command-line program here, not a website, so we will need to
use the [Node.js JavaScript runtime](https://nodejs.org/en/) to run our code.

## Caesar cypher
The Caesar cypher is a simple encryption allegedly invented in roman times to conceal important informations [Wikipedia entry for the curious](https://en.wikipedia.org/wiki/Caesar_cipher).

Each letter of a message is shifted by a fixed number of places up or down the alphabet. For example, if letters are shifted by 1 position 'up',
'a' becomes 'b', 'b' becomes 'c' and so on. 'hello' becomes 'ifmmp'. [Check this page for an interactive example](https://planetcalc.com/1434/).

While it's not being used anymore due to the ease with which it can be broken with today's analysis tools and computation power, it can still form the base for more advanced forms of encryption, and it's very similar in concept to the (in theory) unbreakable [One Time Pad](https://en.wikipedia.org/wiki/One-time_pad)



## Problem decomposition
This exercise requires several steps to be undertaken to be completed, each one of those a possible source of error and/or confusion. Developing the solution as a single, sequential piece of code is possible, but require significant skill to be able to track several things at the same time, especially if there is no upfront 'plan of attack'.

An example of things you might want to have the answer for all the time:
* the implementation detail of the current step ('how do I substitute letters in a string in JavaScript')
* the next step of the program ('what I should use the converted string for')
* possible cases that will create a bug in your program ('if the initial string is empty, the program will fail')

#### Flow diagrams
To help simplify this, it can be helpful to 'decompose' the given problem in a number of smaller problems, or steps. This can be done at a high level, focusing on the logical steps, without worrying about the actual code that will have to be written, to get a good overview of the general flow of the solution.

A good way to achieve this can be by drawing flow diagrams, which are very visual and make it easy to spot some problems straight away. On top of that, they are very helpful to make sure everyone in the team understand the general implementation and how all the pieces fit together.

![Cat decision three](https://laughingsquid.com/wp-content/uploads/cat-decision.jpg)
> Here is a flow diagram representing the decision-making steps of a cat. Note how it does not relate to code, or has any JavaScript in it. We could still use it to implement a 'robocat decision tree' if we wanted.


#### Implementation details
Once the problem has been decomposed in smaller pieces, we can focus on implementing those steps in actual JavaScript, one by one. This is what we would call 'implementation details'.

Each step can be translated into a function, where an input comes in, an output goes out, ready to be used by something else.
There are several advantages to such an approach:
* The function does a single, simple, transformation, like filtering an array or transforming a string. Fewer steps == fewer places where an error could happen.
* A single small function is easier to test on its own, to make sure the functionality is correct.
* If the functionality is needed again, the piece of code can be reused quickly.
* Several people can work on different pieces in parallel.

Another upside is that it's easier to extend our program by changing few functions rather than rewrite everything from scratch. We could use the program to encrypt instead of decrypt, or use a different cypher, or send the result over a http connection to another computer, all with minimal additions and changes.


![Function Machine](https://codeyourfuture.github.io/syllabus-master/js-core-3/assets/function-diagram.png)
> Function diagram stolen from the Syllabus, week 10.


## Sample breakdown of the problem
Here is a sample division in logic units of the Caesar cypher problem. Each step has been further divided in smaller operations needed for each function implementation.


* Read a message from a file
  - open the file on the local computer
  - read the first line
  - return the read line as a string


* Decrypt a message
  - accept a encrypted string
  - transform the string into an array of characters
  - map the array through the character decryption functions
  - assemble the mapped array back to a single string
  - return the decrypted string


* Decrypt a character
  - accept an encrypted character
  - shift it by the right amount (+1 in this case)
  - return the decrypted character


* Logging function
  - log to the console the decrypted message

Notice how many functions are general purpose: for example, we could change the "Decrypt a character" function to accept a second parameter and work with any amount of positive or negative shift.
