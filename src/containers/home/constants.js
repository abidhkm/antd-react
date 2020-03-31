import React from 'react';

export const menu = [
    { key: "1", name: 'Dashboard' },
    { key: "2", name: "Orders" },
    { key: "3", name: "Providers" },
    {
      key: "sub1",
      name: "Users",
      title: <span>Users</span>,
      sublist: [
        {
          key: 4,
          name: 'Option 4'
        },
        {
          key: 5,
          name: 'Option 5'
        }, {
          key: 6,
          name: 'Option 6'
        }, {
          key: 7,
          name: 'Option 7'
        },
      ]
    },
    {
      key: "sub2",
      name: "Categories",
      title: <span>Categories</span>,
      sublist: [
        {
          key: 8,
          name: 'Normal Categories'
        },
        {
          key: 9,
          name: 'Commercial Categories'
        },
      ]
    },
    {
      key: "sub3",
      name: "Area",
      title: <span>Area</span>,
      sublist: [
        {
          key: 10,
          name: 'Option 10'
        },
        {
          key: 11,
          name: 'Option 11'
        }, {
          key: 12,
          name: 'Option 12'
        }, {
          key: 13,
          name: 'Option 13'
        },
      ]
    },
    {
      key: "sub4",
      name: "Servieces",
      title: <span>Services</span>,
      sublist: [
        {
          key: 14,
          name: 'Option 14'
        },
        {
          key: 15,
          name: 'Option 15'
        }, {
          key: 16,
          name: 'Option 16'
        }, {
          key: 17,
          name: 'Option 17'
        },
      ]
    }
  ]