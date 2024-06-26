echo What should the version be?
read VERSION

docker buildx build -t thepaladinaoe2/schooldb:$VERSION .
docker push thepaladinaoe2/schooldb:$VERSION

ssh root@138.197.174.154 "dokku git:from-image api thepaladinaoe2/schooldb:$VERSION" 