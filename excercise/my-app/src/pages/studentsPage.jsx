import { Link } from "react-router-dom";

const styleLink = {
   display: "block",
   color: "red",
};
let StudentsPage = () => {
   return (
      <section>
         <div className="container-detail">
            <div className="container-desc">
               <h1 data-text="Hello...">Hello...</h1>
               <p data-text="I'm Dimas, I'm a Student at">
                  I'm Dimas, I'm a Student at
               </p>
               <strong data-text="Purwadhika Digital School.">
                  Purwadhika Digital School.
               </strong>
            </div>
            <div className="btn">
               <a href="#portofolio">
                  <Link to="/about">
                     <i class="fa-solid fa-circle-chevron-down fa-bounce fa-2xl"></i>
                  </Link>
               </a>
            </div>
         </div>
      </section>
   );
};

export default StudentsPage;
