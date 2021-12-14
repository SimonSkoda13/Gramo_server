# Gramo_server

##Change ormconfig.json

Then please run these commands
- npm run typeorm schema:log
- npm run typeorm schema:sync
- npm run typeorm migration:create -n FirstRefactor
- npm run typeorm migration:run