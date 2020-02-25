import React from "react"
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Layout} from '../components/Layout'

//Import Components
import Header from "../components/Header"
import Banner from "../components/Banner"
import Tabs from "../components/Tabs"
import Button from 'react-bootstrap/Button'
import Work from "../components/Work"

const IndexPage = () => (
    <Layout>
        <Header />
        <Banner />
        <Work/>
        {/* <Button>Test</Button> */}
        {/* <Tabs /> */}
    </Layout>
)

export default IndexPage