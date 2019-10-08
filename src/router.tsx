import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {NotFoundPage} from "./pages/NotFoundPage";
import {HomePage, HOME_PAGE_ROUTE_PATH} from "./pages/HomePage";
import {DetailsPage, DETAILS_PAGE_ROUTE_PATH} from "./pages/DetailsPage";
import {FavoritesPage, FAVORITE_PAGE_ROUTE_PATH} from "./pages/FavoritesPage";
import {SearchPage, SEARCH_PAGE_ROUTE_PATH} from "./pages/SearchPage";
import {SubscribePage, SUBSCRIBE_PAGE_ROUTE_PATH} from "./pages/SubscribePage";
import {UnsubscribePage, UNSUBSCRIBE_PAGE_ROUTE_PATH} from "./pages/UnsubscribePage";
import {UseTermsPage, USE_TERMS_PAGE_ROUTE_PATH} from "./pages/UseTermsPage/index";


export default function() {
    return (
        <Router>
            <Switch>
                <Route path={HOME_PAGE_ROUTE_PATH} exact={true} component={HomePage} />
                <Route path={DETAILS_PAGE_ROUTE_PATH} component={DetailsPage} />
                <Route path={FAVORITE_PAGE_ROUTE_PATH} component={FavoritesPage} />
                <Route path={SEARCH_PAGE_ROUTE_PATH} component={SearchPage} />
                <Route path={SUBSCRIBE_PAGE_ROUTE_PATH} component={SubscribePage} />
                <Route path={UNSUBSCRIBE_PAGE_ROUTE_PATH} component={UnsubscribePage} />
                <Route path={USE_TERMS_PAGE_ROUTE_PATH} component={UseTermsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}
