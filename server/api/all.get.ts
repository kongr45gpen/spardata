import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  // const prisma = usePrismaClient()

  console.log(await prisma.entity.findFirstOrThrow(
    { where: { name: 'Trajectory' }
}))

  const entities = await prisma.entity.findMany({
    include: {
      children: true,
      parameters: true
    }
  })
  const parameterTypes = await prisma.parameterType.findMany()
  const parameters = await prisma.parameter.findMany()

  return {
    entities,
    parameterTypes,
    parameters,
  }

})
