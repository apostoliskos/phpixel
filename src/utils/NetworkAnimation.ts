// Define types for our configuration for better autocompletion
interface NetworkConfig {
	density: number;
	maxDistance: number;
	speed: number;
	friction: number;
	mouse: {
		radius: number;
		strength: number;
	};
	bounce: {
		repulsionRadius: number;
		repulsionStrength: number;
	};
	// NEW: wandering movement settings
	wander: {
		strength: number; // How much random "jitter" is added each frame
	};
	style: {
		dotColor: string;
		dotSize: number;
		lineColorRGB: string;
		lineWidth: number;
	};
}

interface Dot {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

export class NetworkAnimation {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private wrapper: HTMLElement;
	private config: NetworkConfig;
	private dots: Dot[] = [];
	private width: number = 0;
	private height: number = 0;
	private mouse = { x: null as number | null, y: null as number | null };
	private animationFrameId: number = 0;
	private resizeObserver: ResizeObserver;

	constructor(canvasElement: HTMLCanvasElement, customConfig?: Partial<NetworkConfig>) {
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext('2d')!;
		this.wrapper = this.canvas.parentElement!;

		// Default configuration
		this.config = {
			density: 6000,
			maxDistance: 120,
			speed: 0.15,
			friction: 0.96,
			mouse: {
				radius: 160,
				strength: 0.02
			},
			bounce: {
				repulsionRadius: 40,
				repulsionStrength: 0.2
			},
			// NEW: Default wandering strength
			wander: {
				strength: 0.11
			},
			style: {
				dotColor: '#6bbcff',
				dotSize: 2,
				lineColorRGB: '107, 188, 255',
				lineWidth: 1
			},
			...customConfig
		};

		this.resizeObserver = new ResizeObserver(() => this.resize());
		this.resizeObserver.observe(this.wrapper);

		this.initEventListeners();
		this.resize();
		this.animate();
	}

	private initEventListeners() {
		window.addEventListener('mousemove', this.handleMouseMove);
		window.addEventListener('mouseleave', this.handleMouseLeave);
	}

	private handleMouseMove = (e: MouseEvent) => {
		const rect = this.canvas.getBoundingClientRect();
		this.mouse.x = e.clientX - rect.left;
		this.mouse.y = e.clientY - rect.top;
	};

	private handleMouseLeave = () => {
		this.mouse.x = null;
		this.mouse.y = null;
	};

	private resize() {
		this.width = this.canvas.width = this.wrapper.clientWidth;
		this.height = this.canvas.height = this.wrapper.clientHeight;

		const targetCount = Math.floor((this.width * this.height) / this.config.density);

		if (this.dots.length < targetCount) {
			for (let i = this.dots.length; i < targetCount; i++) {
				this.dots.push({
					x: Math.random() * this.width,
					y: Math.random() * this.height,
					vx: (Math.random() - 0.5) * this.config.speed,
					vy: (Math.random() - 0.5) * this.config.speed,
				});
			}
		} else {
			this.dots.splice(targetCount);
		}
	}

	private animate = () => {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (const d of this.dots) {
			// --- ADDED: Constant Movement (Wander Force) ---
			// This applies a tiny random push so dots never fully stop.
			d.vx += (Math.random() - 0.5) * this.config.wander.strength;
			d.vy += (Math.random() - 0.5) * this.config.wander.strength;

			d.x += d.vx;
			d.y += d.vy;
			d.vx *= this.config.friction;
			d.vy *= this.config.friction;

			if (this.mouse.x !== null && this.mouse.y !== null) {
				const dx = this.mouse.x - d.x;
				const dy = this.mouse.y - d.y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < this.config.mouse.radius && dist > 0) {
					const force = (this.config.mouse.radius - dist) / this.config.mouse.radius;
					d.vx += (dx / dist) * force * this.config.mouse.strength;
					d.vy += (dy / dist) * force * this.config.mouse.strength;
				}
			}

			if (d.x < 0) { d.x = 0; d.vx *= -1; }
			if (d.x > this.width) { d.x = this.width; d.vx *= -1; }
			if (d.y < 0) { d.y = 0; d.vy *= -1; }
			if (d.y > this.height) { d.y = this.height; d.vy *= -1; }

			this.ctx.beginPath();
			this.ctx.arc(d.x, d.y, this.config.style.dotSize, 0, Math.PI * 2);
			this.ctx.fillStyle = this.config.style.dotColor;
			this.ctx.fill();
		}

		for (let i = 0; i < this.dots.length; i++) {
			for (let j = i + 1; j < this.dots.length; j++) {
				const a = this.dots[i];
				const b = this.dots[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < this.config.bounce.repulsionRadius && dist > 0) {
					const force = (this.config.bounce.repulsionRadius - dist) / this.config.bounce.repulsionRadius;
					const px = (dx / dist) * force * this.config.bounce.repulsionStrength;
					const py = (dy / dist) * force * this.config.bounce.repulsionStrength;
					a.vx += px; a.vy += py;
					b.vx -= px; b.vy -= py;
				}

				if (dist < this.config.maxDistance) {
					const opacity = 1 - (dist / this.config.maxDistance);
					this.ctx.strokeStyle = `rgba(${this.config.style.lineColorRGB}, ${opacity})`;
					this.ctx.lineWidth = this.config.style.lineWidth;
					this.ctx.beginPath();
					this.ctx.moveTo(a.x, a.y);
					this.ctx.lineTo(b.x, b.y);
					this.ctx.stroke();
				}
			}
		}

		this.animationFrameId = requestAnimationFrame(this.animate);
	};

	public destroy() {
		cancelAnimationFrame(this.animationFrameId);
		this.resizeObserver.disconnect();
		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseleave', this.handleMouseLeave);
	}
}