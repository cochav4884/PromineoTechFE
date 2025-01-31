//alert("It's working!");

class PromotionSender {
  constructor() {}
  sendNotification(notification) {
    console.log('Sending: ' + notification);
  }

  findUsersWithStatus(status) {
    let users = getUsers(status);
    return users;
  }

  calculateDiscount(status) {
    if (status === 'GOLD') {
      return 0.3;
    } else if (status === 'SILVER') {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender {
  constructor() {}

  sendNotification(notification) {
    console.log('Sending: ' + notification);
  }

  findUsersWithStatus(status) {
    let users = getUsers(status);
    return users;
  }

  calculateFee(status) {
    if (status === 'OVERDUE') {
      return 10;
    } else if (status === 'DELINQUENT') {
      return 25;
    }
    return 5;
  }
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification.'); //inherited sendNotification from parent
