
alert("To Do Liste tıklayarak Note ekleyebilirsiniz. Diğer sayfadaki bir çok chartta tıklanabilir. Dashboard sayfasında dark tema kullanılabilir. Messages'da mesaj atılabilir.");






// Menulerin açılıp kapanmasının iconlara bağlanması
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")


// menu açma
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
// menu kapama
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
}
)

// tema değiştirme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


// tabşodaki siparişler

const Orders = [
    {
        productName: 'Ruko Fu Pro Drone',
        productNumber: '49347',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },

    {
        productName: 'Drone with Camera Drone',
        productNumber: '96996',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'GPS 4k Drone',
        productNumber: '22821',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'DJI Air 2S',
        productNumber: '81475',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Lozenge Drone',
        productNumber: '00482',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    }

]

//  listeye ekleme
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">
            ${order.shipping}
        </td>
        <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});



            
     // RESİM/TEXT EKLEME ÇIKARMA
     var selectedObject = null;
     var canvas = this.__canvas = new fabric.Canvas('c', {
        backgroundColor: '#f6f6f9'
 
    });

   function remove() {
         var active = canvas.getActiveObject();
         if (!active) return;
         active.setSelectionStyles({
             fontSize: undefined,
             deltaY: undefined,
         });
         canvas.requestRenderAll();
     }

   function superScript() {
         var active = canvas.getActiveObject();
         if (!active) return;
         active.setSuperscript();
         canvas.requestRenderAll();
     }

   function subScript() {
         var active = canvas.getActiveObject();
         if (!active) return;
         active.setSubscript();
         canvas.requestRenderAll();
     }

   function addText() {
         var userInput = document.getElementById('userInput').value;
         if (!userInput) return;

       var text = new fabric.Textbox(userInput, {
             left: 20,
             top: 50,
             fill: 'black',
             strokeWidth: 0,
             fontFamily: 'POPPINS',
             zIndex: 99,
         });

       canvas.add(text);
         document.getElementById('userInput').value = '';
     }

   function addImage() {
         var input = document.getElementById('imageInput');
         var file = input.files[0];

       if (!file) return;

       var reader = new FileReader();
         reader.onload = function(e) {
             var img = new Image();
             img.onload = function() {
                 var fabricImage = new fabric.Image(img, {
                     left: 20,
                     top: 50,
                 });

               canvas.add(fabricImage);
             };
             img.src = e.target.result;
         };
         reader.readAsDataURL(file);
         input.value = '';
     }

   function deleteObject() {
         var active = canvas.getActiveObject();
         if (!active) return;

       canvas.remove(active);
         selectedObject = null;
     }

   canvas.on('object:selected', function(e) {
         selectedObject = e.target;
     });

   canvas.on('selection:cleared', function() {
         selectedObject = null;
     });

// LİSTE Yİ AÇMA
    var OpenList = document.getElementById("openlisteditor");
    OpenList.addEventListener('click', () =>{
    
    var List = document.getElementById("createList");
    var Main = document.getElementById('main');
    var Aside = document.getElementById('aside');
    var Right = document.getElementById('right');

    List.classList.toggle("active");
    Main.classList.toggle("active");
    Aside.classList.toggle("active");
    Right.classList.toggle("active");

    event.preventDefault();
    
    });





// CLOSE BTN
   var closeList = document.getElementById('listClose');

   closeList.addEventListener('click', () => {
    var List = document.getElementById("createList");
    var Main = document.getElementById('main');
    var Aside = document.getElementById('aside');
    var Right = document.getElementById('right');

    List.classList.remove("active");
    Main.classList.remove("active");
    Aside.classList.remove("active");
    Right.classList.remove("active");
    event.preventDefault();
    
   });
  






//  canvasdakini LİSTEYE EKLEME YAPMAK
// var canvas = document.getElementById('c');
// var context = canvas.getContext('2d');
// var list = document.getElementById('list');

// var shapes = [];

// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', endDrawing);

// function startDrawing(event) {
//   var shape = {
//     type: 'path',
//     points: [],
//     color: getRandomColor()
//   };
//   shape.points.push(getMousePosition(event));
//   shapes.push(shape);
// }

// function draw(event) {
//   if (shapes.length === 0) return;

//   var currentShape = shapes[shapes.length - 1];
//   currentShape.points.push(getMousePosition(event));
//   drawShape(currentShape);
// }

// function endDrawing(event) {
//   if (shapes.length === 0) return;

//   var currentShape = shapes[shapes.length - 1];
//   currentShape.points.push(getMousePosition(event));
//   drawShape(currentShape);
// }

// function drawShape(shape) {
//   context.beginPath();
//   context.strokeStyle = shape.color;
//   context.moveTo(shape.points[0].x, shape.points[0].y);

//   for (var i = 1; i < shape.points.length; i++) {
//     context.lineTo(shape.points[i].x, shape.points[i].y);
//   }

//   context.stroke();
// }

// function getMousePosition(event) {
//   var rect = canvas.getBoundingClientRect();
//   return {
//     x: event.clientX - rect.left,
//     y: event.clientY - rect.top
//   };
// }

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function saveToLiList() {
//   list.innerHTML = '';

//   for (var i = 0; i < shapes.length; i++) {
//     var listItem = document.createElement('li');
//     var shape = shapes[i];

//     if (shape.type === 'path') {
//       listItem.innerText = 'Path';
//     }

//     listItem.style.color = shape.color;
//     list.appendChild(listItem);
//   }
// }


// function addToDoList() {
//     var canvas = document.getElementById('c');
//     var dataURL = canvas.toDataURL('image/jpeg');
  
//     var listItem = document.createElement('li');
//     var image = document.createElement('img');
//     image.src = dataURL;
  
//     listItem.appendChild(image);
//     var list = document.getElementById('list');
//     list.appendChild(listItem);
//   }

function addToDoList() {
    // Canvas'ten görüntü al
    var canvas = document.getElementById('c');
    var image = canvas.toDataURL('image/jpeg');
  
    // Yeni li öğesi oluştur
    var li = document.createElement('li');
    li.style.backgroundColor = 'var(--color-white)';
    li.style.border = '2px dashed var(--color-primary)';
    li.style.borderRadius = 'var(--card-border-radius)';
    li.style.alignItems = 'center';
    li.style.textAlign = 'center';
    li.style.marginLeft = '1rem';
    li.height= '17vh';
    li.width= '20vh';
  
    // Yeni img öğesi oluştur ve stilini ayarla
    var img = document.createElement('img');
    img.src = image;
    img.style.width = '85%';
    img.style.alignItems = 'center';
    img.style.textAlign = 'center';
    img.style.margin = 'auto';
    img.style.marginTop = '1.4rem';
  
    // img öğesini li öğesine ekle
    li.appendChild(img);
  
    // li öğesini ul öğesine ekle
    var ul = document.getElementById('list');
    ul.appendChild(li);
  }






































// function test(){


// jQuery(document).ready(function($){
// 	setTimeout(function(){ test(); });
// });

// jQuery(window).on('resize', function(){
// 	setTimeout(function(){ test(); }, 500);
// });

// jQuery(".navbar-toggler").click(function(){
// 	jQuery(".navbar-collapse").slideToggle(300);
// 	setTimeout(function(){ test(); });
// });

// jQuery(document).ready(function($){
// 	var path = window.location.pathname.split("/").pop();

// 	if ( path == '' ) {
// 		path = 'Anasayfa.html';
// 	}

// 	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
// 	target.parent().addClass('active');
// });


// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// }









