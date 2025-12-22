// Define types for our configuration
interface NetworkConfig {
	density: number;
	maxDistance: number;
	speed: number;
	friction: number;
	mouse: { radius: number; strength: number };
	bounce: { repulsionRadius: number; repulsionStrength: number };
	wander: { strength: number };
	click: { radius: number; strength: number };
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
	size: number;
	targetSize: number;
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

		// 1. Define the Desktop Config (The one you like)
		const desktopDefaults: NetworkConfig = {
			density: 6000,
			maxDistance: 120,
			speed: 0.15,
			friction: 0.96,
			mouse: { radius: 160, strength: 0.02 },
			bounce: { repulsionRadius: 40, repulsionStrength: 0.2 },
			wander: { strength: 0.05 },
			click: { radius: 200, strength: 8 },
			style: {
				dotColor: '#6bbcff',
				dotSize: 2,
				lineColorRGB: '107, 188, 255',
				lineWidth: 1
			}
		};

		// 2. Define the Mobile Config (Optimized for performance and small screens)
		const mobileDefaults: NetworkConfig = {
			density: 7000,       // Higher number = FEWER dots (crucial for mobile CPU)
			maxDistance: 90,     // Shorter lines for smaller screens
			speed: 0.15,         // Slightly slower for elegance
			friction: 0.96,
			mouse: { radius: 100, strength: 0.03 },
			bounce: { repulsionRadius: 25, repulsionStrength: 0.15 },
			wander: { strength: 0.04 },
			click: { radius: 150, strength: 10 },
			style: {
				dotColor: '#6bbcff',
				dotSize: 1.5,      // Smaller dots look sharper on mobile
				lineColorRGB: '107, 188, 255',
				lineWidth: 0.8
			}
		};

		// 3. Detect device and merge configs
		const isMobile = window.innerWidth < 768;
		this.config = {
			...(isMobile ? mobileDefaults : desktopDefaults),
			...customConfig // customConfig still takes final priority
		};

		this.resizeObserver = new ResizeObserver(() => this.resize());
		this.resizeObserver.observe(this.wrapper);

		this.initEventListeners();
		this.resize();
		this.animate();
	}

	private initEventListeners() {
		// Desktop Input
		window.addEventListener('mousemove', this.handleInputMove);
		window.addEventListener('mouseleave', this.handleInputEnd);
		window.addEventListener('mousedown', this.handleMouseDown);

		// Mobile Input
		window.addEventListener('touchstart', this.handleTouch, { passive: true });
		window.addEventListener('touchmove', this.handleTouch, { passive: true });
		window.addEventListener('touchend', this.handleInputEnd, { passive: true });
	}

	private handleInputMove = (e: MouseEvent) => {
		const rect = this.canvas.getBoundingClientRect();
		this.mouse.x = e.clientX - rect.left;
		this.mouse.y = e.clientY - rect.top;
	};

	private handleTouch = (e: TouchEvent) => {
		if (e.touches.length > 0) {
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = e.touches[0].clientX - rect.left;
			this.mouse.y = e.touches[0].clientY - rect.top;
		}
	};

	private handleInputEnd = () => {
		this.mouse.x = null;
		this.mouse.y = null;
	};

	private handleMouseDown = () => {
		if (this.mouse.x === null || this.mouse.y === null) return;
		for (const d of this.dots) {
			const dx = d.x - this.mouse.x;
			const dy = d.y - this.mouse.y;
			const dist = Math.sqrt(dx * dx + dy * dy);
			if (dist < this.config.click.radius) {
				const power = (this.config.click.radius - dist) / this.config.click.radius;
				d.vx += (dx / dist) * power * this.config.click.strength;
				d.vy += (dy / dist) * power * this.config.click.strength;
			}
		}
	};

	private resize() {
		this.width = this.canvas.width = this.wrapper.clientWidth;
		this.height = this.canvas.height = this.wrapper.clientHeight;

		// Recalculate target count based on active config (mobile vs desktop)
		const targetCount = Math.floor((this.width * this.height) / this.config.density);

		if (this.dots.length < targetCount) {
			for (let i = this.dots.length; i < targetCount; i++) {
				this.dots.push({
					x: Math.random() * this.width,
					y: Math.random() * this.height,
					vx: (Math.random() - 0.5) * this.config.speed,
					vy: (Math.random() - 0.5) * this.config.speed,
					size: this.config.style.dotSize,
					targetSize: this.config.style.dotSize
				});
			}
		} else {
			this.dots.splice(targetCount);
		}
	}

	private animate = () => {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (const d of this.dots) {
			d.vx += (Math.random() - 0.5) * this.config.wander.strength;
			d.vy += (Math.random() - 0.5) * this.config.wander.strength;
			d.x += d.vx;
			d.y += d.vy;
			d.vx *= this.config.friction;
			d.vy *= this.config.friction;

			d.targetSize = this.config.style.dotSize;

			if (this.mouse.x !== null && this.mouse.y !== null) {
				const dx = this.mouse.x - d.x;
				const dy = this.mouse.y - d.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < this.config.mouse.radius && dist > 0) {
					const force = (this.config.mouse.radius - dist) / this.config.mouse.radius;
					d.vx += (dx / dist) * force * this.config.mouse.strength;
					d.vy += (dy / dist) * force * this.config.mouse.strength;
					d.targetSize = this.config.style.dotSize * (1 + force * 1.5);
				}
			}

			d.size += (d.targetSize - d.size) * 0.1;

			// Wrap-around logic for smoother mobile experience
			if (d.x < 0) d.x = this.width;
			if (d.x > this.width) d.x = 0;
			if (d.y < 0) d.y = this.height;
			if (d.y > this.height) d.y = 0;

			this.ctx.beginPath();
			this.ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
			this.ctx.fillStyle = this.config.style.dotColor;
			this.ctx.fill();
		}

		for (let i = 0; i < this.dots.length; i++) {
			const a = this.dots[i];

			// Line to mouse node
			if (this.mouse.x !== null && this.mouse.y !== null) {
				const mdx = a.x - this.mouse.x;
				const mdy = a.y - this.mouse.y;
				const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
				if (mdist < this.config.maxDistance) {
					const mOpacity = 1 - (mdist / this.config.maxDistance);
					this.ctx.strokeStyle = `rgba(${this.config.style.lineColorRGB}, ${mOpacity * 0.5})`;
					this.ctx.lineWidth = this.config.style.lineWidth;
					this.ctx.beginPath();
					this.ctx.moveTo(a.x, a.y);
					this.ctx.lineTo(this.mouse.x, this.mouse.y);
					this.ctx.stroke();
				}
			}

			for (let j = i + 1; j < this.dots.length; j++) {
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
		window.removeEventListener('mousemove', this.handleInputMove);
		window.removeEventListener('mouseleave', this.handleInputEnd);
		window.removeEventListener('mousedown', this.handleMouseDown);
		window.removeEventListener('touchstart', this.handleTouch);
		window.removeEventListener('touchmove', this.handleTouch);
		window.removeEventListener('touchend', this.handleInputEnd);
	}
}