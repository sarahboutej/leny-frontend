import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import SubscriptionPlan from './pages/SubscriptionPlans.vue';
import Contact from './pages/Contact.vue';
import Search from './pages/SearchEngine.vue';
import SignUp from './pages/SignUp.vue';
import PaymentAccepted from './pages/PaymentAccepted.vue';
import PaymentRejected from './pages/PaymentRejected.vue';
import Payment from './pages/Payment.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/success",
    name: "PaymentAccepted",
    component: PaymentAccepted,
  },
  {
    path: "/reject",
    name: "PaymentRejected",
    component: PaymentRejected,
  },
  {
    path: "/subscription_plan",
    name: "Subscription plan",
    component: SubscriptionPlan,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
