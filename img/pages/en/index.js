/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (<div/>

    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    console.log()

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const ReadMe = () => (
	
	

     <div>
			
		<p align="center"><font size="5" face="apple-system" color="green"><b>eMagiz Platform Documentation Portal</b></font></p>

		<hr></hr>
		
		<font size="4" face="apple-system" color="black">Positioning of eMagiz as a Lowcode, Enterprise Integration Platform as Service:</font>

		<font size="3" face="apple-system" color="black">
			<ul>
			<li><font size="3" face="verdana" color="green"><b>Low-Code</b></font>: no development skills required</li>
			<li><font size="3" face="verdana" color="green"><b>Enterprise</b></font>: services full enterprise – all integration patterns</li>
			<li><font size="3" face="verdana" color="green"><b>Integration</b></font>: connecting all types of software applications</li>
			<li><font size="3" face="verdana" color="green"><b>Platform</b></font>: all-in-one development, execution and governance</li>
			<li><font size="3" face="verdana" color="green"><b>as a Service</b></font>: cloud based with automated cloud hosting</li>
			</ul>
		</font>
		
		<font size="3" face="apple-system" color="black">Please visit our website at this location to see our feature explanation of the platform: https://www.emagiz.com/features-of-the-platform/</font>
		
		
		<hr></hr>

		
		<table>
			<thead>
				<td colspan="4"><font size="5" face="apple-system"><b>eMagiz Integration Types</b></font></td>
				
			</thead>
			<tbody>
				<tr>
					<td><b>API Gateway</b><p align="center"><img src="../img/API_Gateway.png" alt="API Gateway"/></p></td>
					<td>
					An API gateway allows to speed up your API development and lift your integration landscape to a next level. eMagiz support this integration patterns inside the iPaaS platform and provides a powerful solution for API Management features. API gateways are often used to channel synchronous request from other applications, and provide responses back to these applications in the form of data of other outcomes that allow the business process to continue. Inside microservices architectures, messages are processed using standard protocols and formats with all the required security (authentication & authorization). Please see www.emagiz.com for more information and read more about our API Gateway.
					</td>
				</tr>
				<tr>
					<td><b>Messaging</b><p align="center"><img src="../img/Messaging.png" alt="API Gateway"/></p></td>
					<td>Organizations use many applications to support their business processes, and in regular landscape all of these applications are required to exchange data with each other to complete business processes. Some of the required data might be outside the organization. The messaging integration pattern allows to process messages that contain data in a secure, reliable manner. Whether that is processed synchronously or asynchronously – both are handled in the Messaging in eMagiz. Nearly all message formats and exchange protocols are supported. Please see www.emagiz.com for more information and read more about our Messaging solutions.
					</td>
				</tr>
				<tr>
					<td><b>Event Streaming</b><p align="center"><img src="../img/EventStreaming.png" alt="API Gateway"/></p></td>
					<td>
					Event Streaming allows to publish data to potential subscribers of that data. Modern microservices architectures are in need for a generic data exchange so that micro services can be more easily changed, the associated user interface updated with no need to change the complete application landscape or user interface. eMagiz provides means to manage these events in solid, but easy way. Please see www.emagiz.com for more information and read more about our Event Streaming solution.
					</td>
				</tr>
			</tbody>
		</table>


		
   

		
	
      </div>
	 
    );

   

    return (
      <div class="docMainWrapper wrapper">
        <div className="container mainContainer">
          <ReadMe />
        </div>
        </div>
    );
  }
}
/* // Cut out of the above return statement
  <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
        </div> */

module.exports = Index;
