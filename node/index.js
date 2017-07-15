(function (_, Kotlin) {
  'use strict';
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var sum = Kotlin.kotlin.collections.sum_l63kqw$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var fs;
  var chalk;
  function parseCurrency($receiver) {
    return toDouble(replace($receiver.substring(1), 44, 46));
  }
  function main(args) {
    var customers = readCustomers('../assets/customers.json');
    var turnoverByCountry = groupTurnoverByCountry(customers);
    printTurnover(turnoverByCountry);
  }
  function readCustomers(file) {
    return JSON.parse(fs.readFileSync(file));
  }
  function groupTurnoverByCountry(customers) {
    var keySelector = Kotlin.getPropertyCallableRef('country', 1, function ($receiver) {
      return $receiver.country;
    }, function ($receiver, value) {
      $receiver.country = value;
    });
    var destination = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    var tmp$;
    for (tmp$ = 0; tmp$ !== customers.length; ++tmp$) {
      var element = customers[tmp$];
      var key = keySelector(element);
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var destination_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(Kotlin.kotlin.collections.mapCapacity_za3lpa$(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2 = destination_0.put_xwzc9p$;
      var tmp$_3 = element_0.key;
      var customers_0 = element_0.value;
      var transform = Kotlin.getPropertyCallableRef('turnover', 1, function ($receiver) {
        return $receiver.turnover;
      }, function ($receiver, value) {
        $receiver.turnover = value;
      });
      var destination_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(customers_0, 10));
      var tmp$_4;
      tmp$_4 = customers_0.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination_1.add_11rb$(transform(item));
      }
      var $receiver = filterNotNull(destination_1);
      var destination_2 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
      var tmp$_5;
      tmp$_5 = $receiver.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        destination_2.add_11rb$(parseCurrency(item_0));
      }
      tmp$_2.call(destination_0, tmp$_3, sum(destination_2));
    }
    return destination_0;
  }
  function printTurnover(turnoverByCountry) {
    var tmp$;
    tmp$ = turnoverByCountry.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var country = element.key;
      var value = element.value;
      println(chalk.green(country) + ':\xA0' + chalk.red(value.toString()));
    }
  }
  function Customer(id, firstname, lastname, email, turnover, country) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.turnover = turnover;
    this.country = country;
  }
  Customer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Customer',
    interfaces: []
  };
  Customer.prototype.component1 = function () {
    return this.id;
  };
  Customer.prototype.component2 = function () {
    return this.firstname;
  };
  Customer.prototype.component3 = function () {
    return this.lastname;
  };
  Customer.prototype.component4 = function () {
    return this.email;
  };
  Customer.prototype.component5 = function () {
    return this.turnover;
  };
  Customer.prototype.component6 = function () {
    return this.country;
  };
  Customer.prototype.copy_grywmt$ = function (id, firstname, lastname, email, turnover, country) {
    return new Customer(id === void 0 ? this.id : id, firstname === void 0 ? this.firstname : firstname, lastname === void 0 ? this.lastname : lastname, email === void 0 ? this.email : email, turnover === void 0 ? this.turnover : turnover, country === void 0 ? this.country : country);
  };
  Customer.prototype.toString = function () {
    return 'Customer(id=' + Kotlin.toString(this.id) + (', firstname=' + Kotlin.toString(this.firstname)) + (', lastname=' + Kotlin.toString(this.lastname)) + (', email=' + Kotlin.toString(this.email)) + (', turnover=' + Kotlin.toString(this.turnover)) + (', country=' + Kotlin.toString(this.country)) + ')';
  };
  Customer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.firstname) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastname) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.turnover) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    return result;
  };
  Customer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.firstname, other.firstname) && Kotlin.equals(this.lastname, other.lastname) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.turnover, other.turnover) && Kotlin.equals(this.country, other.country)))));
  };
  Object.defineProperty(_, 'fs', {
    get: function () {
      return fs;
    }
  });
  Object.defineProperty(_, 'chalk', {
    get: function () {
      return chalk;
    }
  });
  _.parseCurrency_pdl1vz$ = parseCurrency;
  _.main_kand9s$ = main;
  _.readCustomers_61zpoe$ = readCustomers;
  _.groupTurnoverByCountry_nf0xzs$ = groupTurnoverByCountry;
  _.printTurnover_rlsxbr$ = printTurnover;
  var package$org = _.org || (_.org = {});
  var package$vince = package$org.vince || (package$org.vince = {});
  var package$kotlindemo = package$vince.kotlindemo || (package$vince.kotlindemo = {});
  var package$customers = package$kotlindemo.customers || (package$kotlindemo.customers = {});
  package$customers.Customer = Customer;
  fs = require('fs');
  chalk = require('chalk');
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));
