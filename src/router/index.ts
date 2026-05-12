import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { isAuthenticated } from '@/composables/useAuth'

// Layouts
import Layout from '@/components/Layout/Layout.vue'
import Documentation from '@/documentation/DocumentationLayout.vue'

// Core Pages
const TypographyPage = () => import('@/pages/Core/Typography/Typography.vue')
const ColorsPage = () => import('@/pages/Core/Colors/Colors.vue')
const CoreGridPage = () => import('@/pages/Core/Grid/Grid.vue')

// Tables
const TablesBasicPage = () => import('@/pages/Tables/Basic/Basic.vue')
const TablesDynamicPage = () => import('@/pages/Tables/Dynamic/Dynamic.vue')

// Maps
const GoogleMapPage = () => import('@/pages/Maps/Google/Google.vue')
const AmchartsMapPage = () => import('@/pages/Maps/Amcharts/Amcharts.vue')

// Main
const VisitsPage = () => import('@/pages/Visits/Visits.vue')
const AnalyticsPage = () => import('@/pages/Dashboard/Dashboard.vue')
const WidgetsPage = () => import('@/pages/Widgets/Widgets.vue')

// Charts
const ChartsPage = () => import('@/pages/Charts/Charts.vue')
const ApexPage = () => import('@/pages/Charts/Apex/Apex.vue')
const EchartsPage = () => import('@/pages/Charts/Echarts/Echarts.vue')
const HighchartsPage = () => import('@/pages/Charts/Highcharts/Highcharts.vue')

// Profile & Package
const ProfilePage = () => import('@/pages/Profile/Profile.vue')
const EditProfilePage = () => import('@/pages/Profile/EditProfile/EditProfile.vue')
const ChangePasswordPage = () => import('@/pages/Profile/ChangePassword/ChangePassword.vue')
const PackagePage = () => import('@/pages/Package/Package.vue')
const EmailPage = () => import('@/pages/Email/Email.vue')

// Admin
const UsersPage = () => import('@/pages/Admin/Users/Users.vue')

// Ecommerce
const ProductsManagement = () => import('@/pages/Ecommerce/Management/Management.vue')
const ProductEdit = () => import('@/pages/Ecommerce/Management/components/ProductEdit/ProductEdit.vue')
const ProductsPage = () => import('@/pages/Ecommerce/ProductsGrid/ProductsGrid.vue')
const ProductPage = () => import('@/pages/Ecommerce/ProductPage/ProductPage.vue')

// Grid
const GridPagePage = () => import('@/pages/Grid/Grid.vue')

// Forms
const FormElementsPage = () => import('@/pages/Forms/Elements/Elements.vue')
const FormValidationPage = () => import('@/pages/Forms/Validation/Validation.vue')
const FormWizardPage = () => import('@/pages/Forms/Wizard/Wizard.vue')

// Extra
const CalendarPage = () => import('@/pages/Extra/Calendar/Calendar.vue')
const InvoicePage = () => import('@/pages/Extra/Invoice/Invoice.vue')
const SearchPage = () => import('@/pages/Extra/Search/Search.vue')
const TimelinePage = () => import('@/pages/Extra/Timeline/Timeline.vue')
const GalleryPage = () => import('@/pages/Extra/Gallery/Gallery.vue')

// Auth
const Login = () => import('@/pages/Login/Login.vue')
const LoginDemo = () => import('@/pages/Extra/LoginDemo/LoginDemo.vue')
const Register = () => import('@/pages/Register/Register.vue')
const ErrorPage = () => import('@/pages/Error/Error.vue')

// UI
const AlertsPage = () => import('@/pages/Ui/Alerts/Alerts.vue')
const BadgePage = () => import('@/pages/Ui/Badge/Badge.vue')
const ButtonsPage = () => import('@/pages/Ui/Buttons/Buttons.vue')
const CardPage = () => import('@/pages/Ui/Card/Card.vue')
const CarouselPage = () => import('@/pages/Ui/Carousel/Carousel.vue')
const IconsPage = () => import('@/pages/Ui/Icons/Icons.vue')
const JumbotronPage = () => import('@/pages/Ui/Jumbotron/Jumbotron.vue')
const ListGroupsPage = () => import('@/pages/Ui/ListGroups/ListGroups.vue')
const ModalPage = () => import('@/pages/Ui/Modal/Modal.vue')
const NavPage = () => import('@/pages/Ui/Nav/Nav.vue')
const NavbarPage = () => import('@/pages/Ui/Navbar/Navbar.vue')
const NotificationsPage = () => import('@/pages/Ui/Notifications/Notifications.vue')
const PopoversPage = () => import('@/pages/Ui/Popovers/Popovers.vue')
const ProgressPage = () => import('@/pages/Ui/Progress/Progress.vue')
const TabsPage = () => import('@/pages/Ui/Tabs/Tabs.vue')

