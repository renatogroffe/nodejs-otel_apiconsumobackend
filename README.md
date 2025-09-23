# nodejs-otel_apiconsumobackend
Exemplo de API REST criada com o Node.js com implementação de distributed tracing com OpenTelemetry (configurando porta do OpenTelemetry Collector + comunicação via gRPC) e consumindo uma API REST genérica gratuita (Bacon Ipsum).

Saiba mais sobre a API Bacon Ipsum em: https://baconipsum.com/

Repositorios com os scripts + Docker Compose para a criacao dos ambientes que farao uso do OpenTelemetry, PostgreSQL, MySQL e Redis:
- [Jaeger](https://github.com/renatogroffe/dockercompose-opentelemetry-jaeger-postgres-mysql-redis)
- [Grafana](https://github.com/renatogroffe/dockercompose-opentelemetry-grafana-postgres-mysql-redis)
- [Elastic APM](https://github.com/renatogroffe/dockercompose-opentelemetry-elasticapm-postgres-mysql-redis)
- [Zipkin](https://github.com/renatogroffe/dockercompose-opentelemetry-zipkin-postgres-mysql-redis)

Repositorios com as outras aplicacoes utilizadas nos testes com tracing distribuido:
- [Console App de orquestracao em .NET 9](https://github.com/renatogroffe/dotnet9-consoleapp-otel-grafana_consumoapis)
- [API que acessa PostgreSQL, MySQL e Redis - .NET 9 + ASP.NET Core](https://github.com/renatogroffe/aspnetcore9-otel-grafana-postgres-mysql-redis_apicontagem)
- [API REST criada com Java + Spring + Apache Camel](https://github.com/renatogroffe/java-spring-camel_apiconsumobackend)
