import { Component,OnInit } from '@angular/core';

export interface Products {
  name: string;
  author: string;
  image: string;
  amount: number;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  ngOnInit(): void {
    
  }

  AvailableWisers:any= [];

  WiserCategory:any = [
      {
        name:"Hero Splendor Wiser old Model",
        prodName:"Wiser",
        prodId:"1",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"15",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency;",
    },
    {
        name:"Splendor Splendor New Model(BS6)",
        prodName:"Wiser",
        prodId:"2",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Pulsar120",
        prodName:"Wiser",
        prodId:"3",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://m.media-amazon.com/images/I/71vi+C-iutL._AC_UF1000,1000_QL80_.jpg",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Pulsar180",
        prodName:"Wiser",
        prodId:"4",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://res.cloudinary.com/safexbikes-com/image/upload/f_auto,q_auto,w_300/images/Fairing%20Front/ZFFBJ04_.jpg",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Pulsar220",
        prodName:"Wiser",
        prodId:"5",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Shine Yuga",
        prodName:"Wiser",
        prodId:"6",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Apache",
        prodName:"Wiser",
        prodId:"7",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"cd100",
        prodName:"Wiser",
        prodId:"8",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility and transparency; Provide excellent focus of light during night time Highly appreciated for its accurate illumination capability Visor made up of high impact polycarbonate material The soothing light is not blinding and allows the biker to perfectly see the road ahead of him",
    },
    {
        name:"Tvs Star Cicty",
        prodName:"Wiser",
        prodId:"9",
        model:"2009-2016",
        brand:"Max-Shine",
        wiserId:"1",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/5/AK/VX/QG/58179081/hero-splendor-bike-visor-500x500.png",
        location:"C-4",
        availableNos:"19",
        amount:"250",
        colors:"Red,Green,Yellow,Blue,Silver,Grey",
        Description:"Applicable to all old hero honda Have high visibility  Highly appreciated for its accurate illumination capability Visor made",
    }    
];

prodName:any = [
  {prodId:1,prodname:'Hero'},
  {prodId:2,prodname:'Honda'},
  {prodId:3,prodname:'Bajaj'},
  {prodId:4,prodname:'TVS'},
  {prodId:5,prodname:'Suzuki'},
  {prodId:6,prodname:'Enfield'},
  {prodId:7,prodname:'KTM'}
];

availableBrands:any = [
  {brandId:1,brandName:'Max-Shine'},
  {brandId:2,brandName:'Kingster'},
];

  selectedProdId = 1;

  productsList:any = [
    {prodId:1,prodname:'Hero'},
    {prodId:2,prodname:'Honda'},
    {prodId:3,prodname:'Bajaj'},
    {prodId:4,prodname:'TVS'},
    {prodId:5,prodname:'Suzuki'},
    {prodId:6,prodname:'Enfield'},
    {prodId:7,prodname:'KTM'}
  ];

  accessory:any=[
    {accessoryId:"1",accessoryName:"Wiser"},
    {accessoryId:"2",accessoryName:"Doom"},
    {accessoryId:"3",accessoryName:"Side Panel"},
    {accessoryId:"4",accessoryName:"Back Panel"},
    {accessoryId:"5",accessoryName:"Tyre"},
    {accessoryId:"6",accessoryName:"Chain Spraucket"},
    {accessoryId:"7",accessoryName:"Wheel"},
    {accessoryId:"8",accessoryName:"Tube"},
    {accessoryId:"9",accessoryName:"Doom Set"},
  ]

  selectedCatId:any="";
  selectedCategory:any=[];
  selecetedProdId:any;
  selectedProduct:any=[]
  showProducts:Boolean = false;
  addProduct:boolean = false;

  selectCategory(event:any) {
    this.selectedCatId = event;
    this.selectedCategory = [];
    this.selectedProduct = [];
    this.selecetedProdId = "";
    let val = event;
    console.log(val,"val");
    switch(val) {
      case "1" :
        // for(let i= 0; i<this.WiserCategory.length;i++) {
        //   this.selectedCategory.push(this.WiserCategory[i]);
        // }
        this.selectedCategory = this.WiserCategory;
        break;
      case "2" :
        // this.selectedCategory = this.WiserCategory;
        console.log("emept")
        break;
    }
    console.log(this.selectedCategory,"this.selectedCategory");
  }

  selectproduct(e:any) {
    let val = e;
    this.selectedProdId = e;
    this.selectedProduct = [];
    console.log(e,"e");
    let selectedProductData = this.selectedCategory.find(
      (t:{prodId:any}) => t.prodId == val);
       this.selectedProduct = selectedProductData;
       this.showProducts = true;
       console.log(this.selectedProduct,"selectedProduct");
  }

}
