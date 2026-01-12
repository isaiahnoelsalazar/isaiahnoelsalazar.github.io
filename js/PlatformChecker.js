class PlatformChecker {
    static isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }
    
    static isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    static isMobile() {
        return PlatformChecker.isAndroid() || PlatformChecker.isIOS();
    }
}