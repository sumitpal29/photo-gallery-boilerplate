<template>
  <div class="footer-conatiner">
    <section id="contact" class="add-padding border-top-color2">
			<div class="container text-center">
				<div class="row">
					<div class="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
						<h1 class="big-text">Contact Me</h1>
						<p class="lead">Software Engineer. Lawyer.<br>Experienced Manager. Entrepreneur.</p>
						<p>Sinatra, Ruby on Rails, JavaScript, Node.js, Express.js, Backbone.js, Handlebars.js, jQuery, AJAX, HTML5, CSS3, SASS, SQL, APIs, Git, GitHub/Bitbucket, WordPress, Heroku, Responsive/Mobile Development.
						<p>Please feel free to contact me with questions, comments or collaborations.</p>
						<p>For more information, <a href="http://korenlc.com" target="_blank">visit my blog.</a></p>
          </div>
          <!--=== Contact Form ===-->
          <form id="contact-form" class="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" novalidate>
						<div class="form-group">
						  <label class="control-label" for="contact-name">Name</label>
						  <div class="controls">
							<input id="contact-name" name="contactName" placeholder="Your name" class="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name">
							<i class="fa fc_happy"></i>
						  </div>
						</div><!-- End name input -->
						<div class="form-group">
						  <label class="control-label" for="contact-mail">Email</label>
						  <div class=" controls">
							<input id="contact-mail" name="email" placeholder="Your email" class="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address">
							<i class="fa fc_envelop"></i>
						  </div>
						</div><!-- End email input -->
						<div class="form-group">
						  <label class="control-label" for="contact-message">Message</label>
							<div class="controls">
								<textarea id="contact-message" name="comments"  placeholder="Your message" class="form-control requiredField" data-new-placeholder="Your message" rows="6" data-error-empty="Please enter your message"></textarea>
								<i class="fa fc_Edit"></i>
							</div>
						</div><!-- End textarea -->
						<p><button name="submit" type="submit" class="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i class="fa fa-paper-plane"></i>Send Message</button></p>
						<input type="hidden" name="submitted" id="submitted" value="true" />
					</form><!-- End contact-form -->
				</div>
			</div>
		</section>

		<!-- ==============================================
		FOOTER
		=============================================== -->

		<footer id="main-footer" class="add-padding border-top-color2">

			<div class="container">

				<p><a href="http://korenlc.com" target="_blank">VISIT MY PAGE</a></p><br>

				<ul class="social-links text-center">
					<li><a href="https://twitter.com/" target="_blank"><i class="fc_facebook"></i></a></li>
					<li><a href="https://plus.google.com/" target="_blank"><i class="fc_facebook"></i></a></li>
					<li><a href="https://www.linkedin.com/" target="_blank"><i class="fc_facebook"></i></a></li>
				</ul>

				<p class="text-center">&copy; 2018 - Sumit Photographer</p>

			</div>

		</footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
a {
  color: #02b4e5;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #02b4e5;
  text-decoration: underline;
}

a:focus,
.btn:focus {
  outline: none;
}

.img-responsive {
  border: 1px solid #ddd;
}

/*-----------------------
----- Typo Styles ------
-------------------------*/
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 300;
}

.big-text {
  font-size: 50px;
  font-weight: 300;
  line-height: 62px;
  letter-spacing: 0.01em;
  word-spacing: 0.15em;
  text-transform: uppercase;
}

.section-title {
  margin-top: -20px;
  margin-bottom: 80px;
  text-align: center;
}

/*-----------------------
----- Layout Styles -----
-------------------------*/

.add-padding {
  padding-top: 50px;
  padding-bottom: 50px;
}

/*-----------------------
----- Color Styles ------
-------------------------*/

.bg-color1 {
  color: #fff;
  background: #509b9e;
}

.bg-color2 {
  color: #fff;
  background: #02b4e5;
}

.bg-color3 {
  color: #fff;
  background: #334959;
}

.border-bottom-color2 {
  border-bottom: 7px solid #02b4e5;
}

