document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("parallaxCanvas");
    if (!canvas) {
        console.error("Canvas element not found.");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bars = [];

    class Bar {
        constructor(x, width, speed, opacitySpeed) {
            this.x = x;
            this.width = width;
            this.y = Math.random() * canvas.height;
            this.height = 500;
            this.speed = speed;
            this.opacity = Math.random();
            this.opacitySpeed = opacitySpeed;
            this.scale = 1;
            this.pulseSpeed = Math.random() * 0.002 + 0.001; // Slow pulse effect
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -this.height;
                this.opacity = Math.random();
            }

            // Fade in/out effect
            this.opacity += this.opacitySpeed;
            if (this.opacity >= 1 || this.opacity <= 0.2) {
                this.opacitySpeed *= -1;
            }

            // Slow pulse effect
            this.scale = 1 + Math.sin(Date.now() * this.pulseSpeed) * 0.1;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 191, 58, ${this.opacity})`;
            ctx.fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale);
        }
    }

    function initBars() {
        const barCount = Math.floor(canvas.width / 5); // Adjust bar count based on screen size
        for (let i = 0; i < barCount; i++) {
            const x = i * (canvas.width / barCount);
            const width = Math.random() * 2;
            const speed = Math.random() * 2 + 0.5;
            const opacitySpeed = Math.random() * 0.02 - 0.01;
            bars.push(new Bar(x, width, speed, opacitySpeed));
        }
    }

    function animate() {
        // Set background color
        ctx.fillStyle = "#363B49";  // Use the same color as the body background
        ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill entire canvas

        bars.forEach(bar => {
            bar.update();
            bar.draw();
        });

        requestAnimationFrame(animate);
    }

    initBars();
    animate();

    // Ensure canvas always matches the size of the window
    window.addEventListener("resize", () => {
        // Update canvas size on window resize
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Reinitialize bars to fit new canvas size
        bars.length = 0;
        initBars();
    });
});
