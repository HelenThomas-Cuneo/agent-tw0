export default function handler(req, res) {
  res.status(200).json({
    experiment: 'Living Benchmark 001',
    aiGatewayConfigured: Boolean(process.env.AI_GATEWAY_API_KEY),
    note: 'This endpoint reports only whether the key exists; it never returns the secret.'
  })
}
