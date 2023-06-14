function Skills(){
    return(
        <div className="skills-section">
      <div className="container">
        <h2 className="text-center text-warning p-5">My Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-dark"style={{height:'200px'}}>
                <h3 className="text-center text-white">Web Development</h3>
                <ul className=" text-white" >
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-dark"style={{height:'200px'}}>
                <h3 className="text-center text-white">Graphic Design</h3>
                <ul className=" text-white">
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe InDesign</li>
                  <li>Sketch</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body bg-dark"style={{height:'200px'}}>
                <h3 className="text-center text-white">Project Management</h3>
                <ul className=" text-white">
                  <li>Agile methodology</li>
                  <li>Scrum</li>
                  <li>Kanban</li>
                  <li>Team collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Skills ;