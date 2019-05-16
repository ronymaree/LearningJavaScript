let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) { // this is a METHOD
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft    
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//challenge
// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(4))
