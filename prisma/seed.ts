import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const trajectory = await prisma.entity.upsert({
    where: { name: 'Trajectory' },
    update: {},
    create: {
      name: 'Trajectory',
      product: 'LEO',
      image: 'https://placehold.co/600x400/red/white',
    }
  })

  const structures = await prisma.entity.upsert({
    where: { name: 'Structures' },
    update: {},
    create: {
      name: 'Structures',
      image: 'https://placehold.co/600x400/yellow/white',
    }
  })

  const communications = await prisma.entity.upsert({
    where: { name: 'Communications' },
    update: {},
    create: {
      name: 'Communications',
      notes: 'The transceiver includes a PA.\n\nWe are procuring the US version due to supply chain issues with regular supplier. ',
      image: 'https://placehold.co/600x400/purple/white',
    }
  })

  const antenna = await prisma.entity.upsert({
    where: { name: 'Antenna' },
    update: {},
    create: {
      name: 'Antenna',
      product: 'SateLite 240-AJH',
      image: '/img/antenna.png',
      parent: {
        connect: { id: communications.id }
      }
    }
  })

  const transceiver = await prisma.entity.upsert({
    where: { name: 'Transceiver' },
    update: {},
    create: {
      name: 'Transceiver',
      notes: 'The transceiver includes a PA.\n\nWe are procuring the US version due to supply chain issues with regular supplier. ',
      product: 'NXP 880-SUBGHZ',
      image: 'https://placehold.co/600x400/orange/white',
      parent: {
        connect: { id: communications.id }
      }
    }
  })

  const microcontroller = await prisma.entity.upsert({
    where: { name: 'Microcontroller' },
    update: {},
    create: {
      name: 'Microcontroller',
      product: 'STM32F104R8T6',
      image: 'https://placehold.co/600x400/blue/white',
      parent: {
        connect: { id: communications.id }
      }
    }
  })

  const obc = await prisma.entity.upsert({
    where: { name: 'On-Board Computer' },
    update: {},
    create: {
      name: 'On-Board Computer',
      image: 'https://placehold.co/600x400/black/white',
    }
  })

  const frequency = await prisma.parameterType.upsert({
    where: { name: 'Frequency' },
    update: {},
    create: {
      name: 'Frequency',
    }
  })

  const bandwidth = await prisma.parameterType.upsert({
    where: { name: 'Bandwidth' },
    update: {},
    create: {
      name: 'Bandwidth',
    }
  })

  const modulation = await prisma.parameterType.upsert({
    where: { name: 'Modulation' },
    update: {},
    create: {
      name: 'Modulation',
    }
  })

  const dataRate = await prisma.parameterType.upsert({
    where: { name: 'Data Rate' },
    update: {},
    create: {
      name: 'Data Rate',
    }
  })

  const powerConsumption = await prisma.parameterType.upsert({
    where: { name: 'Power Consumption' },
    update: {},
    create: {
      name: 'Power Consumption',
    }
  })

  await prisma.parameter.createMany({
    data: [
      {
        value: '433 MHz',
        parameterId: frequency.id,
        entityId: antenna.id,
        status: 2
      },
      {
        value: '20 kHz',
        parameterId: bandwidth.id,
        entityId: antenna.id,
        status: 1
      },
      {
        value: 'OQPSK',
        parameterId: modulation.id,
        entityId: antenna.id,
        status: 1
      },
      {
        value: '512 kbps',
        parameterId: dataRate.id,
        entityId: antenna.id,
        status: 3
      },
      {
        value: '0.4 - 50 W',
        parameterId: powerConsumption.id,
        entityId: antenna.id,
        status: 4
      }
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
