const m=document.getElementsByTagName("canvas")[0];ae();const a={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:4,VELOCITY_DISSIPATION:2.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:0,SPLAT_RADIUS:.02,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!1,COLOR_UPDATE_SPEED:10,SMOKE_COLOR:{r:.0135,g:.044,b:.071},DEFAULT_COLOR:{r:.0135,g:.044,b:.071},PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!0,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1},rt=(e,i)=>{a[e]=i},it=e=>{a.SMOKE_COLOR=e,g.forEach(i=>{i.color=e})};function K(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let g=[],j=[];g.push(new K);const{gl:t,ext:E}=fe(m);ve()&&(a.DYE_RESOLUTION=512);E.supportLinearFiltering||(a.DYE_RESOLUTION=512,a.SHADING=!1,a.BLOOM=!1,a.SUNRAYS=!1);function fe(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);const o=!!r;o||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i));let n,c;o?(r.getExtension("EXT_color_buffer_float"),c=r.getExtension("OES_texture_float_linear")):(n=r.getExtension("OES_texture_half_float"),c=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const u=o?r.HALF_FLOAT:n.HALF_FLOAT_OES;let f,v,b;return o?(f=y(r,r.RGBA16F,r.RGBA,u),v=y(r,r.RG16F,r.RG,u),b=y(r,r.R16F,r.RED,u)):(f=y(r,r.RGBA,r.RGBA,u),v=y(r,r.RGBA,r.RGBA,u),b=y(r,r.RGBA,r.RGBA,u)),ga("send","event",o?"webgl2":"webgl",f==null?"not supported":"supported"),{gl:r,ext:{formatRGBA:f,formatRG:v,formatR:b,halfFloatTexType:u,supportLinearFiltering:c}}}function y(e,i,r,o){if(!se(e,i,r,o))switch(i){case e.R16F:return y(e,e.RG16F,e.RG,o);case e.RG16F:return y(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:i,format:r}}function se(e,i,r,o){let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);let c=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}function ve(){return/Mobi|Android/i.test(navigator.userAgent)}class me{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let n=0;n<i.length;n++)r+=tt(i[n]);let o=this.programs[r];if(o==null){let n=d(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=te(this.vertexShader,n),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=re(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class T{constructor(i,r){this.uniforms={},this.program=te(i,r),this.uniforms=re(this.program)}bind(){t.useProgram(this.program)}}function te(e,i){let r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r}function re(e){let i=[],r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let n=t.getActiveUniform(e,o).name;i[n]=t.getUniformLocation(e,n)}return i}function d(e,i,r){i=de(i,r);const o=t.createShader(e);return t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(o)),o}function de(e,i){if(i==null)return e;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+e}const x=d(t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),he=d(t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Te=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),xe=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),Ee=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),Re=d(t.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),ge=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,Se=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),pe=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),De=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),_e=d(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),ye=d(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),Ae=d(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),Le=d(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,E.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ue=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),be=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),Fe=d(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),Oe=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),Be=d(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),s=(()=>(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,i=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))();let h,l,H,V,D,q,L=[],I,ie,J=Ie("LDR_LLL1_0.png");const F=new T(he,Te),Q=new T(x,xe),C=new T(x,Ee),Z=new T(x,Re),B=new T(x,Se),O=new T(x,pe),w=new T(x,De),$=new T(x,_e),X=new T(x,ye),p=new T(x,Ae),R=new T(x,Le),z=new T(x,Ue),G=new T(x,be),U=new T(x,Fe),N=new T(x,Oe),P=new T(x,Be),_=new me(x,ge);function oe(){let e=M(a.SIM_RESOLUTION),i=M(a.DYE_RESOLUTION);const r=E.halfFloatTexType,o=E.formatRGBA,n=E.formatRG,c=E.formatR,u=E.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),h==null?h=Y(i.width,i.height,o.internalFormat,o.format,r,u):h=ee(h,i.width,i.height,o.internalFormat,o.format,r,u),l==null?l=Y(e.width,e.height,n.internalFormat,n.format,r,u):l=ee(l,e.width,e.height,n.internalFormat,n.format,r,u),H=S(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),V=S(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),D=Y(e.width,e.height,c.internalFormat,c.format,r,t.NEAREST),we(),Ne()}function we(){let e=M(a.BLOOM_RESOLUTION);const i=E.halfFloatTexType,r=E.formatRGBA,o=E.supportLinearFiltering?t.LINEAR:t.NEAREST;q=S(e.width,e.height,r.internalFormat,r.format,i,o),L.length=0;for(let n=0;n<a.BLOOM_ITERATIONS;n++){let c=e.width>>n+1,u=e.height>>n+1;if(c<2||u<2)break;let f=S(c,u,r.internalFormat,r.format,i,o);L.push(f)}}function Ne(){let e=M(a.SUNRAYS_RESOLUTION);const i=E.halfFloatTexType,r=E.formatR,o=E.supportLinearFiltering?t.LINEAR:t.NEAREST;I=S(e.width,e.height,r.internalFormat,r.format,i,o),ie=S(e.width,e.height,r.internalFormat,r.format,i,o)}function S(e,i,r,o,n,c){t.activeTexture(t.TEXTURE0);let u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);let f=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,f),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);let v=1/e,b=1/i;return{texture:u,fbo:f,width:e,height:i,texelSizeX:v,texelSizeY:b,attach(k){return t.activeTexture(t.TEXTURE0+k),t.bindTexture(t.TEXTURE_2D,u),k}}}function Y(e,i,r,o,n,c){let u=S(e,i,r,o,n,c),f=S(e,i,r,o,n,c);return{width:e,height:i,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(v){u=v},get write(){return f},set write(v){f=v},swap(){let v=u;u=f,f=v}}}function Pe(e,i,r,o,n,c,u){let f=S(i,r,o,n,c,u);return Q.bind(),t.uniform1i(Q.uniforms.uTexture,e.attach(0)),s(f),f}function ee(e,i,r,o,n,c,u){return e.width==i&&e.height==r||(e.read=Pe(e.read,i,r,o,n,c,u),e.write=S(i,r,o,n,c,u),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function Ie(e){let i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texImage2D(t.TEXTURE_2D,0,t.RGB,1,1,0,t.RGB,t.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(n){return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,i),n}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,o)},o.src=e,r}function Me(){let e=[];a.SHADING&&e.push("SHADING"),a.BLOOM&&e.push("BLOOM"),a.SUNRAYS&&e.push("SUNRAYS"),_.setKeywords(e)}function ot(){let e=g.find(i=>i.id==-1);e==null&&(e=new K),le(e,-1,0,0),Me(),oe(),W=Date.now(),ne()}let W=Date.now();function ne(){const e=Ce();ae()&&oe(),Xe(),a.PAUSED||ze(e),Ge(null),requestAnimationFrame(ne)}function Ce(){let e=Date.now(),i=(e-W)/1e3;return i=Math.min(i,.016666),W=e,i}function ae(){let e=A(m.clientWidth),i=A(m.clientHeight);return m.width!=e||m.height!=i?(m.width=e,m.height=i,!0):!1}function Xe(){j.length>0&&ke(j.pop()),g.forEach(e=>{e.moved&&(e.moved=!1,qe(e))})}function ze(e){t.disable(t.BLEND),G.bind(),t.uniform2f(G.uniforms.texelSize,l.texelSizeX,l.texelSizeY),t.uniform1i(G.uniforms.uVelocity,l.read.attach(0)),s(V),U.bind(),t.uniform2f(U.uniforms.texelSize,l.texelSizeX,l.texelSizeY),t.uniform1i(U.uniforms.uVelocity,l.read.attach(0)),t.uniform1i(U.uniforms.uCurl,V.attach(1)),t.uniform1f(U.uniforms.curl,a.CURL),t.uniform1f(U.uniforms.dt,e),s(l.write),l.swap(),z.bind(),t.uniform2f(z.uniforms.texelSize,l.texelSizeX,l.texelSizeY),t.uniform1i(z.uniforms.uVelocity,l.read.attach(0)),s(H),C.bind(),t.uniform1i(C.uniforms.uTexture,D.read.attach(0)),t.uniform1f(C.uniforms.value,a.PRESSURE),s(D.write),D.swap(),N.bind(),t.uniform2f(N.uniforms.texelSize,l.texelSizeX,l.texelSizeY),t.uniform1i(N.uniforms.uDivergence,H.attach(0));for(let r=0;r<a.PRESSURE_ITERATIONS;r++)t.uniform1i(N.uniforms.uPressure,D.read.attach(1)),s(D.write),D.swap();P.bind(),t.uniform2f(P.uniforms.texelSize,l.texelSizeX,l.texelSizeY),t.uniform1i(P.uniforms.uPressure,D.read.attach(0)),t.uniform1i(P.uniforms.uVelocity,l.read.attach(1)),s(l.write),l.swap(),R.bind(),t.uniform2f(R.uniforms.texelSize,l.texelSizeX,l.texelSizeY),E.supportLinearFiltering||t.uniform2f(R.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);let i=l.read.attach(0);t.uniform1i(R.uniforms.uVelocity,i),t.uniform1i(R.uniforms.uSource,i),t.uniform1f(R.uniforms.dt,e),t.uniform1f(R.uniforms.dissipation,a.VELOCITY_DISSIPATION),s(l.write),l.swap(),E.supportLinearFiltering||t.uniform2f(R.uniforms.dyeTexelSize,h.texelSizeX,h.texelSizeY),t.uniform1i(R.uniforms.uVelocity,l.read.attach(0)),t.uniform1i(R.uniforms.uSource,h.read.attach(1)),t.uniform1f(R.uniforms.dissipation,a.DENSITY_DISSIPATION),s(h.write),h.swap()}function Ge(e){a.BLOOM&&Ve(h.read,q),a.SUNRAYS&&(We(h.read,h.write,I),Ke(I,ie,1)),e==null||!a.TRANSPARENT?(t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND)):t.disable(t.BLEND),a.TRANSPARENT||Ye(e,$e(a.BACK_COLOR)),He(e)}function Ye(e,i){Z.bind(),t.uniform4f(Z.uniforms.color,i.r,i.g,i.b,1),s(e)}function He(e){let i=e==null?t.drawingBufferWidth:e.width,r=e==null?t.drawingBufferHeight:e.height;if(_.bind(),a.SHADING&&t.uniform2f(_.uniforms.texelSize,1/i,1/r),t.uniform1i(_.uniforms.uTexture,h.read.attach(0)),a.BLOOM){t.uniform1i(_.uniforms.uBloom,q.attach(1)),t.uniform1i(_.uniforms.uDithering,J.attach(2));let o=et(J,i,r);t.uniform2f(_.uniforms.ditherScale,o.x,o.y)}a.SUNRAYS&&t.uniform1i(_.uniforms.uSunrays,I.attach(3)),s(e)}function Ve(e,i){if(L.length<2)return;let r=i;t.disable(t.BLEND),B.bind();let o=a.BLOOM_THRESHOLD*a.BLOOM_SOFT_KNEE+1e-4,n=a.BLOOM_THRESHOLD-o,c=o*2,u=.25/o;t.uniform3f(B.uniforms.curve,n,c,u),t.uniform1f(B.uniforms.threshold,a.BLOOM_THRESHOLD),t.uniform1i(B.uniforms.uTexture,e.attach(0)),s(r),O.bind();for(let f=0;f<L.length;f++){let v=L[f];t.uniform2f(O.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(O.uniforms.uTexture,r.attach(0)),s(v),r=v}t.blendFunc(t.ONE,t.ONE),t.enable(t.BLEND);for(let f=L.length-2;f>=0;f--){let v=L[f];t.uniform2f(O.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(O.uniforms.uTexture,r.attach(0)),t.viewport(0,0,v.width,v.height),s(v),r=v}t.disable(t.BLEND),w.bind(),t.uniform2f(w.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(w.uniforms.uTexture,r.attach(0)),t.uniform1f(w.uniforms.intensity,a.BLOOM_INTENSITY),s(i)}function We(e,i,r){t.disable(t.BLEND),$.bind(),t.uniform1i($.uniforms.uTexture,e.attach(0)),s(i),X.bind(),t.uniform1f(X.uniforms.weight,a.SUNRAYS_WEIGHT),t.uniform1i(X.uniforms.uTexture,i.attach(0)),s(r)}function Ke(e,i,r){F.bind();for(let o=0;o<r;o++)t.uniform2f(F.uniforms.texelSize,e.texelSizeX,0),t.uniform1i(F.uniforms.uTexture,e.attach(0)),s(i),t.uniform2f(F.uniforms.texelSize,0,e.texelSizeY),t.uniform1i(F.uniforms.uTexture,i.attach(0)),s(e)}function qe(e){let i=e.deltaX*a.SPLAT_FORCE,r=e.deltaY*a.SPLAT_FORCE;ue(e.texcoordX,e.texcoordY,i,r,e.color)}function ke(e){for(let i=0;i<e;i++){const r=a.SMOKE_SCREEN,o=Math.random(),n=Math.random(),c=1e3*(Math.random()-.5),u=1e3*(Math.random()-.5);ue(o,n,c,u,r)}}function ue(e,i,r,o,n=a.DEFAULT_COLOR){p.bind(),t.uniform1i(p.uniforms.uTarget,l.read.attach(0)),t.uniform1f(p.uniforms.aspectRatio,m.width/m.height),t.uniform2f(p.uniforms.point,e,i),t.uniform3f(p.uniforms.color,r,o,0),t.uniform1f(p.uniforms.radius,je(a.SPLAT_RADIUS/100)),s(l.write),l.swap(),t.uniform1i(p.uniforms.uTarget,h.read.attach(0)),t.uniform3f(p.uniforms.color,n.r,n.g,n.b),s(h.write),h.swap()}function je(e){let i=m.width/m.height;return i>1&&(e*=i),e}window.addEventListener("mousemove",e=>{let i=g[0];if(!i.down)return;let r=A(e.pageX),o=A(e.pageY);ce(i,r,o)});window.addEventListener("touchstart",e=>{const i=e.targetTouches;for(;i.length>=g.length;)g.push(new K);for(let r=0;r<i.length;r++){let o=A(i[r].pageX),n=A(i[r].pageY);le(g[r+1],i[r].identifier,o,n)}});window.addEventListener("touchmove",e=>{const i=e.targetTouches;for(let r=0;r<i.length;r++){let o=g[r+1];if(!o.down)continue;let n=A(i[r].pageX),c=A(i[r].pageY);ce(o,n,c)}},!1);window.addEventListener("touchend",e=>{const i=e.changedTouches;for(let r=0;r<i.length;r++){let o=g.find(n=>n.id==i[r].identifier);o!=null&&Je(o)}});function le(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/m.width,e.texcoordY=1-o/m.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=a.SMOKE_COLOR}function ce(e,i,r){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/m.width,e.texcoordY=1-r/m.height,e.deltaX=Qe(e.texcoordX-e.prevTexcoordX),e.deltaY=Ze(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0}function Je(e){e.down=!1}function Qe(e){let i=m.width/m.height;return i<1&&(e*=i),e}function Ze(e){let i=m.width/m.height;return i>1&&(e/=i),e}function $e(e){return{r:e.r/255,g:e.g/255,b:e.b/255}}function M(e){let i=t.drawingBufferWidth/t.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(e),o=Math.round(e*i);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function et(e,i,r){return{x:i/e.width,y:r/e.height}}function A(e){let i=window.devicePixelRatio||1;return Math.floor(e*i)}function tt(e){if(e.length==0)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}export{ot as init,ke as multipleSplats,it as setColor,rt as setConfig,ue as splat};
