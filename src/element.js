/* element按需加载 */
import Vue from 'vue/dist/vue';
import {
  Row, Col, Container, Header, Main, Button, ButtonGroup, Table, TableColumn, Dialog, Form, FormItem, Input, Message,
  Collapse, CollapseItem, Checkbox, Select, Option, Loading, Tag
} from 'element-ui';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Loading);
Vue.use(Tag);

Vue.prototype.$message = Message;