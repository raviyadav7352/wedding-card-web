let CRANE = (function () {
    let _init = () => {
        navDataShow();
        navBarShow();
    }
    let navBarShow = () => {
        $(document).on("click", function (e) {
            console.log("hi bro")

            let $element = $(e.target)

            let $purpose = $element.attr("purpose");
            switch ($purpose) {
                case "navbar": {
                    $(".navbar").show()
                }
                    break;
                case "dropdown": {
                    var $sidebarList = $('.sidebar-list-item');
                    $sidebarList.removeClass('active');
                    $element.parents('.sidebar-list-item').toggleClass('active');
                }
                    break;
                case "product-view": {
                    console.log("view")
                }
                    break;
                case "dropdown-opot1": {
                    $("#plus1").toggleClass("drop");

                }
                    break;
                case "dropdown-opot2": {
                    $("#plus2").toggleClass("drop");

                }
                    break;
                default: {}
            }

        })
    }

    let navDataShow = () => {

        let html = '';
        let htmlListData = '';
        let htmlListDataItem = '';
        for (let item in mainNavData) {

            let label = mainNavData[item].name;

            let listData = mainNavData[item].list;
            for (let listItem in listData) {

                let labelList = listData[listItem]

                for (let itemList of labelList.itemlist) {
                    htmlListDataItem += `<a href="#">${itemList}</a>`
                }

                htmlListData += `
                            <div class="item-box-content">
                                <h3 class="fw-bold fs-14">${labelList.name}</h3>
                                <ul role="list" class="item-box-content-lists ">
                                    <li class="box-content-list-item">
                                        ${htmlListDataItem}
                                    </li>
                                </ul>
                            </div>
                        `
                htmlListDataItem = '';
            }

            html += `

                <li class="nav-lists-item">
                    <p  class="nav-lists-item-text fw-bold">${label}</p>
                    <div class="nav-list-item-box capitalize">
                    ${htmlListData}
                    </div>
                </li>

                `
            htmlListData = '';
        }

        console.log(html)
        $("#navlist").html(html)
    }
    return {
        init: _init
    }
}
)()
