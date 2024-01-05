export async function CertifyDocumentUseCase(file: Buffer): Promise<void> {
  await randomDelay(2000, 15000)
  await randomException(5)
}

async function randomDelay(min: number = 1, max: number = 5000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min)
  })
}

async function randomException(percentError = 10) {
  if (Math.random() <= percentError / 100) {
    throw new Error('Erro proposital')
  }else{
    return true
  }
}