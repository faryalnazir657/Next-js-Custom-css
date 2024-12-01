
const ContactForm = () => {
    return (
      <div className="container">
        <h1 className="heading">Contact Me</h1>
        <form className="form">
          <div>
            <label className="label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label className="label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  export default ContactForm