// Documentation
const DocLicensesPage = () => import('@/documentation/pages/getting-started/Licenses.vue')
const DocQuickStartPage = () => import('@/documentation/pages/getting-started/QuickStart.vue')
const DocOverviewPage = () => import('@/documentation/pages/getting-started/Overview.vue')
const DocLibsPage = () => import('@/documentation/pages/Libs.vue')
const DocPagesPage = () => import('@/documentation/pages/Pages.vue')
const DocAlertsPage = () => import('@/documentation/pages/components/Alerts.vue')
const DocBadgePage = () => import('@/documentation/pages/components/Badge.vue')
const DocButtonsPage = () => import('@/documentation/pages/components/Buttons.vue')
const DocCardPage = () => import('@/documentation/pages/components/Card.vue')
const DocCarouselPage = () => import('@/documentation/pages/components/Carousel.vue')
const DocModalPage = () => import('@/documentation/pages/components/Modal.vue')
const DocNavPage = () => import('@/documentation/pages/components/Nav.vue')
const DocNavbarPage = () => import('@/documentation/pages/components/Navbar.vue')
const DocPopoversPage = () => import('@/documentation/pages/components/Popovers.vue')
const DocProgressPage = () => import('@/documentation/pages/components/Progress.vue')
const DocTabsPage = () => import('@/documentation/pages/components/Tabs.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/app/main/visits' },
  { path: '/app', redirect: '/app/main/visits' },
  { path: '/app/main', redirect: '/app/main/analytics' },
  { path: '/app/ecommerce', redirect: '/app/ecommerce/management' },
  { path: '/app/core', redirect: '/app/core/typography' },
  { path: '/app/ui', redirect: '/app/ui/alerts' },
  { path: '/app/forms', redirect: '/app/forms/elements' },
  { path: '/app/charts', redirect: '/app/charts/overview' },
  { path: '/app/tables', redirect: '/app/tables/basic' },
  { path: '/app/maps', redirect: '/app/maps/google' },
  { path: '/app/extra', redirect: '/app/extra/calendar' },
  { path: '/documentation', redirect: '/documentation/getting-started/overview' },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: '/login-demo',
    name: 'LoginDemo',
    component: LoginDemo,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true },
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation,
    children: [
      { path: 'getting-started/overview', name: 'Overview', component: DocOverviewPage },
      { path: 'getting-started/licenses', name: 'Licenses', component: DocLicensesPage },
      { path: 'getting-started/quick-start', name: 'QuickStart', component: DocQuickStartPage },
      { path: 'components/alerts', name: 'DocAlerts', component: DocAlertsPage },
      { path: 'components/badge', name: 'DocBadge', component: DocBadgePage },
      { path: 'components/buttons', name: 'DocButtons', component: DocButtonsPage },
      { path: 'components/card', name: 'DocCard', component: DocCardPage },
      { path: 'components/carousel', name: 'DocCarousel', component: DocCarouselPage },
      { path: 'components/modal', name: 'DocModal', component: DocModalPage },
      { path: 'components/nav', name: 'DocNav', component: DocNavPage },
      { path: 'components/navbar', name: 'DocNavbar', component: DocNavbarPage },
      { path: 'components/popovers', name: 'DocPopovers', component: DocPopoversPage },
      { path: 'components/progress', name: 'DocProgress', component: DocProgressPage },
      { path: 'components/tabs', name: 'DocTabs', component: DocTabsPage },
      { path: 'libs', name: 'Libs', component: DocLibsPage },
      { path: 'pages', name: 'Pages', component: DocPagesPage },
    ],
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      // Main pages
      { path: 'main/analytics', name: 'AnalyticsPage', component: AnalyticsPage },
      { path: 'main/visits', name: 'VisitsPage', component: VisitsPage },
      { path: 'main/widgets', name: 'WidgetsPage', component: WidgetsPage },
      // Package & Profile
      { path: 'package', name: 'PackagePage', component: PackagePage },
      { path: 'profile', name: 'ProfilePage', component: ProfilePage },
      { path: 'profile/edit', name: 'EditProfilePage', component: EditProfilePage },
      { path: 'profile/change-password', name: 'ChangePasswordPage', component: ChangePasswordPage },
      { path: 'email', name: 'EmailPage', component: EmailPage },
      // Admin
      { path: 'admin/users', name: 'UsersPage', component: UsersPage },
      // Ecommerce
      { path: 'ecommerce/management', name: 'ProductsManagement', component: ProductsManagement },
      { path: 'ecommerce/management/:id', name: 'ProductEdit', component: ProductEdit },
      { path: 'ecommerce/management/create', name: 'ProductCreate', component: ProductEdit },
      { path: 'ecommerce/products', name: 'ProductsPage', component: ProductsPage },
      { path: 'ecommerce/product', name: 'ProductPage', component: ProductPage },
      { path: 'ecommerce/product/:id', name: 'DefiniteProductPage', component: ProductPage },
      // Core
      { path: 'core/typography', name: 'TypographyPage', component: TypographyPage },
      { path: 'core/colors', name: 'ColorsPage', component: ColorsPage },
      { path: 'core/grid', name: 'CoreGridPage', component: CoreGridPage },
      // UI
      { path: 'ui/alerts', name: 'AlertsPage', component: AlertsPage },
      { path: 'ui/badge', name: 'BadgePage', component: BadgePage },
      { path: 'ui/buttons', name: 'ButtonsPage', component: ButtonsPage },
      { path: 'ui/card', name: 'CardPage', component: CardPage },
      { path: 'ui/carousel', name: 'CarouselPage', component: CarouselPage },
      { path: 'ui/jumbotron', name: 'JumbotronPage', component: JumbotronPage },
      { path: 'ui/icons', name: 'IconsPage', component: IconsPage },
      { path: 'ui/list-groups', name: 'ListGroupsPage', component: ListGroupsPage },
      { path: 'ui/modal', name: 'ModalPage', component: ModalPage },
      { path: 'ui/nav', name: 'NavPage', component: NavPage },
      { path: 'ui/navbar', name: 'NavbarPage', component: NavbarPage },
      { path: 'ui/notifications', name: 'NotificationsPage', component: NotificationsPage },
      { path: 'ui/popovers', name: 'PopoversPage', component: PopoversPage },
      { path: 'ui/progress', name: 'ProgressPage', component: ProgressPage },
      { path: 'ui/tabs', name: 'TabsPage', component: TabsPage },
      // Forms
      { path: 'forms/elements', name: 'FormElementsPage', component: FormElementsPage },
      { path: 'forms/validation', name: 'FormValidationPage', component: FormValidationPage },
      { path: 'forms/wizard', name: 'FormWizardPage', component: FormWizardPage },
      // Charts
      { path: 'charts/overview', name: 'ChartsPage', component: ChartsPage },
      { path: 'charts/apex', name: 'ApexPage', component: ApexPage },
      { path: 'charts/echarts', name: 'EchartsPage', component: EchartsPage },
      { path: 'charts/highcharts', name: 'HighchartsPage', component: HighchartsPage },
      // Grid
      { path: 'grid', name: 'GridPage', component: GridPagePage },
      // Tables
      { path: 'tables/basic', name: 'TablesBasicPage', component: TablesBasicPage },
      { path: 'tables/dynamic', name: 'TablesDynamicPage', component: TablesDynamicPage },
      // Maps
      { path: 'maps/google', name: 'GoogleMapPage', component: GoogleMapPage },
      { path: 'maps/amcharts', name: 'AmchartsMapPage', component: AmchartsMapPage },
      // Extra
      { path: 'extra/calendar', name: 'CalendarPage', component: CalendarPage },
      { path: 'extra/invoice', name: 'InvoicePage', component: InvoicePage },
      { path: 'extra/search', name: 'SearchPage', component: SearchPage },
      { path: 'extra/time-line', name: 'TimelinePage', component: TimelinePage },
      { path: 'extra/gallery', name: 'GalleryPage', component: GalleryPage },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ErrorPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

// Navigation guards
router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('token')
  const authenticated = isAuthenticated(token)

  // Route requires authentication
  if (to.meta.requiresAuth && !authenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
    return
  }

  // Route is for guests only (login, register)
  if (to.meta.guestOnly && authenticated) {
    next({ name: 'VisitsPage' })
    return
  }

  next()
})

export default router
