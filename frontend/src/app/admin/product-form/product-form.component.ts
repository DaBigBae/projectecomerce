import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, ApiService, DataService } from 'src/app/shared';
import { products } from 'src/app/_models';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  addproductForm: FormGroup;
  product= new products();
  category = new Array<string>();
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private prductsService: ApiService,) { }


  ngOnInit() {
    this.addproductForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      category1: ['', Validators.required],
      desc: ['', Validators.required],
      image: ['', Validators.required],
  });
  }
  get f() { return this.addproductForm.controls; }

  onadd(){
    
    if(this.f.category.value)
    {
      this.category.push(this.f.category.value);
    }
    if(this.f.category1.value)
    {
      this.category.push(this.f.category1.value);
    }
    this.product.category = this.category;
    this.product.price = this.f.price.value;
    this.product.name = this.f.name.value;
    this.product.desc = this.f.desc.value;
    this.product.imgurl = this.f.image.value;

    this.prductsService.addProduct(this.product.name, this.product.desc, this.product.price, 5, 8, this.product.imgurl, this.product.category)
          .subscribe(
              res => {console.log('them san pham thanh cong')});
  }

}
