(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"29f3":function(e,t,r){"use strict";r("ecd7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Mycomponent")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("div",{staticClass:"container"},[e.registrationPassed?r("div",{staticClass:"access"},[r("h1",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.form.name+", поздравляем вы успешно зарегистрированы!")+" ")])]):r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[r("fieldset",{staticClass:"client-info attribute"},[r("legend",[e._v("Атрибуты формы:")]),r("label",{attrs:{for:"surname"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.surname,expression:"form.surname"}],staticClass:"surname",class:e.$v.form.surname.$error?"is-invalid":"",attrs:{type:"text",id:"surname",autocomplete:"off",placeholder:"Фамилия*"},domProps:{value:e.form.surname},on:{input:function(t){t.target.composing||e.$set(e.form,"surname",t.target.value)}}}),e.$v.form.surname.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:"name"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],class:e.$v.form.birthday.$error?"is-invalid":"",attrs:{type:"text",id:"name",placeholder:"Имя*"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e.$v.form.name.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:"lastname"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],staticClass:"lastname",class:e.$v.form.lastname.$error?"is-invalid":"",attrs:{type:"text",id:"lastname",placeholder:"Отчество"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}}),e.$v.form.lastname.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:"birthday"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.birthday,expression:"form.birthday"}],class:e.$v.form.birthday.$error?"is-invalid":"",attrs:{type:"number",id:"birthday",placeholder:"Дата рождения*"},domProps:{value:e.form.birthday},on:{input:function(t){t.target.composing||e.$set(e.form,"birthday",t.target.value)}}}),e.$v.form.birthday.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:"phone"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],class:e.$v.form.phone.$error?"is-invalid":"",attrs:{type:"number",id:"phone",autocomplete:"off",placeholder:"Номер телефона*"},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}}),e.$v.form.phone.minLength&&e.$v.form.phone.required&&e.$v.form.phone.maxLength?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Должно быть больше 7-и и меньше 11-и цифр ")])]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.sex,expression:"form.sex"}],attrs:{type:"text",id:"sex",placeholder:"Пол"},domProps:{value:e.form.sex},on:{input:function(t){t.target.composing||e.$set(e.form,"sex",t.target.value)}}})]),r("label",{attrs:{for:"clients-group"}},[e._v(" группа клиентов* "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.clients,expression:"form.clients"}],class:e.$v.form.phone.$error?"is-invalid":"",attrs:{multiple:"",size:"3",id:"clients-group"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"clients",t.target.multiple?r:r[0])}}},e._l(e.clientsData,(function(t,a){return r("option",{key:a,attrs:{selected:""},domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),0),e.$v.form.clients.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Выберите категорию ")])]),r("label",[e._v(" Лечащий врач "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.doctor,expression:"form.doctor"}],attrs:{id:"doctor"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"doctor",t.target.multiple?r:r[0])}}},e._l(e.doctors,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(" "+e._s(t.value)+" ")])})),0)]),r("label",{staticClass:"check-label",attrs:{for:"checkbox"}},[e._v(" Не отправлять СМС. "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checked,expression:"form.checked"}],attrs:{id:"checkbox",value:"true",type:"checkbox"},domProps:{checked:Array.isArray(e.form.checked)?e._i(e.form.checked,"true")>-1:e.form.checked},on:{change:function(t){var r=e.form.checked,a=t.target,o=!!a.checked;if(Array.isArray(r)){var n="true",s=e._i(r,n);a.checked?s<0&&e.$set(e.form,"checked",r.concat([n])):s>-1&&e.$set(e.form,"checked",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.form,"checked",o)}}})])]),r("fieldset",{staticClass:"client-info"},[r("legend",[e._v("Адрес:")]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],attrs:{type:"text",id:"index",placeholder:"Индекс"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.country,expression:"form.country"}],attrs:{type:"text",id:"country",placeholder:"Страна"},domProps:{value:e.form.country},on:{input:function(t){t.target.composing||e.$set(e.form,"country",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.region,expression:"form.region"}],attrs:{type:"text",id:"region",placeholder:"Область"},domProps:{value:e.form.region},on:{input:function(t){t.target.composing||e.$set(e.form,"region",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.city,expression:"form.city"}],class:e.$v.form.city.$error?"is-invalid":"",attrs:{type:"text",id:"city",placeholder:"Город*"},domProps:{value:e.form.city},on:{input:function(t){t.target.composing||e.$set(e.form,"city",t.target.value)}}}),e.$v.form.city.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.street,expression:"form.street"}],class:e.$v.form.street.$error?"is-invalid":"",attrs:{type:"text",id:"street",placeholder:"Улица*"},domProps:{value:e.form.street},on:{input:function(t){t.target.composing||e.$set(e.form,"street",t.target.value)}}}),e.$v.form.street.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.house,expression:"form.house"}],attrs:{type:"text",id:"house",placeholder:"Дом"},domProps:{value:e.form.house},on:{input:function(t){t.target.composing||e.$set(e.form,"house",t.target.value)}}})])]),r("fieldset",{staticClass:"client-info"},[r("legend",[e._v("Паспорт:")]),r("label",{attrs:{for:"type-doc"}},[e._v(" Тип документа*. "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.docs,expression:"form.docs"}],class:e.$v.form.docs.$error?"is-invalid":"",attrs:{id:"type-doc"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"docs",t.target.multiple?r:r[0])}}},e._l(e.documents,(function(t,a){return r("option",{key:a},[e._v(" "+e._s(t)+" ")])})),0),e.$v.form.docs.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.series,expression:"form.series"}],attrs:{type:"text",id:"series",placeholder:"Серия"},domProps:{value:e.form.series},on:{input:function(t){t.target.composing||e.$set(e.form,"series",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.number,expression:"form.number"}],attrs:{type:"text",id:"number",placeholder:"Номер"},domProps:{value:e.form.number},on:{input:function(t){t.target.composing||e.$set(e.form,"number",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.issue,expression:"form.issue"}],attrs:{type:"text",id:"issued",placeholder:"Кем выдан"},domProps:{value:e.form.issue},on:{input:function(t){t.target.composing||e.$set(e.form,"issue",t.target.value)}}})]),r("label",{attrs:{for:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.created,expression:"form.created"}],class:e.$v.form.created.$error?"is-invalid ":"",attrs:{type:"text",id:"date-issued",placeholder:"Дата выдачи*"},domProps:{value:e.form.created},on:{input:function(t){t.target.composing||e.$set(e.form,"created",t.target.value)}}}),e.$v.form.created.required?e._e():r("p",{staticClass:"invalid-feedback"},[e._v(" Обязательное поле ")])])]),r("button",{staticClass:"btn",attrs:{type:"submit",value:"submit",disabled:e.$v.$invalid}},[e._v(" Отправить ")])])])])},i=[],l=r("1dce"),c=r.n(l),m=r("b5ae"),u={mixins:[l["validationMixin"]],name:"Mycomponent",data:function(){return{registrationPassed:!1,form:{surname:"",name:"",lastname:"",birthday:"",phone:"",sex:"",docs:[],doctor:["Иванов"],clients:["VIP"],checked:!1,country:"",street:"",house:"",region:"",city:"",address:"",series:"",number:"",created:""},documents:["Паспорт"," Свидетельство о рождении","Вод. удостоверение"],clientsData:[{label:"VIP",value:"vip"},{label:"Проблемные",value:"problems"},{label:"ОМС",value:"insurance"}],doctors:[{label:"Иванов",value:"Иванов"},{label:"Захаров",value:"Захаров"},{label:"Чернышева",value:"Чернышева"}]}},validations:{form:{surname:{required:m["required"]},lastname:{required:m["required"]},name:{required:m["required"]},birthday:{required:m["required"]},phone:{required:m["required"],minLength:Object(m["minLength"])(7),maxLength:Object(m["maxLength"])(11)},city:{required:m["required"]},street:{required:m["required"]},created:{required:m["required"]},clients:{required:m["required"]},docs:{required:m["required"]}}},methods:{checkForm:function(){this.$v.form.$touch(),this.$v.$invalid||(this.registrationPassed=!0)}}},d=u,f=(r("29f3"),r("2877")),p=Object(f["a"])(d,s,i,!1,null,"1ff2bb9c",null),v=p.exports,h={name:"App",components:{Mycomponent:v}},b=h,g=Object(f["a"])(b,o,n,!1,null,null,null),y=g.exports;a["a"].use(c.a),new a["a"]({render:function(e){return e(y)}}).$mount("#app")},ecd7:function(e,t,r){}});
//# sourceMappingURL=app.89c3af06.js.map