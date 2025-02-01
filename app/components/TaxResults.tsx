import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { formatIndianCurrency } from "../utils/taxCalculations"

interface TaxResultsProps {
  taxData: ReturnType<typeof import("../utils/taxCalculations").calculateTax>
  income: number
}

export default function TaxResults({ taxData, income }: TaxResultsProps) {
  const { taxAmount, taxRate, slabDetails } = taxData
  const takeHome = income - taxAmount

  const pieData = [
    { name: "Tax", value: taxAmount },
    { name: "Take Home", value: takeHome },
  ]
  const COLORS = ["#FF8042", "#00C49F"]

  return (
    <div className="mt-8 space-y-6">
      <Card className="bg-gray-700">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Tax Summary</h2>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <span>Total Income:</span>
              <span>{formatIndianCurrency(income)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Tax:</span>
              <span>{formatIndianCurrency(taxAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Take Home:</span>
              <span>{formatIndianCurrency(takeHome)}</span>
            </div>
            <div className="flex justify-between">
              <span>Effective Tax Rate:</span>
              <span>{(taxRate * 100).toFixed(2)}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-700">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Slab-wise Breakdown</h2>
          <div className="space-y-4">
            {slabDetails.map((slab, index) => (
              <div key={index} className="border-b border-gray-600 pb-2 last:border-0">
                <div className="flex justify-between">
                  <span>{slab.slab}</span>
                  <span>{slab.taxRate * 100}%</span>
                </div>
                <div className="text-sm text-gray-400 flex justify-between">
                  <span>Income: {formatIndianCurrency(slab.amount)}</span>
                  <span>Tax: {formatIndianCurrency(slab.tax)}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-700">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Visual Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

