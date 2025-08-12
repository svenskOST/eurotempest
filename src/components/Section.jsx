export default function Section({ children }) {
  return (
    <section className='flex flex-col items-center justify-center pb-40 md:pb-60 px-4'>
      <div className='md:container flex items-center flex-col gap-16'>{children}</div>
    </section>
  )
}
