export default function Section({ children }) {
  return (
    <section className='flex flex-col items-center justify-center py-30 bg-light-300 px-4'>
      <div className='container flex items-center flex-col gap-16'>{children}</div>
    </section>
  )
}
