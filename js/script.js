// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

function calculateNumber() {
  const positiveIntegerNumber1 = parseInt(
    document.getElementById("positive-integer-number-1").value
  )
  const positiveIntegerNumber2 = parseInt(
    document.getElementById("positive-integer-number-2").value
  )

  if (
    !(Number.isInteger(positiveIntegerNumber1) && Number.isInteger(positiveIntegerNumber2) && positiveIntegerNumber1 > 0 && positiveIntegerNumber2 > 0)
  ) {
    document.getElementById("result-output").innerHTML =
      "Please enter valid positive integers."
    return
  }

  let result = 0
  let counter = 0
  let additionString = ""

  while (counter < positiveIntegerNumber2) {
    result += positiveIntegerNumber1
    additionString += positiveIntegerNumber1
    if (counter < positiveIntegerNumber2 - 1) {
      additionString += " + "
    }
    counter++
  }

  document.getElementById(
    "result-output"
  ).innerHTML = `${additionString} = <strong>${result}</strong>`
}

