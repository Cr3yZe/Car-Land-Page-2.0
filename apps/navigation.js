allNavigationFunctions();

function allNavigationFunctions () {
    reloadPage();
    showMenu();
    showMenuFixed();
    animateToggle();
    changeToggleColor();
    hiddeNavigationFixed();
    hiddeMenuWhenClicked();
    closeMenu();
    closeMenuFixed();

    // Reload the page when the logo icon or logo name is clicked. It is applied for the main navigation and for the fixed one.
    function reloadPage () {

        // Reload the page on main navigation.
        logoNav.addEventListener('click', (ev) => {
            let target = ev.target;

            if (target.classList.contains('logo') ||
                target.classList.contains('name')) {
                    location.reload(true);
                }
        })

        // Reload the page on fixed navigation.
        logoNavFixed.addEventListener('click', (ev) => {
            let target = ev.target;

            if (target.classList.contains('logo') ||
                target.classList.contains('name')) {
                    location.reload(true);
                }
        })

    }

    // Show the menu when the toggle btn is clicked.
    function showMenu () {
        navigation.addEventListener('click', (ev) => {
            let target = ev.target;

            // Check if the target happens on the toggle btn.
            if (target.classList.contains('up') ||
                target.classList.contains('middle') ||
                target.classList.contains('down') ||
                target.classList.contains('toggle')) {
                    menu.classList.toggle('hidde');

                    // Set the transition effect.
                    menu.style.transition = '450ms';

                    // Set the transition of the menu back to 0 to not disturb responsivnes of the page.
                    setTimeout(function () {
                        menu.style.transition = '0ms';
                    }, 100);
                }
        });
    }

    // Show the menu when the toggle btn is clicked.
    function showMenuFixed () {
        navigationFixed.addEventListener('click', (ev) => {
            let target = ev.target;

            // Check if the target happens on the toggle btn.
            if (target.classList.contains('up') ||
                target.classList.contains('middle') ||
                target.classList.contains('down') ||
                target.classList.contains('toggle')) {
                    menuFixed.classList.toggle('hidde-fixed');

                    // Set the transition effect.
                    menuFixed.style.transition = '450ms';

                    // Set the transition of the menu back to 0 to not disturb responsivnes of the page.
                    setTimeout(function () {
                        menuFixed.style.transition = '0ms';
                    }, 100);
                }
        })
    }

    // Make the animation of the toggle btn when clicked.
    function animateToggle () {
        navigation.addEventListener('click', (ev) => {
            let target = ev.target;

            if (target.classList.contains('up') ||
                target.classList.contains('middle') ||
                target.classList.contains('down') ||
                target.classList.contains('toggle')) {

                    // If the toggle btn is clicked add or remove the classes that make the animation.
                    upLine.classList.toggle('up-rotate');
                    middleLine.classList.toggle('middle-hide');
                    downLine.classList.toggle('down-rotate');
                }
        });

        navigationFixed.addEventListener('click', (ev) => {
            let target = ev.target;

            if (target.classList.contains('up') ||
                target.classList.contains('middle') ||
                target.classList.contains('down') ||
                target.classList.contains('toggle')) {

                    // If the toggle btn is clicked add or remove the classes that make the animation.
                    upLineFixed.classList.toggle('up-rotate-fixed');
                    middleLineFixed.classList.toggle('middle-hide-fixed');
                    downLineFixed.classList.toggle('down-rotate-fixed');
                }
        });
    }

    function changeToggleColor () {

        // Set the color animation when mouse enter the toggle btn.
        toggleContainer.addEventListener('mouseenter', (ev) => {
            let target = ev.target;

            // Set all the elemnts from the toggle btn into an array.
            let linesArray = Array.from(toggleContainer.children);
            
            // If the mouse is over toggle btn loop through every index and set its color.
            if (target.classList.contains('toggle')) {
                for (let i = 0; i < linesArray.length; i++) {
                    let x = linesArray[i];

                    x.style.border = "2px solid var(--second-color)";
                    x.style.backgroundColor = "var(--second-color)";
                }
            }
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Make the animation more animated
            // if (target.classList.contains('toggle')) {
            //     toggleContainer.children[2].style.border = "2px solid var(--second-color)"
            //     toggleContainer.children[2].style.transition = "100ms"
            //     toggleContainer.children[1].style.border = "2px solid var(--second-color)"
            //     toggleContainer.children[1].style.transition = "300ms"
            //     toggleContainer.children[0].style.border = "2px solid var(--second-color)"
            //     toggleContainer.children[0].style.transition = "600ms"
            // }

            // if (target.classList.contains('toggle')) {
            //     for (let i = 0; i < linesArray.length; i++) {
            //         let x = i * 200;

            //         linesArray[i].style.border = "2px solid var(--second-color)"

            //         linesArray[i].style.transition = `${x}ms`
            //     }
            // }
        })

        // Set the color animation when mouse leave the toggle btn.
        toggleContainer.addEventListener('mouseleave', (ev) => {
            let target = ev.target;

            // Set all the elemnts from the toggle btn into an array.
            let linesArray = Array.from(toggleContainer.children);
            
            // If the mouse is over toggle btn loop through every index and set its color.
            if (target.classList.contains('toggle')) {
                for (let i = 0; i < linesArray.length; i++) {
                    let x = linesArray[i];
                    
                    x.style.border = "2px solid var(--main-color)";
                    x.style.backgroundColor = "var(--main-color)";
                }
            }
        })

        // Set the color animation when mouse leave the toggle btn.
        toggleContainerFixed.addEventListener('mouseenter', (ev) => {
            let target = ev.target;

            // Set all the elemnts from the toggle btn into an array.
            let linesArray = Array.from(toggleContainerFixed.children);
            
            // If the mouse is over toggle btn loop through every index and set its color.
            if (target.classList.contains('toggle')) {
                for (let i = 0; i <= linesArray.length-1; i++) {
                    let x = linesArray[i];

                    x.style.border = "2px solid var(--third-color)";
                    x.style.backgroundColor = "var(--third-color)";
                }
            }
        })

        // Set the color animation when mouse leave the toggle btn.
        toggleContainerFixed.addEventListener('mouseleave', (ev) => {
            let target = ev.target;

            // Set all the elemnts from the toggle btn into an array.
            let linesArray = Array.from(toggleContainerFixed.children);
            
            // If the mouse is over toggle btn loop through every index and set its color.
            if (target.classList.contains('toggle')) {
                for (let i = 0; i <= linesArray.length-1; i++) {
                    let x = linesArray[i];
                    
                    x.style.border = "2px solid var(--main-color)";
                    x.style.backgroundColor = "var(--main-color)";
                }
            }
        })
    }

    // Hide and show the fixed navigation when necessary.
    function hiddeNavigationFixed () {
        window.addEventListener('scroll', () => {
            // Assign the last value of the scrollY to lastScroll variable. This it is used to check every scroll.
            let lastScroll = window.scrollY;
            
            // If the last Scroll is greater than 50px show the fixed navigation;
            if (lastScroll >= 50) {
                navigationFixed.classList.remove('hidde-fixed');
                navigationFixed.style.transition = '700ms';

                if (!menu.classList.contains('hidde')) {
                    upLine.classList.remove('up-rotate');
                    middleLine.classList.remove('middle-hide');
                    downLine.classList.remove('down-rotate');
                    
                    menu.classList.add('hidde');
                    
                    menu.style.transition = "450ms";
                }
                
                setTimeout(() => {
                    menu.style.transition = '0ms'
                }, 1);

                setTimeout(() => {
                    navigationFixed.style.transition = "450ms";
                }, 1);

            // If the lastScroll if less than 50px hidde the fixed navigation.
            } else if (lastScroll <= 50) {
                navigationFixed.classList.add('hidde-fixed');
                
                let navigationFixedChildren = Array.from(navigationFixed.children);

                for (let i = 0; i < navigationFixedChildren.length; i++) {
                    navigationFixedChildren[i].style.opacity = '0';

                    setTimeout(() => {
                        navigationFixedChildren[i].style.opacity = '1';
                    }, 200);
                }
            }

            lastScroll = window.scrollY;
        })
    }

    function hiddeMenuWhenClicked () {
        menu.addEventListener('click', (ev) => {
            let target = ev.target;

            // Set whatever class is targeted on the variable classes and meke it into an array to be able to get the class back as a string;
            let classes = Array.from(target.classList);
            
            
            classes.forEach((element) => {

                // Set the class name into a buffer, className, that will be used as custom value into the switch;
                let className = element;

                switch (className) {
                    case 'home-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');

                        menu.style.transition = "450ms";

                        break;
                    case 'features-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');
                        
                        menu.style.transition = "450ms";

                        break;
                    case 'colors-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');
                        
                        menu.style.transition = "450ms";

                        break;
                    case 'specs-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');
                        
                        menu.style.transition = "450ms";
                        
                        break;
                    case 'our-team-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');
                        
                        menu.style.transition = "450ms";
                        
                        break;
                    case 'dealer-a':
                        menu.classList.toggle('hidde');
                        
                        upLine.classList.remove('up-rotate');
                        middleLine.classList.remove('middle-hide');
                        downLine.classList.remove('down-rotate');
                        
                        menu.style.transition = "450ms";
                        
                        break;
                    default:
                        console.log(false);
                }

            })
        })
    }

    function closeMenu () {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1000) {
                if (!menu.classList.contains('hidde')) {
                    menu.classList.add('hidde');

                    if (upLine.classList.contains('up-rotate') ||
                        middleLine.classList.contains('middle-hide')||
                        downLine.classList.contains('down-rotate')) {
                            upLine.classList.remove('up-rotate');
                            middleLine.classList.remove('middle-hide');
                            downLine.classList.remove('down-rotate');
                        }
                }
            }
        })        
    }

    function closeMenuFixed () {
        
        navigationFixed.addEventListener('click', (ev) => {
            let target = ev.target;

            if (target.classList.contains('up') ||
                target.classList.contains('middle') ||
                target.classList.contains('down') ||
                target.classList.contains('toggle')) {
                    let lastScrollHeight = window.scrollY;
                }  
            })
        }

        window.addEventListener('scroll', (lastScrollHeight) => {

            if (lastScrollHeight != window.scrollY) {
                if (!menuFixed.classList.contains('hidde-fixed')) {
                    menuFixed.classList.add('hidde-fixed');

                    menuFixed.style.transition = '450ms';

                    // Set the transition of the menu back to 0 to not disturb responsivnes of the page.
                    setTimeout(function () {
                        menuFixed.style.transition = '0ms';
                    },100);

                    upLineFixed.classList.toggle('up-rotate-fixed');
                    middleLineFixed.classList.toggle('middle-hide-fixed');
                    downLineFixed.classList.toggle('down-rotate-fixed');
                }
            }
        })
}
