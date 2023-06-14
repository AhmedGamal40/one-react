function Education (){
    return(
        <div className="education-section">
        <div className="container">
          <h2 className="text-center text-warning p-5">Education</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card bg-dark" style={{height:'175px'}}>
                <div className="card-body text-center text-white">
                  <h3 >Bachelor of Science in Computer Science</h3>
                  <p>Harvard University</p>
                  <p>Graduated in May 2017</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-dark" style={{height:'175px'}}>
                <div className="card-body text-center text-white">
                  <h3>I study in ITI </h3>
                  <p>Full Stack Web By Trak Mearn</p>
                  <p>Start Eductaion  in May 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Education;