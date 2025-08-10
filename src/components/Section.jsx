export default function Section({ children }) {
  return (
    <section className='flex flex-col items-center justify-center py-20 md:py-30 px-4'>
      <div className='md:container flex items-center flex-col gap-16'>{children}</div>
    </section>
  )
}
