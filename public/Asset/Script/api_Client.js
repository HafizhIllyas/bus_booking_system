const API_BASE_URL = 'https://bus-booking-system-0hap.onrender.com'; // deployed backend

function registerUser(username) {
    return fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    }).then(res => res.json())
      .then(data => { if (data.error) throw new Error(data.error); return data; });
}

function getAllRoutes() {
    return fetch(`${API_BASE_URL}/api/routes`)
        .then(res => res.json());
}

function createRoute(routeData) {
    return fetch(`${API_BASE_URL}/api/routes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routeData)
    }).then(res => res.json())
      .then(data => { if (data.error) throw new Error(data.error); return data; });
}

function deleteRoute(routeId) {
    return fetch(`${API_BASE_URL}/api/routes/${routeId}`, { method: 'DELETE' })
        .then(res => res.json());
}

function createBooking(username, routeId) {
    return fetch(`${API_BASE_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, routeId })
    }).then(res => res.json())
      .then(data => { if (data.error) throw new Error(data.error); return data; });
}

function getUserBookings(username) {
    return fetch(`${API_BASE_URL}/api/bookings/user/${username}`)
        .then(res => res.json());
}

function getStatistics() {
    return fetch(`${API_BASE_URL}/api/reports/statistics`)
        .then(res => res.json());
}
