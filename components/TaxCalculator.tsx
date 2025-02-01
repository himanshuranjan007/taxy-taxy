"use client"

import type React from "react"
import { useState } from "react"
import { calculateTax } from "../utils/taxCalculations"

export default function TaxCalculator() {
  const [income, setIncome] = useState("")
  const [taxData, setTaxData] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const incomeValue = Number.parseFloat(income.replace(/,/g, ""))
    if (!isNaN(incomeValue)) {
      const result = calculateTax(incomeValue)
      setTaxData(result)
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter annual income"
          className="w-full p-2 mb-2 text-black"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Calculate Tax
        </button>
      </form>
      {taxData && (
        <div className="text-white">
          <h2 className="text-xl font-bold mb-2">Tax Breakdown</h2>
          <p>Total Tax: ₹{taxData.taxAmount.toFixed(2)}</p>
          <p>Effective Tax Rate: {(taxData.taxRate * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  )
}

