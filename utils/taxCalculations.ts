export function calculateTax(income: number) {
  let taxAmount = 0

 if (income >=1275000) {
    if (income <= 400000) {
    taxAmount = 0
  } else if (income <= 800000) {
    taxAmount = (income - 400000) * 0.05
  } else if (income <= 1200000) {
    taxAmount = 20000 + (income - 800000) * 0.1
  } else if (income <= 1600000) {
    taxAmount = 60000 + (income - 1200000) * 0.15
  } else if (income <= 2000000) {
    taxAmount = 120000 + (income - 1600000) * 0.2
  } else if (income <= 2400000) {
    taxAmount = 200000 + (income - 2000000) * 0.25
  } else {
    taxAmount = 300000 + (income - 2400000) * 0.3
  }
}else{
  taxAmount=0
}
  const taxRate = income > 0 ? taxAmount / income : 0

  return {
    taxAmount,
    taxRate,
  }
}

