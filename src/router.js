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
import Agents from './pages/agency/Agents.vue';
import Users from './pages/agency/Users.vue';
import Chat from './pages/agency/Chat.vue';
import Ads from './pages/agency/Ads.vue';
import Properties from './pages/agency/Properties.vue';
import Estimation from './pages/agency/Estimation.vue';
import EditProfile from './pages/agency/EditProfile.vue';
import EstimationDetails from "./pages/agency/EstimationDetails.vue";
import ChatDetails from "./pages/agency/ChatDetails.vue";
import AddProperty from "./pages/agency/AddProperty.vue";
import Blank from "./pages/BlankPage.vue";

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

   /*--------------- Agency Pages ----------------*/
   {
    path: "/agency/agents",
    name: "Agents",
    component: Agents,
  },
  {
    path: "/agency/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/agency/ads",
    name: "Ads",
    component: Ads,
  },
  {
    path: "/agency/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/agency/properties",
    name: "Properties",
    component: Properties,
  },
  {
    path: "/agency/property",
    name: "AddProperty",
    component: AddProperty,
  },
  {
    path: "/agency/estimation",
    name: "Estimation",
    component: Estimation,
  },
  {
    path: "/agency/edit_profile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/agency/estimation/details",
    name: "EstimationDetails",
    component: EstimationDetails,
  },
  {
    path: "/agency/chat/details",
    name: "ChatDetails",
    component: ChatDetails,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
