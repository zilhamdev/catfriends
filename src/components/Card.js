// import React from "react";

// export default class Card extends Component {
//   render() {
//     return (
//       <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//         <img
//           src={`https://robohash.org/${this.props.id}?set=set4&size=200x200`}
//           alt="cat"
//         />
//         <div>
//           <h2>{this.props.name}</h2>
//           <p>{this.props.email}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default function Card({ id, name, username, email }) {
  return (
    <div className="tc bg-blue hover-bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt={username} />
      <div>
        <h2 className="white-80">{name}</h2>
        <p className="white-70">{email}</p>
      </div>
    </div>
  );
}
