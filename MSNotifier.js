class MSNotifier {
    injectStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.id = 'ms-styles';
        styleSheet.innerText = `:root {--ms-primary:#69bb5a}.ms-loading-devover,.ms-loading-devover:after,.ms-loading-pouring,.ms-loading-wrapper{width:8rem;height:8rem}.ms-loading-name{text-align:center;margin-top:2rem;color:white}.ms-loading-wrapper{margin:0 auto;position:absolute;top:40%;left:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:auto;}.ms-loading-wrapper2{padding:3rem;height:8rem;margin:0 auto;position:relative}.ms-loading-devover+.img{position:absolute;background-color:var(--ms-primary);padding:1.3rem;width:75%;height:75%;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%}.ms-loading-bouncing img,.ms-loading-devover+.img img,.ms-loading-pulse img{width:100%}.ms-loading-devover{border-radius:50%;border-top:.7rem solid rgba(0,0,0,.05);border-right:.7rem solid rgba(0,0,0,.05);border-bottom:.7rem solid rgba(0,0,0,.05);border-left:.7rem solid var(--ms-primary);position:relative;animation:1s linear infinite first}.ms-loading-devover:after{content:'';position:absolute;top:0;left:0;bottom:0;border-radius:50%}.ms-loading-pouring{background-color:#eee;border-radius:50%;position:relative;overflow:hidden}.ms-loading-pouring:before{background-color:#eee;border-radius:2rem;position:absolute;width:200px;height:200px;content:'';z-index:3;bottom:0;left:-40px;animation:6s ease-in-out infinite pouringLagi}.ms-loading-bouncing,.ms-loading-pulse,.ms-loading-pulse:after{background-color:var(--ms-primary);border-radius:50%}.ms-loading-pouring:after{content:'';background-color:var(--ms-primary);position:absolute;width:100%;height:100%;top:100%;animation:5s linear forwards pouring}.ms-loading-bar,.ms-loading-bar:after,.ms-loading-bar:before{width:1rem;height:3rem;background-color:var(--ms-primary);animation:1s ease-in-out infinite animateBar}.ms-loading-bar{animation-delay:-.16s;position:relative;display:flex;align-items:center}.ms-loading-bar:before{position:absolute;right:2rem;content:''}.ms-loading-bar:after{position:absolute;animation-delay:-.32s;content:'';left:2rem}.ms-loading-bouncing{width:3rem;height:3rem;padding:.7rem;position:absolute;margin:0 auto;top:0;box-shadow:0 4px 30px rgba(0,0,0,.2);animation:1s ease-in-out infinite bouncing}.ms-loading-pulse{padding:.8rem;width:4rem;height:4rem;position:relative}.ms-loading-bar1,.ms-loading-bar2,.ms-loading-bar3{width:100%;background-color:#eee;position:relative}.ms-loading-pulse:after{content:'';position:absolute;opacity:70%;width:5rem;height:5rem;z-index:-1;left:50%;top:50%;transform:translate(-50%,-50%);animation:1s ease-out infinite pulse}.ms-loading-bar1{height:10px;border-radius:1rem}.ms-loading-bar1:after{position:absolute;content:'';left:0;width:10px;height:10px;background-color:var(--ms-primary);border-radius:1rem;animation:3s linear infinite bar1}.ms-loading-bar2:after,.ms-loading-bar3:after{position:absolute;content:'';width:30px;height:10px;background-color:var(--ms-primary);border-radius:1rem}.ms-loading-bar2,.ms-loading-bar3{height:10px;border-radius:1rem;margin-top:1rem;overflow:hidden}.ms-loading-bar2:after{left:-30px;animation:1s linear infinite bar2}.ms-loading-bar3:after{left:0;animation:3s linear infinite bar3}@keyframes first{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes pouring{0%{top:100%}100%{top:0}}@keyframes pouringLagi{0%{bottom:0;border-radius:10%}20%{border-radius:20%}30%{border-radius:30%}40%{border-radius:50%}70%{border-radius:40%}100%{bottom:100%;border-radius:20%;transform:rotate(360deg)}}@keyframes animateBar{0%,100%{height:3rem}50%{height:6rem}}@keyframes bouncing{0%{top:10%;transform:rotate(0)}30%{top:80%}60%{top:0}90%{top:10%}100%{transform:rotate(360deg);top:10%}}@keyframes pulse{0%{opacity:100%;width:4.5rem;height:4.5rem}5%{opacity:90%;width:4.5rem;height:4.5rem}100%{opacity:0;width:8rem;height:8rem}}@keyframes bar1{0%{width:0}30%{width:60%}50%{width:80%}100%{width:100%}}@keyframes bar2{0%{left:-30px}100%{left:100%}}@keyframes bar3{0%,100%{left:0;width:30px}25%,75%{left:25%;width:50%}50%{left:88%;width:30px}}`
        document.head.appendChild(styleSheet);
    }
    takeOutStyles() {
        this.styleSheet.remove();
    }
    createBgShadow() {
        let bgShadow = document.createElement('div');
        bgShadow.style.cssText = `
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        background: #00000080;
        `;
        this.bgShadow = bgShadow;
        return bgShadow;
    }
    removeLoader() {
        if (this.bgShadow) {
            this.bgShadow.remove();
            this.loader.remove();
            this.bgShadow = null;
            this.loader = null;
        }
    }
    createLoader(loaderClass, textContent, loaderColor) {
        if (!this.loader) {
            let wrapper = document.createElement('div');
            let loader = document.createElement('div');
            let textCon = document.createElement('div');
            textCon.classList.add('ms-loading-name');
            let text = document.createElement('p');
            text.textContent = textContent || '';
            textCon.append(text);
            wrapper.classList.add('ms-loading-wrapper');
            loader.classList.add(loaderClass);
            let root = document.querySelector(':root');
            root.style.setProperty('--ms-primary', loaderColor || "#00a4d7");
            wrapper.append(loader, textCon);
            this.loader = wrapper;
            return wrapper;
        }
    }
}
new MSNotifier().injectStyles();
let MSObj = new MSNotifier();
MSObj.injectStyles();
const MSLoader = {
    VerticalSlowBar: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-bar1', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    VerticalMediumBar: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-bar2', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    VerticalFastBar: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-bar3', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    HorizontalBar: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-bar', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    FillWater: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-pouring', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    Pulse: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-pulse', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    Spin: (message, loaderColor) => {
        if (MSObj.loader) {
            MSObj.removeLoader();
        }
        let bgShadow = MSObj.createBgShadow();
        let loader = MSObj.createLoader('ms-loading-devover', message, loaderColor);
        document.body.append(bgShadow, loader);
    },
    Remove: () => {
        MSObj.removeLoader();
    }
}

