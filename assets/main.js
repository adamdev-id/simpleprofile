var clicked = 0;
        $(document).ready(function() 
        {
            $('contactme').on('click', function()
            {
                $('#modal_contactme').modal('show');
            });

            $("div").click(function() 
            {
                if (clicked == 0)
                {
                    verificationComplete();
                    setTimeout(function()
                    { 
                        // var url = "";
                        // $(location).attr('href',url);
                        exec_countdown();
                        clicked = 1;
                    }, 2500);
                }
            }
            );
            
        });

        function fadeOut(element) 
        {
            var opacity = 1;  // initial opacity
            var timer = setInterval(function () 
            {
                if (opacity <= 0.1)
                {
                    clearInterval(timer);
                }
                element.style.opacity = opacity;
                opacity -= 0.1;
            }, 50);
        }
        
        function exec_countdown()
        {
            var img = document.getElementById('image_X');
            fadeOut(img);
            img.parentNode.removeChild(img);
            swal.close()
            document.body.style.setProperty('overflow', 'visible');
        }

        function verificationComplete()
        {
            swal({
                title: "Success",
                text: "You are being Redirected",
                icon: "success",
                buttons: false,
                closeOnClickOutside: false,
            })
            //swal({buttons: false}, "Verification Success!", "You are being Redirected", "success");
        }
