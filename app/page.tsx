import CompanionList from '@/components/CompanionList'
import CompanionsCard from '@/components/CompanionsCard'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
   <main>
    <h1>Dashboard</h1>
    <section className='home-section'>
      <CompanionsCard
      id='1'
      name='DSA'
      subject='Coding'
      topic='Array as a DS'
      color='#ff25'
      duration={5}
      />
    </section>
    <section className='home-section'>
      <CompanionList 
      title="Recently completed sessions"
      companions={recentSessions}
      classNames = "w-2/3 max-lg:w-full"
      />
      <Cta/>
    </section>
   </main>
  )
}

export default Page