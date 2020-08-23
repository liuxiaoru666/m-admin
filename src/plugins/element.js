import Vue from 'vue'
import { 
    Button,
    Form,
    FormItem,
    Input,
    Message,
    MessageBox,
    Container,
    Aside,
    AsideItem,
    Header,
    Main,
    Row,
    Col,
    Menu,
    MenuItem,
    Submenu,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    TableColumn,
    Switch,
    Pagination,
    Popconfirm,
    Dialog,
    Select,
    Option,
    Tag,
    Tree
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Popconfirm)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Tree)
Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;
