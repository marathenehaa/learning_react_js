const Contact = () => {
  return (
    <section className="p-6 bg-subtle-info" id="contact">
      <div className="container">
        <div className="row">
            <h1>Contact Us</h1>
          <div className="md:col-6">
            <form className="row g-3">
              <div className="md:col-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="md:col-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="md:col-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="md:col-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-control" defaultValue="Choose...">
                  <option value="Choose...">Choose...</option>
                  <option value="...">...</option>
                </select>
              </div>
              <div className="md:col-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-field">
                  <input type="checkbox" id="gridCheck" className="check" />
                  <label htmlFor="gridCheck">Check me out</label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn-solid theme-primary">Sign in</button>
              </div>
            </form>
          </div>
          <div className="md:col-6 mt-3">
              <iframe
              title="Fortune Cloud Technologies Pimpri Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8243579202694!2d73.8019900737234!3d18.62696826591854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9424b44386f%3A0x7bcf6e817a60a636!2sFortune%20Cloud%20Technologies%20Pimpri!5e0!3m2!1sen!2sin!4v1795511733123!5m2!1sen!2sin"
              className="w-100 h-100 rounded"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
