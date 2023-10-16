function AdminLocal() {
    return (
        <>
             <div className="tabs-animation">
                <div className="mb-3 card">
                    <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i className="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                        Portfolio Performance
                    </div>
                    <div className="btn-actions-pane-right text-capitalize">
                        <button className="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm">View All</button>
                    </div>
                    </div>
                    <div className="no-gutters row">
                    <div className="col-sm-6 col-md-4 col-xl-4">
                        <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg opacity-10 bg-warning" />
                            <i className="lnr-laptop-phone text-dark opacity-8" />
                        </div>
                        <div className="widget-chart-content">
                            <div className="widget-subheading">Cash Deposits</div>
                            <div className="widget-numbers">1,7M</div>
                            <div className="widget-description opacity-8 text-focus">
                            <div className="d-inline text-danger pr-1">
                                <i className="fa fa-angle-down" />
                                <span className="pl-1">54.1%</span>
                            </div>
                            less earnings
                            </div>
                        </div>
                        </div>
                        <div className="divider m-0 d-md-none d-sm-block" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-4">
                        <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg opacity-9 bg-danger" />
                            <i className="lnr-graduation-hat text-white" />
                        </div>
                        <div className="widget-chart-content">
                            <div className="widget-subheading">Invested Dividents</div>
                        </div></div></div></div></div></div>

        </>
     );
}

export default AdminLocal;