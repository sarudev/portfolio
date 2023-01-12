function pickHex (start: [number, number, number], end: [number, number, number], percentage: number): [number, number, number] {
  const w1 = percentage
  const w2 = 1 - w1
  return [Math.round(start[0] * w1 + end[0] * w2), Math.round(start[1] * w1 + end[1] * w2), Math.round(start[2] * w1 + end[2] * w2)]
}

export default pickHex
