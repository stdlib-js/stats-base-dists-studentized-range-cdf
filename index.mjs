// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";var u=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],c=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095],h=7.071,b=220.2068679123761,g=221.2135961699311,x=112.0792914978709,N=33.912866078383,w=6.37396220353165,y=.7003830644436881,q=.03526249659989109,k=440.4137358247522,z=793.8265125199484,A=637.3336333788311,B=296.5642487796737,C=86.78073220294608,D=16.06417757920695,E=1.755667163182642,F=.08838834764831845;function G(t){var s,e,n;return(e=r(t))>37?n=t>0?1:0:(s=o(-.5*e*e),n=e<h?s*((((((q*e+y)*e+w)*e+N)*e+x)*e+g)*e+b)/(((((((F*e+E)*e+D)*e+C)*e+B)*e+A)*e+z)*e+k):s/j/(e+1/(e+2/(e+3/(e+4/(e+.65))))),t>=0&&(n=1-n)),n}function H(t,s,e,r,i){var m=(r-e)*s+r+e,d=o(-m*m*.125);return d*=n(G(.5*m)-G(.5*(m-2*t)),i-1)}function I(t,s,e,r,n,i,m){var d,o=0,a=.5*(i-n),f=.5*(i+n);for(d=0;d<m;d++)0===c[d]?o+=u[d]*H(t,f,s,e,r):o+=u[d]*H(t,c[d]*a+f,s,e,r);return a*o}function J(t,s){var e,r,i,m,f,j;if(t<=0)return 0;for(r=t/2,m=(t/2*((j=t<=3?3:2)-(i=1))+8*i)/j,e=0,f=1;f<l(j)+1;f++)i=f,e+=(m-r)/2*I(t,r,m,s,-1,1,20),r=m,m=f+1===l(j)?8:(t/2*(j-i-1)+8*(i+1))/j;return e*=2*s/d(2*p),e+=n(o(1),s*a(2*G(t/2)-1))}function K(t,s,e,n,i,l,p){var j,v,u;return 0===(j=J(d((v=s*p+2*e*p+p)/2)*t,i))&&(j=1e-37),u=n*a(j)+a(p)+l/2*a(l)+-v*l/4+(l/2-1)*a(v)-(l*f+m(l/2)),r(u)>=1e30?0:o(u)}function L(t,s,e,r,n,i,m,d,o){var a,f=0,l=(i-n)/2,p=(i+n)/2;for(a=0;a<m;a++)0===c[a]?f+=u[a]*K(t,p,s,r,e,d,o):f+=u[a]*K(t,c[a]*l+p,s,r,e,d,o);return l*f}function M(t,m,d,o){var a,f,l,p,j;if(e(t)||e(m)||e(d))return NaN;if(m<2||d<2)return NaN;if(void 0===o)o=1;else if(!s(o))return NaN;if(p=1===d?m<10?1+1/(2*m+3):m<=100?1.0844+(1.119-1.0844)/90*(m-10):1.119+1/m:2===d?.968:d<=100?1:d<=800?.5:d<=5e3?1/4:1/8,t<0)return 0;if(t===i)return 1;if(d>25e3||0===L(t,0,m,o,-1,1,20,d,p))return n(J(t,m),o);for(f=0,l=!1,j=0,a=0;!l;){if((f+=L(t,j,m,o,-1,1,20,d,p))>1)return 1;r(f-a)/f<=1e-10?l=!0:a=f,j+=1}return f}function O(t,m,d){var o;if(e(m)||e(t)||t<2||m<2)return v(NaN);if(void 0===d)d=1;else if(!s(d))return v(NaN);return o=1===m?t<10?1+1/(2*t+3):t<=100?1.0844+(1.119-1.0844)/90*(t-10):1.119+1/t:2===m?.968:m<=100?1:m<=800?.5:m<=5e3?1/4:1/8,function(s){var a,f,l,p;if(e(s))return NaN;if(s<0)return 0;if(s===i)return 1;if(m>25e3||0===L(s,0,t,d,-1,1,20,m,o))return n(J(s,t),d);f=0,l=!1,p=0,a=0;for(;!l;){if((f+=L(s,p,t,d,-1,1,20,m,o))>1)return 1;r(f-a)/f<=1e-10?l=!0:a=f,p+=1}return f}}t(M,"factory",O);export{M as default,O as factory};
//# sourceMappingURL=index.mjs.map
