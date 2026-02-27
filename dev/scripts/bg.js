document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("parallaxCanvas");
    const ctx = canvas.getContext("2d");

    let DPR = window.devicePixelRatio || 1;

    function resizeCanvas() {
        canvas.width = window.innerWidth * DPR;
        canvas.height = window.innerHeight * DPR;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(DPR, DPR);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class BlobColumn {
        constructor(x) {
            this.x = x;
            this.y = Math.random() * canvas.height / DPR;
            this.width = 200 + Math.random() * 50; // ~250px wide columns
            this.height = 40 + Math.random() * 60;
            this.speed = 1 + Math.random() * 1.5; // downward speed
            this.opacity = 0.05 + Math.random() * 0.05;
        }

        update() {
            this.y += this.speed;
            if (this.y - this.height > window.innerHeight) {
                this.y = -this.height;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.shadowColor = "rgba(255, 255, 50, 0.8)";
            ctx.shadowBlur = 50;
            ctx.fillStyle = "rgba(255, 255, 50, 0.2)";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.restore();
        }
    }

    const columns = [];
    const COLUMN_SPACING = 220; // roughly 250px per column
    for (let x = 0; x < window.innerWidth; x += COLUMN_SPACING) {
        columns.push(new BlobColumn(x));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);

        // dark background
        ctx.fillStyle = "#3f434d";
        ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);

        ctx.globalCompositeOperation = "lighter";

        columns.forEach(col => {
            col.update();
            col.draw();
        });

        ctx.globalCompositeOperation = "source-over";

        requestAnimationFrame(animate);
    }

    animate();

    //Something
    let Code = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];

    let Index = 0;

    // Listen for keydown events
    document.addEventListener('keydown', (e) => {
        if (e.key === Code[Index]) {
            Index++;
            if (Index === Code.length) {
                // Trigger
                window.location.href = "bird.html"
                Index = 0; // Reset
            }
        } else {
            Index = 0; // Reset upon wrong key
        }
    })
});