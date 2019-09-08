# Petful Server

Pet stuff

## How to use pet server

GET /api/pets/cats for cats <br />
GET /api/pets/dogs for dogs <br />
GET /api/tickets for list of current adopters <br />
POST /api/tickets with body { username, email } to add a ticket to the queue <br />
POST /api/adopt to adopt with body { ticketId, petId, petType }. petType should be a string either 'cats' or 'dogs'