function send(){
    let toEmail = document.querySelector('input[name="toEmail"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let body = document.querySelector('textarea[name="body"]').value;
    alert(`https://openweb.fwh.is/email_code/send.php?toEmail=${toEmail}&subject=${subject}&body=${encodeURIComponent(body)}`);
    let req = new EasyHTTPRequest(`https://openweb.fwh.is/email_code/send.php?toEmail=${toEmail}&subject=${subject}&body=${encodeURIComponent(body)}`, "POST");
    req.execute(() => {
        if (req.request.readyState === XMLHttpRequest.DONE) {
            if (req.request.status === 200) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email. Please try again.");
            }
        }
    });
}