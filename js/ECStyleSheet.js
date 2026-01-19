class ECStyleSheet {
    gridColumnRowAutoLayout(){
        const potentialMatches = document.querySelectorAll('[class*="grid-"]');
        const gridRegex = /grid-(\d+)x(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const gridClass = Array.from(element.classList).find(elementClass => gridRegex.test(elementClass));
            if (gridClass) {
                const match = gridClass.match(gridRegex);
                item.push({
                    element: element,
                    columns: parseInt(match[1], 10),
                    rows: parseInt(match[2], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.display = 'grid';
            item.element.style.gridTemplateColumns = `repeat(${item.columns}, 1fr)`;
            item.element.style.gridTemplateRows = `repeat(${item.rows}, 1fr)`;
        });
    }

    autoBottom(){
        const potentialMatches = document.querySelectorAll('[class*="bottom-"]');
        const bottomRegex = /bottom-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const bottomClass = Array.from(element.classList).find(elementClass => bottomRegex.test(elementClass));
            if (bottomClass) {
                const match = bottomClass.match(bottomRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.bottom = `${item.size}px`;
        });
    }

    autoLeft(){
        const potentialMatches = document.querySelectorAll('[class*="left-"]');
        const leftRegex = /left-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const leftClass = Array.from(element.classList).find(elementClass => leftRegex.test(elementClass));
            if (leftClass) {
                const match = leftClass.match(leftRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.left = `${item.size}px`;
        });
    }

    autoRight(){
        const potentialMatches = document.querySelectorAll('[class*="right-"]');
        const rightRegex = /right-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const rightClass = Array.from(element.classList).find(elementClass => rightRegex.test(elementClass));
            if (rightClass) {
                const match = rightClass.match(rightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.right = `${item.size}px`;
        });
    }

    autoTop(){
        const potentialMatches = document.querySelectorAll('[class*="top-"]');
        const topRegex = /top-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const topClass = Array.from(element.classList).find(elementClass => topRegex.test(elementClass));
            if (topClass) {
                const match = topClass.match(topRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.top = `${item.size}px`;
        });
    }

    autoHeight(){
        const potentialMatches = document.querySelectorAll('[class*="height-"]');
        const heightRegex = /height-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const heightClass = Array.from(element.classList).find(elementClass => heightRegex.test(elementClass));
            if (heightClass) {
                const match = heightClass.match(heightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.height = `${item.size}px`;
        });
    }

    autoMargin(){
        const potentialMatches = document.querySelectorAll('[class*="margin-"]');
        const marginRegex = /margin-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const marginClass = Array.from(element.classList).find(elementClass => marginRegex.test(elementClass));
            if (marginClass) {
                const match = marginClass.match(marginRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.margin = `${item.size}px`;
        });
    }

    autoPadding(){
        const potentialMatches = document.querySelectorAll('[class*="padding-"]');
        const paddingRegex = /padding-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const paddingClass = Array.from(element.classList).find(elementClass => paddingRegex.test(elementClass));
            if (paddingClass) {
                const match = paddingClass.match(paddingRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.padding = `${item.size}px`;
        });
    }

    autoWidth(){
        const potentialMatches = document.querySelectorAll('[class*="width-"]');
        const widthRegex = /width-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const widthClass = Array.from(element.classList).find(elementClass => widthRegex.test(elementClass));
            if (widthClass) {
                const match = widthClass.match(widthRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.width = `${item.size}px`;
        });
    }

    autoMarginLeft(){
        const potentialMatches = document.querySelectorAll('[class*="marginleft-"]');
        const marginleftRegex = /marginleft-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const marginleftClass = Array.from(element.classList).find(elementClass => marginleftRegex.test(elementClass));
            if (marginleftClass) {
                const match = marginleftClass.match(marginleftRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.marginLeft = `${item.size}px`;
        });
    }

    autoPaddingLeft(){
        const potentialMatches = document.querySelectorAll('[class*="paddingleft-"]');
        const paddingleftRegex = /paddingleft-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const paddingleftClass = Array.from(element.classList).find(elementClass => paddingleftRegex.test(elementClass));
            if (paddingleftClass) {
                const match = paddingleftClass.match(paddingleftRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.paddingLeft = `${item.size}px`;
        });
    }

    autoMarginRight(){
        const potentialMatches = document.querySelectorAll('[class*="marginright-"]');
        const marginrightRegex = /marginright-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const marginrightClass = Array.from(element.classList).find(elementClass => marginrightRegex.test(elementClass));
            if (marginrightClass) {
                const match = marginrightClass.match(marginrightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.marginRight = `${item.size}px`;
        });
    }

    autoPaddingRight(){
        const potentialMatches = document.querySelectorAll('[class*="paddingright-"]');
        const paddingrightRegex = /paddingright-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const paddingrightClass = Array.from(element.classList).find(elementClass => paddingrightRegex.test(elementClass));
            if (paddingrightClass) {
                const match = paddingrightClass.match(paddingrightRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.paddingRight = `${item.size}px`;
        });
    }

    autoMarginTop(){
        const potentialMatches = document.querySelectorAll('[class*="margintop-"]');
        const margintopRegex = /margintop-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const margintopClass = Array.from(element.classList).find(elementClass => margintopRegex.test(elementClass));
            if (margintopClass) {
                const match = margintopClass.match(margintopRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.marginTop = `${item.size}px`;
        });
    }

    autoPaddingTop(){
        const potentialMatches = document.querySelectorAll('[class*="paddingtop-"]');
        const paddingtopRegex = /paddingtop-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const paddingtopClass = Array.from(element.classList).find(elementClass => paddingtopRegex.test(elementClass));
            if (paddingtopClass) {
                const match = paddingtopClass.match(paddingtopRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.paddingTop = `${item.size}px`;
        });
    }

    autoMarginBottom(){
        const potentialMatches = document.querySelectorAll('[class*="marginbottom-"]');
        const marginbottomRegex = /marginbottom-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const marginbottomClass = Array.from(element.classList).find(elementClass => marginbottomRegex.test(elementClass));
            if (marginbottomClass) {
                const match = marginbottomClass.match(marginbottomRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.marginBottom = `${item.size}px`;
        });
    }

    autoPaddingBottom(){
        const potentialMatches = document.querySelectorAll('[class*="paddingbottom-"]');
        const paddingbottomRegex = /paddingbottom-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const paddingbottomClass = Array.from(element.classList).find(elementClass => paddingbottomRegex.test(elementClass));
            if (paddingbottomClass) {
                const match = paddingbottomClass.match(paddingbottomRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.paddingBottom = `${item.size}px`;
        });
    }

    autoTextColor(){
        const potentialMatches = document.querySelectorAll('[class*="textcolor-"]');
        const textColorRegex = /textcolor-(\d+)-(\d+)-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const textColorClass = Array.from(element.classList).find(elementClass => textColorRegex.test(elementClass));
            if (textColorClass) {
                const match = textColorClass.match(textColorRegex);
                item.push({
                    element: element,
                    r: parseInt(match[1], 10),
                    g: parseInt(match[2], 10),
                    b: parseInt(match[3], 10),
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.color = `rgb(${item.r}, ${item.g}, ${item.b})`;
        });
    }

    autoBackgroundColor(){
        const potentialMatches = document.querySelectorAll('[class*="backgroundcolor-"]');
        const backgroundColorRegex = /backgroundcolor-(\d+)-(\d+)-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const backgroundColorClass = Array.from(element.classList).find(elementClass => backgroundColorRegex.test(elementClass));
            if (backgroundColorClass) {
                const match = backgroundColorClass.match(backgroundColorRegex);
                item.push({
                    element: element,
                    r: parseInt(match[1], 10),
                    g: parseInt(match[2], 10),
                    b: parseInt(match[3], 10),
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.backgroundColor = `rgb(${item.r}, ${item.g}, ${item.b})`;
        });
    }

    autoTextColorAlpha(){
        const potentialMatches = document.querySelectorAll('[class*="alphatextcolor-"]');
        const textColorAlphaRegex = /alphatextcolor-(\d+)-(\d+)-(\d+)-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const textColorAlphaClass = Array.from(element.classList).find(elementClass => textColorAlphaRegex.test(elementClass));
            if (textColorAlphaClass) {
                const match = textColorAlphaClass.match(textColorAlphaRegex);
                item.push({
                    element: element,
                    r: parseInt(match[1], 10),
                    g: parseInt(match[2], 10),
                    b: parseInt(match[3], 10),
                    a: parseInt(match[4], 10),
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.color = `rgba(${item.r}, ${item.g}, ${item.b}, ${item.a})`;
        });
    }

    autoBackgroundColorAlpha(){
        const potentialMatches = document.querySelectorAll('[class*="alphabackgroundcolor-"]');
        const backgroundColorAlphaRegex = /alphabackgroundcolor-(\d+)-(\d+)-(\d+)-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const backgroundColorAlphaClass = Array.from(element.classList).find(elementClass => backgroundColorAlphaRegex.test(elementClass));
            if (backgroundColorAlphaClass) {
                const match = backgroundColorAlphaClass.match(backgroundColorAlphaRegex);
                item.push({
                    element: element,
                    r: parseInt(match[1], 10),
                    g: parseInt(match[2], 10),
                    b: parseInt(match[3], 10),
                    a: parseInt(match[4], 10),
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.backgroundColor = `rgba(${item.r}, ${item.g}, ${item.b}, ${item.a})`;
        });
    }

    autoBorderRadius(){
        const potentialMatches = document.querySelectorAll('[class*="borderradius-"]');
        const borderRadiusRegex = /borderradius-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const borderRadiusClass = Array.from(element.classList).find(elementClass => borderRadiusRegex.test(elementClass));
            if (borderRadiusClass) {
                const match = borderRadiusClass.match(borderRadiusRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.borderRadius = `${item.size}px`;
        });
    }

    autoBorderRadiusTopLeft(){
        const potentialMatches = document.querySelectorAll('[class*="borderradiustopleft-"]');
        const borderRadiusRegex = /borderradiustopleft-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const borderRadiusClass = Array.from(element.classList).find(elementClass => borderRadiusRegex.test(elementClass));
            if (borderRadiusClass) {
                const match = borderRadiusClass.match(borderRadiusRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.borderTopLeftRadius = `${item.size}px`;
        });
    }

    autoBorderRadiusTopRight(){
        const potentialMatches = document.querySelectorAll('[class*="borderradiustopright-"]');
        const borderRadiusRegex = /borderradiustopright-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const borderRadiusClass = Array.from(element.classList).find(elementClass => borderRadiusRegex.test(elementClass));
            if (borderRadiusClass) {
                const match = borderRadiusClass.match(borderRadiusRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.borderTopRightRadius = `${item.size}px`;
        });
    }

    autoBorderRadiusBottomLeft(){
        const potentialMatches = document.querySelectorAll('[class*="borderradiusbottomleft-"]');
        const borderRadiusRegex = /borderradiusbottomleft-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const borderRadiusClass = Array.from(element.classList).find(elementClass => borderRadiusRegex.test(elementClass));
            if (borderRadiusClass) {
                const match = borderRadiusClass.match(borderRadiusRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.borderBottomLeftRadius = `${item.size}px`;
        });
    }

    autoBorderRadiusBottomRight(){
        const potentialMatches = document.querySelectorAll('[class*="borderradiusbottomright-"]');
        const borderRadiusRegex = /borderradiusbottomright-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const borderRadiusClass = Array.from(element.classList).find(elementClass => borderRadiusRegex.test(elementClass));
            if (borderRadiusClass) {
                const match = borderRadiusClass.match(borderRadiusRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.borderBottomRightRadius = `${item.size}px`;
        });
    }

    autoListGap(){
        const potentialMatches = document.querySelectorAll('[class*="list-gap-"]');
        const listGapRegex = /list-gap-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const listGapClass = Array.from(element.classList).find(elementClass => listGapRegex.test(elementClass));
            if (listGapClass) {
                const match = listGapClass.match(listGapRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.gap = `${item.size}px`;
        });
    }

    autoCurveVerticalListItemCorners(){
        const potentialMatches = document.querySelectorAll('[class*="list-vertical-curved-"]');
        const listVerticalRegex = /list-vertical-curved-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const listVerticalClass = Array.from(element.classList).find(elementClass => listVerticalRegex.test(elementClass));
            if (listVerticalClass) {
                const match = listVerticalClass.match(listVerticalRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.display = "flex";
            item.element.style.flexDirection = "column";
            for (const child of item.element.children){
                child.classList.add(`borderradius-${Math.round(item.size / 2)}`);
                if (child == item.element.children[0]){
                    child.classList.add(`borderradiustopleft-${item.size}`);
                    child.classList.add(`borderradiustopright-${item.size}`);
                }
                if (child == item.element.children[item.element.children.length - 1]){
                    child.classList.add(`borderradiusbottomleft-${item.size}`);
                    child.classList.add(`borderradiusbottomright-${item.size}`);
                }
            }
        });
    }

    autoCurveHorizontalListItemCorners(){
        const potentialMatches = document.querySelectorAll('[class*="list-horizontal-curved-"]');
        const listHorizontalRegex = /list-horizontal-curved-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const listHorizontalClass = Array.from(element.classList).find(elementClass => listHorizontalRegex.test(elementClass));
            if (listHorizontalClass) {
                const match = listHorizontalClass.match(listHorizontalRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.display = "flex";
            item.element.style.flexDirection = "row";
            for (const child of item.element.children){
                child.classList.add(`borderradius-${Math.round(item.size / 2)}`);
                if (child == item.element.children[0]){
                    child.classList.add(`borderradiustopleft-${item.size}`);
                    child.classList.add(`borderradiusbottomleft-${item.size}`);
                }
                if (child == item.element.children[item.element.children.length - 1]){
                    child.classList.add(`borderradiustopright-${item.size}`);
                    child.classList.add(`borderradiusbottomright-${item.size}`);
                }
            }
        });
    }

    autoFixedCurveVerticalListItemCorners(){
        const potentialMatches = document.querySelectorAll('[class*="list-vertical-curved-fix-"]');
        const listVerticalRegex = /list-vertical-curved-fix-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const listVerticalClass = Array.from(element.classList).find(elementClass => listVerticalRegex.test(elementClass));
            if (listVerticalClass) {
                const match = listVerticalClass.match(listVerticalRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.display = "flex";
            item.element.style.flexDirection = "column";
            for (const child of item.element.children){
                child.classList.add(`borderradius-${item.size}`);
            }
        });
    }

    autoFixedCurveHorizontalListItemCorners(){
        const potentialMatches = document.querySelectorAll('[class*="list-horizontal-curved-fix-"]');
        const listHorizontalRegex = /list-horizontal-curved-fix-(\d+)/;
        Array.from(potentialMatches).reduce((item, element) => {
            const listHorizontalClass = Array.from(element.classList).find(elementClass => listHorizontalRegex.test(elementClass));
            if (listHorizontalClass) {
                const match = listHorizontalClass.match(listHorizontalRegex);
                item.push({
                    element: element,
                    size: parseInt(match[1], 10)
                });
            }
            return item;
        }, []).forEach(item => {
            item.element.style.display = "flex";
            item.element.style.flexDirection = "row";
            for (const child of item.element.children){
                child.classList.add(`borderradius-${item.size}`);
            }
        });
    }
}

const init_ECStyleSheet = new ECStyleSheet();
init_ECStyleSheet.gridColumnRowAutoLayout();
init_ECStyleSheet.autoCurveVerticalListItemCorners();
init_ECStyleSheet.autoCurveHorizontalListItemCorners();
init_ECStyleSheet.autoFixedCurveVerticalListItemCorners();
init_ECStyleSheet.autoFixedCurveHorizontalListItemCorners();
init_ECStyleSheet.autoListGap();
init_ECStyleSheet.autoBottom();
init_ECStyleSheet.autoLeft();
init_ECStyleSheet.autoRight();
init_ECStyleSheet.autoTop();
init_ECStyleSheet.autoHeight();
init_ECStyleSheet.autoMargin();
init_ECStyleSheet.autoPadding();
init_ECStyleSheet.autoWidth();
init_ECStyleSheet.autoMarginLeft();
init_ECStyleSheet.autoMarginRight();
init_ECStyleSheet.autoMarginTop();
init_ECStyleSheet.autoMarginBottom();
init_ECStyleSheet.autoPaddingLeft();
init_ECStyleSheet.autoPaddingRight();
init_ECStyleSheet.autoPaddingTop();
init_ECStyleSheet.autoPaddingBottom();
init_ECStyleSheet.autoTextColor();
init_ECStyleSheet.autoBackgroundColor();
init_ECStyleSheet.autoTextColorAlpha();
init_ECStyleSheet.autoBackgroundColorAlpha();
init_ECStyleSheet.autoBorderRadius();
init_ECStyleSheet.autoBorderRadiusTopLeft();
init_ECStyleSheet.autoBorderRadiusTopRight();
init_ECStyleSheet.autoBorderRadiusBottomLeft();
init_ECStyleSheet.autoBorderRadiusBottomRight();