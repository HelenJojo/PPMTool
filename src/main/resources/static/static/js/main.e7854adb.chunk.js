(this["webpackJsonpcapstone-react-clientapp"]=this["webpackJsonpcapstone-react-clientapp"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),n=a(34),s=a.n(n),o=(a(42),a(3)),i=a(4),l=a(7),d=a(6),j=(a(43),a(74)),p=a(0),u=function(){return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)(j.a,{to:"/addProject",className:"btn btn-lg btn-info bg-dark",children:"Create a Project"})})},h=a(5),m=a(8),b=a.n(m),O=a(16),v=a(12),f=a.n(v),x="GET_ERRORS",g="GET_PROJECTS",N="GET_PROJECT",y="DELETE_PROJECT",k="GET_BACKLOG",C="GET_PROJECT_TASK",w="DELETE_PROJECT_TASK",S="SET_CURRENT_USER",P=function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(p.jsxs)("div",{className:"col-lg-6 col-md-4 col-8",children:[Object(p.jsx)("h3",{children:e.projectName}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsx)(j.a,{to:"/projectBoard/".concat(e.projectIdentifier),children:Object(p.jsx)("li",{className:"list-group-item board",children:Object(p.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" Project Board "})})}),Object(p.jsx)(j.a,{to:"/updateProject/".concat(e.projectIdentifier),children:Object(p.jsx)("li",{className:"list-group-item update",children:Object(p.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Project Info"})})}),Object(p.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(p.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Project"})})]})})]})})})}}]),a}(r.Component),D=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm(" This action will delete all your tasks and data. Do you want to continue?")){t.next=4;break}return t.next=3,f.a.delete("/api/project/".concat(e));case 3:a({type:y,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(p.jsx)("div",{className:"projects",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(p.jsx)("br",{}),Object(p.jsx)(u,{}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{}),e.map((function(e){return Object(p.jsx)(D,{project:e},e.id)}))]})})})})}}]),a}(r.Component),I=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/project/all");case 2:a=e.sent,t({type:g,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),E=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},R=a(23),A=a.n(R),B=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:S,payload:{}})}},U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(p.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.a,{className:"nav-link",to:"/dashboard",children:"Dashboard"})})}),Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(j.a,{className:"nav-link",to:"/dashboard",children:[Object(p.jsx)("i",{className:"fas fa-user-circle mr-1"}),r.fullName]})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.a,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]}),n=Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.a,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.a,{className:"nav-link",to:"/login",children:"Login"})})]})});return e=a&&r?c:n,Object(p.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(j.a,{className:"navbar-brand",to:"/",children:"Personal Project Management Tool"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(r.Component),L=Object(h.b)((function(e){return{security:e.security}}),{logout:B})(U),q=(a(70),a(76)),G=a(77),M=a(78),F=a(15),W=a(10),J=a(11),H=a.n(J),X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"project",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h5",{className:"display-4 text-center",children:"Create / Edit Project form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("textarea",{className:H()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(p.jsx)("h6",{children:"Start Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Estimated End Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-dark btn-block mt-4"})]})]})})})})})}}]),a}(r.Component),K=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:P})(X),V=a(19),z=a(36),Y=a(9),Q={project_tasks:[],project_task:{}},Z={},$={projects:[],project:{}},ee={validToken:!1,user:{}},te=function(e){return!!e},ae=Object(V.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===x?t.payload:e},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(Y.a)(Object(Y.a)({},e),{},{projects:t.payload});case N:return Object(Y.a)(Object(Y.a)({},e),{},{project:t.payload});case y:return Object(Y.a)(Object(Y.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Y.a)(Object(Y.a)({},e),{},{project_tasks:t.payload});case C:return Object(Y.a)(Object(Y.a)({},e),{},{project_task:t.payload});case w:return Object(Y.a)(Object(Y.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type===S?Object(Y.a)(Object(Y.a)({},e),{},{validToken:te(t.payload),user:t.payload}):e}}),re={},ce=[z.a],ne=window.navigator.userAgent.includes("Chrome")?Object(V.e)(ae,re,Object(V.d)(V.a.apply(void 0,ce),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})):Object(V.e)(ae,re,Object(V.d)(V.a.apply(void 0,ce))),se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,c=t.projectIdentifier,n=t.description,s=t.start_date,o=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:c,description:n,start_date:s,end_date:o})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"project",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("textarea",{className:H()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(p.jsx)("h6",{children:"Start Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Estimated End Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-dark btn-block mt-4"})]})]})})})})}}]),a}(r.Component),oe=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/api/project/".concat(e));case 3:c=a.sent,r({type:N,payload:c.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:P})(se),ie=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),Object(p.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(p.jsxs)("div",{className:"card-header text-primary ".concat(t),children:["ID: ",a.projectSequence," -- Priority: ",e]}),Object(p.jsxs)("div",{className:"card-body bg-light",children:[Object(p.jsx)("h5",{className:"card-title",children:a.summary}),Object(p.jsx)("p",{className:"card-text text-truncate ",children:a.acceptanceCriteria}),Object(p.jsx)(j.a,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(p.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(r.Component),le=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting project task ".concat(t,", this action cannot be undone"))){a.next=4;break}return a.next=3,f.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:w,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ie),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return Object(p.jsx)(le,{project_task:e},e.id)})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]);return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(p.jsx)("h3",{children:"TO DO"})})}),t]}),Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-primary text-white",children:Object(p.jsx)("h3",{children:"In Progress"})})}),a]}),Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("div",{className:"card text-center mb-2",children:Object(p.jsx)("div",{className:"card-header bg-success text-white",children:Object(p.jsx)("h3",{children:"Done"})})}),r]})]})})}}]),a}(r.Component),je=de,pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.lenght<1?e.projectNotFound?Object(p.jsx)("div",{className:" alert alert-info text-center",role:"alert",children:e.projectNotFound}):e.projectIdentifier?Object(p.jsx)("div",{className:" alert alert-info text-center",role:"alert",children:e.projectIdentifier}):Object(p.jsx)("div",{className:" alert alert-danger text-center",role:"alert",children:"No Project on this board"}):Object(p.jsx)(je,{project_tasks_prop:t})}(this.state.errors,a),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(j.a,{to:"/addProjectTask/".concat(t),className:"btn btn-dark mb-3",children:Object(p.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(p.jsx)("br",{}),Object(p.jsx)("hr",{}),e]})}}]),a}(r.Component),ue=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:k,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(pe),he=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(o.a)(this,a);var c=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:c,errors:{}},r.onChange=r.onChange.bind(Object(W.a)(r)),r.onSubmit=r.onSubmit.bind(Object(W.a)(r)),r}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(p.jsx)("div",{className:"add-PBI",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)(j.a,{to:"/projectBoard/".concat(e),className:"btn btn-light",children:"Back to Project Board"}),Object(p.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(p.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(p.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Due Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(p.jsx)("option",{value:0,children:"Select Priority"}),Object(p.jsx)("option",{value:1,children:"High"}),Object(p.jsx)("option",{value:2,children:"Medium"}),Object(p.jsx)("option",{value:3,children:"Low"})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(p.jsx)("option",{value:"",children:"Select Status"}),Object(p.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(p.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(p.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),me=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(O.a)(b.a.mark((function r(c){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),c({type:x,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),c({type:x,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(he),be=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",create_At:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,c=t.summary,n=t.acceptanceCriteria,s=t.status,o=t.priority,i=t.dueDate,l=t.projectIdentifier,d=t.create_At;this.setState({id:a,projectSequence:r,summary:c,acceptanceCriteria:n,status:s,priority:o,dueDate:i,projectIdentifier:l,create_At:d})}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,create_At:this.state.create_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"add-PBI",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)(j.a,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light",children:"Back to Project Board"}),Object(p.jsx)("h4",{className:"display-4 text-center",children:"Add /Update Project Task"}),Object(p.jsxs)("p",{className:"lead text-center",children:["Project Name: ",this.state.projectIdentifier," + Project Task ID:"," ",this.state.projectSequence]}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.summary})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(p.jsx)("h6",{children:"Due Date"}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(p.jsx)("option",{value:0,children:"Select Priority"}),Object(p.jsx)("option",{value:1,children:"High"}),Object(p.jsx)("option",{value:2,children:"Medium"}),Object(p.jsx)("option",{value:3,children:"Low"})]})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(p.jsx)("option",{value:"",children:"Select Status"}),Object(p.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(p.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(p.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(r.Component),Oe=Object(h.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(O.a)(b.a.mark((function r(c){var n;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:n=r.sent,c({type:C,payload:n.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var c=Object(O.a)(b.a.mark((function c(n){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),n({type:x,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:x,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}})(be),ve=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"landing",children:Object(p.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12 text-center",children:[Object(p.jsx)("h1",{className:"display-3 mb-4",children:"Personal Project Tool"}),Object(p.jsx)("p",{className:"lead",children:"Create your account to join active projects or start your own"}),Object(p.jsx)("hr",{}),Object(p.jsx)(j.a,{className:"btn btn-lg btn-primary mr-2",to:"/register",children:"Sign Up"}),Object(p.jsx)(j.a,{className:"btn btn-lg btn-secondary mr-2",to:"/login",children:"Login"})]})})})})})}}]),a}(r.Component),fe=Object(h.b)((function(e){return{security:e.security}}))(ve),xe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"register",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(p.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.fullName})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"email",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),ge=Object(h.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(O.a)(b.a.mark((function a(r){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(xe),Ne=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"onChange",value:function(e){this.setState(Object(F.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return Object(p.jsx)("div",{className:"login",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(p.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})}}]),a}(r.Component),ye=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(O.a)(b.a.mark((function t(a){var r,c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/login",e);case 3:r=t.sent,c=r.data.token,localStorage.setItem("jwtToken",c),E(c),n=A()(c),a({type:S,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(Ne),ke=a(37),Ce=a(75),we=["component","security"],Se=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(ke.a)(e,we);return Object(p.jsx)(G.a,Object(Y.a)(Object(Y.a)({},r),{},{render:function(e){return!0===a.validToken?Object(p.jsx)(t,Object(Y.a)({},e)):Object(p.jsx)(Ce.a,{to:"/login"})}}))})),Pe=localStorage.jwtToken;if(Pe){E(Pe);var _e=A()(Pe);ne.dispatch({type:S,payload:_e});var De=Date.now()/1e3;_e.exp<De&&(ne.dispatch(B()),window.location.href="/")}var Te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(h.a,{store:ne,children:Object(p.jsx)(q.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(L,{}),Object(p.jsx)(G.a,{exact:!0,path:"/",component:fe}),Object(p.jsx)(G.a,{exact:!0,path:"/register",component:ge}),Object(p.jsx)(G.a,{exact:!0,path:"/login",component:ye}),Object(p.jsxs)(M.a,{children:[Object(p.jsx)(Se,{exact:!0,path:"/dashboard",component:I}),Object(p.jsx)(Se,{exact:!0,path:"/addProject",component:K}),Object(p.jsx)(Se,{exact:!0,path:"/updateProject/:id",component:oe}),Object(p.jsx)(Se,{exact:!0,path:"/projectBoard/:id",component:ue}),Object(p.jsx)(Se,{exact:!0,path:"/addProjectTask/:id",component:me}),Object(p.jsx)(Se,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:Oe})]})]})})})}}]),a}(r.Component),Ie=Te,Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Ie,{})}),document.getElementById("root")),Ee()}},[[72,1,2]]]);
//# sourceMappingURL=main.e7854adb.chunk.js.map