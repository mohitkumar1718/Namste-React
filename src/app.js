import React from "react";
import ReactDOM from "react-dom/client";

/**
 * -header
 *   -logo
 *   -Navbar
 * -body
 *  -search bar 
 *  -Restaurant container
 *    - Restaurant card
 * -Footer
 *   - copyrights
 *   - Links
 *   - Contacts
 */
const reslists=[
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "535508",
        "name": "Salad Days",
        "uuid": "66b8d081-9703-43d1-a292-281973f5f070",
        "city": "4",
        "area": "Jangpura",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "ecinb1jsd59vdtngs2dk",
        "cuisines": [
          "Salads"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 8,
        "slugs": {
          "restaurant": "salad-days-lajpat-nagar-lajpat-nagar",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "37/2, Ground Floor, Church Rd, Bhogal, Jangpura, New Delhi, Delhi 110014",
        "locality": "Church road",
        "parentId": 796,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7356623~p=19~eid=00000189-4860-a944-0398-bc1200c01313~srvts=1689136441668",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "535508",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 8,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "438612",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "uuid": "43cf7e84-3c7b-4a0f-b894-51499bb7ca65",
        "city": "4",
        "area": "Chanakyapuri",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "baskin-robbins-chankya-puri-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "L-12 Cannought Circus,CHANKYA PURI, New Delhi, Delhi, 110001",
        "locality": "Cannought Circus",
        "parentId": 5588,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "438612",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "8621",
        "name": "Sagar Ratna",
        "uuid": "3e2ed43c-7645-44c5-a224-dc46c31156b1",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "xaucswudilbnevouxpbi",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "sagar-ratna-outer-circle-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "K 15  Connaught Place  New Delhi",
        "locality": "K Block",
        "parentId": 793,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "8621",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "707690",
        "name": "Hong's Kitchen",
        "uuid": "82423ef3-feb5-48e0-bf4d-428e49cbd654",
        "city": "4",
        "area": "Laxmi Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "9895f0d15c1a522ab5407effa9193f98",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 7.599999904632568,
        "slugs": {
          "restaurant": "hongs-kitchen-nirman-vihar-metro-station-laxmi-nagar",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "Ground Floor, A-47, Gurunanakpura, Laxmi Nagar, Near Nirman Vihar Metro Station, Vikas Marg, New Delhi-110092",
        "locality": "Nirman Vihar Metro Station",
        "parentId": 9547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7403352~p=22~eid=00000189-4860-a944-0398-bc1300c01668~srvts=1689136441668",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "707690",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 7.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "378311",
        "name": "Blue Tokai Coffee Roasters",
        "uuid": "e85588ab-dc8a-421f-a7e9-e71cf5378bf5",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "ny6pdcddclq66j4r0wso",
        "cuisines": [
          "Cafe",
          "Healthy Food",
          "Beverages",
          "Desserts",
          "American",
          "Pizzas",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "n-7-connaught-place,-central,-delhi-110001-connaught-place-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "shop no 44 block N connaught place, CHANKYA PURI, New Delhi, Delhi-110001",
        "locality": "Chanakyapuri",
        "parentId": 2682,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "378311",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "19989",
        "name": "Dunkin' - Donuts & Coffee",
        "uuid": "5ab4bf01-c9c3-4a08-a599-fffb4bf11cd4",
        "city": "4",
        "area": "Barakhamba Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "kjdtshl9io2xhmpulgsn",
        "cuisines": [
          "Desserts",
          "Cafe",
          "Bakery",
          "Beverages",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "dunkin-donuts-kgmarg-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "HT House, K.G. Marg, New Delhi",
        "locality": "K G Marg",
        "parentId": 2276,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "19989",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "22917",
        "name": "Bangla Foods",
        "uuid": "b899c553-a87e-4173-b5e7-4cd2d4d40643",
        "city": "4",
        "area": "Gole Market",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "xquli5h001yj3gheoufz",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "bangla-foods-gole-market-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "111-113, Bangla Sahib Marg, Near Gole Market, Gole Market, New Delhi",
        "locality": "Bangla Sahib Marg",
        "parentId": 16153,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7426389~p=25~eid=00000189-4860-a944-0398-bc1400c01924~srvts=1689136441668",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "22917",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "502412",
        "name": "Suchali's Artisan Bakehouse",
        "uuid": "3651ba89-7dc9-408f-8860-9a7be8e882b2",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "qhxkwrlvsz2bhoxihtc2",
        "cuisines": [
          "Bakery",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "suchali's-artisan-bakehouse-connaught-place-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "Blue Tokai Coffee Roasters, Building, N Block, Shop No. - 44, Pratap Nagar, New Delhi, Delhi 110001",
        "locality": "Connaught Place",
        "parentId": 196351,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "502412",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "611264",
        "name": "Nothing But Sandwiches",
        "uuid": "629a7bd5-9aa9-4055-abea-a4444191ba9a",
        "city": "4",
        "area": "South Extension 1",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "i4yk1hta85orhbqthjfw",
        "cuisines": [
          "American",
          "Healthy Food",
          "Beverages",
          "Fast Food",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 7.800000190734863,
        "slugs": {
          "restaurant": "nothing-but-sandwiches-south-extension-south-extension",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "2036/B, L/S Kotla Mubarakpur, Pillanji Village, South East Delhi - 110065",
        "locality": "Kotla Mubarakpur",
        "parentId": 364171,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7350294~p=28~eid=00000189-4860-a944-0398-bc1500c01c35~srvts=1689136441668",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "611264",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 7.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "40802",
        "name": "Nathu's PastryShop",
        "uuid": "04adfaac-7181-402a-824a-564e08043498",
        "city": "4",
        "area": "Mandi House",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "hyfircukyw3uksary1lk",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
          "restaurant": "nathus-pastry-shop-mandi-house-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "12 & 13, Bengali Market, Mandi House, New Delhi",
        "locality": "Bengali Market",
        "parentId": 16640,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "40802",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1.7000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "557536",
        "name": "Jain Chawal Wale",
        "uuid": "c80e89ad-91da-4f79-bc0c-e681edc2aaeb",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "wcukmm7fiutjckbywzs0",
        "cuisines": [
          "North Indian",
          "Snacks",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "jain-chawal-wale-connaught-place-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "P1/90, Behind Narula Inn, Block-P, Connought Place, CHANKYA PURI, New Delhi(Delhi) -110001",
        "locality": "P Block",
        "parentId": 108845,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "557536",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "617971",
        "name": "Smoor",
        "uuid": "f75d854d-8823-43d3-b921-52d4b7a664ba",
        "city": "4",
        "area": "Laxmi Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "12b09df9a17e77a05819f004e7381aec",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 7,
        "slugs": {
          "restaurant": "smoor-laxmi-nagar-laxmi-nagar",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "42, Vikas Marg, Laxmi Nagar, Block S1, Nanakpura, Laxmi Nagar, New Delhi, Delhi 110092",
        "locality": "Vikas Marg",
        "parentId": 3506,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7254670~p=31~eid=00000189-4860-a944-0398-bc1600c01f68~srvts=1689136441668",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "617971",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 7,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "7574",
        "name": "Sagar Ratna (Janpath)",
        "uuid": "8c242fed-a892-4256-a589-185b8d3fae6a",
        "city": "4",
        "area": "Janpath",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "sed3lcphrutnn1fledyq",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "sagar-ratna-gtb-nagar-metro-station-gtb-nagar",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "52, Janpath Rd, Atul Grove Road, Janpath, Connaught Place, New Delhi, Delhi 110001",
        "locality": "Janpath Rd",
        "parentId": 401582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "7574",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "8628",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "uuid": "4f9e16f4-572b-489a-bd21-703e88f01c0e",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "oxmotyrsxtscjsqbct6e",
        "cuisines": [
          "Snacks",
          "Fast Food",
          "Indian",
          "American",
          "Beverages",
          "Desserts",
          "Mughlai",
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "burger-singh-outer-circle-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "H-45, Connaught Place, New Delhi",
        "locality": "Bhavbhuti Marg",
        "parentId": 375065,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "8628",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "652788",
        "name": "Parkash Sweets\t",
        "uuid": "9bccf6ae-9c4b-4fab-aef8-a01008dcf01d",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "5710001627491f4aba832a9a68870149",
        "cuisines": [
          "Sweets",
          "Snacks",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "parkash-sweets-connaught-place-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "Shop No:98, 5c India House, Connaught Ln, Atul Grove Road, Janpath, Connaught Place, New Delhi, Delhi 110001, India",
        "locality": "Atul Grove Road",
        "parentId": 155733,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "652788",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "39209",
        "name": "Rooh Burger Cafe",
        "uuid": "5c96a772-69e9-411d-b191-8e0f8efc62ea",
        "city": "4",
        "area": "Connaught Place",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bsymfzmg9glnhrlf5nqp",
        "cuisines": [
          "American",
          "Fast Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "rooh-burger-cafe-a-block-near-keventers-connaught-place",
          "city": "delhi"
        },
        "cityState": "4",
        "address": "A-22, Connaught Place. Near Keventers.",
        "locality": "A Block",
        "parentId": 171372,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "39209",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }
];

  
 const Header=()=>{
   return(
      <div className="header">
           <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=740" alt="Logo" />
           </div>
           <div className="nav-items">
             <ul>
               <li>HOME</li>
               <li>ABOUT US</li>
               <li>CONTACT US</li>
               <li>CART</li>
             </ul>
           </div>

      </div>
   )
 }
 const RestaurantCard=(props)=>{
   const {resData}=props;
   const name=resData.data.data.name;
   const rating=resData.data.data.avgRating;
   const time=resData.data.data.deliveryTime;

   return(
     <div className="res-card">
        <img  className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ resData.data.data.cloudinaryImageId}  alt="img" />
     <h3>{name}</h3>
        <h4>{resData.data.data.cuisines.join(", ")}</h4>
        <h4>{rating}⭐</h4>
        <h4>{time} minutes </h4>
     </div>
   )
 }
const Body=()=>{
   return (
      <div className="body">
         <div className="search">
            <input type="text" />
            <button>Search</button>
         </div>
         <div className="res-container">
          {reslists.map((restaurant)=>(
            <RestaurantCard key={restaurant.data.data.id} resData={restaurant}/>

          ))}
          {/* <RestaurantCard resData={reslists[0]}/>
          <RestaurantCard resData={reslists[1]}/>
          <RestaurantCard resData={reslists[2]}/>
          <RestaurantCard resData={reslists[3]}/>
          <RestaurantCard resData={reslists[4]}/>
          <RestaurantCard resData={reslists[5]}/> */}
          
         </div>

      </div>
   )
}
 const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Body/>
      </div>
   )
 }




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
