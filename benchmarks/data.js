window.BENCHMARK_DATA = {
  "lastUpdate": 1608684988399,
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
      }
    ]
  }
}