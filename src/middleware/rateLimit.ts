import { RateLimiterMemory } from 'rate-limiter-flexible';

type InfoRate = {
	remainingPoints: number;
	msBeforeNext: number;
	consumedPoints: number;
	isFirstInDuration: boolean;
};

const POINTS = 100;
const DURATION = 15;

const rateLimiter = new RateLimiterMemory({
	points: POINTS, // Número de solicitudes permitidas
	duration: 60 * DURATION, // Ventana de 15 minutos
});

export async function limiter(ip: string) {
	try {
		await rateLimiter.consume(ip);

		return 'OK';
	} catch (error) {
		const e = error as InfoRate;

		if (e.remainingPoints === 0 && e.consumedPoints > POINTS) {
			return 'Too Many Requests';
		} else {
			return 'Error ' + error;
		}
	}
}
