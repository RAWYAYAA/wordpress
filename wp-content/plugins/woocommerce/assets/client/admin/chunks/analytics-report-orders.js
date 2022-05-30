"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3576],{13098:function(e,t,r){var a=r(69307),o=r(65736),s=r(94333),n=r(9818),l=r(7862),u=r.n(l),i=r(10431),c=r(86020),m=r(81595),d=r(67221),p=r(81921),y=r(14599),_=r(46439),b=r(83199);class h extends a.Component{formatVal(e,t){const{formatAmount:r,getCurrencyConfig:a}=this.context;return"currency"===t?r(e):(0,m.formatValue)(a(),t,e)}getValues(e,t){const{emptySearchResults:r,summaryData:a}=this.props,{totals:o}=a,s=o.primary?o.primary[e]:0,n=o.secondary?o.secondary[e]:0,l=r?0:s,u=r?0:n;return{delta:(0,m.calculateDelta)(l,u),prevValue:this.formatVal(u,t),value:this.formatVal(l,t)}}render(){const{charts:e,query:t,selectedChart:r,summaryData:s,endpoint:n,report:l,defaultDateRange:u}=this.props,{isError:m,isRequesting:d}=s;if(m)return(0,a.createElement)(_.Z,null);if(d)return(0,a.createElement)(c.SummaryListPlaceholder,{numberOfItems:e.length});const{compare:b}=(0,p.getDateParamsFromQuery)(t,u);return(0,a.createElement)(c.SummaryList,null,(t=>{let{onToggle:s}=t;return e.map((e=>{const{key:t,order:u,orderby:m,label:d,type:p,isReverseTrend:_,labelTooltipText:h}=e,f={chart:t};m&&(f.orderby=m),u&&(f.order=u);const g=(0,i.getNewPath)(f),v=r.key===t,{delta:w,prevValue:C,value:q}=this.getValues(t,p);return(0,a.createElement)(c.SummaryNumber,{key:t,delta:w,href:g,label:d,reverseTrend:_,prevLabel:"previous_period"===b?(0,o.__)("Previous period:","woocommerce"):(0,o.__)("Previous year:","woocommerce"),prevValue:C,selected:v,value:q,labelTooltipText:h,onLinkClickCallback:()=>{s&&s(),(0,y.recordEvent)("analytics_chart_tab_click",{report:l||n,key:t})}})}))}))}}h.propTypes={charts:u().array.isRequired,endpoint:u().string.isRequired,limitProperties:u().array,query:u().object.isRequired,selectedChart:u().shape({key:u().string.isRequired,label:u().string.isRequired,order:u().oneOf(["asc","desc"]),orderby:u().string,type:u().oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:u().object,report:u().string},h.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},h.contextType=b.$,t.Z=(0,s.compose)((0,n.withSelect)(((e,t)=>{const{charts:r,endpoint:a,limitProperties:o,query:s,filters:n,advancedFilters:l}=t,u=o||[a],i=u.some((e=>s[e]&&s[e].length));if(s.search&&!i)return{emptySearchResults:!0};const c=r&&r.map((e=>e.key)),{woocommerce_default_date_range:m}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{summaryData:(0,d.getSummaryNumbers)({endpoint:a,query:s,select:e,limitBy:u,filters:n,advancedFilters:l,defaultDateRange:m,fields:c}),defaultDateRange:m}})))(h)},95866:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var a=r(69307),o=r(7862),s=r.n(o),n=r(7323),l=r(21314),u=r(65736),i=r(92819),c=r(86020),m=r(81595),d=r(10431),p=r(81921),y=r(13732),_=r(4411),b=r(83199);class h extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,u.__)("Date","woocommerce"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:(0,u.__)("Order #","woocommerce"),screenReaderLabel:(0,u.__)("Order Number","woocommerce"),key:"order_number",required:!0},{label:(0,u.__)("Status","woocommerce"),key:"status",required:!1,isSortable:!1},{label:(0,u.__)("Customer","woocommerce"),key:"customer_id",required:!1,isSortable:!1},{label:(0,u.__)("Customer type","woocommerce"),key:"customer_type",required:!1,isSortable:!1},{label:(0,u.__)("Product(s)","woocommerce"),screenReaderLabel:(0,u.__)("Products","woocommerce"),key:"products",required:!1,isSortable:!1},{label:(0,u.__)("Items sold","woocommerce"),key:"num_items_sold",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Coupon(s)","woocommerce"),screenReaderLabel:(0,u.__)("Coupons","woocommerce"),key:"coupons",required:!1,isSortable:!1},{label:(0,u.__)("Net sales","woocommerce"),screenReaderLabel:(0,u.__)("Net sales","woocommerce"),key:"net_total",required:!0,isSortable:!0,isNumeric:!0}]}getCustomerName(e){const{first_name:t,last_name:r}=e||{};return t||r?[t,r].join(" "):""}getRowsContent(e){const{query:t}=this.props,r=(0,d.getPersistedQuery)(t),o=(0,_.O3)("dateFormat",p.defaultTableDateFormat),{render:s,getCurrencyConfig:n}=this.context;return(0,i.map)(e,(e=>{const{currency:t,date_created:l,net_total:i,num_items_sold:p,order_id:y,order_number:b,parent_id:h,status:f,customer_type:g}=e,v=e.extended_info||{},{coupons:w,customer:C,products:q}=v,k=q.sort(((e,t)=>t.quantity-e.quantity)).map((e=>({label:e.name,quantity:e.quantity,href:(0,d.getNewPath)(r,"/analytics/products",{filter:"single_product",products:e.id})}))),S=w.map((e=>({label:e.code,href:(0,d.getNewPath)(r,"/analytics/coupons",{filter:"single_coupon",coupons:e.id})})));return[{display:(0,a.createElement)(c.Date,{date:l,visibleFormat:o}),value:l},{display:(0,a.createElement)(c.Link,{href:"post.php?post="+(h||y)+"&action=edit"+(h?"#order_refunds":""),type:"wp-admin"},b),value:b},{display:(0,a.createElement)(c.OrderStatus,{className:"woocommerce-orders-table__status",order:{status:f},labelPositionToLeft:!0,orderStatusMap:(0,_.O3)("orderStatuses",{})}),value:f},{display:this.getCustomerName(C),value:this.getCustomerName(C)},{display:(R=g,R.charAt(0).toUpperCase()+R.slice(1)),value:g},{display:this.renderList(k.length?[k[0]]:[],k.map((e=>({label:(0,u.sprintf)((0,u.__)("%s× %s","woocommerce"),e.quantity,e.label),href:e.href})))),value:k.map((e=>{let{quantity:t,label:r}=e;return(0,u.sprintf)((0,u.__)("%s× %s","woocommerce"),t,r)})).join(", ")},{display:(0,m.formatValue)(n(),"number",p),value:p},{display:this.renderList(S.length?[S[0]]:[],S),value:S.map((e=>e.label)).join(", ")},{display:s(i,t),value:i}];var R}))}getSummary(e){const{orders_count:t=0,total_customers:r=0,products:a=0,num_items_sold:o=0,coupons_count:s=0,net_revenue:n=0}=e,{formatAmount:l,getCurrencyConfig:i}=this.context,c=i();return[{label:(0,u._n)("Order","Orders",t,"woocommerce"),value:(0,m.formatValue)(c,"number",t)},{label:(0,u._n)(" Customer"," Customers",r,"woocommerce"),value:(0,m.formatValue)(c,"number",r)},{label:(0,u._n)("Product","Products",a,"woocommerce"),value:(0,m.formatValue)(c,"number",a)},{label:(0,u._n)("Item sold","Items sold",o,"woocommerce"),value:(0,m.formatValue)(c,"number",o)},{label:(0,u._n)("Coupon","Coupons",s,"woocommerce"),value:(0,m.formatValue)(c,"number",s)},{label:(0,u.__)("net sales","woocommerce"),value:l(n)}]}renderLinks(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(((e,t)=>(0,a.createElement)(c.Link,{href:e.href,key:t,type:"wc-admin"},e.label)))}renderList(e,t){return(0,a.createElement)(a.Fragment,null,this.renderLinks(e),t.length>1&&(0,a.createElement)(c.ViewMoreList,{items:this.renderLinks(t)}))}render(){const{query:e,filters:t,advancedFilters:r}=this.props;return(0,a.createElement)(y.Z,{endpoint:"orders",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["orders_count","total_customers","products","num_items_sold","coupons_count","net_revenue"],query:e,tableQuery:{extended_info:!0},title:(0,u.__)("Orders","woocommerce"),columnPrefsKey:"orders_report_columns",filters:t,advancedFilters:r})}}h.contextType=b.$;var f=h,g=r(23961),v=r(13098),w=r(25619);class C extends a.Component{render(){const{path:e,query:t}=this.props;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(w.Z,{query:t,path:e,filters:n.u8,advancedFilters:n.be,report:"orders"}),(0,a.createElement)(v.Z,{charts:n.O3,endpoint:"orders",query:t,selectedChart:(0,l.Z)(t.chart,n.O3),filters:n.u8,advancedFilters:n.be}),(0,a.createElement)(g.Z,{charts:n.O3,endpoint:"orders",path:e,query:t,selectedChart:(0,l.Z)(t.chart,n.O3),filters:n.u8,advancedFilters:n.be}),(0,a.createElement)(f,{query:t,filters:n.u8,advancedFilters:n.be}))}}C.propTypes={path:s().string.isRequired,query:s().object.isRequired}},21314:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(92819);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=(0,a.find)(t,{key:e});return r||t[0]}}}]);