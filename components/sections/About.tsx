const skills = {
  languages: ["C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  "frameworks & libraries": ["React", "Flask", "FastAPI", "PyTorch", "Android SDK", "Paho MQTT"],
  "security & cloud": ["AWS IoT Core", "Amazon S3", "mTLS", "X.509", "Android Keystore", "TLS 1.2+"],
  design: ["Illustrator", "Photoshop"],
};

export default function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-20 px-6 py-24">
      <p>01 · about</p>
      <h2 className="mt-2 text-3xl font-bold">About me</h2>
      <p className="mt-6 max-w-2xl">
        i&apos;m a computer science student at ut dallas (class of 2027). right
        now i&apos;m a software engineering intern at infosys, owning the
        device-to-cloud security layer for an android-based robot. before
        that, i worked in data science research at the university of
        mississippi medical center and designed graphics for utd university
        recreation, so i care about both how systems work and how they look.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-semibold">{category}</h3>
            <ul className="mt-2">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}