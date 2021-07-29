import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contactpg">
                <div id="contactImg">
                    <img src="./img/maidenRappel.jpg" alt="Rappeling off of mountain" />
                </div>
                <div class="emailWrapper">
                    <div class="contactText">
                        <h1>Interested in documenting your next adventure?</h1>
                        <h2>Shoot me an email to schedule a consultation.</h2>
                    </div>
                    <div id="form">
                        <form class="emailForm" action="mailto:someone@example.com" method="post" enctype="text/plain">
                            <input class="name" type="text" name="name" placeholder="Your Name" />
                            <br />
                            <input class="email" type="text" name="mail" placeholder="Your Email" />
                            <br />
                            <textarea class="emailText" type="text" name="comment" placeholder="Tell me about your next adventure here..."></textarea>
                            <br />
                            <input class="submitBtn" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;