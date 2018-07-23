import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import AddService from './components/user/AddService.vue'
import AddService1 from './components/user/AddService1.vue'
import ShowService from './components/user/ShowService.vue'
import IndexService from './components/user/IndexService.vue'
import AdminIndex from './components/admin/AdminIndex.vue'
import AdminClientEdit from './components/admin/client/EditClient.vue'
import AdminClientNew from './components/admin/client/NewClient.vue'
import AdminClientIndex from './components/admin/client/IndexClient.vue'
import AdminClientShow from './components/admin/client/ShowClient.vue'



export const routes = [
	{
		path:'/',
		name:'home',
		component: Home
	},

	{
		path:'/signin',
		name:'signin',
		component: SignIn
	},

	{
		path:'/forgotpassword',
		name:'forgotpassword',
		component: ForgotPassword
	},

	{
		path:'/addservice',
		name:'addservice',
		component: AddService
	},
	{
		path:'/addservice1',
		name:'addservice1',
		component: AddService1
	},

	{
		path:'/showservice',
		name:'showservice',
		component: ShowService
	},

	{
		path:'/indexservice',
		name:'indexservice',
		component: IndexService
	},
	{
		path:'/admin',
		name:'admin',
		component: AdminIndex
	},
	{
		path:'/admin/client/edit',
		name:'clientedit',
		component: AdminClientEdit
	},
	{
		path:'/admin/client/new',
		name:'clientnew',
		component: AdminClientNew
	},
	{
		path:'/admin/client/index',
		name:'clientindex',
		component: AdminClientIndex
	},
	{
		path:'/admin/client/show',
		name:'clientshow',
		component: AdminClientShow
	}

]