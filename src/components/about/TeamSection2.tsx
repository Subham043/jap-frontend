import React from "react";
import { teamData2 } from "./team-data";


const TeamSection2 = () => {
 
  return (
    <section className="bd-team__area pt-55 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section__title-wrapper text-center mb-60">
              <span className="bd-sub__title">Professional Team</span>
              <h2 className="bd-section__title mb-30">Board Of Directors</h2>
            </div>
          </div>
        </div>
        <div className="w-100 p-relative">
          <table className="table table-striped table-bordered">
            <tbody>
              {teamData2.map((item, i)=><tr key={i}>
                <th className="w-50">{item.name1}</th>
                <th className="w-50">{item.name2}</th>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TeamSection2;
