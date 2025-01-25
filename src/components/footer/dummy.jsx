const isfalse = false
const handleToggle = (index) => {
    if (windowWidth < 1024) {
        setOpen(open === index ? null : index);
    } else {
        setOpen(isfalse);
    }
};


const handleToggle = (index) => {
    if (windowWidth < 1024) {
        setOpen(open === index ? null : index);  // For mobile: toggle open/close
    } else {
        setOpen(index);  // For larger screens: always open the clicked section
    }
};
