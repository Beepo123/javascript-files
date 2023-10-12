import math

hourly_rate = float(input("Enter hourly rate: "))
method = input("Select method to end expense entry (1 or 2): ")

expenses = 0
if method == '1':
    curr_expense = float(input("Enter expense amount or 0 to stop: "))
    while curr_expense != 0:
        expenses += curr_expense
        curr_expense = float(input("Enter expense amount or 0 to stop: "))
else:
    expenses_count = int(input("How many expenses"))
    for _ in range(expenses_count):
        expenses += float(input("Enter expense amount: "))


print(f"Hourly wage: {hourly_rate}")
print(f"Total expenses: {expenses}")
print(f"Number of hours needed to work to cover the expenses: {math.ceil(expenses/hourly_rate)}")