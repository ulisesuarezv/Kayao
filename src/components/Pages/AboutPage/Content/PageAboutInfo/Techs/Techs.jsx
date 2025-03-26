import { useRef } from 'react'
import './Techs.css'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import {
  Atom,
  CreditCard,
  DatabaseZap,
  FileJson2,
  GitPullRequest,
  HardDriveUpload,
  Palette
} from 'lucide-react'

const Techs = () => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  const techs = [
    {
      name: 'JavaScript',
      logo: FileJson2,
      description:
        'Lenguaje de programacion orientado a objetos para crear paginas web interactivas.'
    },
    {
      name: 'React',
      logo: Atom,
      description:
        'Framework de JavaScript especializado para construir interfaces rapidas, escalables y a medida.'
    },
    {
      name: 'MongoDB',
      logo: DatabaseZap,
      description:
        'Base de datos NoSQL flexible y escalable. Ideal para manejar grandes volumenes de datos.'
    },
    {
      name: 'Node.js',
      logo: HardDriveUpload,
      description:
        'Entorno que permite desarrollar backend con JavaScript para APIs eficientes.'
    },
    {
      name: 'Tailwind CSS',
      logo: Palette,
      description:
        'Framework de CSS que crea interfaces rapidas y atractivas con diseño responsive'
    },
    {
      name: 'Git',
      logo: GitPullRequest,
      description:
        'Sistema de control de versiones que nos permite trabajar en equipo y controlar cambios en tu proyecto.'
    },
    {
      name: 'Stripe',
      logo: CreditCard,
      description:
        'Plataforma de pagos en linea que permite a empresas aceptar pagos y administrar sus negocios.'
    }
  ]

  return (
    <div id='example'>
      <svg
        id='progress'
        width='70'
        height='70'
        viewBox='0 0 100 100'
        opacity='0.7'
      >
        <circle cx='50' cy='50' r='30' pathLength='1' className='bg' />
        <motion.circle
          cx='50'
          cy='50'
          r='30'
          className='indicator'
          style={{
            pathLength: scrollXProgress
          }}
        />
      </svg>
      <motion.div ref={ref} className='scroll-container' style={{ maskImage }}>
        {techs.map((tech, index) => (
          <div key={index} className='tech-box'>
            {/* <svg src={tech.logo} alt={tech.name} className='tech-logo' /> */}
            {tech.logo && <tech.logo className='tech-logo' />}
            <p className='tech-name'>{tech.name}</p>
            <p className='tech-description'>{tech.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const left = '0%'
const right = '100%'
const leftInset = '20%'
const rightInset = '80%'
const transparent = '#0000'
const opaque = '#000000'

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    }
  })

  return maskImage
}

export default Techs
