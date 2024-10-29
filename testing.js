export function getCPUBucket() {
  if (!('hardwareConcurrency' in navigator)) return 'unknown'

  const concurrency = navigator.hardwareConcurrency

  for (const [bucket, min] of Object.entries(BUCKETS)) {
    if (concurrency > min) {
      return bucket
    }
  }

  return 'unknown'
}
