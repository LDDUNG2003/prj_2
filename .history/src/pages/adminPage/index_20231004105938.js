function AdminLocal() {
    return (
        <>
                        <div class="tabs-animation">
            <div class="mb-3 card">
            <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
            Portfolio Performance
            </div>
            <div class="btn-actions-pane-right text-capitalize">
            <button class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm">View All</button>
            </div>
            </div>
            <div class="no-gutters row">
            <div class="col-sm-6 col-md-4 col-xl-4">
            <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
            <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
            <i class="lnr-laptop-phone text-dark opacity-8"></i>
            </div>
            <div class="widget-chart-content">
            <div class="widget-subheading">Cash Deposits</div>
            <div class="widget-numbers">1,7M</div>
            <div class="widget-description opacity-8 text-focus">
            <div class="d-inline text-danger pr-1">
            <i class="fa fa-angle-down"></i>
            <span class="pl-1">54.1%</span>
            </div>
            less earnings
            </div>
            </div>
            </div>
            <div class="divider m-0 d-md-none d-sm-block"></div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-4">
            <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
            <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg opacity-9 bg-danger"></div>
            <i class="lnr-graduation-hat text-white"></i>
            </div>
            <div class="widget-chart-content">
            <div class="widget-subheading">Invested Dividents</div>
        </>
     );
}

export default AdminLocal;