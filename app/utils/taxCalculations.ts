// interface SlabDetail {
//   slab: string
//   amount: number
//   taxRate: number
//   tax: number
// }

// export function calculateTax(income: number) {
//   const slabs = [
//     { min: 0, max: 400000, rate: 0 },
//     { min: 400000, max: 800000, rate: 0.05 },
//     { min: 800000, max: 1200000, rate: 0.1 },
//     { min: 1200000, max: 1600000, rate: 0.15 },
//     { min: 1600000, max: 2000000, rate: 0.2 },
//     { min: 2000000, max: 2400000, rate: 0.25 },
//     { min: 2400000, max: Number.POSITIVE_INFINITY, rate: 0.3 },
//   ]

//   let taxAmount = 0
//   const slabDetails: SlabDetail[] = []

//   for (const slab of slabs) {
//     if (income > slab.min) {
//       const taxableAmount = Math.min(income - slab.min, slab.max - slab.min)
//       const slabTax = taxableAmount * slab.rate
//       taxAmount += slabTax

//       slabDetails.push({
//         slab: `${formatIndianCurrency(slab.min)} - ${slab.max === Number.POSITIVE_INFINITY ? "Above" : formatIndianCurrency(slab.max)}`,
//         amount: taxableAmount,
//         taxRate: slab.rate,
//         tax: slabTax,
//       })

//       if (income <= slab.max) break
//     }
//   }

//   const taxRate = income > 0 ? taxAmount / income : 0

//   return {
//     taxAmount,
//     taxRate,
//     slabDetails,
//   }
// }

// export function formatIndianCurrency(amount: number): string {
//   const formatter = new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   })
//   return formatter.format(amount)
// }

