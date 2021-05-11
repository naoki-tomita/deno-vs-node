**deno vs node simple server load testing.**

## getting started

1. install drill
    * drill is api load testing tool written in rust.
    * exec command `cargo install drill`.
1. run api
    * node: `node node.js`
    * deno: `deno run --allow-net deno.js`
1. edit condition
    * edit `test.yaml`
    * see [drill#features](https://github.com/fcsonline/drill#features)
1. run drill
    * exec `drill --benchmark test.yaml -n -s`

## results

* iteration: 10000
* rampup: 0

```
MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)
2.3 GHz Quad core Intel Core i7
32 GB 3733 MHz LPDDR4X
```

### concurrency: 100

#### deno
```
Time taken for tests      2.4 seconds
Total requests            10000
Successful requests       10000
Failed requests           0
Requests per second       4177.48 [#/sec]
Median time per request   9ms
Average time per request  22ms
Sample standard deviation 43ms
```

#### node
```
Time taken for tests      2.3 seconds
Total requests            10000
Successful requests       10000
Failed requests           0
Requests per second       4255.61 [#/sec]
Median time per request   8ms
Average time per request  20ms
Sample standard deviation 42ms
```

### concurrency: 1000

#### deno
```
Time taken for tests      2.4 seconds
Total requests            10000
Successful requests       9582
Failed requests           418
Requests per second       4124.99 [#/sec]
Median time per request   241ms
Average time per request  229ms
Sample standard deviation 79ms
```

#### node
```
Time taken for tests      2.7 seconds
Total requests            10000
Successful requests       9820
Failed requests           180
Requests per second       3735.30 [#/sec]
Median time per request   248ms
Average time per request  214ms
Sample standard deviation 83ms
```
