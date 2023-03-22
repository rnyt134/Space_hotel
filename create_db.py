# Import the Replit database
from replit import db

# Add a key-value pairing to the database
db[“key1”] = “value1”

# Access and print the value associated with the key just created
print(db[“key1”])

# Declare a variable that stores an integer outside of the database
my_variable = 100

# Print the variable
print(my_variable)


# CREATE TABLE login (
#     User_Id INTEGER PRIMARY KEY,
#     Username VARCHAR(255) UNIQUE,
#     Password VARCHAR(255)
# );









# import sqlite3

# conn = sqlite3.connect('space_hotel.db')

# conn.execute('''
# CREATE

# conn.execute('''
# CREATE TABLE login (
#     Login_Id int PRIMARY KEY,
#     Email varchar(255),
#     Password 
#     ''')



# conn.commit()

# conn.close()