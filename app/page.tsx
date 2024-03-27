import { Suspense } from 'react'
import Landing from './components/Landing'

export default function Home() {
  // const { back } = useRouter()
  // const pathnames = usePathname()

  return (
    <Suspense fallback={<p>Carregando Repos</p>}>
      <Landing />
    </Suspense>
  )
}
