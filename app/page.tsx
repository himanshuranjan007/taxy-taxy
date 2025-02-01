import TaxCalculator from "../components/TaxCalculator"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Indian Income Tax Calculator</h1>
      <TaxCalculator />
    </main>
  )
}

