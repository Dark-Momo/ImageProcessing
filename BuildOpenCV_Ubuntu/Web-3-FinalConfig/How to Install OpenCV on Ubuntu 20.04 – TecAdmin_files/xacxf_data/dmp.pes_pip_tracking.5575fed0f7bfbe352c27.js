(this.dmpJsonp=this.dmpJsonp||[]).push([["pes_pip_tracking"],{kTh5:function(e,p,i){"use strict";i.r(p),i.d(p,"PesPipTracking",function(){return E});var s=i("2mXy"),t=i("/MKj"),n=i("peh1"),c=i("FPS/"),o=i("xk4V"),r=i.n(o),d=i("5oup"),a=i("ldrU"),u=i("VfPQ"),g="pip_collapsed",P="pip_expanded",O="pip_corner",b=()=>{Object(d.e)(N({gestureName:"pip_started",sectionType:y()}))},l=()=>{Object(d.e)(N({gestureName:"pip_stopped",sectionType:y()}))},j=()=>{Object(d.e)(N({gestureName:"pip_expanded",sectionType:g}))},I=()=>{Object(d.e)(N({gestureName:"pip_collapsed",sectionType:P}))},h=()=>{Object(d.e)(N({gestureName:"click",sectionType:y()}))},m=()=>{Object(d.e)(N({gestureName:"auto_next",sectionType:y()}))},x=()=>{Object(d.e)(N({gestureName:"click",sectionType:g}))},_=()=>{Object(d.e)(N({gestureName:"click",sectionType:P}))},y=function e(){var p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(a.b)().getState();return Object(c.c)(p)?P:Object(c.e)(p)?g:O},N=e=>{var p=e.state,i=void 0===p?Object(a.b)().getState():p,s=e.sectionType,t=e.gestureName;return Object(d.b)({screen:{id:Object(c.f)(i),xid:Object(u.o)(i),name:"player"},section:{type:s},component:{type:"video",xid:Object(u.o)(i)},action:{gesture:t,ui_element:Object(c.g)(i),uuid:r()()}})},v=Object(n.createStructuredSelector)({pesPipIsRunning:c.d,pesPipHasRequestedVideoNavigation:c.b,pesPipUIActionOrigin:c.g,pesPipIsExpanded:c.c});class T extends s.Component{constructor(e){super(e)}componentDidMount(){this.props.pesPipIsRunning&&b()}componentDidUpdate(e){!e.pesPipIsRunning&&this.props.pesPipIsRunning&&b(),e.pesPipIsRunning&&!this.props.pesPipIsRunning&&l(),!e.pesPipIsExpanded&&this.props.pesPipIsExpanded&&j(),e.pesPipIsExpanded&&!this.props.pesPipIsExpanded&&I(),!e.pesPipHasRequestedVideoNavigation&&this.props.pesPipHasRequestedVideoNavigation&&(["previous_icon","next_icon"].includes(this.props.pesPipUIActionOrigin)?h():["ui_cell"].includes(this.props.pesPipUIActionOrigin)&&m()),!e.pesPipIsExpanded&&this.props.pesPipIsExpanded&&["toggle_icon"].includes(this.props.pesPipUIActionOrigin)&&x(),e.pesPipIsExpanded&&!this.props.pesPipIsExpanded&&["toggle_icon"].includes(this.props.pesPipUIActionOrigin)&&_()}}var E=Object(t.connect)(v)(T)}}]);