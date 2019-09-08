# Petful Server

A basic server thats uses a queue to keep track of cats, dogs and adoption requests.

## How to use pet server

GET /api/pets/cats for cats <br />
GET /api/pets/dogs for dogs <br />
GET /api/tickets for list of current adopters <br />
POST /api/tickets with body { username, email } to add a ticket to the queue <br />
POST /api/adopt to adopt with body { ticketId, petId, petType }. petType should be a string either 'cats' or 'dogs'

## Repos
https://github.com/thinkful-ei-emu/Nicholas-Andrew-Petful-Server <br />
https://github.com/thinkful-ei-emu/petful-client-nick-andrew

## Contributers
<ul>
<li> Nicholas Gunter
<li> Andrew Yin
</ul>