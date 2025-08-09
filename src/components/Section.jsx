export default function Section({ children }) {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-light-300'>
      <div className='container'>{children}</div>
    </section>
  )
}
