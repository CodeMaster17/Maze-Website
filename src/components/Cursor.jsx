import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const bobRef = useRef(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [ballX, setBallX] = useState(0);
    const [ballY, setBallY] = useState(0);

    useEffect(() => {
        const bob = bobRef.current;
        let speed = 0.2;
        const animate = () => {
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;

            setBallX(ballX + distX * speed);
            setBallY(ballY + distY * speed);

            bob.style.left = ballX + 'px';
            bob.style.top = ballY + 'px';

            requestAnimationFrame(animate);
        };

        animate();
    }, [ballX, ballY, mouseX, mouseY]);

    const handleMouseMove = (e) => {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
    };

    const handleBobClick = () => {
        bobRef.current.classList.remove('active');
        void bobRef.current.offsetWidth;
        bobRef.current.classList.add('active');
    };

    return (
        <div
            ref={bobRef}
            className="bob"
            onMouseMove={handleMouseMove}
            onClick={handleBobClick}
        ></div>
    );
};

export default Cursor