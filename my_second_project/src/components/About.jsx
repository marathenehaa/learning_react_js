import natureImage from "../assets/nature.jpg";
import treesImage from "../assets/trees.jpg";
import butterflyImage from "../assets/butterfly6.jpg"

const About = () => {
  return (
    <section className="mt-5 mb-5 bg-danger p-6">
      <div className="container" id="about">
        <div className="row">
          <div className="md:col-4">
            <div className="card">
              <div className="card-body">
                <img src={natureImage} className="card-img" alt="..." />
                <h5 className="card-title mt-2 mb-0">Vision</h5>
                <p className="card-text fg-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-4">
            <div className="card">
              <div className="card-body">
                <img src={treesImage} className="card-img" alt="..." />
                <h5 className="card-title mt-2 mb-0">Mission</h5>
                <p className="card-text fg-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-4">
            <div className="card">
              <div className="card-body">
                <img src={butterflyImage} className="card-img" alt="..." />
                <h5 className="card-title mt-2 mb-0">History</h5>
                <p className="card-text fg-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
