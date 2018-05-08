import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux';
import s from 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Projects from 'modules/Projects';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export class PageLayout extends React.PureComponent {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header className="header">

        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1"><Link to="/news/list">Новости</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/mbr/list">Mbr</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/contact/list">Контакты</Link></Menu.Item>
              <Menu.Item key="666"><Link to="/roles/list">Роли</Link></Menu.Item>
              <SubMenu title="Widgets">
                <Menu.Item key="2"><Link to="/gistogram">Гистограмма</Link></Menu.Item>
                <Menu.Item key="99"><Link to="/diagram">Круговая диаграмма</Link></Menu.Item>
                <Menu.Item key="98"><Link to="/table">Таблица</Link></Menu.Item>
                <Menu.Item key="97"><Link to="/tablo">Табло</Link></Menu.Item>
                <Menu.Item key="96"><Link to="/spedometr/small">Малый спидометр</Link></Menu.Item>
                <Menu.Item key="95"><Link to="/kpi">Справочник KPI</Link></Menu.Item>
                <Menu.Item key="94"><Link to="/lines">Справочник линий</Link></Menu.Item>
                <Menu.Item key="93"><Link to="/target-params">Настройка целевых показателей</Link></Menu.Item>
              </SubMenu>
              <SubMenu title="Справочники">
                <Menu.Item key="01"><Link to="/kpi/list">Kpi</Link></Menu.Item>
                <Menu.Item key="02"><Link to="/lines/list">Линии</Link></Menu.Item>
                <Menu.Item key="03"><Link to="/projectActivity/list">Проект/Тип активности/Линия</Link></Menu.Item>
                <Menu.Item key="04"><Link to="/target/list">Целевые значения</Link></Menu.Item>
                <Menu.Item key="05"><Link to="/widgets/list">Виджеты</Link></Menu.Item>
                <Menu.Item key="06"><Link to="/abbs/list">Абревиатуры</Link></Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default connect(null, { getProjects: Projects.actions.fetchProjects })(PageLayout)
