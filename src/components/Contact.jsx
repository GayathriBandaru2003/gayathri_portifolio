import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a8cec4d5-94c8-4c13-8a13-c574876acd5b");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          event.target.reset();
          Swal.fire({
            title: "Success!",
            width: 350,
            timer: 3000,
            padding: "0 0 1em",
            iconColor: "#4ade80",
            text: "Message sent successfully!",
            icon: "success"
          });
        } else {
          console.log("Error", data);
        }
      };

  return (
    <section className="max-w-[80vw] md:w-[70vw] md:max-w-[956px] mx-auto overflow-hidden flex flex-col items-center text-[#f8fafc] mb-10" id="contact">
        <h1 className="my-6 text-4xl font-normal text-center">Contact Me</h1>
        <article className="min-h-fit flex flex-col items-center bg-[rgb(20,19,19)] rounded-xl overflow-hidden px-6 py-6 lg:px-8 lg:py-8 text-base font-light">
            <div className="w-full md:max-w-[624px] xs:px-6 sm:px-10 md:px-0 text-sm font-light mb-8">
                <p>Whether you want to delve into the lore of Game of Thrones, share your favorite mountain trails, or discuss reconciliation in React, I'm all ears! Hit me up on <a href="https://x.com/Anurag__V" target="_blank" rel="noopener noreferrer" className="text-fuchsia-500 no-underline font-normal hover:text-fuchsia-600">Twitter</a> anytime.
                </p>
                <br />
                <p>For a more formal approach, please complete the contact form below. I assure you a response promptly. Looking forward to hearing from you!</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row gap-8 md:justify-between mb-6">
                    <div className="w-full flex justify-center sm:justify-start">
                        <div className="w-11/12 sm:w-full flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" name="name" placeholder="Gayathri" required className="w-full px-3 py-2 rounded-sm mt-2 bg-[rgb(5,5,5)] border-none outline-none placeholder:text-xs sm:placeholder:text-sm text-sm"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center sm:justify-start">
                        <div className="w-11/12 sm:w-full flex flex-col">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" name="email" placeholder="gayathri.techlead123@example.com" required className="w-full px-3 py-2 rounded-sm mt-2 bg-[rgb(5,5,5)] border-none outline-none placeholder:text-xs sm:placeholder:text-sm text-sm"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center sm:justify-start">
                    <div className="w-11/12 sm:w-full flex flex-col mb-6">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" cols="30" rows="6" placeholder="Enter your message" className="w-full px-3 py-2 rounded-sm mt-2 bg-[rgb(5,5,5)] border-none outline-none placeholder:text-xs sm:placeholder:text-sm text-sm"></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700 px-4 py-2 rounded-sm mt-2">Submit</button>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Contact
