import { title } from '@/components/primitives'
import { TextConfig } from '@/config/text'
import DefaultLayout from '@/layouts/default'

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <h1 className={title()}>About</h1>
          <p className='my-6'>
            {TextConfig.maintenace.working_in_progress}
          </p>
        </div>
      </section>
    </DefaultLayout>
  )
}
