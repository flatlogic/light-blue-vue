import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Core
import TypographyPage from '@/pages/Core/Typography/Typography';
import ColorsPage from '@/pages/Core/Colors/Colors';
import CoreGridPage from '@/pages/Core/Grid/Grid';
// Ui
import AlertsPage from '@/pages/Ui/Alerts/Alerts';
import BadgePage from '@/pages/Ui/Badge/Badge';
import ButtonsPage from '@/pages/Ui/Buttons/Buttons';
import CardPage from '@/pages/Ui/Card/Card';
import CarouselPage from '@/pages/Ui/Carousel/Carousel';
import IconsPage from '@/pages/Ui/Icons/Icons';
import JumbotronPage from '@/pages/Ui/Jumbotron/Jumbotron';
import ListGroupsPage from '@/pages/Ui/ListGroups/ListGroups';
import ModalPage from '@/pages/Ui/Modal/Modal';
import NavPage from '@/pages/Ui/Nav/Nav';
import NavbarPage from '@/pages/Ui/Navbar/Navbar';
import NotificationsPage from '@/pages/Ui/Notifications/Notifications';
import PopoversPage from '@/pages/Ui/Popovers/Popovers';
import ProgressPage from '@/pages/Ui/Progress/Progress';
import TabsPage from '@/pages/Ui/Tabs/Tabs';
// Forms
import FormElementsPage from '@/pages/Forms/Elements/Elements';
import FormValidationPage from '@/pages/Forms/Validation/Validation';
import FormWizardPage from '@/pages/Forms/Wizard/Wizard';
// Charts
import ChartsPage from '@/pages/Charts/Charts';
import FlotPage from '@/pages/Charts/Flot/Flot';
import MorrisPage from '@/pages/Charts/Morris/Morris';
import SparklinePage from '@/pages/Charts/Sparkline/Sparkline';
import EasyPiePage from '@/pages/Charts/EasyPie/EasyPie';

import Tables from '@/pages/Tables/Tables';
import Notifications from '@/pages/Notifications/Notifications';
import Maps from '@/pages/Maps/Maps';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        // core pages
        {
          path: 'core/typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'core/colors',
          name: 'ColorsPage',
          component: ColorsPage,
        },
        {
          path: 'core/grid',
          name: 'CoreGridPage',
          component: CoreGridPage,
        },
        // ui pages
        {
          path: 'ui/alerts',
          name: 'AlertsPage',
          component: AlertsPage,
        },
        {
          path: 'ui/badge',
          name: 'BadgePage',
          component: BadgePage,
        },
        {
          path: 'ui/buttons',
          name: 'ButtonsPage',
          component: ButtonsPage,
        },
        {
          path: 'ui/card',
          name: 'CardPage',
          component: CardPage,
        },
        {
          path: 'ui/carousel',
          name: 'CarouselPage',
          component: CarouselPage,
        },
        {
          path: 'ui/jumbotron',
          name: 'JumbotronPage',
          component: JumbotronPage,
        },
        {
          path: 'ui/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'ui/list-groups',
          name: 'ListGroupsPage',
          component: ListGroupsPage,
        },
        {
          path: 'ui/modal',
          name: 'ModalPage',
          component: ModalPage,
        },
        {
          path: 'ui/nav',
          name: 'NavPage',
          component: NavPage,
        },
        {
          path: 'ui/navbar',
          name: 'NavbarPage',
          component: NavbarPage,
        },
        {
          path: 'ui/notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'ui/popovers',
          name: 'PopoversPage',
          component: PopoversPage,
        },
        {
          path: 'ui/progress',
          name: 'ProgressPage',
          component: ProgressPage,
        },
        {
          path: 'ui/tabs',
          name: 'TabsPage',
          component: TabsPage,
        },
        // forms
        {
          path: 'forms/elements',
          name: 'FormElementsPage',
          component: FormElementsPage,
        },
        {
          path: 'forms/validation',
          name: 'FormValidationPage',
          component: FormValidationPage,
        },
        {
          path: 'forms/wizard',
          name: 'FormWizardPage',
          component: FormWizardPage,
        },
        // Charts
        {
          path: 'charts/overview',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'charts/flot',
          name: 'FlotPage',
          component: FlotPage,
        },
        {
          path: 'charts/morris',
          name: 'MorrisPage',
          component: MorrisPage,
        },
        {
          path: 'charts/sparkline',
          name: 'SparklinePage',
          component: SparklinePage,
        },
        {
          path: 'charts/easy-pie',
          name: 'EasyPiePage',
          component: EasyPiePage,
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables,
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications,
        },
        {
          path: 'components/maps',
          name: 'Maps',
          component: Maps,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
