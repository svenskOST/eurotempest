export default function Section({ children }) {
  return (
    <section className='bg-light-300 flex min-h-screen flex-col items-center justify-center'>
      <div className='container'>{children}</div>
    </section>
  )
}
