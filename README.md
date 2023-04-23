# README

## TL;DR

- `npm i`
- `npm run generate`

## Purpose

The Lottery Programming Challenge is a challenge for interview candidates to demonstrate that they can write a simple program in any language of their choice (eg C#, javascript). This isn’t a real application; it’s a chance for the interviewee to demonstrate coding techniques and patterns which we’ll discuss in the interview. So, if there’s a technique you’re interested in then include it. If you have time, show off a little. But, it’s much better to have a simple application which works with clean readable code then a more complicated version which doesn’t work. Good luck!

## The Challenge

You must write a simple "Lottery Number Generator" to choose 6 unique numbers randomly where each number is within 1 to 49 inclusive; the idea is that you could then use these numbers to enter the National Lottery.
For further details see section 0.

## Rules

- The program must have a User Interface, this could be a console application, desktop application, or a web page, or a phone app - it doesn't matter what it is.
- You only have 1 hour. Make sure it works before you show off – if you need a little more time just ask. If you are doing this from home, then please try and keep to an hour.
- You can use any resources available to you. We are not interested in how well you can memorise function signatures.

## Hints

- The programming is more important than the accuracy of the results - random numbers is a whole field in itself and although very interesting that is not the point!
- Library functions are useful for picking a random number (eg System.Random in C#).
- Use comments and pseudocode to describe things you would do with more time.
- Fall back to pseudocode if you are running out of time.
- Use source control.

## Requirements Specification

### General

- The program shall choose 6 numbers for the user.
- The 6 numbers shall be unique. For example {8, 10, 15, 28, 35, 43} is okay {8, 10, 15, 28, 43, 43} is not.
- The numbers shall be presented to the user in numeric order.
- The numbers shall be in the range of 1 to 49 inclusive.
- The application shall be written in any language or languages.
- The application shall be any form of application so long as it has a UI, for example a console application, WPF application, a Phone app, Asp.Net it doesn’t matter.
- EXTRA: The numbers should have a different coloured background: 1-9 grey, 10-19 blue, 20-29, pink, 30-39 green, 40-49 yellow.
- EXTRA: Consider that the program should be able to be adapted in future to provide a bonus ball (7 balls instead of 6.)
