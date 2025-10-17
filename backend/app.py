# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import psycopg2
import psycopg2.extras

# --- INITIALIZATION ---
app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app) 

# --- DATABASE CONNECTION ---
DB_HOST = "localhost"
DB_NAME = "Userdatabase"
DB_USER = "postgres"
DB_PASS = "root"

# Function to connect to the database
def get_db_connection():
    conn = psycopg2.connect(host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS)
    return conn

# User Registration 
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'message': 'Please provide all required fields.'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        sql = "INSERT INTO users (name, email, password_hash) VALUES (%s, %s, %s) RETURNING id"
        cur.execute(sql, (name, email, hashed_password))
        new_user_id = cur.fetchone()[0]
        conn.commit()
        return jsonify({'message': 'User created successfully!'}), 201
    except psycopg2.errors.UniqueViolation:
        return jsonify({'message': 'Email already exists.'}), 409
    except Exception as e:
        print(f"Database error: {e}")
        return jsonify({'message': 'Server error during registration.'}), 500
    finally:
        if conn:
            cur.close()
            conn.close()

# User Login Route
@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Please provide email and password.'}), 400

    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        sql = "SELECT * FROM users WHERE email = %s"
        cur.execute(sql, (email,))
        user = cur.fetchone()

        if user is None:
            return jsonify({'message': 'Invalid credentials.'}), 401

        stored_password_hash = user['password_hash']
        if bcrypt.check_password_hash(stored_password_hash, password):
            return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'message': 'Invalid credentials.'}), 401
    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({'message': 'Server error during login.'}), 500
    finally:
        if conn:
            cur.close()
            conn.close()

# --- RUN THE APP ---
if __name__ == '__main__':
    # For PostgreSQL, we don't need to initialize the DB from the app.
    # You should create the table directly in your database.
    app.run(debug=True, port=5000)

# --- Add this to app.py ---

# Forgot Password Route (placeholder)
@app.route('/api/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'message': 'Email is required.'}), 400

    # In a real application, you would:
    # 1. Check if the user exists in the database.
    # 2. Generate a unique, expiring password reset token.
    # 3. Save the token and its expiry date to the user's record in the DB.
    # 4. Email the user a link containing the token.
    
    print(f"Password reset requested for: {email}") # For now, just print to the console.

    return jsonify({'message': 'If an account with that email exists, a reset link has been sent.'}), 200    
