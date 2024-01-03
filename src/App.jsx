import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className='relative h-screen overflow-hidden'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
    </main>
  );
};

export default App;