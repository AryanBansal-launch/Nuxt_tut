export default function handler(request, response) {
  const country = request.headers['visitor-ip-country'];
  const region = request.headers['visitor-ip-region'];
  const city = request.headers['visitor-ip-city'];

  response.status(200).json({
    location: `${city}, ${region}, ${country}`,
    method: request.method,
  });
}
