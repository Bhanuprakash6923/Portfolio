 function setDarkMode() {
                document.body.classList.add('dark-mode');
            }
            function setLightMode() {
                document.body.classList.remove('dark-mode');
            }
            function hireMe() {
                window.location.href = "mailto:bhanuprakashchiruvri@gmail.com";
            }
            function openResume() {
                const link = document.createElement('a');
                link.href = 'student resume.pdf'; 
                link.download = 'student resume.pdf'; 
                link.target = '_blank'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
