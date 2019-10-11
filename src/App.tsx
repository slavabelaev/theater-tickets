import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {withErrorBoundary} from "./components/ErrorBoundary";

import {NotFoundPage} from "./pages/NotFoundPage";
import {HomePage, HOME_PAGE_ROUTE_PATH} from "./pages/HomePage";
import {DetailsPage, DETAILS_PAGE_ROUTE_PATH} from "./pages/DetailsPage";
import {FavoritesPage, FAVORITE_PAGE_ROUTE_PATH} from "./pages/FavoritesPage";
import {SearchPage, SEARCH_PAGE_ROUTE_PATH} from "./pages/SearchPage";
import {SubscribePage, SUBSCRIBE_PAGE_ROUTE_PATH} from "./pages/SubscribePage";
import {UnsubscribePage, UNSUBSCRIBE_PAGE_ROUTE_PATH} from "./pages/UnsubscribePage";
import {UseTermsPage, USE_TERMS_PAGE_ROUTE_PATH} from "./pages/UseTermsPage";
import {
    SwipeablePage,
    SIGN_IN_PAGE_ROUTE_PATH,
    SIGN_UP_PAGE_ROUTE_PATH,
    RECOVERY_PAGE_ROUTE_PATH
} from "./pages/SwipeablePage";

const SwipeablePageWithErrorBoundary = withErrorBoundary(SwipeablePage);

export default function() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={HOME_PAGE_ROUTE_PATH} exact={true} component={withErrorBoundary(HomePage)} />
                    <Route path={DETAILS_PAGE_ROUTE_PATH} component={withErrorBoundary(DetailsPage)} />
                    <Route path={FAVORITE_PAGE_ROUTE_PATH} component={withErrorBoundary(FavoritesPage)} />
                    <Route path={SEARCH_PAGE_ROUTE_PATH} component={withErrorBoundary(SearchPage)} />
                    <Route path={SUBSCRIBE_PAGE_ROUTE_PATH} component={withErrorBoundary(SubscribePage)} />
                    <Route path={UNSUBSCRIBE_PAGE_ROUTE_PATH} component={withErrorBoundary(UnsubscribePage)} />
                    <Route path={USE_TERMS_PAGE_ROUTE_PATH} component={withErrorBoundary(UseTermsPage)} />
                    <Route path={SIGN_IN_PAGE_ROUTE_PATH} component={SwipeablePageWithErrorBoundary} />
                    <Route path={SIGN_UP_PAGE_ROUTE_PATH} component={SwipeablePageWithErrorBoundary} />
                    <Route path={RECOVERY_PAGE_ROUTE_PATH} component={SwipeablePageWithErrorBoundary} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Layout>
        </Router>
    );
}
