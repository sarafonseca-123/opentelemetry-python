window.BENCHMARK_DATA = {
  "lastUpdate": 1610646090267,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962480746,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 36334.07612743757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010227546668162143",
            "extra": "mean: 27.522373115876558 usec\nrounds: 4843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 27685.17251834125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012614828337951109",
            "extra": "mean: 36.12041786402113 usec\nrounds: 8072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981425846,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25370.982770349485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004028973012782347",
            "extra": "mean: 39.41510697680494 usec\nrounds: 5160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18313.49159042745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002458223820275948",
            "extra": "mean: 54.604551789714684 usec\nrounds: 10417"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985586910,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32940.14775153187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011872705494909715",
            "extra": "mean: 30.358090909094216 usec\nrounds: 4400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24797.22483636775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017051469513210085",
            "extra": "mean: 40.32709331785364 usec\nrounds: 6869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987159921,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28625.681251583028,
            "unit": "iter/sec",
            "range": "stddev: 0.000004377792646168838",
            "extra": "mean: 34.93366642391084 usec\nrounds: 4119"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21883.909768012156,
            "unit": "iter/sec",
            "range": "stddev: 0.000010113275726673658",
            "extra": "mean: 45.69567369820297 usec\nrounds: 9813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093640759,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32201.966882370925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034930096137207275",
            "extra": "mean: 31.05400373998439 usec\nrounds: 4813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23117.219899782005,
            "unit": "iter/sec",
            "range": "stddev: 0.000005319608692502413",
            "extra": "mean: 43.25779675649623 usec\nrounds: 7646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133363737,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 38241.87357224007,
            "unit": "iter/sec",
            "range": "stddev: 0.000004244872567851742",
            "extra": "mean: 26.149346425482253 usec\nrounds: 5525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 29078.50815474394,
            "unit": "iter/sec",
            "range": "stddev: 0.000004963758184270473",
            "extra": "mean: 34.38965969912929 usec\nrounds: 9042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142144335,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25885.46810301956,
            "unit": "iter/sec",
            "range": "stddev: 0.000026334035645567124",
            "extra": "mean: 38.63171398022156 usec\nrounds: 4678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19325.29686379388,
            "unit": "iter/sec",
            "range": "stddev: 0.00006486439632894341",
            "extra": "mean: 51.7456475338037 usec\nrounds: 9042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326566513,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30548.466462210687,
            "unit": "iter/sec",
            "range": "stddev: 0.000003824590486258685",
            "extra": "mean: 32.734867435556154 usec\nrounds: 5244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22943.24823704292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005545181362941976",
            "extra": "mean: 43.58580745273263 usec\nrounds: 7359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328486267,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29896.764125488327,
            "unit": "iter/sec",
            "range": "stddev: 0.000003276870151022486",
            "extra": "mean: 33.448435951215714 usec\nrounds: 4762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21679.72259857919,
            "unit": "iter/sec",
            "range": "stddev: 0.000003234750698168569",
            "extra": "mean: 46.12605144982513 usec\nrounds: 7794"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482967826,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24925.230395537044,
            "unit": "iter/sec",
            "range": "stddev: 0.000058683693855523303",
            "extra": "mean: 40.11999023202825 usec\nrounds: 3481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19951.500419257936,
            "unit": "iter/sec",
            "range": "stddev: 0.000019093272198610733",
            "extra": "mean: 50.121543692762195 usec\nrounds: 11249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595892587,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29332.77283792529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014065357396045314",
            "extra": "mean: 34.091560505560786 usec\nrounds: 4819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21821.853278854716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025910690107174023",
            "extra": "mean: 45.825622013919215 usec\nrounds: 8177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981108,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23433.075658482616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001990160082266676",
            "extra": "mean: 42.67472245530888 usec\nrounds: 4529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16876.860926125166,
            "unit": "iter/sec",
            "range": "stddev: 0.000029530323750677647",
            "extra": "mean: 59.25272504035468 usec\nrounds: 9285"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685770032,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22421.603141586358,
            "unit": "iter/sec",
            "range": "stddev: 0.00003556534885747522",
            "extra": "mean: 44.599843895428464 usec\nrounds: 4087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17113.18838468433,
            "unit": "iter/sec",
            "range": "stddev: 0.000020572044188976255",
            "extra": "mean: 58.43446454986511 usec\nrounds: 8251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780603908,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22777.02021345458,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285207639157562",
            "extra": "mean: 43.90389922072824 usec\nrounds: 3592"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16575.69233660676,
            "unit": "iter/sec",
            "range": "stddev: 0.00002667468498654791",
            "extra": "mean: 60.32930508679506 usec\nrounds: 8473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783644906,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31785.00287556765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013761054609034868",
            "extra": "mean: 31.461378308342873 usec\nrounds: 5403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22509.620570187333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020715295445775884",
            "extra": "mean: 44.42544897111421 usec\nrounds: 9671"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793977047,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31630.320881907686,
            "unit": "iter/sec",
            "range": "stddev: 0.000003717850320147815",
            "extra": "mean: 31.615234120877755 usec\nrounds: 4613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21049.809548622172,
            "unit": "iter/sec",
            "range": "stddev: 0.000004272544976493349",
            "extra": "mean: 47.50636805953694 usec\nrounds: 7132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890233623,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32146.20472564666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010214751869701427",
            "extra": "mean: 31.107871319011014 usec\nrounds: 4958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23072.530918576642,
            "unit": "iter/sec",
            "range": "stddev: 0.000001986058884310796",
            "extra": "mean: 43.341582400691856 usec\nrounds: 7148"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995419263,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28493.504576839357,
            "unit": "iter/sec",
            "range": "stddev: 0.000002597792253594687",
            "extra": "mean: 35.09571794874399 usec\nrounds: 3978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20095.378477916776,
            "unit": "iter/sec",
            "range": "stddev: 0.00000286301872069165",
            "extra": "mean: 49.762685539808096 usec\nrounds: 5899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996619620,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32297.405226493738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010384252543783779",
            "extra": "mean: 30.962239628454565 usec\nrounds: 4845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23019.602872205778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021417706746882703",
            "extra": "mean: 43.44123595665568 usec\nrounds: 7548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397731842,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29144.49354925789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016292759519135222",
            "extra": "mean: 34.31179884151609 usec\nrounds: 4315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20564.006461310633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027902222972438323",
            "extra": "mean: 48.628656185331 usec\nrounds: 7728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468374969,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23482.07200926091,
            "unit": "iter/sec",
            "range": "stddev: 0.000022935588075044905",
            "extra": "mean: 42.58567981588753 usec\nrounds: 4563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15725.876731809003,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501441101474941",
            "extra": "mean: 63.58945940211287 usec\nrounds: 8461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479592596,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32521.977030342645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012913684161043172",
            "extra": "mean: 30.748438173577544 usec\nrounds: 5103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22946.973708958547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013923042166331106",
            "extra": "mean: 43.57873123851613 usec\nrounds: 7542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482747677,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28772.617904067512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016247547639127542",
            "extra": "mean: 34.75526639022418 usec\nrounds: 4820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20046.41749356272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026282360966999035",
            "extra": "mean: 49.88422496543927 usec\nrounds: 7210"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962485190,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29847.623660774047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010700602844449992",
            "extra": "mean: 33.50350471331515 usec\nrounds: 5092"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22741.132116048415,
            "unit": "iter/sec",
            "range": "stddev: 0.000004958493074257459",
            "extra": "mean: 43.97318457572744 usec\nrounds: 6989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981426011,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22014.500078515735,
            "unit": "iter/sec",
            "range": "stddev: 0.000014976830581132465",
            "extra": "mean: 45.424606347337146 usec\nrounds: 4758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15867.502287121464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812789257762012",
            "extra": "mean: 63.02189102639234 usec\nrounds: 8369"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985601937,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22744.59734630944,
            "unit": "iter/sec",
            "range": "stddev: 0.00000815260051849711",
            "extra": "mean: 43.96648508540253 usec\nrounds: 4090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18024.583587464444,
            "unit": "iter/sec",
            "range": "stddev: 0.000001664208545133277",
            "extra": "mean: 55.47978377128613 usec\nrounds: 6507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987168266,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23103.105466835175,
            "unit": "iter/sec",
            "range": "stddev: 0.000003653566615353875",
            "extra": "mean: 43.284224340988 usec\nrounds: 4667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17783.2234107146,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852913865682657",
            "extra": "mean: 56.232774953357904 usec\nrounds: 6452"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093632644,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26648.095852255607,
            "unit": "iter/sec",
            "range": "stddev: 9.38203107418195e-7",
            "extra": "mean: 37.52613340721513 usec\nrounds: 4505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20550.255503068794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012602170712229903",
            "extra": "mean: 48.66119547032731 usec\nrounds: 6579"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133372446,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26615.042522672135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010535235529369258",
            "extra": "mean: 37.5727372649563 usec\nrounds: 4731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20606.271971221548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013095989863154472",
            "extra": "mean: 48.52891398291681 usec\nrounds: 7359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142102002,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21426.856006402402,
            "unit": "iter/sec",
            "range": "stddev: 0.000055451806797821214",
            "extra": "mean: 46.67040277403262 usec\nrounds: 3893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15561.242850561917,
            "unit": "iter/sec",
            "range": "stddev: 0.00002829142333480023",
            "extra": "mean: 64.2622192586558 usec\nrounds: 9824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326576599,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24425.420462580107,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225797475086163",
            "extra": "mean: 40.9409533617653 usec\nrounds: 4417"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18585.832528233695,
            "unit": "iter/sec",
            "range": "stddev: 0.000012860805895777934",
            "extra": "mean: 53.80442326061544 usec\nrounds: 7962"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328483307,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22940.17912940376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012232631370621267",
            "extra": "mean: 43.591638685952624 usec\nrounds: 4384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17590.75196776975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015575205134761465",
            "extra": "mean: 56.848052990129524 usec\nrounds: 6605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482981632,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23733.309668336115,
            "unit": "iter/sec",
            "range": "stddev: 0.000002094627363404981",
            "extra": "mean: 42.134873474227405 usec\nrounds: 3604"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17983.405791205827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025515137361042138",
            "extra": "mean: 55.60681950962904 usec\nrounds: 5618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595917572,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23610.27546359615,
            "unit": "iter/sec",
            "range": "stddev: 0.00000177683987291499",
            "extra": "mean: 42.3544401903258 usec\nrounds: 4623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17912.319273358236,
            "unit": "iter/sec",
            "range": "stddev: 0.00000171375805842076",
            "extra": "mean: 55.827499763659475 usec\nrounds: 6349"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684990897,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20187.885407952643,
            "unit": "iter/sec",
            "range": "stddev: 0.000020904854825333614",
            "extra": "mean: 49.53465802842672 usec\nrounds: 3743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13767.055733807476,
            "unit": "iter/sec",
            "range": "stddev: 0.00005213089169479722",
            "extra": "mean: 72.63717234356221 usec\nrounds: 7868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685766310,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19777.445839141492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017629235207630604",
            "extra": "mean: 50.562646366645716 usec\nrounds: 4335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13941.255746155824,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381508548742584",
            "extra": "mean: 71.72954992061895 usec\nrounds: 6921"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780580080,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21449.825125490937,
            "unit": "iter/sec",
            "range": "stddev: 0.000158595232870701",
            "extra": "mean: 46.62042670043038 usec\nrounds: 4352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17453.10771770723,
            "unit": "iter/sec",
            "range": "stddev: 0.000015335468686425717",
            "extra": "mean: 57.29638618946011 usec\nrounds: 7038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783649885,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24257.08833018134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034970153156642804",
            "extra": "mean: 41.22506322227356 usec\nrounds: 4413"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17121.01962936508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045514619499037624",
            "extra": "mean: 58.407736317576095 usec\nrounds: 5317"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793969318,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26279.850046446267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018387132838774457",
            "extra": "mean: 38.05196750486126 usec\nrounds: 4493"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19029.83206749072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021613424441198753",
            "extra": "mean: 52.54907118746111 usec\nrounds: 5928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890247544,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23918.852697135626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004061109042715865",
            "extra": "mean: 41.808025353981705 usec\nrounds: 4378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17017.014599272126,
            "unit": "iter/sec",
            "range": "stddev: 0.000005476389532819303",
            "extra": "mean: 58.76471423152997 usec\nrounds: 5277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995402209,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26677.827726337728,
            "unit": "iter/sec",
            "range": "stddev: 0.000002276930964975519",
            "extra": "mean: 37.484311326170996 usec\nrounds: 4953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19197.816799222397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011154824581076357",
            "extra": "mean: 52.089256317963454 usec\nrounds: 6964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996630783,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23644.86019102107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016867178016699181",
            "extra": "mean: 42.29248944257836 usec\nrounds: 4215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16965.27109378863,
            "unit": "iter/sec",
            "range": "stddev: 0.000004347395065766702",
            "extra": "mean: 58.9439446308714 usec\nrounds: 5960"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035722846,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23359.045645888164,
            "unit": "iter/sec",
            "range": "stddev: 0.000001717195426091061",
            "extra": "mean: 42.80996814508249 usec\nrounds: 4615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16694.12683589798,
            "unit": "iter/sec",
            "range": "stddev: 0.000001903955066875598",
            "extra": "mean: 59.9013060000038 usec\nrounds: 6098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397752852,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25592.477963176734,
            "unit": "iter/sec",
            "range": "stddev: 0.000005050403619703082",
            "extra": "mean: 39.07398109080455 usec\nrounds: 4548"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17812.44112662248,
            "unit": "iter/sec",
            "range": "stddev: 0.000005956428460183936",
            "extra": "mean: 56.140536431326055 usec\nrounds: 7123"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468415842,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20573.058245215794,
            "unit": "iter/sec",
            "range": "stddev: 0.000018859174045429358",
            "extra": "mean: 48.60726043161556 usec\nrounds: 4074"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14253.302099579389,
            "unit": "iter/sec",
            "range": "stddev: 0.000024679599024089028",
            "extra": "mean: 70.15918087006027 usec\nrounds: 7956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479584523,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29746.285353641822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011449008347153959",
            "extra": "mean: 33.617642946384585 usec\nrounds: 4806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21307.877926282566,
            "unit": "iter/sec",
            "range": "stddev: 0.000001295801653741069",
            "extra": "mean: 46.93099911026489 usec\nrounds: 6743"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482699944,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26672.804222388895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011220874197085041",
            "extra": "mean: 37.491371048290816 usec\nrounds: 3005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19253.36877680092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013365503372693073",
            "extra": "mean: 51.93896255729212 usec\nrounds: 6757"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962506789,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28812.78278659682,
            "unit": "iter/sec",
            "range": "stddev: 0.000002328878622541204",
            "extra": "mean: 34.70681771373995 usec\nrounds: 2913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21378.971209987056,
            "unit": "iter/sec",
            "range": "stddev: 0.000002865030935316055",
            "extra": "mean: 46.774935527901185 usec\nrounds: 7321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981411826,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31784.94639844907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011920796582988882",
            "extra": "mean: 31.46143421052912 usec\nrounds: 2888"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24033.46177364314,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438538883301935",
            "extra": "mean: 41.6086541929916 usec\nrounds: 8097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985594833,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31652.032346073345,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110799617291866",
            "extra": "mean: 31.593547898167014 usec\nrounds: 2902"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23979.555266608713,
            "unit": "iter/sec",
            "range": "stddev: 0.000008541502646795288",
            "extra": "mean: 41.702191257587245 usec\nrounds: 7801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987169245,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27908.46654227844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020839744679955124",
            "extra": "mean: 35.8314204933153 usec\nrounds: 4704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20881.578504514513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016843787430199006",
            "extra": "mean: 47.8890999444225 usec\nrounds: 7174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093633579,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32463.52343706611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011154062949546935",
            "extra": "mean: 30.8038035963226 usec\nrounds: 5005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24187.061567196317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014487776442712458",
            "extra": "mean: 41.34441867697767 usec\nrounds: 7710"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133399469,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31271.508096593614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045636188640416",
            "extra": "mean: 31.977990857080844 usec\nrounds: 4375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22116.142343215866,
            "unit": "iter/sec",
            "range": "stddev: 0.000006970617921352274",
            "extra": "mean: 45.21584209765001 usec\nrounds: 6979"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142119557,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26165.520971996008,
            "unit": "iter/sec",
            "range": "stddev: 0.00004386898767946978",
            "extra": "mean: 38.21823387618627 usec\nrounds: 4605"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20859.861052796015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014906763592112255",
            "extra": "mean: 47.938957861177215 usec\nrounds: 8211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326608858,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28203.189452602128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013804311442947874",
            "extra": "mean: 35.45698268206812 usec\nrounds: 4735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21111.14428979162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022007066472765305",
            "extra": "mean: 47.368346607509764 usec\nrounds: 7458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328507300,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27177.828074138528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014951927510223781",
            "extra": "mean: 36.79469887262864 usec\nrounds: 4792"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20240.168260073457,
            "unit": "iter/sec",
            "range": "stddev: 0.000002087132575718149",
            "extra": "mean: 49.406703894484856 usec\nrounds: 6984"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483006147,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27194.521260764228,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982038475536204",
            "extra": "mean: 36.77211267707743 usec\nrounds: 4686"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20993.460705543595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011844187148602819",
            "extra": "mean: 47.6338805700547 usec\nrounds: 8482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595924905,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26883.238753039815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012181953437616325",
            "extra": "mean: 37.1978990026611 usec\nrounds: 4713"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20485.87267883866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012877451841950647",
            "extra": "mean: 48.81412745637984 usec\nrounds: 7226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981415,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30782.36612259276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010838844278734564",
            "extra": "mean: 32.48613170337314 usec\nrounds: 4867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23621.84052933161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012431761424193462",
            "extra": "mean: 42.33370379239857 usec\nrounds: 7937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685774723,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27721.231673415416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011473935164927807",
            "extra": "mean: 36.07343323633766 usec\nrounds: 4808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20950.58924992372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014852952898218747",
            "extra": "mean: 47.731354382008185 usec\nrounds: 8124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780582113,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25676.020592607914,
            "unit": "iter/sec",
            "range": "stddev: 0.000007896025127308266",
            "extra": "mean: 38.94684522444644 usec\nrounds: 4471"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19074.23436459067,
            "unit": "iter/sec",
            "range": "stddev: 0.00001387034890455128",
            "extra": "mean: 52.426743893657715 usec\nrounds: 5650"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783661244,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26214.374697178573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013649735618596321",
            "extra": "mean: 38.147009476736784 usec\nrounds: 4643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18526.112802041484,
            "unit": "iter/sec",
            "range": "stddev: 0.00000140846712300934",
            "extra": "mean: 53.97786414696801 usec\nrounds: 6588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793997666,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 34490.51880000527,
            "unit": "iter/sec",
            "range": "stddev: 0.000005323524035095843",
            "extra": "mean: 28.993475157580033 usec\nrounds: 5394"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21371.399952424163,
            "unit": "iter/sec",
            "range": "stddev: 0.000007286535415026202",
            "extra": "mean: 46.79150650992191 usec\nrounds: 7143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890239901,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 34504.55840673214,
            "unit": "iter/sec",
            "range": "stddev: 0.000004706645707459703",
            "extra": "mean: 28.98167796301637 usec\nrounds: 5459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24042.68464039859,
            "unit": "iter/sec",
            "range": "stddev: 0.000008100430110888219",
            "extra": "mean: 41.59269295242154 usec\nrounds: 7875"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995411624,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31235.13275376598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033446786327042794",
            "extra": "mean: 32.01523130646631 usec\nrounds: 4868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21748.003395150907,
            "unit": "iter/sec",
            "range": "stddev: 0.000004768509227504087",
            "extra": "mean: 45.98123247594156 usec\nrounds: 7347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996638828,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23417.93203780165,
            "unit": "iter/sec",
            "range": "stddev: 0.00003576301173523023",
            "extra": "mean: 42.7023188207132 usec\nrounds: 4341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15076.143941050404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033153853916522",
            "extra": "mean: 66.32995837066323 usec\nrounds: 5597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035732210,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20660.36152976225,
            "unit": "iter/sec",
            "range": "stddev: 0.000053030880017687125",
            "extra": "mean: 48.40186356659111 usec\nrounds: 4515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15031.460016878176,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391534506210861",
            "extra": "mean: 66.5271370097877 usec\nrounds: 7525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397714285,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 33721.83930948191,
            "unit": "iter/sec",
            "range": "stddev: 0.000004305332056400694",
            "extra": "mean: 29.654372966507196 usec\nrounds: 5963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24003.540793055523,
            "unit": "iter/sec",
            "range": "stddev: 0.00000534452762771975",
            "extra": "mean: 41.66052036328367 usec\nrounds: 6826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468394274,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31645.027849378966,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041483070343201",
            "extra": "mean: 31.600540999986038 usec\nrounds: 5000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22442.76854950062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016590277500064332",
            "extra": "mean: 44.55778251218704 usec\nrounds: 7205"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479593522,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31157.707935543865,
            "unit": "iter/sec",
            "range": "stddev: 0.000001098803084544524",
            "extra": "mean: 32.09478701285428 usec\nrounds: 3080"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22195.553558224987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023961012949677814",
            "extra": "mean: 45.05406893217272 usec\nrounds: 7210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482733512,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26063.058000950205,
            "unit": "iter/sec",
            "range": "stddev: 0.000027865846929178158",
            "extra": "mean: 38.36848308297292 usec\nrounds: 4463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19493.24159385462,
            "unit": "iter/sec",
            "range": "stddev: 0.000012531709781969387",
            "extra": "mean: 51.29983103042529 usec\nrounds: 7599"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962521705,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14906.451255442928,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040688682487832",
            "extra": "mean: 67.08504813544143 usec\nrounds: 1475"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10497.840102686725,
            "unit": "iter/sec",
            "range": "stddev: 0.00006512957798268498",
            "extra": "mean: 95.25769017419772 usec\nrounds: 5048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985584576,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22353.47378436993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015323682449549934",
            "extra": "mean: 44.73577617717849 usec\nrounds: 1805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15961.931593455236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016156827984624716",
            "extra": "mean: 62.64905936635033 usec\nrounds: 5525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987196575,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 13907.416857779173,
            "unit": "iter/sec",
            "range": "stddev: 0.00014840776133096648",
            "extra": "mean: 71.90407896924766 usec\nrounds: 1203"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10174.494249470887,
            "unit": "iter/sec",
            "range": "stddev: 0.00007018315314308765",
            "extra": "mean: 98.2849835560135 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093669956,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16145.929360157023,
            "unit": "iter/sec",
            "range": "stddev: 0.00002483167522762264",
            "extra": "mean: 61.935115513863174 usec\nrounds: 1186"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11091.396256373771,
            "unit": "iter/sec",
            "range": "stddev: 0.000045745751669790074",
            "extra": "mean: 90.15997417145212 usec\nrounds: 6427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133393013,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20523.958193620823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018909031827176695",
            "extra": "mean: 48.723544969547646 usec\nrounds: 1312"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14395.948826097192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021527871996646043",
            "extra": "mean: 69.46398685352263 usec\nrounds: 5781"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142083122,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22915.934107017027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017404027594816092",
            "extra": "mean: 43.63775857139477 usec\nrounds: 1400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16305.44842927934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017505190238671172",
            "extra": "mean: 61.32919338816354 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326565762,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23032.61740411681,
            "unit": "iter/sec",
            "range": "stddev: 0.000006639964564978625",
            "extra": "mean: 43.41668957785327 usec\nrounds: 1382"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16285.279351123976,
            "unit": "iter/sec",
            "range": "stddev: 0.00000856694707500861",
            "extra": "mean: 61.405148689143125 usec\nrounds: 5468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328473205,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24211.210924739018,
            "unit": "iter/sec",
            "range": "stddev: 0.000006710469090655634",
            "extra": "mean: 41.30317988259728 usec\nrounds: 1362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15936.507236688201,
            "unit": "iter/sec",
            "range": "stddev: 0.000009417261877277977",
            "extra": "mean: 62.74900673956033 usec\nrounds: 5935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482997861,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20426.545158460885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017349413260799702",
            "extra": "mean: 48.95590479165243 usec\nrounds: 1334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14363.920672027987,
            "unit": "iter/sec",
            "range": "stddev: 0.000002784909360741377",
            "extra": "mean: 69.61887515484405 usec\nrounds: 5095"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595900813,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15942.590514272852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003930497786102084",
            "extra": "mean: 62.725063351826954 usec\nrounds: 1247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12146.375294401252,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307744622567922",
            "extra": "mean: 82.329087959347 usec\nrounds: 7458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684990778,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18486.200837127668,
            "unit": "iter/sec",
            "range": "stddev: 0.000019776276622450113",
            "extra": "mean: 54.09440310697052 usec\nrounds: 1223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13202.574383008714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596384615163786",
            "extra": "mean: 75.74280371311278 usec\nrounds: 6302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685782329,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15138.06215676802,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652877883213016",
            "extra": "mean: 66.0586533232666 usec\nrounds: 1249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10289.289957352441,
            "unit": "iter/sec",
            "range": "stddev: 0.000017957498473608156",
            "extra": "mean: 97.18843614523932 usec\nrounds: 5168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780567496,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22734.310386081102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012572192567142294",
            "extra": "mean: 43.98637931028873 usec\nrounds: 1508"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16146.397646692389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013211657802718193",
            "extra": "mean: 61.93331923822967 usec\nrounds: 6196"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783663841,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18668.682347338905,
            "unit": "iter/sec",
            "range": "stddev: 0.000030081049954180297",
            "extra": "mean: 53.565644398172715 usec\nrounds: 1437"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12750.714003811197,
            "unit": "iter/sec",
            "range": "stddev: 0.00009916000331167405",
            "extra": "mean: 78.42698061466199 usec\nrounds: 6345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793998258,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17282.395692811886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013581243908310984",
            "extra": "mean: 57.862348355785024 usec\nrounds: 821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11065.960463728266,
            "unit": "iter/sec",
            "range": "stddev: 0.00002991714113158808",
            "extra": "mean: 90.36721243291764 usec\nrounds: 6515"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890239409,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22659.15246765075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021525267228457047",
            "extra": "mean: 44.13227729623365 usec\nrounds: 1154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15244.055220949907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017293578663656819",
            "extra": "mean: 65.59934253096249 usec\nrounds: 4204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995422500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20304.981123000904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018511010934509824",
            "extra": "mean: 49.24899924517677 usec\nrounds: 1325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13714.607983039896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020043813603843403",
            "extra": "mean: 72.91495325543721 usec\nrounds: 5391"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996641244,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16504.13752194481,
            "unit": "iter/sec",
            "range": "stddev: 0.00001759657263128377",
            "extra": "mean: 60.59086690657691 usec\nrounds: 1390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10809.594396217562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004375129650536469",
            "extra": "mean: 92.51040911858033 usec\nrounds: 6536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035714218,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21467.30729035353,
            "unit": "iter/sec",
            "range": "stddev: 0.000005468610852703855",
            "extra": "mean: 46.58246078442061 usec\nrounds: 1734"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14079.44451029262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005616076560742761",
            "extra": "mean: 71.0255293998965 usec\nrounds: 5051"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397722976,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22578.462505070496,
            "unit": "iter/sec",
            "range": "stddev: 0.000001438835897820302",
            "extra": "mean: 44.28999537835793 usec\nrounds: 1731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15496.357582296714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014309790794877076",
            "extra": "mean: 64.53129354361415 usec\nrounds: 5328"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468415714,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18476.730165186244,
            "unit": "iter/sec",
            "range": "stddev: 0.000015250329421926713",
            "extra": "mean: 54.12213043432299 usec\nrounds: 1633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11483.303832252299,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168338414592567",
            "extra": "mean: 87.08295231128298 usec\nrounds: 6165"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479601406,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22714.492819501174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016475828493752056",
            "extra": "mean: 44.02475582203912 usec\nrounds: 1417"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15502.3779857405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015539880362113824",
            "extra": "mean: 64.50623258701513 usec\nrounds: 5628"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482711646,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21428.111978587887,
            "unit": "iter/sec",
            "range": "stddev: 0.000005251206960415311",
            "extra": "mean: 46.66766726808472 usec\nrounds: 1662"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14693.766887262987,
            "unit": "iter/sec",
            "range": "stddev: 0.000008521719197430397",
            "extra": "mean: 68.05606810509775 usec\nrounds: 5051"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962528740,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16154.59167273046,
            "unit": "iter/sec",
            "range": "stddev: 0.000038837952474177106",
            "extra": "mean: 61.90190505947832 usec\nrounds: 1601"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10952.920294532702,
            "unit": "iter/sec",
            "range": "stddev: 0.000026384058694663083",
            "extra": "mean: 91.29985183030716 usec\nrounds: 6911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981421659,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23355.570514796647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013009801833964768",
            "extra": "mean: 42.81633794243912 usec\nrounds: 1808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16376.96696816104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012759875012501602",
            "extra": "mean: 61.06136758681448 usec\nrounds: 5615"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985593396,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23146.05894331684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013816937514342108",
            "extra": "mean: 43.20389930955129 usec\nrounds: 1738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16211.26448061919,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212151342756858",
            "extra": "mean: 61.68550276849256 usec\nrounds: 5418"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987190910,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16459.14460837824,
            "unit": "iter/sec",
            "range": "stddev: 0.000016189108372757027",
            "extra": "mean: 60.75649882138878 usec\nrounds: 1273"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10775.633482996289,
            "unit": "iter/sec",
            "range": "stddev: 0.00003182439000622124",
            "extra": "mean: 92.80196858755244 usec\nrounds: 4998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093647874,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23504.380937690923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014304958093072195",
            "extra": "mean: 42.54526007942757 usec\nrounds: 1761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16368.450930018382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014457112741212549",
            "extra": "mean: 61.093136074720604 usec\nrounds: 5666"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133400971,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21824.897388538782,
            "unit": "iter/sec",
            "range": "stddev: 0.000005438228956055879",
            "extra": "mean: 45.81923031286021 usec\nrounds: 1854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15370.690279789063,
            "unit": "iter/sec",
            "range": "stddev: 0.000006967628589353336",
            "extra": "mean: 65.05888686826908 usec\nrounds: 4729"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142169822,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19868.36753598222,
            "unit": "iter/sec",
            "range": "stddev: 0.000013863054799025395",
            "extra": "mean: 50.331261397745415 usec\nrounds: 1645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13607.136105066085,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606590134485077",
            "extra": "mean: 73.4908501156014 usec\nrounds: 5631"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326561829,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23192.854591333908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014393867742963144",
            "extra": "mean: 43.116727872456615 usec\nrounds: 1819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16198.021695346311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015899158432487852",
            "extra": "mean: 61.73593410405789 usec\nrounds: 5190"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328499144,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20018.17125669489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017407996729536782",
            "extra": "mean: 49.954613095117736 usec\nrounds: 1680"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14073.282380553526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020890164198907756",
            "extra": "mean: 71.05662864988774 usec\nrounds: 5103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483004100,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15739.15239226598,
            "unit": "iter/sec",
            "range": "stddev: 0.00001451066823485257",
            "extra": "mean: 63.53582296409986 usec\nrounds: 1237"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10864.281374192416,
            "unit": "iter/sec",
            "range": "stddev: 0.000020152932609152122",
            "extra": "mean: 92.04474419959818 usec\nrounds: 5989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595895679,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24112.17895583569,
            "unit": "iter/sec",
            "range": "stddev: 0.000005506362415801575",
            "extra": "mean: 41.472817609375674 usec\nrounds: 1897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17290.327259725498,
            "unit": "iter/sec",
            "range": "stddev: 0.00001713467749523671",
            "extra": "mean: 57.83580524408629 usec\nrounds: 5263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981013,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20011.65788022806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018374412278112542",
            "extra": "mean: 49.97087227780469 usec\nrounds: 1699"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14055.568433737282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023749162405398213",
            "extra": "mean: 71.14617987272015 usec\nrounds: 5187"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685769481,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16200.111749015461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000224489625740134",
            "extra": "mean: 61.727969256803036 usec\nrounds: 1789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11640.783326897437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003659924448300697",
            "extra": "mean: 85.90487185594968 usec\nrounds: 3816"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780588410,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20776.46033324308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031392750928859232",
            "extra": "mean: 48.131394085447944 usec\nrounds: 1657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14087.98665618088,
            "unit": "iter/sec",
            "range": "stddev: 0.00001717420970068963",
            "extra": "mean: 70.98246359860555 usec\nrounds: 5041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783674685,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17132.965957021745,
            "unit": "iter/sec",
            "range": "stddev: 0.000017360026567338254",
            "extra": "mean: 58.36701027180654 usec\nrounds: 1363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10503.584253143947,
            "unit": "iter/sec",
            "range": "stddev: 0.000051485839205417336",
            "extra": "mean: 95.20559609931996 usec\nrounds: 6306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609794004440,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18299.44829591106,
            "unit": "iter/sec",
            "range": "stddev: 0.000027652180481060935",
            "extra": "mean: 54.646456211657814 usec\nrounds: 1473"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12476.469995986046,
            "unit": "iter/sec",
            "range": "stddev: 0.00015074564509765716",
            "extra": "mean: 80.15087603478563 usec\nrounds: 4953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890243279,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23220.375089998506,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416484126750893",
            "extra": "mean: 43.06562646486795 usec\nrounds: 2048"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15322.798370655562,
            "unit": "iter/sec",
            "range": "stddev: 0.000008753173719885268",
            "extra": "mean: 65.26223055411884 usec\nrounds: 5721"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995431091,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16164.079477010946,
            "unit": "iter/sec",
            "range": "stddev: 0.000032042490064967206",
            "extra": "mean: 61.86557059572931 usec\nrounds: 1544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10919.208634211307,
            "unit": "iter/sec",
            "range": "stddev: 0.000048886120373789305",
            "extra": "mean: 91.58172844750575 usec\nrounds: 4953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996628815,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23179.211354772124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012594507504083495",
            "extra": "mean: 43.14210629060598 usec\nrounds: 1844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15493.820478292979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014656973592512192",
            "extra": "mean: 64.54186050503242 usec\nrounds: 5821"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035716714,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21954.742562400006,
            "unit": "iter/sec",
            "range": "stddev: 0.000005450667017180329",
            "extra": "mean: 45.54824531227316 usec\nrounds: 1920"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14976.815046656855,
            "unit": "iter/sec",
            "range": "stddev: 0.000006708822028870301",
            "extra": "mean: 66.76987042203083 usec\nrounds: 5734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397746547,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21299.95236071668,
            "unit": "iter/sec",
            "range": "stddev: 0.000013707164783498591",
            "extra": "mean: 46.948461811787496 usec\nrounds: 1689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13847.834642223424,
            "unit": "iter/sec",
            "range": "stddev: 0.000020830557153223855",
            "extra": "mean: 72.21345617103924 usec\nrounds: 5761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468410242,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23127.112067547438,
            "unit": "iter/sec",
            "range": "stddev: 0.000007594562310048868",
            "extra": "mean: 43.23929408390017 usec\nrounds: 1741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15388.73384164427,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284238401904949",
            "extra": "mean: 64.98260417590997 usec\nrounds: 6897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479602608,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22730.261417372043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015186462062108914",
            "extra": "mean: 43.99421465675404 usec\nrounds: 1733"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15084.692695809188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016897556795181868",
            "extra": "mean: 66.2923680425932 usec\nrounds: 5426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482693691,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26198.59360524033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058755995452142016",
            "extra": "mean: 38.16998786530192 usec\nrounds: 1813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17453.986214186694,
            "unit": "iter/sec",
            "range": "stddev: 0.000008689481450637637",
            "extra": "mean: 57.2935023397231 usec\nrounds: 4915"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962565018,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 159803.37306578047,
            "unit": "iter/sec",
            "range": "stddev: 0.00002821099881733595",
            "extra": "mean: 6.257690190233758 usec\nrounds: 117648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 92765.47483223924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004711271823996293",
            "extra": "mean: 10.779872596010957 usec\nrounds: 156251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981429594,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 272240.72465309873,
            "unit": "iter/sec",
            "range": "stddev: 0.000010490081868077968",
            "extra": "mean: 3.6732197259401387 usec\nrounds: 175439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193623.0184566152,
            "unit": "iter/sec",
            "range": "stddev: 0.000006629451560943492",
            "extra": "mean: 5.164675191881012 usec\nrounds: 121952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985609500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 236089.06142328822,
            "unit": "iter/sec",
            "range": "stddev: 0.000011321937679810987",
            "extra": "mean: 4.235689675630852 usec\nrounds: 175439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 173842.7135623381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073256645649815",
            "extra": "mean: 5.752326223563065 usec\nrounds: 120468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987235557,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 198918.9842859771,
            "unit": "iter/sec",
            "range": "stddev: 0.000015998707410005674",
            "extra": "mean: 5.027172261056511 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 117814.91238373138,
            "unit": "iter/sec",
            "range": "stddev: 0.000016549656454160508",
            "extra": "mean: 8.487889858483538 usec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093644421,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 278649.7689361246,
            "unit": "iter/sec",
            "range": "stddev: 0.000018019320922050986",
            "extra": "mean: 3.58873435932847 usec\nrounds: 40481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193867.39911388492,
            "unit": "iter/sec",
            "range": "stddev: 0.000006282175568374536",
            "extra": "mean: 5.158164831068698 usec\nrounds: 140826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133403967,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 203398.64073869822,
            "unit": "iter/sec",
            "range": "stddev: 0.000058738955118344047",
            "extra": "mean: 4.916453700812475 usec\nrounds: 131579"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 156086.53794928538,
            "unit": "iter/sec",
            "range": "stddev: 0.000009646075417456941",
            "extra": "mean: 6.406702417378964 usec\nrounds: 98040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142120527,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 217212.3477532018,
            "unit": "iter/sec",
            "range": "stddev: 0.000058311708589330635",
            "extra": "mean: 4.603789841340912 usec\nrounds: 135136"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 157612.2517214783,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368816825040856",
            "extra": "mean: 6.3446844333341055 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326651152,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 218736.31215168812,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519536839498765",
            "extra": "mean: 4.571714637423919 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 149441.76960549067,
            "unit": "iter/sec",
            "range": "stddev: 0.000010891801531934093",
            "extra": "mean: 6.691569583523312 usec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328496929,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 218028.12366228658,
            "unit": "iter/sec",
            "range": "stddev: 0.000013616196269853297",
            "extra": "mean: 4.586564261539691 usec\nrounds: 138870"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 154527.33038314295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007809631440750523",
            "extra": "mean: 6.471347156005018 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483000235,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 222415.45358911777,
            "unit": "iter/sec",
            "range": "stddev: 0.000008662398921463394",
            "extra": "mean: 4.496090464322518 usec\nrounds: 138889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 145512.41770498606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000699046269380316",
            "extra": "mean: 6.8722657198055375 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595949944,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 189176.80028530816,
            "unit": "iter/sec",
            "range": "stddev: 0.000013867551254734151",
            "extra": "mean: 5.286060439186221 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 117503.27708772525,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537008062940181",
            "extra": "mean: 8.510400941868395 usec\nrounds: 102041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608685000507,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 222783.3385386127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010289405148101546",
            "extra": "mean: 4.48866601317531 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 146467.674409388,
            "unit": "iter/sec",
            "range": "stddev: 0.000010202829397651536",
            "extra": "mean: 6.827445059344124 usec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685759859,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 261145.90346450717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004822360609422287",
            "extra": "mean: 3.829276993180603 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 199821.18154511813,
            "unit": "iter/sec",
            "range": "stddev: 0.000006311621756920688",
            "extra": "mean: 5.004474461953912 usec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780605483,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 242761.96147190718,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606352949167964",
            "extra": "mean: 4.119261493591621 usec\nrounds: 181819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 179282.90783214621,
            "unit": "iter/sec",
            "range": "stddev: 0.000009462084171083779",
            "extra": "mean: 5.577776554897531 usec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783729941,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 173766.54307008933,
            "unit": "iter/sec",
            "range": "stddev: 0.000012726353465805754",
            "extra": "mean: 5.754847753382805 usec\nrounds: 135136"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 96403.2905876247,
            "unit": "iter/sec",
            "range": "stddev: 0.000015285922460892652",
            "extra": "mean: 10.373089900816831 usec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609794040174,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 195212.8380111958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006281298013558067",
            "extra": "mean: 5.122613913039102 usec\nrounds: 129871"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 135921.33457421107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038134938370303",
            "extra": "mean: 7.357196742752804 usec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890276811,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 236936.40760997668,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988281677048068",
            "extra": "mean: 4.220541748257236 usec\nrounds: 163935"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 158883.5650661257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024384284661753",
            "extra": "mean: 6.2939171813259 usec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995453409,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 217383.50494849036,
            "unit": "iter/sec",
            "range": "stddev: 0.000014703463222434638",
            "extra": "mean: 4.6001650412111665 usec\nrounds: 136987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 149822.96860432634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000732294830724842",
            "extra": "mean: 6.674544025628949 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996678016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 224639.6408749478,
            "unit": "iter/sec",
            "range": "stddev: 0.000012315613638798635",
            "extra": "mean: 4.451574068161368 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 138876.07556726158,
            "unit": "iter/sec",
            "range": "stddev: 0.00000902163963699282",
            "extra": "mean: 7.2006643038791225 usec\nrounds: 101011"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035737223,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 263827.10836144496,
            "unit": "iter/sec",
            "range": "stddev: 0.000012492953317618728",
            "extra": "mean: 3.790361067180379 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 174440.2669001316,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656481211604778",
            "extra": "mean: 5.732621359565495 usec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397769658,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 246574.8311973669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004877701224266775",
            "extra": "mean: 4.055563964675558 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 176005.87324041262,
            "unit": "iter/sec",
            "range": "stddev: 0.000007840773767097148",
            "extra": "mean: 5.681628581985243 usec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468530346,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 169630.98685868012,
            "unit": "iter/sec",
            "range": "stddev: 0.00002035715380301144",
            "extra": "mean: 5.895149338682454 usec\nrounds: 138889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 82544.42803908065,
            "unit": "iter/sec",
            "range": "stddev: 0.000029093430826916806",
            "extra": "mean: 12.114688098953815 usec\nrounds: 151516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479639458,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 286295.23330666375,
            "unit": "iter/sec",
            "range": "stddev: 0.000010484998852994955",
            "extra": "mean: 3.4928978329473437 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193634.68700894757,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841147764622106",
            "extra": "mean: 5.164363965190759 usec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482753526,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 281813.92065484263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011225665303716403",
            "extra": "mean: 3.54844075011032 usec\nrounds: 166667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 189512.9923382162,
            "unit": "iter/sec",
            "range": "stddev: 0.000005944668557093236",
            "extra": "mean: 5.276683079413048 usec\nrounds: 108696"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685713152,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2966.450324234082,
            "unit": "iter/sec",
            "range": "stddev: 0.000021193907265385302",
            "extra": "mean: 337.10323474174254 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4207.130364469713,
            "unit": "iter/sec",
            "range": "stddev: 0.0008315660467585326",
            "extra": "mean: 237.69170749859686 usec\nrounds: 5641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780519722,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3479.8656594885283,
            "unit": "iter/sec",
            "range": "stddev: 0.000021485960068571018",
            "extra": "mean: 287.3674152544671 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4824.16470882576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007985699233464789",
            "extra": "mean: 207.28977146458337 usec\nrounds: 6371"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783625902,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2470.2695713023913,
            "unit": "iter/sec",
            "range": "stddev: 0.00013808752665729046",
            "extra": "mean: 404.8141189193265 usec\nrounds: 185"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3607.544889084592,
            "unit": "iter/sec",
            "range": "stddev: 0.0008894515071201359",
            "extra": "mean: 277.1968279662206 usec\nrounds: 5900"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793947738,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2564.7155405148033,
            "unit": "iter/sec",
            "range": "stddev: 0.00008185742028384723",
            "extra": "mean: 389.90678857089733 usec\nrounds: 175"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4058.986758410468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007888717197818262",
            "extra": "mean: 246.36690374215655 usec\nrounds: 4062"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890213459,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3031.796922062636,
            "unit": "iter/sec",
            "range": "stddev: 0.00001654628198314143",
            "extra": "mean: 329.8373953489159 usec\nrounds: 215"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4335.22285162644,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004550626324823",
            "extra": "mean: 230.66864939246 usec\nrounds: 5596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995387528,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2980.2016104936115,
            "unit": "iter/sec",
            "range": "stddev: 0.000010858944752328471",
            "extra": "mean: 335.5477684727409 usec\nrounds: 203"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4141.25959557735,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397253610388925",
            "extra": "mean: 241.47242570061243 usec\nrounds: 5673"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996586140,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3463.0568731916983,
            "unit": "iter/sec",
            "range": "stddev: 0.000009264701808458027",
            "extra": "mean: 288.76222268863813 usec\nrounds: 238"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4766.503163135299,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040925139574803",
            "extra": "mean: 209.79740614337965 usec\nrounds: 6739"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035699109,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1879.80611792938,
            "unit": "iter/sec",
            "range": "stddev: 0.00014587207383030205",
            "extra": "mean: 531.9697549987268 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3277.470605530119,
            "unit": "iter/sec",
            "range": "stddev: 0.0010012787912469666",
            "extra": "mean: 305.113339022076 usec\nrounds: 5625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397689092,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3488.8210305743055,
            "unit": "iter/sec",
            "range": "stddev: 0.00000744574334704932",
            "extra": "mean: 286.62977872367014 usec\nrounds: 235"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4711.810415839794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202542839626538",
            "extra": "mean: 212.2326476970038 usec\nrounds: 5992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468392215,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2212.378686804029,
            "unit": "iter/sec",
            "range": "stddev: 0.00014398207032249803",
            "extra": "mean: 452.0021847817499 usec\nrounds: 184"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3399.5952686817673,
            "unit": "iter/sec",
            "range": "stddev: 0.0009716014464490108",
            "extra": "mean: 294.15266258673245 usec\nrounds: 5311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479563525,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3504.408560813214,
            "unit": "iter/sec",
            "range": "stddev: 0.000007950555004742693",
            "extra": "mean: 285.35485593264997 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4728.75733429496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008383824460918492",
            "extra": "mean: 211.472048427517 usec\nrounds: 5596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482681416,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3147.5762041584476,
            "unit": "iter/sec",
            "range": "stddev: 0.000013140416647588089",
            "extra": "mean: 317.70477826044095 usec\nrounds: 230"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4539.576635302848,
            "unit": "iter/sec",
            "range": "stddev: 0.0008265070269730791",
            "extra": "mean: 220.28485921425295 usec\nrounds: 5931"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646060663,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3954.5659768962455,
            "unit": "iter/sec",
            "range": "stddev: 0.000006689517117017981",
            "extra": "mean: 252.87225092267983 usec\nrounds: 271"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4764.256226825374,
            "unit": "iter/sec",
            "range": "stddev: 0.000807894551122",
            "extra": "mean: 209.89635157938227 usec\nrounds: 6869"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685716331,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2726.6057557025733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003102558734273985",
            "extra": "mean: 366.75635922375096 usec\nrounds: 206"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3682.298648797936,
            "unit": "iter/sec",
            "range": "stddev: 0.000838250881046738",
            "extra": "mean: 271.5694992111636 usec\nrounds: 4437"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780558471,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3055.4179431459147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068088712980054",
            "extra": "mean: 327.2874672492044 usec\nrounds: 229"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3895.4193041748067,
            "unit": "iter/sec",
            "range": "stddev: 0.0008506755543495347",
            "extra": "mean: 256.711773987534 usec\nrounds: 5013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783612389,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2653.2670895871365,
            "unit": "iter/sec",
            "range": "stddev: 0.000014269197206024095",
            "extra": "mean: 376.8938317309042 usec\nrounds: 208"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3479.4599526241404,
            "unit": "iter/sec",
            "range": "stddev: 0.0008691015359518085",
            "extra": "mean: 287.40092244654795 usec\nrounds: 4758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793952332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1993.5878349374057,
            "unit": "iter/sec",
            "range": "stddev: 0.00013266519744592402",
            "extra": "mean: 501.6081972788512 usec\nrounds: 147"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3055.1479420143182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009791990147249147",
            "extra": "mean: 327.31639153967797 usec\nrounds: 4066"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890201251,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2995.246676065444,
            "unit": "iter/sec",
            "range": "stddev: 0.000006802353438351723",
            "extra": "mean: 333.86231858325607 usec\nrounds: 226"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4086.3982482985843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007801833281946633",
            "extra": "mean: 244.71427874568045 usec\nrounds: 5166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995382058,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2333.5208198075748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006124631892268668",
            "extra": "mean: 428.5369950470214 usec\nrounds: 202"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3180.8942385818004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008399146794241",
            "extra": "mean: 314.3770037591219 usec\nrounds: 5320"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996599295,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2499.9549313639723,
            "unit": "iter/sec",
            "range": "stddev: 0.000017387642113716817",
            "extra": "mean: 400.0072111117624 usec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3109.1735053160446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480679961988156",
            "extra": "mean: 321.62888249568783 usec\nrounds: 4119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035688480,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2568.134292340529,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311951871179971",
            "extra": "mean: 389.3877368416846 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3249.8152427569353,
            "unit": "iter/sec",
            "range": "stddev: 0.000985340345831657",
            "extra": "mean: 307.7098004967396 usec\nrounds: 4431"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397691987,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3037.938246267004,
            "unit": "iter/sec",
            "range": "stddev: 0.000007877632950185995",
            "extra": "mean: 329.1706147183184 usec\nrounds: 231"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3952.5858292655585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009074683158537528",
            "extra": "mean: 252.9989336590353 usec\nrounds: 4914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468389418,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2160.0618884988157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998686813980489",
            "extra": "mean: 462.94969848987654 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2936.7481403864012,
            "unit": "iter/sec",
            "range": "stddev: 0.0010194077366467887",
            "extra": "mean: 340.51268688925614 usec\nrounds: 4813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479568989,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3042.3183997829037,
            "unit": "iter/sec",
            "range": "stddev: 0.000006609786928624201",
            "extra": "mean: 328.69669396581196 usec\nrounds: 232"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4081.3692945555076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008054929052689355",
            "extra": "mean: 245.0158091143545 usec\nrounds: 5003"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482670855,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3013.199280815369,
            "unit": "iter/sec",
            "range": "stddev: 0.000005845362639494969",
            "extra": "mean: 331.8731709405562 usec\nrounds: 234"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3923.7432488796685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925954397734341",
            "extra": "mean: 254.85867361110493 usec\nrounds: 5184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646080349,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2581.552572739766,
            "unit": "iter/sec",
            "range": "stddev: 0.000013979837921507253",
            "extra": "mean: 387.363794392424 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3396.8147558960204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008973391831499499",
            "extra": "mean: 294.39344558435226 usec\nrounds: 4484"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685718472,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2317.4728914899947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006584667428532993",
            "extra": "mean: 431.5045080665692 usec\nrounds: 124"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3091.9947952691955,
            "unit": "iter/sec",
            "range": "stddev: 0.0008933371594035452",
            "extra": "mean: 323.41580960291947 usec\nrounds: 5415"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780536592,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2793.740141419809,
            "unit": "iter/sec",
            "range": "stddev: 0.000008014726068252394",
            "extra": "mean: 357.94309756088813 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3803.093843152455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007862676962220594",
            "extra": "mean: 262.9438139688611 usec\nrounds: 4510"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783633347,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1939.8162915575665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147750370484808",
            "extra": "mean: 515.512734041972 usec\nrounds: 94"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2804.125268820389,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106730124861915",
            "extra": "mean: 356.6174489846061 usec\nrounds: 4185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793994838,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2796.5696817891385,
            "unit": "iter/sec",
            "range": "stddev: 0.000016567875862727596",
            "extra": "mean: 357.58093442543446 usec\nrounds: 122"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3707.646990717517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008634890028207081",
            "extra": "mean: 269.71284011223423 usec\nrounds: 4647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890208370,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2783.1795298013762,
            "unit": "iter/sec",
            "range": "stddev: 0.000010928751090205918",
            "extra": "mean: 359.3012916674354 usec\nrounds: 120"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3611.740318731618,
            "unit": "iter/sec",
            "range": "stddev: 0.0008301465964856005",
            "extra": "mean: 276.87483366777127 usec\nrounds: 4485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995393769,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1949.6176160094242,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132109615168862",
            "extra": "mean: 512.9210937511175 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3011.6638895858237,
            "unit": "iter/sec",
            "range": "stddev: 0.0008651132206697542",
            "extra": "mean: 332.0423648395652 usec\nrounds: 3851"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996590250,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2788.2665843178543,
            "unit": "iter/sec",
            "range": "stddev: 0.000008052459577653127",
            "extra": "mean: 358.6457642265396 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3638.903987526728,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901676666183759",
            "extra": "mean: 274.8080200598189 usec\nrounds: 4686"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035692533,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2119.8671364514453,
            "unit": "iter/sec",
            "range": "stddev: 0.00032875107679461023",
            "extra": "mean: 471.72767708166435 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3165.928553748901,
            "unit": "iter/sec",
            "range": "stddev: 0.0010040007358518568",
            "extra": "mean: 315.8630976734647 usec\nrounds: 4341"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397719030,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2405.1180316557543,
            "unit": "iter/sec",
            "range": "stddev: 0.000011287494878807137",
            "extra": "mean: 415.78001031058363 usec\nrounds: 97"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3205.7555937382263,
            "unit": "iter/sec",
            "range": "stddev: 0.0009472938405608589",
            "extra": "mean: 311.93893943546135 usec\nrounds: 3649"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468379843,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2753.7170031919204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008032091831886097",
            "extra": "mean: 363.1455225213296 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3781.668938966672,
            "unit": "iter/sec",
            "range": "stddev: 0.0008219763620901236",
            "extra": "mean: 264.43351232994144 usec\nrounds: 4339"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479574405,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2743.781595372282,
            "unit": "iter/sec",
            "range": "stddev: 0.000007398969130503939",
            "extra": "mean: 364.4604955753842 usec\nrounds: 113"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3741.093743999661,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281148943946006",
            "extra": "mean: 267.301508176292 usec\nrounds: 4831"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482685025,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2427.5935932281095,
            "unit": "iter/sec",
            "range": "stddev: 0.000010625052946439722",
            "extra": "mean: 411.930564815111 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2869.9011440928143,
            "unit": "iter/sec",
            "range": "stddev: 0.0010547529941800082",
            "extra": "mean: 348.4440577538093 usec\nrounds: 4069"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646080886,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2591.119564894284,
            "unit": "iter/sec",
            "range": "stddev: 0.00002755759882316938",
            "extra": "mean: 385.93356074666485 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3323.015212645218,
            "unit": "iter/sec",
            "range": "stddev: 0.000920594366114724",
            "extra": "mean: 300.93151430503696 usec\nrounds: 4439"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685725840,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2279.0123694220697,
            "unit": "iter/sec",
            "range": "stddev: 0.000058127197233363276",
            "extra": "mean: 438.78656097579153 usec\nrounds: 82"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5263.330803910702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007116625877729816",
            "extra": "mean: 189.99375818388444 usec\nrounds: 947"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780544498,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2791.5047911085567,
            "unit": "iter/sec",
            "range": "stddev: 0.000008138390211540428",
            "extra": "mean: 358.2297272729674 usec\nrounds: 121"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3698.220161148341,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111337214311819",
            "extra": "mean: 270.40034298268716 usec\nrounds: 4560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783637317,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1987.4240128952752,
            "unit": "iter/sec",
            "range": "stddev: 0.00013178361082606113",
            "extra": "mean: 503.163891304303 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2877.5003541548153,
            "unit": "iter/sec",
            "range": "stddev: 0.0009713580443940751",
            "extra": "mean: 347.52384949531023 usec\nrounds: 4857"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793960332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2539.714680701487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001811872157864053",
            "extra": "mean: 393.74501694961776 usec\nrounds: 118"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3220.7233932859212,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833479352116566",
            "extra": "mean: 310.4892528444539 usec\nrounds: 3955"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890201308,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2764.9266136776323,
            "unit": "iter/sec",
            "range": "stddev: 0.000008342917644768106",
            "extra": "mean: 361.67325203250107 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3815.0096748778706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884846631585884",
            "extra": "mean: 262.1225331576683 usec\nrounds: 4554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995396256,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2333.0575788852993,
            "unit": "iter/sec",
            "range": "stddev: 0.000021138130907103394",
            "extra": "mean: 428.6220833340022 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3271.8207939322087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008591521629310101",
            "extra": "mean: 305.64021166885453 usec\nrounds: 3685"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996609857,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2276.7880551589374,
            "unit": "iter/sec",
            "range": "stddev: 0.000044418402770889795",
            "extra": "mean: 439.21523469613965 usec\nrounds: 98"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3138.7677523361963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009303901744977955",
            "extra": "mean: 318.5963661235198 usec\nrounds: 4971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035693638,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2435.0564900019835,
            "unit": "iter/sec",
            "range": "stddev: 0.000022730055092735083",
            "extra": "mean: 410.668090907076 usec\nrounds: 99"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3130.256260281273,
            "unit": "iter/sec",
            "range": "stddev: 0.0009839583246313705",
            "extra": "mean: 319.4626627502196 usec\nrounds: 4596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397715871,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2186.3192279786076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001655582967884659",
            "extra": "mean: 457.38974766487513 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3185.646065687629,
            "unit": "iter/sec",
            "range": "stddev: 0.0009670899128788342",
            "extra": "mean: 313.9080674312599 usec\nrounds: 4360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468417392,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2246.863639639599,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072419171599422",
            "extra": "mean: 445.06483720587585 usec\nrounds: 86"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2979.616138910259,
            "unit": "iter/sec",
            "range": "stddev: 0.001023344509447148",
            "extra": "mean: 335.6137010204717 usec\nrounds: 4114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479581162,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2715.661627949128,
            "unit": "iter/sec",
            "range": "stddev: 0.000011160733191944158",
            "extra": "mean: 368.2343888900479 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3695.7320445740384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008490483599356557",
            "extra": "mean: 270.5823874509976 usec\nrounds: 4829"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482675588,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2526.1458919183438,
            "unit": "iter/sec",
            "range": "stddev: 0.00003518165358695624",
            "extra": "mean: 395.8599553569745 usec\nrounds: 112"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3641.9459351418095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008241378119406718",
            "extra": "mean: 274.57848573500644 usec\nrounds: 5538"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685749876,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 940.4831174956076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002071431149481148",
            "extra": "mean: 1.0632833076928363 msec\nrounds: 182"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3971.9363435317496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011126804543639336",
            "extra": "mean: 251.7663712381715 usec\nrounds: 5848"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780546827,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 949.5846317457982,
            "unit": "iter/sec",
            "range": "stddev: 0.000016911423280007464",
            "extra": "mean: 1.0530920220997193 msec\nrounds: 181"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3925.2554693585244,
            "unit": "iter/sec",
            "range": "stddev: 0.001194250571208821",
            "extra": "mean: 254.76048828063227 usec\nrounds: 5845"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783617868,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 958.175126850792,
            "unit": "iter/sec",
            "range": "stddev: 0.00001646854556476619",
            "extra": "mean: 1.0436505519472965 msec\nrounds: 154"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3889.569427277814,
            "unit": "iter/sec",
            "range": "stddev: 0.0012907036921134295",
            "extra": "mean: 257.09786615118173 usec\nrounds: 5820"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793943221,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1089.3716854087377,
            "unit": "iter/sec",
            "range": "stddev: 0.00007916436152656882",
            "extra": "mean: 917.9603374993128 usec\nrounds: 160"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4074.837047435268,
            "unit": "iter/sec",
            "range": "stddev: 0.0012240953529210699",
            "extra": "mean: 245.40858649290217 usec\nrounds: 6989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890207358,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1239.3067804333693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011872762674399925",
            "extra": "mean: 806.9027102799463 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4346.757859217141,
            "unit": "iter/sec",
            "range": "stddev: 0.0014198419145730328",
            "extra": "mean: 230.05652313471674 usec\nrounds: 6916"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995361234,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1283.4812422654948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014173822511224555",
            "extra": "mean: 779.1309814819598 usec\nrounds: 216"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4710.725124904287,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346848625258873",
            "extra": "mean: 212.28154338984447 usec\nrounds: 7133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996600429,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 914.9815316732029,
            "unit": "iter/sec",
            "range": "stddev: 0.00013171740978453887",
            "extra": "mean: 1.0929182342853698 msec\nrounds: 175"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3821.7466409039107,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531494123174827",
            "extra": "mean: 261.6604641702471 usec\nrounds: 5875"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035683364,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 887.3293711961253,
            "unit": "iter/sec",
            "range": "stddev: 0.00014669106904294796",
            "extra": "mean: 1.1269772335519492 msec\nrounds: 137"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3718.038605293384,
            "unit": "iter/sec",
            "range": "stddev: 0.0012957810660632417",
            "extra": "mean: 268.9590147278989 usec\nrounds: 7740"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397712753,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 909.5599033766159,
            "unit": "iter/sec",
            "range": "stddev: 0.00007371497972276668",
            "extra": "mean: 1.099432809524296 msec\nrounds: 147"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3747.3249835268107,
            "unit": "iter/sec",
            "range": "stddev: 0.0011902647864082945",
            "extra": "mean: 266.85702585070317 usec\nrounds: 5996"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468375827,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1092.4521036436317,
            "unit": "iter/sec",
            "range": "stddev: 0.000015801759929850333",
            "extra": "mean: 915.3719386549961 usec\nrounds: 163"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4078.874137035102,
            "unit": "iter/sec",
            "range": "stddev: 0.0014204075485004578",
            "extra": "mean: 245.16569190509298 usec\nrounds: 6498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479576680,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 931.3074702681416,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466817880540671",
            "extra": "mean: 1.0737592384092876 msec\nrounds: 151"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3849.534415700955,
            "unit": "iter/sec",
            "range": "stddev: 0.0012409663090017105",
            "extra": "mean: 259.7716741851525 usec\nrounds: 6473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482689507,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1031.995689932212,
            "unit": "iter/sec",
            "range": "stddev: 0.00005680186318800507",
            "extra": "mean: 968.9962949997266 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4116.897371055554,
            "unit": "iter/sec",
            "range": "stddev: 0.0011191420742719133",
            "extra": "mean: 242.90136718749554 usec\nrounds: 5760"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646082202,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 889.6337861565667,
            "unit": "iter/sec",
            "range": "stddev: 0.00011263702611963307",
            "extra": "mean: 1.1240580287763597 msec\nrounds: 139"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3817.9804804860582,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598303208649216",
            "extra": "mean: 261.9185732119543 usec\nrounds: 5928"
          }
        ]
      }
    ]
  }
}