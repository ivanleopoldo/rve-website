import React from "react";

const EmailPage = () => {
  return (
    <div className="text-white w-3/5">
				<p className="text-4xl">Want to get notified when the site fully releases?</p>
				<p className="font-light text-xl">Input your Email below!</p>
				
				<form className="mt-10">
					<input className="p-2 w-3/5 bg-neutral-900 border-neutral-800 border-2 rounded-md" placeholder="Email" type="email" name="email-input" />
					<button type="submit" className="p-2 px-4 ml-4 bg-neutral-800 rounded-md border border-neutral-800">
						Submit
					</button>
				</form>
    </div>
  )
}

export default EmailPage;
