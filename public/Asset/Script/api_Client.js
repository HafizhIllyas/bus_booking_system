var API_BASE_URL = 'https://bus-booking-system-0hap.onrender.com';

function registerUser(username) {
    return fetch(API_BASE_URL + '/api/users/register', { // added /api
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username })
    })
    .then(response => response.json().then(data => {
        if (!response.ok) throw new Error(data.error || 'Registration failed');
        return data;
    }))
    .catch(error => {
        console.error('Register error:', error);
        throw error;
    });
}

function getAllRoutes() {
    return fetch(API_BASE_URL + '/api/routes') // added /api
        .then(response => response.json())
        .catch(error => { console.error('Get routes error:', error); throw error; });
}

function createRoute(routeData) {
    return fetch(API_BASE_URL + '/api/routes', { // added /api
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routeData)
    })
    .then(response => response.json().then(data => {
        if (!response.ok) throw new Error(data.error || 'Failed to create route');
        return data;
    }));
}

function deleteRoute(routeId) {
    return fetch(API_BASE_URL + '/api/routes/' + routeId, { method: 'DELETE' }) // added /api
        .then(response => response.json());
}

function createBooking(username, routeId) {
    return fetch(API_BASE_URL + '/api/bookings', { // added /api
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, routeId: routeId })
    })
    .then(response => response.json().then(data => {
        if (!response.ok) throw new Error(data.error || 'Booking failed');
        return data;
    }));
}

function getUserBookings(username) {
    return fetch(API_BASE_URL + '/api/bookings/user/' + username) // added /api
        .then(response => response.json());
}

function getStatistics() {
    return fetch(API_BASE_URL + '/api/reports/statistics') // added /api
        .then(response => response.json());
}
