<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Studentized range][studentized-range] distribution [cumulative distribution function][cdf] (CDF).

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-cdf@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tags). For example,

```javascript
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-cdf@v0.1.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-cdf@deno/mod.js';
```

#### cdf( x, r, v\[, nranges=1] )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var y = cdf( 0.5, 3.0, 2.0 );
// returns ~0.0644

y = cdf( 12.1, 17.0, 2.0 );
// returns ~0.913

y = cdf( 0.5, 3.0, 2.0, 2 );
// returns ~0.01
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 2.0, 2.0 );
// returns NaN

y = cdf( 1.5, NaN, 2.0 );
// returns NaN
```

If provided `v < 2` or `r < 2`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 3.0 );
// returns NaN

y = cdf( 2.0, 3.0, 1.5 );
// returns NaN
```

#### cdf.factory( r, v\[, nranges=1] )

Returns a `function` for evaluating the [cdf][cdf] of a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var mycdf = cdf.factory( 3.0, 2.0 );
var y = mycdf( 3.0 );
// returns ~0.712

y = mycdf( 1.0 );
// returns ~0.216
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-cdf@deno/mod.js';

var v;
var q;
var r;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    q = randu() * 12.0;
    r = ( randu() * 20.0 ) + 2.0;
    v = ( randu() * 10.0 ) + 2.0;
    y = cdf( q, r, v );
    console.log( 'q: %d, r: %d, v: %d, F(x;v): %d', q.toFixed( 4 ), r.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-studentized-range-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-studentized-range-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-studentized-range-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-studentized-range-cdf?branch=v0.1.0

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-studentized-range-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-studentized-range-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-studentized-range-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-studentized-range-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

</section>

<!-- /.links -->
