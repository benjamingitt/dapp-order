## Description

API smart-contract for Ethereum Rinkeby Testnet. To find counter orders and execution through
NestJS Project, DB Postgresql, Docker.

## Installation

```bash
$ npm install
$ docker-compose up -d
$ npm run db:migrate
```

```bash
# start mode
$ npm run start

# dev mode
$ npm run start:dev

```

## Endpoints

### save orders from the smart contract to the database

( get metod )
/check/give

### Find counter orders

( get metod )
/endpoint/order-list

### Send matches to smart contract

( post metod )
/endpoint/order-match

```
{
"match":
  {
    "id1": "???",
    "id2": "???"
  }
}
```
