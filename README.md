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

### concurrency: 100

#### deno
```
Time taken for tests      2.5 seconds
Total requests            10000
Successful requests       10000
Failed requests           0
Requests per second       3976.40 [#/sec]
Median time per request   8ms
Average time per request  20ms
Sample standard deviation 39ms
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
Successful requests       9520
Failed requests           480
Requests per second       4131.92 [#/sec]
Median time per request   239ms
Average time per request  221ms
Sample standard deviation 170ms
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
