import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <footer classNameName="footer">

          
          {/* <span classNameName="text-muted">Nguyen Quang Truong</span> */}
        {/* </footer> */}
        <footer className="text-center text-lg-start bg-dark text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-auto">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Findx</h6>
                  <p>
                    <a
                      href="https://furamavietnam.com/vi/furama-resort-danang-rack-rate/"
                      className="text-reset"
                    >
                      Giá Công Bố
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://furamavietnam.com/vi/lifestyle-blog/"
                      className="text-reset"
                    >
                      Tuyển dụng{" "}
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://furamavietnam.com/vi/work-with-us/"
                      className="text-reset"
                    >
                      Liên hệ
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://furamavietnam.com/vi/contact/"
                      className="text-reset"
                    >
                      Lifestyle Blog
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>72 Núi THành, quận Hải
                    Châu, Danang City, Vietnam
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    findx@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4">
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              {" "}
              © 2022 Findx Đà Nẵng.
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
