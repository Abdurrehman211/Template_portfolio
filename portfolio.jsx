import Navbar from "./Navbar";
import './style.css';
import aboutImage from './images/Shayan solo.jpg'; // Import the image
function Portfolio(){
return (
    <>
    <div className="header">
        <Navbar/>
    </div>
    <div className="body">
       <Landingpage/>
       <Aboutme/>
    </div>
    </>
)
}
function Landingpage(){
return ( 
<>
<section class="bgimage" id="home">
<div className="main">
    <div className="child">
<h1>Hi, it's me Abdur-Rehman</h1>
<p>I am professional Web developer in the City</p>
</div>
</div>
</section>
</>

)
}
// Aboutme.js




function Aboutme() {
    return (
        <section id="about">
            <div className="container mt-4 pt-4">
                <h1 className="text-center">About Me</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <img src={aboutImage} className="imageAboutPage" alt="About" /> {/* Use imported image */}
                    </div>

                    <div className="col-lg-8">
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <ul>
                                    <li>Name: David Parker</li>
                                    <li>Age: 28</li>
                                    <li>Occupation: Web Developer</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li>Name: David Parker</li>
                                    <li>Age: 28</li>
                                    <li>Occupation: Web Developer</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;