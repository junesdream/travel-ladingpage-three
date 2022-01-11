import React from 'react'

const SignUp = () => {
    return (
		<>
			<section className="login">
				<div className="login-overlay">
					<form className="form-control">
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							required
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your email adresse"
							required
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Choose your password"
							required
						/>
						<input
							type="password"
							name="password2"
							id="password2"
							placeholder="Confirm your password"
							required
						/>
						<button className="submit">Create your Account</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default SignUp
