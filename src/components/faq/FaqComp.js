import React, { useState } from "react";
import faqData from "../../data/faq/Faq.json";
function FaqComp() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>After Register</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData.faqData.map((item, index) => (
                  <div className="card" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h4 className="faq-title fw-bolder">
                        <span className="badge">{item.no}</span>
                        {item.question}
                      </h4>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2 className="mt-5">During the Event</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData.faqData2.map((item, index) => (
                  <div className="card" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h4 className="faq-title fw-bolder">
                        <span className="badge">{item.no}</span>
                        {item.question2}
                      </h4>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer2}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2 className="mt-5">After the Event</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData.faqData3.map((item, index) => (
                  <div className="card" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h4 className="faq-title fw-bolder">
                        <span className="badge">{item.no}</span>
                        {item.question3}
                      </h4>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer3}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
    </>
  );
}

export default FaqComp;
