var API_BASE_URL = 'https://bus-booking-system-0hap.onrender.com';

function registerUser(username) {
    return fetch(API_BASE_URL + '/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username })
    })
    .then(function(response) {
        return response.json().then(function(data) {
            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }
            return data;
        });
    })
    .catch(function(error) {
        console.error('Register error:', error);
        throw error;
    });
}

function getAllRoutes() {
    return fetch(API_BASE_URL + '/routes')
        .then(function(response) {
            return response.json();
        })
        .catch(function(error) {
            console.error('Get routes error:', error);
            throw error;
        });
}

function createRoute(routeData) {
    return fetch(API_BASE_URL + '/routes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(routeData)
    })
    .then(function(response) {
        return response.json().then(function(data) {
            if (!response.ok) {
                throw new Error(data.error || 'Failed to create route');
            }
            return data;
        });
    });
}

function deleteRoute(routeId) {
    return fetch(API_BASE_URL + '/routes/' + routeId, {
        method: 'DELETE'
    })
    .then(function(response) {
        return response.json();
    });
}

function createBooking(username, routeId) {
    return fetch(API_BASE_URL + '/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username, 
            routeId: routeId 
        })
    })
    .then(function(response) {
        return response.json().then(function(data) {
            if (!response.ok) {
                throw new Error(data.error || 'Booking failed');
            }
            return data;
        });
    });
}

function getUserBookings(username) {
    return fetch(API_BASE_URL + '/bookings/user/' + username)
        .then(function(response) {
            return response.json();
        });
}

function getStatistics() {
    return fetch(API_BASE_URL + '/reports/statistics')
        .then(function(response) {
            return response.json();
        });
}
