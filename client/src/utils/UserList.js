// import React from "react";

// import NavLinks from "./components/LoggedInNav";

// export default class UserList extends React.Component {
//     render() {
//         let style = {
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//             padding: "1rem",
//             gridGap: "1rem 1rem"
//         };

//         return (
//             <div>
//                 <NavLinks />
//                 <ul style={style}>
//                     {this.props.list.map(user => {
//                         return (
//                             <li key={user.id}>
//                                 <div>
//                                     <img className="thumb" alt="" src={user._links.avatar.href} />
//                                 </div>

//                                 <div className="userInfo">
//                                     <p>
//                                         {recipe.title}
//                                     </p> 
//                                 </div>
//                                 <button onClick={() => this.props.addFriend(user)}>
//                                     Subscribe to this user
//                                 </button>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// };
