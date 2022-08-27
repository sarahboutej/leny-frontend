import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SubscriptionPlan from '../views/SubscriptionPlans.vue';
import Contact from '../views/Contact.vue';
import Search from '../views/SearchEngine.vue';
import SignUp from '../views/SignUp.vue';
import PaymentAccepted from '../views/PaymentAccepted.vue';
import PaymentRejected from '../views/PaymentRejected.vue';
import Payment from '../views/Payment.vue';
import Agents from '../views/agency/Agents.vue';
import Users from '../views/agency/Users.vue';
import Chat from '../views/agency/Chat.vue';
import Ads from '../views/agency/Ads.vue';
import Properties from '../views/agency/Properties.vue';
import Estimation from '../views/agency/Estimation.vue';
import EditProfile from '../views/agency/EditProfile.vue';
import EstimationDetails from "../views/agency/EstimationDetails.vue";
import ChatDetails from "../views/agency/ChatDetails.vue";
import AddProperty from "../views/agency/AddProperty.vue";
import Blank from "../views/BlankPage.vue";

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
    path: "/agency/chat/details/:id",
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
