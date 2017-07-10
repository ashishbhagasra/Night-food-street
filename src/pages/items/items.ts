import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import {ItemDetailsPage} from '../item-details/item-details';
import { GithubUsers  } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'items.html'
})
export class ItemsPage {
  users: User[];
  order: any[] = [];
  count: number = 0;
  inputCategory :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.inputCategory = navParams.get('category');
    githubUsers.load().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }

  itemSelected(item : User){

  }

  inArray(name : string)
  {
    var count=this.order.length;
    for(var i=0;i<count;i++)
    {
        if(this.order[i].name===name){return i;}
    }
    return -1;
  }

  removeItem(user){
    this.count -= 1;
    let index = this.inArray(user.login);
    if(index !== -1){
      if(this.order[index].itemCount > 0){
        this.order[index].itemCount -= 1
      } else{
        this.order.splice(index, 1);
      }
    }
  }

  addItem(user){
    let index = this.inArray(user.login)
    this.count += 1;
    if(index === -1){
      this.order.push({name: user.login, itemCount : 1});

    }
    else{
      this.order[index].itemCount += 1;
    }
  }

  goToDetails(){
    this.navCtrl.push(ItemDetailsPage, { order : this.order });
  }
}
