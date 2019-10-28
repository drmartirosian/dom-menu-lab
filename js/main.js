//3.0 Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  //1.0 cache main into variable named mainEl...
  var mainEl = document.querySelector('main');
  
  //1.1 set background gray, use stored color...
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  //1.2 set content of mainEl to '<h1>SEI Rocks!</h1>'...
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  //1.3 add class of flex-ctr to mainEl...
  mainEl.classList.add('flex-ctr');
  
  //----------------------------------------------
  //2.0 cache element <nav id="top-menu"> into variable topMenuEl
  var topMenuEl = document.getElementById("top-menu");
  
  //2.1 Set the height topMenuEl element to be 100%.
  topMenuEl.style.height = '100%';
  
  //2.2 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  //2.3 Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around');
  
  //-----------------------------------
  //3.1
  //Iterate over the entire menuLinks array and for each "link" object:
  menuLinks.forEach(function(link) {
    //Create an <a> element.
    var linkEl = document.createElement('a');
  
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    linkEl.setAttribute('href', link.href);
  
    //Set the new element's content to the value of the text property of the "link" object.
    linkEl.textContent = link.text;
  
    //Append the new element to the topMenuEl element.
    topMenuEl.appendChild(linkEl);
  });
  //-----------------END OF PT. 1-------------------------//
  
  
  //----------------START OF PT. 2-----------------------//
  //4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  var subMenuEl = document.getElementById("sub-menu");
  
  //4.1 Set the height subMenuEl element to be 100%.
  subMenuEl.style.height = '100%';
  
  //4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  //4.3 Add the class of flex-around to the subMenuEl element. 
  subMenuEl.classList.add('flex-around');
  
  //4.4 Set the CSS position property of subMenuEl to the value of absolute.
  subMenuEl.style.position = 'absolute';
  
  // 4.5 Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.style.top = '0';
  
  
  //-----------------------------------------
  // 5.0 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks. 
  // Declare a global showingSubMenu variable and initialize it to false;
  var topMenuLinks = documents.quarySelectorAll('topMenuEl');
  var showingSubMenu = false;
  
  // 5.1 Attach a delegated 'click' event listener to topMenuEl.
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  // The second line of code function should immediately return if the element clicked was not an <a> element.
  // console.log the content of the <a> to verify the handler is working.
  document.topMenuEl.getElementById('').addEventListener()
  
  
  // 5.2
  
  // 5.3
  
  // 5.4
  
  // 5.5
  
  // 5.6
  
  // 5.7
  
  // 5.8
  
  //------------------------------------------
  // 6.1
  // 6.2
  // 6.3
  // 6.4
  
  
  
  
  