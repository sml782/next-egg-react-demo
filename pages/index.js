import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '@redux/store';
import Examples from '@components/examples';
import Layout from '../components/MyLayout';
import './index.less';

const PostLink = props => (
  <li>
    <a className="BBBBB">BBBBBB</a>
    <Link href={`/p/${props.id}`}>
      <Button type="danger">{props.title}</Button>
    </Link>
  </li>
);

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js" />
          <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
          <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
        <Examples />
      </Layout>
    );
  }
}


export default connect()(Index);
