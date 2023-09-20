var services_data={
    'Web Hosting':{
      'img_url':"assets/img/service/web_hosting.png",
      'service_title':['99.9% uptime — guaranteed.','Optimized servers, up to 40% faster.','Free SSL certificate for your site.',],
      'service_icons':['assets/img/service/web_hosting1.png','assets/img/service/web_hosting2.jpg','assets/img/service/web_hosting3.jpg'],
      'service_discription':['Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.']
    },
    'Innovative Idea':{
      'img_url':"assets/img/service/innovative_idea.png",
      'service_title':['Applying Diffusion of Innovation Theory to Intervention Development.','Explicit pain points.','Latent pain points.',],
      'service_icons':['assets/img/service/innovative_idea1.png','assets/img/service/innovative_idea2.png','assets/img/service/innovative_idea3.png'],
      'service_discription':['Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.']
    },
    'Dedicated Server':{
      'img_url':"assets/img/service/dedicated_server.png",
      'service_title':['Enim ad minim veniam.','Enim ad minim veniam.','Enim ad minim veniam.',],
      'service_icons':['assets/img/service/dedicated_server1.png','assets/img/service/dedicated_server2.png','assets/img/service/dedicated_server3.png'],
      'service_discription':['Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.','Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.']
    },
  }
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const service_title = urlParams.get('ser');
document.querySelector('.link').innerHTML += `
<a class="link-service" href="index.html#services">${service_title}</a>
`;
document.querySelector('.heading span').innerHTML=`
MORE DETAILS ABOUT ${service_title}
`
document.querySelector('.heading h2').innerHTML=`
${service_title}
`
var data=''
for(var i=0;i<3;i++){
    data += `
    <div class="staps d-flex align-items-center justify-content-start">
        <div class="staps-img cycle-icon">
            <img src=${services_data[`${service_title}`].service_icons[i]} alt="staps">
        </div>
        <div class="staps-text">
            <h3 class="title">${services_data[`${service_title}`].service_title[i]}</h3>
            <p>${services_data[`${service_title}`].service_discription[i]}</p>
        </div>
    </div>
`
}
document.querySelector('.service-description').innerHTML=data;
document.querySelector('.customize-img').innerHTML=`
<img src=${services_data[`${service_title}`].img_url} alt="customize image" class="img-fluid">
`;

var dropdown_item = document.querySelectorAll('.dropdown-item');
for(var i = 0; i < dropdown_item.length; i++){
    if(dropdown_item[i].innerHTML==`${service_title}`){
        dropdown_item[i].classList.add('active')
        dropdown_item[i].style.cssText=`
        color: var(--main-color);
        `
    }
}