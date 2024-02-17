window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  function enlargeCertificate(element) {
    var enlargedCertificate = document.getElementById('enlargedCertificate');
    var enlargedCertificateImage = document.getElementById('enlargedCertificateImage');
    var certificateSrc = element.getAttribute('data-src');
    enlargedCertificateImage.src = certificateSrc;
    enlargedCertificate.style.display = "block";
  }
  
  function closeEnlargedCertificate() {
    var enlargedCertificate = document.getElementById('enlargedCertificate');
    enlargedCertificate.style.display = "none";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var certificates = document.querySelectorAll('.certificate');
    certificates.forEach(function(certificate) {
      certificate.addEventListener('click', function() {
        enlargeCertificate(certificate);
      });
    });
  });
  