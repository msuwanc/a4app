import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: Boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = 'Maytee2';
    this.age = 24;
    this.email = 'maytee.s@exciteholidays.com';
    this.address = {
      street: '123',
      city: 'bkk',
      state: 'TH'
    }
    this.hobbies = ['Exercise', 'Watching movies', 'Playing games']

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts
    });
  }

  onClick() {
    console.log('Click me button');
    this.name = 'New Maytee';
    this.hobbies.push('New hobby');
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i=0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street: string
  city: string
  state: string
}

interface Post {
  id: number
  title: String
  body: String
  userId: number
}