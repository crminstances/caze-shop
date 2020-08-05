import React from "react"
import PropTypes from "prop-types"
import MenuBar from "./MenuBar"
import Footer from "./Footer"
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const Layout = ({ children }) => {

  const theme = createMuiTheme({
    typography: {
     "fontFamily": `"Montserrat Subrayada", sans-serif`,
     "fontSize": 14,
     "fontWeightRegular": 400,
     "fontWeightBold": 700
    }
  });
  
  console.log(MenuBar)
 return (
  <>
    <ThemeProvider theme={theme}>
      {/* di ko pa mapalabas menu bar, napapalabas ko pagnasa app.js pero pag dito ayaw
      <MenuBar siteTitle={process.env.REACT_APP_SITE_TITLE} /> */}
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </ThemeProvider>
  </>
)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout