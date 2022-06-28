// import { Component } from "react";
// import { signUp} from '../../utilities/users-service'

// export default class SignUpForm extends Component {
//   // A class component must implement a render method responsible for returning the component's JSX - making the render method itself very much like a function component.

//   state = {
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//     error: "",
//   };

//   // The object passed to setState is merged with the current state object
//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: "",
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault()
//     try {
//     //We don't want to send the 'error' or 'confirm' property,
//     //so let's make a copy of the state object, then delete them
//         const formData = { ...this.state}
//         delete formData.error
//         delete formData.confirm

//         // The promise returned by the signUp service method 
//         // will resolve to the user object included in the
//         // payload of the JSON Web Token (JWT)
//         const user = await signUp(formData)
//         // Baby step!
//         console.log(user)

//     } catch {
//         // if an error occurred
//         this.setState({ error: "Sign Up Fail - Try Again"})
        
//     }
//   }

//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Confirm</label>
//             <input
//               type="password"
//               name="confirm"
//               value={this.state.confirm}
//               onChange={this.handleChange}
//               required
//             />
//             <button type="submit" disabled={disable}>
//               SIGN UP
//             </button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }

// }


import { Component } from 'react'
import { signUp } from '../../utilities/users-service.js'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData)
            this.props.setUser(user)
            // console.log(user)
        } catch {
            // If an error occurred
            this.setState({ error: 'Sign Up Failed - Try again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name"  value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}