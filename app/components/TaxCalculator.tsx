"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TaxResults from "./TaxResults"
import { calculateTax, formatIndianCurrency } from "../utils/taxCalculations"

export default function TaxCalculator() {
  const [income, setIncome] = useState("")
  const [taxData, setTaxData] = useState<ReturnType<typeof calculateTax> | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const incomeValue = Number.parseInt(income.replace(/,/g, ""), 10)
    if (!isNaN(incomeValue)) {
      setTaxData(calculateTax(incomeValue))
    }
  }

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "")
    setIncome(value ? formatIndianCurrency(Number.parseInt(value, 10)) : "")
  }

  return (
    <Card className="bg-gray-800 text-white">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="income" className="block text-sm font-medium mb-1">
              Annual Income (₹)
            </label>
            <Input
              id="income"
              type="text"
              value={income}
              onChange={handleIncomeChange}
              placeholder="E.g., 5,00,000"
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Calculate Tax
          </Button>
        </form>
        {taxData && <TaxResults taxData={taxData} income={Number.parseInt(income.replace(/,/g, ""), 10)} />}
      </CardContent>
    </Card>
  )
}

