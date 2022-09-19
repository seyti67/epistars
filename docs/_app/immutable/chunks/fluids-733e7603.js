const m=document.getElementById("fluid-canvas");ne();const a={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:4,VELOCITY_DISSIPATION:2.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:0,SPLAT_RADIUS:.02,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!1,COLOR_UPDATE_SPEED:10,SMOKE_COLOR:{r:.0135,g:.044,b:.071},DEFAULT_COLOR:{r:.0135,g:.044,b:.071},PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!0,BLOOM:!1,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1},$e=t=>{a.SPLAT_RADIUS=t*.02},et=t=>{a.SMOKE_COLOR=t,g.forEach(i=>{i.color=t})};function K(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let g=[],j=[];g.push(new K);const{gl:e,ext:E}=ce(m);se()&&(a.DYE_RESOLUTION=512);E.supportLinearFiltering||(a.DYE_RESOLUTION=512,a.SHADING=!1,a.BLOOM=!1,a.SUNRAYS=!1);function ce(t){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=t.getContext("webgl2",i);const o=!!r;o||(r=t.getContext("webgl",i)||t.getContext("experimental-webgl",i));let n,c;o?(r.getExtension("EXT_color_buffer_float"),c=r.getExtension("OES_texture_float_linear")):(n=r.getExtension("OES_texture_half_float"),c=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const u=o?r.HALF_FLOAT:n.HALF_FLOAT_OES;let f,v,F;return o?(f=y(r,r.RGBA16F,r.RGBA,u),v=y(r,r.RG16F,r.RG,u),F=y(r,r.R16F,r.RED,u)):(f=y(r,r.RGBA,r.RGBA,u),v=y(r,r.RGBA,r.RGBA,u),F=y(r,r.RGBA,r.RGBA,u)),ga("send","event",o?"webgl2":"webgl",f==null?"not supported":"supported"),{gl:r,ext:{formatRGBA:f,formatRG:v,formatR:F,halfFloatTexType:u,supportLinearFiltering:c}}}function y(t,i,r,o){if(!fe(t,i,r,o))switch(i){case t.R16F:return y(t,t.RG16F,t.RG,o);case t.RG16F:return y(t,t.RGBA16F,t.RGBA,o);default:return null}return{internalFormat:i,format:r}}function fe(t,i,r,o){let n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,4,4,0,r,o,null);let c=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE}function se(){return/Mobi|Android/i.test(navigator.userAgent)}class ve{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let n=0;n<i.length;n++)r+=Ze(i[n]);let o=this.programs[r];if(o==null){let n=d(e.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=ee(this.vertexShader,n),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=te(o),this.activeProgram=o)}bind(){e.useProgram(this.activeProgram)}}class T{constructor(i,r){this.uniforms={},this.program=ee(i,r),this.uniforms=te(this.program)}bind(){e.useProgram(this.program)}}function ee(t,i){let r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,i),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)||console.trace(e.getProgramInfoLog(r)),r}function te(t){let i=[],r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let n=e.getActiveUniform(t,o).name;i[n]=e.getUniformLocation(t,n)}return i}function d(t,i,r){i=me(i,r);const o=e.createShader(t);return e.shaderSource(o,i),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.trace(e.getShaderInfoLog(o)),o}function me(t,i){if(i==null)return t;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+t}const x=d(e.VERTEX_SHADER,`
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
`),de=d(e.VERTEX_SHADER,`
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
`),he=d(e.FRAGMENT_SHADER,`
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
`),Te=d(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),xe=d(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),Ee=d(e.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),Re=`
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
`,ge=d(e.FRAGMENT_SHADER,`
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
`),Se=d(e.FRAGMENT_SHADER,`
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
`),pe=d(e.FRAGMENT_SHADER,`
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
`),De=d(e.FRAGMENT_SHADER,`
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
`),_e=d(e.FRAGMENT_SHADER,`
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
`),ye=d(e.FRAGMENT_SHADER,`
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
`),Ae=d(e.FRAGMENT_SHADER,`
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
    }`,E.supportLinearFiltering?null:["MANUAL_FILTERING"]),Le=d(e.FRAGMENT_SHADER,`
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
`),Ue=d(e.FRAGMENT_SHADER,`
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
`),Fe=d(e.FRAGMENT_SHADER,`
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
`),be=d(e.FRAGMENT_SHADER,`
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
`),Oe=d(e.FRAGMENT_SHADER,`
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
`),s=(()=>(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(t,i=!1)=>{t==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,t.width,t.height),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo)),i&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}))();let h,l,H,V,D,q,L=[],I,re,J=Pe("LDR_LLL1_0.png");const b=new T(de,he),Q=new T(x,Te),X=new T(x,xe);new T(x,Ee);const B=new T(x,ge),O=new T(x,Se),w=new T(x,pe),Z=new T(x,De),C=new T(x,_e),p=new T(x,ye),R=new T(x,Ae),z=new T(x,Le),G=new T(x,Ue),U=new T(x,Fe),N=new T(x,be),P=new T(x,Oe),_=new ve(x,Re);function ie(){let t=M(a.SIM_RESOLUTION),i=M(a.DYE_RESOLUTION);const r=E.halfFloatTexType,o=E.formatRGBA,n=E.formatRG,c=E.formatR,u=E.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),h==null?h=Y(i.width,i.height,o.internalFormat,o.format,r,u):h=$(h,i.width,i.height,o.internalFormat,o.format,r,u),l==null?l=Y(t.width,t.height,n.internalFormat,n.format,r,u):l=$(l,t.width,t.height,n.internalFormat,n.format,r,u),H=S(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),V=S(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),D=Y(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),Be(),we()}function Be(){let t=M(a.BLOOM_RESOLUTION);const i=E.halfFloatTexType,r=E.formatRGBA,o=E.supportLinearFiltering?e.LINEAR:e.NEAREST;q=S(t.width,t.height,r.internalFormat,r.format,i,o),L.length=0;for(let n=0;n<a.BLOOM_ITERATIONS;n++){let c=t.width>>n+1,u=t.height>>n+1;if(c<2||u<2)break;let f=S(c,u,r.internalFormat,r.format,i,o);L.push(f)}}function we(){let t=M(a.SUNRAYS_RESOLUTION);const i=E.halfFloatTexType,r=E.formatR,o=E.supportLinearFiltering?e.LINEAR:e.NEAREST;I=S(t.width,t.height,r.internalFormat,r.format,i,o),re=S(t.width,t.height,r.internalFormat,r.format,i,o)}function S(t,i,r,o,n,c){e.activeTexture(e.TEXTURE0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,t,i,0,o,n,null);let f=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,t,i),e.clear(e.COLOR_BUFFER_BIT);let v=1/t,F=1/i;return{texture:u,fbo:f,width:t,height:i,texelSizeX:v,texelSizeY:F,attach(k){return e.activeTexture(e.TEXTURE0+k),e.bindTexture(e.TEXTURE_2D,u),k}}}function Y(t,i,r,o,n,c){let u=S(t,i,r,o,n,c),f=S(t,i,r,o,n,c);return{width:t,height:i,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(v){u=v},get write(){return f},set write(v){f=v},swap(){let v=u;u=f,f=v}}}function Ne(t,i,r,o,n,c,u){let f=S(i,r,o,n,c,u);return Q.bind(),e.uniform1i(Q.uniforms.uTexture,t.attach(0)),s(f),f}function $(t,i,r,o,n,c,u){return t.width==i&&t.height==r||(t.read=Ne(t.read,i,r,o,n,c,u),t.write=S(i,r,o,n,c,u),t.width=i,t.height=r,t.texelSizeX=1/i,t.texelSizeY=1/r),t}function Pe(t){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(n){return e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D,i),n}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,o)},o.src=t,r}function Ie(){let t=[];a.SHADING&&t.push("SHADING"),a.BLOOM&&t.push("BLOOM"),a.SUNRAYS&&t.push("SUNRAYS"),_.setKeywords(t)}function tt(){let t=g.find(i=>i.id==-1);t==null&&(t=new K),ue(t,-1,0,0),Ie(),ie(),W=Date.now(),oe()}let W=Date.now();function oe(){const t=Me();ne()&&ie(),Xe(),Ce(t),ze(null),requestAnimationFrame(oe)}function Me(){let t=Date.now(),i=(t-W)/1e3;return i=Math.min(i,.016666),W=t,i}function ne(){let t=A(m.clientWidth),i=A(m.clientHeight);return m.width!=t||m.height!=i?(m.width=t,m.height=i,!0):!1}function Xe(){j.length>0&&Ke(j.pop()),g.forEach(t=>{t.moved&&(t.moved=!1,We(t))})}function Ce(t){e.disable(e.BLEND),G.bind(),e.uniform2f(G.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(G.uniforms.uVelocity,l.read.attach(0)),s(V),U.bind(),e.uniform2f(U.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(U.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(U.uniforms.uCurl,V.attach(1)),e.uniform1f(U.uniforms.curl,a.CURL),e.uniform1f(U.uniforms.dt,t),s(l.write),l.swap(),z.bind(),e.uniform2f(z.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(z.uniforms.uVelocity,l.read.attach(0)),s(H),X.bind(),e.uniform1i(X.uniforms.uTexture,D.read.attach(0)),e.uniform1f(X.uniforms.value,a.PRESSURE),s(D.write),D.swap(),N.bind(),e.uniform2f(N.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(N.uniforms.uDivergence,H.attach(0));for(let r=0;r<a.PRESSURE_ITERATIONS;r++)e.uniform1i(N.uniforms.uPressure,D.read.attach(1)),s(D.write),D.swap();P.bind(),e.uniform2f(P.uniforms.texelSize,l.texelSizeX,l.texelSizeY),e.uniform1i(P.uniforms.uPressure,D.read.attach(0)),e.uniform1i(P.uniforms.uVelocity,l.read.attach(1)),s(l.write),l.swap(),R.bind(),e.uniform2f(R.uniforms.texelSize,l.texelSizeX,l.texelSizeY),E.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);let i=l.read.attach(0);e.uniform1i(R.uniforms.uVelocity,i),e.uniform1i(R.uniforms.uSource,i),e.uniform1f(R.uniforms.dt,t),e.uniform1f(R.uniforms.dissipation,a.VELOCITY_DISSIPATION),s(l.write),l.swap(),E.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,h.texelSizeX,h.texelSizeY),e.uniform1i(R.uniforms.uVelocity,l.read.attach(0)),e.uniform1i(R.uniforms.uSource,h.read.attach(1)),e.uniform1f(R.uniforms.dissipation,a.DENSITY_DISSIPATION),s(h.write),h.swap()}function ze(t){a.BLOOM&&Ye(h.read,q),a.SUNRAYS&&(He(h.read,h.write,I),Ve(I,re,1)),t==null||!a.TRANSPARENT?(e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND)):e.disable(e.BLEND),Ge(t)}function Ge(t){let i=t==null?e.drawingBufferWidth:t.width,r=t==null?e.drawingBufferHeight:t.height;if(_.bind(),a.SHADING&&e.uniform2f(_.uniforms.texelSize,1/i,1/r),e.uniform1i(_.uniforms.uTexture,h.read.attach(0)),a.BLOOM){e.uniform1i(_.uniforms.uBloom,q.attach(1)),e.uniform1i(_.uniforms.uDithering,J.attach(2));let o=Qe(J,i,r);e.uniform2f(_.uniforms.ditherScale,o.x,o.y)}a.SUNRAYS&&e.uniform1i(_.uniforms.uSunrays,I.attach(3)),s(t)}function Ye(t,i){if(L.length<2)return;let r=i;e.disable(e.BLEND),B.bind();let o=a.BLOOM_THRESHOLD*a.BLOOM_SOFT_KNEE+1e-4,n=a.BLOOM_THRESHOLD-o,c=o*2,u=.25/o;e.uniform3f(B.uniforms.curve,n,c,u),e.uniform1f(B.uniforms.threshold,a.BLOOM_THRESHOLD),e.uniform1i(B.uniforms.uTexture,t.attach(0)),s(r),O.bind();for(let f=0;f<L.length;f++){let v=L[f];e.uniform2f(O.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(O.uniforms.uTexture,r.attach(0)),s(v),r=v}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let f=L.length-2;f>=0;f--){let v=L[f];e.uniform2f(O.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(O.uniforms.uTexture,r.attach(0)),e.viewport(0,0,v.width,v.height),s(v),r=v}e.disable(e.BLEND),w.bind(),e.uniform2f(w.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(w.uniforms.uTexture,r.attach(0)),e.uniform1f(w.uniforms.intensity,a.BLOOM_INTENSITY),s(i)}function He(t,i,r){e.disable(e.BLEND),Z.bind(),e.uniform1i(Z.uniforms.uTexture,t.attach(0)),s(i),C.bind(),e.uniform1f(C.uniforms.weight,a.SUNRAYS_WEIGHT),e.uniform1i(C.uniforms.uTexture,i.attach(0)),s(r)}function Ve(t,i,r){b.bind();for(let o=0;o<r;o++)e.uniform2f(b.uniforms.texelSize,t.texelSizeX,0),e.uniform1i(b.uniforms.uTexture,t.attach(0)),s(i),e.uniform2f(b.uniforms.texelSize,0,t.texelSizeY),e.uniform1i(b.uniforms.uTexture,i.attach(0)),s(t)}function We(t){let i=t.deltaX*a.SPLAT_FORCE,r=t.deltaY*a.SPLAT_FORCE;ae(t.texcoordX,t.texcoordY,i,r,t.color)}function Ke(t){for(let i=0;i<t;i++){const r=a.SMOKE_SCREEN,o=Math.random(),n=Math.random(),c=1e3*(Math.random()-.5),u=1e3*(Math.random()-.5);ae(o,n,c,u,r)}}function ae(t,i,r,o,n=a.DEFAULT_COLOR){p.bind(),e.uniform1i(p.uniforms.uTarget,l.read.attach(0)),e.uniform1f(p.uniforms.aspectRatio,m.width/m.height),e.uniform2f(p.uniforms.point,t,i),e.uniform3f(p.uniforms.color,r,o,0),e.uniform1f(p.uniforms.radius,qe(a.SPLAT_RADIUS/100)),s(l.write),l.swap(),e.uniform1i(p.uniforms.uTarget,h.read.attach(0)),e.uniform3f(p.uniforms.color,n.r,n.g,n.b),s(h.write),h.swap()}function qe(t){let i=m.width/m.height;return i>1&&(t*=i),t}window.addEventListener("mousemove",t=>{let i=g[0];if(!i.down)return;let r=A(t.pageX),o=A(t.pageY);le(i,r,o)});window.addEventListener("touchstart",t=>{const i=t.targetTouches;for(;i.length>=g.length;)g.push(new K);for(let r=0;r<i.length;r++){let o=A(i[r].pageX),n=A(i[r].pageY);ue(g[r+1],i[r].identifier,o,n)}});window.addEventListener("touchmove",t=>{const i=t.targetTouches;for(let r=0;r<i.length;r++){let o=g[r+1];if(!o.down)continue;let n=A(i[r].pageX),c=A(i[r].pageY);le(o,n,c)}},!1);window.addEventListener("touchend",t=>{const i=t.changedTouches;for(let r=0;r<i.length;r++){let o=g.find(n=>n.id==i[r].identifier);o!=null&&ke(o)}});function ue(t,i,r,o){t.id=i,t.down=!0,t.moved=!1,t.texcoordX=r/m.width,t.texcoordY=1-o/m.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=a.SMOKE_COLOR}function le(t,i,r){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=i/m.width,t.texcoordY=1-r/m.height,t.deltaX=je(t.texcoordX-t.prevTexcoordX),t.deltaY=Je(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0}function ke(t){t.down=!1}function je(t){let i=m.width/m.height;return i<1&&(t*=i),t}function Je(t){let i=m.width/m.height;return i>1&&(t/=i),t}function M(t){let i=e.drawingBufferWidth/e.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(t),o=Math.round(t*i);return e.drawingBufferWidth>e.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function Qe(t,i,r){return{x:i/t.width,y:r/t.height}}function A(t){let i=window.devicePixelRatio||1;return Math.floor(t*i)}function Ze(t){if(t.length==0)return 0;let i=0;for(let r=0;r<t.length;r++)i=(i<<5)-i+t.charCodeAt(r),i|=0;return i}export{tt as init,Ke as multipleSplats,et as setColor,$e as setSize,ae as splat};
