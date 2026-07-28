def show_menu():
    print("\n==============================")
    print("      PYTHON CALCULATOR")
    print("==============================")
    print("1. Add (+)")
    print("2. Subtract (-)")
    print("3. Multiply (*)")
    print("4. Divide (/)")
    print("5. Exit")
    print("==============================")

def main():
    while True:
        show_menu()
        choice = input("Enter choice (1-5): ").strip()
        
        if choice == '5':
            print("\nThank you for using Python Calculator. Goodbye!")
            break
            
        if choice in ['1', '2', '3', '4']:
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("\n❌ Invalid input! Please enter numbers only.")
                continue
                
            if choice == '1':
                print(f"\nResult: {num1} + {num2} = {num1 + num2}")
            elif choice == '2':
                print(f"\nResult: {num1} - {num2} = {num1 - num2}")
            elif choice == '3':
                print(f"\nResult: {num1} * {num2} = {num1 * num2}")
            elif choice == '4':
                if num2 == 0:
                    print("\n❌ Error: Division by zero is not allowed!")
                else:
                    print(f"\nResult: {num1} / {num2} = {num1 / num2}")
        else:
            print("\n❌ Invalid Choice! Please select between 1 and 5.")

main()
