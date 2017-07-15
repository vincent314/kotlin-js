import Chalk.Chalk
import org.vince.kotlindemo.customers.Customer

external fun require(module: String): dynamic

val fs = require("fs")
val chalk:Chalk = require("chalk")

typealias TurnoverByCountry = Map<String, Double>

fun String.parseCurrency(): Double = this.substring(1).replace(',', '.').toDouble()

fun main(args: Array<String>) {
    val customers = readCustomers("../assets/customers.json")

    val turnoverByCountry = groupTurnoverByCountry(customers)

    printTurnover(turnoverByCountry)
}

fun readCustomers(file: String): Array<Customer> = JSON.parse<Array<Customer>>(fs.readFileSync(file))

fun groupTurnoverByCountry(customers: Array<Customer>): TurnoverByCountry =
        customers
                .groupBy(Customer::country)
                .mapValues { (_, customers) ->
                    customers.map(Customer::turnover)
                            .filterNotNull()
                            .map { it.parseCurrency() }
                            .sum()
                }


fun printTurnover(turnoverByCountry: TurnoverByCountry) {
    turnoverByCountry.forEach { (country, value) ->
        println("${chalk.green(country)}: ${chalk.red(value.toString())}")
    }
}