.border-top-color2 {
  border-top: 7px solid #02b4e5;
}

.color1 .service-icon,
.color1.service-item ul li:nth-child(2):before {
  background: #509b9e;
}

.color1 .service-icon:after {
  border: 3px solid #509b9e;
}

.color2 .service-icon,
.color2.service-item ul li:nth-child(2):before {
  background: #02b4e5;
}

.color2 .service-icon:after {
  border: 3px solid #02b4e5;
}

.color3 .service-icon,
.color3.service-item ul li:nth-child(2):before {
  background: #334959;
}

.color3 .service-icon:after {
  border: 3px solid #334959;
}

/*------------------
----- Buttons ------
--------------------*/

.btn-color1,
.btn-color2 {
  padding: 10px 30px;
  color: #fff;
  font-size: 21px;
  font-weight: 300;
  background: #02b4e5;
  outline: none !important;
  border-radius: 0;
  transition: opacity 0.2s ease-out;
}

.btn-color1 {
  background: #509b9e;
}

.btn-color1:hover,
.btn-color2:hover {
  color: #fff;
  opacity: 0.9;
}

.btn-color1:focus,
.btn-color1:active,
.btn-color2:focus,
.btn-color2:active {
  color: #fff;
}

.btn-color1 .fa,
.btn-color2 .fa {
  margin-right: 15px;
}

/*----------------------
----- Contact Styles ----
------------------------*/

#contact {
  // background-image:url('../images/bg-contact.png');
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-color: #fff;
}

#contact-form .form-group label {
  display: none;
  font-size: 18px;
  line-height: 24px;
  font-weight: 100;
  text-transform: uppercase;
}

#contact-form.no-placeholder .form-group label {
  display: block;
}

#contact-form .controls {
  padding: 0;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 2px;
}

#contact-form .form-control {
  background: transparent !important;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  height: 56px;
  font-size: 21px;
  line-height: 32px;
  font-weight: 100;
  padding-left: 64px;
  -webkit-transition: border-color 0.3s ease-out;
  transition: border-color 0.3s ease-out;
  border-radius: 2px;
}

#contact-form .form-group {
  position: relative;
}

#contact-form .form-group [class*="fa"] {
  display: block;
  width: 64px;
  position: absolute;
  top: 0;
  left: 5px;
  color: #e5e5e5;
  font-size: 24px;
  line-height: 53px;
  text-align: center;
  font-weight: 300;
  opacity: 0.5;
  transition: opacity 0.2s ease-out;
}

#contact-form.no-placeholder .form-group [class*="fa"] {
  top: 30px;
}

#contact-form .form-control:focus + [class*="fa"] {
  opacity: 1;
}

#contact-form textarea.form-control {
  height: auto;
  max-width: 100%;
  min-width: 100%;
  font-size: 21px;
  line-height: 32px;
  padding-top: 10px;
}

#contact-form .form-control:focus {
  background: #fff;
  border-bottom: 3px solid #02b4e5;
  outline: none;
  box-shadow: none;
  -webkit-transition: border-color 0.3s ease-in;
  transition: border-color 0.3s ease-in;
}

#contact-form .error-message {
  padding: 5px 0;
  position: absolute;
  top: -30px;
  right: 0;
  font-size: 14px;
  font-weight: 300;
  color: #ff0000;
  z-index: 10;
}

#contact-form .error-message:before {
  content: "\00d7";
  font-size: 21px;
  line-height: 21px;
  margin-right: 5px;
}

/*----------------------
----- Footer Styles ----
------------------------*/

#main-footer {
  background: #fff;
}

#main-footer p a {
  padding-bottom: 40px;
  font-size: 25px;
  text-decoration: none;
}

#main-footer p {
  text-align: center;
}

.social-links {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}

.social-links li {
  display: inline-block;
  margin: 0 5px;
  border-radius: 3px;
  box-shadow: 0 4px 0 transparent;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.social-links li a {
  display: block;
  color: #fff;
  font-size: 21px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #509b9e;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.social-links li a:hover {
  color: #fff;
  background: #02b4e5;
}
</style>
