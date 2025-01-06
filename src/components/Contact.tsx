export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
        Contact
      </h2>
      <div className="flex flex-col gap-1">
        <p className="font-medium">
          <strong>Phone</strong> <br />
          <span className="font-normal">657-460-0918</span>
        </p>
        <p className="font-medium">
          <strong>Email</strong> <br />
          <span className="font-normal">marco.dykim@gmail.com</span>
        </p>
        <p className="font-medium">
          <strong>Github</strong> <br />
          <a
            href="https://github.com/0yeonnnn0"
            className="underline font-normal"
          >
            github.com/0yeonnnn0
          </a>
        </p>
      </div>
    </section>
  );
}
